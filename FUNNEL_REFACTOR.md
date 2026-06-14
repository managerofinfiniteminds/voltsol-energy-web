# VoltSol Energy — Funnel & Landing-Page Refactor Audit + Build Plan

**Working doc · strategy/spec only · 2026-06-13**

Owner: Hugo · Technical lead: Wayne · Author: CRO/landing-page strategy pass

> Single business goal: turn a NorCal homeowner with a high PG&E bill into a **captured lead**, and ideally a **booked Google Meet consult**. Every section, every button, every route below is judged by one question: *does it move the visitor one step closer to giving us their info and booking a time?* Nothing else matters.

---

## A) VERDICT — Tighten-in-place vs. Complete Refactor

**Verdict: Complete refactor of the funnel and CTA layer — but NOT a rewrite of the asset base.**

The underlying assets are strong: the copy ("The sun doesn't send a bill," "less than a used car," "The Number" under-$10k reveal) is genuinely good, the lead engine and schema are sound, the /market SEO pages are valuable, and Meet Hugo + CSLB credentials are real trust. The problem is not the parts — it's that there is **no single funnel**. Four CTA labels, two separate capture forms (BookingFlow vs. QuoteForm), a standalone /estimate calculator, and a 12-section narrative arc mean the visitor never gets one clear instruction and the conversion path forks in at least three directions. That is a structural defect that tightening cannot fix; you cannot "tune" your way out of two forms and four CTAs. So: keep the copy, keep the lead engine, keep SEO — but **rebuild the routing, the CTA system, and the capture flow into one canonical path**, and aggressively reduce the homepage. This is a structural refactor of the funnel skeleton, not a content teardown.

---

## B) THE ONE FUNNEL — The Single Canonical Conversion Path

### B.1 The primary CTA (used EVERYWHERE)

**Primary CTA label: `Get My Free Estimate`**

- One label. One action. Every primary button on every page says exactly this.
- The single action it triggers: **open the unified capture flow** (the `EstimateFlow` — see B.3). On the homepage and content pages it scrolls/opens the inline flow or routes to `/start`; it never routes to four different places.
- Rationale for this label over alternatives: "Free Estimate" names the value (a number — exactly what the target customer wants: *"what will this cost me and is it worth it"*) and "Free" lowers commitment. "Get My Quote" implies a hard sales handoff. "Book a Time" front-loads the calendar (the highest-friction step) before any value is established — that is the single biggest funnel leak today.

### B.2 Resolve the BookingFlow vs. QuoteForm split → ONE unified capture

Today there are two forms doing one job:
- **BookingFlow** (/book): calendar/time booking.
- **QuoteForm** (/go/[code]): address + contact, no calendar.

**Decision: merge into ONE component — `EstimateFlow`** — a single multi-step flow that contains the qualifying questions, contact capture, AND the calendar as its final step. QuoteForm and BookingFlow are deleted as separate entities; their fields are absorbed as steps inside `EstimateFlow`. Campaign pages (/go/[code]) and /book both render the **same** `EstimateFlow` — the only difference is campaign attribution metadata passed in.

This kills the fork: there is now exactly one capture component in the entire app.

### B.3 The ideal step sequence (`EstimateFlow`)

Order is deliberate: **micro-commitment first → qualifying questions → contact → calendar.** The easy, value-framed question comes first; the highest-friction ask (calendar) comes last, after the visitor is committed.

| Step | Screen | Ask | Field(s) | Friction | Notes |
|------|--------|-----|----------|----------|-------|
| 0 | Hook / micro-commitment | "What's your average monthly PG&E bill?" | `monthly_bill` (tap-to-select bands: <$150 / $150–300 / $300–500 / $500+) | Very low | Tap, not type. Single biggest predictor of fit + the customer's own pain point. No contact info yet. This is the foot-in-the-door. |
| 1 | Qualifier — ownership | "Do you own your home?" | `owns_home` (Yes/No) | Low | If "No" → soft-disqualify branch (see B.5). |
| 2 | Qualifier — roof | "How much sun/shade does your roof get?" | `roof_shade` (Full sun / Some shade / Lots of shade / Not sure) | Low | "Not sure" is allowed — never dead-end. |
| 3 | Qualifier — timeline | "When are you looking to make a change?" | `timeline` (ASAP / 1–3 mo / 3–6 mo / Just exploring) | Low | Sales priority signal. |
| 4 | Utility confirm | "Who's your utility?" | `utility` (PG&E prefilled / dropdown) | Very low | Usually pre-answered for NorCal; one tap. |
| 5 | **Value reveal** | "Here's your ballpark estimate" — instant range using monthly_bill + the under-$10k system framing | (display only) | None | This is the payoff for steps 0–4. Show a savings/payback range. Earns the contact ask. |
| 6 | **Contact** | "Where do we send your full estimate?" | name, email, phone, (optional address/zip) | Medium | **LEAD FIRES HERE — see B.4.** |
| 7 | **Calendar** | "Book your free Google Meet with a VoltSol rep" | date/time slot | High | Final step. Booking is an *upgrade* of an already-captured lead, not a gate. |
| 8 | Confirmation | "You're booked — check your email" | — | None | Reinforce: Meet link, what to expect, rep name. |

