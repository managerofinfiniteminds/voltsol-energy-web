import { redirect } from 'next/navigation';
import { getMarketSession } from '@/lib/market-auth';
import {
  getTenantClaimedLeads,
  getTenantCreditBalance,
  getTenantTier,
} from '@/lib/market-pool';

export const dynamic = 'force-dynamic';

const SCORE_LABEL: Record<string, string> = {
  hot_lead:     'Hot',
  standard:     'Standard',
  low_priority: 'Low',
};

const OUTCOME_LABEL: Record<string, string> = {
  open: 'Open',
  won:  'Won',
  lost: 'Lost',
};

function timeAgo(ts: string): string {
  const diff = Date.now() - new Date(ts).getTime();
  const mins = Math.floor(diff / 60_000);
  if (mins < 60)  return `${mins}m ago`;
  const hrs = Math.floor(mins / 60);
  if (hrs < 24)   return `${hrs}h ago`;
  return `${Math.floor(hrs / 24)}d ago`;
}

export default async function DashboardPage() {
  const session = await getMarketSession();
  if (!session) redirect('/app/login');

  const [tier, balance, claimed] = await Promise.all([
    getTenantTier(session.tenantId),
    getTenantCreditBalance(session.tenantId),
    getTenantClaimedLeads(session.tenantId),
  ]);

  const won  = claimed.filter(l => l.outcome === 'won').length;
  const open = claimed.filter(l => !l.outcome || l.outcome === 'open').length;

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
            <p className="text-sm font-semibold text-white capitalize">{tier === 'none' ? 'No plan' : tier}</p>
          </div>
        </div>
      </div>

      {/* Summary stats */}
      <div className="grid grid-cols-3 gap-4 mb-8">
        {[
          { label: 'Total Claimed', value: claimed.length },
          { label: 'Open',          value: open },
          { label: 'Won',           value: won },
        ].map(s => (
          <div key={s.label} className="bg-[#071628] border border-blue-900/40 rounded-xl p-4 text-center">
            <p className="text-3xl font-bold text-white">{s.value}</p>
            <p className="text-slate-500 text-xs mt-1 uppercase tracking-wide">{s.label}</p>
          </div>
        ))}
      </div>

      {claimed.length === 0 ? (
        <div className="text-center py-16 text-slate-500">
          <p className="text-lg">No claimed leads yet.</p>
          <p className="text-sm mt-2">
            <a href="/app/pool" className="text-amber-400 hover:underline">Browse the lead pool</a> to get started.
          </p>
        </div>
      ) : (
        <div className="overflow-x-auto rounded-xl border border-blue-900/40">
          <table className="w-full text-sm text-left">
            <thead className="bg-[#071628] text-slate-400 text-xs uppercase tracking-wide">
              <tr>
                <th className="px-4 py-3">Contact</th>
                <th className="px-4 py-3">Location</th>
                <th className="px-4 py-3">Score</th>
                <th className="px-4 py-3">Bill</th>
                <th className="px-4 py-3">Claimed</th>
                <th className="px-4 py-3">Outcome</th>
                <th className="px-4 py-3">Cr</th>
              </tr>
            </thead>
            <tbody>
              {claimed.map((lead, i) => (
                <tr
                  key={lead.claim_id}
                  className={`border-t border-blue-900/30 ${i % 2 === 0 ? 'bg-[#040D1C]' : 'bg-[#071628]'}`}
                >
                  <td className="px-4 py-3">
                    <p className="font-medium text-white">{lead.first_name} {lead.last_name}</p>
                    <a href={`mailto:${lead.email}`} className="text-blue-400 hover:underline text-xs">{lead.email}</a>
                    <br />
                    <a href={`tel:${lead.phone}`} className="text-blue-400 hover:underline text-xs">{lead.phone}</a>
                  </td>
                  <td className="px-4 py-3 text-slate-300">
                    {lead.market_city ?? lead.city ?? '—'}
                  </td>
                  <td className="px-4 py-3">
                    <span className={`text-xs font-semibold px-2 py-0.5 rounded ${
                      lead.score === 'hot_lead'
                        ? 'bg-amber-400/15 text-amber-400'
                        : 'bg-blue-500/15 text-blue-400'
                    }`}>
                      {SCORE_LABEL[lead.score] ?? lead.score}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-slate-300">{lead.monthly_bill ?? '—'}</td>
                  <td className="px-4 py-3 text-slate-400 text-xs">{timeAgo(lead.claimed_at)}</td>
                  <td className="px-4 py-3">
                    <span className={`text-xs px-2 py-0.5 rounded ${
                      lead.outcome === 'won'  ? 'bg-green-900/40 text-green-400' :
                      lead.outcome === 'lost' ? 'bg-red-900/40 text-red-400' :
                      'bg-slate-800 text-slate-400'
                    }`}>
                      {OUTCOME_LABEL[lead.outcome ?? 'open'] ?? 'Open'}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-slate-400">{lead.credits_spent}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
