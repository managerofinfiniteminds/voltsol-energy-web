'use client';

import { useState, useEffect } from 'react';

const PASSWORD = 'sunpower';

type ChecklistItem = { label: string; done: boolean };
type TimelineDay = { days: string; title: string; items: ChecklistItem[] };

const timeline: TimelineDay[] = [
  {
    days: 'June 6–7',
    title: 'Foundation',
    items: [
      { label: 'DNS cutover: voltsolenergy.com → Vercel (Cloudflare DNS update)', done: false },
      { label: 'Merge feature/lead-capture → main', done: false },
      { label: 'CCPA privacy policy page (basic)', done: false },
    ],
  },
  {
    days: 'June 8–9',
    title: 'Assets Chase',
    items: [
      { label: 'Hugo sends: headshot photo, job site photos, EG4 system install photo', done: false },
      { label: 'Hugo: license number', done: false },
      { label: 'Hugo: set up Google Business Profile', done: false },
      { label: 'Hugo: text every past customer asking for a Google review (HIGHEST ROI — $0 cost)', done: false },
    ],
  },
  {
    days: 'June 10–11',
    title: 'Build Phase 2 Site',
    items: [
      { label: 'New homepage with full 5-beat narrative arc', done: false },
      { label: 'EG4 hero section ("The System That Doesn\'t Need PG&E")', done: false },
      { label: 'Savings calculator (enter monthly PG&E bill → 10-yr savings, breakeven, payment est)', done: false },
      { label: 'PPA warning comparison (25-year cost: PPA vs ownership)', done: false },
    ],
  },
  {
    days: 'June 12–13',
    title: 'Trust & About',
    items: [
      { label: 'Trust signals band (Licensed, Insured, 9 Years, Workman\'s Comp, General Liability)', done: false },
      { label: 'Google Reviews widget', done: false },
      { label: 'About VoltSol section (founder photo + story, VoltSol-forward — since 2017, EG4, shows up on install day)', done: false },
      { label: 'Mobile optimization + performance pass', done: false },
    ],
  },
  {
    days: 'June 14',
    title: 'QA & Final Polish',
    items: [
      { label: 'Full mobile/desktop QA', done: false },
      { label: 'Lead form end-to-end test (submit → email → admin dashboard)', done: false },
      { label: 'All assets in place, copy final', done: false },
      { label: 'Staging review with Wayne + Hugo', done: false },
    ],
  },
  {
    days: 'June 15',
    title: 'LAUNCH DAY',
    items: [
      { label: 'Final deploy to production', done: false },
      { label: 'DNS confirmed live', done: false },
      { label: 'Lead form confirmed working', done: false },
      { label: 'Share link publicly', done: false },
    ],
  },
];

const storyboard = [
  { section: 'HERO', content: '"Your AC Shouldn\'t Cost You $400/Month" — CTA: See If Your Home Qualifies' },
  { section: 'THE PROBLEM', content: 'PG&E rate hikes + NEM 3.0 math + R410A ban + PPA trap warning' },
  { section: 'THE SOLUTION', content: 'EG4 hybrid: panels → unit → free cooling/heat. No grid. No permits. $8–10k vs $30–60k' },
  { section: 'SAVINGS CALCULATOR', content: 'Enter monthly bill → 10-year savings + breakeven + payment estimate' },
  { section: 'PPA WARNING', content: '25-year cost comparison. Ownership wins, always.' },
  { section: 'TRUST BAND', content: 'Licensed, Insured, Workman\'s Comp, General Liability, 9 Years, Google Reviews' },
  { section: 'ABOUT VOLTSOL', content: 'VoltSol-forward with a small founder blurb + photo. In solar since 2017. Found EG4 when PG&E changed the rules again.' },
  { section: 'LEAD CAPTURE', content: 'Qualify form, instant text, Hugo calls within 24hrs' },
];

const blockingAssets = [
  { asset: 'Photo of Hugo (real, professional-ish)', why: 'About section, trust' },
  { asset: 'Job site photos', why: 'Hero, proof sections' },
  { asset: 'EG4 system photo (installed)', why: 'Hero visual' },
  { asset: 'License number', why: 'Trust signals' },
  { asset: 'Google Business Profile', why: 'Reviews widget' },
];

