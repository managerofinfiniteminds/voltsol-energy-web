export const dynamic = 'force-dynamic';
import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';
import { sql } from '@/lib/db';
import { getCampaignByCode } from '@/lib/campaigns';
import { scoreLead } from '@/lib/lead-scoring';
import { sendConfirmationEmail, sendSalesAlertEmail } from '@/lib/email';

export const dynamic = 'force-dynamic';
// In-memory rate limiter: ip -> list of timestamps
export const dynamic = 'force-dynamic';
const rateLimitMap = new Map<string, number[]>();
export const dynamic = 'force-dynamic';
const RATE_LIMIT_WINDOW_MS = 15 * 60 * 1000; // 15 minutes
export const dynamic = 'force-dynamic';
const RATE_LIMIT_MAX = 5;

export const dynamic = 'force-dynamic';
function checkRateLimit(ip: string): boolean {
export const dynamic = 'force-dynamic';
  const now = Date.now();
export const dynamic = 'force-dynamic';
  const timestamps = (rateLimitMap.get(ip) ?? []).filter(t => now - t < RATE_LIMIT_WINDOW_MS);
export const dynamic = 'force-dynamic';
  if (timestamps.length >= RATE_LIMIT_MAX) {
export const dynamic = 'force-dynamic';
    return false;
export const dynamic = 'force-dynamic';
  }
export const dynamic = 'force-dynamic';
  timestamps.push(now);
export const dynamic = 'force-dynamic';
  rateLimitMap.set(ip, timestamps);
export const dynamic = 'force-dynamic';
  return true;
export const dynamic = 'force-dynamic';
}

export const dynamic = 'force-dynamic';
function normalizePhone(raw: string): string {
export const dynamic = 'force-dynamic';
  const digits = raw.replace(/\D/g, '');
export const dynamic = 'force-dynamic';
  if (digits.length === 10) {
export const dynamic = 'force-dynamic';
    return `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6)}`;
export const dynamic = 'force-dynamic';
  }
export const dynamic = 'force-dynamic';
  if (digits.length === 11 && digits[0] === '1') {
export const dynamic = 'force-dynamic';
    return `(${digits.slice(1, 4)}) ${digits.slice(4, 7)}-${digits.slice(7)}`;
export const dynamic = 'force-dynamic';
  }
export const dynamic = 'force-dynamic';
  return raw;
export const dynamic = 'force-dynamic';
}

export const dynamic = 'force-dynamic';
const schema = z.object({
export const dynamic = 'force-dynamic';
  first_name: z.string().min(1, 'First name is required').max(100),
export const dynamic = 'force-dynamic';
  last_name: z.string().min(1, 'Last name is required').max(100),
export const dynamic = 'force-dynamic';
  email: z.string().email('Valid email required').max(255),
export const dynamic = 'force-dynamic';
  phone: z.string().min(7, 'Phone number required').max(20),
export const dynamic = 'force-dynamic';
  street_address: z.string().min(1, 'Street address is required').max(500),
export const dynamic = 'force-dynamic';
  city: z.string().min(1, 'City is required').max(100),
export const dynamic = 'force-dynamic';
  state: z.string().min(1, 'State is required').max(50),
export const dynamic = 'force-dynamic';
  zip: z.string().min(5, 'ZIP code is required').max(10),
export const dynamic = 'force-dynamic';
  owns_home: z.enum(['Yes, I own it', 'No, I rent', 'Not sure']),
export const dynamic = 'force-dynamic';
  monthly_bill: z.enum(['Under $100', '$100–$200', '$200–$300', '$300+']),
export const dynamic = 'force-dynamic';
  best_contact_time: z.enum(['Morning (8am–12pm)', 'Afternoon (12–5pm)', 'Evening (5–8pm)', 'Weekends']),
export const dynamic = 'force-dynamic';
  notes: z.string().max(2000).optional(),
export const dynamic = 'force-dynamic';
  campaign_code: z.string().max(50).optional(),
export const dynamic = 'force-dynamic';
  website: z.string().optional(), // honeypot
export const dynamic = 'force-dynamic';
});

