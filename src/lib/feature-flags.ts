/**
 * VoltSol Lead Engine — Feature Flags
 * Dormant marketplace machinery stays in codebase but is gated by these flags.
 * Flip via environment variables when ready to re-enable.
 */

export const FEATURE_FLAGS = Object.freeze({
  MULTI_TENANT: process.env.FLAG_MULTI_TENANT === 'true',
  CLAIM_MECHANIC: process.env.FLAG_CLAIM_MECHANIC === 'true',
  CREDITS: process.env.FLAG_CREDITS === 'true',
  STRIPE: process.env.FLAG_STRIPE === 'true',
  PARTNER_SIGNUP: process.env.FLAG_PARTNER_SIGNUP === 'true',
  PII_MASK: process.env.FLAG_PII_MASK === 'true',
  TERRITORIES: process.env.FLAG_TERRITORIES === 'true',
  DISPUTES: process.env.FLAG_DISPUTES === 'true',
});
