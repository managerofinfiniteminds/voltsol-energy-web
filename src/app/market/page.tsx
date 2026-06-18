import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { NORCAL_SOLAR_MARKETS, marketPageHref } from '@/lib/market-data';
import { MapPin } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Solar Markets We Serve in California | VoltSol Energy',
  description:
    'VoltSol Energy serves Northern California with off-grid solar installations. Browse our service areas across 7 counties and 27+ cities.',
  alternates: {
    canonical: '/market',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'LocalBusiness',
      name: 'VoltSol Energy',
      description: 'Off-grid solar installation serving Northern California',
      url: 'https://voltsolenergy.com',
      areaServed: {
        '@type': 'State',
        name: 'California',
      },
      serviceType: 'Solar Panel Installation',
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
  // All cities across all counties
  const allCities = NORCAL_SOLAR_MARKETS.flatMap(region =>
    region.cities.map(city => ({
      ...city,
      countyName: region.county,
      regionSlug: region.regionSlug,
    }))
  );

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

        {/* Hero image — clean, stands on its own */}
        <div className="relative h-56 w-full overflow-hidden sm:h-72 lg:h-[420px]">
          <Image
            src="/images/hero-blackout-glow.jpg"
            alt="Off-grid solar home with battery backup keeping the lights on during a blackout in Northern California"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
        </div>

        {/* Hero text — solid background, no image behind */}
        <header className="bg-gradient-to-br from-blue-950 via-blue-900 to-blue-800 px-4 py-16 text-white">
          <div className="mx-auto max-w-7xl">
            <p className="mb-2 text-sm font-medium uppercase tracking-wide text-blue-200">
              Northern California
            </p>
            <h1 className="text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
              California Solar Markets
            </h1>
            <p className="mt-4 max-w-2xl text-lg text-blue-100">
              VoltSol Energy serves homeowners across Northern California with off-grid solar installations
              designed to reduce electricity bills and provide energy independence. Browse our service areas below.
            </p>
          </div>
        </header>

        <main className="mx-auto max-w-7xl px-4 py-12">
          {/* Counties */}
          <section aria-labelledby="counties-heading">
            <h2 id="counties-heading" className="text-2xl font-bold text-gray-900">
              Service Areas by County
            </h2>
            <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {NORCAL_SOLAR_MARKETS.map(region => (
                <Link
                  key={region.regionSlug}
                  href={`/market/solar/california/${region.regionSlug}`}
                  className="group flex flex-col gap-3 rounded-lg border border-blue-200 bg-white p-6 shadow-sm transition hover:border-blue-400 hover:shadow-md"
                >
                  <div className="flex items-center gap-2">
                    <MapPin className="h-5 w-5 text-blue-600" aria-hidden="true" />
                    <h3 className="text-lg font-bold text-gray-900 group-hover:text-blue-700">
                      {region.county}
                    </h3>
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
          </section>

          {/* All Cities */}
          <section className="mt-16" aria-labelledby="cities-heading">
            <h2 id="cities-heading" className="text-2xl font-bold text-gray-900">
              All Cities We Serve
            </h2>
            <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {allCities
                .sort((a, b) => a.city.localeCompare(b.city))
                .map(city => (
                  <Link
                    key={`${city.regionSlug}-${city.citySlug}`}
                    href={marketPageHref({
                      vertical: 'solar',
                      state: 'california',
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
          </section>

          {/* Bottom CTA */}
          <section className="mt-16 rounded-xl border border-blue-200 bg-blue-50 p-8 text-center">
            <h2 className="text-2xl font-bold text-gray-900">
              Ready to go solar?
            </h2>
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
            VoltSol Energy operates a licensed contractor marketplace in Northern California. All estimates
            are regional approximations and do not constitute a savings guarantee.
          </p>
        </footer>
      </div>
    </>
  );
}
