"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

interface StatCounterProps {
  value: number;
  suffix?: string;
  prefix?: string;
  label: string;
  duration?: number;
  className?: string;
}

export function StatCounter({
  value,
  suffix = "",
  prefix = "",
  label,
  duration = 2,
  className,
}: StatCounterProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-64px" });
  const prefersReduced = useReducedMotion();
  // SSR + first paint render the FINAL value — no zero flash, no layout shift.
  const [display, setDisplay] = useState(value);

  useEffect(() => {
    if (!isInView || prefersReduced) return;

    let raf = 0;
    const start = performance.now();
    const step = (now: number) => {
      const elapsed = (now - start) / 1000;
      const progress = Math.min(elapsed / duration, 1);
      // ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(Math.round(eased * value));
      if (progress < 1) {
        raf = requestAnimationFrame(step);
      }
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [isInView, value, duration, prefersReduced]);

  return (
    <div ref={ref} className={cn("text-center", className)}>
      <p className="font-display text-4xl font-bold tabular-nums text-gold sm:text-5xl">
        {/* Invisible final value reserves width so the count-up never shifts layout */}
        <span className="relative inline-block">
          <span className="invisible" aria-hidden="true">
            {prefix}
            {value.toLocaleString()}
            {suffix}
          </span>
          <span className="absolute inset-0">
            {prefix}
            {display.toLocaleString()}
            {suffix}
          </span>
        </span>
      </p>
      <p className="mt-2 text-sm text-slate-400 sm:text-base">{label}</p>
    </div>
  );
}
