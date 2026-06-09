export const dynamic = 'force-dynamic';
import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';
import { sql } from '@/lib/db';
import { getCampaignByCode } from '@/lib/campaigns';
import { scoreLead } from '@/lib/lead-scoring';
import { sendConfirmationEmail, sendSalesAlertEmail } from '@/lib/email';

// In-memory rate limiter: ip -> list of timestamps
const rateLimitMap = new Map<string, number[]>();
const RATE_LIMIT_WINDOW_MS = 15 * 60 * 1000; // 15 minutes
const RATE_LIMIT_MAX = 5;

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

function normalizePhone(raw: string): string {
  const digits = raw.replace(/\D/g, '');
  if (digits.length === 10) {
    return `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6)}`;
  }
  if (digits.length === 11 && digits[0] === '1') {
    return `(${digits.slice(1, 4)}) ${digits.slice(4, 7)}-${digits.slice(7)}`;
  }
  return raw;
}

const schema = z.object({
  first_name: z.string().min(1, 'First name is required').max(100),
  last_name: z.string().min(1, 'Last name is required').max(100),
  email: z.string().email('Valid email required').max(255),
  phone: z.string().min(7, 'Phone number required').max(20),
  street_address: z.string().min(1, 'Street address is required').max(500),
  city: z.string().min(1, 'City is required').max(100),
  state: z.string().min(1, 'State is required').max(50),
  zip: z.string().min(5, 'ZIP code is required').max(10),
  owns_home: z.enum(['Yes, I own it', 'No, I rent', 'Not sure']),
  monthly_bill: z.enum(['Under $100', '$100\u2013$200', '$200\u2013$300', '$300+']),
  best_contact_time: z.enum(['Morning (8am\u201312pm)', 'Afternoon (12\u20135pm)', 'Evening (5\u20138pm)', 'Weekends']),
  notes: z.string().max(2000).optional(),
  campaign_code: z.string().max(50).optional(),
  website: z.string().optional(), // honeypot
  // Phase 3 attribution fields (all optional — backward compatible)
  source:            z.string().max(50).optional(),
  rep:               z.string().max(100).optional(),
  utm_source:        z.string().max(120).optional(),
  utm_medium:        z.string().max(120).optional(),
  utm_campaign:      z.string().max(120).optional(),
  referrer:          z.string().max(2000).optional(),
  estimated_savings: z.number().int().nonnegative().optional(),
});

export async function POST(req: NextRequest) {
  // Get client IP
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

  // Parse and validate
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

  // Rate limit
  if (!checkRateLimit(ip)) {
    return NextResponse.json(
      { error: 'Too many requests. Please try again in a few minutes.' },
      { status: 429 }
    );
  }

  // Sanitize
  const sanitized = {
    first_name: data.first_name.trim(),
    last_name: data.last_name.trim(),
    email: data.email.trim().toLowerCase(),
    phone: normalizePhone(data.phone.trim()),
    street_address: data.street_address.trim(),
    city: data.city.trim(),
    state: data.state.trim(),
    zip: data.zip.trim(),
    owns_home: data.owns_home,
    monthly_bill: data.monthly_bill,
    best_contact_time: data.best_contact_time,
    notes: data.notes?.trim() || null,
    source:            data.source?.trim() || null,
    rep:               data.rep?.trim() || null,
    utm_source:        data.utm_source?.trim() || null,
    utm_medium:        data.utm_medium?.trim() || null,
    utm_campaign:      data.utm_campaign?.trim() || null,
    referrer:          data.referrer?.trim() || null,
    estimated_savings: data.estimated_savings ?? null,
  };

  // Look up campaign
  let campaign_id: number | null = null;
  let campaign_name: string | undefined;
  if (data.campaign_code) {
    const campaign = await getCampaignByCode(data.campaign_code);
    if (campaign) {
      campaign_id = campaign.id;
      campaign_name = campaign.name;
    }
  }

  // Lead scoring
  const lead_score = scoreLead(sanitized.owns_home, sanitized.monthly_bill);

  // Insert into DB
  let insertedId: number;
  try {
    const rows = await sql`
      INSERT INTO contacts (
        first_name, last_name, email, phone,
        street_address, city, state, zip,
        owns_home, monthly_bill, best_contact_time,
        notes, campaign_id, lead_score,
        source, rep, utm_source, utm_medium, utm_campaign,
        referrer, estimated_savings
      ) VALUES (
        ${sanitized.first_name}, ${sanitized.last_name}, ${sanitized.email}, ${sanitized.phone},
        ${sanitized.street_address}, ${sanitized.city}, ${sanitized.state}, ${sanitized.zip},
        ${sanitized.owns_home}, ${sanitized.monthly_bill}, ${sanitized.best_contact_time},
        ${sanitized.notes}, ${campaign_id}, ${lead_score},
        ${sanitized.source}, ${sanitized.rep}, ${sanitized.utm_source}, ${sanitized.utm_medium}, ${sanitized.utm_campaign},
        ${sanitized.referrer}, ${sanitized.estimated_savings}
      )
      RETURNING id, created_at
    `;
    insertedId = rows[0].id;
    const createdAt = rows[0].created_at;

    // Insert lead_created event for funnel analytics (non-blocking)
    sql`
      INSERT INTO lead_events (
        event_type, campaign_code, source, rep,
        utm_source, utm_medium, utm_campaign,
        meta
      ) VALUES (
        'lead_created',
        ${data.campaign_code ?? null},
        ${sanitized.source},
        ${sanitized.rep},
        ${sanitized.utm_source},
        ${sanitized.utm_medium},
        ${sanitized.utm_campaign},
        ${JSON.stringify({ contact_id: insertedId, lead_score })}
      )
    `.catch((err: unknown) => console.error('lead_created event insert failed:', err));

    // Send emails (non-blocking — errors don't fail the request)
    const contactForEmail = {
      ...sanitized,
      lead_score,
      campaign_name,
      created_at: createdAt,
    };

    Promise.allSettled([
      sendConfirmationEmail(contactForEmail),
      sendSalesAlertEmail(contactForEmail),
    ]).then(results => {
      results.forEach((r, i) => {
        if (r.status === 'rejected') {
          console.error(`Email ${i} failed:`, r.reason);
        }
      });
    });
  } catch (err) {
    console.error('DB insert failed:', err);
    return NextResponse.json({ error: 'Failed to save your request. Please try again.' }, { status: 500 });
  }

  return NextResponse.json({ success: true, id: insertedId });
}
