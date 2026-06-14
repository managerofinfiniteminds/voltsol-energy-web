-- 010_site_config.sql: Key-value store for editable site configuration

CREATE TABLE IF NOT EXISTS site_config (
  key         TEXT PRIMARY KEY,
  value       TEXT NOT NULL,
  updated_at  TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_by  TEXT
);

-- Seed with current homepage "The Number" section values
INSERT INTO site_config (key, value) VALUES
  ('number_section_label', 'Total system cost'),
  ('number_headline_prefix', 'Under'),
  ('number_headline_value', '10000'),
  ('compare_bad_amount', '$40,000+'),
  ('compare_bad_caption', 'Traditional solar — loan, still grid-tied'),
  ('compare_good_amount', 'Under $10,000'),
  ('compare_good_caption', 'VoltSol / EG4 — off-grid capable'),
  ('stat_1_value', '8,000+'),
  ('stat_1_label', 'Battery Cycles'),
  ('stat_2_value', '10-Year'),
  ('stat_2_label', 'Warranty'),
  ('stat_3_value', '25+ Year'),
  ('stat_3_label', 'Panel Life'),
  ('stat_4_value', '1–2 Day'),
  ('stat_4_label', 'Install'),
  ('number_payback_line', 'At $300/mo to PG&E, most systems pay for themselves in under 3 years.')
ON CONFLICT (key) DO NOTHING;
