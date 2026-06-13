# VoltSol Lead Marketplace — Setup & Operations Guide

A self-contained B2B lead marketplace built inside the VoltSol Next.js repo.
Solar contractors subscribe to purchase exclusive NorCal solar leads captured
via SEO-optimized market pages.

---

## Architecture Overview

```
Public capture:  /market/solar/california/<county>/<city>   — 24 SSG city pages
Lead API:        /api/market/leads                          — intake + scoring + consent
Subscriber app:  /app/login  /app/signup  /app/pool  /app/dashboard  /app/billing  /app/onboarding
Stripe:          /api/market/stripe/checkout  /portal  /webhook
Owner admin:     /app/admin  (is_owner=true tenants only)
```

All marketplace DB tables use the `marketplace_` prefix and live alongside
(but never alter) the existing VoltSol `public.*` tables.

---

## Environment Variables

Copy `.env.example` to `.env.local` and fill in:

| Variable | Description |
|---|---|
| `NEON_DATABASE_URL` | Neon PostgreSQL connection string (primary) |
| `DATABASE_URL` | Fallback if NEON_DATABASE_URL not set |
| `RESEND_API_KEY` | Resend transactional email key |
| `STRIPE_SECRET_KEY` | Stripe secret key (`sk_live_*` in prod, `sk_test_*` in dev) |
| `STRIPE_WEBHOOK_SECRET` | Signing secret from Stripe Dashboard → Webhooks |
| `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY` | Stripe publishable key (safe for browser) |
| `MARKETPLACE_SESSION_SECRET` | Random string ≥ 32 chars, signs session tokens |
| `NEXT_PUBLIC_SITE_URL` | Base URL with no trailing slash, used in email links |
| `ADMIN_PASSWORD` | VoltSol admin dashboard password (existing) |
| `SALES_ALERT_EMAIL` | Sales alert destination (existing) |

> **Note:** When Stripe keys are absent the app still builds and runs — Stripe
> features degrade gracefully with a console warning. Set them before going live.

---

## Database Migrations

Migrations run in filename sort order via the existing `scripts/migrate.js`.

```bash
# Apply all pending migrations (includes marketplace schema)
npm run db:migrate
```

Marketplace-specific migrations:

| File | Description |
|---|---|
| `sql/005_marketplace.sql` | All 10 marketplace tables + plan seed data |
| `sql/006_marketplace_prefs.sql` | Adds geo_counties, verticals, onboarding_complete to tenants; adds resolution to disputes |

---

## Initial Setup Sequence

```bash
# 1. Install dependencies
npm install

# 2. Copy and fill in environment variables
cp .env.example .env.local
# edit .env.local

# 3. Run all DB migrations
npm run db:migrate

# 4. Seed the 24 NorCal market records
node scripts/seed-markets.js

# 5. (Optional) Seed demo leads for testing
node scripts/seed-demo-leads.js

# 6. Build and run
npm run build
npm start
```

---

## Stripe Wiring

### 1. Create Products in Stripe Dashboard

Create three subscription products and three one-time credit pack products,
then copy their Price IDs into the database:

```sql
-- Update stripe_price_id on each plan row after creating in Stripe
UPDATE marketplace_plans SET stripe_price_id = 'price_xxx' WHERE name = 'Starter';
UPDATE marketplace_plans SET stripe_price_id = 'price_xxx' WHERE name = 'Pro';
UPDATE marketplace_plans SET stripe_price_id = 'price_xxx' WHERE name = 'Market Leader';
UPDATE marketplace_plans SET stripe_price_id = 'price_xxx' WHERE name = '10 Credits';
UPDATE marketplace_plans SET stripe_price_id = 'price_xxx' WHERE name = '25 Credits';
UPDATE marketplace_plans SET stripe_price_id = 'price_xxx' WHERE name = '50 Credits';
```

### 2. Register the Webhook Endpoint

In Stripe Dashboard → Developers → Webhooks, add:

```
https://voltsolenergy.com/api/market/stripe/webhook
```

Listen for these events:
- `checkout.session.completed`
- `invoice.paid`
- `customer.subscription.deleted`
- `customer.subscription.updated`

Copy the signing secret into `STRIPE_WEBHOOK_SECRET`.

### 3. Local Development with Stripe CLI

```bash
stripe listen --forward-to localhost:3000/api/market/stripe/webhook
```

Use the temporary signing secret printed by the CLI for `STRIPE_WEBHOOK_SECRET`
during local development.

---

## Credit System

| Tier | Monthly Price | Monthly Credits | Max Markets |
|---|---|---|---|
| Starter | $99/mo | 20 cr | 1 |
| Pro | $249/mo | 60 cr | 3 |
| Market Leader | $599/mo | 150 cr | 10 |

| Credit Pack | Price | Credits |
|---|---|---|
| 10 Credits | $49 | 10 |
| 25 Credits | $99 | 25 |
| 50 Credits | $179 | 50 |

**Lead credit costs:**

