# VoltSol Lead Engine — V1 Spec, Review & Gaps Analysis

**Date:** 2026-06-13
**Author:** VoltSol (⚡) for Wayne
**Status:** PRE-BUILD — review doc. Build via Claude Code loop after Wayne signs off.

---

## 0. The Decision (from Wayne)

1. The **Lead Generation Engine is its own product**, with a clean API. The VoltSol Energy
   marketing site is its **first consumer**, not its owner.
2. **Start with Hugo as client zero** — a "marketplace of one." No partners, no territories,
   no credits, no Stripe in V1.
3. **Goal of V1:** real-world testing. Hugo runs local SEO → leads flow into the engine →
   Hugo works them → we instrument outcomes (won/lost + $ value) to learn what converts.
4. **Engine must be scalable** so flipping on multi-tenant / partners later is a config change,
   not a rewrite.
5. Richer lead cards — enough detail to triage/sell, not just yes/no.

---

## 1. Current State — What's Actually in the Repo

### Two parallel, non-integrated lead systems

| Aspect | Site leads | Marketplace leads |
|---|---|---|
| Table | `contacts` (001) | `marketplace_leads` (005) |
| Sources | `/`, `/go/[code]`, `/estimate`, `/book` | `/market/*` SEO city pages |
| Intake | `/api/inquiries`, `/api/book` | `/api/market/leads` |
| Scoring | `src/lib/lead-scoring.ts` — expects `'Yes, I own it'`, `'$200–$300'` | inline in route — expects `'yes'`, `'$200-$250'` |
| Auth/admin | `/admin/*`, cookie `admin_session` (static password) | `/app/*`, cookie `mp_session` (DB session) |
| Extra machinery | campaigns, booking, appointments, lead_events analytics | markets, claims (FCFS+UNIQUE), credit_ledger, Stripe, disputes, tenants |

### The core gap
A "lead engine product" **does not exist yet** — there are two half-engines with:
- **Duplicated identity fields** (first_name/last_name/email/phone/owns_home/monthly_bill)
- **Incompatible enum values** for the SAME concept (`'Yes, I own it'` vs `'yes'`;
  `'$200–$300'` vs `'$200-$250'`) → two scoring code paths that will silently disagree
- **Two admin surfaces** with two auth models
- No shared canonical lead record, no shared API contract

### Tech baseline (good news)
- Next.js + `@neondatabase/serverless`, raw SQL via `src/lib/db.ts` (clean, reusable)
- Zod, Resend, Stripe(guarded), framer-motion, tailwind already in place
- Migrations run in sorted order via `scripts/migrate.js`
- 6 migrations applied (001–006). Marketplace tables exist but serve the now-deferred big product.

---

## 2. V1 Architecture — Engine as a Product

```
┌─────────────────────────────────────────────────────────────┐
│  LEAD ENGINE (the product)                                    │
│                                                               │
│  Canonical lead record  ──  Scoring  ──  Outcome tracking     │
│  Ingest API (versioned)  ──  Console (Hugo)  ──  Analytics    │
│                                                               │
│  Multi-tenant-ready: every lead has tenant_id (Hugo = #1)     │
│  Dormant-but-present: claims, credits, Stripe (flagged off)   │
└───────────────▲───────────────────────────▲──────────────────┘
                │ POST /api/engine/v1/leads   │ (later: partner sites)
        ┌───────┴────────┐          ┌─────────┴─────────┐
        │ VoltSol site   │          │ SEO city pages    │
        │ (first consumer)│          │ /market/*         │
        └────────────────┘          └───────────────────┘
```

**Key principle:** ALL lead intake — site forms AND SEO pages — funnels through ONE
versioned engine API writing ONE canonical table. The site stops owning leads; it just
posts to the engine like any other consumer would.

---

## 3. Canonical Lead Model (V1)

Single source of truth. Reconciles the two existing schemas. Multi-tenant from day one.

| Field | Type | Notes |
|---|---|---|
| `id` | serial PK | |
| `tenant_id` | int FK | Hugo = tenant 1. Every lead belongs to a tenant. |
| `vertical` | varchar | `'solar'` default — engine is vertical-agnostic |
| `source_consumer` | varchar | `'voltsol_site'` \| `'seo_city_page'` \| (later) partner key |
| `source_page` | varchar | exact path captured |
| **Identity (revealed to owner; PII-masked only when multi-tenant claim is on later)** | | |
| `first_name`,`last_name`,`email`,`phone` | varchar | |
| `street_address`,`city`,`state`,`zip` | varchar | |
| **Qualifying signals (drive card + score)** | | |
| `owns_home` | enum | CANONICAL values — see §4 |
| `monthly_bill` | enum | CANONICAL ranges — see §4 |
| `timeline` | enum | NEW: `asap` \| `1_3mo` \| `3_6mo` \| `exploring` |
| `utility` | enum | NEW: `pge` \| `smud` \| `sce` \| `other` |
| `roof_shade` | enum | NEW: `full_sun` \| `some_shade` \| `mostly_shaded` |
| `intent` | varchar | `get_quote` etc. |
| `notes` | text | |
| **Engine fields** | | |
| `score` | enum | `hot_lead` \| `standard` \| `low_priority` (computed once, canonically) |
| `status` | enum | `new` \| `contacted` \| `quoted` \| `won` \| `lost` \| `stale` |
| `sale_value` | numeric | NEW: $ on won — THE money metric |
| `attribution_json` | jsonb | utm_source/medium/campaign, referrer, rep, session_id, device |
| `consent_json` | jsonb | TCPA verbatim (wording, version, ts, ip) — keep from marketplace |
| `ip_address` | varchar | |
| `created_at`,`updated_at` | timestamptz | |

