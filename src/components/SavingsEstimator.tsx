'use client';

import { useState, useEffect, useRef } from 'react';
import { setEstimate, setBillPrefill } from '@/lib/attribution';
import { track } from '@/lib/track';
import { cn } from '@/lib/utils';

// ─── Assumptions (easy to tune) ────────────────────────────────────────────
const PGE_ANNUAL_INCREASE = 0.06;   // 6% / year average PG&E rate increase
const SYSTEM_COST = 9_500;          // VoltSol all-in system cost (under $10k)
const SYSTEM_YEARS = 25;            // standard solar system lifetime
// ───────────────────────────────────────────────────────────────────────────

/** Sum of a geometric series: bill*12 * ((r^n - 1) / (r - 1)) */
function calcPge25yr(monthlyBill: number): number {
  const r = 1 + PGE_ANNUAL_INCREASE;
  const factor = (Math.pow(r, SYSTEM_YEARS) - 1) / (r - 1);
  return Math.round(monthlyBill * 12 * factor);
}

function calcPayback(monthlyBill: number): number {
  const annual = monthlyBill * 12;
  if (annual <= 0) return 0;
  return Math.round((SYSTEM_COST / annual) * 10) / 10; // 1 decimal
}

function billToEnum(bill: number): string {
  if (bill < 100) return 'Under $100';
  if (bill < 200) return '$100\u2013$200';
  if (bill < 300) return '$200\u2013$300';
  return '$300+';
}

// Animated number using rAF (respects prefers-reduced-motion via CSS check)
function useAnimatedNumber(target: number, active: boolean) {
  const [display, setDisplay] = useState(target);
  const prevTarget = useRef(target);
  const rafRef = useRef<number | null>(null);
  const prefersReduced =
    typeof window !== 'undefined'
      ? window.matchMedia('(prefers-reduced-motion: reduce)').matches
      : false;

  useEffect(() => {
    if (!active) {
      setDisplay(target);
      return;
    }
    if (prefersReduced) {
      setDisplay(target);
      prevTarget.current = target;
      return;
    }
    if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
    const from = prevTarget.current;
    prevTarget.current = target;
    const duration = 800;
    const start = performance.now();
    const step = (now: number) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(Math.round(from + (target - from) * eased));
      if (progress < 1) rafRef.current = requestAnimationFrame(step);
    };
    rafRef.current = requestAnimationFrame(step);
    return () => {
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
    };
  }, [target, active, prefersReduced]);

  return display;
}

interface SavingsEstimatorProps {
  className?: string;
}

