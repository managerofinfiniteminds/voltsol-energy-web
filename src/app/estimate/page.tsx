import type { Metadata } from "next";
import { Container, Button } from "@/components/ui";
import SavingsEstimator from "@/components/SavingsEstimator";
import { CalendarCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "Savings Estimate | VoltSol Energy",
  description:
    "See what your Northern California home could save by going off-grid with a VoltSol solar + battery system — under $10,000 all-in.",
};

export default function EstimatePage() {
  return (
    <>
      {/* Hero-lite header */}
      <section className="border-b border-blue-900/30 pt-12 pb-10 sm:pt-16 sm:pb-12">
        <Container className="text-center">
          <p className="mb-3 text-xs uppercase tracking-[0.2em] text-gold/70">
            Savings Estimate
          </p>
          <h1 className="font-display text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
            What could your home{" "}
            <span className="text-gold">save?</span>
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-lg text-blue-300">
            Slide to your monthly PG&amp;E bill and see the 25-year picture.
          </p>
        </Container>
      </section>

      <SavingsEstimator />

      {/* CTA to booking */}
      <section className="pb-16 sm:pb-20">
        <Container className="mx-auto max-w-2xl">
          <div className="rounded-2xl border border-gold/30 bg-gold/5 p-6 text-center sm:p-8">
            <p className="font-display text-lg font-bold text-white">
              Ready for the exact number for your home?
            </p>
            <p className="mt-2 text-sm text-blue-300">
              Book a free Zoom estimate with Hugo &mdash; no pressure, no
              obligation.
            </p>
            <div className="mt-5 flex justify-center">
              <Button href="/book" size="lg">
                <CalendarCheck className="mr-2 h-5 w-5" aria-hidden="true" />
                Book My Free Estimate
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
