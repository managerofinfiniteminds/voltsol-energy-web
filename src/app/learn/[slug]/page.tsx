import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Container, Section, Reveal } from '@/components/ui';
import { LEARN_ARTICLES, type LearnArticle } from '@/lib/learn-content';
import { ArrowLeft, ExternalLink } from 'lucide-react';
import PageTracker from '@/components/PageTracker';
import ScrollDepthTracker from '@/components/ScrollDepthTracker';

export async function generateStaticParams() {
  return LEARN_ARTICLES.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = LEARN_ARTICLES.find((a) => a.slug === slug);
  if (!article) return {};

  return {
    title: article.metaTitle,
    description: article.metaDescription,
    alternates: { canonical: `https://voltsolenergy.com/learn/${slug}` },
    openGraph: {
      title: article.metaTitle,
      description: article.metaDescription,
      url: `https://voltsolenergy.com/learn/${slug}`,
      type: 'article',
    },
  };
}

function getStructuredData(article: LearnArticle, slug: string) {
  const breadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://voltsolenergy.com' },
      { '@type': 'ListItem', position: 2, name: 'Learn', item: 'https://voltsolenergy.com/learn' },
      {
        '@type': 'ListItem',
        position: 3,
        name: article.title,
        item: `https://voltsolenergy.com/learn/${slug}`,
      },
    ],
  };

  const articleData = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    description: article.metaDescription,
    author: { '@type': 'Organization', name: 'VoltSol Energy' },
    publisher: {
      '@type': 'Organization',
      name: 'VoltSol Energy',
      url: 'https://voltsolenergy.com',
    },
    datePublished: '2026-06-16',
    dateModified: '2026-06-16',
  };

  const faqData = article.faq
    ? {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: article.faq.map((item) => ({
          '@type': 'Question',
          name: item.q,
          acceptedAnswer: { '@type': 'Answer', text: item.a },
        })),
      }
    : null;

  return { breadcrumb, articleData, faqData };
}

