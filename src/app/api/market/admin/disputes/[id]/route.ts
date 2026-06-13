export const dynamic = 'force-dynamic';

import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';
import { sql } from '@/lib/db';
import { getMarketSession } from '@/lib/market-auth';

const schema = z.object({
  status:     z.enum(['approved', 'denied']),
  resolution: z.string().max(500).optional(),
});

export async function PATCH(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const session = await getMarketSession();
  if (!session || !session.isOwner) {
    return NextResponse.json({ error: 'Forbidden' }, { status: 403 });
  }

  const disputeId = parseInt(params.id, 10);
  if (!disputeId) return NextResponse.json({ error: 'Invalid ID' }, { status: 400 });

  let body: unknown;
  try { body = await req.json(); } catch {
    return NextResponse.json({ error: 'Bad request' }, { status: 400 });
  }

  const parsed = schema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ error: 'Invalid input' }, { status: 422 });
  }

  const { status, resolution } = parsed.data;

  try {
    const result = await sql`
      UPDATE marketplace_disputes
      SET status = ${status}, resolved_at = NOW(), resolution = ${resolution ?? null}
      WHERE id = ${disputeId}
      RETURNING id, claim_id, tenant_id, credits_refunded
    `;
    if (!result.length) {
      return NextResponse.json({ error: 'Dispute not found' }, { status: 404 });
    }

    // If approved, restore credits to the claimant
    if (status === 'approved') {
      const { claim_id, tenant_id } = result[0];
      const claimRow = await sql`
        SELECT credits_spent FROM marketplace_lead_claims WHERE id = ${claim_id}
      `;
      if (claimRow.length) {
        const credits = claimRow[0].credits_spent as number;
        const balRow = await sql`
          SELECT COALESCE(SUM(delta), 0)::int AS bal FROM marketplace_credit_ledger WHERE tenant_id = ${tenant_id}
        `;
        const balanceAfter = (balRow[0]?.bal ?? 0) + credits;
        await sql`
          INSERT INTO marketplace_credit_ledger (tenant_id, delta, reason, reference_id, balance_after)
          VALUES (${tenant_id}, ${credits}, 'dispute_credit', ${disputeId.toString()}, ${balanceAfter})
        `;
        await sql`
          UPDATE marketplace_disputes SET credits_refunded = ${credits} WHERE id = ${disputeId}
        `;
        await sql`
          UPDATE marketplace_lead_claims SET status = 'refunded' WHERE id = ${claim_id}
        `;
      }
    }

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: 'Service unavailable' }, { status: 503 });
  }
}
