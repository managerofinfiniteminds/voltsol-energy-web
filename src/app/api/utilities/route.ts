export const dynamic = 'force-dynamic';
import { NextRequest, NextResponse } from 'next/server';
import { getActiveUtilities, getSupportedStates, normalizeState } from '@/lib/utilities';

// Public endpoint: active utilities for the estimate-flow dropdown, scoped to a
// state. Pass ?state=TX (or a full name like "texas"); defaults to CA when
// absent so existing CA traffic is unaffected.
// Also returns the list of supported states so the flow can offer a picker when
// it doesn't yet know where the lead is.
export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const stateParam = searchParams.get('state');
    const state = normalizeState(stateParam);
    const [utilities, states] = await Promise.all([
      getActiveUtilities(state),
      getSupportedStates(),
    ]);
    return NextResponse.json({
      state,
      states,
      utilities: utilities.map(u => ({ id: u.id, name: u.name })),
    });
  } catch {
    return NextResponse.json(
      { state: 'CA', states: ['CA'], utilities: [] },
      { status: 200 }
    );
  }
}
