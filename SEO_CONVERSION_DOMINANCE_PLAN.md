# VoltSol — SEO + Conversion DOMINANCE Plan (v2)
**Author:** VoltSol agent (Opus 4.8) · 2026-06-17
**Supersedes:** SEO_CONVERSION_UPGRADE_PLAN.md (v1)
**Mandate (Wayne):** Go deeper. Dominate SEO *and* conversion. Loopable generation. Geo-accuracy testable. SEO testable. Everything perfect.

---

## 0. What changed after expert research (this is the headline)

Three findings reframe the whole strategy:

### 🔴 LIABILITY (fix immediately): the site states a now-false tax fact
The city template says: *"The 30% federal solar Investment Tax Credit (ITC) is currently available."*
**The federal 30% Residential Clean Energy Credit terminated Dec 31, 2025** ("placed in service" basis, IRS FAQ #7). Every one of the 294 pages currently publishes a false incentive claim. That's a trust problem, a conversion problem (homeowners who know will distrust us), and an E-E-A-T/accuracy problem Google's Helpful Content system actively scores. **Must be corrected site-wide before anything else.**

### 🟢 STRATEGIC TAILWIND #1: the regulation now MAKES our pitch the correct answer
- **NEM 3.0 (Net Billing Tariff)** cut solar export credits **~75%** (from ~$0.30–0.35/kWh to ~$0.08/kWh). Selling power back to the grid barely pays now.
- Result, per every credible 2026 source: **battery storage shifted from optional to essential.** Self-consumption + storage is the only model that pencils out.
- **VoltSol is already battery-first / off-grid.** The market just moved to where Hugo already stands. Most competitor city pages still say "net metering saves you" and "30% ITC available" — **stale and now wrong.** We can be *accurate where the whole industry is stale.* That is simultaneously an SEO freshness/accuracy win and a conversion/trust win.

### 🟢 STRATEGIC TAILWIND #2: PSPS + SGIP give us unique, true, local, converting content
- **PSPS (Public Safety Power Shutoffs)** are real and *locally variable* — foothill/high-fire counties (Placer, El Dorado, Nevada, Shasta, Sonoma, Butte…) get hit hard; dense coastal cities rarely. This is genuinely unique per-county content (kills doorway risk) AND the emotional core of "still running in a blackout."
- **SGIP Equity Resiliency** pays up to **$1.10/Wh for batteries** for PSPS-affected / DAC / low-income homeowners — a real, current, local incentive hook that replaces the dead ITC line with something *true and valuable.*

**Net:** the off-grid/battery story Wayne wanted surfaced isn't just branding — as of 2026 it's the economically correct, regulation-aligned answer. We lean in hard, accurately, everywhere.

---

## 1. The core SEO doctrine we're building to (2026, research-backed)

**Google's doorway / scaled-content-abuse classifier** penalizes clusters of near-duplicate templated pages that vary only by city + numbers. Penalties: page-level suppression → site-level trust loss → deindexing. Our current 294 pages are squarely in the risk zone (identical "Why Go Solar," "How It Works," process blocks).

**The test that matters — the "City-Swap Test":** *If you swap the city name and the page still reads as coherent for a different city, it's a doorway page.* Our job: make every page **fail the swap test** (i.e., be so locally specific it would be wrong for any other city).

**The substantive local-page pattern that clears the bar** (Cortex/Capconvert, 2025) — 9 ideal elements. We map each to what VoltSol can honestly provide:

| # | Ideal element | VoltSol implementation |
|---|---|---|
| 1 | Location-specific overview (landmarks, neighborhood, climate) | ✅ Unique county/city prose: terrain, fire/PSPS exposure, microclimate, housing stock |
| 2 | Contact details | ✅ Brand NAP + CSLB #1148585 (already in org schema) |
| 3 | Location-specific reviews | ⚠️ Phase 2: pull GBP reviews when Hugo's profile matures; placeholder-safe until then |
| 4 | Named local team/bios | ✅ Hugo as owner-installer; "serving [county] since…" |
| 5 | Location-specific hours/schedule | ✅ Service-area + booking availability |
| 6 | Directions/parking | N/A (service-area business, no storefront) — use service-radius statement instead |
| 7 | Local case studies/examples | ✅ Phase 2: per-county example install (system size, utility, PSPS context) |
| 8 | Embedded map | ✅ Service-area map per county |
| 9 | LocalBusiness schema w/ subtype + aggregateRating | ✅ Already have LocalBusiness/Service; add per-county specificity + reviews when live |

**Local Pack reality (Whitespark 2026):** GBP signals 36%, on-page+links/citations 33%, reviews 15–20%, behavioral 7%. Schema markup lifts Local Pack appearance ~30%. Two implications:
1. The website's controllable wins are **on-page substance + schema + internal links + behavioral (CTR/engagement)**. We max those.
2. **GBP is 36% and lives outside the website** — so the plan must include a GBP workstream for Hugo (separate but essential; the best site can't win local pack alone).

---

## 2. The page architecture (two-layer, swap-test-proof)

Every city page = **LOCAL FACT LAYER** (unique → SEO) + **BRAND PRODUCT LAYER** (consistent, reskinned → conversion). The trick to avoid doorway risk: push as much *variation* into the data model as possible, so the brand layer is the *only* repeated part and even it is city-parameterized.

### Data model expansion (`market-data.ts`)
Add to **county** level (~58 edits, not 294 — efficient, and county is the right granularity for most of these facts):
- `outageContext` — PSPS/fire-season frequency + why off-grid matters *here* (unique prose)
- `gridNarrative` — local grid reliability / utility-specific pain (e.g., PG&E vs SCE vs SMUD vs municipal)
- `incentiveContext` — current, accurate: NEM 3.0 reality, SGIP eligibility, property-tax exclusion, **ITC removed**
- `terrainNarrative` — solar production nuance: valley floor vs foothill shading vs coastal fog
- `localExample` (Phase 2) — representative install scenario for the county
- `sgipEligibility` — DAC/PSPS flags that change the incentive message

Add to **city** level (already exists, expand):
- `localNote` (have) — make richer, landmark/neighborhood-specific
- `faq` (have) — expand to include 1 PSPS/blackout + 1 NEM-3.0/battery question, city-specific
- `neighborhoods` / `landmarks` — 2–3 real local references (forces swap-test failure)
- `housingStock` — typical roof/home type (ranch, two-story, HOA density) → ties to system sizing

### Section plan for the new template (brand navy/gold, mirrors homepage)
1. **Hero** — "Off-Grid Solar in {City}, CA" + "Make it. Store it. Live on it.™" + local utility/county tag
2. **Make/Store/Live band** + dollhouse diagram (the differentiator, parameterized)
3. **"Why Off-Grid Makes Sense in {City}"** — unique county prose: PSPS + NEM 3.0 + terrain (replaces generic 4 bullets)
4. **Local estimates** — the stat cards (have), with corrected/honest framing
5. **Local details** — utility rate, permit office, climate zone (have), + grid narrative
6. **Incentives — accurate 2026** — SGIP/battery/property-tax; ITC honestly marked expired
7. **EG4 product story** — what we actually install (battery + inverter + mini-split), brand-consistent
8. **City-specific FAQ** (expanded) + FAQPage schema
9. **Local case/example** (Phase 2)
10. **Internal mesh** — nearby cities + link to `/technology` with off-grid anchor text
11. **Brand CTA** — remove "marketplace," use installer voice; kill the duplicate footer

---

## 3. The loopable generation pipeline (this is the "pull out all the stops" engine)

Goal: generate genuinely-unique, accurate, on-brand content for 58 counties / 294 cities **at quality**, with automated gates so nothing ships that's thin, wrong, or off-geo.

```
┌─────────────┐   ┌──────────────┐   ┌───────────────┐   ┌──────────────┐   ┌─────────────┐
│ 1. SEED      │ → │ 2. GENERATE   │ → │ 3. VALIDATE    │ → │ 4. SCORE      │ → │ 5. COMMIT    │
│ facts/county │   │ LLM copy per  │   │ geo-accuracy   │   │ SEO + uniq    │   │ if all gates │
│ (researched, │   │ county/city    │   │ harness (hard  │   │ harness       │   │ pass; else   │
│  verified)   │   │ to strict JSON │   │  fail = block) │   │ (threshold)   │   │ re-loop      │
└─────────────┘   └──────────────┘   └───────────────┘   └──────────────┘   └─────────────┘
```

- **Seed (human/research-verified facts):** utility, rate, permit office, climate zone, PSPS exposure tier, SGIP/DAC flags, terrain. These are *facts*, researched once per county — the LLM never invents them.
- **Generate:** an LLM (Sonnet for cost, batched per county) writes the prose fields *constrained to the seed facts* via a strict prompt + JSON schema. Temperature low. The prompt forbids inventing numbers and requires ≥2 local-specific references (landmark/terrain/PSPS) per page → engineered to fail the swap test.
- **Validate (geo-accuracy, hard gate):** §4 below. Any failure blocks the page.
- **Score (SEO + uniqueness, threshold gate):** §5 below.
- **Commit:** only pages passing both gates write to `market-data.ts`. Failures loop back to regenerate with the specific failure injected into the prompt.

This is genuinely loopable: run county-by-county, re-run only failures, converge to 100% passing.

---

## 4. TEST HARNESS A — Geo-Accuracy Validator (scriptable, re-runnable)

A Node script (`scripts/validate-geo.mjs`) that walks every market entry and asserts:

**Hard-fail checks (block commit/deploy):**
- **Utility↔county consistency:** city's `utility` must be valid for its county (e.g., no "PG&E" on an LADWP city; no "SCE" labeled NorCal). Lookup table of valid utility×county.
- **Region/geo string sanity:** no "NorCal"/"Northern California" copy on SoCal counties (Orange, LA, SD, Riverside, SB, Imperial…) and vice-versa. Regex + county-region map.
- **No dead/false claims:** assert the string "30% federal solar Investment Tax Credit … currently available" (and variants) appears **nowhere**. Assert ITC references are past-tense/expired.
- **Rate plausibility:** `avgResidentialRatePerKwh` within sane CA bounds per utility (e.g., PG&E 0.38–0.50, SMUD 0.15–0.22, SCE 0.30–0.42…). Flag outliers.
- **Number coherence:** payback/savings/system-size internally consistent (e.g., savings ≈ bill×12×offset; payback = cost/savings within tolerance).
- **PSPS claim guardrail:** counties tagged high-PSPS must be in the actual CAL FIRE / utility high-fire-threat tier list; low-risk urban counties must NOT claim heavy PSPS.
- **Required fields present & non-empty** for every county/city (no filler/empty → thin-content guard).

**Soft-warn checks (report, don't block):**
- Landmark/neighborhood references resolve to real places (optional geocode check).
- Duplicate `localNote`/FAQ across cities (exact or near-dup) → flags doorway risk.

**Output:** `geo-report.json` + console summary (PASS/FAIL counts, per-page failures). Exit non-zero on any hard fail → wire into the generation loop and into pre-deploy.

---

## 5. TEST HARNESS B — SEO Quality Auditor (scriptable + external validators)

### B1. Uniqueness / doorway-risk scorer (`scripts/seo-uniqueness.mjs`) — the most important one
- Render every page's main text → compute **pairwise similarity** (shingled n-gram / cosine on TF-IDF) across all 294 pages.
- **Gate:** any page >X% similar to another (target threshold e.g. ≤55% shared) **fails**. This is the programmatic "swap test."
- Also flag the *shared boilerplate ratio* per page (unique tokens ÷ total). Gate: unique content ≥ a floor.

### B2. On-page SEO linter (`scripts/seo-onpage.mjs`)
- Title length 30–60 chars, unique per page, contains city + differentiator.
- Meta description 120–160 chars, unique, contains city + hook.
- Exactly one `<h1>`, logical H2/H3 hierarchy.
- Image `alt` present + localized; LCP image sized; lazy-load below fold.
- Internal links present (nearby cities + `/technology`); no orphan pages (each city linked from county page → fixes the orphan/doorway signal).
- Canonical correct + self-referential; in sitemap.

### B3. Structured-data validator
- Validate JSON-LD (LocalBusiness, Service, BreadcrumbList, FAQPage) against schema.org.
- Run through **Google Rich Results Test** (manual/API) on a sample per template change.
- Assert FAQ schema matches visible FAQ (no schema/content mismatch → manual-action risk).

### B4. Performance / Core Web Vitals
- **Lighthouse CI** (`@lhci/cli`) on a representative sample (e.g., 1 city per utility type). Gate: SEO ≥95, Performance ≥85, Accessibility ≥95.
- Mobile-first (60%+ traffic mobile).

### B5. External / ongoing (post-deploy, can't be fully scripted locally)
- **Google Search Console:** submit sitemap, monitor Coverage (indexed vs "Crawled – not indexed" = thin-content signal), Performance (impressions/clicks/position per page).
- **Rank tracking:** sample of "off-grid solar [city]", "solar battery backup [city]" terms.
- **GBP workstream (Hugo):** since GBP = 36% of local pack, a parallel checklist: correct primary category (Solar energy contractor), service-area definition, weekly posts, review generation, photos. *The site cannot win local pack alone.*

**All B-harness scripts emit a single `seo-report.json` + pass/fail. Wired into the loop and pre-deploy gate.**

---

## 6. Imagery plan (pull out the stops — but smart)

Per-page unique hero images at 294× would be expensive and risk looking AI-samey. Smarter:
- **Tiered image system:** 1 strong branded "off-grid dollhouse / EG4 system" hero reused (brand consistency is *good* here), + **per-county-archetype** images (valley-floor ranch, foothill cabin, coastal home, desert home) — ~6–8 archetypes mapped to counties by terrain. Genuine visual variation without 294 one-offs.
- **PSPS/blackout emotional image** (lit house in a dark neighborhood) for the off-grid band — the single most converting visual for our angle.
- Generate via Flux (per workspace rules). All images: localized `alt`, compressed, base64-embed rule respected (use placeholder + embed script, never inline base64).

---

## 7. Phased execution (with gates)

| Phase | Scope | Risk | Gate before next |
|---|---|---|---|
| **0. Liability fix** | Remove false ITC claim site-wide; correct incentive copy to 2026 reality | LOW | Geo-validator: zero ITC-false hits |
| **1. Template reskin + de-contradict** | City template → brand navy/gold; kill duplicate footer + "marketplace" voice; add Make/Store/Live band + dollhouse; new titles/meta | LOW | 1 preview city (Fullerton + 1 NorCal) approved by Wayne |
| **2. Data model + harnesses** | Add county/city fields; build Validator A + Auditor B; backfill PSPS/SGIP/terrain facts (researched) | MED | Both harnesses green on existing data |
| **3. Generation loop** | Run pipeline across 58 counties; regenerate failures until 100% pass both gates | MED | Uniqueness ≥ threshold on all 294 |
| **4. Imagery** | Archetype + PSPS images, localized alt | LOW | Lighthouse perf ≥85 |
| **5. Structured data + mesh** | Schema specificity, internal-link graph, /technology equity flow | MED | Rich Results valid; no orphans |
| **6. Deploy + monitor** | Ship; GSC sitemap; rank tracking; GBP workstream handed to Hugo | — | GSC coverage healthy at 2 wks |

Phases 0–1 are shippable in the first push. 2–3 are the durable moat.

---

## 8. How we'll *know* it's perfect (Wayne's two questions, answered)

- **Geo-accurate?** → Harness A runs on every page, hard-fails on any utility/region/rate/PSPS/ITC inconsistency. Exit-non-zero blocks deploy. Re-runnable anytime. Plus a soft swap-test dup check.
- **SEO top-notch?** → Harness B: programmatic uniqueness/doorway scorer (the real swap test), on-page linter, schema validation (+ Google Rich Results Test), Lighthouse CI thresholds, then Search Console coverage/position monitoring + rank tracking post-launch.
- Both harnesses are part of the **generation loop** (nothing ships that fails) *and* a **pre-deploy gate** (regression-proof).

---

## 8.5 VISUAL ARSENAL + MARKETING (the "killer shots" workstream)

**Doctrine:** emotional images sell the *why* (off-grid = safety + freedom), the infographic sells the *why-now* (NEM 3.0 makes batteries the smart money). Pair fear (blackout) with freedom (daylight) and proof (numbers). Every image is text/logo-free so we can overlay headlines + reuse as ads.

### Images DELIVERED (in `public/images/`)
1. **`hero-blackout-glow.jpg`** — one home glowing in a blacked-out street. **NOW THE HOMEPAGE HERO.** The PSPS/"Live on it" hook. Also the killer paid-ad creative.
2. **`freedom-daytime.jpg`** — same home, golden hour, family + EV charging. The "Make it. Store it." abundance frame. Bookends the hero.
3. **`nem3-payback-collapse.png`** — $0.30 → $0.08 cash-flow collapse infographic. The "Why Now" band (now live on homepage between hero and How It Works).

### Homepage layout decision (3-act scroll narrative) — SHIPPING
- **ACT 1 / Hero:** blackout-glow + "Make it. Store it. Live on it." (done)
- **ACT 2 / Why Now band:** NEM 3.0 infographic + "The grid used to pay you $0.30. Now it pays $0.08." (done) → differentiator + SEO content + CTA into /technology
- **ACT 3 / Freedom payoff:** daytime shot in How It Works / proof zone (next)

### Next images to LOOP (queued — "pull out all the stops", but archetype-smart not 294-unique)
4. **PSPS phone-alert moment** — hand holding phone with a "PG&E Public Safety Power Shutoff in your area" style notification, dark house behind, while through a doorway the VoltSol home stays lit. Hyper-relevant to fire-country counties.
5. **Bill-shock vs flatline** — a soaring PG&E bill line vs VoltSol owner's flat/near-zero line. Conversion infographic for pricing section.
6. **Terrain archetype heroes (6–8)** for city pages: valley-floor ranch, Sierra-foothill cabin, coastal home, high-desert home, wildfire-WUI home, suburban tract. Mapped to counties by terrain — real visual variation, no AI-samey 294-shot bloat.
7. **EG4 system "hero product" shot** — clean studio render of battery + inverter + mini-split as the "what you actually get."
8. **Fire-season resilience** — smoky orange CA sky, home running normally, panels + battery. Emotional NorCal-specific.

### Marketing applications beyond the site
- **Paid social / Meta + Google Display:** blackout-glow + "When PG&E shuts off your street, will your lights stay on?" → lands on city PSPS pages.
- **Before/after carousel:** daytime freedom → night blackout, swipe reveal.
- **NEM 3.0 explainer:** infographic as organic social + the on-page SEO asset (true, current, nobody says it cleanly).
- **Video (see §8.6):** animate the blackout glow + the cash-flow collapse for reels/landing hero loops.
- **Open Graph / share cards:** regenerate `opengraph-image` using blackout-glow for link-share CTR.

## 8.6 VIDEO OPTIONS (OpenRouter + configured providers)
Highest-quality, currently-usable on this gateway:
- **OpenAI Sora 2 / Sora 2 Pro** — configured + ready. Best cinematic quality, up to 12s, supports image-to-video (animate the blackout hero directly). **Recommended for the flagship hero loop.**
- **OpenRouter google/veo-3.1-fast** — configured + ready. Image-to-video, 4/6/8s, audio, up to 4 input images. Great for the NEM 3.0 motion-graphic + B-roll. **Recommended for the infographic animation.**
- Others (need keys): Runway gen4.5, Kling 2.1 Master, MiniMax Hailuo 2.3, Wan 2.6 — strong but not configured here yet.

**Plan:** image-to-video the blackout hero (lights flicker on across the dark street → one home blazes) via Sora 2; animate the $0.30→$0.08 collapse via Veo 3.1. Both as muted autoplay loops behind/within the respective homepage sections + vertical cuts for reels.

## 9. Honest constraints / dependencies
- **GBP is 36% of local pack and is Hugo's, not the website's.** Biggest single lever lives outside our code. Needs Hugo: correct category, service area, reviews, weekly posts. Flag to Wayne.
- **Reviews & per-city case studies** (high-value local signals) need real customer data — phase in as VoltSol gets installs/reviews; build the slots now, fill when available.
- **Don't over-image.** 294 unique AI hero shots = cost + sameness risk + perf hit. Archetype tiering is the right call.
- **Accuracy is now a moving target** (NEM/SGIP/ITC change). The `incentiveContext` field should be centrally sourced so one edit updates all pages when policy shifts.
