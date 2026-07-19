-- 020_utilities_state.sql
-- Segment the electric-utility dropdown by state so a lead only ever sees the
-- providers that exist where they live. Adding a NEW state in the future is a
-- data-only operation: insert rows with the new `state` value — no code change.
--
-- Design:
--   * `state` = 2-letter USPS code (e.g. 'CA', 'TX'). NOT NULL, defaults 'CA'
--     so existing rows + any legacy insert path stay valid.
--   * Uniqueness is now PER STATE (a name may legitimately repeat across states,
--     though in practice they differ). Old global name index is dropped.
--   * sort_order still controls display order WITHIN a state.

ALTER TABLE utilities
  ADD COLUMN IF NOT EXISTS state TEXT NOT NULL DEFAULT 'CA';

-- Everything seeded before this migration was California.
UPDATE utilities SET state = 'CA' WHERE state IS NULL OR state = '';

-- Replace the global-name unique index with a per-state one.
DROP INDEX IF EXISTS idx_utilities_name;
CREATE UNIQUE INDEX IF NOT EXISTS idx_utilities_state_name
  ON utilities (state, LOWER(name));
CREATE INDEX IF NOT EXISTS idx_utilities_state_active_sort
  ON utilities (state, is_active, sort_order);

-- ─────────────────────────────────────────────────────────────────────────────
-- Seed: TEXAS electric billing entities.
-- Texas is mostly DEREGULATED (ERCOT): the company that SENDS THE BILL is the
-- Retail Electric Provider (REP), not the wires company. But regulated pockets
-- and munis/co-ops exist and bill directly. We list the largest REPs plus the
-- regulated utilities + big munis so almost anyone finds themselves, with an
-- "Other / Not sure" escape hatch.
-- Idempotent: ON CONFLICT (state, LOWER(name)) DO NOTHING.
INSERT INTO utilities (name, sort_order, state) VALUES
  -- Largest retail electric providers (deregulated market) — most common first
  ('TXU Energy', 1, 'TX'),
  ('Reliant Energy', 2, 'TX'),
  ('Green Mountain Energy', 3, 'TX'),
  ('Gexa Energy', 4, 'TX'),
  ('Direct Energy', 5, 'TX'),
  ('Constellation', 6, 'TX'),
  ('Cirro Energy', 7, 'TX'),
  ('Champion Energy', 8, 'TX'),
  ('Discount Power', 9, 'TX'),
  ('4Change Energy', 10, 'TX'),
  ('Frontier Utilities', 11, 'TX'),
  ('Just Energy', 12, 'TX'),
  ('Pulse Power', 13, 'TX'),
  ('Rhythm Energy', 14, 'TX'),
  ('Payless Power', 15, 'TX'),
  -- Regulated utilities / munis / co-ops that bill customers directly
  ('Austin Energy', 40, 'TX'),
  ('CPS Energy (San Antonio)', 41, 'TX'),
  ('El Paso Electric', 42, 'TX'),
  ('Entergy Texas', 43, 'TX'),
  ('Southwestern Electric Power (SWEPCO)', 44, 'TX'),
  ('Texas-New Mexico Power (TNMP)', 45, 'TX'),
  ('Pedernales Electric Cooperative', 46, 'TX'),
  ('CoServ Electric', 47, 'TX'),
  ('Bluebonnet Electric Cooperative', 48, 'TX'),
  ('Denton Municipal Electric', 49, 'TX'),
  ('Garland Power & Light', 50, 'TX'),
  ('New Braunfels Utilities', 51, 'TX'),
  -- Escape hatch (kept last)
  ('Other / Not sure', 999, 'TX')
ON CONFLICT (state, LOWER(name)) DO NOTHING;

-- Make sure California also has an explicit escape hatch (older seed may lack it).
INSERT INTO utilities (name, sort_order, state) VALUES
  ('Other / Not sure', 999, 'CA')
ON CONFLICT (state, LOWER(name)) DO NOTHING;
