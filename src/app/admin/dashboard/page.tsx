'use client';

import { useState, useEffect, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

// ─── Types ───────────────────────────────────────────────────────────────────

interface KPIs {
  total_leads:              number;
  hot_leads:                number;
  this_week:                number;
  this_month:               number;
  conversion_rate_pct:      number;
  estimator_completion_pct: number;
}

interface FunnelStep {
  step:          string;
  label:         string;
  count:         number;
  pct_from_prev: number;
}

interface AttrRow {
  source?:        string;
  rep?:           string;
  campaign_code?: string;
  campaign_name?: string;
  utm_source?:    string;
  leads:          number;
  hot_leads:      number;
}

interface TimeSeriesRow {
  day:   string;
  leads: number;
}

interface PipelineRow {
  status: string;
  count:  number;
}

interface Attribution {
  by_source:     AttrRow[];
  by_rep:        AttrRow[];
  by_campaign:   AttrRow[];
  by_utm_source: AttrRow[];
}

interface AnalyticsData {
  kpis:        KPIs;
  funnel:      FunnelStep[];
  attribution: Attribution;
  time_series: TimeSeriesRow[];
  pipeline:    PipelineRow[];
}

// ─── Inline SVG bar chart ────────────────────────────────────────────────────

function SparkBar({ data }: { data: TimeSeriesRow[] }) {
  if (data.length === 0) {
    return <div className="h-24 flex items-center justify-center text-slate-500 text-sm">No data</div>;
  }

  const max = Math.max(...data.map(d => d.leads), 1);
  const width  = 520;
  const height = 80;
  const barW   = Math.floor((width - data.length) / data.length);
  const gap    = 1;

  return (
    <svg
      viewBox={`0 0 ${width} ${height}`}
      className="w-full h-24"
      aria-label="Leads per day chart"
    >
      {data.map((d, i) => {
        const barH = Math.max(Math.round((d.leads / max) * (height - 4)), d.leads > 0 ? 2 : 0);
        const x = i * (barW + gap);
        const y = height - barH;
        return (
          <g key={d.day}>
            <rect
              x={x}
              y={y}
              width={barW}
              height={barH}
              fill="#F59E0B"
              opacity="0.85"
              rx="1"
            />
            <title>{d.day}: {d.leads} lead{d.leads !== 1 ? 's' : ''}</title>
          </g>
        );
      })}
    </svg>
  );
}

// ─── Attribution table ───────────────────────────────────────────────────────

function AttrTable({
  rows,
  keyField,
  keyLabel,
}: {
  rows:     AttrRow[];
  keyField: keyof AttrRow;
  keyLabel: string;
}) {
  if (rows.length === 0) {
    return <p className="text-slate-500 text-sm py-2">No data</p>;
  }

  return (
    <table className="w-full text-sm border-collapse">
      <thead>
        <tr className="border-b border-slate-700">
          <th className="text-left text-xs font-medium text-slate-400 uppercase tracking-wider py-2 pr-4">{keyLabel}</th>
          <th className="text-right text-xs font-medium text-slate-400 uppercase tracking-wider py-2 pr-4">Leads</th>
          <th className="text-right text-xs font-medium text-slate-400 uppercase tracking-wider py-2">Hot</th>
        </tr>
      </thead>
      <tbody>
        {rows.map((row, i) => (
          <tr key={i} className="border-b border-slate-800">
            <td className="py-2 pr-4 text-white font-mono text-xs">{String(row[keyField] ?? '—')}</td>
            <td className="py-2 pr-4 text-right text-slate-200">{row.leads}</td>
            <td className="py-2 text-right text-red-400">{row.hot_leads}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

// ─── Pipeline column ─────────────────────────────────────────────────────────

const PIPELINE_ORDER = ['new', 'contacted', 'qualified', 'estimate_booked', 'converted', 'closed'];
const PIPELINE_LABELS: Record<string, string> = {
  new:             'New',
  contacted:       'Contacted',
  qualified:       'Qualified',
  estimate_booked: 'Est. Booked',
  converted:       'Converted',
  closed:          'Closed',
};
const PIPELINE_COLORS: Record<string, string> = {
  new:             'border-blue-500 bg-blue-900/20',
  contacted:       'border-purple-500 bg-purple-900/20',
  qualified:       'border-amber-500 bg-amber-900/20',
  estimate_booked: 'border-teal-500 bg-teal-900/20',
  converted:       'border-green-500 bg-green-900/20',
  closed:          'border-slate-600 bg-slate-800/40',
};

// ─── Main component ───────────────────────────────────────────────────────────

export default function AnalyticsDashboard() {
  const router = useRouter();
  const [data, setData]     = useState<AnalyticsData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError]   = useState('');

  const loadData = useCallback(async () => {
    setLoading(true);
    setError('');
    const res = await fetch('/api/admin/analytics');
    if (res.status === 401) {
      router.push('/admin/login');
      return;
    }
    if (!res.ok) {
      setError('Failed to load analytics data.');
      setLoading(false);
      return;
    }
    setData(await res.json() as AnalyticsData);
    setLoading(false);
  }, [router]);

  useEffect(() => { loadData(); }, [loadData]);

  async function handleLogout() {
    await fetch('/api/admin/logout', { method: 'POST' });
    router.push('/admin/login');
  }

  return (
    <div className="min-h-screen bg-[#0F172A] text-white">

      {/* Header */}
      <header className="bg-slate-900 border-b border-slate-700 px-4 sm:px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-6">
          <div className="text-xl font-extrabold text-amber-400">VoltSol Analytics</div>
          <nav className="hidden sm:flex items-center gap-4 text-sm">
            <Link href="/admin" className="text-slate-400 hover:text-white transition">Leads</Link>
            <span className="text-amber-400 font-semibold">Dashboard</span>
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <button
            onClick={loadData}
            className="text-sm text-slate-400 hover:text-white transition"
            aria-label="Refresh data"
          >
            Refresh
          </button>
          <button onClick={handleLogout} className="text-sm text-slate-400 hover:text-white transition">Sign Out</button>
        </div>
      </header>

      {/* Mobile nav */}
      <nav className="sm:hidden flex border-b border-slate-700 bg-slate-900">
        <Link href="/admin" className="flex-1 py-3 text-center text-sm text-slate-400 hover:text-white transition">Leads</Link>
        <span className="flex-1 py-3 text-center text-sm text-amber-400 font-semibold border-b-2 border-amber-400">Dashboard</span>
      </nav>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 py-8 space-y-8">

        {loading && (
          <div className="text-center text-slate-400 py-24">Loading analytics...</div>
        )}

        {error && (
          <div className="bg-red-900/40 border border-red-500 rounded-xl px-6 py-4 text-red-300">{error}</div>
        )}

        {!loading && !error && data && (
          <>
            {/* ── KPI Cards ─────────────────────────────────────── */}
            <section>
              <h2 className="text-sm font-semibold text-slate-400 uppercase tracking-widest mb-4">Key Metrics</h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
                {([
                  { label: 'Total Leads',       value: data.kpis.total_leads,              suffix: '',  color: 'text-white' },
                  { label: 'Hot Leads',          value: data.kpis.hot_leads,                suffix: '',  color: 'text-red-400' },
                  { label: 'This Week',          value: data.kpis.this_week,                suffix: '',  color: 'text-amber-400' },
                  { label: 'This Month',         value: data.kpis.this_month,               suffix: '',  color: 'text-amber-300' },
                  { label: 'Conversion Rate',    value: data.kpis.conversion_rate_pct,      suffix: '%', color: 'text-teal-400' },
                  { label: 'Estimator Compl.',   value: data.kpis.estimator_completion_pct, suffix: '%', color: 'text-blue-400' },
                ] as Array<{ label: string; value: number; suffix: string; color: string }>).map(kpi => (
                  <div key={kpi.label} className="bg-slate-900 border border-slate-700 rounded-xl p-4">
                    <div className={`text-2xl font-bold ${kpi.color}`}>{kpi.value}{kpi.suffix}</div>
                    <div className="text-slate-400 text-xs mt-1 leading-tight">{kpi.label}</div>
                  </div>
                ))}
              </div>
            </section>

            {/* ── Funnel ────────────────────────────────────────── */}
            <section className="bg-slate-900 border border-slate-700 rounded-2xl p-6">
              <h2 className="text-lg font-bold text-white mb-5">Conversion Funnel</h2>
              <div className="overflow-x-auto">
                <div className="flex items-end gap-2 min-w-[480px]">
                  {data.funnel.map((step, i) => {
                    const maxCount = Math.max(...data.funnel.map(s => s.count), 1);
                    const barH = Math.max(Math.round((step.count / maxCount) * 120), step.count > 0 ? 8 : 0);
                    return (
                      <div key={step.step} className="flex-1 flex flex-col items-center gap-1">
                        {i > 0 && (
                          <span className="text-xs text-slate-500 mb-1">{step.pct_from_prev}%</span>
                        )}
                        {i === 0 && <span className="text-xs text-transparent mb-1">0</span>}
                        <div
                          className="w-full rounded-t-md bg-amber-500/80 transition-all"
                          style={{ height: `${barH}px` }}
                        />
                        <div className="text-center">
                          <div className="text-white font-bold text-sm">{step.count.toLocaleString()}</div>
                          <div className="text-slate-400 text-xs leading-tight mt-0.5">{step.label}</div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </section>

            {/* ── Time Series + Pipeline ────────────────────────── */}
            <div className="grid lg:grid-cols-2 gap-6">
              {/* Time series */}
              <section className="bg-slate-900 border border-slate-700 rounded-2xl p-6">
                <h2 className="text-lg font-bold text-white mb-1">Leads — Last 30 Days</h2>
                <p className="text-slate-400 text-xs mb-4">Each bar = one day</p>
                <SparkBar data={data.time_series} />
                {data.time_series.length > 0 && (
                  <div className="flex justify-between text-xs text-slate-500 mt-1">
                    <span>{data.time_series[0].day}</span>
                    <span>{data.time_series[data.time_series.length - 1].day}</span>
                  </div>
                )}
              </section>

              {/* Pipeline */}
              <section className="bg-slate-900 border border-slate-700 rounded-2xl p-6">
                <h2 className="text-lg font-bold text-white mb-4">Lead Pipeline</h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {PIPELINE_ORDER.map(status => {
                    const row = data.pipeline.find(r => r.status === status);
                    const count = row?.count ?? 0;
                    return (
                      <div
                        key={status}
                        className={`rounded-xl border p-3 ${PIPELINE_COLORS[status] ?? 'border-slate-700 bg-slate-800/40'}`}
                      >
                        <div className="text-xl font-bold text-white">{count}</div>
                        <div className="text-xs text-slate-400 mt-0.5">{PIPELINE_LABELS[status] ?? status}</div>
                      </div>
                    );
                  })}
                  {/* Catch-all for unlisted statuses */}
                  {data.pipeline
                    .filter(r => !PIPELINE_ORDER.includes(r.status))
                    .map(r => (
                      <div key={r.status} className="rounded-xl border border-slate-600 bg-slate-800/40 p-3">
                        <div className="text-xl font-bold text-white">{r.count}</div>
                        <div className="text-xs text-slate-400 mt-0.5 capitalize">{r.status}</div>
                      </div>
                    ))}
                </div>
              </section>
            </div>

            {/* ── Attribution ───────────────────────────────────── */}
            <section className="bg-slate-900 border border-slate-700 rounded-2xl p-6">
              <h2 className="text-lg font-bold text-white mb-5">Attribution — Which channel produces leads?</h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                <div>
                  <h3 className="text-xs font-semibold text-amber-400 uppercase tracking-widest mb-3">By Source</h3>
                  <AttrTable rows={data.attribution.by_source} keyField="source" keyLabel="Source" />
                </div>
                <div>
                  <h3 className="text-xs font-semibold text-amber-400 uppercase tracking-widest mb-3">By Rep</h3>
                  <AttrTable rows={data.attribution.by_rep} keyField="rep" keyLabel="Rep" />
                </div>
                <div>
                  <h3 className="text-xs font-semibold text-amber-400 uppercase tracking-widest mb-3">By Campaign</h3>
                  <AttrTable rows={data.attribution.by_campaign} keyField="campaign_code" keyLabel="Campaign" />
                </div>
                <div>
                  <h3 className="text-xs font-semibold text-amber-400 uppercase tracking-widest mb-3">By UTM Source</h3>
                  <AttrTable rows={data.attribution.by_utm_source} keyField="utm_source" keyLabel="UTM Source" />
                </div>
              </div>
            </section>
          </>
        )}
      </main>
    </div>
  );
}
