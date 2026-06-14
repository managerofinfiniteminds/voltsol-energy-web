# VoltSol Admin — Simplify & Leads-Focus Spec

**Author:** Product/UX review (Opus)
**Date:** 2026-06-13
**Scope:** STRATEGY / SPEC ONLY — no code in this doc.
**Mandate (Wayne, verbatim):** "Get rid of campaigns. Just keep things simple leads focus. Review with opus that this workflow really makes sense. Put instructions in place for admin on how things work. Show/hide inline instructions… make the experience super easy." Plus: put the VoltSol logo on the admin page.

## TL;DR — The Recommendation

VoltSol's admin is a **one-operator (Hugo), mostly-mobile, single-goal tool**: turn an inbound solar lead into a booked/won customer. It is currently over-built like a small CRM — two parallel lead lists from two tables, a campaign management system, a separate analytics tab, and a schedule tab. That's enterprise scaffolding on a one-person job.

**Decisions (all decisive, no options):**

1. **Collapse to 2 tabs: `Leads` and `Schedule`.** Kill the standalone Contacts tab and the Analytics tab from the nav. The few numbers worth seeing become stat cards on top of the Leads page (already mostly there).
2. **One lead list wins: `engine_leads` via `LeadConsole`** at `/admin/leads`, promoted to the admin home (`/admin`). The old `contacts` page is retired and redirected.
3. **Campaigns: remove 100% from the UI. Keep capturing `campaign_code`/attribution silently server-side.** Hugo never sees the word "campaign" again.
4. **Add a show/hide "How this works" help system** — one collapsible panel at the top of the Leads page (localStorage "seen" state, open by default first visit) + small `?` tooltips on the key controls (Status, HOT badge, Sale $).
5. **Logo in the header**, left side, replacing the "VOLTSOL ADMIN" text: bolt mark (`voltsol-mark.svg`) + "VoltSol" wordmark + a muted "Admin" tag.

This is purely simplification. No new data model, no risky migrations required for P1–P3.

---

## 1. Information Architecture — Final Nav

### Current (4 tabs)
`Triage (/admin/leads)` · `Contacts (/admin)` · `Analytics (/admin/dashboard)` · `Schedule (/admin/schedule)`

Problems:
- **Triage and Contacts are two views of two different lead tables** — duplicated, confusing, and a data-integrity trap (which list is "real"?).
- **Analytics is a whole tab** for a one-person shop that mostly needs "how many hot leads do I have right now."
- "Triage" is jargon. Hugo thinks in "leads," not "triage."

### FINAL nav (2 tabs)
```
[ VoltSol bolt + wordmark | Admin ]        Leads   Schedule        Logout
```

- **Leads** → `/admin` (LeadConsole becomes the home page). Renamed from "Triage" to **"Leads"** — plain language.
- **Schedule** → `/admin/schedule` — keep as its own tab. It's a genuinely different mode (managing time-slot availability + viewing booked appointments) and Hugo uses it episodically, not in the lead-working flow. Merging it into Leads would clutter the one screen that must stay clean.

**Why not 1 tab?** Schedule is a distinct job with its own calendar UI and a different mental mode (offer my time vs. work my leads). Two tabs is the floor; collapsing further hurts more than it helps.

### Where analytics go
Kill the Analytics tab. The only numbers a solo operator acts on are already the three stat cards in LeadConsole:
- **Total Leads**, **Hot Leads**, **New (Uncontacted)**.

Add two more lightweight cards that matter for a sales operator:
- **Won this month** (count + summed `sale_value`)
- **Quoted (awaiting)** (count) — these are deals in flight.

That's the entire "analytics" need for one operator. The funnel/attribution/time-series dashboard is removed from the nav. (Keep the `/api/admin/analytics` + `/admin/dashboard` route files on disk, just unlinked — see §7 — so nothing breaks and Wayne can revisit later.)

---

## 2. Campaigns — Remove from UI, Keep in Backend

**Confirmed split:**

### Remove from UI (Hugo must NEVER see)
- The entire **Campaign Management** section in `/admin/page.tsx` (create campaign, toggle active, list campaign codes).
- The **campaign filter** dropdown and **campaign column** in any lead list.
- All **attribution rows** (campaign_code / campaign_name / rep / utm) on the dashboard.
- The word "campaign" anywhere in admin chrome.