| Score | Cost | Criteria |
|---|---|---|
| `hot_lead` | 3 cr | Owns home AND monthly bill ≥ $200 |
| `standard` | 2 cr | Owns home OR bill ≥ $150 (not both) |
| `low_priority` | 1 cr | Renter or low bill |

Hot leads are tier-gated: only Pro and Market Leader subscribers can claim them.

---

## Owner Operations (Hugo / Wayne)

The first tenant with `is_owner = true` in `marketplace_tenants` gets:
- First pick of all leads (bypasses tier gating and geo filters)
- Access to `/app/admin` — full tenant, lead, and dispute management
- Ability to manually grant or deduct credits for any tenant
- Ability to approve or deny lead quality disputes

### Creating the Owner Account

```bash
# 1. Sign up via /app/signup (creates tenant + user)
# 2. Then set is_owner=true in the DB:
psql $NEON_DATABASE_URL -c "
  UPDATE marketplace_tenants SET is_owner = true
  WHERE email = 'hugo@voltsolenergy.com';
"
```

Or use the Neon console SQL editor.

---

## Dispute Flow

1. Subscriber opens a dispute from `/app/dashboard` (max 3 per 30 days).
2. Owner sees the dispute in `/app/admin` → Disputes tab.
3. Owner approves (refunds credits) or denies.
4. Approved disputes credit the subscriber's ledger automatically.

Valid dispute reasons: `bad_phone`, `bad_email`, `duplicate`, `outside_area`, `other`.

---

## SEO Pages

24 static pages generated at build time from `src/lib/market-data.ts`:

```
/market/solar/california/placer-county/roseville
/market/solar/california/placer-county/rocklin
/market/solar/california/placer-county/lincoln
... (21 more)
```

Each page has:
- City-specific `<title>` and `<meta description>`
- `LocalBusiness` + `Service` + `BreadcrumbList` JSON-LD structured data
- Internal mesh links to neighboring cities and counties
- Lead capture form with TCPA-compliant consent checkbox

To add more markets: edit `src/lib/market-data.ts` and re-run `seed-markets.js`.

---

## Lead Intake & Scoring

`POST /api/market/leads` accepts:

```json
{
  "firstName": "Jane",
  "lastName": "Smith",
  "email": "jane@example.com",
  "phone": "(916) 555-1234",
  "city": "Roseville",
  "state": "CA",
  "zip": "95661",
  "ownsHome": "yes",
  "monthlyBill": "$200-$250",
  "sourcePage": "/market/solar/california/placer-county/roseville",
  "intent": "get_quote",
  "consentJson": { "version": "1.0", "form_id": "market-solar-v1", "timestamp": "...", "ip": "...", "wording": "..." }
}
```

Built-in protections:
- Honeypot field (`website`) — bots filling it are silently rejected
- Rate limit: 5 submissions per IP per 15 minutes
- Zod schema validation
- TCPA consent stored verbatim (wording, version, timestamp, IP)

---

## Owner Reserve Window

When a lead is captured, it enters `owner_reserved` status for 15 minutes
(configurable via `marketplace_tenants.owner_reserve_minutes`). During this
window only the owner tenant can claim it. After the window expires it becomes
`available` to all eligible subscribers.

This is disclosed in the pool UI ("Owner reserve window active").

---

## Demo / Testing

```bash
# Seed 8 demo leads (3 hot, 3 standard, 2 low priority) across 6 counties
node scripts/seed-demo-leads.js

# All demo emails end in @example-test.com — easy to filter/delete
DELETE FROM marketplace_leads WHERE email LIKE '%@example-test.com';
```

---

## Key Files Reference

| Path | Purpose |
|---|---|
| `sql/005_marketplace.sql` | Full schema — 10 tables + plan seed |
| `sql/006_marketplace_prefs.sql` | Tenant prefs migration |
| `src/lib/db.ts` | Neon SQL client (shared) |
| `src/lib/market-pool.ts` | FCFS pool service (claim, balance, tier) |
| `src/lib/market-auth.ts` | Session helpers (scrypt password, cookie) |
| `src/lib/market-data.ts` | Static market config for 24 cities |
| `src/lib/stripe.ts` | Stripe client with graceful no-op |
| `src/components/market/ConsentCheckbox.tsx` | TCPA consent component + buildConsentJson |
| `src/components/market/PoolClient.tsx` | Lead pool interactive UI |
| `src/components/market/DashboardClient.tsx` | Claimed leads + outcome + dispute UI |
| `src/components/market/OwnerAdminClient.tsx` | Owner admin tabs |
| `src/app/market/[vertical]/[state]/[region]/[city]/page.tsx` | SEO city pages |
| `src/app/app/(protected)/` | Subscriber app shell (pool, dashboard, billing, onboarding, admin) |
| `src/app/api/market/` | All marketplace API routes |
| `scripts/seed-markets.js` | Seed 24 NorCal markets |
| `scripts/seed-demo-leads.js` | Seed 8 demo leads for testing |
