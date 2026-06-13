// Static market config for NorCal solar markets.
// Used by: generateStaticParams, seed-markets.js, sitemap, and page templates.
// NOTE: all numeric estimates are approximate regional averages for illustrative
// purposes only — not guarantees. Labeled "estimate" throughout.

export interface MarketCityLocalData {
  avgMonthlyBillEstimate: number;   // USD
  avgSystemSizeKwEstimate: number;  // kW
  avgSavingsYear1Estimate: number;  // USD
  avgPaybackYearsEstimate: number;
  peakSunHoursEstimate: number;
}

export interface MarketCity {
  city: string;
  citySlug: string;
  utility: string;
  localData: MarketCityLocalData;
}

export interface MarketRegion {
  county: string;
  regionSlug: string;
  state: 'california';
  cities: MarketCity[];
}

const PGE: MarketCityLocalData = {
  avgMonthlyBillEstimate: 220,
  avgSystemSizeKwEstimate: 7.5,
  avgSavingsYear1Estimate: 1800,
  avgPaybackYearsEstimate: 7,
  peakSunHoursEstimate: 5.2,
};

const SMUD: MarketCityLocalData = {
  avgMonthlyBillEstimate: 160,
  avgSystemSizeKwEstimate: 6.0,
  avgSavingsYear1Estimate: 1300,
  avgPaybackYearsEstimate: 8,
  peakSunHoursEstimate: 5.2,
};

export const NORCAL_SOLAR_MARKETS: MarketRegion[] = [
  {
    county: 'Placer County',
    regionSlug: 'placer-county',
    state: 'california',
    cities: [
      { city: 'Roseville',  citySlug: 'roseville',  utility: 'PG&E', localData: { ...PGE, avgMonthlyBillEstimate: 235 } },
      { city: 'Rocklin',    citySlug: 'rocklin',    utility: 'PG&E', localData: { ...PGE, avgMonthlyBillEstimate: 225 } },
      { city: 'Lincoln',    citySlug: 'lincoln',    utility: 'PG&E', localData: PGE },
      { city: 'Auburn',     citySlug: 'auburn',     utility: 'PG&E', localData: PGE },
      { city: 'Loomis',     citySlug: 'loomis',     utility: 'PG&E', localData: PGE },
    ],
  },
  {
    county: 'Sacramento County',
    regionSlug: 'sacramento-county',
    state: 'california',
    cities: [
      { city: 'Sacramento',     citySlug: 'sacramento',     utility: 'SMUD', localData: SMUD },
      { city: 'Elk Grove',      citySlug: 'elk-grove',      utility: 'SMUD', localData: SMUD },
      { city: 'Rancho Cordova', citySlug: 'rancho-cordova', utility: 'SMUD', localData: SMUD },
      { city: 'Citrus Heights', citySlug: 'citrus-heights', utility: 'SMUD', localData: SMUD },
      { city: 'Folsom',         citySlug: 'folsom',         utility: 'PG&E', localData: { ...PGE, avgMonthlyBillEstimate: 245 } },
    ],
  },
  {
    county: 'El Dorado County',
    regionSlug: 'el-dorado-county',
    state: 'california',
    cities: [
      { city: 'El Dorado Hills', citySlug: 'el-dorado-hills', utility: 'PG&E', localData: { ...PGE, avgMonthlyBillEstimate: 260 } },
      { city: 'Cameron Park',    citySlug: 'cameron-park',    utility: 'PG&E', localData: { ...PGE, avgMonthlyBillEstimate: 240 } },
      { city: 'Shingle Springs', citySlug: 'shingle-springs', utility: 'PG&E', localData: PGE },
      { city: 'Placerville',     citySlug: 'placerville',     utility: 'PG&E', localData: PGE },
    ],
  },
  {
    county: 'Nevada County',
    regionSlug: 'nevada-county',
    state: 'california',
    cities: [
      { city: 'Grass Valley', citySlug: 'grass-valley', utility: 'PG&E', localData: PGE },
      { city: 'Nevada City',  citySlug: 'nevada-city',  utility: 'PG&E', localData: PGE },
      { city: 'Truckee',      citySlug: 'truckee',      utility: 'PG&E', localData: { ...PGE, peakSunHoursEstimate: 4.8 } },
    ],
  },
  {
    county: 'Yolo County',
    regionSlug: 'yolo-county',
    state: 'california',
    cities: [
      { city: 'Davis',           citySlug: 'davis',           utility: 'PG&E', localData: PGE },
      { city: 'Woodland',        citySlug: 'woodland',        utility: 'PG&E', localData: PGE },
      { city: 'West Sacramento', citySlug: 'west-sacramento', utility: 'PG&E', localData: PGE },
    ],
  },
  {
    county: 'Solano County',
    regionSlug: 'solano-county',
    state: 'california',
    cities: [
      { city: 'Fairfield', citySlug: 'fairfield', utility: 'PG&E', localData: PGE },
      { city: 'Vacaville', citySlug: 'vacaville', utility: 'PG&E', localData: { ...PGE, avgMonthlyBillEstimate: 215 } },
      { city: 'Vallejo',   citySlug: 'vallejo',   utility: 'PG&E', localData: PGE },
      { city: 'Benicia',   citySlug: 'benicia',   utility: 'PG&E', localData: PGE },
    ],
  },
];

export interface MarketParams {
  vertical: string;
  state: string;
  region: string;
  city: string;
}

export const ALL_MARKET_PARAMS: MarketParams[] = NORCAL_SOLAR_MARKETS.flatMap(r =>
  r.cities.map(c => ({
    vertical: 'solar',
    state: 'california',
    region: r.regionSlug,
    city: c.citySlug,
  }))
);

export function findMarket(
  vertical: string,
  state: string,
  region: string,
  city: string
): { region: MarketRegion; city: MarketCity } | null {
  if (vertical !== 'solar' || state !== 'california') return null;
  const regionData = NORCAL_SOLAR_MARKETS.find(r => r.regionSlug === region);
  if (!regionData) return null;
  const cityData = regionData.cities.find(c => c.citySlug === city);
  if (!cityData) return null;
  return { region: regionData, city: cityData };
}

export function marketPageHref(p: MarketParams): string {
  return `/market/${p.vertical}/${p.state}/${p.region}/${p.city}`;
}

export function marketSlug(p: MarketParams): string {
  return `${p.vertical}/${p.state}/${p.region}/${p.city}`;
}
