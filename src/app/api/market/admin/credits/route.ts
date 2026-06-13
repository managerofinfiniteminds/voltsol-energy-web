export const dynamic = 'force-dynamic';

import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';
import { sql } from '@/lib/db';
import { getMarketSession } from '@/lib/market-auth';

const schema = z.object({
  tenant_id: z.number().int().positive(),
  delta:     z.number().int().min(-10000).max(10000),
  reason:    z.enum(['manual', 'subscription_grant', 'refund', 'dispute_credit']).default('manual'),
  note:      z.string().max(200).optional(),
});

export async function POST(req: NextRequest) {
  const session = await getMarketSession();
  if (!session || !session.isOwner) {
    return NextResponse.json({ error: 'Forbidden' }, { status: 403 });
  }

  let body: unknown;
  try { body = await req.json(); } catch {
    return NextResponse.json({ error: 'Bad request' }, { status: 400 });
  }

  const parsed = schema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ error: 'Invalid input' }, { status: 422 });
  }

  const { tenant_id, delta, reason } = parsed.data;

  try {
    const balanceRow = await sql`
      SELECT COALESCE(SUM(delta), 0)::int AS bal
      FROM marketplace_credit_ledger
      WHERE tenant_id = ${tenant_id}
    `;
    const balanceBefore = balanceRow[0]?.bal ?? 0;
    const balanceAfter  = balanceBefore + delta;

    await sql`
      INSERT INTO marketplace_credit_ledger (tenant_id, delta, reason, balance_after)
      VALUES (${tenant_id}, ${delta}, ${reason}, ${balanceAfter})
    `;
    return NextResponse.json({ ok: true, balance_after: balanceAfter });
  } catch {
    return NextResponse.json({ error: 'Service unavailable' }, { status: 503 });
  }
}
