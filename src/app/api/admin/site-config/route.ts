export const dynamic = 'force-dynamic';

import { NextRequest, NextResponse } from 'next/server';
import { getAdminSession } from '@/lib/admin-auth';
import { getAllConfig, updateConfig } from '@/lib/site-config';

export async function GET() {
  const session = await getAdminSession();
  if (!session) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const config = await getAllConfig();
    return NextResponse.json({ config });
  } catch (err) {
    console.error('[admin/site-config] GET failed:', err);
    return NextResponse.json({ error: 'Failed to fetch config' }, { status: 500 });
  }
}

export async function PUT(req: NextRequest) {
  const session = await getAdminSession();
  if (!session) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  let body: { config?: Record<string, string> };
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: 'Invalid request body' }, { status: 400 });
  }

  if (!body.config || typeof body.config !== 'object') {
    return NextResponse.json({ error: 'Config object is required' }, { status: 400 });
  }

  try {
    await updateConfig(body.config, session.email);
    return NextResponse.json({ success: true });
  } catch (err) {
    console.error('[admin/site-config] PUT failed:', err);
    return NextResponse.json({ error: 'Failed to update config' }, { status: 500 });
  }
}
