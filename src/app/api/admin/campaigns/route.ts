export const dynamic = 'force-dynamic';
import { NextRequest, NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import { getAllCampaigns, createCampaign, toggleCampaignActive } from '@/lib/campaigns';

export const dynamic = 'force-dynamic';
function isAuthenticated(): boolean {
export const dynamic = 'force-dynamic';
  const cookieStore = cookies();
export const dynamic = 'force-dynamic';
  return cookieStore.get('admin_session')?.value === 'authenticated';
export const dynamic = 'force-dynamic';
}

export const dynamic = 'force-dynamic';
export async function GET() {
export const dynamic = 'force-dynamic';
  if (!isAuthenticated()) {
export const dynamic = 'force-dynamic';
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
export const dynamic = 'force-dynamic';
  }
export const dynamic = 'force-dynamic';
  const campaigns = await getAllCampaigns();
export const dynamic = 'force-dynamic';
  return NextResponse.json(campaigns);
export const dynamic = 'force-dynamic';
}

export const dynamic = 'force-dynamic';
export async function POST(req: NextRequest) {
export const dynamic = 'force-dynamic';
  if (!isAuthenticated()) {
export const dynamic = 'force-dynamic';
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
export const dynamic = 'force-dynamic';
  }
export const dynamic = 'force-dynamic';
  const { code, name, source_type } = await req.json();
export const dynamic = 'force-dynamic';
  if (!code || !name || !source_type) {
export const dynamic = 'force-dynamic';
    return NextResponse.json({ error: 'code, name, and source_type are required' }, { status: 400 });
export const dynamic = 'force-dynamic';
  }
export const dynamic = 'force-dynamic';
  try {
export const dynamic = 'force-dynamic';
    const campaign = await createCampaign(code, name, source_type);
export const dynamic = 'force-dynamic';
    return NextResponse.json(campaign, { status: 201 });
export const dynamic = 'force-dynamic';
  } catch (err: unknown) {
export const dynamic = 'force-dynamic';
    const message = err instanceof Error ? err.message : 'Unknown error';
export const dynamic = 'force-dynamic';
    if (message.includes('unique') || message.includes('duplicate')) {
export const dynamic = 'force-dynamic';
      return NextResponse.json({ error: 'Campaign code already exists' }, { status: 409 });
export const dynamic = 'force-dynamic';
    }
export const dynamic = 'force-dynamic';
    return NextResponse.json({ error: 'Failed to create campaign' }, { status: 500 });
export const dynamic = 'force-dynamic';
  }
export const dynamic = 'force-dynamic';
}

export const dynamic = 'force-dynamic';
export async function PATCH(req: NextRequest) {
export const dynamic = 'force-dynamic';
  if (!isAuthenticated()) {
export const dynamic = 'force-dynamic';
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
export const dynamic = 'force-dynamic';
  }
export const dynamic = 'force-dynamic';
  const { id, is_active } = await req.json();
export const dynamic = 'force-dynamic';
  await toggleCampaignActive(id, is_active);
export const dynamic = 'force-dynamic';
  return NextResponse.json({ success: true });
export const dynamic = 'force-dynamic';
}
