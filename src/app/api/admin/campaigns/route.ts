import { NextRequest, NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import { getAllCampaigns, createCampaign, toggleCampaignActive } from '@/lib/campaigns';

function isAuthenticated(): boolean {
  const cookieStore = cookies();
  return cookieStore.get('admin_session')?.value === 'authenticated';
}

export async function GET() {
  if (!isAuthenticated()) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }
  const campaigns = await getAllCampaigns();
  return NextResponse.json(campaigns);
}

export async function POST(req: NextRequest) {
  if (!isAuthenticated()) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }
  const { code, name, source_type } = await req.json();
  if (!code || !name || !source_type) {
    return NextResponse.json({ error: 'code, name, and source_type are required' }, { status: 400 });
  }
  try {
    const campaign = await createCampaign(code, name, source_type);
    return NextResponse.json(campaign, { status: 201 });
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : 'Unknown error';
    if (message.includes('unique') || message.includes('duplicate')) {
      return NextResponse.json({ error: 'Campaign code already exists' }, { status: 409 });
    }
    return NextResponse.json({ error: 'Failed to create campaign' }, { status: 500 });
  }
}

export async function PATCH(req: NextRequest) {
  if (!isAuthenticated()) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }
  const { id, is_active } = await req.json();
  await toggleCampaignActive(id, is_active);
  return NextResponse.json({ success: true });
}
