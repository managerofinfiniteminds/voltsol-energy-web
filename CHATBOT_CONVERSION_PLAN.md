# VoltSol Conversational Lead-Capture Agent — Conversion Plan
**Author: VoltSol (Opus 4.8) · 2026-06-19 · Goal: kill the Step-6 drop-off**

---

## 1. The Problem, Precisely

Our funnel (`/start`, `EstimateFlow.tsx`) is an 8-step linear form:

| Step | Ask | Friction |
|------|-----|----------|
| 0 | Monthly bill | low (one tap) |
| 1 | Own/rent | low |
| 2 | Roof shade | low |
| 3 | Timeline | low |
| 4 | Utility (now a dropdown) | low |
| 5 | **Value reveal** ("You could keep ~$9,367") | none — pure dopamine |
| **6** | **Name, last name, email, phone, consent** | **HIGH — the wall** |
| 7 | Confirmation | n/a |

Steps 0–5 are frictionless taps that build momentum and end on a high (the savings number). **Step 6 slams the brakes**: five typed fields + a legal consent checkbox, all at once, with nothing earned in return except "we'll contact you." The user has given value-signal but received only a *promise*. Classic form abandonment — the sales reps are right.

**The psychology:** people give personal info when (a) it feels like a conversation, not an interrogation; (b) each ask is small and justified; (c) there's reciprocity (they got something, they give something); (d) there's a human on the other end who *reacts* to them. A static form delivers none of that.

---

## 2. The Strategy: Conversational Slot-Filling Agent

Replace the monolithic Step-6 form with a **warm, human-feeling chat agent** that collects the same fields (`first_name`, `last_name`, `email`, `phone`, optional address, consent) one micro-ask at a time, reacting to each answer, and framing every ask around *their* benefit ("So I can text you the exact number — what's the best cell?").

This is **slot-filling**: the LLM drives a natural conversation while a structured layer tracks which required fields are still empty and nudges toward them. The form fields still exist underneath — we're changing the *delivery*, not the data model. The same `/api/engine/v1/leads` endpoint receives the lead, so scoring, emails, and the admin console all keep working untouched.

**Two deployment modes (we build both, A/B test):**
- **Mode A — Replace Step 6:** after the value reveal, the contact step *is* the chat agent.
- **Mode B — Persistent concierge:** a chat bubble available from Step 0 that can answer questions ("does this work in a blackout?", "what's the warranty?") and, when the user is warm, transition into capturing their info. Higher ceiling, more work.

**Recommendation: ship Mode A first** (directly attacks the proven leak), then layer Mode B.

---

## 3. The Conversation Design (the part that actually converts)

The agent runs a **scripted-but-flexible playbook**, not a freewheeling chat. State machine of "goals," LLM handles the language:

1. **Open on the win** (reciprocity + momentum):
   > "That $9,367 is real money. I can have one of our techs confirm the exact number for *your* roof — no charge, no pressure. Mind if I grab a couple quick details so they know who they're helping?"

2. **Ask name first** (lowest-threat, personalizes everything after):
   > "First — what should I call you?" → then uses the name in every subsequent line.

3. **Earn the phone with a reason** (the hardest field):
   > "Thanks, Jane. Texting is usually fastest — want your estimate sent by text? What's the best cell?" (frames phone as *delivery*, not *telemarketing*)

4. **Email as the safe fallback / backup:**
   > "And an email so you've got a copy in writing?"

5. **Soft-ask address (optional):**
   > "If you want the *exact* number and not just a range, what's the property address? Totally optional — a ballpark city works too."

6. **Consent woven in naturally**, never a cold legal wall:
   > "Last thing — cool if Hugo's team reaches out by call or text about your estimate? (Standard stuff, you can opt out anytime.)" → maps to the TCPA `consent` object we already capture.

