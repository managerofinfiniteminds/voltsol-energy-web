# The Leads Business — Vision v1
**Distilled from Wayne's notes, 2026-07-02 | Working title: TBD ("LeadCurrent"? "RawLeads"? — name later, thesis first)**

---

## The Thesis, in one line

**Angie's List and Thumbtack sell a directory. We sell a lead.** They make the *consumer* do work (sign up, fill out a profile, wait to get matched, field five contractor calls). We flip it: technology does the finding, a human does the closing, and the finished conversation — not a listing, not a match — is the product.

> "All roads lead to leads."

---

## What's broken about the incumbent model

Angie's List, Thumbtack, HomeAdvisor — all of them run the same playbook:

1. Build a directory of service pros.
2. Get the CONSUMER to sign up, create a request, describe their job.
3. Sell that request to multiple contractors who now have to compete/bid.

Every one of those steps is friction. The consumer wanted a solar quote, not a homework assignment. By the time they've filled out a profile and fielded four cold-call bids, the experience has already told them "this is a marketplace, not a relationship." That's why these platforms have brand fatigue — consumers associate them with getting hounded, not helped.

**The friction isn't a UX bug. It's the business model.** Those companies need the consumer's data entry to justify charging contractors — the "listing" is the product they're selling. That's backwards.

## The insight: flip which side does the signing-up

Two facts, put together, break the model open:

1. **Licensed professionals are a rich, accurate, publicly discoverable dataset.** State licensing boards (CSLB in California, equivalents everywhere) already maintain a verified, structured, near-complete registry of every licensed contractor in a trade and territory — name, license number, status, contact info. This data exists *today*, for free, with zero signup friction on the supply side. You don't need contractors to build a profile on your platform. You already know who they are.
2. **Consumers already search first.** Nobody opens Thumbtack organically wanting to "browse." They Google "solar cost Sacramento" or click an ad. The intent already exists in the wild. Capture it at the point of intent — a fast, single-touch landing page, not a multi-step matching form — and the friction Angie's List imposes just... isn't necessary.

So: don't build a two-sided marketplace where both sides have to sign up. Build a lead-generation engine that captures consumer intent with almost zero friction, and use the always-available licensed-pro registry as the distribution list on the other side. Neither side needs "an account" to make this work.

## What the business actually is

**Not a marketplace. A lead factory with a human closing layer.**

- **Lead generation is the gold.** The hard, valuable, defensible part of this business is getting a real, qualified, motivated homeowner to raise their hand — fast, cheap, at scale, across many local markets. That's the moat.
- **Salespeople close humans.** Once someone raises their hand, the sale itself — building trust, answering objections, getting to yes — is a human-to-human act. No chatbot replaces that, and we shouldn't try to make it. Technology's job ends at "warm, qualified, ready to talk." A human takes it from there.
- **Contractor relationships happen AFTER the sale, not before.** The salesperson — not the platform — decides which licensed pro actually fulfills the job, and that handoff happens post-close. The tech platform never has to solve contractor-matching logic, dispatch, scheduling-with-installer, or any of the operational mess that turns a lead-gen company into a logistics company. Keep the software's job small: find the person, qualify the person, hand off a warm human conversation.
- **Less technology, more human — technology just gets the lead.** The instinct with AI agents is to automate the whole funnel. Resist that here. Use tech to find intent, capture it instantly, and pre-qualify — then get out of the way and let a person close. The tech's value is in speed and reach, not in replacing the relationship.

## The sequencing: generate leads → THEN build the marketplace

This is the order that matters, and it's the opposite of how Angie's List/Thumbtack were built:

