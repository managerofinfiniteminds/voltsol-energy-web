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

const BURBANK_POWER: MarketCityLocalData = {
  avgMonthlyBillEstimate: 165,
  avgSystemSizeKwEstimate: 6.5,
  avgSavingsYear1Estimate: 1350,
  avgPaybackYearsEstimate: 8,
  peakSunHoursEstimate: 5.7,
};

const GLENDALE_POWER: MarketCityLocalData = {
  avgMonthlyBillEstimate: 165,
  avgSystemSizeKwEstimate: 6.5,
  avgSavingsYear1Estimate: 1350,
  avgPaybackYearsEstimate: 8,
  peakSunHoursEstimate: 5.8,
};

const IID: MarketCityLocalData = {
  avgMonthlyBillEstimate: 120,
  avgSystemSizeKwEstimate: 7.5,
  avgSavingsYear1Estimate: 950,
  avgPaybackYearsEstimate: 11,
  peakSunHoursEstimate: 6.5,
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
              q: 'Is residential solar + battery storage worth it in Roseville with PG&E rates?',
              a: 'Absolutely. PG&E residential rates average around $0.44/kWh in Roseville — among the highest in California. Residential solar with battery storage lets you lock in energy costs and avoid future rate increases.'
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
              q: 'Is residential solar + battery storage worth it in Rocklin with PG&E rates?',
              a: 'Yes. With PG&E rates around $0.44/kWh, Rocklin homeowners can save significantly by switching to solar with battery storage, especially during peak summer cooling months.'
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
              q: 'Is residential solar + battery storage worth it in Lincoln with PG&E rates?',
              a: 'Definitely. Lincoln residents face PG&E rates near $0.44/kWh. Residential solar with battery backup eliminates most of that cost while providing blackout protection during PSPS events.'
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
              q: 'Is residential solar + battery storage worth it in Auburn with PG&E rates?',
              a: 'Yes. Auburn homeowners pay PG&E rates around $0.44/kWh. Residential solar + battery storage is especially valuable here for backup power during frequent PSPS shutoffs in foothill fire zones.'
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
              q: 'Is residential solar + battery storage worth it in Loomis with PG&E rates?',
              a: 'Absolutely. Loomis residents pay PG&E rates near $0.44/kWh, and foothill locations face PSPS shutoffs. Residential solar with battery storage provides both savings and reliable backup power.'
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
              q: 'Is residential solar + battery storage worth it in Sacramento with SMUD rates?',
              a: 'SMUD rates average around $0.18/kWh — much lower than PG&E. Solar payback is longer, but solar + battery systems provide backup power during outages and lock in energy costs against future rate increases.'
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
              q: 'Is residential solar + battery storage worth it in Elk Grove with SMUD rates?',
              a: 'SMUD rates around $0.18/kWh are lower than PG&E, so financial payback is longer. However, solar with battery storage provides backup power during summer outages and locks in energy costs long-term.'
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
              q: 'Is residential solar + battery storage worth it in Rancho Cordova with SMUD rates?',
              a: 'SMUD rates average $0.18/kWh, lower than PG&E. Residential solar + battery storage offers longer payback but provides backup power and shields you from future rate increases, especially valuable in hot summer months.'
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
              q: 'Is residential solar + battery storage worth it in Citrus Heights with SMUD rates?',
              a: 'SMUD rates around $0.18/kWh mean longer financial payback compared to PG&E areas. However, solar with battery storage provides backup power during outages and protects against future rate increases.'
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
              q: 'Is residential solar + battery storage worth it in Folsom with PG&E rates?',
              a: 'Yes. Unlike most of Sacramento County, Folsom residents pay PG&E rates around $0.44/kWh. Residential solar with battery storage can deliver strong savings and backup power during PSPS events.'
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
      countyContext: 'El Dorado County spans from the Sierra foothills into higher mountain elevations. Lower-elevation areas (El Dorado Hills, Cameron Park) have strong solar potential similar to valley floor. Higher elevations (Placerville, Shingle Springs) require snow-load considerations and may see more tree shading. High PG&E rates and frequent PSPS shutoffs make solar with battery storage attractive for backup power and savings.'
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
              q: 'Is residential solar + battery storage worth it in El Dorado Hills with PG&E rates?',
              a: 'Absolutely. El Dorado Hills residents pay PG&E rates around $0.44/kWh on higher-than-average bills due to large homes. Residential solar with battery storage delivers strong savings and backup power during PSPS events.'
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
              q: 'Is residential solar + battery storage worth it in Cameron Park with PG&E rates?',
              a: 'Yes. Cameron Park residents pay PG&E rates around $0.44/kWh and face frequent PSPS shutoffs during fire season. Residential solar with battery storage provides both savings and reliable backup power.'
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
              q: 'Is residential solar + battery storage worth it in Shingle Springs with PG&E rates?',
              a: 'Yes. Shingle Springs residents pay PG&E rates near $0.44/kWh and face PSPS shutoffs in foothill fire zones. Residential solar with battery storage is ideal for backup power and long-term savings.'
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
              q: 'Is residential solar + battery storage worth it in Placerville with PG&E rates?',
              a: 'Yes. Placerville residents pay PG&E rates around $0.44/kWh and face PSPS shutoffs during fire season. Residential solar with battery storage provides both savings and backup power during winter storms and summer shutoffs.'
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
      countyContext: 'Nevada County spans from the mid-elevation foothills (Grass Valley, Nevada City) to the high Sierra (Truckee). Foothill areas face frequent PSPS shutoffs during fire season and benefit from solar with battery storage for backup power. Truckee requires specialized snow-load engineering and sees reduced winter production due to snow cover, but strong summer production and high heating loads still make solar viable.'
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
              q: 'Is residential solar + battery storage worth it in Grass Valley with PG&E rates?',
              a: 'Absolutely. Grass Valley residents pay PG&E rates around $0.44/kWh and face frequent PSPS shutoffs during fire season. Residential solar with battery storage provides both savings and critical backup power.'
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
              q: 'Is residential solar + battery storage worth it in Nevada City with PG&E rates?',
              a: 'Yes. Nevada City residents pay PG&E rates near $0.44/kWh and experience frequent PSPS shutoffs. Residential solar with battery storage is ideal for backup power during shutoffs and long-term energy savings.'
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
              q: 'Is residential solar + battery storage worth it in Truckee with PG&E rates?',
              a: 'Yes. Truckee residents pay PG&E rates around $0.44/kWh with high heating loads. Residential solar with battery storage provides backup power during winter storms and PSPS events, though winter production is reduced by snow cover.'
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
              q: 'Is residential solar + battery storage worth it in Davis with PG&E rates?',
              a: 'Yes. Davis residents pay PG&E rates around $0.44/kWh. Residential solar with battery storage delivers strong savings and aligns with the city\'s progressive environmental values.'
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
              q: 'Is residential solar + battery storage worth it in Woodland with PG&E rates?',
              a: 'Yes. Woodland residents pay PG&E rates around $0.44/kWh. Residential solar with battery storage provides strong savings and backup power during summer heat waves and outages.'
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
              q: 'Is residential solar + battery storage worth it in West Sacramento with PG&E rates?',
              a: 'Yes. West Sacramento residents pay PG&E rates around $0.44/kWh. Residential solar with battery storage delivers strong savings and backup power during summer peak demand periods.'
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
              q: 'Is residential solar + battery storage worth it in Fairfield with PG&E rates?',
              a: 'Yes. Fairfield residents pay PG&E rates around $0.44/kWh with high summer cooling demand. Residential solar with battery storage delivers strong savings and backup power during peak demand periods.'
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
              q: 'Is residential solar + battery storage worth it in Vacaville with PG&E rates?',
              a: 'Yes. Vacaville residents pay PG&E rates around $0.44/kWh. Residential solar with battery storage provides strong savings and backup power during summer heat waves.'
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
              q: 'Is residential solar + battery storage worth it in Vallejo with PG&E rates?',
              a: 'Yes. Vallejo residents pay PG&E rates around $0.44/kWh. Residential solar with battery storage provides strong savings even with moderate cooling demand, plus backup power during outages.'
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
              q: 'Is residential solar + battery storage worth it in Benicia with PG&E rates?',
              a: 'Yes. Benicia residents pay PG&E rates around $0.44/kWh. Residential solar with battery storage delivers strong savings and backup power, even with moderate cooling demand from the bay location.'
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
              q: 'Is residential solar + battery storage worth it in Oakland with PG&E rates?',
              a: 'Yes. Oakland residents pay PG&E rates around $0.44/kWh. Residential solar with battery storage delivers strong savings and provides backup power during outages and PSPS events.'
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
              q: 'Is residential solar + battery storage worth it in Fremont with PG&E rates?',
              a: 'Yes. Fremont residents pay PG&E rates around $0.44/kWh. Residential solar with battery storage provides strong savings and backup power, especially valuable for inland areas with high summer cooling demand.'
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
              q: 'Is residential solar + battery storage worth it in Hayward with PG&E rates?',
              a: 'Yes. Hayward residents pay PG&E rates around $0.44/kWh. Residential solar with battery storage delivers strong savings and backup power during outages.'
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
              q: 'Is residential solar + battery storage worth it in Berkeley with PG&E rates?',
              a: 'Yes. Berkeley residents pay PG&E rates around $0.44/kWh. Residential solar with battery storage provides savings and aligns with Berkeley\'s strong environmental values, plus backup power during outages.'
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
              q: 'Is residential solar + battery storage worth it in San Leandro with PG&E rates?',
              a: 'Yes. San Leandro residents pay PG&E rates around $0.44/kWh. Residential solar with battery storage delivers strong savings and backup power during outages.'
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
              q: 'Is residential solar + battery storage worth it in Livermore with PG&E rates?',
              a: 'Absolutely. Livermore residents pay PG&E rates around $0.44/kWh with high summer cooling demand. Residential solar with battery storage delivers strong savings and backup power during heat waves.'
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
              q: 'Is residential solar + battery storage worth it in Pleasanton with PG&E rates?',
              a: 'Absolutely. Pleasanton residents pay PG&E rates around $0.44/kWh on higher-than-average bills. Residential solar with battery storage delivers strong savings and backup power during summer heat waves.'
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
              q: 'Is residential solar + battery storage worth it in Dublin with PG&E rates?',
              a: 'Yes. Dublin residents pay PG&E rates around $0.44/kWh with high summer cooling demand. Residential solar with battery storage provides strong savings and backup power.'
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
              q: 'Is residential solar + battery storage worth it in Concord with PG&E rates?',
              a: 'Yes. Concord residents pay PG&E rates around $0.44/kWh with high summer cooling demand. Residential solar with battery storage delivers strong savings and backup power during heat waves.'
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
              q: 'Is residential solar + battery storage worth it in Richmond with PG&E rates?',
              a: 'Yes. Richmond residents pay PG&E rates around $0.44/kWh. Residential solar with battery storage provides savings and backup power during outages.'
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
              q: 'Is residential solar + battery storage worth it in Antioch with PG&E rates?',
              a: 'Absolutely. Antioch residents pay PG&E rates around $0.44/kWh with very high summer cooling demand due to extreme heat. Residential solar with battery storage delivers strong savings and critical backup power during heat waves.'
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
              q: 'Is residential solar + battery storage worth it in Walnut Creek with PG&E rates?',
              a: 'Absolutely. Walnut Creek residents pay PG&E rates around $0.44/kWh on higher-than-average bills. Residential solar with battery storage delivers strong savings and backup power during summer heat waves.'
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
              q: 'Is residential solar + battery storage worth it in San Ramon with PG&E rates?',
              a: 'Absolutely. San Ramon residents pay PG&E rates around $0.44/kWh on high bills due to large homes and AC use. Residential solar with battery storage delivers strong savings and backup power.'
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
              q: 'Is residential solar + battery storage worth it in Brentwood with PG&E rates?',
              a: 'Absolutely. Brentwood residents pay PG&E rates around $0.44/kWh with very high summer cooling costs. Residential solar with battery storage delivers strong savings and backup power during extreme heat events.'
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
              q: 'Is residential solar + battery storage worth it in Pittsburg with PG&E rates?',
              a: 'Yes. Pittsburg residents pay PG&E rates around $0.44/kWh with high summer cooling demand. Residential solar with battery storage delivers strong savings and backup power during heat waves.'
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
              q: 'Is residential solar + battery storage worth it in Danville with PG&E rates?',
              a: 'Absolutely. Danville residents pay PG&E rates around $0.44/kWh on high bills from large homes and pools. Residential solar with battery storage delivers strong savings and backup power during summer heat and PSPS events.'
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
              q: 'Is residential solar + battery storage worth it in San Jose with PG&E rates?',
              a: 'Yes. San Jose residents pay PG&E rates around $0.44/kWh with high summer cooling demand. Residential solar with battery storage delivers strong savings and backup power during heat waves and outages.'
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
              q: 'Is residential solar + battery storage worth it in Sunnyvale with PG&E rates?',
              a: 'Yes. Sunnyvale residents pay PG&E rates around $0.44/kWh. Residential solar with battery storage provides strong savings and backup power during outages.'
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
              q: 'Is residential solar + battery storage worth it in Santa Clara with Silicon Valley Power rates?',
              a: 'Silicon Valley Power rates average $0.16-0.18/kWh, much lower than PG&E. Solar payback is longer, but solar + battery systems provide backup power during outages and lock in energy costs against future rate increases.'
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
              q: 'Is residential solar + battery storage worth it in Mountain View with PG&E rates?',
              a: 'Yes. Mountain View residents pay PG&E rates around $0.44/kWh. Residential solar with battery storage delivers strong savings and backup power during outages.'
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
              q: 'Is residential solar + battery storage worth it in Milpitas with PG&E rates?',
              a: 'Yes. Milpitas residents pay PG&E rates around $0.44/kWh. Residential solar with battery storage provides strong savings and backup power during summer heat waves.'
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
              q: 'Is residential solar + battery storage worth it in Palo Alto with PG&E rates?',
              a: 'Yes. Palo Alto residents pay PG&E rates around $0.44/kWh. Residential solar with battery storage delivers savings and aligns with the city\'s progressive environmental values, plus backup power during outages.'
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
              q: 'Is residential solar + battery storage worth it in Gilroy with PG&E rates?',
              a: 'Absolutely. Gilroy residents pay PG&E rates around $0.44/kWh with very high summer cooling demand due to extreme heat. Residential solar with battery storage delivers strong savings and backup power during heat waves.'
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
              q: 'Is residential solar + battery storage worth it in Morgan Hill with PG&E rates?',
              a: 'Yes. Morgan Hill residents pay PG&E rates around $0.44/kWh with high summer cooling demand. Residential solar with battery storage provides strong savings and backup power during heat waves.'
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
      countyContext: 'Sonoma County spans from the Pacific coast through inland valleys (Santa Rosa, Sonoma Valley) to the Mayacamas Mountains. Inland valleys experience warm summers with excellent solar potential. Coastal areas see marine layer influence. High PG&E rates and frequent PSPS shutoffs during fire season make solar with battery storage especially valuable throughout the county.'
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
              q: 'Is residential solar + battery storage worth it in Santa Rosa with PG&E rates?',
              a: 'Absolutely. Santa Rosa residents pay PG&E rates around $0.44/kWh and face frequent PSPS shutoffs during fire season. Residential solar with battery storage provides both savings and critical backup power.'
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
              q: 'Is residential solar + battery storage worth it in Petaluma with PG&E rates?',
              a: 'Yes. Petaluma residents pay PG&E rates around $0.44/kWh and face PSPS shutoffs during fire season. Residential solar with battery storage delivers savings and backup power during outages.'
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
              q: 'Is residential solar + battery storage worth it in Rohnert Park with PG&E rates?',
              a: 'Yes. Rohnert Park residents pay PG&E rates around $0.44/kWh and face PSPS shutoffs. Residential solar with battery storage provides savings and backup power during outages.'
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
              q: 'Is residential solar + battery storage worth it in Windsor with PG&E rates?',
              a: 'Yes. Windsor residents pay PG&E rates around $0.44/kWh and face PSPS shutoffs during fire season. Residential solar with battery storage delivers savings and backup power.'
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
              q: 'Is residential solar + battery storage worth it in Healdsburg with PG&E rates?',
              a: 'Absolutely. Healdsburg residents pay PG&E rates around $0.44/kWh and face frequent PSPS shutoffs. Residential solar with battery storage provides savings and critical backup power during fire season.'
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
              q: 'Is residential solar + battery storage worth it in Sonoma with PG&E rates?',
              a: 'Yes. Sonoma residents pay PG&E rates around $0.44/kWh and face PSPS shutoffs during fire season. Residential solar with battery storage delivers savings and backup power.'
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
              q: 'Is residential solar + battery storage worth it in San Rafael with PG&E rates?',
              a: 'Yes. San Rafael residents pay PG&E rates around $0.44/kWh. Residential solar with battery storage provides savings and backup power, even with moderate cooling demand from the inland valley location.'
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
              q: 'Is residential solar + battery storage worth it in Novato with PG&E rates?',
              a: 'Yes. Novato residents pay PG&E rates around $0.44/kWh. Residential solar with battery storage delivers savings and backup power, with the inland valley location providing better solar conditions than coastal Marin.'
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
              q: 'Is residential solar + battery storage worth it in Mill Valley with PG&E rates?',
              a: 'Yes. Mill Valley residents pay PG&E rates around $0.44/kWh. Residential solar with battery storage provides savings and energy independence despite marine layer influence, plus backup power during outages.'
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
              q: 'Is residential solar + battery storage worth it in San Anselmo with PG&E rates?',
              a: 'Yes. San Anselmo residents pay PG&E rates around $0.44/kWh. Residential solar with battery storage delivers savings and backup power, though tree shading should be assessed carefully.'
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
              q: 'Is residential solar + battery storage worth it in Redwood City with PG&E rates?',
              a: 'Yes. Redwood City residents pay PG&E rates around $0.44/kWh. Residential solar with battery storage delivers savings and backup power, with better solar conditions than coastal Peninsula areas.'
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
              q: 'Is residential solar + battery storage worth it in San Mateo with PG&E rates?',
              a: 'Yes. San Mateo residents pay PG&E rates around $0.44/kWh. Residential solar with battery storage provides savings and backup power despite marine layer influence.'
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
              q: 'Is residential solar + battery storage worth it in Daly City with PG&E rates?',
              a: 'Yes. Daly City residents pay PG&E rates around $0.44/kWh. Residential solar with battery storage provides savings and energy independence despite frequent marine layer, plus backup power during outages.'
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
              q: 'Is residential solar + battery storage worth it in South San Francisco with PG&E rates?',
              a: 'Yes. South San Francisco residents pay PG&E rates around $0.44/kWh. Residential solar with battery storage delivers savings and backup power despite marine layer influence.'
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
              q: 'Is residential solar + battery storage worth it in Menlo Park with PG&E rates?',
              a: 'Yes. Menlo Park residents pay PG&E rates around $0.44/kWh. Residential solar with battery storage delivers savings and energy independence, with better solar conditions than coastal Peninsula areas.'
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
              q: 'Is residential solar + battery storage worth it in Stockton with PG&E rates?',
              a: 'Absolutely. Stockton residents pay PG&E rates around $0.44/kWh with very high summer cooling costs. Residential solar with battery storage delivers strong savings and backup power during extreme heat events.'
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
              q: 'Is residential solar + battery storage worth it in Tracy with PG&E rates?',
              a: 'Absolutely. Tracy residents pay PG&E rates around $0.44/kWh with extreme summer cooling costs. Residential solar with battery storage delivers strong savings and backup power during heat waves.'
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
              q: 'Is residential solar + battery storage worth it in Manteca with PG&E rates?',
              a: 'Yes. Manteca residents pay PG&E rates around $0.44/kWh with high summer cooling demand. Residential solar with battery storage delivers strong savings and backup power during extreme heat.'
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
              q: 'Is residential solar + battery storage worth it in Lodi with PG&E rates?',
              a: 'Yes. Lodi residents pay PG&E rates around $0.44/kWh with high summer cooling demand. Residential solar with battery storage provides strong savings and backup power during heat waves.'
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
              q: 'Is residential solar + battery storage worth it in Lathrop with PG&E rates?',
              a: 'Yes. Lathrop residents pay PG&E rates around $0.44/kWh with high summer cooling costs. Residential solar with battery storage delivers strong savings and backup power.'
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
              q: 'Is residential solar + battery storage worth it in Modesto with MID rates?',
              a: 'MID rates average $0.18-0.20/kWh, much lower than PG&E. Solar payback is longer, but solar + battery systems provide backup power during summer outages and lock in energy costs against future rate increases, plus energy independence.'
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
              q: 'Is residential solar + battery storage worth it in Turlock with PG&E rates?',
              a: 'Absolutely. Turlock residents pay PG&E rates around $0.44/kWh with very high summer cooling costs. Residential solar with battery storage delivers strong savings and backup power during extreme heat events.'
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
              q: 'Is residential solar + battery storage worth it in Ceres with PG&E rates?',
              a: 'Yes. Ceres residents pay PG&E rates around $0.44/kWh with high summer cooling demand. Residential solar with battery storage delivers strong savings and backup power during heat waves.'
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
              q: 'Is residential solar + battery storage worth it in Oakdale with PG&E rates?',
              a: 'Yes. Oakdale residents pay PG&E rates around $0.44/kWh. Residential solar with battery storage provides strong savings and backup power, especially valuable for rural and ag areas.'
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
              q: 'Is residential solar + battery storage worth it in Riverbank with PG&E rates?',
              a: 'Yes. Riverbank residents pay PG&E rates around $0.44/kWh with high summer cooling costs. Residential solar with battery storage delivers savings and backup power.'
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
              q: 'Is residential solar + battery storage worth it in Fresno with PG&E rates?',
              a: 'Absolutely. Fresno residents pay PG&E rates around $0.44/kWh with extremely high summer cooling costs. Residential solar with battery storage delivers strong savings and critical backup power during extreme heat events.'
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
              q: 'Is residential solar + battery storage worth it in Clovis with PG&E rates?',
              a: 'Absolutely. Clovis residents pay PG&E rates around $0.44/kWh on high bills due to extreme summer cooling. Residential solar with battery storage delivers strong savings and backup power during heat waves.'
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
              q: 'Is residential solar + battery storage worth it in Sanger with PG&E rates?',
              a: 'Yes. Sanger residents pay PG&E rates around $0.44/kWh with very high summer cooling costs. Residential solar with battery storage delivers strong savings and backup power during extreme heat.'
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
              q: 'Is residential solar + battery storage worth it in Reedley with PG&E rates?',
              a: 'Yes. Reedley residents pay PG&E rates around $0.44/kWh. Residential solar with battery storage provides strong savings and backup power, especially valuable for agricultural and rural properties.'
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
      countyContext: 'Merced County sits in the central San Joaquin Valley with flat agricultural terrain ideal for solar. The area experiences extreme summer heat with very high cooling demand, making solar especially valuable for offsetting AC costs. High PG&E rates throughout the county drive strong solar economics. Agricultural and rural areas benefit from solar with battery storage for energy independence and reliability.'
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
              q: 'Is residential solar + battery storage worth it in Merced with PG&E rates?',
              a: 'Absolutely. Merced residents pay PG&E rates around $0.44/kWh with very high summer cooling costs. Residential solar with battery storage delivers strong savings and backup power during extreme heat events.'
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
              q: 'Is residential solar + battery storage worth it in Los Banos with PG&E rates?',
              a: 'Yes. Los Banos residents pay PG&E rates around $0.44/kWh with high summer cooling demand. Residential solar with battery storage provides strong savings and backup power, especially valuable for agricultural properties.'
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
              q: 'Is residential solar + battery storage worth it in Atwater with PG&E rates?',
              a: 'Yes. Atwater residents pay PG&E rates around $0.44/kWh with high summer cooling costs. Residential solar with battery storage delivers savings and backup power during heat waves.'
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
              q: 'Is residential solar + battery storage worth it in Los Angeles with LADWP rates?',
              a: 'LADWP rates average $0.24/kWh, lower than SCE. Solar payback is longer, but solar + battery systems provide backup power during outages, lock in energy costs against future rate increases, and offset high cooling costs in inland LA neighborhoods like the Valley.'
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
              q: 'Is residential solar + battery storage worth it in Long Beach with SCE rates?',
              a: 'Yes. Long Beach residents pay SCE rates around $0.36/kWh. Residential solar with battery storage delivers strong savings and backup power, even with moderate cooling demand from the coastal climate.'
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
              q: 'Is residential solar + battery storage worth it in Glendale with SCE rates?',
              a: 'Absolutely. Glendale residents pay SCE rates around $0.36/kWh with high summer cooling demand. Residential solar with battery storage delivers strong savings and backup power during heat waves.'
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
              q: 'Is residential solar + battery storage worth it in Santa Clarita with SCE rates?',
              a: 'Absolutely. Santa Clarita residents pay SCE rates around $0.36/kWh with very high summer cooling costs. Residential solar with battery storage delivers strong savings and backup power during extreme heat events.'
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
              q: 'Is residential solar + battery storage worth it in Pasadena with PWP rates?',
              a: 'Pasadena Water & Power rates average $0.22/kWh, lower than SCE. Solar payback is longer, but solar + battery systems provide backup power during outages, lock in energy costs, and offset high cooling demand from the foothill location.'
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
              q: 'Is residential solar + battery storage worth it in Pomona with SCE rates?',
              a: 'Yes. Pomona residents pay SCE rates around $0.36/kWh with high summer cooling costs. Residential solar with battery storage delivers strong savings and backup power during heat waves.'
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
              q: 'Is residential solar + battery storage worth it in Torrance with SCE rates?',
              a: 'Yes. Torrance residents pay SCE rates around $0.36/kWh. Residential solar with battery storage provides strong savings and backup power despite moderate cooling demand from the coastal climate.'
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
              q: 'Is residential solar + battery storage worth it in Lancaster with SCE rates?',
              a: 'Absolutely. Lancaster residents pay SCE rates around $0.36/kWh with extreme summer cooling costs from desert heat. Residential solar with battery storage delivers exceptional savings and critical backup power during heat waves.'
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
              q: 'Is residential solar + battery storage worth it in Palmdale with SCE rates?',
              a: 'Absolutely. Palmdale residents pay SCE rates around $0.36/kWh with extreme summer cooling costs. Residential solar with battery storage delivers exceptional savings and backup power during desert heat waves.'
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
              q: 'Is residential solar + battery storage worth it in Downey with SCE rates?',
              a: 'Yes. Downey residents pay SCE rates around $0.36/kWh with moderate summer cooling demand. Residential solar with battery storage delivers strong savings and backup power during outages.'
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
              q: 'Is residential solar + battery storage worth it in West Covina with SCE rates?',
              a: 'Yes. West Covina residents pay SCE rates around $0.36/kWh with high summer cooling costs. Residential solar with battery storage delivers strong savings and backup power during heat waves.'
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
              q: 'Is residential solar + battery storage worth it in El Monte with SCE rates?',
              a: 'Yes. El Monte residents pay SCE rates around $0.36/kWh with moderate to high summer cooling demand. Residential solar with battery storage delivers strong savings and backup power.'
            },
            {
              q: 'How much sun does El Monte get for solar?',
              a: 'El Monte averages around 5.8 peak sun hours per day in Zone 9/10. The valley location provides strong solar production with warm summers and minimal marine layer interference.'
            }
          ]
        }
      },
      {
        city: 'Burbank',
        citySlug: 'burbank',
        utility: 'Burbank Water & Power',
        localData: { ...BURBANK_POWER, avgMonthlyBillEstimate: 170 },
        cityProfile: {
          localNote: 'Burbank is served by Burbank Water & Power, a municipal utility with lower rates than SCE. The city sits in the Verdugo Mountains foothills with warm summers. Solar value comes from backup power, energy independence, and offsetting moderate cooling costs.',
          faq: [
            {
              q: 'Do I need a permit for solar in Burbank?',
              a: 'Yes. Burbank has its own city building department with typical turnaround of 2-3 weeks. Your contractor handles the permit application.'
            },
            {
              q: 'Is residential solar + battery storage worth it in Burbank with BWP rates?',
              a: 'Burbank Water & Power rates average $0.22/kWh, lower than SCE. Solar payback is longer, but solar + battery systems provide backup power during outages, lock in energy costs, and offset moderate cooling demand from the foothill location.'
            },
            {
              q: 'How much sun does Burbank get for solar?',
              a: 'Burbank averages around 5.7 peak sun hours per day in Zone 9/10. The foothill location provides strong solar production with warm summers and minimal marine layer.'
            }
          ]
        }
      },
      {
        city: 'Inglewood',
        citySlug: 'inglewood',
        utility: 'SCE',
        localData: { ...SCE, avgMonthlyBillEstimate: 240, peakSunHoursEstimate: 5.7 },
        cityProfile: {
          localNote: 'Inglewood sits in southwestern Los Angeles County near LAX with moderate marine layer influence. The area receives strong solar production despite coastal proximity, and SCE rates make solar economics favorable.',
          faq: [
            {
              q: 'Do I need a permit for solar in Inglewood?',
              a: 'Yes. Inglewood has its own city building department with typical turnaround of 2-3 weeks. Your installer will manage the permit application process.'
            },
            {
              q: 'Is residential solar + battery storage worth it in Inglewood with SCE rates?',
              a: 'Yes. Inglewood residents pay SCE rates around $0.36/kWh. Residential solar with battery storage provides strong savings and backup power despite moderate cooling demand from the near-coastal location.'
            },
            {
              q: 'How much sun does Inglewood get for solar?',
              a: 'Inglewood averages around 5.7 peak sun hours per day in Zone 8. Marine layer affects morning production, but solar generation remains strong with afternoon clearing.'
            }
          ]
        }
      },
      {
        city: 'Norwalk',
        citySlug: 'norwalk',
        utility: 'SCE',
        localData: { ...SCE, avgMonthlyBillEstimate: 245, peakSunHoursEstimate: 5.8 },
        cityProfile: {
          localNote: 'Norwalk sits in southeastern Los Angeles County with mild inland climate and moderate marine layer influence. The area experiences warm summers with strong solar production potential.',
          faq: [
            {
              q: 'Do I need a permit for solar in Norwalk?',
              a: 'Yes. Norwalk has its own city building department with typical turnaround of 2-3 weeks. Your contractor handles the permit application.'
            },
            {
              q: 'Is residential solar + battery storage worth it in Norwalk with SCE rates?',
              a: 'Yes. Norwalk residents pay SCE rates around $0.36/kWh with moderate summer cooling demand. Residential solar with battery storage delivers strong savings and backup power during outages.'
            },
            {
              q: 'How much sun does Norwalk get for solar?',
              a: 'Norwalk averages around 5.8 peak sun hours per day in Zone 9. The inland location provides strong solar production with warm summers and moderate marine layer.'
            }
          ]
        }
      },
      {
        city: 'Carson',
        citySlug: 'carson',
        utility: 'SCE',
        localData: { ...SCE, avgMonthlyBillEstimate: 245, peakSunHoursEstimate: 5.7 },
        cityProfile: {
          localNote: 'Carson sits in the South Bay area with moderate coastal influence. The area receives strong solar production despite marine layer proximity, and SCE rates make solar economics favorable.',
          faq: [
            {
              q: 'Do I need a permit for solar in Carson?',
              a: 'Yes. Carson has its own city building department with typical turnaround of 2-3 weeks. Your installer will manage the permit application process.'
            },
            {
              q: 'Is residential solar + battery storage worth it in Carson with SCE rates?',
              a: 'Yes. Carson residents pay SCE rates around $0.36/kWh. Residential solar with battery storage provides strong savings and backup power despite moderate cooling demand from the South Bay location.'
            },
            {
              q: 'How much sun does Carson get for solar?',
              a: 'Carson averages around 5.7 peak sun hours per day in Zone 8. Marine layer affects morning production, but solar generation remains strong year-round.'
            }
          ]
        }
      },
      {
        city: 'Whittier',
        citySlug: 'whittier',
        utility: 'SCE',
        localData: { ...SCE, avgMonthlyBillEstimate: 250, peakSunHoursEstimate: 5.8 },
        cityProfile: {
          localNote: 'Whittier sits in the Puente Hills with warm inland climate and hillside terrain. The area experiences moderate to high cooling demand with excellent solar production potential.',
          faq: [
            {
              q: 'Do I need a permit for solar in Whittier?',
              a: 'Yes. Whittier has its own city building department with typical turnaround of 2-3 weeks. Your contractor handles the permit application.'
            },
            {
              q: 'Is residential solar + battery storage worth it in Whittier with SCE rates?',
              a: 'Yes. Whittier residents pay SCE rates around $0.36/kWh with moderate to high summer cooling costs. Residential solar with battery storage delivers strong savings and backup power during heat waves.'
            },
            {
              q: 'How much sun does Whittier get for solar?',
              a: 'Whittier averages around 5.8 peak sun hours per day in Zone 9/10. The hillside location provides strong solar production with warm summers and minimal marine layer.'
            }
          ]
        }
      },
      {
        city: 'Alhambra',
        citySlug: 'alhambra',
        utility: 'SCE',
        localData: { ...SCE, avgMonthlyBillEstimate: 235, peakSunHoursEstimate: 5.7 },
        cityProfile: {
          localNote: 'Alhambra sits in the western San Gabriel Valley with warm inland climate and diverse architecture including historic Craftsman homes. The area experiences hot summers with high cooling demand.',
          faq: [
            {
              q: 'Do I need a permit for solar in Alhambra?',
              a: 'Yes. Alhambra has its own city building department with typical turnaround of 2-3 weeks for residential solar permits. Your installer handles all permit paperwork and inspections.'
            },
            {
              q: 'Is residential solar + battery storage worth it in Alhambra with SCE rates?',
              a: 'Yes. Alhambra residents pay SCE rates around $0.36/kWh with high summer cooling costs from the inland valley climate. Residential solar with battery storage provides strong savings and reliable backup power.'
            },
            {
              q: 'How much sun does Alhambra get for solar?',
              a: 'Alhambra averages around 5.7 peak sun hours per day in Zone 9. The San Gabriel Valley location provides excellent solar production with hot, clear summers and minimal marine layer interference.'
            }
          ]
        }
      },
      {
        city: 'Lakewood',
        citySlug: 'lakewood',
        utility: 'SCE',
        localData: { ...SCE, avgMonthlyBillEstimate: 240, peakSunHoursEstimate: 5.8 },
        cityProfile: {
          localNote: 'Lakewood is a planned community in southeast LA County between Long Beach and Downey. The area experiences moderate coastal influence with warm summers and steady solar production.',
          faq: [
            {
              q: 'Do I need a permit for solar in Lakewood?',
              a: 'Yes. Lakewood has its own city building department. Residential solar permits typically process within 2-3 weeks. Your contractor manages the application and inspection process.'
            },
            {
              q: 'Is residential solar + battery storage worth it in Lakewood with SCE rates?',
              a: 'Yes. Lakewood residents pay SCE rates around $0.36/kWh. Solar + battery storage systems deliver strong savings, backup power during outages, and protection from future SCE rate increases.'
            },
            {
              q: 'How much sun does Lakewood get for solar?',
              a: 'Lakewood averages around 5.8 peak sun hours per day in Zone 8/9. The location between the coast and inland valleys provides consistent solar production with warm, sunny conditions most of the year.'
            }
          ]
        }
      },
      {
        city: 'Bellflower',
        citySlug: 'bellflower',
        utility: 'SCE',
        localData: { ...SCE, avgMonthlyBillEstimate: 235, peakSunHoursEstimate: 5.8 },
        cityProfile: {
          localNote: 'Bellflower sits in the Gateway Cities region with warm inland climate. The area experiences moderate to high cooling demand with excellent solar production year-round.',
          faq: [
            {
              q: 'Do I need a permit for solar in Bellflower?',
              a: 'Yes. Bellflower uses its own city building department with typical turnaround of 2-3 weeks for residential solar. Your installer will submit the permit application and coordinate inspections.'
            },
            {
              q: 'Is residential solar + battery storage worth it in Bellflower with SCE rates?',
              a: 'Yes. Bellflower residents pay SCE rates around $0.36/kWh with moderate to high summer air conditioning costs. Residential solar with battery storage provides strong savings and backup during outages.'
            },
            {
              q: 'How much sun does Bellflower get for solar?',
              a: 'Bellflower averages around 5.8 peak sun hours per day in Zone 9. The inland location provides excellent solar production with hot summers and minimal coastal fog.'
            }
          ]
        }
      },
      {
        city: 'Baldwin Park',
        citySlug: 'baldwin-park',
        utility: 'SCE',
        localData: { ...SCE, avgMonthlyBillEstimate: 240, peakSunHoursEstimate: 5.8 },
        cityProfile: {
          localNote: 'Baldwin Park sits in the eastern San Gabriel Valley with warm inland climate and growing residential neighborhoods. The area experiences hot summers with high cooling demand.',
          faq: [
            {
              q: 'Do I need a permit for solar in Baldwin Park?',
              a: 'Yes. Baldwin Park has its own city building and safety department. Residential solar permits typically take 2-3 weeks to process. Your solar contractor handles all permitting.'
            },
            {
              q: 'Is residential solar + battery storage worth it in Baldwin Park with SCE rates?',
              a: 'Yes. Baldwin Park residents pay SCE rates around $0.36/kWh. The inland valley climate drives high summer cooling costs, making solar with battery storage a strong investment for savings and backup power.'
            },
            {
              q: 'How much sun does Baldwin Park get for solar?',
              a: 'Baldwin Park averages around 5.8 peak sun hours per day in Zone 9. The eastern San Gabriel Valley location provides excellent solar production with hot, clear summers.'
            }
          ]
        }
      },
      {
        city: 'Lynwood',
        citySlug: 'lynwood',
        utility: 'SCE',
        localData: { ...SCE, avgMonthlyBillEstimate: 230, peakSunHoursEstimate: 5.7 },
        cityProfile: {
          localNote: 'Lynwood is located in the South Bay region with moderate climate and proximity to major employment centers. The area experiences consistent solar production throughout the year.',
          faq: [
            {
              q: 'Do I need a permit for solar in Lynwood?',
              a: 'Yes. Lynwood has its own city building department with typical turnaround of 2-3 weeks for residential solar permits. Your installer manages the entire permitting process.'
            },
            {
              q: 'Is residential solar + battery storage worth it in Lynwood with SCE rates?',
              a: 'Yes. Lynwood residents pay SCE rates around $0.36/kWh. Residential solar with battery storage delivers strong savings and reliable backup power during grid outages.'
            },
            {
              q: 'How much sun does Lynwood get for solar?',
              a: 'Lynwood averages around 5.7 peak sun hours per day in Zone 8/9. The South Bay location provides strong solar production with moderate climate and minimal extreme weather.'
            }
          ]
        }
      },
      {
        city: 'Redondo Beach',
        citySlug: 'redondo-beach',
        utility: 'SCE',
        localData: { ...SCE, avgMonthlyBillEstimate: 225, peakSunHoursEstimate: 5.6 },
        cityProfile: {
          localNote: 'Redondo Beach sits directly on the Pacific coast with classic marine layer climate and moderate temperatures. Despite coastal fog, the area receives strong solar production and has high property values making solar an attractive investment.',
          faq: [
            {
              q: 'Do I need a permit for solar in Redondo Beach?',
              a: 'Yes. Redondo Beach has its own city building department with typical turnaround of 2-3 weeks for residential solar. Your contractor handles all permit submissions and inspections.'
            },
            {
              q: 'Is residential solar + battery storage worth it in Redondo Beach with SCE rates?',
              a: 'Yes. Redondo Beach residents pay SCE rates around $0.36/kWh. Even with lower cooling demand from the coastal climate, solar with battery storage provides strong savings, backup power, and increases home value in this premium beach market.'
            },
            {
              q: 'How much sun does Redondo Beach get for solar?',
              a: 'Redondo Beach averages around 5.6 peak sun hours per day in Zone 6/7. Marine layer affects morning production, but the coastal climate still supports excellent solar generation year-round with mild temperatures.'
            }
          ]
        }
      },
      {
        city: 'Montebello',
        citySlug: 'montebello',
        utility: 'SCE',
        localData: { ...SCE, avgMonthlyBillEstimate: 235, peakSunHoursEstimate: 5.7 },
        cityProfile: {
          localNote: 'Montebello sits in the eastern Los Angeles area with warm inland climate and established residential neighborhoods. The area experiences moderate to high cooling demand with consistent solar production.',
          faq: [
            {
              q: 'Do I need a permit for solar in Montebello?',
              a: 'Yes. Montebello has its own city building and safety department. Residential solar permits typically take 2-3 weeks. Your installer handles the permit application and coordination.'
            },
            {
              q: 'Is residential solar + battery storage worth it in Montebello with SCE rates?',
              a: 'Yes. Montebello residents pay SCE rates around $0.36/kWh with moderate to high summer air conditioning costs. Residential solar with battery storage provides strong savings and backup power.'
            },
            {
              q: 'How much sun does Montebello get for solar?',
              a: 'Montebello averages around 5.7 peak sun hours per day in Zone 9. The inland location provides excellent solar production with warm summers and minimal marine layer.'
            }
          ]
        }
      },
      {
        city: 'Pico Rivera',
        citySlug: 'pico-rivera',
        utility: 'SCE',
        localData: { ...SCE, avgMonthlyBillEstimate: 240, peakSunHoursEstimate: 5.8 },
        cityProfile: {
          localNote: 'Pico Rivera is located in the San Gabriel Valley with warm inland climate and mixed residential-industrial character. The area experiences hot summers with high cooling demand and excellent solar potential.',
          faq: [
            {
              q: 'Do I need a permit for solar in Pico Rivera?',
              a: 'Yes. Pico Rivera has its own city building department with typical turnaround of 2-3 weeks for residential solar permits. Your contractor manages all permitting and inspections.'
            },
            {
              q: 'Is residential solar + battery storage worth it in Pico Rivera with SCE rates?',
              a: 'Yes. Pico Rivera residents pay SCE rates around $0.36/kWh. The warm inland climate drives high summer cooling costs, making solar with battery storage a strong investment for savings and backup.'
            },
            {
              q: 'How much sun does Pico Rivera get for solar?',
              a: 'Pico Rivera averages around 5.8 peak sun hours per day in Zone 9. The San Gabriel Valley location provides excellent solar production with hot, clear summers.'
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
              q: 'Is residential solar + battery storage worth it in Anaheim with APU rates?',
              a: 'Anaheim Public Utilities rates average $0.22/kWh, lower than SCE. Solar payback is longer, but solar + battery systems provide backup power during outages, lock in energy costs against future rate increases, and offset moderate cooling demand.'
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
              q: 'Is residential solar + battery storage worth it in Santa Ana with SCE rates?',
              a: 'Yes. Santa Ana residents pay SCE rates around $0.36/kWh with moderate cooling demand. Residential solar with battery storage delivers strong savings and backup power during outages.'
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
              q: 'Is residential solar + battery storage worth it in Irvine with SCE rates?',
              a: 'Yes. Irvine residents pay SCE rates around $0.36/kWh with moderate cooling demand from large homes. Residential solar with battery storage delivers strong savings and backup power during outages.'
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
              q: 'Is residential solar + battery storage worth it in Huntington Beach with SCE rates?',
              a: 'Yes. Huntington Beach residents pay SCE rates around $0.36/kWh. Residential solar with battery storage provides strong savings and backup power despite moderate cooling demand from the coastal climate.'
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
              q: 'Is residential solar + battery storage worth it in Garden Grove with SCE rates?',
              a: 'Yes. Garden Grove residents pay SCE rates around $0.36/kWh with moderate cooling demand. Residential solar with battery storage delivers strong savings and backup power during outages.'
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
              q: 'Is residential solar + battery storage worth it in Fullerton with SCE rates?',
              a: 'Yes. Fullerton residents pay SCE rates around $0.36/kWh with moderate summer cooling costs. Residential solar with battery storage delivers strong savings and backup power during heat waves.'
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
              q: 'Is residential solar + battery storage worth it in Orange with SCE rates?',
              a: 'Yes. Orange residents pay SCE rates around $0.36/kWh with moderate cooling demand. Residential solar with battery storage delivers strong savings and backup power during outages.'
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
              q: 'Is residential solar + battery storage worth it in Costa Mesa with SCE rates?',
              a: 'Yes. Costa Mesa residents pay SCE rates around $0.36/kWh. Residential solar with battery storage provides strong savings and backup power despite moderate cooling demand from the coastal location.'
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
              q: 'Is residential solar + battery storage worth it in Mission Viejo with SCE rates?',
              a: 'Yes. Mission Viejo residents pay SCE rates around $0.36/kWh with moderate to high cooling demand. Residential solar with battery storage delivers strong savings and backup power during heat waves.'
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
              q: 'Is residential solar + battery storage worth it in Newport Beach with SCE rates?',
              a: 'Yes. Newport Beach residents pay SCE rates around $0.36/kWh. Residential solar with battery storage provides strong savings and energy independence despite moderate cooling demand from the coastal climate.'
            },
            {
              q: 'How much sun does Newport Beach get for solar?',
              a: 'Newport Beach averages around 5.6 peak sun hours per day in Zone 6. Marine layer affects morning production, but solar generation remains strong with afternoon sun and clear skies.'
            }
          ]
        }
      },
      {
        city: 'Fountain Valley',
        citySlug: 'fountain-valley',
        utility: 'SCE',
        localData: { ...SCE, avgMonthlyBillEstimate: 235, peakSunHoursEstimate: 5.7 },
        cityProfile: {
          localNote: 'Fountain Valley sits in central Orange County between the coast and inland areas with moderate climate. The community features established residential neighborhoods and strong solar potential.',
          faq: [
            {
              q: 'Do I need a permit for solar in Fountain Valley?',
              a: 'Yes. Fountain Valley has its own city building department with typical turnaround of 2-3 weeks for residential solar permits. Your installer handles all permitting and inspections.'
            },
            {
              q: 'Is residential solar + battery storage worth it in Fountain Valley with SCE rates?',
              a: 'Yes. Fountain Valley residents pay SCE rates around $0.36/kWh. Residential solar with battery storage provides strong savings, backup power, and protection from future rate increases.'
            },
            {
              q: 'How much sun does Fountain Valley get for solar?',
              a: 'Fountain Valley averages around 5.7 peak sun hours per day in Zone 6/8. The central Orange County location provides excellent solar production with moderate coastal influence and warm summers.'
            }
          ]
        }
      },
      {
        city: 'Buena Park',
        citySlug: 'buena-park',
        utility: 'SCE',
        localData: { ...SCE, avgMonthlyBillEstimate: 240, peakSunHoursEstimate: 5.8 },
        cityProfile: {
          localNote: 'Buena Park sits in northwest Orange County with warm inland climate and diverse residential neighborhoods. The area experiences moderate to high cooling demand with excellent solar production.',
          faq: [
            {
              q: 'Do I need a permit for solar in Buena Park?',
              a: 'Yes. Buena Park has its own city building and safety department. Residential solar permits typically process within 2-3 weeks. Your contractor manages the entire permitting process.'
            },
            {
              q: 'Is residential solar + battery storage worth it in Buena Park with SCE rates?',
              a: 'Yes. Buena Park residents pay SCE rates around $0.36/kWh with moderate to high summer air conditioning costs. Residential solar with battery storage delivers strong savings and reliable backup power.'
            },
            {
              q: 'How much sun does Buena Park get for solar?',
              a: 'Buena Park averages around 5.8 peak sun hours per day in Zone 8/9. The inland location provides excellent solar production with warm, sunny conditions year-round.'
            }
          ]
        }
      },
      {
        city: 'Tustin',
        citySlug: 'tustin',
        utility: 'SCE',
        localData: { ...SCE, avgMonthlyBillEstimate: 240, peakSunHoursEstimate: 5.8 },
        cityProfile: {
          localNote: 'Tustin sits in central Orange County with warm inland climate and established residential areas including historic Old Town and newer developments. The area experiences moderate to high cooling demand.',
          faq: [
            {
              q: 'Do I need a permit for solar in Tustin?',
              a: 'Yes. Tustin has its own city building department with typical turnaround of 2-3 weeks for residential solar. Your installer submits the permit application and coordinates all inspections.'
            },
            {
              q: 'Is residential solar + battery storage worth it in Tustin with SCE rates?',
              a: 'Yes. Tustin residents pay SCE rates around $0.36/kWh. The warm inland climate drives moderate to high summer cooling costs, making solar with battery storage a strong investment.'
            },
            {
              q: 'How much sun does Tustin get for solar?',
              a: 'Tustin averages around 5.8 peak sun hours per day in Zone 8. The central Orange County location provides excellent solar production with warm summers and minimal coastal fog.'
            }
          ]
        }
      },
      {
        city: 'Yorba Linda',
        citySlug: 'yorba-linda',
        utility: 'SCE',
        localData: { ...SCE, avgMonthlyBillEstimate: 245, peakSunHoursEstimate: 5.9 },
        cityProfile: {
          localNote: 'Yorba Linda sits in the northeast Orange County hills with warm inland climate and hillside residential neighborhoods. The elevated terrain provides excellent solar exposure and higher cooling demand.',
          faq: [
            {
              q: 'Do I need a permit for solar in Yorba Linda?',
              a: 'Yes. Yorba Linda has its own city building department with typical turnaround of 2-3 weeks for residential solar permits. Your contractor handles all permitting for you.'
            },
            {
              q: 'Is residential solar + battery storage worth it in Yorba Linda with SCE rates?',
              a: 'Yes. Yorba Linda residents pay SCE rates around $0.36/kWh with high summer cooling costs from the hillside inland location. Residential solar with battery storage provides strong savings and backup power during heat waves.'
            },
            {
              q: 'How much sun does Yorba Linda get for solar?',
              a: 'Yorba Linda averages around 5.9 peak sun hours per day in Zone 9/10. The hillside location and inland climate provide exceptional solar production with hot, clear summers.'
            }
          ]
        }
      },
      {
        city: 'San Clemente',
        citySlug: 'san-clemente',
        utility: 'SCE',
        localData: { ...SCE, avgMonthlyBillEstimate: 230, peakSunHoursEstimate: 5.7 },
        cityProfile: {
          localNote: 'San Clemente sits on the Pacific coast at the southern edge of Orange County with classic beach climate and Spanish colonial architecture. Despite marine layer, the area receives excellent solar production.',
          faq: [
            {
              q: 'Do I need a permit for solar in San Clemente?',
              a: 'Yes. San Clemente has its own city building department. Residential solar permits typically take 2-3 weeks to process. Your installer manages all permit paperwork and inspections.'
            },
            {
              q: 'Is residential solar + battery storage worth it in San Clemente with SCE rates?',
              a: 'Yes. San Clemente residents pay SCE rates around $0.36/kWh. Residential solar with battery storage provides strong savings, backup power, and increases home value in this premium coastal market.'
            },
            {
              q: 'How much sun does San Clemente get for solar?',
              a: 'San Clemente averages around 5.7 peak sun hours per day in Zone 6/7. Marine layer affects mornings, but the coastal climate supports strong solar generation with mild year-round temperatures.'
            }
          ]
        }
      },
      {
        city: 'Laguna Niguel',
        citySlug: 'laguna-niguel',
        utility: 'SCE',
        localData: { ...SCE, avgMonthlyBillEstimate: 235, peakSunHoursEstimate: 5.7 },
        cityProfile: {
          localNote: 'Laguna Niguel sits in the hills of south Orange County between the coast and inland valleys. The area features hillside neighborhoods with excellent solar exposure and moderate coastal influence.',
          faq: [
            {
              q: 'Do I need a permit for solar in Laguna Niguel?',
              a: 'Yes. Laguna Niguel has its own city building department with typical turnaround of 2-3 weeks for residential solar. Your contractor handles the entire permitting process.'
            },
            {
              q: 'Is residential solar + battery storage worth it in Laguna Niguel with SCE rates?',
              a: 'Yes. Laguna Niguel residents pay SCE rates around $0.36/kWh. The hillside location with moderate climate makes solar with battery storage a strong investment for savings and backup power.'
            },
            {
              q: 'How much sun does Laguna Niguel get for solar?',
              a: 'Laguna Niguel averages around 5.7 peak sun hours per day in Zone 6/8. The hillside location provides excellent solar exposure with moderate coastal influence and strong year-round production.'
            }
          ]
        }
      },
      {
        city: 'La Habra',
        citySlug: 'la-habra',
        utility: 'SCE',
        localData: { ...SCE, avgMonthlyBillEstimate: 240, peakSunHoursEstimate: 5.8 },
        cityProfile: {
          localNote: 'La Habra sits on the Orange-LA County border with warm inland climate and established residential neighborhoods. The area experiences moderate to high cooling demand with excellent solar potential.',
          faq: [
            {
              q: 'Do I need a permit for solar in La Habra?',
              a: 'Yes. La Habra has its own city building and safety department. Residential solar permits typically process within 2-3 weeks. Your installer manages all permitting.'
            },
            {
              q: 'Is residential solar + battery storage worth it in La Habra with SCE rates?',
              a: 'Yes. La Habra residents pay SCE rates around $0.36/kWh with moderate to high summer air conditioning costs from the inland climate. Residential solar with battery storage provides strong savings and backup power.'
            },
            {
              q: 'How much sun does La Habra get for solar?',
              a: 'La Habra averages around 5.8 peak sun hours per day in Zone 9. The inland location provides excellent solar production with warm summers and minimal marine layer.'
            }
          ]
        }
      },
      {
        city: 'Westminster',
        citySlug: 'westminster',
        utility: 'SCE',
        localData: { ...SCE, avgMonthlyBillEstimate: 235, peakSunHoursEstimate: 5.7 },
        cityProfile: {
          localNote: 'Westminster sits in central Orange County with moderate climate between the coast and inland areas. The community features diverse residential neighborhoods and consistent solar production.',
          faq: [
            {
              q: 'Do I need a permit for solar in Westminster?',
              a: 'Yes. Westminster has its own city building department with typical turnaround of 2-3 weeks for residential solar permits. Your contractor handles all permit submissions and inspections.'
            },
            {
              q: 'Is residential solar + battery storage worth it in Westminster with SCE rates?',
              a: 'Yes. Westminster residents pay SCE rates around $0.36/kWh. Residential solar with battery storage delivers strong savings, backup power during outages, and protection from future SCE rate increases.'
            },
            {
              q: 'How much sun does Westminster get for solar?',
              a: 'Westminster averages around 5.7 peak sun hours per day in Zone 8. The central Orange County location provides excellent solar production with moderate climate and warm summers.'
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
              q: 'Is residential solar + battery storage worth it in San Diego with SDG&E rates?',
              a: 'Absolutely. San Diego residents pay SDG&E rates around $0.47/kWh — among the highest in the nation. Residential solar with battery storage delivers exceptional savings and backup power, with some of the fastest payback periods in California.'
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
              q: 'Is residential solar + battery storage worth it in Chula Vista with SDG&E rates?',
              a: 'Absolutely. Chula Vista residents pay SDG&E rates around $0.47/kWh. Residential solar with battery storage delivers exceptional savings and backup power, with among the fastest payback periods in California.'
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
              q: 'Is residential solar + battery storage worth it in Oceanside with SDG&E rates?',
              a: 'Absolutely. Oceanside residents pay SDG&E rates around $0.47/kWh — among the highest in the nation. Residential solar with battery storage delivers exceptional savings despite moderate cooling demand from the coastal climate.'
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
              q: 'Is residential solar + battery storage worth it in Escondido with SDG&E rates?',
              a: 'Absolutely. Escondido residents pay SDG&E rates around $0.47/kWh with high summer cooling costs. Residential solar with battery storage delivers exceptional savings and critical backup power during heat waves.'
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
              q: 'Is residential solar + battery storage worth it in Carlsbad with SDG&E rates?',
              a: 'Absolutely. Carlsbad residents pay SDG&E rates around $0.47/kWh. Residential solar with battery storage delivers exceptional savings and backup power despite moderate cooling demand from the coastal climate.'
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
              q: 'Is residential solar + battery storage worth it in El Cajon with SDG&E rates?',
              a: 'Absolutely. El Cajon residents pay SDG&E rates around $0.47/kWh with high summer cooling costs from inland heat. Residential solar with battery storage delivers exceptional savings and backup power during heat waves.'
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
              q: 'Is residential solar + battery storage worth it in Vista with SDG&E rates?',
              a: 'Absolutely. Vista residents pay SDG&E rates around $0.47/kWh. Residential solar with battery storage delivers exceptional savings and backup power, with among the fastest payback periods in California.'
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
              q: 'Is residential solar + battery storage worth it in San Marcos with SDG&E rates?',
              a: 'Absolutely. San Marcos residents pay SDG&E rates around $0.47/kWh with moderate to high summer cooling costs. Residential solar with battery storage delivers exceptional savings and backup power during heat waves.'
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
              q: 'Is residential solar + battery storage worth it in Encinitas with SDG&E rates?',
              a: 'Absolutely. Encinitas residents pay SDG&E rates around $0.47/kWh — among the highest in the nation. Residential solar with battery storage delivers exceptional savings despite moderate cooling demand from the coastal climate.'
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
              q: 'Is residential solar + battery storage worth it in La Mesa with SDG&E rates?',
              a: 'Absolutely. La Mesa residents pay SDG&E rates around $0.47/kWh with moderate to high summer cooling costs. Residential solar with battery storage delivers exceptional savings and backup power during heat waves.'
            },
            {
              q: 'How much sun does La Mesa get for solar?',
              a: 'La Mesa averages around 6.0 peak sun hours per day in Zone 10. The inland valley location provides excellent solar production with warm summers and no marine layer interference.'
            }
          ]
        }
      },
      {
        city: 'Poway',
        citySlug: 'poway',
        utility: 'SDG&E',
        localData: { ...SDGE, avgMonthlyBillEstimate: 285, peakSunHoursEstimate: 6.0 },
        cityProfile: {
          localNote: 'Poway sits in an inland valley north of San Diego with hot summers and minimal marine layer. The area experiences high cooling demand with excellent solar production, and SDG&E rates make solar economics exceptionally strong.',
          faq: [
            {
              q: 'Do I need a permit for solar in Poway?',
              a: 'Yes. Poway has its own city building department with typical turnaround of 2-3 weeks. Your contractor handles the permit application.'
            },
            {
              q: 'Is residential solar + battery storage worth it in Poway with SDG&E rates?',
              a: 'Absolutely. Poway residents pay SDG&E rates around $0.47/kWh with high summer cooling costs from inland heat. Residential solar with battery storage delivers exceptional savings and backup power during heat waves.'
            },
            {
              q: 'How much sun does Poway get for solar?',
              a: 'Poway averages around 6.0 peak sun hours per day in Zone 10. The inland valley location provides excellent solar production with hot summers and no marine layer.'
            }
          ]
        }
      },
      {
        city: 'Santee',
        citySlug: 'santee',
        utility: 'SDG&E',
        localData: { ...SDGE, avgMonthlyBillEstimate: 280, peakSunHoursEstimate: 6.1 },
        cityProfile: {
          localNote: 'Santee sits in an inland valley east of San Diego with hot summers and minimal marine layer. The area experiences high cooling demand with excellent solar production, and SDG&E rates make solar economics exceptionally strong.',
          faq: [
            {
              q: 'Do I need a permit for solar in Santee?',
              a: 'Yes. Santee has its own city building department with typical turnaround of 2-3 weeks. Your installer will manage the permit application process.'
            },
            {
              q: 'Is residential solar + battery storage worth it in Santee with SDG&E rates?',
              a: 'Absolutely. Santee residents pay SDG&E rates around $0.47/kWh with high summer cooling costs from inland heat. Residential solar with battery storage delivers exceptional savings and backup power during heat waves.'
            },
            {
              q: 'How much sun does Santee get for solar?',
              a: 'Santee averages around 6.1 peak sun hours per day in Zone 10. The inland valley location provides excellent solar production with hot, clear summers.'
            }
          ]
        }
      },
      {
        city: 'National City',
        citySlug: 'national-city',
        utility: 'SDG&E',
        localData: { ...SDGE, avgMonthlyBillEstimate: 270, peakSunHoursEstimate: 5.8 },
        cityProfile: {
          localNote: 'National City sits just south of San Diego with moderate coastal influence and marine layer. The area receives strong solar production, and SDG&E rates make solar economics exceptionally favorable.',
          faq: [
            {
              q: 'Do I need a permit for solar in National City?',
              a: 'Yes. National City has its own city building department with typical turnaround of 2-3 weeks. Your contractor handles the permit application.'
            },
            {
              q: 'Is residential solar + battery storage worth it in National City with SDG&E rates?',
              a: 'Absolutely. National City residents pay SDG&E rates around $0.47/kWh — among the highest in the nation. Residential solar with battery storage delivers exceptional savings despite moderate cooling demand from the near-coastal location.'
            },
            {
              q: 'How much sun does National City get for solar?',
              a: 'National City averages around 5.8 peak sun hours per day in Zone 7. Marine layer affects morning production, but solar generation remains strong with afternoon clearing.'
            }
          ]
        }
      },
      {
        city: 'Coronado',
        citySlug: 'coronado',
        utility: 'SDG&E',
        localData: { ...SDGE, avgMonthlyBillEstimate: 270, peakSunHoursEstimate: 5.7 },
        cityProfile: {
          localNote: 'Coronado sits on a peninsula in San Diego Bay with marine layer influence and mild coastal climate. Despite morning fog, SDG&E rates make solar economics exceptionally favorable for this affluent island community.',
          faq: [
            {
              q: 'Do I need a permit for solar in Coronado?',
              a: 'Yes. Coronado has its own city building department with typical turnaround of 2-3 weeks. Your installer will manage the permit application process.'
            },
            {
              q: 'Is residential solar + battery storage worth it in Coronado with SDG&E rates?',
              a: 'Absolutely. Coronado residents pay SDG&E rates around $0.47/kWh. Residential solar with battery storage provides exceptional savings and energy independence despite moderate cooling demand from the coastal island location.'
            },
            {
              q: 'How much sun does Coronado get for solar?',
              a: 'Coronado averages around 5.7 peak sun hours per day in Zone 7. Marine layer affects morning production on the island peninsula, but solar generation remains strong with afternoon sun.'
            }
          ]
        }
      },
      {
        city: 'Imperial Beach',
        citySlug: 'imperial-beach',
        utility: 'SDG&E',
        localData: { ...SDGE, avgMonthlyBillEstimate: 270, peakSunHoursEstimate: 5.7 },
        cityProfile: {
          localNote: 'Imperial Beach sits on the Pacific coast at the southernmost point of San Diego County with marine layer influence. Despite coastal fog, SDG&E rates make solar economics exceptionally favorable.',
          faq: [
            {
              q: 'Do I need a permit for solar in Imperial Beach?',
              a: 'Yes. Imperial Beach has its own city building department with typical turnaround of 2-3 weeks. Your contractor handles the permit application.'
            },
            {
              q: 'Is residential solar + battery storage worth it in Imperial Beach with SDG&E rates?',
              a: 'Absolutely. Imperial Beach residents pay SDG&E rates around $0.47/kWh — among the highest in the nation. Residential solar with battery storage delivers exceptional savings despite moderate cooling demand from the coastal location.'
            },
            {
              q: 'How much sun does Imperial Beach get for solar?',
              a: 'Imperial Beach averages around 5.7 peak sun hours per day in Zone 7. Marine layer affects morning production at the southernmost beach, but solar generation remains strong with afternoon clearing.'
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
              q: 'Is residential solar + battery storage worth it in Riverside with RPU rates?',
              a: 'Riverside Public Utilities rates average $0.20/kWh, lower than SCE. Solar payback is longer, but solar + battery systems provide backup power during outages, lock in energy costs, and offset very high summer cooling demand from Inland Empire heat.'
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
              q: 'Is residential solar + battery storage worth it in Moreno Valley with SCE rates?',
              a: 'Absolutely. Moreno Valley residents pay SCE rates around $0.36/kWh with very high summer cooling costs from Inland Empire heat. Residential solar with battery storage delivers strong savings and critical backup power during heat waves.'
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
              q: 'Is residential solar + battery storage worth it in Corona with SCE rates?',
              a: 'Yes. Corona residents pay SCE rates around $0.36/kWh with high summer cooling costs. Residential solar with battery storage delivers strong savings and backup power during Inland Empire heat waves.'
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
              q: 'Is residential solar + battery storage worth it in Temecula with SCE rates?',
              a: 'Yes. Temecula residents pay SCE rates around $0.36/kWh with high summer cooling demand. Residential solar with battery storage delivers strong savings and backup power during heat waves.'
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
              q: 'Is residential solar + battery storage worth it in Murrieta with SCE rates?',
              a: 'Yes. Murrieta residents pay SCE rates around $0.36/kWh with high summer cooling costs. Residential solar with battery storage delivers strong savings and backup power during heat waves.'
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
              q: 'Is residential solar + battery storage worth it in Hemet with SCE rates?',
              a: 'Yes. Hemet residents pay SCE rates around $0.36/kWh with high summer cooling costs. Residential solar with battery storage delivers strong savings and backup power during extreme heat events.'
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
              q: 'Is residential solar + battery storage worth it in Indio with SCE rates?',
              a: 'Absolutely. Indio residents pay SCE rates around $0.36/kWh with extreme summer cooling costs from desert heat. Residential solar with battery storage delivers exceptional savings and critical backup power during heat waves.'
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
              q: 'Is residential solar + battery storage worth it in Palm Springs with SCE rates?',
              a: 'Absolutely. Palm Springs residents pay SCE rates around $0.36/kWh with extreme summer cooling costs (110F+ common). Residential solar with battery storage delivers exceptional savings and critical backup power during desert heat waves.'
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
              q: 'Is residential solar + battery storage worth it in Menifee with SCE rates?',
              a: 'Yes. Menifee residents pay SCE rates around $0.36/kWh with high summer cooling costs. Residential solar with battery storage delivers strong savings and backup power during heat waves.'
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
              q: 'Is residential solar + battery storage worth it in Perris with SCE rates?',
              a: 'Yes. Perris residents pay SCE rates around $0.36/kWh with high summer cooling costs from Inland Empire heat. Residential solar with battery storage delivers strong savings and backup power during heat waves.'
            },
            {
              q: 'How much sun does Perris get for solar?',
              a: 'Perris averages around 6.1 peak sun hours per day in Zone 10. The Inland Empire location provides excellent solar production with hot summers and no marine layer.'
            }
          ]
        }
      },
      {
        city: 'Lake Elsinore',
        citySlug: 'lake-elsinore',
        utility: 'SCE',
        localData: { ...SCE, avgMonthlyBillEstimate: 255, peakSunHoursEstimate: 6.1 },
        cityProfile: {
          localNote: 'Lake Elsinore sits around its namesake lake in southwestern Riverside County with hot summers. The area experiences high cooling demand with excellent solar production, and SCE rates make solar economics strong.',
          faq: [
            {
              q: 'Do I need a permit for solar in Lake Elsinore?',
              a: 'Yes. Lake Elsinore has its own city building department with typical turnaround of 2-3 weeks. Your installer will manage the permit application process.'
            },
            {
              q: 'Is residential solar + battery storage worth it in Lake Elsinore with SCE rates?',
              a: 'Yes. Lake Elsinore residents pay SCE rates around $0.36/kWh with high summer cooling costs. Residential solar with battery storage delivers strong savings and backup power during inland heat waves.'
            },
            {
              q: 'How much sun does Lake Elsinore get for solar?',
              a: 'Lake Elsinore averages around 6.1 peak sun hours per day in Zone 10. The inland valley location provides excellent solar production with hot summers and clear skies.'
            }
          ]
        }
      },
      {
        city: 'Wildomar',
        citySlug: 'wildomar',
        utility: 'SCE',
        localData: { ...SCE, avgMonthlyBillEstimate: 250, peakSunHoursEstimate: 6.0 },
        cityProfile: {
          localNote: 'Wildomar sits in southwestern Riverside County with warm summers and growing residential development. The area experiences moderate to high cooling demand with excellent solar production.',
          faq: [
            {
              q: 'Do I need a permit for solar in Wildomar?',
              a: 'Yes. Wildomar has its own city building department with typical turnaround of 2-3 weeks. Your contractor handles the permit application.'
            },
            {
              q: 'Is residential solar + battery storage worth it in Wildomar with SCE rates?',
              a: 'Yes. Wildomar residents pay SCE rates around $0.36/kWh with moderate to high summer cooling costs. Residential solar with battery storage delivers strong savings and backup power during heat waves.'
            },
            {
              q: 'How much sun does Wildomar get for solar?',
              a: 'Wildomar averages around 6.0 peak sun hours per day in Zone 10. The inland location provides excellent solar production with warm summers and clear skies.'
            }
          ]
        }
      },
      {
        city: 'Coachella',
        citySlug: 'coachella',
        utility: 'SCE',
        localData: { ...SCE, avgMonthlyBillEstimate: 285, peakSunHoursEstimate: 6.5 },
        cityProfile: {
          localNote: 'Coachella sits in the Coachella Valley desert with extreme summer heat. The area has exceptional solar potential with very high cooling demand that solar can effectively offset.',
          faq: [
            {
              q: 'Do I need a permit for solar in Coachella?',
              a: 'Yes. Coachella has its own city building department with typical turnaround of 2-3 weeks. Desert installations require systems designed for extreme heat. Your installer handles the application.'
            },
            {
              q: 'Is residential solar + battery storage worth it in Coachella with SCE rates?',
              a: 'Absolutely. Coachella residents pay SCE rates around $0.36/kWh with extreme summer cooling costs from desert heat. Residential solar with battery storage delivers exceptional savings and critical backup power during heat waves.'
            },
            {
              q: 'How much sun does Coachella get for solar?',
              a: 'Coachella averages around 6.5 peak sun hours per day in Zone 15. The Coachella Valley desert location provides exceptional solar production with very hot, clear summers year-round.'
            }
          ]
        }
      },
      {
        city: 'Cathedral City',
        citySlug: 'cathedral-city',
        utility: 'SCE',
        localData: { ...SCE, avgMonthlyBillEstimate: 290, peakSunHoursEstimate: 6.5 },
        cityProfile: {
          localNote: 'Cathedral City sits in the Coachella Valley desert adjacent to Palm Springs with extreme summer heat. The area has exceptional solar potential with very high cooling demand.',
          faq: [
            {
              q: 'Do I need a permit for solar in Cathedral City?',
              a: 'Yes. Cathedral City has its own city building department with typical turnaround of 2-3 weeks. Desert installations require systems designed for extreme heat. Your contractor handles the application.'
            },
            {
              q: 'Is residential solar + battery storage worth it in Cathedral City with SCE rates?',
              a: 'Absolutely. Cathedral City residents pay SCE rates around $0.36/kWh with extreme summer cooling costs from desert heat. Residential solar with battery storage delivers exceptional savings and backup power.'
            },
            {
              q: 'How much sun does Cathedral City get for solar?',
              a: 'Cathedral City averages around 6.5 peak sun hours per day in Zone 15. The desert location provides exceptional solar production with very hot, clear summers adjacent to Palm Springs.'
            }
          ]
        }
      },
      {
        city: 'Banning',
        citySlug: 'banning',
        utility: 'SCE',
        localData: { ...SCE, avgMonthlyBillEstimate: 250, peakSunHoursEstimate: 6.2 },
        cityProfile: {
          localNote: 'Banning sits at the western entrance to the Coachella Valley with hot summers. The area experiences high cooling demand with excellent solar production, and SCE rates make solar economics strong.',
          faq: [
            {
              q: 'Do I need a permit for solar in Banning?',
              a: 'Yes. Banning has its own city building department with typical turnaround of 2-3 weeks. Your installer will manage the permit application process.'
            },
            {
              q: 'Is residential solar + battery storage worth it in Banning with SCE rates?',
              a: 'Yes. Banning residents pay SCE rates around $0.36/kWh with high summer cooling costs. Residential solar with battery storage delivers strong savings and backup power during inland heat waves.'
            },
            {
              q: 'How much sun does Banning get for solar?',
              a: 'Banning averages around 6.2 peak sun hours per day in Zone 10/14. The pass location at the valley entrance provides excellent solar production with hot summers and clear skies.'
            }
          ]
        }
      },
      {
        city: 'Eastvale',
        citySlug: 'eastvale',
        utility: 'SCE',
        localData: { ...SCE, avgMonthlyBillEstimate: 245, peakSunHoursEstimate: 6.0 },
        cityProfile: {
          localNote: 'Eastvale sits on the Orange-Riverside County border with warm inland climate and rapidly growing residential neighborhoods. The area experiences high summer cooling demand with excellent solar production.',
          faq: [
            {
              q: 'Do I need a permit for solar in Eastvale?',
              a: 'Yes. Eastvale has its own city building department with typical turnaround of 2-3 weeks for residential solar permits. Your installer handles all permitting and inspections.'
            },
            {
              q: 'Is residential solar + battery storage worth it in Eastvale with SCE rates?',
              a: 'Yes. Eastvale residents pay SCE rates around $0.36/kWh with high summer air conditioning costs from the inland climate. Residential solar with battery storage provides strong savings and backup power during heat waves.'
            },
            {
              q: 'How much sun does Eastvale get for solar?',
              a: 'Eastvale averages around 6.0 peak sun hours per day in Zone 10. The inland location provides exceptional solar production with hot, clear summers and minimal coastal influence.'
            }
          ]
        }
      },
      {
        city: 'Jurupa Valley',
        citySlug: 'jurupa-valley',
        utility: 'SCE',
        localData: { ...SCE, avgMonthlyBillEstimate: 245, peakSunHoursEstimate: 6.1 },
        cityProfile: {
          localNote: 'Jurupa Valley sits in western Riverside County along the Santa Ana River with warm inland climate. The area experiences high cooling demand and excellent solar potential year-round.',
          faq: [
            {
              q: 'Do I need a permit for solar in Jurupa Valley?',
              a: 'Yes. Jurupa Valley has its own city building department. Residential solar permits typically process within 2-3 weeks. Your contractor manages the entire permitting process.'
            },
            {
              q: 'Is residential solar + battery storage worth it in Jurupa Valley with SCE rates?',
              a: 'Yes. Jurupa Valley residents pay SCE rates around $0.36/kWh with high summer cooling costs. Residential solar with battery storage delivers strong savings and reliable backup power.'
            },
            {
              q: 'How much sun does Jurupa Valley get for solar?',
              a: 'Jurupa Valley averages around 6.1 peak sun hours per day in Zone 10. The inland valley location provides excellent solar production with hot summers and clear skies.'
            }
          ]
        }
      },
      {
        city: 'La Quinta',
        citySlug: 'la-quinta',
        utility: 'SCE',
        localData: { ...SCE, avgMonthlyBillEstimate: 260, peakSunHoursEstimate: 6.5 },
        cityProfile: {
          localNote: 'La Quinta sits in the Coachella Valley desert with extreme summer heat and exceptional solar production. The resort community experiences very high cooling demand making solar economics especially strong.',
          faq: [
            {
              q: 'Do I need a permit for solar in La Quinta?',
              a: 'Yes. La Quinta has its own city building and safety department with typical turnaround of 2-3 weeks for residential solar. Your installer handles all permitting.'
            },
            {
              q: 'Is residential solar + battery storage worth it in La Quinta with SCE rates?',
              a: 'Absolutely. La Quinta residents pay SCE rates around $0.36/kWh with extreme summer cooling costs from desert heat. Residential solar with battery storage provides exceptional savings and critical backup power during heat waves.'
            },
            {
              q: 'How much sun does La Quinta get for solar?',
              a: 'La Quinta averages around 6.5 peak sun hours per day in Zone 15. The Coachella Valley desert location provides exceptional solar production with year-round clear skies and intense summer sun.'
            }
          ]
        }
      },
      {
        city: 'Rancho Mirage',
        citySlug: 'rancho-mirage',
        utility: 'SCE',
        localData: { ...SCE, avgMonthlyBillEstimate: 260, peakSunHoursEstimate: 6.5 },
        cityProfile: {
          localNote: 'Rancho Mirage sits in the Coachella Valley with luxury resort character and extreme desert climate. The area experiences very high cooling demand and exceptional solar production year-round.',
          faq: [
            {
              q: 'Do I need a permit for solar in Rancho Mirage?',
              a: 'Yes. Rancho Mirage has its own city building department with typical turnaround of 2-3 weeks for residential solar permits. Your contractor manages all permitting and inspections.'
            },
            {
              q: 'Is residential solar + battery storage worth it in Rancho Mirage with SCE rates?',
              a: 'Absolutely. Rancho Mirage residents pay SCE rates around $0.36/kWh with extreme summer air conditioning costs from desert heat. Residential solar with battery storage delivers exceptional savings and backup power.'
            },
            {
              q: 'How much sun does Rancho Mirage get for solar?',
              a: 'Rancho Mirage averages around 6.5 peak sun hours per day in Zone 15. The desert climate provides exceptional solar production with year-round clear skies and intense sun.'
            }
          ]
        }
      },
      {
        city: 'Desert Hot Springs',
        citySlug: 'desert-hot-springs',
        utility: 'SCE',
        localData: { ...SCE, avgMonthlyBillEstimate: 255, peakSunHoursEstimate: 6.5 },
        cityProfile: {
          localNote: 'Desert Hot Springs sits north of Palm Springs in the Coachella Valley with extreme desert climate. The area experiences very high cooling demand and exceptional solar production potential.',
          faq: [
            {
              q: 'Do I need a permit for solar in Desert Hot Springs?',
              a: 'Yes. Desert Hot Springs has its own city building department. Residential solar permits typically take 2-3 weeks. Your installer handles all permit paperwork and inspections.'
            },
            {
              q: 'Is residential solar + battery storage worth it in Desert Hot Springs with SCE rates?',
              a: 'Absolutely. Desert Hot Springs residents pay SCE rates around $0.36/kWh with extreme summer cooling costs. Residential solar with battery storage provides exceptional savings and critical backup power during desert heat waves.'
            },
            {
              q: 'How much sun does Desert Hot Springs get for solar?',
              a: 'Desert Hot Springs averages around 6.5 peak sun hours per day in Zone 15. The desert location provides exceptional solar production with year-round clear skies and intense summer heat.'
            }
          ]
        }
      },
      {
        city: 'Norco',
        citySlug: 'norco',
        utility: 'SCE',
        localData: { ...SCE, avgMonthlyBillEstimate: 245, peakSunHoursEstimate: 6.0 },
        cityProfile: {
          localNote: 'Norco sits in western Riverside County with warm inland climate and equestrian community character. The area experiences high cooling demand with excellent solar production year-round.',
          faq: [
            {
              q: 'Do I need a permit for solar in Norco?',
              a: 'Yes. Norco has its own city building department with typical turnaround of 2-3 weeks for residential solar permits. Your contractor manages the entire permitting process.'
            },
            {
              q: 'Is residential solar + battery storage worth it in Norco with SCE rates?',
              a: 'Yes. Norco residents pay SCE rates around $0.36/kWh with high summer air conditioning costs from the inland climate. Residential solar with battery storage provides strong savings and backup power.'
            },
            {
              q: 'How much sun does Norco get for solar?',
              a: 'Norco averages around 6.0 peak sun hours per day in Zone 10. The inland location provides excellent solar production with hot summers and clear skies.'
            }
          ]
        }
      },
      {
        city: 'Canyon Lake',
        citySlug: 'canyon-lake',
        utility: 'SCE',
        localData: { ...SCE, avgMonthlyBillEstimate: 245, peakSunHoursEstimate: 6.1 },
        cityProfile: {
          localNote: 'Canyon Lake is a gated community surrounding a private lake with warm inland climate. The area experiences high cooling demand and excellent solar production in the inland valley setting.',
          faq: [
            {
              q: 'Do I need a permit for solar in Canyon Lake?',
              a: 'Yes. Canyon Lake has its own city building department. Residential solar permits typically process within 2-3 weeks. Your installer handles all permitting and coordinates with HOA requirements if applicable.'
            },
            {
              q: 'Is residential solar + battery storage worth it in Canyon Lake with SCE rates?',
              a: 'Yes. Canyon Lake residents pay SCE rates around $0.36/kWh with high summer cooling costs. Residential solar with battery storage provides strong savings and reliable backup power.'
            },
            {
              q: 'How much sun does Canyon Lake get for solar?',
              a: 'Canyon Lake averages around 6.1 peak sun hours per day in Zone 10. The inland valley location provides excellent solar production with hot summers and clear skies.'
            }
          ]
        }
      },
      {
        city: 'Calimesa',
        citySlug: 'calimesa',
        utility: 'SCE',
        localData: { ...SCE, avgMonthlyBillEstimate: 250, peakSunHoursEstimate: 6.2 },
        cityProfile: {
          localNote: 'Calimesa sits in the San Gorgonio Pass foothills with warm inland climate and hillside terrain. The area experiences high cooling demand with excellent solar exposure and production.',
          faq: [
            {
              q: 'Do I need a permit for solar in Calimesa?',
              a: 'Yes. Calimesa has its own city building department with typical turnaround of 2-3 weeks for residential solar permits. Your contractor handles all permitting.'
            },
            {
              q: 'Is residential solar + battery storage worth it in Calimesa with SCE rates?',
              a: 'Yes. Calimesa residents pay SCE rates around $0.36/kWh with high summer air conditioning costs from the inland climate. Residential solar with battery storage delivers strong savings and backup power during heat waves.'
            },
            {
              q: 'How much sun does Calimesa get for solar?',
              a: 'Calimesa averages around 6.2 peak sun hours per day in Zone 10/14. The hillside location at the pass entrance provides excellent solar production with hot summers and clear skies.'
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
              q: 'Is residential solar + battery storage worth it in San Bernardino with SCE rates?',
              a: 'Absolutely. San Bernardino residents pay SCE rates around $0.36/kWh with very high summer cooling costs from Inland Empire heat. Residential solar with battery storage delivers strong savings and critical backup power during heat waves.'
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
              q: 'Is residential solar + battery storage worth it in Fontana with SCE rates?',
              a: 'Yes. Fontana residents pay SCE rates around $0.36/kWh with high summer cooling costs from Inland Empire heat. Residential solar with battery storage delivers strong savings and backup power during heat waves.'
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
              q: 'Is residential solar + battery storage worth it in Rancho Cucamonga with SCE rates?',
              a: 'Yes. Rancho Cucamonga residents pay SCE rates around $0.36/kWh with high summer cooling costs. Residential solar with battery storage delivers strong savings and backup power during Inland Empire heat waves.'
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
              q: 'Is residential solar + battery storage worth it in Ontario with SCE rates?',
              a: 'Yes. Ontario residents pay SCE rates around $0.36/kWh with high summer cooling costs from Inland Empire heat. Residential solar with battery storage delivers strong savings and backup power during heat waves.'
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
              q: 'Is residential solar + battery storage worth it in Victorville with SCE rates?',
              a: 'Absolutely. Victorville residents pay SCE rates around $0.36/kWh with very high summer cooling costs from desert heat. Residential solar with battery storage delivers exceptional savings and critical backup power during extreme heat.'
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
              q: 'Is residential solar + battery storage worth it in Rialto with SCE rates?',
              a: 'Yes. Rialto residents pay SCE rates around $0.36/kWh with high summer cooling costs from Inland Empire heat. Residential solar with battery storage delivers strong savings and backup power during heat waves.'
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
              q: 'Is residential solar + battery storage worth it in Hesperia with SCE rates?',
              a: 'Absolutely. Hesperia residents pay SCE rates around $0.36/kWh with very high summer cooling costs from desert heat. Residential solar with battery storage delivers exceptional savings and backup power during extreme heat events.'
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
              q: 'Is residential solar + battery storage worth it in Chino with SCE rates?',
              a: 'Yes. Chino residents pay SCE rates around $0.36/kWh with high summer cooling costs from Inland Empire heat. Residential solar with battery storage delivers strong savings and backup power during heat waves.'
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
              q: 'Is residential solar + battery storage worth it in Redlands with SCE rates?',
              a: 'Yes. Redlands residents pay SCE rates around $0.36/kWh with high summer cooling costs. Residential solar with battery storage delivers strong savings and backup power during Inland Empire heat waves.'
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
              q: 'Is residential solar + battery storage worth it in Upland with SCE rates?',
              a: 'Yes. Upland residents pay SCE rates around $0.36/kWh with high summer cooling costs from Inland Empire heat. Residential solar with battery storage delivers strong savings and backup power during heat waves.'
            },
            {
              q: 'How much sun does Upland get for solar?',
              a: 'Upland averages around 6.0 peak sun hours per day in Zone 10. The foothill Inland Empire location provides excellent solar production with hot summers and no marine layer.'
            }
          ]
        }
      },
      {
        city: 'Highland',
        citySlug: 'highland',
        utility: 'SCE',
        localData: { ...SCE, avgMonthlyBillEstimate: 250, peakSunHoursEstimate: 6.1 },
        cityProfile: {
          localNote: 'Highland sits in the Inland Empire at the base of the San Bernardino Mountains with warm inland climate. The area experiences high summer cooling demand with excellent solar production.',
          faq: [
            {
              q: 'Do I need a permit for solar in Highland?',
              a: 'Yes. Highland has its own city building department with typical turnaround of 2-3 weeks for residential solar permits. Your installer manages all permitting and inspections.'
            },
            {
              q: 'Is residential solar + battery storage worth it in Highland with SCE rates?',
              a: 'Yes. Highland residents pay SCE rates around $0.36/kWh with high summer air conditioning costs from Inland Empire heat. Residential solar with battery storage provides strong savings and backup power.'
            },
            {
              q: 'How much sun does Highland get for solar?',
              a: 'Highland averages around 6.1 peak sun hours per day in Zone 10. The foothill Inland Empire location provides excellent solar production with hot summers and clear skies.'
            }
          ]
        }
      },
      {
        city: 'Colton',
        citySlug: 'colton',
        utility: 'SCE',
        localData: { ...SCE, avgMonthlyBillEstimate: 245, peakSunHoursEstimate: 6.0 },
        cityProfile: {
          localNote: 'Colton sits in the heart of the Inland Empire with hot inland climate and valley terrain. The area experiences very high cooling demand with excellent solar production year-round.',
          faq: [
            {
              q: 'Do I need a permit for solar in Colton?',
              a: 'Yes. Colton has its own city building and safety department. Residential solar permits typically process within 2-3 weeks. Your contractor handles the entire permitting process.'
            },
            {
              q: 'Is residential solar + battery storage worth it in Colton with SCE rates?',
              a: 'Yes. Colton residents pay SCE rates around $0.36/kWh with very high summer cooling costs from Inland Empire heat. Residential solar with battery storage delivers strong savings and reliable backup power during heat waves.'
            },
            {
              q: 'How much sun does Colton get for solar?',
              a: 'Colton averages around 6.0 peak sun hours per day in Zone 10. The Inland Empire valley location provides excellent solar production with hot, clear summers.'
            }
          ]
        }
      },
      {
        city: 'Yucaipa',
        citySlug: 'yucaipa',
        utility: 'SCE',
        localData: { ...SCE, avgMonthlyBillEstimate: 250, peakSunHoursEstimate: 6.1 },
        cityProfile: {
          localNote: 'Yucaipa sits in a valley east of Redlands with warm inland climate and mountain backdrop. The area experiences high cooling demand with excellent solar production and scenic hillside terrain.',
          faq: [
            {
              q: 'Do I need a permit for solar in Yucaipa?',
              a: 'Yes. Yucaipa has its own city building department with typical turnaround of 2-3 weeks for residential solar permits. Your installer handles all permitting.'
            },
            {
              q: 'Is residential solar + battery storage worth it in Yucaipa with SCE rates?',
              a: 'Yes. Yucaipa residents pay SCE rates around $0.36/kWh with high summer air conditioning costs from the inland valley climate. Residential solar with battery storage provides strong savings and backup power.'
            },
            {
              q: 'How much sun does Yucaipa get for solar?',
              a: 'Yucaipa averages around 6.1 peak sun hours per day in Zone 10. The inland valley location provides excellent solar production with hot summers and clear skies.'
            }
          ]
        }
      },
      {
        city: 'Montclair',
        citySlug: 'montclair',
        utility: 'SCE',
        localData: { ...SCE, avgMonthlyBillEstimate: 245, peakSunHoursEstimate: 6.0 },
        cityProfile: {
          localNote: 'Montclair sits in the western Inland Empire with hot inland climate and established residential neighborhoods. The area experiences high cooling demand with excellent solar production.',
          faq: [
            {
              q: 'Do I need a permit for solar in Montclair?',
              a: 'Yes. Montclair has its own city building department. Residential solar permits typically take 2-3 weeks to process. Your contractor manages all permitting and inspections.'
            },
            {
              q: 'Is residential solar + battery storage worth it in Montclair with SCE rates?',
              a: 'Yes. Montclair residents pay SCE rates around $0.36/kWh with high summer cooling costs from Inland Empire heat. Residential solar with battery storage delivers strong savings and backup power during heat waves.'
            },
            {
              q: 'How much sun does Montclair get for solar?',
              a: 'Montclair averages around 6.0 peak sun hours per day in Zone 10. The Inland Empire location provides excellent solar production with hot summers and no marine layer.'
            }
          ]
        }
      },
      {
        city: 'Adelanto',
        citySlug: 'adelanto',
        utility: 'SCE',
        localData: { ...SCE, avgMonthlyBillEstimate: 255, peakSunHoursEstimate: 6.4 },
        cityProfile: {
          localNote: 'Adelanto sits in the high desert Mojave region with extreme desert climate and exceptional solar potential. The area experiences very high cooling demand with year-round clear skies.',
          faq: [
            {
              q: 'Do I need a permit for solar in Adelanto?',
              a: 'Yes. Adelanto has its own city building and safety department with typical turnaround of 2-3 weeks for residential solar. Your installer handles all permitting.'
            },
            {
              q: 'Is residential solar + battery storage worth it in Adelanto with SCE rates?',
              a: 'Absolutely. Adelanto residents pay SCE rates around $0.36/kWh with extreme summer cooling costs from desert heat. Residential solar with battery storage provides exceptional savings and critical backup power during heat waves.'
            },
            {
              q: 'How much sun does Adelanto get for solar?',
              a: 'Adelanto averages around 6.4 peak sun hours per day in Zone 14/15. The high desert location provides exceptional solar production with year-round clear skies and intense summer sun.'
            }
          ]
        }
      },
      {
        city: 'Apple Valley',
        citySlug: 'apple-valley',
        utility: 'SCE',
        localData: { ...SCE, avgMonthlyBillEstimate: 255, peakSunHoursEstimate: 6.4 },
        cityProfile: {
          localNote: 'Apple Valley sits in the high desert Victor Valley with extreme desert climate and exceptional solar production. The area experiences very high cooling demand year-round.',
          faq: [
            {
              q: 'Do I need a permit for solar in Apple Valley?',
              a: 'Yes. Apple Valley has its own city building department. Residential solar permits typically process within 2-3 weeks. Your contractor manages the entire permitting process.'
            },
            {
              q: 'Is residential solar + battery storage worth it in Apple Valley with SCE rates?',
              a: 'Absolutely. Apple Valley residents pay SCE rates around $0.36/kWh with extreme summer air conditioning costs from desert heat. Residential solar with battery storage delivers exceptional savings and backup power.'
            },
            {
              q: 'How much sun does Apple Valley get for solar?',
              a: 'Apple Valley averages around 6.4 peak sun hours per day in Zone 14/15. The high desert climate provides exceptional solar production with year-round clear skies and intense sun.'
            }
          ]
        }
      },
      {
        city: 'Loma Linda',
        citySlug: 'loma-linda',
        utility: 'SCE',
        localData: { ...SCE, avgMonthlyBillEstimate: 245, peakSunHoursEstimate: 6.0 },
        cityProfile: {
          localNote: 'Loma Linda sits in the Inland Empire with warm inland climate and hillside terrain. The area is home to Loma Linda University Medical Center and experiences high cooling demand with excellent solar production.',
          faq: [
            {
              q: 'Do I need a permit for solar in Loma Linda?',
              a: 'Yes. Loma Linda has its own city building department with typical turnaround of 2-3 weeks for residential solar permits. Your installer handles all permitting and inspections.'
            },
            {
              q: 'Is residential solar + battery storage worth it in Loma Linda with SCE rates?',
              a: 'Yes. Loma Linda residents pay SCE rates around $0.36/kWh with high summer cooling costs from Inland Empire heat. Residential solar with battery storage provides strong savings and reliable backup power.'
            },
            {
              q: 'How much sun does Loma Linda get for solar?',
              a: 'Loma Linda averages around 6.0 peak sun hours per day in Zone 10. The Inland Empire location provides excellent solar production with hot summers and clear skies.'
            }
          ]
        }
      },
      {
        city: 'Big Bear Lake',
        citySlug: 'big-bear-lake',
        utility: 'SCE',
        localData: { ...SCE, avgMonthlyBillEstimate: 220, peakSunHoursEstimate: 6.2 },
        cityProfile: {
          localNote: 'Big Bear Lake sits at 6,750 feet elevation in the San Bernardino Mountains with alpine climate and winter snow. Solar installations require engineered snow load consideration, but the high elevation provides excellent year-round production with clean mountain air.',
          faq: [
            {
              q: 'Do I need a permit for solar in Big Bear Lake?',
              a: 'Yes. Big Bear Lake has its own city building department. Residential solar permits typically take 2-3 weeks and require engineered snow load calculations for the mountain environment. Your installer handles all permitting.'
            },
            {
              q: 'Is residential solar + battery storage worth it in Big Bear Lake with SCE rates and snow?',
              a: 'Yes. Big Bear residents pay SCE rates around $0.36/kWh. Despite winter snow covering panels periodically, the high elevation provides excellent solar production with clear mountain air. Solar + battery storage systems with battery storage provide critical backup power during winter storms when grid outages are most likely.'
            },
            {
              q: 'How much sun does Big Bear Lake get for solar?',
              a: 'Big Bear Lake averages around 6.2 peak sun hours per day in Zone 16. The high elevation and clean mountain air provide excellent solar production year-round, though winter snow may temporarily cover panels during storms.'
            }
          ]
        }
      },
    ],
  },
  {
    county: 'Ventura County',
    regionSlug: 'ventura-county',
    state: 'california',
    countyData: {
      utilityRate: {
        utility: 'SCE',
        avgResidentialRatePerKwh: 0.36,
        note: 'Southern California Edison (SCE) serves all of Ventura County at ~$0.36/kWh. Coastal cities experience marine layer while inland valleys see hot summers. Solar economics are strong throughout the county due to SCE rates combined with moderate to high cooling demand.'
      },
      permitOffice: {
        name: 'Ventura County Resource Management Agency / Individual City Building Departments',
        jurisdiction: 'Ventura County / individual cities',
        typicalTurnaround: '2-3 weeks',
        note: 'Oxnard, Thousand Oaks, Simi Valley, Ventura, and other cities have their own building departments. Unincorporated areas fall under Ventura County RMA. Coastal areas may experience marine layer permitting considerations.'
      },
      climateZone: {
        zone: 'Zone 6 (coastal) / Zone 9 (inland valleys)',
        description: 'Zone 6: coastal marine climate (Oxnard, Ventura) with marine layer influence and moderate temperatures. Zone 9: warm inland valleys (Thousand Oaks, Simi Valley, Moorpark) with hot summers and high cooling demand. Excellent solar production throughout the county.'
      },
      countyContext: 'Ventura County spans from the Pacific coast through the Oxnard Plain and inland to the Simi and Conejo Valleys. Coastal cities experience marine layer but receive strong solar production. Inland valleys see hot summers with moderate to high cooling demand. High SCE rates throughout drive strong solar economics. The county sits between Los Angeles and Santa Barbara with varied microclimates.'
    },
    cities: [
      {
        city: 'Oxnard',
        citySlug: 'oxnard',
        utility: 'SCE',
        localData: { ...SCE, avgMonthlyBillEstimate: 235, peakSunHoursEstimate: 5.6 },
        cityProfile: {
          localNote: 'Oxnard sits on the Pacific coast with agricultural surroundings and marine layer influence. Despite coastal fog, the area receives strong solar production, and SCE rates make solar economics favorable.',
          faq: [
            {
              q: 'Do I need a permit for solar in Oxnard?',
              a: 'Yes. Oxnard has its own city building department with typical turnaround of 2-3 weeks. Your installer will manage the permit application process.'
            },
            {
              q: 'Is residential solar + battery storage worth it in Oxnard with SCE rates?',
              a: 'Yes. Oxnard residents pay SCE rates around $0.36/kWh. Residential solar with battery storage provides strong savings and backup power despite moderate cooling demand from the coastal climate.'
            },
            {
              q: 'How much sun does Oxnard get for solar?',
              a: 'Oxnard averages around 5.6 peak sun hours per day in Zone 6. Marine layer affects morning production, but solar generation remains strong with afternoon sun clearing the fog.'
            }
          ]
        }
      },
      {
        city: 'Thousand Oaks',
        citySlug: 'thousand-oaks',
        utility: 'SCE',
        localData: { ...SCE, avgMonthlyBillEstimate: 255, peakSunHoursEstimate: 5.9 },
        cityProfile: {
          localNote: 'Thousand Oaks sits in the Conejo Valley with warm inland climate and large homes. The area experiences hot summers with minimal marine layer interference and high cooling demand.',
          faq: [
            {
              q: 'Do I need a permit for solar in Thousand Oaks?',
              a: 'Yes. Thousand Oaks has its own city building department with typical turnaround of 2-3 weeks. Your contractor handles the permit application.'
            },
            {
              q: 'Is residential solar + battery storage worth it in Thousand Oaks with SCE rates?',
              a: 'Yes. Thousand Oaks residents pay SCE rates around $0.36/kWh with moderate to high summer cooling costs. Residential solar with battery storage delivers strong savings and backup power during heat waves.'
            },
            {
              q: 'How much sun does Thousand Oaks get for solar?',
              a: 'Thousand Oaks averages around 5.9 peak sun hours per day in Zone 9. The inland valley location provides excellent solar production with warm summers and minimal marine layer.'
            }
          ]
        }
      },
      {
        city: 'Simi Valley',
        citySlug: 'simi-valley',
        utility: 'SCE',
        localData: { ...SCE, avgMonthlyBillEstimate: 250, peakSunHoursEstimate: 5.9 },
        cityProfile: {
          localNote: 'Simi Valley sits in an inland valley with hot summers and minimal marine layer. The area experiences high cooling demand with excellent solar production, and SCE rates make solar economics strong.',
          faq: [
            {
              q: 'Do I need a permit for solar in Simi Valley?',
              a: 'Yes. Simi Valley has its own city building department with typical turnaround of 2-3 weeks. Your installer will manage the permit application process.'
            },
            {
              q: 'Is residential solar + battery storage worth it in Simi Valley with SCE rates?',
              a: 'Yes. Simi Valley residents pay SCE rates around $0.36/kWh with high summer cooling demand. Residential solar with battery storage delivers strong savings and backup power during heat waves.'
            },
            {
              q: 'How much sun does Simi Valley get for solar?',
              a: 'Simi Valley averages around 5.9 peak sun hours per day in Zone 9. The inland valley location provides excellent solar production with hot summers and no marine layer interference.'
            }
          ]
        }
      },
      {
        city: 'Ventura',
        citySlug: 'ventura',
        utility: 'SCE',
        localData: { ...SCE, avgMonthlyBillEstimate: 240, peakSunHoursEstimate: 5.7 },
        cityProfile: {
          localNote: 'Ventura sits on the Pacific coast with marine layer influence and moderate coastal climate. Despite morning fog, the area receives strong solar production, and SCE rates make solar economics favorable.',
          faq: [
            {
              q: 'Do I need a permit for solar in Ventura?',
              a: 'Yes. Ventura has its own city building department with typical turnaround of 2-3 weeks. Your contractor handles the permit application.'
            },
            {
              q: 'Is residential solar + battery storage worth it in Ventura with SCE rates?',
              a: 'Yes. Ventura residents pay SCE rates around $0.36/kWh. Residential solar with battery storage provides strong savings and backup power despite moderate cooling demand from the coastal location.'
            },
            {
              q: 'How much sun does Ventura get for solar?',
              a: 'Ventura averages around 5.7 peak sun hours per day in Zone 6. Marine layer affects morning production, but solar generation remains strong with afternoon clearing and ocean breezes.'
            }
          ]
        }
      },
      {
        city: 'Camarillo',
        citySlug: 'camarillo',
        utility: 'SCE',
        localData: { ...SCE, avgMonthlyBillEstimate: 245, peakSunHoursEstimate: 5.8 },
        cityProfile: {
          localNote: 'Camarillo sits in the Pleasant Valley between the coast and inland areas with moderate marine influence. The area experiences warm summers with strong solar production potential.',
          faq: [
            {
              q: 'Do I need a permit for solar in Camarillo?',
              a: 'Yes. Camarillo has its own city building department with typical turnaround of 2-3 weeks. Your installer will manage the permit application process.'
            },
            {
              q: 'Is residential solar + battery storage worth it in Camarillo with SCE rates?',
              a: 'Yes. Camarillo residents pay SCE rates around $0.36/kWh with moderate cooling demand. Residential solar with battery storage delivers strong savings and backup power during outages.'
            },
            {
              q: 'How much sun does Camarillo get for solar?',
              a: 'Camarillo averages around 5.8 peak sun hours per day in Zone 6/9. The valley location between coast and inland areas provides strong solar production with moderate marine layer.'
            }
          ]
        }
      },
      {
        city: 'Moorpark',
        citySlug: 'moorpark',
        utility: 'SCE',
        localData: { ...SCE, avgMonthlyBillEstimate: 250, peakSunHoursEstimate: 5.9 },
        cityProfile: {
          localNote: 'Moorpark sits in the inland hills with warm summers and minimal marine layer. The area experiences moderate to high cooling demand with excellent solar production.',
          faq: [
            {
              q: 'Do I need a permit for solar in Moorpark?',
              a: 'Yes. Moorpark has its own city building department with typical turnaround of 2-3 weeks. Your contractor handles the permit application.'
            },
            {
              q: 'Is residential solar + battery storage worth it in Moorpark with SCE rates?',
              a: 'Yes. Moorpark residents pay SCE rates around $0.36/kWh with moderate to high summer cooling costs. Residential solar with battery storage delivers strong savings and backup power during heat waves.'
            },
            {
              q: 'How much sun does Moorpark get for solar?',
              a: 'Moorpark averages around 5.9 peak sun hours per day in Zone 9. The inland hillside location provides excellent solar production with warm summers and no marine layer.'
            }
          ]
        }
      },
      {
        city: 'Santa Paula',
        citySlug: 'santa-paula',
        utility: 'SCE',
        localData: { ...SCE, avgMonthlyBillEstimate: 240, peakSunHoursEstimate: 5.9 },
        cityProfile: {
          localNote: 'Santa Paula sits in the inland Santa Clara River Valley with hot summers and agricultural surroundings. The area experiences high cooling demand with excellent solar production.',
          faq: [
            {
              q: 'Do I need a permit for solar in Santa Paula?',
              a: 'Yes. Santa Paula has its own city building department with typical turnaround of 2-3 weeks. Your installer will manage the permit application process.'
            },
            {
              q: 'Is residential solar + battery storage worth it in Santa Paula with SCE rates?',
              a: 'Yes. Santa Paula residents pay SCE rates around $0.36/kWh with high summer cooling demand from inland valley heat. Residential solar with battery storage delivers strong savings and backup power.'
            },
            {
              q: 'How much sun does Santa Paula get for solar?',
              a: 'Santa Paula averages around 5.9 peak sun hours per day in Zone 9/10. The inland valley location provides excellent solar production with hot summers and minimal marine layer.'
            }
          ]
        }
      },
      {
        city: 'Fillmore',
        citySlug: 'fillmore',
        utility: 'SCE',
        localData: { ...SCE, avgMonthlyBillEstimate: 235, peakSunHoursEstimate: 5.9 },
        cityProfile: {
          localNote: 'Fillmore sits in the inland Santa Clara River Valley with agricultural character and hot summers. The area experiences high cooling demand with excellent solar production potential.',
          faq: [
            {
              q: 'Do I need a permit for solar in Fillmore?',
              a: 'Yes. Fillmore has its own city building department with typical turnaround of 2-3 weeks. Your contractor handles the permit application.'
            },
            {
              q: 'Is residential solar + battery storage worth it in Fillmore with SCE rates?',
              a: 'Yes. Fillmore residents pay SCE rates around $0.36/kWh with high summer cooling costs. Residential solar with battery storage provides strong savings and backup power, especially valuable for agricultural properties.'
            },
            {
              q: 'How much sun does Fillmore get for solar?',
              a: 'Fillmore averages around 5.9 peak sun hours per day in Zone 9/10. The inland valley location provides excellent solar production with hot summers and clear skies.'
            }
          ]
        }
      },
    ],
  },
  {
    county: 'Kern County',
    regionSlug: 'kern-county',
    state: 'california',
    countyData: {
      utilityRate: {
        utility: 'PG&E / SCE',
        avgResidentialRatePerKwh: 0.40,
        note: 'Northern Kern County is served by PG&E at ~$0.44/kWh; southern areas are served by SCE at ~$0.36/kWh. Blended average ~$0.40/kWh. Hot Central Valley and desert climate drive very high cooling demand. Solar economics are exceptionally strong throughout the county.'
      },
      permitOffice: {
        name: 'Kern County Planning and Community Development / Individual City Building Departments',
        jurisdiction: 'Kern County / individual cities',
        typicalTurnaround: '2-4 weeks',
        note: 'Bakersfield, Delano, Ridgecrest, and other cities have their own building departments. Unincorporated areas fall under Kern County Planning. Desert areas (Ridgecrest, California City) require systems designed for extreme heat.'
      },
      climateZone: {
        zone: 'Zone 13 / Zone 14 (desert)',
        description: 'Zone 13: very hot Central Valley climate (Bakersfield, Delano, Shafter, Wasco) with extreme summer heat and very high cooling demand. Zone 14: desert climate (Ridgecrest, California City, Tehachapi) with extreme temperature swings and exceptional sun exposure. Excellent solar production throughout the county.'
      },
      countyContext: 'Kern County spans from the southern San Joaquin Valley (Bakersfield, Delano) through oil fields to the Mojave Desert (Ridgecrest, California City) and mountain areas (Tehachapi). Valley areas experience extreme summer heat with very high cooling demand. Desert cities see even hotter conditions with exceptional solar potential. High utility rates (PG&E in north, SCE in south) drive strong solar economics throughout the county.'
    },
    cities: [
      {
        city: 'Bakersfield',
        citySlug: 'bakersfield',
        utility: 'PG&E',
        localData: { ...PGE, avgMonthlyBillEstimate: 260, peakSunHoursEstimate: 6.0 },
        cityProfile: {
          localNote: 'Bakersfield sits in the southern San Joaquin Valley with extreme summer heat. The area experiences some of the hottest temperatures in California with very high cooling demand, making solar especially valuable.',
          faq: [
            {
              q: 'Do I need a permit for solar in Bakersfield?',
              a: 'Yes. Bakersfield has its own city building department with typical turnaround of 2-4 weeks. Your installer will manage the permit application process.'
            },
            {
              q: 'Is residential solar + battery storage worth it in Bakersfield with PG&E rates?',
              a: 'Absolutely. Bakersfield residents pay PG&E rates around $0.44/kWh with extreme summer cooling costs. Residential solar with battery storage delivers exceptional savings and critical backup power during heat waves.'
            },
            {
              q: 'How much sun does Bakersfield get for solar?',
              a: 'Bakersfield averages around 6.0 peak sun hours per day in Zone 13. The southern San Joaquin Valley location provides excellent solar production with very hot, clear summers and minimal cloud cover.'
            }
          ]
        }
      },
      {
        city: 'Delano',
        citySlug: 'delano',
        utility: 'PG&E',
        localData: { ...PGE, avgMonthlyBillEstimate: 245, peakSunHoursEstimate: 6.0 },
        cityProfile: {
          localNote: 'Delano sits in the southern San Joaquin Valley with agricultural surroundings and extreme summer heat. The area experiences very high cooling demand with excellent solar production.',
          faq: [
            {
              q: 'Do I need a permit for solar in Delano?',
              a: 'Yes. Delano has its own city building department with typical turnaround of 2-4 weeks. Your contractor handles the permit application.'
            },
            {
              q: 'Is residential solar + battery storage worth it in Delano with PG&E rates?',
              a: 'Absolutely. Delano residents pay PG&E rates around $0.44/kWh with very high summer cooling costs. Residential solar with battery storage delivers strong savings and backup power, especially valuable for agricultural properties.'
            },
            {
              q: 'How much sun does Delano get for solar?',
              a: 'Delano averages around 6.0 peak sun hours per day in Zone 13. The valley location provides excellent solar production with hot summers and clear skies year-round.'
            }
          ]
        }
      },
      {
        city: 'Ridgecrest',
        citySlug: 'ridgecrest',
        utility: 'SCE',
        localData: { ...SCE, avgMonthlyBillEstimate: 280, peakSunHoursEstimate: 6.5 },
        cityProfile: {
          localNote: 'Ridgecrest sits in the Mojave Desert with extreme summer heat and exceptional solar potential. The area experiences very high cooling demand, and desert conditions provide among the best solar production in California.',
          faq: [
            {
              q: 'Do I need a permit for solar in Ridgecrest?',
              a: 'Yes. Ridgecrest has its own city building department with typical turnaround of 2-3 weeks. Desert installations require systems designed for extreme heat and temperature swings. Your installer handles the application.'
            },
            {
              q: 'Is residential solar + battery storage worth it in Ridgecrest with SCE rates?',
              a: 'Absolutely. Ridgecrest residents pay SCE rates around $0.36/kWh with extreme summer cooling costs from desert heat. Residential solar with battery storage delivers exceptional savings and critical backup power during heat waves.'
            },
            {
              q: 'How much sun does Ridgecrest get for solar?',
              a: 'Ridgecrest averages around 6.5 peak sun hours per day in Zone 14. The Mojave Desert location provides exceptional solar production with very hot, clear summers and minimal cloud cover year-round.'
            }
          ]
        }
      },
      {
        city: 'Tehachapi',
        citySlug: 'tehachapi',
        utility: 'SCE',
        localData: { ...SCE, avgMonthlyBillEstimate: 250, peakSunHoursEstimate: 6.2 },
        cityProfile: {
          localNote: 'Tehachapi sits in the mountains at higher elevation with cooler temperatures than the valley floor but strong solar potential. The area is known for wind energy but also receives excellent sun exposure.',
          faq: [
            {
              q: 'Do I need a permit for solar in Tehachapi?',
              a: 'Yes. Tehachapi has its own city building department with typical turnaround of 2-3 weeks. Your contractor handles the permit application.'
            },
            {
              q: 'Is residential solar + battery storage worth it in Tehachapi with SCE rates?',
              a: 'Yes. Tehachapi residents pay SCE rates around $0.36/kWh with moderate cooling and heating demand from mountain elevation. Residential solar with battery storage delivers strong savings and backup power during outages.'
            },
            {
              q: 'How much sun does Tehachapi get for solar?',
              a: 'Tehachapi averages around 6.2 peak sun hours per day in Zone 14/16. The mountain location provides excellent solar production with clear skies, though higher elevation means cooler temperatures than desert areas.'
            }
          ]
        }
      },
      {
        city: 'California City',
        citySlug: 'california-city',
        utility: 'SCE',
        localData: { ...SCE, avgMonthlyBillEstimate: 275, peakSunHoursEstimate: 6.5 },
        cityProfile: {
          localNote: 'California City sits in the Mojave Desert with extreme summer heat and exceptional solar potential. The area experiences very high cooling demand with among the best solar production conditions in the state.',
          faq: [
            {
              q: 'Do I need a permit for solar in California City?',
              a: 'Yes. California City has its own city building department with typical turnaround of 2-3 weeks. Desert installations require systems designed for extreme heat. Your installer handles the application.'
            },
            {
              q: 'Is residential solar + battery storage worth it in California City with SCE rates?',
              a: 'Absolutely. California City residents pay SCE rates around $0.36/kWh with extreme summer cooling costs from desert heat. Residential solar with battery storage delivers exceptional savings and critical backup power.'
            },
            {
              q: 'How much sun does California City get for solar?',
              a: 'California City averages around 6.5 peak sun hours per day in Zone 14. The Mojave Desert location provides exceptional solar production with very hot, clear summers year-round.'
            }
          ]
        }
      },
      {
        city: 'Wasco',
        citySlug: 'wasco',
        utility: 'PG&E',
        localData: { ...PGE, avgMonthlyBillEstimate: 240, peakSunHoursEstimate: 6.0 },
        cityProfile: {
          localNote: 'Wasco sits in the southern San Joaquin Valley with agricultural surroundings and hot summers. The area experiences high cooling demand with excellent solar production potential.',
          faq: [
            {
              q: 'Do I need a permit for solar in Wasco?',
              a: 'Yes. Wasco has its own city building department with typical turnaround of 2-4 weeks. Your contractor handles the permit application.'
            },
            {
              q: 'Is residential solar + battery storage worth it in Wasco with PG&E rates?',
              a: 'Yes. Wasco residents pay PG&E rates around $0.44/kWh with high summer cooling costs. Residential solar with battery storage delivers strong savings and backup power, especially valuable for agricultural properties.'
            },
            {
              q: 'How much sun does Wasco get for solar?',
              a: 'Wasco averages around 6.0 peak sun hours per day in Zone 13. The valley location provides excellent solar production with hot summers and minimal cloud cover.'
            }
          ]
        }
      },
      {
        city: 'Shafter',
        citySlug: 'shafter',
        utility: 'PG&E',
        localData: { ...PGE, avgMonthlyBillEstimate: 240, peakSunHoursEstimate: 6.0 },
        cityProfile: {
          localNote: 'Shafter sits in the southern San Joaquin Valley north of Bakersfield with agricultural character. The area experiences hot summers with high cooling demand and excellent solar production.',
          faq: [
            {
              q: 'Do I need a permit for solar in Shafter?',
              a: 'Yes. Shafter has its own city building department with typical turnaround of 2-4 weeks. Your installer will manage the permit application process.'
            },
            {
              q: 'Is residential solar + battery storage worth it in Shafter with PG&E rates?',
              a: 'Yes. Shafter residents pay PG&E rates around $0.44/kWh with high summer cooling demand. Residential solar with battery storage provides strong savings and backup power, especially valuable for agricultural areas.'
            },
            {
              q: 'How much sun does Shafter get for solar?',
              a: 'Shafter averages around 6.0 peak sun hours per day in Zone 13. The southern valley location provides excellent solar production with hot, clear summers.'
            }
          ]
        }
      },
    ],
  },
  {
    county: 'Imperial County',
    regionSlug: 'imperial-county',
    state: 'california',
    countyData: {
      utilityRate: {
        utility: 'IID (Imperial Irrigation District)',
        avgResidentialRatePerKwh: 0.16,
        note: 'Imperial Irrigation District (IID), a municipal utility, serves all of Imperial County at ~$0.16/kWh — among the lowest residential rates in California. Despite low rates, solar provides value through backup power during extreme heat outages, energy independence, and resilience during desert heat waves (110F+ common). The extreme heat drives high cooling loads that solar can offset.'
      },
      permitOffice: {
        name: 'Imperial County Planning and Development Services / Individual City Building Departments',
        jurisdiction: 'Imperial County / individual cities',
        typicalTurnaround: '2-4 weeks',
        note: 'El Centro, Calexico, Brawley, and other cities have their own building departments. Unincorporated areas fall under Imperial County Planning. All desert installations require systems designed for extreme heat, dust, and temperature swings.'
      },
      climateZone: {
        zone: 'Zone 15',
        description: 'Extreme desert climate with some of the hottest temperatures in the United States. Summer highs routinely exceed 110F with very high cooling demand. Zone 15 provides exceptional solar production — among the best in the nation — with 6.5+ peak sun hours per day year-round.'
      },
      countyContext: 'Imperial County sits in the Colorado Desert in California\'s southeast corner, below sea level in the Imperial Valley. The area experiences extreme summer heat (115F+ common) with exceptional solar potential — among the best in the nation. Low IID municipal rates change the solar value proposition: payback is longer, but backup power during heat-related outages and energy independence remain valuable. High cooling loads from extreme heat mean solar can still offset significant electricity consumption despite low rates.'
    },
    cities: [
      {
        city: 'El Centro',
        citySlug: 'el-centro',
        utility: 'IID',
        localData: { ...IID, avgMonthlyBillEstimate: 135 },
        cityProfile: {
          localNote: 'El Centro is the county seat, located in the Imperial Valley with extreme desert heat. Despite low IID municipal rates, solar provides value through backup power during heat-related outages and energy independence in this extreme climate.',
          faq: [
            {
              q: 'Do I need a permit for solar in El Centro?',
              a: 'Yes. El Centro has its own city building department with typical turnaround of 2-4 weeks. Desert installations require systems designed for extreme heat, dust, and temperature swings. Your installer handles the application.'
            },
            {
              q: 'Is residential solar + battery storage worth it in El Centro with IID rates?',
              a: 'IID rates average $0.16/kWh, among the lowest in California, so financial payback is longer. However, solar with battery storage provides critical backup power during extreme heat outages (115F+ common), energy independence, and resilience during desert heat waves.'
            },
            {
              q: 'How much sun does El Centro get for solar?',
              a: 'El Centro averages around 6.5 peak sun hours per day in Zone 15. The Imperial Valley desert location provides exceptional solar production — among the best in the nation — with extreme heat and clear skies year-round.'
            }
          ]
        }
      },
      {
        city: 'Calexico',
        citySlug: 'calexico',
        utility: 'IID',
        localData: { ...IID, avgMonthlyBillEstimate: 130 },
        cityProfile: {
          localNote: 'Calexico sits on the Mexico border in the Imperial Valley with extreme desert heat. Despite low IID rates, solar provides backup power and energy independence in this extreme climate with frequent summer heat waves.',
          faq: [
            {
              q: 'Do I need a permit for solar in Calexico?',
              a: 'Yes. Calexico has its own city building department with typical turnaround of 2-4 weeks. Desert installations require systems designed for extreme heat and dust. Your installer handles the application.'
            },
            {
              q: 'Is residential solar + battery storage worth it in Calexico with IID rates?',
              a: 'IID rates average $0.16/kWh, very low compared to SCE or PG&E. Solar payback is longer, but solar + battery systems provide critical backup power during heat-related outages and energy independence in this border city with extreme summer conditions.'
            },
            {
              q: 'How much sun does Calexico get for solar?',
              a: 'Calexico averages around 6.5 peak sun hours per day in Zone 15. The border desert location provides exceptional solar production with extreme heat and clear skies year-round.'
            }
          ]
        }
      },
      {
        city: 'Brawley',
        citySlug: 'brawley',
        utility: 'IID',
        localData: { ...IID, avgMonthlyBillEstimate: 125 },
        cityProfile: {
          localNote: 'Brawley sits in the heart of the Imperial Valley with agricultural surroundings and extreme desert heat. Despite low IID rates, solar provides backup power and resilience during extreme heat events.',
          faq: [
            {
              q: 'Do I need a permit for solar in Brawley?',
              a: 'Yes. Brawley has its own city building department with typical turnaround of 2-4 weeks. Desert installations require systems designed for extreme heat. Your contractor handles the application.'
            },
            {
              q: 'Is residential solar + battery storage worth it in Brawley with IID rates?',
              a: 'IID rates average $0.16/kWh, among the lowest in California. Solar payback is longer, but solar + battery systems provide backup power during heat-related outages and energy independence, especially valuable for agricultural properties in extreme heat.'
            },
            {
              q: 'How much sun does Brawley get for solar?',
              a: 'Brawley averages around 6.5 peak sun hours per day in Zone 15. The Imperial Valley location provides exceptional solar production with extreme desert heat and clear skies.'
            }
          ]
        }
      },
      {
        city: 'Imperial',
        citySlug: 'imperial',
        utility: 'IID',
        localData: { ...IID, avgMonthlyBillEstimate: 125 },
        cityProfile: {
          localNote: 'Imperial sits in the Imperial Valley with agricultural character and extreme desert heat. Despite low IID municipal rates, solar provides backup power and resilience in this extreme climate.',
          faq: [
            {
              q: 'Do I need a permit for solar in Imperial?',
              a: 'Yes. Imperial has its own city building department with typical turnaround of 2-4 weeks. Desert installations require systems designed for extreme heat and dust. Your installer handles the application.'
            },
            {
              q: 'Is residential solar + battery storage worth it in Imperial with IID rates?',
              a: 'IID rates average $0.16/kWh, very low. Solar payback is longer, but solar + battery systems provide critical backup power during extreme heat outages and energy independence, especially valuable for rural and agricultural areas.'
            },
            {
              q: 'How much sun does Imperial get for solar?',
              a: 'Imperial averages around 6.5 peak sun hours per day in Zone 15. The desert location provides exceptional solar production with extreme heat and minimal cloud cover year-round.'
            }
          ]
        }
      },
      {
        city: 'Calipatria',
        citySlug: 'calipatria',
        utility: 'IID',
        localData: { ...IID, avgMonthlyBillEstimate: 120 },
        cityProfile: {
          localNote: 'Calipatria sits below sea level in the Imperial Valley with extreme desert heat. Despite low IID rates, solar provides critical backup power and resilience in this remote desert community.',
          faq: [
            {
              q: 'Do I need a permit for solar in Calipatria?',
              a: 'Yes. Calipatria has its own city building department with typical turnaround of 2-4 weeks. Desert installations require systems designed for extreme heat. Your contractor handles the application.'
            },
            {
              q: 'Is residential solar + battery storage worth it in Calipatria with IID rates?',
              a: 'IID rates average $0.16/kWh, among the lowest in California. Solar payback is longer, but solar + battery systems provide critical backup power during heat-related outages and energy independence in this remote desert location below sea level.'
            },
            {
              q: 'How much sun does Calipatria get for solar?',
              a: 'Calipatria averages around 6.5 peak sun hours per day in Zone 15. The below-sea-level desert location provides exceptional solar production with extreme heat and clear skies.'
            }
          ]
        }
      },
    ],
  },
  {
    county: 'Butte County',
    regionSlug: 'butte-county',
    state: 'california',
    countyData: {
      utilityRate: {
        utility: 'PG&E',
        avgResidentialRatePerKwh: 0.44,
        note: 'PG&E residential rates average $0.44/kWh, among California\'s highest. High rates combined with frequent PSPS events make solar with battery backup especially attractive.'
      },
      permitOffice: {
        name: 'Butte County Development Services',
        jurisdiction: 'Butte County',
        typicalTurnaround: '2-4 weeks',
        note: 'Post-Camp Fire rebuilds often integrate solar. County staff experienced with fire-resilient installations and PSPS-hardened systems.'
      },
      climateZone: {
        zone: 'Zone 11 (valley floor)',
        description: 'Hot valley summers with temperatures over 100°F and mild winters. High cooling demand drives energy use from June through September.'
      },
      countyContext: 'Butte County sits in the northern Sacramento Valley with Chico and Oroville on the valley floor and Paradise in the foothill fire zone. The 2018 Camp Fire devastated Paradise, making fire resilience and PSPS backup power top priorities. High PG&E rates and frequent shutoffs drive strong solar adoption.'
    },
    cities: [
      {
        city: 'Chico',
        citySlug: 'chico',
        utility: 'PG&E',
        localData: { ...PGE, peakSunHoursEstimate: 5.3 },
        cityProfile: {
          localNote: 'Chico is Butte County\'s largest city, sitting on the valley floor with flat terrain ideal for solar. Hot summers and PSPS shutoffs make battery backup critical for AC and refrigeration.',
          faq: [
            {
              q: 'Do I need a permit for solar in Chico?',
              a: 'Yes. Chico requires a building permit through Butte County Development Services with typical turnaround of 2-4 weeks. Your installer handles the application and coordinates inspections.'
            },
            {
              q: 'Is residential solar + battery storage worth it in Chico with PSPS risk?',
              a: 'Absolutely. PG&E rates average $0.44/kWh and PSPS shutoffs are common during fire season. Residential solar with battery storage provides power during multi-day outages and locks in energy costs against future rate hikes.'
            },
            {
              q: 'How much sun does Chico get for solar?',
              a: 'Chico averages 5.3 peak sun hours per day in Zone 11. The valley location provides strong solar production with hot, clear summers and minimal winter fog.'
            }
          ]
        }
      },
      {
        city: 'Oroville',
        citySlug: 'oroville',
        utility: 'PG&E',
        localData: { ...PGE, peakSunHoursEstimate: 5.3 },
        cityProfile: {
          localNote: 'Oroville sits at the base of the Sierra foothills along Lake Oroville with valley-floor solar potential. PSPS shutoffs during fire season make battery backup essential for this rural community.',
          faq: [
            {
              q: 'Do I need a permit for solar in Oroville?',
              a: 'Yes. Oroville falls under Butte County Development Services with 2-4 week permit turnaround. Your contractor manages the application and county inspections.'
            },
            {
              q: 'Is residential solar + battery storage worth it in Oroville with PG&E rates?',
              a: 'Yes. PG&E\'s $0.44/kWh rates and frequent PSPS events make solar with battery storage attractive. Battery storage provides power during multi-day fire-season shutoffs common in this foothill-adjacent area.'
            },
            {
              q: 'How much sun does Oroville get for solar?',
              a: 'Oroville averages 5.3 peak sun hours daily in Zone 11. The valley floor location delivers consistent solar production with hot summers exceeding 100°F and mild winters.'
            }
          ]
        }
      },
      {
        city: 'Paradise',
        citySlug: 'paradise',
        utility: 'PG&E',
        localData: { ...PGE, peakSunHoursEstimate: 5.0 },
        cityProfile: {
          localNote: 'Paradise was devastated by the 2018 Camp Fire and many rebuilds include solar with battery backup. Foothill terrain and PSPS shutoffs make energy resilience a top rebuilding priority.',
          faq: [
            {
              q: 'Do I need a permit for solar in Paradise?',
              a: 'Yes. Paradise requires permits through Butte County Development Services with 2-4 week turnaround. Post-Camp Fire rebuilds often integrate solar, and county staff are experienced with fire-resilient systems.'
            },
            {
              q: 'Is residential solar + battery storage worth it in Paradise after the Camp Fire?',
              a: 'Essential. PG&E rates are $0.44/kWh and PSPS shutoffs are frequent in this high-risk fire zone. Residential solar with battery backup provides critical power during evacuations and multi-day outages, a lesson learned from the Camp Fire.'
            },
            {
              q: 'How much sun does Paradise get for solar?',
              a: 'Paradise averages 5.0 peak sun hours daily in the foothill zone. Elevation around 1,700 feet and forested terrain can create roof shading, but the ridge location still provides solid solar production year-round.'
            }
          ]
        }
      },
      {
        city: 'Gridley',
        citySlug: 'gridley',
        utility: 'PG&E',
        localData: { ...PGE, peakSunHoursEstimate: 5.3 },
        cityProfile: {
          localNote: 'Gridley is a small agricultural town on the valley floor with flat rooftops and excellent solar exposure. PSPS events and high PG&E rates drive rural solar adoption.',
          faq: [
            {
              q: 'Do I need a permit for solar in Gridley?',
              a: 'Yes. Gridley requires permits through Butte County Development Services with typical 2-4 week turnaround. Your installer handles the county application and inspection coordination.'
            },
            {
              q: 'Is residential solar + battery storage worth it in Gridley?',
              a: 'Yes. PG&E\'s $0.44/kWh rates and PSPS shutoffs make solar with battery storage attractive for this rural community. Battery backup provides power for well pumps and farm operations during multi-day outages.'
            },
            {
              q: 'How much sun does Gridley get for solar?',
              a: 'Gridley averages 5.3 peak sun hours per day in Zone 11. The flat valley terrain and agricultural surroundings provide unobstructed solar exposure with hot summers and minimal fog.'
            }
          ]
        }
      },
      {
        city: 'Biggs',
        citySlug: 'biggs',
        utility: 'PG&E',
        localData: { ...PGE, peakSunHoursEstimate: 5.3 },
        cityProfile: {
          localNote: 'Biggs is a tiny rural community northwest of Gridley with flat valley terrain ideal for solar installations. PSPS events and agricultural energy needs make battery backup valuable.',
          faq: [
            {
              q: 'Do I need a permit for solar in Biggs?',
              a: 'Yes. Biggs falls under Butte County Development Services jurisdiction with 2-4 week permit processing. Your solar contractor manages the application and inspections.'
            },
            {
              q: 'Is residential solar + battery storage worth it in Biggs with PG&E rates?',
              a: 'Definitely. PG&E rates average $0.44/kWh and PSPS outages are common in rural areas. Residential solar with battery storage provides energy independence and backup power for wells and irrigation.'
            },
            {
              q: 'How much sun does Biggs get for solar?',
              a: 'Biggs averages 5.3 peak sun hours daily in Zone 11. The open valley floor provides excellent solar production with hot summers often exceeding 100°F and clear skies.'
            }
          ]
        }
      },
    ],
  },
  {
    county: 'Shasta County',
    regionSlug: 'shasta-county',
    state: 'california',
    countyData: {
      utilityRate: {
        utility: 'PG&E',
        avgResidentialRatePerKwh: 0.44,
        note: 'PG&E residential rates average $0.44/kWh. Extreme summer heat drives high AC loads, making solar savings substantial for Shasta County homeowners.'
      },
      permitOffice: {
        name: 'Shasta County Resource Management',
        jurisdiction: 'Shasta County',
        typicalTurnaround: '2-4 weeks',
        note: 'County processes solar permits for unincorporated areas. Cities like Redding have separate permit departments with similar timelines.'
      },
      climateZone: {
        zone: 'Zone 11',
        description: 'Very hot inland climate with summer temperatures routinely exceeding 105°F. High cooling demand from June through September drives peak energy use.'
      },
      countyContext: 'Shasta County sits at the northern end of the Central Valley where extreme summer heat drives high AC loads. Redding, Anderson, and Shasta Lake experience scorching valley temperatures with frequent PSPS shutoffs during fire season. High PG&E rates and intense cooling demand make solar highly attractive.'
    },
    cities: [
      {
        city: 'Redding',
        citySlug: 'redding',
        utility: 'PG&E',
        localData: { ...PGE, peakSunHoursEstimate: 5.4 },
        cityProfile: {
          localNote: 'Redding is one of California\'s hottest cities with summer temperatures regularly topping 110°F. AC loads are extreme from June through September, making solar savings substantial.',
          faq: [
            {
              q: 'Do I need a permit for solar in Redding?',
              a: 'Yes. The City of Redding Building Division handles solar permits with typical turnaround of 2-4 weeks. Your installer manages the application and city inspections.'
            },
            {
              q: 'Is residential solar + battery storage worth it in Redding with extreme heat?',
              a: 'Absolutely. PG&E rates average $0.44/kWh and AC costs are brutal with summer highs over 110°F. Residential solar with battery backup locks in energy costs and provides cooling during PSPS outages when heat is most dangerous.'
            },
            {
              q: 'How much sun does Redding get for solar?',
              a: 'Redding averages 5.4 peak sun hours per day in Zone 11. The northern valley location provides exceptional solar production with intense summer sun and minimal winter fog.'
            }
          ]
        }
      },
      {
        city: 'Anderson',
        citySlug: 'anderson',
        utility: 'PG&E',
        localData: { ...PGE, peakSunHoursEstimate: 5.4 },
        cityProfile: {
          localNote: 'Anderson sits just south of Redding on the valley floor with equally extreme summer heat. Flat terrain and unobstructed rooftops are ideal for solar installations.',
          faq: [
            {
              q: 'Do I need a permit for solar in Anderson?',
              a: 'Yes. Anderson requires permits through the City Building Department with 2-4 week typical turnaround. Your solar contractor handles the city application and inspections.'
            },
            {
              q: 'Is residential solar + battery storage worth it in Anderson with high AC costs?',
              a: 'Yes. PG&E\'s $0.44/kWh rates and extreme summer heat create massive AC bills. Residential solar with battery storage provides energy independence and backup cooling during PSPS events when temperatures exceed 105°F.'
            },
            {
              q: 'How much sun does Anderson get for solar?',
              a: 'Anderson averages 5.4 peak sun hours daily in Zone 11. The valley floor location delivers strong solar production year-round with scorching summer sun and clear skies.'
            }
          ]
        }
      },
      {
        city: 'Shasta Lake',
        citySlug: 'shasta-lake',
        utility: 'PG&E',
        localData: { ...PGE, peakSunHoursEstimate: 5.3 },
        cityProfile: {
          localNote: 'Shasta Lake sits north of Redding along I-5 with hot valley summers and some foothill terrain. PSPS shutoffs are common in this area adjacent to national forest.',
          faq: [
            {
              q: 'Do I need a permit for solar in Shasta Lake?',
              a: 'Yes. Shasta Lake requires building permits through the City Building Division with typical 2-4 week processing. Your installer manages the application and city inspections.'
            },
            {
              q: 'Is residential solar + battery storage worth it in Shasta Lake with PSPS risk?',
              a: 'Definitely. PG&E rates are $0.44/kWh and PSPS outages are frequent near forested areas. Residential solar with battery backup provides power during multi-day shutoffs and extreme heat events.'
            },
            {
              q: 'How much sun does Shasta Lake get for solar?',
              a: 'Shasta Lake averages 5.3 peak sun hours per day in Zone 11. Some foothill shading possible but valley-facing homes still see strong solar production with intense summer heat.'
            }
          ]
        }
      },
    ],
  },
  {
    county: 'Tehama County',
    regionSlug: 'tehama-county',
    state: 'california',
    countyData: {
      utilityRate: {
        utility: 'PG&E',
        avgResidentialRatePerKwh: 0.44,
        note: 'PG&E residential rates average $0.44/kWh. Hot valley summers and agricultural energy needs make solar attractive for both residential and farm applications.'
      },
      permitOffice: {
        name: 'Tehama County Planning & Building',
        jurisdiction: 'Tehama County',
        typicalTurnaround: '2-4 weeks',
        note: 'County processes permits for unincorporated areas and smaller cities. Rural installations may require additional site review for agricultural setbacks.'
      },
      climateZone: {
        zone: 'Zone 11',
        description: 'Hot valley climate with summer temperatures over 100°F and mild winters. High cooling demand and agricultural irrigation loads drive energy use.'
      },
      countyContext: 'Tehama County lies in the northern Sacramento Valley between Red Bluff and Corning with flat agricultural terrain. Hot summers, high PG&E rates, and rural PSPS shutoffs make solar with battery backup valuable for both residential and agricultural operations. Valley floor provides excellent solar exposure.'
    },
    cities: [
      {
        city: 'Red Bluff',
        citySlug: 'red-bluff',
        utility: 'PG&E',
        localData: { ...PGE, peakSunHoursEstimate: 5.3 },
        cityProfile: {
          localNote: 'Red Bluff is Tehama County\'s largest city on the Sacramento River with hot valley summers. Flat terrain and clear skies provide excellent solar production year-round.',
          faq: [
            {
              q: 'Do I need a permit for solar in Red Bluff?',
              a: 'Yes. Red Bluff requires building permits through Tehama County Planning & Building with typical 2-4 week turnaround. Your solar installer handles the county application and inspections.'
            },
            {
              q: 'Is residential solar + battery storage worth it in Red Bluff?',
              a: 'Yes. PG&E rates average $0.44/kWh and summer heat drives high AC costs. Residential solar with battery storage provides energy independence and backup power during PSPS outages common in rural northern counties.'
            },
            {
              q: 'How much sun does Red Bluff get for solar?',
              a: 'Red Bluff averages 5.3 peak sun hours daily in Zone 11. The valley floor location delivers strong solar production with hot summers exceeding 100°F and minimal winter cloud cover.'
            }
          ]
        }
      },
      {
        city: 'Corning',
        citySlug: 'corning',
        utility: 'PG&E',
        localData: { ...PGE, peakSunHoursEstimate: 5.3 },
        cityProfile: {
          localNote: 'Corning is a small agricultural town on the valley floor south of Red Bluff. Flat terrain and rural setting make solar installations straightforward with excellent roof exposure.',
          faq: [
            {
              q: 'Do I need a permit for solar in Corning?',
              a: 'Yes. Corning falls under Tehama County Planning & Building jurisdiction with 2-4 week permit processing. Your contractor manages the application and county inspections.'
            },
            {
              q: 'Is residential solar + battery storage worth it in Corning with agricultural loads?',
              a: 'Absolutely. PG&E\'s $0.44/kWh rates and rural PSPS shutoffs make solar with battery storage attractive. Battery backup provides power for well pumps, irrigation, and home AC during multi-day outages.'
            },
            {
              q: 'How much sun does Corning get for solar?',
              a: 'Corning averages 5.3 peak sun hours per day in Zone 11. The open agricultural valley provides unobstructed solar exposure with hot, clear summers and mild winters.'
            }
          ]
        }
      },
      {
        city: 'Tehama',
        citySlug: 'tehama',
        utility: 'PG&E',
        localData: { ...PGE, peakSunHoursEstimate: 5.3 },
        cityProfile: {
          localNote: 'Tehama is a tiny rural community east of Red Bluff along the Sacramento River. Open valley terrain and agricultural surroundings provide ideal solar exposure.',
          faq: [
            {
              q: 'Do I need a permit for solar in Tehama?',
              a: 'Yes. Tehama requires permits through Tehama County Planning & Building with typical 2-4 week turnaround. Your solar installer coordinates the county application and inspections.'
            },
            {
              q: 'Is residential solar + battery storage worth it in Tehama?',
              a: 'Yes. PG&E rates average $0.44/kWh and PSPS outages are common in rural areas. Residential solar with battery storage provides energy independence and backup for wells and irrigation during shutoffs.'
            },
            {
              q: 'How much sun does Tehama get for solar?',
              a: 'Tehama averages 5.3 peak sun hours daily in Zone 11. The valley floor location along the river provides excellent solar production with hot summers and minimal terrain shading.'
            }
          ]
        }
      },
    ],
  },
  {
    county: 'Glenn County',
    regionSlug: 'glenn-county',
    state: 'california',
    countyData: {
      utilityRate: {
        utility: 'PG&E',
        avgResidentialRatePerKwh: 0.44,
        note: 'PG&E residential rates average $0.44/kWh. Rural valley location and agricultural energy demands make solar attractive for energy independence.'
      },
      permitOffice: {
        name: 'Glenn County Planning & Community Development Services',
        jurisdiction: 'Glenn County',
        typicalTurnaround: '2-4 weeks',
        note: 'County processes permits for this rural agricultural region. Farm installations may require setback review for agricultural zoning.'
      },
      climateZone: {
        zone: 'Zone 11',
        description: 'Hot valley climate with summer temperatures over 100°F and mild winters. Agricultural region with high irrigation and cooling loads.'
      },
      countyContext: 'Glenn County is a rural agricultural county in the northern Sacramento Valley with Willows and Orland as primary towns. Flat valley terrain, hot summers, and high PG&E rates make solar attractive. PSPS shutoffs affect rural areas, making battery backup valuable for wells and farm operations.'
    },
    cities: [
      {
        city: 'Willows',
        citySlug: 'willows',
        utility: 'PG&E',
        localData: { ...PGE, peakSunHoursEstimate: 5.3 },
        cityProfile: {
          localNote: 'Willows is Glenn County\'s seat with flat valley terrain ideal for solar. Agricultural surroundings and rural setting make energy independence attractive for well pumps and irrigation.',
          faq: [
            {
              q: 'Do I need a permit for solar in Willows?',
              a: 'Yes. Willows requires permits through Glenn County Planning & Community Development Services with typical 2-4 week turnaround. Your installer handles the county application and inspections.'
            },
            {
              q: 'Is residential solar + battery storage worth it in Willows with agricultural needs?',
              a: 'Yes. PG&E rates average $0.44/kWh and PSPS outages affect rural areas. Residential solar with battery backup provides energy independence and backup for well pumps, irrigation, and AC during multi-day shutoffs.'
            },
            {
              q: 'How much sun does Willows get for solar?',
              a: 'Willows averages 5.3 peak sun hours daily in Zone 11. The flat agricultural valley provides excellent solar production with hot summers often exceeding 100°F and minimal cloud cover.'
            }
          ]
        }
      },
      {
        city: 'Orland',
        citySlug: 'orland',
        utility: 'PG&E',
        localData: { ...PGE, peakSunHoursEstimate: 5.3 },
        cityProfile: {
          localNote: 'Orland is a small agricultural town on the valley floor with open terrain and excellent solar exposure. Rural PSPS events make battery backup valuable for farms and homes.',
          faq: [
            {
              q: 'Do I need a permit for solar in Orland?',
              a: 'Yes. Orland falls under Glenn County Planning & Community Development Services with 2-4 week permit processing. Your solar contractor manages the county application and inspections.'
            },
            {
              q: 'Is residential solar + battery storage worth it in Orland?',
              a: 'Absolutely. PG&E\'s $0.44/kWh rates and rural PSPS shutoffs make solar with battery storage attractive. Battery storage provides backup for wells, irrigation, and home power during multi-day outages common in agricultural areas.'
            },
            {
              q: 'How much sun does Orland get for solar?',
              a: 'Orland averages 5.3 peak sun hours per day in Zone 11. The open valley floor and agricultural surroundings provide unobstructed solar exposure with hot, dry summers.'
            }
          ]
        }
      },
    ],
  },
  {
    county: 'Colusa County',
    regionSlug: 'colusa-county',
    state: 'california',
    countyData: {
      utilityRate: {
        utility: 'PG&E',
        avgResidentialRatePerKwh: 0.44,
        note: 'PG&E residential rates average $0.44/kWh. Rural agricultural setting and high rates make solar economics strong for energy independence.'
      },
      permitOffice: {
        name: 'Colusa County Community Development',
        jurisdiction: 'Colusa County',
        typicalTurnaround: '2-4 weeks',
        note: 'County processes permits for this rural valley region. Agricultural installations may require zoning review for farm setbacks.'
      },
      climateZone: {
        zone: 'Zone 11',
        description: 'Hot valley climate with summer temperatures exceeding 100°F and mild winters. Agricultural region with high irrigation and cooling loads.'
      },
      countyContext: 'Colusa County is a small, rural agricultural county in the northern Sacramento Valley with Colusa and Williams as primary towns. Flat valley terrain provides excellent solar exposure. High PG&E rates and rural PSPS shutoffs make solar with battery backup attractive for homes and agricultural operations.'
    },
    cities: [
      {
        city: 'Colusa',
        citySlug: 'colusa',
        utility: 'PG&E',
        localData: { ...PGE, peakSunHoursEstimate: 5.3 },
        cityProfile: {
          localNote: 'Colusa is the county seat along the Sacramento River with flat valley terrain. Agricultural surroundings and rural setting make solar attractive for energy independence and well pump backup.',
          faq: [
            {
              q: 'Do I need a permit for solar in Colusa?',
              a: 'Yes. Colusa requires permits through Colusa County Community Development with typical 2-4 week turnaround. Your solar installer handles the county application and inspections.'
            },
            {
              q: 'Is residential solar + battery storage worth it in Colusa with rural PSPS risk?',
              a: 'Yes. PG&E rates average $0.44/kWh and PSPS outages affect rural areas. Residential solar with battery backup provides energy independence and backup for wells, irrigation, and home power during shutoffs.'
            },
            {
              q: 'How much sun does Colusa get for solar?',
              a: 'Colusa averages 5.3 peak sun hours daily in Zone 11. The valley floor location along the river provides excellent solar production with hot summers and minimal terrain shading.'
            }
          ]
        }
      },
      {
        city: 'Williams',
        citySlug: 'williams',
        utility: 'PG&E',
        localData: { ...PGE, peakSunHoursEstimate: 5.3 },
        cityProfile: {
          localNote: 'Williams is a small agricultural town along I-5 with flat valley terrain ideal for solar. Rural PSPS events and high PG&E rates drive solar adoption.',
          faq: [
            {
              q: 'Do I need a permit for solar in Williams?',
              a: 'Yes. Williams falls under Colusa County Community Development jurisdiction with 2-4 week permit processing. Your contractor manages the county application and inspections.'
            },
            {
              q: 'Is residential solar + battery storage worth it in Williams?',
              a: 'Absolutely. PG&E\'s $0.44/kWh rates and rural PSPS shutoffs make solar with battery storage attractive. Battery storage provides backup power for wells, irrigation, and AC during multi-day outages.'
            },
            {
              q: 'How much sun does Williams get for solar?',
              a: 'Williams averages 5.3 peak sun hours per day in Zone 11. The open agricultural valley provides unobstructed solar exposure with hot, dry summers and clear skies.'
            }
          ]
        }
      },
    ],
  },
  {
    county: 'Siskiyou County',
    regionSlug: 'siskiyou-county',
    state: 'california',
    countyData: {
      utilityRate: {
        utility: 'PG&E',
        avgResidentialRatePerKwh: 0.44,
        note: 'PG&E residential rates average $0.44/kWh. High elevation and cold winters increase heating costs, making solar with battery backup valuable for energy resilience.'
      },
      permitOffice: {
        name: 'Siskiyou County Community Development',
        jurisdiction: 'Siskiyou County',
        typicalTurnaround: '2-4 weeks',
        note: 'County processes permits for mountain and rural installations. Snow load calculations required for high-elevation systems. Fire-resilient construction common.'
      },
      climateZone: {
        zone: 'Zone 1',
        description: 'Cold mountain climate with snowy winters and mild summers. High elevation requires snow load design. Lower solar production than valley floor but still viable.'
      },
      countyContext: 'Siskiyou County is California\'s far northern mountain region with Yreka, Mount Shasta, and Weed at elevations from 2,500 to 3,500 feet. Cold winters require snow-load-rated solar systems. PSPS shutoffs and winter storms make battery backup critical. Lower sun hours than valley floor but high PG&E rates still make solar attractive.'
    },
    cities: [
      {
        city: 'Yreka',
        citySlug: 'yreka',
        utility: 'PG&E',
        localData: { ...PGE, peakSunHoursEstimate: 4.8 },
        cityProfile: {
          localNote: 'Yreka is the county seat at 2,600 feet elevation with cold, snowy winters. Solar systems require snow load design, and battery backup is critical for winter storm outages.',
          faq: [
            {
              q: 'Do I need a permit for solar in Yreka?',
              a: 'Yes. Yreka requires permits through Siskiyou County Community Development with typical 2-4 week turnaround. High-elevation installations require snow load calculations. Your installer handles the application.'
            },
            {
              q: 'Is residential solar + battery storage worth it in Yreka with snow and cold winters?',
              a: 'Yes. PG&E rates average $0.44/kWh and winter storms cause multi-day outages. Residential solar with battery backup provides power during storms and PSPS events. Snow-rated systems handle winter loads and still produce year-round.'
            },
            {
              q: 'How much sun does Yreka get for solar?',
              a: 'Yreka averages 4.8 peak sun hours daily in Zone 1. The mountain elevation at 2,600 feet reduces sun hours versus valley floor, but high PG&E rates and cold-weather energy needs still make solar economically viable.'
            }
          ]
        }
      },
      {
        city: 'Mount Shasta',
        citySlug: 'mount-shasta',
        utility: 'PG&E',
        localData: { ...PGE, peakSunHoursEstimate: 4.6 },
        cityProfile: {
          localNote: 'Mount Shasta sits at 3,600 feet on the slopes of the volcanic peak with heavy winter snow. Snow load design is critical, and battery backup provides resilience during winter storms.',
          faq: [
            {
              q: 'Do I need a permit for solar in Mount Shasta?',
              a: 'Yes. Mount Shasta requires permits through Siskiyou County Community Development with 2-4 week processing. High-elevation snow load calculations are mandatory. Your contractor handles the application.'
            },
            {
              q: 'Is residential solar + battery storage worth it in Mount Shasta with heavy snow?',
              a: 'Absolutely. PG&E\'s $0.44/kWh rates and frequent winter storm outages make solar with battery storage valuable. Battery backup provides critical power when roads are impassable. Snow-rated panels handle heavy loads and still produce during clear winter days.'
            },
            {
              q: 'How much sun does Mount Shasta get for solar?',
              a: 'Mount Shasta averages 4.6 peak sun hours daily at 3,600 feet elevation in Zone 1. Heavy winter snow and mountain terrain reduce production, but high altitude provides intense summer sun and year-round viability.'
            }
          ]
        }
      },
      {
        city: 'Weed',
        citySlug: 'weed',
        utility: 'PG&E',
        localData: { ...PGE, peakSunHoursEstimate: 4.7 },
        cityProfile: {
          localNote: 'Weed sits at 3,400 feet elevation along I-5 with cold winters and snow load requirements. PSPS shutoffs and winter storms make battery backup essential for this mountain community.',
          faq: [
            {
              q: 'Do I need a permit for solar in Weed?',
              a: 'Yes. Weed requires permits through Siskiyou County Community Development with typical 2-4 week turnaround. Snow load calculations required for high-elevation installations. Your installer manages the process.'
            },
            {
              q: 'Is residential solar + battery storage worth it in Weed with mountain winters?',
              a: 'Yes. PG&E rates average $0.44/kWh and winter storms cause frequent outages. Residential solar with battery backup provides power during multi-day storms and PSPS events. Snow-rated systems handle heavy winter loads.'
            },
            {
              q: 'How much sun does Weed get for solar?',
              a: 'Weed averages 4.7 peak sun hours daily at 3,400 feet in Zone 1. Mountain elevation and winter snow reduce sun hours, but clear skies and high altitude provide strong solar production in summer and fall.'
            }
          ]
        }
      },
      {
        city: 'Dunsmuir',
        citySlug: 'dunsmuir',
        utility: 'PG&E',
        localData: { ...PGE, peakSunHoursEstimate: 4.6 },
        cityProfile: {
          localNote: 'Dunsmuir sits in a narrow canyon at 2,300 feet elevation with steep terrain and forested surroundings. Snow load design and terrain shading considerations are critical for solar installations.',
          faq: [
            {
              q: 'Do I need a permit for solar in Dunsmuir?',
              a: 'Yes. Dunsmuir requires permits through Siskiyou County Community Development with 2-4 week processing. Canyon terrain may create shading challenges. Your installer handles site assessment and permitting.'
            },
            {
              q: 'Is residential solar + battery storage worth it in Dunsmuir with canyon terrain?',
              a: 'Yes. PG&E\'s $0.44/kWh rates and winter storm outages make solar with battery storage valuable. Battery backup provides power during multi-day events. South-facing roofs in the canyon can still achieve solid solar production despite terrain shading.'
            },
            {
              q: 'How much sun does Dunsmuir get for solar?',
              a: 'Dunsmuir averages 4.6 peak sun hours daily at 2,300 feet in a forested canyon in Zone 1. Steep terrain and trees can create shading, but south-facing sites still provide viable solar production year-round.'
            }
          ]
        }
      },
    ],
  },
  {
    county: 'Modoc County',
    regionSlug: 'modoc-county',
    state: 'california',
    countyData: {
      utilityRate: {
        utility: 'PacifiCorp / Surprise Valley Electric',
        avgResidentialRatePerKwh: 0.44,
        note: 'Mix of PacifiCorp and Surprise Valley Electric serve this remote region with rates comparable to PG&E. Remote location and cold winters make energy independence attractive.'
      },
      permitOffice: {
        name: 'Modoc County Planning',
        jurisdiction: 'Modoc County',
        typicalTurnaround: '2-4 weeks',
        note: 'County processes permits for this remote high-desert region. Snow load calculations required for winter conditions. Solar + battery storage systems common.'
      },
      climateZone: {
        zone: 'Zone 1',
        description: 'Cold high desert with snowy winters and hot summers. High elevation around 4,500 feet requires snow load design. Remote location makes energy independence valuable.'
      },
      countyContext: 'Modoc County is California\'s remote far northeast corner with Alturas as the county seat at 4,400 feet elevation. Cold high desert with snowy winters and hot summers. Limited grid infrastructure makes solar with battery storage attractive. Snow load design required for winter conditions.'
    },
    cities: [
      {
        city: 'Alturas',
        citySlug: 'alturas',
        utility: 'PacifiCorp / Surprise Valley Electric',
        localData: { ...PGE, peakSunHoursEstimate: 4.9 },
        cityProfile: {
          localNote: 'Alturas is California\'s most remote county seat at 4,400 feet elevation in the high desert. Cold winters and remote location make battery backup and energy independence highly valuable.',
          faq: [
            {
              q: 'Do I need a permit for solar in Alturas?',
              a: 'Yes. Alturas requires permits through Modoc County Planning with typical 2-4 week turnaround. High-elevation snow load calculations required. Your installer handles the county application.'
            },
            {
              q: 'Is residential solar + battery storage worth it in Alturas with remote location?',
              a: 'Absolutely. Alturas is one of California\'s most remote communities with limited grid infrastructure. Residential solar with battery backup provides energy independence and resilience during winter storms. Snow-rated systems handle high-desert winter conditions.'
            },
            {
              q: 'How much sun does Alturas get for solar?',
              a: 'Alturas averages 4.9 peak sun hours daily at 4,400 feet in Zone 1. The high-desert elevation provides strong solar production despite cold winters. Clear skies and high altitude deliver intense sun year-round.'
            }
          ]
        }
      },
    ],
  },
  {
    county: 'Lassen County',
    regionSlug: 'lassen-county',
    state: 'california',
    countyData: {
      utilityRate: {
        utility: 'Lassen MUD / PG&E / Plumas-Sierra REC',
        avgResidentialRatePerKwh: 0.44,
        note: 'Mix of Lassen Municipal Utility District, PG&E, and Plumas-Sierra Rural Electric serve the region. High desert location and cold winters make energy independence attractive.'
      },
      permitOffice: {
        name: 'Lassen County Planning & Building',
        jurisdiction: 'Lassen County',
        typicalTurnaround: '2-4 weeks',
        note: 'County processes permits for high-desert installations. Snow load calculations required for cold-weather systems. Solar + battery storage installations common in rural areas.'
      },
      climateZone: {
        zone: 'Zone 1',
        description: 'Cold high desert with snowy winters and warm summers. Elevation around 4,200 feet requires snow load design. Remote location makes energy resilience valuable.'
      },
      countyContext: 'Lassen County is a remote high-desert region in northeastern California with Susanville as the county seat at 4,200 feet elevation. Cold winters with snow and remote location make battery backup critical. Multiple utilities serve the area. Snow load design required for winter conditions.'
    },
    cities: [
      {
        city: 'Susanville',
        citySlug: 'susanville',
        utility: 'Lassen MUD / PG&E / Plumas-Sierra REC',
        localData: { ...PGE, peakSunHoursEstimate: 4.9 },
        cityProfile: {
          localNote: 'Susanville sits at 4,200 feet elevation in the high desert with cold, snowy winters. Remote location and winter storms make battery backup essential for energy resilience.',
          faq: [
            {
              q: 'Do I need a permit for solar in Susanville?',
              a: 'Yes. Susanville requires permits through Lassen County Planning & Building with typical 2-4 week turnaround. High-elevation snow load calculations required. Your installer handles the county application.'
            },
            {
              q: 'Is residential solar + battery storage worth it in Susanville with remote location?',
              a: 'Yes. Susanville\'s remote high-desert location makes solar with battery storage attractive for energy independence. Battery backup provides power during winter storms and outages. Snow-rated systems handle cold-weather conditions and still produce year-round.'
            },
            {
              q: 'How much sun does Susanville get for solar?',
              a: 'Susanville averages 4.9 peak sun hours daily at 4,200 feet in Zone 1. The high-desert elevation provides solid solar production with clear skies year-round. Cold winters and high altitude deliver strong sun intensity.'
            }
          ]
        }
      },
    ],
  },
  {
    county: 'Plumas County',
    regionSlug: 'plumas-county',
    state: 'california',
    countyData: {
      utilityRate: {
        utility: 'PG&E / Plumas-Sierra REC',
        avgResidentialRatePerKwh: 0.44,
        note: 'Mix of PG&E and Plumas-Sierra Rural Electric Cooperative serve this mountain region. High rates and frequent PSPS shutoffs make solar with battery backup attractive.'
      },
      permitOffice: {
        name: 'Plumas County Building',
        jurisdiction: 'Plumas County',
        typicalTurnaround: '2-4 weeks',
        note: 'County processes permits for high-Sierra installations. Heavy snow load calculations required. Post-Dixie Fire rebuilds often integrate solar and battery backup.'
      },
      climateZone: {
        zone: 'Zone 1',
        description: 'High Sierra climate with heavy snow winters and mild summers. Elevation 3,400-5,000 feet requires snow load design. Forested terrain creates PSPS risk.'
      },
      countyContext: 'Plumas County is a high-Sierra mountain region with Quincy, Portola, and Chester at elevations from 3,400 to 5,000 feet. Heavy winter snow requires snow-load-rated systems. The 2021 Dixie Fire devastated much of the county, making fire resilience and PSPS backup power top priorities. Forested terrain and PSPS shutoffs make battery backup critical.'
    },
    cities: [
      {
        city: 'Quincy',
        citySlug: 'quincy',
        utility: 'PG&E / Plumas-Sierra REC',
        localData: { ...PGE, peakSunHoursEstimate: 4.8 },
        cityProfile: {
          localNote: 'Quincy is the county seat at 3,400 feet elevation in a forested Sierra valley. The 2021 Dixie Fire threatened the town, making fire resilience and PSPS backup power critical priorities.',
          faq: [
            {
              q: 'Do I need a permit for solar in Quincy?',
              a: 'Yes. Quincy requires permits through Plumas County Building with typical 2-4 week turnaround. Heavy snow load calculations required for Sierra installations. Your installer handles the county application.'
            },
            {
              q: 'Is residential solar + battery storage worth it in Quincy after the Dixie Fire?',
              a: 'Essential. PG&E rates are $0.44/kWh and PSPS shutoffs are frequent in this forested fire zone. Residential solar with battery backup provides power during multi-day PSPS events and winter storms. The Dixie Fire showed the critical need for energy resilience.'
            },
            {
              q: 'How much sun does Quincy get for solar?',
              a: 'Quincy averages 4.8 peak sun hours daily at 3,400 feet in Zone 1. Forested valley terrain can create shading, but south-facing sites provide solid solar production year-round. Clear Sierra air provides strong sun intensity.'
            }
          ]
        }
      },
      {
        city: 'Portola',
        citySlug: 'portola',
        utility: 'PG&E / Plumas-Sierra REC',
        localData: { ...PGE, peakSunHoursEstimate: 4.7 },
        cityProfile: {
          localNote: 'Portola sits at 4,800 feet elevation in the high Sierra with heavy winter snow. Snow load design is critical, and battery backup provides resilience during winter storms and PSPS events.',
          faq: [
            {
              q: 'Do I need a permit for solar in Portola?',
              a: 'Yes. Portola requires permits through Plumas County Building with 2-4 week processing. High-elevation heavy snow load calculations mandatory. Your solar contractor handles the application.'
            },
            {
              q: 'Is residential solar + battery storage worth it in Portola with heavy snow?',
              a: 'Yes. PG&E rates average $0.44/kWh and winter storms cause multi-day outages. Residential solar with battery backup provides power during storms and PSPS events. Snow-rated panels handle heavy Sierra snow loads and still produce year-round.'
            },
            {
              q: 'How much sun does Portola get for solar?',
              a: 'Portola averages 4.7 peak sun hours daily at 4,800 feet in Zone 1. Heavy winter snow and high elevation reduce sun hours, but clear Sierra skies and high altitude provide strong solar production in spring through fall.'
            }
          ]
        }
      },
      {
        city: 'Chester',
        citySlug: 'chester',
        utility: 'PG&E / Plumas-Sierra REC',
        localData: { ...PGE, peakSunHoursEstimate: 4.8 },
        cityProfile: {
          localNote: 'Chester sits at 4,500 feet on Lake Almanor with heavy winter snow and forested surroundings. The Dixie Fire burned nearby, making PSPS backup power and fire resilience critical priorities.',
          faq: [
            {
              q: 'Do I need a permit for solar in Chester?',
              a: 'Yes. Chester requires permits through Plumas County Building with typical 2-4 week turnaround. Heavy snow load calculations required. Post-Dixie Fire rebuilds often integrate solar. Your installer handles permitting.'
            },
            {
              q: 'Is residential solar + battery storage worth it in Chester with Dixie Fire risk?',
              a: 'Absolutely. PG&E\'s $0.44/kWh rates and frequent PSPS shutoffs in this forested fire zone make residential solar + battery storage essential. Battery backup provides power during multi-day PSPS events and winter storms. The Dixie Fire demonstrated the need for energy resilience.'
            },
            {
              q: 'How much sun does Chester get for solar?',
              a: 'Chester averages 4.8 peak sun hours daily at 4,500 feet in Zone 1. Forested terrain and heavy winter snow create challenges, but south-facing lakeside sites provide solid solar production. Clear Sierra air delivers strong sun intensity.'
            }
          ]
        }
      },
    ],
  },
  {
    county: 'Humboldt County',
    regionSlug: 'humboldt-county',
    state: 'california',
    countyData: {
      utilityRate: {
        utility: 'PG&E',
        avgResidentialRatePerKwh: 0.44,
        note: 'PG&E serves this foggy North Coast region with rates averaging $0.44/kWh. Lower solar irradiance makes proper system sizing and battery backup critical for maximizing value.'
      },
      permitOffice: {
        name: 'Humboldt County Building Department',
        jurisdiction: 'Humboldt County',
        typicalTurnaround: '2-4 weeks',
        note: 'County processes permits for coastal and inland installations. Marine environment requires corrosion-resistant hardware. Seismic Zone 4 design standards apply.'
      },
      climateZone: {
        zone: 'Zone 1 (North Coast)',
        description: 'Cool maritime climate with persistent summer fog and heavy winter rain. Coastal redwood forest terrain creates moderate solar conditions. Marine air requires corrosion-resistant equipment.'
      },
      countyContext: 'Humboldt County is a remote North Coast region anchored by Eureka and Arcata. Persistent coastal fog and redwood forests create lower solar irradiance than inland California, averaging 4.3-4.4 peak sun hours daily. PG&E\'s high rates still make solar viable, but proper system sizing is critical. Battery backup provides value during winter storms and PSPS events.'
    },
    cities: [
      {
        city: 'Eureka',
        citySlug: 'eureka',
        utility: 'PG&E',
        localData: { ...PGE, peakSunHoursEstimate: 4.3 },
        cityProfile: {
          localNote: 'Eureka is the county seat on Humboldt Bay with persistent coastal fog. Lower sun hours than inland California make efficient system design critical, but PG&E rates still make solar worthwhile.',
          faq: [
            {
              q: 'Do I need a permit for solar in Eureka?',
              a: 'Yes. Eureka requires permits through Humboldt County Building with typical 2-4 week turnaround. Coastal installations need corrosion-resistant hardware. Your solar contractor handles the application.'
            },
            {
              q: 'Is residential solar + battery storage worth it in Eureka with coastal fog?',
              a: 'Yes, but requires careful sizing. Eureka averages 4.3 peak sun hours daily due to coastal fog, lower than inland California. PG&E rates of $0.44/kWh still make solar viable. Oversizing the array and adding battery storage compensates for fog and winter storm outages.'
            },
            {
              q: 'How much sun does Eureka get for solar?',
              a: 'Eureka averages 4.3 peak sun hours daily in Zone 1. Coastal fog reduces sun hours compared to inland regions, but solar still works year-round. South-facing installations and efficient panels maximize production in marine conditions.'
            }
          ]
        }
      },
      {
        city: 'Arcata',
        citySlug: 'arcata',
        utility: 'PG&E',
        localData: { ...PGE, peakSunHoursEstimate: 4.4 },
        cityProfile: {
          localNote: 'Arcata sits on Humboldt Bay near Eureka with similar foggy coastal conditions. The university town sees slightly more sun than coastal Eureka, but battery backup remains valuable for storm resilience.',
          faq: [
            {
              q: 'Do I need a permit for solar in Arcata?',
              a: 'Yes. Arcata requires permits through Humboldt County Building with 2-4 week processing. Marine environment requires corrosion-resistant components. Your installer handles permitting.'
            },
            {
              q: 'Is residential solar + battery storage worth it in Arcata with fog and rain?',
              a: 'Absolutely. PG&E charges $0.44/kWh and winter storms cause outages. Solar with battery backup provides year-round savings despite 4.4 peak sun hours from coastal fog. Proper sizing overcomes weather challenges.'
            },
            {
              q: 'How much sun does Arcata get for solar?',
              a: 'Arcata averages 4.4 peak sun hours daily in Zone 1. Coastal location brings morning fog, but inland hills get more sun. South-facing roof installations avoid redwood shade and maximize production.'
            }
          ]
        }
      },
      {
        city: 'Fortuna',
        citySlug: 'fortuna',
        utility: 'PG&E',
        localData: { ...PGE, peakSunHoursEstimate: 4.5 },
        cityProfile: {
          localNote: 'Fortuna sits inland from the coast in the Eel River valley with slightly better sun than coastal Eureka. Redwood forestry and agriculture make backup power valuable for rural properties.',
          faq: [
            {
              q: 'Do I need a permit for solar in Fortuna?',
              a: 'Yes. Fortuna requires permits through Humboldt County Building with typical 2-4 week turnaround. Inland valley sites may have fewer marine corrosion concerns than coastal areas. Your contractor handles applications.'
            },
            {
              q: 'Is residential solar + battery storage worth it in Fortuna with PG&E rates?',
              a: 'Yes. PG&E rates average $0.44/kWh and rural locations face winter storm outages. Solar with battery backup provides energy independence for Eel River valley properties. Fortuna gets 4.5 peak sun hours, better than coastal Eureka.'
            },
            {
              q: 'How much sun does Fortuna get for solar?',
              a: 'Fortuna averages 4.5 peak sun hours daily in Zone 1. Inland valley location brings warmer summers and less fog than the coast. Redwood forest surroundings require south-facing sites to avoid shading.'
            }
          ]
        }
      },
      {
        city: 'McKinleyville',
        citySlug: 'mckinleyville',
        utility: 'PG&E',
        localData: { ...PGE, peakSunHoursEstimate: 4.4 },
        cityProfile: {
          localNote: 'McKinleyville sits north of Arcata on the coastal plain with persistent marine fog. Battery backup provides value during winter storms and PSPS events in this remote coastal community.',
          faq: [
            {
              q: 'Do I need a permit for solar in McKinleyville?',
              a: 'Yes. McKinleyville requires permits through Humboldt County Building with 2-4 week processing. Coastal exposure requires marine-grade hardware. Your solar installer handles the county application.'
            },
            {
              q: 'Is residential solar + battery storage worth it in McKinleyville with coastal fog?',
              a: 'Yes. PG&E charges $0.44/kWh and winter storms cause multi-day outages. Solar with battery backup provides resilience despite 4.4 peak sun hours from marine fog. Oversized systems compensate for weather.'
            },
            {
              q: 'How much sun does McKinleyville get for solar?',
              a: 'McKinleyville averages 4.4 peak sun hours daily in Zone 1. Coastal plain location brings heavy morning fog but clears midday. Marine climate requires corrosion-resistant panels and mounts.'
            }
          ]
        }
      },
    ],
  },
  {
    county: 'Del Norte County',
    regionSlug: 'del-norte-county',
    state: 'california',
    countyData: {
      utilityRate: {
        utility: 'PG&E',
        avgResidentialRatePerKwh: 0.44,
        note: 'PG&E serves this far northwest coast region with rates averaging $0.44/kWh. Extreme marine climate and low sun hours make battery backup and efficient design critical.'
      },
      permitOffice: {
        name: 'Del Norte County Building Department',
        jurisdiction: 'Del Norte County',
        typicalTurnaround: '2-4 weeks',
        note: 'County processes permits for coastal installations in California\'s rainiest region. Marine corrosion resistance and seismic design required. Remote location makes backup power valuable.'
      },
      climateZone: {
        zone: 'Zone 1 (Far North Coast)',
        description: 'Extreme maritime climate with heavy year-round rainfall and persistent fog. Coldest coastal region in California. Marine air and redwood forests create challenging solar conditions.'
      },
      countyContext: 'Del Norte County is California\'s far northwest corner, anchored by Crescent City. This is the state\'s rainiest and foggiest region, with persistent marine weather and redwood forests creating the lowest solar irradiance in Northern California. Solar still works year-round with proper sizing, and PG&E\'s high rates plus storm outages make battery backup especially valuable.'
    },
    cities: [
      {
        city: 'Crescent City',
        citySlug: 'crescent-city',
        utility: 'PG&E',
        localData: { ...PGE, peakSunHoursEstimate: 4.2 },
        cityProfile: {
          localNote: 'Crescent City is California\'s far northwest coastal town with the state\'s heaviest rainfall and persistent fog. Low sun hours require larger system sizing, but PG&E rates and storm resilience make solar valuable.',
          faq: [
            {
              q: 'Do I need a permit for solar in Crescent City?',
              a: 'Yes. Crescent City requires permits through Del Norte County Building with typical 2-4 week turnaround. Extreme marine environment requires corrosion-resistant hardware and seismic design. Your installer handles applications.'
            },
            {
              q: 'Is residential solar + battery storage worth it in Crescent City with heavy rain?',
              a: 'Yes, with proper sizing. Crescent City averages 4.2 peak sun hours, California\'s lowest, due to persistent fog and rain. PG&E rates of $0.44/kWh and winter storm outages make solar with oversized battery backup worthwhile for energy independence.'
            },
            {
              q: 'How much sun does Crescent City get for solar?',
              a: 'Crescent City averages 4.2 peak sun hours daily in Zone 1. Heavy marine fog and rainfall reduce sun hours, but modern panels still produce year-round. South-facing installations and efficient design maximize production in challenging conditions.'
            }
          ]
        }
      },
    ],
  },
  {
    county: 'Mendocino County',
    regionSlug: 'mendocino-county',
    state: 'california',
    countyData: {
      utilityRate: {
        utility: 'PG&E',
        avgResidentialRatePerKwh: 0.44,
        note: 'PG&E serves this North Coast and inland region with rates averaging $0.44/kWh. Frequent PSPS shutoffs in wildfire zones make battery backup critical.'
      },
      permitOffice: {
        name: 'Mendocino County Planning & Building',
        jurisdiction: 'Mendocino County',
        typicalTurnaround: '2-4 weeks',
        note: 'County processes permits for coastal and inland wine-country installations. Coastal sites need marine-grade hardware. Wildfire zones require fire-resistant design and PSPS backup.'
      },
      climateZone: {
        zone: 'Zone 1 (Coast) / Zone 2 (Inland Valleys)',
        description: 'Coastal areas see cool marine climate with fog, while inland Ukiah Valley sees hot dry summers. Wildfire risk and PSPS events are severe countywide.'
      },
      countyContext: 'Mendocino County spans foggy North Coast (Fort Bragg, Point Arena) to hot inland wine valleys (Ukiah, Willits). Coastal areas see 4.4-4.6 peak sun hours with marine fog, while inland Ukiah Valley gets 5.0-5.2 hours with hot summers. Severe wildfire history and frequent PSPS shutoffs make battery backup essential for both coast and inland.'
    },
    cities: [
      {
        city: 'Ukiah',
        citySlug: 'ukiah',
        utility: 'PG&E',
        localData: { ...PGE, peakSunHoursEstimate: 5.2 },
        cityProfile: {
          localNote: 'Ukiah is the county seat in a hot inland valley with excellent solar conditions. Severe wildfire risk and frequent PSPS shutoffs make battery backup critical for this wine-country town.',
          faq: [
            {
              q: 'Do I need a permit for solar in Ukiah?',
              a: 'Yes. Ukiah requires permits through Mendocino County Planning & Building with typical 2-4 week turnaround. Wildfire zones may require fire-resistant design. Your solar contractor handles the application.'
            },
            {
              q: 'Is residential solar + battery storage worth it in Ukiah with PSPS risk?',
              a: 'Essential. PG&E rates are $0.44/kWh and PSPS shutoffs are frequent in this wildfire zone. Residential solar with battery backup provides power during multi-day PSPS events and extreme heat. Ukiah gets 5.2 peak sun hours, excellent for solar.'
            },
            {
              q: 'How much sun does Ukiah get for solar?',
              a: 'Ukiah averages 5.2 peak sun hours daily in Zone 2. Inland valley location brings hot dry summers and clear skies, ideal for solar production. Wildfire smoke can reduce output during fire season.'
            }
          ]
        }
      },
      {
        city: 'Fort Bragg',
        citySlug: 'fort-bragg',
        utility: 'PG&E',
        localData: { ...PGE, peakSunHoursEstimate: 4.4 },
        cityProfile: {
          localNote: 'Fort Bragg sits on the foggy North Coast with persistent marine weather. Lower sun hours than inland Ukiah require efficient system sizing, but PG&E rates and storm resilience make solar valuable.',
          faq: [
            {
              q: 'Do I need a permit for solar in Fort Bragg?',
              a: 'Yes. Fort Bragg requires permits through Mendocino County Planning & Building with 2-4 week processing. Coastal installations need marine-grade corrosion-resistant hardware. Your installer handles permitting.'
            },
            {
              q: 'Is residential solar + battery storage worth it in Fort Bragg with coastal fog?',
              a: 'Yes. PG&E charges $0.44/kWh and winter storms cause outages. Solar with battery backup provides year-round savings despite 4.4 peak sun hours from marine fog. Oversized systems compensate for weather.'
            },
            {
              q: 'How much sun does Fort Bragg get for solar?',
              a: 'Fort Bragg averages 4.4 peak sun hours daily in Zone 1. Coastal location brings heavy morning fog but midday clearing. Marine air requires corrosion-resistant equipment for long-term durability.'
            }
          ]
        }
      },
      {
        city: 'Willits',
        citySlug: 'willits',
        utility: 'PG&E',
        localData: { ...PGE, peakSunHoursEstimate: 5.0 },
        cityProfile: {
          localNote: 'Willits sits inland in forested hill country between coast and Ukiah Valley. Moderate sun hours and severe PSPS risk make battery backup critical for this gateway town.',
          faq: [
            {
              q: 'Do I need a permit for solar in Willits?',
              a: 'Yes. Willits requires permits through Mendocino County Planning & Building with typical 2-4 week turnaround. Forested terrain may require fire-resistant design. Your contractor handles applications.'
            },
            {
              q: 'Is residential solar + battery storage worth it in Willits with wildfire risk?',
              a: 'Absolutely. PG&E rates average $0.44/kWh and PSPS shutoffs are frequent in this forested fire zone. Residential solar with battery backup provides power during multi-day PSPS events. Willits gets 5.0 peak sun hours, solid for inland hills.'
            },
            {
              q: 'How much sun does Willits get for solar?',
              a: 'Willits averages 5.0 peak sun hours daily in Zone 2. Inland hill location brings warmer summers than the coast with moderate solar production. Forested terrain requires south-facing sites to avoid shading.'
            }
          ]
        }
      },
      {
        city: 'Point Arena',
        citySlug: 'point-arena',
        utility: 'PG&E',
        localData: { ...PGE, peakSunHoursEstimate: 4.6 },
        cityProfile: {
          localNote: 'Point Arena sits on the remote southern Mendocino coast with persistent marine fog. Solar works year-round with proper sizing, and battery backup provides storm resilience for this isolated community.',
          faq: [
            {
              q: 'Do I need a permit for solar in Point Arena?',
              a: 'Yes. Point Arena requires permits through Mendocino County Planning & Building with 2-4 week processing. Coastal exposure requires marine-grade hardware. Your solar installer handles the county application.'
            },
            {
              q: 'Is residential solar + battery storage worth it in Point Arena with fog?',
              a: 'Yes. PG&E charges $0.44/kWh and winter storms cause outages in this remote coastal town. Solar with battery backup provides energy independence despite 4.6 peak sun hours from marine fog. Oversized systems work well.'
            },
            {
              q: 'How much sun does Point Arena get for solar?',
              a: 'Point Arena averages 4.6 peak sun hours daily in Zone 1. South coast location gets slightly more sun than far north coast. Marine climate requires corrosion-resistant panels and racking.'
            }
          ]
        }
      },
    ],
  },
  {
    county: 'Lake County',
    regionSlug: 'lake-county',
    state: 'california',
    countyData: {
      utilityRate: {
        utility: 'PG&E',
        avgResidentialRatePerKwh: 0.44,
        note: 'PG&E serves this inland region with rates averaging $0.44/kWh. Severe wildfire history and extreme PSPS frequency make battery backup essential.'
      },
      permitOffice: {
        name: 'Lake County Community Development',
        jurisdiction: 'Lake County',
        typicalTurnaround: '2-4 weeks',
        note: 'County processes permits for inland installations. Post-wildfire rebuilds often integrate solar and battery. Fire-resistant design required in high-risk zones.'
      },
      climateZone: {
        zone: 'Zone 2 (Inland Valleys)',
        description: 'Hot dry summers and mild winters in inland valleys around Clear Lake. Severe wildfire risk and PSPS events are frequent. Excellent solar conditions.'
      },
      countyContext: 'Lake County is an inland region anchored by Lakeport and Clearlake around Clear Lake. Severe wildfire history (Valley Fire, Mendocino Complex) and extreme PSPS frequency make battery backup critical. Hot summers bring excellent solar production at 5.1-5.3 peak sun hours. Solar with battery storage provides essential energy independence in this fire-prone region.'
    },
    cities: [
      {
        city: 'Lakeport',
        citySlug: 'lakeport',
        utility: 'PG&E',
        localData: { ...PGE, peakSunHoursEstimate: 5.2 },
        cityProfile: {
          localNote: 'Lakeport is the county seat on Clear Lake with excellent solar conditions. Severe wildfire history and frequent PSPS shutoffs make battery backup critical for this lakeside town.',
          faq: [
            {
              q: 'Do I need a permit for solar in Lakeport?',
              a: 'Yes. Lakeport requires permits through Lake County Community Development with typical 2-4 week turnaround. High-risk fire zones may require fire-resistant design. Your solar contractor handles the application.'
            },
            {
              q: 'Is residential solar + battery storage worth it in Lakeport with wildfire risk?',
              a: 'Essential. PG&E rates are $0.44/kWh and PSPS shutoffs are extreme in this fire zone. Residential solar with battery backup provides power during multi-day PSPS events and evacuations. Lakeport gets 5.2 peak sun hours, excellent for solar.'
            },
            {
              q: 'How much sun does Lakeport get for solar?',
              a: 'Lakeport averages 5.2 peak sun hours daily in Zone 2. Clear Lake location brings hot dry summers with clear skies, ideal for solar production. Wildfire smoke can reduce output during fire season.'
            }
          ]
        }
      },
      {
        city: 'Clearlake',
        citySlug: 'clearlake',
        utility: 'PG&E',
        localData: { ...PGE, peakSunHoursEstimate: 5.3 },
        cityProfile: {
          localNote: 'Clearlake sits on the north shore of Clear Lake with excellent solar potential. Severe wildfire history and extreme PSPS frequency make battery backup essential for energy resilience.',
          faq: [
            {
              q: 'Do I need a permit for solar in Clearlake?',
              a: 'Yes. Clearlake requires permits through Lake County Community Development with 2-4 week processing. Wildfire zones require fire-resistant design. Your installer handles permitting.'
            },
            {
              q: 'Is residential solar + battery storage worth it in Clearlake after wildfires?',
              a: 'Absolutely. PG&E charges $0.44/kWh and PSPS shutoffs are frequent in this severe fire zone. Residential solar with battery backup provides power during multi-day PSPS events. Clearlake gets 5.3 peak sun hours, excellent for solar independence.'
            },
            {
              q: 'How much sun does Clearlake get for solar?',
              a: 'Clearlake averages 5.3 peak sun hours daily in Zone 2. Hot inland summers and clear skies deliver strong solar production year-round. Fire season smoke can temporarily reduce output.'
            }
          ]
        }
      },
    ],
  },
  {
    county: 'Napa County',
    regionSlug: 'napa-county',
    state: 'california',
    countyData: {
      utilityRate: {
        utility: 'PG&E',
        avgResidentialRatePerKwh: 0.44,
        note: 'PG&E serves this premium wine-country region with rates averaging $0.44/kWh. Wildfire risk and PSPS events make battery backup attractive for high-value properties.'
      },
      permitOffice: {
        name: 'Napa County Planning, Building & Environmental Services',
        jurisdiction: 'Napa County',
        typicalTurnaround: '2-4 weeks',
        note: 'County processes permits for wine-country installations. Hillside vineyard sites may have additional requirements. Fire-resistant design encouraged in high-risk zones.'
      },
      climateZone: {
        zone: 'Zone 2 (Wine Country)',
        description: 'Mediterranean climate with hot dry summers and mild winters. Hillside vineyard terrain and wildfire risk create PSPS vulnerability. Excellent solar conditions.'
      },
      countyContext: 'Napa County is California\'s premier wine region, anchored by Napa, American Canyon, Calistoga, and St. Helena. Hot summers bring excellent solar production at 5.0-5.2 peak sun hours. Wildfire history (Glass Fire, Hennessey Fire) and PSPS events make battery backup attractive for high-value wine-country properties. Affluent market with strong demand for premium solar and battery systems.'
    },
    cities: [
      {
        city: 'Napa',
        citySlug: 'napa',
        utility: 'PG&E',
        localData: { ...PGE, peakSunHoursEstimate: 5.1 },
        cityProfile: {
          localNote: 'Napa is the county seat and heart of wine country with excellent solar conditions. Wildfire risk and PSPS events make battery backup attractive for this affluent community.',
          faq: [
            {
              q: 'Do I need a permit for solar in Napa?',
              a: 'Yes. Napa requires permits through Napa County Planning, Building & Environmental Services with typical 2-4 week turnaround. Hillside properties may have additional requirements. Your solar contractor handles the application.'
            },
            {
              q: 'Is residential solar + battery storage worth it in Napa with PSPS risk?',
              a: 'Highly attractive. PG&E rates are $0.44/kWh and PSPS shutoffs affect wine-country hillsides. Residential solar with premium battery backup provides power during PSPS events and extreme heat. Napa gets 5.1 peak sun hours, excellent for solar.'
            },
            {
              q: 'How much sun does Napa get for solar?',
              a: 'Napa averages 5.1 peak sun hours daily in Zone 2. Hot valley summers and clear skies deliver strong solar production year-round. Premium systems match the wine-country aesthetic.'
            }
          ]
        }
      },
      {
        city: 'American Canyon',
        citySlug: 'american-canyon',
        utility: 'PG&E',
        localData: { ...PGE, peakSunHoursEstimate: 5.2 },
        cityProfile: {
          localNote: 'American Canyon sits at the south county gateway with excellent solar potential. PSPS events and proximity to Bay Area make battery backup attractive for this growing community.',
          faq: [
            {
              q: 'Do I need a permit for solar in American Canyon?',
              a: 'Yes. American Canyon requires permits through Napa County Planning, Building & Environmental Services with 2-4 week processing. Your installer handles permitting.'
            },
            {
              q: 'Is residential solar + battery storage worth it in American Canyon with PG&E rates?',
              a: 'Yes. PG&E charges $0.44/kWh and PSPS shutoffs affect hillside areas. Solar with battery backup provides energy independence and resilience. American Canyon gets 5.2 peak sun hours, excellent for solar production.'
            },
            {
              q: 'How much sun does American Canyon get for solar?',
              a: 'American Canyon averages 5.2 peak sun hours daily in Zone 2. South county location brings warm summers and clear skies, ideal for solar. Bay Area proximity means strong solar market.'
            }
          ]
        }
      },
      {
        city: 'Calistoga',
        citySlug: 'calistoga',
        utility: 'PG&E',
        localData: { ...PGE, peakSunHoursEstimate: 5.0 },
        cityProfile: {
          localNote: 'Calistoga sits in the hot upper valley with excellent solar conditions. Severe wildfire history (Glass Fire) and PSPS events make battery backup critical for this resort town.',
          faq: [
            {
              q: 'Do I need a permit for solar in Calistoga?',
              a: 'Yes. Calistoga requires permits through Napa County Planning, Building & Environmental Services with typical 2-4 week turnaround. Wildfire zones may require fire-resistant design. Your contractor handles applications.'
            },
            {
              q: 'Is residential solar + battery storage worth it in Calistoga after Glass Fire?',
              a: 'Essential. PG&E rates average $0.44/kWh and PSPS shutoffs are frequent in this severe fire zone. Residential solar with battery backup provides power during multi-day PSPS events. Calistoga gets 5.0 peak sun hours, strong for solar.'
            },
            {
              q: 'How much sun does Calistoga get for solar?',
              a: 'Calistoga averages 5.0 peak sun hours daily in Zone 2. Upper valley location brings hot summers with clear skies. Hillside vineyard terrain provides excellent south-facing sites.'
            }
          ]
        }
      },
      {
        city: 'St. Helena',
        citySlug: 'st-helena',
        utility: 'PG&E',
        localData: { ...PGE, peakSunHoursEstimate: 5.1 },
        cityProfile: {
          localNote: 'St. Helena is a premium wine-country town with excellent solar potential. Wildfire risk and PSPS events make battery backup attractive for high-value vineyard properties.',
          faq: [
            {
              q: 'Do I need a permit for solar in St. Helena?',
              a: 'Yes. St. Helena requires permits through Napa County Planning, Building & Environmental Services with 2-4 week processing. Hillside vineyard sites may have additional requirements. Your solar installer handles the county application.'
            },
            {
              q: 'Is residential solar + battery storage worth it in St. Helena with PSPS risk?',
              a: 'Highly attractive. PG&E charges $0.44/kWh and PSPS shutoffs affect hillside vineyards. Premium solar with battery backup provides power during PSPS events and extreme heat. St. Helena gets 5.1 peak sun hours, excellent for solar.'
            },
            {
              q: 'How much sun does St. Helena get for solar?',
              a: 'St. Helena averages 5.1 peak sun hours daily in Zone 2. Valley floor and hillside vineyard sites get hot summers with clear skies, ideal for solar production. Premium systems match wine-country aesthetics.'
            }
          ]
        }
      },
    ],
  },
  {
    county: 'Sutter County',
    regionSlug: 'sutter-county',
    state: 'california',
    countyData: {
      utilityRate: {
        utility: 'PG&E',
        avgResidentialRatePerKwh: 0.44,
        note: 'PG&E serves this Sacramento Valley region with rates averaging $0.44/kWh. Hot summers and agricultural economy make solar attractive for residential and farm properties.'
      },
      permitOffice: {
        name: 'Sutter County Community Services',
        jurisdiction: 'Sutter County',
        typicalTurnaround: '2-4 weeks',
        note: 'County processes permits for valley residential and agricultural installations. Flat valley terrain simplifies solar design.'
      },
      climateZone: {
        zone: 'Zone 12 (Sacramento Valley)',
        description: 'Hot valley summers and mild winters. Flat agricultural terrain provides excellent solar conditions. Heat extremes make cooling cost reduction valuable.'
      },
      countyContext: 'Sutter County is a Sacramento Valley agricultural region anchored by Yuba City and Live Oak. Hot valley summers bring excellent solar production at 5.3 peak sun hours. PG&E\'s high rates and extreme heat make solar attractive for reducing cooling costs. Flat terrain and agricultural economy create strong solar market for residential and farm properties.'
    },
    cities: [
      {
        city: 'Yuba City',
        citySlug: 'yuba-city',
        utility: 'PG&E',
        localData: { ...PGE, peakSunHoursEstimate: 5.3 },
        cityProfile: {
          localNote: 'Yuba City is the county seat in the Sacramento Valley with excellent solar conditions. Hot summers and PG&E rates make solar attractive for reducing cooling costs.',
          faq: [
            {
              q: 'Do I need a permit for solar in Yuba City?',
              a: 'Yes. Yuba City requires permits through Sutter County Community Services with typical 2-4 week turnaround. Flat valley terrain simplifies installation. Your solar contractor handles the application.'
            },
            {
              q: 'Is residential solar + battery storage worth it in Yuba City with hot summers?',
              a: 'Absolutely. PG&E rates are $0.44/kWh and extreme valley heat drives cooling costs. Residential solar with battery backup provides savings on AC bills and resilience during heat events. Yuba City gets 5.3 peak sun hours, excellent for solar.'
            },
            {
              q: 'How much sun does Yuba City get for solar?',
              a: 'Yuba City averages 5.3 peak sun hours daily in Zone 12. Sacramento Valley location brings hot summers with clear skies, ideal for solar production. Flat terrain provides easy south-facing installations.'
            }
          ]
        }
      },
      {
        city: 'Live Oak',
        citySlug: 'live-oak',
        utility: 'PG&E',
        localData: { ...PGE, peakSunHoursEstimate: 5.3 },
        cityProfile: {
          localNote: 'Live Oak is a small agricultural town in the valley with excellent solar potential. Hot summers and farming economy make solar attractive for residential and agricultural properties.',
          faq: [
            {
              q: 'Do I need a permit for solar in Live Oak?',
              a: 'Yes. Live Oak requires permits through Sutter County Community Services with 2-4 week processing. Agricultural properties may integrate solar for farm operations. Your installer handles permitting.'
            },
            {
              q: 'Is residential solar + battery storage worth it in Live Oak with PG&E rates?',
              a: 'Yes. PG&E charges $0.44/kWh and valley heat drives high cooling costs. Solar with battery backup provides savings and resilience for residential and farm properties. Live Oak gets 5.3 peak sun hours, excellent for solar.'
            },
            {
              q: 'How much sun does Live Oak get for solar?',
              a: 'Live Oak averages 5.3 peak sun hours daily in Zone 12. Valley agricultural area gets hot summers with clear skies, ideal for solar. Flat terrain simplifies installations.'
            }
          ]
        }
      },
    ],
  },
  {
    county: 'Yuba County',
    regionSlug: 'yuba-county',
    state: 'california',
    countyData: {
      utilityRate: {
        utility: 'PG&E',
        avgResidentialRatePerKwh: 0.44,
        note: 'PG&E serves this Sacramento Valley region with rates averaging $0.44/kWh. Hot summers make solar attractive for reducing cooling costs. Foothills see occasional PSPS events.'
      },
      permitOffice: {
        name: 'Yuba County Community Development',
        jurisdiction: 'Yuba County',
        typicalTurnaround: '2-4 weeks',
        note: 'County processes permits for valley and foothill installations. Flat valley terrain simplifies solar design. Eastern foothills may have wildfire design requirements.'
      },
      climateZone: {
        zone: 'Zone 12 (Sacramento Valley)',
        description: 'Hot valley summers and mild winters. Flat agricultural valley terrain provides excellent solar conditions. Foothills to east see occasional wildfire risk.'
      },
      countyContext: 'Yuba County is a Sacramento Valley region anchored by Marysville and Wheatland. Hot valley summers bring excellent solar production at 5.3 peak sun hours. PG&E\'s high rates and extreme heat make solar attractive for reducing cooling costs. Eastern foothills see occasional PSPS events, making battery backup valuable for those areas.'
    },
    cities: [
      {
        city: 'Marysville',
        citySlug: 'marysville',
        utility: 'PG&E',
        localData: { ...PGE, peakSunHoursEstimate: 5.3 },
        cityProfile: {
          localNote: 'Marysville is the county seat in the Sacramento Valley with excellent solar conditions. Hot summers and PG&E rates make solar attractive for reducing cooling costs.',
          faq: [
            {
              q: 'Do I need a permit for solar in Marysville?',
              a: 'Yes. Marysville requires permits through Yuba County Community Development with typical 2-4 week turnaround. Flat valley terrain simplifies installation. Your solar contractor handles the application.'
            },
            {
              q: 'Is residential solar + battery storage worth it in Marysville with hot summers?',
              a: 'Absolutely. PG&E rates are $0.44/kWh and extreme valley heat drives cooling costs. Residential solar with battery backup provides savings on AC bills and resilience during heat events. Marysville gets 5.3 peak sun hours, excellent for solar.'
            },
            {
              q: 'How much sun does Marysville get for solar?',
              a: 'Marysville averages 5.3 peak sun hours daily in Zone 12. Sacramento Valley location brings hot summers with clear skies, ideal for solar production. Flat terrain provides easy south-facing installations.'
            }
          ]
        }
      },
      {
        city: 'Wheatland',
        citySlug: 'wheatland',
        utility: 'PG&E',
        localData: { ...PGE, peakSunHoursEstimate: 5.3 },
        cityProfile: {
          localNote: 'Wheatland is a small valley town with excellent solar potential. Hot summers and proximity to foothills make solar with battery backup attractive for energy independence.',
          faq: [
            {
              q: 'Do I need a permit for solar in Wheatland?',
              a: 'Yes. Wheatland requires permits through Yuba County Community Development with 2-4 week processing. Valley location simplifies installation. Your installer handles permitting.'
            },
            {
              q: 'Is residential solar + battery storage worth it in Wheatland with PG&E rates?',
              a: 'Yes. PG&E charges $0.44/kWh and valley heat drives high cooling costs. Solar with battery backup provides savings and resilience. Wheatland gets 5.3 peak sun hours, excellent for solar production.'
            },
            {
              q: 'How much sun does Wheatland get for solar?',
              a: 'Wheatland averages 5.3 peak sun hours daily in Zone 12. Valley location gets hot summers with clear skies, ideal for solar. Flat terrain simplifies installations.'
            }
          ]
        }
      },
    ],
  },
  {
    county: 'Amador County',
    regionSlug: 'amador-county',
    state: 'california',
    countyData: {
      utilityRate: {
        utility: 'PG&E',
        avgResidentialRatePerKwh: 0.44,
        note: 'PG&E serves this Gold Rush foothill region with rates averaging $0.44/kWh. Foothill terrain and wildfire risk make battery backup valuable during PSPS events.'
      },
      permitOffice: {
        name: 'Amador County Building Department',
        jurisdiction: 'Amador County',
        typicalTurnaround: '3-4 weeks',
        note: 'County processes permits for foothill installations. Fire-prone areas may require additional wildfire design standards. Most residential solar falls under standard review.'
      },
      climateZone: {
        zone: 'Zone 11-12 (Sierra Foothills)',
        description: 'Warm-summer Mediterranean climate with hot, dry summers and mild, wet winters. Foothill terrain provides excellent solar conditions with minimal coastal fog influence.'
      },
      countyContext: 'Amador County sits in the heart of Gold Rush country with historic towns like Jackson, Sutter Creek, and Ione. Foothill elevations from 1,000 to 2,500 feet bring excellent solar potential at 5.0 peak sun hours. Wildfire risk and PSPS events make battery backup attractive for energy resilience. Wine country and historic tourism drive the local economy.'
    },
    cities: [
      {
        city: 'Jackson',
        citySlug: 'jackson',
        utility: 'PG&E',
        localData: { ...PGE, peakSunHoursEstimate: 5.0 },
        cityProfile: {
          localNote: 'Jackson is the county seat nestled in the Sierra foothills at 1,200 feet elevation. Historic Gold Rush architecture mixes with modern homes, all benefiting from strong foothill sun exposure and high PG&E rates.',
          faq: [
            {
              q: 'Do I need a permit for solar in Jackson?',
              a: 'Yes. Jackson requires permits through Amador County Building Department with typical 3-4 week turnaround. Foothill terrain may require structural review for roof loads. Your solar contractor handles the application process.'
            },
            {
              q: 'Is residential solar + battery storage worth it in Jackson with wildfire risk?',
              a: 'Absolutely. PG&E rates are $0.44/kWh and PSPS shutoffs are common during fire season. Residential solar with battery backup provides energy independence during outages and long-term savings. Jackson gets 5.0 peak sun hours, excellent for year-round production.'
            },
            {
              q: 'How much sun does Jackson get for solar?',
              a: 'Jackson averages 5.0 peak sun hours daily in the Sierra foothills. Warm summers with clear skies and minimal fog bring strong solar production. Foothill location above the valley inversion layer ensures consistent sun exposure year-round.'
            }
          ]
        }
      },
      {
        city: 'Sutter Creek',
        citySlug: 'sutter-creek',
        utility: 'PG&E',
        localData: { ...PGE, peakSunHoursEstimate: 5.1 },
        cityProfile: {
          localNote: 'Sutter Creek is a charming Gold Rush town with historic Main Street and hillside residential areas. Foothill terrain at 1,200 feet elevation brings excellent solar exposure, though south-facing roof orientation matters more on sloped lots.',
          faq: [
            {
              q: 'Do I need a permit for solar in Sutter Creek?',
              a: 'Yes. Sutter Creek requires permits through Amador County Building Department with 3-4 week processing. Historic downtown may have design review for visible installations. Your installer handles permit coordination.'
            },
            {
              q: 'Is residential solar + battery storage worth it in Sutter Creek with PSPS events?',
              a: 'Yes. PG&E charges $0.44/kWh and foothill fire risk brings frequent shutoffs. Solar with battery backup provides resilience during multi-day outages and reduces high electric bills. Sutter Creek gets 5.1 peak sun hours, strong for foothill solar.'
            },
            {
              q: 'How does terrain affect solar in Sutter Creek?',
              a: 'Sutter Creek sits on hillside terrain with many south-facing slopes, ideal for solar panels. North-facing roofs or heavily shaded lots may see reduced production. A site assessment determines best panel placement. Foothill location above valley fog brings reliable sunshine.'
            }
          ]
        }
      },
      {
        city: 'Ione',
        citySlug: 'ione',
        utility: 'PG&E',
        localData: { ...PGE, peakSunHoursEstimate: 5.0 },
        cityProfile: {
          localNote: 'Ione is a small foothill town with rural residential properties and ranch land. Lower density and larger parcels make solar attractive for main homes, guest houses, and agricultural operations.',
          faq: [
            {
              q: 'Do I need a permit for solar in Ione?',
              a: 'Yes. Ione requires permits through Amador County Building Department with 3-4 week turnaround. Rural properties may combine solar with well pumps or barn installations. Your contractor handles permitting for all property types.'
            },
            {
              q: 'Is residential solar + battery storage worth it in Ione for rural properties?',
              a: 'Absolutely. PG&E rates are $0.44/kWh and rural areas see longer outage restoration times during PSPS events. Residential solar with battery backup provides energy independence for homes and agricultural operations. Ione gets 5.0 peak sun hours, excellent for self-sufficiency.'
            },
            {
              q: 'How much sun does Ione get for solar?',
              a: 'Ione averages 5.0 peak sun hours daily in the lower Sierra foothills. Hot, dry summers and minimal coastal fog bring reliable solar production. Rural locations often have unobstructed south-facing exposure, ideal for maximizing panel efficiency.'
            }
          ]
        }
      },
      {
        city: 'Plymouth',
        citySlug: 'plymouth',
        utility: 'PG&E',
        localData: { ...PGE, peakSunHoursEstimate: 5.1 },
        cityProfile: {
          localNote: 'Plymouth is a small foothill town in the heart of Amador wine country. Vineyard estates and residential properties benefit from excellent foothill sun exposure and high elevation above the valley floor.',
          faq: [
            {
              q: 'Do I need a permit for solar in Plymouth?',
              a: 'Yes. Plymouth requires permits through Amador County Building Department with typical 3-4 week processing. Vineyard properties may integrate solar for tasting rooms or agricultural operations. Your installer handles all permit applications.'
            },
            {
              q: 'Is residential solar + battery storage worth it in Plymouth wine country?',
              a: 'Yes. PG&E charges $0.44/kWh and wildfire risk brings PSPS shutoffs during fire season. Solar with battery backup provides resilience for homes and wineries during outages. Plymouth gets 5.1 peak sun hours, strong for foothill solar production.'
            },
            {
              q: 'How much sun does Plymouth get for solar?',
              a: 'Plymouth averages 5.1 peak sun hours daily in the Sierra foothills. Wine country location brings hot summers with clear skies, ideal for solar. Foothill elevation above valley fog ensures consistent sun exposure from spring through fall.'
            }
          ]
        }
      },
    ],
  },
  {
    county: 'Calaveras County',
    regionSlug: 'calaveras-county',
    state: 'california',
    countyData: {
      utilityRate: {
        utility: 'PG&E',
        avgResidentialRatePerKwh: 0.44,
        note: 'PG&E serves this historic Gold Rush region with rates averaging $0.44/kWh. Higher elevations and wildfire zones experience frequent PSPS events, making battery backup essential for resilience.'
      },
      permitOffice: {
        name: 'Calaveras County Planning Department',
        jurisdiction: 'Calaveras County',
        typicalTurnaround: '3-5 weeks',
        note: 'County processes permits for foothill and mountain installations. Fire-prone areas require wildfire design standards. Higher elevations may need snow load calculations for solar racking.'
      },
      climateZone: {
        zone: 'Zone 11-16 (Sierra Foothills to Mountains)',
        description: 'Transition from foothill Mediterranean climate to mountain zones. Lower elevations have hot summers; higher elevations see winter snow. Excellent solar potential across elevation range.'
      },
      countyContext: 'Calaveras County stretches from Gold Rush foothills (Angels Camp, San Andreas) into the high Sierra (Murphys, Arnold). Elevations from 1,000 to 5,000 feet bring varied climate zones but consistent solar potential at 5.0-5.2 peak sun hours. Wildfire risk and PSPS events are significant concerns. Historic caverns and Big Trees State Park anchor tourism economy.'
    },
    cities: [
      {
        city: 'Angels Camp',
        citySlug: 'angels-camp',
        utility: 'PG&E',
        localData: { ...PGE, peakSunHoursEstimate: 5.1 },
        cityProfile: {
          localNote: 'Angels Camp is famous for the Jumping Frog Jubilee and Mark Twain history. Foothill location at 1,400 feet elevation brings excellent solar exposure, though PSPS events during fire season make battery backup valuable.',
          faq: [
            {
              q: 'Do I need a permit for solar in Angels Camp?',
              a: 'Yes. Angels Camp requires permits through Calaveras County Planning Department with typical 3-5 week turnaround. Foothill terrain may require structural review for roof installations. Your solar contractor handles the application process.'
            },
            {
              q: 'Is residential solar + battery storage worth it in Angels Camp with PSPS risk?',
              a: 'Absolutely. PG&E rates are $0.44/kWh and PSPS shutoffs are frequent during dry, windy conditions. Residential solar with battery backup provides energy independence during multi-day outages and long-term savings. Angels Camp gets 5.1 peak sun hours, excellent for reliable production.'
            },
            {
              q: 'How much sun does Angels Camp get for solar?',
              a: 'Angels Camp averages 5.1 peak sun hours daily in the Sierra foothills. Hot summers with clear skies and minimal coastal influence bring strong solar production. Foothill elevation ensures consistent sun exposure above the valley inversion layer.'
            }
          ]
        }
      },
      {
        city: 'San Andreas',
        citySlug: 'san-andreas',
        utility: 'PG&E',
        localData: { ...PGE, peakSunHoursEstimate: 5.0 },
        cityProfile: {
          localNote: 'San Andreas is the county seat nestled in the foothills at 1,000 feet elevation. Government offices and residential areas benefit from foothill sun exposure, though wildfire risk brings frequent PSPS events.',
          faq: [
            {
              q: 'Do I need a permit for solar in San Andreas?',
              a: 'Yes. San Andreas requires permits through Calaveras County Planning Department with 3-5 week processing. County seat location may expedite coordination with building officials. Your installer handles permit applications.'
            },
            {
              q: 'Is residential solar + battery storage worth it in San Andreas with wildfire risk?',
              a: 'Yes. PG&E charges $0.44/kWh and foothill fire zones see regular PSPS shutoffs. Solar with battery backup provides resilience during outages and reduces high electric bills. San Andreas gets 5.0 peak sun hours, strong for foothill solar.'
            },
            {
              q: 'How much sun does San Andreas get for solar?',
              a: 'San Andreas averages 5.0 peak sun hours daily in the lower Sierra foothills. Warm summers with clear skies bring reliable solar production. Foothill location above valley fog ensures consistent sun exposure throughout the year.'
            }
          ]
        }
      },
      {
        city: 'Murphys',
        citySlug: 'murphys',
        utility: 'PG&E',
        localData: { ...PGE, peakSunHoursEstimate: 5.2 },
        cityProfile: {
          localNote: 'Murphys is a picturesque Gold Rush town and wine country destination at 2,200 feet elevation. Higher elevation brings excellent solar exposure, though winter storms and wildfire risk require careful system design.',
          faq: [
            {
              q: 'Do I need a permit for solar in Murphys?',
              a: 'Yes. Murphys requires permits through Calaveras County Planning Department with 3-5 week turnaround. Higher elevation may require snow load calculations for solar racking. Your contractor handles engineering and permitting.'
            },
            {
              q: 'Is residential solar + battery storage worth it in Murphys wine country?',
              a: 'Absolutely. PG&E rates are $0.44/kWh and higher elevation brings longer PSPS outages during fire season. Solar with battery backup provides resilience for homes and wineries. Murphys gets 5.2 peak sun hours, excellent for mountain solar production.'
            },
            {
              q: 'How does elevation affect solar in Murphys?',
              a: 'Murphys sits at 2,200 feet with clearer air and stronger solar radiation than lower elevations. Winter snow may temporarily reduce production, but annual output remains excellent at 5.2 peak sun hours. Higher elevation also brings cooler panel temperatures, improving efficiency in summer.'
            }
          ]
        }
      },
    ],
  },
  {
    county: 'Tuolumne County',
    regionSlug: 'tuolumne-county',
    state: 'california',
    countyData: {
      utilityRate: {
        utility: 'PG&E',
        avgResidentialRatePerKwh: 0.44,
        note: 'PG&E serves this Mother Lode region with rates averaging $0.44/kWh. Higher elevations and wildfire zones experience frequent PSPS events, making battery backup critical for multi-day outage resilience.'
      },
      permitOffice: {
        name: 'Tuolumne County Community Resources Agency',
        jurisdiction: 'Tuolumne County',
        typicalTurnaround: '3-5 weeks',
        note: 'County processes permits for foothill and mountain installations. Wildfire design standards apply in high-risk zones. Snow load calculations required for elevations above 3,000 feet.'
      },
      climateZone: {
        zone: 'Zone 11-16 (Sierra Foothills to Mountains)',
        description: 'Transition from warm foothill climate to mountain zones. Lower elevations have hot, dry summers; higher elevations see winter snow. Excellent solar potential across all elevations.'
      },
      countyContext: 'Tuolumne County spans from Gold Rush foothills (Sonora, Jamestown at 1,800-2,300 feet) into the high Sierra (Twain Harte at 3,600 feet). Gateway to Yosemite National Park. Elevations bring excellent solar potential at 5.0-5.2 peak sun hours, though higher areas require snow load engineering. Wildfire risk and PSPS events are major concerns for energy resilience.'
    },
    cities: [
      {
        city: 'Sonora',
        citySlug: 'sonora',
        utility: 'PG&E',
        localData: { ...PGE, peakSunHoursEstimate: 5.1 },
        cityProfile: {
          localNote: 'Sonora is the county seat and Mother Lode hub at 1,800 feet elevation. Historic downtown and hillside residential areas benefit from strong foothill sun exposure, though wildfire risk makes battery backup essential.',
          faq: [
            {
              q: 'Do I need a permit for solar in Sonora?',
              a: 'Yes. Sonora requires permits through Tuolumne County Community Resources Agency with typical 3-5 week turnaround. Foothill terrain may require structural review for hillside installations. Your solar contractor handles the application process.'
            },
            {
              q: 'Is residential solar + battery storage worth it in Sonora with PSPS risk?',
              a: 'Absolutely. PG&E rates are $0.44/kWh and PSPS shutoffs are frequent during fire season. Residential solar with battery backup provides energy independence during multi-day outages and long-term savings. Sonora gets 5.1 peak sun hours, excellent for year-round production.'
            },
            {
              q: 'How much sun does Sonora get for solar?',
              a: 'Sonora averages 5.1 peak sun hours daily in the Sierra foothills. Hot summers with clear skies and minimal coastal influence bring strong solar production. Foothill elevation ensures consistent sun exposure above valley fog and inversion layers.'
            }
          ]
        }
      },
      {
        city: 'Twain Harte',
        citySlug: 'twain-harte',
        utility: 'PG&E',
        localData: { ...PGE, peakSunHoursEstimate: 5.0 },
        cityProfile: {
          localNote: 'Twain Harte is a mountain community and recreation destination at 3,600 feet elevation. Higher elevation brings excellent solar exposure, though winter snow and tall pines require careful site assessment and snow load engineering.',
          faq: [
            {
              q: 'Do I need a permit for solar in Twain Harte?',
              a: 'Yes. Twain Harte requires permits through Tuolumne County Community Resources Agency with 3-5 week processing. Mountain elevation requires snow load calculations for solar racking. Your contractor handles engineering and permitting.'
            },
            {
              q: 'Is residential solar + battery storage worth it in Twain Harte with winter storms?',
              a: 'Yes. PG&E charges $0.44/kWh and mountain areas see longer outage restoration times during storms and PSPS events. Solar with battery backup provides energy independence year-round. Twain Harte gets 5.0 peak sun hours, strong for mountain solar despite winter snow.'
            },
            {
              q: 'How does snow affect solar in Twain Harte?',
              a: 'Twain Harte sits at 3,600 feet with winter snowfall that temporarily covers panels. Snow slides off steep panel angles within days, and annual production remains excellent at 5.0 peak sun hours. Summer sun at elevation brings higher output to offset winter reductions.'
            }
          ]
        }
      },
      {
        city: 'Jamestown',
        citySlug: 'jamestown',
        utility: 'PG&E',
        localData: { ...PGE, peakSunHoursEstimate: 5.2 },
        cityProfile: {
          localNote: 'Jamestown is a historic Gold Rush town at 2,300 feet elevation with Victorian architecture and Railtown 1897 State Historic Park. Foothill location brings excellent solar exposure and high PG&E rates make solar attractive.',
          faq: [
            {
              q: 'Do I need a permit for solar in Jamestown?',
              a: 'Yes. Jamestown requires permits through Tuolumne County Community Resources Agency with 3-5 week turnaround. Historic properties may need design review for visible installations. Your installer handles permit coordination.'
            },
            {
              q: 'Is residential solar + battery storage worth it in Jamestown with wildfire risk?',
              a: 'Absolutely. PG&E rates are $0.44/kWh and foothill fire zones see frequent PSPS shutoffs. Solar with battery backup provides resilience during outages and reduces high electric bills. Jamestown gets 5.2 peak sun hours, excellent for foothill solar production.'
            },
            {
              q: 'How much sun does Jamestown get for solar?',
              a: 'Jamestown averages 5.2 peak sun hours daily in the Sierra foothills. Hot, dry summers with clear skies bring strong solar production. Foothill elevation at 2,300 feet ensures consistent sun exposure and cooler panel temperatures than valley locations.'
            }
          ]
        }
      },
    ],
  },
  {
    county: 'Mariposa County',
    regionSlug: 'mariposa-county',
    state: 'california',
    countyData: {
      utilityRate: {
        utility: 'PG&E',
        avgResidentialRatePerKwh: 0.44,
        note: 'PG&E serves this gateway to Yosemite with rates averaging $0.44/kWh. Mountain terrain and wildfire zones experience frequent PSPS events, making battery backup essential for multi-day outage resilience.'
      },
      permitOffice: {
        name: 'Mariposa County Planning Department',
        jurisdiction: 'Mariposa County',
        typicalTurnaround: '3-5 weeks',
        note: 'County processes permits for mountain and foothill installations. Wildfire design standards apply throughout. Higher elevations require snow load calculations. Rural properties may need septic clearance.'
      },
      climateZone: {
        zone: 'Zone 11-16 (Sierra Foothills to Mountains)',
        description: 'Foothill Mediterranean climate transitioning to mountain zones at higher elevations. Hot, dry summers and mild winters at lower elevations. Excellent solar potential across elevation range.'
      },
      countyContext: 'Mariposa County is the gateway to Yosemite National Park with the town of Mariposa at 2,000 feet elevation. Foothill terrain and mountain climate bring excellent solar potential at 5.1 peak sun hours. Wildfire risk and PSPS events are significant concerns for energy resilience. Tourism and historic Gold Rush heritage anchor the local economy.'
    },
    cities: [
      {
        city: 'Mariposa',
        citySlug: 'mariposa',
        utility: 'PG&E',
        localData: { ...PGE, peakSunHoursEstimate: 5.1 },
        cityProfile: {
          localNote: 'Mariposa is the gateway town to Yosemite at 2,000 feet elevation with historic downtown and hillside residential areas. Mountain foothill location brings excellent solar exposure, though wildfire risk makes battery backup critical.',
          faq: [
            {
              q: 'Do I need a permit for solar in Mariposa?',
              a: 'Yes. Mariposa requires permits through Mariposa County Planning Department with typical 3-5 week turnaround. Mountain terrain may require structural review for hillside installations. Your solar contractor handles the application process.'
            },
            {
              q: 'Is residential solar + battery storage worth it in Mariposa with PSPS risk?',
              a: 'Absolutely. PG&E rates are $0.44/kWh and PSPS shutoffs are frequent during fire season in this Yosemite gateway area. Residential solar with battery backup provides energy independence during multi-day outages. Mariposa gets 5.1 peak sun hours, excellent for mountain foothill solar.'
            },
            {
              q: 'How much sun does Mariposa get for solar?',
              a: 'Mariposa averages 5.1 peak sun hours daily at 2,000 feet elevation in the Sierra foothills. Hot summers with clear skies and minimal coastal influence bring strong solar production. Mountain foothill location ensures consistent sun exposure and cooler panel temperatures than valley areas.'
            }
          ]
        }
      },
    ],
  },
  {
    county: 'Madera County',
    regionSlug: 'madera-county',
    state: 'california',
    countyData: {
      utilityRate: {
        utility: 'PG&E',
        avgResidentialRatePerKwh: 0.44,
        note: 'PG&E serves this San Joaquin Valley region with rates averaging $0.44/kWh. Valley floor sees extreme heat; eastern foothills near Yosemite experience PSPS events during fire season.'
      },
      permitOffice: {
        name: 'Madera County Building Department',
        jurisdiction: 'Madera County',
        typicalTurnaround: '2-4 weeks',
        note: 'County processes permits for valley and mountain installations. Valley floor sees straightforward permitting; eastern foothill areas may require wildfire design standards. Incorporated cities may have separate processes.'
      },
      climateZone: {
        zone: 'Zone 13-16 (Central Valley to Sierra Foothills)',
        description: 'Hot valley summers with extreme heat in lower elevations. Foothills transition to mountain climate. Excellent solar potential across elevation range with valley averaging 5.4+ peak sun hours.'
      },
      countyContext: 'Madera County spans from the San Joaquin Valley floor (Madera, Chowchilla) to the Sierra Nevada gateway (Oakhurst near Yosemite). Valley areas experience extreme summer heat and excellent solar potential at 5.4 peak sun hours. Eastern foothills see wildfire risk and PSPS events. Agriculture and tourism drive the economy.'
    },
    cities: [
      {
        city: 'Madera',
        citySlug: 'madera',
        utility: 'PG&E',
        localData: { ...PGE, peakSunHoursEstimate: 5.4 },
        cityProfile: {
          localNote: 'Madera is the county seat in the San Joaquin Valley with extreme summer heat and flat terrain ideal for solar. Agricultural economy and valley heat make solar attractive for reducing high cooling costs.',
          faq: [
            {
              q: 'Do I need a permit for solar in Madera?',
              a: 'Yes. Madera requires permits through Madera County Building Department with typical 2-4 week turnaround. Valley floor location simplifies installation with minimal terrain constraints. Your solar contractor handles the application process.'
            },
            {
              q: 'Is residential solar + battery storage worth it in Madera with extreme valley heat?',
              a: 'Absolutely. PG&E rates are $0.44/kWh and valley temperatures regularly exceed 100°F in summer, driving extreme cooling costs. Residential solar with battery backup provides savings on AC bills and resilience during heat events. Madera gets 5.4 peak sun hours, excellent for solar.'
            },
            {
              q: 'How much sun does Madera get for solar?',
              a: 'Madera averages 5.4 peak sun hours daily in the San Joaquin Valley. Flat terrain and extreme summer heat bring strong solar production year-round. Valley location has minimal coastal fog, ideal for consistent solar output.'
            }
          ]
        }
      },
      {
        city: 'Chowchilla',
        citySlug: 'chowchilla',
        utility: 'PG&E',
        localData: { ...PGE, peakSunHoursEstimate: 5.4 },
        cityProfile: {
          localNote: 'Chowchilla is a small valley town with agricultural economy and flat terrain. Extreme summer heat and PG&E rates make solar attractive for reducing cooling costs on homes and farm operations.',
          faq: [
            {
              q: 'Do I need a permit for solar in Chowchilla?',
              a: 'Yes. Chowchilla requires permits through Madera County Building Department with 2-4 week processing. Agricultural properties may integrate solar for irrigation pumps or farm buildings. Your installer handles permitting for all property types.'
            },
            {
              q: 'Is residential solar + battery storage worth it in Chowchilla for farms?',
              a: 'Yes. PG&E charges $0.44/kWh and valley heat drives high cooling and irrigation costs. Solar with battery backup provides savings for residential and agricultural operations. Chowchilla gets 5.4 peak sun hours, excellent for farm solar production.'
            },
            {
              q: 'How much sun does Chowchilla get for solar?',
              a: 'Chowchilla averages 5.4 peak sun hours daily in the San Joaquin Valley. Flat agricultural terrain and extreme summer heat bring strong solar production. Valley location has clear skies year-round, ideal for maximizing solar output.'
            }
          ]
        }
      },
      {
        city: 'Oakhurst',
        citySlug: 'oakhurst',
        utility: 'PG&E',
        localData: { ...PGE, peakSunHoursEstimate: 5.2 },
        cityProfile: {
          localNote: 'Oakhurst is a foothill community and southern gateway to Yosemite at 2,300 feet elevation. Higher elevation brings excellent solar exposure, though wildfire risk and PSPS events make battery backup essential.',
          faq: [
            {
              q: 'Do I need a permit for solar in Oakhurst?',
              a: 'Yes. Oakhurst requires permits through Madera County Building Department with 2-4 week turnaround. Foothill location may require wildfire design standards and structural review for hillside installations. Your contractor handles permitting.'
            },
            {
              q: 'Is residential solar + battery storage worth it in Oakhurst near Yosemite?',
              a: 'Absolutely. PG&E rates are $0.44/kWh and foothill fire zones see frequent PSPS shutoffs. Solar with battery backup provides resilience during multi-day outages and reduces high electric bills. Oakhurst gets 5.2 peak sun hours, excellent for foothill solar.'
            },
            {
              q: 'How much sun does Oakhurst get for solar?',
              a: 'Oakhurst averages 5.2 peak sun hours daily at 2,300 feet elevation in the Sierra foothills. Warm summers with clear skies bring strong solar production. Foothill location above valley fog and cooler temperatures than valley floor improve panel efficiency.'
            }
          ]
        }
      },
    ],
  },
  {
    county: 'Inyo County',
    regionSlug: 'inyo-county',
    state: 'california',
    countyData: {
      utilityRate: {
        utility: 'SCE / LADWP',
        avgResidentialRatePerKwh: 0.40,
        note: 'Southern California Edison (SCE) and Los Angeles Department of Water and Power (LADWP) serve different parts of Inyo County. Rates average $0.40/kWh. Remote desert and mountain locations make energy independence attractive.'
      },
      permitOffice: {
        name: 'Inyo County Planning Department',
        jurisdiction: 'Inyo County',
        typicalTurnaround: '3-5 weeks',
        note: 'County processes permits for high desert and mountain installations. Remote locations may require standalone solar system design review. Higher elevations need snow load calculations. Wind zones may require additional racking engineering.'
      },
      climateZone: {
        zone: 'Zone 14-16 (High Desert to Mountains)',
        description: 'High desert climate with extreme temperature swings and low humidity. Eastern Sierra mountains see winter snow. Excellent solar potential across all elevations with minimal cloud cover year-round.'
      },
      countyContext: 'Inyo County spans the Owens Valley and Eastern Sierra from Bishop at 4,100 feet to mountain peaks above 14,000 feet. High desert location brings exceptional solar potential at 6.0 peak sun hours, among the best in California. Remote locations and utility costs make solar with battery storage attractive. Death Valley National Park and Mount Whitney anchor tourism economy.'
    },
    cities: [
      {
        city: 'Bishop',
        citySlug: 'bishop',
        utility: 'SCE',
        localData: { ...SCE, peakSunHoursEstimate: 6.0 },
        cityProfile: {
          localNote: 'Bishop is the Eastern Sierra hub at 4,100 feet elevation with high desert climate and exceptional solar exposure. Clear skies and high elevation bring some of the best solar potential in California, ideal for solar + battery storage systems.',
          faq: [
            {
              q: 'Do I need a permit for solar in Bishop?',
              a: 'Yes. Bishop requires permits through Inyo County Planning Department with typical 3-5 week turnaround. High desert location may require wind load calculations for solar racking. Your solar contractor handles the application process.'
            },
            {
              q: 'Is residential solar + battery storage worth it in Bishop with high desert sun?',
              a: 'Absolutely. SCE rates average $0.40/kWh and Bishop gets 6.0 peak sun hours, exceptional for solar production. High desert location with clear skies year-round makes solar with battery backup ideal for energy independence and long-term savings.'
            },
            {
              q: 'How much sun does Bishop get for solar?',
              a: 'Bishop averages 6.0 peak sun hours daily in the Eastern Sierra high desert, among the highest in California. Clear skies, high elevation at 4,100 feet, and low humidity bring exceptional solar production year-round. Winter snow is minimal compared to western Sierra slopes.'
            }
          ]
        }
      },
      {
        city: 'Lone Pine',
        citySlug: 'lone-pine',
        utility: 'LADWP',
        localData: { ...LADWP, peakSunHoursEstimate: 6.0 },
        cityProfile: {
          localNote: 'Lone Pine is a small Owens Valley town at 3,700 feet elevation with high desert climate and Mount Whitney views. Exceptional solar exposure and remote location make solar with battery storage attractive for energy independence.',
          faq: [
            {
              q: 'Do I need a permit for solar in Lone Pine?',
              a: 'Yes. Lone Pine requires permits through Inyo County Planning Department with 3-5 week processing. High desert location may require wind and seismic calculations for solar installations. Your installer handles permitting.'
            },
            {
              q: 'Is residential solar + battery storage worth it in Lone Pine with remote location?',
              a: 'Yes. LADWP rates and remote Owens Valley location make energy independence attractive. Lone Pine gets 6.0 peak sun hours with clear skies year-round, exceptional for solar with battery backup. High desert climate ensures reliable production.'
            },
            {
              q: 'How much sun does Lone Pine get for solar?',
              a: 'Lone Pine averages 6.0 peak sun hours daily in the high desert Owens Valley, among the best in California. Clear skies, high elevation at 3,700 feet, and minimal precipitation bring exceptional solar production. Mount Whitney views come with world-class solar potential.'
            }
          ]
        }
      },
    ],
  },
  {
    county: 'Mono County',
    regionSlug: 'mono-county',
    state: 'california',
    countyData: {
      utilityRate: {
        utility: 'Liberty Utilities / SCE',
        avgResidentialRatePerKwh: 0.40,
        note: 'Liberty Utilities (formerly CalPeco) serves Mammoth Lakes area; Southern California Edison (SCE) serves other regions. Rates average $0.40/kWh. High elevation and remote mountain locations make energy independence attractive.'
      },
      permitOffice: {
        name: 'Mono County Community Development',
        jurisdiction: 'Mono County',
        typicalTurnaround: '3-5 weeks',
        note: 'County processes permits for mountain and high desert installations. High elevation requires snow load calculations. Mammoth Lakes has separate town permitting. Wind zones may require additional racking engineering.'
      },
      climateZone: {
        zone: 'Zone 16 (High Sierra Mountains)',
        description: 'High mountain climate with cold winters and heavy snowfall at upper elevations. Eastern Sierra high desert valleys have milder conditions. Excellent solar potential despite winter snow due to high elevation and clear skies.'
      },
      countyContext: 'Mono County spans the Eastern Sierra from Bridgeport at 6,500 feet to Mammoth Lakes at 7,900 feet. High elevation brings exceptional solar potential at 4.8-5.8 peak sun hours despite winter snow. Clear mountain air and low humidity enhance solar production. Remote location and winter storms make battery backup valuable. Tourism and outdoor recreation drive the economy.'
    },
    cities: [
      {
        city: 'Mammoth Lakes',
        citySlug: 'mammoth-lakes',
        utility: 'Liberty Utilities',
        localData: { ...SCE, peakSunHoursEstimate: 4.8 },
        cityProfile: {
          localNote: 'Mammoth Lakes is a high Sierra resort town at 7,900 feet elevation with heavy winter snowfall and exceptional summer sun. Year-round tourism and remote mountain location make solar with battery backup attractive despite winter challenges.',
          faq: [
            {
              q: 'Do I need a permit for solar in Mammoth Lakes?',
              a: 'Yes. Mammoth Lakes requires permits through Town of Mammoth Lakes with separate process from Mono County. High elevation requires snow load calculations for solar racking. Your contractor handles engineering and permitting for mountain installations.'
            },
            {
              q: 'Is residential solar + battery storage worth it in Mammoth Lakes with winter snow?',
              a: 'Yes, with proper design. Liberty Utilities rates and remote mountain location make energy independence attractive. Mammoth gets 4.8 peak sun hours with exceptional summer production at high elevation. Steep panel angles shed snow, and battery backup provides resilience during winter storms.'
            },
            {
              q: 'How does snow affect solar in Mammoth Lakes?',
              a: 'Mammoth sits at 7,900 feet with heavy winter snowfall that temporarily covers panels. Steep panel angles and snow slides restore production within days. Summer sun at high elevation is exceptionally strong, offsetting winter reductions. Annual production averages 4.8 peak sun hours, viable for solar.'
            }
          ]
        }
      },
      {
        city: 'Bridgeport',
        citySlug: 'bridgeport',
        utility: 'SCE',
        localData: { ...SCE, peakSunHoursEstimate: 5.8 },
        cityProfile: {
          localNote: 'Bridgeport is a remote Eastern Sierra town and county seat at 6,500 feet elevation with high desert climate. Clear skies and high elevation bring excellent solar exposure, though winter snow and wind require robust system design.',
          faq: [
            {
              q: 'Do I need a permit for solar in Bridgeport?',
              a: 'Yes. Bridgeport requires permits through Mono County Community Development with 3-5 week turnaround. High elevation requires snow and wind load calculations for solar racking. Your installer handles engineering and permitting.'
            },
            {
              q: 'Is residential solar + battery storage worth it in Bridgeport with remote location?',
              a: 'Absolutely. SCE rates and remote mountain valley location make energy independence attractive. Bridgeport gets 5.8 peak sun hours with clear high desert skies year-round. Residential solar with battery backup provides resilience during winter storms and long-term savings.'
            },
            {
              q: 'How much sun does Bridgeport get for solar?',
              a: 'Bridgeport averages 5.8 peak sun hours daily at 6,500 feet elevation in the Eastern Sierra. Clear high desert skies, high elevation, and low humidity bring exceptional solar production. Winter snow is present but less than western Sierra slopes, allowing strong annual output.'
            }
          ]
        }
      },
    ],
  },
  {
    county: 'Alpine County',
    regionSlug: 'alpine-county',
    state: 'california',
    countyData: {
      utilityRate: {
        utility: 'Liberty Utilities',
        avgResidentialRatePerKwh: 0.40,
        note: 'Liberty Utilities (formerly CalPeco) serves this remote High Sierra county. Rates average $0.40/kWh. Remote mountain location and winter storms make energy independence with battery backup highly attractive.'
      },
      permitOffice: {
        name: 'Alpine County Community Development',
        jurisdiction: 'Alpine County',
        typicalTurnaround: '3-5 weeks',
        note: 'County processes permits for high mountain installations. Snow load calculations required for all elevations. Remote location may extend coordination timelines. Solar + battery storage systems common given limited grid infrastructure.'
      },
      climateZone: {
        zone: 'Zone 16 (High Sierra Mountains)',
        description: 'High mountain climate with cold winters and heavy snowfall. Short summers with intense sun at elevation. Excellent solar potential despite winter challenges due to high elevation and clear mountain air.'
      },
      countyContext: 'Alpine County is the least populous county in California, spanning the High Sierra around Markleeville at 5,500 feet elevation. Remote mountain location brings excellent solar potential at 5.0 peak sun hours despite winter snow. Clear mountain air and high elevation enhance solar production. Limited grid infrastructure makes solar with battery storage attractive. Tourism and outdoor recreation drive the small economy.'
    },
    cities: [
      {
        city: 'Markleeville',
        citySlug: 'markleeville',
        utility: 'Liberty Utilities',
        localData: { ...SCE, peakSunHoursEstimate: 5.0 },
        cityProfile: {
          localNote: 'Markleeville is the county seat and only town in Alpine County at 5,500 feet elevation. Remote High Sierra location and winter snow make solar with battery backup essential for energy independence and resilience.',
          faq: [
            {
              q: 'Do I need a permit for solar in Markleeville?',
              a: 'Yes. Markleeville requires permits through Alpine County Community Development with 3-5 week turnaround. High mountain elevation requires snow load calculations for solar racking. Your contractor handles engineering and permitting for remote mountain installations.'
            },
            {
              q: 'Is residential solar + battery storage worth it in remote Markleeville?',
              a: 'Absolutely. Liberty Utilities rates and remote High Sierra location make energy independence essential. Markleeville gets 5.0 peak sun hours with strong summer production at elevation. Residential solar with battery backup provides resilience during winter storms when grid access may be limited.'
            },
            {
              q: 'How does mountain elevation affect solar in Markleeville?',
              a: 'Markleeville sits at 5,500 feet with clear mountain air that enhances solar radiation. Winter snow temporarily reduces production, but steep panel angles shed snow quickly. Summer sun at elevation is exceptionally strong, offsetting winter reductions. Annual output averages 5.0 peak sun hours, viable for mountain solar.'
            }
          ]
        }
      },
    ],
  },
  {
    county: 'Sierra County',
    regionSlug: 'sierra-county',
    state: 'california',
    countyData: {
      utilityRate: {
        utility: 'PG&E / Plumas-Sierra REC',
        avgResidentialRatePerKwh: 0.44,
        note: 'PG&E serves most areas; Plumas-Sierra Rural Electric Cooperative (REC) serves some northern regions. PG&E rates average $0.44/kWh. Remote mountain location and winter storms make energy independence with battery backup highly attractive.'
      },
      permitOffice: {
        name: 'Sierra County Planning Department',
        jurisdiction: 'Sierra County',
        typicalTurnaround: '3-5 weeks',
        note: 'County processes permits for mountain installations. Snow load calculations required for all elevations above 4,000 feet. Remote location may extend coordination timelines. Wildfire design standards apply in forested areas.'
      },
      climateZone: {
        zone: 'Zone 16 (High Sierra Mountains)',
        description: 'High mountain climate with cold winters and heavy snowfall. Short summers with intense sun at elevation. Excellent solar potential despite winter challenges due to high elevation and clear mountain air.'
      },
      countyContext: 'Sierra County is a remote northern Sierra region with towns like Loyalton and Downieville at 4,000-5,000 feet elevation. Gold Rush history and mountain terrain bring excellent solar potential at 5.0 peak sun hours despite winter snow. Remote location and PSPS events make battery backup valuable. Tourism, forestry, and outdoor recreation drive the economy.'
    },
    cities: [
      {
        city: 'Loyalton',
        citySlug: 'loyalton',
        utility: 'PG&E',
        localData: { ...PGE, peakSunHoursEstimate: 5.0 },
        cityProfile: {
          localNote: 'Loyalton is a small mountain town in Sierra Valley at 5,000 feet elevation with cold winters and clear summer skies. Remote location and winter storms make solar with battery backup attractive for energy independence.',
          faq: [
            {
              q: 'Do I need a permit for solar in Loyalton?',
              a: 'Yes. Loyalton requires permits through Sierra County Planning Department with 3-5 week turnaround. Mountain elevation requires snow load calculations for solar racking. Your contractor handles engineering and permitting for remote mountain installations.'
            },
            {
              q: 'Is residential solar + battery storage worth it in remote Loyalton?',
              a: 'Yes. PG&E charges $0.44/kWh and remote mountain location brings longer outage restoration times during winter storms. Solar with battery backup provides energy independence and resilience. Loyalton gets 5.0 peak sun hours, strong for mountain solar despite winter snow.'
            },
            {
              q: 'How much sun does Loyalton get for solar?',
              a: 'Loyalton averages 5.0 peak sun hours daily at 5,000 feet elevation in Sierra Valley. Clear mountain air and high elevation enhance solar production. Winter snow temporarily reduces output, but steep panel angles and strong summer sun bring viable annual production.'
            }
          ]
        }
      },
      {
        city: 'Downieville',
        citySlug: 'downieville',
        utility: 'PG&E',
        localData: { ...PGE, peakSunHoursEstimate: 5.0 },
        cityProfile: {
          localNote: 'Downieville is a historic Gold Rush town and county seat at 2,900 feet elevation in a steep river canyon. Mountain terrain and forest shading require careful site assessment, though south-facing slopes benefit from strong solar exposure.',
          faq: [
            {
              q: 'Do I need a permit for solar in Downieville?',
              a: 'Yes. Downieville requires permits through Sierra County Planning Department with 3-5 week processing. Canyon terrain and forest may require site-specific shading analysis. Your installer handles permitting and site assessment.'
            },
            {
              q: 'Is residential solar + battery storage worth it in historic Downieville?',
              a: 'Yes. PG&E rates are $0.44/kWh and remote canyon location brings PSPS shutoffs and storm outages. Solar with battery backup provides resilience and energy independence. Downieville gets 5.0 peak sun hours on unshaded south-facing sites, viable for mountain solar.'
            },
            {
              q: 'How does canyon terrain affect solar in Downieville?',
              a: 'Downieville sits in a steep river canyon with tall pines that can shade north-facing slopes. South-facing properties above tree line get excellent sun exposure at 5.0 peak sun hours. A site assessment determines shading impact and optimal panel placement for canyon terrain.'
            }
          ]
        }
      },
    ],
  },
  {
    county: 'Monterey County',
    regionSlug: 'monterey-county',
    state: 'california',
    countyData: {
      utilityRate: {
        utility: 'PG&E',
        avgResidentialRatePerKwh: 0.44,
        note: 'PG&E serves all of Monterey County with rates averaging $0.44/kWh. High energy costs combined with excellent solar potential in the Salinas Valley make solar and battery systems very attractive for both coastal and inland areas.'
      },
      permitOffice: {
        name: 'Monterey County Resource Management Agency',
        jurisdiction: 'Monterey County',
        typicalTurnaround: '2-4 weeks',
        note: 'Monterey County processes solar permits through RMA Building Services with typical 2-4 week turnaround. Coastal zones may require additional environmental review. Incorporated cities like Salinas and Monterey have separate building departments.'
      },
      climateZone: {
        zone: 'Zone 3 (Coastal) / Zone 13 (Inland)',
        description: 'Monterey County spans mild coastal fog zones (Monterey, Seaside) and hot inland agricultural valleys (Salinas, King City). Coastal areas see marine layer mornings with afternoon sun; inland valleys experience hot summers with strong solar production and high cooling loads.'
      },
      countyContext: 'Monterey County stretches from the foggy Pacific coast to the hot Salinas Valley agricultural heartland. Coastal cities like Monterey and Seaside have mild Mediterranean climates with marine layer influence, while inland areas like Salinas and King City see intense summer heat ideal for solar production. High PG&E rates and frequent summer power demands make solar plus battery an excellent investment across the entire county.'
    },
    cities: [
      {
        city: 'Salinas',
        citySlug: 'salinas',
        utility: 'PG&E',
        localData: { ...PGE, peakSunHoursEstimate: 5.4 },
        cityProfile: {
          localNote: 'Salinas is the county seat and agricultural capital of the Salinas Valley, experiencing hot inland summers with minimal fog and strong solar potential. The city\'s flat valley terrain and high cooling demand make solar an ideal energy solution.',
          faq: [
            {
              q: 'Do I need a permit for solar in Salinas?',
              a: 'Yes. Salinas has its own building department that processes solar permits separately from the county. Typical turnaround is 2-3 weeks for standard rooftop systems. Your solar installer handles all permitting and inspections.'
            },
            {
              q: 'Is residential solar + battery storage worth it in Salinas with PG&E rates?',
              a: 'Absolutely. PG&E charges $0.44/kWh in Salinas, and the hot valley climate drives high summer AC bills. Residential solar with battery storage locks in your energy costs and provides resilience during grid outages. Salinas gets an estimated 5.4 peak sun hours daily — excellent for solar production.'
            },
            {
              q: 'How much sun does Salinas get for solar?',
              a: 'Salinas averages an estimated 5.4 peak sun hours per day, well above the coastal fog zone. The inland Salinas Valley has minimal marine layer influence, delivering consistent year-round solar production with strong summer peak output aligned with air conditioning demand.'
            }
          ]
        }
      },
      {
        city: 'Monterey',
        citySlug: 'monterey',
        utility: 'PG&E',
        localData: { ...PGE, peakSunHoursEstimate: 5.0 },
        cityProfile: {
          localNote: 'Monterey sits on the scenic Pacific coast with morning marine layer that typically clears by midday. Coastal fog reduces solar production slightly compared to inland areas, but the mild climate keeps energy demand moderate and solar still provides strong year-round value.',
          faq: [
            {
              q: 'Do I need a permit for solar in Monterey?',
              a: 'Yes. The City of Monterey Building Division processes solar permits with typical 2-4 week turnaround. Coastal zone properties may require additional environmental review. Your installer coordinates all permits and inspections.'
            },
            {
              q: 'Is residential solar + battery storage worth it in coastal Monterey?',
              a: 'Yes. Even with morning fog, Monterey gets an estimated 5.0 peak sun hours daily as marine layer burns off by afternoon. PG&E rates at $0.44/kWh and moderate coastal energy use make solar with battery backup a smart investment for energy independence and cost savings.'
            },
            {
              q: 'How does fog affect solar in Monterey?',
              a: 'Monterey experiences morning marine layer that typically clears by late morning or early afternoon. This reduces solar output slightly compared to inland valleys, but the city still achieves an estimated 5.0 peak sun hours daily — viable for strong solar production and savings on high PG&E bills.'
            }
          ]
        }
      },
      {
        city: 'Seaside',
        citySlug: 'seaside',
        utility: 'PG&E',
        localData: { ...PGE, peakSunHoursEstimate: 5.0 },
        cityProfile: {
          localNote: 'Seaside is a coastal community just inland from Monterey Bay with mild year-round climate and morning marine layer similar to Monterey. The city\'s moderate energy use and high PG&E rates make solar plus battery a cost-effective choice.',
          faq: [
            {
              q: 'Do I need a permit for solar in Seaside?',
              a: 'Yes. Seaside processes solar permits through the City Building Division with typical 2-3 week turnaround. Standard rooftop installations are straightforward; your installer handles all paperwork and inspections.'
            },
            {
              q: 'Is residential solar + battery storage worth it in Seaside with coastal fog?',
              a: 'Yes. Despite morning fog, Seaside gets an estimated 5.0 peak sun hours daily as the marine layer burns off. PG&E rates at $0.44/kWh make solar plus battery storage a strong financial decision, locking in energy costs and providing backup power during outages.'
            },
            {
              q: 'How much sun does Seaside get for solar?',
              a: 'Seaside averages an estimated 5.0 peak sun hours per day. The coastal location brings morning fog that typically clears by midday, allowing strong afternoon solar production. The mild climate keeps overall energy use moderate, enhancing solar return on investment.'
            }
          ]
        }
      },
      {
        city: 'Marina',
        citySlug: 'marina',
        utility: 'PG&E',
        localData: { ...PGE, peakSunHoursEstimate: 5.1 },
        cityProfile: {
          localNote: 'Marina sits on the north end of Monterey Bay with coastal dune terrain and morning fog that clears earlier than Monterey proper. The city\'s flat layout and moderate climate create ideal conditions for rooftop solar installations.',
          faq: [
            {
              q: 'Do I need a permit for solar in Marina?',
              a: 'Yes. Marina requires permits through the City Building Department with typical 2-3 week processing. Coastal properties may need additional review; your solar installer manages all permitting and coordinates inspections.'
            },
            {
              q: 'Is residential solar + battery storage worth it in Marina?',
              a: 'Yes. Marina gets an estimated 5.1 peak sun hours daily as morning fog burns off earlier than deeper coastal areas. PG&E rates at $0.44/kWh combined with moderate coastal energy use make solar with battery storage an excellent long-term investment.'
            },
            {
              q: 'How does Marina\'s coastal location affect solar?',
              a: 'Marina experiences morning marine layer but typically clears earlier than Monterey proper due to its position at the north bay. This yields an estimated 5.1 peak sun hours daily — strong solar production potential that pairs well with the mild coastal climate and high utility rates.'
            }
          ]
        }
      },
      {
        city: 'King City',
        citySlug: 'king-city',
        utility: 'PG&E',
        localData: { ...PGE, peakSunHoursEstimate: 5.6 },
        cityProfile: {
          localNote: 'King City sits in the hot southern Salinas Valley with minimal coastal influence and intense summer heat. The city\'s agricultural setting and very high cooling demand make solar plus battery ideal for managing peak energy costs.',
          faq: [
            {
              q: 'Do I need a permit for solar in King City?',
              a: 'Yes. King City processes solar permits through the City Building Department with typical 2-4 week turnaround. The straightforward permitting process and flat valley terrain make installations smooth; your installer handles all coordination.'
            },
            {
              q: 'Is residential solar + battery storage worth it in hot King City?',
              a: 'Absolutely. King City experiences very hot summers driving high AC bills on PG&E\'s $0.44/kWh rates. Residential solar with battery storage locks in energy costs and handles peak cooling loads. King City gets an estimated 5.6 peak sun hours daily — excellent for solar production.'
            },
            {
              q: 'How much sun does King City get for solar?',
              a: 'King City averages an estimated 5.6 peak sun hours per day, among the highest in Monterey County. The inland southern valley location has minimal fog and intense summer sun, delivering strong year-round solar output aligned with high summer air conditioning demand.'
            }
          ]
        }
      },
    ],
  },
  {
    county: 'Santa Cruz County',
    regionSlug: 'santa-cruz-county',
    state: 'california',
    countyData: {
      utilityRate: {
        utility: 'PG&E',
        avgResidentialRatePerKwh: 0.44,
        note: 'PG&E serves all of Santa Cruz County with residential rates averaging $0.44/kWh. High utility costs paired with an environmentally conscious community and strong coastal solar potential make solar and battery systems very popular.'
      },
      permitOffice: {
        name: 'Santa Cruz County Planning Department',
        jurisdiction: 'Santa Cruz County',
        typicalTurnaround: '3-5 weeks',
        note: 'Santa Cruz County processes solar permits through Planning Department Building Services with typical 3-5 week turnaround. Coastal zone properties require Coastal Commission review. Incorporated cities like Santa Cruz and Watsonville have separate building departments.'
      },
      climateZone: {
        zone: 'Zone 3 (Coastal)',
        description: 'Santa Cruz County has a mild Mediterranean coastal climate with morning marine layer that typically burns off by midday. Cool summers and mild winters keep energy demand moderate while still providing strong solar production potential, especially on south-facing slopes above the fog line.'
      },
      countyContext: 'Santa Cruz County stretches along the northern Monterey Bay with iconic coastal redwood terrain and a strong environmental ethos. Morning fog is common but typically clears by afternoon, yielding solid solar production. The county\'s progressive community, high PG&E rates, and frequent grid outages during winter storms make solar plus battery storage highly attractive for energy independence and resilience.'
    },
    cities: [
      {
        city: 'Santa Cruz',
        citySlug: 'santa-cruz',
        utility: 'PG&E',
        localData: { ...PGE, peakSunHoursEstimate: 4.9 },
        cityProfile: {
          localNote: 'Santa Cruz is a coastal city with morning fog that typically clears by midday, revealing strong afternoon sun. The city\'s environmentally conscious community and high PG&E rates drive strong adoption of solar plus battery for clean energy independence.',
          faq: [
            {
              q: 'Do I need a permit for solar in Santa Cruz?',
              a: 'Yes. The City of Santa Cruz Planning and Community Development Department processes solar permits with typical 3-4 week turnaround. Coastal properties may require additional review; your installer handles all permitting and coordinates inspections.'
            },
            {
              q: 'Is residential solar + battery storage worth it in Santa Cruz with coastal fog?',
              a: 'Yes. Santa Cruz gets an estimated 4.9 peak sun hours daily as morning fog burns off by afternoon. PG&E rates at $0.44/kWh and the city\'s strong environmental values make solar with battery storage both economically and ecologically attractive. Winter storm outages also make battery backup highly valuable.'
            },
            {
              q: 'How much sun does Santa Cruz get for solar?',
              a: 'Santa Cruz averages an estimated 4.9 peak sun hours per day. Morning marine layer typically clears by late morning or early afternoon, allowing strong solar production. South-facing rooftops and hillside properties above the fog line capture even more sun for excellent year-round output.'
            }
          ]
        }
      },
      {
        city: 'Watsonville',
        citySlug: 'watsonville',
        utility: 'PG&E',
        localData: { ...PGE, peakSunHoursEstimate: 5.1 },
        cityProfile: {
          localNote: 'Watsonville sits slightly inland from the coast in the Pajaro Valley agricultural region, experiencing less marine layer influence than coastal Santa Cruz. The city\'s warmer inland climate and agricultural setting deliver stronger solar production potential.',
          faq: [
            {
              q: 'Do I need a permit for solar in Watsonville?',
              a: 'Yes. Watsonville processes solar permits through the City Community Development Department with typical 3-4 week turnaround. Standard rooftop installations are straightforward; your solar installer manages all paperwork and inspections.'
            },
            {
              q: 'Is residential solar + battery storage worth it in Watsonville?',
              a: 'Yes. Watsonville gets an estimated 5.1 peak sun hours daily due to its inland valley location with less fog than coastal areas. PG&E rates at $0.44/kWh and the warm climate driving moderate AC use make solar with battery storage a smart long-term investment.'
            },
            {
              q: 'How much sun does Watsonville get for solar?',
              a: 'Watsonville averages an estimated 5.1 peak sun hours per day, higher than coastal Santa Cruz due to less marine layer influence. The Pajaro Valley location delivers consistent year-round solar production with strong summer output aligned with cooling demand.'
            }
          ]
        }
      },
      {
        city: 'Scotts Valley',
        citySlug: 'scotts-valley',
        utility: 'PG&E',
        localData: { ...PGE, peakSunHoursEstimate: 5.0 },
        cityProfile: {
          localNote: 'Scotts Valley sits in the Santa Cruz Mountains at higher elevation, experiencing cooler temperatures and less marine layer than coastal areas. The city\'s hillside terrain and redwood forest require careful site assessment, but south-facing properties get excellent solar exposure.',
          faq: [
            {
              q: 'Do I need a permit for solar in Scotts Valley?',
              a: 'Yes. Scotts Valley processes solar permits through the City Community Development Department with typical 3-4 week turnaround. Mountain terrain and forest shading may require site-specific analysis; your installer handles permitting and site assessment.'
            },
            {
              q: 'Is residential solar + battery storage worth it in mountain Scotts Valley?',
              a: 'Yes. Scotts Valley\'s higher elevation keeps it above coastal fog, achieving an estimated 5.0 peak sun hours on unshaded south-facing sites. PG&E rates at $0.44/kWh and frequent winter storm outages make solar with battery backup ideal for mountain energy resilience.'
            },
            {
              q: 'How does mountain terrain affect solar in Scotts Valley?',
              a: 'Scotts Valley sits in forested mountain terrain with tall redwoods that can shade north-facing slopes. South-facing properties above tree line or on cleared sites get excellent solar exposure at an estimated 5.0 peak sun hours daily. A site assessment determines shading impact and optimal panel placement.'
            }
          ]
        }
      },
      {
        city: 'Capitola',
        citySlug: 'capitola',
        utility: 'PG&E',
        localData: { ...PGE, peakSunHoursEstimate: 4.9 },
        cityProfile: {
          localNote: 'Capitola is a small coastal village on Monterey Bay with charming beach-town character and morning marine layer similar to Santa Cruz. The mild coastal climate and high PG&E rates make solar plus battery a popular choice for local homeowners.',
          faq: [
            {
              q: 'Do I need a permit for solar in Capitola?',
              a: 'Yes. Capitola processes solar permits through the City Community Development Department with typical 2-3 week turnaround. Coastal properties may require additional review; your solar installer manages all permitting and inspections.'
            },
            {
              q: 'Is residential solar + battery storage worth it in coastal Capitola?',
              a: 'Yes. Capitola gets an estimated 4.9 peak sun hours daily as morning fog burns off by afternoon. PG&E rates at $0.44/kWh and the mild coastal climate keeping energy use moderate make solar with battery storage financially attractive and provide valuable backup power during outages.'
            },
            {
              q: 'How much sun does Capitola get for solar?',
              a: 'Capitola averages an estimated 4.9 peak sun hours per day. The coastal location brings morning marine layer that typically clears by midday, allowing strong afternoon solar production. Hillside properties above the fog capture even more sun for excellent year-round solar output.'
            }
          ]
        }
      },
    ],
  },
  {
    county: 'San Benito County',
    regionSlug: 'san-benito-county',
    state: 'california',
    countyData: {
      utilityRate: {
        utility: 'PG&E',
        avgResidentialRatePerKwh: 0.44,
        note: 'PG&E serves all of San Benito County with residential rates averaging $0.44/kWh. The county\'s hot inland summers and high utility costs make solar and battery systems an excellent investment for reducing energy expenses and gaining grid independence.'
      },
      permitOffice: {
        name: 'San Benito County Building Department',
        jurisdiction: 'San Benito County',
        typicalTurnaround: '2-4 weeks',
        note: 'San Benito County processes solar permits through the Building Department with typical 2-4 week turnaround. The county is small and permitting is generally straightforward. Incorporated cities like Hollister have separate building departments.'
      },
      climateZone: {
        zone: 'Zone 13 (Inland Valley)',
        description: 'San Benito County has a hot inland valley climate with dry summers, minimal fog, and strong year-round solar production. High summer temperatures drive significant cooling loads, making solar plus battery ideal for managing peak energy costs.'
      },
      countyContext: 'San Benito County is a small agricultural county inland from the Monterey Bay coast, centered on Hollister and the San Juan Valley. The hot inland climate sees minimal coastal fog influence, delivering excellent solar potential with high summer production. Fast population growth and high PG&E rates make solar plus battery storage very attractive for new and existing homeowners.'
    },
    cities: [
      {
        city: 'Hollister',
        citySlug: 'hollister',
        utility: 'PG&E',
        localData: { ...PGE, peakSunHoursEstimate: 5.4 },
        cityProfile: {
          localNote: 'Hollister is the county seat and largest city in San Benito County, experiencing hot inland summers with high cooling demand. The city\'s flat valley terrain and minimal fog create ideal conditions for rooftop solar installations.',
          faq: [
            {
              q: 'Do I need a permit for solar in Hollister?',
              a: 'Yes. Hollister processes solar permits through the City Building Department with typical 2-3 week turnaround. Standard rooftop installations are straightforward; your solar installer handles all permitting and coordinates inspections.'
            },
            {
              q: 'Is residential solar + battery storage worth it in Hollister with PG&E rates?',
              a: 'Absolutely. PG&E charges $0.44/kWh in Hollister, and hot summers drive high AC bills. Residential solar with battery storage locks in energy costs and handles peak cooling loads. Hollister gets an estimated 5.4 peak sun hours daily — excellent for solar production.'
            },
            {
              q: 'How much sun does Hollister get for solar?',
              a: 'Hollister averages an estimated 5.4 peak sun hours per day with minimal coastal fog influence. The hot inland valley climate delivers strong year-round solar production with peak summer output aligned perfectly with air conditioning demand.'
            }
          ]
        }
      },
      {
        city: 'San Juan Bautista',
        citySlug: 'san-juan-bautista',
        utility: 'PG&E',
        localData: { ...PGE, peakSunHoursEstimate: 5.3 },
        cityProfile: {
          localNote: 'San Juan Bautista is a historic mission town in the San Juan Valley with mild inland climate and rolling hillside terrain. The city\'s agricultural setting and moderate temperatures create strong solar potential with year-round production.',
          faq: [
            {
              q: 'Do I need a permit for solar in San Juan Bautista?',
              a: 'Yes. San Juan Bautista processes solar permits through San Benito County Building Department with typical 2-4 week turnaround. Historic properties may require additional review; your solar installer manages all permitting and inspections.'
            },
            {
              q: 'Is residential solar + battery storage worth it in San Juan Bautista?',
              a: 'Yes. San Juan Bautista gets an estimated 5.3 peak sun hours daily with minimal fog. PG&E rates at $0.44/kWh make solar with battery storage a smart financial decision, locking in energy costs and providing backup power during outages.'
            },
            {
              q: 'How much sun does San Juan Bautista get for solar?',
              a: 'San Juan Bautista averages an estimated 5.3 peak sun hours per day. The inland valley location has minimal marine layer influence, delivering consistent year-round solar production with strong output throughout summer and fall.'
            }
          ]
        }
      },
    ],
  },
  {
    county: 'San Luis Obispo County',
    regionSlug: 'san-luis-obispo-county',
    state: 'california',
    countyData: {
      utilityRate: {
        utility: 'PG&E',
        avgResidentialRatePerKwh: 0.44,
        note: 'PG&E serves all of San Luis Obispo County with residential rates averaging $0.44/kWh. The county spans mild coastal areas and hot inland wine country, both offering excellent solar potential. High utility costs make solar and battery systems very attractive across the region.'
      },
      permitOffice: {
        name: 'San Luis Obispo County Planning and Building Department',
        jurisdiction: 'San Luis Obispo County',
        typicalTurnaround: '3-5 weeks',
        note: 'San Luis Obispo County processes solar permits through Planning and Building with typical 3-5 week turnaround. Coastal zone properties require Coastal Commission review. Incorporated cities like SLO, Paso Robles, and Pismo Beach have separate building departments.'
      },
      climateZone: {
        zone: 'Zone 3 (Coastal) / Zone 13 (Inland)',
        description: 'San Luis Obispo County spans mild coastal areas (SLO, Pismo Beach, Morro Bay) and hot inland wine country (Paso Robles, Atascadero). Coastal areas see morning marine layer with afternoon sun; inland valleys experience intense summer heat with very strong solar production potential.'
      },
      countyContext: 'San Luis Obispo County stretches from the scenic Pacific coast to the hot inland wine country of Paso Robles. Coastal cities enjoy mild Mediterranean climates with morning fog that burns off by midday, while inland areas see intense summer heat ideal for solar production. The county\'s mix of coastal charm and agricultural inland valleys, combined with high PG&E rates, makes solar plus battery an excellent investment across all communities.'
    },
    cities: [
      {
        city: 'San Luis Obispo',
        citySlug: 'san-luis-obispo',
        utility: 'PG&E',
        localData: { ...PGE, peakSunHoursEstimate: 5.2 },
        cityProfile: {
          localNote: 'San Luis Obispo is a vibrant college town nestled in a coastal valley with morning marine layer that typically clears by midday. The city\'s mild climate and environmentally conscious community drive strong adoption of solar plus battery for clean energy independence.',
          faq: [
            {
              q: 'Do I need a permit for solar in San Luis Obispo?',
              a: 'Yes. The City of San Luis Obispo Community Development Department processes solar permits with typical 3-4 week turnaround. Standard rooftop installations are straightforward; your installer handles all permitting and coordinates inspections.'
            },
            {
              q: 'Is residential solar + battery storage worth it in San Luis Obispo?',
              a: 'Yes. SLO gets an estimated 5.2 peak sun hours daily as morning fog burns off by afternoon. PG&E rates at $0.44/kWh and the city\'s strong environmental ethos make solar with battery storage both economically and ecologically attractive for energy independence.'
            },
            {
              q: 'How much sun does San Luis Obispo get for solar?',
              a: 'San Luis Obispo averages an estimated 5.2 peak sun hours per day. The coastal valley location brings morning marine layer that typically clears by late morning, allowing strong afternoon solar production. Hillside properties capture even more sun for excellent year-round output.'
            }
          ]
        }
      },
      {
        city: 'Paso Robles',
        citySlug: 'paso-robles',
        utility: 'PG&E',
        localData: { ...PGE, peakSunHoursEstimate: 5.7 },
        cityProfile: {
          localNote: 'Paso Robles sits in hot inland wine country with intense summer heat and minimal coastal influence. The city\'s vineyards and agricultural setting experience very strong solar production potential aligned with high summer cooling demand.',
          faq: [
            {
              q: 'Do I need a permit for solar in Paso Robles?',
              a: 'Yes. Paso Robles processes solar permits through the City Community Development Department with typical 2-3 week turnaround. The straightforward permitting and flat valley terrain make installations smooth; your installer handles all coordination.'
            },
            {
              q: 'Is residential solar + battery storage worth it in hot Paso Robles?',
              a: 'Absolutely. Paso Robles experiences very hot summers driving high AC bills on PG&E\'s $0.44/kWh rates. Residential solar with battery storage locks in energy costs and handles peak cooling loads. Paso gets an estimated 5.7 peak sun hours daily — excellent for solar production.'
            },
            {
              q: 'How much sun does Paso Robles get for solar?',
              a: 'Paso Robles averages an estimated 5.7 peak sun hours per day, among the highest in SLO County. The hot inland wine country climate has minimal fog and intense summer sun, delivering very strong year-round solar output aligned with high air conditioning demand.'
            }
          ]
        }
      },
      {
        city: 'Atascadero',
        citySlug: 'atascadero',
        utility: 'PG&E',
        localData: { ...PGE, peakSunHoursEstimate: 5.5 },
        cityProfile: {
          localNote: 'Atascadero sits between coastal SLO and inland Paso Robles, experiencing transitional climate with warm summers and minimal fog. The city\'s hillside terrain and strong solar exposure make rooftop installations highly productive.',
          faq: [
            {
              q: 'Do I need a permit for solar in Atascadero?',
              a: 'Yes. Atascadero processes solar permits through the City Community Development Department with typical 2-3 week turnaround. Standard rooftop installations are straightforward; your solar installer manages all paperwork and inspections.'
            },
            {
              q: 'Is residential solar + battery storage worth it in Atascadero?',
              a: 'Yes. Atascadero gets an estimated 5.5 peak sun hours daily with minimal coastal fog. PG&E rates at $0.44/kWh and warm summers driving moderate cooling demand make solar with battery storage a smart long-term investment for energy independence.'
            },
            {
              q: 'How much sun does Atascadero get for solar?',
              a: 'Atascadero averages an estimated 5.5 peak sun hours per day, benefiting from transitional climate between coast and inland valleys. The city experiences less fog than coastal SLO and cooler temps than Paso, delivering strong year-round solar production.'
            }
          ]
        }
      },
      {
        city: 'Arroyo Grande',
        citySlug: 'arroyo-grande',
        utility: 'PG&E',
        localData: { ...PGE, peakSunHoursEstimate: 5.1 },
        cityProfile: {
          localNote: 'Arroyo Grande sits in a coastal valley near Pismo Beach with morning marine layer that typically burns off by midday. The city\'s mild climate and proximity to the coast create solid solar potential with moderate energy demand.',
          faq: [
            {
              q: 'Do I need a permit for solar in Arroyo Grande?',
              a: 'Yes. Arroyo Grande processes solar permits through the City Community Development Department with typical 3-4 week turnaround. Coastal properties may require additional review; your installer handles all permitting and inspections.'
            },
            {
              q: 'Is residential solar + battery storage worth it in Arroyo Grande?',
              a: 'Yes. Arroyo Grande gets an estimated 5.1 peak sun hours daily as morning fog clears by afternoon. PG&E rates at $0.44/kWh and the mild coastal climate make solar with battery storage financially attractive and provide valuable backup power during outages.'
            },
            {
              q: 'How much sun does Arroyo Grande get for solar?',
              a: 'Arroyo Grande averages an estimated 5.1 peak sun hours per day. The coastal valley location brings morning marine layer that typically clears by late morning, allowing strong afternoon solar production with consistent year-round output.'
            }
          ]
        }
      },
      {
        city: 'Pismo Beach',
        citySlug: 'pismo-beach',
        utility: 'PG&E',
        localData: { ...PGE, peakSunHoursEstimate: 5.0 },
        cityProfile: {
          localNote: 'Pismo Beach is a coastal resort town on the Pacific with morning marine layer and mild year-round climate. The city\'s beach-town character and moderate energy use paired with high PG&E rates make solar plus battery a popular choice.',
          faq: [
            {
              q: 'Do I need a permit for solar in Pismo Beach?',
              a: 'Yes. Pismo Beach processes solar permits through the City Community Development Department with typical 3-4 week turnaround. Coastal zone properties require additional review; your solar installer manages all permitting and inspections.'
            },
            {
              q: 'Is residential solar + battery storage worth it in coastal Pismo Beach?',
              a: 'Yes. Pismo Beach gets an estimated 5.0 peak sun hours daily as morning fog burns off by afternoon. PG&E rates at $0.44/kWh and the mild coastal climate keeping energy use moderate make solar with battery storage a smart investment for cost savings and resilience.'
            },
            {
              q: 'How much sun does Pismo Beach get for solar?',
              a: 'Pismo Beach averages an estimated 5.0 peak sun hours per day. The coastal location brings morning marine layer that typically clears by midday, allowing strong afternoon solar production. South-facing rooftops capture excellent year-round sun for solid solar output.'
            }
          ]
        }
      },
    ],
  },
  {
    county: 'Santa Barbara County',
    regionSlug: 'santa-barbara-county',
    state: 'california',
    countyData: {
      utilityRate: {
        utility: 'SCE',
        avgResidentialRatePerKwh: 0.40,
        note: 'Southern California Edison (SCE) serves most of Santa Barbara County with residential rates averaging $0.40/kWh. The county\'s coastal Mediterranean climate and affluent communities make solar and battery systems very attractive for energy independence and cost savings.'
      },
      permitOffice: {
        name: 'Santa Barbara County Planning and Development',
        jurisdiction: 'Santa Barbara County',
        typicalTurnaround: '3-5 weeks',
        note: 'Santa Barbara County processes solar permits through Planning and Development with typical 3-5 week turnaround. Coastal zone properties require Coastal Commission review. Incorporated cities like Santa Barbara, Santa Maria, and Lompoc have separate building departments.'
      },
      climateZone: {
        zone: 'Zone 6 (Coastal)',
        description: 'Santa Barbara County has a mild Mediterranean coastal climate with morning marine layer that typically burns off by midday. Cool summers and mild winters keep energy demand moderate while still providing strong solar production potential, especially on south-facing slopes.'
      },
      countyContext: 'Santa Barbara County stretches along the scenic Central Coast with iconic coastal mountains and Mediterranean climate. Morning fog is common but typically clears by afternoon, yielding solid solar production. The county\'s affluent communities, environmental consciousness, and high SCE utility rates make solar plus battery storage highly attractive for energy independence, cost savings, and resilience during wildfire season outages.'
    },
    cities: [
      {
        city: 'Santa Barbara',
        citySlug: 'santa-barbara',
        utility: 'SCE',
        localData: { ...SCE, peakSunHoursEstimate: 5.0 },
        cityProfile: {
          localNote: 'Santa Barbara is a coastal city with iconic Mediterranean architecture and morning fog that typically clears by midday. The city\'s affluent community and environmental values drive strong adoption of solar plus battery for clean energy independence.',
          faq: [
            {
              q: 'Do I need a permit for solar in Santa Barbara?',
              a: 'Yes. The City of Santa Barbara Community Development Department processes solar permits with typical 3-4 week turnaround. Coastal and historic properties may require additional review; your installer handles all permitting and coordinates inspections.'
            },
            {
              q: 'Is residential solar + battery storage worth it in Santa Barbara?',
              a: 'Yes. Santa Barbara gets an estimated 5.0 peak sun hours daily as morning fog burns off by afternoon. SCE rates at $0.40/kWh and the city\'s strong environmental ethos make solar with battery storage both economically and ecologically attractive for energy independence.'
            },
            {
              q: 'How much sun does Santa Barbara get for solar?',
              a: 'Santa Barbara averages an estimated 5.0 peak sun hours per day. Morning marine layer typically clears by late morning or early afternoon, allowing strong solar production. South-facing rooftops and hillside properties in the Riviera capture even more sun for excellent year-round output.'
            }
          ]
        }
      },
      {
        city: 'Santa Maria',
        citySlug: 'santa-maria',
        utility: 'SCE',
        localData: { ...SCE, peakSunHoursEstimate: 5.3 },
        cityProfile: {
          localNote: 'Santa Maria sits in the inland Santa Maria Valley agricultural region with less marine layer influence than coastal Santa Barbara. The city\'s warmer inland climate and agricultural setting deliver stronger solar production potential.',
          faq: [
            {
              q: 'Do I need a permit for solar in Santa Maria?',
              a: 'Yes. Santa Maria processes solar permits through the City Community Development Department with typical 3-4 week turnaround. Standard rooftop installations are straightforward; your solar installer manages all paperwork and inspections.'
            },
            {
              q: 'Is residential solar + battery storage worth it in Santa Maria?',
              a: 'Yes. Santa Maria gets an estimated 5.3 peak sun hours daily due to its inland valley location with less fog than coastal areas. SCE rates at $0.40/kWh and the warm climate make solar with battery storage a smart long-term investment for cost savings and energy independence.'
            },
            {
              q: 'How much sun does Santa Maria get for solar?',
              a: 'Santa Maria averages an estimated 5.3 peak sun hours per day, higher than coastal Santa Barbara due to less marine layer influence. The inland valley location delivers consistent year-round solar production with strong summer output.'
            }
          ]
        }
      },
      {
        city: 'Lompoc',
        citySlug: 'lompoc',
        utility: 'SCE',
        localData: { ...SCE, peakSunHoursEstimate: 5.1 },
        cityProfile: {
          localNote: 'Lompoc sits in a coastal valley near Vandenberg Space Force Base with morning fog that typically clears by midday. The city\'s mild climate and moderate energy use paired with SCE rates make solar plus battery a cost-effective choice.',
          faq: [
            {
              q: 'Do I need a permit for solar in Lompoc?',
              a: 'Yes. Lompoc processes solar permits through the City Community Development Department with typical 3-4 week turnaround. Standard rooftop installations are straightforward; your installer handles all permitting and inspections.'
            },
            {
              q: 'Is residential solar + battery storage worth it in Lompoc?',
              a: 'Yes. Lompoc gets an estimated 5.1 peak sun hours daily as morning fog clears by afternoon. SCE rates at $0.40/kWh and the mild coastal climate make solar with battery storage financially attractive and provide valuable backup power during outages.'
            },
            {
              q: 'How much sun does Lompoc get for solar?',
              a: 'Lompoc averages an estimated 5.1 peak sun hours per day. The coastal valley location brings morning marine layer that typically clears by late morning, allowing strong afternoon solar production with consistent year-round output.'
            }
          ]
        }
      },
      {
        city: 'Goleta',
        citySlug: 'goleta',
        utility: 'SCE',
        localData: { ...SCE, peakSunHoursEstimate: 5.0 },
        cityProfile: {
          localNote: 'Goleta sits just west of Santa Barbara with similar coastal Mediterranean climate and morning fog patterns. The city\'s flat terrain and moderate energy use create solid solar potential with high return on investment.',
          faq: [
            {
              q: 'Do I need a permit for solar in Goleta?',
              a: 'Yes. Goleta processes solar permits through the City Planning and Environmental Review Department with typical 3-4 week turnaround. Coastal properties may require additional review; your solar installer manages all permitting and inspections.'
            },
            {
              q: 'Is residential solar + battery storage worth it in Goleta?',
              a: 'Yes. Goleta gets an estimated 5.0 peak sun hours daily as morning fog burns off by afternoon. SCE rates at $0.40/kWh and the mild coastal climate make solar with battery storage a smart investment for locking in energy costs and gaining backup power resilience.'
            },
            {
              q: 'How much sun does Goleta get for solar?',
              a: 'Goleta averages an estimated 5.0 peak sun hours per day with morning marine layer that typically clears by midday. The coastal location delivers strong afternoon solar production, and the mild climate keeps overall energy use moderate for excellent solar ROI.'
            }
          ]
        }
      },
      {
        city: 'Carpinteria',
        citySlug: 'carpinteria',
        utility: 'SCE',
        localData: { ...SCE, peakSunHoursEstimate: 5.0 },
        cityProfile: {
          localNote: 'Carpinteria is a small coastal beach town southeast of Santa Barbara with morning marine layer and mild year-round climate. The city\'s beach-town character and moderate energy use paired with SCE rates make solar plus battery a popular choice.',
          faq: [
            {
              q: 'Do I need a permit for solar in Carpinteria?',
              a: 'Yes. Carpinteria processes solar permits through the City Community Development Department with typical 2-3 week turnaround. Coastal zone properties require additional review; your solar installer manages all permitting and inspections.'
            },
            {
              q: 'Is residential solar + battery storage worth it in coastal Carpinteria?',
              a: 'Yes. Carpinteria gets an estimated 5.0 peak sun hours daily as morning fog burns off by afternoon. SCE rates at $0.40/kWh and the mild coastal climate keeping energy use moderate make solar with battery storage a smart financial decision for cost savings and resilience.'
            },
            {
              q: 'How much sun does Carpinteria get for solar?',
              a: 'Carpinteria averages an estimated 5.0 peak sun hours per day. The coastal location brings morning marine layer that typically clears by midday, allowing strong afternoon solar production. South-facing rooftops capture excellent year-round sun for solid solar output.'
            }
          ]
        }
      },
    ],
  },
  {
    county: 'Kings County',
    regionSlug: 'kings-county',
    state: 'california',
    countyData: {
      utilityRate: {
        utility: 'PG&E / SCE',
        avgResidentialRatePerKwh: 0.44,
        note: 'Kings County is served by both PG&E and Southern California Edison depending on location, with residential rates averaging $0.40-0.44/kWh. The county\'s hot Central Valley summers and high utility costs make solar and battery systems an excellent investment for managing peak energy expenses.'
      },
      permitOffice: {
        name: 'Kings County Community Development Agency',
        jurisdiction: 'Kings County',
        typicalTurnaround: '2-4 weeks',
        note: 'Kings County processes solar permits through the Community Development Agency with typical 2-4 week turnaround. The county is rural and agricultural with straightforward permitting. Incorporated cities like Hanford and Lemoore have separate building departments.'
      },
      climateZone: {
        zone: 'Zone 13 (Hot Central Valley)',
        description: 'Kings County has a very hot Central Valley climate with intense summer heat, minimal coastal fog, and high cooling loads. The county experiences very strong year-round solar production potential, with peak summer output aligned perfectly with air conditioning demand.'
      },
      countyContext: 'Kings County sits in the hot southern San Joaquin Valley agricultural heartland, centered on Hanford and Lemoore. The county experiences intense summer heat with minimal coastal influence, delivering excellent solar potential and very high summer production. Agricultural land use and high utility rates make solar plus battery storage very attractive for both residential and agricultural applications.'
    },
    cities: [
      {
        city: 'Hanford',
        citySlug: 'hanford',
        utility: 'PG&E / SCE',
        localData: { ...PGE, peakSunHoursEstimate: 5.6 },
        cityProfile: {
          localNote: 'Hanford is the county seat of Kings County in the hot San Joaquin Valley, experiencing very hot summers with high cooling demand. The city\'s flat agricultural terrain and minimal fog create ideal conditions for rooftop solar installations.',
          faq: [
            {
              q: 'Do I need a permit for solar in Hanford?',
              a: 'Yes. Hanford processes solar permits through the City Community Development Department with typical 2-3 week turnaround. Standard rooftop installations are straightforward; your solar installer handles all permitting and coordinates inspections.'
            },
            {
              q: 'Is residential solar + battery storage worth it in hot Hanford?',
              a: 'Absolutely. Hanford experiences very hot summers driving high AC bills on utility rates of $0.44/kWh. Residential solar with battery storage locks in energy costs and handles peak cooling loads. Hanford gets an estimated 5.6 peak sun hours daily — excellent for solar production.'
            },
            {
              q: 'How much sun does Hanford get for solar?',
              a: 'Hanford averages an estimated 5.6 peak sun hours per day with minimal coastal fog influence. The hot Central Valley climate delivers very strong year-round solar production with peak summer output aligned perfectly with air conditioning demand.'
            }
          ]
        }
      },
      {
        city: 'Lemoore',
        citySlug: 'lemoore',
        utility: 'PG&E / SCE',
        localData: { ...PGE, peakSunHoursEstimate: 5.6 },
        cityProfile: {
          localNote: 'Lemoore sits in the southern San Joaquin Valley near NAS Lemoore with very hot summers and high cooling loads. The city\'s agricultural setting and flat valley terrain deliver excellent solar production potential.',
          faq: [
            {
              q: 'Do I need a permit for solar in Lemoore?',
              a: 'Yes. Lemoore processes solar permits through the City Community Development Department with typical 2-3 week turnaround. Standard rooftop installations are straightforward; your solar installer manages all paperwork and inspections.'
            },
            {
              q: 'Is residential solar + battery storage worth it in Lemoore?',
              a: 'Yes. Lemoore experiences very hot summers driving high AC bills on utility rates around $0.44/kWh. Residential solar with battery storage locks in energy costs and provides reliable power. Lemoore gets an estimated 5.6 peak sun hours daily — ideal for solar production.'
            },
            {
              q: 'How much sun does Lemoore get for solar?',
              a: 'Lemoore averages an estimated 5.6 peak sun hours per day. The hot San Joaquin Valley location delivers very strong year-round solar output with intense summer production that matches peak air conditioning demand for maximum savings.'
            }
          ]
        }
      },
      {
        city: 'Avenal',
        citySlug: 'avenal',
        utility: 'PG&E / SCE',
        localData: { ...PGE, peakSunHoursEstimate: 5.7 },
        cityProfile: {
          localNote: 'Avenal sits in the western San Joaquin Valley near the Kettleman Hills with very hot summers and minimal vegetation. The city\'s remote location and intense heat create exceptional solar production potential.',
          faq: [
            {
              q: 'Do I need a permit for solar in Avenal?',
              a: 'Yes. Avenal processes solar permits through Kings County Community Development Agency with typical 2-4 week turnaround. The rural location and straightforward permitting make installations smooth; your installer handles all coordination.'
            },
            {
              q: 'Is residential solar + battery storage worth it in remote Avenal?',
              a: 'Absolutely. Avenal experiences very hot summers and remote location with high utility costs. Residential solar with battery storage locks in energy costs and provides resilience. Avenal gets an estimated 5.7 peak sun hours daily — exceptional for solar production.'
            },
            {
              q: 'How much sun does Avenal get for solar?',
              a: 'Avenal averages an estimated 5.7 peak sun hours per day, among the highest in Kings County. The western valley location with minimal fog and intense summer heat delivers exceptional year-round solar output aligned with very high cooling demand.'
            }
          ]
        }
      },
      {
        city: 'Corcoran',
        citySlug: 'corcoran',
        utility: 'PG&E / SCE',
        localData: { ...PGE, peakSunHoursEstimate: 5.6 },
        cityProfile: {
          localNote: 'Corcoran is a small agricultural city in the southern San Joaquin Valley with very hot summers and flat farmland terrain. The city\'s agricultural economy and high cooling demand make solar plus battery ideal for energy cost management.',
          faq: [
            {
              q: 'Do I need a permit for solar in Corcoran?',
              a: 'Yes. Corcoran processes solar permits through the City Community Development Department with typical 2-3 week turnaround. The agricultural setting and straightforward permitting make installations smooth; your installer handles all coordination.'
            },
            {
              q: 'Is residential solar + battery storage worth it in Corcoran?',
              a: 'Yes. Corcoran experiences very hot summers driving high AC bills on utility rates around $0.44/kWh. Residential solar with battery storage locks in energy costs and handles peak loads. Corcoran gets an estimated 5.6 peak sun hours daily — excellent for solar production.'
            },
            {
              q: 'How much sun does Corcoran get for solar?',
              a: 'Corcoran averages an estimated 5.6 peak sun hours per day with minimal fog. The hot agricultural valley climate delivers very strong year-round solar production with peak summer output aligned perfectly with air conditioning and agricultural irrigation demand.'
            }
          ]
        }
      },
    ],
  },
  {
    county: 'Tulare County',
    regionSlug: 'tulare-county',
    state: 'california',
    countyData: {
      utilityRate: {
        utility: 'SCE / PG&E',
        avgResidentialRatePerKwh: 0.40,
        note: 'Tulare County is primarily served by Southern California Edison with some areas served by PG&E, with residential rates averaging $0.40/kWh. The county\'s very hot Central Valley summers and high cooling loads make solar and battery systems an excellent investment for reducing energy expenses.'
      },
      permitOffice: {
        name: 'Tulare County Resource Management Agency',
        jurisdiction: 'Tulare County',
        typicalTurnaround: '2-4 weeks',
        note: 'Tulare County processes solar permits through the Resource Management Agency with typical 2-4 week turnaround. The county is agricultural and permitting is straightforward. Incorporated cities like Visalia, Tulare, and Porterville have separate building departments.'
      },
      climateZone: {
        zone: 'Zone 13 (Hot Central Valley)',
        description: 'Tulare County has a very hot Central Valley climate with intense summer heat exceeding 100°F regularly, minimal coastal fog, and very high cooling loads. The county experiences exceptional year-round solar production potential with very strong summer peak output.'
      },
      countyContext: 'Tulare County sits in the heart of the San Joaquin Valley agricultural region with some of the hottest summer temperatures in California. Cities like Visalia, Tulare, and Porterville experience intense heat with minimal coastal influence, delivering exceptional solar potential and very high summer production. The county\'s agricultural economy and very high cooling costs make solar plus battery storage highly attractive for both residential and agricultural applications.'
    },
    cities: [
      {
        city: 'Visalia',
        citySlug: 'visalia',
        utility: 'SCE / PG&E',
        localData: { ...SCE, peakSunHoursEstimate: 5.7 },
        cityProfile: {
          localNote: 'Visalia is the county seat and largest city in Tulare County, experiencing very hot summers with temperatures regularly exceeding 100°F. The city\'s flat agricultural terrain and intense heat create exceptional conditions for solar production.',
          faq: [
            {
              q: 'Do I need a permit for solar in Visalia?',
              a: 'Yes. Visalia processes solar permits through the City Community Development Department with typical 2-3 week turnaround. Standard rooftop installations are straightforward; your solar installer handles all permitting and coordinates inspections.'
            },
            {
              q: 'Is residential solar + battery storage worth it in very hot Visalia?',
              a: 'Absolutely. Visalia experiences very hot summers driving extremely high AC bills on SCE rates of $0.40/kWh. Residential solar with battery storage locks in energy costs and handles intense cooling loads. Visalia gets an estimated 5.7 peak sun hours daily — exceptional for solar production.'
            },
            {
              q: 'How much sun does Visalia get for solar?',
              a: 'Visalia averages an estimated 5.7 peak sun hours per day, among the highest in California. The very hot Central Valley climate with minimal fog delivers exceptional year-round solar production with intense summer output that perfectly aligns with air conditioning demand.'
            }
          ]
        }
      },
      {
        city: 'Tulare',
        citySlug: 'tulare',
        utility: 'SCE / PG&E',
        localData: { ...SCE, peakSunHoursEstimate: 5.7 },
        cityProfile: {
          localNote: 'Tulare is an agricultural city in the heart of the San Joaquin Valley with very hot summers and high cooling demand. The city\'s flat valley terrain and intense heat deliver exceptional solar production potential.',
          faq: [
            {
              q: 'Do I need a permit for solar in Tulare?',
              a: 'Yes. Tulare processes solar permits through the City Community Development Department with typical 2-3 week turnaround. Standard rooftop installations are straightforward; your solar installer manages all paperwork and inspections.'
            },
            {
              q: 'Is residential solar + battery storage worth it in Tulare?',
              a: 'Yes. Tulare experiences very hot summers driving extremely high AC bills on SCE rates around $0.40/kWh. Residential solar with battery storage locks in energy costs and provides reliable power. Tulare gets an estimated 5.7 peak sun hours daily — exceptional for solar production.'
            },
            {
              q: 'How much sun does Tulare get for solar?',
              a: 'Tulare averages an estimated 5.7 peak sun hours per day. The very hot agricultural valley climate delivers exceptional year-round solar output with intense summer production that matches peak air conditioning and agricultural energy demand for maximum savings.'
            }
          ]
        }
      },
      {
        city: 'Porterville',
        citySlug: 'porterville',
        utility: 'SCE / PG&E',
        localData: { ...SCE, peakSunHoursEstimate: 5.7 },
        cityProfile: {
          localNote: 'Porterville sits at the eastern edge of the San Joaquin Valley near the Sierra Nevada foothills, experiencing very hot summers with high cooling loads. The city\'s position between valley and foothills delivers exceptional solar potential.',
          faq: [
            {
              q: 'Do I need a permit for solar in Porterville?',
              a: 'Yes. Porterville processes solar permits through the City Development Services Department with typical 2-3 week turnaround. Standard rooftop installations are straightforward; your solar installer handles all permitting and coordinates inspections.'
            },
            {
              q: 'Is residential solar + battery storage worth it in Porterville?',
              a: 'Absolutely. Porterville experiences very hot summers driving extremely high AC bills on SCE rates of $0.40/kWh. Residential solar with battery storage locks in energy costs and handles intense cooling loads. Porterville gets an estimated 5.7 peak sun hours daily — exceptional for solar production.'
            },
            {
              q: 'How much sun does Porterville get for solar?',
              a: 'Porterville averages an estimated 5.7 peak sun hours per day. The eastern valley location near the foothills with minimal fog and very hot summers delivers exceptional year-round solar output with intense summer production aligned with air conditioning demand.'
            }
          ]
        }
      },
      {
        city: 'Dinuba',
        citySlug: 'dinuba',
        utility: 'SCE / PG&E',
        localData: { ...SCE, peakSunHoursEstimate: 5.7 },
        cityProfile: {
          localNote: 'Dinuba is a small agricultural city in the central San Joaquin Valley with very hot summers and flat farmland terrain. The city\'s agricultural economy and intense heat make solar plus battery ideal for energy cost management.',
          faq: [
            {
              q: 'Do I need a permit for solar in Dinuba?',
              a: 'Yes. Dinuba processes solar permits through the City Community Development Department with typical 2-3 week turnaround. The agricultural setting and straightforward permitting make installations smooth; your installer handles all coordination.'
            },
            {
              q: 'Is residential solar + battery storage worth it in Dinuba?',
              a: 'Yes. Dinuba experiences very hot summers driving extremely high AC bills on SCE rates around $0.40/kWh. Residential solar with battery storage locks in energy costs and handles peak loads. Dinuba gets an estimated 5.7 peak sun hours daily — exceptional for solar production.'
            },
            {
              q: 'How much sun does Dinuba get for solar?',
              a: 'Dinuba averages an estimated 5.7 peak sun hours per day with minimal fog. The very hot agricultural valley climate delivers exceptional year-round solar production with intense summer output aligned perfectly with air conditioning and agricultural irrigation demand.'
            }
          ]
        }
      },
    ],
  },
  {
    county: 'San Francisco County',
    regionSlug: 'san-francisco-county',
    state: 'california',
    countyData: {
      utilityRate: {
        utility: 'PG&E',
        avgResidentialRatePerKwh: 0.44,
        note: 'PG&E serves all of San Francisco with residential rates averaging $0.44/kWh, among the highest in California. While the city\'s foggy coastal climate and dense urban environment present solar challenges, high utility costs and strong environmental values make solar viable for suitable properties.'
      },
      permitOffice: {
        name: 'San Francisco Department of Building Inspection',
        jurisdiction: 'City and County of San Francisco',
        typicalTurnaround: '3-5 weeks',
        note: 'San Francisco processes solar permits through the Department of Building Inspection with typical 3-5 week turnaround. The city has strict building codes and seismic requirements. SolarAPP+ is available for eligible systems to expedite approval.'
      },
      climateZone: {
        zone: 'Zone 3 (Coastal)',
        description: 'San Francisco has a unique foggy coastal microclimate with cool summers, mild winters, and persistent marine layer influence. The city experiences lower solar production than inland areas, but south-facing rooftops and properties in sunnier neighborhoods like the Mission and Noe Valley still achieve viable solar output.'
      },
      countyContext: 'San Francisco is a dense urban city and county with iconic foggy coastal climate and limited single-family housing stock. Many residents live in condos or multi-unit buildings where rooftop solar may require HOA approval or shared systems. However, single-family homes with south-facing roofs in sunnier neighborhoods can achieve solid solar production. High PG&E rates, strong environmental values, and renewable energy mandates make solar attractive where physically viable.'
    },
    cities: [
      {
        city: 'San Francisco',
        citySlug: 'san-francisco',
        utility: 'PG&E',
        localData: { ...PGE, peakSunHoursEstimate: 4.9 },
        cityProfile: {
          localNote: 'San Francisco is a dense urban city with foggy coastal climate and varied microclimates. Foggy western neighborhoods near the ocean see less sun, while inland areas like the Mission, Noe Valley, and Potrero Hill get stronger solar production. High PG&E rates and environmental values make solar viable for suitable properties.',
          faq: [
            {
              q: 'Do I need a permit for solar in San Francisco?',
              a: 'Yes. San Francisco requires permits through the Department of Building Inspection with typical 3-5 week turnaround. SolarAPP+ can expedite eligible systems. Multi-unit buildings may need HOA approval. Your solar installer handles all permitting and coordinates inspections.'
            },
            {
              q: 'Is residential solar + battery storage worth it in foggy San Francisco?',
              a: 'It depends on location and roof orientation. Foggy western neighborhoods see lower production, but sunnier areas like the Mission and Noe Valley get an estimated 4.9 peak sun hours daily. PG&E rates at $0.44/kWh make solar financially viable on south-facing roofs in sunnier microclimates. A site assessment determines feasibility.'
            },
            {
              q: 'How much sun does San Francisco get for solar?',
              a: 'San Francisco averages an estimated 4.9 peak sun hours per day citywide, with significant variation by neighborhood. Western areas near the ocean are foggier; eastern and southern neighborhoods like the Mission, Potrero, and Noe Valley see more sun. South-facing roofs in sunnier areas achieve viable solar production despite the fog.'
            }
          ]
        }
      },
    ],
  },
  {
    county: 'Trinity County',
    regionSlug: 'trinity-county',
    state: 'california',
    countyData: {
      utilityRate: {
        utility: 'PG&E / Trinity PUD',
        avgResidentialRatePerKwh: 0.44,
        note: 'Trinity County is served primarily by PG&E with some areas covered by Trinity Public Utilities District, with residential rates averaging $0.44/kWh. The county\'s remote mountain location, frequent wildfire-related power shutoffs (PSPS), and high utility costs make solar with battery backup an excellent investment for energy resilience.'
      },
      permitOffice: {
        name: 'Trinity County Building Department',
        jurisdiction: 'Trinity County',
        typicalTurnaround: '2-4 weeks',
        note: 'Trinity County processes solar permits through the Building Department with typical 2-4 week turnaround. The county is very rural and mountainous with straightforward permitting. Snow load and wildfire considerations may apply at higher elevations.'
      },
      climateZone: {
        zone: 'Zone 1 (Mountain)',
        description: 'Trinity County has a mountain climate with hot dry summers, cold winters with snow at higher elevations, and forested terrain. Solar production varies by elevation and forest shading, but south-facing cleared sites receive strong summer sun. The remote location and wildfire risk make battery backup highly valuable.'
      },
      countyContext: 'Trinity County is a remote forested mountain county in far northwestern California, centered on Weaverville and the Trinity Alps. The county experiences hot summers with strong solar potential on cleared sites, though dense forest can create shading challenges. Frequent wildfire-related PSPS shutoffs and winter storm outages make solar plus battery storage essential for energy resilience. High PG&E rates and remote grid infrastructure further drive solar adoption.'
    },
    cities: [
      {
        city: 'Weaverville',
        citySlug: 'weaverville',
        utility: 'PG&E / Trinity PUD',
        localData: { ...PGE, peakSunHoursEstimate: 5.2 },
        cityProfile: {
          localNote: 'Weaverville is the county seat and largest town in Trinity County, sitting in a mountain valley surrounded by dense forest. The town experiences hot summers with strong solar potential on south-facing cleared sites, though forest shading requires careful site assessment. Frequent PSPS outages make battery backup essential.',
          faq: [
            {
              q: 'Do I need a permit for solar in Weaverville?',
              a: 'Yes. Weaverville requires permits through Trinity County Building Department with typical 2-4 week processing. Mountain terrain and forest shading may require site-specific analysis. Your solar installer handles all permitting and site assessment.'
            },
            {
              q: 'Is residential solar + battery storage worth it in remote Weaverville?',
              a: 'Absolutely. Weaverville experiences frequent wildfire-related PSPS shutoffs and winter storm outages due to its remote mountain location. Residential solar with battery storage provides critical energy resilience and locks in costs against PG&E\'s $0.44/kWh rates. Weaverville gets an estimated 5.2 peak sun hours on unshaded south-facing sites.'
            },
            {
              q: 'How does forest terrain affect solar in Weaverville?',
              a: 'Weaverville sits in forested mountain terrain with tall pines and firs that can shade north-facing slopes. South-facing properties on cleared sites or above tree line get excellent solar exposure at an estimated 5.2 peak sun hours daily. A site assessment determines shading impact and optimal panel placement for mountain terrain.'
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
