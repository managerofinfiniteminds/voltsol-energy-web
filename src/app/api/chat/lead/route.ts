export const dynamic = 'force-dynamic';
export const maxDuration = 60;

import { NextRequest, NextResponse } from 'next/server';
import { sql } from '@/lib/db';
import {
  MODEL_CHAIN,
  OPENROUTER_URL,
  TOOLS,
  CONSENT_VERSION,
  CONSENT_FORM_ID,
  CONSENT_WORDING,
  MAX_TURNS,
  MAX_MSG_CHARS,
  MAX_HISTORY_MESSAGES,
  getSystemPrompt,
  buildContextPreamble,
  applyCapture,
  extractFromText,
  inferExpectedField,
  hasAllRequiredSlots,
  steeringLine,
  nextQuestionFallback,
  isVagueLine,
  looksLikeQuestion,
  looksLikeRefusal,
  type SteerMode,
  type ChatSlots,
  type QuizContext,
} from '@/lib/chat-agent';

// ── Rate limit (in-memory, per IP) ───────────────────────────────────────────
const rateLimitMap = new Map<string, number[]>();
const RATE_WINDOW_MS = 15 * 60 * 1000;
const RATE_MAX = 60; // messages / 15 min / IP

function rateOk(ip: string): boolean {
  const now = Date.now();
  const ts = (rateLimitMap.get(ip) ?? []).filter((t) => now - t < RATE_WINDOW_MS);
  if (ts.length >= RATE_MAX) return false;
  ts.push(now);
  rateLimitMap.set(ip, ts);
  return true;
}

interface InMsg {
  role: 'user' | 'assistant' | 'system';
  content: string;
}

// ── SSE helpers ──────────────────────────────────────────────────────────────
function sseStream(
  text: string,
  meta: { completed: boolean; handoff: boolean; lead_id: number | null }
): Response {
  const encoder = new TextEncoder();
  const stream = new ReadableStream({
    async start(controller) {
      // Chunk the text into word-ish tokens for a streaming feel.
      const tokens = text.match(/\S+\s*/g) ?? [text];
      for (const tok of tokens) {
        controller.enqueue(encoder.encode(`data: ${JSON.stringify({ type: 'token', value: tok })}\n\n`));
        // small delay for UX; keep tiny so gates stay fast
        await new Promise((r) => setTimeout(r, 12));
      }
      controller.enqueue(
        encoder.encode(`data: ${JSON.stringify({ type: 'done', ...meta })}\n\n`)
      );
      controller.enqueue(encoder.encode('data: [DONE]\n\n'));
      controller.close();
    },
  });
  return new Response(stream, {
    status: 200,
    headers: {
      'Content-Type': 'text/event-stream; charset=utf-8',
      'Cache-Control': 'no-cache, no-transform',
      Connection: 'keep-alive',
    },
  });
}

// ── Persistence ──────────────────────────────────────────────────────────────
async function loadSession(
  sessionId: string
): Promise<{ slots: ChatSlots; status: string; engineLeadId: number | null }> {
  try {
    const rows = await sql`
      SELECT slots_json, status, engine_lead_id FROM chat_sessions
      WHERE session_id = ${sessionId} ORDER BY id DESC LIMIT 1
    `;
    if (rows.length) {
      return {
        slots: (rows[0].slots_json as ChatSlots) || {},
        status: rows[0].status || 'active',
        engineLeadId: rows[0].engine_lead_id ?? null,
      };
    }
  } catch {
    /* ignore */
  }
  return { slots: {}, status: 'active', engineLeadId: null };
}

async function saveSession(
  sessionId: string,
  transcript: InMsg[],
  slots: ChatSlots,
  status: string,
  modelUsed: string,
  engineLeadId: number | null
): Promise<void> {
  try {
    const existing = await sql`SELECT id FROM chat_sessions WHERE session_id = ${sessionId} ORDER BY id DESC LIMIT 1`;
    const transcriptJson = JSON.stringify(transcript.slice(-MAX_HISTORY_MESSAGES));
    const slotsJson = JSON.stringify(slots);
    if (existing.length) {
      await sql`
        UPDATE chat_sessions
        SET transcript_json = ${transcriptJson}::jsonb,
            slots_json = ${slotsJson}::jsonb,
            status = ${status},
            model_used = ${modelUsed},
            engine_lead_id = ${engineLeadId},
            updated_at = NOW()
        WHERE id = ${existing[0].id}
      `;
    } else {
      await sql`
        INSERT INTO chat_sessions (session_id, transcript_json, slots_json, status, model_used, engine_lead_id)
        VALUES (${sessionId}, ${transcriptJson}::jsonb, ${slotsJson}::jsonb, ${status}, ${modelUsed}, ${engineLeadId})
      `;
    }
  } catch (e) {
    console.error('[chat/lead] saveSession failed:', e);
  }
}