export const dynamic = 'force-dynamic';
export async function POST(req: NextRequest) {
export const dynamic = 'force-dynamic';
  // Get client IP
export const dynamic = 'force-dynamic';
  const ip =
export const dynamic = 'force-dynamic';
    req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ||
export const dynamic = 'force-dynamic';
    req.headers.get('x-real-ip') ||
export const dynamic = 'force-dynamic';
    '0.0.0.0';

export const dynamic = 'force-dynamic';
  let body: unknown;
export const dynamic = 'force-dynamic';
  try {
export const dynamic = 'force-dynamic';
    body = await req.json();
export const dynamic = 'force-dynamic';
  } catch {
export const dynamic = 'force-dynamic';
    return NextResponse.json({ error: 'Invalid request body' }, { status: 400 });
export const dynamic = 'force-dynamic';
  }

export const dynamic = 'force-dynamic';
  // Parse and validate
export const dynamic = 'force-dynamic';
  const parsed = schema.safeParse(body);
export const dynamic = 'force-dynamic';
  if (!parsed.success) {
export const dynamic = 'force-dynamic';
    return NextResponse.json(
export const dynamic = 'force-dynamic';
      { error: 'Validation failed', details: parsed.error.flatten().fieldErrors },
export const dynamic = 'force-dynamic';
      { status: 422 }
export const dynamic = 'force-dynamic';
    );
export const dynamic = 'force-dynamic';
  }

export const dynamic = 'force-dynamic';
  const data = parsed.data;

export const dynamic = 'force-dynamic';
  // Honeypot check — lie to bots
export const dynamic = 'force-dynamic';
  if (data.website && data.website.trim().length > 0) {
export const dynamic = 'force-dynamic';
    return NextResponse.json({ success: true });
export const dynamic = 'force-dynamic';
  }

export const dynamic = 'force-dynamic';
  // Rate limit
export const dynamic = 'force-dynamic';
  if (!checkRateLimit(ip)) {
export const dynamic = 'force-dynamic';
    return NextResponse.json(
export const dynamic = 'force-dynamic';
      { error: 'Too many requests. Please try again in a few minutes.' },
export const dynamic = 'force-dynamic';
      { status: 429 }
export const dynamic = 'force-dynamic';
    );
export const dynamic = 'force-dynamic';
  }

export const dynamic = 'force-dynamic';
  // Sanitize
export const dynamic = 'force-dynamic';
  const sanitized = {
export const dynamic = 'force-dynamic';
    first_name: data.first_name.trim(),
export const dynamic = 'force-dynamic';
    last_name: data.last_name.trim(),
export const dynamic = 'force-dynamic';
    email: data.email.trim().toLowerCase(),
export const dynamic = 'force-dynamic';
    phone: normalizePhone(data.phone.trim()),
export const dynamic = 'force-dynamic';
    street_address: data.street_address.trim(),
export const dynamic = 'force-dynamic';
    city: data.city.trim(),
export const dynamic = 'force-dynamic';
    state: data.state.trim(),
export const dynamic = 'force-dynamic';
    zip: data.zip.trim(),
export const dynamic = 'force-dynamic';
    owns_home: data.owns_home,
export const dynamic = 'force-dynamic';
    monthly_bill: data.monthly_bill,
export const dynamic = 'force-dynamic';
    best_contact_time: data.best_contact_time,
export const dynamic = 'force-dynamic';
    notes: data.notes?.trim() || null,
export const dynamic = 'force-dynamic';
  };

export const dynamic = 'force-dynamic';
  // Look up campaign
export const dynamic = 'force-dynamic';
  let campaign_id: number | null = null;
export const dynamic = 'force-dynamic';
  let campaign_name: string | undefined;
export const dynamic = 'force-dynamic';
  if (data.campaign_code) {
export const dynamic = 'force-dynamic';
    const campaign = await getCampaignByCode(data.campaign_code);
export const dynamic = 'force-dynamic';
    if (campaign) {
export const dynamic = 'force-dynamic';
      campaign_id = campaign.id;
export const dynamic = 'force-dynamic';
      campaign_name = campaign.name;
export const dynamic = 'force-dynamic';
    }
export const dynamic = 'force-dynamic';
  }

export const dynamic = 'force-dynamic';
  // Lead scoring
export const dynamic = 'force-dynamic';
  const lead_score = scoreLead(sanitized.owns_home, sanitized.monthly_bill);

export const dynamic = 'force-dynamic';
  // Insert into DB
export const dynamic = 'force-dynamic';
  let insertedId: number;
export const dynamic = 'force-dynamic';
  try {
export const dynamic = 'force-dynamic';
    const rows = await sql`
export const dynamic = 'force-dynamic';
      INSERT INTO contacts (
export const dynamic = 'force-dynamic';
        first_name, last_name, email, phone,
export const dynamic = 'force-dynamic';
        street_address, city, state, zip,
export const dynamic = 'force-dynamic';
        owns_home, monthly_bill, best_contact_time,
export const dynamic = 'force-dynamic';
        notes, campaign_id, lead_score
export const dynamic = 'force-dynamic';
      ) VALUES (
export const dynamic = 'force-dynamic';
        ${sanitized.first_name}, ${sanitized.last_name}, ${sanitized.email}, ${sanitized.phone},
export const dynamic = 'force-dynamic';
        ${sanitized.street_address}, ${sanitized.city}, ${sanitized.state}, ${sanitized.zip},
export const dynamic = 'force-dynamic';
        ${sanitized.owns_home}, ${sanitized.monthly_bill}, ${sanitized.best_contact_time},
export const dynamic = 'force-dynamic';
        ${sanitized.notes}, ${campaign_id}, ${lead_score}
export const dynamic = 'force-dynamic';
      )
export const dynamic = 'force-dynamic';
      RETURNING id, created_at
export const dynamic = 'force-dynamic';
    `;
export const dynamic = 'force-dynamic';
    insertedId = rows[0].id;
export const dynamic = 'force-dynamic';
    const createdAt = rows[0].created_at;

export const dynamic = 'force-dynamic';
    // Send emails (non-blocking — errors don't fail the request)
export const dynamic = 'force-dynamic';
    const contactForEmail = {
export const dynamic = 'force-dynamic';
      ...sanitized,
export const dynamic = 'force-dynamic';
      lead_score,
export const dynamic = 'force-dynamic';
      campaign_name,
export const dynamic = 'force-dynamic';
      created_at: createdAt,
export const dynamic = 'force-dynamic';
    };

export const dynamic = 'force-dynamic';
    Promise.allSettled([
export const dynamic = 'force-dynamic';
      sendConfirmationEmail(contactForEmail),
export const dynamic = 'force-dynamic';
      sendSalesAlertEmail(contactForEmail),
export const dynamic = 'force-dynamic';
    ]).then(results => {
export const dynamic = 'force-dynamic';
      results.forEach((r, i) => {
export const dynamic = 'force-dynamic';
        if (r.status === 'rejected') {
export const dynamic = 'force-dynamic';
          console.error(`Email ${i} failed:`, r.reason);
export const dynamic = 'force-dynamic';
        }
export const dynamic = 'force-dynamic';
      });
export const dynamic = 'force-dynamic';
    });
export const dynamic = 'force-dynamic';
  } catch (err) {
export const dynamic = 'force-dynamic';
    console.error('DB insert failed:', err);
export const dynamic = 'force-dynamic';
    return NextResponse.json({ error: 'Failed to save your request. Please try again.' }, { status: 500 });
export const dynamic = 'force-dynamic';
  }

export const dynamic = 'force-dynamic';
  return NextResponse.json({ success: true, id: insertedId });
export const dynamic = 'force-dynamic';
}
