'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

const COUNTIES = [
  { name: 'Placer',     utility: 'PG&E' },
  { name: 'Sacramento', utility: 'SMUD / PG&E' },
  { name: 'El Dorado',  utility: 'PG&E' },
  { name: 'Nevada',     utility: 'PG&E' },
  { name: 'Yolo',       utility: 'PG&E / SMUD' },
  { name: 'Solano',     utility: 'PG&E' },
];

export default function OnboardingPage() {
  const [selected,  setSelected]  = useState<string[]>([]);
  const [allNorCal, setAllNorCal] = useState(false);
  const [saving,    setSaving]    = useState(false);
  const [error,     setError]     = useState('');
  const router = useRouter();

  // Load existing prefs
  useEffect(() => {
    fetch('/api/market/tenant/prefs')
      .then(r => r.json())
      .then((data: { geo_counties?: string[] }) => {
        const counties = data.geo_counties ?? [];
        if (counties.length === 0) {
          setAllNorCal(true);
        } else {
          setSelected(counties);
        }
      })
      .catch(() => {});
  }, []);

  function toggleCounty(name: string) {
    setAllNorCal(false);
    setSelected(prev =>
      prev.includes(name) ? prev.filter(c => c !== name) : [...prev, name]
    );
  }

  function toggleAll() {
    setAllNorCal(v => !v);
    if (!allNorCal) setSelected([]);
  }

  async function handleSave() {
    setSaving(true);
    setError('');
    const geo_counties = allNorCal ? [] : selected;

    try {
      const res = await fetch('/api/market/tenant/prefs', {
        method:  'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body:    JSON.stringify({ geo_counties, onboarding_complete: true }),
      });
      if (res.ok) {
        router.push('/app/pool');
        router.refresh();
      } else {
        const data = await res.json().catch(() => ({}));
        setError((data as { error?: string }).error ?? 'Could not save preferences.');
      }
    } catch {
      setError('Connection error. Please try again.');
    } finally {
      setSaving(false);
    }
  }

  const isValid = allNorCal || selected.length > 0;

  return (
    <div className="max-w-2xl mx-auto">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-white">Set Up Your Service Area</h1>
        <p className="text-slate-400 mt-2 text-sm">
          Choose the counties where you install solar. You&apos;ll only see leads from your
          selected counties. You can change this anytime in settings.
        </p>
      </div>

      <div className="bg-[#071628] border border-blue-900/40 rounded-2xl p-6 space-y-3">
        {/* All NorCal option */}
        <label className="flex items-start gap-3 cursor-pointer p-3 rounded-xl hover:bg-blue-900/20 transition">
          <input
            type="checkbox"
            checked={allNorCal}
            onChange={toggleAll}
            className="mt-0.5 w-4 h-4 accent-amber-400"
          />
          <div>
            <span className="text-white font-semibold">All Northern California</span>
            <p className="text-slate-400 text-xs mt-0.5">See leads from all 6 counties we serve</p>
          </div>
        </label>

        <div className="border-t border-blue-900/30 pt-3">
          <p className="text-slate-500 text-xs uppercase tracking-wide mb-3 px-3">Or pick specific counties</p>
          {COUNTIES.map(c => (
            <label
              key={c.name}
              className={`flex items-center justify-between p-3 rounded-xl cursor-pointer hover:bg-blue-900/20 transition ${
                allNorCal ? 'opacity-40 pointer-events-none' : ''
              }`}
            >
              <div className="flex items-center gap-3">
                <input
                  type="checkbox"
                  checked={selected.includes(c.name)}
                  onChange={() => toggleCounty(c.name)}
                  disabled={allNorCal}
                  className="w-4 h-4 accent-amber-400"
                />
                <span className="text-white">{c.name} County</span>
              </div>
              <span className="text-slate-500 text-xs">{c.utility}</span>
            </label>
          ))}
        </div>
      </div>

      {error && (
        <div className="mt-4 bg-red-900/40 border border-red-500 rounded-lg px-4 py-2 text-red-300 text-sm">
          {error}
        </div>
      )}

      <div className="mt-6 flex items-center gap-4">
        <button
          onClick={handleSave}
          disabled={!isValid || saving}
          className="bg-amber-400 hover:bg-amber-300 disabled:opacity-50 text-[#040D1C] font-bold px-8 py-3 rounded-xl transition-colors"
        >
          {saving ? 'Saving…' : 'Save & Continue'}
        </button>
        <a href="/app/pool" className="text-slate-500 hover:text-slate-300 text-sm transition">
          Skip for now
        </a>
      </div>

      <p className="text-slate-600 text-xs mt-6">
        Vertical: Solar (additional verticals coming soon)
      </p>
    </div>
  );
}