// ── Submit a completed lead to the engine ────────────────────────────────────
async function submitToEngine(
  req: NextRequest,
  slots: ChatSlots,
  quiz: QuizContext | undefined,
  ip: string,
  extraNote?: string
): Promise<number | null> {
  const origin = new URL(req.url).origin;
  const payload = {
    first_name: slots.first_name,
    last_name: slots.last_name,
    email: slots.email,
    phone: slots.phone,
    street_address: slots.street_address || undefined,
    city: slots.city || quiz?.city || undefined,
    state: slots.state || undefined,
    zip: slots.zip || undefined,
    owns_home: quiz?.owns_home || undefined,
    monthly_bill: quiz?.monthly_bill || undefined,
    timeline: quiz?.timeline || undefined,
    utility: quiz?.utility || undefined,
    roof_shade: quiz?.roof_shade || undefined,
    notes: [slots.notes, extraNote].filter(Boolean).join(' | ') || undefined,
    source_consumer: 'voltsol_chat',
    source_page: '/start',
    consent: {
      version: CONSENT_VERSION,
      form_id: CONSENT_FORM_ID,
      wording: CONSENT_WORDING,
      timestamp: new Date().toISOString(),
      ip,
    },
  };
  try {
    const res = await fetch(`${origin}/api/engine/v1/leads`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });
    const data = await res.json().catch(() => ({}));
    if (res.ok && data?.id) return data.id as number;
    console.error('[chat/lead] engine submit non-ok:', res.status, data);
  } catch (e) {
    console.error('[chat/lead] engine submit failed:', e);
  }
  return null;
}

// ── OpenRouter call with model-chain failover ────────────────────────────────
interface OrMessage {
  role: string;
  content: string | null;
  tool_calls?: Array<{ id: string; type: string; function: { name: string; arguments: string } }>;
  tool_call_id?: string;
  name?: string;
}

