# VoltSol Energy — AI Brand Video Production Plan
### "The Sun Doesn't Send a Bill" — 5–7 min cinematic explainer + viral engine

**Prepared for:** Wayne Kool (technical lead) / Hugo (owner)
**Launch window:** June 15–20, 2026
**Author:** VoltSol AI ⚡
**Date:** June 8, 2026

---

> **Bottom line up front:** A full 7-minute cinematic piece by June 15 is not realistic at the quality bar this brand deserves. **Go phased.** Ship a punchy **75-second teaser June 15** (it's also your best-performing social asset anyway), then drop the **full 6-minute hero film June 20**. The teaser buys time AND seeds the launch. This is not a compromise — it's the correct sequencing. Short-form is what actually goes viral; the long film is what builds authority and converts.

---

## 1. VIDEO CONCEPT & SCRIPT OUTLINE

### Title
**"The Sun Doesn't Send a Bill"**
Subtitle on screen: *How Northern California families are cutting the cord on PG&E — for less than the cost of a used car.*

Alt titles considered (use for A/B on thumbnails): "Goodbye, PG&E" · "The $9,000 Way Off the Grid" · "Your Last Power Bill."

### Why this title
It's the entire emotional arc in six words. It's a fact, not a pitch. It frames the sun as the hero and PG&E as the villain by implication — no sleazy salesman energy. It's screenshot-able and hashtag-able.

### Narrative arc — 6 minutes, 6 chapters

The video runs **~6:00** (the sweet spot — long enough for authority, short enough to finish). Structure follows the requested emotional arc: **Anger → Hope → Trust → Action.**

---

**CHAPTER 1 — THE BILL (0:00–0:45) · Emotion: Anger / Recognition**

- **Hook (first 5 seconds, make-or-break):** Tight shot of a PG&E bill landing on a kitchen counter. Number ticks up on screen: $247… $312… $389. A hand picks it up. We hear a frustrated exhale. Cut to black. Title card: *"The Sun Doesn't Send a Bill."*
- **Visuals:** Golden-hour suburban NorCal homes, a thermostat reading 104°F outside, a spinning utility meter, then a red "RATE INCREASE" notice.
- **Key message:** *You're not imagining it. Your power bill keeps going up — and there's nothing you can do about it. Or so they want you to believe.*
- **Viewer feels:** Seen. Angry. "Finally someone's saying it."

**CHAPTER 2 — THE TRAP (0:45–1:45) · Emotion: Validated anger → curiosity**

- Quick, data-driven montage: PG&E rate-increase history, rolling blackout footage (B-roll), the asterisks and gotchas of "traditional solar."
- **Key message:** *PG&E rates have climbed relentlessly. And the "solar" most companies sell you? A $40,000 loan that ties you right back to the grid you were trying to escape. That's not freedom. That's a new landlord.*
- **The pivot line:** *"What if you didn't need the grid at all?"*
- **Viewer feels:** "Wait — that's an option?" Curiosity cracks open.

**CHAPTER 3 — THE TECHNOLOGY (1:45–3:15) · Emotion: Hope / "aha"**

- This is the explainer core. Clean, animated, satisfying. Show the **EG4 hybrid system** as a simple three-part story:
  1. **Panels** soak up free sunlight (animated photons → electricity).
  2. **Battery** stores it so you have power day AND night (animated charge filling at sunset).
  3. **Mini-split unit** heats and cools the home efficiently off that stored power.
- Animate the energy flow through the house. Lights stay on while the neighbor's house (still on PG&E) goes dark in a blackout.
- **Key message:** *This is EG4 hybrid solar. Panels, battery, and climate control working as one system. True off-grid capability — your home runs on sunlight you already paid nothing for.*
- **Viewer feels:** Hope. "This actually makes sense." The mechanism is no longer mysterious.

**CHAPTER 4 — THE NUMBER (3:15–4:15) · Emotion: Disbelief → belief**

- The differentiator, delivered as the emotional gut-punch of the film. Side-by-side animated comparison:
  - Traditional solar: **$30,000–$60,000**, still grid-tied.
  - EG4 hybrid (VoltSol): **$8,000–$10,000**, off-grid capable.
- Show a simple break-even animation: monthly PG&E bill of $300 vs. the one-time cost. The system pays for itself in ~2.5–3 years, then it's free power for decades.
- **Key message:** *Eight to ten thousand dollars. One time. Less than a used car — and it never sends you a bill again.*
- **Viewer feels:** "That can't be right… wait, that IS right." Belief locks in.

**CHAPTER 5 — THE INSTALLER (4:15–5:15) · Emotion: Trust**

- Now we meet **Hugo**. This is the only section that benefits from a real human — see production note below. Hugo on a real NorCal rooftop, real installs, real homeowners. Authentic, not polished-fake.
- **Key message:** *Hugo has spent [X] years installing systems across Northern California. No high-pressure sales floor. No financing traps. Just the right system, installed right, by the person who'll stand behind it.*
- If we can't film Hugo by deadline: AI-narrated over real install photos + a single authentic phone-shot clip of Hugo. **Do not fake a person with AI here** — trust dies the moment it feels synthetic.
- **Viewer feels:** Trust. "These are real people. This is real."

**CHAPTER 6 — THE INVITATION (5:15–6:00) · Emotion: Action**

- Warm close. Sunrise over a home with panels. Family inside, lights on, no bill in sight.
- **Voiceover CTA:** *"Find out what your home could do. Scan the code, or visit VoltSol Energy. The sun's already working. Let's put it to work for you."*
- **QR CODE placement:** Large, centered, on screen for the **final 8–10 seconds**, with the URL typed below it (`voltsolenergy.com/go/[campaign]`) so it works even when watched on the phone that can't scan itself. Hold it long enough to scan comfortably.
- Logo + tagline lockup: **VoltSol Energy ⚡ — Clean energy, built to last.**
- **Viewer feels:** Ready. Low-friction next step. No pressure.

### QR / CTA strategy notes
- QR appears **twice**: a small persistent corner bug from 5:15 onward, then the full-screen hold at the end.
- Every short-form cut ends on the same QR + URL frame for consistency.
- URL doubles as the fallback: people screenshot, then type it later.

---

## 2. AI PRODUCTION STACK (mid-2026, specific picks)

> Verified against current-2026 market. Sora 2 is being discontinued (web April 26 2026, API Sept 24 2026) — **do not build on Sora.** The field has consolidated around Veo, Kling, Runway, ElevenLabs, and Suno.

| Need | **PICK** | Why this one | Quality | Cost | Free tier usable? |
|---|---|---|---|---|---|
| **Script writing** | **Claude (Opus/Sonnet)** + this document as the brief | Best long-form narrative + emotional control; you already have it in-stack. Feed it the arc above, iterate line-by-line. | Top | Already have | Yes |
| **Voiceover** | **ElevenLabs** — voice: **"Adam"** or a custom-cloned mature male (40s–50s, warm-authoritative, slight gravel) | Industry standard for trust/authority VO. Adam reads "documentary narrator" — calm, credible, not announcer-y. Clone Hugo's actual voice if he's game (huge authenticity win). | Top | **$22/mo Creator** (or $5 Starter for testing). Full 6-min script ≈ 6,000–7,000 chars, fits Creator easily. | Free tier OK for tests; pay for commercial rights |
| **Animation / motion graphics (energy-flow, diagrams)** | **Runway Gen-4.5** for stylized motion + **After Effects / CapCut** for the technical diagrams | Chapter 3 & 4 are explainer animation, not photoreal video — these are best done as designed motion graphics, not text-to-video. Runway fills cinematic transitions. | High | Runway **$15–$35/mo** | Watermarked free tier — not usable for final |
| **Cinematic B-roll / establishing shots (homes, sunsets, blackouts)** | **Google Veo 3.1** | Best overall photoreal model in 2026 — native audio, 60-sec clips, real physics. Use for the hero suburban/rooftop/blackout shots. | Top | **$0.40/sec** with audio (Standard) or **$0.05/sec silent** (Lite) via Google AI / Flow. ~20–30 generated clips ≈ $40–$90. | Limited credits on Gemini plans |
| **Budget B-roll alternative** | **Kling 3.0** | Price-to-quality king if Veo budget runs hot. 10-sec clips, strong realism. | High | **$6.99/mo** Standard; generous free daily credits | Yes — genuinely usable |
| **Product / EG4 hardware shots** | **Real photos of EG4 gear** + Veo/Runway for hero angles | Never fully fake the product — use Hugo's real install photos, enhance/animate. | High | Free (Hugo's photos) | — |
| **Music / sound design** | **Suno** (latest model) | Fastest path to a custom cinematic score that matches the arc (tense → hopeful → triumphant → warm). Generate 3–4 cues. | High | **Pro ~$10/mo** or **Premier ~$30/mo** — Premier gives clean commercial rights. **Get Premier.** | Free tier exists but NO commercial use — don't ship it |
| **Sound effects** | **Freesound / Epidemic Sound** | Bill thud, meter spin, blackout hum, sunrise swell. | Good | Free–$15/mo | Yes |
| **Video assembly / editing** | **CapCut Pro** (Wayne-does-it path) OR **Adobe Premiere Pro** (freelancer path) | CapCut: fastest, AI captions built in, free-to-cheap, great for social cuts. Premiere: pro finish if you hire out. | High | CapCut **free–$7.99/mo**; Premiere ~$23/mo | CapCut free tier mostly usable |
| **Subtitles / captions** | **CapCut auto-captions** (primary) + manual cleanup | Free, fast, social-native styling, burns in for silent autoplay (critical — 85% watch muted). | High | Included | Yes |
| **QR code generation** | **QR Code Generator (qr-code-generator.com) dynamic QR** OR self-host a short-link → `/go/[campaign]` | **Use a DYNAMIC QR** so the destination is editable and scans are TRACKABLE. Static QR can't be measured — fatal for this campaign. | — | ~$5–$15/mo for dynamic+analytics | Static is free but untrackable |

