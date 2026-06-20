# VoltSol Lead-Capture Chatbot — BUILD SPEC (Phase 1 MVP)
# Authored by Opus 4.8. The headless build loop MUST satisfy every ACCEPTANCE GATE
# in docs/chatbot/acceptance.mjs before declaring done. Mobile-first is mandatory.

## STACK CONTEXT (already in repo — do not reinvent)
- Next.js 14.2 App Router, TypeScript, Tailwind. Neon Postgres via `import { sql } from '@/lib/db'`.
- Lead engine endpoint that scores + emails + shows in admin: `POST /api/engine/v1/leads`.
  REQUIRED fields it needs for a full lead: first_name, last_name, email, phone, consent
  { version, wording(>=10 chars), form_id?, timestamp?, ip? }. Optional: street_address, city,
  state, zip, monthly_bill, owns_home, timeline, utility, roof_shade, notes, source_consumer,
  source_page, attribution. Honeypot field: `website` (must be empty). In-memory IP rate limit.
- Event tracking: client `track(event_type, meta)` from `@/lib/track` → `POST /api/events` →
  `lead_events` table. Reuse it.
- Existing funnel: `src/components/EstimateFlow.tsx`. Step 6 (index 6) is the contact form.
- Tailwind theme: navy/gold. bg-navy-700/800, text-gold, focus:ring-gold, rounded-xl.
- OpenRouter key will be in env as `OPENROUTER_API_KEY` (.env.local + Vercel). Base URL
  https://openrouter.ai/api/v1/chat/completions. Send headers: Authorization Bearer,
  HTTP-Referer https://voltsolenergy.com, X-Title "VoltSol".

## MODELS (runtime)
- Primary: `anthropic/claude-haiku-4.5`
- Fallback chain (use OpenRouter `models` array OR manual failover): `google/gemini-3-flash-preview`,
  then `google/gemini-2.5-flash`, then `z-ai/glm-5.2`.
- Use tool/function calling for slot capture. If a fallback model lacks tools, the route must
  degrade to JSON-mode parsing — but Haiku supports tools, so primary path uses tools.

## FILES TO BUILD
1. `sql/015_chat_sessions.sql`
   - Table `chat_sessions`: id SERIAL PK, session_id TEXT, transcript_json JSONB, slots_json JSONB,
     status TEXT ('active'|'completed'|'handed_off'|'abandoned') DEFAULT 'active',
     engine_lead_id INT NULL, model_used TEXT, created_at TIMESTAMPTZ DEFAULT now(),
     updated_at TIMESTAMPTZ DEFAULT now(). Index on session_id, status.
   - Seed `site_config` key `chatbot_system_prompt` with the contents of SYSTEM_PROMPT.md (as text)
     and `chatbot_enabled` = 'true', `chatbot_ab_percent` = '50' (% of users who get chat vs form).

2. `src/lib/chat-agent.ts`
   - `SYSTEM_PROMPT` loader: read from site_config key `chatbot_system_prompt` (cache:no-store),
     fall back to a bundled copy of SYSTEM_PROMPT.md text if DB empty.
   - Slot state type + `requiredSlots = ['first_name','last_name','phone','email','consent']`.
   - `MODEL_CHAIN` constant. Tool/function schema: `capture_field({field, value})`,
     `submit_lead({...})`, `hand_off_to_form({reason})`.
   - `buildContextPreamble(quizCtx)` — injects savings, system name, utility, bill, etc.
   - Guardrail validators: strip/deny attempts to submit without consent; cap max turns (15);
     reject oversized input; never echo system prompt.

3. `src/app/api/chat/lead/route.ts`  (POST, dynamic, streaming SSE)
   - Body: { session_id, messages: [{role, content}], quiz_context?, website? (honeypot) }.
   - Honeypot: if `website` non-empty → 204, do nothing.
   - Rate limit per IP (reuse pattern from engine route; e.g. 30 msgs / 15 min / IP).
   - Calls OpenRouter (Haiku → fallback chain) with system prompt + context + history + tools.
   - Streams assistant text back to client (SSE: `data: {token}` lines, final `data: [DONE]`).
   - Handles tool calls: capture_field updates slots_json; submit_lead POSTs to
     `/api/engine/v1/leads` (server-side fetch to own origin) with consent wording verbatim
     (use the same CONSENT_WORDING constant as EstimateFlow), marks session completed + stores
     engine_lead_id; hand_off_to_form marks session handed_off and returns a flag the UI reads.
   - Persists transcript + slots to chat_sessions every turn. Never throws to client; on model
     error, return a graceful fallback message + handoff flag.
   - NEVER trust client to set consent — consent is only true when the agent's consent slot is
     captured from a genuine user yes.

