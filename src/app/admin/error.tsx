"use client";

import { useEffect } from "react";

export default function AdminError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex min-h-[50vh] flex-col items-center justify-center px-4 text-center">
      <h2 className="font-display text-xl font-bold text-white">
        Something went wrong
      </h2>
      <p className="mt-2 text-sm text-slate-400">
        The admin panel hit an unexpected error.
      </p>
      <button
        onClick={reset}
        className="mt-6 min-h-[44px] rounded-lg bg-gold px-6 py-3 font-semibold text-navy transition-colors hover:bg-gold-400"
      >
        Try Again
      </button>
    </div>
  );
}