**Behavioral levers baked into the system prompt:**
- **Reciprocity** — always reference the value they already got.
- **Micro-commitments** — one field per turn; each "yes" makes the next easier.
- **Labeling/empathy** — react to answers ("Smart — renters usually can't do this, owners can").
- **Loss-framing** — gently reference the rising utility cost they just saw.
- **No dead ends** — if they hesitate on phone, accept email-only and still submit a (lower-scored) lead. **A partial lead beats a bounce.**
- **Human cadence** — short messages, contractions, one question at a time, typing indicator, occasional emoji. Never a wall of text.

---

## 4. Model Recommendation (OpenRouter, live pricing 2026-06-19)

The conversational layer needs: **warmth + persuasion, tight instruction-following, low latency, reliable structured/tool output, low cost at volume.** This is NOT a reasoning-heavy task — it's a tone-and-control task. We do **not** want a slow reasoning model making a customer wait 6 seconds per reply.

**Recommended primary: `anthropic/claude-haiku-4.5`**
- Best-in-class at *warm, on-brand, instruction-faithful* conversation — exactly the "human-like" feel you asked for. Anthropic models are the strongest at staying inside a behavioral playbook without going off-script or hallucinating offers.
- Fast enough for real-time chat. Native tool/structured-output support for clean slot-filling.

**Recommended fallback chain (OpenRouter handles failover automatically):**
1. `anthropic/claude-haiku-4.5` — primary (tone + control)
2. `google/gemini-3-flash-preview` (current Flash; `gemini-2.5-flash` is the stable fallback) — cheap, fast, very capable; ~$0.0000005/$0.000003 per token class
3. `z-ai/glm-5.2` — ultra-cheap ($1.20/$4.10 per M), tools + structured outputs, huge context, as last-resort budget tier

> Note: Gemini is banned in this workspace **for coding only** — it's perfectly fine (and great) for conversational chat.

**Why not a big reasoning model (Opus/GPT-5/Gemini Pro)?** Overkill, slow, expensive. A customer chat needs sub-2s replies and consistent tone — Haiku-class wins. Save Opus for *building* this, not running it. **We use a "strong-cheap" runtime, not a genius runtime.**

### Cost math (the part you care about)
A full capture conversation ≈ 6–10 turns ≈ ~4–8K tokens total (system prompt is cached, so input cost collapses after turn 1 via prompt caching).

- **Claude Haiku 4.5** realistic blended cost: **~$0.004–0.012 per completed conversation.**
- **Gemini Flash:** **~$0.001–0.003 per conversation.**
- At 1,000 conversations/month: **$4–$12/mo on Haiku, ~$1–3/mo on Flash.**

This is rounding error against a single closed solar install. **No third-party SaaS, no per-seat fees — just OpenRouter token cost on the key we already have.**

---

## 5. Architecture (no third-party services)

```
Browser (EstimateFlow chat UI, streaming)
   │  POST /api/chat/lead  (SSE stream)
   ▼
Next.js API route  ──►  OpenRouter (Haiku 4.5, fallback chain)
   │                         ▲
   │  system prompt + state  │  tool: capture_field(field, value)
   │  + conversation history  │  tool: submit_lead(...)
   ▼
Neon: chat_sessions (transcript + slot state)
   │
   └─ on complete ─►  existing /api/engine/v1/leads  (scoring, emails, admin)
```

