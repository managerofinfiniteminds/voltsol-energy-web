export const dynamic = 'force-dynamic';
import { NextRequest, NextResponse } from 'next/server';
import { sql } from '@/lib/db';
import { isAdmin } from '@/lib/admin-auth';
import { listGoogleReviews, syncGoogleReviews, GoogleReviewsSyncError } from '@/lib/google-reviews';

/**
 * GET: list all synced Google reviews (featured first, then by sort_order),
 * plus the configured place ID and cached business rating/count.
 */
export async function GET() {
  if (!(await isAdmin())) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const reviews = await listGoogleReviews();
  const configRows = await sql`
    SELECT key, value FROM site_config
    WHERE key IN ('google_place_id', 'google_business_rating', 'google_business_review_count', 'google_reviews_synced_at')
  `;
  const config: Record<string, string> = {};
  for (const row of configRows as { key: string; value: string }[]) {
    config[row.key] = row.value;
  }

  return NextResponse.json({
    reviews,
    placeId: config.google_place_id || '',
    businessRating: config.google_business_rating || null,
    businessReviewCount: config.google_business_review_count || null,
    lastSyncedAt: config.google_reviews_synced_at || null,
  });
}

/**
 * POST: trigger a sync from the Places API using the given (or already
 * configured) Place ID. Saves the Place ID to site_config if provided.
 */
export async function POST(req: NextRequest) {
  if (!(await isAdmin())) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const body = (await req.json().catch(() => ({}))) as { placeId?: string };
  let placeId = body.placeId?.trim();

  if (placeId) {
    await sql`
      INSERT INTO site_config (key, value) VALUES ('google_place_id', ${placeId})
      ON CONFLICT (key) DO UPDATE SET value = ${placeId}
    `;
  } else {
    const rows = await sql`SELECT value FROM site_config WHERE key = 'google_place_id'`;
    placeId = (rows[0] as { value: string } | undefined)?.value;
  }

  if (!placeId) {
    return NextResponse.json(
      { error: 'No Place ID configured. Enter your Google Business Profile Place ID first.' },
      { status: 400 }
    );
  }

  try {
    const result = await syncGoogleReviews(placeId);
    return NextResponse.json({ success: true, ...result });
  } catch (err) {
    const message = err instanceof GoogleReviewsSyncError ? err.message : 'Sync failed unexpectedly.';
    console.error('[google-reviews] sync error:', err);
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
