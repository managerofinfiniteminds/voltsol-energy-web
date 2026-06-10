"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import { ChevronLeft, ChevronRight, Check, Clock, CalendarDays, Mail } from "lucide-react";

interface Slot {
  id: string;
  slot_date: string; // YYYY-MM-DD
  start_time: string; // HH:MM:SS
  end_time: string;
  label: string;
}

interface FormState {
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  address: string;
  notes: string;
  website: string; // honeypot
}

const EMPTY_FORM: FormState = {
  first_name: "",
  last_name: "",
  email: "",
  phone: "",
  address: "",
  notes: "",
  website: "",
};

const WEEKDAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

function pad(n: number): string {
  return String(n).padStart(2, "0");
}

function toISODate(year: number, month: number, day: number): string {
  return `${year}-${pad(month + 1)}-${pad(day)}`;
}

function formatTime(time: string): string {
  const [hRaw, mRaw] = time.split(":");
  const h = Number(hRaw);
  const ampm = h >= 12 ? "PM" : "AM";
  const h12 = h % 12 === 0 ? 12 : h % 12;
  return `${h12}:${mRaw} ${ampm}`;
}

function formatLongDate(iso: string): string {
  const [y, m, d] = iso.split("-").map(Number);
  return new Date(Date.UTC(y, m - 1, d)).toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC",
  });
}

const inputClass =
  "w-full rounded-lg border border-navy-500/50 bg-navy-800 px-4 py-3 text-white placeholder:text-blue-300/40 focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold";

