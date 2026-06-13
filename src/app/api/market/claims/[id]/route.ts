export const dynamic = 'force-dynamic';

import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';
import { sql } from '@/lib/db';
import { getMarketSession } from '@/lib/market-auth';

const outcomeSchema = z.object({
  outcome: z.enum(['open', 'won', 'lost']),
  notes:   z.string().max(2000).optional(),
});

export async function PATCH(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const session = await getMarketSession();
  if (!session) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

  const claimId = parseInt(params.id, 10);
  if (!claimId) return NextResponse.json({ error: 'Invalid claim ID' }, { status: 400 });

  let body: unknown;
  try { body = await req.json(); } catch {
    return NextResponse.json({ error: 'Bad request' }, { status: 400 });
  }

  const parsed = outcomeSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ error: 'Invalid input' }, { status: 422 });
  }

  const { outcome, notes } = parsed.data;

  try {
    const result = await sql`
      UPDATE marketplace_lead_claims
      SET outcome = ${outcome}, notes = ${notes ?? null}
      WHERE id = ${claimId}
        AND tenant_id = ${session.tenantId}
      RETURNING id
    `;
    if (!result.length) {
      return NextResponse.json({ error: 'Claim not found' }, { status: 404 });
    }
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: 'Service unavailable' }, { status: 503 });
  }
}
