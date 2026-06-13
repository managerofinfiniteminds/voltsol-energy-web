/**
 * VoltSol Lead Engine — Shared Ingest Helper
 * Used by /api/inquiries, /api/market/leads, and /api/engine/v1/leads
 * to write leads to the canonical engine_leads table.
 */

import { sql } from '@/lib/db';
import {
  mapOwnsHome,
  mapMonthlyBill,
  TimelineSchema,
  UtilitySchema,
  RoofShadeSchema,
  type Timeline,
  type Utility,
  type RoofShade,
  type LeadScore,
} from '@/lib/engine-enums';
import { scoreLead } from '@/lib/engine-scoring';

export interface EngineLeadPayload {
  // Identity (required)
  firstName: string;
  lastName: string;
  email: string;
  phone: string;

  // Address (optional)
  streetAddress?: string | null;
  city?: string | null;
  state?: string | null;
  zip?: string | null;

  // Qualifying signals (accept legacy or canonical)
  ownsHome?: string | null;
  monthlyBill?: string | null;
  timeline?: string | null;
  utility?: string | null;
  roofShade?: string | null;

  // Intent & notes
  intent?: string | null;
  notes?: string | null;

  // Source tracking
  sourceConsumer: string; // voltsol_site | seo_city_page
  sourcePage?: string | null;
  vertical?: string;
  tenantId?: number;

  // Attribution
  attribution?: {
    utm_source?: string | null;
    utm_medium?: string | null;
    utm_campaign?: string | null;
    utm_term?: string | null;
    utm_content?: string | null;
    referrer?: string | null;
    session_id?: string | null;
    device?: string | null;
  } | null;

  // Consent (required)
  consent: {
    version: string;
    form_id?: string | null;
    timestamp?: string | null;
    ip?: string | null;
    wording: string;
  };

  // IP address
  ipAddress: string;
}

export interface EngineLeadResult {
  id: number;
  score: LeadScore;
}

/**
 * Insert a lead into engine_leads with canonical enum mapping and scoring.
 * Returns the inserted ID and computed score.
 */
export async function insertEngineLead(
  payload: EngineLeadPayload
): Promise<EngineLeadResult> {
  // Map qualifying signals to canonical values
  const ownsHome = mapOwnsHome(payload.ownsHome);
  const monthlyBill = mapMonthlyBill(payload.monthlyBill);

  // Optional signals: validate as canonical, otherwise null
  const timeline: Timeline | null = TimelineSchema.safeParse(payload.timeline).success
    ? (payload.timeline as Timeline)
    : null;
  const utility: Utility | null = UtilitySchema.safeParse(payload.utility).success
    ? (payload.utility as Utility)
    : null;
  const roofShade: RoofShade | null = RoofShadeSchema.safeParse(payload.roofShade).success
    ? (payload.roofShade as RoofShade)
    : null;

  // Compute score
  const score = scoreLead({ ownsHome, monthlyBill });

  // Build consent_json
  const consentJson = {
    version: payload.consent.version,
    form_id: payload.consent.form_id || null,
    timestamp: payload.consent.timestamp || new Date().toISOString(),
    ip: payload.consent.ip || payload.ipAddress,
    wording: payload.consent.wording,
  };

  // Build attribution_json
  const attributionJson = payload.attribution
    ? {
        utm_source: payload.attribution.utm_source || null,
        utm_medium: payload.attribution.utm_medium || null,
        utm_campaign: payload.attribution.utm_campaign || null,
        utm_term: payload.attribution.utm_term || null,
        utm_content: payload.attribution.utm_content || null,
        referrer: payload.attribution.referrer || null,
        session_id: payload.attribution.session_id || null,
        device: payload.attribution.device || null,
      }
    : null;

  const tenantId = payload.tenantId || 1;
  const vertical = payload.vertical || 'solar';

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
      ${tenantId}, ${vertical}, ${payload.sourceConsumer}, ${payload.sourcePage || null},
      ${payload.firstName}, ${payload.lastName}, ${payload.email}, ${payload.phone},
      ${payload.streetAddress || null}, ${payload.city || null}, ${payload.state || null}, ${payload.zip || null},
      ${ownsHome}, ${monthlyBill}, ${timeline}, ${utility}, ${roofShade},
      ${payload.intent || null}, ${payload.notes || null},
      ${score}, 'new',
      ${attributionJson ? JSON.stringify(attributionJson) : null},
      ${JSON.stringify(consentJson)}, ${payload.ipAddress}
    )
    RETURNING id
  `;

  return { id: rows[0].id, score };
}
