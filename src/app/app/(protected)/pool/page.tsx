import { redirect } from 'next/navigation';
import { getMarketSession } from '@/lib/market-auth';
import {
  getAvailableLeads,
  getTenantCreditBalance,
  getTenantTier,
} from '@/lib/market-pool';
import PoolClient from '@/components/market/PoolClient';

export const dynamic = 'force-dynamic';

export default async function PoolPage() {
  const session = await getMarketSession();
  if (!session) redirect('/app/login');

  const tier = await getTenantTier(session.tenantId);

  const [balance, leads] = await Promise.all([
    getTenantCreditBalance(session.tenantId),
    getAvailableLeads({
      tenantId: session.tenantId,
      isOwner:  session.isOwner,
      tier,
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
