export const dynamic = 'force-dynamic';
import { NextRequest, NextResponse } from 'next/server';
import { getAdminSession, getAllAdmins, addAdmin, deactivateAdmin } from '@/lib/admin-auth';

export async function GET() {
  const session = await getAdminSession();
  if (!session) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const admins = await getAllAdmins();
    return NextResponse.json({ admins, currentEmail: session.email });
  } catch (err) {
    console.error('[admin/admins] GET failed:', err);
    return NextResponse.json({ error: 'Failed to fetch admins' }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  const session = await getAdminSession();
  if (!session) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  let body: { email?: string; name?: string };
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: 'Invalid request body' }, { status: 400 });
  }

  const email = body.email?.trim().toLowerCase();
  const name = body.name?.trim() || null;

  if (!email) {
    return NextResponse.json({ error: 'Email is required' }, { status: 400 });
  }

  // Basic email format validation
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: 'Invalid email format' }, { status: 400 });
  }

  try {
    const result = await addAdmin(email, name, session.email);
    if (!result.success) {
      return NextResponse.json({ error: result.error }, { status: 409 });
    }
    return NextResponse.json({ success: true, admin: result.admin });
  } catch (err) {
    console.error('[admin/admins] POST failed:', err);
    return NextResponse.json({ error: 'Failed to add admin' }, { status: 500 });
  }
}

export async function DELETE(req: NextRequest) {
  const session = await getAdminSession();
  if (!session) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  let body: { id?: number };
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: 'Invalid request body' }, { status: 400 });
  }

  const id = body.id;
  if (typeof id !== 'number') {
    return NextResponse.json({ error: 'Admin ID is required' }, { status: 400 });
  }

  try {
    const result = await deactivateAdmin(id, session.email);
    if (!result.success) {
      return NextResponse.json({ error: result.error }, { status: 400 });
    }
    return NextResponse.json({ success: true });
  } catch (err) {
    console.error('[admin/admins] DELETE failed:', err);
    return NextResponse.json({ error: 'Failed to deactivate admin' }, { status: 500 });
  }
}
