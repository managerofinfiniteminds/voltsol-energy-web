export const dynamic = 'force-dynamic';

import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';
import { sql } from '@/lib/db';
import {
  OwnsHomeSchema,
  MonthlyBillSchema,
  TimelineSchema,
  UtilitySchema,
  RoofShadeSchema,
  mapOwnsHome,
  mapMonthlyBill,
} from '@/lib/engine-enums';
import { scoreLead } from '@/lib/engine-scoring';
import { sendConfirmationEmail, sendSalesAlertEmail } from '@/lib/email';
import {
  MONTHLY_BILL_LABELS,
  TIMELINE_LABELS,
} from '@/lib/engine-enums';

// ── Rate limiting (in-memory, same pattern as /api/market/leads) ─────────────
const rateLimitMap = new Map<string, number[]>();
const RATE_LIMIT_WINDOW_MS = 15 * 60 * 1000; // 15 minutes
const RATE_LIMIT_MAX = 5;

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const timestamps = (rateLimitMap.get(ip) ?? []).filter(
    (t) => now - t < RATE_LIMIT_WINDOW_MS
  );
  if (timestamps.length >= RATE_LIMIT_MAX) return false;
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

// ── Validation schema ────────────────────────────────────────────────────────
// Accepts either canonical values OR legacy values (will be mapped)
const consentSchema = z.object({
  version: z.string().max(50),
  form_id: z.string().max(100).optional(),
  timestamp: z.string().optional(),
  ip: z.string().optional(),
  wording: z.string().min(10),
});

const attributionSchema = z
  .object({
    utm_source: z.string().optional(),
    utm_medium: z.string().optional(),
    utm_campaign: z.string().optional(),
    utm_term: z.string().optional(),
    utm_content: z.string().optional(),
    referrer: z.string().optional(),
    session_id: z.string().optional(),
    device: z.string().optional(),
  })
  .optional();

