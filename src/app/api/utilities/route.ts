export const dynamic = 'force-dynamic';
import { NextResponse } from 'next/server';
import { getActiveUtilities } from '@/lib/utilities';

// Public endpoint: active utilities for the estimate-flow dropdown.
export async function GET() {
  try {
    const utilities = await getActiveUtilities();
    return NextResponse.json(utilities.map(u => ({ id: u.id, name: u.name })));
  } catch {
    return NextResponse.json([], { status: 200 });
  }
}