export default function BookingFlow() {
  const today = useMemo(() => new Date(), []);
  const [viewYear, setViewYear] = useState(today.getFullYear());
  const [viewMonth, setViewMonth] = useState(today.getMonth()); // 0-indexed
  const [slots, setSlots] = useState<Slot[]>([]);
  const [loading, setLoading] = useState(true);
  const [loadError, setLoadError] = useState("");

  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [selectedSlot, setSelectedSlot] = useState<Slot | null>(null);
  const [form, setForm] = useState<FormState>(EMPTY_FORM);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [confirmed, setConfirmed] = useState(false);

  const loadSlots = useCallback(async () => {
    setLoading(true);
    setLoadError("");
    const from = toISODate(viewYear, viewMonth, 1);
    const lastDay = new Date(viewYear, viewMonth + 1, 0).getDate();
    const to = toISODate(viewYear, viewMonth, lastDay);
    try {
      const res = await fetch(`/api/slots?from=${from}&to=${to}`);
      if (!res.ok) throw new Error("bad status");
      setSlots((await res.json()) as Slot[]);
    } catch {
      setLoadError("Couldn't load availability. Please try again.");
    }
    setLoading(false);
  }, [viewYear, viewMonth]);

  useEffect(() => {
    loadSlots();
  }, [loadSlots]);

  const slotsByDate = useMemo(() => {
    const map = new Map<string, Slot[]>();
    for (const slot of slots) {
      const key = String(slot.slot_date).slice(0, 10);
      const list = map.get(key) ?? [];
      list.push(slot);
      map.set(key, list);
    }
    return map;
  }, [slots]);

  function changeMonth(delta: number) {
    let m = viewMonth + delta;
    let y = viewYear;
    if (m < 0) {
      m = 11;
      y -= 1;
    } else if (m > 11) {
      m = 0;
      y += 1;
    }
    setViewYear(y);
    setViewMonth(m);
    setSelectedDate(null);
    setSelectedSlot(null);
  }

  const atCurrentMonth =
    viewYear === today.getFullYear() && viewMonth === today.getMonth();

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!selectedSlot) return;
    setSubmitting(true);
    setSubmitError("");
    try {
      const res = await fetch("/api/book", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ slot_id: selectedSlot.id, ...form }),
      });
      const data = (await res.json()) as { success?: boolean; error?: string };
      if (!res.ok || !data.success) {
        setSubmitError(data.error || "Something went wrong. Please try again.");
        if (res.status === 409) {
          // Slot just taken — refresh availability
          setSelectedSlot(null);
          loadSlots();
        }
        setSubmitting(false);
        return;
      }
      setConfirmed(true);
    } catch {
      setSubmitError("Network error. Please try again.");
    }
    setSubmitting(false);
  }

  // ── Step 3: Confirmation ──────────────────────────────────────────────
  if (confirmed && selectedSlot && selectedDate) {
    return (
      <div className="rounded-2xl border border-gold/40 bg-gradient-to-br from-navy-700 to-navy-800 p-6 text-center sm:p-10">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-gold/15">
          <Check className="h-7 w-7 text-gold" aria-hidden="true" />
        </div>
        <h2 className="mt-5 font-display text-2xl font-bold text-white sm:text-3xl">
          You&rsquo;re booked!
        </h2>
        <p className="mt-3 text-blue-100">
          {formatLongDate(selectedDate)}
          <br />
          {formatTime(selectedSlot.start_time)} &ndash;{" "}
          {formatTime(selectedSlot.end_time)}
        </p>
        <div className="mx-auto mt-6 max-w-md rounded-xl border border-navy-500/40 bg-navy-800 p-5 text-left">
          <div className="flex items-start gap-3">
            <Mail className="mt-0.5 h-5 w-5 shrink-0 text-gold" aria-hidden="true" />
            <p className="text-sm leading-relaxed text-blue-100">
              Check your email &mdash; we sent a confirmation with a personal
              link to view, manage, or cancel your appointment. Hugo will call
              ahead to confirm.
            </p>
          </div>
        </div>
        <a
          href="/"
          className="mt-8 inline-block text-sm font-medium text-gold hover:text-gold-400"
        >
          &larr; Back to home
        </a>
      </div>
    );
  }

  // ── Step 2: Contact form ──────────────────────────────────────────────
  if (selectedSlot && selectedDate) {
    return (
      <div className="rounded-2xl border border-navy-500/40 bg-gradient-to-br from-navy-700 to-navy-800 p-6 sm:p-8">
        <button
          type="button"
          onClick={() => setSelectedSlot(null)}
          className="flex items-center gap-1 text-sm font-medium text-blue-300 hover:text-white"
        >
          <ChevronLeft className="h-4 w-4" aria-hidden="true" />
          Pick a different time
        </button>

        <div className="mt-4 flex items-center gap-3 rounded-xl border border-gold/30 bg-gold/5 p-4">
          <Clock className="h-5 w-5 shrink-0 text-gold" aria-hidden="true" />
          <div>
            <p className="font-display font-bold text-white">
              {formatLongDate(selectedDate)}
            </p>
            <p className="text-sm text-blue-300">
              {formatTime(selectedSlot.start_time)} &ndash;{" "}
              {formatTime(selectedSlot.end_time)} &middot; {selectedSlot.label}
            </p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="mt-6 space-y-4">
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label htmlFor="bk-first" className="mb-1.5 block text-sm font-medium text-blue-100">
                First name *
              </label>
              <input
                id="bk-first"
                required
                maxLength={100}
                className={inputClass}
                value={form.first_name}
                onChange={(e) => setForm({ ...form, first_name: e.target.value })}
              />
            </div>
            <div>
              <label htmlFor="bk-last" className="mb-1.5 block text-sm font-medium text-blue-100">
                Last name *
              </label>
              <input
                id="bk-last"
                required
                maxLength={100}
                className={inputClass}
                value={form.last_name}
                onChange={(e) => setForm({ ...form, last_name: e.target.value })}
              />
            </div>
          </div>
          <div>
            <label htmlFor="bk-email" className="mb-1.5 block text-sm font-medium text-blue-100">
              Email *
            </label>
            <input
              id="bk-email"
              type="email"
              required
              maxLength={255}
              className={inputClass}
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
            />
          </div>
          <div>
            <label htmlFor="bk-phone" className="mb-1.5 block text-sm font-medium text-blue-100">
              Phone
            </label>
            <input
              id="bk-phone"
              type="tel"
              maxLength={20}
              className={inputClass}
              value={form.phone}
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
            />
          </div>
          <div>
            <label htmlFor="bk-address" className="mb-1.5 block text-sm font-medium text-blue-100">
              Home address
            </label>
            <input
              id="bk-address"
              maxLength={500}
              placeholder="So Hugo can prepare for your property"
              className={inputClass}
              value={form.address}
              onChange={(e) => setForm({ ...form, address: e.target.value })}
            />
          </div>
          <div>
            <label htmlFor="bk-notes" className="mb-1.5 block text-sm font-medium text-blue-100">
              Anything Hugo should know?
            </label>
            <textarea
              id="bk-notes"
              rows={3}
              maxLength={2000}
              className={inputClass}
              value={form.notes}
              onChange={(e) => setForm({ ...form, notes: e.target.value })}
            />
          </div>

          {/* Honeypot */}
          <div className="hidden" aria-hidden="true">
            <label htmlFor="bk-website">Website</label>
            <input
              id="bk-website"
              tabIndex={-1}
              autoComplete="off"
              value={form.website}
              onChange={(e) => setForm({ ...form, website: e.target.value })}
            />
          </div>

          {submitError && (
            <p className="rounded-lg border border-red-500/40 bg-red-950/30 px-4 py-3 text-sm text-red-300">
              {submitError}
            </p>
          )}

          <button
            type="submit"
            disabled={submitting}
            className="cta-glow w-full rounded-lg bg-gold px-8 py-4 text-lg font-semibold text-navy transition-colors hover:bg-gold-400 disabled:pointer-events-none disabled:opacity-50"
          >
            {submitting ? "Booking..." : "Confirm My Appointment"}
          </button>
        </form>
      </div>
    );
  }

  // ── Step 1: Calendar + time picker ────────────────────────────────────
  const firstDow = new Date(viewYear, viewMonth, 1).getDay();
  const daysInMonth = new Date(viewYear, viewMonth + 1, 0).getDate();
  const monthLabel = new Date(viewYear, viewMonth, 1).toLocaleDateString("en-US", {
    month: "long",
    year: "numeric",
  });
  const daySlots = selectedDate ? slotsByDate.get(selectedDate) ?? [] : [];

  return (
    <div className="rounded-2xl border border-navy-500/40 bg-gradient-to-br from-navy-700 to-navy-800 p-6 sm:p-8">
      <div className="flex items-center justify-between">
        <h2 className="flex items-center gap-2 font-display text-lg font-bold text-white">
          <CalendarDays className="h-5 w-5 text-gold" aria-hidden="true" />
          {monthLabel}
        </h2>
        <div className="flex gap-2">
          <button
            type="button"
            onClick={() => changeMonth(-1)}
            disabled={atCurrentMonth}
            aria-label="Previous month"
            className="rounded-lg border border-navy-500/50 p-2 text-blue-300 transition-colors hover:text-white disabled:pointer-events-none disabled:opacity-30"
          >
            <ChevronLeft className="h-4 w-4" aria-hidden="true" />
          </button>
          <button
            type="button"
            onClick={() => changeMonth(1)}
            aria-label="Next month"
            className="rounded-lg border border-navy-500/50 p-2 text-blue-300 transition-colors hover:text-white"
          >
            <ChevronRight className="h-4 w-4" aria-hidden="true" />
          </button>
        </div>
      </div>

      {loadError && (
        <p className="mt-6 rounded-lg border border-red-500/40 bg-red-950/30 px-4 py-3 text-sm text-red-300">
          {loadError}
        </p>
      )}

      <div className="mt-6 grid grid-cols-7 gap-1 text-center">
        {WEEKDAYS.map((d) => (
          <div
            key={d}
            className="py-2 text-xs font-semibold uppercase tracking-wider text-blue-300/60"
          >
            {d}
          </div>
        ))}
        {Array.from({ length: firstDow }).map((_, i) => (
          <div key={`pad-${i}`} />
        ))}
        {Array.from({ length: daysInMonth }).map((_, i) => {
          const day = i + 1;
          const iso = toISODate(viewYear, viewMonth, day);
          const hasSlots = slotsByDate.has(iso);
          const isSelected = selectedDate === iso;
          return (
            <button
              key={iso}
              type="button"
              disabled={!hasSlots}
              onClick={() => setSelectedDate(isSelected ? null : iso)}
              aria-pressed={isSelected}
              className={
                isSelected
                  ? "rounded-lg bg-gold py-2.5 text-sm font-bold text-navy"
                  : hasSlots
                    ? "rounded-lg border border-gold/40 bg-gold/10 py-2.5 text-sm font-semibold text-gold transition-colors hover:bg-gold/20"
                    : "rounded-lg py-2.5 text-sm text-blue-300/30"
              }
            >
              {day}
            </button>
          );
        })}
      </div>

      {loading && (
        <p className="mt-6 text-center text-sm text-blue-300">
          Loading availability...
        </p>
      )}

      {!loading && slots.length === 0 && !loadError && (
        <p className="mt-6 text-center text-sm text-blue-300">
          No openings this month &mdash; try the next one.
        </p>
      )}

      {selectedDate && (
        <div className="mt-6 border-t border-navy-500/40 pt-6">
          <h3 className="font-display font-bold text-white">
            {formatLongDate(selectedDate)}
          </h3>
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            {daySlots.map((slot) => (
              <button
                key={slot.id}
                type="button"
                onClick={() => setSelectedSlot(slot)}
                className="flex items-center justify-between rounded-xl border border-navy-500/50 bg-navy-800 px-4 py-3 text-left transition-colors hover:border-gold/60 hover:bg-gold/5"
              >
                <span className="font-semibold text-white">
                  {formatTime(slot.start_time)} &ndash; {formatTime(slot.end_time)}
                </span>
                <span className="text-xs text-blue-300">{slot.label}</span>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
