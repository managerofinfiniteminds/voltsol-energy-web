export const dynamic = 'force-dynamic';

import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';
import { sql } from '@/lib/db';
import { getMarketSession } from '@/lib/market-auth';

// Max disputes a tenant may open in a rolling 30-day window
const DISPUTE_CAP_PER_30_DAYS = 3;

const schema = z.object({
  claim_id:    z.number().int().positive(),
  reason:      z.enum(['bad_phone', 'bad_email', 'duplicate', 'outside_area', 'other']),
  description: z.string().max(1000).optional(),
});

export async function POST(req: NextRequest) {
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

  const { claim_id, reason, description } = parsed.data;

  try {
    // Verify the claim belongs to this tenant
    const claims = await sql`
      SELECT id, status FROM marketplace_lead_claims
      WHERE id = ${claim_id} AND tenant_id = ${session.tenantId}
      LIMIT 1
    `;
    if (!claims.length) {
      return NextResponse.json({ error: 'Claim not found' }, { status: 404 });
    }
    if (claims[0].status === 'disputed') {
      return NextResponse.json({ error: 'A dispute is already open for this lead' }, { status: 409 });
    }

    // Check rolling 30-day cap
    const cap = await sql`
      SELECT COUNT(*)::int AS cnt
      FROM marketplace_disputes
      WHERE tenant_id = ${session.tenantId}
        AND created_at > NOW() - INTERVAL '30 days'
    `;
    if ((cap[0]?.cnt ?? 0) >= DISPUTE_CAP_PER_30_DAYS) {
      return NextResponse.json(
        { error: `You may open at most ${DISPUTE_CAP_PER_30_DAYS} disputes per 30-day period.` },
        { status: 429 }
      );
    }

    // Check no existing dispute for this claim
    const existing = await sql`
      SELECT id FROM marketplace_disputes WHERE claim_id = ${claim_id} LIMIT 1
    `;
    if (existing.length) {
      return NextResponse.json({ error: 'Dispute already submitted for this claim' }, { status: 409 });
    }

    await sql`BEGIN`;
    await sql`
      INSERT INTO marketplace_disputes (claim_id, tenant_id, reason, description)
      VALUES (${claim_id}, ${session.tenantId}, ${reason}, ${description ?? null})
    `;
    await sql`
      UPDATE marketplace_lead_claims SET status = 'disputed' WHERE id = ${claim_id}
    `;
    await sql`COMMIT`;

    return NextResponse.json({ ok: true });
  } catch (err) {
    await sql`ROLLBACK`.catch(() => {});
    console.error('[disputes] error:', err);
    return NextResponse.json({ error: 'Service unavailable' }, { status: 503 });
  }
}