export default function SavingsEstimator({ className }: SavingsEstimatorProps) {
  const [bill, setBill] = useState(200);
  const [hasInteracted, setHasInteracted] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  // Trigger initial animation when scrolled into view
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          obs.disconnect();
        }
      },
      { rootMargin: '-80px' }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const pge25yr = calcPge25yr(bill);
  const savings = Math.max(0, pge25yr - SYSTEM_COST);
  const payback = calcPayback(bill);
  const active = inView || hasInteracted;

  const animatedPge = useAnimatedNumber(pge25yr, active);
  const animatedSavings = useAnimatedNumber(savings, active);

  function handleSlider(e: React.ChangeEvent<HTMLInputElement>) {
    setBill(Number(e.target.value));
    if (!hasInteracted) setHasInteracted(true);
  }

  function handleCta() {
    setEstimate(savings);
    setBillPrefill(billToEnum(bill));
    track('estimator_complete', { bill, savings, payback });
    const el = document.getElementById('quote');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  }

  return (
    <section
      ref={containerRef}
      className={cn('py-16 sm:py-20 bg-navy', className)}
      aria-label="Solar savings estimator"
    >
      <div className="mx-auto max-w-3xl px-4">
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="font-display text-3xl font-bold sm:text-4xl lg:text-5xl">
            See your{' '}
            <span className="text-gold">real numbers.</span>
          </h2>
          <p className="mt-3 text-blue-300 text-lg">
            Drag to your current monthly PG&amp;E bill.
          </p>
        </div>

        {/* Slider */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-blue-300">$50/mo</span>
            <span className="font-display text-2xl font-bold text-white">
              ${bill}<span className="text-lg text-blue-300">/mo</span>
            </span>
            <span className="text-sm text-blue-300">$600/mo</span>
          </div>
          <input
            type="range"
            min={50}
            max={600}
            step={10}
            value={bill}
            onChange={handleSlider}
            aria-label="Monthly PG&E bill amount"
            className="w-full h-3 appearance-none rounded-full cursor-pointer
              bg-navy-600
              [&::-webkit-slider-thumb]:appearance-none
              [&::-webkit-slider-thumb]:w-6
              [&::-webkit-slider-thumb]:h-6
              [&::-webkit-slider-thumb]:rounded-full
              [&::-webkit-slider-thumb]:bg-gold
              [&::-webkit-slider-thumb]:shadow-lg
              [&::-webkit-slider-thumb]:cursor-pointer
              [&::-moz-range-thumb]:w-6
              [&::-moz-range-thumb]:h-6
              [&::-moz-range-thumb]:rounded-full
              [&::-moz-range-thumb]:bg-gold
              [&::-moz-range-thumb]:border-0
              [&::-moz-range-thumb]:cursor-pointer
            "
            style={{
              background: `linear-gradient(to right, #F59E0B 0%, #F59E0B ${((bill - 50) / 550) * 100}%, #0F2D5A ${((bill - 50) / 550) * 100}%, #0F2D5A 100%)`,
            }}
          />
        </div>

        {/* Results grid */}
        <div className="grid grid-cols-2 gap-4 sm:gap-6 mb-8">
          {/* Annual PGE cost */}
          <div className="rounded-xl border border-red-500/20 bg-red-950/20 p-5 text-center">
            <p className="text-xs uppercase tracking-wider text-red-400 mb-1">Annual PG&amp;E cost</p>
            <p className="font-display text-2xl sm:text-3xl font-bold text-red-300">
              ${(bill * 12).toLocaleString()}
            </p>
          </div>

          {/* VoltSol system */}
          <div className="rounded-xl border border-gold/30 bg-gold/5 p-5 text-center">
            <p className="text-xs uppercase tracking-wider text-gold mb-1">VoltSol system</p>
            <p className="font-display text-2xl sm:text-3xl font-bold text-gold">
              Under $10k
            </p>
            <p className="text-xs text-blue-300/60 mt-0.5">one-time</p>
          </div>

          {/* 25-yr PGE total */}
          <div className="rounded-xl border border-red-500/20 bg-red-950/20 p-5 text-center">
            <p className="text-xs uppercase tracking-wider text-red-400 mb-1">
              25-yr PG&amp;E total
              <span className="block text-blue-300/60 normal-case tracking-normal mt-0.5">
                w/ ~6%/yr rate increases
              </span>
            </p>
            <p className="font-display text-2xl sm:text-3xl font-bold text-red-300 tabular-nums">
              ${animatedPge.toLocaleString()}
            </p>
          </div>

          {/* Potential savings */}
          <div className="rounded-xl border border-emerald-500/30 bg-emerald-950/20 p-5 text-center">
            <p className="text-xs uppercase tracking-wider text-emerald-400 mb-1">Potential savings</p>
            <p className="font-display text-2xl sm:text-3xl font-bold text-emerald-300 tabular-nums">
              ${animatedSavings.toLocaleString()}
            </p>
            <p className="text-xs text-blue-300/60 mt-0.5">over 25 years</p>
          </div>
        </div>

        {/* Payback + CTA */}
        <div className="text-center">
          <p className="text-blue-100 text-lg mb-6">
            At ${bill}/mo, your system could pay for itself in{' '}
            <span className="font-bold text-white">{payback} year{payback !== 1 ? 's' : ''}</span>
            &nbsp;&mdash; then the power is free.
          </p>

          <button
            onClick={handleCta}
            className="cta-glow inline-flex items-center gap-2 bg-gold hover:bg-gold-400 text-navy font-bold text-lg px-8 py-4 rounded-xl transition-colors duration-200"
          >
            Get My Free Estimate
          </button>

          <p className="mt-4 text-xs text-blue-300/60">
            *Estimate based on ${SYSTEM_COST.toLocaleString()} system cost and {(PGE_ANNUAL_INCREASE * 100).toFixed(0)}%/yr PG&amp;E average increase.
            {' '}Exact pricing confirmed in your free quote.
          </p>
        </div>
      </div>
    </section>
  );
}
