'use client';

import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';

interface Plan {
  id: number;
  name: string;
  tier: string;
  monthly_price_cents: number;
  monthly_credits: number;
  pack_credits: number;
  pack_price_cents: number;
  max_markets: number;
  stripe_price_id: string | null;
}

interface BillingInfo {
  balance: number;
  tier: string;
  subscriptionStatus: string | null;
  currentPeriodEnd: string | null;
  plans: Plan[];
  packs: Plan[];
  stripeConfigured: boolean;
}

export const dynamic = 'force-dynamic';

export default function BillingPage() {
  const searchParams = useSearchParams();
  const [info, setInfo] = useState<BillingInfo | null>(null);
  const [loading, setLoading] = useState(true);
  const [actionLoading, setActionLoading] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const successMsg = searchParams.get('success') ? 'Payment successful! Your credits have been updated.' : null;
  const cancelMsg  = searchParams.get('canceled') ? 'Checkout canceled — no charge was made.' : null;

  useEffect(() => {
    fetch('/api/market/billing')
      .then(r => r.json())
      .then(setInfo)
      .catch(() => setError('Failed to load billing info'))
      .finally(() => setLoading(false));
  }, []);

  async function startCheckout(type: 'subscription' | 'pack', planId: number) {
    setActionLoading(`${type}-${planId}`);
    setError(null);
    try {
      const res = await fetch('/api/market/stripe/checkout', {
        method:  'POST',
        headers: { 'Content-Type': 'application/json' },
        body:    JSON.stringify({ type, planId }),
      });
      const data = await res.json();
      if (!res.ok) {
        setError(data.error ?? 'Checkout failed');
        return;
      }
      if (data.url) window.location.href = data.url;
    } catch {
      setError('Network error — please try again');
    } finally {
      setActionLoading(null);
    }
  }

  async function openPortal() {
    setActionLoading('portal');
    setError(null);
    try {
      const res = await fetch('/api/market/stripe/portal', { method: 'POST' });
      const data = await res.json();
      if (!res.ok) {
        setError(data.error ?? 'Could not open billing portal');
        return;
      }
      if (data.url) window.location.href = data.url;
    } catch {
      setError('Network error — please try again');
    } finally {
      setActionLoading(null);
    }
  }

  if (loading) {
    return (
      <div className="text-slate-400 text-sm py-12 text-center">Loading billing info…</div>
    );
  }

  if (!info) {
    return (
      <div className="text-red-400 text-sm py-12 text-center">{error ?? 'Unknown error'}</div>
    );
  }

  const tierLabel: Record<string, string> = {
    starter: 'Starter',
    pro:     'Pro',
    market:  'Market Leader',
    none:    'No active plan',
  };

  const tierColor: Record<string, string> = {
    starter: 'text-slate-300 border-slate-600',
    pro:     'text-blue-300 border-blue-700',
    market:  'text-amber-400 border-amber-600',
    none:    'text-slate-500 border-slate-700',
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-white">Billing &amp; Credits</h1>
        {info.subscriptionStatus && (
          <button
            onClick={openPortal}
            disabled={actionLoading === 'portal' || !info.stripeConfigured}
            className="text-sm bg-slate-700 hover:bg-slate-600 disabled:opacity-50 text-slate-200 px-4 py-2 rounded-lg transition"
          >
            {actionLoading === 'portal' ? 'Opening…' : 'Manage Billing'}
          </button>
        )}
      </div>

      {/* Alerts */}
      {successMsg && (
        <div className="bg-green-900/30 border border-green-700/40 text-green-300 rounded-lg px-4 py-3 text-sm">
          {successMsg}
        </div>
      )}
      {cancelMsg && (
        <div className="bg-slate-800 border border-slate-600/40 text-slate-400 rounded-lg px-4 py-3 text-sm">
          {cancelMsg}
        </div>
      )}
      {error && (
        <div className="bg-red-900/30 border border-red-700/40 text-red-300 rounded-lg px-4 py-3 text-sm">
          {error}
        </div>
      )}
      {!info.stripeConfigured && (
        <div className="bg-amber-900/20 border border-amber-700/40 text-amber-300 rounded-lg px-4 py-3 text-sm">
          Stripe is not yet configured on this server. Subscribe buttons are disabled until Stripe keys are set.
        </div>
      )}

      {/* Current status */}
      <div className="bg-[#071628] border border-blue-900/40 rounded-xl p-6 flex flex-col sm:flex-row sm:items-center gap-6">
        <div className="flex-1">
          <p className="text-slate-400 text-sm mb-1">Current plan</p>
          <p className={`text-xl font-bold border rounded-full px-3 py-0.5 inline-block ${tierColor[info.tier] ?? tierColor.none}`}>
            {tierLabel[info.tier] ?? info.tier}
          </p>
          {info.currentPeriodEnd && (
            <p className="text-slate-500 text-xs mt-1">
              Renews {new Date(info.currentPeriodEnd).toLocaleDateString()}
            </p>
          )}
        </div>
        <div className="flex-1 text-center sm:text-right">
          <p className="text-slate-400 text-sm mb-1">Credit balance</p>
          <p className="text-4xl font-extrabold text-amber-400">{info.balance}</p>
          <p className="text-slate-500 text-xs">credits remaining</p>
        </div>
      </div>

      {/* Subscription plans */}
      <section>
        <h2 className="text-lg font-semibold text-white mb-4">Subscription Plans</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {info.plans.map(plan => {
            const isCurrent = plan.tier === info.tier;
            const key = `subscription-${plan.id}`;
            return (
              <div
                key={plan.id}
                className={`bg-[#071628] border rounded-xl p-5 flex flex-col gap-3 ${isCurrent ? 'border-amber-500/50' : 'border-blue-900/40'}`}
              >
                {isCurrent && (
                  <span className="self-start text-xs font-semibold bg-amber-400/10 text-amber-400 border border-amber-400/30 px-2 py-0.5 rounded-full">
                    Current
                  </span>
                )}
                <p className="text-lg font-bold text-white">{plan.name}</p>
                <p className="text-2xl font-extrabold text-white">
                  ${(plan.monthly_price_cents / 100).toFixed(0)}
                  <span className="text-slate-400 font-normal text-sm">/mo</span>
                </p>
                <ul className="text-sm text-slate-300 space-y-1 flex-1">
                  <li>{plan.monthly_credits} credits / month</li>
                  <li>Up to {plan.max_markets} market{plan.max_markets !== 1 ? 's' : ''}</li>
                  {plan.tier === 'pro' || plan.tier === 'market' ? (
                    <li className="text-blue-300">Hot lead access</li>
                  ) : null}
                  {plan.tier === 'market' ? (
                    <li className="text-amber-300">First-pick priority</li>
                  ) : null}
                </ul>
                <button
                  onClick={() => startCheckout('subscription', plan.id)}
                  disabled={isCurrent || actionLoading === key || !info.stripeConfigured}
                  className={`w-full py-2 rounded-lg text-sm font-semibold transition ${
                    isCurrent
                      ? 'bg-slate-700 text-slate-500 cursor-default'
                      : 'bg-blue-600 hover:bg-blue-500 disabled:opacity-50 text-white'
                  }`}
                >
                  {isCurrent ? 'Active' : actionLoading === key ? 'Redirecting…' : 'Subscribe'}
                </button>
              </div>
            );
          })}
        </div>
      </section>

      {/* Credit packs */}
      <section>
        <h2 className="text-lg font-semibold text-white mb-4">Credit Packs</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {info.packs.map(pack => {
            const key = `pack-${pack.id}`;
            return (
              <div key={pack.id} className="bg-[#071628] border border-blue-900/40 rounded-xl p-5 flex flex-col gap-3">
                <p className="text-lg font-bold text-white">{pack.name}</p>
                <p className="text-2xl font-extrabold text-amber-400">
                  {pack.pack_credits}
                  <span className="text-slate-400 font-normal text-sm"> credits</span>
                </p>
                <p className="text-slate-300 text-sm">${(pack.pack_price_cents / 100).toFixed(0)} one-time</p>
                <p className="text-slate-500 text-xs flex-1">
                  ${((pack.pack_price_cents / 100) / pack.pack_credits).toFixed(2)} per credit
                </p>
                <button
                  onClick={() => startCheckout('pack', pack.id)}
                  disabled={actionLoading === key || !info.stripeConfigured}
                  className="w-full py-2 rounded-lg text-sm font-semibold bg-amber-500 hover:bg-amber-400 disabled:opacity-50 text-white transition"
                >
                  {actionLoading === key ? 'Redirecting…' : 'Buy Pack'}
                </button>
              </div>
            );
          })}
        </div>
        <p className="text-slate-500 text-xs mt-3">
          Credit packs never expire and stack with your monthly allocation.
        </p>
      </section>
    </div>
  );
}
