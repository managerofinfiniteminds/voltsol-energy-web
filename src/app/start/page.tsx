import type { Metadata } from 'next';
import { Section, Container } from '@/components/ui';
import EstimateFlow from '@/components/EstimateFlow';

export const metadata: Metadata = {
  title: 'Get Your Free Estimate — VoltSol Energy',
  description:
    'Answer a few quick questions and get your personalized off-grid solar estimate. Under $10,000 all-in for Northern California homes.',
};

interface StartPageProps {
  searchParams: { campaign?: string };
}

export default function StartPage({ searchParams }: StartPageProps) {
  const campaignCode = searchParams.campaign;

  return (
    <Section className="hero-bg relative overflow-hidden py-12 sm:py-16">
      {/* Background decorations */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="solar-rays absolute inset-x-0 top-0 h-[320px]" />
        <div className="absolute -right-40 -top-24 h-[420px] w-[420px] rounded-full border-2 border-blue-500/10" />
      </div>

      <Container className="relative">
        <div className="mx-auto max-w-xl">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="font-display text-3xl font-bold leading-tight sm:text-4xl">
              Get Your <span className="text-gold">Free Estimate</span>
            </h1>
            <p className="mt-3 text-blue-300">
              Answer a few quick questions to see what you could save.
            </p>
          </div>

          {/* Flow container */}
          <div className="rounded-2xl border border-navy-500/40 bg-gradient-to-br from-navy-700 to-navy-800 p-6 sm:p-8">
            <EstimateFlow campaignCode={campaignCode} />
          </div>

          {/* Trust bar */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs font-medium uppercase tracking-wider text-blue-300/60">
            <span>Free estimate</span>
            <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-gold/40" />
            <span>No pressure</span>
            <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-gold/40" />
            <span>Under $10K</span>
          </div>
        </div>
      </Container>
    </Section>
  );
}
