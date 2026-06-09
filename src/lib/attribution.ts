// Client-side attribution helper — reads URL params + referrer, persists to sessionStorage.
// Safe to import anywhere; all functions guard against SSR with typeof window checks.

const ATTRIBUTION_KEY = 'vs_attribution';
const BILL_PREFILL_KEY = 'vs_prefill_bill';

export interface Attribution {
  source?: string;
  rep?: string;
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  referrer?: string;
  estimated_savings?: number;
}

/** Read URL params + referrer and merge into sessionStorage. Call on page/component mount. */
export function captureAttribution(): Attribution {
  if (typeof window === 'undefined') return {};

  const params = new URLSearchParams(window.location.search);
  const fromUrl: Attribution = {};

  const src = params.get('src') ?? params.get('source');
  if (src) fromUrl.source = src;
  const rep = params.get('rep');
  if (rep) fromUrl.rep = rep;
  const utmSource = params.get('utm_source');
  if (utmSource) fromUrl.utm_source = utmSource;
  const utmMedium = params.get('utm_medium');
  if (utmMedium) fromUrl.utm_medium = utmMedium;
  const utmCampaign = params.get('utm_campaign');
  if (utmCampaign) fromUrl.utm_campaign = utmCampaign;
  if (document.referrer) fromUrl.referrer = document.referrer;

  // URL params win over previously stored values; estimated_savings preserved from storage
  const existing = getAttribution();
  const merged: Attribution = { ...existing, ...fromUrl };

  try {
    sessionStorage.setItem(ATTRIBUTION_KEY, JSON.stringify(merged));
  } catch {
    // sessionStorage unavailable — continue without persisting
  }

  return merged;
}

/** Read attribution from sessionStorage. */
export function getAttribution(): Attribution {
  if (typeof window === 'undefined') return {};
  try {
    const stored = sessionStorage.getItem(ATTRIBUTION_KEY);
    return stored ? (JSON.parse(stored) as Attribution) : {};
  } catch {
    return {};
  }
}

/** Store a computed estimated_savings value (from SavingsEstimator) for form submission. */
export function setEstimate(estimated_savings: number): void {
  if (typeof window === 'undefined') return;
  const current = getAttribution();
  try {
    sessionStorage.setItem(
      ATTRIBUTION_KEY,
      JSON.stringify({ ...current, estimated_savings })
    );
  } catch {
    // ignore
  }
}

/** Store the user's selected bill range so QuoteForm can pre-select step 2. */
export function setBillPrefill(bill: string): void {
  if (typeof window === 'undefined') return;
  try {
    sessionStorage.setItem(BILL_PREFILL_KEY, bill);
  } catch {
    // ignore
  }
}

/** Read the bill range prefill set by the SavingsEstimator. */
export function getBillPrefill(): string | null {
  if (typeof window === 'undefined') return null;
  try {
    return sessionStorage.getItem(BILL_PREFILL_KEY);
  } catch {
    return null;
  }
}