**Components to build:**
1. **`/api/chat/lead/route.ts`** — streaming (SSE) endpoint. Holds the system prompt + playbook, calls OpenRouter with our key, supports tool-calling for slot capture, persists transcript to Neon. Rate-limited (reuse our IP limiter) + honeypot.
2. **`lib/chat-agent.ts`** — system prompt builder (injects the user's bill, savings number, utility, system tier so the bot references real context), slot-state tracker, the fallback model chain, guardrails.
3. **DB migration `015_chat_sessions.sql`** — `chat_sessions` (id, session_id, transcript_json, slots_json, status, created_at) + link to `engine_leads` on completion.
4. **`components/LeadChat.tsx`** — the chat UI: message bubbles, streaming text, typing indicator, quick-reply chips for common answers, on-theme (navy/gold). Drops into Step 6 of `EstimateFlow`.
5. **Admin: `/admin/chat`** — read transcripts, see where people stall, tune the playbook. (We already have the admin shell + auth pattern.)
6. **Config-driven prompt** — store the playbook/system prompt in `site_config` so Hugo/we can tune tone *without a deploy* (we already have the CMS pattern for this).

---

## 6. Guardrails (non-negotiable — this is a public bot)

- **Scope lock:** system prompt forbids discussing anything but VoltSol solar + capturing the lead. Off-topic → polite redirect.
- **No fabrication:** bot must NEVER invent prices, timelines, tax-credit promises, or guarantees. Pricing comes only from the real estimate already shown. Hard-coded refusal list.
- **No legal/financial advice.** Defers to "Hugo's team will confirm."
- **Prompt-injection defense:** user text is data, never instructions. Output validated before any `submit_lead`.
- **TCPA compliance preserved:** explicit consent still captured verbatim (same `consent` object, version 2.0) before submit. Bot cannot submit without it.
- **Graceful exit:** "Talk to a human" / "just give me the form" always available — falls back to the classic Step-6 form instantly. **Never trap the user.**
- **PII handling:** transcripts stored in our Neon DB only; no third party ever sees customer data.
- **Cost ceiling:** max turns per session (e.g. 15) + token cap; abandon → still save partial lead.

---

## 7. Metrics & A/B Test

We already have `track()` → `/api/events` → `lead_events`. Add events: `chat_open`, `chat_field_captured`, `chat_complete`, `chat_abandon`, `chat_fallback_to_form`.

**Test:** 50/50 split — classic Step-6 form vs. chat agent. Primary metric: **Step-5 → submitted-lead conversion rate.** Secondary: lead quality (score distribution), partial-lead capture rate, cost/lead.

**Success bar:** conversational forms in industry routinely lift completion **20–40%+** over static forms. Even a conservative +15% on qualified-lead conversion pays for the build many times over.

---

## 8. Phased Roadmap

**Phase 1 — MVP (Mode A, replace Step 6)** · ~1–2 focused build sessions
- DB migration, `/api/chat/lead` streaming route, `chat-agent.ts` with Haiku + fallback, `LeadChat.tsx` UI, wire into Step 6 behind a feature flag, A/B split, events.
- *Exit criteria:* completes a full capture in chat, submits to existing engine, falls back to form cleanly, verified live from user standpoint.

**Phase 2 — Tuning & admin** · ~1 session
- `/admin/chat` transcript viewer, config-driven prompt in `site_config`, refine playbook from real transcripts, quick-reply chips.

**Phase 3 — Mode B (persistent concierge)** · ~2 sessions
- Always-available chat bubble that answers product questions (grounded in our `/technology` + FAQ content via retrieval) and transitions warm visitors into capture.

**Build muscle:** Phase 1 core (API + agent + UI) is a real multi-file feature → fire **Claude Code (Sonnet 4.6)** via the nohup pattern, or hand to a spawned build agent. Opus (me) writes the spec + system prompt + reviews. Cheap stuff (events wiring, migration) I do in-window.

---

## 9. The One Risk to Watch

A bad chatbot converts *worse* than a form — if it feels robotic, slow, or pushy, trust collapses. Mitigation: Haiku for tone, tight playbook, sub-2s streaming replies, hard "give me the form" escape hatch, and we **A/B test before we ever make it the default.** We ship it behind a flag and let the numbers decide.

---

## TL;DR
- **Problem:** Step 6 (the contact form) is the wall; everything before it is frictionless.
- **Fix:** a warm, human-feeling chat agent that earns the same info one micro-ask at a time, framed around the savings they just saw.
- **Model:** `anthropic/claude-haiku-4.5` primary (warmth + control), Gemini Flash / GLM 5.2 fallback. ~$0.004–0.012/conversation. No third-party SaaS — our OpenRouter key + Neon only.
- **Build:** streaming Next.js route + slot-filling agent + chat UI, drops into existing funnel, reuses our lead engine. Feature-flagged, A/B tested.
- **Upside:** industry-standard +15–40% completion lift; pays for itself on one install.