### Keep in backend (silent — do not touch)
- `campaign_code` / attribution **continues to be captured** on inbound leads. The capture path is server-side and untouched:
  - `src/lib/attribution.ts`, `src/lib/campaigns.ts`
  - `/go/[code]` QR/door-knock landing route (public, keep working)
  - `src/lib/engine-ingest.ts` (writes `utm_campaign`, attribution)
  - `/api/engine/v1/leads`, `/api/inquiries`, `/api/events`
- The `/api/admin/campaigns` route can stay on disk **unlinked** (no UI calls it). Optional later cleanup; not required and not worth the risk now.

**Net effect:** attribution data keeps flowing into the DB for future reporting, but the operator-facing surface has zero campaign concepts. If Wayne ever wants door-knock attribution back, it's a backend report, not Hugo's daily tool.

**Specifically what disappears from Hugo's screen:** the "Campaigns" management block, any "Campaign" filter, any "Campaign" table column, and the campaign_code shown on a lead card. (Internally the lead still carries it; just not rendered.)

---

## 3. The Two Lead Lists — Collapse to One

**Winner: `engine_leads` + `LeadConsole`.** It is newer, richer (28 cols, full signal row, score badges, status + sale value + notes, relative time, filters, stats), and already mobile-friendly cards. The old `/admin` contacts page (675 lines, reads legacy `contacts` table, carries campaign UI) loses.

### Actions
1. **Promote LeadConsole to the admin home.** Make `/admin` render the Leads view (move/point the LeadConsole page to `/admin`, or redirect `/admin/leads` ↔ `/admin` — pick one canonical URL; recommend canonical = `/admin`, with `/admin/leads` 308-redirecting to it so existing bookmarks survive).
2. **Retire the old contacts page.** Replace `/admin/page.tsx`'s contents with the LeadConsole (or redirect). Delete the duplicate table/card/campaign code.
3. **Legacy `contacts` table data:** Determine coverage before deleting anything.
   - The empty-state copy in LeadConsole says leads appear "after engine migration 007 is run and data is backfilled" — which implies a backfill from `contacts` → `engine_leads` was the intended path.
   - **Decision:** Treat `engine_leads` as the single source of truth. **Before P3 ships, run a one-time reconciliation check**: count rows in `contacts` that have no matching `engine_leads` row (match on email/phone). 
     - If the count is ~0 → legacy is already represented; safe to retire the contacts UI outright.
     - If there are orphan legacy leads → run a one-time backfill insert into `engine_leads` (map the overlapping columns; unknown signal fields = null, score defaults to `standard`). Do **not** keep a second live UI just to display them.
   - **Never** maintain two live lead lists. One table, one screen.
4. Keep `/api/admin/contacts` and `/api/admin/export` on disk (export is useful) but the contacts route is no longer the primary read path.

---

## 4. Inline Instructions / Onboarding — Show/Hide Help

### Interaction design
Two layers, both dead-simple:

**(A) "How this works" panel** — a collapsible banner pinned to the top of the Leads page.
- **Default open on first ever visit** (no localStorage key set). After Hugo collapses or dismisses it, store `voltsol_help_seen = "1"` in `localStorage` and keep it collapsed on return.
- Always re-openable via a small **`?` / "How this works"** toggle in the page header — so it's never lost, just out of the way.
- Collapsed state = a single slim row: `❔ How this works` (tap to expand). Expanded = the panel below.

**(B) Per-control hints** — tiny `?` icons next to three controls (Status, the HOT badge legend, Sale $). Tapping shows a one-line popover/tooltip. On mobile, tap-to-toggle (not hover). Keep them off by default; they're for the moment of doubt.

### Exact microcopy

**(A) Top panel — "How this works" (expanded):**

> **👋 Your daily job: turn leads into customers.**
> New leads land at the top. Here's the routine:
> 1. **Start with 🔴 HOT leads** — these people own their home, have a high power bill, and want to move soon. Call them first, today.
> 2. **Tap the phone number to call** right from your phone. Tap the email to email.
> 3. **After you reach them, set the Status** so you remember where things stand.
> 4. **When a deal closes, set Status to "Won" and type the sale amount in Sale $.**
> 5. To offer appointment times, use the **Schedule** tab.
>
> That's it. Work the list top to bottom, HOT first. _(Tap ❔ any time to see this again.)_

