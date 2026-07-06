export const dynamic = 'force-dynamic';

import { NextRequest, NextResponse } from 'next/server';
import { sql } from '@/lib/db';
import { isAdmin } from '@/lib/admin-auth';

// GET /api/admin/chat            → recent chat sessions (summary)
// GET /api/admin/chat?id=123     → full transcript for one session
export async function GET(req: NextRequest) {
  if (!(await isAdmin())) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const { searchParams } = new URL(req.url);
  const id = searchParams.get('id');

  if (id) {
    const rows = await sql`
      SELECT id, session_id, transcript_json, slots_json, status, engine_lead_id, model_used, created_at, updated_at
      FROM chat_sessions WHERE id = ${parseInt(id, 10)} LIMIT 1
    `;
    if (!rows.length) return NextResponse.json({ error: 'Not found' }, { status: 404 });
    return NextResponse.json(rows[0]);
  }

  const rows = await sql`
    SELECT
      id, session_id, slots_json, status, engine_lead_id, model_used, created_at, updated_at,
      jsonb_array_length(COALESCE(transcript_json, '[]'::jsonb)) AS message_count,
      (
        SELECT elem->>'content'
        FROM jsonb_array_elements(COALESCE(transcript_json, '[]'::jsonb)) WITH ORDINALITY AS t(elem, ord)
        WHERE elem->>'role' = 'user' AND trim(elem->>'content') <> ''
        ORDER BY ord DESC
        LIMIT 1
      ) AS last_message
    FROM chat_sessions
    ORDER BY updated_at DESC
    LIMIT 100
  `;
  return NextResponse.json(rows);
}
