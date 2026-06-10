'use client';

import { useCallback, useEffect, useMemo, useState } from 'react';
import { useRouter } from 'next/navigation';

// ─── Types ───────────────────────────────────────────────────────────────────

interface Slot {
  id: string;
  slot_date: string;
  start_time: string;
  end_time: string;
  label: string;
  max_bookings: number;
  current_bookings: number;
  is_available: boolean;
  notes: string | null;
}

interface Appointment {
  id: string;
  slot_id: string | null;
  first_name: string;
  last_name: string;
  email: string;
  phone: string | null;
  address: string | null;
  notes: string | null;
  status: string;
  slot_date: string | null;
  start_time: string | null;
  end_time: string | null;
}

const SLOT_LABELS = ['Free Estimate', 'Follow-up', 'Installation Check'];
const WEEKDAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const APPT_STATUSES = ['confirmed', 'completed', 'no_show', 'cancelled'];

// ─── Helpers ─────────────────────────────────────────────────────────────────

function pad(n: number): string {
  return String(n).padStart(2, '0');
}

function isoDate(year: number, month: number, day: number): string {
  return `${year}-${pad(month + 1)}-${pad(day)}`;
}

function dateKey(value: string | null): string {
  return value ? String(value).slice(0, 10) : '';
}

function formatTime(time: string): string {
  const [hRaw, mRaw] = time.split(':');
  const h = Number(hRaw);
  const ampm = h >= 12 ? 'PM' : 'AM';
  const h12 = h % 12 === 0 ? 12 : h % 12;
  return `${h12}:${mRaw} ${ampm}`;
}

function formatLongDate(iso: string): string {
  const [y, m, d] = iso.split('-').map(Number);
  return new Date(Date.UTC(y, m - 1, d)).toLocaleDateString('en-US', {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
    timeZone: 'UTC',
  });
}

const inputClass =
  'w-full rounded-lg border border-slate-700 bg-slate-800 px-3 py-2 text-sm text-white focus:border-amber-400 focus:outline-none';

// ─── Add slot form ───────────────────────────────────────────────────────────

function AddSlotForm({
  date,
  onCreated,
}: {
  date: string;
  onCreated: () => void;
}) {
  const [start, setStart] = useState('09:00');
  const [end, setEnd] = useState('10:00');
  const [label, setLabel] = useState(SLOT_LABELS[0]);
  const [maxBookings, setMaxBookings] = useState(1);
  const [notes, setNotes] = useState('');
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState('');

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSaving(true);
    setError('');
    const res = await fetch('/api/admin/slots', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        slot_date: date,
        start_time: start,
        end_time: end,
        label,
        max_bookings: maxBookings,
        notes: notes.trim() || undefined,
      }),
    });
    setSaving(false);
    if (!res.ok) {
      setError('Failed to create slot.');
      return;
    }
    setNotes('');
    onCreated();
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-3 rounded-xl border border-slate-700 bg-slate-800/50 p-4">
      <div className="text-sm font-semibold text-white">Add slot</div>
      <div className="grid grid-cols-2 gap-3">
        <label className="block text-xs text-slate-400">
          Start
          <input type="time" required value={start} onChange={e => setStart(e.target.value)} className={`mt-1 ${inputClass}`} />
        </label>
        <label className="block text-xs text-slate-400">
          End
          <input type="time" required value={end} onChange={e => setEnd(e.target.value)} className={`mt-1 ${inputClass}`} />
        </label>
      </div>
      <div className="grid grid-cols-2 gap-3">
        <label className="block text-xs text-slate-400">
          Label
          <select value={label} onChange={e => setLabel(e.target.value)} className={`mt-1 ${inputClass}`}>
            {SLOT_LABELS.map(l => (
              <option key={l} value={l}>{l}</option>
            ))}
          </select>
        </label>
        <label className="block text-xs text-slate-400">
          Max bookings
          <input
            type="number"
            min={1}
            max={20}
            value={maxBookings}
            onChange={e => setMaxBookings(Number(e.target.value))}
            className={`mt-1 ${inputClass}`}
          />
        </label>
      </div>
      <label className="block text-xs text-slate-400">
        Notes
        <input value={notes} onChange={e => setNotes(e.target.value)} maxLength={2000} className={`mt-1 ${inputClass}`} />
      </label>
      {error && <p className="text-xs text-red-400">{error}</p>}
      <button
        type="submit"
        disabled={saving}
        className="w-full rounded-lg bg-amber-500 px-4 py-2 text-sm font-bold text-slate-900 transition hover:bg-amber-400 disabled:opacity-50"
      >
        {saving ? 'Adding...' : 'Add Slot'}
      </button>
    </form>
  );
}

