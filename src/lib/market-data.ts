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
