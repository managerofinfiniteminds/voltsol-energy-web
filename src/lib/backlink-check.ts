/**
 * Automated backlink verification.
 *
 * Fetches a partner-reported URL (partners.link_target_url) and checks
 * whether the page actually contains a link back to voltsolenergy.com.
 * This is intentionally simple (regex over raw HTML, no JS execution) —
 * enough to catch "never added it" / "removed it later" / "typo'd the
 * URL" without needing a headless browser.
 */

const SITE_HOSTNAME = 'voltsolenergy.com';

export interface BacklinkCheckResult {
  verified: boolean;
  error: string | null;
  checkedUrl: string;
}

function normalizeUrl(raw: string): string {
  const trimmed = raw.trim();
  if (/^https?:\/\//i.test(trimmed)) return trimmed;
  return `https://${trimmed}`;
}

/**
 * Fetch `targetUrl` and look for an anchor (or any occurrence) referencing
 * voltsolenergy.com. Returns { verified: true } only if we get a healthy
 * (2xx) response AND find a reference to our domain.
 */
export async function checkBacklink(targetUrl: string): Promise<BacklinkCheckResult> {
  const url = normalizeUrl(targetUrl);

  let res: Response;
  try {
    res = await fetch(url, {
      redirect: 'follow',
      signal: AbortSignal.timeout(12000),
      headers: {
        'User-Agent':
          'Mozilla/5.0 (compatible; VoltSolBacklinkChecker/1.0; +https://voltsolenergy.com/partners)',
      },
    });
  } catch (err) {
    return {
      verified: false,
      error: `Fetch failed: ${err instanceof Error ? err.message : String(err)}`,
      checkedUrl: url,
    };
  }

  if (!res.ok) {
    return { verified: false, error: `HTTP ${res.status}`, checkedUrl: url };
  }

  let html: string;
  try {
    html = await res.text();
  } catch (err) {
    return {
      verified: false,
      error: `Failed to read response body: ${err instanceof Error ? err.message : String(err)}`,
      checkedUrl: url,
    };
  }

  // Look for an <a href="...voltsolenergy.com..."> link specifically first
  // (stronger signal), then fall back to any mention of the domain.
  const hrefPattern = /href\s*=\s*["'][^"']*voltsolenergy\.com[^"']*["']/i;
  const anyMention = new RegExp(SITE_HOSTNAME.replace(/\./g, '\\.'), 'i');

  if (hrefPattern.test(html) || anyMention.test(html)) {
    return { verified: true, error: null, checkedUrl: url };
  }

  return {
    verified: false,
    error: 'No link/mention of voltsolenergy.com found on page',
    checkedUrl: url,
  };
}
