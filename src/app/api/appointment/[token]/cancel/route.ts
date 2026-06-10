export const dynamic = 'force-dynamic';
import { NextRequest, NextResponse } from 'next/server';
import { sql } from '@/lib/db';
import { sendCancellationEmail, type AppointmentEmailDetails } from '@/lib/booking-emails';

const TOKEN_RE = /^[a-f0-9]{64}$/;

export async function POST(
  _req: NextRequest,
  { params }: { params: { token: string } }
) {
  const { token } = params;
  if (!TOKEN_RE.test(token)) {
    return NextResponse.json({ error: 'Not found' }, { status: 404 });
  }

  try {
    const rows = await sql`
      SELECT
        a.id, a.slot_id, a.contact_id, a.first_name, a.last_name, a.email,
        a.phone, a.address, a.notes, a.status, a.magic_token,
        s.slot_date, s.start_time, s.end_time
      FROM appointments a
      LEFT JOIN availability_slots s ON s.id = a.slot_id
      WHERE a.magic_token = ${token}
    `;
    if (rows.length === 0) {
      return NextResponse.json({ error: 'Not found' }, { status: 404 });
    }
    const appt = rows[0];

    if (appt.status === 'cancelled') {
      return NextResponse.json({ success: true, status: 'cancelled' });
    }
    if (appt.status !== 'confirmed') {
      return NextResponse.json(
        { error: 'This appointment can no longer be cancelled.' },
        { status: 409 }
      );
    }

    await sql`
      UPDATE appointments
      SET status = 'cancelled', updated_at = now()
      WHERE id = ${appt.id}
    `;

    if (appt.slot_id) {
      await sql`
        UPDATE availability_slots
        SET current_bookings = GREATEST(current_bookings - 1, 0),
            is_available = true
        WHERE id = ${appt.slot_id}
      `;
    }

    // Send cancellation email + log (non-blocking)
    if (appt.slot_date) {
      const emailDetails: AppointmentEmailDetails = {
        first_name: appt.first_name,
        last_name: appt.last_name,
        email: appt.email,
        phone: appt.phone,
        address: appt.address,
        notes: appt.notes,
        magic_token: appt.magic_token,
        slot_date: String(appt.slot_date).slice(0, 10),
        start_time: String(appt.start_time),
        end_time: String(appt.end_time),
      };
      sendCancellationEmail(emailDetails)
        .then(subject =>
          sql`
            INSERT INTO communication_log (appointment_id, contact_id, type, to_email, subject)
            VALUES (${appt.id}, ${appt.contact_id}, 'appointment_cancellation', ${appt.email}, ${subject})
          `
        )
        .catch((err: unknown) => console.error('Cancellation email failed:', err));
    }

    return NextResponse.json({ success: true, status: 'cancelled' });
  } catch (err) {
    console.error('Cancellation failed:', err);
    return NextResponse.json(
      { error: 'Failed to cancel the appointment. Please try again.' },
      { status: 500 }
    );
  }
}
