// Client-side event tracking — fire-and-forget POSTs to /api/events.
// Never throws or blocks UI. Safe to call anywhere on the client.

import { getAttribution } from './attribution';

let _sessionId: string | null = null;

function getSessionId(): string {
  if (typeof window === 'undefined') return '';
  if (_sessionId) return _sessionId;
  try {
    const stored = sessionStorage.getItem('vs_session_id');
    if (stored) {
      _sessionId = stored;
    } else {
      _sessionId =
        Math.random().toString(36).slice(2) + Date.now().toString(36);
      sessionStorage.setItem('vs_session_id', _sessionId);
    }
  } catch {
    _sessionId = Math.random().toString(36).slice(2);
  }
  return _sessionId;
}

function getDevice(): string {
  if (typeof window === 'undefined') return 'unknown';
  return window.innerWidth < 768 ? 'mobile' : 'desktop';
}

export function track(
  event_type: string,
  meta?: Record<string, unknown>
): void {
  if (typeof window === 'undefined') return;

  const attribution = getAttribution();
  const payload: Record<string, unknown> = {
    event_type,
    session_id: getSessionId(),
    device: getDevice(),
    path: window.location.pathname,
    ...attribution,
  };
  if (meta !== undefined) payload.meta = meta;

  fetch('/api/events', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  }).catch(() => {
    // fire-and-forget — never surface errors to UI
  });
}
