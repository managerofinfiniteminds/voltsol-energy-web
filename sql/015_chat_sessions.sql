-- 015_chat_sessions.sql: Conversational lead-capture chatbot (Phase 1)
-- Stores each chat session's transcript + captured slots, and links to the
-- engine_leads row once a lead is submitted. Feature flags live in site_config.

CREATE TABLE IF NOT EXISTS chat_sessions (
  id              SERIAL PRIMARY KEY,
  session_id      TEXT NOT NULL,
  transcript_json JSONB,
  slots_json      JSONB,
  status          TEXT NOT NULL DEFAULT 'active',  -- active|completed|handed_off|abandoned
  engine_lead_id  INT,
  model_used      TEXT,
  created_at      TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at      TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE INDEX IF NOT EXISTS idx_chat_sessions_session_id ON chat_sessions (session_id);
CREATE INDEX IF NOT EXISTS idx_chat_sessions_status ON chat_sessions (status);

-- Feature flags (simple scalar values — safe for the semicolon-split migrator).
-- The system prompt itself is seeded via scripts/migrate-015.js (parameterized,
-- because the prompt text contains semicolons).
INSERT INTO site_config (key, value) VALUES
  ('chatbot_enabled', 'true'),
  ('chatbot_ab_percent', '50')
ON CONFLICT (key) DO NOTHING;
