# VoltSol Energy — Lead-Generation Website Plan
### A database-backed conversion engine for off-grid solar (EG4), built loop-first

**Prepared for:** Wayne Kool / Hugo
**Author:** VoltSol AI ⚡
**Date:** June 8, 2026
**Supersedes:** voltsol-ai-video-plan.md (video shelved — website is now the whole focus)

---

## 0. WHAT CHANGED & WHY

- **Video: scrapped for now.** Effort consolidates into the website.
- **Soul of the app = lead generation** for the technology Hugo sells (EG4 off-grid hybrid solar).
- **The site sells the technology, not a person** — we steal tommymello.com's *craft* (flow, bold typography, animated stats, social-proof bars, alternating bands, sticky CTAs) but the authority is the **system**, not a personality.
- **Build method changes too.** Per the Van Horn/Boris Cherny "loops" piece: we stop hand-prompting Claude Code one-off. We write an **orchestration loop** with sharp skills, self-verification, and hard stops. Claude Code 2.1.71 (installed) supports `/loop`, `/goal`, `--max-budget-usd`, auto-mode — so this is native, not hacked.

---

## 1. THE NARRATIVE (the sizzle that generates leads)

Three components, one story a homeowner gets in 30 seconds:

> **MAKE IT** (solar panels) → **STORE IT** (EG4 battery) → **LIVE ON IT** (EG4 hybrid inverter + mini-split heat pump).

Emotional arc, top to bottom of the page: **Anger → Curiosity → Hope → Belief → Trust → Action.**

| Section | Emotion | Job |
|---|---|---|
| Hero | Anger/recognition | "The sun doesn't send a bill." Bold claim + instant CTA + [VIDEO PLACEHOLDER] |
| The Trap | Validated anger | PG&E rates climb; "normal solar" = $40k loan, still grid-tied, still dark in a blackout |
| How It Works | Hope / "aha" | **Animated energy-flow diagram**: panels→inverter→battery→home+AC. The core explainer. |
| The Technology | Belief | EG4 FlexBOSS18 + WallMount battery + mini-split. Real specs, real product imagery, proof badges |
| The Number | Disbelief→belief | **Under $10,000.** Off-grid capable for a fraction of a traditional $40k loan. Break-even animation. (Wayne-confirmed framing: "under $10,000" — Hugo to confirm final exact figure/disclaimer.) |
| Meet Hugo | Trust | Real installer, NorCal, real installs. [Hugo photo/video placeholders] |
| Lead Capture | Action | The quote form — the whole point. Multi-step, low friction. |

**Proof points to feature:** off-grid CAPABLE, EMP-hardened inverter, 8,000–10,000 cycle batteries, IP65 weatherproof, 10-yr warranty, one installer to call, heat & cool included (most installers ignore HVAC).

---

## 1.5 MOBILE-FIRST (non-negotiable, design from the phone up)

Most leads arrive on a phone — especially the door-knock → QR flow. We design the phone layout FIRST, then scale up to desktop. Not "responsive as an afterthought."

- Every section composed for a 390px viewport before anything wider.
- Thumb-reachable CTAs; sticky bottom "Get My Quote" bar on mobile.
- Savings estimator + multi-step form touch-optimized (big tap targets, numeric keypads, one decision per screen).
- The energy-flow diagram reflows vertically on mobile (stacked, animated on scroll).
- QR landings open straight into a mobile-tuned campaign page — zero pinch-zoom, instant load (<2s on 4G).
- Test gate every phase: real mobile-viewport Playwright screenshots, not just desktop.

## 1.6 DOOR-KNOCKER → QR → LEAD FLOW (the field funnel)

Hugo (or a rep) knocks a door, hands a card/hanger with a QR code. Homeowner scans → lands on a campaign page → converts. The whole chain is tracked.

- **Dynamic QR per campaign/rep** → `voltsolenergy.com/go/[code]?src=door&rep=[id]`
- Source, campaign, and rep captured on the lead record — we know which neighborhood, which rep produces leads.
- Landing page pre-frames "A VoltSol rep was just at your door" for continuity + trust.
- One-tap call/text Hugo button + the quote form, both above the fold on mobile.
- QR scans tracked as their own funnel event (scan → page → form-start → form-complete → lead).

## 2. DESIGN SYSTEM (premium — no skimping on design elements)

