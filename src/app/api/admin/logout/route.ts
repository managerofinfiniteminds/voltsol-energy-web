export const dynamic = 'force-dynamic';
import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';

export const dynamic = 'force-dynamic';
export async function POST() {
export const dynamic = 'force-dynamic';
  const cookieStore = cookies();
export const dynamic = 'force-dynamic';
  cookieStore.delete('admin_session');
export const dynamic = 'force-dynamic';
  return NextResponse.json({ success: true });
export const dynamic = 'force-dynamic';
}
