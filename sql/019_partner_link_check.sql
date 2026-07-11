-- 019_partner_link_check.sql: automated backlink verification tracking.
-- Adds columns to record the result of the last automated check that
-- fetches partner.link_target_url and looks for a link to voltsolenergy.com.

ALTER TABLE partners
  ADD COLUMN IF NOT EXISTS link_last_checked_at TIMESTAMPTZ,
  ADD COLUMN IF NOT EXISTS link_check_error TEXT;
