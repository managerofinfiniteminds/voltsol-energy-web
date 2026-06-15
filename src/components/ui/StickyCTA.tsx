"use client";

import { useState, useEffect } from "react";
import { Button } from "./Button";

/**
 * StickyCTA — persistent mobile CTA bar that appears after the hero scrolls out of view.
 *
 * Mobile only: fixed bottom bar (thumb-reachable).
 * Desktop intentionally has NO sticky bar — the site header already keeps a
 * persistent CTA button visible, so a second top bar would be redundant.
 *
 * Uses IntersectionObserver to detect when the hero exits the viewport.
 */
export function StickyCTA({ ctaText }: { ctaText?: string }) {
  const [visible, setVisible] = useState(false);
  const cta = ctaText || "Get My Free Estimate";

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
    /* Mobile only: fixed bottom bar. No desktop bar — header CTA covers it. */
    <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden">
      <div className="bg-navy/95 backdrop-blur-md border-t border-gold/20 shadow-lg">
        <div className="px-4 py-3">
          <Button href="/start" size="lg" fullWidth>
            {cta}
          </Button>
        </div>
      </div>
    </div>
  );
}
