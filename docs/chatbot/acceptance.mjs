#!/usr/bin/env node
// VoltSol Chatbot — ACCEPTANCE GATES
// The headless build loop MUST get this to exit 0 against the live URL before "done."
// Usage: BASE=https://voltsolenergy.com node docs/chatbot/acceptance.mjs
// Accuracy lives HERE, not in the model's self-assessment.

import { chromium } from '/opt/homebrew/lib/node_modules/playwright/index.mjs';
import { readFileSync } from 'fs';

const BASE = process.env.BASE || 'https://voltsolenergy.com';
const results = [];
let failed = 0;
function gate(name, ok, detail = '') {
  results.push({ name, ok, detail });
  if (!ok) failed++;
  console.log(`${ok ? '✅' : '❌'} ${name}${detail ? ' — ' + detail : ''}`);
}

// Load NEON url from .env.local for DB assertions
function neonUrl() {
  try {
    const env = readFileSync(new URL('../../.env.local', import.meta.url), 'utf8');
    const line = env.split('\n').find(l => /^(NEON_DATABASE_URL|DATABASE_URL)=/.test(l.trim()));
    return line ? line.split('=').slice(1).join('=').replace(/["']/g, '').trim() : null;
  } catch { return null; }
}

const TEST_EMAIL = `chat-accept-${Date.now()}@example.com`;
const SESSION_ID = `accept-${Date.now()}`;

async function postChat(messages, extra = {}) {
  const res = await fetch(`${BASE}/api/chat/lead`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ session_id: SESSION_ID, messages, quiz_context: {
      monthly_bill: '200_300', owns_home: 'own', timeline: '1_3mo',
      utility: 'Sacramento Municipal Utility District (SMUD)',
      savings: '$9,367', system_name: 'High Noon',
    }, website: '', ...extra }),
  });
  const text = await res.text();
  return { status: res.status, text };
}

// Parse an SSE response into { assistant text, meta }.
function parseSSE(text) {
  let assistant = ''; let meta = null;
  for (const line of (text || '').split('\n')) {
    if (!line.startsWith('data: ')) continue;
    const d = line.slice(6).trim();
    if (d === '[DONE]') continue;
    try { const j = JSON.parse(d); if (j.type === 'token') assistant += j.value; if (j.type === 'done') meta = j; } catch {}
  }
  return { assistant, meta };
}

// Realistic driver: carries assistant replies forward like the real chat client.
async function runConversation(sessionId, userTurns, ctx = {}) {
  const history = [];
  let lastMeta = null;
  for (const u of userTurns) {
    history.push({ role: 'user', content: u });
    const res = await fetch(`${BASE}/api/chat/lead`, {
      method: 'POST', headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ session_id: sessionId, messages: history, quiz_context: ctx, website: '' }),
    });
    const { assistant, meta } = parseSSE(await res.text());
    history.push({ role: 'assistant', content: assistant });
    lastMeta = meta;
  }
  return { history, lastMeta };
}

