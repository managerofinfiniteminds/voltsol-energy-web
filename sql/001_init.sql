CREATE TABLE IF NOT EXISTS campaigns (
  id          SERIAL PRIMARY KEY,
  code        VARCHAR(50) UNIQUE NOT NULL,
  name        VARCHAR(200) NOT NULL,
  source_type VARCHAR(50) NOT NULL DEFAULT 'door_knock',
  description TEXT,
  is_active   BOOLEAN DEFAULT true,
  created_at  TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS contacts (
  id                  SERIAL PRIMARY KEY,
  first_name          VARCHAR(100) NOT NULL,
  last_name           VARCHAR(100) NOT NULL,
  email               VARCHAR(255) NOT NULL,
  phone               VARCHAR(20) NOT NULL,
  street_address      TEXT NOT NULL,
  city                VARCHAR(100) NOT NULL,
  state               VARCHAR(50) NOT NULL,
  zip                 VARCHAR(10) NOT NULL,
  owns_home           VARCHAR(20) NOT NULL,
  monthly_bill        VARCHAR(20) NOT NULL,
  best_contact_time   VARCHAR(20) NOT NULL,
  notes               TEXT,
  campaign_id         INTEGER REFERENCES campaigns(id),
  lead_score          VARCHAR(20) DEFAULT 'standard',
  status              VARCHAR(30) DEFAULT 'new',
  created_at          TIMESTAMPTZ DEFAULT NOW(),
  updated_at          TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_contacts_campaign ON contacts(campaign_id);
CREATE INDEX IF NOT EXISTS idx_contacts_status ON contacts(status);
CREATE INDEX IF NOT EXISTS idx_contacts_lead_score ON contacts(lead_score);
CREATE INDEX IF NOT EXISTS idx_contacts_created ON contacts(created_at DESC);
CREATE UNIQUE INDEX IF NOT EXISTS idx_campaigns_code ON campaigns(LOWER(code));

-- Seed a default campaign for testing
INSERT INTO campaigns (code, name, source_type, description)
VALUES ('TEST', 'Test Campaign', 'door_knock', 'Default test campaign')
ON CONFLICT DO NOTHING;