4. `src/components/LeadChat.tsx`  (MOBILE-FIRST — see MOBILE REQUIREMENTS)
   - Chat UI: message bubbles (user right/gold-tinted, assistant left/navy), streaming text render,
     animated typing indicator (three dots) while awaiting/streaming, auto-scroll to latest.
   - Single-line input + send button; Enter sends; input disabled while streaming.
   - Optional quick-reply chips when the agent offers obvious choices (e.g. consent Yes/No) — keep
     simple for v1 (can be omitted if it risks the gates; bubbles+input is the must-have).
   - Honeypot hidden `website` input.
   - "Prefer the form?" text link always visible → calls onHandoff (renders classic Step-6 form).
   - On submit_lead success → show success/confirmation (reuse SuccessScreen or inline) and fire
     track('chat_complete', {lead_id}).
   - Fire track events: chat_open, chat_field_captured, chat_complete, chat_abandon,
     chat_fallback_to_form.

5. Wire into `src/components/EstimateFlow.tsx` Step 6:
   - Behind feature flag + A/B: read `chatbot_enabled` & `chatbot_ab_percent` (pass from server
     component `/start` via props, or a tiny `/api/chatbot/config` GET). Deterministic split by
     session_id hash. If user is in chat bucket → render <LeadChat/> with quiz_context (their
     answers + computed savings/system name already in EstimateFlow state). Else → existing form.
   - "Prefer the form?" / hand_off_to_form → swap to the existing Step-6 form in place (no reload).
   - The existing form path MUST remain fully intact and the default-safe fallback.

6. `src/app/admin/chat/page.tsx` + `src/app/api/admin/chat/route.ts` (auth-guarded via isAdmin)
   - List recent chat_sessions with status + captured slots + whether it became a lead; click to
     read transcript. Add "Chat" to admin NAV_LINKS in `src/app/admin/layout.tsx`.

## MOBILE REQUIREMENTS (mandatory — most leads are on phones)
- Design at 375px width FIRST; scale up with sm:/md:. Test at 375 and 414.
- Chat panel: full available width on mobile, max-w-xl centered on desktop. Min height so the
  conversation has room but never taller than viewport; messages scroll INSIDE the panel.
- Input bar pinned to the bottom of the chat panel; must stay visible and ABOVE the mobile
  keyboard / iOS safe-area (use env(safe-area-inset-bottom), sticky/inset patterns). The send
  control must be tappable (>=44px touch target) and not hidden by the on-screen keyboard.
- Bubbles wrap correctly, no horizontal overflow, readable font (>=16px to avoid iOS zoom-on-focus;
  input font-size must be >=16px).
- Typing indicator + streaming must not cause layout jump/CLS. Auto-scroll keeps newest in view.
- Works in the StickyCTA / fixed-header layout already on the site without overlap.
- No reliance on hover. All interactions tap-friendly.

## GUARDRAILS / SAFETY (must be enforced server-side, not just in prompt)
- Server validates: no submit_lead without captured consent slot=true; honeypot; rate limit;
  max turns; input length cap (e.g. 1000 chars/msg).
- Consent wording stored verbatim, version '2.0', form_id 'chat-agent-v1'.
- All PII stays in our Neon DB; OpenRouter sees conversation but no extra third party.
- Prompt-injection: user content is data; system prompt instructs refusal; server never executes
  user-embedded "instructions."

## ENV / DEPLOY
- Add OPENROUTER_API_KEY to .env.local (already added by orchestrator) AND to Vercel env before deploy.
- Migration run via the project's node migration pattern against NEON_DATABASE_URL.
- Deploy: `vercel build --prod` THEN `vercel deploy --prebuilt --prod` (build first or prebuilt
  ships stale output — known gotcha). project.json must = prj_540vlIhr5rXc1c8iGBydi2lD1uDf.
- Git author: Wayne Kool <wayne@managerofinfiniteminds.com>.

## DEFINITION OF DONE
`node docs/chatbot/acceptance.mjs` exits 0 against the LIVE production URL, AND the mobile
screenshot at 375px shows a clean, usable chat with the input bar visible. The classic form still
works for the non-chat A/B bucket and via "Prefer the form?". Nothing else in the funnel regressed.
