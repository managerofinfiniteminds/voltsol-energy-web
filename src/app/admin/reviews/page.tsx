'use client';

import { useCallback, useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

// ─── Types ───────────────────────────────────────────────────────────────────

interface Appointment {
  id: string;
  first_name: string;
  last_name: string;
  email: string;
  phone: string | null;
  address: string | null;
  status: string;
  slot_date: string | null;
  review_requested_at: string | null;
}

interface LegacyReviewSend {
  id: number;
  email: string;
  name: string | null;
  subject: string;
  sent_at: string;
}

type Tab = 'voltsol' | 'legacy';

// ─── Helpers ─────────────────────────────────────────────────────────────────

function formatDate(iso: string | null): string {
  if (!iso) return '';
  return new Date(iso).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  });
}

const inputClass =
  'w-full rounded-lg border border-slate-700 bg-slate-800 px-3 py-2 text-sm text-white focus:border-amber-400 focus:outline-none';

const buttonClass =
  'rounded-lg px-4 py-2 text-sm font-bold transition disabled:opacity-50';

// ─── Main page ───────────────────────────────────────────────────────────────

export default function ReviewsPage() {
  const router = useRouter();
  const [tab, setTab] = useState<Tab>('voltsol');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  // VoltSol customers state
  const [appointments, setAppointments] = useState<Appointment[]>([]);
  const [sendingReview, setSendingReview] = useState<string | null>(null);

  // Legacy customers state
  const [legacyEmail, setLegacyEmail] = useState('');
  const [legacyName, setLegacyName] = useState('');
  const [legacySubject, setLegacySubject] = useState('');
  const [legacyBody, setLegacyBody] = useState('');
  const [legacySends, setLegacySends] = useState<LegacyReviewSend[]>([]);
  const [savingTemplate, setSavingTemplate] = useState(false);
  const [sendingLegacy, setSendingLegacy] = useState(false);
  const [confirmSend, setConfirmSend] = useState(false);

  // Load VoltSol appointments (completed only)
  const loadAppointments = useCallback(async () => {
    setLoading(true);
    setError('');
    const res = await fetch('/api/admin/appointments?status=completed', {
      cache: 'no-store',
    });
    if (res.status === 401) {
      router.push('/admin/login');
      return;
    }
    if (!res.ok) {
      setError('Failed to load appointments.');
      setLoading(false);
      return;
    }
    const data = (await res.json()) as Appointment[];
    setAppointments(data);
    setLoading(false);
  }, [router]);

  // Load legacy template + recent sends
  const loadLegacyData = useCallback(async () => {
    setLoading(true);
    setError('');
    const [templateRes, sendsRes] = await Promise.all([
      fetch('/api/admin/legacy-review-template', { cache: 'no-store' }),
      fetch('/api/admin/legacy-reviews', { cache: 'no-store' }),
    ]);
    if (templateRes.status === 401 || sendsRes.status === 401) {
      router.push('/admin/login');
      return;
    }
    if (!templateRes.ok || !sendsRes.ok) {
      setError('Failed to load legacy data.');
      setLoading(false);
      return;
    }
    const template = (await templateRes.json()) as {
      subject: string;
      body: string;
    };
    const sends = (await sendsRes.json()) as LegacyReviewSend[];
    setLegacySubject(template.subject);
    setLegacyBody(template.body);
    setLegacySends(sends);
    setLoading(false);
  }, [router]);

  useEffect(() => {
    if (tab === 'voltsol') {
      loadAppointments();
    } else {
      loadLegacyData();
    }
  }, [tab, loadAppointments, loadLegacyData]);

  // VoltSol: Request review
  async function requestReview(apptId: string, force = false) {
    setSendingReview(apptId);
    setError('');
    const res = await fetch(
      `/api/admin/appointments/${apptId}/request-review`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ force }),
      }
    );
    setSendingReview(null);
    if (!res.ok) {
      const data = (await res.json()) as { error?: string };
      setError(data.error || 'Failed to send review request.');
      return;
    }
    await loadAppointments();
  }

  // Legacy: Save template
  async function saveTemplate() {
    setSavingTemplate(true);
    setError('');
    const res = await fetch('/api/admin/legacy-review-template', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        subject: legacySubject,
        body: legacyBody,
      }),
    });
    setSavingTemplate(false);
    if (!res.ok) {
      setError('Failed to save template.');
      return;
    }
    alert('Template saved as default.');
  }

  // Legacy: Send email
  async function sendLegacyEmail() {
    if (!legacyEmail.trim()) {
      setError('Email is required.');
      return;
    }
    if (!legacySubject.trim() || !legacyBody.trim()) {
      setError('Subject and body are required.');
      return;
    }
    setSendingLegacy(true);
    setError('');
    setConfirmSend(false);
    const res = await fetch('/api/admin/legacy-reviews', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email: legacyEmail.trim(),
        name: legacyName.trim() || undefined,
        subject: legacySubject,
        body: legacyBody,
      }),
    });
    setSendingLegacy(false);
    if (!res.ok) {
      const data = (await res.json()) as { error?: string };
      setError(data.error || 'Failed to send email.');
      return;
    }
    // Clear form and reload
    setLegacyEmail('');
    setLegacyName('');
    await loadLegacyData();
    alert('Email sent successfully!');
  }

  return (
    <div className="text-white">
      <main className="mx-auto max-w-5xl px-4 py-8 sm:px-6">
        <h1 className="mb-6 text-2xl font-bold">Review Outreach</h1>

        {/* Tabs */}
        <div className="mb-6 flex gap-2 border-b border-slate-700">
          <button
            onClick={() => setTab('voltsol')}
            className={`px-4 py-2 text-sm font-semibold transition ${
              tab === 'voltsol'
                ? 'border-b-2 border-amber-400 text-amber-400'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            VoltSol Customers
          </button>
          <button
            onClick={() => setTab('legacy')}
            className={`px-4 py-2 text-sm font-semibold transition ${
              tab === 'legacy'
                ? 'border-b-2 border-amber-400 text-amber-400'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            Legacy Customers
          </button>
        </div>

        {error && (
          <div className="mb-6 rounded-xl border border-red-500 bg-red-900/40 px-6 py-4 text-red-300">
            {error}
          </div>
        )}

        {loading && (
          <div className="py-12 text-center text-slate-400">Loading...</div>
        )}

        {/* VoltSol Customers Tab */}
        {!loading && tab === 'voltsol' && (
          <div className="space-y-4">
            <p className="text-sm text-slate-400">
              Completed appointments ready for review requests. Button becomes
              &ldquo;Review Requested ✓&rdquo; after sending.
            </p>
            {appointments.length === 0 && (
              <p className="py-8 text-center text-slate-500">
                No completed appointments yet.
              </p>
            )}
            {appointments.map((appt) => (
              <div
                key={appt.id}
                className="rounded-xl border border-slate-700 bg-slate-900 p-4"
              >
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div className="flex-1">
                    <div className="font-semibold text-white">
                      {appt.first_name} {appt.last_name}
                    </div>
                    <div className="text-sm text-slate-400">{appt.email}</div>
                    {appt.phone && (
                      <div className="text-sm text-slate-400">{appt.phone}</div>
                    )}
                    {appt.slot_date && (
                      <div className="mt-1 text-xs text-slate-500">
                        Install date: {formatDate(appt.slot_date)}
                      </div>
                    )}
                  </div>
                  <div className="flex flex-col gap-2">
                    {appt.review_requested_at ? (
                      <>
                        <div className="rounded-lg bg-green-900/30 px-3 py-2 text-center text-xs text-green-400">
                          ✓ Review Requested
                          <div className="mt-0.5 text-[10px] text-slate-500">
                            {formatDate(appt.review_requested_at)}
                          </div>
                        </div>
                        <button
                          disabled={sendingReview === appt.id}
                          onClick={() => requestReview(appt.id, true)}
                          className={`${buttonClass} border border-amber-500/50 bg-transparent text-amber-400 hover:bg-amber-500/10`}
                        >
                          {sendingReview === appt.id
                            ? 'Sending...'
                            : 'Send Again'}
                        </button>
                      </>
                    ) : (
                      <button
                        disabled={sendingReview === appt.id}
                        onClick={() => requestReview(appt.id)}
                        className={`${buttonClass} bg-amber-500 text-slate-900 hover:bg-amber-400`}
                      >
                        {sendingReview === appt.id
                          ? 'Sending...'
                          : 'Request Review'}
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Legacy Customers Tab */}
        {!loading && tab === 'legacy' && (
          <div className="space-y-6">
            <div className="rounded-xl border border-slate-700 bg-slate-900 p-6 space-y-4">
              <h2 className="text-lg font-semibold text-white">
                Send Review Request
              </h2>
              <p className="text-sm text-slate-400">
                Email pre-VoltSol customers. The template below uses a{' '}
                <code className="text-amber-400">{'{name}'}</code> token that
                falls back to &ldquo;there&rdquo; if name is blank.
              </p>

              <div className="grid gap-4 sm:grid-cols-2">
                <label className="block text-xs text-slate-400">
                  Email <span className="text-red-400">*</span>
                  <input
                    type="email"
                    required
                    value={legacyEmail}
                    onChange={(e) => setLegacyEmail(e.target.value)}
                    className={`mt-1 ${inputClass}`}
                    placeholder="customer@example.com"
                  />
                </label>
                <label className="block text-xs text-slate-400">
                  Name (optional)
                  <input
                    type="text"
                    value={legacyName}
                    onChange={(e) => setLegacyName(e.target.value)}
                    className={`mt-1 ${inputClass}`}
                    placeholder="John"
                  />
                </label>
              </div>

              <label className="block text-xs text-slate-400">
                Subject <span className="text-red-400">*</span>
                <input
                  type="text"
                  required
                  value={legacySubject}
                  onChange={(e) => setLegacySubject(e.target.value)}
                  className={`mt-1 ${inputClass}`}
                />
              </label>

              <label className="block text-xs text-slate-400">
                Body <span className="text-red-400">*</span>
                <textarea
                  required
                  value={legacyBody}
                  onChange={(e) => setLegacyBody(e.target.value)}
                  rows={12}
                  className={`mt-1 ${inputClass}`}
                />
              </label>

              <div className="flex flex-wrap gap-3">
                <button
                  disabled={savingTemplate}
                  onClick={saveTemplate}
                  className={`${buttonClass} border border-slate-600 bg-transparent text-slate-300 hover:bg-slate-800`}
                >
                  {savingTemplate ? 'Saving...' : 'Save as Default Template'}
                </button>
                <button
                  disabled={sendingLegacy || !legacyEmail.trim()}
                  onClick={() => setConfirmSend(true)}
                  className={`${buttonClass} bg-amber-500 text-slate-900 hover:bg-amber-400`}
                >
                  Send Email
                </button>
              </div>
            </div>

            {/* Confirmation modal */}
            {confirmSend && (
              <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4">
                <div className="max-w-md rounded-xl border border-slate-700 bg-slate-900 p-6 space-y-4">
                  <h3 className="text-lg font-semibold text-white">
                    Confirm Send
                  </h3>
                  <p className="text-sm text-slate-300">
                    You&rsquo;re about to email{' '}
                    <span className="font-semibold text-amber-400">
                      {legacyEmail}
                    </span>
                    . Send?
                  </p>
                  <div className="flex gap-3">
                    <button
                      onClick={() => setConfirmSend(false)}
                      className={`${buttonClass} flex-1 border border-slate-600 bg-transparent text-slate-300 hover:bg-slate-800`}
                    >
                      Cancel
                    </button>
                    <button
                      onClick={sendLegacyEmail}
                      className={`${buttonClass} flex-1 bg-amber-500 text-slate-900 hover:bg-amber-400`}
                      disabled={sendingLegacy}
                    >
                      {sendingLegacy ? 'Sending...' : 'Yes, Send'}
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* Recent sends list */}
            <div className="rounded-xl border border-slate-700 bg-slate-900 p-6 space-y-4">
              <h2 className="text-lg font-semibold text-white">
                Recent Sends (Last 20)
              </h2>
              {legacySends.length === 0 && (
                <p className="text-sm text-slate-500">No sends yet.</p>
              )}
              <div className="space-y-2">
                {legacySends.map((send) => (
                  <div
                    key={send.id}
                    className="rounded-lg border border-slate-700 bg-slate-800/50 p-3 text-sm"
                  >
                    <div className="font-semibold text-white">
                      {send.name || '(no name)'} &mdash; {send.email}
                    </div>
                    <div className="text-xs text-slate-400">
                      {send.subject}
                    </div>
                    <div className="mt-1 text-xs text-slate-500">
                      Sent {formatDate(send.sent_at)}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
