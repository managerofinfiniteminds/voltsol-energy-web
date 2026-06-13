import { NextRequest, NextResponse } from 'next/server';
import { getMarketSession } from '@/lib/market-auth';
import { getStripe } from '@/lib/stripe';
import { sql } from '@/lib/db';

export async function POST(req: NextRequest) {
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

  let body: { type: string; planId: number };
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: 'Invalid request body' }, { status: 400 });
  }

  const { type, planId } = body;
  if (!type || !planId) {
    return NextResponse.json({ error: 'type and planId are required' }, { status: 400 });
  }

  // Fetch the plan
  const plans = await sql`SELECT * FROM marketplace_plans WHERE id = ${planId} AND is_active = true`;
  if (!plans.length) {
    return NextResponse.json({ error: 'Plan not found' }, { status: 404 });
  }
  const plan = plans[0];

  // Get or create Stripe customer for this tenant
  const tenants = await sql`SELECT id, name, email, stripe_customer_id FROM marketplace_tenants WHERE id = ${session.tenantId}`;
  const tenant = tenants[0];

  let customerId: string = tenant.stripe_customer_id ?? '';
  if (!customerId) {
    const customer = await stripe.customers.create({
      name:  tenant.name,
      email: tenant.email,
      metadata: { tenant_id: String(session.tenantId) },
    });
    customerId = customer.id;
    await sql`UPDATE marketplace_tenants SET stripe_customer_id = ${customerId}, updated_at = NOW() WHERE id = ${session.tenantId}`;
  }

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';
  const successUrl = `${siteUrl}/app/billing?success=1`;
  const cancelUrl  = `${siteUrl}/app/billing?canceled=1`;

  if (type === 'subscription') {
    if (!plan.stripe_price_id) {
      return NextResponse.json(
        { error: 'This plan does not have a Stripe price configured yet. Contact support.' },
        { status: 422 }
      );
    }

    const checkoutSession = await stripe.checkout.sessions.create({
      mode:        'subscription',
      customer:    customerId,
      line_items:  [{ price: plan.stripe_price_id, quantity: 1 }],
      success_url: successUrl,
      cancel_url:  cancelUrl,
      metadata: {
        tenant_id: String(session.tenantId),
        plan_id:   String(planId),
      },
      subscription_data: {
        metadata: {
          tenant_id: String(session.tenantId),
          plan_id:   String(planId),
        },
      },
    });

    return NextResponse.json({ url: checkoutSession.url });
  }

  if (type === 'pack') {
    if (!plan.stripe_price_id && !plan.pack_price_cents) {
      return NextResponse.json(
        { error: 'This credit pack does not have a Stripe price configured yet.' },
        { status: 422 }
      );
    }

    // If a stripe_price_id exists use it; otherwise create a one-time price dynamically
    let priceId = plan.stripe_price_id as string | null;
    if (!priceId) {
      const price = await stripe.prices.create({
        unit_amount: plan.pack_price_cents,
        currency:    'usd',
        product_data: { name: plan.name },
      });
      priceId = price.id;
      await sql`UPDATE marketplace_plans SET stripe_price_id = ${priceId} WHERE id = ${planId}`;
    }

    const checkoutSession = await stripe.checkout.sessions.create({
      mode:        'payment',
      customer:    customerId,
      line_items:  [{ price: priceId, quantity: 1 }],
      success_url: successUrl,
      cancel_url:  cancelUrl,
      metadata: {
        tenant_id:    String(session.tenantId),
        plan_id:      String(planId),
        pack_credits: String(plan.pack_credits),
        purchase_type: 'credit_pack',
      },
    });

    return NextResponse.json({ url: checkoutSession.url });
  }

  return NextResponse.json({ error: 'type must be "subscription" or "pack"' }, { status: 400 });
}
