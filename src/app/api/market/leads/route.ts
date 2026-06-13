export const dynamic = 'force-dynamic';

import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';
import { sql } from '@/lib/db';

// ── Rate limiting (in-memory, same pattern as /api/inquiries) ──────────────
const rateLimitMap = new Map<string, number[]>();
const RATE_LIMIT_WINDOW_MS = 15 * 60 * 1000; // 15 minutes
const RATE_LIMIT_MAX = 5;

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const timestamps = (rateLimitMap.get(ip) ?? []).filter(t => now - t < RATE_LIMIT_WINDOW_MS);
  if (timestamps.length >= RATE_LIMIT_MAX) return false;
  timestamps.push(now);
  rateLimitMap.set(ip, timestamps);
  return true;
}

function normalizePhone(raw: string): string {
  const digits = raw.replace(/\D/g, '');
  if (digits.length === 10) return `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6)}`;
  if (digits.length === 11 && digits[0] === '1') return `(${digits.slice(1, 4)}) ${digits.slice(4, 7)}-${digits.slice(7)}`;
  return raw;
}

// ── Scoring (mirrors existing lead-scoring.ts logic) ──────────────────────
function scoreMarketLead(ownsHome: string, monthlyBill: string): { score: string; creditCost: number } {
  if (ownsHome === 'Yes, I own it' && (monthlyBill === '$200–$300' || monthlyBill === '$300+')) {
    return { score: 'hot_lead', creditCost: 3 };
  }
  if (ownsHome === 'No, I rent') {
    return { score: 'low_priority', creditCost: 1 };
  }
  return { score: 'standard', creditCost: 2 };
}

// ── Validation schema ───────────────────────────────────────────────────────
const schema = z.object({
  first_name:       z.string().min(1).max(100),
  last_name:        z.string().min(1).max(100),
  email:            z.string().email().max(255),
  phone:            z.string().min(7).max(30),
  city:             z.string().min(1).max(100).optional(),
  owns_home:        z.enum(['Yes, I own it', 'No, I rent', 'Not sure']),
  monthly_bill:     z.enum(['Under $100', '$100–$200', '$200–$300', '$300+']),
  website:          z.string().optional(),           // honeypot
  market_slug:      z.string().max(300).optional(),  // e.g. solar/california/placer-county/roseville
  vertical:         z.string().max(50).optional(),
  source_page:      z.string().max(500).optional(),
  intent:           z.string().max(100).optional(),
  // Consent fields (sent from the form to ensure wording is stored verbatim)
  consent_version:  z.string().max(20),
  consent_form_id:  z.string().max(100),
  consent_wording:  z.string().min(10),
});

export async function POST(req: NextRequest) {
  const ip =
    req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ||
    req.headers.get('x-real-ip') ||
    '0.0.0.0';

  // Parse body
  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: 'Invalid request body' }, { status: 400 });
  }

  // Validate
  const parsed = schema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { error: 'Validation failed', details: parsed.error.flatten().fieldErrors },
      { status: 422 }
    );
  }

  const data = parsed.data;

  // Honeypot
  if (data.website && data.website.trim().length > 0) {
    return NextResponse.json({ success: true }); // lie to bots
  }

  // Rate limit
  if (!checkRateLimit(ip)) {
    return NextResponse.json(
      { error: 'Too many requests. Please try again in a few minutes.' },
      { status: 429 }
    );
  }

  // Sanitize
  const firstName    = data.first_name.trim();
  const lastName     = data.last_name.trim();
  const email        = data.email.trim().toLowerCase();
  const phone        = normalizePhone(data.phone.trim());
  const city         = data.city?.trim() || null;
  const vertical     = (data.vertical?.trim() || 'solar').slice(0, 50);
  const sourcePage   = data.source_page?.trim() || null;
  const intent       = data.intent?.trim() || null;
  const marketSlug   = data.market_slug?.trim() || null;

  // Score
  const { score, creditCost } = scoreMarketLead(data.owns_home, data.monthly_bill);

  // Resolve market_id from slug (optional — won't block submission if market not seeded yet)
  let marketId: number | null = null;
  if (marketSlug) {
    try {
      const rows = await sql`SELECT id FROM marketplace_markets WHERE slug = ${marketSlug} LIMIT 1`;
      if (rows.length > 0) marketId = rows[0].id;
    } catch {
      // Non-fatal — market may not be seeded yet
    }
  }

  // Build consent_json (wording sent verbatim from the browser form)
  const consentJson = {
    version:   data.consent_version,
    form_id:   data.consent_form_id,
    timestamp: new Date().toISOString(),
    ip,
    wording:   data.consent_wording,
  };

  // Determine owner_reserved_until (15-min owner window)
  const ownerReservedUntil = new Date(Date.now() + 15 * 60 * 1000).toISOString();

  // Insert lead
  let insertedId: number;
  try {
    const rows = await sql`
      INSERT INTO marketplace_leads (
        market_id, vertical,
        first_name, last_name, email, phone,
        city, state,
        owns_home, monthly_bill,
        score, credit_cost,
        source_page, intent,
        status, owner_reserved_until,
        consent_json, ip_address
      ) VALUES (
        ${marketId}, ${vertical},
        ${firstName}, ${lastName}, ${email}, ${phone},
        ${city}, 'california',
        ${data.owns_home}, ${data.monthly_bill},
        ${score}, ${creditCost},
        ${sourcePage}, ${intent},
        'owner_reserved', ${ownerReservedUntil},
        ${JSON.stringify(consentJson)}, ${ip}
      )
      RETURNING id
    `;
    insertedId = rows[0].id;
  } catch (err) {
    console.error('[market/leads] DB insert failed:', err);
    return NextResponse.json(
      { error: 'Failed to save your request. Please try again.' },
      { status: 500 }
    );
  }

  return NextResponse.json({ success: true, id: insertedId });
}
