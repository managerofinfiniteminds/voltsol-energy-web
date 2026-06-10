"use client";

import { Button } from "./Button";

export function StickyMobileCTA() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-blue-900/50 bg-navy/95 p-3 backdrop-blur-md sm:hidden">
      <Button href="#quote" fullWidth className="sm:w-full">
        Get My Quote
      </Button>
    </div>
  );
}