- **Palette:** deep navy/charcoal (#0B1120 / #1E293B) + solar-gold/amber (#FBBF24 / #F59E0B) + clean white. Trust + energy + premium. (Translates Mello's red/charcoal into solar.)
- **Type:** bold all-caps display (e.g. Satoshi / Cabinet Grotesque / Clash Display) + clean humanist body (Inter). Premium pairing.
- **Motion:** scroll-triggered reveals, animated stat counters, the hero energy-flow diagram animates on view. Framer Motion.
- **Components:** animated counters, scrolling cert/logo bar, alternating full-width bands, sticky header CTA, multi-step lead form, FAQ accordion, sticky mobile "Get Quote" bar.
- **Imagery:** real EG4 product PNGs (downloaded + optimized to /public, not hotlinked). Custom-built **animated SVG energy-flow diagram** (no licensing risk, fully on-brand). Clear `[VIDEO PLACEHOLDER]` and `[IMAGE: hugo-install-1]` slots where Hugo's real media drops in later.
- **Quality bar:** premium libraries only for design — Framer Motion, Tailwind, Radix primitives, Lucide icons. Lighthouse 95+ target.

---

## 3. ARCHITECTURE (database-backed application)

Build on what's already live (we keep the working lead system, rebuild the front-end around it).

- **Framework:** Next.js (App Router) + TypeScript + Tailwind — already in repo
- **DB:** Neon Postgres 17 (already provisioned) — `campaigns` + `contacts` tables already exist
- **Email:** Resend (domain verified) — confirmation to lead + alert to sales@
- **Hosting:** Vercel (project locked to `prj_540vlIhr5rXc1c8iGBydi2lD1uDf`)
- **Admin:** existing /admin dashboard (lead table, status, CSV export, campaigns) — keep & restyle

### Lead-gen tooling to add (the "all the tools needed" ask)
1. **Multi-step quote form** — progressive disclosure (address → home size → current bill → contact). Higher completion than one long form.
2. **Lead scoring** (already designed: hot/standard/low) — surface score in admin + email alert.
3. **Instant savings estimator** — homeowner enters monthly PG&E bill → animated payback estimate. *Biggest conversion lever.* Captures email to "send full report."
4. **Campaign landing pages** `/go/[code]` — already live, restyle to match.
5. **UTM + source + rep capture** — store referrer/UTM/source/rep on every lead (door-knock vs social vs QR ROI).
6. **Dynamic QR per campaign/rep** — script exists (`scripts/gen-qr.js`), wire to campaign codes + rep IDs.
7. **Exit-intent / sticky CTA** — capture before bounce.

### 3.5 DATA & ANALYTICS LAYER (data drives every marketing decision)

Its own pillar, not a footnote. Every interaction is an event in the DB; dashboards turn events into decisions.

- **Event tracking (first-party, in Neon):** page_view, qr_scan, estimator_start, estimator_complete, form_step_1..n, form_complete, lead_created — each stamped with campaign, source, rep, UTM, device, timestamp.
- **Funnel analytics:** scan → page → estimator → form-start → form-complete → lead → contacted → estimate → closed. Drop-off visible at every step.
- **Attribution:** which campaign / neighborhood / rep / channel produces the cheapest qualified lead. Door-knock vs social vs paid, side by side.
- **Marketing dashboard (`/admin/dashboard`):** live KPIs — leads by source, conversion rate per step, hot-lead %, cost-per-lead (when spend entered), top campaigns/reps, time-series trends, lead geography.
- **Lead pipeline board:** new → contacted → estimate booked → closed, status changes logged for funnel math.
- **Decision loop:** dashboards expose what's working → double down on winning campaigns/reps, kill losers. Data drives the marketing.

---

## 4. PHASED, ITERATIVE BUILD (loop-driven)

Each phase is a **loop**: write intent + acceptance criteria → Claude Code builds → self-verifies (typecheck, build, lint, screenshot) → I review against criteria → next phase. Hard stops on every loop: max iterations + `--max-budget-usd` ceiling + no-progress detection.

### Phase 1 — Foundation & Design System (loop 1)
- Tailwind theme (palette, type, motion tokens), base layout, header/footer, fonts, component primitives.
- **Acceptance:** builds clean, theme tokens applied, responsive shell, Lighthouse 90+.

### Phase 2 — The Narrative Page (loop 2)
- Hero → Trap → How-It-Works (animated SVG energy-flow) → Technology (EG4 specs + product imagery) → The Number → Meet Hugo. All placeholders wired.
- **Acceptance:** full scroll experience, animations fire, all sections present, mobile clean, placeholders clearly marked.

### Phase 3 — Lead-Gen Engine (loop 3)
- Multi-step quote form + savings estimator, wired to existing Neon `contacts` + Resend + lead scoring + UTM capture.
- **Acceptance:** test lead writes to DB, both emails fire, score computes, funnel events track.

### Phase 4 — Admin + Campaigns + QR + Analytics Dashboard (loop 4)
- Restyle admin, campaign pages `/go/[code]` (with src/rep), dynamic QR wiring, CSV export.
- **Event tracking layer** + **marketing dashboard** (`/admin/dashboard`): funnel, attribution, KPIs, pipeline board, geography.
- **Acceptance:** create campaign → generate QR → scan/submit via /go/code?src=door&rep=X → lead appears in admin WITH source/rep, and the event shows in the funnel dashboard with correct attribution.

### Phase 5 — Polish & Launch Prep (loop 5)
- Performance pass (image optz, Lighthouse 95+), SEO/meta/OG, accessibility, CCPA privacy page, final review.
- **Acceptance:** Lighthouse 95+, a11y pass, all legal pages, ready for DNS cutover.

> Merge `feature/lead-capture` → main and DNS cutover happen ONLY on your explicit "push to prod."

---

## 5. THE LOOP MECHANICS (how Claude Code runs it)

Confirmed by Wayne's loop diagram: **loop = schedule + model decision + tools + feedback + durable state + hard limits.** Applied to this build:

- **Loop controller prompts the agent each tick** (not me hand-prompting). Human writes intent + stopping behavior; the loop drives.
- **Feedback gate before "Done?":** tests, review, metrics, validator — no phase ships without passing its gate (loops back on fail).
- **Durable state:** git-backed; each phase commits so work survives restarts.
- Plus the original lessons — skills + self-verification + hard stops:

- **Self-verification baked in:** every loop ends with `npm run build && npx tsc --noEmit && npm run lint` and a Playwright screenshot for visual confirmation. A loop is only as trustworthy as its ability to check its own work.
- **Skills, not re-derivation:** reusable task files (build-section, wire-form, optimize-images) so loops compound instead of re-deriving.
- **Hard stops:** `--max-budget-usd` per phase, max-iteration cap, no-progress detection. Prevents runaway billing (the article's central warning).
- **Execution:** the proven nohup pattern from MEMORY.md, upgraded to drive phases sequentially with a verification gate between each. I monitor, you approve phase gates.
- **Premium for design:** Opus-tier reasoning for the design/narrative phases (1 & 2); Sonnet for the plumbing phases (3 & 4) to control cost — premium where it shows, efficient where it doesn't.

---

## 6. CLAUDE CODE READINESS — ANSWER

**Yes.** Installed: **Claude Code 2.1.71** at /opt/homebrew/bin/claude. It supports:
- `--print` non-interactive + `--permission-mode bypassPermissions` (our nohup pattern works)
- `--max-budget-usd` (the hard-stop dollar ceiling the loops need)
- `--model` per-run (Opus for design, Sonnet for plumbing)
- `--fallback-model`, `--agents` (custom sub-agents), `/loop` + `/goal` natively
- `--output-format stream-json` for programmatic loop control

The latest CC is fully set up for the loop-driven, phased, self-verifying approach.

---

## 7. OPEN DECISIONS (need you/Hugo before I fire)

1. ~~**Pricing/number**~~ ✅ **RESOLVED:** frame as **"under $10,000"** (Wayne, 6/8). Hugo to confirm exact final figure + any "starting at / typical install" disclaimer language before prod.
2. **Panel brand** — EG4 inverter/battery/mini-split confirmed. Which PV panels does Hugo install? (affects copy)
3. **Hugo's media** — any real install photos/video now, or all placeholders for v1?
4. **Domain cutover timing** — build & preview on vercel.app first; cut DNS only on your go.
5. **Model spend** — OK to use Opus for design phases (1–2), Sonnet for plumbing (3–4)?

---

## ⚡ One-paragraph pitch
*We rebuild voltsolenergy.com as a premium, database-backed lead engine that sells the EG4 off-grid system as one clear story — make it, store it, live on it — wrapped in tommymello.com-grade design but built around the technology, not a face. A savings estimator and multi-step quote form turn anger at PG&E into booked estimates, every lead scored and tracked to source. We build it loop-driven with Claude Code: phased, self-verifying, budget-capped — premium reasoning where design shows, efficient where it's plumbing. You approve each phase gate; nothing hits prod without your word.*