**Stack summary (recommended):** Claude (script) → ElevenLabs (VO) → Veo 3.1 + Kling (B-roll) → Runway + After Effects/CapCut (animation) → Suno Premier (music) → CapCut/Premiere (assembly) → CapCut (captions) → dynamic QR.

---

## 3. PRODUCTION WORKFLOW

| # | Step | Who | Time | Decision point |
|---|---|---|---|---|
| 1 | **Lock script** from this outline | Wayne + Claude | 3–4 hrs | Final on the $8–10k number & break-even claim — must be defensible |
| 2 | **Storyboard / shot list** (every line → a visual) | Wayne + Claude | 2–3 hrs | Which chapters are AI video vs. motion-graphics vs. real footage |
| 3 | **Record voiceover** (ElevenLabs, or clone Hugo) | Wayne | 1–2 hrs | Adam vs. cloned Hugo voice — clone if Hugo consents |
| 4 | **Generate music** (Suno, 3–4 cues to arc) | Wayne | 1–2 hrs | — |
| 5 | **Generate B-roll** (Veo/Kling, ~25 clips) | Wayne | 4–6 hrs (gen + curate) | Veo budget vs. Kling — start Kling, upgrade hero shots to Veo |
| 6 | **Build animation/diagrams** (Ch.3 energy flow, Ch.4 cost compare) | **Human motion designer recommended** | 6–10 hrs | DIY in CapCut (simpler) vs. hire (cleaner) — **this is where a freelancer earns their fee** |
| 7 | **Capture Hugo footage** (Ch.5) | Hugo + phone/Wayne | 1–2 hrs | Real shoot vs. photo montage if scheduling fails |
| 8 | **Assemble timeline** (VO + music + B-roll + animation) | Wayne or freelancer | 6–8 hrs | Pacing pass — kill anything that drags |
| 9 | **Captions + QR + lockups** | Wayne | 2 hrs | Caption style, QR hold length |
| 10 | **Review / revise** (2 passes) | Wayne + Hugo | 3–4 hrs | Does Hugo approve every factual claim? |
| 11 | **Cut short-form versions** (teaser + 4–6 clips) | Wayne | 4–6 hrs | Which moments cut best for vertical |
| 12 | **Final render + export** (16:9 master + 9:16 + 1:1) | Wayne | 1 hr | — |

