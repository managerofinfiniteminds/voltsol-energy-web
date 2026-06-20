# VoltSol — Developer SEO Launch Plan (Wayne)

**Context:** On-site SEO is DONE & live (389-URL sitemap, robots OK, HTTPS 200, LocalBusiness + CSLB
schema, metadata, scaled city/market pages, NAP consistent w/ (530) 228-1019). The job now is:
(1) make Google start crawling, (2) measure, (3) fix the few real gaps, (4) feed the off-page track.
You can do ALL of this while Hugo works his checklist.

## 🚦 Priority order (do top-down)

### P0 — Get Google crawling + measuring (do today, ~1 hr)
- [ ] **Google Search Console** — add property `voltsolenergy.com` (Domain property via Cloudflare DNS TXT —
      we own the CF zone, so this is fast). Submit `sitemap.xml`. This is what tells Google "come index me."
- [ ] **Add GSC verification** — either the DNS TXT (preferred) or `metadata.verification.google` in
      `src/app/layout.tsx` (Next supports `verification: { google: '...' }` in the Metadata export).
- [ ] **Bing Webmaster Tools** — import from GSC (one click), submit sitemap. ~30% of "near me" + Copilot.
- [ ] **Analytics** — add GA4 (or Plausible if you prefer privacy/light). Currently NONE is installed.
      Without it we're flying blind on what's converting. GA4 via `@next/third-parties` `<GoogleAnalytics>`
      is the clean Next 15 way.
- [ ] **Request indexing** for the homepage + 5 top city pages in GSC (URL Inspection → Request Indexing).

### P1 — Fix the real on-site gaps (this week)
- [ ] **Self-review schema risk** — `src/app/page.tsx` emits `aggregateRating`/`Review` from on-site
      testimonials. Google penalizes self-serving review stars. EITHER: gate it behind a flag until real
      Google reviews exist, OR switch the source to verified reviews. Safer to disable the star markup now,
      re-enable when Hugo has real Google reviews (then it's legit + powerful).
- [ ] **Confirm canonical + OG image** render on every indexable page (spot-check city pages). OG image
      `/og-image.png` referenced in schema — verify it exists and is 1200×630.
- [ ] **`lastModified` in sitemap** is `new Date()` (always "now") — fine, but consider real per-page dates
      for content pages so Google sees genuine freshness signals.
- [ ] **Internal linking pass** — make sure city/market pages link to each other + to /technology + /learn
      (topic clusters). Already partly built; audit for orphans.

### P2 — Convert the traffic you'll get (this week)
- [ ] Verify the **lead chat (Ray)** + estimate funnel fire on city pages (they're the SEO landing pages —
      traffic lands there, must convert). Quick check: does ChatWidget mount + a CTA exist on `/market/...`?
- [ ] Make sure the **phone (530) 228-1019 is click-to-call** on mobile across all templates (footer has it;
      confirm city/market headers do too).
- [ ] Confirm **conversion tracking** — wire a GA4 event on lead submit + chat lead so we can prove ROI.

### P3 — Feed the off-page track + content cadence (ongoing)
- [ ] When Hugo's GBP is **verified**: connect a Google reviews widget on-site (social proof + re-enables
      legit review schema). Embed real reviews.
- [ ] Add Hugo's **install photos** to city pages + /technology + homepage (real photos rank + convert).
- [ ] **Content cadence:** publish 1–2 `/learn` articles per week targeting the keyword list already in
      `/admin/seo-strategy` (e.g. "EG4 18kPV review", off-grid vs grid-tie, NEM 3.0, cost in <city>). The
      city × topic matrix is the long-tail engine. Ray's KB should stay in sync with new articles.
- [ ] Monitor GSC weekly: impressions → clicks → which queries → double down.

## What you DON'T need to do
- On-site structure, schema scaffolding, sitemap/robots — built. Don't rebuild.
- Don't touch Hugo's off-page items (GBP, reviews, citations) — those are his.

## Hand-offs
- **From Hugo → you:** GBP verified confirmation, install photos, final service-area city list, hours.
- **From you → Hugo:** his review link (pull from GBP once verified), confirm site reflects his info.

## Quick wins ranked by impact-to-effort
1. GSC + sitemap submit (unlocks indexing) — 20 min, huge
2. GA4 (measurement) — 30 min, huge
3. Disable self-review star schema (penalty risk) — 15 min, protective
4. Request-index top pages — 10 min, speeds first ranking
5. Bing Webmaster — 10 min, free incremental traffic
