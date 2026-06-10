"use client";

import { useCallback, useEffect, useState } from "react";
import {
  CalendarDays,
  Clock,
  MapPin,
  Phone,
  ClipboardList,
  XCircle,
  CheckCircle2,
} from "lucide-react";

interface Appointment {
  id: string;
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
  label: string | null;
}

function formatTime(time: string): string {
  const [hRaw, mRaw] = time.split(":");
  const h = Number(hRaw);
  const ampm = h >= 12 ? "PM" : "AM";
  const h12 = h % 12 === 0 ? 12 : h % 12;
  return `${h12}:${mRaw} ${ampm}`;
}

function formatLongDate(iso: string): string {
  const [y, m, d] = iso.slice(0, 10).split("-").map(Number);
  return new Date(Date.UTC(y, m - 1, d)).toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC",
  });
}

const STATUS_BADGES: Record<string, { label: string; classes: string }> = {
  confirmed: {
    label: "Confirmed",
    classes: "border-green-500/40 bg-green-900/30 text-green-400",
  },
  cancelled: {
    label: "Cancelled",
    classes: "border-red-500/40 bg-red-950/30 text-red-400",
  },
  completed: {
    label: "Completed",
    classes: "border-blue-400/40 bg-blue-900/30 text-blue-300",
  },
  no_show: {
    label: "Missed",
    classes: "border-amber/40 bg-amber/10 text-amber-400",
  },
};