**(B) Per-control hints:**

- **HOT badge (legend):**
  > 🔴 **HOT** = owns home + high bill + ready soon. Call these first.
  > 🟡 **Standard** = a real lead, just less urgent. 
  > ⚪ **Low** = missing key info or unlikely. Work these last.

- **Status dropdown (`?`):**
  > Where this lead stands:
  > • **New** — nobody's contacted them yet.
  > • **Contacted** — you reached out.
  > • **Quoted** — you sent a price.
  > • **Won** — they bought. 🎉 (Add the amount in Sale $.)
  > • **Lost** — not happening.
  > Keep this updated so you always know your next move.

- **Sale $ (`?`):**
  > The dollar value of the deal once it's Won. Lets you see your total sales.

- **New (Uncontacted) stat card (`?`):**
  > Leads nobody has called yet. Aim to keep this number low.

- **Empty state (rewrite the current dev-y message):**
  > No leads yet. New leads from your website and ads will show up here automatically — newest and hottest at the top.

### Tone rules
Plain English, second person ("you"), action verbs, no jargon ("triage," "engine," "migration 007," "pipeline" all banned from Hugo's view). Emojis used sparingly as visual anchors only.

---

## 5. The Ideal Hugo Workflow

**Daily flow (target):**
1. Hugo opens admin on his phone → lands on **Leads** (the home page).
2. Top stat cards immediately tell him: **3 Hot · 5 New**. He knows the size of today's job in one glance.
3. List is sorted **HOT first, then newest** (already the intent). He sees a 🔴 HOT card at the top: name, city, big signals row (🏠 owns, ⚡ $300+ bill, 📅 ASAP).
4. He **taps the phone number → native dialer opens → calls.**
5. After the call he sets **Status → Contacted** (or Quoted) and adds a quick note. Saves.
6. Repeats down the HOT leads, then New standard leads.
7. If a lead wants to meet, he switches to **Schedule**, opens a couple of time slots; the customer books via the public `/book` → `/start` calendar.
8. When a deal closes: **Status → Won + Sale $**. The "Won this month" card ticks up — his scoreboard.

**Friction / gaps in the current design (fix as part of this work):**
- **No explicit sort guarantee surfaced to the user.** LeadConsole shows cards but the "HOT first, then timeline/bill" ordering must be enforced and obvious. Confirm the `/api/admin/leads` query orders by score (hot first) then `created_at desc`. If not, fix it — this is the backbone of the whole flow.
- **Save is a manual step that only appears on change.** Good, but make the Save button big and thumb-friendly on mobile; consider auto-confirm toast ("Saved ✓") so Hugo trusts it took.
- **No "needs follow-up" nudge.** Optional later: a lead stuck in "Contacted" for N days could surface. Not P1 — note as future.
- **Two lead lists today = Hugo could work the wrong one.** Collapsing to one (§3) removes the single biggest workflow hazard.
- **Status includes `stale`** in the enum but it's not operator-meaningful. Hide `stale` from Hugo's Status dropdown (keep it as a system/auto value only) to reduce choices to the 5 that matter: New / Contacted / Quoted / Won / Lost.
- **Click-to-call is already implemented** (`tel:` links) — good, that's the killer mobile feature; keep it prominent.

---

## 6. Logo Placement

**Asset:** `public/images/voltsol-mark.svg` (bolt mark). A horizontal logo also exists: `public/images/voltsol-logo-horizontal.svg`.

**Placement:** Header, **left**, replacing the current plain text `VoltSol Admin`:
- Render the **bolt mark (`voltsol-mark.svg`)** ~24–28px tall, followed by the **"VoltSol" wordmark** (text is fine, brand styling), then a small muted **"Admin"** tag/pill in slate.
- Simplest robust option: use `voltsol-logo-horizontal.svg` (mark + wordmark already combined) at a fixed height, then the muted "Admin" label beside it. One image, no alignment fuss.
- The logo links to `/admin` (home / Leads).
- Keep it compact on mobile: show the **mark only** (bolt) + "Admin" under `sm:` breakpoint to save the top bar for nav; show full wordmark on `sm:` and up.

Result header (desktop):
```
[⚡ VoltSol · Admin]      Leads   Schedule              ❔  Logout
```
Mobile keeps the existing bottom-tab-style row; logo mark sits in the top bar.

---

## 7. Build Plan (Phased, Engineer-Ready)

Ordered by impact. P1 is the visible win Wayne asked for and is low-risk.

### P1 — Nav + Logo + Campaign UI removal *(SAFE / additive + deletions of UI only)*
- **Files:** `src/app/admin/layout.tsx`
  - Reduce `NAV_LINKS` to `Leads (/admin)` and `Schedule (/admin/schedule)`.
  - Replace the `VoltSol Admin` text node with the logo (mark/horizontal SVG + muted "Admin"). Add a `?` help toggle slot in the header (wire in P3).
  - Rename label "Triage" → "Leads".
- **Files:** `src/app/admin/page.tsx`
  - **Remove the entire Campaign Management block** and any campaign filter/column. (If retiring contacts page here, see P2; for P1 just strip campaigns so nothing campaign-related renders.)
- **Risk:** Low. Pure UI. No DB, no API. Backend campaign capture untouched.

### P2 — Collapse to one lead list *(STRUCTURAL — moderate risk)*
- **Files:** `src/app/admin/page.tsx`, `src/app/admin/leads/page.tsx`, `src/app/admin/layout.tsx`
  - Make `/admin` render `LeadConsole` (move the wrapper from `/admin/leads/page.tsx` to `/admin/page.tsx`). 308-redirect `/admin/leads` → `/admin`.
  - Delete the legacy contacts table/card UI from `/admin/page.tsx`.
  - Rewrite the page heading from "Lead Console" / "Triage queue for engine leads" to "**Leads**" / friendly subtitle.
- **Pre-req check (do first):** Reconciliation query `contacts` vs `engine_leads` (orphans by email/phone). If orphans exist, run one-time backfill into `engine_leads`. Document the count in the PR.
- **Confirm ordering:** ensure `/api/admin/leads` returns HOT first, then newest. Fix if needed.
- **Risk:** Moderate (data coverage). The redirect + single source of truth is the core simplification. Backfill is the only DB touch and it's additive (insert missing rows).

### P3 — Inline help system *(SAFE / additive)*
- **Files:** `src/components/admin/LeadConsole.tsx` (+ a small `HelpPanel` / `Hint` component, + header `?` toggle in `layout.tsx`).
  - Add the collapsible "How this works" panel (localStorage `voltsol_help_seen`, open first visit).
  - Add `?` hint popovers on Status, HOT legend, Sale $, and the New stat card.
  - Rewrite the dev-flavored empty-state copy (§4).
  - Hide `stale` from the operator Status dropdown (keep New/Contacted/Quoted/Won/Lost).
- **Risk:** Low. Self-contained, client-only.

### P4 — Operator scoreboard cards *(SAFE / additive)*
- **Files:** `LeadConsole.tsx` (+ possibly `/api/admin/stats` or compute client-side from fetched leads).
  - Add "Won this month" (count + $ sum) and "Quoted (awaiting)" cards.
- **Risk:** Low. Can compute from already-fetched leads client-side to avoid API changes.

### P5 — Cleanup / debt *(OPTIONAL, do later)*
- Unlink `/admin/dashboard` (already removed from nav in P1); decide whether to delete the route + `/api/admin/analytics` or keep for future. Recommend **keep on disk, unlinked** for now.
- Optionally retire `/api/admin/campaigns` and old `contacts` read path once P2 backfill is confirmed complete.
- **Risk:** Low if just unlinking; higher if deleting routes — defer.

### What's safe vs structural
- **Purely additive / safe:** P1 (UI), P3 (help), P4 (cards), P5-unlink.
- **Structural (needs care + the reconciliation check):** P2 (single lead list + redirect + possible backfill).

---

## Appendix — Banned-from-UI vocabulary
"Triage," "campaign," "engine," "migration," "backfill," "pipeline," "attribution," "utm," "stale." Hugo sees: **Leads, Hot, New, Contacted, Quoted, Won, Lost, Sale, Schedule, Appointments.**
