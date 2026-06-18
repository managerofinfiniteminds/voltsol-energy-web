import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { NORCAL_SOLAR_MARKETS, findRegion, marketPageHref } from '@/lib/market-data';
import { MapPin, CalendarCheck } from 'lucide-react';

// Generate static params for all county hubs
export function generateStaticParams() {
  return NORCAL_SOLAR_MARKETS.map(region => ({
    vertical: 'solar',
    state: 'california',
    region: region.regionSlug,
  }));
}

interface PageProps {
  params: { vertical: string; state: string; region: string };
}

export function generateMetadata({ params }: PageProps): Metadata {
  const regionData = findRegion(params.vertical, params.state, params.region);
  if (!regionData) return {};

  const title = `Off-Grid Solar & Battery Backup in ${regionData.county}, CA`;
  const description =
    `Off-grid solar + EG4 battery installation across ${regionData.county}. ` +
    `VoltSol gives ${regionData.cities.length} cities energy independence from the utility — systems from $8,700, ` +
    `blackout-ready, and built for NEM 3.0. Free quote.`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: 'website',
    },
    alternates: {
      canonical: `/market/solar/california/${regionData.regionSlug}`,
    },
  };
}

export default function RegionPage({ params }: PageProps) {
  const regionData = findRegion(params.vertical, params.state, params.region);
  if (!regionData) return notFound();

  // Other counties for cross-linking
  const otherCounties = NORCAL_SOLAR_MARKETS.filter(r => r.regionSlug !== regionData.regionSlug);

  // Determine primary utility serving this county
  const utilities = Array.from(new Set(regionData.cities.map(c => c.utility)));
  const primaryUtility = utilities.length === 1 ? utilities[0] : utilities.join(' / ');

  // Campaign code for this county
  const campaignCode = `county-${regionData.regionSlug}`;

  // JSON-LD
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'LocalBusiness',
        name: 'VoltSol Energy',
        description: `Off-grid solar and EG4 battery backup installation serving ${regionData.county}, California — energy independence from the local utility.`,
        url: 'https://voltsolenergy.com',
        areaServed: {
          '@type': 'AdministrativeArea',
          name: regionData.county,
        },
        serviceType: 'Off-Grid Solar and Battery Storage Installation',
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://voltsolenergy.com' },
          { '@type': 'ListItem', position: 2, name: 'Solar Markets', item: 'https://voltsolenergy.com/market' },
          { '@type': 'ListItem', position: 3, name: 'California', item: 'https://voltsolenergy.com/market/solar/california' },
          { '@type': 'ListItem', position: 4, name: regionData.county, item: `https://voltsolenergy.com/market/solar/california/${regionData.regionSlug}` },
        ],
      },
    ],
  };

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
            <li><Link href="/market/solar/california" className="hover:text-blue-600">California</Link></li>
            <li aria-hidden="true">/</li>
            <li className="font-medium text-gray-800">{regionData.county}</li>
          </ol>
        </nav>

        {/* Hero image — clean, stands on its own */}
        <div className="relative h-56 w-full overflow-hidden sm:h-72 lg:h-[420px]">
          <Image
            src="/images/hero-blackout-glow.jpg"
            alt={`Off-grid solar home with battery backup keeping the lights on during a blackout in ${regionData.county}, California`}
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
              {primaryUtility} Service Area
            </p>
            <h1 className="text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
              Off-Grid Solar &amp; Battery Backup in {regionData.county}, CA
            </h1>
            <p className="mt-4 max-w-3xl text-lg text-blue-100">
              VoltSol gives {regionData.cities.length} cities across {regionData.county} a way off the
              {' '}{primaryUtility} treadmill: off-grid solar paired with EG4 battery storage, from $8,700. Make your
              own power, store it, and keep the lights on through blackouts and PSPS shutoffs — instead of
              exporting it back to the grid for pennies under NEM 3.0.
            </p>
          </div>
        </header>

        <main className="mx-auto max-w-7xl px-4 py-12">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-5">
            {/* Left: content */}
            <div className="lg:col-span-3">
              {/* County Snapshot */}
              <section aria-labelledby="county-snapshot-heading">
                <h2 id="county-snapshot-heading" className="text-2xl font-bold text-gray-900">
                  County Snapshot — {regionData.county}
                </h2>
                <div className="mt-4 space-y-4">
                  <div className="rounded-lg border border-gray-200 bg-gray-50 p-5">
                    <h3 className="text-base font-semibold text-gray-900">Utility Rate</h3>
                    <p className="mt-2 text-sm text-gray-700">
                      <strong>{regionData.countyData.utilityRate.utility}:</strong> Estimated{' '}
                      ${regionData.countyData.utilityRate.avgResidentialRatePerKwh.toFixed(2)}/kWh residential rate.{' '}
                      {regionData.countyData.utilityRate.note}
                    </p>
                  </div>
                  <div className="rounded-lg border border-gray-200 bg-gray-50 p-5">
                    <h3 className="text-base font-semibold text-gray-900">Permit Office</h3>
                    <p className="mt-2 text-sm text-gray-700">
                      <strong>{regionData.countyData.permitOffice.name}</strong> ({regionData.countyData.permitOffice.jurisdiction}).{' '}
                      Typical turnaround: {regionData.countyData.permitOffice.typicalTurnaround}.{' '}
                      {regionData.countyData.permitOffice.note}
                    </p>
                  </div>
                  <div className="rounded-lg border border-gray-200 bg-gray-50 p-5">
                    <h3 className="text-base font-semibold text-gray-900">Climate Zone</h3>
                    <p className="mt-2 text-sm text-gray-700">
                      <strong>{regionData.countyData.climateZone.zone}:</strong> {regionData.countyData.climateZone.description}
                    </p>
                  </div>
                  <div className="rounded-lg border border-blue-100 bg-blue-50 p-5">
                    <h3 className="text-base font-semibold text-gray-900">County Context</h3>
                    <p className="mt-2 text-sm text-gray-700">
                      {regionData.countyData.countyContext}
                    </p>
                  </div>
                </div>
              </section>

              {/* Why solar */}
              <section className="mt-10" aria-labelledby="why-solar-heading">
                <h2 id="why-solar-heading" className="text-2xl font-bold text-gray-900">
                  Why Go Off-Grid in {regionData.county}?
                </h2>
                <div className="mt-4 space-y-3 text-gray-700">
                  <p>
                    Homeowners in {regionData.county} are served by <strong>{primaryUtility}</strong>, which
                    has seen significant residential rate increases in recent years. Off-grid solar offers a
                    way to lock in energy costs at installation prices and protect against future hikes.
                  </p>
                  <p>
                    Our systems combine rooftop solar panels, EG4 battery storage, and inverters to power your
                    home&rsquo;s most energy-intensive loads — like heating, cooling, and major appliances — without
                    relying on the grid. That means no utility buyback complexity under NEM 3.0, and backup
                    power during PSPS shutoffs or outages.
                  </p>
                  <p>
                    Since NEM 3.0 slashed grid export credits by roughly 75%, the smart economics in{' '}
                    {regionData.county} shifted to storing your own power instead of selling it back &mdash; a
                    battery-first, off-grid system. The federal 30% residential solar tax credit ended for
                    systems placed in service after Dec 31, 2025, but California programs like SGIP battery
                    rebates may still apply. Consult a tax professional to confirm your eligibility.
                  </p>
                </div>
              </section>

              {/* Cities in this county */}
              <section className="mt-10" aria-labelledby="cities-heading">
                <h2 id="cities-heading" className="text-2xl font-bold text-gray-900">
                  Cities We Serve in {regionData.county}
                </h2>
                <div className="mt-4 grid gap-3 sm:grid-cols-2">
                  {regionData.cities.map(city => (
                    <Link
                      key={city.citySlug}
                      href={marketPageHref({
                        vertical: 'solar',
                        state: 'california',
                        region: regionData.regionSlug,
                        city: city.citySlug,
                      })}
                      className="flex items-center gap-3 rounded-lg border border-blue-200 bg-blue-50 px-4 py-3 text-gray-800 transition hover:border-blue-400 hover:bg-blue-100"
                    >
                      <MapPin className="h-4 w-4 shrink-0 text-blue-600" aria-hidden="true" />
                      <div>
                        <div className="font-semibold">{city.city}</div>
                        <div className="text-xs text-gray-600">{city.utility}</div>
                      </div>
                    </Link>
                  ))}
                </div>
              </section>

              {/* Other counties */}
              {otherCounties.length > 0 && (
                <section className="mt-10" aria-labelledby="other-counties-heading">
                  <h2 id="other-counties-heading" className="text-lg font-semibold text-gray-800">
                    Other Northern California Counties
                  </h2>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {otherCounties.map(county => (
                      <Link
                        key={county.regionSlug}
                        href={`/market/solar/california/${county.regionSlug}`}
                        className="rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-sm text-blue-700 hover:bg-blue-100"
                      >
                        {county.county}
                      </Link>
                    ))}
                  </div>
                  <div className="mt-3">
                    <Link
                      href="/market/solar/california"
                      className="text-sm text-blue-600 hover:underline"
                    >
                      &larr; Back to all California markets
                    </Link>
                  </div>
                </section>
              )}
            </div>

            {/* Right: CTA sidebar */}
            <aside className="lg:col-span-2" aria-label="Solar quote request">
              <div className="sticky top-6 rounded-xl border border-gray-200 bg-white p-6 shadow-md">
                <h2 className="text-lg font-bold text-gray-900">
                  Free Solar Quote — {regionData.county}
                </h2>
                <p className="mt-1 text-sm text-gray-500">
                  No cost. No obligation. Licensed local installer.
                </p>

                {/* Primary CTA */}
                <div className="mt-6">
                  <Link
                    href={`/start?campaign=${encodeURIComponent(campaignCode)}`}
                    className="flex w-full items-center justify-center gap-2 rounded-lg bg-blue-600 px-6 py-4 text-base font-semibold text-white transition hover:bg-blue-700"
                  >
                    <CalendarCheck className="h-5 w-5" aria-hidden="true" />
                    Get My Free Estimate
                  </Link>
                </div>

                <p className="mt-4 text-center text-xs text-gray-400">
                  Takes under 2 minutes. Your info is only shared with one local contractor.
                </p>

                {/* County-specific note */}
                <div className="mt-6 rounded-lg border border-blue-100 bg-blue-50 p-4">
                  <p className="text-xs text-gray-700">
                    <strong>Serving {regionData.county}:</strong> We work with licensed contractors across{' '}
                    {regionData.cities.map(c => c.city).join(', ')}. Get a customized quote for your home.
                  </p>
                </div>
              </div>
            </aside>
          </div>
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