**Total production time:** **~40–55 hours** of focused work. With Wayne solo + AI: roughly **6–8 working days**. With a freelancer handling steps 6 & 8: compresses to **~4 days** of Wayne's time.

**Critical path:** Script (1) → VO (3) → Animation (6) → Assembly (8). The animation step is the long pole. **Start it first if hiring.**

---

## 4. COST BREAKDOWN

### Recurring (monthly subscriptions — needed during production month)
| Tool | Cost |
|---|---|
| ElevenLabs Creator | $22 |
| Suno Premier (commercial rights) | $30 |
| Runway (Standard) | $15–$35 |
| Kling Standard | $7 |
| CapCut Pro | $8 |
| Dynamic QR + analytics | $10 |
| **Recurring subtotal** | **~$92–$112 / mo** |

### Usage / one-time
| Item | Cost |
|---|---|
| Veo 3.1 hero clips (~25 clips, mixed Lite/Standard) | $40–$90 |
| Stock SFX (optional) | $0–$15 |

### Three budget tiers

**🟢 LOW — Wayne + AI, no freelancer, Kling instead of Veo, CapCut**
- Subscriptions (1 month): ~$77 (ElevenLabs $22 + Suno $30 + Kling $7 + CapCut $8 + QR $10)
- Cancel after launch month.
- **Total: ~$80–$120.** Trade-off: animation is DIY-simpler, B-roll slightly less cinematic.

