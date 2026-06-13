import { NextRequest, NextResponse } from 'next/server';
import { getStripe } from '@/lib/stripe';
import { sql } from '@/lib/db';
import type Stripe from 'stripe';

// Next.js App Router reads raw body via request.text(); no special config needed.
/**
 * Stripe webhook handler.
 *
 * Handled events:
 *   checkout.session.completed  (mode=subscription) → upsert subscription record
 *   checkout.session.completed  (mode=payment)      → grant credit pack
 *   invoice.paid                                    → grant monthly subscription credits
 *   customer.subscription.deleted                   → mark subscription canceled
 *   customer.subscription.updated                   → sync status + period_end
 */
export async function POST(req: NextRequest) {
  const stripe = getStripe();
  if (!stripe) {
    console.warn('[webhook] Stripe not configured — skipping webhook processing');
    return NextResponse.json({ received: true });
  }

  const secret = process.env.STRIPE_WEBHOOK_SECRET;
  if (!secret) {
    console.error('[webhook] STRIPE_WEBHOOK_SECRET is not set');
    return NextResponse.json({ error: 'Webhook secret not configured' }, { status: 500 });
  }

  const rawBody = await req.text();
  const signature = req.headers.get('stripe-signature') ?? '';

  let event: Stripe.Event;
  try {
    event = stripe.webhooks.constructEvent(rawBody, signature, secret);
  } catch (err) {
    console.error('[webhook] Signature verification failed:', err);
    return NextResponse.json({ error: 'Invalid signature' }, { status: 400 });
  }

  try {
    switch (event.type) {
      case 'checkout.session.completed':
        await handleCheckoutCompleted(event.data.object as Stripe.Checkout.Session);
        break;

      case 'invoice.paid':
        await handleInvoicePaid(event.data.object as Stripe.Invoice);
        break;

      case 'customer.subscription.deleted':
        await handleSubscriptionDeleted(event.data.object as Stripe.Subscription);
        break;

      case 'customer.subscription.updated':
        await handleSubscriptionUpdated(event.data.object as Stripe.Subscription);
        break;

      default:
        // Unhandled event types are fine — just acknowledge
        break;
    }
  } catch (err) {
    console.error(`[webhook] Error processing ${event.type}:`, err);
    // Return 500 so Stripe retries
    return NextResponse.json({ error: 'Webhook handler error' }, { status: 500 });
  }

  return NextResponse.json({ received: true });
}

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

async function handleCheckoutCompleted(session: Stripe.Checkout.Session) {
  const tenantId = session.metadata?.tenant_id ? parseInt(session.metadata.tenant_id) : null;
  if (!tenantId) {
    console.warn('[webhook] checkout.session.completed missing tenant_id metadata');
    return;
  }

  // Ensure stripe_customer_id is stored on the tenant
  if (session.customer) {
    await sql`
      UPDATE marketplace_tenants
      SET stripe_customer_id = ${session.customer as string}, updated_at = NOW()
      WHERE id = ${tenantId} AND (stripe_customer_id IS NULL OR stripe_customer_id = '')
    `;
  }

  if (session.mode === 'subscription') {
    // Subscription: upsert the subscription record.
    // Monthly credits are granted by invoice.paid which fires immediately after.
    const planId     = session.metadata?.plan_id ? parseInt(session.metadata.plan_id) : null;
    const stripeSubId = session.subscription as string | null;
    if (!planId || !stripeSubId) return;

    await sql`
      INSERT INTO marketplace_subscriptions
        (tenant_id, plan_id, stripe_subscription_id, stripe_customer_id, status)
      VALUES
        (${tenantId}, ${planId}, ${stripeSubId}, ${session.customer as string}, 'active')
      ON CONFLICT (stripe_subscription_id) DO UPDATE
        SET status = 'active', updated_at = NOW()
    `;
  }

  if (session.mode === 'payment' && session.metadata?.purchase_type === 'credit_pack') {
    // One-time credit pack: grant credits immediately
    const packCredits = session.metadata.pack_credits ? parseInt(session.metadata.pack_credits) : 0;
    const planId      = session.metadata.plan_id ? parseInt(session.metadata.plan_id) : null;
    if (!packCredits) return;

    // Idempotency: check if this checkout session was already processed
    const existing = await sql`
      SELECT id FROM marketplace_transactions WHERE stripe_checkout_session_id = ${session.id}
    `;
    if (existing.length) return;

    // Get current balance for balance_after
    const balRows = await sql`
      SELECT COALESCE(SUM(delta), 0)::int AS bal FROM marketplace_credit_ledger WHERE tenant_id = ${tenantId}
    `;
    const currentBal = balRows[0]?.bal ?? 0;
    const balanceAfter = currentBal + packCredits;

    await sql`
      INSERT INTO marketplace_credit_ledger (tenant_id, delta, reason, reference_id, balance_after)
      VALUES (${tenantId}, ${packCredits}, 'pack_purchase', ${session.id}, ${balanceAfter})
    `;

    await sql`
      INSERT INTO marketplace_transactions
        (tenant_id, stripe_checkout_session_id, type, amount_cents, credits_granted, status, metadata_json)
      VALUES
        (${tenantId}, ${session.id}, 'credit_pack',
         ${session.amount_total ?? 0}, ${packCredits}, 'succeeded',
         ${JSON.stringify({ plan_id: planId, pack_credits: packCredits })}::jsonb)
    `;
  }
}

