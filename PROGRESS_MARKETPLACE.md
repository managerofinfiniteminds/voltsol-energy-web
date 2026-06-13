# VoltSol Lead Marketplace — Build Progress

## Status: P0 Complete ✓ — P1 Next

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

## Next: P1 — SEO Supply Engine

### Tasks
- [ ] Seed script for `marketplace_markets` — NorCal solar counties (Placer, Sacramento,
      El Dorado, Nevada, Yolo, Solano) → cities with slug, utility (PG&E/SMUD), local_data_json estimates
- [ ] Programmatic SEO route `src/app/market/[vertical]/[state]/[region]/[city]/page.tsx`
      with generateStaticParams, LocalBusiness/Service JSON-LD, breadcrumbs, internal mesh links,
      lead capture form + ConsentCheckbox
- [ ] Lead intake API `src/app/api/market/leads/route.ts` — validate, honeypot, rate-limit,
      score, store with market_id/consent_json
- [ ] Sitemap additions for programmatic pages

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
