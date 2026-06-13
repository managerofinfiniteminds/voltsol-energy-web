"use client";

import { useState, useEffect } from "react";
import { Button } from "./Button";

/**
 * StickyCTA — persistent CTA bar that appears after hero scrolls out of view.
 *
 * Mobile: fixed bottom bar
 * Desktop: slides in from top as compact bar
 *
 * Uses IntersectionObserver to detect when hero exits viewport.
 * CSS-visible by default when shown (no opacity:0 animation traps).
 */
export function StickyCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Look for the hero section - we'll observe its exit from viewport
    // The hero is the first Section element on the homepage
    const hero = document.querySelector("section");
    if (!hero) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        // Show sticky CTA when hero is NOT intersecting (scrolled past)
        setVisible(!entry.isIntersecting);
      },
      {
        // Trigger when hero is completely out of view
        threshold: 0,
        rootMargin: "-80px 0px 0px 0px", // Account for sticky header height
      }
    );

    observer.observe(hero);

    return () => observer.disconnect();
  }, []);

  if (!visible) return null;

  return (
    <>
      {/* Desktop: top bar below header */}
      <div className="fixed top-20 sm:top-24 left-0 right-0 z-40 hidden md:block">
        <div className="bg-navy/95 backdrop-blur-md border-b border-gold/20 shadow-lg">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex h-14 items-center justify-between">
              <p className="text-sm font-medium text-blue-100">
                Off-grid solar under $10K — free estimate, no obligation
              </p>
              <Button href="/book" size="sm">
                Get My Free Estimate
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile: fixed bottom bar */}
      <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden">
        <div className="bg-navy/95 backdrop-blur-md border-t border-gold/20 shadow-lg">
          <div className="px-4 py-3">
            <Button href="/book" size="lg" fullWidth>
              Get My Free Estimate
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
