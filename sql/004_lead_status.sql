-- Migration 004: Lead status pipeline — new / contacted / quoted / won / lost
-- Additive + idempotent. Guards in case 001 was never applied to this DB.
ALTER TABLE contacts ADD COLUMN IF NOT EXISTS status VARCHAR(30) DEFAULT 'new';
ALTER TABLE contacts ADD COLUMN IF NOT EXISTS notes TEXT;

-- Map legacy statuses to the new pipeline
UPDATE contacts SET status = 'quoted' WHERE status IN ('qualified', 'estimate_booked');
UPDATE contacts SET status = 'won' WHERE status = 'converted';
UPDATE contacts SET status = 'lost' WHERE status = 'closed';

CREATE INDEX IF NOT EXISTS idx_contacts_status ON contacts(status);
