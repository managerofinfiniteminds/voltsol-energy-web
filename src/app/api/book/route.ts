export const dynamic = 'force-dynamic';
import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';
import { sql } from '@/lib/db';
import {
  sendAppointmentConfirmationEmail,
  sendAppointmentAlertEmail,
  type AppointmentEmailDetails,
} from '@/lib/booking-emails';

// In-memory rate limiter: ip -> list of timestamps
const rateLimitMap = new Map<string, number[]>();
const RATE_LIMIT_WINDOW_MS = 60 * 60 * 1000; // 1 hour
const RATE_LIMIT_MAX = 3;

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const timestamps = (rateLimitMap.get(ip) ?? []).filter(t => now - t < RATE_LIMIT_WINDOW_MS);
  if (timestamps.length >= RATE_LIMIT_MAX) {
    return false;
  }
  timestamps.push(now);
  rateLimitMap.set(ip, timestamps);
  return true;
}

const schema = z.object({
  slot_id: z.string().uuid('Valid slot required'),
  first_name: z.string().min(1, 'First name is required').max(100),
  last_name: z.string().min(1, 'Last name is required').max(100),
  email: z.string().email('Valid email required').max(255),
  phone: z.string().max(20).optional(),
  address: z.string().max(500).optional(),
  notes: z.string().max(2000).optional(),
  website: z.string().optional(), // honeypot
});

export async function POST(req: NextRequest) {
  const ip =
    req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ||
    req.headers.get('x-real-ip') ||
    '0.0.0.0';

  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: 'Invalid request body' }, { status: 400 });
  }

  const parsed = schema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { error: 'Validation failed', details: parsed.error.flatten().fieldErrors },
      { status: 422 }
    );
  }
  const data = parsed.data;

  // Honeypot check — lie to bots
  if (data.website && data.website.trim().length > 0) {
    return NextResponse.json({ success: true });
  }

  if (!checkRateLimit(ip)) {
    return NextResponse.json(
      { error: 'Too many bookings from this connection. Please try again later.' },
      { status: 429 }
    );
  }

  const email = data.email.trim().toLowerCase();

  try {
    // Re-check slot availability
    const slots = await sql`
      SELECT id, slot_date, start_time, end_time, label, max_bookings, current_bookings, is_available
      FROM availability_slots
      WHERE id = ${data.slot_id}
    `;
    if (slots.length === 0) {
      return NextResponse.json({ error: 'Slot not found' }, { status: 404 });
    }
    const slot = slots[0];
    if (!slot.is_available || slot.current_bookings >= slot.max_bookings) {
      return NextResponse.json(
        { error: 'Sorry, that time was just booked. Please pick another slot.' },
        { status: 409 }
      );
    }

    // Match to existing contact by email, if any
    const contacts = await sql`
      SELECT id FROM contacts WHERE LOWER(email) = ${email} ORDER BY created_at DESC LIMIT 1
    `;
    const contactId: number | null = contacts.length > 0 ? contacts[0].id : null;

    // Create appointment
    const appts = await sql`
      INSERT INTO appointments (slot_id, contact_id, first_name, last_name, email, phone, address, notes)
      VALUES (
        ${data.slot_id}, ${contactId},
        ${data.first_name.trim()}, ${data.last_name.trim()}, ${email},
        ${data.phone?.trim() || null}, ${data.address?.trim() || null}, ${data.notes?.trim() || null}
      )
      RETURNING id, magic_token
    `;
    const appointment = appts[0];

    // Increment slot bookings; close out if full
    await sql`
      UPDATE availability_slots
      SET current_bookings = current_bookings + 1,
          is_available = (current_bookings + 1 < max_bookings)
      WHERE id = ${data.slot_id}
    `;

    const emailDetails: AppointmentEmailDetails = {
      first_name: data.first_name.trim(),
      last_name: data.last_name.trim(),
      email,
      phone: data.phone?.trim() || null,
      address: data.address?.trim() || null,
      notes: data.notes?.trim() || null,
      magic_token: appointment.magic_token,
      slot_date: String(slot.slot_date).slice(0, 10),
      start_time: String(slot.start_time),
      end_time: String(slot.end_time),
    };

    // Send emails + log (non-blocking — errors don't fail the booking)
    Promise.allSettled([
      sendAppointmentConfirmationEmail(emailDetails).then(subject =>
        sql`
          INSERT INTO communication_log (appointment_id, contact_id, type, to_email, subject)
          VALUES (${appointment.id}, ${contactId}, 'appointment_confirmation', ${email}, ${subject})
        `
      ),
      sendAppointmentAlertEmail(emailDetails).then(subject =>
        sql`
          INSERT INTO communication_log (appointment_id, contact_id, type, to_email, subject)
          VALUES (${appointment.id}, ${contactId}, 'appointment_alert', ${process.env.SALES_ALERT_EMAIL || 'info@voltsolenergy.com'}, ${subject})
        `
      ),
    ]).then(results => {
      results.forEach((r, i) => {
        if (r.status === 'rejected') {
          console.error(`Booking email ${i} failed:`, r.reason);
        }
      });
    });

    return NextResponse.json({
      success: true,
      magic_token: appointment.magic_token,
      appointment_id: appointment.id,
    });
  } catch (err) {
    console.error('Booking failed:', err);
    return NextResponse.json(
      { error: 'Failed to book your appointment. Please try again.' },
      { status: 500 }
    );
  }
}
