'use client';

import { useState, useEffect } from 'react';

const LOCALSTORAGE_KEY = 'voltsol_help_seen';

export function HelpPanel() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    // Check if user has seen help before
    const seen = localStorage.getItem(LOCALSTORAGE_KEY);
    if (!seen) {
      setOpen(true);
      localStorage.setItem(LOCALSTORAGE_KEY, 'true');
    }
  }, []);

  if (!open) return null;

  return (
    <div className="rounded-xl border border-slate-700 bg-slate-900 p-6 mb-6 relative">
      <button
        onClick={() => setOpen(false)}
        className="absolute top-4 right-4 text-slate-400 hover:text-white transition"
        title="Close help"
      >
        ✕
      </button>
      
      <div className="max-w-3xl">
        <h2 className="text-lg font-bold text-white mb-3">👋 How this works</h2>
        <p className="text-slate-300 text-sm mb-4 leading-relaxed">
          Your daily job: turn leads into customers. New leads land at the top. Here&apos;s the routine:
        </p>
        
        <ol className="space-y-3 text-sm text-slate-300 mb-4">
          <li className="flex gap-3">
            <span className="text-amber-400 font-bold flex-shrink-0">1.</span>
            <span>
              Start with <span className="text-red-400 font-semibold">🔴 HOT</span> leads — these people own their home, have a high power bill, and want to move soon. Call them first, today.
            </span>
          </li>
          <li className="flex gap-3">
            <span className="text-amber-400 font-bold flex-shrink-0">2.</span>
            <span>Tap the phone number to call right from your phone. Tap the email to email.</span>
          </li>
          <li className="flex gap-3">
            <span className="text-amber-400 font-bold flex-shrink-0">3.</span>
            <span>After you reach them, set the Status so you remember where things stand.</span>
          </li>
          <li className="flex gap-3">
            <span className="text-amber-400 font-bold flex-shrink-0">4.</span>
            <span>
              When a deal closes, set Status to &quot;Won&quot; and type the sale amount in <span className="text-amber-400 font-semibold">Sale $</span>.
            </span>
          </li>
          <li className="flex gap-3">
            <span className="text-amber-400 font-bold flex-shrink-0">5.</span>
            <span>To offer appointment times, use the Schedule tab.</span>
          </li>
        </ol>
        
        <p className="text-slate-400 text-sm italic">
          That&apos;s it. Work the list top to bottom, HOT first. (Tap ❔ in the header any time to see this again.)
        </p>
      </div>
    </div>
  );
}
