import { NextResponse } from 'next/server';
import { getMarketSession } from '@/lib/market-auth';
import { getStripe } from '@/lib/stripe';
import { sql } from '@/lib/db';

export async function POST() {
  const stripe = getStripe();
  if (!stripe) {
    return NextResponse.json(
      { error: 'Stripe is not configured on this server.' },
      { status: 503 }
    );
  }

  const session = await getMarketSession();
  if (!session) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const tenants = await sql`SELECT stripe_customer_id FROM marketplace_tenants WHERE id = ${session.tenantId}`;
  const customerId = tenants[0]?.stripe_customer_id as string | null;

  if (!customerId) {
    return NextResponse.json(
      { error: 'No billing account found. Please subscribe to a plan first.' },
      { status: 422 }
    );
  }

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';

  const portalSession = await stripe.billingPortal.sessions.create({
    customer:   customerId,
    return_url: `${siteUrl}/app/billing`,
  });

  return NextResponse.json({ url: portalSession.url });
}
