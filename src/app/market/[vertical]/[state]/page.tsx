import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { NORCAL_SOLAR_MARKETS, marketPageHref } from '@/lib/market-data';
import { MapPin, Zap, Shield, DollarSign } from 'lucide-react';

// Generate static params for state hub (only solar/california currently)
export function generateStaticParams() {
  return [{ vertical: 'solar', state: 'california' }];
}

interface PageProps {
  params: { vertical: string; state: string };
}

export function generateMetadata({ params }: PageProps): Metadata {
  if (params.vertical !== 'solar' || params.state !== 'california') return {};

  const title = 'Off-Grid Solar & Battery Backup in California | VoltSol Energy';
  const description =
    'Off-grid solar + EG4 battery installation across Northern California. Systems from $8,700. ' +
    'Make your own power, store it, and run your home through blackouts — independent of PG&E and SMUD, ' +
    'and built for NEM 3.0. Free quote.';

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: 'website',
    },
    alternates: {
      canonical: '/market/solar/california',
    },
  };
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'LocalBusiness',
      name: 'VoltSol Energy',
      description: 'Off-grid solar and EG4 battery backup installation serving California — energy independence from PG&E and SMUD.',
      url: 'https://voltsolenergy.com',
      areaServed: {
        '@type': 'State',
        name: 'California',
      },
      serviceType: 'Off-Grid Solar and Battery Storage Installation',
      priceRange: '$8,700–$16,000',
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://voltsolenergy.com' },
        { '@type': 'ListItem', position: 2, name: 'Solar Markets', item: 'https://voltsolenergy.com/market' },
        { '@type': 'ListItem', position: 3, name: 'California', item: 'https://voltsolenergy.com/market/solar/california' },
      ],
    },
  ],
};

export default function StatePage({ params }: PageProps) {
  // Validate params
  if (params.vertical !== 'solar' || params.state !== 'california') {
    return notFound();
  }

  // All cities for quick reference
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
            <li><Link href="/market" className="hover:text-blue-600">Solar Markets</Link></li>
            <li aria-hidden="true">/</li>
            <li className="font-medium text-gray-800">California</li>
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
              Off-Grid Solar &amp; Battery Backup in California
            </h1>
            <p className="mt-4 max-w-3xl text-lg text-blue-100">
              VoltSol specializes in off-grid solar with EG4 battery storage across Northern California —
              systems from $8,700. Make your own power, store it, and run your home through blackouts and
              PSPS shutoffs. Real energy independence from PG&E and SMUD, built for the NEM 3.0 era —
              not another grid-tied system that shuts off when the utility does.
            </p>
          </div>
        </header>

        <main className="mx-auto max-w-7xl px-4 py-12">
          {/* Why Off-Grid Solar in California */}
          <section aria-labelledby="why-california-heading" className="mb-16">
            <h2 id="why-california-heading" className="text-2xl font-bold text-gray-900">
              Why Off-Grid Solar in California?
            </h2>
            <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              <div className="flex flex-col gap-3 rounded-lg border border-blue-200 bg-blue-50 p-6">
                <Zap className="h-8 w-8 text-blue-600" aria-hidden="true" />
                <h3 className="font-bold text-gray-900">Sidestep NEM 3.0</h3>
                <p className="text-sm text-gray-700">
                  California&rsquo;s NEM 3.0 slashed solar export credits. Off-grid systems avoid this entirely — you
                  store and use your own power, no utility buyback needed.
                </p>
              </div>

              <div className="flex flex-col gap-3 rounded-lg border border-amber-200 bg-amber-50 p-6">
                <DollarSign className="h-8 w-8 text-amber-600" aria-hidden="true" />
                <h3 className="font-bold text-gray-900">Own It, Don&rsquo;t Rent It</h3>
                <p className="text-sm text-gray-700">
                  The big installers sell you a grid-tied system that still leaves you on the utility&rsquo;s meter.
                  VoltSol builds you your own power plant — solar + EG4 battery — so you stop renting power for good.
                </p>
              </div>

              <div className="flex flex-col gap-3 rounded-lg border border-red-200 bg-red-50 p-6">
                <Shield className="h-8 w-8 text-red-600" aria-hidden="true" />
                <h3 className="font-bold text-gray-900">Blackout Resilience</h3>
                <p className="text-sm text-gray-700">
                  California&rsquo;s wildfire-driven PSPS shutoffs leave thousands in the dark each year. Off-grid
                  battery systems keep your lights and HVAC running.
                </p>
              </div>

              <div className="flex flex-col gap-3 rounded-lg border border-green-200 bg-green-50 p-6">
                <MapPin className="h-8 w-8 text-green-600" aria-hidden="true" />
                <h3 className="font-bold text-gray-900">Beat Rising Rates</h3>
                <p className="text-sm text-gray-700">
                  PG&E and SMUD rates keep climbing. When you make and store your own power, their next rate
                  hike stops being your problem — your energy cost is locked in at install.
                </p>
              </div>
            </div>
          </section>

          {/* Counties Served */}
          <section aria-labelledby="counties-heading" className="mb-16">
            <h2 id="counties-heading" className="text-2xl font-bold text-gray-900">
              Counties We Serve
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
          <section aria-labelledby="cities-heading" className="mb-16">
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
          <section className="rounded-xl border border-blue-200 bg-blue-50 p-8 text-center">
            <h2 className="text-2xl font-bold text-gray-900">
              Ready to go solar in California?
            </h2>
            <p className="mt-2 text-gray-600">
              Get a free, no-obligation quote from a licensed installer serving your area.
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