**🟡 MID (recommended) — Wayne + AI, Veo for hero shots, polished DIY animation**
- Subscriptions: ~$110 + Veo usage ~$70
- **Total: ~$180–$250.** Best quality-per-dollar. This is the right call.

**🔴 HIGH — Hire a freelance editor/motion designer for steps 6 & 8**
- All MID costs (~$200) + freelancer
- Freelance motion designer / editor for a 6-min branded explainer: **$800–$2,500** (Upwork/Fiverr Pro mid-range; a strong one ~$1,200–$1,500)
- **Total: ~$1,000–$2,700.** Buy this if Hugo wants broadcast-grade and Wayne's time is better spent elsewhere.

> **Recommendation: MID tier for the hero film (~$200), and have Wayne cut the short-form himself.** If the teaser performs in week 1, the freelancer upgrade for v2 pays for itself.

---

## 5. SOCIAL DISTRIBUTION STRATEGY

Hugo starts at zero. The video isn't the campaign — **the clips are.** One 6-min film becomes ~15 pieces of content.

### Platform priority & order
1. **YouTube** (home base) — full 6-min film lives here permanently. This is the authority anchor + the QR destination's backup proof. Set up the channel FIRST.
2. **Instagram Reels + TikTok** (the viral engine) — vertical clips. This is where reach happens. Post the teaser here June 15.
3. **Facebook** (the conversion engine for this demo) — NorCal homeowners 35–65 live here. Facebook + local Facebook Groups ("[Town] Community", "PG&E Sucks"-type groups) convert best for solar.
4. **Nextdoor** (the secret weapon) — hyperlocal, homeowner-dense, neighbors trust neighbors. Post the film + a "local installer" intro from Hugo. Underrated for solar leads.
5. **YouTube Shorts** — repurpose the vertical cuts for extra discovery.