const schema = z.object({
  // Required identity
  first_name: z.string().min(1).max(100),
  last_name: z.string().min(1).max(100),
  email: z.string().email().max(255),
  phone: z.string().min(7).max(30),
  consent: consentSchema,

  // Optional address
  street_address: z.string().max(500).optional(),
  city: z.string().max(100).optional(),
  state: z.string().max(50).optional(),
  zip: z.string().max(10).optional(),

  // Qualifying signals (accept canonical OR legacy values)
  owns_home: z.string().max(50).optional(),
  monthly_bill: z.string().max(50).optional(),
  timeline: z.union([TimelineSchema, z.string().max(50)]).optional(),
  utility: z.union([UtilitySchema, z.string().max(50)]).optional(),
  roof_shade: z.union([RoofShadeSchema, z.string().max(50)]).optional(),

  // Intent & notes
  intent: z.string().max(100).optional(),
  notes: z.string().max(2000).optional(),

  // Source tracking
  source_consumer: z.string().max(100).optional(),
  source_page: z.string().max(500).optional(),
  vertical: z.string().max(50).optional(),

  // Attribution
  attribution: attributionSchema,

  // Tenant override (for future multi-tenant)
  tenant_id: z.number().int().positive().optional(),

  // Honeypot
  website: z.string().optional(),
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
    return NextResponse.json(
      { ok: false, error: 'Invalid request body' },
      { status: 400 }
    );
  }

  // Validate
  const parsed = schema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      {
        ok: false,
        error: 'Validation failed',
        details: parsed.error.flatten().fieldErrors,
      },
      { status: 400 }
    );
  }

  const data = parsed.data;

  // Honeypot: silently 200-OK no-write
  if (data.website && data.website.trim().length > 0) {
    return NextResponse.json({ ok: true, id: 0, score: 'standard' });
  }

  // Rate limit
  if (!checkRateLimit(ip)) {
    return NextResponse.json(
      { ok: false, error: 'Too many requests. Please try again in a few minutes.' },
      { status: 429 }
    );
  }

  // Sanitize & normalize
  const firstName = data.first_name.trim();
  const lastName = data.last_name.trim();
  const email = data.email.trim().toLowerCase();
  const phone = normalizePhone(data.phone.trim());
  const streetAddress = data.street_address?.trim() || null;
  const city = data.city?.trim() || null;
  const state = data.state?.trim() || null;
  const zip = data.zip?.trim() || null;
  const intent = data.intent?.trim() || null;
  const notes = data.notes?.trim() || null;
  const sourceConsumer = data.source_consumer?.trim() || 'voltsol_site';
  const sourcePage = data.source_page?.trim() || null;
  const vertical = data.vertical?.trim() || 'solar';
  const tenantId = data.tenant_id || 1; // Default to Hugo

  // Map qualifying signals to canonical values
  const ownsHome = mapOwnsHome(data.owns_home);
  const monthlyBill = mapMonthlyBill(data.monthly_bill);

  // Optional signals: pass through if canonical, otherwise null
  const timeline = TimelineSchema.safeParse(data.timeline).success
    ? data.timeline
    : null;
  // Accept canonical enum values OR a free-text/dropdown utility name (<=120 chars).
  const utility = UtilitySchema.safeParse(data.utility).success
    ? data.utility
    : (typeof data.utility === 'string' && data.utility.trim()
        ? data.utility.trim().slice(0, 120)
        : null);
  const roofShade = RoofShadeSchema.safeParse(data.roof_shade).success
    ? data.roof_shade
    : null;

  // Score the lead
  const score = scoreLead({ ownsHome, monthlyBill });

  // Build consent_json with verbatim wording
  const consentJson = {
    version: data.consent.version,
    form_id: data.consent.form_id || null,
    timestamp: data.consent.timestamp || new Date().toISOString(),
    ip: data.consent.ip || ip,
    wording: data.consent.wording,
  };

  // Build attribution_json
  const attributionJson = data.attribution
    ? {
        utm_source: data.attribution.utm_source || null,
        utm_medium: data.attribution.utm_medium || null,
        utm_campaign: data.attribution.utm_campaign || null,
        utm_term: data.attribution.utm_term || null,
        utm_content: data.attribution.utm_content || null,
        referrer: data.attribution.referrer || null,
        session_id: data.attribution.session_id || null,
        device: data.attribution.device || null,
      }
    : null;

  // ── Lightweight dedupe: check for same phone OR email within last 24h ──────
  const normalizedPhone = phone.replace(/\D/g, ''); // strip formatting for comparison
  const oneDayAgo = new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString();

  let existingLead: { id: number; notes: string | null } | null = null;
  try {
    const dupes = await sql`
      SELECT id, notes
      FROM engine_leads
      WHERE tenant_id = ${tenantId}
        AND created_at >= ${oneDayAgo}
        AND (
          phone SIMILAR TO ${`%${normalizedPhone}%`}
          OR LOWER(email) = ${email.toLowerCase()}
        )
      LIMIT 1
    `;
    if (dupes.length > 0) {
      existingLead = dupes[0] as { id: number; notes: string | null };
    }
  } catch (err) {
    console.error('[engine/v1/leads] Dedupe check failed:', err);
    // Non-fatal; proceed with insert
  }

  // If duplicate found, update notes and return existing ID (skip sales alert)
  if (existingLead) {
    const dupNote = `[dup submit via quickform ${new Date().toISOString()}]`;
    const updatedNotes = existingLead.notes ? `${existingLead.notes}\n${dupNote}` : dupNote;
    try {
      await sql`
        UPDATE engine_leads
        SET notes = ${updatedNotes}, updated_at = NOW()
        WHERE id = ${existingLead.id}
      `;
    } catch (err) {
      console.error('[engine/v1/leads] Dedupe update failed:', err);
    }
    // Send confirmation email to the lead (they re-submitted, so acknowledge it)
    const contactForEmail = {
      first_name: firstName,
      last_name: lastName,
      email,
      phone,
      street_address: streetAddress || '',
      city: city || '',
      state: state || '',
      zip: zip || '',
      owns_home: ownsHome === 'own' ? 'Yes' : ownsHome === 'rent' ? 'No (renting)' : '—',
      monthly_bill: monthlyBill
        ? (MONTHLY_BILL_LABELS as Record<string, string>)[monthlyBill] ?? monthlyBill
        : '—',
      best_contact_time: '—', // QuickForm doesn't collect this
      notes: notes,
      lead_score: score,
    };
    sendConfirmationEmail(contactForEmail).catch((err) =>
      console.error('[engine/v1/leads] Confirmation email failed:', err)
    );
    return NextResponse.json({ ok: true, id: existingLead.id, score, duplicate: true });
  }

  // Insert into engine_leads
  let insertedId: number;
  try {
    const rows = await sql`
      INSERT INTO engine_leads (
        tenant_id, vertical, source_consumer, source_page,
        first_name, last_name, email, phone,
        street_address, city, state, zip,
        owns_home, monthly_bill, timeline, utility, roof_shade,
        intent, notes,
        score, status,
        attribution_json, consent_json, ip_address
      ) VALUES (
        ${tenantId}, ${vertical}, ${sourceConsumer}, ${sourcePage},
        ${firstName}, ${lastName}, ${email}, ${phone},
        ${streetAddress}, ${city}, ${state}, ${zip},
        ${ownsHome}, ${monthlyBill}, ${timeline}, ${utility}, ${roofShade},
        ${intent}, ${notes},
        ${score}, 'new',
        ${attributionJson ? JSON.stringify(attributionJson) : null},
        ${JSON.stringify(consentJson)}, ${ip}
      )
      RETURNING id
    `;
    insertedId = rows[0].id;
  } catch (err) {
    console.error('[engine/v1/leads] DB insert failed:', err);
    return NextResponse.json(
      { ok: false, error: 'Failed to save lead. Please try again.' },
      { status: 500 }
    );
  }

  // Send emails (non-blocking — errors don't fail the request).
  // Confirmation to the lead + alert to info@. Uses shared Resend lib.
  const billLabel = monthlyBill
    ? (MONTHLY_BILL_LABELS as Record<string, string>)[monthlyBill] ?? monthlyBill
    : '—';
  const timelineLabel = timeline
    ? (TIMELINE_LABELS as Record<string, string>)[timeline as string] ?? String(timeline)
    : '—';
  const contactForEmail = {
    first_name: firstName,
    last_name: lastName,
    email,
    phone,
    street_address: streetAddress || '',
    city: city || '',
    state: state || '',
    zip: zip || '',
    owns_home: ownsHome === 'own' ? 'Yes' : ownsHome === 'rent' ? 'No (renting)' : '—',
    monthly_bill: billLabel,
    best_contact_time: timelineLabel,
    notes: notes,
    lead_score: score,
    campaign_name: attributionJson?.utm_campaign || undefined,
    created_at: new Date().toISOString(),
  };

  Promise.allSettled([
    sendConfirmationEmail(contactForEmail),
    sendSalesAlertEmail(contactForEmail),
  ]).then((results) => {
    results.forEach((r, i) => {
      if (r.status === 'rejected') {
        console.error(`[engine/v1/leads] Email ${i} failed:`, r.reason);
      }
    });
  });

  return NextResponse.json({ ok: true, id: insertedId, score });
}
