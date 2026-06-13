-- ============================================================
-- VoltSol Lead Marketplace — P4 Tenant Preferences
-- Adds geo scoping, vertical preferences, and onboarding flag
-- Run via: npm run db:migrate
-- ============================================================

-- Geo scope + vertical prefs on tenants
ALTER TABLE marketplace_tenants
  ADD COLUMN IF NOT EXISTS geo_counties        TEXT[]  NOT NULL DEFAULT '{}',
  ADD COLUMN IF NOT EXISTS verticals           TEXT[]  NOT NULL DEFAULT ARRAY['solar'],
  ADD COLUMN IF NOT EXISTS onboarding_complete BOOLEAN NOT NULL DEFAULT false;

-- Disputes: add resolution text column (other columns already present from P0)
ALTER TABLE marketplace_disputes
  ADD COLUMN IF NOT EXISTS resolution TEXT;
