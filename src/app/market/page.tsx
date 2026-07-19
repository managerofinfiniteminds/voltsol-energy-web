import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { MARKETS_BY_STATE, marketPageHref } from '@/lib/market-data';
import { MapPin } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Residential Solar & Battery Storage Markets — California & Texas',
  description:
    'VoltSol installs residential solar + EG4 battery storage across California and Texas — make your own power, store it, and keep the lights on through blackouts. Find your county and city.',
  alternates: {
    canonical: '/market',
  },
};

// Display metadata per state (order controls render order).
const STATE_META: Record<string, { name: string; blurb: string }> = {
  california: {
    name: 'California',
    blurb:
      'High utility rates, NEM 3.0, and frequent PSPS shutoffs make solar paired with battery storage especially valuable across California.',
  },
  texas: {
    name: 'Texas',
    blurb:
      'Deregulated ERCOT power, brutal summer cooling loads, and grid events like Winter Storm Uri make solar + battery backup a smart move across Texas.',
  },
};

const STATE_ORDER = ['california', 'texas'];

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'LocalBusiness',
      name: 'VoltSol Energy',
      description:
        'Residential solar and EG4 battery storage installation serving California and Texas — make your own power, store it, and use it.',
      url: 'https://voltsolenergy.com',
      areaServed: STATE_ORDER.map(s => ({ '@type': 'State', name: STATE_META[s]?.name || s })),
      serviceType: 'Residential Solar and Battery Storage Installation',
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://voltsolenergy.com' },
        { '@type': 'ListItem', position: 2, name: 'Solar Markets', item: 'https://voltsolenergy.com/market' },
      ],
    },
  ],
};