**Migration approach:** new `engine_leads` table (additive migration 007). Backfill from
`contacts` + `marketplace_leads` with a mapping script. Old tables stay (non-destructive),
but new intake writes only to `engine_leads`.

---

## 4. Canonical Enums (kills the silent-disagreement bug)

| Concept | Canonical stored value | Display |
|---|---|---|
| owns_home | `own` | "Owns home" |
| | `rent` | "Renter" |
| | `unsure` | "Unsure" |
| monthly_bill | `lt_100` / `100_200` / `200_300` / `gt_300` | "<$100" … "$300+" |
| timeline | `asap` / `1_3mo` / `3_6mo` / `exploring` | "ASAP" … "Just exploring" |
| utility | `pge` / `smud` / `sce` / `other` | "PG&E" … |
| roof_shade | `full_sun` / `some_shade` / `mostly_shaded` | "Full sun" … |

Both the site form AND the SEO form map their inputs to these before POSTing to the engine.
**One `scoreLead()` function** consumes canonical values only.

### Canonical scoring (V1)
- `hot_lead` = `own` AND (`200_300` OR `gt_300`)
- `low_priority` = `rent`
- `standard` = everything else
- (timeline `asap` may bump standard→hot later; keep simple for V1)

---

## 5. Lead Card — Hugo's Triage Queue (not a buyer's enticement)

Purpose flip: V1 cards help **Hugo decide who to call first**, full contact always visible
(he owns every lead). Richer than yes/no.

### Card layout
```
┌────────────────────────────────────────────┐
│ [🔥 HOT]            Roseville, Placer    2h │
│ Jane Smith                                   │
│ 📞 (916) 555-1234   ✉ jane@…                │
│ ──────────────────────────────────────────  │
│ 🏠 Owns home   ⚡ $300+/mo   📅 ASAP         │
│ 🔌 PG&E        ☀️ Full sun                   │
│ ──────────────────────────────────────────  │
│ Status: [New ▾]   Sale $: [____]  [Save]     │
│ 📍 123 Oak St, Roseville CA 95661            │
│ 📝 notes…                                    │
└────────────────────────────────────────────┘
```

Sort: score desc, then `asap` timeline, then bill desc, then recency.
Filters: city, status, score, timeline.

*(PII masking + claim mechanic stay in the codebase but flagged OFF — only re-engage when
multi-tenant partners arrive.)*

---

## 6. Keep / Flag-Off / Build

| | Item |
|---|---|
| **KEEP & polish** | SEO city pages + TCPA, lead_events analytics, Resend alerts, booking/appointments (site feature) |
| **BUILD (new)** | `engine_leads` canonical table (007), versioned `/api/engine/v1/leads`, canonical enums+scoring, Hugo console (rich cards + outcome tracking + sale_value), backfill script |
| **REWIRE** | Site forms (`/api/inquiries`, `/api/book` intake) + SEO form → POST to engine API; map to canonical enums |
| **FLAG-OFF (keep code, dormant)** | claim/FCFS mechanic, credits + credit_ledger, Stripe (checkout/portal/webhook), tiers/plans, public signup, territory/onboarding, disputes, owner-reserve window |

`FEATURE_FLAGS = { MULTI_TENANT:false, CLAIM_MECHANIC:false, CREDITS:false, STRIPE:false, PARTNER_SIGNUP:false, PII_MASK:false }`

---

## 7. Scale Path (V1 → real marketplace, no rewrite)

| V1 (now) | Flip later |
|---|---|
| `tenant_id` always = Hugo (1) | assign per partner; route by territory |
| `PII_MASK=false` (Hugo sees all) | `true` → mask until claimed |
| `CLAIM_MECHANIC=false` | `true` → re-enable existing FCFS+UNIQUE pool |
| `CREDITS/STRIPE=false` | `true` → existing ledger+webhooks light up |
| `source_consumer='voltsol_site'` | partner consumers post with their own keys |
| one console (Hugo) | per-tenant scoped consoles (code already tenant-aware) |

Because the canonical table is multi-tenant and the dormant machinery already exists, scaling
is **config + data**, not new architecture.

---

## 8. Top Risks (V1)

1. **Dual-write / split-brain during migration** — site still writing to `contacts` while engine
   writes `engine_leads`. → Cut intake over atomically; backfill once; old tables read-only.
2. **Enum drift again** — someone adds a new bill range on one form only. → Single shared
   `engine-enums.ts` imported by every form + the API validator (Zod).
3. **Hugo won't log outcomes** → console makes status/sale_value one tap; without it we learn nothing.
4. **TCPA consent regression** when rewiring forms → carry `consent_json` verbatim through the
   engine API; keep ConsentCheckbox.
5. **Over-building V1** → resist re-enabling any flagged-off machinery "while we're in there."

---

## 9. Build Plan (Claude Code loop)

Loop = controller + model (Opus 4.8 / Sonnet, **Fable is dead/404**) + tools + feedback gates
(build + lint + **screenshot/DOM check**, not green-build-only) + durable git state + hard stops
(max iter + budget cap).

**Phases:**
1. Migration 007 `engine_leads` + `engine-enums.ts` + canonical `scoreLead()`
2. Versioned `/api/engine/v1/leads` (Zod-validated, canonical, consent verbatim, attribution)
3. Backfill script (`contacts` + `marketplace_leads` → `engine_leads`, mapped)
4. Rewire site forms + SEO form to the engine API
5. Hugo console: rich cards + filters/sort + outcome+sale_value tracking
6. Feature-flag the marketplace machinery OFF; verify site + SEO + console green (build+screenshot)

Each phase: build → gate → commit. Author = Wayne Kool. Push to prod allowed (per 2026-06-09).
```
