import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import {
  ALL_MARKET_PARAMS,
  NORCAL_SOLAR_MARKETS,
  findMarket,
  marketPageHref,
  marketSlug,
} from '@/lib/market-data';
import { CalendarCheck, Check, Shield, Phone } from 'lucide-react';

// Build all static paths from the market config — no DB needed at build time.
export function generateStaticParams() {
  return ALL_MARKET_PARAMS;
}

interface PageProps {
  params: { vertical: string; state: string; region: string; city: string };
}

export function generateMetadata({ params }: PageProps): Metadata {
  const market = findMarket(params.vertical, params.state, params.region, params.city);
  if (!market) return {};

  const { city: cityData, region: regionData } = market;
  const title = `Solar Panels in ${cityData.city}, CA | Free Quote | VoltSol Energy`;
  const description =
    `Get a free solar quote for your ${cityData.city} home. ${cityData.utility} customers in ` +
    `${regionData.county} typically spend an estimated $${cityData.localData.avgMonthlyBillEstimate}/mo — ` +
    `solar can dramatically reduce that bill. Licensed installers, no pressure.`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: 'website',
    },
    alternates: {
      canonical: `/market/${marketSlug(params)}`,
    },
  };
}

export default function MarketCityPage({ params }: PageProps) {
  const market = findMarket(params.vertical, params.state, params.region, params.city);
  if (!market) return notFound();

  const { city: cityData, region: regionData } = market;
  const slug = marketSlug(params);

  // Campaign code for attribution
  const campaignCode = `market-${cityData.citySlug}`;

  // Nearby cities in the same county (excluding current)
  const nearbyCities = regionData.cities
    .filter(c => c.citySlug !== cityData.citySlug)
    .slice(0, 4);

  // Other counties for cross-mesh linking
  const otherRegions = NORCAL_SOLAR_MARKETS.filter(r => r.regionSlug !== regionData.regionSlug).slice(0, 3);

  // JSON-LD structured data
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'LocalBusiness',
        name: 'VoltSol Energy',
        description: `Licensed residential solar installation serving ${cityData.city}, ${regionData.county}, California.`,
        url: 'https://voltsolenergy.com',
        telephone: process.env.NEXT_PUBLIC_VOLTSOL_PHONE || undefined,
        areaServed: {
          '@type': 'City',
          name: cityData.city,
          containedInPlace: {
            '@type': 'AdministrativeArea',
            name: regionData.county,
          },
        },
        priceRange: '$$',
      },
      {
        '@type': 'Service',
        name: `Residential Solar Panel Installation in ${cityData.city}`,
        serviceType: 'Solar Panel Installation',
        provider: { '@type': 'LocalBusiness', name: 'VoltSol Energy' },
        areaServed: { '@type': 'City', name: cityData.city },
        description: `VoltSol Energy and its licensed contractor network provide residential solar installation quotes in ${cityData.city}, California.`,
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://voltsolenergy.com' },
          { '@type': 'ListItem', position: 2, name: 'Solar Markets', item: 'https://voltsolenergy.com/market' },
          { '@type': 'ListItem', position: 3, name: 'California', item: 'https://voltsolenergy.com/market/solar/california' },
          { '@type': 'ListItem', position: 4, name: regionData.county, item: `https://voltsolenergy.com/market/solar/california/${regionData.regionSlug}` },
          { '@type': 'ListItem', position: 5, name: cityData.city, item: `https://voltsolenergy.com/market/${slug}` },
        ],
      },
      {
        '@type': 'FAQPage',
        mainEntity: cityData.cityProfile.faq.map(item => ({
          '@type': 'Question',
          name: item.q,
          acceptedAnswer: {
            '@type': 'Answer',
            text: item.a,
          },
        })),
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
          <ol className="mx-auto flex max-w-5xl flex-wrap items-center gap-1">
            <li><Link href="/" className="hover:text-blue-600">Home</Link></li>
            <li aria-hidden="true">/</li>
            <li><Link href="/market" className="hover:text-blue-600">Solar Markets</Link></li>
            <li aria-hidden="true">/</li>
            <li><span>California</span></li>
            <li aria-hidden="true">/</li>
            <li><span>{regionData.county}</span></li>
            <li aria-hidden="true">/</li>
            <li className="font-medium text-gray-800">{cityData.city}</li>
          </ol>
        </nav>

        {/* Hero */}
        <header className="relative overflow-hidden px-4 py-20 text-white">
          <Image
            src="/images/hero-blackout-glow.jpg"
            alt={`Off-grid solar home with battery backup keeping the lights on during a blackout in ${cityData.city}, California`}
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
          <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-br from-blue-950/90 via-blue-900/80 to-blue-800/70" />
          <div className="relative mx-auto max-w-5xl">
            <p className="mb-2 text-sm font-medium uppercase tracking-wide text-blue-200">
              {cityData.utility} Service Area · {regionData.county}
            </p>
            <h1 className="text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
              Solar Panels in {cityData.city}, CA
            </h1>
            <p className="mt-4 max-w-2xl text-lg text-blue-100">
              {cityData.cityProfile.localNote} Homeowners in {cityData.city} on {cityData.utility} pay an estimated{' '}
              <strong>${cityData.localData.avgMonthlyBillEstimate}/mo</strong> in electricity — solar can
              cut that dramatically. Get a free, no-obligation quote from a licensed local installer today.
            </p>
            <p className="mt-1 text-xs text-blue-300">
              * Electricity bill figures are regional estimates only, not guarantees.
            </p>
          </div>
        </header>

        <main className="mx-auto max-w-5xl px-4 py-12">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-5">
            {/* Left: content */}
            <div className="lg:col-span-3">
              {/* Local stats */}
              <section aria-labelledby="local-stats-heading">
                <h2 id="local-stats-heading" className="text-xl font-bold text-gray-900">
                  Solar in {cityData.city} — Local Estimates
                </h2>
                <p className="mt-1 text-xs text-gray-400">
                  These are illustrative regional estimates — not guarantees. Your actual savings depend on
                  usage, roof orientation, shading, system size, and future utility rate changes.
                </p>
                <dl className="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-4">
                  {[
                    { label: 'Avg monthly bill*', value: `$${cityData.localData.avgMonthlyBillEstimate}` },
                    { label: 'Typical system size*', value: `${cityData.localData.avgSystemSizeKwEstimate} kW` },
                    { label: 'Est. year-1 savings*', value: `$${cityData.localData.avgSavingsYear1Estimate}` },
                    { label: 'Est. payback period*', value: `${cityData.localData.avgPaybackYearsEstimate} yrs` },
                  ].map(stat => (
                    <div key={stat.label} className="rounded-lg border border-gray-200 bg-gray-50 p-4 text-center">
                      <dt className="text-xs text-gray-500">{stat.label}</dt>
                      <dd className="mt-1 text-2xl font-bold text-blue-700">{stat.value}</dd>
                    </div>
                  ))}
                </dl>
              </section>

              {/* Why solar in this city */}
              <section className="mt-10" aria-labelledby="why-solar-heading">
                <h2 id="why-solar-heading" className="text-xl font-bold text-gray-900">
                  Why Go Solar in {cityData.city}?
                </h2>
                <ul className="mt-4 space-y-3 text-sm text-gray-700">
                  <li className="flex gap-2">
                    <span className="mt-0.5 flex-shrink-0 text-blue-600">&#9679;</span>
                    <span>
                      <strong>High sun exposure:</strong> {cityData.city} averages an estimated{' '}
                      {cityData.localData.peakSunHoursEstimate} peak sun hours per day — strong solar
                      production potential year-round.
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <span className="mt-0.5 flex-shrink-0 text-blue-600">&#9679;</span>
                    <span>
                      <strong>High {cityData.utility} rates:</strong> {regionData.countyData.utilityRate.utility} customers pay an estimated{' '}
                      ${regionData.countyData.utilityRate.avgResidentialRatePerKwh.toFixed(2)}/kWh, making solar economics strong.{' '}
                      {regionData.countyData.utilityRate.note}
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <span className="mt-0.5 flex-shrink-0 text-blue-600">&#9679;</span>
                    <span>
                      <strong>Battery-first economics under NEM 3.0:</strong> California&rsquo;s Net Billing
                      rules cut credit for power exported to the grid by roughly 75%, so the value is now in
                      <em> storing and using your own power</em> &mdash; exactly what an off-grid VoltSol system does.
                      The federal 30% residential solar tax credit ended for systems placed in service after
                      Dec 31, 2025; ask about current state programs like SGIP battery rebates. Consult a tax
                      professional for your situation.
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <span className="mt-0.5 flex-shrink-0 text-blue-600">&#9679;</span>
                    <span>
                      <strong>Home value:</strong> Studies suggest homes with owned solar systems sell for
                      more than comparable homes without — though results vary by market.
                    </span>
                  </li>
                </ul>
              </section>

              {/* PSPS outage moment */}
              <section className="mt-10" aria-labelledby="psps-heading">
                <div className="relative overflow-hidden rounded-2xl">
                  <Image
                    src="/images/psps-alert-moment.png"
                    alt={`PG&E PSPS power shutoff alert on a phone while an off-grid solar home stays powered in ${cityData.city}, California`}
                    width={1200}
                    height={675}
                    sizes="(min-width: 1024px) 60vw, 100vw"
                    className="h-auto w-full object-cover"
                  />
                  <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-blue-950/85 via-blue-950/30 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-5 sm:p-7">
                    <h2 id="psps-heading" className="text-xl font-bold text-white sm:text-2xl">
                      When {cityData.utility} cuts the power, your lights stay on
                    </h2>
                    <p className="mt-2 max-w-2xl text-sm text-blue-100 sm:text-base">
                      Public Safety Power Shutoffs (PSPS) and wildfire-season outages can leave {cityData.city}
                      {' '}homes dark for hours — sometimes days. A VoltSol off-grid system with EG4 battery backup
                      keeps your fridge, lights, and Wi-Fi running while the grid is down. No generator, no fuel runs,
                      no scramble.
                    </p>
                  </div>
                </div>
              </section>

              {/* Local Details */}
              <section className="mt-10" aria-labelledby="local-details-heading">
                <h2 id="local-details-heading" className="text-xl font-bold text-gray-900">
                  Local Details for {cityData.city}
                </h2>
                <div className="mt-4 space-y-4">
                  <div className="rounded-lg border border-gray-200 bg-gray-50 p-4">
                    <h3 className="text-sm font-semibold text-gray-900">Utility Rate</h3>
                    <p className="mt-1 text-sm text-gray-700">
                      <strong>{regionData.countyData.utilityRate.utility}:</strong> Estimated{' '}
                      ${regionData.countyData.utilityRate.avgResidentialRatePerKwh.toFixed(2)}/kWh residential rate.{' '}
                      {regionData.countyData.utilityRate.note}
                    </p>
                  </div>
                  <div className="rounded-lg border border-gray-200 bg-gray-50 p-4">
                    <h3 className="text-sm font-semibold text-gray-900">Permit Office</h3>
                    <p className="mt-1 text-sm text-gray-700">
                      <strong>{regionData.countyData.permitOffice.name}</strong> ({regionData.countyData.permitOffice.jurisdiction}).{' '}
                      Typical turnaround: {regionData.countyData.permitOffice.typicalTurnaround}.{' '}
                      {regionData.countyData.permitOffice.note}
                    </p>
                  </div>
                  <div className="rounded-lg border border-gray-200 bg-gray-50 p-4">
                    <h3 className="text-sm font-semibold text-gray-900">Climate Zone</h3>
                    <p className="mt-1 text-sm text-gray-700">
                      <strong>{regionData.countyData.climateZone.zone}:</strong> {regionData.countyData.climateZone.description}
                    </p>
                  </div>
                </div>
              </section>

              {/* FAQ */}
              <section className="mt-10" aria-labelledby="faq-heading">
                <h2 id="faq-heading" className="text-xl font-bold text-gray-900">
                  Frequently Asked Questions — {cityData.city}
                </h2>
                <div className="mt-4 space-y-4">
                  {cityData.cityProfile.faq.map((item, i) => (
                    <div key={i} className="rounded-lg border border-gray-200 bg-white p-4">
                      <h3 className="text-base font-semibold text-gray-900">{item.q}</h3>
                      <p className="mt-2 text-sm text-gray-700">{item.a}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* How the process works */}
              <section className="mt-10" aria-labelledby="process-heading">
                <h2 id="process-heading" className="text-xl font-bold text-gray-900">
                  How It Works
                </h2>
                <ol className="mt-4 space-y-3">
                  {[
                    ['Submit your info', 'Fill out the quick form — takes under 2 minutes.'],
                    ['Get matched', 'We share your request with one licensed solar contractor serving ' + cityData.city + '.'],
                    ['Free consultation', 'Your contractor contacts you to assess your home and provide a no-obligation quote.'],
                    ['Go solar', 'If the numbers work, move forward on your timeline — no pressure.'],
                  ].map(([title, desc], i) => (
                    <li key={i} className="flex gap-3 text-sm">
                      <span className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-blue-600 font-bold text-white text-xs">
                        {i + 1}
                      </span>
                      <span>
                        <strong className="text-gray-900">{title}:</strong>{' '}
                        <span className="text-gray-600">{desc}</span>
                      </span>
                    </li>
                  ))}
                </ol>
              </section>

              {/* Internal links: nearby cities */}
              {nearbyCities.length > 0 && (
                <section className="mt-10" aria-labelledby="nearby-heading">
                  <h2 id="nearby-heading" className="text-lg font-bold text-gray-900">
                    More {regionData.county} Solar Quotes
                  </h2>
                  <ul className="mt-3 flex flex-wrap gap-2">
                    {nearbyCities.map(c => (
                      <li key={c.citySlug}>
                        <Link
                          href={marketPageHref({ vertical: 'solar', state: 'california', region: regionData.regionSlug, city: c.citySlug })}
                          className="rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-sm text-blue-700 hover:bg-blue-100"
                        >
                          Solar in {c.city}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </section>
              )}

              {/* Internal links: other counties */}
              {otherRegions.length > 0 && (
                <section className="mt-6" aria-labelledby="other-counties-heading">
                  <h2 id="other-counties-heading" className="text-sm font-semibold text-gray-500 uppercase tracking-wide">
                    Other NorCal Solar Markets
                  </h2>
                  <ul className="mt-2 flex flex-wrap gap-2">
                    {otherRegions.map(r => (
                      <li key={r.regionSlug}>
                        <Link
                          href={marketPageHref({ vertical: 'solar', state: 'california', region: r.regionSlug, city: r.cities[0].citySlug })}
                          className="text-sm text-blue-600 hover:underline"
                        >
                          {r.county}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </section>
              )}
            </div>

            {/* Right: CTA card → /start */}
            <aside className="lg:col-span-2" aria-label="Solar quote request">
              <div className="sticky top-6 rounded-xl border border-gray-200 bg-white p-6 shadow-md">
                <h2 className="text-lg font-bold text-gray-900">
                  Free Solar Quote — {cityData.city}
                </h2>
                <p className="mt-1 text-sm text-gray-500">
                  No cost. No obligation. One local contractor.
                </p>

                {/* Trust signals */}
                <ul className="mt-5 space-y-3">
                  <li className="flex items-center gap-2 text-sm text-gray-700">
                    <Check className="h-4 w-4 text-emerald-500" aria-hidden="true" />
                    Licensed installer
                  </li>
                  <li className="flex items-center gap-2 text-sm text-gray-700">
                    <Shield className="h-4 w-4 text-blue-500" aria-hidden="true" />
                    No pressure, no obligation
                  </li>
                  {process.env.NEXT_PUBLIC_VOLTSOL_PHONE && (
                    <li className="flex items-center gap-2 text-sm text-gray-700">
                      <Phone className="h-4 w-4 text-blue-500" aria-hidden="true" />
                      <a href={`tel:${process.env.NEXT_PUBLIC_VOLTSOL_PHONE}`} className="hover:text-blue-600">
                        {process.env.NEXT_PUBLIC_VOLTSOL_PHONE}
                      </a>
                    </li>
                  )}
                  <li className="flex items-center gap-2 text-sm text-gray-700">
                    <Check className="h-4 w-4 text-emerald-500" aria-hidden="true" />
                    Local NorCal team
                  </li>
                </ul>

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
              </div>
            </aside>
          </div>
        </main>

        {/* Footer note */}
        <footer className="border-t border-gray-100 bg-gray-50 px-4 py-6 text-center text-xs text-gray-400">
          <p>
            VoltSol Energy operates a licensed contractor marketplace in Northern California. All estimates
            are regional approximations and do not constitute a savings guarantee. Subject to our{' '}
            <Link href="/market/legal/terms" className="underline hover:text-gray-600">Terms</Link> and{' '}
            <Link href="/market/legal/privacy" className="underline hover:text-gray-600">Privacy Policy</Link>.
          </p>
        </footer>
      </div>
    </>
  );
}
