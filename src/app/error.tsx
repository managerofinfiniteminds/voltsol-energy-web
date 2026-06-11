"use client";

import { useEffect } from "react";
import { Container, Section, Button } from "@/components/ui";

export default function Error({
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
    <Section className="flex min-h-[60vh] items-center justify-center">
      <Container className="text-center">
        <p className="font-display text-5xl font-bold text-gold sm:text-6xl">
          Oops
        </p>
        <h1 className="mt-4 font-display text-2xl font-bold sm:text-3xl">
          Something went wrong
        </h1>
        <p className="mt-3 text-slate-400">
          An unexpected error occurred. Please try again.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button onClick={reset} size="lg">
            Try Again
          </Button>
          <Button href="/" variant="ghost" size="lg">
            Back to Home
          </Button>
        </div>
      </Container>
    </Section>
  );
}
