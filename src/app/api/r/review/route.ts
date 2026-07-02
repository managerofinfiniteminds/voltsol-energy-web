export const dynamic = 'force-dynamic';
import { NextRequest, NextResponse } from 'next/server';
import { sql } from '@/lib/db';

// Where every tracked review link ultimately lands. Kept in one place so
// changing the Google review URL never requires re-sending old emails.
const GOOGLE_REVIEW_URL = 'https://g.page/r/CQOUYctMQ1MMEBM/review';

/**
 * Public, unauthenticated tracking redirect for "Leave a Google Review"
 * links sent by email. Anyone with the link's token can trigger a click
 * record — that's expected, the token only ever appears in an email we
 * sent to one person, and the worst case is an inflated click count, not
 * data exposure (no PII returned to the caller either way).
 *
 * GET /api/r/review?t=<token>
 * - Looks up the token against appointments.review_click_token first
 *   (VoltSol customers), then legacy_review_requests.click_token
 *   (pre-VoltSol customers).
 * - Bumps click_count, sets link_clicked_at on first click only.
 * - Always 302s to the Google review page, even if the token is
 *   missing/invalid/expired — a broken tracking link should never block
 *   someone from leaving a review.
 */
export async function GET(req: NextRequest) {
  const token = req.nextUrl.searchParams.get('t');

  if (token) {
    try {
      const apptRows = await sql`
        UPDATE appointments
        SET
          review_link_click_count = review_link_click_count + 1,
          review_link_clicked_at = COALESCE(review_link_clicked_at, now())
        WHERE review_click_token = ${token}
        RETURNING id
      `;

      if (apptRows.length === 0) {
        await sql`
          UPDATE legacy_review_requests
          SET
            click_count = click_count + 1,
            link_clicked_at = COALESCE(link_clicked_at, now())
          WHERE click_token = ${token}
        `;
      }
    } catch (err) {
      // Tracking must never block the redirect to Google.
      console.error('Review click tracking failed:', err);
    }
  }

  return NextResponse.redirect(GOOGLE_REVIEW_URL, { status: 302 });
}
