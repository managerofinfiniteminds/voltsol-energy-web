export const dynamic = 'force-dynamic';
import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';
import { sql } from '@/lib/db';

const metaSchema = z
  .record(z.unknown())
  .optional()
  .refine(
    val => val == null || JSON.stringify(val).length <= 2000,
    'meta payload too large (max 2000 chars)'
  );

const schema = z.object({
  event_type:    z.string().min(1).max(50),
  campaign_code: z.string().max(50).optional(),
  source:        z.string().max(50).optional(),
  rep:           z.string().max(100).optional(),
  utm_source:    z.string().max(120).optional(),
  utm_medium:    z.string().max(120).optional(),
  utm_campaign:  z.string().max(120).optional(),
  session_id:    z.string().max(64).optional(),
  device:        z.string().max(20).optional(),
  path:          z.string().max(200).optional(),
  meta:          metaSchema,
});

export async function POST(req: NextRequest) {
  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return new NextResponse(null, { status: 204 });
  }

  const parsed = schema.safeParse(body);
  if (!parsed.success) {
    // Permissive — still return 204 so client never retries
    return new NextResponse(null, { status: 204 });
  }

  const d = parsed.data;
  const metaJson = d.meta != null ? JSON.stringify(d.meta) : null;

  try {
    await sql`
      INSERT INTO lead_events (
        event_type, campaign_code, source, rep,
        utm_source, utm_medium, utm_campaign,
        session_id, device, path, meta
      ) VALUES (
        ${d.event_type},
        ${d.campaign_code ?? null},
        ${d.source ?? null},
        ${d.rep ?? null},
        ${d.utm_source ?? null},
        ${d.utm_medium ?? null},
        ${d.utm_campaign ?? null},
        ${d.session_id ?? null},
        ${d.device ?? null},
        ${d.path ?? null},
        ${metaJson}
      )
    `;
  } catch (err) {
    // Log but don't surface to client — analytics should never block UX
    console.error('lead_events insert failed:', err);
  }

  return new NextResponse(null, { status: 204 });
}
