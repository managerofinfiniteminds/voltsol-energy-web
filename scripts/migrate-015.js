#!/usr/bin/env node
// Run: node scripts/migrate-015.js
// Applies sql/015_chat_sessions.sql (table + flags) and seeds the chatbot
// system prompt from docs/chatbot/SYSTEM_PROMPT.md via a parameterized query
// (the prompt text contains semicolons, so it can't go through the
// semicolon-splitting scripts/migrate.js).

const { readFileSync } = require('fs');
const { join } = require('path');

// Load .env.local manually
try {
  const envFile = readFileSync(join(__dirname, '..', '.env.local'), 'utf8');
  for (const line of envFile.split('\n')) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith('#')) continue;
    const eqIdx = trimmed.indexOf('=');
    if (eqIdx === -1) continue;
    const key = trimmed.slice(0, eqIdx).trim();
    const value = trimmed.slice(eqIdx + 1).trim();
    if (!process.env[key]) process.env[key] = value;
  }
} catch {
  // use existing env
}

const { neon } = require('@neondatabase/serverless');

async function main() {
  const databaseUrl = process.env.NEON_DATABASE_URL || process.env.DATABASE_URL;
  if (!databaseUrl) {
    console.error('Error: NEON_DATABASE_URL is not set');
    process.exit(1);
  }
  const sql = neon(databaseUrl);

  // 1) Table + indexes
  await sql`
    CREATE TABLE IF NOT EXISTS chat_sessions (
      id              SERIAL PRIMARY KEY,
      session_id      TEXT NOT NULL,
      transcript_json JSONB,
      slots_json      JSONB,
      status          TEXT NOT NULL DEFAULT 'active',
      engine_lead_id  INT,
      model_used      TEXT,
      created_at      TIMESTAMPTZ NOT NULL DEFAULT now(),
      updated_at      TIMESTAMPTZ NOT NULL DEFAULT now()
    )
  `;
  await sql`CREATE INDEX IF NOT EXISTS idx_chat_sessions_session_id ON chat_sessions (session_id)`;
  await sql`CREATE INDEX IF NOT EXISTS idx_chat_sessions_status ON chat_sessions (status)`;
  console.log('OK: chat_sessions table + indexes');

  // 2) Feature flags (do not clobber existing values)
  await sql`INSERT INTO site_config (key, value) VALUES ('chatbot_enabled', 'true') ON CONFLICT (key) DO NOTHING`;
  await sql`INSERT INTO site_config (key, value) VALUES ('chatbot_ab_percent', '50') ON CONFLICT (key) DO NOTHING`;
  console.log('OK: chatbot_enabled + chatbot_ab_percent flags');

  // 3) System prompt — overwrite to keep it in sync with the doc on each run
  const promptPath = join(__dirname, '..', 'docs', 'chatbot', 'SYSTEM_PROMPT.md');
  const promptText = readFileSync(promptPath, 'utf8');
  await sql`
    INSERT INTO site_config (key, value, updated_by, updated_at)
    VALUES ('chatbot_system_prompt', ${promptText}, 'migrate-015', NOW())
    ON CONFLICT (key) DO UPDATE SET value = EXCLUDED.value, updated_by = 'migrate-015', updated_at = NOW()
  `;
  console.log(`OK: chatbot_system_prompt seeded (${promptText.length} chars)`);

  console.log('\nMigration 015 complete.');
}

main().catch(err => {
  console.error('Migration 015 failed:', err);
  process.exit(1);
});