async function callOpenRouter(
  messages: OrMessage[]
): Promise<{ message: OrMessage; model: string } | null> {
  const apiKey = process.env.OPENROUTER_API_KEY;
  if (!apiKey) {
    console.error('[chat/lead] OPENROUTER_API_KEY missing');
    return null;
  }
  for (const model of MODEL_CHAIN) {
    try {
      const res = await fetch(OPENROUTER_URL, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${apiKey}`,
          'Content-Type': 'application/json',
          'HTTP-Referer': 'https://voltsolenergy.com',
          'X-Title': 'VoltSol',
        },
        body: JSON.stringify({
          model,
          messages,
          tools: TOOLS,
          tool_choice: 'auto',
          temperature: 0.6,
          max_tokens: 500,
        }),
      });
      if (!res.ok) {
        console.error(`[chat/lead] model ${model} -> ${res.status}`);
        continue;
      }
      const data = await res.json();
      const msg = data?.choices?.[0]?.message;
      if (msg) return { message: msg as OrMessage, model };
    } catch (e) {
      console.error(`[chat/lead] model ${model} threw:`, e);
    }
  }
  return null;
}

// ── Route ────────────────────────────────────────────────────────────────────
export async function POST(req: NextRequest) {
  const ip =
    req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ||
    req.headers.get('x-real-ip') ||
    '0.0.0.0';

  let body: {
    session_id?: string;
    messages?: InMsg[];
    quiz_context?: QuizContext;
    website?: string;
  };
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: 'Invalid body' }, { status: 400 });
  }

  // Honeypot — silently do nothing.
  if (body.website && body.website.trim().length > 0) {
    return new NextResponse(null, { status: 204 });
  }

  const sessionId = (body.session_id || '').toString().slice(0, 80) || `anon-${Date.now()}`;
  const rawMessages = Array.isArray(body.messages) ? body.messages : [];
  const quiz = body.quiz_context;

  // Sanitize + cap incoming messages.
  const userMessages: InMsg[] = rawMessages
    .filter((m) => m && (m.role === 'user' || m.role === 'assistant') && typeof m.content === 'string')
    .map((m) => ({ role: m.role, content: m.content.slice(0, MAX_MSG_CHARS) }))
    .slice(-MAX_HISTORY_MESSAGES);

  const userTurnCount = userMessages.filter((m) => m.role === 'user').length;

  if (!rateOk(ip)) {
    return sseStream(
      "I'm getting a lot of messages right now — give it a minute and try again, or use the form below. 🙏",
      { completed: false, handoff: true, lead_id: null }
    );
  }

  // Max turns guard.
  if (userTurnCount > MAX_TURNS) {
    return sseStream(
      "Let's get you over to the quick form so a tech can follow up — it's just below. Thanks for chatting! ☀️",
      { completed: false, handoff: true, lead_id: null }
    );
  }

  // Load persisted state for this session.
  const { slots: prevSlots, status: prevStatus, engineLeadId: prevLeadId } = await loadSession(sessionId);
  let slots: ChatSlots = { ...prevSlots };
  let engineLeadId = prevLeadId;

  // ── Deterministic backstop: extract slots from the user's latest message(s)
  // BEFORE calling the model, so capture never depends on the model emitting
  // tool calls. We infer what the assistant last asked to disambiguate bare
  // replies (e.g. a lone "Doe" after "what's your last name?").
  {
    const lastAssistant = [...userMessages].reverse().find((m) => m.role === 'assistant')?.content;
    let expected = inferExpectedField(lastAssistant);
    // Walk user messages that arrived after the last assistant line (usually 1).
    const lastAssistantIdx = userMessages.map((m) => m.role).lastIndexOf('assistant');
    const newUserMsgs = userMessages.slice(lastAssistantIdx + 1).filter((m) => m.role === 'user');
    for (const m of newUserMsgs) {
      slots = extractFromText(slots, m.content, expected);
      expected = null; // only the first new message answers the expected field
    }
  }

  // If already completed, acknowledge gracefully without re-submitting.
  if (prevStatus === 'completed' && engineLeadId) {
    return sseStream(
      "You're all set — a VoltSol tech will reach out shortly with your estimate. ☀️",
      { completed: true, handoff: false, lead_id: engineLeadId }
    );
  }

  const systemPrompt = await getSystemPrompt();
  const preamble = buildContextPreamble(quiz);
  const knownSlots = JSON.stringify({
    captured: Object.keys(slots).filter((k) => (slots as Record<string, unknown>)[k] !== undefined),
  });

  // Adaptive steering: a concierge ANSWERS questions and only invites the next
  // detail after delivering value — and backs off if the person declines. We read
  // the user's latest message to pick the mode, instead of pumping a slot every
  // turn (which is what made the old bot feel like a clipboard).
  const latestUser = [...userMessages].reverse().find((m) => m.role === 'user')?.content || '';
  let steerMode: SteerMode = 'advance';
  if (looksLikeRefusal(latestUser)) steerMode = 'backoff';
  else if (looksLikeQuestion(latestUser)) steerMode = 'answer';
  const steer = steeringLine(slots, steerMode);

  const orMessages: OrMessage[] = [
    { role: 'system', content: `${systemPrompt}\n\n${preamble}\n\nALREADY CAPTURED THIS SESSION (do not re-ask): ${knownSlots}\n\n${steer}` },
    ...userMessages.map((m) => ({ role: m.role, content: m.content })),
  ];

  // If the conversation is empty, open warmly.
  if (userMessages.length === 0) {
    orMessages.push({ role: 'user', content: '(the user just landed in the chat — greet them)' });
  }

  let modelUsed: string = MODEL_CHAIN[0];
  let handoff = false;
  let completed = false;
  let assistantText = '';

  // Up to 2 tool rounds, then force a text answer.
  for (let round = 0; round < 3; round++) {
    const result = await callOpenRouter(orMessages);
    if (!result) {
      // Graceful model failure — never throw to client.
      assistantText =
        "I'm having a hiccup on my end — mind dropping your details in the quick form just below? A tech will follow up fast. 🙏";
      handoff = true;
      break;
    }
    modelUsed = result.model;
    const msg = result.message;
    const toolCalls = msg.tool_calls || [];

    if (toolCalls.length === 0) {
      assistantText = (msg.content || '').toString();
      break;
    }

    // Record the assistant tool-call message, then handle each call.
    orMessages.push({ role: 'assistant', content: msg.content ?? null, tool_calls: toolCalls });

    for (const tc of toolCalls) {
      let args: Record<string, string> = {};
      try {
        args = JSON.parse(tc.function.arguments || '{}');
      } catch {
        args = {};
      }
      const fn = tc.function.name;
      let toolResult = 'ok';

      if (fn === 'capture_field') {
        slots = applyCapture(slots, args.field, args.value);
        toolResult = hasAllRequiredSlots(slots)
          ? `captured ${args.field}. All required fields are now present — call submit_lead now.`
          : `captured ${args.field}`;
      } else if (fn === 'hand_off_to_form') {
        handoff = true;
        toolResult = 'handed off to form';
      } else if (fn === 'submit_lead') {
        // SERVER-SIDE GUARD: only submit with genuine consent + all required slots.
        if (hasAllRequiredSlots(slots) && !engineLeadId) {
          const id = await submitToEngine(req, slots, quiz, ip, args.notes);
          if (id) {
            engineLeadId = id;
            completed = true;
            toolResult = 'lead submitted successfully';
          } else {
            toolResult = 'submit failed — ask them to try the form';
            handoff = true;
          }
        } else {
          toolResult = 'cannot submit: missing required fields or consent not given';
        }
      }

      orMessages.push({ role: 'tool', tool_call_id: tc.id, name: fn, content: toolResult });
    }

    // If we just completed or handed off, ask the model for a short closing line next round.
  }

  // ── Safety net: auto-submit when all required slots are present (incl. consent),
  // even if the model didn't explicitly call submit_lead. Consent here is only
  // true because applyCapture / extractFromText parsed a genuine affirmative.
  if (!completed && !engineLeadId && hasAllRequiredSlots(slots)) {
    const id = await submitToEngine(req, slots, quiz, ip);
    if (id) {
      engineLeadId = id;
      completed = true;
      // Override whatever the model said — guarantee an accurate confirmation.
      assistantText = `You're all set${slots.first_name ? `, ${slots.first_name}` : ''}! A VoltSol tech will reach out shortly with your estimate. ☀️`;
    }
  }

  // ── Truth guard: NEVER let the model claim the lead is DONE/submitted unless one
  // actually landed. Tightened to completion-claim phrases only — the bot now
  // legitimately says things like "an installer will reach out" while ANSWERING a
  // question, and we must not clobber a good answer. Only fire when it falsely
  // asserts the lead is finished.
  if (
    !engineLeadId &&
    !handoff &&
    /\b(you'?re all set|you are all set|all set!|all done|got everything i need|you'?re submitted|i'?ve submitted|lead (is )?submitted|you'?re all set)\b/i.test(assistantText)
  ) {
    assistantText = nextQuestionFallback(slots);
  }

  // ── Anti-dead-end guard: if the model produced an empty or VAGUE line, replace it
  // with the deterministic next question. In ANSWER mode we trust the model's reply
  // (it's answering a real question), so we only apply this in advance/backoff flow.
  if (!completed && !handoff && steerMode !== 'answer' && steerMode !== 'backoff' && isVagueLine(assistantText)) {
    assistantText = nextQuestionFallback(slots);
  }

  if (!assistantText) {
    assistantText = completed
      ? "You're all set — a tech will be in touch shortly. ☀️"
      : nextQuestionFallback(slots);
  }

  const status = completed ? 'completed' : handoff ? 'handed_off' : 'active';
  const transcript: InMsg[] = [...userMessages, { role: 'assistant', content: assistantText }];
  await saveSession(sessionId, transcript, slots, status, modelUsed, engineLeadId);

  return sseStream(assistantText, { completed, handoff, lead_id: engineLeadId });
}
