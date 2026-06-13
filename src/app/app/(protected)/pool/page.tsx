import { redirect } from 'next/navigation';
import { getMarketSession } from '@/lib/market-auth';
import {
  getAvailableLeads,
  getTenantCreditBalance,
  getTenantTier,
} from '@/lib/market-pool';
import { sql } from '@/lib/db';
import PoolClient from '@/components/market/PoolClient';

export const dynamic = 'force-dynamic';

async function getTenantGeoCounties(tenantId: number): Promise<string[]> {
  try {
    const rows = await sql`
      SELECT geo_counties FROM marketplace_tenants WHERE id = ${tenantId}
    `;
    return (rows[0]?.geo_counties as string[]) ?? [];
  } catch {
    return [];
  }
}

export default async function PoolPage() {
  const session = await getMarketSession();
  if (!session) redirect('/app/login');

  const tier = await getTenantTier(session.tenantId);
  const geoCounties = await getTenantGeoCounties(session.tenantId);

  const [balance, leads] = await Promise.all([
    getTenantCreditBalance(session.tenantId),
    getAvailableLeads({
      tenantId:    session.tenantId,
      isOwner:     session.isOwner,
      tier,
      geoCounties,
    }),
  ]);

  return (
    <PoolClient
      leads={leads}
      initialBalance={balance}
      tier={tier}
      isOwner={session.isOwner}
    />
  );
}
