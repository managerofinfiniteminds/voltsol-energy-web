# VoltSol Lead Marketplace — Build Progress

## Status: P2 Complete ✓ — P3 Next

---

## Completed

### P0 — Schema + Legal Foundation ✓
- `sql/005_marketplace.sql` — full marketplace schema with 10 tables:
  - `marketplace_tenants` — subscriber companies
  - `marketplace_users` — login accounts per tenant
  - `marketplace_plans` — Starter ($99/mo, 20cr), Pro ($249/mo, 60cr), Market Leader ($599/mo, 150cr) + 3 credit pack tiers seeded
  - `marketplace_subscriptions` — Stripe subscription state per tenant
  - `marketplace_credit_ledger` — append-only credit transaction log
  - `marketplace_markets` — geo+vertical slots (county/city/slug)
  - `marketplace_leads` — captured leads with full consent_json storage
  - `marketplace_lead_claims` — FCFS claim records (UNIQUE on lead_id enforces exclusivity)
  - `marketplace_transactions` — Stripe payment records
  - `marketplace_disputes` — lead quality challenges
- `.env.example` — documents all env vars incl. STRIPE_SECRET_KEY, STRIPE_WEBHOOK_SECRET, NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY, MARKETPLACE_SESSION_SECRET
- `src/app/market/legal/terms/page.tsx` — Terms of Service draft (DRAFT banner, pending attorney review)
- `src/app/market/legal/privacy/page.tsx` — Privacy Policy draft (DRAFT banner, CCPA + TCPA sections)
- `src/app/market/legal/consent/page.tsx` — Consent language reference + TCPA checklist (DRAFT banner)
- `src/components/market/ConsentCheckbox.tsx` — reusable consent component with:
  - `CONSENT_WORDING` + `CONSENT_VERSION` constants (v1.0)
  - `ConsentCheckbox` React component (unchecked by default, accessible)
  - `buildConsentJson(ip)` — builds consent_json payload for DB storage
  - `useConsentField()` hook for form state
- Build: `npm run build` passes clean ✓

### Migration note
Run `npm run db:migrate` to apply `005_marketplace.sql` to Neon.
All migrations run in sorted order — 005 will run after existing 001–004.

---

### P1 — SEO Supply Engine ✓
- `src/lib/market-data.ts` — static config for 24 NorCal solar market cities across 6 counties
  (Placer, Sacramento, El Dorado, Nevada, Yolo, Solano); mirrors seed data; used by generateStaticParams
  and page template at build time (no DB dep)
- `scripts/seed-markets.js` — idempotent seed (INSERT … ON CONFLICT DO NOTHING) for
  `marketplace_markets`; run with `node scripts/seed-markets.js`
- `src/components/market/MarketLeadForm.tsx` — client form; phone formatting via form-validation lib;
  ConsentCheckbox integrated; posts to /api/market/leads
- `src/app/market/[vertical]/[state]/[region]/[city]/page.tsx` — 24 pages statically built;
  title/meta/OG per city; LocalBusiness + Service + BreadcrumbList JSON-LD; internal mesh links
  (nearby cities + other counties); sticky lead form aside
- `src/app/api/market/leads/route.ts` — validate (Zod), honeypot, rate-limit (5/15min),
  score (hot=3cr/std=2cr/low=1cr), consent_json stored verbatim, owner_reserved_until set (+15min),
  market_id resolved from slug (non-fatal if not seeded)
- `src/app/sitemap.ts` — extended with all 24 market pages + marketplace legal pages
- Build: `npm run build` passes clean ✓ (24 city pages generated as SSG)

---

### P2 — Claim Core ✓
- `src/lib/market-pool.ts` — pool service:
  - `getAvailableLeads()` — respects owner reserve window, tier gating (hot = Pro+ only),
    sorted by score then recency; owner sees all leads regardless of status
  - `claimLead()` — single CTE atomic FCFS: FOR UPDATE SKIP LOCKED → balance check →
    INSERT claim (ON CONFLICT DO NOTHING as final safeguard) → UPDATE lead status → INSERT ledger debit
  - `getTenantCreditBalance()` — sum of credit_ledger deltas
  - `getTenantTier()` — active subscription tier (starter/pro/market/none)
  - `getTenantClaimedLeads()` — full contact info + outcome for tenant's claimed leads
- `src/lib/market-auth.ts` — session helpers:
  - `getMarketSession()` — reads `mp_session` cookie, DB lookup with expiry check
  - `hashPassword()` / `verifyPassword()` — scrypt-based with random salt, constant-time compare
- `src/app/api/market/auth/login/route.ts` — email/password login → set `mp_session` cookie (7d, HttpOnly)
- `src/app/api/market/auth/logout/route.ts` — clear DB session token + delete cookie
- `src/app/api/market/claim/route.ts` — auth required; tier-gates hot leads; calls claimLead();
  returns contact info on success
- `src/app/app/(auth)/login/page.tsx` — marketplace login page at `/app/login`
- `src/app/app/(protected)/layout.tsx` — server layout: redirects to /app/login if no session;
  renders nav with plan badge and sign-out
- `src/app/app/(protected)/pool/page.tsx` — server component; fetches leads + balance + tier
- `src/app/app/(protected)/dashboard/page.tsx` — claimed leads table with contact info + outcome badge
- `src/components/market/PoolClient.tsx` — client component:
  - Lead cards (anonymized pre-claim: score, location, bill range, owns-home, age)
  - Claim button with credit cost; disabled if insufficient credits or in owner window
  - After claim: reveals full contact (name, email, phone) inline
  - Credit balance updates optimistically
- `src/middleware.ts` — updated to protect `/app/*` (redirects to `/app/login` if no `mp_session` cookie)
- Build: `npm run build` passes clean ✓ (47 pages)

---

## Next: P3 — Stripe Money

### Tasks
- [ ] Stripe Checkout session creation (recurring subscriptions)
- [ ] Stripe Checkout session creation (one-time credit packs)
- [ ] Customer Portal redirect
- [ ] Webhook handler `src/app/api/market/stripe/webhook/route.ts`:
  - `invoice.paid` → grant monthly subscription credits
  - `checkout.session.completed` (pack) → grant pack credits
  - `customer.subscription.deleted` → update subscription status
- [ ] Guard all Stripe calls when keys absent (graceful no-op + console warning)

---

## Blockers
None currently.

---

## Design Decisions
- Credit costs: hot_lead = 3cr, standard = 2cr, low_priority = 1cr (set in credit_cost column per lead)
- Owner reserve window: 15 min default (marketplace_tenants.owner_reserve_minutes)
- Exclusive leads: UNIQUE(lead_id) on marketplace_lead_claims enforces 1 claim per lead
- Consent stored verbatim: wording, version, timestamp, IP in consent_json JSONB
- No Prisma — raw SQL via existing `src/lib/db.ts` neon client
- Stripe keys guarded: build passes when absent (keys only needed at runtime)
- Tier gating: hot_lead only available to Pro / Market Leader tiers; Starter gets standard + low_priority
- Geo scope: all tenants see all leads in P2 (geo filtering deferred to P4 onboarding)
- Auth: session token stored in marketplace_users.session_token; cookie `mp_session` (HttpOnly, 7d)
- Middleware: cookie-presence check only (no DB call); full validation in server components/routes
- Route groups: /app/(auth)/login (public) vs /app/(protected)/* (auth-gated layout)
