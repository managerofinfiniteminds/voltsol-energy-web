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

export interface MarketCityProfile {
  localNote: string;  // 1-2 sentence city-specific flavor
  faq: Array<{ q: string; a: string }>;  // 3 city-specific Q&A
}

export interface MarketCity {
  city: string;
  citySlug: string;
  utility: string;
  localData: MarketCityLocalData;
  cityProfile: MarketCityProfile;
}

export interface MarketCountyData {
  utilityRate: {
    utility: string;
    avgResidentialRatePerKwh: number;
    note: string;
  };
  permitOffice: {
    name: string;
    jurisdiction: string;
    typicalTurnaround: string;
    note: string;
  };
  climateZone: {
    zone: string;
    description: string;
  };
  countyContext: string;  // 2-3 sentence county-specific prose
}

export interface MarketRegion {
  county: string;
  regionSlug: string;
  state: 'california';
  cities: MarketCity[];
  countyData: MarketCountyData;
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

const SCE: MarketCityLocalData = {
  avgMonthlyBillEstimate: 240,
  avgSystemSizeKwEstimate: 8.0,
  avgSavingsYear1Estimate: 2100,
  avgPaybackYearsEstimate: 6,
  peakSunHoursEstimate: 5.8,
};

const SDGE: MarketCityLocalData = {
  avgMonthlyBillEstimate: 280,
  avgSystemSizeKwEstimate: 8.5,
  avgSavingsYear1Estimate: 2600,
  avgPaybackYearsEstimate: 5,
  peakSunHoursEstimate: 5.9,
};

const LADWP: MarketCityLocalData = {
  avgMonthlyBillEstimate: 180,
  avgSystemSizeKwEstimate: 7.0,
  avgSavingsYear1Estimate: 1500,
  avgPaybackYearsEstimate: 8,
  peakSunHoursEstimate: 5.7,
};

const RIVERSIDE_PUBLIC: MarketCityLocalData = {
  avgMonthlyBillEstimate: 160,
  avgSystemSizeKwEstimate: 7.5,
  avgSavingsYear1Estimate: 1400,
  avgPaybackYearsEstimate: 8,
  peakSunHoursEstimate: 6.0,
};

const ANAHEIM_PUBLIC: MarketCityLocalData = {
  avgMonthlyBillEstimate: 170,
  avgSystemSizeKwEstimate: 7.0,
  avgSavingsYear1Estimate: 1450,
  avgPaybackYearsEstimate: 8,
  peakSunHoursEstimate: 5.7,
};

const PASADENA_POWER: MarketCityLocalData = {
  avgMonthlyBillEstimate: 175,
  avgSystemSizeKwEstimate: 7.0,
  avgSavingsYear1Estimate: 1450,
  avgPaybackYearsEstimate: 8,
  peakSunHoursEstimate: 5.7,
};

export const NORCAL_SOLAR_MARKETS: MarketRegion[] = [
  {
    county: 'Placer County',
    regionSlug: 'placer-county',
    state: 'california',
    countyData: {
      utilityRate: {
        utility: 'PG&E',
        avgResidentialRatePerKwh: 0.44,
        note: 'PG&E residential blended rate (E-TOU-C tier, 2025-2026 range) — among the highest in California, making solar economics very strong.'
      },
      permitOffice: {
        name: 'Placer County Community Development Resource Agency (CDRA)',
        jurisdiction: 'Placer County',
        typicalTurnaround: '2-4 weeks',
        note: 'SolarAPP+ available for eligible systems, which can expedite approval to same-day for standard rooftop installations.'
      },
      climateZone: {
        zone: 'Zone 11',
        description: 'Hot inland climate zone with high cooling demand in summer and mild winters. Excellent solar production year-round with minimal seasonal variation.'
      },
      countyContext: 'Placer County spans from the Central Valley floor (Roseville, Rocklin, Lincoln) into the Sierra foothills (Auburn, Loomis). Lower-elevation areas see consistent sun exposure, while foothill homes may experience more terrain shading. High PG&E rates make solar highly attractive throughout the county.'
    },
    cities: [
      {
        city: 'Roseville',
        citySlug: 'roseville',
        utility: 'PG&E',
        localData: { ...PGE, avgMonthlyBillEstimate: 235 },
        cityProfile: {
          localNote: 'Roseville sits in the Central Valley with flat, unobstructed rooftops ideal for solar panel placement. The city experiences hot summers with peak cooling demand from June through September.',
          faq: [
            {
              q: 'Do I need a permit for solar in Roseville?',
              a: 'Yes. Roseville falls under Placer County CDRA jurisdiction. Typical turnaround is 2-4 weeks, though SolarAPP+ can expedite eligible systems to same-day approval. Your installer handles the permit application.'
            },
            {
              q: 'Is off-grid solar worth it in Roseville with PG&E rates?',
              a: 'Absolutely. PG&E residential rates average around $0.44/kWh in Roseville — among the highest in California. Off-grid solar with battery storage lets you lock in energy costs and avoid future rate increases.'
            },
            {
              q: 'How much sun does Roseville get for solar?',
              a: 'Roseville averages an estimated 5.2 peak sun hours per day. The flat valley terrain and minimal fog yield consistent year-round solar production, especially strong in summer months.'
            }
          ]
        }
      },
      {
        city: 'Rocklin',
        citySlug: 'rocklin',
        utility: 'PG&E',
        localData: { ...PGE, avgMonthlyBillEstimate: 225 },
        cityProfile: {
          localNote: 'Rocklin is a growing suburb in western Placer County with modern subdivisions and ample roof space. Its location in the valley floor ensures strong solar potential with minimal shading from terrain.',
          faq: [
            {
              q: 'Do I need a permit for solar in Rocklin?',
              a: 'Yes. Rocklin is under Placer County CDRA jurisdiction. Permit turnaround is typically 2-4 weeks, or same-day via SolarAPP+ for eligible systems. Your contractor manages the process.'
            },
            {
              q: 'Is off-grid solar worth it in Rocklin with PG&E rates?',
              a: 'Yes. With PG&E rates around $0.44/kWh, Rocklin homeowners can save significantly by switching to off-grid solar with battery storage, especially during peak summer cooling months.'
            },
            {
              q: 'How much sun does Rocklin get for solar?',
              a: 'Rocklin averages around 5.2 peak sun hours per day, making it an excellent location for solar production. The hot inland climate (Zone 11) drives high energy demand that solar can offset effectively.'
            }
          ]
        }
      },
      {
        city: 'Lincoln',
        citySlug: 'lincoln',
        utility: 'PG&E',
        localData: PGE,
        cityProfile: {
          localNote: 'Lincoln is a fast-growing city in west Placer County with newer homes and large rooftops. The area experiences hot, dry summers ideal for solar energy generation.',
          faq: [
            {
              q: 'Do I need a permit for solar in Lincoln?',
              a: 'Yes. Lincoln follows Placer County CDRA permit procedures, with typical turnaround of 2-4 weeks. SolarAPP+ can expedite approval for eligible residential systems to same-day.'
            },
            {
              q: 'Is off-grid solar worth it in Lincoln with PG&E rates?',
              a: 'Definitely. Lincoln residents face PG&E rates near $0.44/kWh. Off-grid solar with battery backup eliminates most of that cost while providing blackout protection during PSPS events.'
            },
            {
              q: 'How much sun does Lincoln get for solar?',
              a: 'Lincoln enjoys approximately 5.2 peak sun hours per day in Zone 11 climate. The flat valley terrain and minimal fog support strong year-round solar production.'
            }
          ]
        }
      },
      {
        city: 'Auburn',
        citySlug: 'auburn',
        utility: 'PG&E',
        localData: PGE,
        cityProfile: {
          localNote: 'Auburn sits in the Sierra foothills at higher elevation than valley floor cities. Historic Old Town and foothill neighborhoods may have more varied terrain and shading considerations.',
          faq: [
            {
              q: 'Do I need a permit for solar in Auburn?',
              a: 'Yes. Auburn is under Placer County CDRA jurisdiction. Typical permit turnaround is 2-4 weeks, with SolarAPP+ available for eligible systems. Foothill terrain may require additional site review.'
            },
            {
              q: 'Is off-grid solar worth it in Auburn with PG&E rates?',
              a: 'Yes. Auburn homeowners pay PG&E rates around $0.44/kWh. Off-grid solar is especially valuable here for backup power during frequent PSPS shutoffs in foothill fire zones.'
            },
            {
              q: 'How much sun does Auburn get for solar?',
              a: 'Auburn averages around 5.2 peak sun hours per day. Foothill topography means solar production varies by specific site orientation and shading from nearby trees or terrain.'
            }
          ]
        }
      },
      {
        city: 'Loomis',
        citySlug: 'loomis',
        utility: 'PG&E',
        localData: PGE,
        cityProfile: {
          localNote: 'Loomis is a small foothill town known for fruit orchards and rural character. Many homes sit on larger parcels with mature trees, so site-specific shading assessments are important.',
          faq: [
            {
              q: 'Do I need a permit for solar in Loomis?',
              a: 'Yes. Loomis falls under Placer County CDRA jurisdiction. Typical turnaround is 2-4 weeks, or same-day via SolarAPP+ for eligible systems. Rural sites may require additional review.'
            },
            {
              q: 'Is off-grid solar worth it in Loomis with PG&E rates?',
              a: 'Absolutely. Loomis residents pay PG&E rates near $0.44/kWh, and foothill locations face PSPS shutoffs. Off-grid solar with battery storage provides both savings and reliable backup power.'
            },
            {
              q: 'How much sun does Loomis get for solar?',
              a: 'Loomis averages around 5.2 peak sun hours per day. Actual production depends on lot orientation, tree shading, and terrain — a site assessment is critical for foothill properties.'
            }
          ]
        }
      },
    ],
  },
  {
    county: 'Sacramento County',
    regionSlug: 'sacramento-county',
    state: 'california',
    countyData: {
      utilityRate: {
        utility: 'SMUD / PG&E',
        avgResidentialRatePerKwh: 0.18,
        note: 'SMUD (Sacramento Municipal Utility District) averages around $0.18/kWh — much lower than PG&E areas. Solar still makes sense for backup power and avoiding future rate increases, though payback periods are longer. Folsom (eastern county) is served by PG&E at ~$0.44/kWh.'
      },
      permitOffice: {
        name: 'Sacramento County Building Permits & Inspection Division / City of Sacramento (SolarAPP+)',
        jurisdiction: 'Sacramento County / City of Sacramento',
        typicalTurnaround: '2-4 weeks county-wide; same-day in City of Sacramento via SolarAPP+',
        note: 'The City of Sacramento uses SolarAPP+ for automated, same-day approval of eligible rooftop systems. County jurisdictions outside the city typically take 2-4 weeks.'
      },
      climateZone: {
        zone: 'Zone 12',
        description: 'Hot-dry summer with mild winter. High cooling demand from June through September. Excellent solar production with minimal seasonal variation.'
      },
      countyContext: 'Sacramento County spans the valley floor with flat, unobstructed terrain ideal for solar. Most of the county is served by SMUD, which has lower rates than PG&E but has still seen increases. Eastern areas like Folsom fall under PG&E and have much higher rates. The county sees frequent summer heat waves, making backup power valuable during peak demand events.'
    },
    cities: [
      {
        city: 'Sacramento',
        citySlug: 'sacramento',
        utility: 'SMUD',
        localData: SMUD,
        cityProfile: {
          localNote: 'Sacramento, the state capital, sits in the Central Valley with consistent sun exposure. SMUD rates are lower than PG&E, but solar still provides backup power value and protection from future rate increases.',
          faq: [
            {
              q: 'Do I need a permit for solar in Sacramento?',
              a: 'Yes. The City of Sacramento uses SolarAPP+ for eligible residential rooftop systems, which provides same-day automated approval. Your installer submits the application and handles the process.'
            },
            {
              q: 'Is off-grid solar worth it in Sacramento with SMUD rates?',
              a: 'SMUD rates average around $0.18/kWh — much lower than PG&E. Solar payback is longer, but off-grid systems provide backup power during outages and lock in energy costs against future rate increases.'
            },
            {
              q: 'How much sun does Sacramento get for solar?',
              a: 'Sacramento averages 5.2 peak sun hours per day in Zone 12 climate. The valley floor location and hot summers yield strong solar production year-round.'
            }
          ]
        }
      },
      {
        city: 'Elk Grove',
        citySlug: 'elk-grove',
        utility: 'SMUD',
        localData: SMUD,
        cityProfile: {
          localNote: 'Elk Grove is a sprawling suburb south of Sacramento with large subdivisions and modern homes. The flat valley terrain and minimal fog ensure excellent solar conditions.',
          faq: [
            {
              q: 'Do I need a permit for solar in Elk Grove?',
              a: 'Yes. Elk Grove falls under Sacramento County Building Permits & Inspection Division. Typical turnaround is 2-4 weeks. Your contractor handles the permit application.'
            },
            {
              q: 'Is off-grid solar worth it in Elk Grove with SMUD rates?',
              a: 'SMUD rates around $0.18/kWh are lower than PG&E, so financial payback is longer. However, off-grid solar with battery storage provides backup power during summer outages and locks in energy costs long-term.'
            },
            {
              q: 'How much sun does Elk Grove get for solar?',
              a: 'Elk Grove averages about 5.2 peak sun hours per day. The flat valley terrain and Zone 12 hot-dry climate support strong solar production with minimal seasonal variation.'
            }
          ]
        }
      },
      {
        city: 'Rancho Cordova',
        citySlug: 'rancho-cordova',
        utility: 'SMUD',
        localData: SMUD,
        cityProfile: {
          localNote: 'Rancho Cordova lies east of Sacramento along Highway 50, with a mix of residential and commercial areas. The city experiences hot summers with peak cooling demand.',
          faq: [
            {
              q: 'Do I need a permit for solar in Rancho Cordova?',
              a: 'Yes. Rancho Cordova follows Sacramento County permit procedures, with typical turnaround of 2-4 weeks. Your installer will manage the application process.'
            },
            {
              q: 'Is off-grid solar worth it in Rancho Cordova with SMUD rates?',
              a: 'SMUD rates average $0.18/kWh, lower than PG&E. Off-grid solar offers longer payback but provides backup power and shields you from future rate increases, especially valuable in hot summer months.'
            },
            {
              q: 'How much sun does Rancho Cordova get for solar?',
              a: 'Rancho Cordova enjoys approximately 5.2 peak sun hours per day in Zone 12. The valley location and minimal fog provide consistent solar production year-round.'
            }
          ]
        }
      },
      {
        city: 'Citrus Heights',
        citySlug: 'citrus-heights',
        utility: 'SMUD',
        localData: SMUD,
        cityProfile: {
          localNote: 'Citrus Heights is an established suburb northeast of Sacramento with mature neighborhoods. The flat terrain and consistent sun exposure make solar installation straightforward.',
          faq: [
            {
              q: 'Do I need a permit for solar in Citrus Heights?',
              a: 'Yes. Citrus Heights is under Sacramento County Building Permits & Inspection Division jurisdiction. Typical turnaround is 2-4 weeks. Your contractor handles the permit application.'
            },
            {
              q: 'Is off-grid solar worth it in Citrus Heights with SMUD rates?',
              a: 'SMUD rates around $0.18/kWh mean longer financial payback compared to PG&E areas. However, off-grid solar provides backup power during outages and protects against future rate increases.'
            },
            {
              q: 'How much sun does Citrus Heights get for solar?',
              a: 'Citrus Heights averages around 5.2 peak sun hours per day. The Zone 12 climate and valley location support strong solar production with minimal seasonal variation.'
            }
          ]
        }
      },
      {
        city: 'Folsom',
        citySlug: 'folsom',
        utility: 'PG&E',
        localData: { ...PGE, avgMonthlyBillEstimate: 245 },
        cityProfile: {
          localNote: 'Folsom sits at the eastern edge of Sacramento County along Folsom Lake. Unlike most of the county, Folsom is served by PG&E, which has much higher rates than SMUD.',
          faq: [
            {
              q: 'Do I need a permit for solar in Folsom?',
              a: 'Yes. Folsom follows Sacramento County permit procedures, with typical turnaround of 2-4 weeks. Your installer will manage the application process.'
            },
            {
              q: 'Is off-grid solar worth it in Folsom with PG&E rates?',
              a: 'Yes. Unlike most of Sacramento County, Folsom residents pay PG&E rates around $0.44/kWh. Off-grid solar with battery storage can deliver strong savings and backup power during PSPS events.'
            },
            {
              q: 'How much sun does Folsom get for solar?',
              a: 'Folsom averages approximately 5.2 peak sun hours per day. The eastern valley location near the foothills provides excellent solar production year-round in Zone 12 climate.'
            }
          ]
        }
      },
    ],
  },
  {
    county: 'El Dorado County',
    regionSlug: 'el-dorado-county',
    state: 'california',
    countyData: {
      utilityRate: {
        utility: 'PG&E',
        avgResidentialRatePerKwh: 0.44,
        note: 'PG&E residential blended rate (E-TOU-C tier, 2025-2026 range). High rates make solar economics very strong, especially for foothill homes with high heating and cooling loads.'
      },
      permitOffice: {
        name: 'El Dorado County Planning & Building Department',
        jurisdiction: 'El Dorado County',
        typicalTurnaround: '2-3 weeks',
        note: 'County-wide permit process. Foothill and rural sites may require additional fire-zone or structural review for snow load and terrain considerations.'
      },
      climateZone: {
        zone: 'Zone 11',
        description: 'Hot inland climate for lower elevations (El Dorado Hills, Cameron Park). Foothill areas (Shingle Springs, Placerville) see more variation with cooler winters and potential snow at higher elevations.'
      },
      countyContext: 'El Dorado County spans from the Sierra foothills into higher mountain elevations. Lower-elevation areas (El Dorado Hills, Cameron Park) have strong solar potential similar to valley floor. Higher elevations (Placerville, Shingle Springs) require snow-load considerations and may see more tree shading. High PG&E rates and frequent PSPS shutoffs make off-grid solar attractive for backup power and savings.'
    },
    cities: [
      {
        city: 'El Dorado Hills',
        citySlug: 'el-dorado-hills',
        utility: 'PG&E',
        localData: { ...PGE, avgMonthlyBillEstimate: 260, peakSunHoursEstimate: 5.3 },
        cityProfile: {
          localNote: 'El Dorado Hills is an affluent suburb in the western foothills with large homes and high energy consumption. The area sees hot summers and mild winters, with excellent solar potential.',
          faq: [
            {
              q: 'Do I need a permit for solar in El Dorado Hills?',
              a: 'Yes. El Dorado Hills falls under El Dorado County Planning & Building Department jurisdiction. Typical turnaround is 2-3 weeks. Your contractor handles the permit application.'
            },
            {
              q: 'Is off-grid solar worth it in El Dorado Hills with PG&E rates?',
              a: 'Absolutely. El Dorado Hills residents pay PG&E rates around $0.44/kWh on higher-than-average bills due to large homes. Off-grid solar with battery storage delivers strong savings and backup power during PSPS events.'
            },
            {
              q: 'How much sun does El Dorado Hills get for solar?',
              a: 'El Dorado Hills averages around 5.3 peak sun hours per day. The western foothill location in Zone 11 provides excellent solar production with minimal seasonal variation.'
            }
          ]
        }
      },
      {
        city: 'Cameron Park',
        citySlug: 'cameron-park',
        utility: 'PG&E',
        localData: { ...PGE, avgMonthlyBillEstimate: 240, peakSunHoursEstimate: 5.2 },
        cityProfile: {
          localNote: 'Cameron Park is a census-designated place in the western foothills, with many homes on larger parcels. The area experiences hot summers and is prone to PSPS shutoffs during fire season.',
          faq: [
            {
              q: 'Do I need a permit for solar in Cameron Park?',
              a: 'Yes. Cameron Park is under El Dorado County Planning & Building Department jurisdiction. Typical turnaround is 2-3 weeks. Your installer will manage the permit application.'
            },
            {
              q: 'Is off-grid solar worth it in Cameron Park with PG&E rates?',
              a: 'Yes. Cameron Park residents pay PG&E rates around $0.44/kWh and face frequent PSPS shutoffs during fire season. Off-grid solar with battery storage provides both savings and reliable backup power.'
            },
            {
              q: 'How much sun does Cameron Park get for solar?',
              a: 'Cameron Park averages approximately 5.2 peak sun hours per day. The foothill location in Zone 11 supports strong solar production, though tree shading on larger parcels should be assessed.'
            }
          ]
        }
      },
      {
        city: 'Shingle Springs',
        citySlug: 'shingle-springs',
        utility: 'PG&E',
        localData: { ...PGE, peakSunHoursEstimate: 5.1 },
        cityProfile: {
          localNote: 'Shingle Springs is a small foothill community at higher elevation than western El Dorado County. Many homes sit on wooded lots, so tree shading and terrain must be assessed carefully.',
          faq: [
            {
              q: 'Do I need a permit for solar in Shingle Springs?',
              a: 'Yes. Shingle Springs follows El Dorado County Planning & Building Department procedures, with typical turnaround of 2-3 weeks. Foothill sites may require additional review for fire zones and structural considerations.'
            },
            {
              q: 'Is off-grid solar worth it in Shingle Springs with PG&E rates?',
              a: 'Yes. Shingle Springs residents pay PG&E rates near $0.44/kWh and face PSPS shutoffs in foothill fire zones. Off-grid solar with battery storage is ideal for backup power and long-term savings.'
            },
            {
              q: 'How much sun does Shingle Springs get for solar?',
              a: 'Shingle Springs averages around 5.1 peak sun hours per day. Foothill topography and tree cover mean solar production varies significantly by site orientation and shading — a professional site assessment is essential.'
            }
          ]
        }
      },
      {
        city: 'Placerville',
        citySlug: 'placerville',
        utility: 'PG&E',
        localData: { ...PGE, peakSunHoursEstimate: 5.0 },
        cityProfile: {
          localNote: 'Placerville is the county seat, located in the higher foothills along Highway 50. The area experiences cooler winters and occasional snow, requiring snow-load considerations for solar installations.',
          faq: [
            {
              q: 'Do I need a permit for solar in Placerville?',
              a: 'Yes. Placerville is under El Dorado County Planning & Building Department jurisdiction. Typical turnaround is 2-3 weeks. Higher-elevation sites may require additional structural review for snow load.'
            },
            {
              q: 'Is off-grid solar worth it in Placerville with PG&E rates?',
              a: 'Yes. Placerville residents pay PG&E rates around $0.44/kWh and face PSPS shutoffs during fire season. Off-grid solar with battery storage provides both savings and backup power during winter storms and summer shutoffs.'
            },
            {
              q: 'How much sun does Placerville get for solar?',
              a: 'Placerville averages around 5.0 peak sun hours per day. Higher elevation and foothill terrain mean solar production varies by site. Snow shedding and terrain shading should be assessed during system design.'
            }
          ]
        }
      },
    ],
  },
  {
    county: 'Nevada County',
    regionSlug: 'nevada-county',
    state: 'california',
    countyData: {
      utilityRate: {
        utility: 'PG&E',
        avgResidentialRatePerKwh: 0.44,
        note: 'PG&E residential blended rate (E-TOU-C tier, 2025-2026 range). High rates combined with frequent PSPS shutoffs make solar with battery backup particularly valuable in Nevada County.'
      },
      permitOffice: {
        name: 'Nevada County Building Department',
        jurisdiction: 'Nevada County',
        typicalTurnaround: '2-4 weeks',
        note: 'County-wide permit process. Rural and foothill sites may require additional fire-zone review. Higher-elevation areas (Truckee) require snow-load calculations and may take longer.'
      },
      climateZone: {
        zone: 'Zone 11 (Grass Valley, Nevada City) / Zone 16 (Truckee)',
        description: 'Zone 11: hot inland climate with cooler winters than valley floor. Zone 16 (Truckee): cold mountain climate with significant snow load and higher heating demand. Solar production is strong in summer but reduced in winter.'
      },
      countyContext: 'Nevada County spans from the mid-elevation foothills (Grass Valley, Nevada City) to the high Sierra (Truckee). Foothill areas face frequent PSPS shutoffs during fire season and benefit from off-grid solar for backup power. Truckee requires specialized snow-load engineering and sees reduced winter production due to snow cover, but strong summer production and high heating loads still make solar viable.'
    },
    cities: [
      {
        city: 'Grass Valley',
        citySlug: 'grass-valley',
        utility: 'PG&E',
        localData: { ...PGE, peakSunHoursEstimate: 5.1 },
        cityProfile: {
          localNote: 'Grass Valley is a historic Gold Rush town in the Sierra foothills. The area experiences hot summers and cooler winters, with frequent PSPS shutoffs during fire season.',
          faq: [
            {
              q: 'Do I need a permit for solar in Grass Valley?',
              a: 'Yes. Grass Valley is under Nevada County Building Department jurisdiction. Typical turnaround is 2-4 weeks. Rural and foothill sites may require additional fire-zone review.'
            },
            {
              q: 'Is off-grid solar worth it in Grass Valley with PG&E rates?',
              a: 'Absolutely. Grass Valley residents pay PG&E rates around $0.44/kWh and face frequent PSPS shutoffs during fire season. Off-grid solar with battery storage provides both savings and critical backup power.'
            },
            {
              q: 'How much sun does Grass Valley get for solar?',
              a: 'Grass Valley averages around 5.1 peak sun hours per day. The foothill location in Zone 11 supports strong solar production, though terrain and tree shading should be assessed on a site-by-site basis.'
            }
          ]
        }
      },
      {
        city: 'Nevada City',
        citySlug: 'nevada-city',
        utility: 'PG&E',
        localData: { ...PGE, peakSunHoursEstimate: 5.0 },
        cityProfile: {
          localNote: 'Nevada City is a small historic town in the Sierra foothills, surrounded by forested terrain. Many homes sit on wooded lots, so tree shading and fire-zone considerations are important.',
          faq: [
            {
              q: 'Do I need a permit for solar in Nevada City?',
              a: 'Yes. Nevada City follows Nevada County Building Department procedures, with typical turnaround of 2-4 weeks. Foothill and forested sites may require additional fire-zone and terrain review.'
            },
            {
              q: 'Is off-grid solar worth it in Nevada City with PG&E rates?',
              a: 'Yes. Nevada City residents pay PG&E rates near $0.44/kWh and experience frequent PSPS shutoffs. Off-grid solar with battery storage is ideal for backup power during shutoffs and long-term energy savings.'
            },
            {
              q: 'How much sun does Nevada City get for solar?',
              a: 'Nevada City averages around 5.0 peak sun hours per day. Foothill topography and tree cover mean solar production varies by site orientation and shading — a professional site assessment is essential.'
            }
          ]
        }
      },
      {
        city: 'Truckee',
        citySlug: 'truckee',
        utility: 'PG&E',
        localData: { ...PGE, peakSunHoursEstimate: 4.8 },
        cityProfile: {
          localNote: 'Truckee is a high-Sierra mountain town near Lake Tahoe, with heavy winter snowfall and cold temperatures. Solar installations require snow-load engineering and snow-shedding design.',
          faq: [
            {
              q: 'Do I need a permit for solar in Truckee?',
              a: 'Yes. Truckee is under Nevada County Building Department jurisdiction. Typical turnaround is 2-4 weeks, though high-elevation sites require snow-load calculations and structural review, which can extend timelines.'
            },
            {
              q: 'Is off-grid solar worth it in Truckee with PG&E rates?',
              a: 'Yes. Truckee residents pay PG&E rates around $0.44/kWh with high heating loads. Off-grid solar with battery storage provides backup power during winter storms and PSPS events, though winter production is reduced by snow cover.'
            },
            {
              q: 'How much sun does Truckee get for solar?',
              a: 'Truckee averages around 4.8 peak sun hours per day in Zone 16 climate. Winter snow cover reduces production, but strong summer sun and high year-round energy demand (heating) still make solar viable with proper snow-shedding design.'
            }
          ]
        }
      },
    ],
  },
  {
    county: 'Yolo County',
    regionSlug: 'yolo-county',
    state: 'california',
    countyData: {
      utilityRate: {
        utility: 'PG&E',
        avgResidentialRatePerKwh: 0.44,
        note: 'PG&E residential blended rate (E-TOU-C tier, 2025-2026 range). High rates make solar economics very strong. Davis and other cities have adopted SolarAPP+ for expedited permitting.'
      },
      permitOffice: {
        name: 'Yolo County / City Building Departments (Davis, Woodland, West Sacramento)',
        jurisdiction: 'Yolo County / individual cities',
        typicalTurnaround: 'Same-day to 2 weeks (varies by city; Davis uses SolarAPP+)',
        note: 'Davis has adopted SolarAPP+ for eligible residential rooftop systems, providing same-day automated approval. Woodland, West Sacramento, and unincorporated county areas typically take 2 weeks.'
      },
      climateZone: {
        zone: 'Zone 12',
        description: 'Hot-dry summer with mild winter. High cooling demand from June through September. Excellent solar production with minimal seasonal variation.'
      },
      countyContext: 'Yolo County spans the Central Valley west of Sacramento, with flat agricultural terrain ideal for solar. The county is home to UC Davis and has a progressive approach to renewable energy, with several cities adopting SolarAPP+ for expedited solar permitting. High PG&E rates make solar economics very strong throughout the county.'
    },
    cities: [
      {
        city: 'Davis',
        citySlug: 'davis',
        utility: 'PG&E',
        localData: { ...PGE, peakSunHoursEstimate: 5.3 },
        cityProfile: {
          localNote: 'Davis is a college town home to UC Davis, known for its bike-friendly culture and environmental leadership. The city has adopted SolarAPP+ for expedited solar permitting.',
          faq: [
            {
              q: 'Do I need a permit for solar in Davis?',
              a: 'Yes. Davis uses SolarAPP+ for eligible residential rooftop systems, which provides same-day automated approval. Your installer submits the application and handles the process.'
            },
            {
              q: 'Is off-grid solar worth it in Davis with PG&E rates?',
              a: 'Yes. Davis residents pay PG&E rates around $0.44/kWh. Off-grid solar with battery storage delivers strong savings and aligns with the city\'s progressive environmental values.'
            },
            {
              q: 'How much sun does Davis get for solar?',
              a: 'Davis averages approximately 5.3 peak sun hours per day. The flat valley location in Zone 12 provides excellent solar production year-round with minimal fog or terrain shading.'
            }
          ]
        }
      },
      {
        city: 'Woodland',
        citySlug: 'woodland',
        utility: 'PG&E',
        localData: { ...PGE, peakSunHoursEstimate: 5.2 },
        cityProfile: {
          localNote: 'Woodland is a small city north of Davis with an agricultural character. The flat valley terrain and consistent sun exposure make solar installation straightforward.',
          faq: [
            {
              q: 'Do I need a permit for solar in Woodland?',
              a: 'Yes. Woodland follows its city building department permit procedures, with typical turnaround of around 2 weeks. Your contractor handles the permit application.'
            },
            {
              q: 'Is off-grid solar worth it in Woodland with PG&E rates?',
              a: 'Yes. Woodland residents pay PG&E rates around $0.44/kWh. Off-grid solar with battery storage provides strong savings and backup power during summer heat waves and outages.'
            },
            {
              q: 'How much sun does Woodland get for solar?',
              a: 'Woodland averages around 5.2 peak sun hours per day. The flat valley location in Zone 12 supports strong solar production with minimal seasonal variation.'
            }
          ]
        }
      },
      {
        city: 'West Sacramento',
        citySlug: 'west-sacramento',
        utility: 'PG&E',
        localData: { ...PGE, peakSunHoursEstimate: 5.2 },
        cityProfile: {
          localNote: 'West Sacramento sits directly across the Sacramento River from the state capital. The city has grown rapidly in recent years with new residential and commercial development.',
          faq: [
            {
              q: 'Do I need a permit for solar in West Sacramento?',
              a: 'Yes. West Sacramento follows its city building department permit procedures, with typical turnaround of around 2 weeks. Your installer will manage the application process.'
            },
            {
              q: 'Is off-grid solar worth it in West Sacramento with PG&E rates?',
              a: 'Yes. West Sacramento residents pay PG&E rates around $0.44/kWh. Off-grid solar with battery storage delivers strong savings and backup power during summer peak demand periods.'
            },
            {
              q: 'How much sun does West Sacramento get for solar?',
              a: 'West Sacramento averages approximately 5.2 peak sun hours per day. The flat valley location in Zone 12 provides excellent solar production year-round with minimal fog.'
            }
          ]
        }
      },
    ],
  },
  {
    county: 'Solano County',
    regionSlug: 'solano-county',
    state: 'california',
    countyData: {
      utilityRate: {
        utility: 'PG&E',
        avgResidentialRatePerKwh: 0.44,
        note: 'PG&E residential blended rate (E-TOU-C tier, 2025-2026 range). High rates make solar economics very strong, especially for inland areas (Fairfield, Vacaville) with high cooling demand.'
      },
      permitOffice: {
        name: 'Solano County Resource Management / City Building Departments (Fairfield, Vacaville, Vallejo, Benicia)',
        jurisdiction: 'Solano County / individual cities',
        typicalTurnaround: '2-4 weeks',
        note: 'Permit timelines vary by jurisdiction. Fairfield, Vacaville, Vallejo, and Benicia each have their own city building departments. Unincorporated areas fall under Solano County Resource Management.'
      },
      climateZone: {
        zone: 'Zone 12',
        description: 'Hot-dry summer with mild winter for inland areas (Fairfield, Vacaville). Coastal areas (Vallejo, Benicia) experience more moderate temperatures with marine influence but still see strong solar production.'
      },
      countyContext: 'Solano County spans from the inland valley (Fairfield, Vacaville) to the San Francisco Bay waterfront (Vallejo, Benicia). Inland areas experience hot summers with high cooling demand, while coastal areas have more moderate temperatures. High PG&E rates throughout the county make solar economics strong. The county is strategically located between Sacramento and the Bay Area.'
    },
    cities: [
      {
        city: 'Fairfield',
        citySlug: 'fairfield',
        utility: 'PG&E',
        localData: { ...PGE, peakSunHoursEstimate: 5.2 },
        cityProfile: {
          localNote: 'Fairfield is the county seat, located in the inland valley between Sacramento and the Bay Area. The area experiences hot summers and is ideal for solar energy generation.',
          faq: [
            {
              q: 'Do I need a permit for solar in Fairfield?',
              a: 'Yes. Fairfield has its own city building department with typical turnaround of 2-4 weeks. Your installer will manage the permit application process.'
            },
            {
              q: 'Is off-grid solar worth it in Fairfield with PG&E rates?',
              a: 'Yes. Fairfield residents pay PG&E rates around $0.44/kWh with high summer cooling demand. Off-grid solar with battery storage delivers strong savings and backup power during peak demand periods.'
            },
            {
              q: 'How much sun does Fairfield get for solar?',
              a: 'Fairfield averages around 5.2 peak sun hours per day. The inland valley location in Zone 12 provides excellent solar production year-round with minimal fog.'
            }
          ]
        }
      },
      {
        city: 'Vacaville',
        citySlug: 'vacaville',
        utility: 'PG&E',
        localData: { ...PGE, avgMonthlyBillEstimate: 215, peakSunHoursEstimate: 5.2 },
        cityProfile: {
          localNote: 'Vacaville is a growing city along I-80 between Sacramento and the Bay Area. The inland valley location experiences hot, dry summers ideal for solar production.',
          faq: [
            {
              q: 'Do I need a permit for solar in Vacaville?',
              a: 'Yes. Vacaville has its own city building department with typical turnaround of 2-4 weeks. Your contractor handles the permit application.'
            },
            {
              q: 'Is off-grid solar worth it in Vacaville with PG&E rates?',
              a: 'Yes. Vacaville residents pay PG&E rates around $0.44/kWh. Off-grid solar with battery storage provides strong savings and backup power during summer heat waves.'
            },
            {
              q: 'How much sun does Vacaville get for solar?',
              a: 'Vacaville averages approximately 5.2 peak sun hours per day. The inland valley location in Zone 12 supports strong solar production with minimal seasonal variation.'
            }
          ]
        }
      },
      {
        city: 'Vallejo',
        citySlug: 'vallejo',
        utility: 'PG&E',
        localData: { ...PGE, peakSunHoursEstimate: 5.0 },
        cityProfile: {
          localNote: 'Vallejo sits on the San Francisco Bay waterfront with a cooler, marine-influenced climate than inland Solano County. The area still receives strong solar production despite more moderate temperatures.',
          faq: [
            {
              q: 'Do I need a permit for solar in Vallejo?',
              a: 'Yes. Vallejo has its own city building department with typical turnaround of 2-4 weeks. Your installer will manage the permit application process.'
            },
            {
              q: 'Is off-grid solar worth it in Vallejo with PG&E rates?',
              a: 'Yes. Vallejo residents pay PG&E rates around $0.44/kWh. Off-grid solar with battery storage provides strong savings even with moderate cooling demand, plus backup power during outages.'
            },
            {
              q: 'How much sun does Vallejo get for solar?',
              a: 'Vallejo averages around 5.0 peak sun hours per day. The bay waterfront location experiences more marine influence than inland areas but still supports strong solar production in Zone 12.'
            }
          ]
        }
      },
      {
        city: 'Benicia',
        citySlug: 'benicia',
        utility: 'PG&E',
        localData: { ...PGE, peakSunHoursEstimate: 5.1 },
        cityProfile: {
          localNote: 'Benicia is a small waterfront city on the Carquinez Strait with a historic downtown. The bay location provides moderate temperatures while still supporting strong solar production.',
          faq: [
            {
              q: 'Do I need a permit for solar in Benicia?',
              a: 'Yes. Benicia has its own city building department with typical turnaround of 2-4 weeks. Your contractor handles the permit application.'
            },
            {
              q: 'Is off-grid solar worth it in Benicia with PG&E rates?',
              a: 'Yes. Benicia residents pay PG&E rates around $0.44/kWh. Off-grid solar with battery storage delivers strong savings and backup power, even with moderate cooling demand from the bay location.'
            },
            {
              q: 'How much sun does Benicia get for solar?',
              a: 'Benicia averages around 5.1 peak sun hours per day. The waterfront location in Zone 12 experiences marine influence but still provides excellent solar production year-round.'
            }
          ]
        }
      },
    ],
  },
  {
    county: 'Alameda County',
    regionSlug: 'alameda-county',
    state: 'california',
    countyData: {
      utilityRate: {
        utility: 'PG&E',
        avgResidentialRatePerKwh: 0.44,
        note: 'PG&E residential blended rate (E-TOU-C tier, 2025-2026 range). High rates make solar economics very strong. Some East Bay cities like Alameda and Fremont have adopted SolarAPP+ for expedited permitting.'
      },
      permitOffice: {
        name: 'Alameda County Community Development Agency / Individual City Building Departments',
        jurisdiction: 'Alameda County / individual cities',
        typicalTurnaround: '2-4 weeks; same-day for SolarAPP+ cities (Fremont, Alameda)',
        note: 'Fremont and the City of Alameda use SolarAPP+ for automated same-day approval of eligible residential systems. Oakland, Berkeley, Hayward, and other cities typically take 2-4 weeks for permit approval.'
      },
      climateZone: {
        zone: 'Zone 3 (coastal areas) / Zone 4 (inland valleys)',
        description: 'Zone 3: mild marine climate along the bay (Oakland, Berkeley, Alameda) with moderate temperatures year-round. Zone 4: warm inland climate (Livermore, Pleasanton, Dublin) with hot summers and high cooling demand. Solar production is strong throughout the county.'
      },
      countyContext: 'Alameda County spans from the San Francisco Bay waterfront (Oakland, Berkeley, Alameda) through the inland East Bay valleys (Livermore, Pleasanton, Dublin). Coastal areas experience marine layer influence but still have strong solar potential. Inland valleys see hot summers with high cooling demand, making solar especially valuable. High PG&E rates throughout the county drive strong solar economics.'
    },
    cities: [
      {
        city: 'Oakland',
        citySlug: 'oakland',
        utility: 'PG&E',
        localData: { ...PGE, avgMonthlyBillEstimate: 210, peakSunHoursEstimate: 5.0 },
        cityProfile: {
          localNote: 'Oakland is a major East Bay city with diverse neighborhoods ranging from bayside flats to hillside areas. Marine layer influence is common, but solar production remains strong year-round.',
          faq: [
            {
              q: 'Do I need a permit for solar in Oakland?',
              a: 'Yes. Oakland has its own city building department with typical turnaround of 2-4 weeks. Your installer will manage the permit application process.'
            },
            {
              q: 'Is off-grid solar worth it in Oakland with PG&E rates?',
              a: 'Yes. Oakland residents pay PG&E rates around $0.44/kWh. Off-grid solar with battery storage delivers strong savings and provides backup power during outages and PSPS events.'
            },
            {
              q: 'How much sun does Oakland get for solar?',
              a: 'Oakland averages around 5.0 peak sun hours per day in Zone 3. Marine layer can reduce morning production, but the climate still supports strong solar generation year-round.'
            }
          ]
        }
      },
      {
        city: 'Fremont',
        citySlug: 'fremont',
        utility: 'PG&E',
        localData: { ...PGE, avgMonthlyBillEstimate: 230, peakSunHoursEstimate: 5.2 },
        cityProfile: {
          localNote: 'Fremont is a sprawling city in southern Alameda County with a mix of bayside and inland areas. The city has adopted SolarAPP+ for expedited solar permitting.',
          faq: [
            {
              q: 'Do I need a permit for solar in Fremont?',
              a: 'Yes. Fremont uses SolarAPP+ for eligible residential rooftop systems, which provides same-day automated approval. Your installer submits the application and handles the process.'
            },
            {
              q: 'Is off-grid solar worth it in Fremont with PG&E rates?',
              a: 'Yes. Fremont residents pay PG&E rates around $0.44/kWh. Off-grid solar with battery storage provides strong savings and backup power, especially valuable for inland areas with high summer cooling demand.'
            },
            {
              q: 'How much sun does Fremont get for solar?',
              a: 'Fremont averages approximately 5.2 peak sun hours per day. The mix of Zone 3 and Zone 4 climate provides excellent solar production, with inland areas seeing slightly higher output.'
            }
          ]
        }
      },
      {
        city: 'Hayward',
        citySlug: 'hayward',
        utility: 'PG&E',
        localData: { ...PGE, avgMonthlyBillEstimate: 215, peakSunHoursEstimate: 5.1 },
        cityProfile: {
          localNote: 'Hayward sits along the eastern bay shoreline with hillside areas to the east. The area experiences moderate marine influence with strong solar production potential.',
          faq: [
            {
              q: 'Do I need a permit for solar in Hayward?',
              a: 'Yes. Hayward has its own city building department with typical turnaround of 2-4 weeks. Your contractor handles the permit application.'
            },
            {
              q: 'Is off-grid solar worth it in Hayward with PG&E rates?',
              a: 'Yes. Hayward residents pay PG&E rates around $0.44/kWh. Off-grid solar with battery storage delivers strong savings and backup power during outages.'
            },
            {
              q: 'How much sun does Hayward get for solar?',
              a: 'Hayward averages around 5.1 peak sun hours per day in Zone 3/4 transition. The bay location sees moderate marine layer, but solar production remains strong year-round.'
            }
          ]
        }
      },
      {
        city: 'Berkeley',
        citySlug: 'berkeley',
        utility: 'PG&E',
        localData: { ...PGE, avgMonthlyBillEstimate: 205, peakSunHoursEstimate: 4.9 },
        cityProfile: {
          localNote: 'Berkeley sits on the east bay waterfront with hillside neighborhoods rising into the East Bay hills. The area experiences frequent marine layer but still supports solar production.',
          faq: [
            {
              q: 'Do I need a permit for solar in Berkeley?',
              a: 'Yes. Berkeley has its own city building department with typical turnaround of 2-4 weeks. Your installer will manage the permit application process.'
            },
            {
              q: 'Is off-grid solar worth it in Berkeley with PG&E rates?',
              a: 'Yes. Berkeley residents pay PG&E rates around $0.44/kWh. Off-grid solar with battery storage provides savings and aligns with Berkeley\'s strong environmental values, plus backup power during outages.'
            },
            {
              q: 'How much sun does Berkeley get for solar?',
              a: 'Berkeley averages around 4.9 peak sun hours per day in Zone 3. Marine layer is frequent, but the climate still supports reliable solar production, especially in hillside areas above the fog line.'
            }
          ]
        }
      },
      {
        city: 'San Leandro',
        citySlug: 'san-leandro',
        utility: 'PG&E',
        localData: { ...PGE, avgMonthlyBillEstimate: 210, peakSunHoursEstimate: 5.0 },
        cityProfile: {
          localNote: 'San Leandro is a bayside city between Oakland and Hayward with flat terrain ideal for solar. The area experiences moderate marine influence.',
          faq: [
            {
              q: 'Do I need a permit for solar in San Leandro?',
              a: 'Yes. San Leandro has its own city building department with typical turnaround of 2-4 weeks. Your contractor handles the permit application.'
            },
            {
              q: 'Is off-grid solar worth it in San Leandro with PG&E rates?',
              a: 'Yes. San Leandro residents pay PG&E rates around $0.44/kWh. Off-grid solar with battery storage delivers strong savings and backup power during outages.'
            },
            {
              q: 'How much sun does San Leandro get for solar?',
              a: 'San Leandro averages around 5.0 peak sun hours per day in Zone 3. The bayside location experiences marine layer, but solar production remains strong and reliable year-round.'
            }
          ]
        }
      },
      {
        city: 'Livermore',
        citySlug: 'livermore',
        utility: 'PG&E',
        localData: { ...PGE, avgMonthlyBillEstimate: 240, peakSunHoursEstimate: 5.4 },
        cityProfile: {
          localNote: 'Livermore is an inland valley city east of the East Bay hills. The area experiences hot, dry summers with minimal marine layer influence, making it ideal for solar production.',
          faq: [
            {
              q: 'Do I need a permit for solar in Livermore?',
              a: 'Yes. Livermore has its own city building department with typical turnaround of 2-4 weeks. Your installer will manage the permit application process.'
            },
            {
              q: 'Is off-grid solar worth it in Livermore with PG&E rates?',
              a: 'Absolutely. Livermore residents pay PG&E rates around $0.44/kWh with high summer cooling demand. Off-grid solar with battery storage delivers strong savings and backup power during heat waves.'
            },
            {
              q: 'How much sun does Livermore get for solar?',
              a: 'Livermore averages around 5.4 peak sun hours per day in Zone 4. The inland valley location provides excellent solar production with minimal marine layer interference.'
            }
          ]
        }
      },
      {
        city: 'Pleasanton',
        citySlug: 'pleasanton',
        utility: 'PG&E',
        localData: { ...PGE, avgMonthlyBillEstimate: 250, peakSunHoursEstimate: 5.3 },
        cityProfile: {
          localNote: 'Pleasanton is an affluent Tri-Valley city with large homes and high energy consumption. The inland valley location provides excellent solar conditions.',
          faq: [
            {
              q: 'Do I need a permit for solar in Pleasanton?',
              a: 'Yes. Pleasanton has its own city building department with typical turnaround of 2-4 weeks. Your contractor handles the permit application.'
            },
            {
              q: 'Is off-grid solar worth it in Pleasanton with PG&E rates?',
              a: 'Absolutely. Pleasanton residents pay PG&E rates around $0.44/kWh on higher-than-average bills. Off-grid solar with battery storage delivers strong savings and backup power during summer heat waves.'
            },
            {
              q: 'How much sun does Pleasanton get for solar?',
              a: 'Pleasanton averages approximately 5.3 peak sun hours per day in Zone 4. The inland valley location provides excellent solar production with hot summers and minimal marine layer.'
            }
          ]
        }
      },
      {
        city: 'Dublin',
        citySlug: 'dublin-alameda',
        utility: 'PG&E',
        localData: { ...PGE, avgMonthlyBillEstimate: 245, peakSunHoursEstimate: 5.3 },
        cityProfile: {
          localNote: 'Dublin is a growing Tri-Valley suburb with modern subdivisions and large rooftops. The inland valley location experiences hot summers ideal for solar.',
          faq: [
            {
              q: 'Do I need a permit for solar in Dublin?',
              a: 'Yes. Dublin has its own city building department with typical turnaround of 2-4 weeks. Your installer will manage the permit application process.'
            },
            {
              q: 'Is off-grid solar worth it in Dublin with PG&E rates?',
              a: 'Yes. Dublin residents pay PG&E rates around $0.44/kWh with high summer cooling demand. Off-grid solar with battery storage provides strong savings and backup power.'
            },
            {
              q: 'How much sun does Dublin get for solar?',
              a: 'Dublin averages around 5.3 peak sun hours per day in Zone 4. The inland valley location provides excellent solar production with minimal marine layer interference.'
            }
          ]
        }
      },
    ],
  },
  {
    county: 'Contra Costa County',
    regionSlug: 'contra-costa-county',
    state: 'california',
    countyData: {
      utilityRate: {
        utility: 'PG&E',
        avgResidentialRatePerKwh: 0.44,
        note: 'PG&E residential blended rate (E-TOU-C tier, 2025-2026 range). High rates make solar economics very strong. Inland valleys (Concord, Antioch, Walnut Creek) see especially high cooling costs in summer.'
      },
      permitOffice: {
        name: 'Contra Costa County Building Inspection Division / Individual City Building Departments',
        jurisdiction: 'Contra Costa County / individual cities',
        typicalTurnaround: '2-4 weeks',
        note: 'Concord, Richmond, Walnut Creek, Antioch, and other cities have their own building departments. Unincorporated areas fall under Contra Costa County Building Inspection. Some cities are adopting SolarAPP+ for expedited approval.'
      },
      climateZone: {
        zone: 'Zone 3 (Richmond, western areas) / Zone 4 (inland valleys)',
        description: 'Zone 3: mild marine climate along the bay (Richmond) with moderate temperatures. Zone 4: warm inland valleys (Concord, Walnut Creek, Antioch) with hot summers and high cooling demand. Strong solar production throughout the county.'
      },
      countyContext: 'Contra Costa County spans from the San Francisco Bay shoreline (Richmond) through the central valleys (Concord, Walnut Creek, San Ramon) to the eastern delta region (Antioch, Brentwood, Pittsburg). Inland areas experience hot summers with high cooling demand. High PG&E rates and occasional PSPS shutoffs in eastern foothill areas make solar with battery storage attractive throughout the county.'
    },
    cities: [
      {
        city: 'Concord',
        citySlug: 'concord',
        utility: 'PG&E',
        localData: { ...PGE, avgMonthlyBillEstimate: 230, peakSunHoursEstimate: 5.2 },
        cityProfile: {
          localNote: 'Concord is a central East Bay city with hot, dry summers. The inland valley location provides excellent solar production conditions.',
          faq: [
            {
              q: 'Do I need a permit for solar in Concord?',
              a: 'Yes. Concord has its own city building department with typical turnaround of 2-4 weeks. Your installer will manage the permit application process.'
            },
            {
              q: 'Is off-grid solar worth it in Concord with PG&E rates?',
              a: 'Yes. Concord residents pay PG&E rates around $0.44/kWh with high summer cooling demand. Off-grid solar with battery storage delivers strong savings and backup power during heat waves.'
            },
            {
              q: 'How much sun does Concord get for solar?',
              a: 'Concord averages around 5.2 peak sun hours per day in Zone 4. The inland valley location provides excellent solar production with hot summers and minimal marine layer.'
            }
          ]
        }
      },
      {
        city: 'Richmond',
        citySlug: 'richmond',
        utility: 'PG&E',
        localData: { ...PGE, avgMonthlyBillEstimate: 200, peakSunHoursEstimate: 5.0 },
        cityProfile: {
          localNote: 'Richmond sits on the San Francisco Bay shoreline with a diverse industrial and residential landscape. Marine layer influence is common but solar production remains strong.',
          faq: [
            {
              q: 'Do I need a permit for solar in Richmond?',
              a: 'Yes. Richmond has its own city building department with typical turnaround of 2-4 weeks. Your contractor handles the permit application.'
            },
            {
              q: 'Is off-grid solar worth it in Richmond with PG&E rates?',
              a: 'Yes. Richmond residents pay PG&E rates around $0.44/kWh. Off-grid solar with battery storage provides savings and backup power during outages.'
            },
            {
              q: 'How much sun does Richmond get for solar?',
              a: 'Richmond averages around 5.0 peak sun hours per day in Zone 3. Marine layer can affect morning production, but the climate supports strong solar generation year-round.'
            }
          ]
        }
      },
      {
        city: 'Antioch',
        citySlug: 'antioch',
        utility: 'PG&E',
        localData: { ...PGE, avgMonthlyBillEstimate: 235, peakSunHoursEstimate: 5.4 },
        cityProfile: {
          localNote: 'Antioch is an eastern delta city with hot, dry summers and no marine layer interference. The area experiences extreme summer heat, making solar especially valuable.',
          faq: [
            {
              q: 'Do I need a permit for solar in Antioch?',
              a: 'Yes. Antioch has its own city building department with typical turnaround of 2-4 weeks. Your installer will manage the permit application process.'
            },
            {
              q: 'Is off-grid solar worth it in Antioch with PG&E rates?',
              a: 'Absolutely. Antioch residents pay PG&E rates around $0.44/kWh with very high summer cooling demand due to extreme heat. Off-grid solar with battery storage delivers strong savings and critical backup power during heat waves.'
            },
            {
              q: 'How much sun does Antioch get for solar?',
              a: 'Antioch averages around 5.4 peak sun hours per day in Zone 4/12. The eastern delta location provides excellent solar production with hot, clear summers and no marine layer.'
            }
          ]
        }
      },
      {
        city: 'Walnut Creek',
        citySlug: 'walnut-creek',
        utility: 'PG&E',
        localData: { ...PGE, avgMonthlyBillEstimate: 255, peakSunHoursEstimate: 5.2 },
        cityProfile: {
          localNote: 'Walnut Creek is an affluent East Bay city with large homes and high energy consumption. The inland valley location provides excellent solar conditions.',
          faq: [
            {
              q: 'Do I need a permit for solar in Walnut Creek?',
              a: 'Yes. Walnut Creek has its own city building department with typical turnaround of 2-4 weeks. Your contractor handles the permit application.'
            },
            {
              q: 'Is off-grid solar worth it in Walnut Creek with PG&E rates?',
              a: 'Absolutely. Walnut Creek residents pay PG&E rates around $0.44/kWh on higher-than-average bills. Off-grid solar with battery storage delivers strong savings and backup power during summer heat waves.'
            },
            {
              q: 'How much sun does Walnut Creek get for solar?',
              a: 'Walnut Creek averages around 5.2 peak sun hours per day in Zone 4. The inland valley location provides excellent solar production with hot summers and minimal marine layer.'
            }
          ]
        }
      },
      {
        city: 'San Ramon',
        citySlug: 'san-ramon',
        utility: 'PG&E',
        localData: { ...PGE, avgMonthlyBillEstimate: 260, peakSunHoursEstimate: 5.3 },
        cityProfile: {
          localNote: 'San Ramon is an affluent suburban city in the San Ramon Valley with large modern homes. The area experiences hot summers with high cooling demand.',
          faq: [
            {
              q: 'Do I need a permit for solar in San Ramon?',
              a: 'Yes. San Ramon has its own city building department with typical turnaround of 2-4 weeks. Your installer will manage the permit application process.'
            },
            {
              q: 'Is off-grid solar worth it in San Ramon with PG&E rates?',
              a: 'Absolutely. San Ramon residents pay PG&E rates around $0.44/kWh on high bills due to large homes and AC use. Off-grid solar with battery storage delivers strong savings and backup power.'
            },
            {
              q: 'How much sun does San Ramon get for solar?',
              a: 'San Ramon averages approximately 5.3 peak sun hours per day in Zone 4. The inland valley location provides excellent solar production with hot summers.'
            }
          ]
        }
      },
      {
        city: 'Brentwood',
        citySlug: 'brentwood',
        utility: 'PG&E',
        localData: { ...PGE, avgMonthlyBillEstimate: 240, peakSunHoursEstimate: 5.5 },
        cityProfile: {
          localNote: 'Brentwood is a growing eastern delta city with new subdivisions and hot, dry summers. The area experiences extreme summer heat ideal for solar production.',
          faq: [
            {
              q: 'Do I need a permit for solar in Brentwood?',
              a: 'Yes. Brentwood has its own city building department with typical turnaround of 2-4 weeks. Your contractor handles the permit application.'
            },
            {
              q: 'Is off-grid solar worth it in Brentwood with PG&E rates?',
              a: 'Absolutely. Brentwood residents pay PG&E rates around $0.44/kWh with very high summer cooling costs. Off-grid solar with battery storage delivers strong savings and backup power during extreme heat events.'
            },
            {
              q: 'How much sun does Brentwood get for solar?',
              a: 'Brentwood averages around 5.5 peak sun hours per day in Zone 12. The eastern delta location provides excellent solar production with hot, clear summers and no marine layer interference.'
            }
          ]
        }
      },
      {
        city: 'Pittsburg',
        citySlug: 'pittsburg',
        utility: 'PG&E',
        localData: { ...PGE, avgMonthlyBillEstimate: 225, peakSunHoursEstimate: 5.3 },
        cityProfile: {
          localNote: 'Pittsburg is a delta city east of the Carquinez Bridge with hot summers. The area experiences high cooling demand with excellent solar production conditions.',
          faq: [
            {
              q: 'Do I need a permit for solar in Pittsburg?',
              a: 'Yes. Pittsburg has its own city building department with typical turnaround of 2-4 weeks. Your installer will manage the permit application process.'
            },
            {
              q: 'Is off-grid solar worth it in Pittsburg with PG&E rates?',
              a: 'Yes. Pittsburg residents pay PG&E rates around $0.44/kWh with high summer cooling demand. Off-grid solar with battery storage delivers strong savings and backup power during heat waves.'
            },
            {
              q: 'How much sun does Pittsburg get for solar?',
              a: 'Pittsburg averages around 5.3 peak sun hours per day in Zone 4/12. The delta location provides excellent solar production with hot summers and minimal marine layer.'
            }
          ]
        }
      },
      {
        city: 'Danville',
        citySlug: 'danville',
        utility: 'PG&E',
        localData: { ...PGE, avgMonthlyBillEstimate: 270, peakSunHoursEstimate: 5.3 },
        cityProfile: {
          localNote: 'Danville is an affluent town in the San Ramon Valley with large estates and high energy consumption. The area experiences hot summers with excellent solar conditions.',
          faq: [
            {
              q: 'Do I need a permit for solar in Danville?',
              a: 'Yes. Danville has its own town building department with typical turnaround of 2-4 weeks. Your contractor handles the permit application.'
            },
            {
              q: 'Is off-grid solar worth it in Danville with PG&E rates?',
              a: 'Absolutely. Danville residents pay PG&E rates around $0.44/kWh on high bills from large homes and pools. Off-grid solar with battery storage delivers strong savings and backup power during summer heat and PSPS events.'
            },
            {
              q: 'How much sun does Danville get for solar?',
              a: 'Danville averages approximately 5.3 peak sun hours per day in Zone 4. The inland valley location provides excellent solar production with hot summers and minimal marine layer.'
            }
          ]
        }
      },
    ],
  },
  {
    county: 'Santa Clara County',
    regionSlug: 'santa-clara-county',
    state: 'california',
    countyData: {
      utilityRate: {
        utility: 'PG&E / Silicon Valley Power (Santa Clara)',
        avgResidentialRatePerKwh: 0.44,
        note: 'Most of Santa Clara County is served by PG&E at ~$0.44/kWh. The City of Santa Clara is served by Silicon Valley Power (municipal utility) at ~$0.16-0.18/kWh. Solar economics for PG&E areas are very strong; for SVP areas, solar provides backup power value and protection from future rate increases, though payback is longer.'
      },
      permitOffice: {
        name: 'Santa Clara County Planning Department / Individual City Building Departments',
        jurisdiction: 'Santa Clara County / individual cities',
        typicalTurnaround: '2-4 weeks; some cities adopting SolarAPP+',
        note: 'San Jose, Sunnyvale, Mountain View, Palo Alto, and other cities have their own building departments. Several jurisdictions are adopting or have adopted SolarAPP+ for expedited residential solar approval.'
      },
      climateZone: {
        zone: 'Zone 4',
        description: 'Warm inland climate with hot summers and mild winters. High cooling demand from June through September. Excellent solar production year-round with minimal seasonal variation.'
      },
      countyContext: 'Santa Clara County encompasses Silicon Valley, from the San Francisco Bay shoreline through the Santa Clara Valley floor to the foothills of the Santa Cruz Mountains. The valley floor provides excellent solar conditions with consistent sun exposure. High PG&E rates in most of the county make solar economics very strong. The City of Santa Clara has municipal power with lower rates, so solar value there comes more from backup power and energy independence.'
    },
    cities: [
      {
        city: 'San Jose',
        citySlug: 'san-jose',
        utility: 'PG&E',
        localData: { ...PGE, avgMonthlyBillEstimate: 225, peakSunHoursEstimate: 5.3 },
        cityProfile: {
          localNote: 'San Jose is the largest city in the Bay Area, spanning the southern Santa Clara Valley. The area experiences hot summers with excellent solar production conditions.',
          faq: [
            {
              q: 'Do I need a permit for solar in San Jose?',
              a: 'Yes. San Jose has its own city building department with typical turnaround of 2-4 weeks. Your installer will manage the permit application process.'
            },
            {
              q: 'Is off-grid solar worth it in San Jose with PG&E rates?',
              a: 'Yes. San Jose residents pay PG&E rates around $0.44/kWh with high summer cooling demand. Off-grid solar with battery storage delivers strong savings and backup power during heat waves and outages.'
            },
            {
              q: 'How much sun does San Jose get for solar?',
              a: 'San Jose averages approximately 5.3 peak sun hours per day in Zone 4. The valley floor location provides excellent solar production year-round with minimal marine layer interference.'
            }
          ]
        }
      },
      {
        city: 'Sunnyvale',
        citySlug: 'sunnyvale',
        utility: 'PG&E',
        localData: { ...PGE, avgMonthlyBillEstimate: 235, peakSunHoursEstimate: 5.2 },
        cityProfile: {
          localNote: 'Sunnyvale is a Silicon Valley city with a mix of residential and tech office space. The area experiences warm summers with strong solar production potential.',
          faq: [
            {
              q: 'Do I need a permit for solar in Sunnyvale?',
              a: 'Yes. Sunnyvale has its own city building department with typical turnaround of 2-4 weeks. Your contractor handles the permit application.'
            },
            {
              q: 'Is off-grid solar worth it in Sunnyvale with PG&E rates?',
              a: 'Yes. Sunnyvale residents pay PG&E rates around $0.44/kWh. Off-grid solar with battery storage provides strong savings and backup power during outages.'
            },
            {
              q: 'How much sun does Sunnyvale get for solar?',
              a: 'Sunnyvale averages around 5.2 peak sun hours per day in Zone 4. The valley location provides excellent solar production, though some marine layer influence can occur.'
            }
          ]
        }
      },
      {
        city: 'Santa Clara',
        citySlug: 'santa-clara',
        utility: 'Silicon Valley Power',
        localData: {
          avgMonthlyBillEstimate: 150,
          avgSystemSizeKwEstimate: 6.0,
          avgSavingsYear1Estimate: 1200,
          avgPaybackYearsEstimate: 9,
          peakSunHoursEstimate: 5.2,
        },
        cityProfile: {
          localNote: 'Santa Clara is served by Silicon Valley Power, a municipal utility with lower rates than PG&E. Solar value here comes from backup power, energy independence, and protection from future rate increases.',
          faq: [
            {
              q: 'Do I need a permit for solar in Santa Clara?',
              a: 'Yes. Santa Clara has its own city building department with typical turnaround of 2-4 weeks. Your installer will manage the permit application process.'
            },
            {
              q: 'Is off-grid solar worth it in Santa Clara with Silicon Valley Power rates?',
              a: 'Silicon Valley Power rates average $0.16-0.18/kWh, much lower than PG&E. Solar payback is longer, but off-grid systems provide backup power during outages and lock in energy costs against future rate increases.'
            },
            {
              q: 'How much sun does Santa Clara get for solar?',
              a: 'Santa Clara averages around 5.2 peak sun hours per day in Zone 4. The valley location provides strong solar production year-round.'
            }
          ]
        }
      },
      {
        city: 'Mountain View',
        citySlug: 'mountain-view',
        utility: 'PG&E',
        localData: { ...PGE, avgMonthlyBillEstimate: 230, peakSunHoursEstimate: 5.2 },
        cityProfile: {
          localNote: 'Mountain View is a Silicon Valley tech hub near the bay shoreline. The area experiences moderate marine influence but strong solar production.',
          faq: [
            {
              q: 'Do I need a permit for solar in Mountain View?',
              a: 'Yes. Mountain View has its own city building department with typical turnaround of 2-4 weeks. Your contractor handles the permit application.'
            },
            {
              q: 'Is off-grid solar worth it in Mountain View with PG&E rates?',
              a: 'Yes. Mountain View residents pay PG&E rates around $0.44/kWh. Off-grid solar with battery storage delivers strong savings and backup power during outages.'
            },
            {
              q: 'How much sun does Mountain View get for solar?',
              a: 'Mountain View averages around 5.2 peak sun hours per day in Zone 4. Some marine layer influence occurs, but solar production remains strong year-round.'
            }
          ]
        }
      },
      {
        city: 'Milpitas',
        citySlug: 'milpitas',
        utility: 'PG&E',
        localData: { ...PGE, avgMonthlyBillEstimate: 230, peakSunHoursEstimate: 5.3 },
        cityProfile: {
          localNote: 'Milpitas sits at the southern end of San Francisco Bay with hillside areas to the east. The area experiences warm summers with excellent solar conditions.',
          faq: [
            {
              q: 'Do I need a permit for solar in Milpitas?',
              a: 'Yes. Milpitas has its own city building department with typical turnaround of 2-4 weeks. Your installer will manage the permit application process.'
            },
            {
              q: 'Is off-grid solar worth it in Milpitas with PG&E rates?',
              a: 'Yes. Milpitas residents pay PG&E rates around $0.44/kWh. Off-grid solar with battery storage provides strong savings and backup power during summer heat waves.'
            },
            {
              q: 'How much sun does Milpitas get for solar?',
              a: 'Milpitas averages approximately 5.3 peak sun hours per day in Zone 4. The valley location provides excellent solar production with minimal marine layer interference.'
            }
          ]
        }
      },
      {
        city: 'Palo Alto',
        citySlug: 'palo-alto',
        utility: 'PG&E',
        localData: { ...PGE, avgMonthlyBillEstimate: 240, peakSunHoursEstimate: 5.1 },
        cityProfile: {
          localNote: 'Palo Alto is an affluent city on the San Francisco Peninsula near Stanford University. The area experiences moderate marine influence with strong environmental values.',
          faq: [
            {
              q: 'Do I need a permit for solar in Palo Alto?',
              a: 'Yes. Palo Alto has its own city utilities department with typical turnaround of 2-4 weeks. Your contractor handles the permit application.'
            },
            {
              q: 'Is off-grid solar worth it in Palo Alto with PG&E rates?',
              a: 'Yes. Palo Alto residents pay PG&E rates around $0.44/kWh. Off-grid solar with battery storage delivers savings and aligns with the city\'s progressive environmental values, plus backup power during outages.'
            },
            {
              q: 'How much sun does Palo Alto get for solar?',
              a: 'Palo Alto averages around 5.1 peak sun hours per day in Zone 3/4. Peninsula location sees marine layer influence, but solar production remains strong year-round.'
            }
          ]
        }
      },
      {
        city: 'Gilroy',
        citySlug: 'gilroy',
        utility: 'PG&E',
        localData: { ...PGE, avgMonthlyBillEstimate: 230, peakSunHoursEstimate: 5.5 },
        cityProfile: {
          localNote: 'Gilroy is a southern valley city known for agriculture and hot summers. The area experiences extreme summer heat with excellent solar production conditions.',
          faq: [
            {
              q: 'Do I need a permit for solar in Gilroy?',
              a: 'Yes. Gilroy has its own city building department with typical turnaround of 2-4 weeks. Your installer will manage the permit application process.'
            },
            {
              q: 'Is off-grid solar worth it in Gilroy with PG&E rates?',
              a: 'Absolutely. Gilroy residents pay PG&E rates around $0.44/kWh with very high summer cooling demand due to extreme heat. Off-grid solar with battery storage delivers strong savings and backup power during heat waves.'
            },
            {
              q: 'How much sun does Gilroy get for solar?',
              a: 'Gilroy averages around 5.5 peak sun hours per day in Zone 4. The southern valley location provides excellent solar production with hot, clear summers and no marine layer.'
            }
          ]
        }
      },
      {
        city: 'Morgan Hill',
        citySlug: 'morgan-hill',
        utility: 'PG&E',
        localData: { ...PGE, avgMonthlyBillEstimate: 235, peakSunHoursEstimate: 5.4 },
        cityProfile: {
          localNote: 'Morgan Hill is a southern valley city between San Jose and Gilroy. The area experiences hot summers with excellent solar production potential.',
          faq: [
            {
              q: 'Do I need a permit for solar in Morgan Hill?',
              a: 'Yes. Morgan Hill has its own city building department with typical turnaround of 2-4 weeks. Your contractor handles the permit application.'
            },
            {
              q: 'Is off-grid solar worth it in Morgan Hill with PG&E rates?',
              a: 'Yes. Morgan Hill residents pay PG&E rates around $0.44/kWh with high summer cooling demand. Off-grid solar with battery storage provides strong savings and backup power during heat waves.'
            },
            {
              q: 'How much sun does Morgan Hill get for solar?',
              a: 'Morgan Hill averages around 5.4 peak sun hours per day in Zone 4. The southern valley location provides excellent solar production with hot summers and minimal marine layer.'
            }
          ]
        }
      },
    ],
  },
  {
    county: 'Sonoma County',
    regionSlug: 'sonoma-county',
    state: 'california',
    countyData: {
      utilityRate: {
        utility: 'PG&E',
        avgResidentialRatePerKwh: 0.44,
        note: 'PG&E residential blended rate (E-TOU-C tier, 2025-2026 range). High rates combined with frequent PSPS shutoffs during fire season make solar with battery backup particularly valuable in Sonoma County.'
      },
      permitOffice: {
        name: 'Sonoma County Permit and Resource Management Department / Individual City Building Departments',
        jurisdiction: 'Sonoma County / individual cities',
        typicalTurnaround: '2-4 weeks',
        note: 'Santa Rosa, Petaluma, Rohnert Park, and other cities have their own building departments. Unincorporated areas fall under Sonoma County PRMD. Fire-zone areas may require additional review.'
      },
      climateZone: {
        zone: 'Zone 1 (coastal) / Zone 2 (inland valleys)',
        description: 'Zone 1: cool marine climate along the coast. Zone 2: mild inland climate for valleys (Santa Rosa, Petaluma, Sonoma) with warm summers and cool winters. Strong solar production in inland valleys; coastal areas see more marine layer influence.'
      },
      countyContext: 'Sonoma County spans from the Pacific coast through inland valleys (Santa Rosa, Sonoma Valley) to the Mayacamas Mountains. Inland valleys experience warm summers with excellent solar potential. Coastal areas see marine layer influence. High PG&E rates and frequent PSPS shutoffs during fire season make off-grid solar with battery storage especially valuable throughout the county.'
    },
    cities: [
      {
        city: 'Santa Rosa',
        citySlug: 'santa-rosa',
        utility: 'PG&E',
        localData: { ...PGE, avgMonthlyBillEstimate: 220, peakSunHoursEstimate: 5.2 },
        cityProfile: {
          localNote: 'Santa Rosa is the largest city in the North Bay, located in an inland valley. The area experiences warm summers with excellent solar conditions and frequent PSPS shutoffs during fire season.',
          faq: [
            {
              q: 'Do I need a permit for solar in Santa Rosa?',
              a: 'Yes. Santa Rosa has its own city building department with typical turnaround of 2-4 weeks. Your installer will manage the permit application process.'
            },
            {
              q: 'Is off-grid solar worth it in Santa Rosa with PG&E rates?',
              a: 'Absolutely. Santa Rosa residents pay PG&E rates around $0.44/kWh and face frequent PSPS shutoffs during fire season. Off-grid solar with battery storage provides both savings and critical backup power.'
            },
            {
              q: 'How much sun does Santa Rosa get for solar?',
              a: 'Santa Rosa averages around 5.2 peak sun hours per day in Zone 2. The inland valley location provides excellent solar production with warm summers and minimal marine layer.'
            }
          ]
        }
      },
      {
        city: 'Petaluma',
        citySlug: 'petaluma',
        utility: 'PG&E',
        localData: { ...PGE, avgMonthlyBillEstimate: 215, peakSunHoursEstimate: 5.0 },
        cityProfile: {
          localNote: 'Petaluma sits in a valley between Santa Rosa and the bay with a mix of marine and inland influences. The area experiences moderate temperatures with strong solar production.',
          faq: [
            {
              q: 'Do I need a permit for solar in Petaluma?',
              a: 'Yes. Petaluma has its own city building department with typical turnaround of 2-4 weeks. Your contractor handles the permit application.'
            },
            {
              q: 'Is off-grid solar worth it in Petaluma with PG&E rates?',
              a: 'Yes. Petaluma residents pay PG&E rates around $0.44/kWh and face PSPS shutoffs during fire season. Off-grid solar with battery storage delivers savings and backup power during outages.'
            },
            {
              q: 'How much sun does Petaluma get for solar?',
              a: 'Petaluma averages around 5.0 peak sun hours per day in Zone 2. Some marine layer influence occurs, but solar production remains strong year-round.'
            }
          ]
        }
      },
      {
        city: 'Rohnert Park',
        citySlug: 'rohnert-park',
        utility: 'PG&E',
        localData: { ...PGE, avgMonthlyBillEstimate: 210, peakSunHoursEstimate: 5.1 },
        cityProfile: {
          localNote: 'Rohnert Park is a planned community between Petaluma and Santa Rosa. The area experiences moderate marine influence with strong solar production potential.',
          faq: [
            {
              q: 'Do I need a permit for solar in Rohnert Park?',
              a: 'Yes. Rohnert Park has its own city building department with typical turnaround of 2-4 weeks. Your installer will manage the permit application process.'
            },
            {
              q: 'Is off-grid solar worth it in Rohnert Park with PG&E rates?',
              a: 'Yes. Rohnert Park residents pay PG&E rates around $0.44/kWh and face PSPS shutoffs. Off-grid solar with battery storage provides savings and backup power during outages.'
            },
            {
              q: 'How much sun does Rohnert Park get for solar?',
              a: 'Rohnert Park averages around 5.1 peak sun hours per day in Zone 2. The location experiences some marine layer but supports strong solar production year-round.'
            }
          ]
        }
      },
      {
        city: 'Windsor',
        citySlug: 'windsor',
        utility: 'PG&E',
        localData: { ...PGE, avgMonthlyBillEstimate: 215, peakSunHoursEstimate: 5.2 },
        cityProfile: {
          localNote: 'Windsor is a growing town north of Santa Rosa with newer subdivisions. The area experiences warm summers with excellent solar conditions.',
          faq: [
            {
              q: 'Do I need a permit for solar in Windsor?',
              a: 'Yes. Windsor has its own town building department with typical turnaround of 2-4 weeks. Your contractor handles the permit application.'
            },
            {
              q: 'Is off-grid solar worth it in Windsor with PG&E rates?',
              a: 'Yes. Windsor residents pay PG&E rates around $0.44/kWh and face PSPS shutoffs during fire season. Off-grid solar with battery storage delivers savings and backup power.'
            },
            {
              q: 'How much sun does Windsor get for solar?',
              a: 'Windsor averages around 5.2 peak sun hours per day in Zone 2. The inland valley location provides excellent solar production with warm summers.'
            }
          ]
        }
      },
      {
        city: 'Healdsburg',
        citySlug: 'healdsburg',
        utility: 'PG&E',
        localData: { ...PGE, avgMonthlyBillEstimate: 220, peakSunHoursEstimate: 5.3 },
        cityProfile: {
          localNote: 'Healdsburg is a wine country town in northern Sonoma County with hot summers. The area experiences excellent solar conditions and PSPS shutoffs during fire season.',
          faq: [
            {
              q: 'Do I need a permit for solar in Healdsburg?',
              a: 'Yes. Healdsburg has its own city building department with typical turnaround of 2-4 weeks. Your installer will manage the permit application process.'
            },
            {
              q: 'Is off-grid solar worth it in Healdsburg with PG&E rates?',
              a: 'Absolutely. Healdsburg residents pay PG&E rates around $0.44/kWh and face frequent PSPS shutoffs. Off-grid solar with battery storage provides savings and critical backup power during fire season.'
            },
            {
              q: 'How much sun does Healdsburg get for solar?',
              a: 'Healdsburg averages around 5.3 peak sun hours per day in Zone 2. The northern valley location provides excellent solar production with hot, clear summers.'
            }
          ]
        }
      },
      {
        city: 'Sonoma',
        citySlug: 'sonoma',
        utility: 'PG&E',
        localData: { ...PGE, avgMonthlyBillEstimate: 225, peakSunHoursEstimate: 5.2 },
        cityProfile: {
          localNote: 'Sonoma is a historic wine country town in Sonoma Valley east of Petaluma. The area experiences warm summers with excellent solar production.',
          faq: [
            {
              q: 'Do I need a permit for solar in Sonoma?',
              a: 'Yes. Sonoma has its own city building department with typical turnaround of 2-4 weeks. Your contractor handles the permit application.'
            },
            {
              q: 'Is off-grid solar worth it in Sonoma with PG&E rates?',
              a: 'Yes. Sonoma residents pay PG&E rates around $0.44/kWh and face PSPS shutoffs during fire season. Off-grid solar with battery storage delivers savings and backup power.'
            },
            {
              q: 'How much sun does Sonoma get for solar?',
              a: 'Sonoma averages around 5.2 peak sun hours per day in Zone 2. The valley location provides excellent solar production with warm summers and wine country sunshine.'
            }
          ]
        }
      },
    ],
  },
  {
    county: 'Marin County',
    regionSlug: 'marin-county',
    state: 'california',
    countyData: {
      utilityRate: {
        utility: 'PG&E',
        avgResidentialRatePerKwh: 0.44,
        note: 'PG&E residential blended rate (E-TOU-C tier, 2025-2026 range). High rates make solar economics strong despite marine layer influence in many areas.'
      },
      permitOffice: {
        name: 'Marin County Community Development Agency / Individual City Building Departments',
        jurisdiction: 'Marin County / individual cities',
        typicalTurnaround: '2-4 weeks',
        note: 'San Rafael, Novato, and other cities have their own building departments. Unincorporated areas fall under Marin County CDA. Coastal and hillside areas may require additional review for fire zones or terrain.'
      },
      climateZone: {
        zone: 'Zone 3',
        description: 'Mild marine climate throughout the county. Coastal and bayside areas experience frequent marine layer, while inland valleys (Novato, San Rafael) see more sun. Moderate temperatures year-round with low cooling demand but reliable solar production.'
      },
      countyContext: 'Marin County spans from the San Francisco Bay shoreline (San Rafael, Mill Valley) to the Pacific coast, with inland valleys (Novato) in between. Marine layer influence is common, especially near the coast, but solar production remains viable. High PG&E rates throughout the county make solar economics strong despite lower cooling demand. Many affluent neighborhoods value energy independence and environmental benefits.'
    },
    cities: [
      {
        city: 'San Rafael',
        citySlug: 'san-rafael',
        utility: 'PG&E',
        localData: { ...PGE, avgMonthlyBillEstimate: 215, peakSunHoursEstimate: 5.0 },
        cityProfile: {
          localNote: 'San Rafael is the county seat, located in an inland valley with moderate marine influence. The area experiences more sun than coastal Marin locations.',
          faq: [
            {
              q: 'Do I need a permit for solar in San Rafael?',
              a: 'Yes. San Rafael has its own city building department with typical turnaround of 2-4 weeks. Your installer will manage the permit application process.'
            },
            {
              q: 'Is off-grid solar worth it in San Rafael with PG&E rates?',
              a: 'Yes. San Rafael residents pay PG&E rates around $0.44/kWh. Off-grid solar with battery storage provides savings and backup power, even with moderate cooling demand from the inland valley location.'
            },
            {
              q: 'How much sun does San Rafael get for solar?',
              a: 'San Rafael averages around 5.0 peak sun hours per day in Zone 3. The inland valley location sees less marine layer than coastal areas, providing reliable solar production year-round.'
            }
          ]
        }
      },
      {
        city: 'Novato',
        citySlug: 'novato',
        utility: 'PG&E',
        localData: { ...PGE, avgMonthlyBillEstimate: 220, peakSunHoursEstimate: 5.1 },
        cityProfile: {
          localNote: 'Novato is the northernmost city in Marin, located in an inland valley. The area experiences warmer summers and more sun than bayside Marin locations.',
          faq: [
            {
              q: 'Do I need a permit for solar in Novato?',
              a: 'Yes. Novato has its own city building department with typical turnaround of 2-4 weeks. Your contractor handles the permit application.'
            },
            {
              q: 'Is off-grid solar worth it in Novato with PG&E rates?',
              a: 'Yes. Novato residents pay PG&E rates around $0.44/kWh. Off-grid solar with battery storage delivers savings and backup power, with the inland valley location providing better solar conditions than coastal Marin.'
            },
            {
              q: 'How much sun does Novato get for solar?',
              a: 'Novato averages around 5.1 peak sun hours per day in Zone 3. The northern inland valley location experiences less marine layer than bayside areas, supporting strong solar production.'
            }
          ]
        }
      },
      {
        city: 'Mill Valley',
        citySlug: 'mill-valley',
        utility: 'PG&E',
        localData: { ...PGE, avgMonthlyBillEstimate: 210, peakSunHoursEstimate: 4.8 },
        cityProfile: {
          localNote: 'Mill Valley sits at the base of Mount Tamalpais with hillside neighborhoods and frequent marine layer. Solar production is viable despite coastal influence.',
          faq: [
            {
              q: 'Do I need a permit for solar in Mill Valley?',
              a: 'Yes. Mill Valley has its own city building department with typical turnaround of 2-4 weeks. Your installer will manage the permit application process.'
            },
            {
              q: 'Is off-grid solar worth it in Mill Valley with PG&E rates?',
              a: 'Yes. Mill Valley residents pay PG&E rates around $0.44/kWh. Off-grid solar with battery storage provides savings and energy independence despite marine layer influence, plus backup power during outages.'
            },
            {
              q: 'How much sun does Mill Valley get for solar?',
              a: 'Mill Valley averages around 4.8 peak sun hours per day in Zone 3. Frequent marine layer and hillside shading affect production, but solar remains viable with proper site assessment.'
            }
          ]
        }
      },
      {
        city: 'San Anselmo',
        citySlug: 'san-anselmo',
        utility: 'PG&E',
        localData: { ...PGE, avgMonthlyBillEstimate: 210, peakSunHoursEstimate: 4.9 },
        cityProfile: {
          localNote: 'San Anselmo is a small town in the Ross Valley with tree-lined streets. The area experiences moderate marine influence with reliable solar production.',
          faq: [
            {
              q: 'Do I need a permit for solar in San Anselmo?',
              a: 'Yes. San Anselmo has its own town building department with typical turnaround of 2-4 weeks. Your contractor handles the permit application.'
            },
            {
              q: 'Is off-grid solar worth it in San Anselmo with PG&E rates?',
              a: 'Yes. San Anselmo residents pay PG&E rates around $0.44/kWh. Off-grid solar with battery storage delivers savings and backup power, though tree shading should be assessed carefully.'
            },
            {
              q: 'How much sun does San Anselmo get for solar?',
              a: 'San Anselmo averages around 4.9 peak sun hours per day in Zone 3. The Ross Valley location experiences marine layer and mature trees, so site-specific assessment is important.'
            }
          ]
        }
      },
    ],
  },
  {
    county: 'San Mateo County',
    regionSlug: 'san-mateo-county',
    state: 'california',
    countyData: {
      utilityRate: {
        utility: 'PG&E',
        avgResidentialRatePerKwh: 0.44,
        note: 'PG&E residential blended rate (E-TOU-C tier, 2025-2026 range). High rates make solar economics strong despite marine layer influence common on the Peninsula.'
      },
      permitOffice: {
        name: 'San Mateo County Planning and Building Department / Individual City Building Departments',
        jurisdiction: 'San Mateo County / individual cities',
        typicalTurnaround: '2-4 weeks; some cities adopting SolarAPP+',
        note: 'Redwood City, San Mateo, Daly City, and other cities have their own building departments. Unincorporated areas fall under San Mateo County Planning and Building. Several jurisdictions are adopting SolarAPP+ for expedited approval.'
      },
      climateZone: {
        zone: 'Zone 3',
        description: 'Mild marine climate throughout the Peninsula. Coastal areas experience frequent marine layer, while inland areas (Redwood City, Menlo Park) see more sun. Moderate temperatures year-round with low cooling demand but reliable solar production.'
      },
      countyContext: 'San Mateo County encompasses the San Francisco Peninsula from the bay shoreline to the Pacific coast. Marine layer influence is common, especially along the coast and bay. Inland areas along Highway 101 (Redwood City, Menlo Park, San Mateo) experience less marine layer and better solar production. High PG&E rates throughout the county make solar economics strong despite lower cooling demand.'
    },
    cities: [
      {
        city: 'Redwood City',
        citySlug: 'redwood-city',
        utility: 'PG&E',
        localData: { ...PGE, avgMonthlyBillEstimate: 225, peakSunHoursEstimate: 5.1 },
        cityProfile: {
          localNote: 'Redwood City is located on the bayside Peninsula along Highway 101. The area experiences less marine layer than coastal locations with strong solar production.',
          faq: [
            {
              q: 'Do I need a permit for solar in Redwood City?',
              a: 'Yes. Redwood City has its own city building department with typical turnaround of 2-4 weeks. Your installer will manage the permit application process.'
            },
            {
              q: 'Is off-grid solar worth it in Redwood City with PG&E rates?',
              a: 'Yes. Redwood City residents pay PG&E rates around $0.44/kWh. Off-grid solar with battery storage delivers savings and backup power, with better solar conditions than coastal Peninsula areas.'
            },
            {
              q: 'How much sun does Redwood City get for solar?',
              a: 'Redwood City averages around 5.1 peak sun hours per day in Zone 3. The bayside inland location experiences less marine layer than coastal areas, providing reliable solar production year-round.'
            }
          ]
        }
      },
      {
        city: 'San Mateo',
        citySlug: 'san-mateo',
        utility: 'PG&E',
        localData: { ...PGE, avgMonthlyBillEstimate: 220, peakSunHoursEstimate: 5.0 },
        cityProfile: {
          localNote: 'San Mateo is a central Peninsula city along Highway 101. The area experiences moderate marine layer influence with reliable solar production.',
          faq: [
            {
              q: 'Do I need a permit for solar in San Mateo?',
              a: 'Yes. San Mateo has its own city building department with typical turnaround of 2-4 weeks. Your contractor handles the permit application.'
            },
            {
              q: 'Is off-grid solar worth it in San Mateo with PG&E rates?',
              a: 'Yes. San Mateo residents pay PG&E rates around $0.44/kWh. Off-grid solar with battery storage provides savings and backup power despite marine layer influence.'
            },
            {
              q: 'How much sun does San Mateo get for solar?',
              a: 'San Mateo averages around 5.0 peak sun hours per day in Zone 3. Marine layer is common, but the bayside location supports reliable solar production year-round.'
            }
          ]
        }
      },
      {
        city: 'Daly City',
        citySlug: 'daly-city',
        utility: 'PG&E',
        localData: { ...PGE, avgMonthlyBillEstimate: 210, peakSunHoursEstimate: 4.7 },
        cityProfile: {
          localNote: 'Daly City sits just south of San Francisco with frequent marine layer influence. Solar production is viable despite coastal fog.',
          faq: [
            {
              q: 'Do I need a permit for solar in Daly City?',
              a: 'Yes. Daly City has its own city building department with typical turnaround of 2-4 weeks. Your installer will manage the permit application process.'
            },
            {
              q: 'Is off-grid solar worth it in Daly City with PG&E rates?',
              a: 'Yes. Daly City residents pay PG&E rates around $0.44/kWh. Off-grid solar with battery storage provides savings and energy independence despite frequent marine layer, plus backup power during outages.'
            },
            {
              q: 'How much sun does Daly City get for solar?',
              a: 'Daly City averages around 4.7 peak sun hours per day in Zone 3. Frequent marine layer affects production, but solar remains viable with proper system design and site assessment.'
            }
          ]
        }
      },
      {
        city: 'South San Francisco',
        citySlug: 'south-san-francisco',
        utility: 'PG&E',
        localData: { ...PGE, avgMonthlyBillEstimate: 215, peakSunHoursEstimate: 4.8 },
        cityProfile: {
          localNote: 'South San Francisco sits on the bayside Peninsula with industrial and residential areas. The area experiences marine layer influence but reliable solar production.',
          faq: [
            {
              q: 'Do I need a permit for solar in South San Francisco?',
              a: 'Yes. South San Francisco has its own city building department with typical turnaround of 2-4 weeks. Your contractor handles the permit application.'
            },
            {
              q: 'Is off-grid solar worth it in South San Francisco with PG&E rates?',
              a: 'Yes. South San Francisco residents pay PG&E rates around $0.44/kWh. Off-grid solar with battery storage delivers savings and backup power despite marine layer influence.'
            },
            {
              q: 'How much sun does South San Francisco get for solar?',
              a: 'South San Francisco averages around 4.8 peak sun hours per day in Zone 3. Marine layer is common, but solar production remains reliable year-round.'
            }
          ]
        }
      },
      {
        city: 'Menlo Park',
        citySlug: 'menlo-park',
        utility: 'PG&E',
        localData: { ...PGE, avgMonthlyBillEstimate: 230, peakSunHoursEstimate: 5.1 },
        cityProfile: {
          localNote: 'Menlo Park is an affluent Peninsula city along Highway 101 near Stanford. The area experiences less marine layer than coastal locations with strong solar production.',
          faq: [
            {
              q: 'Do I need a permit for solar in Menlo Park?',
              a: 'Yes. Menlo Park has its own city building department with typical turnaround of 2-4 weeks. Your installer will manage the permit application process.'
            },
            {
              q: 'Is off-grid solar worth it in Menlo Park with PG&E rates?',
              a: 'Yes. Menlo Park residents pay PG&E rates around $0.44/kWh. Off-grid solar with battery storage delivers savings and energy independence, with better solar conditions than coastal Peninsula areas.'
            },
            {
              q: 'How much sun does Menlo Park get for solar?',
              a: 'Menlo Park averages around 5.1 peak sun hours per day in Zone 3. The inland bayside location experiences less marine layer, providing reliable solar production year-round.'
            }
          ]
        }
      },
    ],
  },
  {
    county: 'San Joaquin County',
    regionSlug: 'san-joaquin-county',
    state: 'california',
    countyData: {
      utilityRate: {
        utility: 'PG&E',
        avgResidentialRatePerKwh: 0.44,
        note: 'PG&E residential blended rate (E-TOU-C tier, 2025-2026 range). High rates combined with hot Central Valley summers and high cooling demand make solar economics very strong throughout San Joaquin County.'
      },
      permitOffice: {
        name: 'San Joaquin County Community Development Department / Individual City Building Departments',
        jurisdiction: 'San Joaquin County / individual cities',
        typicalTurnaround: '2-4 weeks',
        note: 'Stockton, Tracy, Manteca, Lodi, and other cities have their own building departments. Unincorporated areas fall under San Joaquin County Community Development. Some cities are adopting SolarAPP+ for expedited approval.'
      },
      climateZone: {
        zone: 'Zone 12',
        description: 'Hot-dry Central Valley climate with extreme summer heat and high cooling demand. Mild winters with minimal heating load. Excellent solar production year-round with very high summer output.'
      },
      countyContext: 'San Joaquin County sits in the heart of the Central Valley with flat agricultural terrain ideal for solar. Cities like Stockton, Tracy, Manteca, and Lodi experience extreme summer heat with very high cooling demand, making solar especially valuable for offsetting AC costs. High PG&E rates throughout the county drive strong solar economics. The area sees minimal marine layer or fog, providing consistent solar production.'
    },
    cities: [
      {
        city: 'Stockton',
        citySlug: 'stockton',
        utility: 'PG&E',
        localData: { ...PGE, avgMonthlyBillEstimate: 240, peakSunHoursEstimate: 5.6 },
        cityProfile: {
          localNote: 'Stockton is a major Central Valley city with hot, dry summers and flat terrain ideal for solar. The area experiences extreme summer heat with very high cooling demand.',
          faq: [
            {
              q: 'Do I need a permit for solar in Stockton?',
              a: 'Yes. Stockton has its own city building department with typical turnaround of 2-4 weeks. Your installer will manage the permit application process.'
            },
            {
              q: 'Is off-grid solar worth it in Stockton with PG&E rates?',
              a: 'Absolutely. Stockton residents pay PG&E rates around $0.44/kWh with very high summer cooling costs. Off-grid solar with battery storage delivers strong savings and backup power during extreme heat events.'
            },
            {
              q: 'How much sun does Stockton get for solar?',
              a: 'Stockton averages around 5.6 peak sun hours per day in Zone 12. The Central Valley location provides excellent solar production with hot, clear summers and no marine layer.'
            }
          ]
        }
      },
      {
        city: 'Tracy',
        citySlug: 'tracy',
        utility: 'PG&E',
        localData: { ...PGE, avgMonthlyBillEstimate: 245, peakSunHoursEstimate: 5.7 },
        cityProfile: {
          localNote: 'Tracy is a growing city in western San Joaquin County with new subdivisions and extreme summer heat. The area experiences very high cooling demand ideal for solar offset.',
          faq: [
            {
              q: 'Do I need a permit for solar in Tracy?',
              a: 'Yes. Tracy has its own city building department with typical turnaround of 2-4 weeks. Your contractor handles the permit application.'
            },
            {
              q: 'Is off-grid solar worth it in Tracy with PG&E rates?',
              a: 'Absolutely. Tracy residents pay PG&E rates around $0.44/kWh with extreme summer cooling costs. Off-grid solar with battery storage delivers strong savings and backup power during heat waves.'
            },
            {
              q: 'How much sun does Tracy get for solar?',
              a: 'Tracy averages around 5.7 peak sun hours per day in Zone 12. The Central Valley location provides excellent solar production with hot, clear summers and minimal haze.'
            }
          ]
        }
      },
      {
        city: 'Manteca',
        citySlug: 'manteca',
        utility: 'PG&E',
        localData: { ...PGE, avgMonthlyBillEstimate: 235, peakSunHoursEstimate: 5.6 },
        cityProfile: {
          localNote: 'Manteca is a Central Valley city south of Stockton with flat terrain and hot summers. The area experiences high cooling demand ideal for solar production.',
          faq: [
            {
              q: 'Do I need a permit for solar in Manteca?',
              a: 'Yes. Manteca has its own city building department with typical turnaround of 2-4 weeks. Your installer will manage the permit application process.'
            },
            {
              q: 'Is off-grid solar worth it in Manteca with PG&E rates?',
              a: 'Yes. Manteca residents pay PG&E rates around $0.44/kWh with high summer cooling demand. Off-grid solar with battery storage delivers strong savings and backup power during extreme heat.'
            },
            {
              q: 'How much sun does Manteca get for solar?',
              a: 'Manteca averages around 5.6 peak sun hours per day in Zone 12. The Central Valley location provides excellent solar production with hot summers and no marine layer.'
            }
          ]
        }
      },
      {
        city: 'Lodi',
        citySlug: 'lodi',
        utility: 'PG&E',
        localData: { ...PGE, avgMonthlyBillEstimate: 230, peakSunHoursEstimate: 5.6 },
        cityProfile: {
          localNote: 'Lodi is a wine country city in northern San Joaquin County with agricultural surroundings. The area experiences hot summers with excellent solar conditions.',
          faq: [
            {
              q: 'Do I need a permit for solar in Lodi?',
              a: 'Yes. Lodi has its own city building department with typical turnaround of 2-4 weeks. Your contractor handles the permit application.'
            },
            {
              q: 'Is off-grid solar worth it in Lodi with PG&E rates?',
              a: 'Yes. Lodi residents pay PG&E rates around $0.44/kWh with high summer cooling demand. Off-grid solar with battery storage provides strong savings and backup power during heat waves.'
            },
            {
              q: 'How much sun does Lodi get for solar?',
              a: 'Lodi averages around 5.6 peak sun hours per day in Zone 12. The Central Valley location provides excellent solar production with hot, clear summers.'
            }
          ]
        }
      },
      {
        city: 'Lathrop',
        citySlug: 'lathrop',
        utility: 'PG&E',
        localData: { ...PGE, avgMonthlyBillEstimate: 235, peakSunHoursEstimate: 5.6 },
        cityProfile: {
          localNote: 'Lathrop is a growing city in western San Joaquin County with new residential development. The area experiences hot summers with high cooling demand.',
          faq: [
            {
              q: 'Do I need a permit for solar in Lathrop?',
              a: 'Yes. Lathrop has its own city building department with typical turnaround of 2-4 weeks. Your installer will manage the permit application process.'
            },
            {
              q: 'Is off-grid solar worth it in Lathrop with PG&E rates?',
              a: 'Yes. Lathrop residents pay PG&E rates around $0.44/kWh with high summer cooling costs. Off-grid solar with battery storage delivers strong savings and backup power.'
            },
            {
              q: 'How much sun does Lathrop get for solar?',
              a: 'Lathrop averages around 5.6 peak sun hours per day in Zone 12. The Central Valley location provides excellent solar production with hot summers and minimal haze.'
            }
          ]
        }
      },
    ],
  },
  {
    county: 'Stanislaus County',
    regionSlug: 'stanislaus-county',
    state: 'california',
    countyData: {
      utilityRate: {
        utility: 'PG&E / Modesto Irrigation District (MID)',
        avgResidentialRatePerKwh: 0.19,
        note: 'Modesto is served by MID (Modesto Irrigation District), a public utility with rates around $0.18-0.20/kWh -- much lower than PG&E. Other cities (Turlock, Ceres, Oakdale, Riverbank) are served by PG&E at ~$0.44/kWh. For MID areas, solar value comes from backup power and energy independence rather than pure rate savings. For PG&E areas, solar economics are very strong.'
      },
      permitOffice: {
        name: 'Stanislaus County Planning and Community Development / Individual City Building Departments',
        jurisdiction: 'Stanislaus County / individual cities',
        typicalTurnaround: '2-4 weeks',
        note: 'Modesto, Turlock, Ceres, and other cities have their own building departments. Unincorporated areas fall under Stanislaus County Planning and Community Development.'
      },
      climateZone: {
        zone: 'Zone 12 / Zone 13',
        description: 'Hot-dry Central Valley climate with extreme summer heat and high cooling demand. Zone 12 for northern areas; Zone 13 for southern areas with even hotter summers. Excellent solar production year-round with very high summer output.'
      },
      countyContext: 'Stanislaus County sits in the heart of the Central Valley with flat agricultural terrain ideal for solar. The area experiences extreme summer heat with very high cooling demand. Modesto is served by MID, a public irrigation district with lower rates than PG&E, so solar value there comes from backup power and energy independence. Other cities are served by PG&E with high rates that drive strong solar economics.'
    },
    cities: [
      {
        city: 'Modesto',
        citySlug: 'modesto',
        utility: 'Modesto Irrigation District',
        localData: {
          avgMonthlyBillEstimate: 170,
          avgSystemSizeKwEstimate: 6.5,
          avgSavingsYear1Estimate: 1400,
          avgPaybackYearsEstimate: 9,
          peakSunHoursEstimate: 5.7,
        },
        cityProfile: {
          localNote: 'Modesto is served by MID, a public utility with lower rates than PG&E. Solar value here comes from backup power during outages and energy independence rather than pure rate savings.',
          faq: [
            {
              q: 'Do I need a permit for solar in Modesto?',
              a: 'Yes. Modesto has its own city building department with typical turnaround of 2-4 weeks. Your installer will manage the permit application process.'
            },
            {
              q: 'Is off-grid solar worth it in Modesto with MID rates?',
              a: 'MID rates average $0.18-0.20/kWh, much lower than PG&E. Solar payback is longer, but off-grid systems provide backup power during summer outages and lock in energy costs against future rate increases, plus energy independence.'
            },
            {
              q: 'How much sun does Modesto get for solar?',
              a: 'Modesto averages around 5.7 peak sun hours per day in Zone 12. The Central Valley location provides excellent solar production with hot, clear summers and no marine layer.'
            }
          ]
        }
      },
      {
        city: 'Turlock',
        citySlug: 'turlock',
        utility: 'PG&E',
        localData: { ...PGE, avgMonthlyBillEstimate: 240, peakSunHoursEstimate: 5.8 },
        cityProfile: {
          localNote: 'Turlock is a Central Valley city served by PG&E with hot, dry summers. The area experiences extreme summer heat with very high cooling demand.',
          faq: [
            {
              q: 'Do I need a permit for solar in Turlock?',
              a: 'Yes. Turlock has its own city building department with typical turnaround of 2-4 weeks. Your contractor handles the permit application.'
            },
            {
              q: 'Is off-grid solar worth it in Turlock with PG&E rates?',
              a: 'Absolutely. Turlock residents pay PG&E rates around $0.44/kWh with very high summer cooling costs. Off-grid solar with battery storage delivers strong savings and backup power during extreme heat events.'
            },
            {
              q: 'How much sun does Turlock get for solar?',
              a: 'Turlock averages around 5.8 peak sun hours per day in Zone 13. The Central Valley location provides excellent solar production with hot, clear summers and minimal haze.'
            }
          ]
        }
      },
      {
        city: 'Ceres',
        citySlug: 'ceres',
        utility: 'PG&E',
        localData: { ...PGE, avgMonthlyBillEstimate: 235, peakSunHoursEstimate: 5.7 },
        cityProfile: {
          localNote: 'Ceres is a Central Valley city near Modesto served by PG&E. The area experiences hot summers with high cooling demand ideal for solar.',
          faq: [
            {
              q: 'Do I need a permit for solar in Ceres?',
              a: 'Yes. Ceres has its own city building department with typical turnaround of 2-4 weeks. Your installer will manage the permit application process.'
            },
            {
              q: 'Is off-grid solar worth it in Ceres with PG&E rates?',
              a: 'Yes. Ceres residents pay PG&E rates around $0.44/kWh with high summer cooling demand. Off-grid solar with battery storage delivers strong savings and backup power during heat waves.'
            },
            {
              q: 'How much sun does Ceres get for solar?',
              a: 'Ceres averages around 5.7 peak sun hours per day in Zone 12/13. The Central Valley location provides excellent solar production with hot summers and no marine layer.'
            }
          ]
        }
      },
      {
        city: 'Oakdale',
        citySlug: 'oakdale',
        utility: 'PG&E',
        localData: { ...PGE, avgMonthlyBillEstimate: 230, peakSunHoursEstimate: 5.7 },
        cityProfile: {
          localNote: 'Oakdale is a small Central Valley city east of Modesto with agricultural surroundings. The area experiences hot summers with excellent solar conditions.',
          faq: [
            {
              q: 'Do I need a permit for solar in Oakdale?',
              a: 'Yes. Oakdale has its own city building department with typical turnaround of 2-4 weeks. Your contractor handles the permit application.'
            },
            {
              q: 'Is off-grid solar worth it in Oakdale with PG&E rates?',
              a: 'Yes. Oakdale residents pay PG&E rates around $0.44/kWh. Off-grid solar with battery storage provides strong savings and backup power, especially valuable for rural and ag areas.'
            },
            {
              q: 'How much sun does Oakdale get for solar?',
              a: 'Oakdale averages around 5.7 peak sun hours per day in Zone 12. The Central Valley location provides excellent solar production with hot, clear summers.'
            }
          ]
        }
      },
      {
        city: 'Riverbank',
        citySlug: 'riverbank',
        utility: 'PG&E',
        localData: { ...PGE, avgMonthlyBillEstimate: 230, peakSunHoursEstimate: 5.7 },
        cityProfile: {
          localNote: 'Riverbank is a small Central Valley city along the Stanislaus River. The area experiences hot summers with high cooling demand.',
          faq: [
            {
              q: 'Do I need a permit for solar in Riverbank?',
              a: 'Yes. Riverbank has its own city building department with typical turnaround of 2-4 weeks. Your installer will manage the permit application process.'
            },
            {
              q: 'Is off-grid solar worth it in Riverbank with PG&E rates?',
              a: 'Yes. Riverbank residents pay PG&E rates around $0.44/kWh with high summer cooling costs. Off-grid solar with battery storage delivers savings and backup power.'
            },
            {
              q: 'How much sun does Riverbank get for solar?',
              a: 'Riverbank averages around 5.7 peak sun hours per day in Zone 12. The Central Valley location provides excellent solar production with hot summers and no marine layer.'
            }
          ]
        }
      },
    ],
  },
  {
    county: 'Fresno County',
    regionSlug: 'fresno-county',
    state: 'california',
    countyData: {
      utilityRate: {
        utility: 'PG&E',
        avgResidentialRatePerKwh: 0.44,
        note: 'PG&E residential blended rate (E-TOU-C tier, 2025-2026 range). High rates combined with extreme San Joaquin Valley summer heat and very high cooling demand make solar economics exceptionally strong throughout Fresno County.'
      },
      permitOffice: {
        name: 'Fresno County Building and Safety Division / Individual City Building Departments',
        jurisdiction: 'Fresno County / individual cities',
        typicalTurnaround: '2-4 weeks',
        note: 'Fresno, Clovis, and other cities have their own building departments. Unincorporated areas fall under Fresno County Building and Safety. Some jurisdictions are adopting SolarAPP+ for expedited approval.'
      },
      climateZone: {
        zone: 'Zone 13',
        description: 'Very hot-dry San Joaquin Valley climate with extreme summer heat and very high cooling demand. Mild winters with minimal heating load. Excellent solar production year-round with extremely high summer output.'
      },
      countyContext: 'Fresno County sits in the southern San Joaquin Valley with flat agricultural terrain ideal for solar. Cities like Fresno, Clovis, Sanger, and Reedley experience some of the hottest summers in California with very high cooling demand, making solar especially valuable for offsetting AC costs. High PG&E rates throughout the county drive strong solar economics. Summer haze can slightly reduce production compared to northern valley, but output remains excellent.'
    },
    cities: [
      {
        city: 'Fresno',
        citySlug: 'fresno',
        utility: 'PG&E',
        localData: { ...PGE, avgMonthlyBillEstimate: 250, peakSunHoursEstimate: 5.9 },
        cityProfile: {
          localNote: 'Fresno is a major Central Valley city with extremely hot summers. The area experiences some of the highest cooling demand in California, making solar especially valuable.',
          faq: [
            {
              q: 'Do I need a permit for solar in Fresno?',
              a: 'Yes. Fresno has its own city building department with typical turnaround of 2-4 weeks. Your installer will manage the permit application process.'
            },
            {
              q: 'Is off-grid solar worth it in Fresno with PG&E rates?',
              a: 'Absolutely. Fresno residents pay PG&E rates around $0.44/kWh with extremely high summer cooling costs. Off-grid solar with battery storage delivers strong savings and critical backup power during extreme heat events.'
            },
            {
              q: 'How much sun does Fresno get for solar?',
              a: 'Fresno averages around 5.9 peak sun hours per day in Zone 13. The San Joaquin Valley location provides excellent solar production with very hot, clear summers, though some summer haze can occur.'
            }
          ]
        }
      },
      {
        city: 'Clovis',
        citySlug: 'clovis',
        utility: 'PG&E',
        localData: { ...PGE, avgMonthlyBillEstimate: 255, peakSunHoursEstimate: 5.9 },
        cityProfile: {
          localNote: 'Clovis is a growing city adjacent to Fresno with large homes and extremely hot summers. The area experiences very high cooling demand ideal for solar offset.',
          faq: [
            {
              q: 'Do I need a permit for solar in Clovis?',
              a: 'Yes. Clovis has its own city building department with typical turnaround of 2-4 weeks. Your contractor handles the permit application.'
            },
            {
              q: 'Is off-grid solar worth it in Clovis with PG&E rates?',
              a: 'Absolutely. Clovis residents pay PG&E rates around $0.44/kWh on high bills due to extreme summer cooling. Off-grid solar with battery storage delivers strong savings and backup power during heat waves.'
            },
            {
              q: 'How much sun does Clovis get for solar?',
              a: 'Clovis averages around 5.9 peak sun hours per day in Zone 13. The San Joaquin Valley location provides excellent solar production with very hot summers and minimal cloud cover.'
            }
          ]
        }
      },
      {
        city: 'Sanger',
        citySlug: 'sanger',
        utility: 'PG&E',
        localData: { ...PGE, avgMonthlyBillEstimate: 240, peakSunHoursEstimate: 5.9 },
        cityProfile: {
          localNote: 'Sanger is a small valley city east of Fresno with agricultural surroundings. The area experiences extremely hot summers with high cooling demand.',
          faq: [
            {
              q: 'Do I need a permit for solar in Sanger?',
              a: 'Yes. Sanger has its own city building department with typical turnaround of 2-4 weeks. Your installer will manage the permit application process.'
            },
            {
              q: 'Is off-grid solar worth it in Sanger with PG&E rates?',
              a: 'Yes. Sanger residents pay PG&E rates around $0.44/kWh with very high summer cooling costs. Off-grid solar with battery storage delivers strong savings and backup power during extreme heat.'
            },
            {
              q: 'How much sun does Sanger get for solar?',
              a: 'Sanger averages around 5.9 peak sun hours per day in Zone 13. The San Joaquin Valley location provides excellent solar production with hot, clear summers.'
            }
          ]
        }
      },
      {
        city: 'Reedley',
        citySlug: 'reedley',
        utility: 'PG&E',
        localData: { ...PGE, avgMonthlyBillEstimate: 235, peakSunHoursEstimate: 5.9 },
        cityProfile: {
          localNote: 'Reedley is a small agricultural city in the San Joaquin Valley. The area experiences hot summers with excellent solar conditions.',
          faq: [
            {
              q: 'Do I need a permit for solar in Reedley?',
              a: 'Yes. Reedley has its own city building department with typical turnaround of 2-4 weeks. Your contractor handles the permit application.'
            },
            {
              q: 'Is off-grid solar worth it in Reedley with PG&E rates?',
              a: 'Yes. Reedley residents pay PG&E rates around $0.44/kWh. Off-grid solar with battery storage provides strong savings and backup power, especially valuable for agricultural and rural properties.'
            },
            {
              q: 'How much sun does Reedley get for solar?',
              a: 'Reedley averages around 5.9 peak sun hours per day in Zone 13. The valley location provides excellent solar production with hot summers and strong year-round output.'
            }
          ]
        }
      },
    ],
  },
  {
    county: 'Merced County',
    regionSlug: 'merced-county',
    state: 'california',
    countyData: {
      utilityRate: {
        utility: 'PG&E',
        avgResidentialRatePerKwh: 0.44,
        note: 'PG&E residential blended rate (E-TOU-C tier, 2025-2026 range). High rates combined with hot Central Valley summers and high cooling demand make solar economics very strong throughout Merced County.'
      },
      permitOffice: {
        name: 'Merced County Building and Safety Division / Individual City Building Departments',
        jurisdiction: 'Merced County / individual cities',
        typicalTurnaround: '2-4 weeks',
        note: 'Merced, Los Banos, and other cities have their own building departments. Unincorporated areas fall under Merced County Building and Safety.'
      },
      climateZone: {
        zone: 'Zone 12 / Zone 13',
        description: 'Hot-dry Central Valley climate with extreme summer heat and high cooling demand. Zone 12 for northern areas; Zone 13 for southern areas with hotter summers. Excellent solar production year-round with very high summer output.'
      },
      countyContext: 'Merced County sits in the central San Joaquin Valley with flat agricultural terrain ideal for solar. The area experiences extreme summer heat with very high cooling demand, making solar especially valuable for offsetting AC costs. High PG&E rates throughout the county drive strong solar economics. Agricultural and rural areas benefit from off-grid solar for energy independence and reliability.'
    },
    cities: [
      {
        city: 'Merced',
        citySlug: 'merced',
        utility: 'PG&E',
        localData: { ...PGE, avgMonthlyBillEstimate: 240, peakSunHoursEstimate: 5.8 },
        cityProfile: {
          localNote: 'Merced is the county seat and home to UC Merced. The area experiences hot, dry summers with very high cooling demand ideal for solar production.',
          faq: [
            {
              q: 'Do I need a permit for solar in Merced?',
              a: 'Yes. Merced has its own city building department with typical turnaround of 2-4 weeks. Your installer will manage the permit application process.'
            },
            {
              q: 'Is off-grid solar worth it in Merced with PG&E rates?',
              a: 'Absolutely. Merced residents pay PG&E rates around $0.44/kWh with very high summer cooling costs. Off-grid solar with battery storage delivers strong savings and backup power during extreme heat events.'
            },
            {
              q: 'How much sun does Merced get for solar?',
              a: 'Merced averages around 5.8 peak sun hours per day in Zone 13. The Central Valley location provides excellent solar production with hot, clear summers and minimal haze.'
            }
          ]
        }
      },
      {
        city: 'Los Banos',
        citySlug: 'los-banos',
        utility: 'PG&E',
        localData: { ...PGE, avgMonthlyBillEstimate: 235, peakSunHoursEstimate: 5.8 },
        cityProfile: {
          localNote: 'Los Banos is a Central Valley city in western Merced County with agricultural surroundings. The area experiences hot summers with excellent solar conditions.',
          faq: [
            {
              q: 'Do I need a permit for solar in Los Banos?',
              a: 'Yes. Los Banos has its own city building department with typical turnaround of 2-4 weeks. Your contractor handles the permit application.'
            },
            {
              q: 'Is off-grid solar worth it in Los Banos with PG&E rates?',
              a: 'Yes. Los Banos residents pay PG&E rates around $0.44/kWh with high summer cooling demand. Off-grid solar with battery storage provides strong savings and backup power, especially valuable for agricultural properties.'
            },
            {
              q: 'How much sun does Los Banos get for solar?',
              a: 'Los Banos averages around 5.8 peak sun hours per day in Zone 13. The Central Valley location provides excellent solar production with hot summers and no marine layer.'
            }
          ]
        }
      },
      {
        city: 'Atwater',
        citySlug: 'atwater',
        utility: 'PG&E',
        localData: { ...PGE, avgMonthlyBillEstimate: 230, peakSunHoursEstimate: 5.8 },
        cityProfile: {
          localNote: 'Atwater is a small Central Valley city near Merced with flat terrain. The area experiences hot summers with high cooling demand.',
          faq: [
            {
              q: 'Do I need a permit for solar in Atwater?',
              a: 'Yes. Atwater has its own city building department with typical turnaround of 2-4 weeks. Your installer will manage the permit application process.'
            },
            {
              q: 'Is off-grid solar worth it in Atwater with PG&E rates?',
              a: 'Yes. Atwater residents pay PG&E rates around $0.44/kWh with high summer cooling costs. Off-grid solar with battery storage delivers savings and backup power during heat waves.'
            },
            {
              q: 'How much sun does Atwater get for solar?',
              a: 'Atwater averages around 5.8 peak sun hours per day in Zone 12/13. The Central Valley location provides excellent solar production with hot summers and minimal cloud cover.'
            }
          ]
        }
      },
    ],
  },
  {
    county: 'Los Angeles County',
    regionSlug: 'los-angeles-county',
    state: 'california',
    countyData: {
      utilityRate: {
        utility: 'SCE / LADWP / Pasadena Water & Power',
        avgResidentialRatePerKwh: 0.36,
        note: 'Southern California Edison (SCE) serves most of LA County at ~$0.36/kWh. City of Los Angeles is served by LADWP (municipal) at ~$0.24/kWh. Pasadena has municipal power at ~$0.22/kWh. Solar economics remain strong across all utilities, especially for SCE areas.'
      },
      permitOffice: {
        name: 'LA County Dept of Regional Planning / Individual City Building Departments / LADBS (City of LA)',
        jurisdiction: 'Los Angeles County / individual cities',
        typicalTurnaround: 'Same-day to 3 weeks (varies by jurisdiction; many cities use SolarAPP+)',
        note: 'City of Los Angeles uses LADBS (LA Dept of Building and Safety) with SolarAPP+ same-day approval for eligible systems. Santa Clarita, Pasadena, Long Beach, Glendale, and other cities have their own building departments. Many jurisdictions have adopted SolarAPP+.'
      },
      climateZone: {
        zone: 'Zone 8 / Zone 9 (coastal basin) / Zone 10 (inland valleys) / Zone 14 (desert)',
        description: 'Zone 8/9: mild coastal basin climate (LA, Torrance, Long Beach) with moderate temperatures and marine layer influence. Zone 10: warm inland valleys (Pomona, West Covina) with hot summers. Zone 14: desert climate (Lancaster, Palmdale) with extreme heat and very high sun exposure. Excellent solar production throughout the county.'
      },
      countyContext: 'Los Angeles County spans from the Pacific coast through the LA basin and San Gabriel Valley to the high desert (Antelope Valley). Coastal areas experience marine layer influence but strong solar production. Inland valleys see hot summers with high cooling demand. Desert areas (Lancaster, Palmdale) have extreme summer heat with exceptional solar potential. High SCE rates in most areas drive strong solar economics, while LADWP areas benefit from backup power and energy independence.'
    },
    cities: [
      {
        city: 'Los Angeles',
        citySlug: 'los-angeles',
        utility: 'LADWP',
        localData: { ...LADWP, avgMonthlyBillEstimate: 190 },
        cityProfile: {
          localNote: 'Los Angeles is served by LADWP, a municipal utility with lower rates than SCE. Solar value comes from backup power during outages, energy independence, and protection from future rate increases, plus offsetting high cooling costs in inland neighborhoods.',
          faq: [
            {
              q: 'Do I need a permit for solar in Los Angeles?',
              a: 'Yes. The City of Los Angeles uses LADBS (LA Dept of Building and Safety) with SolarAPP+ for eligible residential rooftop systems, providing same-day automated approval. Your installer submits the application and handles the process.'
            },
            {
              q: 'Is off-grid solar worth it in Los Angeles with LADWP rates?',
              a: 'LADWP rates average $0.24/kWh, lower than SCE. Solar payback is longer, but off-grid systems provide backup power during outages, lock in energy costs against future rate increases, and offset high cooling costs in inland LA neighborhoods like the Valley.'
            },
            {
              q: 'How much sun does Los Angeles get for solar?',
              a: 'Los Angeles averages around 5.7 peak sun hours per day in Zone 8/9. Coastal areas experience marine layer, but inland neighborhoods (Valley, East LA) see excellent solar production year-round with hot, clear summers.'
            }
          ]
        }
      },
      {
        city: 'Long Beach',
        citySlug: 'long-beach',
        utility: 'SCE',
        localData: { ...SCE, avgMonthlyBillEstimate: 235, peakSunHoursEstimate: 5.7 },
        cityProfile: {
          localNote: 'Long Beach sits on the Pacific coast with moderate coastal climate and marine layer influence. Despite coastal fog, the area receives strong solar production, and SCE rates make solar economics favorable.',
          faq: [
            {
              q: 'Do I need a permit for solar in Long Beach?',
              a: 'Yes. Long Beach has its own city building department with typical turnaround of 2-3 weeks. Your installer will manage the permit application process.'
            },
            {
              q: 'Is off-grid solar worth it in Long Beach with SCE rates?',
              a: 'Yes. Long Beach residents pay SCE rates around $0.36/kWh. Off-grid solar with battery storage delivers strong savings and backup power, even with moderate cooling demand from the coastal climate.'
            },
            {
              q: 'How much sun does Long Beach get for solar?',
              a: 'Long Beach averages approximately 5.7 peak sun hours per day in Zone 8. Marine layer affects morning production, but the coastal climate still supports strong solar generation year-round.'
            }
          ]
        }
      },
      {
        city: 'Glendale',
        citySlug: 'glendale',
        utility: 'SCE',
        localData: { ...SCE, avgMonthlyBillEstimate: 245, peakSunHoursEstimate: 5.8 },
        cityProfile: {
          localNote: 'Glendale sits in the Verdugo Mountains foothills with hot summers and hillside terrain. The inland valley location provides excellent solar conditions with minimal marine layer interference.',
          faq: [
            {
              q: 'Do I need a permit for solar in Glendale?',
              a: 'Yes. Glendale has its own city building department with typical turnaround of 2-3 weeks. Your contractor handles the permit application.'
            },
            {
              q: 'Is off-grid solar worth it in Glendale with SCE rates?',
              a: 'Absolutely. Glendale residents pay SCE rates around $0.36/kWh with high summer cooling demand. Off-grid solar with battery storage delivers strong savings and backup power during heat waves.'
            },
            {
              q: 'How much sun does Glendale get for solar?',
              a: 'Glendale averages around 5.8 peak sun hours per day in Zone 9/10. The foothill location provides excellent solar production with hot summers and minimal marine layer.'
            }
          ]
        }
      },
      {
        city: 'Santa Clarita',
        citySlug: 'santa-clarita',
        utility: 'SCE',
        localData: { ...SCE, avgMonthlyBillEstimate: 260, peakSunHoursEstimate: 6.0 },
        cityProfile: {
          localNote: 'Santa Clarita sits in the Santa Clarita Valley north of LA with hot, dry summers. The inland valley location provides exceptional solar conditions with no marine layer and high cooling demand.',
          faq: [
            {
              q: 'Do I need a permit for solar in Santa Clarita?',
              a: 'Yes. Santa Clarita has its own city building department with typical turnaround of 2-3 weeks. Your installer will manage the permit application process.'
            },
            {
              q: 'Is off-grid solar worth it in Santa Clarita with SCE rates?',
              a: 'Absolutely. Santa Clarita residents pay SCE rates around $0.36/kWh with very high summer cooling costs. Off-grid solar with battery storage delivers strong savings and backup power during extreme heat events.'
            },
            {
              q: 'How much sun does Santa Clarita get for solar?',
              a: 'Santa Clarita averages around 6.0 peak sun hours per day in Zone 10. The inland valley location provides excellent solar production with hot, clear summers and no marine layer interference.'
            }
          ]
        }
      },
      {
        city: 'Pasadena',
        citySlug: 'pasadena',
        utility: 'Pasadena Water & Power',
        localData: { ...PASADENA_POWER, avgMonthlyBillEstimate: 180 },
        cityProfile: {
          localNote: 'Pasadena is served by Pasadena Water & Power, a municipal utility with lower rates than SCE. Solar value comes from backup power, energy independence, and offsetting high cooling costs in this foothill city.',
          faq: [
            {
              q: 'Do I need a permit for solar in Pasadena?',
              a: 'Yes. Pasadena has its own city building department with typical turnaround of 2-3 weeks. Your contractor handles the permit application.'
            },
            {
              q: 'Is off-grid solar worth it in Pasadena with PWP rates?',
              a: 'Pasadena Water & Power rates average $0.22/kWh, lower than SCE. Solar payback is longer, but off-grid systems provide backup power during outages, lock in energy costs, and offset high cooling demand from the foothill location.'
            },
            {
              q: 'How much sun does Pasadena get for solar?',
              a: 'Pasadena averages around 5.7 peak sun hours per day in Zone 9/10. The foothill location provides strong solar production with hot summers and minimal marine layer influence.'
            }
          ]
        }
      },
      {
        city: 'Pomona',
        citySlug: 'pomona',
        utility: 'SCE',
        localData: { ...SCE, avgMonthlyBillEstimate: 250, peakSunHoursEstimate: 5.9 },
        cityProfile: {
          localNote: 'Pomona sits in the eastern San Gabriel Valley with hot summers and inland climate. The area experiences high cooling demand with excellent solar production conditions.',
          faq: [
            {
              q: 'Do I need a permit for solar in Pomona?',
              a: 'Yes. Pomona has its own city building department with typical turnaround of 2-3 weeks. Your installer will manage the permit application process.'
            },
            {
              q: 'Is off-grid solar worth it in Pomona with SCE rates?',
              a: 'Yes. Pomona residents pay SCE rates around $0.36/kWh with high summer cooling costs. Off-grid solar with battery storage delivers strong savings and backup power during heat waves.'
            },
            {
              q: 'How much sun does Pomona get for solar?',
              a: 'Pomona averages around 5.9 peak sun hours per day in Zone 10. The inland valley location provides excellent solar production with hot summers and minimal marine layer.'
            }
          ]
        }
      },
      {
        city: 'Torrance',
        citySlug: 'torrance',
        utility: 'SCE',
        localData: { ...SCE, avgMonthlyBillEstimate: 240, peakSunHoursEstimate: 5.7 },
        cityProfile: {
          localNote: 'Torrance sits in the South Bay near the coast with moderate marine layer influence. Despite coastal fog, SCE rates and strong solar production make solar economics favorable.',
          faq: [
            {
              q: 'Do I need a permit for solar in Torrance?',
              a: 'Yes. Torrance has its own city building department with typical turnaround of 2-3 weeks. Your contractor handles the permit application.'
            },
            {
              q: 'Is off-grid solar worth it in Torrance with SCE rates?',
              a: 'Yes. Torrance residents pay SCE rates around $0.36/kWh. Off-grid solar with battery storage provides strong savings and backup power despite moderate cooling demand from the coastal climate.'
            },
            {
              q: 'How much sun does Torrance get for solar?',
              a: 'Torrance averages around 5.7 peak sun hours per day in Zone 8. Marine layer affects morning production, but solar generation remains strong year-round.'
            }
          ]
        }
      },
      {
        city: 'Lancaster',
        citySlug: 'lancaster',
        utility: 'SCE',
        localData: { ...SCE, avgMonthlyBillEstimate: 275, peakSunHoursEstimate: 6.5 },
        cityProfile: {
          localNote: 'Lancaster sits in the high desert Antelope Valley with extreme summer heat and exceptional solar potential. The desert climate provides among the highest sun exposure in California with very high cooling demand.',
          faq: [
            {
              q: 'Do I need a permit for solar in Lancaster?',
              a: 'Yes. Lancaster has its own city building department with typical turnaround of 2-3 weeks. Your installer will manage the permit application process.'
            },
            {
              q: 'Is off-grid solar worth it in Lancaster with SCE rates?',
              a: 'Absolutely. Lancaster residents pay SCE rates around $0.36/kWh with extreme summer cooling costs from desert heat. Off-grid solar with battery storage delivers exceptional savings and critical backup power during heat waves.'
            },
            {
              q: 'How much sun does Lancaster get for solar?',
              a: 'Lancaster averages around 6.5 peak sun hours per day in Zone 14. The high desert location provides exceptional solar production with very hot, clear summers and minimal cloud cover year-round.'
            }
          ]
        }
      },
      {
        city: 'Palmdale',
        citySlug: 'palmdale',
        utility: 'SCE',
        localData: { ...SCE, avgMonthlyBillEstimate: 270, peakSunHoursEstimate: 6.5 },
        cityProfile: {
          localNote: 'Palmdale sits in the high desert Antelope Valley with extreme summer heat. The desert climate provides exceptional solar potential, among the best in California, with very high cooling demand.',
          faq: [
            {
              q: 'Do I need a permit for solar in Palmdale?',
              a: 'Yes. Palmdale has its own city building department with typical turnaround of 2-3 weeks. Your contractor handles the permit application.'
            },
            {
              q: 'Is off-grid solar worth it in Palmdale with SCE rates?',
              a: 'Absolutely. Palmdale residents pay SCE rates around $0.36/kWh with extreme summer cooling costs. Off-grid solar with battery storage delivers exceptional savings and backup power during desert heat waves.'
            },
            {
              q: 'How much sun does Palmdale get for solar?',
              a: 'Palmdale averages around 6.5 peak sun hours per day in Zone 14. The high desert location provides exceptional solar production with very hot, clear summers and minimal cloud cover.'
            }
          ]
        }
      },
      {
        city: 'Downey',
        citySlug: 'downey',
        utility: 'SCE',
        localData: { ...SCE, avgMonthlyBillEstimate: 245, peakSunHoursEstimate: 5.8 },
        cityProfile: {
          localNote: 'Downey sits in southeastern LA County with inland climate and moderate marine layer influence. The area experiences warm summers with strong solar production potential.',
          faq: [
            {
              q: 'Do I need a permit for solar in Downey?',
              a: 'Yes. Downey has its own city building department with typical turnaround of 2-3 weeks. Your installer will manage the permit application process.'
            },
            {
              q: 'Is off-grid solar worth it in Downey with SCE rates?',
              a: 'Yes. Downey residents pay SCE rates around $0.36/kWh with moderate summer cooling demand. Off-grid solar with battery storage delivers strong savings and backup power during outages.'
            },
            {
              q: 'How much sun does Downey get for solar?',
              a: 'Downey averages around 5.8 peak sun hours per day in Zone 9. The inland basin location provides strong solar production with warm summers and moderate marine layer.'
            }
          ]
        }
      },
      {
        city: 'West Covina',
        citySlug: 'west-covina',
        utility: 'SCE',
        localData: { ...SCE, avgMonthlyBillEstimate: 250, peakSunHoursEstimate: 5.9 },
        cityProfile: {
          localNote: 'West Covina sits in the eastern San Gabriel Valley with hot summers and inland climate. The area experiences high cooling demand with excellent solar production conditions.',
          faq: [
            {
              q: 'Do I need a permit for solar in West Covina?',
              a: 'Yes. West Covina has its own city building department with typical turnaround of 2-3 weeks. Your contractor handles the permit application.'
            },
            {
              q: 'Is off-grid solar worth it in West Covina with SCE rates?',
              a: 'Yes. West Covina residents pay SCE rates around $0.36/kWh with high summer cooling costs. Off-grid solar with battery storage delivers strong savings and backup power during heat waves.'
            },
            {
              q: 'How much sun does West Covina get for solar?',
              a: 'West Covina averages around 5.9 peak sun hours per day in Zone 10. The eastern valley location provides excellent solar production with hot summers and minimal marine layer.'
            }
          ]
        }
      },
      {
        city: 'El Monte',
        citySlug: 'el-monte',
        utility: 'SCE',
        localData: { ...SCE, avgMonthlyBillEstimate: 245, peakSunHoursEstimate: 5.8 },
        cityProfile: {
          localNote: 'El Monte sits in the San Gabriel Valley with warm summers and inland climate. The area experiences moderate to high cooling demand with strong solar production potential.',
          faq: [
            {
              q: 'Do I need a permit for solar in El Monte?',
              a: 'Yes. El Monte has its own city building department with typical turnaround of 2-3 weeks. Your installer will manage the permit application process.'
            },
            {
              q: 'Is off-grid solar worth it in El Monte with SCE rates?',
              a: 'Yes. El Monte residents pay SCE rates around $0.36/kWh with moderate to high summer cooling demand. Off-grid solar with battery storage delivers strong savings and backup power.'
            },
            {
              q: 'How much sun does El Monte get for solar?',
              a: 'El Monte averages around 5.8 peak sun hours per day in Zone 9/10. The valley location provides strong solar production with warm summers and minimal marine layer interference.'
            }
          ]
        }
      },
    ],
  },
  {
    county: 'Orange County',
    regionSlug: 'orange-county',
    state: 'california',
    countyData: {
      utilityRate: {
        utility: 'SCE / Anaheim Public Utilities',
        avgResidentialRatePerKwh: 0.36,
        note: 'Southern California Edison (SCE) serves most of Orange County at ~$0.36/kWh. City of Anaheim is served by Anaheim Public Utilities (municipal) at ~$0.22/kWh. Solar economics are strong throughout the county, especially for SCE areas.'
      },
      permitOffice: {
        name: 'Individual City Building Departments',
        jurisdiction: 'Orange County cities',
        typicalTurnaround: '2-3 weeks; many cities use SolarAPP+',
        note: 'Orange County has no unincorporated areas — every location is within a city. Irvine, Santa Ana, Anaheim, Huntington Beach, and other cities have their own building departments. Many jurisdictions have adopted SolarAPP+ for expedited residential solar approval.'
      },
      climateZone: {
        zone: 'Zone 6 / Zone 7 (coastal) / Zone 8 (inland)',
        description: 'Zone 6/7: coastal marine climate (Huntington Beach, Newport Beach) with moderate temperatures and marine layer influence. Zone 8: mild inland climate (Anaheim, Santa Ana, Irvine) with warm summers. Excellent solar production throughout the county, with coastal areas seeing morning marine layer and inland areas experiencing higher cooling demand.'
      },
      countyContext: 'Orange County spans from the Pacific coast through inland valleys to the foothills of the Santa Ana Mountains. Coastal cities experience marine layer influence but strong solar production. Inland cities see warm to hot summers with moderate to high cooling demand. High SCE rates in most areas drive strong solar economics. Anaheim municipal power has lower rates but solar still provides backup value and energy independence.'
    },
    cities: [
      {
        city: 'Anaheim',
        citySlug: 'anaheim',
        utility: 'Anaheim Public Utilities',
        localData: { ...ANAHEIM_PUBLIC, avgMonthlyBillEstimate: 175 },
        cityProfile: {
          localNote: 'Anaheim is served by Anaheim Public Utilities, a municipal utility with lower rates than SCE. Solar value comes from backup power, energy independence, and offsetting moderate cooling costs in this inland Orange County city.',
          faq: [
            {
              q: 'Do I need a permit for solar in Anaheim?',
              a: 'Yes. Anaheim has its own city building department with typical turnaround of 2-3 weeks. Your installer will manage the permit application process.'
            },
            {
              q: 'Is off-grid solar worth it in Anaheim with APU rates?',
              a: 'Anaheim Public Utilities rates average $0.22/kWh, lower than SCE. Solar payback is longer, but off-grid systems provide backup power during outages, lock in energy costs against future rate increases, and offset moderate cooling demand.'
            },
            {
              q: 'How much sun does Anaheim get for solar?',
              a: 'Anaheim averages around 5.7 peak sun hours per day in Zone 8. The inland Orange County location provides strong solar production with warm summers and minimal marine layer interference.'
            }
          ]
        }
      },
      {
        city: 'Santa Ana',
        citySlug: 'santa-ana',
        utility: 'SCE',
        localData: { ...SCE, avgMonthlyBillEstimate: 240, peakSunHoursEstimate: 5.8 },
        cityProfile: {
          localNote: 'Santa Ana is the county seat, located in central Orange County with warm inland climate. The area experiences moderate marine layer influence with strong solar production potential and moderate cooling demand.',
          faq: [
            {
              q: 'Do I need a permit for solar in Santa Ana?',
              a: 'Yes. Santa Ana has its own city building department with typical turnaround of 2-3 weeks. Your contractor handles the permit application.'
            },
            {
              q: 'Is off-grid solar worth it in Santa Ana with SCE rates?',
              a: 'Yes. Santa Ana residents pay SCE rates around $0.36/kWh with moderate cooling demand. Off-grid solar with battery storage delivers strong savings and backup power during outages.'
            },
            {
              q: 'How much sun does Santa Ana get for solar?',
              a: 'Santa Ana averages around 5.8 peak sun hours per day in Zone 8. The central Orange County location provides strong solar production with warm summers and moderate marine layer.'
            }
          ]
        }
      },
      {
        city: 'Irvine',
        citySlug: 'irvine',
        utility: 'SCE',
        localData: { ...SCE, avgMonthlyBillEstimate: 250, peakSunHoursEstimate: 5.8 },
        cityProfile: {
          localNote: 'Irvine is a master-planned city in central Orange County with large modern homes. The area experiences warm summers with excellent solar conditions and moderate marine layer influence.',
          faq: [
            {
              q: 'Do I need a permit for solar in Irvine?',
              a: 'Yes. Irvine has its own city building department with typical turnaround of 2-3 weeks. Your installer will manage the permit application process.'
            },
            {
              q: 'Is off-grid solar worth it in Irvine with SCE rates?',
              a: 'Yes. Irvine residents pay SCE rates around $0.36/kWh with moderate cooling demand from large homes. Off-grid solar with battery storage delivers strong savings and backup power during outages.'
            },
            {
              q: 'How much sun does Irvine get for solar?',
              a: 'Irvine averages around 5.8 peak sun hours per day in Zone 8. The central Orange County location provides strong solar production with warm summers and moderate marine layer influence.'
            }
          ]
        }
      },
      {
        city: 'Huntington Beach',
        citySlug: 'huntington-beach',
        utility: 'SCE',
        localData: { ...SCE, avgMonthlyBillEstimate: 235, peakSunHoursEstimate: 5.6 },
        cityProfile: {
          localNote: 'Huntington Beach sits on the Pacific coast with marine layer influence and moderate coastal climate. Despite morning fog, the area receives strong solar production, and SCE rates make solar economics favorable.',
          faq: [
            {
              q: 'Do I need a permit for solar in Huntington Beach?',
              a: 'Yes. Huntington Beach has its own city building department with typical turnaround of 2-3 weeks. Your contractor handles the permit application.'
            },
            {
              q: 'Is off-grid solar worth it in Huntington Beach with SCE rates?',
              a: 'Yes. Huntington Beach residents pay SCE rates around $0.36/kWh. Off-grid solar with battery storage provides strong savings and backup power despite moderate cooling demand from the coastal climate.'
            },
            {
              q: 'How much sun does Huntington Beach get for solar?',
              a: 'Huntington Beach averages around 5.6 peak sun hours per day in Zone 6. Marine layer affects morning production, but solar generation remains strong year-round with afternoon sun.'
            }
          ]
        }
      },
      {
        city: 'Garden Grove',
        citySlug: 'garden-grove',
        utility: 'SCE',
        localData: { ...SCE, avgMonthlyBillEstimate: 240, peakSunHoursEstimate: 5.7 },
        cityProfile: {
          localNote: 'Garden Grove sits in central Orange County with mild inland climate. The area experiences moderate marine layer influence with strong solar production and moderate cooling demand.',
          faq: [
            {
              q: 'Do I need a permit for solar in Garden Grove?',
              a: 'Yes. Garden Grove has its own city building department with typical turnaround of 2-3 weeks. Your installer will manage the permit application process.'
            },
            {
              q: 'Is off-grid solar worth it in Garden Grove with SCE rates?',
              a: 'Yes. Garden Grove residents pay SCE rates around $0.36/kWh with moderate cooling demand. Off-grid solar with battery storage delivers strong savings and backup power during outages.'
            },
            {
              q: 'How much sun does Garden Grove get for solar?',
              a: 'Garden Grove averages around 5.7 peak sun hours per day in Zone 8. The central Orange County location provides strong solar production with warm summers and moderate marine layer.'
            }
          ]
        }
      },
      {
        city: 'Fullerton',
        citySlug: 'fullerton',
        utility: 'SCE',
        localData: { ...SCE, avgMonthlyBillEstimate: 245, peakSunHoursEstimate: 5.8 },
        cityProfile: {
          localNote: 'Fullerton sits in northern Orange County near the foothills with warm inland climate. The area experiences minimal marine layer with strong solar production and moderate cooling demand.',
          faq: [
            {
              q: 'Do I need a permit for solar in Fullerton?',
              a: 'Yes. Fullerton has its own city building department with typical turnaround of 2-3 weeks. Your contractor handles the permit application.'
            },
            {
              q: 'Is off-grid solar worth it in Fullerton with SCE rates?',
              a: 'Yes. Fullerton residents pay SCE rates around $0.36/kWh with moderate summer cooling costs. Off-grid solar with battery storage delivers strong savings and backup power during heat waves.'
            },
            {
              q: 'How much sun does Fullerton get for solar?',
              a: 'Fullerton averages around 5.8 peak sun hours per day in Zone 8. The northern Orange County location provides strong solar production with warm summers and minimal marine layer.'
            }
          ]
        }
      },
      {
        city: 'Orange',
        citySlug: 'orange-city',
        utility: 'SCE',
        localData: { ...SCE, avgMonthlyBillEstimate: 245, peakSunHoursEstimate: 5.8 },
        cityProfile: {
          localNote: 'Orange sits in central Orange County near the foothills with warm inland climate. The area experiences minimal marine layer with strong solar production and moderate cooling demand.',
          faq: [
            {
              q: 'Do I need a permit for solar in Orange?',
              a: 'Yes. The City of Orange has its own building department with typical turnaround of 2-3 weeks. Your installer will manage the permit application process.'
            },
            {
              q: 'Is off-grid solar worth it in Orange with SCE rates?',
              a: 'Yes. Orange residents pay SCE rates around $0.36/kWh with moderate cooling demand. Off-grid solar with battery storage delivers strong savings and backup power during outages.'
            },
            {
              q: 'How much sun does Orange get for solar?',
              a: 'Orange averages around 5.8 peak sun hours per day in Zone 8. The central Orange County location near the foothills provides strong solar production with warm summers.'
            }
          ]
        }
      },
      {
        city: 'Costa Mesa',
        citySlug: 'costa-mesa',
        utility: 'SCE',
        localData: { ...SCE, avgMonthlyBillEstimate: 240, peakSunHoursEstimate: 5.7 },
        cityProfile: {
          localNote: 'Costa Mesa sits near the coast with moderate marine layer influence and mild climate. Despite coastal fog, the area receives strong solar production, and SCE rates make solar economics favorable.',
          faq: [
            {
              q: 'Do I need a permit for solar in Costa Mesa?',
              a: 'Yes. Costa Mesa has its own city building department with typical turnaround of 2-3 weeks. Your contractor handles the permit application.'
            },
            {
              q: 'Is off-grid solar worth it in Costa Mesa with SCE rates?',
              a: 'Yes. Costa Mesa residents pay SCE rates around $0.36/kWh. Off-grid solar with battery storage provides strong savings and backup power despite moderate cooling demand from the coastal location.'
            },
            {
              q: 'How much sun does Costa Mesa get for solar?',
              a: 'Costa Mesa averages around 5.7 peak sun hours per day in Zone 6/8. Marine layer affects morning production, but solar generation remains strong year-round.'
            }
          ]
        }
      },
      {
        city: 'Mission Viejo',
        citySlug: 'mission-viejo',
        utility: 'SCE',
        localData: { ...SCE, avgMonthlyBillEstimate: 250, peakSunHoursEstimate: 5.9 },
        cityProfile: {
          localNote: 'Mission Viejo sits in the Saddleback Valley foothills with warm inland climate. The area experiences minimal marine layer with excellent solar production and moderate to high cooling demand.',
          faq: [
            {
              q: 'Do I need a permit for solar in Mission Viejo?',
              a: 'Yes. Mission Viejo has its own city building department with typical turnaround of 2-3 weeks. Your installer will manage the permit application process.'
            },
            {
              q: 'Is off-grid solar worth it in Mission Viejo with SCE rates?',
              a: 'Yes. Mission Viejo residents pay SCE rates around $0.36/kWh with moderate to high cooling demand. Off-grid solar with battery storage delivers strong savings and backup power during heat waves.'
            },
            {
              q: 'How much sun does Mission Viejo get for solar?',
              a: 'Mission Viejo averages around 5.9 peak sun hours per day in Zone 8/10. The foothill location provides excellent solar production with warm summers and minimal marine layer.'
            }
          ]
        }
      },
      {
        city: 'Newport Beach',
        citySlug: 'newport-beach',
        utility: 'SCE',
        localData: { ...SCE, avgMonthlyBillEstimate: 245, peakSunHoursEstimate: 5.6 },
        cityProfile: {
          localNote: 'Newport Beach sits on the Pacific coast with marine layer influence and mild coastal climate. Despite morning fog, the area receives strong solar production, and high-value homes benefit from SCE solar economics.',
          faq: [
            {
              q: 'Do I need a permit for solar in Newport Beach?',
              a: 'Yes. Newport Beach has its own city building department with typical turnaround of 2-3 weeks. Your contractor handles the permit application.'
            },
            {
              q: 'Is off-grid solar worth it in Newport Beach with SCE rates?',
              a: 'Yes. Newport Beach residents pay SCE rates around $0.36/kWh. Off-grid solar with battery storage provides strong savings and energy independence despite moderate cooling demand from the coastal climate.'
            },
            {
              q: 'How much sun does Newport Beach get for solar?',
              a: 'Newport Beach averages around 5.6 peak sun hours per day in Zone 6. Marine layer affects morning production, but solar generation remains strong with afternoon sun and clear skies.'
            }
          ]
        }
      },
    ],
  },
  {
    county: 'San Diego County',
    regionSlug: 'san-diego-county',
    state: 'california',
    countyData: {
      utilityRate: {
        utility: 'SDG&E',
        avgResidentialRatePerKwh: 0.47,
        note: 'San Diego Gas & Electric (SDG&E) serves all of San Diego County at ~$0.47/kWh — among the highest residential rates in the nation. Solar economics are exceptionally strong throughout the county due to these high rates combined with excellent sun exposure.'
      },
      permitOffice: {
        name: 'San Diego County Development Services Dept / Individual City Building Departments',
        jurisdiction: 'San Diego County / individual cities',
        typicalTurnaround: '2-4 weeks; many cities use SolarAPP+',
        note: 'San Diego, Chula Vista, Oceanside, Escondido, and other cities have their own building departments. Unincorporated areas fall under San Diego County Development Services. Many jurisdictions have adopted SolarAPP+ for expedited residential solar approval.'
      },
      climateZone: {
        zone: 'Zone 7 (coastal) / Zone 10 (inland valleys)',
        description: 'Zone 7: mild coastal marine climate (San Diego, Oceanside, Encinitas) with moderate temperatures and marine layer influence. Zone 10: warm inland valleys (Escondido, El Cajon, San Marcos) with hot summers and high cooling demand. Excellent solar production throughout the county.'
      },
      countyContext: 'San Diego County spans from the Pacific coast through inland valleys to the mountains and desert. Coastal cities experience marine layer influence but still receive excellent solar production. Inland valleys see warm to hot summers with moderate to high cooling demand. Exceptionally high SDG&E rates (among the highest in the nation) make solar economics extremely strong throughout the county. The region has some of the best solar potential in California.'
    },
    cities: [
      {
        city: 'San Diego',
        citySlug: 'san-diego',
        utility: 'SDG&E',
        localData: { ...SDGE, avgMonthlyBillEstimate: 275 },
        cityProfile: {
          localNote: 'San Diego spans from the Pacific coast through inland neighborhoods with varied microclimates. Coastal areas experience marine layer, but the city receives excellent solar production. SDG&E rates are among the highest in the nation, making solar economics exceptionally strong.',
          faq: [
            {
              q: 'Do I need a permit for solar in San Diego?',
              a: 'Yes. The City of San Diego has its own Development Services Department with typical turnaround of 2-4 weeks. Many residential systems qualify for SolarAPP+ same-day approval. Your installer handles the application.'
            },
            {
              q: 'Is off-grid solar worth it in San Diego with SDG&E rates?',
              a: 'Absolutely. San Diego residents pay SDG&E rates around $0.47/kWh — among the highest in the nation. Off-grid solar with battery storage delivers exceptional savings and backup power, with some of the fastest payback periods in California.'
            },
            {
              q: 'How much sun does San Diego get for solar?',
              a: 'San Diego averages around 5.9 peak sun hours per day in Zone 7/10. Coastal neighborhoods experience morning marine layer, but inland areas receive exceptional solar production with warm, clear afternoons year-round.'
            }
          ]
        }
      },
      {
        city: 'Chula Vista',
        citySlug: 'chula-vista',
        utility: 'SDG&E',
        localData: { ...SDGE, avgMonthlyBillEstimate: 270, peakSunHoursEstimate: 5.9 },
        cityProfile: {
          localNote: 'Chula Vista sits south of San Diego with mild coastal climate and moderate marine layer influence. The area receives excellent solar production, and SDG&E rates make solar economics exceptionally favorable.',
          faq: [
            {
              q: 'Do I need a permit for solar in Chula Vista?',
              a: 'Yes. Chula Vista has its own city building department with typical turnaround of 2-3 weeks. Your installer will manage the permit application process.'
            },
            {
              q: 'Is off-grid solar worth it in Chula Vista with SDG&E rates?',
              a: 'Absolutely. Chula Vista residents pay SDG&E rates around $0.47/kWh. Off-grid solar with battery storage delivers exceptional savings and backup power, with among the fastest payback periods in California.'
            },
            {
              q: 'How much sun does Chula Vista get for solar?',
              a: 'Chula Vista averages around 5.9 peak sun hours per day in Zone 7/10. Marine layer affects morning production, but solar generation remains strong year-round with excellent afternoon sun.'
            }
          ]
        }
      },
      {
        city: 'Oceanside',
        citySlug: 'oceanside',
        utility: 'SDG&E',
        localData: { ...SDGE, avgMonthlyBillEstimate: 270, peakSunHoursEstimate: 5.8 },
        cityProfile: {
          localNote: 'Oceanside sits on the Pacific coast in northern San Diego County with marine layer influence and moderate coastal climate. Despite morning fog, the area receives strong solar production, and SDG&E rates make solar economics exceptionally strong.',
          faq: [
            {
              q: 'Do I need a permit for solar in Oceanside?',
              a: 'Yes. Oceanside has its own city building department with typical turnaround of 2-3 weeks. Your contractor handles the permit application.'
            },
            {
              q: 'Is off-grid solar worth it in Oceanside with SDG&E rates?',
              a: 'Absolutely. Oceanside residents pay SDG&E rates around $0.47/kWh — among the highest in the nation. Off-grid solar with battery storage delivers exceptional savings despite moderate cooling demand from the coastal climate.'
            },
            {
              q: 'How much sun does Oceanside get for solar?',
              a: 'Oceanside averages around 5.8 peak sun hours per day in Zone 7. Marine layer affects morning production, but solar generation remains strong with afternoon sun and clear skies.'
            }
          ]
        }
      },
      {
        city: 'Escondido',
        citySlug: 'escondido',
        utility: 'SDG&E',
        localData: { ...SDGE, avgMonthlyBillEstimate: 285, peakSunHoursEstimate: 6.0 },
        cityProfile: {
          localNote: 'Escondido sits in an inland valley with hot summers and minimal marine layer. The area experiences high cooling demand with excellent solar production, and SDG&E rates make solar economics exceptionally strong.',
          faq: [
            {
              q: 'Do I need a permit for solar in Escondido?',
              a: 'Yes. Escondido has its own city building department with typical turnaround of 2-3 weeks. Your installer will manage the permit application process.'
            },
            {
              q: 'Is off-grid solar worth it in Escondido with SDG&E rates?',
              a: 'Absolutely. Escondido residents pay SDG&E rates around $0.47/kWh with high summer cooling costs. Off-grid solar with battery storage delivers exceptional savings and critical backup power during heat waves.'
            },
            {
              q: 'How much sun does Escondido get for solar?',
              a: 'Escondido averages around 6.0 peak sun hours per day in Zone 10. The inland valley location provides excellent solar production with hot, clear summers and minimal marine layer.'
            }
          ]
        }
      },
      {
        city: 'Carlsbad',
        citySlug: 'carlsbad',
        utility: 'SDG&E',
        localData: { ...SDGE, avgMonthlyBillEstimate: 275, peakSunHoursEstimate: 5.8 },
        cityProfile: {
          localNote: 'Carlsbad sits on the Pacific coast with marine layer influence and mild coastal climate. Despite morning fog, the area receives strong solar production, and SDG&E rates make solar economics exceptionally favorable.',
          faq: [
            {
              q: 'Do I need a permit for solar in Carlsbad?',
              a: 'Yes. Carlsbad has its own city building department with typical turnaround of 2-3 weeks. Your contractor handles the permit application.'
            },
            {
              q: 'Is off-grid solar worth it in Carlsbad with SDG&E rates?',
              a: 'Absolutely. Carlsbad residents pay SDG&E rates around $0.47/kWh. Off-grid solar with battery storage delivers exceptional savings and backup power despite moderate cooling demand from the coastal climate.'
            },
            {
              q: 'How much sun does Carlsbad get for solar?',
              a: 'Carlsbad averages around 5.8 peak sun hours per day in Zone 7. Marine layer affects morning production, but solar generation remains strong with excellent afternoon sun.'
            }
          ]
        }
      },
      {
        city: 'El Cajon',
        citySlug: 'el-cajon',
        utility: 'SDG&E',
        localData: { ...SDGE, avgMonthlyBillEstimate: 285, peakSunHoursEstimate: 6.1 },
        cityProfile: {
          localNote: 'El Cajon sits in an inland valley east of San Diego with hot summers and minimal marine layer. The area experiences high cooling demand with excellent solar production, and SDG&E rates make solar economics exceptionally strong.',
          faq: [
            {
              q: 'Do I need a permit for solar in El Cajon?',
              a: 'Yes. El Cajon has its own city building department with typical turnaround of 2-3 weeks. Your installer will manage the permit application process.'
            },
            {
              q: 'Is off-grid solar worth it in El Cajon with SDG&E rates?',
              a: 'Absolutely. El Cajon residents pay SDG&E rates around $0.47/kWh with high summer cooling costs from inland heat. Off-grid solar with battery storage delivers exceptional savings and backup power during heat waves.'
            },
            {
              q: 'How much sun does El Cajon get for solar?',
              a: 'El Cajon averages around 6.1 peak sun hours per day in Zone 10. The inland valley location provides excellent solar production with hot, clear summers and no marine layer interference.'
            }
          ]
        }
      },
      {
        city: 'Vista',
        citySlug: 'vista',
        utility: 'SDG&E',
        localData: { ...SDGE, avgMonthlyBillEstimate: 275, peakSunHoursEstimate: 5.9 },
        cityProfile: {
          localNote: 'Vista sits in northern San Diego County with mild inland climate and moderate marine layer influence. The area receives excellent solar production, and SDG&E rates make solar economics exceptionally favorable.',
          faq: [
            {
              q: 'Do I need a permit for solar in Vista?',
              a: 'Yes. Vista has its own city building department with typical turnaround of 2-3 weeks. Your contractor handles the permit application.'
            },
            {
              q: 'Is off-grid solar worth it in Vista with SDG&E rates?',
              a: 'Absolutely. Vista residents pay SDG&E rates around $0.47/kWh. Off-grid solar with battery storage delivers exceptional savings and backup power, with among the fastest payback periods in California.'
            },
            {
              q: 'How much sun does Vista get for solar?',
              a: 'Vista averages around 5.9 peak sun hours per day in Zone 7/10. The inland location provides strong solar production with warm summers and moderate marine layer.'
            }
          ]
        }
      },
      {
        city: 'San Marcos',
        citySlug: 'san-marcos',
        utility: 'SDG&E',
        localData: { ...SDGE, avgMonthlyBillEstimate: 280, peakSunHoursEstimate: 5.9 },
        cityProfile: {
          localNote: 'San Marcos sits in an inland valley with warm summers and minimal marine layer. The area experiences moderate to high cooling demand with excellent solar production, and SDG&E rates make solar economics exceptionally strong.',
          faq: [
            {
              q: 'Do I need a permit for solar in San Marcos?',
              a: 'Yes. San Marcos has its own city building department with typical turnaround of 2-3 weeks. Your installer will manage the permit application process.'
            },
            {
              q: 'Is off-grid solar worth it in San Marcos with SDG&E rates?',
              a: 'Absolutely. San Marcos residents pay SDG&E rates around $0.47/kWh with moderate to high summer cooling costs. Off-grid solar with battery storage delivers exceptional savings and backup power during heat waves.'
            },
            {
              q: 'How much sun does San Marcos get for solar?',
              a: 'San Marcos averages around 5.9 peak sun hours per day in Zone 10. The inland valley location provides excellent solar production with warm summers and minimal marine layer.'
            }
          ]
        }
      },
      {
        city: 'Encinitas',
        citySlug: 'encinitas',
        utility: 'SDG&E',
        localData: { ...SDGE, avgMonthlyBillEstimate: 270, peakSunHoursEstimate: 5.7 },
        cityProfile: {
          localNote: 'Encinitas sits on the Pacific coast with marine layer influence and mild coastal climate. Despite morning fog, the area receives strong solar production, and SDG&E rates make solar economics exceptionally favorable.',
          faq: [
            {
              q: 'Do I need a permit for solar in Encinitas?',
              a: 'Yes. Encinitas has its own city building department with typical turnaround of 2-3 weeks. Your contractor handles the permit application.'
            },
            {
              q: 'Is off-grid solar worth it in Encinitas with SDG&E rates?',
              a: 'Absolutely. Encinitas residents pay SDG&E rates around $0.47/kWh — among the highest in the nation. Off-grid solar with battery storage delivers exceptional savings despite moderate cooling demand from the coastal climate.'
            },
            {
              q: 'How much sun does Encinitas get for solar?',
              a: 'Encinitas averages around 5.7 peak sun hours per day in Zone 7. Marine layer affects morning production, but solar generation remains strong with clear afternoon skies.'
            }
          ]
        }
      },
      {
        city: 'La Mesa',
        citySlug: 'la-mesa',
        utility: 'SDG&E',
        localData: { ...SDGE, avgMonthlyBillEstimate: 280, peakSunHoursEstimate: 6.0 },
        cityProfile: {
          localNote: 'La Mesa sits in an inland valley east of San Diego with warm summers and minimal marine layer. The area experiences moderate to high cooling demand with excellent solar production, and SDG&E rates make solar economics exceptionally strong.',
          faq: [
            {
              q: 'Do I need a permit for solar in La Mesa?',
              a: 'Yes. La Mesa has its own city building department with typical turnaround of 2-3 weeks. Your installer will manage the permit application process.'
            },
            {
              q: 'Is off-grid solar worth it in La Mesa with SDG&E rates?',
              a: 'Absolutely. La Mesa residents pay SDG&E rates around $0.47/kWh with moderate to high summer cooling costs. Off-grid solar with battery storage delivers exceptional savings and backup power during heat waves.'
            },
            {
              q: 'How much sun does La Mesa get for solar?',
              a: 'La Mesa averages around 6.0 peak sun hours per day in Zone 10. The inland valley location provides excellent solar production with warm summers and no marine layer interference.'
            }
          ]
        }
      },
    ],
  },
  {
    county: 'Riverside County',
    regionSlug: 'riverside-county',
    state: 'california',
    countyData: {
      utilityRate: {
        utility: 'SCE / Riverside Public Utilities',
        avgResidentialRatePerKwh: 0.36,
        note: 'Southern California Edison (SCE) serves most of Riverside County at ~$0.36/kWh. City of Riverside is served by Riverside Public Utilities (municipal) at ~$0.20/kWh. Desert cities experience extreme heat with exceptional solar potential. Solar economics are strong for SCE areas; RPU areas benefit from backup power and energy independence.'
      },
      permitOffice: {
        name: 'Riverside County Building and Safety Division / Individual City Building Departments',
        jurisdiction: 'Riverside County / individual cities',
        typicalTurnaround: '2-4 weeks; some cities use SolarAPP+',
        note: 'Riverside, Moreno Valley, Corona, Temecula, and other cities have their own building departments. Unincorporated areas fall under Riverside County Building and Safety. Desert cities require systems designed for extreme heat. Some jurisdictions have adopted SolarAPP+.'
      },
      climateZone: {
        zone: 'Zone 10 (western valleys) / Zone 14 / Zone 15 (desert)',
        description: 'Zone 10: warm inland valleys (Corona, Temecula, Murrieta) with hot summers. Zone 14/15: desert climate (Palm Springs, Indio, Desert Hot Springs) with extreme summer heat and very high sun exposure. Excellent solar production throughout the county, with desert areas having among the highest potential in California.'
      },
      countyContext: 'Riverside County spans from western valleys (Corona, Temecula) through the Inland Empire to the Coachella Valley desert (Palm Springs, Indio). Western areas experience hot summers with high cooling demand. Desert cities see extreme summer heat (110F+) with exceptional solar potential — among the best in California. High SCE rates in most areas drive strong solar economics. Desert homes have very high cooling loads that solar can offset effectively.'
    },
    cities: [
      {
        city: 'Riverside',
        citySlug: 'riverside',
        utility: 'Riverside Public Utilities',
        localData: { ...RIVERSIDE_PUBLIC, avgMonthlyBillEstimate: 170 },
        cityProfile: {
          localNote: 'Riverside is served by Riverside Public Utilities, a municipal utility with lower rates than SCE. The city experiences hot Inland Empire summers. Solar value comes from backup power, energy independence, and offsetting high cooling costs.',
          faq: [
            {
              q: 'Do I need a permit for solar in Riverside?',
              a: 'Yes. Riverside has its own city building department with typical turnaround of 2-3 weeks. Your installer will manage the permit application process.'
            },
            {
              q: 'Is off-grid solar worth it in Riverside with RPU rates?',
              a: 'Riverside Public Utilities rates average $0.20/kWh, lower than SCE. Solar payback is longer, but off-grid systems provide backup power during outages, lock in energy costs, and offset very high summer cooling demand from Inland Empire heat.'
            },
            {
              q: 'How much sun does Riverside get for solar?',
              a: 'Riverside averages around 6.0 peak sun hours per day in Zone 10. The Inland Empire location provides excellent solar production with hot, clear summers and very high sun exposure.'
            }
          ]
        }
      },
      {
        city: 'Moreno Valley',
        citySlug: 'moreno-valley',
        utility: 'SCE',
        localData: { ...SCE, avgMonthlyBillEstimate: 260, peakSunHoursEstimate: 6.1 },
        cityProfile: {
          localNote: 'Moreno Valley sits in the Inland Empire with hot, dry summers and exceptional solar potential. The area experiences very high cooling demand, and SCE rates make solar economics strong.',
          faq: [
            {
              q: 'Do I need a permit for solar in Moreno Valley?',
              a: 'Yes. Moreno Valley has its own city building department with typical turnaround of 2-3 weeks. Your contractor handles the permit application.'
            },
            {
              q: 'Is off-grid solar worth it in Moreno Valley with SCE rates?',
              a: 'Absolutely. Moreno Valley residents pay SCE rates around $0.36/kWh with very high summer cooling costs from Inland Empire heat. Off-grid solar with battery storage delivers strong savings and critical backup power during heat waves.'
            },
            {
              q: 'How much sun does Moreno Valley get for solar?',
              a: 'Moreno Valley averages around 6.1 peak sun hours per day in Zone 10. The Inland Empire location provides excellent solar production with hot, clear summers and no marine layer.'
            }
          ]
        }
      },
      {
        city: 'Corona',
        citySlug: 'corona',
        utility: 'SCE',
        localData: { ...SCE, avgMonthlyBillEstimate: 260, peakSunHoursEstimate: 6.0 },
        cityProfile: {
          localNote: 'Corona sits in western Riverside County with hot summers and Inland Empire climate. The area experiences high cooling demand with excellent solar production, and SCE rates make solar economics strong.',
          faq: [
            {
              q: 'Do I need a permit for solar in Corona?',
              a: 'Yes. Corona has its own city building department with typical turnaround of 2-3 weeks. Your installer will manage the permit application process.'
            },
            {
              q: 'Is off-grid solar worth it in Corona with SCE rates?',
              a: 'Yes. Corona residents pay SCE rates around $0.36/kWh with high summer cooling costs. Off-grid solar with battery storage delivers strong savings and backup power during Inland Empire heat waves.'
            },
            {
              q: 'How much sun does Corona get for solar?',
              a: 'Corona averages around 6.0 peak sun hours per day in Zone 10. The Inland Empire location provides excellent solar production with hot summers and no marine layer interference.'
            }
          ]
        }
      },
      {
        city: 'Temecula',
        citySlug: 'temecula',
        utility: 'SCE',
        localData: { ...SCE, avgMonthlyBillEstimate: 255, peakSunHoursEstimate: 6.0 },
        cityProfile: {
          localNote: 'Temecula sits in the southwestern Temecula Valley wine country with hot summers. The area experiences high cooling demand with excellent solar production, and SCE rates make solar economics strong.',
          faq: [
            {
              q: 'Do I need a permit for solar in Temecula?',
              a: 'Yes. Temecula has its own city building department with typical turnaround of 2-3 weeks. Your contractor handles the permit application.'
            },
            {
              q: 'Is off-grid solar worth it in Temecula with SCE rates?',
              a: 'Yes. Temecula residents pay SCE rates around $0.36/kWh with high summer cooling demand. Off-grid solar with battery storage delivers strong savings and backup power during heat waves.'
            },
            {
              q: 'How much sun does Temecula get for solar?',
              a: 'Temecula averages around 6.0 peak sun hours per day in Zone 10. The valley location provides excellent solar production with hot, clear summers.'
            }
          ]
        }
      },
      {
        city: 'Murrieta',
        citySlug: 'murrieta',
        utility: 'SCE',
        localData: { ...SCE, avgMonthlyBillEstimate: 255, peakSunHoursEstimate: 6.0 },
        cityProfile: {
          localNote: 'Murrieta sits in the Temecula Valley with hot summers and growing residential development. The area experiences high cooling demand with excellent solar production, and SCE rates make solar economics strong.',
          faq: [
            {
              q: 'Do I need a permit for solar in Murrieta?',
              a: 'Yes. Murrieta has its own city building department with typical turnaround of 2-3 weeks. Your installer will manage the permit application process.'
            },
            {
              q: 'Is off-grid solar worth it in Murrieta with SCE rates?',
              a: 'Yes. Murrieta residents pay SCE rates around $0.36/kWh with high summer cooling costs. Off-grid solar with battery storage delivers strong savings and backup power during heat waves.'
            },
            {
              q: 'How much sun does Murrieta get for solar?',
              a: 'Murrieta averages around 6.0 peak sun hours per day in Zone 10. The valley location provides excellent solar production with hot summers and clear skies.'
            }
          ]
        }
      },
      {
        city: 'Hemet',
        citySlug: 'hemet',
        utility: 'SCE',
        localData: { ...SCE, avgMonthlyBillEstimate: 250, peakSunHoursEstimate: 6.2 },
        cityProfile: {
          localNote: 'Hemet sits in the San Jacinto Valley with hot, dry summers. The area experiences high cooling demand with excellent solar production, and SCE rates make solar economics strong.',
          faq: [
            {
              q: 'Do I need a permit for solar in Hemet?',
              a: 'Yes. Hemet has its own city building department with typical turnaround of 2-3 weeks. Your contractor handles the permit application.'
            },
            {
              q: 'Is off-grid solar worth it in Hemet with SCE rates?',
              a: 'Yes. Hemet residents pay SCE rates around $0.36/kWh with high summer cooling costs. Off-grid solar with battery storage delivers strong savings and backup power during extreme heat events.'
            },
            {
              q: 'How much sun does Hemet get for solar?',
              a: 'Hemet averages around 6.2 peak sun hours per day in Zone 10. The valley location provides excellent solar production with hot, clear summers and very high sun exposure.'
            }
          ]
        }
      },
      {
        city: 'Indio',
        citySlug: 'indio',
        utility: 'SCE',
        localData: { ...SCE, avgMonthlyBillEstimate: 290, peakSunHoursEstimate: 6.5 },
        cityProfile: {
          localNote: 'Indio sits in the Coachella Valley desert with extreme summer heat (110F+ common). The area has exceptional solar potential — among the best in California — with very high cooling demand that solar can effectively offset.',
          faq: [
            {
              q: 'Do I need a permit for solar in Indio?',
              a: 'Yes. Indio has its own city building department with typical turnaround of 2-3 weeks. Desert installations require systems designed for extreme heat. Your installer handles the application.'
            },
            {
              q: 'Is off-grid solar worth it in Indio with SCE rates?',
              a: 'Absolutely. Indio residents pay SCE rates around $0.36/kWh with extreme summer cooling costs from desert heat. Off-grid solar with battery storage delivers exceptional savings and critical backup power during heat waves.'
            },
            {
              q: 'How much sun does Indio get for solar?',
              a: 'Indio averages around 6.5 peak sun hours per day in Zone 15. The Coachella Valley desert location provides exceptional solar production — among the best in California — with very hot, clear summers year-round.'
            }
          ]
        }
      },
      {
        city: 'Palm Springs',
        citySlug: 'palm-springs',
        utility: 'SCE',
        localData: { ...SCE, avgMonthlyBillEstimate: 300, peakSunHoursEstimate: 6.5 },
        cityProfile: {
          localNote: 'Palm Springs sits in the Coachella Valley desert with extreme summer heat. The area has exceptional solar potential — among the best in California — with very high cooling demand. Solar systems must be designed for extreme desert conditions.',
          faq: [
            {
              q: 'Do I need a permit for solar in Palm Springs?',
              a: 'Yes. Palm Springs has its own city building department with typical turnaround of 2-3 weeks. Desert installations require systems designed for extreme heat and sand. Your contractor handles the application.'
            },
            {
              q: 'Is off-grid solar worth it in Palm Springs with SCE rates?',
              a: 'Absolutely. Palm Springs residents pay SCE rates around $0.36/kWh with extreme summer cooling costs (110F+ common). Off-grid solar with battery storage delivers exceptional savings and critical backup power during desert heat waves.'
            },
            {
              q: 'How much sun does Palm Springs get for solar?',
              a: 'Palm Springs averages around 6.5 peak sun hours per day in Zone 15. The desert location provides exceptional solar production — among the best in California — with very hot, clear skies year-round.'
            }
          ]
        }
      },
      {
        city: 'Menifee',
        citySlug: 'menifee',
        utility: 'SCE',
        localData: { ...SCE, avgMonthlyBillEstimate: 255, peakSunHoursEstimate: 6.1 },
        cityProfile: {
          localNote: 'Menifee is a growing city in southwestern Riverside County with hot summers. The area experiences high cooling demand with excellent solar production, and SCE rates make solar economics strong.',
          faq: [
            {
              q: 'Do I need a permit for solar in Menifee?',
              a: 'Yes. Menifee has its own city building department with typical turnaround of 2-3 weeks. Your installer will manage the permit application process.'
            },
            {
              q: 'Is off-grid solar worth it in Menifee with SCE rates?',
              a: 'Yes. Menifee residents pay SCE rates around $0.36/kWh with high summer cooling costs. Off-grid solar with battery storage delivers strong savings and backup power during heat waves.'
            },
            {
              q: 'How much sun does Menifee get for solar?',
              a: 'Menifee averages around 6.1 peak sun hours per day in Zone 10. The inland location provides excellent solar production with hot, clear summers.'
            }
          ]
        }
      },
      {
        city: 'Perris',
        citySlug: 'perris',
        utility: 'SCE',
        localData: { ...SCE, avgMonthlyBillEstimate: 255, peakSunHoursEstimate: 6.1 },
        cityProfile: {
          localNote: 'Perris sits in the Inland Empire with hot, dry summers. The area experiences high cooling demand with excellent solar production, and SCE rates make solar economics strong.',
          faq: [
            {
              q: 'Do I need a permit for solar in Perris?',
              a: 'Yes. Perris has its own city building department with typical turnaround of 2-3 weeks. Your contractor handles the permit application.'
            },
            {
              q: 'Is off-grid solar worth it in Perris with SCE rates?',
              a: 'Yes. Perris residents pay SCE rates around $0.36/kWh with high summer cooling costs from Inland Empire heat. Off-grid solar with battery storage delivers strong savings and backup power during heat waves.'
            },
            {
              q: 'How much sun does Perris get for solar?',
              a: 'Perris averages around 6.1 peak sun hours per day in Zone 10. The Inland Empire location provides excellent solar production with hot summers and no marine layer.'
            }
          ]
        }
      },
    ],
  },
  {
    county: 'San Bernardino County',
    regionSlug: 'san-bernardino-county',
    state: 'california',
    countyData: {
      utilityRate: {
        utility: 'SCE',
        avgResidentialRatePerKwh: 0.36,
        note: 'Southern California Edison (SCE) serves all of San Bernardino County at ~$0.36/kWh. Inland Empire and high desert areas experience extreme heat with exceptional solar potential. Solar economics are strong throughout the county due to high rates combined with very high cooling demand.'
      },
      permitOffice: {
        name: 'San Bernardino County Building and Safety Division / Individual City Building Departments',
        jurisdiction: 'San Bernardino County / individual cities',
        typicalTurnaround: '2-4 weeks',
        note: 'San Bernardino, Fontana, Rancho Cucamonga, Ontario, and other cities have their own building departments. Unincorporated areas fall under San Bernardino County Building and Safety. High desert areas require systems designed for extreme temperature swings.'
      },
      climateZone: {
        zone: 'Zone 10 (western Inland Empire) / Zone 14 (high desert)',
        description: 'Zone 10: warm to hot Inland Empire climate (Rancho Cucamonga, Ontario, Fontana, Rialto) with hot summers and high cooling demand. Zone 14: high desert climate (Victorville, Hesperia, Apple Valley) with extreme heat in summer, cold winters, and exceptional sun exposure. Excellent solar production throughout the county.'
      },
      countyContext: 'San Bernardino County spans from the western Inland Empire (Rancho Cucamonga, Ontario) through the San Bernardino Valley to the high desert (Victorville, Hesperia). Western areas experience hot Inland Empire summers with high cooling demand. Desert cities see extreme summer heat (100F+) with exceptional solar potential and temperature swings requiring robust system design. High SCE rates throughout the county drive strong solar economics.'
    },
    cities: [
      {
        city: 'San Bernardino',
        citySlug: 'san-bernardino',
        utility: 'SCE',
        localData: { ...SCE, avgMonthlyBillEstimate: 260, peakSunHoursEstimate: 6.1 },
        cityProfile: {
          localNote: 'San Bernardino sits in the Inland Empire with hot, dry summers and high cooling demand. The area experiences excellent solar production, and SCE rates make solar economics strong.',
          faq: [
            {
              q: 'Do I need a permit for solar in San Bernardino?',
              a: 'Yes. San Bernardino has its own city building department with typical turnaround of 2-3 weeks. Your installer will manage the permit application process.'
            },
            {
              q: 'Is off-grid solar worth it in San Bernardino with SCE rates?',
              a: 'Absolutely. San Bernardino residents pay SCE rates around $0.36/kWh with very high summer cooling costs from Inland Empire heat. Off-grid solar with battery storage delivers strong savings and critical backup power during heat waves.'
            },
            {
              q: 'How much sun does San Bernardino get for solar?',
              a: 'San Bernardino averages around 6.1 peak sun hours per day in Zone 10. The Inland Empire location provides excellent solar production with hot, clear summers and very high sun exposure.'
            }
          ]
        }
      },
      {
        city: 'Fontana',
        citySlug: 'fontana',
        utility: 'SCE',
        localData: { ...SCE, avgMonthlyBillEstimate: 260, peakSunHoursEstimate: 6.0 },
        cityProfile: {
          localNote: 'Fontana sits in the western Inland Empire with hot summers and high cooling demand. The area experiences excellent solar production, and SCE rates make solar economics strong.',
          faq: [
            {
              q: 'Do I need a permit for solar in Fontana?',
              a: 'Yes. Fontana has its own city building department with typical turnaround of 2-3 weeks. Your contractor handles the permit application.'
            },
            {
              q: 'Is off-grid solar worth it in Fontana with SCE rates?',
              a: 'Yes. Fontana residents pay SCE rates around $0.36/kWh with high summer cooling costs from Inland Empire heat. Off-grid solar with battery storage delivers strong savings and backup power during heat waves.'
            },
            {
              q: 'How much sun does Fontana get for solar?',
              a: 'Fontana averages around 6.0 peak sun hours per day in Zone 10. The Inland Empire location provides excellent solar production with hot summers and no marine layer.'
            }
          ]
        }
      },
      {
        city: 'Rancho Cucamonga',
        citySlug: 'rancho-cucamonga',
        utility: 'SCE',
        localData: { ...SCE, avgMonthlyBillEstimate: 265, peakSunHoursEstimate: 6.0 },
        cityProfile: {
          localNote: 'Rancho Cucamonga sits at the base of the San Gabriel Mountains in the western Inland Empire. The area experiences hot summers with high cooling demand, and foothill location provides excellent solar conditions.',
          faq: [
            {
              q: 'Do I need a permit for solar in Rancho Cucamonga?',
              a: 'Yes. Rancho Cucamonga has its own city building department with typical turnaround of 2-3 weeks. Your installer will manage the permit application process.'
            },
            {
              q: 'Is off-grid solar worth it in Rancho Cucamonga with SCE rates?',
              a: 'Yes. Rancho Cucamonga residents pay SCE rates around $0.36/kWh with high summer cooling costs. Off-grid solar with battery storage delivers strong savings and backup power during Inland Empire heat waves.'
            },
            {
              q: 'How much sun does Rancho Cucamonga get for solar?',
              a: 'Rancho Cucamonga averages around 6.0 peak sun hours per day in Zone 10. The foothill Inland Empire location provides excellent solar production with hot summers and clear skies.'
            }
          ]
        }
      },
      {
        city: 'Ontario',
        citySlug: 'ontario',
        utility: 'SCE',
        localData: { ...SCE, avgMonthlyBillEstimate: 260, peakSunHoursEstimate: 6.0 },
        cityProfile: {
          localNote: 'Ontario sits in the western Inland Empire with hot summers and high cooling demand. The area experiences excellent solar production, and SCE rates make solar economics strong.',
          faq: [
            {
              q: 'Do I need a permit for solar in Ontario?',
              a: 'Yes. Ontario has its own city building department with typical turnaround of 2-3 weeks. Your contractor handles the permit application.'
            },
            {
              q: 'Is off-grid solar worth it in Ontario with SCE rates?',
              a: 'Yes. Ontario residents pay SCE rates around $0.36/kWh with high summer cooling costs from Inland Empire heat. Off-grid solar with battery storage delivers strong savings and backup power during heat waves.'
            },
            {
              q: 'How much sun does Ontario get for solar?',
              a: 'Ontario averages around 6.0 peak sun hours per day in Zone 10. The Inland Empire location provides excellent solar production with hot, clear summers.'
            }
          ]
        }
      },
      {
        city: 'Victorville',
        citySlug: 'victorville',
        utility: 'SCE',
        localData: { ...SCE, avgMonthlyBillEstimate: 275, peakSunHoursEstimate: 6.5 },
        cityProfile: {
          localNote: 'Victorville sits in the high desert with extreme temperature swings — very hot summers and cold winters. The area has exceptional solar potential with very high cooling demand. Systems must be designed for desert extremes.',
          faq: [
            {
              q: 'Do I need a permit for solar in Victorville?',
              a: 'Yes. Victorville has its own city building department with typical turnaround of 2-3 weeks. High desert installations require systems designed for extreme temperature swings. Your installer handles the application.'
            },
            {
              q: 'Is off-grid solar worth it in Victorville with SCE rates?',
              a: 'Absolutely. Victorville residents pay SCE rates around $0.36/kWh with very high summer cooling costs from desert heat. Off-grid solar with battery storage delivers exceptional savings and critical backup power during extreme heat.'
            },
            {
              q: 'How much sun does Victorville get for solar?',
              a: 'Victorville averages around 6.5 peak sun hours per day in Zone 14. The high desert location provides exceptional solar production with very hot, clear summers and minimal cloud cover year-round.'
            }
          ]
        }
      },
      {
        city: 'Rialto',
        citySlug: 'rialto',
        utility: 'SCE',
        localData: { ...SCE, avgMonthlyBillEstimate: 255, peakSunHoursEstimate: 6.0 },
        cityProfile: {
          localNote: 'Rialto sits in the Inland Empire with hot summers and high cooling demand. The area experiences excellent solar production, and SCE rates make solar economics strong.',
          faq: [
            {
              q: 'Do I need a permit for solar in Rialto?',
              a: 'Yes. Rialto has its own city building department with typical turnaround of 2-3 weeks. Your installer will manage the permit application process.'
            },
            {
              q: 'Is off-grid solar worth it in Rialto with SCE rates?',
              a: 'Yes. Rialto residents pay SCE rates around $0.36/kWh with high summer cooling costs from Inland Empire heat. Off-grid solar with battery storage delivers strong savings and backup power during heat waves.'
            },
            {
              q: 'How much sun does Rialto get for solar?',
              a: 'Rialto averages around 6.0 peak sun hours per day in Zone 10. The Inland Empire location provides excellent solar production with hot summers and no marine layer.'
            }
          ]
        }
      },
      {
        city: 'Hesperia',
        citySlug: 'hesperia',
        utility: 'SCE',
        localData: { ...SCE, avgMonthlyBillEstimate: 270, peakSunHoursEstimate: 6.5 },
        cityProfile: {
          localNote: 'Hesperia sits in the high desert with extreme summer heat and cold winters. The area has exceptional solar potential with very high cooling demand. Systems must be designed for desert temperature extremes.',
          faq: [
            {
              q: 'Do I need a permit for solar in Hesperia?',
              a: 'Yes. Hesperia has its own city building department with typical turnaround of 2-3 weeks. High desert installations require systems designed for extreme temperature swings. Your contractor handles the application.'
            },
            {
              q: 'Is off-grid solar worth it in Hesperia with SCE rates?',
              a: 'Absolutely. Hesperia residents pay SCE rates around $0.36/kWh with very high summer cooling costs from desert heat. Off-grid solar with battery storage delivers exceptional savings and backup power during extreme heat events.'
            },
            {
              q: 'How much sun does Hesperia get for solar?',
              a: 'Hesperia averages around 6.5 peak sun hours per day in Zone 14. The high desert location provides exceptional solar production with very hot, clear summers and strong year-round output.'
            }
          ]
        }
      },
      {
        city: 'Chino',
        citySlug: 'chino',
        utility: 'SCE',
        localData: { ...SCE, avgMonthlyBillEstimate: 260, peakSunHoursEstimate: 6.0 },
        cityProfile: {
          localNote: 'Chino sits in the western Inland Empire with hot summers and high cooling demand. The area experiences excellent solar production, and SCE rates make solar economics strong.',
          faq: [
            {
              q: 'Do I need a permit for solar in Chino?',
              a: 'Yes. Chino has its own city building department with typical turnaround of 2-3 weeks. Your installer will manage the permit application process.'
            },
            {
              q: 'Is off-grid solar worth it in Chino with SCE rates?',
              a: 'Yes. Chino residents pay SCE rates around $0.36/kWh with high summer cooling costs from Inland Empire heat. Off-grid solar with battery storage delivers strong savings and backup power during heat waves.'
            },
            {
              q: 'How much sun does Chino get for solar?',
              a: 'Chino averages around 6.0 peak sun hours per day in Zone 10. The Inland Empire location provides excellent solar production with hot, clear summers.'
            }
          ]
        }
      },
      {
        city: 'Redlands',
        citySlug: 'redlands',
        utility: 'SCE',
        localData: { ...SCE, avgMonthlyBillEstimate: 260, peakSunHoursEstimate: 6.1 },
        cityProfile: {
          localNote: 'Redlands sits at the base of the San Bernardino Mountains with hot summers and high cooling demand. The foothill location provides excellent solar conditions, and SCE rates make solar economics strong.',
          faq: [
            {
              q: 'Do I need a permit for solar in Redlands?',
              a: 'Yes. Redlands has its own city building department with typical turnaround of 2-3 weeks. Your contractor handles the permit application.'
            },
            {
              q: 'Is off-grid solar worth it in Redlands with SCE rates?',
              a: 'Yes. Redlands residents pay SCE rates around $0.36/kWh with high summer cooling costs. Off-grid solar with battery storage delivers strong savings and backup power during Inland Empire heat waves.'
            },
            {
              q: 'How much sun does Redlands get for solar?',
              a: 'Redlands averages around 6.1 peak sun hours per day in Zone 10. The foothill location provides excellent solar production with hot summers and clear skies.'
            }
          ]
        }
      },
      {
        city: 'Upland',
        citySlug: 'upland',
        utility: 'SCE',
        localData: { ...SCE, avgMonthlyBillEstimate: 260, peakSunHoursEstimate: 6.0 },
        cityProfile: {
          localNote: 'Upland sits at the base of the San Gabriel Mountains in the western Inland Empire. The area experiences hot summers with high cooling demand, and foothill location provides excellent solar conditions.',
          faq: [
            {
              q: 'Do I need a permit for solar in Upland?',
              a: 'Yes. Upland has its own city building department with typical turnaround of 2-3 weeks. Your installer will manage the permit application process.'
            },
            {
              q: 'Is off-grid solar worth it in Upland with SCE rates?',
              a: 'Yes. Upland residents pay SCE rates around $0.36/kWh with high summer cooling costs from Inland Empire heat. Off-grid solar with battery storage delivers strong savings and backup power during heat waves.'
            },
            {
              q: 'How much sun does Upland get for solar?',
              a: 'Upland averages around 6.0 peak sun hours per day in Zone 10. The foothill Inland Empire location provides excellent solar production with hot summers and no marine layer.'
            }
          ]
        }
      },
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

// Find a specific region/county by slug
export function findRegion(
  vertical: string,
  state: string,
  regionSlug: string
): MarketRegion | null {
  if (vertical !== 'solar' || state !== 'california') return null;
  return NORCAL_SOLAR_MARKETS.find(r => r.regionSlug === regionSlug) || null;
}
