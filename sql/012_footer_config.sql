-- Migration 012: Footer CMS fields
-- Adds editable footer details to site_config (tagline, email, copyright, legal line, nav links)

INSERT INTO site_config (key, value) VALUES
  ('footer_tagline', 'Clean energy, built to last.'),
  ('footer_email', 'info@voltsolenergy.com'),
  ('footer_copyright_year', '2026'),
  ('footer_copyright_rights', 'LLC. All rights reserved.'),
  ('footer_legal_line', 'CSLB License # pending · Northern California'),
  ('footer_links', '[{"label":"How It Works","href":"/#how"},{"label":"Technology","href":"/#systems"},{"label":"FAQ","href":"/#faq"},{"label":"Get My Free Estimate","href":"/book"},{"label":"Get a Quote","href":"/#quote"},{"label":"Privacy Policy","href":"/privacy"}]')
ON CONFLICT (key) DO NOTHING;
