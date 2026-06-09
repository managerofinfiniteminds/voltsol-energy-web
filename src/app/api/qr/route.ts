export const dynamic = 'force-dynamic';
import { NextRequest, NextResponse } from 'next/server';
import QRCode from 'qrcode';

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const code = searchParams.get('code');
  const rep  = searchParams.get('rep');

  if (!code) {
    return NextResponse.json({ error: 'code is required' }, { status: 400 });
  }

  const params = new URLSearchParams({ src: 'door' });
  if (rep) params.set('rep', rep);

  const url = `https://voltsolenergy.com/go/${encodeURIComponent(code.toUpperCase())}?${params.toString()}`;

  const svg = await QRCode.toString(url, {
    type: 'svg',
    margin: 2,
    color: { dark: '#000000', light: '#ffffff' },
  });

  return new NextResponse(svg, {
    headers: {
      'Content-Type': 'image/svg+xml',
      'Cache-Control': 'public, max-age=3600',
    },
  });
}
