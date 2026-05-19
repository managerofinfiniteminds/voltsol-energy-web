export const dynamic = 'force-dynamic';
import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({
    has_password: !!process.env.ADMIN_PASSWORD,
    password_length: process.env.ADMIN_PASSWORD?.length ?? 0,
    password_value: process.env.ADMIN_PASSWORD === 'VoltSol2026' ? 'MATCH' : 'NO_MATCH',
    node_env: process.env.NODE_ENV,
  });
}