### B.4 Where the lead fires to `/api/engine/v1/leads`

**The lead fires at the END of Step 6 (Contact), the moment we have a valid email/phone — NOT at the end of the calendar step.**

- Firing at Step 6 means **a lead is captured even if the visitor abandons before booking.** This is critical: today, if BookingFlow is the gate, every person who won't commit to a calendar slot is lost entirely. Decoupling capture (Step 6) from booking (Step 7) is the single highest-leverage change in this whole document.
- All qualifying answers from Steps 0–4 are sent with the lead payload: `owns_home`, `monthly_bill`, `timeline`, `utility`, `roof_shade`, plus campaign attribution.
- Step 7 (calendar) fires a **second event** — a `booking_completed` update/event against the same lead record (booked = true + slot time). It enriches the lead; it does not create a new one.
- Partial-progress events (Steps 0–5) fire to `lead_events` only (analytics), not as full leads — so we can measure step drop-off without polluting the canonical leads table.

### B.5 Soft-disqualify branches (never dead-end)

- **Renter (owns_home = No):** Don't hard-stop. Offer: "We mostly help homeowners — want us to email you a renter-friendly options guide?" → captures email as a lead with a `renter` tag. Low value but free.
- **Heavy shade:** Continue the flow; flag internally. Hugo's team decides fit on the consult, not the form.

### B.6 Where the SavingsEstimator fits — **ASSET, absorbed (not a separate page)**

**Decision: the SavingsEstimator is an ASSET, but as a standalone /estimate page it is a LEAK.** It currently lets people compute a number and leave with zero capture. **Dissolve /estimate as a route.** Fold its logic into **Step 5 (Value reveal)** of `EstimateFlow`, where the estimate is the reward that earns the contact ask. The calculator's interactivity is the micro-commitment engine — it just needs to live *inside* the funnel, gated so the *full/detailed* estimate requires Step 6 contact. Keep a lightweight teaser estimate visible (builds trust), gate the detailed/emailed version behind contact.

---

## C) ONE PRIMARY CTA — Rules

### C.1 Core rules

