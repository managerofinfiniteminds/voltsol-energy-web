import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { Container } from "@/components/ui";
import { getAdminSession } from "@/lib/admin-auth";

export const metadata: Metadata = {
  title: "Strategy — VoltSol Admin",
  description: "Internal strategy documents for VoltSol Energy and the leads-business thesis.",
  // Keep this internal strategy doc out of search engines entirely.
  robots: { index: false, follow: false, nocache: true },
};

// Force dynamic so the session check always runs server-side.
export const dynamic = "force-dynamic";

export default async function StrategyPage() {
  // Hard auth gate (defense-in-depth on top of the middleware cookie gate):
  // verify a real admin session so this internal doc can never render to a
  // logged-out visitor.
  const session = await getAdminSession();
  if (!session) {
    redirect("/admin/login");
  }

  return (
    <section className="min-h-screen bg-gradient-to-b from-navy-900 to-navy-800 py-12 sm:py-16 lg:py-20">
      <Container className="mx-auto max-w-5xl">
        {/* Header */}
        <div className="mb-12 border-b border-gold/20 pb-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-10 w-10 rounded-full bg-gold/20 flex items-center justify-center">
              <span className="text-lg">⚡</span>
            </div>
            <h1 className="text-4xl font-display font-bold text-white">
              Strategy
            </h1>
          </div>
          <p className="text-lg text-blue-300 max-w-3xl">
            Internal, confidential strategy documents — the leads-business thesis beyond VoltSol, and downstream ideas being tracked against it. Not for external distribution.
          </p>
        </div>

        {/* Vision statement */}
        <div className="mb-12 rounded-2xl border border-gold/30 bg-navy-800/50 p-8">
          <div className="flex items-center gap-3 mb-3">
            <span className="text-2xl">🧭</span>
            <h2 className="text-2xl font-bold text-white">The Leads-Business Vision</h2>
          </div>
          <p className="text-blue-300 text-sm leading-relaxed mb-4">
            &ldquo;Angie&apos;s List and Thumbtack sell a directory. We sell a lead.&rdquo; The thesis for a leads-generation business beyond VoltSol Energy itself — low-friction intent capture, licensed-pro registries as a zero-signup distribution mechanism, and VoltSol as the live proof-of-concept. Includes <strong className="text-white">Phase 3.5</strong>: selling an already-closed, signed contract as a tradeable asset, not just a qualified lead.
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href="/admin/download/VOLTSOL-VISION-STATEMENT.html"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-lg border border-gold/30 bg-navy-700/50 hover:bg-navy-700/80 transition px-4 py-2.5 text-sm font-semibold text-gold"
            >
              <span>📖</span> View branded pitch (HTML)
            </a>
            <a
              href="/admin/download/VOLTSOL-VISION-STATEMENT.md"
              className="flex items-center gap-2 rounded-lg border border-blue-900/40 bg-navy-700/40 hover:bg-navy-700/70 transition px-4 py-2.5 text-sm text-blue-300"
            >
              <span>📄</span> Download full markdown
            </a>
          </div>
        </div>

        {/* Josh Orozco brokerage model */}
        <div className="mb-12 rounded-2xl border border-blue-900/40 bg-navy-800/40 p-8">
          <div className="flex items-center gap-3 mb-3">
            <span className="text-2xl">📞</span>
            <h2 className="text-2xl font-bold text-white">The Brokerage Model (Josh Orozco)</h2>
          </div>
          <p className="text-blue-300 text-sm leading-relaxed mb-4">
            Instead of selling a qualified lead, sell an already-closed, signed contract as a tradeable financial instrument — a legally binding brokerage contract sold outright (or auctioned) to the highest-bidding licensed installer. Rep gets paid in days, not months; installer gets a done deal with no sales-cycle risk. Logged as Phase 3.5 above — a further, heavier regulatory lane than data brokering, and explicitly flagged as needing real legal review before it&apos;s more than a thesis.
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href="/admin/download/JOSH-BROKERAGE-STRATEGY-SUMMARY.md"
              className="flex items-center gap-2 rounded-lg border border-gold/20 bg-navy-700/40 hover:bg-navy-700/60 transition px-4 py-2.5 text-sm font-semibold text-white"
            >
              <span>📝</span> Strategy summary
            </a>
            <a
              href="/admin/download/JOSH-OROZCO-CALL-TRANSCRIPT.md"
              className="flex items-center gap-2 rounded-lg border border-blue-900/40 bg-navy-700/40 hover:bg-navy-700/70 transition px-4 py-2.5 text-sm text-blue-300"
            >
              <span>🎙️</span> Full call transcript
            </a>
          </div>
          <p className="text-blue-400 text-xs mt-4">
            Recorded call, Thu 2026-07-02 ~9:00 PM PDT. Speaker attribution in the transcript is inferred from context, not verified diarization.
          </p>
        </div>

        {/* Sales AI strategy */}
        <div className="mb-12 rounded-2xl border border-blue-900/40 bg-navy-800/40 p-8">
          <div className="flex items-center gap-3 mb-3">
            <span className="text-2xl">🤖</span>
            <h2 className="text-2xl font-bold text-white">The VoltSol Sales AI</h2>
          </div>
          <p className="text-blue-300 text-sm leading-relaxed mb-4">
            Beyond renting a generic frontier model, an owned, fine-tuned sales AI trained on VoltSol&apos;s own closing methodology &mdash; residential and enterprise/C&amp;I. <strong className="text-white">Solar is the first vertical, not the only one</strong> &mdash; the architecture is built so additional verticals can be added later on the same platform. Glossary-first for mixed technical/non-technical readers, corpus-build plan (including nationwide field-research interviews as training material), hosting/HA architecture, and a phased rollout targeting <strong className="text-white">January 1, 2027</strong>. Externally audited and revised by an independent AI reviewer (Fable 5) before publication &mdash; see Section 9&apos;s honest risk flags and Section 10&apos;s open decisions.
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href="/admin/download/VOLTSOL-SOLAR-AI-STRATEGY.md"
              className="flex items-center gap-2 rounded-lg border border-gold/20 bg-navy-700/40 hover:bg-navy-700/60 transition px-4 py-2.5 text-sm font-semibold text-white"
            >
              <span>📄</span> Full strategy &amp; rollout plan
            </a>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-16 pt-12 border-t border-blue-900/30 text-center text-blue-400 text-sm">
          <p>VoltSol Energy — Internal Strategy</p>
          <p className="mt-2">Confidential. Not for external distribution.</p>
        </div>
      </Container>
    </section>
  );
}