const beats = [
  { num: '1', emotion: 'ANGER', desc: '"You\'re getting ripped off."', sub: 'PG&E rates, NEM 3.0, rigged game' },
  { num: '2', emotion: 'HOPE', desc: '"There\'s a smarter way."', sub: 'EG4 hybrid — nobody else in NorCal doing it' },
  { num: '3', emotion: 'PROOF', desc: '"This actually works."', sub: 'Savings calculator, real math, trust signals' },
  { num: '4', emotion: 'TRUST', desc: '"VoltSol is the local team."', sub: 'Founder story, hands-on, 9 years, mom-and-pop wins' },
  { num: '5', emotion: 'ACTION', desc: '"See if your home qualifies."', sub: 'Lead form, text response, no pressure' },
];

function PasswordGate({ onSuccess }: { onSuccess: () => void }) {
  const [value, setValue] = useState('');
  const [error, setError] = useState(false);
  const [shake, setShake] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (value.toLowerCase() === PASSWORD) {
      sessionStorage.setItem('plan_auth', '1');
      onSuccess();
    } else {
      setError(true);
      setShake(true);
      setTimeout(() => setShake(false), 600);
    }
  }

  return (
    <div className="min-h-screen bg-[#0a0a0a] flex items-center justify-center px-4">
      <div className={`w-full max-w-sm ${shake ? 'animate-bounce' : ''}`}>
        <div className="text-center mb-10">
          <div className="text-5xl mb-3">⚡</div>
          <div className="text-white text-2xl font-bold tracking-tight">VoltSol Energy</div>
          <div className="text-amber-400 text-sm mt-1 tracking-widest uppercase">Internal Plan</div>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="password"
            value={value}
            onChange={e => { setValue(e.target.value); setError(false); }}
            placeholder="Enter password"
            autoFocus
            className={`w-full bg-[#151515] border ${error ? 'border-red-500' : 'border-[#2a2a2a]'} rounded-lg px-4 py-3 text-white placeholder-zinc-600 focus:outline-none focus:border-amber-400 transition-colors text-center tracking-widest`}
          />
          {error && (
            <div className="text-red-400 text-sm text-center">Incorrect password.</div>
          )}
          <button
            type="submit"
            className="w-full bg-amber-400 hover:bg-amber-300 text-black font-bold py-3 rounded-lg transition-colors tracking-wide"
          >
            Enter
          </button>
        </form>
      </div>
    </div>
  );
}

const TOTAL_ITEMS = timeline.reduce((sum, day) => sum + day.items.length, 0);

function initChecks(): boolean[] {
  return new Array(TOTAL_ITEMS).fill(false);
}

