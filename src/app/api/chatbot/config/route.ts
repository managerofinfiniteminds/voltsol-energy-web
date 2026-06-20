export const dynamic = 'force-dynamic';

import { NextResponse } from 'next/server';
import { sql } from '@/lib/db';

// Returns the chatbot A/B flags for the client. Read live from site_config so
// Hugo can flip the bucket split without a redeploy.
export async function GET() {
  let enabled = false;
  let abPercent = 0;
  try {
    const rows = await sql`
      SELECT key, value FROM site_config
      WHERE key IN ('chatbot_enabled', 'chatbot_ab_percent')
    `;
    for (const r of rows) {
      if (r.key === 'chatbot_enabled') enabled = String(r.value).trim().toLowerCase() === 'true';
      if (r.key === 'chatbot_ab_percent') {
        const n = parseInt(String(r.value), 10);
        abPercent = Number.isFinite(n) ? Math.max(0, Math.min(100, n)) : 0;
      }
    }
  } catch {
    // default-safe: chat off, form shown
  }
  return NextResponse.json(
    { enabled, ab_percent: abPercent },
    { headers: { 'Cache-Control': 'no-store' } }
  );
}