// ─── Add week of slots helper ────────────────────────────────────────────────

function AddWeekForm({ onCreated }: { onCreated: () => void }) {
  const [open, setOpen] = useState(false);
  const [days, setDays] = useState<boolean[]>([false, true, true, true, true, true, false]);
  const [start, setStart] = useState('09:00');
  const [end, setEnd] = useState('10:00');
  const [label, setLabel] = useState(SLOT_LABELS[0]);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState('');

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError('');
    const slots: Array<{ slot_date: string; start_time: string; end_time: string; label: string }> = [];
    const now = new Date();
    for (let i = 1; i <= 14; i++) {
      const d = new Date(now.getFullYear(), now.getMonth(), now.getDate() + i);
      if (days[d.getDay()]) {
        slots.push({
          slot_date: isoDate(d.getFullYear(), d.getMonth(), d.getDate()),
          start_time: start,
          end_time: end,
          label,
        });
      }
    }
    if (slots.length === 0) {
      setError('Pick at least one day of the week.');
      return;
    }
    setSaving(true);
    const res = await fetch('/api/admin/slots', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ slots }),
    });
    setSaving(false);
    if (!res.ok) {
      setError('Failed to create slots.');
      return;
    }
    setOpen(false);
    onCreated();
  }

  if (!open) {
    return (
      <button
        onClick={() => setOpen(true)}
        className="rounded-lg border border-amber-500/50 px-4 py-2 text-sm font-semibold text-amber-400 transition hover:bg-amber-500/10"
      >
        + Add Week of Slots
      </button>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="w-full space-y-3 rounded-xl border border-slate-700 bg-slate-900 p-4">
      <div className="flex items-center justify-between">
        <div className="text-sm font-semibold text-white">Add slots for the next 2 weeks</div>
        <button type="button" onClick={() => setOpen(false)} className="text-sm text-slate-400 hover:text-white">Close</button>
      </div>
      <div className="flex flex-wrap gap-2">
        {WEEKDAYS.map((d, i) => (
          <button
            key={d}
            type="button"
            onClick={() => setDays(prev => prev.map((v, j) => (j === i ? !v : v)))}
            className={
              days[i]
                ? 'rounded-lg bg-amber-500 px-3 py-1.5 text-xs font-bold text-slate-900'
                : 'rounded-lg border border-slate-700 px-3 py-1.5 text-xs text-slate-400 hover:text-white'
            }
          >
            {d}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
        <label className="block text-xs text-slate-400">
          Start
          <input type="time" required value={start} onChange={e => setStart(e.target.value)} className={`mt-1 ${inputClass}`} />
        </label>
        <label className="block text-xs text-slate-400">
          End
          <input type="time" required value={end} onChange={e => setEnd(e.target.value)} className={`mt-1 ${inputClass}`} />
        </label>
        <label className="block text-xs text-slate-400 col-span-2 sm:col-span-1">
          Label
          <select value={label} onChange={e => setLabel(e.target.value)} className={`mt-1 ${inputClass}`}>
            {SLOT_LABELS.map(l => (
              <option key={l} value={l}>{l}</option>
            ))}
          </select>
        </label>
      </div>
      {error && <p className="text-xs text-red-400">{error}</p>}
      <button
        type="submit"
        disabled={saving}
        className="rounded-lg bg-amber-500 px-4 py-2 text-sm font-bold text-slate-900 transition hover:bg-amber-400 disabled:opacity-50"
      >
        {saving ? 'Creating...' : 'Create Slots'}
      </button>
    </form>
  );
}

// ─── Main page ───────────────────────────────────────────────────────────────

export default function SchedulePage() {
  const router = useRouter();
  const today = useMemo(() => new Date(), []);
  const [viewYear, setViewYear] = useState(today.getFullYear());
  const [viewMonth, setViewMonth] = useState(today.getMonth());
  const [slots, setSlots] = useState<Slot[]>([]);
  const [appointments, setAppointments] = useState<Appointment[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);

  const monthParam = `${viewYear}-${pad(viewMonth + 1)}`;

  // silent=true refreshes data in place without blanking the UI —
  // used after slot/appointment mutations so the calendar and open
  // day panel update immediately.
  const loadData = useCallback(async (silent = false) => {
    if (!silent) setLoading(true);
    setError('');
    const [slotsRes, apptsRes] = await Promise.all([
      fetch(`/api/admin/slots?month=${monthParam}`, { cache: 'no-store' }),
      fetch(`/api/admin/appointments?month=${monthParam}`, { cache: 'no-store' }),
    ]);
    if (slotsRes.status === 401 || apptsRes.status === 401) {
      router.push('/admin/login');
      return;
    }
    if (!slotsRes.ok || !apptsRes.ok) {
      setError('Failed to load schedule data.');
      setLoading(false);
      return;
    }
    setSlots((await slotsRes.json()) as Slot[]);
    setAppointments((await apptsRes.json()) as Appointment[]);
    setLoading(false);
  }, [monthParam, router]);

  useEffect(() => {
    loadData();
  }, [loadData]);

  const slotsByDate = useMemo(() => {
    const map = new Map<string, Slot[]>();
    for (const s of slots) {
      const key = dateKey(s.slot_date);
      map.set(key, [...(map.get(key) ?? []), s]);
    }
    return map;
  }, [slots]);

  const apptsByDate = useMemo(() => {
    const map = new Map<string, Appointment[]>();
    for (const a of appointments) {
      const key = dateKey(a.slot_date);
      if (!key) continue;
      map.set(key, [...(map.get(key) ?? []), a]);
    }
    return map;
  }, [appointments]);

  function changeMonth(delta: number) {
    let m = viewMonth + delta;
    let y = viewYear;
    if (m < 0) { m = 11; y -= 1; }
    else if (m > 11) { m = 0; y += 1; }
    setViewYear(y);
    setViewMonth(m);
    setSelectedDate(null);
  }

  async function patchSlot(id: string, body: Record<string, unknown>) {
    setBusy(true);
    await fetch(`/api/admin/slots/${id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    });
    await loadData(true);
    setBusy(false);
  }

  async function deleteSlot(id: string) {
    setBusy(true);
    const res = await fetch(`/api/admin/slots/${id}`, { method: 'DELETE' });
    if (!res.ok) {
      const data = (await res.json()) as { error?: string };
      alert(data.error || 'Failed to delete slot.');
    }
    await loadData(true);
    setBusy(false);
  }

  async function patchAppointment(id: string, status: string) {
    setBusy(true);
    await fetch(`/api/admin/appointments/${id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ status }),
    });
    await loadData(true);
    setBusy(false);
  }

  // Calendar grid math
  const firstDow = new Date(viewYear, viewMonth, 1).getDay();
  const daysInMonth = new Date(viewYear, viewMonth + 1, 0).getDate();
  const monthLabel = new Date(viewYear, viewMonth, 1).toLocaleDateString('en-US', {
    month: 'long',
    year: 'numeric',
  });

  const daySlots = selectedDate ? (slotsByDate.get(selectedDate) ?? []) : [];
  const dayAppts = selectedDate ? (apptsByDate.get(selectedDate) ?? []) : [];

  return (
    <div className="text-white">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 py-8 space-y-6">
        {/* Toolbar */}
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <button
              onClick={() => changeMonth(-1)}
              aria-label="Previous month"
              className="rounded-lg border border-slate-700 px-3 py-1.5 text-slate-300 hover:text-white"
            >
              &larr;
            </button>
            <h1 className="text-lg font-bold sm:text-xl">{monthLabel}</h1>
            <button
              onClick={() => changeMonth(1)}
              aria-label="Next month"
              className="rounded-lg border border-slate-700 px-3 py-1.5 text-slate-300 hover:text-white"
            >
              &rarr;
            </button>
          </div>
          <AddWeekForm onCreated={() => loadData(true)} />
        </div>

        {error && (
          <div className="bg-red-900/40 border border-red-500 rounded-xl px-6 py-4 text-red-300">{error}</div>
        )}
        {loading && <div className="text-center text-slate-400 py-12">Loading schedule...</div>}

        {!loading && !error && (
          <div className="grid gap-6 lg:grid-cols-[1fr_360px]">
            {/* Calendar */}
            <section className="bg-slate-900 border border-slate-700 rounded-2xl p-3 sm:p-5">
              <div className="grid grid-cols-7 gap-1">
                {WEEKDAYS.map(d => (
                  <div key={d} className="py-2 text-center text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-slate-500">
                    {d}
                  </div>
                ))}
                {Array.from({ length: firstDow }).map((_, i) => (
                  <div key={`pad-${i}`} />
                ))}
                {Array.from({ length: daysInMonth }).map((_, i) => {
                  const day = i + 1;
                  const iso = isoDate(viewYear, viewMonth, day);
                  const ds = slotsByDate.get(iso) ?? [];
                  const da = (apptsByDate.get(iso) ?? []).filter(a => a.status === 'confirmed');
                  const openSlots = ds.filter(s => s.is_available && s.current_bookings < s.max_bookings).length;
                  const isSelected = selectedDate === iso;

                  let tone = 'border-slate-800 bg-slate-800/30 text-slate-500';
                  if (ds.length > 0) {
                    if (openSlots === 0) tone = 'border-red-500/40 bg-red-900/20 text-white';
                    else if (da.length > 0) tone = 'border-amber-500/40 bg-amber-900/20 text-white';
                    else tone = 'border-green-500/40 bg-green-900/20 text-white';
                  }
                  return (
                    <button
                      key={iso}
                      onClick={() => setSelectedDate(isSelected ? null : iso)}
                      aria-pressed={isSelected}
                      className={`min-h-[58px] sm:min-h-[72px] rounded-lg border p-1 sm:p-2 text-left transition ${tone} ${isSelected ? 'ring-2 ring-amber-400' : 'hover:border-slate-500'}`}
                    >
                      <div className="text-xs sm:text-sm font-semibold">{day}</div>
                      {ds.length > 0 && (
                        <div className="mt-0.5 space-y-0.5 text-[9px] sm:text-[11px] leading-tight">
                          <div className="text-green-400">{openSlots} open</div>
                          {da.length > 0 && <div className="text-amber-400">{da.length} booked</div>}
                        </div>
                      )}
                    </button>
                  );
                })}
              </div>
              <div className="mt-4 flex flex-wrap gap-4 text-xs text-slate-400">
                <span className="flex items-center gap-1.5"><span className="h-2.5 w-2.5 rounded-sm bg-green-500/60" /> Available</span>
                <span className="flex items-center gap-1.5"><span className="h-2.5 w-2.5 rounded-sm bg-amber-500/60" /> Partially booked</span>
                <span className="flex items-center gap-1.5"><span className="h-2.5 w-2.5 rounded-sm bg-red-500/60" /> Full / unavailable</span>
              </div>
            </section>

            {/* Day panel */}
            <section className="bg-slate-900 border border-slate-700 rounded-2xl p-5 space-y-5">
              {!selectedDate ? (
                <p className="text-sm text-slate-400">Tap a day to manage its slots and appointments.</p>
              ) : (
                <>
                  <h2 className="font-bold text-white">{formatLongDate(selectedDate)}</h2>

                  {/* Slots */}
                  <div>
                    <h3 className="text-xs font-semibold uppercase tracking-widest text-amber-400 mb-3">Slots</h3>
                    {daySlots.length === 0 && <p className="text-sm text-slate-500">No slots yet.</p>}
                    <div className="space-y-2">
                      {daySlots.map(slot => (
                        <div key={slot.id} className="rounded-xl border border-slate-700 bg-slate-800/50 p-3">
                          <div className="flex items-center justify-between gap-2">
                            <div>
                              <div className="text-sm font-semibold text-white">
                                {formatTime(slot.start_time)} &ndash; {formatTime(slot.end_time)}
                              </div>
                              <div className="text-xs text-slate-400">
                                {slot.label} &middot; {slot.current_bookings}/{slot.max_bookings} booked
                                {!slot.is_available && ' · unavailable'}
                              </div>
                              {slot.notes && <div className="text-xs text-slate-500 mt-1">{slot.notes}</div>}
                            </div>
                            <div className="flex shrink-0 flex-col gap-1.5">
                              <button
                                disabled={busy}
                                onClick={() => patchSlot(slot.id, { is_available: !slot.is_available })}
                                className="rounded border border-slate-600 px-2 py-1 text-[11px] text-slate-300 hover:text-white disabled:opacity-50"
                              >
                                {slot.is_available ? 'Disable' : 'Enable'}
                              </button>
                              {slot.current_bookings === 0 && (
                                <button
                                  disabled={busy}
                                  onClick={() => deleteSlot(slot.id)}
                                  className="rounded border border-red-500/40 px-2 py-1 text-[11px] text-red-400 hover:bg-red-950/30 disabled:opacity-50"
                                >
                                  Delete
                                </button>
                              )}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="mt-3">
                      <AddSlotForm date={selectedDate} onCreated={() => loadData(true)} />
                    </div>
                  </div>

                  {/* Appointments */}
                  <div>
                    <h3 className="text-xs font-semibold uppercase tracking-widest text-amber-400 mb-3">Appointments</h3>
                    {dayAppts.length === 0 && <p className="text-sm text-slate-500">No appointments.</p>}
                    <div className="space-y-2">
                      {dayAppts.map(appt => (
                        <div key={appt.id} className="rounded-xl border border-slate-700 bg-slate-800/50 p-3">
                          <div className="text-sm font-semibold text-white">
                            {appt.first_name} {appt.last_name}
                            {appt.start_time && (
                              <span className="ml-2 text-xs font-normal text-slate-400">
                                {formatTime(appt.start_time)}
                              </span>
                            )}
                          </div>
                          {appt.address && <div className="text-xs text-slate-400 mt-0.5">{appt.address}</div>}
                          {appt.phone && (
                            <a href={`tel:${appt.phone.replace(/\D/g, '')}`} className="text-xs text-amber-400 hover:underline">
                              {appt.phone}
                            </a>
                          )}
                          {appt.notes && <div className="text-xs text-slate-500 mt-1">{appt.notes}</div>}
                          <div className="mt-2">
                            <select
                              value={appt.status}
                              disabled={busy}
                              onChange={e => patchAppointment(appt.id, e.target.value)}
                              className="rounded-lg border border-slate-700 bg-slate-800 px-2 py-1 text-xs text-white focus:border-amber-400 focus:outline-none disabled:opacity-50"
                            >
                              {APPT_STATUSES.map(s => (
                                <option key={s} value={s}>{s.replace('_', ' ')}</option>
                              ))}
                            </select>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </>
              )}
            </section>
          </div>
        )}
      </main>
    </div>
  );
}
