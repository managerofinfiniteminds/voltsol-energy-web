import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import {
  ALL_MARKET_PARAMS,
  MARKETS_BY_STATE,
  findMarket,
  localizeRegion,
  localizeCity,
  marketPageHref,
  marketSlug,
} from '@/lib/market-data';
import { getLocale } from '@/lib/locale';
import { getMarketDict } from '@/lib/market-i18n';
import { CalendarCheck, Check, Shield, Phone } from 'lucide-react';
import TaxDisclaimer from '@/components/market/TaxDisclaimer';

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
  const isTX = params.state === 'texas';
  const stateAbbr = params.state === 'california' ? 'CA' : isTX ? 'TX' : '';
  const title = `Home Solar + Battery Storage in ${cityData.city}, ${stateAbbr}`;
  const description = isTX
    ? `Get connected with a licensed local solar + battery installer in ${cityData.city}. ` +
      `Make your own power and stay powered through outages. ${cityData.city} is served by ` +
      `${cityData.utility}. No cost, no obligation.`
    : `VoltSol Energy installs residential solar + EG4 battery storage in ` +
      `${cityData.city} from $8,700 — power through blackouts and keep the ` +
      `power you make. ${cityData.city} is served by ${cityData.utility}. Free quote.`;

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
    // TX pages override the site-wide twitter/keywords fallback so shared links
    // don't carry California price ($8,700) / NEM 3.0 claims. CA emits nothing new.
    ...(isTX
      ? {
          twitter: { title, description },
          keywords: [
            'Texas solar',
            'solar installer Texas',
            'residential solar battery storage',
            'local solar installer',
            `${cityData.city} solar`,
          ],
        }
      : {}),
  };
}