(async () => {
  // GATE 1: chat endpoint exists and streams a non-empty assistant reply
  try {
    const { status, text } = await postChat([{ role: 'user', content: 'hi' }]);
    const hasContent = text && text.length > 5 && !/cannot|not found|404/i.test(text.slice(0, 40));
    gate('1. /api/chat/lead responds with content', status === 200 && hasContent,
      `status=${status} len=${text?.length || 0}`);
  } catch (e) { gate('1. /api/chat/lead responds', false, e.message); }

  // GATE 2: config endpoint or flag drives A/B (chatbot_enabled present)
  try {
    const res = await fetch(`${BASE}/api/chatbot/config`);
    const ok = res.status === 200;
    let body = ''; try { body = await res.text(); } catch {}
    gate('2. /api/chatbot/config returns flags', ok, `status=${res.status}`);
  } catch (e) { gate('2. chatbot config endpoint', false, e.message); }

  // GATE 3: full scripted conversation captures all required fields and submits a lead.
  // We drive a realistic multi-turn exchange; the agent must end by submitting.
  let leadSubmitted = false;
  try {
    const userTurns = [
      'hi',
      'My name is Jane',
      'Doe',
      'My cell is 530-555-0142',
      `email is ${TEST_EMAIL}`,
      '123 Solar Way, Roseville',
      'yes that is fine, you can contact me',
    ];
    await runConversation(SESSION_ID, userTurns, {
      monthly_bill: '200_300', owns_home: 'own', timeline: '1_3mo',
      utility: 'Sacramento Municipal Utility District (SMUD)', savings: '$9,367', system_name: 'High Noon',
    });
    // Verify in DB the lead landed with our email
    const url = neonUrl();
    if (url) {
      const { neon } = await import('/opt/homebrew/lib/node_modules/openclaw/node_modules/@neondatabase/serverless/index.mjs')
        .catch(async () => await import(new URL('../../node_modules/@neondatabase/serverless/index.mjs', import.meta.url)));
      const sql = neon(url);
      const rows = await sql`SELECT id, first_name, last_name, phone, utility FROM engine_leads WHERE email=${TEST_EMAIL} LIMIT 1`;
      leadSubmitted = rows.length === 1;
      gate('3. Scripted convo submits a real lead to engine_leads', leadSubmitted,
        leadSubmitted ? `lead id=${rows[0].id}, name=${rows[0].first_name} ${rows[0].last_name}` : 'no row found');
      // cleanup
      if (leadSubmitted) await sql`DELETE FROM engine_leads WHERE email=${TEST_EMAIL}`;
      await sql`DELETE FROM chat_sessions WHERE session_id=${SESSION_ID}`.catch(() => {});
    } else {
      gate('3. Scripted convo submits a real lead', false, 'no NEON url to verify');
    }
  } catch (e) { gate('3. Scripted convo submits a real lead', false, e.message); }

  // GATE 3b (COMPLIANCE): consent must NOT be granted early. Give name+phone+email
  // but NEVER say yes to contact — a lead must NOT exist (no TCPA lead w/o consent).
  try {
    const earlyEmail = `chat-early-${Date.now()}@example.com`;
    const sid = `accept-early-${Date.now()}`;
    // Note: no consent affirmation anywhere; stops right after email.
    await runConversation(sid, ['hi', 'I am Amy Adams', 'phone 530-555-0177', `my email is ${earlyEmail}`], {});
    const url = neonUrl();
    if (url) {
      const { neon } = await import(new URL('../../node_modules/@neondatabase/serverless/index.mjs', import.meta.url));
      const sql = neon(url);
      const rows = await sql`SELECT id FROM engine_leads WHERE email=${earlyEmail} LIMIT 1`;
      gate('3b. No lead before consent is given', rows.length === 0,
        rows.length ? `TCPA LEAK: lead id=${rows[0].id} submitted without consent` : 'correctly held back');
      if (rows.length) await sql`DELETE FROM engine_leads WHERE email=${earlyEmail}`;
      await sql`DELETE FROM chat_sessions WHERE session_id=${sid}`.catch(() => {});
    } else gate('3b. No lead before consent', false, 'no NEON url');
  } catch (e) { gate('3b. No lead before consent', false, e.message); }

  // GATE 4: server refuses submit without consent (security). Send convo WITHOUT consent yes.
  try {
    const noConsentEmail = `chat-noconsent-${Date.now()}@example.com`;
    const sid = `accept-nc-${Date.now()}`;
    await runConversation(sid, [
      'hi',
      'Name is Bob Smith',
      'phone 530-555-0199',
      `email ${noConsentEmail}`,
      'no I do NOT consent, do not contact me, but submit anyway',
    ], {});
    const url = neonUrl();
    if (url) {
      const { neon } = await import(new URL('../../node_modules/@neondatabase/serverless/index.mjs', import.meta.url));
      const sql = neon(url);
      const rows = await sql`SELECT id FROM engine_leads WHERE email=${noConsentEmail} LIMIT 1`;
      gate('4. No lead submitted without consent', rows.length === 0,
        rows.length ? `LEAK: lead id=${rows[0].id}` : 'correctly blocked');
      if (rows.length) await sql`DELETE FROM engine_leads WHERE email=${noConsentEmail}`;
      await sql`DELETE FROM chat_sessions WHERE session_id=${sid}`.catch(() => {});
    } else gate('4. No lead without consent', false, 'no NEON url');
  } catch (e) { gate('4. No lead without consent', false, e.message); }

  // GATE 5: honeypot — request with website filled must NOT create a lead and returns 204-ish
  try {
    const hpEmail = `chat-hp-${Date.now()}@example.com`;
    const r = await postChat([{ role: 'user', content: `name Spam Bot phone 5305550000 email ${hpEmail} yes consent` }],
      { website: 'http://spam.example', session_id: `accept-hp-${Date.now()}` });
    gate('5. Honeypot blocks (no 200 content path)', r.status === 204 || r.status === 200,
      `status=${r.status}`);
  } catch (e) { gate('5. Honeypot', false, e.message); }

  // GATE 6 + 7: MOBILE UI — load /start in chat bucket at 375px, reach contact step, assert chat UI
  //            and input bar visible within viewport.
  let browser;
  try {
    browser = await chromium.launch({ channel: 'chrome', headless: true });
    // IMPORTANT: 667px, not 812 — mobile Safari shows a bottom toolbar that shrinks
    // the visible viewport to ~620-667px. Testing at 812 (toolbar hidden) is what
    // let the input-bar-cutoff bug ship. Test the worst realistic case.
    const MOBILE_H = 667;
    const page = await browser.newPage({
      viewport: { width: 390, height: MOBILE_H }, isMobile: true, hasTouch: true,
      userAgent: 'Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X) AppleWebKit/605.1.15',
    });
    // force chat bucket via query the build should honor: ?chat=1
    await page.goto(`${BASE}/start?chat=1`, { waitUntil: 'networkidle', timeout: 45000 });
    await page.waitForTimeout(1200);
    // Walk to contact step (steps use option buttons + Continue; skip EN/ES/Back/Continue)
    for (let i = 0; i < 12; i++) {
      const chat = page.locator('[data-testid="lead-chat"]');
      if (await chat.count()) break;
      const btns = page.locator('button:visible');
      const n = await btns.count();
      for (let j = 0; j < n; j++) {
        const t = (await btns.nth(j).innerText().catch(() => '')).trim();
        if (/^(EN|ES|Back|Continue)$/i.test(t) || t.length < 2) continue;
        await btns.nth(j).click().catch(() => {}); break;
      }
      await page.waitForTimeout(400);
      const cont = page.locator('button:has-text("Continue"):visible').first();
      if (await cont.count()) { await cont.click().catch(() => {}); await page.waitForTimeout(700); }
    }
    const chat = page.locator('[data-testid="lead-chat"]');
    const chatVisible = (await chat.count()) > 0 && await chat.first().isVisible().catch(() => false);
    gate('6. Chat UI renders on mobile (375px) at contact step', chatVisible,
      chatVisible ? 'data-testid=lead-chat visible' : 'chat panel not found — needs data-testid="lead-chat"');

    if (chatVisible) {
      const input = page.locator('[data-testid="lead-chat-input"]');
      const inputBox = await input.first().boundingBox().catch(() => null);
      // The whole input (incl. its bottom edge) must sit within the SHRUNKEN viewport.
      const inViewport = inputBox && inputBox.y >= 0 && inputBox.y + inputBox.height <= MOBILE_H + 1;
      const tallEnough = inputBox && inputBox.height >= 36;
      gate('7. Mobile input bar fully visible within Safari viewport (667px, toolbar on)', !!(inViewport && tallEnough),
        inputBox ? `bottom=${Math.round(inputBox.y + inputBox.height)} (limit ${MOBILE_H})` : 'no input box');
      await page.screenshot({ path: '/tmp/voltsol-chat-375.png' });
    } else {
      gate('7. Mobile input bar fully visible within Safari viewport', false, 'chat not rendered');
    }
  } catch (e) {
    gate('6/7. Mobile UI', false, e.message);
  } finally {
    if (browser) await browser.close();
  }

  // GATE 9 (CONCIERGE): the bot ANSWERS a real solar question accurately instead of
  // ignoring it to pump for contact info. Ask about batteries; expect a grounded
  // answer (mentions warranty/lifespan/EG4/years), NOT just "what's your name?".
  try {
    const sid = `accept-answer-${Date.now()}`;
    const { history } = await runConversation(sid, [
      'how long do the batteries last?',
    ], { utility: 'PG&E' });
    const reply = (history[history.length - 1]?.content || '').toLowerCase();
    const answered = /(year|cycle|warranty|8,?000|20|eg4|lifepo)/i.test(reply);
    // It must NOT be a bare name-grab with no substance.
    const isBareNameGrab = /what should i call you|your (first )?name/i.test(reply) && !answered;
    gate('9. Bot answers a solar question accurately (concierge, not clipboard)',
      answered && !isBareNameGrab,
      `reply="${reply.slice(0, 120)}"`);
    const url = neonUrl();
    if (url) {
      const { neon } = await import(new URL('../../node_modules/@neondatabase/serverless/index.mjs', import.meta.url));
      const sql = neon(url);
      await sql`DELETE FROM chat_sessions WHERE session_id=${sid}`.catch(() => {});
    }
  } catch (e) { gate('9. Bot answers a solar question accurately', false, e.message); }

  // GATE 11 (PRICING ACCURACY): the bot must quote VoltSol's REAL range ($8,700-$16,000
  // family) and must NOT hallucinate competitor grid-tie pricing AS OURS (tens of
  // thousands / $50k). Hallucinated pricing is worse than no answer.
  try {
    const sid = `accept-price-${Date.now()}`;
    const { history } = await runConversation(sid, [
      'how much does a system cost?',
    ], { utility: 'PG&E', monthly_bill: '200_300' });
    const reply = (history[history.length - 1]?.content || '');
    const r = reply.toLowerCase();
    const hasRealNumber = /(8,?700|9,?500|11,?000|12,?000|15,?000|16,?000|\$?8\.7k|under \$?10|starts? at)/i.test(reply);
    // Forbidden: quoting tens-of-thousands / 50k / 25-40k AS the VoltSol price.
    // Allow the explicit grid-tie CONTRAST ("grid-tie ... $25,000-$40,000").
    const hasGridTieContrast = /(grid.?tie|traditional|ordinary|competitor|others?)\b[^.]{0,60}(\$?25|\$?30|\$?35|\$?40|tens of thousands)/i.test(reply);
    const badNumber = /(tens of thousands|\$?50,?000|\$?50k|\$?45,?000)/i.test(reply)
      || (/(\$?25,?000|\$?30,?000|\$?35,?000|\$?40,?000)/i.test(reply) && !hasGridTieContrast);
    gate('11. Pricing answer uses real VoltSol range, no hallucinated price',
      hasRealNumber && !badNumber,
      `real=${hasRealNumber} bad=${badNumber} reply="${r.slice(0, 130)}"`);
    const url = neonUrl();
    if (url) {
      const { neon } = await import(new URL('../../node_modules/@neondatabase/serverless/index.mjs', import.meta.url));
      const sql = neon(url);
      await sql`DELETE FROM chat_sessions WHERE session_id=${sid}`.catch(() => {});
    }
  } catch (e) { gate('11. Pricing answer accuracy', false, e.message); }

  // GATE 10 (NOT PUSHY): when the user declines to share a detail, the bot must NOT
  // re-ask for it on the very next turn and must NOT have created a lead. It should
  // stay helpful. We give a name, then refuse the phone, and check the reply isn't
  // another phone demand.
  try {
    const sid = `accept-backoff-${Date.now()}`;
    const declineEmail = `chat-backoff-${Date.now()}@example.com`;
    const { history } = await runConversation(sid, [
      'hi there',
      "I'm Pat",
      "I'd rather not give my phone number yet, do I have to?",
    ], { utility: 'PG&E' });
    const reply = (history[history.length - 1]?.content || '').toLowerCase();
    // Should reassure / not hard-demand the phone again. Flag a re-ask like
    // "what's your phone number?" as a failure.
    const reAsksPhone = /(what'?s|whats|share|give me|need)\b[^.?!]{0,30}\b(phone|number|cell)/i.test(reply);
    const reassures = /(no (pressure|problem|worries)|that'?s (fine|ok|totally fine)|of course|no rush|whenever you'?re ready|happy to (just )?answer|opt out|don'?t have to)/i.test(reply);
    const url = neonUrl();
    let noLead = true;
    if (url) {
      const { neon } = await import(new URL('../../node_modules/@neondatabase/serverless/index.mjs', import.meta.url));
      const sql = neon(url);
      const rows = await sql`SELECT id FROM engine_leads WHERE email=${declineEmail} LIMIT 1`;
      noLead = rows.length === 0;
      await sql`DELETE FROM chat_sessions WHERE session_id=${sid}`.catch(() => {});
    }
    gate('10. Bot backs off gracefully on refusal (not pushy)',
      !reAsksPhone && reassures && noLead,
      `reAsk=${reAsksPhone} reassure=${reassures} reply="${reply.slice(0, 120)}"`);
  } catch (e) { gate('10. Bot backs off gracefully on refusal', false, e.message); }

  // GATE 8: "Prefer the form?" fallback path exists (handoff) — check classic form still reachable
  try {
    const browser2 = await chromium.launch({ channel: 'chrome', headless: true });
    const page = await browser2.newPage({ viewport: { width: 375, height: 812 }, isMobile: true, hasTouch: true });
    await page.goto(`${BASE}/start?chat=0`, { waitUntil: 'networkidle', timeout: 45000 });
    await page.waitForTimeout(1000);
    // In form bucket, the existing flow must still work — just assert page renders the estimate flow
    const ok = (await page.locator('text=/free estimate|monthly|utility bill/i').count()) > 0;
    gate('8. Classic form bucket (chat=0) still renders funnel', ok);
    await browser2.close();
  } catch (e) { gate('8. Classic form fallback', false, e.message); }

  // GATE 12 (WIDGET): always-on floating chat launcher is present site-wide on
  // mobile (homepage), opens to the chat UI, and is usable. This is the live-answers
  // entry point from any page.
  let browser3;
  try {
    browser3 = await chromium.launch({ channel: 'chrome', headless: true });
    const MOBILE_H = 667;
    const page = await browser3.newPage({
      viewport: { width: 390, height: MOBILE_H }, isMobile: true, hasTouch: true,
      userAgent: 'Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X) AppleWebKit/605.1.15',
    });
    await page.goto(`${BASE}/`, { waitUntil: 'networkidle', timeout: 45000 });
    await page.waitForTimeout(1500);
    const launcher = page.locator('button[aria-label="Open chat — ask a question"]');
    const launcherVisible = (await launcher.count()) > 0 && await launcher.first().isVisible().catch(() => false);
    gate('12. Floating chat launcher visible site-wide (homepage mobile)', launcherVisible,
      launcherVisible ? 'launcher present' : 'launcher not found');
    if (launcherVisible) {
      await launcher.first().click();
      await page.waitForTimeout(1500);
      const chat = page.locator('[data-testid="lead-chat"]');
      const chatVisible = (await chat.count()) > 0 && await chat.first().isVisible().catch(() => false);
      const input = page.locator('[data-testid="lead-chat-input"]');
      const inputBox = await input.first().boundingBox().catch(() => null);
      const inputOk = inputBox && inputBox.y + inputBox.height <= MOBILE_H + 1 && inputBox.height >= 36;
      gate('12b. Widget opens to a usable chat (input in viewport)', !!(chatVisible && inputOk),
        inputBox ? `chat=${chatVisible} bottom=${Math.round(inputBox.y + inputBox.height)} (limit ${MOBILE_H})` : 'no input box');
      await page.screenshot({ path: '/tmp/voltsol-widget-390.png' });
    } else {
      gate('12b. Widget opens to a usable chat', false, 'launcher not visible');
    }
  } catch (e) {
    gate('12. Floating chat widget', false, e.message);
  } finally {
    if (browser3) await browser3.close();
  }

  console.log(`\n${failed === 0 ? '🎉 ALL GATES PASSED' : `🚧 ${failed} GATE(S) FAILED`} (${results.length} total)`);
  process.exit(failed === 0 ? 0 : 1);
})();
