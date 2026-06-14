-- Migration 009: Admin authentication (magic-link login + whitelist)
-- Replaces shared ADMIN_PASSWORD with per-user sessions and one-time login tokens

-- Admin users whitelist
CREATE TABLE IF NOT EXISTS admin_users (
  id              SERIAL PRIMARY KEY,
  email           TEXT UNIQUE NOT NULL,
  name            TEXT,
  is_active       BOOLEAN NOT NULL DEFAULT true,
  session_token   TEXT,
  session_expires TIMESTAMPTZ,
  last_login_at   TIMESTAMPTZ,
  created_at      TIMESTAMPTZ NOT NULL DEFAULT now(),
  created_by      TEXT  -- email of admin who added them; null for seed
);

-- Index on session_token for fast session lookup
CREATE INDEX IF NOT EXISTS idx_admin_users_session_token ON admin_users(session_token) WHERE session_token IS NOT NULL;

-- One-time magic-link login tokens
CREATE TABLE IF NOT EXISTS admin_login_tokens (
  id         SERIAL PRIMARY KEY,
  email      TEXT NOT NULL,
  token      TEXT UNIQUE NOT NULL,
  expires_at TIMESTAMPTZ NOT NULL,
  used_at    TIMESTAMPTZ,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- Indexes for token lookup and cleanup
CREATE INDEX IF NOT EXISTS idx_admin_login_tokens_token ON admin_login_tokens(token);
CREATE INDEX IF NOT EXISTS idx_admin_login_tokens_email ON admin_login_tokens(email);

-- Seed the whitelist (idempotent)
INSERT INTO admin_users (email, name)
VALUES
  ('hugo@voltsolenergy.com', 'Hugo'),
  ('wayne@greenbowtie.com', 'Wayne')
ON CONFLICT (email) DO NOTHING;
