-- 011_site_config_full.sql: Seed all remaining homepage config keys
-- Uses ON CONFLICT DO NOTHING to preserve any admin edits

INSERT INTO site_config (key, value) VALUES
  -- Global
  ('cta_button_text', 'Get My Free Estimate'),

  -- Section 1: Hero
  ('hero_headline_line1', 'The sun doesn''t'),
  ('hero_headline_line2', 'send a bill.'),
  ('hero_subhead', 'How Northern California families are cutting the cord on PG&E — for less than the cost of a used car.'),
  ('hero_cta_secondary', 'See How It Works'),
  ('hero_trust', '["Licensed","Local","Off-Grid Capable","No Pressure"]'),
  ('hero_tax_banner_label', 'California Tax Advantage:'),
  ('hero_tax_banner_body', ' Systems completed by January 1, 2027 qualify for the property tax exclusion. '),
  ('hero_tax_banner_link_text', 'Learn more'),
  ('hero_tax_banner_link_url', '/resources/california-solar-tax-exclusion-2024.pdf'),

  -- Section 3: How It Works
  ('how_headline_pre', 'Make it. Store it. '),
  ('how_headline_gold', 'Live on it.'),
  ('how_steps', '[{"step":"01","title":"MAKE IT","desc":"Solar panels turn free sunlight into power."},{"step":"02","title":"STORE IT","desc":"EG4 battery banks it for night and blackouts."},{"step":"03","title":"LIVE ON IT","desc":"Your home runs on stored sun — heating and cooling included."}]'),

  -- Section 4: Inline Estimate
  ('estimate_headline_pre', 'See your '),
  ('estimate_headline_gold', 'ballpark savings'),
  ('estimate_headline_post', ' in seconds'),
  ('estimate_subtext', 'Tap your monthly PG&E bill below to get started.'),

  -- Section 5: Proof / Testimonials
  ('proof_eyebrow', 'What Customers Say'),
  ('proof_headline_pre', 'Real homes. '),
  ('proof_headline_gold', 'Real numbers.'),
  ('testimonials', '[{"quote":"Our PG&E bill went from $340 to almost nothing — and we kept the lights on during a 2-day blackout.","name":"Maria S.","city":"Redding"},{"quote":"SunPower quoted $38,000. Hugo did the whole thing for under ten grand.","name":"David R.","city":"Chico"},{"quote":"First summer with no AC bill. First winter with no gas bill.","name":"Carmen L.","city":"Grass Valley"}]'),

  -- Section 6: Meet Hugo
  ('about_headline_pre', 'Meet '),
  ('about_headline_gold', 'Hugo'),
  ('about_body', 'Hugo designs and installs every VoltSol system personally. When you call, he picks up.'),
  ('about_credentials', '["CSLB Licensed","Northern California Native","Every Install Done Personally","Answers His Phone"]'),
  ('about_equipment_link', 'Built on EG4 — See the equipment'),

  -- Section 7: FAQ + Bottom CTA
  ('faq_headline_pre', 'Straight '),
  ('faq_headline_gold', 'answers.'),
  ('faqs', '[{"q":"What does a system cost, and what''s included?","a":"Under $10,000 all-in — solar panels, EG4 hybrid inverter, EG4 LiFePO4 battery, mini-split heat pump, and full installation. Your free estimate shows the exact number for your home."},{"q":"What''s the difference between off-grid and grid-tie solar?","a":"Grid-tie solar feeds power back to PG&E and shuts off during blackouts — you stay dependent on the utility. Our systems are off-grid capable: the battery runs your home directly, so you can keep the grid as backup or cut it entirely."},{"q":"Do I need permits?","a":"Yes, and we handle them. Permitting and county paperwork are included in every install — you don''t file a single form."},{"q":"How long do the batteries last?","a":"EG4 LiFePO4 batteries are rated for 8,000 cycles — roughly 20 years of daily use — and carry a 10-year manufacturer warranty."},{"q":"How long does installation take?","a":"Most installs are done in 1–2 days. From your free estimate to power-on is typically 2–4 weeks, depending on county permit turnaround."}]'),
  ('final_cta_headline', 'Ready to cut the cord on PG&E?'),
  ('final_cta_subtext', 'Get a free, no-obligation estimate — see exactly what your home could save.')

ON CONFLICT (key) DO NOTHING;