### Repurposing the 6-min film → ~15 assets
- **75-sec teaser** (the June 15 launch piece, all platforms)
- **"The Number" clip** (Ch.4, $8–10k vs $30–60k) — *this is your most viral cut.* 30–45 sec.
- **"How it works in 60 seconds"** (Ch.3 animation)
- **"PG&E rates" anger clip** (Ch.1–2) — high shareability
- **"Meet Hugo"** (Ch.5) — trust builder
- **5–6 single-fact micro-clips** (15–20 sec each): "Your bill won't stop climbing." / "Less than a used car." / "No grid needed."
- **1 carousel** (static): the cost-comparison infographic
- Every clip ends on the **same QR + URL frame.**

### Hashtag / SEO / discovery
- YouTube title/SEO: "Solar + Battery in Northern California — Cut Your PG&E Bill | VoltSol Energy"
- Hashtag sets (rotate): `#NorCalSolar #PGE #OffGrid #SolarPower #BatteryStorage #[CountyName] #EG4 #SolarSavings #CleanEnergy`
- Geo-tag every post to the actual NorCal service area towns.
- TikTok/IG hook text overlay = the chapter's gut-punch line (e.g., "$8,000. One time. No more PG&E.")

### Posting schedule — Weeks 1–4
- **Week 1 (June 15–21):** Day 1 teaser (all platforms) → Day 3 full film drops on YouTube + announce everywhere → Day 5 "The Number" clip → Day 7 "Meet Hugo."
- **Week 2:** 3 posts — "How it works" clip, anger clip, 1 micro-clip. Reply to every comment.
- **Week 3:** 3 posts — cost infographic carousel, 2 micro-clips. Boost ($50–100) the best-performing clip on Facebook geo-targeted to service area.
- **Week 4:** 3 posts — testimonial if any leads converted, repost top performer, new micro-clip. Review analytics, double down on what's working.
- **Cadence:** 3–4x/week sustainable. Consistency > volume.

### QR integration across channels
- Same dynamic QR everywhere → `voltsolenergy.com/go/[campaign]`.
- In video frames (end card), in every bio link, in post captions as the typed URL, on the print door hangers.
- **One destination, fully tracked** — every scan and click attributes to source via UTM params (`?src=tiktok`, `?src=door`, etc.).

---

## 6. DOOR KNOCKER / PRINT INTEGRATION

### QR code design guidelines
- **Dynamic QR** (trackable, editable). Minimum **1 inch / 2.5cm** printed; bigger is better.
- High contrast (dark on white/light). Quiet zone (white border) all around — don't crowd it.
- **Center it with a ⚡ logo embed** (most QR generators allow a center logo without breaking scannability — test-scan before printing).
- Caption directly under it: **"Scan to see what your home could save."**
- Always print the URL as fallback: `voltsolenergy.com/go/[campaign]`.

### Door hanger hierarchy (top → bottom)
1. **Headline (biggest):** "STOP PAYING PG&E." or "The Sun Doesn't Send a Bill."
2. **Subhead:** "Off-grid solar + battery for Northern California homes. From $8,000 — not $40,000."
3. **3 bullet proofs:** • Panels + battery + climate control • True off-grid capable • Installed local by Hugo
4. **The QR code** (large) + "Scan to watch the 2-min video & get a free estimate."
5. **Footer:** VoltSol Energy ⚡ logo + URL + phone.

### How video + print reinforce each other
- Door hanger QR → lands on the **same page** that hosts the teaser video. The homeowner who got the flyer watches the exact film they'd see on social. **Consistency = recognition = trust.**
- Print plants the seed; social retargeting + the film closes it. A neighbor sees the door hanger AND the Facebook clip = "I keep seeing these guys, they must be legit."
- UTM `?src=door` lets you measure door-knock ROI separately from social.

---

## 7. SUCCESS METRICS

### What "viral" means for a local solar company
Forget millions of views — **wrong metric.** For a NorCal installer, "viral" = **a clip breaks past your follower base into the local feed and generates qualified local leads.** 50,000 local views that produce 30 booked estimates beats 2M random global views. **Leads booked is the only metric that pays Hugo.**