export default async function LearnArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = LEARN_ARTICLES.find((a) => a.slug === slug);
  if (!article) notFound();

  const { breadcrumb, articleData, faqData } = getStructuredData(article, slug);

  // Get 2-3 related articles (simple: pick adjacent articles in the array)
  const currentIndex = LEARN_ARTICLES.findIndex((a) => a.slug === slug);
  const relatedArticles = LEARN_ARTICLES.filter(
    (a, i) => a.slug !== slug && Math.abs(i - currentIndex) <= 2
  ).slice(0, 3);

  return (
    <>
      <PageTracker />
      <ScrollDepthTracker />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleData) }}
      />
      {faqData && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqData) }}
        />
      )}

      {/* Breadcrumb */}
      <Section className="border-b border-white/10 py-4">
        <Container>
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-sm text-blue-300">
            <Link href="/" className="hover:text-white">
              Home
            </Link>
            <span>/</span>
            <Link href="/learn" className="hover:text-white">
              Learn
            </Link>
            <span>/</span>
            <span className="text-white">{article.title}</span>
          </nav>
        </Container>
      </Section>

      {/* Article Header */}
      <Section className="hero-bg relative overflow-hidden">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0">
          <div className="solar-rays absolute inset-x-0 top-0 h-[240px] opacity-60" />
        </div>
        <Container className="relative">
          <div className="mx-auto max-w-3xl">
            <Reveal immediate>
              <Link
                href="/learn"
                className="inline-flex items-center gap-2 text-sm font-semibold text-gold hover:text-gold/80"
              >
                <ArrowLeft className="h-4 w-4" /> Back to all articles
              </Link>
            </Reveal>
            <Reveal immediate delay={0.1}>
              <h1 className="mt-4 font-display text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
                {article.title}
              </h1>
            </Reveal>
          </div>
        </Container>
      </Section>

      {/* Article Body */}
      <Section alt>
        <Container>
          <article className="mx-auto max-w-3xl">
            <div className="prose prose-invert prose-lg max-w-none">
              {article.sections.map((section, i) => (
                <div key={i} className="mb-8">
                  {section.heading && (
                    <h2 className="mt-10 font-display text-2xl font-bold text-white first:mt-0 sm:text-3xl">
                      {section.heading}
                    </h2>
                  )}
                  {section.paragraphs.map((p, j) => (
                    <p key={j} className="mt-4 leading-relaxed text-blue-100">
                      {p}
                    </p>
                  ))}
                  {section.list && (
                    <div className="mt-6">
                      {section.list.title && (
                        <p className="font-semibold text-white">{section.list.title}</p>
                      )}
                      <ul className="mt-3 space-y-2 pl-5">
                        {section.list.items.map((item, k) => (
                          <li key={k} className="text-blue-100">
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* FAQ Section */}
            {article.faq && article.faq.length > 0 && (
              <div className="mt-14 border-t border-white/10 pt-10">
                <h2 className="font-display text-2xl font-bold text-white sm:text-3xl">
                  Frequently Asked Questions
                </h2>
                <div className="mt-6 space-y-6">
                  {article.faq.map((item, i) => (
                    <details
                      key={i}
                      className="group rounded-lg border border-white/10 bg-navy-700/40 p-5"
                    >
                      <summary className="flex cursor-pointer list-none items-start justify-between gap-4 font-semibold text-white">
                        <span>{item.q}</span>
                        <span className="text-gold transition-transform group-open:rotate-180">
                          ▾
                        </span>
                      </summary>
                      <p className="mt-4 leading-relaxed text-blue-200">{item.a}</p>
                    </details>
                  ))}
                </div>
              </div>
            )}
          </article>
        </Container>
      </Section>

      {/* CTA Block */}
      <Section>
        <Container>
          <div className="mx-auto max-w-2xl rounded-2xl border border-gold/40 bg-gradient-to-b from-gold/10 to-transparent p-8 text-center sm:p-12">
            <Reveal>
              <h2 className="font-display text-3xl font-bold sm:text-4xl">
                Ready to see your savings?
              </h2>
              <p className="mt-4 text-lg text-blue-200">
                Get a free estimate sized for your home. No pressure. No upsell. Just real numbers.
              </p>
              <div className="mt-6 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
                <a
                  href={`/start?campaign=learn-${slug}`}
                  className="inline-flex items-center justify-center rounded-lg bg-gold px-6 py-3 font-semibold text-navy-800 shadow-lg transition-all hover:bg-gold/90 hover:shadow-xl"
                >
                  Get My Free Estimate
                </a>
                <Link
                  href="/technology"
                  className="inline-flex items-center gap-2 rounded-lg border border-white/20 bg-navy-700/40 px-6 py-3 font-semibold text-white transition-all hover:border-gold/40 hover:bg-navy-700/60"
                >
                  See How It Works <ExternalLink className="h-4 w-4" />
                </Link>
              </div>
            </Reveal>
          </div>
        </Container>
      </Section>

      {/* Related Articles */}
      {relatedArticles.length > 0 && (
        <Section alt>
          <Container>
            <div className="mx-auto max-w-3xl">
              <h2 className="font-display text-2xl font-bold sm:text-3xl">Keep reading</h2>
              <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {relatedArticles.map((related) => (
                  <Link
                    key={related.slug}
                    href={`/learn/${related.slug}`}
                    className="group block rounded-lg border border-white/10 bg-navy-700/40 p-5 transition-all hover:border-gold/40 hover:bg-navy-700/60"
                  >
                    <h3 className="font-display text-lg font-bold leading-tight text-white group-hover:text-gold">
                      {related.title}
                    </h3>
                    <p className="mt-2 text-sm text-blue-200">{related.excerpt}</p>
                  </Link>
                ))}
              </div>
              <div className="mt-8 text-center">
                <Link
                  href="/learn"
                  className="inline-flex items-center gap-2 font-semibold text-gold hover:text-gold/80"
                >
                  <ArrowLeft className="h-4 w-4" /> View all articles
                </Link>
              </div>
            </div>
          </Container>
        </Section>
      )}

      {/* Internal Links Section (SEO juice) */}
      <Section className="border-t border-white/10 py-8">
        <Container>
          <div className="mx-auto max-w-3xl text-center text-sm text-blue-300">
            <p>
              Explore more:{' '}
              <Link href="/technology" className="font-semibold text-gold hover:underline">
                How VoltSol Works
              </Link>
              {' • '}
              <Link
                href="/market/solar/california"
                className="font-semibold text-gold hover:underline"
              >
                Solar in California
              </Link>
              {' • '}
              <Link href="/start" className="font-semibold text-gold hover:underline">
                Get Your Free Estimate
              </Link>
            </p>
          </div>
        </Container>
      </Section>
    </>
  );
}