export default function MarketCityPage({ params }: PageProps) {
  const market = findMarket(params.vertical, params.state, params.region, params.city);
  if (!market) return notFound();

  const locale = getLocale();
  const isTX = params.state === 'texas';
  const t = getMarketDict(locale, params.state);
  const cityData = localizeCity(market.city, locale);
  const regionData = localizeRegion(market.region, locale);
  const slug = marketSlug(params);
  const markets = MARKETS_BY_STATE[params.state] || [];
  const stateName = params.state === 'california' ? 'California' : isTX ? 'Texas' : '';

  // Campaign code for attribution
  const campaignCode = `market-${cityData.citySlug}`;

  // Nearby cities in the same county (excluding current)
  const nearbyCities = regionData.cities
    .filter(c => c.citySlug !== cityData.citySlug)
    .slice(0, 4);

  // Other counties for cross-mesh linking
  const otherRegions = markets.filter(r => r.regionSlug !== regionData.regionSlug).slice(0, 3);

  // JSON-LD structured data
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'LocalBusiness',
        name: 'VoltSol Energy',
        description: isTX
          ? `Connects homeowners in ${cityData.city}, ${regionData.county}, ${stateName} with licensed local solar and battery storage installers.`
          : `Residential solar and EG4 battery storage installation serving ${cityData.city}, ${regionData.county}, ${stateName} — make your own power, store it, and use it.`,
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
        name: isTX
          ? `Solar Installer Matching in ${cityData.city}`
          : `Home Solar + Battery Storage Installation in ${cityData.city}`,
        serviceType: isTX
          ? 'Solar Installer Referral Service'
          : 'Residential Solar and Battery Storage Installation',
        provider: { '@type': 'LocalBusiness', name: 'VoltSol Energy' },
        areaServed: { '@type': 'City', name: cityData.city },
        description: isTX
          ? `VoltSol Energy connects ${cityData.city}, ${stateName} homeowners with licensed local solar and battery storage installers.`
          : `VoltSol Energy installs residential solar with EG4 battery storage in ${cityData.city}, ${stateName} — blackout-ready power self-supplied from your own system.`,
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://voltsolenergy.com' },
          { '@type': 'ListItem', position: 2, name: 'Solar Markets', item: 'https://voltsolenergy.com/market' },
          { '@type': 'ListItem', position: 3, name: stateName, item: `https://voltsolenergy.com/market/solar/${params.state}` },
          { '@type': 'ListItem', position: 4, name: regionData.county, item: `https://voltsolenergy.com/market/solar/${params.state}/${regionData.regionSlug}` },
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
            <li><Link href="/" className="hover:text-blue-600">{t.home}</Link></li>
            <li aria-hidden="true">/</li>
            <li><Link href="/market" className="hover:text-blue-600">{t.solarMarkets}</Link></li>
            <li aria-hidden="true">/</li>
            <li><span>{stateName}</span></li>
            <li aria-hidden="true">/</li>
            <li><span>{regionData.county}</span></li>
            <li aria-hidden="true">/</li>
            <li className="font-medium text-gray-800">{cityData.city}</li>
          </ol>
        </nav>

        {/* Hero image — clean, stands on its own */}
        <div className="relative h-56 w-full overflow-hidden sm:h-72 lg:h-[420px]">
          <Image
            src="/images/hero-blackout-glow.jpg"
            alt={`Solar-powered home with battery backup keeping the lights on during a blackout in ${cityData.city}, ${stateName}`}
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
        </div>

        {/* Hero text — solid background, no image behind */}
        <header className="bg-gradient-to-br from-blue-950 via-blue-900 to-blue-800 px-4 py-16 text-white">
          <div className="mx-auto max-w-5xl">
            <p className="mb-2 text-sm font-medium uppercase tracking-wide text-blue-200">
              {cityData.utility} {t.serviceAreaSuffix} · {regionData.county}
            </p>
            <h1 className="text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
              {t.cityH1(cityData.city)}
            </h1>
            <p className="mt-4 max-w-2xl text-lg text-blue-100">
              {t.citySub(cityData.city, cityData.utility, cityData.localData.avgMonthlyBillEstimate)}
            </p>
            <p className="mt-1 text-xs text-blue-300">
              {t.billDisclaimer}
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
                  {t.localEstimatesHeading(cityData.city)}
                </h2>
                <p className="mt-1 text-xs text-gray-400">
                  {t.localEstimatesDisclaimer}
                </p>
                <dl className={`mt-4 grid gap-4 ${isTX ? 'grid-cols-2 sm:grid-cols-3' : 'grid-cols-2 sm:grid-cols-4'}`}>
                  {(isTX
                    ? [
                        { label: t.statAvgBill, value: `$${cityData.localData.avgMonthlyBillEstimate}` },
                        { label: t.statSystemSize, value: `${cityData.localData.avgSystemSizeKwEstimate} kW` },
                        { label: t.statPeakSun, value: `${cityData.localData.peakSunHoursEstimate}` },
                      ]
                    : [
                        { label: t.statAvgBill, value: `$${cityData.localData.avgMonthlyBillEstimate}` },
                        { label: t.statSystemSize, value: `${cityData.localData.avgSystemSizeKwEstimate} kW` },
                        { label: t.statYear1Savings, value: `$${cityData.localData.avgSavingsYear1Estimate}` },
                        { label: t.statPayback, value: `${cityData.localData.avgPaybackYearsEstimate} yrs` },
                      ]
                  ).map(stat => (
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
                  {t.whyCityHeading(cityData.city)}
                </h2>
                <ul className="mt-4 space-y-3 text-sm text-gray-700">
                  <li className="flex gap-2">
                    <span className="mt-0.5 flex-shrink-0 text-blue-600">&#9679;</span>
                    <span>{t.whyCityBullet1(cityData.city, cityData.localData.peakSunHoursEstimate)}</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="mt-0.5 flex-shrink-0 text-blue-600">&#9679;</span>
                    <span>
                      {t.whyCityBullet2(
                        regionData.countyData.utilityRate.utility,
                        cityData.city,
                        regionData.countyData.utilityRate.avgResidentialRatePerKwh.toFixed(2),
                        regionData.countyData.utilityRate.note,
                      )}
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <span className="mt-0.5 flex-shrink-0 text-blue-600">&#9679;</span>
                    <span>{t.whyCityBullet3}</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="mt-0.5 flex-shrink-0 text-blue-600">&#9679;</span>
                    <span>{t.whyCityBullet4}</span>
                  </li>
                </ul>
              </section>

              {/* PSPS outage moment */}
              <section className="mt-10" aria-labelledby="psps-heading">
                <div className="overflow-hidden rounded-2xl border border-gray-200">
                  <Image
                    src="/images/psps-alert-moment.png"
                    alt={`Power outage alert on a phone while a solar-battery home stays powered in ${cityData.city}, ${stateName}`}
                    width={1200}
                    height={675}
                    sizes="(min-width: 1024px) 60vw, 100vw"
                    className="h-auto w-full object-cover"
                  />
                  <div className="bg-gradient-to-br from-blue-950 to-blue-900 p-5 sm:p-7">
                    <h2 id="psps-heading" className="text-xl font-bold text-white sm:text-2xl">
                      {t.pspsHeading}
                    </h2>
                    <p className="mt-2 max-w-2xl text-sm text-blue-100 sm:text-base">
                      {t.pspsBody(cityData.city)}
                    </p>
                  </div>
                </div>
              </section>

              {/* Local Details */}
              <section className="mt-10" aria-labelledby="local-details-heading">
                <h2 id="local-details-heading" className="text-xl font-bold text-gray-900">
                  {t.localDetailsHeading(cityData.city)}
                </h2>
                <div className="mt-4 space-y-4">
                  <div className="rounded-lg border border-gray-200 bg-gray-50 p-4">
                    <h3 className="text-sm font-semibold text-gray-900">{t.utilityRateLabel}</h3>
                    <p className="mt-1 text-sm text-gray-700">
                      <strong>{regionData.countyData.utilityRate.utility}:</strong> Estimated{' '}
                      ${regionData.countyData.utilityRate.avgResidentialRatePerKwh.toFixed(2)}/kWh residential rate.{' '}
                      {regionData.countyData.utilityRate.note}
                    </p>
                  </div>
                  <div className="rounded-lg border border-gray-200 bg-gray-50 p-4">
                    <h3 className="text-sm font-semibold text-gray-900">{t.permitOfficeLabel}</h3>
                    <p className="mt-1 text-sm text-gray-700">
                      <strong>{regionData.countyData.permitOffice.name}</strong> ({regionData.countyData.permitOffice.jurisdiction}).{' '}
                      {t.turnaroundLabel}: {regionData.countyData.permitOffice.typicalTurnaround}.{' '}
                      {regionData.countyData.permitOffice.note}
                    </p>
                  </div>
                  <div className="rounded-lg border border-gray-200 bg-gray-50 p-4">
                    <h3 className="text-sm font-semibold text-gray-900">{t.climateZoneLabel}</h3>
                    <p className="mt-1 text-sm text-gray-700">
                      <strong>{regionData.countyData.climateZone.zone}:</strong> {regionData.countyData.climateZone.description}
                    </p>
                  </div>
                </div>
              </section>

              {/* FAQ */}
              <section className="mt-10" aria-labelledby="faq-heading">
                <h2 id="faq-heading" className="text-xl font-bold text-gray-900">
                  {t.faqHeading(cityData.city)}
                </h2>
                <div className="mt-4 space-y-4">
                  {cityData.cityProfile.faq.map((item, i) => (
                    <div key={i} className="rounded-lg border border-gray-200 bg-white p-4">
                      <h3 className="text-base font-semibold text-gray-900">{item.q}</h3>
                      <p className="mt-2 text-sm text-gray-700">{item.a}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-4 rounded-lg border border-amber-200 bg-amber-50 p-4">
                  <TaxDisclaimer />
                </div>
              </section>

              {/* How the process works */}
              <section className="mt-10" aria-labelledby="process-heading">
                <h2 id="process-heading" className="text-xl font-bold text-gray-900">
                  {t.howItWorksHeading}
                </h2>
                <ol className="mt-4 space-y-3">
                  {[
                    [t.step1Title, t.step1Desc],
                    [t.step2Title, t.step2Desc(cityData.city)],
                    [t.step3Title, t.step3Desc],
                    [t.step4Title, t.step4Desc],
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
                    {t.moreCountyQuotes(regionData.county)}
                  </h2>
                  <ul className="mt-3 flex flex-wrap gap-2">
                    {nearbyCities.map(c => (
                      <li key={c.citySlug}>
                        <Link
                          href={marketPageHref({ vertical: 'solar', state: params.state, region: regionData.regionSlug, city: c.citySlug })}
                          className="rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-sm text-blue-700 hover:bg-blue-100"
                        >
                          {t.solarInCity(c.city)}
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
                    {t.otherMarketsHeading}
                  </h2>
                  <ul className="mt-2 flex flex-wrap gap-2">
                    {otherRegions.map(r => (
                      <li key={r.regionSlug}>
                        <Link
                          href={marketPageHref({ vertical: 'solar', state: params.state, region: r.regionSlug, city: r.cities[0].citySlug })}
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
                  {t.freeSolarQuoteCity(cityData.city)}
                </h2>
                <p className="mt-1 text-sm text-gray-500">
                  {t.noObligationOneContractor}
                </p>

                {/* Trust signals */}
                <ul className="mt-5 space-y-3">
                  <li className="flex items-center gap-2 text-sm text-gray-700">
                    <Check className="h-4 w-4 text-emerald-500" aria-hidden="true" />
                    {t.licensedInstaller}
                  </li>
                  <li className="flex items-center gap-2 text-sm text-gray-700">
                    <Shield className="h-4 w-4 text-blue-500" aria-hidden="true" />
                    {t.noPressureNoObligation}
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
                    {params.state === 'california' ? t.localCaliforniaTeam : 'VoltSol Energy team'}
                  </li>
                </ul>

                {/* Primary CTA */}
                <div className="mt-6">
                  <Link
                    href={`/start?campaign=${encodeURIComponent(campaignCode)}&state=${encodeURIComponent(params.state)}`}
                    className="flex w-full items-center justify-center gap-2 rounded-lg bg-blue-600 px-6 py-4 text-base font-semibold text-white transition hover:bg-blue-700"
                  >
                    <CalendarCheck className="h-5 w-5" aria-hidden="true" />
                    {t.ctaButton}
                  </Link>
                </div>

                <p className="mt-4 text-center text-xs text-gray-400">
                  {t.takesUnder2Min}
                </p>
                {t.dataConsentNote && (
                  <p className="mt-3 text-center text-[11px] leading-snug text-gray-400">
                    {t.dataConsentNote}
                  </p>
                )}
              </div>
            </aside>
          </div>
        </main>

        {/* Footer note */}
        <footer className="border-t border-gray-100 bg-gray-50 px-4 py-6 text-center text-xs text-gray-400">
          <p>
            {t.footerNoteCityPre}{' '}
            <Link href="/market/legal/terms" className="underline hover:text-gray-600">{t.termsLink}</Link> {t.footerNoteCityMid}{' '}
            <Link href="/market/legal/privacy" className="underline hover:text-gray-600">{t.privacyLink}</Link>.
          </p>
        </footer>
      </div>
    </>
  );
}
