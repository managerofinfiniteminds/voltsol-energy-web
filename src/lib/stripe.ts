import Stripe from 'stripe';

let _stripe: Stripe | null = null;

/**
 * Returns a Stripe client instance, or null if STRIPE_SECRET_KEY is not set.
 * Always check for null before using — Stripe features gracefully no-op when absent.
 */
export function getStripe(): Stripe | null {
  if (_stripe) return _stripe;

  const key = process.env.STRIPE_SECRET_KEY;
  if (!key) {
    console.warn('[stripe] STRIPE_SECRET_KEY is not set — Stripe features disabled');
    return null;
  }

  _stripe = new Stripe(key, { apiVersion: '2026-05-27.dahlia' });
  return _stripe;
}

/** True only if Stripe is configured and appears to be a live key. */
export function isStripeLive(): boolean {
  const key = process.env.STRIPE_SECRET_KEY ?? '';
  return key.startsWith('sk_live_');
}
