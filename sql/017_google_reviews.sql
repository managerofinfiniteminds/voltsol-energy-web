-- 017_google_reviews.sql: Real Google Business Profile reviews, synced via
-- Places API, curated by admin (which ones show on the homepage + order).

CREATE TABLE IF NOT EXISTS google_reviews (
  id                  SERIAL PRIMARY KEY,
  google_review_id    TEXT UNIQUE NOT NULL, -- Places API "name" field, stable per review
  author_name         TEXT NOT NULL,
  author_photo_url    TEXT,
  author_profile_url  TEXT,
  rating              SMALLINT NOT NULL CHECK (rating BETWEEN 1 AND 5),
  review_text         TEXT NOT NULL DEFAULT '',
  relative_time_desc  TEXT,               -- e.g. "a month ago" (Google-provided, not recomputed)
  review_time         TIMESTAMPTZ,
  language_code       TEXT,
  featured            BOOLEAN NOT NULL DEFAULT false, -- shown on homepage when true
  sort_order          INTEGER NOT NULL DEFAULT 0,      -- lower = earlier among featured
  first_synced_at     TIMESTAMPTZ NOT NULL DEFAULT now(),
  last_synced_at      TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE INDEX IF NOT EXISTS idx_google_reviews_featured ON google_reviews (featured, sort_order);

-- site_config keys used by the sync + homepage:
--   google_place_id           - the Google Business Profile Place ID to sync from
--   google_business_rating    - overall business rating from last sync (e.g. "4.9")
--   google_business_review_count - total review count from last sync (e.g. "37")
--   google_reviews_synced_at  - ISO timestamp of last successful sync
-- (No default rows inserted — left blank until a Place ID is configured in /admin/reviews.)