1. **One primary CTA label site-wide: `Get My Free Estimate`.** No synonyms. Delete "Get My Quote," "Book a Time," "Get an Estimate," "Your Free Solar Estimate," "Book My Free Estimate." All become `Get My Free Estimate`.
2. **Max one PRIMARY CTA visible per screen/viewport.** A page may repeat the same primary CTA multiple times as the user scrolls (that's good — same label every time), but never two *different* primary actions competing in one viewport.
3. **One secondary CTA maximum per page**, and only when it genuinely serves the undecided (e.g., a "How it works" jump). Secondary is visually subordinate (text/ghost button, never a filled button competing with primary).
4. **"See How It Works" is demoted to a secondary, low-emphasis anchor link** (not a button) in the hero, OR removed entirely once the page is short enough that the section is visible on scroll. It must never look like a co-equal choice next to the primary CTA. Recommendation: keep as a quiet text link "↓ How it works" in the hero; remove the filled secondary button.
5. **Persistent/sticky CTA:** A sticky bottom bar (mobile) / sticky header button (desktop) showing `Get My Free Estimate` appears after the user scrolls past the hero. Always the same label, always the same action. This is the safety net for a long page.
6. **Header nav button** = the same primary CTA, `Get My Free Estimate`. The nav is not a separate funnel.

### C.2 Full CTA table

| Location | Element | Label | Type | Action |
|----------|---------|-------|------|--------|
| Header nav (all pages) | Button | `Get My Free Estimate` | Primary | Open EstimateFlow (route /start or inline) |
| Hero — primary | Button (filled) | `Get My Free Estimate` | Primary | Open EstimateFlow |
| Hero — secondary | Text link | `↓ How it works` | Secondary | Scroll to How-It-Works section |
| Mid-page band(s) | Button (filled) | `Get My Free Estimate` | Primary | Open EstimateFlow |
| Sticky bar (post-hero scroll) | Button (filled) | `Get My Free Estimate` | Primary (persistent) | Open EstimateFlow |
| Bottom CTA | Button (filled) | `Get My Free Estimate` | Primary | Open EstimateFlow |
| /go/[code] campaign | Button (filled) | `Get My Free Estimate` | Primary | Open EstimateFlow (w/ campaign attribution) |
| /market/* city pages | Button (filled) | `Get My Free Estimate` | Primary | Open EstimateFlow (w/ city attribution) |
| Inside EstimateFlow | Step buttons | `Continue` → final `Book My Meet` | Flow-internal | Advance step; only the calendar step uses booking language |

> Note: The ONLY place "book" language survives is Step 7 *inside* the flow ("Book My Meet"), because by then the visitor is a captured lead choosing a time. It is never an entry-point CTA.

---

## D) Homepage Length / Sprawl

### D.1 Is 12 sections too many?

**Yes.** Twelve sections is a narrative essay, not a conversion page. The arc "problem → stats → how → tech → price → proof → bio → FAQ" reads like a pitch deck that buries the ask. The target customer wants the answer to *"what's this cost and is it worth it"* fast; today the first real conversion moment is diluted across the whole scroll. Target: **~7 tight sections**, first conversion opportunity **above the fold**, and the price reveal moved much earlier.

### D.2 KEEP / CUT / MERGE / REORDER — all 12 sections

| # | Current section | Action | Rationale / Disposition |
|---|-----------------|--------|--------------------------|
| 1 | Hero "The sun doesn't send a bill" + "less than a used car" | **KEEP** | Strong. Add primary CTA + quiet "How it works" link. This is the #1 conversion surface. |
| 2 | Trust strip | **KEEP + MERGE up** | Fold directly under hero as a thin credibility band (CSLB #, reviews, install count). Reinforces hero. |
| 3 | "Power bill keeps climbing / grid ties you back" (problem) | **MERGE** | Compress to a tight 2-line problem statement; merge into hero subhead area or a single short band. Don't spend a full section restating the pain they already feel. |
| 4 | Big-number stats | **MERGE into #7 (The Number)** | Stats are only persuasive next to the price. Combine into one "here's the math" block. |
| 5 | "Make it. Store it. Live on it." (how it works, 3 steps) | **KEEP** | This is the "How it works" target. Tight, visual, 3 steps. |
| 6 | Technology cards (EG4 hybrid) | **CUT from homepage** (move to consult / a /tech detail link) | Too technical for a non-technical buyer at this stage. Link "See the equipment" for the curious; don't make it a scroll-blocking section. |
| 7 | "The Number" — under $10k reveal | **KEEP + PROMOTE EARLY** | The single most important section. Move up — price clarity is the whole value prop. Merge stats (#4) here. |
| 8 | Savings/estimate band | **MERGE into EstimateFlow** | Becomes the inline entry to EstimateFlow (Step 0 micro-commitment lives here). Not a passive band — a live capture surface. |
| 9 | More proof/benefit sections | **CUT/MERGE** | Collapse into one short proof block (testimonials/results). Kill redundancy. |
| 10 | "Meet Hugo" bio + CSLB | **KEEP** (condensed) | Real trust + local credibility. Keep tight; pair with CSLB license. |
| 11 | FAQ-ish benefits | **MERGE** | Trim to 3–5 real objection-busting FAQs near the bottom CTA. Cut benefit-fluff. |
| 12 | Bottom CTA "Pick a time" | **KEEP + RELABEL** | Becomes `Get My Free Estimate`. Final conversion catch. |

### D.3 Recommended final section order (reduced set — 7 sections)

1. **Hero** — headline + subhead + primary CTA `Get My Free Estimate` + quiet `↓ How it works` link + thin trust strip merged beneath (absorbs old #1, #2, compressed #3).
2. **The Number** — under-$10k price reveal + the math/stats (absorbs old #7 + #4). *Price clarity early.*
3. **How it works** — "Make it. Store it. Live on it." 3 steps (old #5).
4. **Inline estimate entry** — Step 0 of EstimateFlow embedded ("What's your monthly PG&E bill?") (old #8, now live capture). **First in-page conversion engine.**
5. **Proof** — condensed testimonials/results (old #9 collapsed).
6. **Meet Hugo + CSLB** — local trust (old #10 condensed, equipment link for the curious replaces old #6).
7. **Bottom CTA + 3–5 FAQs** — `Get My Free Estimate` final catch (old #11 trimmed + #12 relabeled).

### D.4 Where the first conversion opportunity appears

**Above the fold, in the hero** (primary CTA), and again as a **live micro-commitment** by Section 2–4 (the "monthly bill" tap question). Plus the **sticky CTA** engages the instant the user scrolls past the hero. The visitor can convert without ever scrolling past screen one.

### D.5 Maintaining momentum

- Repeat the *same* primary CTA at the end of each major section (hero, after The Number, after How-it-works, after Proof, bottom) — same label every time, so the decision is always one tap away.
- Sticky CTA bar removes the "scroll back up" tax.
- Front-load the price ("The Number" at Section 2) so the visitor's core question is answered before fatigue sets in.
- Each section ends by pointing forward; no dead scrolls. Cut anything that doesn't either build trust or drive to the CTA.

---

## E) Refactor — Phased Plan

### E.1 What stays UNTOUCHED

- **Copy/voice:** "The sun doesn't send a bill," "less than a used car," "The Number," "Make it. Store it. Live on it." — preserved verbatim. Reorganized, not rewritten.
- **Lead engine:** `/api/engine/v1/leads` endpoint and contract — unchanged.
- **Schema / lead signals:** `owns_home`, `monthly_bill`, `timeline`, `utility`, `roof_shade` — unchanged (now collected in one flow).
- **`lead_events` analytics table** — unchanged structure; we add new event *types* (see F), not new tables.
- **/market/* (24 SEO city pages):** SEO content/URLs untouched. Only their CTA label + form swap to `Get My Free Estimate` → EstimateFlow.
- **Design system:** colors, type, components, brand — untouched. We restyle buttons to one primary style, but no redesign.

### E.2 What changes STRUCTURALLY

- **Routing:** `/estimate` dissolved (logic absorbed into EstimateFlow Step 5). `/start` introduced as the canonical flow route (or inline modal). `/book` and `/go/[code]` both render the same EstimateFlow.
- **CTA labels:** all → `Get My Free Estimate` (one secondary text link for "How it works").
- **Two forms → one:** BookingFlow + QuoteForm → single `EstimateFlow` component.
- **Section order:** homepage 12 → 7 (per D.3).
- **Sticky CTA:** new persistent bar/button.
- **Lead-fire decoupling:** lead fires at contact step (B.4), booking is a second event.

### E.3 Phase table (for a Claude Code build loop)

| Phase | Scope | Deliverable | Risk |
|-------|-------|-------------|------|
| **P1 — CTA unification** | Replace all CTA labels site-wide with `Get My Free Estimate`; demote "See How It Works" to text link; add sticky CTA bar. No flow changes yet. | Every button on every route reads `Get My Free Estimate` and routes to the existing /book (temporary). Sticky bar live. | Low — cosmetic + routing. Ship first, measure lift immediately. |
| **P2 — Unified EstimateFlow component** | Build `EstimateFlow` as the single multi-step capture (Steps 0–8, B.3). Implement lead-fire at Step 6, booking event at Step 7. Absorb QuoteForm fields + BookingFlow calendar. | One component renders the full funnel; lead fires at contact, booking enriches. Old BookingFlow/QuoteForm marked deprecated. | High — core capture. Build behind a flag; test lead payload against /api/engine/v1/leads before cutover. |
| **P3 — Route consolidation** | Point /book, /go/[code], /market/* CTAs and /start at EstimateFlow. Dissolve /estimate; fold SavingsEstimator into Step 5. Delete QuoteForm + BookingFlow. | Single capture path across all entry points. /estimate redirects (301) to /start or home. | Medium — verify campaign attribution + city attribution still pass through. |
| **P4 — Homepage reduction** | Rebuild homepage to the 7-section order (D.3): merge stats into The Number, promote price early, embed inline estimate entry, condense proof/FAQ, move EG4 tech off-page. | Homepage = 7 sections, first conversion above fold, inline Step 0 capture live. | Medium — content reorg; preserve copy verbatim. |
| **P5 — Instrumentation** | Wire all events in section F to `lead_events` (CTA clicks, step views, step drop-off, scroll depth, lead_capture, booking_completed). | Full funnel measurable end-to-end. | Low. |
| **P6 — Optimize / A/B** | Run the A/B tests below on the now-clean funnel. | Data-driven refinements. | Low. |

### E.4 What to A/B test

- **Lead-fire timing:** contact-then-calendar (recommended) vs. calendar-then-contact. (Hypothesis: contact-first wins on total leads.)
- **Step 0 question:** "monthly bill" band-select vs. address-first. (Hypothesis: bill-first lower friction.)
- **Hero secondary:** quiet "How it works" link present vs. removed entirely.
- **Price reveal position:** The Number at Section 2 vs. later.
- **Sticky CTA copy:** `Get My Free Estimate` vs. `See My Savings`.
- **Estimate gating:** teaser-then-gate vs. fully gated detailed estimate.

---

## F) Measurement

### F.1 The 3–5 metrics that prove success

1. **Lead capture rate** — unique visitors → leads fired at Step 6 (`leads` row created). *Primary success metric.*
2. **Booking rate** — leads → `booking_completed` (Step 7). *Quality/intent metric.*
3. **Funnel step completion / drop-off** — % advancing Step 0→1→…→7. Pinpoints the leak.
4. **CTA click-through rate** — `Get My Free Estimate` clicks ÷ pageviews, by location (hero / sticky / bottom / market / campaign).
5. **Scroll depth → conversion correlation** — how far visitors scroll before converting (validates the shortened page).

### F.2 Exact events to instrument (→ `lead_events`)

| Event type | Fires when | Key payload |
|------------|-----------|-------------|
| `cta_click` | Any `Get My Free Estimate` clicked | location (hero/sticky/bottom/nav/market/campaign), page, campaign_code |
| `flow_step_view` | Each EstimateFlow step rendered | step_index (0–8), step_name, session_id |
| `flow_step_complete` | User advances a step | step_index, answer values (bill band, owns_home, etc.) |
| `flow_abandon` | Flow closed before Step 6 | last_step_index |
| `scroll_depth` | 25/50/75/100% thresholds | depth_pct, page |
| `lead_capture` | **Step 6 contact submit** (mirrors the /api/engine/v1/leads create) | lead_id, all qualifier signals, attribution |
| `booking_completed` | **Step 7 calendar submit** | lead_id, slot_time |
| `estimate_revealed` | Step 5 value shown | bill band, estimate_range |

- All keyed by a `session_id` so step drop-off and scroll depth tie back to the same visitor and, on conversion, to `lead_id`.
- `lead_capture` and `booking_completed` are the two events that map directly onto the canonical leads record; the rest are funnel analytics living in `lead_events`.
- Build a funnel report: `cta_click → flow_step_view(0) → … → lead_capture → booking_completed`, with drop-off % at each hop.

---

## G) Top 5 Conversion Risks (ranked)

| # | Risk | Why it costs leads | Concrete fix |
|---|------|--------------------|--------------|
| 1 | **Booking gate captures nothing on abandon** (calendar-first = lead lost if they won't pick a slot) | Highest-friction step is the gate; everyone not ready to commit to a time is lost with zero data | **Decouple capture from booking** — fire the lead at Step 6 (contact); booking is a second, optional event (B.4). |
| 2 | **CTA chaos — 4+ labels, 2 forms** | Each variant is a decision/confusion tax; split paths dilute data and trust | **One label `Get My Free Estimate`, one `EstimateFlow`** everywhere (P1 + P2). |
| 3 | **12-section sales-pitch homepage buries the ask** | Fatigue before the value/price lands; first conversion moment diluted | **Cut to 7 sections, price ("The Number") at Section 2, conversion above fold, sticky CTA** (D.3). |
| 4 | **/estimate calculator is a leak** — compute a number, leave, no capture | Gives away the value with no exchange | **Dissolve /estimate; fold SavingsEstimator into Step 5**, gate the detailed estimate behind Step 6 contact (B.6). |
| 5 | **No persistent CTA on a long page + no funnel instrumentation** | On a long scroll the ask disappears; and we can't see where we lose people | **Add sticky `Get My Free Estimate` bar** + wire `lead_events` funnel tracking (C.1.5, F). |

---

*End of working doc. Strategy/spec only — no code changed. Implement per the phase table in Section E.*