1. **Phase 1 — Prove the lead-gen engine in one vertical.** Solar, via VoltSol. Low-friction intent capture, licensed-pro dataset as the eventual distribution mechanism, human closer (Hugo's team) at the point of sale. Get this repeatable and cheap before touching "marketplace."
2. **Phase 2 — Recursive learning.** Every vertical teaches the next: what search intent converts, what qualification questions predict a real sale, what speed-to-lead response time actually moves the needle, what a licensed-pro registry looks like state-by-state and trade-by-trade. VoltSol is the sandbox. The tech is being built to generalize from day one, even though it's shipping as one company's website today.
3. **Phase 3 — THEN the marketplace.** Once lead generation is proven and repeatable in a vertical, that's when a marketplace layer makes sense — not a Thumbtack-style consumer-facing directory, but a *lead marketplace*: qualified, closed opportunities routed/sold to multiple licensed pros pulled straight from the public registry, with zero signup friction required from them either. The marketplace is a distribution mechanism for a proven product (the lead), not the starting point.
3.5. **Phase 3.5 — Sell the closed deal, not just the lead.** A further-downstream evolution of Phase 3: instead of stopping at "here's a qualified lead," go one step past it — sell an already-closed, contract-signed deal as a tradeable asset. A licensed broker signs a legally binding, fully-specified contract with the homeowner (equipment, price, financing terms locked via Aurora or similar proposal tools). That signed contract is now paper — a known gross value, a known expected margin. Installers buy the paper outright, or bid on it auction-style, instead of buying a name and a phone number. The rep gets paid in days instead of months; the buyer gets a done deal with zero sales-cycle risk; the broker's name never touches the install — the installer's own CSLB license handles fulfillment, same discipline as Phases 1-3.
   - **This is a step further than the lead marketplace, not a replacement for it.** A lead is an opportunity. A closed contract is a locked-in transaction. Selling paper is a different regulatory lane — contractor's-license/broker structure, not just data brokering — and needs real legal review before it's anything more than a thesis. Say that plainly, don't build it quietly.
   - **Tension with Section on "what we will never build":** the no-bidding-UI, no-contractor-profiles rule was written for the *lead* side — we don't want contractors competing for raw attention, Angie's-List-style. An auction for *already-closed* contracts is a different animal: no lead-matching, no ongoing contractor relationship, no dispatch involved on our end. It reads closer to a commodities exchange for finished paper than the trap we're avoiding — but that distinction needs to be verified in practice, not assumed clean, before this gets built.
   - **Origin:** a live call with Josh Orozco (2026-07-02, transcript in `plans/josh-orozco-call-transcript.md`) describing exactly this model — sales reps sign the deal, sell the signed contract at a discount to whichever installer bids highest in that zip code, get paid same-week instead of waiting on commission. This is Josh's pitch/operating idea, not something claimed as originated here — it maps cleanly onto the sequencing already locked in, one step further downstream.
4. **Phase 4 — Expand verticals.** Roofing, HVAC, battery storage, electrical — any trade with (a) real consumer search intent and (b) a public licensing registry. Same engine, new dataset, new landing pages.

## Why VoltSol is already the proof of concept — not a side project

Everything built for VoltSol so far is, without anyone naming it this way yet, Phase 1 of exactly this business:

- **Low-friction intent capture** — `/go/[campaign-code]` landing pages, single-step estimate flow, no Angie's-List-style profile-building. This *is* the "search first, minimal friction" model already in production.
- **Lead scoring** (hot/standard/low_priority) — this is the qualification layer that decides which leads are worth a human's time right now.
- **Speed-to-lead conversational agent** (the plan just written in `LEADGEN-BOT-PLAN.md`) — this is the "technology gets the lead, human closes" loop, literally: agent responds in under 90 seconds, qualifies conversationally, then hands a warm, scored lead to Hugo (the human closer) via Telegram alert. Nothing here tries to replace the closer — it tries to make sure the closer never misses the moment.
- **Neon CRM (campaigns, contacts, lead_events, communication_log)** — this is the data spine a multi-vertical lead business needs regardless of trade.
- **What's NOT built yet, and is the actual Phase 3 differentiator:** the licensed-professional registry integration. Right now VoltSol sells leads to exactly one buyer (Hugo). The dataset insight — pull CSLB (or equivalent) licensed-pro data as a distribution list — is the unlock that turns "one company's lead form" into "a lead business." That's the concrete next R&D step once VoltSol's engine is proven.

## What this means, practically, right now

- Keep building VoltSol's speed-to-lead layer exactly as planned (Phase 1-2 of `LEADGEN-BOT-PLAN.md`) — it's not a side quest, it's the R&D vehicle for the bigger thesis.
- Do **not** build any contractor-facing signup/profile/bidding UI. That's the Angie's List trap. If/when a second buyer for solar leads is needed, the move is direct outreach using the public licensing registry ("we have N hot leads in your territory this week"), not a self-serve marketplace.
- Treat every VoltSol learning (what copy converts, what qualification questions predict close rate, what response time matters) as a transferable asset, not a one-off. Log it like we log everything else — this becomes the playbook for vertical #2.
- The licensed-pro registry scrape/build is the single highest-leverage piece of net-new R&D to sequence in once VoltSol's core loop (Phase 1-3 of the bot plan) is live and generating real lead volume.

---

**Bottom line:** we're not building a directory. We're not building Thumbtack. We're building a machine that finds a person who wants something, gets a human on the phone with them fast, and lets that human close — while staying completely out of the business of managing contractor relationships. Solar is the sandbox. The recursive loop — capture, qualify, close, learn, repeat in the next vertical — is the business.