export default function PlanPage() {
  const [authed, setAuthed] = useState(false);
  const [checking, setChecking] = useState(true);
  const [checks, setChecks] = useState<boolean[]>(initChecks);

  useEffect(() => {
    if (sessionStorage.getItem('plan_auth') === '1') {
      setAuthed(true);
    }
    const saved = sessionStorage.getItem('plan_checks');
    if (saved) {
      try { setChecks(JSON.parse(saved)); } catch { /* ignore */ }
    }
    setChecking(false);
  }, []);

  function toggleCheck(globalIdx: number) {
    setChecks(prev => {
      const next = [...prev];
      next[globalIdx] = !next[globalIdx];
      sessionStorage.setItem('plan_checks', JSON.stringify(next));
      return next;
    });
  }

  if (checking) {
    return <div className="min-h-screen bg-[#0a0a0a]" />;
  }

  if (!authed) {
    return <PasswordGate onSuccess={() => setAuthed(true)} />;
  }

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white font-sans">
      {/* Print button */}
      <div className="fixed top-4 right-4 z-50 print:hidden">
        <button
          onClick={() => window.print()}
          className="bg-[#1a1a1a] border border-[#2a2a2a] hover:border-amber-400 text-zinc-400 hover:text-amber-400 text-sm px-4 py-2 rounded-lg transition-colors"
        >
          Print / Save PDF
        </button>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-16 space-y-20">

        {/* Header */}
        <div className="text-center space-y-4">
          <div className="text-6xl">⚡</div>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white">
            VoltSol Energy
          </h1>
          <h2 className="text-xl sm:text-2xl font-semibold text-amber-400">
            Website Launch Plan
          </h2>
          <div className="inline-flex items-center gap-2 bg-amber-400/10 border border-amber-400/30 text-amber-400 px-5 py-2 rounded-full text-sm font-bold tracking-widest uppercase">
            Launch Target: June 15, 2026
          </div>
        </div>

        {/* One-sentence truth */}
        <div className="bg-[#111] border border-[#2a2a2a] rounded-2xl p-8">
          <div className="text-xs text-amber-400 font-bold tracking-widest uppercase mb-3">The One-Sentence Truth</div>
          <p className="text-xl sm:text-2xl font-semibold text-white leading-snug">
            Hugo&apos;s customer already hates PG&E.{' '}
            <span className="text-zinc-400 font-normal">
              The website just has to prove he&apos;s the safe, smart way out.
            </span>
          </p>
        </div>

        {/* 5 Emotional Beats */}
        <div>
          <div className="text-xs text-amber-400 font-bold tracking-widest uppercase mb-6">
            The Narrative Arc — 5 Emotional Beats
          </div>
          <div className="space-y-3">
            {beats.map(b => (
              <div key={b.num} className="flex gap-4 items-start bg-[#111] border border-[#1e1e1e] rounded-xl p-5 hover:border-[#2a2a2a] transition-colors">
                <div className="text-3xl font-black text-amber-400/30 leading-none w-8 shrink-0">{b.num}</div>
                <div>
                  <div className="text-amber-400 text-xs font-bold tracking-widest uppercase mb-0.5">{b.emotion}</div>
                  <div className="text-white font-semibold">{b.desc}</div>
                  <div className="text-zinc-500 text-sm mt-0.5">{b.sub}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Timeline */}
        <div>
          <div className="text-xs text-amber-400 font-bold tracking-widest uppercase mb-6">
            Timeline — June 15 Launch
          </div>
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-[19px] top-0 bottom-0 w-px bg-[#2a2a2a] print:hidden" />
            <div className="space-y-8">
              {(() => {
                let globalIdx = 0;
                return timeline.map((day, i) => {
                  const isLaunch = day.days === 'June 15';
                  const dayStartIdx = globalIdx;
                  globalIdx += day.items.length;
                  return (
                    <div key={i} className="flex gap-6">
                      {/* Dot */}
                      <div className={`w-10 h-10 shrink-0 rounded-full flex items-center justify-center text-lg z-10 ${isLaunch ? 'bg-amber-400 text-black' : 'bg-[#1a1a1a] border border-[#2a2a2a] text-zinc-500'}`}>
                        {isLaunch ? '🚀' : ''}
                      </div>
                      <div className="flex-1 pb-2">
                        <div className="flex items-baseline gap-3 mb-3">
                          <span className={`font-bold text-sm ${isLaunch ? 'text-amber-400' : 'text-zinc-300'}`}>{day.days}</span>
                          <span className={`text-xs font-bold tracking-widest uppercase ${isLaunch ? 'text-amber-400' : 'text-zinc-500'}`}>{day.title}</span>
                        </div>
                        <div className="space-y-2">
                          {day.items.map((item, j) => {
                            const idx = dayStartIdx + j;
                            const done = checks[idx] ?? false;
                            return (
                              <button
                                key={j}
                                onClick={() => toggleCheck(idx)}
                                className="flex items-start gap-3 group w-full text-left print:pointer-events-none"
                              >
                                <div className={`mt-0.5 w-4 h-4 shrink-0 rounded border transition-colors ${done ? 'bg-amber-400 border-amber-400' : 'border-[#3a3a3a] group-hover:border-zinc-500'} flex items-center justify-center`}>
                                  {done && (
                                    <svg className="w-3 h-3 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                    </svg>
                                  )}
                                </div>
                                <span className={`text-sm leading-snug ${done ? 'line-through text-zinc-600' : 'text-zinc-300'}`}>
                                  {item.label}
                                </span>
                              </button>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  );
                });
              })()}
            </div>
          </div>
        </div>

        {/* Page Storyboard */}
        <div>
          <div className="text-xs text-amber-400 font-bold tracking-widest uppercase mb-6">
            Page Storyboard
          </div>
          <div className="grid sm:grid-cols-2 gap-3">
            {storyboard.map((s, i) => (
              <div key={i} className="bg-[#111] border border-[#1e1e1e] rounded-xl p-5 hover:border-[#2a2a2a] transition-colors">
                <div className="text-amber-400 text-xs font-bold tracking-widest uppercase mb-2">{s.section}</div>
                <div className="text-zinc-300 text-sm leading-relaxed">{s.content}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Blocking Assets */}
        <div>
          <div className="text-xs text-amber-400 font-bold tracking-widest uppercase mb-6">
            Blocking Assets Needed from Hugo
          </div>
          <div className="bg-[#111] border border-[#2a2a2a] rounded-2xl overflow-hidden">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-[#2a2a2a]">
                  <th className="text-left text-zinc-500 font-medium text-xs tracking-widest uppercase px-6 py-4">Asset</th>
                  <th className="text-left text-zinc-500 font-medium text-xs tracking-widest uppercase px-6 py-4">Status</th>
                  <th className="text-left text-zinc-500 font-medium text-xs tracking-widest uppercase px-6 py-4">Why Needed</th>
                </tr>
              </thead>
              <tbody>
                {blockingAssets.map((row, i) => (
                  <tr key={i} className={`border-b border-[#1a1a1a] last:border-0 hover:bg-[#151515] transition-colors`}>
                    <td className="px-6 py-4 text-zinc-200">{row.asset}</td>
                    <td className="px-6 py-4">
                      <span className="inline-flex items-center gap-1.5 text-red-400 font-semibold">
                        <span className="text-base">❌</span> NEEDED
                      </span>
                    </td>
                    <td className="px-6 py-4 text-zinc-500">{row.why}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* #1 Highest-Leverage Action */}
        <div className="bg-amber-400/5 border border-amber-400/20 rounded-2xl p-8">
          <div className="text-amber-400 text-xs font-bold tracking-widest uppercase mb-4">
            #1 Highest-Leverage Action
          </div>
          <h3 className="text-xl font-bold text-white mb-3">Get Google Reviews.</h3>
          <p className="text-zinc-300 leading-relaxed">
            Text every installed customer asking for one.{' '}
            <span className="text-white font-semibold">Zero reviews = half the close rate.</span>{' '}
            25 reviews at 4.8 stars = website barely matters, he closes on the call.
          </p>
          <div className="mt-5 flex flex-wrap gap-4 text-sm">
            <div className="flex items-center gap-2 text-zinc-400">
              <span className="text-amber-400 font-bold">Cost:</span> $0
            </div>
            <div className="flex items-center gap-2 text-zinc-400">
              <span className="text-amber-400 font-bold">Time:</span> 10 minutes
            </div>
            <div className="flex items-center gap-2 text-zinc-400">
              <span className="text-amber-400 font-bold">ROI:</span> Highest of anything on this list
            </div>
          </div>
        </div>

        {/* Design Benchmark */}
        <div className="bg-[#111] border border-[#1e1e1e] rounded-2xl p-6 flex items-center gap-4">
          <div className="text-3xl">🎯</div>
          <div>
            <div className="text-xs text-zinc-500 font-bold tracking-widest uppercase mb-1">Design Benchmark</div>
            <div className="text-white font-semibold">Sunrun.com</div>
            <div className="text-zinc-400 text-sm">Clean, direct, conviction-forward.</div>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center text-zinc-700 text-xs pb-4">
          VoltSol Energy &mdash; Internal Launch Plan &mdash; Confidential
        </div>
      </div>

      <style>{`
        @media print {
          body { background: white !important; color: black !important; }
          .bg-\\[\\#0a0a0a\\] { background: white !important; }
        }
      `}</style>
    </div>
  );
}
