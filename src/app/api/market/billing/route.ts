import { NextResponse } from 'next/server';
import { getMarketSession } from '@/lib/market-auth';
import { getTenantCreditBalance, getTenantTier } from '@/lib/market-pool';
import { sql } from '@/lib/db';

export const dynamic = 'force-dynamic';

export async function GET() {
  const session = await getMarketSession();
  if (!session) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const [balance, tier, plans, subscription] = await Promise.all([
    getTenantCreditBalance(session.tenantId),
    getTenantTier(session.tenantId),
    sql`
      SELECT id, name, tier, monthly_price_cents, monthly_credits,
             pack_credits, pack_price_cents, max_markets, stripe_price_id
      FROM marketplace_plans
      WHERE is_active = true
      ORDER BY monthly_price_cents ASC
    `,
    sql`
      SELECT s.status, s.current_period_end
      FROM marketplace_subscriptions s
      WHERE s.tenant_id = ${session.tenantId}
        AND s.status IN ('active', 'trialing', 'past_due')
      ORDER BY s.created_at DESC
      LIMIT 1
    `,
  ]);

  const subscriptionPlans = plans.filter((p: { tier: string }) => p.tier !== 'pack');
  const packs = plans.filter((p: { tier: string }) => p.tier === 'pack');

  return NextResponse.json({
    balance,
    tier,
    subscriptionStatus:  subscription[0]?.status ?? null,
    currentPeriodEnd:    subscription[0]?.current_period_end ?? null,
    plans:               subscriptionPlans,
    packs,
    stripeConfigured:    !!process.env.STRIPE_SECRET_KEY,
  });
}
