-- ============================================================
-- VoltSol Lead Engine V1 — Canonical Lead Table
-- Migration 007 (additive, non-destructive)
-- Run via: npm run db:migrate
-- ============================================================

-- Canonical lead table: single source of truth for all leads
-- Multi-tenant from day one (tenant_id=1 is Hugo/VoltSol)
CREATE TABLE IF NOT EXISTS engine_leads (
  id                SERIAL PRIMARY KEY,
  tenant_id         INT NOT NULL DEFAULT 1,
  vertical          VARCHAR(50) NOT NULL DEFAULT 'solar',
  source_consumer   VARCHAR(100),          -- voltsol_site | seo_city_page | legacy_contacts | legacy_marketplace
  source_page       VARCHAR(500),

  -- Identity (PII)
  first_name        VARCHAR(100) NOT NULL,
  last_name         VARCHAR(100) NOT NULL,
  email             VARCHAR(255) NOT NULL,
  phone             VARCHAR(30) NOT NULL,
  street_address    TEXT,
  city              VARCHAR(100),
  state             VARCHAR(50),
  zip               VARCHAR(10),

  -- Qualifying signals (canonical enum values only)
  owns_home         VARCHAR(20),           -- own | rent | unsure
  monthly_bill      VARCHAR(20),           -- lt_100 | 100_200 | 200_300 | gt_300
  timeline          VARCHAR(20),           -- asap | 1_3mo | 3_6mo | exploring
  utility           VARCHAR(20),           -- pge | smud | sce | other
  roof_shade        VARCHAR(30),           -- full_sun | some_shade | mostly_shaded
  intent            VARCHAR(100),
  notes             TEXT,

  -- Engine fields
  score             VARCHAR(20) NOT NULL DEFAULT 'standard',  -- hot_lead | standard | low_priority
  status            VARCHAR(20) NOT NULL DEFAULT 'new',       -- new | contacted | quoted | won | lost | stale
  sale_value        NUMERIC(12, 2),        -- $ value when won

  -- Attribution & consent
  attribution_json  JSONB,                 -- utm_source/medium/campaign, referrer, session_id, device
  consent_json      JSONB NOT NULL,        -- TCPA verbatim: version, timestamp, ip, wording, form_id
  ip_address        VARCHAR(45),

  -- Timestamps
  created_at        TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at        TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Indexes for common queries
CREATE INDEX IF NOT EXISTS idx_engine_leads_tenant_created
  ON engine_leads(tenant_id, created_at DESC);

CREATE INDEX IF NOT EXISTS idx_engine_leads_score
  ON engine_leads(score);

CREATE INDEX IF NOT EXISTS idx_engine_leads_status
  ON engine_leads(status);

CREATE INDEX IF NOT EXISTS idx_engine_leads_city
  ON engine_leads(city);

-- Composite for Hugo's triage queue (score desc, then recency)
CREATE INDEX IF NOT EXISTS idx_engine_leads_triage
  ON engine_leads(tenant_id, score DESC, created_at DESC);
