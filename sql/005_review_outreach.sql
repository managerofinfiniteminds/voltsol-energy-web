-- Review outreach system: appointments review tracking + legacy customer table

-- Add review tracking to appointments
ALTER TABLE appointments ADD COLUMN review_requested_at TIMESTAMPTZ;

-- Legacy customer review requests (pre-VoltSol customers, not in contacts table)
CREATE TABLE IF NOT EXISTS legacy_review_requests (
  id SERIAL PRIMARY KEY,
  email TEXT NOT NULL,
  name TEXT,
  subject TEXT NOT NULL,
  body TEXT NOT NULL,
  sent_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  resend_id TEXT
);

CREATE INDEX IF NOT EXISTS idx_legacy_review_requests_email ON legacy_review_requests (lower(email));
CREATE INDEX IF NOT EXISTS idx_legacy_review_requests_sent_at ON legacy_review_requests (sent_at);
