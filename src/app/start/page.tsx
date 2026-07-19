import type { Metadata } from 'next';
import { Section, Container } from '@/components/ui';
import EstimateFlow from '@/components/EstimateFlow';
import { getHomeConfig } from '@/lib/site-config';
import { getLocale } from '@/lib/locale';
import { getDict } from '@/lib/i18n';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'Get Your Free Estimate — VoltSol Energy',
  description:
    'Answer a few quick questions and get your personalized residential solar + battery storage estimate for your home.',
};

interface StartPageProps {
  searchParams: { campaign?: string; bill?: string };
}

export default async function StartPage({ searchParams }: StartPageProps) {
  const campaignCode = searchParams.campaign;
  const initialBill = searchParams.bill;
  // Texas market campaigns route to a lead-broker funnel (no VoltSol price claim).
  const isTexasLead = /^(county-|market-)/.test(campaignCode ?? '') &&
    /(harris|dallas|tarrant|bexar|travis|collin|denton|fort-bend|hidalgo|el-paso|montgomery|williamson)/.test(campaignCode ?? '');
  const locale = getLocale();
  const t = getDict(locale);
  const cfg = await getHomeConfig(locale);

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
              {t.start_h1_pre} <span className="text-gold">{t.start_h1_gold}</span>
            </h1>
            <p className="mt-3 text-blue-300">
              {t.start_sub}
            </p>
          </div>

          {/* Flow container */}
          <div className="rounded-2xl border border-navy-500/40 bg-gradient-to-br from-navy-700 to-navy-800 p-6 sm:p-8">
            <EstimateFlow campaignCode={campaignCode} initialBill={initialBill} tiers={cfg.pricing_tiers} locale={locale} />
          </div>

          {/* Trust bar */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs font-medium uppercase tracking-wider text-blue-300/60">
            <span>{t.trust_free}</span>
            <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-gold/40" />
            <span>{t.trust_no_pressure}</span>
            <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-gold/40" />
            <span>{isTexasLead ? 'Licensed local installers' : 'Solar from $8,700'}</span>
          </div>
        </div>
      </Container>
    </Section>
  );
}