async function handleInvoicePaid(invoice: Stripe.Invoice) {
  const stripeSubId = (invoice as unknown as { subscription?: string }).subscription;
  if (!stripeSubId) return; // one-time invoice, not a subscription

  // Idempotency: check by invoice id
  const existing = await sql`
    SELECT id FROM marketplace_transactions WHERE stripe_invoice_id = ${invoice.id}
  `;
  if (existing.length) return;

  // Find our subscription record
  const subs = await sql`
    SELECT s.id, s.tenant_id, s.plan_id, p.monthly_credits, p.name AS plan_name
    FROM marketplace_subscriptions s
    JOIN marketplace_plans p ON p.id = s.plan_id
    WHERE s.stripe_subscription_id = ${stripeSubId}
  `;
  if (!subs.length) {
    console.warn(`[webhook] invoice.paid: no subscription found for ${stripeSubId}`);
    return;
  }
  const sub = subs[0];
  const monthlyCredits: number = sub.monthly_credits ?? 0;
  if (!monthlyCredits) return;

  // Get current balance
  const balRows = await sql`
    SELECT COALESCE(SUM(delta), 0)::int AS bal FROM marketplace_credit_ledger WHERE tenant_id = ${sub.tenant_id}
  `;
  const currentBal = balRows[0]?.bal ?? 0;
  const balanceAfter = currentBal + monthlyCredits;

  await sql`
    INSERT INTO marketplace_credit_ledger (tenant_id, delta, reason, reference_id, balance_after)
    VALUES (${sub.tenant_id}, ${monthlyCredits}, 'subscription_grant', ${invoice.id}, ${balanceAfter})
  `;

  await sql`
    INSERT INTO marketplace_transactions
      (tenant_id, stripe_invoice_id, type, amount_cents, credits_granted, status, metadata_json)
    VALUES
      (${sub.tenant_id}, ${invoice.id}, 'subscription',
       ${invoice.amount_paid ?? 0}, ${monthlyCredits}, 'succeeded',
       ${JSON.stringify({ subscription_id: sub.id, plan_name: sub.plan_name })}::jsonb)
  `;

  // Update current_period_end on the subscription
  const periodEnd = (invoice as unknown as { lines?: { data?: Array<{ period?: { end?: number } }> } }).lines?.data?.[0]?.period?.end;
  if (periodEnd) {
    await sql`
      UPDATE marketplace_subscriptions
      SET current_period_end = TO_TIMESTAMP(${periodEnd}), status = 'active', updated_at = NOW()
      WHERE stripe_subscription_id = ${stripeSubId}
    `;
  }
}

async function handleSubscriptionDeleted(subscription: Stripe.Subscription) {
  await sql`
    UPDATE marketplace_subscriptions
    SET status = 'canceled', updated_at = NOW()
    WHERE stripe_subscription_id = ${subscription.id}
  `;
}

async function handleSubscriptionUpdated(subscription: Stripe.Subscription) {
  // current_period_end was removed from Subscription root in newer API versions;
  // derive it from the first item's period if available, otherwise skip.
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const sub = subscription as any;
  const periodEnd: number | undefined =
    sub.current_period_end ??
    sub.items?.data?.[0]?.current_period_end;

  if (periodEnd) {
    await sql`
      UPDATE marketplace_subscriptions
      SET
        status               = ${subscription.status},
        cancel_at_period_end = ${subscription.cancel_at_period_end},
        current_period_end   = TO_TIMESTAMP(${periodEnd}),
        updated_at           = NOW()
      WHERE stripe_subscription_id = ${subscription.id}
    `;
  } else {
    await sql`
      UPDATE marketplace_subscriptions
      SET
        status               = ${subscription.status},
        cancel_at_period_end = ${subscription.cancel_at_period_end},
        updated_at           = NOW()
      WHERE stripe_subscription_id = ${subscription.id}
    `;
  }
}
