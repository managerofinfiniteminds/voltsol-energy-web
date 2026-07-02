// Shared helpers for review-request click tracking.
//
// Every review email links to /api/r/review?t=<token> instead of straight
// to Google. That endpoint logs the click, then redirects to Google. Keep
// the canonical Google URL here so email templates and the redirect
// endpoint can't drift apart.

export const GOOGLE_REVIEW_URL = 'https://g.page/r/CQOUYctMQ1MMEBM/review';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://voltsolenergy.com';

export function buildReviewTrackingUrl(clickToken: string): string {
  return `${SITE_URL}/api/r/review?t=${clickToken}`;
}
