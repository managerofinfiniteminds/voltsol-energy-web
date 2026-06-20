'use client';

import { useState, useRef, useEffect, useCallback, FormEvent } from 'react';
import { Send, Check, Mail } from 'lucide-react';
import { cn } from '@/lib/utils';
import { track } from '@/lib/track';
import type { QuizContext } from '@/lib/chat-agent';

interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
}

interface LeadChatProps {
  sessionId: string;
  quizContext?: QuizContext;
  firstNameHint?: string;
  onHandoff: () => void; // swap to classic Step-6 form
}

function getOrMakeSessionId(passed: string): string {
  if (passed) return passed;
  if (typeof window === 'undefined') return `s-${Date.now()}`;
  try {
    const k = sessionStorage.getItem('vs_session_id');
    if (k) return k;
  } catch {
    /* ignore */
  }
  return `s-${Math.random().toString(36).slice(2)}${Date.now().toString(36)}`;
}

export default function LeadChat({ sessionId, quizContext, onHandoff }: LeadChatProps) {
  const [sid] = useState(() => getOrMakeSessionId(sessionId));
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState('');
  const [streaming, setStreaming] = useState(false);
  const [pending, setPending] = useState(false); // awaiting first token
  const [completed, setCompleted] = useState(false);
  const [leadId, setLeadId] = useState<number | null>(null);
  const [website, setWebsite] = useState(''); // honeypot

  const scrollRef = useRef<HTMLDivElement>(null);
  const openedRef = useRef(false);
  const capturedTrackedRef = useRef(0);

  const scrollToBottom = useCallback(() => {
    const el = scrollRef.current;
    if (el) el.scrollTop = el.scrollHeight;
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [messages, streaming, pending, scrollToBottom]);

  // Core send → SSE stream parser. `history` is the full message list to send.
  const sendToServer = useCallback(
    async (history: ChatMessage[]) => {
      setStreaming(true);
      setPending(true);
      // Add an empty assistant bubble we stream into.
      setMessages((m) => [...m, { role: 'assistant', content: '' }]);

      let acc = '';
      let firstToken = true;
      try {
        const res = await fetch('/api/chat/lead', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            session_id: sid,
            messages: history,
            quiz_context: quizContext,
            website,
          }),
        });

        if (!res.body) {
          throw new Error('no body');
        }

        const reader = res.body.getReader();
        const decoder = new TextDecoder();
        let buffer = '';

        // eslint-disable-next-line no-constant-condition
        while (true) {
          const { done, value } = await reader.read();
          if (done) break;
          buffer += decoder.decode(value, { stream: true });
          const lines = buffer.split('\n');
          buffer = lines.pop() ?? '';
          for (const line of lines) {
            const trimmed = line.trim();
            if (!trimmed.startsWith('data:')) continue;
            const payload = trimmed.slice(5).trim();
            if (payload === '[DONE]') continue;
            let evt: {
              type?: string;
              value?: string;
              completed?: boolean;
              handoff?: boolean;
              lead_id?: number | null;
            };
            try {
              evt = JSON.parse(payload);
            } catch {
              continue;
            }
            if (evt.type === 'token') {
              if (firstToken) {
                firstToken = false;
                setPending(false);
              }
              acc += evt.value ?? '';
              setMessages((m) => {
                const copy = [...m];
                copy[copy.length - 1] = { role: 'assistant', content: acc };
                return copy;
              });
            } else if (evt.type === 'done') {
              if (evt.handoff) {
                // graceful: still show the message, then offer form
                track('chat_fallback_to_form', { session_id: sid });
                setTimeout(() => onHandoff(), 1500);
              }
              if (evt.completed && evt.lead_id) {
                setCompleted(true);
                setLeadId(evt.lead_id);
                track('chat_complete', { lead_id: evt.lead_id });
              }
            }
          }
        }
      } catch {
        setMessages((m) => {
          const copy = [...m];
          copy[copy.length - 1] = {
            role: 'assistant',
            content:
              "Sorry — I hit a snag. Mind using the quick form just below? A tech will follow up fast. 🙏",
          };
          return copy;
        });
        track('chat_fallback_to_form', { session_id: sid, reason: 'stream_error' });
        setTimeout(() => onHandoff(), 1800);
      } finally {
        setStreaming(false);
        setPending(false);
      }
    },
    [sid, quizContext, website, onHandoff]
  );

  // Auto-open: fire chat_open + get the agent's greeting.
  useEffect(() => {
    if (openedRef.current) return;
    openedRef.current = true;
    track('chat_open', { session_id: sid });
    sendToServer([]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const text = input.trim();
    if (!text || streaming || completed) return;
    const next: ChatMessage[] = [...messages, { role: 'user', content: text }];
    setMessages(next);
    setInput('');
    // track a lightweight field-captured signal per user turn
    capturedTrackedRef.current += 1;
    track('chat_field_captured', { turn: capturedTrackedRef.current });
    sendToServer(next);
  }

  return (
    <div
      data-testid="lead-chat"
      className="flex flex-col rounded-2xl border border-navy-500/40 bg-navy-800 overflow-hidden"
      // Use DYNAMIC viewport height (dvh): it shrinks when mobile Safari's bottom
      // toolbar is showing, so the pinned input bar never slides under the chrome.
      // Subtract space for the progress header above + page padding. Fallback to
      // vh for older engines via the className min-h, capped at 560px on desktop.
      style={{ height: 'min(72dvh, 560px)', maxHeight: 'calc(100dvh - 9rem)' }}
    >
      {/* Header */}
      <div className="flex items-center gap-3 border-b border-navy-500/40 bg-navy-700/60 px-4 py-3">
        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gold/15 text-gold font-bold">
          ☀️
        </div>
        <div className="min-w-0">
          <p className="text-sm font-semibold text-white leading-tight">Ray — VoltSol</p>
          <p className="text-[11px] text-blue-300/70 leading-tight">Here to answer questions &amp; help</p>
        </div>
      </div>

      {/* Messages — scrolls inside the panel */}
      <div
        ref={scrollRef}
        className="flex-1 overflow-y-auto overscroll-contain px-3 py-4 space-y-3"
        style={{ WebkitOverflowScrolling: 'touch' }}
      >
        {messages.map((m, i) => (
          <div
            key={i}
            className={cn('flex', m.role === 'user' ? 'justify-end' : 'justify-start')}
          >
            <div
              className={cn(
                'max-w-[82%] rounded-2xl px-3.5 py-2.5 text-[15px] leading-relaxed whitespace-pre-wrap break-words',
                m.role === 'user'
                  ? 'bg-gold/20 text-white rounded-br-sm border border-gold/30'
                  : 'bg-navy-700 text-blue-50 rounded-bl-sm border border-navy-500/40'
              )}
            >
              {m.content || (m.role === 'assistant' && pending ? '' : m.content)}
            </div>
          </div>
        ))}

        {/* Typing indicator */}
        {pending && (
          <div className="flex justify-start">
            <div className="rounded-2xl rounded-bl-sm bg-navy-700 border border-navy-500/40 px-4 py-3">
              <span className="flex gap-1">
                <span className="h-2 w-2 animate-bounce rounded-full bg-blue-300/70 [animation-delay:-0.3s]" />
                <span className="h-2 w-2 animate-bounce rounded-full bg-blue-300/70 [animation-delay:-0.15s]" />
                <span className="h-2 w-2 animate-bounce rounded-full bg-blue-300/70" />
              </span>
            </div>
          </div>
        )}

        {/* Completion card */}
        {completed && (
          <div className="rounded-xl border border-emerald-500/30 bg-emerald-950/20 p-4">
            <div className="flex items-start gap-2.5">
              <Check className="mt-0.5 h-5 w-5 shrink-0 text-emerald-400" />
              <div>
                <p className="text-sm font-semibold text-emerald-200">You&apos;re all set!</p>
                <p className="mt-1 flex items-start gap-1.5 text-xs text-blue-200">
                  <Mail className="mt-0.5 h-3.5 w-3.5 shrink-0 text-gold" />
                  A VoltSol tech will reach out shortly with your personalized estimate.
                </p>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Input bar — pinned to bottom, above iOS safe area */}
      <form
        onSubmit={handleSubmit}
        className="border-t border-navy-500/40 bg-navy-700/60 px-3 py-3"
        style={{ paddingBottom: 'calc(0.75rem + env(safe-area-inset-bottom))' }}
      >
        {/* Honeypot */}
        <div style={{ display: 'none' }} aria-hidden="true">
          <input
            type="text"
            name="website"
            value={website}
            onChange={(e) => setWebsite(e.target.value)}
            tabIndex={-1}
            autoComplete="off"
          />
        </div>
        <div className="flex items-end gap-2">
          <input
            data-testid="lead-chat-input"
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder={completed ? 'All done — talk soon!' : 'Type your reply…'}
            disabled={streaming || completed}
            enterKeyHint="send"
            autoComplete="off"
            aria-label="Chat message"
            className="min-h-[44px] flex-1 rounded-xl border border-blue-900 bg-navy-700 px-4 py-2.5 text-[16px] text-white placeholder-blue-300/40 focus:outline-none focus:ring-2 focus:ring-gold disabled:opacity-60"
          />
          <button
            type="submit"
            disabled={streaming || completed || !input.trim()}
            aria-label="Send"
            className="flex h-[44px] w-[44px] shrink-0 items-center justify-center rounded-xl bg-gold text-navy transition-colors hover:bg-gold-400 disabled:cursor-not-allowed disabled:opacity-50"
          >
            <Send className="h-5 w-5" />
          </button>
        </div>
        <button
          type="button"
          onClick={() => {
            track('chat_fallback_to_form', { session_id: sid, reason: 'user_link' });
            onHandoff();
          }}
          className="mt-2 w-full text-center text-xs text-blue-300/70 underline-offset-2 hover:text-gold hover:underline"
        >
          Prefer the form?
        </button>
      </form>
    </div>
  );
}
