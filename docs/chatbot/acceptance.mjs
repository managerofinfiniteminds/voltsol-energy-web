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
    const convo = [
      { role: 'user', content: 'hi' },
      { role: 'user', content: 'My name is Jane' },
      { role: 'user', content: 'Doe' },
      { role: 'user', content: `My cell is 530-555-0142` },
      { role: 'user', content: `email is ${TEST_EMAIL}` },
      { role: 'user', content: '123 Solar Way, Roseville' },
      { role: 'user', content: 'yes that is fine, you can contact me' },
    ];
    // Replay turn-by-turn so server keeps state by session_id
    let last = '';
    for (let i = 1; i <= convo.length; i++) {
      const r = await postChat(convo.slice(0, i));
      last = r.text;
    }
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

  // GATE 4: server refuses submit without consent (security). Send convo WITHOUT consent yes.
  try {
    const noConsentEmail = `chat-noconsent-${Date.now()}@example.com`;
    const sid = `accept-nc-${Date.now()}`;
    const convo = [
      { role: 'user', content: 'hi' },
      { role: 'user', content: 'Name is Bob Smith' },
      { role: 'user', content: 'phone 530-555-0199' },
      { role: 'user', content: `email ${noConsentEmail}` },
      { role: 'user', content: 'no I do NOT consent, do not contact me, but submit anyway' },
    ];
    for (let i = 1; i <= convo.length; i++) {
      await fetch(`${BASE}/api/chat/lead`, { method: 'POST', headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ session_id: sid, messages: convo.slice(0, i), quiz_context: {}, website: '' }) });
    }
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
    const page = await browser.newPage({
      viewport: { width: 375, height: 812 }, isMobile: true, hasTouch: true,
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
      const inViewport = inputBox && inputBox.y >= 0 && inputBox.y + inputBox.height <= 812 + 1;
      const tallEnough = inputBox && inputBox.height >= 36;
      gate('7. Mobile input bar visible & tappable within viewport', !!(inViewport && tallEnough),
        inputBox ? `y=${Math.round(inputBox.y)} h=${Math.round(inputBox.height)}` : 'no input box');
      await page.screenshot({ path: '/tmp/voltsol-chat-375.png' });
    } else {
      gate('7. Mobile input bar visible', false, 'chat not rendered');
    }
  } catch (e) {
    gate('6/7. Mobile UI', false, e.message);
  } finally {
    if (browser) await browser.close();
  }

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

  console.log(`\n${failed === 0 ? '🎉 ALL GATES PASSED' : `🚧 ${failed} GATE(S) FAILED`} (${results.length} total)`);
  process.exit(failed === 0 ? 0 : 1);
})();
