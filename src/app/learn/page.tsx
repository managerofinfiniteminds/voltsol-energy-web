import type { Metadata } from 'next';
import Link from 'next/link';
import { Container, Section, Reveal } from '@/components/ui';
import { LEARN_ARTICLES } from '@/lib/learn-content';
import { BookOpen, ArrowRight } from 'lucide-react';
import PageTracker from '@/components/PageTracker';

export const metadata: Metadata = {
  title: 'Learn About Residential Solar + Battery Storage, EG4, & Energy Independence | VoltSol Energy',
  description:
    'Everything you need to know about residential solar + battery storage, EG4 batteries, California solar permits, NEM 3.0 net billing, and how to keep the power you make instead of selling it to the grid.',
  alternates: { canonical: 'https://voltsolenergy.com/learn' },
  openGraph: {
    title: 'Learn About Residential Solar + Battery Storage & Energy Independence | VoltSol',
    description:
      'Guides and articles on residential solar + battery storage, EG4 equipment, California solar policy, and real-world energy savings.',
    url: 'https://voltsolenergy.com/learn',
  },
};

const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://voltsolenergy.com' },
    { '@type': 'ListItem', position: 2, name: 'Learn', item: 'https://voltsolenergy.com/learn' },
  ],
};

export default function LearnIndexPage() {
  return (
    <>
      <PageTracker />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      {/* Hero */}
      <Section className="hero-bg relative overflow-hidden">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0">
          <div className="solar-rays absolute inset-x-0 top-0 h-[280px]" />
        </div>
        <Container className="relative">
          <div className="mx-auto max-w-3xl text-center">
            <Reveal immediate>
              <span className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold/10 px-4 py-1.5 text-sm font-semibold text-gold">
                <BookOpen className="h-4 w-4" /> Knowledge Hub
              </span>
            </Reveal>
            <Reveal immediate delay={0.1}>
              <h1 className="mt-6 font-display text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl">
                Learn About <span className="text-gold">Solar + Battery Storage</span>
              </h1>
            </Reveal>
            <Reveal immediate delay={0.2}>
              <p className="mt-6 text-lg text-blue-200 sm:text-xl">
                Everything you need to know about residential solar + battery storage, EG4 equipment, California solar
                policy, and how to keep the power you make instead of selling it to the grid for pennies.
              </p>
            </Reveal>
          </div>
        </Container>
      </Section>

      {/* Article Grid */}
      <Section alt>
        <Container>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {LEARN_ARTICLES.map((article, i) => (
              <Reveal key={article.slug} delay={0.05 * (i + 1)}>
                <Link
                  href={`/learn/${article.slug}`}
                  className="group block h-full rounded-2xl border border-white/10 bg-navy-700/40 p-6 transition-all hover:border-gold/40 hover:bg-navy-700/60"
                >
                  <h2 className="font-display text-xl font-bold leading-tight text-white group-hover:text-gold">
                    {article.title}
                  </h2>
                  <p className="mt-3 text-sm leading-relaxed text-blue-200">{article.excerpt}</p>
                  <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-gold">
                    Read article <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* CTA */}
      <Section>
        <Container>
          <div className="mx-auto max-w-2xl rounded-2xl border border-gold/40 bg-gradient-to-b from-gold/10 to-transparent p-8 text-center sm:p-12">
            <Reveal>
              <h2 className="font-display text-3xl font-bold sm:text-4xl">
                Ready to cut the cord on your utility?
              </h2>
              <p className="mt-4 text-lg text-blue-200">
                Get a free, no-obligation estimate — see exactly what your home could save.
              </p>
              <div className="mt-6">
                <a
                  href="/start?campaign=learn"
                  className="inline-flex items-center justify-center rounded-lg bg-gold px-6 py-3 font-semibold text-navy-800 shadow-lg transition-all hover:bg-gold/90 hover:shadow-xl"
                >
                  Get My Free Estimate
                </a>
              </div>
            </Reveal>
          </div>
        </Container>
      </Section>
    </>
  );
}
