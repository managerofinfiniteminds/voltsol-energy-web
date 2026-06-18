# VoltSol — SEO + Conversion Upgrade Plan
**Author:** VoltSol agent (Opus 4.8) · 2026-06-17
**Goal:** Make the local SEO pages (294 CA cities) carry the off-grid product story + brand, while staying *unique per page* for SEO. Maximize conversions AND rankings simultaneously.

---

## 1. The Diagnosis (grounded in the actual code)

**The brand site and the SEO money-pages are two different products.**

| | Homepage (`/`) | City pages (`/market/solar/california/<county>/<city>`) |
|---|---|---|
| Skin | Navy + gold, brand fonts | Generic **blue gradient + white**, default fonts |
| Tagline | "Make it. Store it. Live on it.™" | **Absent** |
| Product | EG4 battery + inverter + solar mini-splits, off-grid, blackout-proof | **Absent** — never mentioned |
| Dollhouse diagram | Yes (the whole pitch) | **Absent** |
| Positioning | "Licensed installer," "from $8,700," off-grid | "**Licensed contractor marketplace**," "we share your request with one contractor" |
| Header/Footer | Brand chrome | Brand chrome **+ its own duplicate blue hero & a second `<footer>`** |

### The 6 concrete problems

1. **Positioning contradiction.** Homepage says *we install off-grid EG4 systems*. City pages say *we're a marketplace that forwards your request to a contractor*. Two different companies. Kills trust and brand, and Google reads the inconsistency.
2. **The differentiator is missing where it matters.** "Make it. Store it. Live on it." + the dollhouse + off-grid/blackout angle — the entire reason VoltSol isn't "just another solar company" — **never appears on the pages people actually land on from Google.**
3. **Duplicate-content / doorway-page risk (294 pages).** "Why Go Solar" (4 bullets), "How It Works" (4 steps), and the process block are **byte-identical** across all 294 city pages. Only `localNote`, 3 FAQs, and a few numbers vary. This is exactly the pattern Google's Helpful Content + spam-policy "doorway pages" target. Thin, templated, near-duplicate = capped rankings or deindexing.
4. **Geographic factual bug.** SoCal cities (e.g. Fullerton / Orange County / SCE) render "Local **NorCal** team" and footer "marketplace in **Northern California**." False on its face → hurts local relevance and trust signals.
5. **Generic title tags.** `Solar Panels in {City}, CA | Free Quote` — competes head-on with every national solar lead-gen site on the most contested term. No differentiator in the title = no reason to click us over SunRun.
6. **`countyContext` is written but barely used**, and there's no city-level off-grid hook field at all. We're paying for content we don't render.

---

## 2. The Strategic Resolution

**The SEO/conversion tension:** SEO wants *unique* content per page; conversion wants the *same proven* brand pitch everywhere. Resolve it with a two-layer model on every city page:

- **LOCAL FACT LAYER (unique per page → SEO):** city note, county context, utility + rate, permit office, climate zone, peak-sun, FAQ — *plus a new locally-variable off-grid hook* (below).
- **BRAND PRODUCT LAYER (consistent, reskinned → conversion):** the "Make it. Store it. Live on it." band, the dollhouse diagram, EG4/off-grid positioning — in brand navy/gold, parameterized with the city name so it's not a verbatim clone.

### The key insight: PSPS as the unique-AND-converting hook
California **Public Safety Power Shutoffs (PSPS)** are real, locally variable, and tie *directly* to "still running in a blackout." Foothill/high-fire counties (Placer, El Dorado, Nevada, Shasta, Sonoma…) get PSPS events constantly; dense coastal/urban cities rarely. Adding **one PSPS/outage-context field per county** gives us:
- genuinely **unique, true, local** content (SEO uniqueness, not boilerplate), and
- the **emotional off-grid conversion hook** ("When PG&E shuts off power in [County] during fire season, your VoltSol system keeps running"),
- on a **less-contested keyword** ("off-grid solar [city]", "solar battery backup [city]", "blackout-proof solar [city]") that *pre-qualifies* the off-grid-minded buyer Hugo actually wants.

This single addition fixes the duplication problem and the differentiation problem at once.

---

## 3. The Build Plan (phased, lowest-risk first)

### Phase 1 — Reskin + de-contradict the city template (HIGH impact, LOW risk)
File: `src/app/market/[vertical]/[state]/[region]/[city]/page.tsx`
- Re-skin hero + sections from blue/white → brand **navy/gold** + brand fonts (match homepage).
- **Delete the page's own `<footer>`** ("marketplace in Northern California") — root layout already supplies the brand footer. Remove the duplication and the false NorCal claim.
- Rewrite positioning language: "licensed contractor marketplace" → the homepage's installer voice. Keep legally-accurate "licensed installer network" wording but lose the cold "marketplace" framing.
- Add the **"Make it. Store it. Live on it."** band with the dollhouse image (`how-it-works-system.jpg`), headline parameterized: *"Off-grid solar for {City} homes."*
- Title tag → `Off-Grid Solar in {City}, CA — Battery Backup from $8,700 | VoltSol`. Meta description leads with blackout/off-grid + local utility rate.

### Phase 2 — Add the local off-grid hook (HIGH impact, LOW risk)
File: `src/lib/market-data.ts`
- Add `offGridAngle` / `outageContext` string to `MarketCountyData` (one per ~58 counties, not 294 — manageable), e.g. PSPS frequency + fire-season relevance + why off-grid matters *here*.
- Render it as a new unique section: **"Why Off-Grid Solar Makes Sense in {City}"** — replaces the generic 4-bullet "Why Go Solar" with locally-variable copy.
- Optional richer keyword spread: add 1 city-specific FAQ about blackouts/PSPS (we already have a FAQ array; data exists).

### Phase 3 — Fix the geo/utility correctness (MED impact, LOW risk)
- Make "NorCal team" / region copy data-driven, not hardcoded. SoCal cities should read SoCal.
- Audit SCE/SDG&E/LADWP cities for any remaining NorCal-only strings.

### Phase 4 — De-duplicate the templated blocks (MED impact for SEO durability)
- Vary "How It Works" + trust copy with city/county tokens so no two pages are byte-identical.
- Ensure each page has ≥1 genuinely unique paragraph beyond the numbers (Phase 2 covers most of this).

### Phase 5 — Structured data + internal mesh polish (MED impact)
- City JSON-LD: align `priceRange` to real "$8,700+", add the off-grid/`Service` description, add `Product`/offer where honest.
- Strengthen internal links from city pages → `/technology` (the SEO authority hub) using off-grid anchor text, so link equity + topical relevance flow to the brand story page.

---

## 4. Expected Outcome
- **SEO:** Each page becomes genuinely unique (local off-grid hook + corrected geo) → escapes doorway/thin-content risk, ranks for lower-competition high-intent terms ("off-grid solar [city]", "blackout-proof solar [city]"), and feeds equity to `/technology`.
- **Conversion:** Every landing page now tells the differentiated story + shows the dollhouse + carries the brand, instead of a generic blue lead-gen form. Pre-qualified off-grid intent = better leads for Hugo.
- **Consistency:** One company, one story, everywhere.

## 5. Execution Notes
- Phases 1–3 are the 80/20. Recommend shipping 1–2 first behind a quick visual review, then 4–5.
- Build via Claude Code (nohup pattern) or in-window edits; deploy `vercel deploy --prebuilt --prod`.
- 294 static pages rebuild fine; data lives in `market-data.ts` (county-level additions = ~58 edits, not 294).
