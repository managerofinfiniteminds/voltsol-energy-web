-- 018_partners.sql: Partner & backlink program — genuine dofollow partnerships
-- with local businesses. Hugo outreaches via email; partners claim/update their
-- profile via magic-link form; approved partners appear on /partners public page.

CREATE TABLE IF NOT EXISTS partners (
  id SERIAL PRIMARY KEY,
  company_name TEXT NOT NULL,
  category TEXT,
  contact_name TEXT,
  contact_email TEXT,
  website_url TEXT,
  status TEXT NOT NULL DEFAULT 'prospect',
    -- prospect | contacted | claimed | pending_approval | live | declined | inactive
  logo_url TEXT,
  blurb TEXT,
  visible BOOLEAN NOT NULL DEFAULT false,
  sort_order INTEGER NOT NULL DEFAULT 0,
  claim_token TEXT UNIQUE DEFAULT encode(gen_random_bytes(16), 'hex'),
  claim_token_used_at TIMESTAMPTZ,
  link_target_url TEXT,       -- partner-reported: where the backlink to us lives on their site
  link_verified_at TIMESTAMPTZ,
  link_verified BOOLEAN NOT NULL DEFAULT false,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  last_contacted_at TIMESTAMPTZ
);

CREATE INDEX IF NOT EXISTS idx_partners_status ON partners (status);
CREATE INDEX IF NOT EXISTS idx_partners_claim_token ON partners (claim_token);
CREATE INDEX IF NOT EXISTS idx_partners_visible_sort ON partners (visible, sort_order);

CREATE TABLE IF NOT EXISTS partner_interactions (
  id SERIAL PRIMARY KEY,
  partner_id INTEGER NOT NULL REFERENCES partners(id) ON DELETE CASCADE,
  kind TEXT NOT NULL,   -- email_sent | note | status_change | claim_submitted
  body TEXT,
  resend_id TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE INDEX IF NOT EXISTS idx_partner_interactions_partner_id ON partner_interactions (partner_id);
