-- 014_utilities.sql: California electric utility list (admin-editable dropdown source)

CREATE TABLE IF NOT EXISTS utilities (
  id          SERIAL PRIMARY KEY,
  name        TEXT NOT NULL,            -- human-readable, shown in dropdown + stored on lead
  sort_order  INTEGER NOT NULL DEFAULT 100,
  is_active   BOOLEAN NOT NULL DEFAULT true,
  created_at  TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at  TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE UNIQUE INDEX IF NOT EXISTS idx_utilities_name ON utilities(LOWER(name));
CREATE INDEX IF NOT EXISTS idx_utilities_active_sort ON utilities(is_active, sort_order);

-- Seed: comprehensive list of California electric billing utilities.
-- Most common (VoltSol's NorCal service area) pinned to the top via sort_order.
INSERT INTO utilities (name, sort_order) VALUES
  -- Most common first
  ('Pacific Gas & Electric (PG&E)', 1),
  ('Sacramento Municipal Utility District (SMUD)', 2),
  ('Southern California Edison (SCE)', 3),
  ('San Diego Gas & Electric (SDG&E)', 4),
  -- Investor-owned (rest)
  ('PacifiCorp (Pacific Power)', 20),
  ('Liberty Utilities (CalPeco)', 21),
  ('Bear Valley Electric Service', 22),
  -- Large municipal / irrigation districts
  ('Los Angeles Department of Water & Power (LADWP)', 40),
  ('Imperial Irrigation District (IID)', 41),
  ('Modesto Irrigation District (MID)', 42),
  ('Turlock Irrigation District (TID)', 43),
  ('Merced Irrigation District', 44),
  -- Municipal utilities (alphabetical)
  ('Alameda Municipal Power', 60),
  ('Anaheim Public Utilities', 61),
  ('Azusa Light & Water', 62),
  ('Banning Electric Utility', 63),
  ('Biggs Municipal Utilities', 64),
  ('Burbank Water & Power', 65),
  ('City of Industry', 66),
  ('City of Palo Alto Utilities', 67),
  ('City of Ukiah Electric Utility', 68),
  ('Colton Electric Utility', 69),
  ('Glendale Water & Power', 70),
  ('Gridley Municipal Utilities', 71),
  ('Healdsburg Electric', 72),
  ('Lassen Municipal Utility District', 73),
  ('Lodi Electric Utility', 74),
  ('Lompoc Electric', 75),
  ('Moreno Valley Utility', 76),
  ('Needles Public Utility Authority', 77),
  ('Pasadena Water & Power', 78),
  ('Port of Oakland', 79),
  ('Rancho Cucamonga Municipal Utility', 80),
  ('Redding Electric Utility', 81),
  ('Riverside Public Utilities', 82),
  ('Roseville Electric', 83),
  ('Shasta Lake Electric Utility', 84),
  ('Silicon Valley Power (Santa Clara)', 85),
  ('Truckee Donner Public Utility District', 86),
  ('Trinity Public Utilities District', 87),
  ('Vernon Public Utilities', 88),
  ('Victorville Municipal Utility', 89),
  -- Rural electric cooperatives
  ('Anza Electric Cooperative', 110),
  ('Plumas-Sierra Rural Electric Cooperative', 111),
  ('Surprise Valley Electrification', 112),
  ('Valley Electric Association', 113),
  -- Catch-all (always last)
  ('Other / Not sure', 9999)
ON CONFLICT (LOWER(name)) DO NOTHING;

-- Widen lead utility columns to hold full utility names (was VARCHAR(20)/(100)).
ALTER TABLE engine_leads ALTER COLUMN utility TYPE VARCHAR(120);
