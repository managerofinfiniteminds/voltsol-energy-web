'use client';

import { useState, FormEvent } from 'react';
import { useSearchParams } from 'next/navigation';

export default function AdminLoginPage() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const searchParams = useSearchParams();
  const errorParam = searchParams.get('error');
  const next = searchParams.get('next');

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const res = await fetch('/api/admin/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: email.trim().toLowerCase(), next: next || undefined }),
      });

      if (res.ok) {
        setSubmitted(true);
      } else {
        const data = await res.json();
        setError(data.error || 'Something went wrong. Try again.');
      }
    } catch {
      setError('Connection error. Please try again.');
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-[#0F172A] flex items-center justify-center px-4">
      <div className="w-full max-w-sm">
        {/* Logo */}
        <div className="text-center mb-8">
          <div className="w-16 h-16 mx-auto mb-4">
            <svg viewBox="0 0 1000 1000" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
              <defs>
                <style>{`.st0 { fill: #fff; } .st1 { fill: #f49527; }`}</style>
              </defs>
              <path className="st1" d="M452.92,890.34c-.59,0-.87-.16-1.2-.38l188.36-388.96c2.4-4.95-.14-9.05-5.64-9.1l-164.83-1.71c-5.5-.06-7.98-4.12-5.51-9.04l143.23-284.88c2.47-4.91,8.99-8.91,14.49-8.87l172.08,1.04c5.5.03,7.9,4.04,5.32,8.9l-96.77,182.95c.37.56.59.53,1.17.53l192.08-.13c.72,0,1.14-.06,1.46.3.16.19-.2.51-.6,1l-406.64,501.06c-3.47,4.27-10.8,7.7-16.3,7.61l-20.7-.31Z"/>
              <path className="st0" d="M382.27,878.66c-2.41,4.95-6.09,4.83-8.18-.26L90.71,189.97c1.67-.03,2.9.82,4.67.46l165.91-2.34c5.5-.08,11.71,4.02,13.81,9.11l197.34,479.14c2.09,5.09,1.84,13.29-.57,18.24l-89.6,184.08Z"/>
            </svg>
          </div>
          <div className="text-3xl font-extrabold">
            <span className="text-white">Volt</span><span className="text-amber-400">Sol</span><span className="text-white"> Energy</span>
          </div>
          <div className="text-slate-400 text-sm mt-1">Admin Dashboard</div>
        </div>

        <div className="bg-slate-900 border border-slate-700 rounded-2xl p-8 shadow-2xl">
          {submitted ? (
            <div className="text-center">
              <div className="w-12 h-12 bg-amber-400/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h1 className="text-xl font-bold text-white mb-2">Check your email</h1>
              <p className="text-slate-400 text-sm">
                If that email is an authorized admin, a login link is on its way. Check your inbox.
              </p>
              <button
                onClick={() => { setSubmitted(false); setEmail(''); }}
                className="mt-6 text-amber-400 text-sm hover:text-amber-300 transition"
              >
                Use a different email
              </button>
            </div>
          ) : (
            <>
              <h1 className="text-xl font-bold text-white mb-6">Sign In</h1>

              {errorParam === 'expired' && (
                <div className="bg-red-900/40 border border-red-500 rounded-lg px-4 py-2 text-red-300 text-sm mb-4">
                  This login link has expired or was already used. Please request a new one.
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-1">Email</label>
                  <input
                    type="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    autoFocus
                    required
                    placeholder="you@example.com"
                    className="w-full bg-slate-800 border border-slate-600 rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-amber-400 transition"
                  />
                </div>

                {error && (
                  <div className="bg-red-900/40 border border-red-500 rounded-lg px-4 py-2 text-red-300 text-sm">
                    {error}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-amber-400 hover:bg-amber-300 disabled:bg-amber-800 text-[#0F172A] font-bold py-3 rounded-xl transition-colors"
                >
                  {loading ? 'Sending...' : 'Send me a login link'}
                </button>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
