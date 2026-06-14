-- Migration 008: Appointment magic-link token hardening
-- Adds expiry and revocation columns to appointments table

-- Add token_expires_at column (nullable, allows existing links to work)
ALTER TABLE appointments
ADD COLUMN IF NOT EXISTS token_expires_at TIMESTAMPTZ;

-- Add token_revoked column
ALTER TABLE appointments
ADD COLUMN IF NOT EXISTS token_revoked BOOLEAN NOT NULL DEFAULT false;

-- Backfill existing appointments: set expiry to created_at + 90 days
-- so old links continue working for a reasonable window
UPDATE appointments
SET token_expires_at = created_at + INTERVAL '90 days'
WHERE token_expires_at IS NULL;

-- Index for efficient expiry lookups (optional but good for queries)
CREATE INDEX IF NOT EXISTS idx_appointments_token_expires_at ON appointments(token_expires_at);