export default function AppointmentDashboard({
  params,
}: {
  params: { token: string };
}) {
  const { token } = params;
  const [appt, setAppt] = useState<Appointment | null>(null);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);
  const [cancelling, setCancelling] = useState(false);
  const [confirmCancel, setConfirmCancel] = useState(false);
  const [actionError, setActionError] = useState("");

  const load = useCallback(async () => {
    setLoading(true);
    try {
      const res = await fetch(`/api/appointment/${token}`);
      if (!res.ok) {
        setNotFound(true);
        setLoading(false);
        return;
      }
      setAppt((await res.json()) as Appointment);
    } catch {
      setNotFound(true);
    }
    setLoading(false);
  }, [token]);

  useEffect(() => {
    load();
  }, [load]);

  async function handleCancel() {
    setCancelling(true);
    setActionError("");
    try {
      const res = await fetch(`/api/appointment/${token}/cancel`, {
        method: "POST",
      });
      const data = (await res.json()) as { success?: boolean; error?: string };
      if (!res.ok || !data.success) {
        setActionError(data.error || "Couldn't cancel. Please try again.");
      } else {
        setConfirmCancel(false);
        await load();
      }
    } catch {
      setActionError("Network error. Please try again.");
    }
    setCancelling(false);
  }

  if (loading) {
    return (
      <main className="flex min-h-[60vh] items-center justify-center bg-navy px-4">
        <p className="text-blue-300">Loading your appointment...</p>
      </main>
    );
  }

  if (notFound || !appt) {
    return (
      <main className="flex min-h-[60vh] items-center justify-center bg-navy px-4 py-16">
        <div className="w-full max-w-md rounded-2xl border border-navy-500/40 bg-gradient-to-br from-navy-700 to-navy-800 p-8 text-center">
          <XCircle className="mx-auto h-10 w-10 text-blue-300/60" aria-hidden="true" />
          <h1 className="mt-4 font-display text-2xl font-bold text-white">
            We couldn&rsquo;t find that appointment.
          </h1>
          <p className="mt-3 text-blue-300">
            The link may have expired or been mistyped. Want to book a fresh
            time instead?
          </p>
          <a
            href="/book"
            className="cta-glow mt-6 inline-block rounded-lg bg-gold px-6 py-3 font-semibold text-navy transition-colors hover:bg-gold-400"
          >
            Book an Appointment
          </a>
        </div>
      </main>
    );
  }

  const badge = STATUS_BADGES[appt.status] ?? {
    label: appt.status,
    classes: "border-navy-500/40 bg-navy-800 text-blue-300",
  };
  const isUpcoming = appt.status === "confirmed";

  return (
    <main className="min-h-screen bg-navy px-4 py-12 sm:py-16">
      <div className="mx-auto max-w-xl">
        <p className="text-center text-xs font-bold uppercase tracking-[0.25em] text-gold">
          VoltSol Energy
        </p>
        <h1 className="mt-3 text-center font-display text-3xl font-bold text-white sm:text-4xl">
          Hi {appt.first_name}, here&rsquo;s your appointment.
        </h1>

        <div className="mt-8 rounded-2xl border border-navy-500/40 bg-gradient-to-br from-navy-700 to-navy-800 p-6 sm:p-8">
          <div className="flex items-center justify-between">
            <h2 className="font-display text-lg font-bold text-white">
              {appt.label || "Free Estimate"}
            </h2>
            <span
              className={`rounded-full border px-3 py-1 text-xs font-bold uppercase tracking-wider ${badge.classes}`}
            >
              {badge.label}
            </span>
          </div>

          <div className="mt-6 space-y-4">
            {appt.slot_date && (
              <div className="flex items-start gap-3">
                <CalendarDays className="mt-0.5 h-5 w-5 shrink-0 text-gold" aria-hidden="true" />
                <span className="text-blue-100">{formatLongDate(appt.slot_date)}</span>
              </div>
            )}
            {appt.start_time && appt.end_time && (
              <div className="flex items-start gap-3">
                <Clock className="mt-0.5 h-5 w-5 shrink-0 text-gold" aria-hidden="true" />
                <span className="text-blue-100">
                  {formatTime(appt.start_time)} &ndash; {formatTime(appt.end_time)}
                </span>
              </div>
            )}
            {appt.address && (
              <div className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-gold" aria-hidden="true" />
                <span className="text-blue-100">{appt.address}</span>
              </div>
            )}
            {appt.notes && (
              <div className="flex items-start gap-3">
                <ClipboardList className="mt-0.5 h-5 w-5 shrink-0 text-gold" aria-hidden="true" />
                <span className="text-blue-100">{appt.notes}</span>
              </div>
            )}
          </div>
        </div>

        {isUpcoming && (
          <>
            <div className="mt-6 rounded-2xl border border-gold/30 bg-gold/5 p-6">
              <h3 className="flex items-center gap-2 font-display font-bold text-white">
                <CheckCircle2 className="h-5 w-5 text-gold" aria-hidden="true" />
                What to expect
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-blue-100">
                Hugo will arrive with equipment specs and build you a custom
                proposal on the spot. He&rsquo;ll call ahead to confirm. No
                pressure, no obligation &mdash; the estimate is free either
                way.
              </p>
            </div>

            <div className="mt-6 rounded-2xl border border-navy-500/40 bg-navy-800 p-6">
              <h3 className="font-display font-bold text-white">
                Need to reschedule?
              </h3>
              <p className="mt-2 flex items-start gap-2 text-sm leading-relaxed text-blue-300">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-gold" aria-hidden="true" />
                Text or call Hugo, or email{" "}
                <a href="mailto:hugo@voltsolenergy.com" className="text-gold hover:underline">
                  hugo@voltsolenergy.com
                </a>
                . Or cancel below and book a new time anytime.
              </p>

              {actionError && (
                <p className="mt-4 rounded-lg border border-red-500/40 bg-red-950/30 px-4 py-3 text-sm text-red-300">
                  {actionError}
                </p>
              )}

              {confirmCancel ? (
                <div className="mt-4 rounded-xl border border-red-500/30 bg-red-950/20 p-4">
                  <p className="text-sm font-medium text-red-300">
                    Cancel this appointment? This frees up the time for someone
                    else.
                  </p>
                  <div className="mt-4 flex gap-3">
                    <button
                      type="button"
                      onClick={handleCancel}
                      disabled={cancelling}
                      className="rounded-lg bg-red-500/80 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-red-500 disabled:pointer-events-none disabled:opacity-50"
                    >
                      {cancelling ? "Cancelling..." : "Yes, cancel it"}
                    </button>
                    <button
                      type="button"
                      onClick={() => setConfirmCancel(false)}
                      className="rounded-lg border border-navy-500/50 px-4 py-2 text-sm font-medium text-blue-300 transition-colors hover:text-white"
                    >
                      Keep my appointment
                    </button>
                  </div>
                </div>
              ) : (
                <button
                  type="button"
                  onClick={() => setConfirmCancel(true)}
                  className="mt-4 rounded-lg border border-red-500/40 px-4 py-2 text-sm font-medium text-red-400 transition-colors hover:bg-red-950/30"
                >
                  Cancel appointment
                </button>
              )}
            </div>
          </>
        )}

        {appt.status === "cancelled" && (
          <div className="mt-6 rounded-2xl border border-navy-500/40 bg-navy-800 p-6 text-center">
            <p className="text-blue-300">
              This appointment was cancelled. Changed your mind?
            </p>
            <a
              href="/book"
              className="cta-glow mt-4 inline-block rounded-lg bg-gold px-6 py-3 font-semibold text-navy transition-colors hover:bg-gold-400"
            >
              Book a New Time
            </a>
          </div>
        )}
      </div>
    </main>
  );
}
