'use client';

import { useState } from 'react';
import type { PoolLead } from '@/lib/market-pool';

interface ClaimedContact {
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  city: string | null;
  state: string | null;
  owns_home: string | null;
  monthly_bill: string | null;
  claimed_at: string;
  credits_spent: number;
}

interface ClaimResult {
  ok: boolean;
  claim_id?: number;
  credits_spent?: number;
  balance_after?: number;
  lead?: ClaimedContact;
  error?: string;
}

function ScoreBadge({ score }: { score: string }) {
  if (score === 'hot_lead') {
    return (
      <span className="inline-flex items-center gap-1 bg-amber-400/15 text-amber-400 border border-amber-400/30 px-2 py-0.5 rounded text-xs font-bold uppercase tracking-wide">
        Hot
      </span>
    );
  }
  if (score === 'standard') {
    return (
      <span className="inline-flex items-center bg-blue-500/15 text-blue-400 border border-blue-500/30 px-2 py-0.5 rounded text-xs font-semibold uppercase tracking-wide">
        Standard
      </span>
    );
  }
  return (
    <span className="inline-flex items-center bg-slate-700/50 text-slate-400 border border-slate-600/50 px-2 py-0.5 rounded text-xs font-semibold uppercase tracking-wide">
      Standard
    </span>
  );
}

function timeAgo(ts: string): string {
  const diff = Date.now() - new Date(ts).getTime();
  const mins  = Math.floor(diff / 60_000);
  if (mins < 60)  return `${mins}m ago`;
  const hrs = Math.floor(mins / 60);
  if (hrs < 24)   return `${hrs}h ago`;
  return `${Math.floor(hrs / 24)}d ago`;
}

interface LeadCardProps {
  lead: PoolLead;
  balance: number;
  onClaimed: (leadId: number, result: ClaimResult, newBalance: number) => void;
}

