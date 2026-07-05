'use client';

import { useState, useEffect, useCallback } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { MessageCircle, X } from 'lucide-react';
import LeadChat from './LeadChat';
import { track } from '@/lib/track';

/**
 * ChatWidget — always-on, site-wide floating chat launcher.
 *
 * Mobile-first: on phones the open panel is a near-full-screen sheet so the
 * conversation + input bar are fully usable above the keyboard/safe-area. On
 * desktop it's a fixed card anchored bottom-right.
 *
 * Reuses the tested <LeadChat/> core (same /api/chat/lead brain — answers
 * questions, captures a lead, drives to a call with a pro). No quiz context
 * here since the customer can open it from any page; "Prefer the form?" /
 * hand_off routes to /start.
 *
 * Hidden on /admin and on /start (that page already embeds the full estimate
 * flow + chat, so a second floating chat would be redundant/confusing).
 */
export function ChatWidget() {
  const pathname = usePathname();
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [hasOpened, setHasOpened] = useState(false);
  const [sessionId] = useState(
    () => `w-${Math.random().toString(36).slice(2)}${Date.now().toString(36)}`
  );

  const hidden =
    (pathname?.startsWith('/admin') ?? false) || pathname === '/start';

  // Lock body scroll while the mobile sheet is open.
  useEffect(() => {
    if (open && typeof document !== 'undefined') {
      const prev = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = prev;
      };
    }
  }, [open]);

  const handleOpen = useCallback(() => {
    setOpen(true);
    if (!hasOpened) {
      setHasOpened(true);
      track('chat_widget_open', { path: pathname });
    }
  }, [hasOpened, pathname]);

  const handleHandoff = useCallback(() => {
    track('chat_widget_handoff', { path: pathname });
    setOpen(false);
    router.push('/start');
  }, [pathname, router]);

  if (hidden) return null;

  return (
    <>
      {/* Launcher button — bottom-right, above the mobile StickyCTA bar (z-40). */}
      {!open && (
        <div className="fixed bottom-[5.25rem] right-4 z-50 flex flex-col items-end gap-2 md:bottom-6 md:right-6">
          <button
            type="button"
            onClick={handleOpen}
            aria-label="Open chat — ask a question"
            className="flex h-14 w-14 items-center justify-center rounded-full bg-gold text-navy shadow-xl transition-transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2 focus:ring-offset-navy"
          >
            <MessageCircle className="h-7 w-7" />
          </button>
        </div>
      )}

      {/* Open panel */}
      {open && (
        <>
          {/* Mobile backdrop */}
          <div
            className="fixed inset-0 z-[55] bg-black/50 backdrop-blur-sm md:hidden"
            onClick={() => setOpen(false)}
            aria-hidden="true"
          />
          <div
            className={[
              'fixed z-[60] flex flex-col',
              // Mobile: near-full-screen sheet
              'inset-x-0 bottom-0 top-[max(2.5rem,env(safe-area-inset-top))]',
              // Desktop: anchored card bottom-right
              'md:inset-auto md:bottom-6 md:right-6 md:top-auto md:h-[600px] md:w-[400px]',
            ].join(' ')}
          >
            {/* Close affordance row (mobile shows a handle + X; desktop floating X) */}
            <div className="flex items-center justify-between rounded-t-2xl border-b border-navy-500/40 bg-navy-700 px-4 py-2.5 md:rounded-t-2xl">
              <div className="flex items-center gap-2.5">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-gold/15 text-gold">
                  ☀️
                </span>
                <div className="leading-tight">
                  <p className="text-sm font-semibold text-white">Ray — VoltSol</p>
                  <p className="text-[11px] text-emerald-300/80">● Online — usually replies instantly</p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Close chat"
                className="flex h-9 w-9 items-center justify-center rounded-full text-blue-200 transition-colors hover:bg-navy-600 hover:text-white"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Chat core — fills remaining space; widget supplies its own header */}
            <div className="min-h-0 flex-1 overflow-hidden bg-navy-800 md:rounded-b-2xl">
              <LeadChat
                sessionId={sessionId}
                onHandoff={handleHandoff}
                hideHeader
                fill
              />
            </div>
          </div>
        </>
      )}
    </>
  );
}
