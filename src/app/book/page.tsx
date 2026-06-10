import type { Metadata } from "next";
import BookingFlow from "@/components/BookingFlow";
import { Section, Container } from "@/components/ui";
import { CalendarCheck, Home, FileText } from "lucide-react";

export const metadata: Metadata = {
  title: "Book a Free Estimate — VoltSol Energy",
  description:
    "Pick a time that works for you. Hugo comes to your home, assesses your property, and builds a custom off-grid solar proposal. Free, no pressure.",
};

export default function BookPage() {
  return (
    <Section className="hero-bg relative overflow-hidden">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="solar-rays absolute inset-x-0 top-0 h-[320px]" />
        <div className="absolute -right-40 -top-24 h-[420px] w-[420px] rounded-full border-2 border-blue-500/10" />
      </div>
      <Container className="relative">
        <div className="mx-auto max-w-5xl">
          <h1 className="text-center font-display text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
            Book your <span className="text-gold">free estimate.</span>
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-center text-lg text-blue-300">
            Pick a time that works for you. Hugo comes to your home &mdash; no
            pressure, no obligation.
          </p>

          <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_280px] lg:gap-12">
            <BookingFlow />

            {/* Sidebar: Why book */}
            <aside className="order-first lg:order-last">
              <div className="rounded-2xl border border-navy-500/40 bg-gradient-to-br from-navy-700 to-navy-800 p-6">
                <h2 className="font-display text-lg font-bold text-white">
                  Why book a VoltSol estimate?
                </h2>
                <ul className="mt-5 space-y-5">
                  <li className="flex items-start gap-3">
                    <Home className="mt-0.5 h-5 w-5 shrink-0 text-gold" aria-hidden="true" />
                    <span className="text-sm leading-relaxed text-blue-100">
                      Hugo assesses your actual home &mdash; roof, panel
                      placement, energy use &mdash; not a satellite guess.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <FileText className="mt-0.5 h-5 w-5 shrink-0 text-gold" aria-hidden="true" />
                    <span className="text-sm leading-relaxed text-blue-100">
                      You get a custom proposal with an exact price. Most
                      systems come in under $10,000 all-in.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CalendarCheck className="mt-0.5 h-5 w-5 shrink-0 text-gold" aria-hidden="true" />
                    <span className="text-sm leading-relaxed text-blue-100">
                      Zero pressure. No sales floor, no follow-up barrage. Take
                      the proposal and decide on your own time.
                    </span>
                  </li>
                </ul>
              </div>
            </aside>
          </div>
        </div>
      </Container>
    </Section>
  );
}
