export const dynamic = 'force-dynamic';

import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';
import { sql } from '@/lib/db';
import { getMarketSession } from '@/lib/market-auth';
import { claimLead, getTenantTier } from '@/lib/market-pool';

const schema = z.object({
  lead_id: z.number().int().positive(),
});

export async function POST(req: NextRequest) {
  // Auth
  const session = await getMarketSession();
  if (!session) {
    return NextResponse.json({ error: 'Not authenticated' }, { status: 401 });
  }

  // Parse
  let body: unknown;
  try { body = await req.json(); } catch {
    return NextResponse.json({ error: 'Bad request' }, { status: 400 });
  }
  const parsed = schema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ error: 'Invalid input' }, { status: 422 });
  }

  const { lead_id } = parsed.data;

  // Tier-gating: hot leads require Pro or Market Leader
  const [tier, leadRows] = await Promise.all([
    getTenantTier(session.tenantId),
    sql`SELECT id, score FROM marketplace_leads WHERE id = ${lead_id}`,
  ]);

  if (!leadRows.length) {
    return NextResponse.json({ error: 'Lead not found' }, { status: 404 });
  }

  const isHot       = leadRows[0].score === 'hot_lead';
  const canClaimHot = session.isOwner || tier === 'pro' || tier === 'market';

  if (isHot && !canClaimHot) {
    return NextResponse.json(
      { error: 'Hot leads require a Pro or Market Leader subscription. Upgrade to unlock.' },
      { status: 403 }
    );
  }

  // Perform atomic claim
  try {
    const result = await claimLead(session.tenantId, lead_id);

    if (!result.ok) {
      return NextResponse.json({ error: result.reason }, { status: 409 });
    }

    // Fetch the full lead record for the caller (contact info now unlocked)
    const rows = await sql`
      SELECT
        l.first_name, l.last_name, l.email, l.phone,
        l.city, l.state, l.owns_home, l.monthly_bill, l.score, l.created_at,
        c.claimed_at, c.credits_spent
      FROM marketplace_lead_claims c
      JOIN marketplace_leads l ON l.id = c.lead_id
      WHERE c.id = ${result.claimId}
    `;

    return NextResponse.json({
      ok: true,
      claim_id:      result.claimId,
      credits_spent: result.creditsSpent,
      balance_after: result.balanceAfter,
      lead:          rows[0] ?? null,
    });
  } catch (err) {
    console.error('[market/claim] error:', err);
    return NextResponse.json({ error: 'Claim failed — please try again' }, { status: 500 });
  }
}
