-- Review link click tracking: know who actually clicked the "Leave a
-- Google Review" link, not just who we sent it to.
--
-- We route review links through /api/r/review?t=<token> instead of
-- linking straight to Google. That redirect endpoint logs the click
-- (first-click timestamp + running count) then forwards to Google.
-- A dedicated per-row token (not the booking magic_token, not the raw
-- serial id) keeps these public tracking links unguessable and
-- unrelated to any other auth-bearing token in the system.

-- VoltSol customers (post-install, tracked via appointments table)
ALTER TABLE appointments
  ADD COLUMN IF NOT EXISTS review_click_token TEXT UNIQUE DEFAULT encode(gen_random_bytes(16), 'hex'),
  ADD COLUMN IF NOT EXISTS review_link_clicked_at TIMESTAMPTZ,
  ADD COLUMN IF NOT EXISTS review_link_click_count INTEGER NOT NULL DEFAULT 0;

CREATE INDEX IF NOT EXISTS idx_appointments_review_click_token ON appointments (review_click_token);

-- Legacy (pre-VoltSol) customers, tracked via legacy_review_requests table
ALTER TABLE legacy_review_requests
  ADD COLUMN IF NOT EXISTS click_token TEXT UNIQUE DEFAULT encode(gen_random_bytes(16), 'hex'),
  ADD COLUMN IF NOT EXISTS link_clicked_at TIMESTAMPTZ,
  ADD COLUMN IF NOT EXISTS click_count INTEGER NOT NULL DEFAULT 0;

CREATE INDEX IF NOT EXISTS idx_legacy_review_requests_click_token ON legacy_review_requests (click_token);

-- Backfill tokens for any pre-existing rows created before this column existed
-- (DEFAULT only applies to new rows going forward).
UPDATE appointments SET review_click_token = encode(gen_random_bytes(16), 'hex') WHERE review_click_token IS NULL;
UPDATE legacy_review_requests SET click_token = encode(gen_random_bytes(16), 'hex') WHERE click_token IS NULL;
