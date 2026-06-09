-- Migration 002: Lead Engine — additive, non-destructive

-- Extend contacts with attribution + estimator columns
ALTER TABLE contacts ADD COLUMN IF NOT EXISTS source VARCHAR(50);
ALTER TABLE contacts ADD COLUMN IF NOT EXISTS rep VARCHAR(100);
ALTER TABLE contacts ADD COLUMN IF NOT EXISTS utm_source VARCHAR(120);
ALTER TABLE contacts ADD COLUMN IF NOT EXISTS utm_medium VARCHAR(120);
ALTER TABLE contacts ADD COLUMN IF NOT EXISTS utm_campaign VARCHAR(120);
ALTER TABLE contacts ADD COLUMN IF NOT EXISTS referrer TEXT;
ALTER TABLE contacts ADD COLUMN IF NOT EXISTS estimated_savings INTEGER;

-- Lead events table for funnel analytics
CREATE TABLE IF NOT EXISTS lead_events (
  id            SERIAL PRIMARY KEY,
  event_type    VARCHAR(50) NOT NULL,
  campaign_code VARCHAR(50),
  source        VARCHAR(50),
  rep           VARCHAR(100),
  utm_source    VARCHAR(120),
  utm_medium    VARCHAR(120),
  utm_campaign  VARCHAR(120),
  session_id    VARCHAR(64),
  device        VARCHAR(20),
  path          VARCHAR(200),
  meta          JSONB,
  created_at    TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_lead_events_type_created ON lead_events(event_type, created_at DESC);
CREATE INDEX IF NOT EXISTS idx_lead_events_campaign ON lead_events(campaign_code);