export default function MarketIndexPage() {
  const states = STATE_ORDER.filter(s => (MARKETS_BY_STATE[s]?.length ?? 0) > 0);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="min-h-screen bg-white">
        {/* Breadcrumb */}
        <nav className="border-b border-gray-100 bg-gray-50 px-4 py-2 text-xs text-gray-500" aria-label="Breadcrumb">
          <ol className="mx-auto flex max-w-7xl flex-wrap items-center gap-1">
            <li><Link href="/" className="hover:text-blue-600">Home</Link></li>
            <li aria-hidden="true">/</li>
            <li className="font-medium text-gray-800">Solar Markets</li>
          </ol>
        </nav>

        {/* Hero image */}
        <div className="relative h-56 w-full overflow-hidden sm:h-72 lg:h-[420px]">
          <Image
            src="/images/hero-blackout-glow.jpg"
            alt="Solar-powered home with battery backup keeping the lights on during a blackout"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
        </div>

        {/* Hero text */}
        <header className="bg-gradient-to-br from-blue-950 via-blue-900 to-blue-800 px-4 py-16 text-white">
          <div className="mx-auto max-w-7xl">
            <p className="mb-2 text-sm font-medium uppercase tracking-wide text-blue-200">
              {states.map(s => STATE_META[s]?.name).filter(Boolean).join(' & ')}
            </p>
            <h1 className="text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
              Residential Solar &amp; Battery Storage Markets
            </h1>
            <p className="mt-4 max-w-2xl text-lg text-blue-100">
              VoltSol installs residential solar paired with EG4 battery storage — so homeowners
              make their own power, store it, and run through blackouts instead of sending it back to the grid
              for a fraction of what they paid. Pick your state, then find your county below.
            </p>

            {/* State picker */}
            {states.length > 1 && (
              <div className="mt-8 flex flex-wrap gap-3">
                {states.map(s => (
                  <a
                    key={s}
                    href={`#state-${s}`}
                    className="inline-flex items-center gap-2 rounded-full border border-blue-300/40 bg-white/10 px-5 py-2 text-sm font-semibold text-white transition hover:bg-white/20"
                  >
                    <MapPin className="h-4 w-4" aria-hidden="true" />
                    {STATE_META[s]?.name || s}
                  </a>
                ))}
              </div>
            )}
          </div>
        </header>

        <main className="mx-auto max-w-7xl px-4 py-12">
          {states.map((state, stateIdx) => {
            const regions = MARKETS_BY_STATE[state] || [];
            const allCities = regions.flatMap(region =>
              region.cities.map(city => ({
                ...city,
                countyName: region.county,
                regionSlug: region.regionSlug,
              }))
            );

            return (
              <section
                key={state}
                id={`state-${state}`}
                className={stateIdx > 0 ? 'mt-20 scroll-mt-4' : 'scroll-mt-4'}
                aria-labelledby={`state-heading-${state}`}
              >
                <div className="border-b border-gray-200 pb-4">
                  <h2 id={`state-heading-${state}`} className="text-3xl font-bold text-gray-900">
                    {STATE_META[state]?.name || state}
                  </h2>
                  {STATE_META[state]?.blurb && (
                    <p className="mt-2 max-w-3xl text-gray-600">{STATE_META[state]?.blurb}</p>
                  )}
                </div>

                {/* Counties */}
                <div className="mt-8">
                  <h3 className="text-xl font-bold text-gray-900">Service Areas by County</h3>
                  <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {regions.map(region => (
                      <Link
                        key={region.regionSlug}
                        href={`/market/solar/${state}/${region.regionSlug}`}
                        className="group flex flex-col gap-3 rounded-lg border border-blue-200 bg-white p-6 shadow-sm transition hover:border-blue-400 hover:shadow-md"
                      >
                        <div className="flex items-center gap-2">
                          <MapPin className="h-5 w-5 text-blue-600" aria-hidden="true" />
                          <h4 className="text-lg font-bold text-gray-900 group-hover:text-blue-700">
                            {region.county}
                          </h4>
                        </div>
                        <p className="text-sm text-gray-600">
                          {region.cities.length} {region.cities.length === 1 ? 'city' : 'cities'} served
                        </p>
                        <div className="text-xs text-blue-600 group-hover:underline">
                          View cities &rarr;
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>

                {/* All Cities */}
                <div className="mt-12">
                  <h3 className="text-xl font-bold text-gray-900">All Cities We Serve</h3>
                  <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    {allCities
                      .sort((a, b) => a.city.localeCompare(b.city))
                      .map(city => (
                        <Link
                          key={`${city.regionSlug}-${city.citySlug}`}
                          href={marketPageHref({
                            vertical: 'solar',
                            state,
                            region: city.regionSlug,
                            city: city.citySlug,
                          })}
                          className="rounded-md border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-800 transition hover:border-blue-400 hover:bg-blue-50 hover:text-blue-700"
                        >
                          <div className="font-semibold">{city.city}</div>
                          <div className="mt-0.5 text-xs text-gray-500">{city.countyName}</div>
                        </Link>
                      ))}
                  </div>
                </div>
              </section>
            );
          })}

          {/* Bottom CTA */}
          <section className="mt-20 rounded-xl border border-blue-200 bg-blue-50 p-8 text-center">
            <h2 className="text-2xl font-bold text-gray-900">Ready to go solar?</h2>
            <p className="mt-2 text-gray-600">
              Get a free, no-obligation quote from a licensed installer in your area.
            </p>
            <div className="mt-6">
              <Link
                href="/start"
                className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-8 py-4 text-base font-semibold text-white transition hover:bg-blue-700"
              >
                Get My Free Estimate
              </Link>
            </div>
          </section>
        </main>

        {/* Footer note */}
        <footer className="border-t border-gray-100 bg-gray-50 px-4 py-6 text-center text-xs text-gray-400">
          <p>
            VoltSol Energy operates a licensed contractor marketplace in California and Texas. All estimates
            are regional approximations and do not constitute a savings guarantee.
          </p>
        </footer>
      </div>
    </>
  );
}
