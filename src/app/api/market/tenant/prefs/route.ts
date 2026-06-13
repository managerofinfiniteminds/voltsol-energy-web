export const dynamic = 'force-dynamic';

import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';
import { sql } from '@/lib/db';
import { getMarketSession } from '@/lib/market-auth';

const VALID_COUNTIES = [
  'Placer', 'Sacramento', 'El Dorado', 'Nevada', 'Yolo', 'Solano',
];

const schema = z.object({
  geo_counties: z.array(z.string().max(100)).max(20).optional(),
  verticals:    z.array(z.string().max(50)).min(1).max(10).optional(),
  onboarding_complete: z.boolean().optional(),
});

export async function GET() {
  const session = await getMarketSession();
  if (!session) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

  try {
    const rows = await sql`
      SELECT geo_counties, verticals, onboarding_complete
      FROM marketplace_tenants
      WHERE id = ${session.tenantId}
    `;
    if (!rows.length) return NextResponse.json({ error: 'Not found' }, { status: 404 });
    return NextResponse.json(rows[0]);
  } catch {
    return NextResponse.json({ error: 'Service unavailable' }, { status: 503 });
  }
}

export async function PATCH(req: NextRequest) {
  const session = await getMarketSession();
  if (!session) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

  let body: unknown;
  try { body = await req.json(); } catch {
    return NextResponse.json({ error: 'Bad request' }, { status: 400 });
  }

  const parsed = schema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ error: 'Invalid input' }, { status: 422 });
  }

  const { geo_counties, verticals, onboarding_complete } = parsed.data;

  // Validate county names if provided
  if (geo_counties) {
    const invalid = geo_counties.filter(c => !VALID_COUNTIES.includes(c));
    if (invalid.length) {
      return NextResponse.json(
        { error: `Unknown counties: ${invalid.join(', ')}` },
        { status: 422 }
      );
    }
  }

  try {
    await sql`
      UPDATE marketplace_tenants SET
        geo_counties        = COALESCE(${geo_counties ? JSON.stringify(geo_counties) : null}::text[], geo_counties),
        verticals           = COALESCE(${verticals ? JSON.stringify(verticals) : null}::text[], verticals),
        onboarding_complete = COALESCE(${onboarding_complete ?? null}, onboarding_complete),
        updated_at          = NOW()
      WHERE id = ${session.tenantId}
    `;
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: 'Service unavailable' }, { status: 503 });
  }
}
