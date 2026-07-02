import { sql } from '@/lib/db';

// Google Places API (New) — Place Details endpoint. Requires:
//   GOOGLE_PLACES_API_KEY   env var (server-side only, never exposed to browser)
//   site_config.google_place_id  — the target Place ID (set in /admin/reviews)
//
// IMPORTANT LIMITATION (Google's, not ours): the Places API only ever returns
// up to 5 reviews per place — "the most relevant" as Google's algorithm picks
// them, not the full review list and not necessarily the 5 newest. There is
// no supported Google API to pull *all* reviews for a business; that data is
// only fully visible in the Google Business Profile dashboard. This sync is
// meant to top up a small rotating pool of real reviews, not mirror the full
// review history.
const PLACES_API_BASE = 'https://places.googleapis.com/v1/places';

export interface GooglePlaceReview {
  name: string; // stable review resource id, e.g. "places/XXX/reviews/YYY"
  relativePublishTimeDescription?: string;
  rating: number;
  text?: { text: string; languageCode?: string };
  originalText?: { text: string; languageCode?: string };
  authorAttribution?: {
    displayName?: string;
    uri?: string;
    photoUri?: string;
  };
  publishTime?: string; // ISO 8601
}

export interface GooglePlaceDetails {
  id: string;
  displayName?: { text: string };
  rating?: number;
  userRatingCount?: number;
  reviews?: GooglePlaceReview[];
}

export class GoogleReviewsSyncError extends Error {}

/**
 * Fetch place details (rating, review count, up to 5 reviews) from the
 * Places API (New) Place Details endpoint.
 */
export async function fetchGooglePlaceDetails(placeId: string): Promise<GooglePlaceDetails> {
  const apiKey = process.env.GOOGLE_PLACES_API_KEY;
  if (!apiKey) {
    throw new GoogleReviewsSyncError(
      'GOOGLE_PLACES_API_KEY is not set. Add it as a Vercel env var to enable Google review sync.'
    );
  }
  if (!placeId) {
    throw new GoogleReviewsSyncError('No Google Place ID configured.');
  }

  const url = `${PLACES_API_BASE}/${encodeURIComponent(placeId)}`;
  const res = await fetch(url, {
    method: 'GET',
    headers: {
      'X-Goog-Api-Key': apiKey,
      'X-Goog-FieldMask': 'id,displayName,rating,userRatingCount,reviews',
    },
    cache: 'no-store',
  });

  if (!res.ok) {
    const errBody = await res.text().catch(() => '');
    throw new GoogleReviewsSyncError(
      `Places API request failed (${res.status}): ${errBody.slice(0, 300)}`
    );
  }

  return (await res.json()) as GooglePlaceDetails;
}

/**
 * Sync reviews from the Places API into the google_reviews table.
 * Upserts by google_review_id (Google's stable review resource name) so
 * re-syncing doesn't duplicate rows or reset admin curation (featured/order)
 * for reviews that were already imported.
 * Also updates the cached business-level rating/review count in site_config.
 */
export async function syncGoogleReviews(placeId: string): Promise<{
  synced: number;
  rating: number | null;
  userRatingCount: number | null;
}> {
  const details = await fetchGooglePlaceDetails(placeId);
  const reviews = details.reviews || [];

  for (const r of reviews) {
    const text = r.text?.text ?? r.originalText?.text ?? '';
    const authorName = r.authorAttribution?.displayName || 'Google User';
    await sql`
      INSERT INTO google_reviews (
        google_review_id, author_name, author_photo_url, author_profile_url,
        rating, review_text, relative_time_desc, review_time, language_code,
        last_synced_at
      )
      VALUES (
        ${r.name}, ${authorName}, ${r.authorAttribution?.photoUri || null},
        ${r.authorAttribution?.uri || null}, ${Math.round(r.rating)}, ${text},
        ${r.relativePublishTimeDescription || null},
        ${r.publishTime || null}, ${r.text?.languageCode || null}, now()
      )
      ON CONFLICT (google_review_id) DO UPDATE SET
        author_name = EXCLUDED.author_name,
        author_photo_url = EXCLUDED.author_photo_url,
        author_profile_url = EXCLUDED.author_profile_url,
        rating = EXCLUDED.rating,
        review_text = EXCLUDED.review_text,
        relative_time_desc = EXCLUDED.relative_time_desc,
        review_time = EXCLUDED.review_time,
        language_code = EXCLUDED.language_code,
        last_synced_at = now()
    `;
  }

  const nowIso = new Date().toISOString();
  await sql`
    INSERT INTO site_config (key, value) VALUES ('google_reviews_synced_at', ${nowIso})
    ON CONFLICT (key) DO UPDATE SET value = ${nowIso}
  `;
  if (typeof details.rating === 'number') {
    await sql`
      INSERT INTO site_config (key, value) VALUES ('google_business_rating', ${String(details.rating)})
      ON CONFLICT (key) DO UPDATE SET value = ${String(details.rating)}
    `;
  }
  if (typeof details.userRatingCount === 'number') {
    await sql`
      INSERT INTO site_config (key, value) VALUES ('google_business_review_count', ${String(details.userRatingCount)})
      ON CONFLICT (key) DO UPDATE SET value = ${String(details.userRatingCount)}
    `;
  }

  return {
    synced: reviews.length,
    rating: details.rating ?? null,
    userRatingCount: details.userRatingCount ?? null,
  };
}

export interface GoogleReviewRow {
  id: number;
  google_review_id: string;
  author_name: string;
  author_photo_url: string | null;
  author_profile_url: string | null;
  rating: number;
  review_text: string;
  relative_time_desc: string | null;
  review_time: string | null;
  featured: boolean;
  sort_order: number;
  first_synced_at: string;
  last_synced_at: string;
}

export async function listGoogleReviews(): Promise<GoogleReviewRow[]> {
  const rows = await sql`
    SELECT * FROM google_reviews ORDER BY featured DESC, sort_order ASC, review_time DESC NULLS LAST
  `;
  return rows as GoogleReviewRow[];
}

/**
 * Reviews marked featured=true, in curated order, for homepage display.
 * Callers should fall back to the static testimonials config when this
 * returns an empty array (e.g. before any sync has happened).
 */
export async function getFeaturedGoogleReviews(): Promise<GoogleReviewRow[]> {
  const rows = await sql`
    SELECT * FROM google_reviews WHERE featured = true ORDER BY sort_order ASC, review_time DESC NULLS LAST
  `;
  return rows as GoogleReviewRow[];
}
