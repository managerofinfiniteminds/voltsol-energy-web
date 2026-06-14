'use client';

import { useEffect, useRef } from 'react';
import { track } from '@/lib/track';

const DEPTH_THRESHOLDS = [25, 50, 75, 100] as const;

export default function ScrollDepthTracker() {
  const firedRef = useRef<Set<number>>(new Set());

  useEffect(() => {
    if (typeof window === 'undefined') return;

    function handleScroll() {
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (docHeight <= 0) return;

      const scrolled = window.scrollY;
      const percentScrolled = Math.round((scrolled / docHeight) * 100);

      for (const threshold of DEPTH_THRESHOLDS) {
        if (percentScrolled >= threshold && !firedRef.current.has(threshold)) {
          firedRef.current.add(threshold);
          track('scroll_depth', { depth_pct: threshold });
        }
      }
    }

    // Debounce scroll handler
    let ticking = false;
    function onScroll() {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    }

    window.addEventListener('scroll', onScroll, { passive: true });

    // Fire initial check in case page loads scrolled
    handleScroll();

    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  return null;
}
