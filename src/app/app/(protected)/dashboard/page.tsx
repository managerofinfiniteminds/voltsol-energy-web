import { redirect } from 'next/navigation';
import { getMarketSession } from '@/lib/market-auth';
import {
  getTenantClaimedLeads,
  getTenantCreditBalance,
  getTenantTier,
} from '@/lib/market-pool';
import DashboardClient from '@/components/market/DashboardClient';

export const dynamic = 'force-dynamic';

export default async function DashboardPage() {
  const session = await getMarketSession();
  if (!session) redirect('/app/login');

  const [tier, balance, claimed] = await Promise.all([
    getTenantTier(session.tenantId),
    getTenantCreditBalance(session.tenantId),
    getTenantClaimedLeads(session.tenantId),
  ]);

  return (
    <div>
      <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
        <div>
          <h1 className="text-2xl font-bold text-white">My Leads</h1>
          <p className="text-slate-400 text-sm mt-0.5">Leads you have claimed</p>
        </div>
        <div className="flex items-center gap-6 text-sm">
          <div className="text-right">
            <p className="text-xs text-slate-500 uppercase tracking-wide">Credits</p>
            <p className="text-2xl font-bold text-amber-400">{balance}</p>
          </div>
          <div className="text-right">
            <p className="text-xs text-slate-500 uppercase tracking-wide">Plan</p>
            <p className="text-sm font-semibold text-white capitalize">
              {tier === 'none' ? 'No plan' : tier}
            </p>
          </div>
        </div>
      </div>

      <DashboardClient initialLeads={claimed} />
    </div>
  );
}