function LeadCard({ lead, balance, onClaimed }: LeadCardProps) {
  const [loading,  setLoading]  = useState(false);
  const [error,    setError]    = useState('');
  const [claimed,  setClaimed]  = useState<ClaimedContact | null>(null);

  const isReserved = lead.status === 'owner_reserved';
  const canAfford  = balance >= lead.credit_cost;

  async function handleClaim() {
    setLoading(true);
    setError('');
    try {
      const res  = await fetch('/api/market/claim', {
        method:  'POST',
        headers: { 'Content-Type': 'application/json' },
        body:    JSON.stringify({ lead_id: lead.id }),
      });
      const data: ClaimResult = await res.json();

      if (data.ok && data.lead) {
        setClaimed(data.lead);
        onClaimed(lead.id, data, data.balance_after ?? balance - lead.credit_cost);
      } else {
        setError(data.error || 'Claim failed');
      }
    } catch {
      setError('Network error — please try again');
    } finally {
      setLoading(false);
    }
  }

  if (claimed) {
    return (
      <div className="bg-[#071628] border border-green-600/40 rounded-xl p-5">
        <div className="flex items-center justify-between mb-3">
          <ScoreBadge score={lead.score} />
          <span className="text-green-400 text-xs font-semibold">Claimed — {claimed.credits_spent} cr spent</span>
        </div>
        <p className="text-white font-semibold text-lg">
          {claimed.first_name} {claimed.last_name}
        </p>
        <div className="mt-2 space-y-1 text-sm text-slate-300">
          <div>
            <span className="text-slate-500">Email: </span>
            <a href={`mailto:${claimed.email}`} className="text-blue-400 hover:underline">{claimed.email}</a>
          </div>
          <div>
            <span className="text-slate-500">Phone: </span>
            <a href={`tel:${claimed.phone}`} className="text-blue-400 hover:underline">{claimed.phone}</a>
          </div>
          {claimed.city && (
            <div><span className="text-slate-500">Location: </span>{claimed.city}, {claimed.state}</div>
          )}
          <div><span className="text-slate-500">Home: </span>{claimed.owns_home}</div>
          <div><span className="text-slate-500">Bill: </span>{claimed.monthly_bill}</div>
        </div>
        <p className="text-slate-600 text-xs mt-3">
          Claimed {new Date(claimed.claimed_at).toLocaleString()}
        </p>
      </div>
    );
  }

  return (
    <div className={`bg-[#071628] border ${isReserved ? 'border-yellow-700/30' : 'border-blue-900/40'} rounded-xl p-5 flex flex-col gap-3`}>
      {/* Header row */}
      <div className="flex items-start justify-between gap-2">
        <div className="flex items-center gap-2 flex-wrap">
          <ScoreBadge score={lead.score} />
          {isReserved && (
            <span className="bg-yellow-900/30 text-yellow-500 border border-yellow-700/30 px-2 py-0.5 rounded text-xs">
              Owner reserved
            </span>
          )}
        </div>
        <span className="text-slate-600 text-xs whitespace-nowrap">{timeAgo(lead.created_at)}</span>
      </div>

      {/* Location */}
      <div className="text-slate-300 text-sm">
        {lead.market_city
          ? <><span className="text-white font-medium">{lead.market_city}</span>, {lead.market_region}</>
          : lead.city
            ? <><span className="text-white font-medium">{lead.city}</span>, {lead.state}</>
            : <span className="text-slate-500">Location not specified</span>
        }
      </div>

      {/* Lead signals (no contact info until claimed) */}
      <div className="flex flex-wrap gap-2 text-xs">
        {lead.owns_home && (
          <span className="bg-slate-800 text-slate-300 px-2 py-1 rounded">
            {lead.owns_home}
          </span>
        )}
        {lead.monthly_bill && (
          <span className="bg-slate-800 text-slate-300 px-2 py-1 rounded">
            {lead.monthly_bill}/mo bill
          </span>
        )}
      </div>

      {error && (
        <p className="text-red-400 text-xs">{error}</p>
      )}

      {/* Claim button */}
      <button
        onClick={handleClaim}
        disabled={loading || !canAfford || isReserved}
        className="mt-auto w-full py-2.5 rounded-lg font-semibold text-sm transition-colors
          disabled:opacity-50 disabled:cursor-not-allowed
          bg-amber-400 hover:bg-amber-300 text-[#040D1C]
          disabled:bg-slate-700 disabled:text-slate-500"
      >
        {loading
          ? 'Claiming…'
          : isReserved
            ? 'Owner reserve window active'
            : !canAfford
              ? `Need ${lead.credit_cost} cr (you have ${balance})`
              : `Claim — ${lead.credit_cost} credit${lead.credit_cost !== 1 ? 's' : ''}`
        }
      </button>
    </div>
  );
}

interface PoolClientProps {
  leads:        PoolLead[];
  initialBalance: number;
  tier:         string;
  isOwner:      boolean;
}

export default function PoolClient({ leads: initialLeads, initialBalance, tier, isOwner }: PoolClientProps) {
  const [leads,   setLeads]   = useState<PoolLead[]>(initialLeads);
  const [balance, setBalance] = useState(initialBalance);

  function handleClaimed(leadId: number, _result: ClaimResult, newBalance: number) {
    setBalance(newBalance);
    // Remove the claimed lead from the pool view
    setLeads(prev => prev.filter(l => l.id !== leadId));
  }

  const tierLabel: Record<string, string> = {
    starter: 'Starter',
    pro:     'Pro',
    market:  'Market Leader',
    none:    'No plan',
  };

  return (
    <div>
      {/* Stats bar */}
      <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
        <div>
          <h1 className="text-2xl font-bold text-white">Lead Pool</h1>
          <p className="text-slate-400 text-sm mt-0.5">
            Solar leads in Northern California — claim to unlock contact info
          </p>
        </div>
        <div className="flex items-center gap-4">
          <div className="text-right">
            <p className="text-xs text-slate-500 uppercase tracking-wide">Credits</p>
            <p className="text-2xl font-bold text-amber-400">{balance}</p>
          </div>
          <div className="text-right">
            <p className="text-xs text-slate-500 uppercase tracking-wide">Plan</p>
            <p className="text-sm font-semibold text-white">{tierLabel[tier] ?? tier}</p>
          </div>
        </div>
      </div>

      {/* Owner reserve notice */}
      {!isOwner && (
        <div className="bg-blue-900/20 border border-blue-800/40 rounded-lg px-4 py-3 text-sm text-blue-300 mb-5">
          New leads have a <strong>15-minute owner reserve window</strong> before being released to the public pool.
          Hot leads (amber badge) require a Pro or Market Leader subscription.
        </div>
      )}

      {leads.length === 0 ? (
        <div className="text-center py-20 text-slate-500">
          <p className="text-lg">No leads available right now.</p>
          <p className="text-sm mt-2">Check back soon — new leads are added continuously.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {leads.map(lead => (
            <LeadCard
              key={lead.id}
              lead={lead}
              balance={balance}
              onClaimed={handleClaimed}
            />
          ))}
        </div>
      )}
    </div>
  );
}