### KPIs by checkpoint
**At 2 weeks (leading indicators it's working):**
- Teaser > 5,000 views, > 3% engagement rate
- Watch-through > 50% on the teaser
- ≥ 20–40 QR scans / link clicks
- ≥ 5 form submissions on `/go/`
- Comments asking "how much?" / "do you serve [town]?" ← strongest buying signal

**At 4 weeks:**
- ≥ 1 clip past 25k views (the "break-out")
- 100+ total link clicks across sources
- ≥ 15–25 leads captured
- ≥ 2–3 booked estimates
- Follower base 0 → 200–500 (real, local)

**At 90 days:**
- ≥ 50–100 leads captured
- ≥ 10–20 estimates booked
- **≥ 3–6 closed installs traceable to the campaign** — at $8–10k each, that's $24k–$60k revenue from a ~$200 video. That's the ROI story.
- Repeatable content engine running (Hugo posting consistently)

### Leading indicators (watch these weekly)
- Save/share ratio on clips (shares = the viral signal)
- "The Number" clip outperforming others (validates the cost-shock hook)
- Door-knock QR scans (`?src=door`) trending up
- DMs/comments with buying intent

---

## 8. TIMELINE — Phased to June 15–20

> **Verdict: full 6-min by June 15 = no. Phased = yes, and better.** A teaser June 15 then hero film June 20 is the recommended path.

### Phase 0 — Setup (NOW → June 10)
- Lock script (this outline → final). [Wayne + Claude]
- Stand up YouTube, IG, TikTok, Facebook, Nextdoor accounts. [Wayne — do today, they need age before launch]
- Confirm `/go/[campaign]` lead page is live + dynamic QR generated. [Wayne]
- Get Hugo's sign-off on the $8–10k claim + break-even math. **Blocker if not done.**

### Phase 1 — TEASER (June 10 → June 15 launch)
- 75-sec teaser using Chapters 1, 4, 6 (anger → the number → CTA).
- VO + Suno music + 6–8 Veo/Kling clips + one strong cost-compare graphic + QR end card.
- ~10–14 hours work. Very achievable.
- **🚀 LAUNCH JUNE 15:** Teaser drops on all platforms + first door-hanger run.

### Phase 2 — HERO FILM (June 15 → June 20 drop)
- Build out remaining chapters (2, 3, 5), full animation pass, Hugo footage, assembly.
- ~30–40 hours. Tight but doable with the teaser assets as a head start (VO, music, B-roll all reusable).
- **🎬 DROP JUNE 20:** Full 6-min film on YouTube + announce across channels + begin the Week 1–4 clip cadence.

### Realism flags
- **If Hugo footage (Ch.5) can't be shot by June 18:** ship hero film with photo-montage + VO for that chapter, recut with real Hugo footage as a "v1.1" the following week. Don't let one shoot block the launch.
- **If animation (Ch.3/4) runs long:** that's the freelancer trigger — spend the HIGH-tier money on those two sequences only.
- **Don't slip June 20 for polish.** Ship at 90%, iterate live. The campaign improves with audience feedback anyway.

---

## ⚡ The one-paragraph pitch to Hugo
*"We're going to make a 6-minute film that turns your customers' anger at PG&E into trust in you — for about $200 in AI tools. It explains EG4 hybrid solar so anyone gets it, hits them with the number that breaks their brain ($8–10k vs $40k), and ends with a QR code on every social post and every door hanger that drops them straight onto a quote page. We launch a teaser June 15, the full film June 20, and we chop it into 15 clips that run for a month. If three of those leads close, the whole thing paid for itself a hundred times over."*

---
*Plan ends. Tool pricing verified against mid-2026 market (Veo 3.1, Kling 3.0, Runway Gen-4.5, ElevenLabs, Suno). Sora 2 deliberately excluded — discontinued 2026.*
