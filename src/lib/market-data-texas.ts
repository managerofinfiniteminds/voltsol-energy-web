// Texas solar market configuration (Phase 2a: 12-county Day-1 launch).
// VoltSol Energy brand-forward copy -- no Hugo references.
// All tax/legal claims verified against TX-BUILD-FINAL-PLAN.md sourced facts.

import type {
  MarketRegion,
  MarketCity,
  MarketCityLocalData,
  MarketCountyData,
} from './market-data';

// Shared baseline estimates for deregulated ERCOT markets (REP-choice areas)
// REP = Retail Electric Provider, customer-selectable, sets their own solar buyback rate
const ERCOT_DEREG_BASE: MarketCityLocalData = {
  avgMonthlyBillEstimate: 180,
  avgSystemSizeKwEstimate: 8.0,
  avgSavingsYear1Estimate: 1400,
  avgPaybackYearsEstimate: 9,
  peakSunHoursEstimate: 5.3,
};

// Austin Energy (municipal, sets own rate)
const AUSTIN_ENERGY: MarketCityLocalData = {
  avgMonthlyBillEstimate: 165,
  avgSystemSizeKwEstimate: 7.5,
  avgSavingsYear1Estimate: 1300,
  avgPaybackYearsEstimate: 9,
  peakSunHoursEstimate: 5.4,
};

// CPS Energy (municipal, sets own rate)
const CPS_ENERGY: MarketCityLocalData = {
  avgMonthlyBillEstimate: 160,
  avgSystemSizeKwEstimate: 7.5,
  avgSavingsYear1Estimate: 1250,
  avgPaybackYearsEstimate: 9,
  peakSunHoursEstimate: 5.5,
};

// El Paso Electric (regulated, WECC grid, no retail choice)
const EPE: MarketCityLocalData = {
  avgMonthlyBillEstimate: 155,
  avgSystemSizeKwEstimate: 7.5,
  avgSavingsYear1Estimate: 1200,
  avgPaybackYearsEstimate: 10,
  peakSunHoursEstimate: 6.2,
};

// Entergy Texas (regulated, ERCOT-adjacent Gulf Coast / East Texas, no retail choice)
const ENTERGY_TX: MarketCityLocalData = {
  avgMonthlyBillEstimate: 165,
  avgSystemSizeKwEstimate: 7.5,
  avgSavingsYear1Estimate: 1150,
  avgPaybackYearsEstimate: 10,
  peakSunHoursEstimate: 5.1,
};

// Xcel Energy / Southwestern Public Service (regulated, SPP grid, Texas Panhandle, no retail choice)
const XCEL_SPS: MarketCityLocalData = {
  avgMonthlyBillEstimate: 160,
  avgSystemSizeKwEstimate: 7.5,
  avgSavingsYear1Estimate: 1150,
  avgPaybackYearsEstimate: 9,
  peakSunHoursEstimate: 5.9,
};

// Southwestern Electric Power Company / AEP SWEPCO (regulated, outside ERCOT, East Texas, no retail choice)
const SWEPCO: MarketCityLocalData = {
  avgMonthlyBillEstimate: 160,
  avgSystemSizeKwEstimate: 7.5,
  avgSavingsYear1Estimate: 1100,
  avgPaybackYearsEstimate: 10,
  peakSunHoursEstimate: 5.0,
};

export const TEXAS_SOLAR_MARKETS: MarketRegion[] = [
  // 1. Harris County (Houston metro, largest)
  {
    county: 'Harris County',
    regionSlug: 'harris-county',
    state: 'texas',
    countyData: {
      utilityRate: {
        utility: 'CenterPoint Energy (TDU)',
        avgResidentialRatePerKwh: 0.14,
        note: 'Harris County is in the deregulated ERCOT market. CenterPoint Energy delivers power as the wires-only Transmission and Distribution Utility (TDU), but you choose your own Retail Electric Provider (REP) which sets your solar buyback rate. Solar export rates vary widely by REP and plan -- shop for a REP with a competitive solar buyback plan to maximize your savings. Illustrative residential rate range: $0.12-$0.16/kWh depending on REP and plan choice.',
      },
      permitOffice: {
        name: 'City of Houston Permitting Center',
        jurisdiction: 'City of Houston (unincorporated areas via Harris County)',
        typicalTurnaround: '2-6 weeks, varies by jurisdiction',
        note: 'Houston and other incorporated cities in Harris County each have their own building departments. Permit timelines vary -- confirm with your local jurisdiction. Your installer manages the application.',
      },
      climateZone: {
        zone: 'Hot-humid Gulf Coast climate',
        description: 'Hot, humid summers with frequent afternoon thunderstorms. High cooling demand from May through September. Hurricane and tropical storm risk requires wind-rated equipment. Coastal humidity and salt air require corrosion-resistant hardware. Battery backup is valuable for multi-day post-storm outages.',
      },
      countyContext: 'Harris County is the most populous county in Texas, centered on Houston and spanning the Gulf Coast flatlands. The hot, humid climate drives high summer cooling loads, making solar highly valuable for offsetting air conditioning costs. Winter Storm Uri (February 2021) caused multi-day statewide blackouts, underscoring the importance of battery backup for grid resilience. Hurricane preparedness is a priority -- solar + battery systems provide critical backup power during multi-day post-storm outages.',
    },
    cities: [
      {
        city: 'Houston',
        citySlug: 'houston',
        utility: 'CenterPoint Energy (TDU)',
        localData: { ...ERCOT_DEREG_BASE, avgMonthlyBillEstimate: 190 },
        cityProfile: {
          localNote: 'Houston is the largest city in Texas, with a sprawling metro area and hot, humid climate. High summer cooling demand makes solar especially valuable for reducing air conditioning costs.',
          faq: [
            {
              q: 'Do I need a permit for solar in Houston?',
              a: 'Yes. The City of Houston Permitting Center handles solar permits. Typical turnaround is 2-6 weeks. Your installer submits the application and manages the approval process.',
            },
            {
              q: 'Is solar + battery storage worth it in Houston?',
              a: 'Yes. Houston\'s hot summers drive high cooling costs. Solar directly offsets your air conditioning load. Battery backup is especially valuable for hurricane season -- Winter Storm Uri and past hurricanes have caused multi-day outages. You choose your own REP, so shop for a plan with a competitive solar buyback rate.',
            },
            {
              q: 'How much sun does Houston get for solar?',
              a: 'Houston averages an estimated 5.3 peak sun hours per day. Despite occasional cloud cover from Gulf moisture, solar production is strong year-round, with peak output in summer when cooling demand is highest.',
            },
          ],
        },
      },
      {
        city: 'Pasadena',
        citySlug: 'pasadena',
        utility: 'CenterPoint Energy (TDU)',
        localData: { ...ERCOT_DEREG_BASE, avgMonthlyBillEstimate: 185 },
        cityProfile: {
          localNote: 'Pasadena is a major suburb southeast of Houston, with flat terrain ideal for solar installations. Proximity to the Gulf Coast means high humidity and hurricane exposure.',
          faq: [
            {
              q: 'Do I need a permit for solar in Pasadena, TX?',
              a: 'Yes. The City of Pasadena Building Department handles solar permits. Typical turnaround is 2-6 weeks. Your installer manages the permit process.',
            },
            {
              q: 'Is residential solar worth it in Pasadena with deregulated power?',
              a: 'Yes. Pasadena is in the deregulated ERCOT market -- you choose your REP. Solar helps offset high summer cooling costs, and battery backup provides critical resilience during hurricanes and grid events like Winter Storm Uri.',
            },
            {
              q: 'How does solar perform in Pasadena\'s humid climate?',
              a: 'Pasadena averages an estimated 5.3 peak sun hours per day. Solar panels perform well despite humidity and occasional cloud cover, with strong summer production matching peak cooling demand.',
            },
          ],
        },
      },
      {
        city: 'Baytown',
        citySlug: 'baytown',
        utility: 'CenterPoint Energy (TDU)',
        localData: { ...ERCOT_DEREG_BASE, avgMonthlyBillEstimate: 180 },
        cityProfile: {
          localNote: 'Baytown sits on the Gulf Coast east of Houston. The city\'s coastal location brings hurricane risk and high humidity, making battery backup a valuable investment for storm resilience.',
          faq: [
            {
              q: 'Do I need a permit for solar in Baytown?',
              a: 'Yes. The City of Baytown Building Department handles residential solar permits. Typical turnaround is 2-6 weeks. Your contractor submits the application.',
            },
            {
              q: 'Is solar + battery storage worth it in Baytown for hurricanes?',
              a: 'Yes. Baytown\'s Gulf Coast location means hurricane risk and potential multi-day outages. Battery backup keeps critical loads running when the grid is down. Solar offsets high summer cooling costs. You choose your REP, so shop for a good solar buyback plan.',
            },
            {
              q: 'How much sun does Baytown get for solar production?',
              a: 'Baytown averages an estimated 5.3 peak sun hours per day. Coastal humidity reduces output slightly compared to inland areas, but production is still strong year-round.',
            },
          ],
        },
      },
      {
        city: 'Katy',
        citySlug: 'katy',
        utility: 'CenterPoint Energy (TDU)',
        localData: { ...ERCOT_DEREG_BASE, avgMonthlyBillEstimate: 195 },
        cityProfile: {
          localNote: 'Katy is a fast-growing suburb west of Houston, with modern homes and ample roof space for solar. The area\'s flat terrain and unobstructed rooftops are ideal for solar panel placement.',
          faq: [
            {
              q: 'Do I need a permit for solar in Katy, TX?',
              a: 'Yes. The City of Katy Building Department handles solar permits within city limits. Unincorporated areas may fall under Harris County jurisdiction. Typical turnaround is 2-6 weeks.',
            },
            {
              q: 'Is residential solar worth it in Katy\'s growing suburbs?',
              a: 'Yes. Katy\'s new subdivisions often have large rooftops ideal for solar. High summer cooling loads and deregulated power (choose your REP for the best solar buyback) make solar a smart investment. Battery backup adds resilience for grid events.',
            },
            {
              q: 'How much sun does Katy get for solar?',
              a: 'Katy averages an estimated 5.3 peak sun hours per day. The flat prairie terrain west of Houston provides consistent solar exposure with minimal shading.',
            },
          ],
        },
      },
      {
        city: 'Humble',
        citySlug: 'humble',
        utility: 'CenterPoint Energy (TDU)',
        localData: { ...ERCOT_DEREG_BASE, avgMonthlyBillEstimate: 185 },
        cityProfile: {
          localNote: 'Humble is a northeast Houston suburb with a mix of established and new residential areas. The city\'s location inland from the coast means slightly less humidity than coastal areas, but still requires wind-rated equipment.',
          faq: [
            {
              q: 'Do I need a permit for solar in Humble?',
              a: 'Yes. The City of Humble Building Department handles solar permits. Typical turnaround is 2-6 weeks. Your installer will submit the application and coordinate approvals.',
            },
            {
              q: 'Is solar + battery storage worth it in Humble, TX?',
              a: 'Yes. Humble experiences hot summers with high cooling demand. Solar directly offsets air conditioning costs. Battery backup provides resilience during storms and grid events. You choose your REP, so shop for a plan with strong solar export rates.',
            },
            {
              q: 'How does solar perform in Humble\'s climate?',
              a: 'Humble averages an estimated 5.3 peak sun hours per day. Solar production is strong year-round, with peak output during summer when your energy costs are highest.',
            },
          ],
        },
      },
    ],
  },

  // 2. Dallas County
  {
    county: 'Dallas County',
    regionSlug: 'dallas-county',
    state: 'texas',
    countyData: {
      utilityRate: {
        utility: 'Oncor (TDU)',
        avgResidentialRatePerKwh: 0.14,
        note: 'Dallas County is in the deregulated ERCOT market. Oncor delivers power as the wires-only TDU, but you choose your own Retail Electric Provider (REP) which sets your solar buyback rate. Solar export rates vary widely by REP and plan -- shop for a competitive solar buyback to maximize savings. Illustrative residential rate range: $0.12-$0.16/kWh depending on REP choice.',
      },
      permitOffice: {
        name: 'Dallas Development Services',
        jurisdiction: 'City of Dallas (other cities and unincorporated areas have separate processes)',
        typicalTurnaround: '2-6 weeks, varies by jurisdiction',
        note: 'Dallas and other incorporated cities in Dallas County each have their own building departments. Permit timelines vary by jurisdiction -- confirm with your local building department. Your installer manages the application.',
      },
      climateZone: {
        zone: 'Hot-humid North Texas / Hail Alley',
        description: 'Hot, humid summers with high cooling demand. Dallas is part of "Hail Alley" -- severe spring/summer hailstorms are common, requiring hail-rated solar equipment. Winter Storm Uri (February 2021) caused multi-day blackouts. Battery backup is valuable for both winter storms and summer heat events.',
      },
      countyContext: 'Dallas County is the urban core of North Texas, centered on Dallas and surrounding cities. The hot, humid climate drives high summer cooling loads. Dallas sits in "Hail Alley" -- hail-rated solar equipment is essential. Winter Storm Uri underscored the importance of battery backup for grid resilience during extreme weather events.',
    },
    cities: [
      {
        city: 'Dallas',
        citySlug: 'dallas',
        utility: 'Oncor (TDU)',
        localData: { ...ERCOT_DEREG_BASE, avgMonthlyBillEstimate: 185 },
        cityProfile: {
          localNote: 'Dallas is the urban core of North Texas, with hot summers and a location in Hail Alley. Hail-rated solar equipment is essential for storm protection.',
          faq: [
            {
              q: 'Do I need a permit for solar in Dallas?',
              a: 'Yes. Dallas Development Services handles solar permits. Typical turnaround is 2-6 weeks. Your installer submits the application and manages approvals.',
            },
            {
              q: 'Is solar + battery storage worth it in Dallas?',
              a: 'Yes. Dallas has hot summers with high cooling costs, and solar directly offsets air conditioning demand. Battery backup is essential for grid resilience -- Winter Storm Uri caused multi-day blackouts. Dallas is in "Hail Alley," so hail-rated equipment is required. You choose your REP, so shop for a plan with good solar export rates.',
            },
            {
              q: 'How much sun does Dallas get for solar?',
              a: 'Dallas averages an estimated 5.3 peak sun hours per day. Solar production is strong year-round, with peak output in summer matching high cooling demand.',
            },
          ],
        },
      },
      {
        city: 'Garland',
        citySlug: 'garland',
        utility: 'Garland Power & Light (municipal)',
        localData: { ...ERCOT_DEREG_BASE, avgMonthlyBillEstimate: 170 },
        cityProfile: {
          localNote: 'Garland operates its own municipal electric utility (Garland Power & Light), so residents do not choose a REP. The city sets its own rates and solar policies.',
          faq: [
            {
              q: 'Do I need a permit for solar in Garland?',
              a: 'Yes. The City of Garland Building Inspection Department handles solar permits. Typical turnaround is 2-6 weeks. Your installer manages the process.',
            },
            {
              q: 'Is solar worth it in Garland with municipal power?',
              a: 'Yes. Garland Power & Light is a municipal utility with its own solar interconnection and net metering policies. Solar offsets high summer cooling costs. Battery backup provides resilience during winter storms and summer heat events. Confirm current solar buyback rates with Garland Power & Light.',
            },
            {
              q: 'How does solar perform in Garland?',
              a: 'Garland averages an estimated 5.3 peak sun hours per day. Solar production is strong year-round. Garland is in Hail Alley, so hail-rated equipment is essential.',
            },
          ],
        },
      },
      {
        city: 'Irving',
        citySlug: 'irving',
        utility: 'Oncor (TDU)',
        localData: { ...ERCOT_DEREG_BASE, avgMonthlyBillEstimate: 185 },
        cityProfile: {
          localNote: 'Irving is a major suburb between Dallas and Fort Worth, with a mix of residential and commercial areas. Deregulated power market gives residents REP choice.',
          faq: [
            {
              q: 'Do I need a permit for solar in Irving?',
              a: 'Yes. The City of Irving Building Inspection Division handles solar permits. Typical turnaround is 2-6 weeks. Your contractor submits the application.',
            },
            {
              q: 'Is solar + battery storage worth it in Irving, TX?',
              a: 'Yes. Irving\'s hot summers drive high cooling costs. Solar offsets air conditioning demand, and battery backup provides resilience during storms. You choose your REP, so shop for a plan with competitive solar export rates.',
            },
            {
              q: 'How much sun does Irving get for solar?',
              a: 'Irving averages an estimated 5.3 peak sun hours per day. Solar production is strong, with peak output in summer. Irving is in Hail Alley -- hail-rated panels are required.',
            },
          ],
        },
      },
      {
        city: 'Mesquite',
        citySlug: 'mesquite',
        utility: 'Oncor (TDU)',
        localData: { ...ERCOT_DEREG_BASE, avgMonthlyBillEstimate: 180 },
        cityProfile: {
          localNote: 'Mesquite is an eastern Dallas suburb with a mix of older and newer residential areas. Deregulated power market allows residents to choose their REP.',
          faq: [
            {
              q: 'Do I need a permit for solar in Mesquite?',
              a: 'Yes. The City of Mesquite Building Inspection Department handles solar permits. Typical turnaround is 2-6 weeks. Your installer manages the permit application.',
            },
            {
              q: 'Is residential solar worth it in Mesquite?',
              a: 'Yes. Mesquite\'s hot summers create high cooling demand. Solar directly offsets air conditioning costs. Battery backup is valuable for storm resilience. You choose your REP in the deregulated market -- shop for good solar export rates.',
            },
            {
              q: 'How does solar perform in Mesquite\'s climate?',
              a: 'Mesquite averages an estimated 5.3 peak sun hours per day. Solar production is strong year-round, with peak output during summer. Hail Alley location requires hail-rated equipment.',
            },
          ],
        },
      },
    ],
  },

  // 3. Tarrant County
  {
    county: 'Tarrant County',
    regionSlug: 'tarrant-county',
    state: 'texas',
    countyData: {
      utilityRate: {
        utility: 'Oncor (TDU)',
        avgResidentialRatePerKwh: 0.14,
        note: 'Tarrant County is in the deregulated ERCOT market. Oncor delivers power as the wires-only TDU, but you choose your own Retail Electric Provider (REP) which sets your solar buyback rate. Solar export rates vary widely by REP and plan -- shop for competitive solar buyback to maximize savings. Illustrative residential rate range: $0.12-$0.16/kWh depending on REP choice.',
      },
      permitOffice: {
        name: 'City of Fort Worth Development Services',
        jurisdiction: 'City of Fort Worth (other cities have separate processes)',
        typicalTurnaround: '2-6 weeks, varies by jurisdiction',
        note: 'Fort Worth, Arlington, and other cities in Tarrant County each have their own building departments. Permit timelines vary -- confirm with your local jurisdiction. Your installer manages the application.',
      },
      climateZone: {
        zone: 'Hot-humid North Texas / Hail Alley',
        description: 'Hot, humid summers with high cooling demand. Tarrant County is in "Hail Alley" -- severe spring/summer hailstorms require hail-rated solar equipment. Winter storms (like Uri in February 2021) and summer heat events make battery backup valuable for grid resilience.',
      },
      countyContext: 'Tarrant County is the Fort Worth metro area, centered on Fort Worth and Arlington. The hot, humid climate drives high summer cooling loads. Located in "Hail Alley," hail-rated solar equipment is essential. Winter Storm Uri caused multi-day blackouts, highlighting the importance of battery backup for energy resilience.',
    },
    cities: [
      {
        city: 'Fort Worth',
        citySlug: 'fort-worth',
        utility: 'Oncor (TDU)',
        localData: { ...ERCOT_DEREG_BASE, avgMonthlyBillEstimate: 185 },
        cityProfile: {
          localNote: 'Fort Worth is the western anchor of the Dallas-Fort Worth metro area, with hot summers and a location in Hail Alley. Hail-rated solar equipment is required.',
          faq: [
            {
              q: 'Do I need a permit for solar in Fort Worth?',
              a: 'Yes. Fort Worth Development Services handles solar permits. Typical turnaround is 2-6 weeks. Your installer submits and manages the permit application.',
            },
            {
              q: 'Is solar + battery storage worth it in Fort Worth?',
              a: 'Yes. Fort Worth has hot summers with high cooling costs. Solar offsets air conditioning demand, and battery backup provides resilience during winter storms and summer heat events. Fort Worth is in Hail Alley -- hail-rated panels are essential. You choose your REP, so shop for competitive solar export rates.',
            },
            {
              q: 'How much sun does Fort Worth get for solar?',
              a: 'Fort Worth averages an estimated 5.3 peak sun hours per day. Solar production is strong year-round, with peak output in summer when cooling demand is highest.',
            },
          ],
        },
      },
      {
        city: 'Arlington',
        citySlug: 'arlington',
        utility: 'Oncor (TDU)',
        localData: { ...ERCOT_DEREG_BASE, avgMonthlyBillEstimate: 185 },
        cityProfile: {
          localNote: 'Arlington sits between Dallas and Fort Worth, with hot summers and high cooling demand. The city is in Hail Alley, requiring hail-rated solar equipment.',
          faq: [
            {
              q: 'Do I need a permit for solar in Arlington, TX?',
              a: 'Yes. The City of Arlington Building Inspection Division handles solar permits. Typical turnaround is 2-6 weeks. Your contractor manages the permit process.',
            },
            {
              q: 'Is residential solar worth it in Arlington?',
              a: 'Yes. Arlington\'s hot summers create high cooling costs. Solar directly offsets air conditioning demand. Battery backup is valuable for winter storm and summer heat resilience. You choose your REP in the deregulated market -- shop for good solar buyback rates.',
            },
            {
              q: 'How does solar perform in Arlington\'s climate?',
              a: 'Arlington averages an estimated 5.3 peak sun hours per day. Solar production is strong, with peak output during summer. Arlington is in Hail Alley -- hail-rated equipment is required.',
            },
          ],
        },
      },
      {
        city: 'Grand Prairie',
        citySlug: 'grand-prairie',
        utility: 'Oncor (TDU)',
        localData: { ...ERCOT_DEREG_BASE, avgMonthlyBillEstimate: 180 },
        cityProfile: {
          localNote: 'Grand Prairie is a growing suburb between Dallas and Fort Worth, with flat terrain ideal for solar installations. Deregulated power market gives residents REP choice.',
          faq: [
            {
              q: 'Do I need a permit for solar in Grand Prairie?',
              a: 'Yes. The City of Grand Prairie Building Inspection Department handles solar permits. Typical turnaround is 2-6 weeks. Your installer submits the application.',
            },
            {
              q: 'Is solar + battery storage worth it in Grand Prairie?',
              a: 'Yes. Grand Prairie has hot summers with high cooling demand. Solar offsets air conditioning costs, and battery backup provides storm resilience. You choose your REP -- shop for competitive solar export rates.',
            },
            {
              q: 'How much sun does Grand Prairie get for solar?',
              a: 'Grand Prairie averages an estimated 5.3 peak sun hours per day. Flat terrain provides consistent solar exposure. Hail Alley location requires hail-rated panels.',
            },
          ],
        },
      },
    ],
  },

  // 4. Bexar County (San Antonio)
  {
    county: 'Bexar County',
    regionSlug: 'bexar-county',
    state: 'texas',
    countyData: {
      utilityRate: {
        utility: 'CPS Energy (municipal)',
        avgResidentialRatePerKwh: 0.13,
        note: 'Bexar County is served primarily by CPS Energy, a municipally-owned utility that sets its own rates and solar policies. Residents do not choose a REP. CPS Energy has its own solar buyback program -- confirm current solar export rates with CPS Energy directly. Illustrative residential rate: ~$0.13/kWh.',
      },
      permitOffice: {
        name: 'City of San Antonio Development Services',
        jurisdiction: 'City of San Antonio (other cities and unincorporated areas have separate processes)',
        typicalTurnaround: '2-6 weeks, varies by jurisdiction',
        note: 'San Antonio and other incorporated areas in Bexar County have their own building departments. Permit timelines vary -- confirm with your local jurisdiction. Your installer manages the application.',
      },
      climateZone: {
        zone: 'Hot-humid South Central Texas',
        description: 'Hot, humid summers with very high cooling demand. South Texas heat drives long cooling seasons from April through October. Winter Storm Uri (February 2021) caused multi-day blackouts. Battery backup is valuable for both winter storm resilience and summer heat events.',
      },
      countyContext: 'Bexar County is centered on San Antonio, the seventh-largest city in the US. The hot, humid climate creates very high summer cooling loads, making solar especially valuable for offsetting air conditioning costs. Winter Storm Uri underscored the importance of battery backup for grid resilience.',
    },
    cities: [
      {
        city: 'San Antonio',
        citySlug: 'san-antonio',
        utility: 'CPS Energy (municipal)',
        localData: { ...CPS_ENERGY, avgMonthlyBillEstimate: 170 },
        cityProfile: {
          localNote: 'San Antonio is the seventh-largest city in the US, with a hot climate and very high summer cooling demand. CPS Energy is a municipal utility that sets its own solar policies.',
          faq: [
            {
              q: 'Do I need a permit for solar in San Antonio?',
              a: 'Yes. City of San Antonio Development Services handles solar permits. Typical turnaround is 2-6 weeks. Your installer submits and manages the permit application.',
            },
            {
              q: 'Is solar + battery storage worth it in San Antonio?',
              a: 'Yes. San Antonio\'s hot summers create very high cooling costs. Solar directly offsets air conditioning demand. Battery backup provides resilience during winter storms and summer heat events. CPS Energy has its own solar buyback program -- confirm current rates with CPS Energy.',
            },
            {
              q: 'How much sun does San Antonio get for solar?',
              a: 'San Antonio averages an estimated 5.5 peak sun hours per day. Solar production is strong year-round, with peak output during the long summer cooling season.',
            },
          ],
        },
      },
      {
        city: 'Live Oak',
        citySlug: 'live-oak',
        utility: 'CPS Energy (municipal)',
        localData: { ...CPS_ENERGY, avgMonthlyBillEstimate: 165 },
        cityProfile: {
          localNote: 'Live Oak is a northeast San Antonio suburb with hot summers and high cooling demand. CPS Energy provides municipal power with its own solar policies.',
          faq: [
            {
              q: 'Do I need a permit for solar in Live Oak, TX?',
              a: 'Yes. The City of Live Oak Building Department handles solar permits. Typical turnaround is 2-6 weeks. Your contractor manages the permit process.',
            },
            {
              q: 'Is residential solar worth it in Live Oak?',
              a: 'Yes. Live Oak\'s hot summers drive high cooling costs. Solar offsets air conditioning demand, and battery backup provides storm resilience. CPS Energy sets its own solar buyback rates -- confirm current programs.',
            },
            {
              q: 'How does solar perform in Live Oak\'s climate?',
              a: 'Live Oak averages an estimated 5.5 peak sun hours per day. Solar production is strong, with peak output during the long summer cooling season.',
            },
          ],
        },
      },
    ],
  },

  // 5. Travis County (Austin)
  {
    county: 'Travis County',
    regionSlug: 'travis-county',
    state: 'texas',
    countyData: {
      utilityRate: {
        utility: 'Austin Energy (municipal)',
        avgResidentialRatePerKwh: 0.13,
        note: 'Travis County (City of Austin) is served primarily by Austin Energy, a municipally-owned utility that sets its own rates and solar policies. Residents do not choose a REP. Austin Energy has a well-established Value of Solar program -- confirm current solar export rates with Austin Energy directly. Illustrative residential rate: ~$0.13/kWh.',
      },
      permitOffice: {
        name: 'City of Austin Development Services Department',
        jurisdiction: 'City of Austin (other cities and unincorporated areas have separate processes)',
        typicalTurnaround: '2-6 weeks, varies by jurisdiction',
        note: 'Austin and other incorporated areas in Travis County have their own building departments. Austin has a streamlined solar permitting process. Permit timelines vary -- confirm with your local jurisdiction. Your installer manages the application.',
      },
      climateZone: {
        zone: 'Hot-humid Central Texas / Hill Country',
        description: 'Hot summers with very high cooling demand. Austin sits in the Texas Hill Country, with hot, dry summers and mild winters. Winter Storm Uri (February 2021) caused multi-day blackouts. Battery backup is valuable for both winter storm resilience and summer heat events.',
      },
      countyContext: 'Travis County is centered on Austin, the state capital. The hot climate drives very high summer cooling loads, making solar highly valuable for offsetting air conditioning costs. Austin Energy has a long history of solar incentives and net metering programs. Winter Storm Uri underscored the importance of battery backup for grid resilience.',
    },
    cities: [
      {
        city: 'Austin',
        citySlug: 'austin',
        utility: 'Austin Energy (municipal)',
        localData: { ...AUSTIN_ENERGY, avgMonthlyBillEstimate: 175 },
        cityProfile: {
          localNote: 'Austin is the state capital and a tech hub, with a hot climate and high summer cooling demand. Austin Energy has a well-established solar program with competitive buyback rates.',
          faq: [
            {
              q: 'Do I need a permit for solar in Austin?',
              a: 'Yes. City of Austin Development Services Department handles solar permits. Austin has streamlined solar permitting. Typical turnaround is 2-6 weeks. Your installer manages the application.',
            },
            {
              q: 'Is solar + battery storage worth it in Austin?',
              a: 'Yes. Austin\'s hot summers create very high cooling costs. Solar directly offsets air conditioning demand. Battery backup provides resilience during winter storms and summer heat events. Austin Energy has a Value of Solar program -- confirm current buyback rates.',
            },
            {
              q: 'How much sun does Austin get for solar?',
              a: 'Austin averages an estimated 5.4 peak sun hours per day. Solar production is strong year-round, with peak output during summer when cooling demand is highest.',
            },
          ],
        },
      },
      {
        city: 'Pflugerville',
        citySlug: 'pflugerville',
        utility: 'Austin Energy (municipal)',
        localData: { ...AUSTIN_ENERGY, avgMonthlyBillEstimate: 170 },
        cityProfile: {
          localNote: 'Pflugerville is a fast-growing suburb northeast of Austin, with modern homes and ample roof space for solar. Austin Energy provides municipal power with established solar programs.',
          faq: [
            {
              q: 'Do I need a permit for solar in Pflugerville?',
              a: 'Yes. The City of Pflugerville Building and Standards Department handles solar permits. Typical turnaround is 2-6 weeks. Your contractor manages the permit process.',
            },
            {
              q: 'Is residential solar worth it in Pflugerville?',
              a: 'Yes. Pflugerville\'s hot summers drive high cooling costs. Solar offsets air conditioning demand, and battery backup provides storm resilience. Austin Energy\'s Value of Solar program offers competitive buyback rates.',
            },
            {
              q: 'How does solar perform in Pflugerville\'s climate?',
              a: 'Pflugerville averages an estimated 5.4 peak sun hours per day. Solar production is strong, with peak output during the long summer cooling season.',
            },
          ],
        },
      },
    ],
  },

  // 6. Collin County
  {
    county: 'Collin County',
    regionSlug: 'collin-county',
    state: 'texas',
    countyData: {
      utilityRate: {
        utility: 'Oncor (TDU)',
        avgResidentialRatePerKwh: 0.14,
        note: 'Collin County is in the deregulated ERCOT market. Oncor delivers power as the wires-only TDU, but you choose your own Retail Electric Provider (REP) which sets your solar buyback rate. Solar export rates vary widely by REP and plan -- shop for competitive solar buyback to maximize savings. Illustrative residential rate range: $0.12-$0.16/kWh depending on REP choice.',
      },
      permitOffice: {
        name: 'City of Plano Building Inspection',
        jurisdiction: 'City of Plano (other cities have separate processes)',
        typicalTurnaround: '2-6 weeks, varies by jurisdiction',
        note: 'Plano, Frisco, McKinney, and other cities in Collin County each have their own building departments. Permit timelines vary -- confirm with your local jurisdiction. Your installer manages the application.',
      },
      climateZone: {
        zone: 'Hot-humid North Texas / Hail Alley',
        description: 'Hot, humid summers with high cooling demand. Collin County is in "Hail Alley" -- severe spring/summer hailstorms require hail-rated solar equipment. Winter storms and summer heat events make battery backup valuable for grid resilience.',
      },
      countyContext: 'Collin County is the northern Dallas metro area, centered on Plano, Frisco, and McKinney. The hot, humid climate drives high summer cooling loads. Located in "Hail Alley," hail-rated solar equipment is essential. Winter Storm Uri and summer heat events underscore the importance of battery backup.',
    },
    cities: [
      {
        city: 'Plano',
        citySlug: 'plano',
        utility: 'Oncor (TDU)',
        localData: { ...ERCOT_DEREG_BASE, avgMonthlyBillEstimate: 190 },
        cityProfile: {
          localNote: 'Plano is a major Dallas suburb with hot summers and a location in Hail Alley. Hail-rated solar equipment is required. Many modern homes have large rooftops ideal for solar.',
          faq: [
            {
              q: 'Do I need a permit for solar in Plano?',
              a: 'Yes. City of Plano Building Inspection handles solar permits. Typical turnaround is 2-6 weeks. Your installer submits and manages the permit application.',
            },
            {
              q: 'Is solar + battery storage worth it in Plano?',
              a: 'Yes. Plano has hot summers with high cooling costs. Solar offsets air conditioning demand, and battery backup provides resilience during winter storms and summer heat events. Plano is in Hail Alley -- hail-rated panels are essential. You choose your REP, so shop for competitive solar export rates.',
            },
            {
              q: 'How much sun does Plano get for solar?',
              a: 'Plano averages an estimated 5.3 peak sun hours per day. Solar production is strong year-round, with peak output in summer when cooling demand is highest.',
            },
          ],
        },
      },
      {
        city: 'Frisco',
        citySlug: 'frisco',
        utility: 'Oncor (TDU)',
        localData: { ...ERCOT_DEREG_BASE, avgMonthlyBillEstimate: 195 },
        cityProfile: {
          localNote: 'Frisco is a fast-growing Dallas suburb with modern homes and large rooftops ideal for solar. Hot summers and Hail Alley location require hail-rated equipment.',
          faq: [
            {
              q: 'Do I need a permit for solar in Frisco?',
              a: 'Yes. The City of Frisco Building Inspection Department handles solar permits. Typical turnaround is 2-6 weeks. Your contractor manages the permit process.',
            },
            {
              q: 'Is residential solar worth it in Frisco?',
              a: 'Yes. Frisco\'s hot summers create high cooling costs. Solar offsets air conditioning demand, and battery backup provides storm resilience. You choose your REP -- shop for good solar buyback rates. Hail-rated equipment is required.',
            },
            {
              q: 'How does solar perform in Frisco\'s climate?',
              a: 'Frisco averages an estimated 5.3 peak sun hours per day. Solar production is strong, with peak output during summer. Hail Alley location requires hail-rated panels.',
            },
          ],
        },
      },
      {
        city: 'McKinney',
        citySlug: 'mckinney',
        utility: 'Oncor (TDU)',
        localData: { ...ERCOT_DEREG_BASE, avgMonthlyBillEstimate: 190 },
        cityProfile: {
          localNote: 'McKinney is the Collin County seat, with hot summers and high cooling demand. Deregulated power market gives residents REP choice for solar buyback rates.',
          faq: [
            {
              q: 'Do I need a permit for solar in McKinney?',
              a: 'Yes. The City of McKinney Building Inspection Division handles solar permits. Typical turnaround is 2-6 weeks. Your installer manages the permit application.',
            },
            {
              q: 'Is solar + battery storage worth it in McKinney?',
              a: 'Yes. McKinney has hot summers with high cooling demand. Solar offsets air conditioning costs, and battery backup provides resilience during storms. You choose your REP in the deregulated market -- shop for competitive solar export rates.',
            },
            {
              q: 'How much sun does McKinney get for solar?',
              a: 'McKinney averages an estimated 5.3 peak sun hours per day. Solar production is strong year-round. McKinney is in Hail Alley -- hail-rated equipment is required.',
            },
          ],
        },
      },
    ],
  },

  // 7. Denton County
  {
    county: 'Denton County',
    regionSlug: 'denton-county',
    state: 'texas',
    countyData: {
      utilityRate: {
        utility: 'Oncor (TDU) / Denton Municipal Electric (municipal)',
        avgResidentialRatePerKwh: 0.14,
        note: 'Denton County has mixed utility service. Most areas are in the deregulated ERCOT market served by Oncor (TDU) -- residents choose their REP which sets solar buyback rates. The City of Denton has Denton Municipal Electric (DME), a municipal utility that sets its own rates and solar policies. Illustrative residential rate range: $0.12-$0.16/kWh depending on utility and REP/plan choice.',
      },
      permitOffice: {
        name: 'City of Denton Development Services',
        jurisdiction: 'City of Denton (other cities and unincorporated areas have separate processes)',
        typicalTurnaround: '2-6 weeks, varies by jurisdiction',
        note: 'Denton, Lewisville, Flower Mound, and other cities in Denton County each have their own building departments. Permit timelines vary -- confirm with your local jurisdiction. Your installer manages the application.',
      },
      climateZone: {
        zone: 'Hot-humid North Texas / Hail Alley',
        description: 'Hot, humid summers with high cooling demand. Denton County is in "Hail Alley" -- severe spring/summer hailstorms require hail-rated solar equipment. Winter storms and summer heat events make battery backup valuable for grid resilience.',
      },
      countyContext: 'Denton County is the northwest Dallas-Fort Worth metro area, centered on Denton, Lewisville, and Flower Mound. The hot, humid climate drives high summer cooling loads. Located in "Hail Alley," hail-rated solar equipment is essential. Winter Storm Uri and summer heat events highlight the importance of battery backup.',
    },
    cities: [
      {
        city: 'Denton',
        citySlug: 'denton',
        utility: 'Denton Municipal Electric (municipal)',
        localData: { ...ERCOT_DEREG_BASE, avgMonthlyBillEstimate: 175 },
        cityProfile: {
          localNote: 'Denton operates its own municipal electric utility (Denton Municipal Electric), so residents do not choose a REP. The city sets its own rates and solar policies.',
          faq: [
            {
              q: 'Do I need a permit for solar in Denton?',
              a: 'Yes. City of Denton Development Services handles solar permits. Typical turnaround is 2-6 weeks. Your installer submits and manages the permit application.',
            },
            {
              q: 'Is solar + battery storage worth it in Denton?',
              a: 'Yes. Denton has hot summers with high cooling costs. Solar offsets air conditioning demand, and battery backup provides resilience during winter storms and summer heat events. Denton Municipal Electric sets its own solar buyback rates -- confirm current programs with DME. Hail-rated equipment is required.',
            },
            {
              q: 'How much sun does Denton get for solar?',
              a: 'Denton averages an estimated 5.3 peak sun hours per day. Solar production is strong year-round, with peak output in summer when cooling demand is highest.',
            },
          ],
        },
      },
      {
        city: 'Lewisville',
        citySlug: 'lewisville',
        utility: 'Oncor (TDU)',
        localData: { ...ERCOT_DEREG_BASE, avgMonthlyBillEstimate: 185 },
        cityProfile: {
          localNote: 'Lewisville is a Dallas-Fort Worth suburb with hot summers and Hail Alley location. Deregulated power market gives residents REP choice for solar buyback rates.',
          faq: [
            {
              q: 'Do I need a permit for solar in Lewisville?',
              a: 'Yes. The City of Lewisville Building Inspection Division handles solar permits. Typical turnaround is 2-6 weeks. Your contractor manages the permit process.',
            },
            {
              q: 'Is residential solar worth it in Lewisville?',
              a: 'Yes. Lewisville\'s hot summers create high cooling costs. Solar offsets air conditioning demand, and battery backup provides storm resilience. You choose your REP -- shop for competitive solar export rates. Hail-rated equipment is required.',
            },
            {
              q: 'How does solar perform in Lewisville\'s climate?',
              a: 'Lewisville averages an estimated 5.3 peak sun hours per day. Solar production is strong, with peak output during summer. Hail Alley location requires hail-rated panels.',
            },
          ],
        },
      },
      {
        city: 'Flower Mound',
        citySlug: 'flower-mound',
        utility: 'Oncor (TDU)',
        localData: { ...ERCOT_DEREG_BASE, avgMonthlyBillEstimate: 190 },
        cityProfile: {
          localNote: 'Flower Mound is an affluent Dallas-Fort Worth suburb with modern homes and large rooftops. Hot summers and Hail Alley location require hail-rated solar equipment.',
          faq: [
            {
              q: 'Do I need a permit for solar in Flower Mound?',
              a: 'Yes. The Town of Flower Mound Building Inspection Department handles solar permits. Typical turnaround is 2-6 weeks. Your installer manages the permit application.',
            },
            {
              q: 'Is solar + battery storage worth it in Flower Mound?',
              a: 'Yes. Flower Mound has hot summers with high cooling demand. Solar offsets air conditioning costs, and battery backup provides resilience during storms. You choose your REP in the deregulated market -- shop for good solar buyback rates.',
            },
            {
              q: 'How much sun does Flower Mound get for solar?',
              a: 'Flower Mound averages an estimated 5.3 peak sun hours per day. Solar production is strong year-round. Hail Alley location requires hail-rated equipment.',
            },
          ],
        },
      },
    ],
  },

  // 8. Fort Bend County
  {
    county: 'Fort Bend County',
    regionSlug: 'fort-bend-county',
    state: 'texas',
    countyData: {
      utilityRate: {
        utility: 'CenterPoint Energy (TDU)',
        avgResidentialRatePerKwh: 0.14,
        note: 'Fort Bend County is in the deregulated ERCOT market. CenterPoint Energy delivers power as the wires-only TDU, but you choose your own Retail Electric Provider (REP) which sets your solar buyback rate. Solar export rates vary widely by REP and plan -- shop for competitive solar buyback to maximize savings. Illustrative residential rate range: $0.12-$0.16/kWh depending on REP choice.',
      },
      permitOffice: {
        name: 'City of Sugar Land Permitting',
        jurisdiction: 'City of Sugar Land (other cities and unincorporated areas have separate processes)',
        typicalTurnaround: '2-6 weeks, varies by jurisdiction',
        note: 'Sugar Land, Missouri City, Rosenberg, and other cities in Fort Bend County each have their own building departments. Permit timelines vary -- confirm with your local jurisdiction. Your installer manages the application.',
      },
      climateZone: {
        zone: 'Hot-humid Gulf Coast climate',
        description: 'Hot, humid summers with frequent afternoon thunderstorms. High cooling demand from May through September. Hurricane and tropical storm risk requires wind-rated equipment. Coastal humidity requires corrosion-resistant hardware. Battery backup is valuable for multi-day post-storm outages.',
      },
      countyContext: 'Fort Bend County is the southwest Houston metro area, centered on Sugar Land, Missouri City, and Rosenberg. The hot, humid climate drives high summer cooling loads. Hurricane preparedness is a priority -- solar + battery systems provide critical backup power during multi-day post-storm outages. Winter Storm Uri underscored the importance of battery backup for grid resilience.',
    },
    cities: [
      {
        city: 'Sugar Land',
        citySlug: 'sugar-land',
        utility: 'CenterPoint Energy (TDU)',
        localData: { ...ERCOT_DEREG_BASE, avgMonthlyBillEstimate: 195 },
        cityProfile: {
          localNote: 'Sugar Land is an affluent Houston suburb with modern homes and large rooftops. Hot, humid summers and hurricane risk make battery backup especially valuable.',
          faq: [
            {
              q: 'Do I need a permit for solar in Sugar Land?',
              a: 'Yes. City of Sugar Land Permitting handles solar permits. Typical turnaround is 2-6 weeks. Your installer submits and manages the permit application.',
            },
            {
              q: 'Is solar + battery storage worth it in Sugar Land?',
              a: 'Yes. Sugar Land has hot, humid summers with high cooling costs. Solar offsets air conditioning demand, and battery backup provides critical resilience during hurricanes and multi-day outages. You choose your REP -- shop for competitive solar export rates.',
            },
            {
              q: 'How much sun does Sugar Land get for solar?',
              a: 'Sugar Land averages an estimated 5.3 peak sun hours per day. Solar production is strong year-round, with peak output in summer when cooling demand is highest.',
            },
          ],
        },
      },
      {
        city: 'Missouri City',
        citySlug: 'missouri-city',
        utility: 'CenterPoint Energy (TDU)',
        localData: { ...ERCOT_DEREG_BASE, avgMonthlyBillEstimate: 190 },
        cityProfile: {
          localNote: 'Missouri City is a Houston suburb with hot, humid summers and hurricane exposure. Deregulated power market gives residents REP choice for solar buyback rates.',
          faq: [
            {
              q: 'Do I need a permit for solar in Missouri City?',
              a: 'Yes. The City of Missouri City Building Inspection Department handles solar permits. Typical turnaround is 2-6 weeks. Your contractor manages the permit process.',
            },
            {
              q: 'Is residential solar worth it in Missouri City?',
              a: 'Yes. Missouri City\'s hot summers create high cooling costs. Solar offsets air conditioning demand, and battery backup provides hurricane resilience. You choose your REP -- shop for good solar buyback rates.',
            },
            {
              q: 'How does solar perform in Missouri City\'s humid climate?',
              a: 'Missouri City averages an estimated 5.3 peak sun hours per day. Solar production is strong despite humidity, with peak output during summer when cooling demand is highest.',
            },
          ],
        },
      },
      {
        city: 'Rosenberg',
        citySlug: 'rosenberg',
        utility: 'CenterPoint Energy (TDU)',
        localData: { ...ERCOT_DEREG_BASE, avgMonthlyBillEstimate: 185 },
        cityProfile: {
          localNote: 'Rosenberg is a Fort Bend County city west of Sugar Land, with hot, humid summers and flat terrain ideal for solar installations.',
          faq: [
            {
              q: 'Do I need a permit for solar in Rosenberg?',
              a: 'Yes. The City of Rosenberg Building Inspection Division handles solar permits. Typical turnaround is 2-6 weeks. Your installer manages the permit application.',
            },
            {
              q: 'Is solar + battery storage worth it in Rosenberg?',
              a: 'Yes. Rosenberg has hot summers with high cooling demand. Solar offsets air conditioning costs, and battery backup provides storm resilience. You choose your REP in the deregulated market -- shop for competitive solar export rates.',
            },
            {
              q: 'How much sun does Rosenberg get for solar?',
              a: 'Rosenberg averages an estimated 5.3 peak sun hours per day. Flat terrain provides consistent solar exposure, with peak output during summer.',
            },
          ],
        },
      },
    ],
  },

  // 9. Hidalgo County (RGV / McAllen area)
  {
    county: 'Hidalgo County',
    regionSlug: 'hidalgo-county',
    state: 'texas',
    countyData: {
      utilityRate: {
        utility: 'AEP Texas (TDU)',
        avgResidentialRatePerKwh: 0.13,
        note: 'Hidalgo County (Rio Grande Valley) is in the deregulated ERCOT market. AEP Texas delivers power as the wires-only TDU, but you choose your own Retail Electric Provider (REP) which sets your solar buyback rate. Solar export rates vary widely by REP and plan -- shop for competitive solar buyback to maximize savings. Illustrative residential rate range: $0.11-$0.15/kWh depending on REP choice.',
      },
      permitOffice: {
        name: 'City of McAllen Building and Standards',
        jurisdiction: 'City of McAllen (other cities and unincorporated areas have separate processes)',
        typicalTurnaround: '2-6 weeks, varies by jurisdiction',
        note: 'McAllen, Edinburg, Pharr, and other cities in Hidalgo County each have their own building departments. Permit timelines vary -- confirm with your local jurisdiction. Your installer manages the application.',
      },
      climateZone: {
        zone: 'Subtropical South Texas / Rio Grande Valley',
        description: 'Very hot, humid summers with extremely high cooling demand. The Rio Grande Valley has a subtropical climate with long, hot summers and mild winters. High heat and humidity drive very high air conditioning loads from April through October. Hurricane and tropical storm risk from the Gulf of Mexico requires wind-rated equipment.',
      },
      countyContext: 'Hidalgo County is the heart of the Rio Grande Valley, centered on McAllen, Edinburg, and Pharr. The very hot, subtropical climate creates extremely high summer cooling loads, making solar especially valuable for offsetting air conditioning costs. Hurricane preparedness is important -- solar + battery systems provide backup power during multi-day outages.',
    },
    cities: [
      {
        city: 'McAllen',
        citySlug: 'mcallen',
        utility: 'AEP Texas (TDU)',
        localData: { ...ERCOT_DEREG_BASE, avgMonthlyBillEstimate: 185, peakSunHoursEstimate: 5.6 },
        cityProfile: {
          localNote: 'McAllen is the largest city in the Rio Grande Valley, with a subtropical climate and very hot summers. High cooling demand makes solar especially valuable for offsetting air conditioning costs.',
          faq: [
            {
              q: '¿Necesito un permiso para energía solar en McAllen? / Do I need a permit for solar in McAllen?',
              a: 'Yes / Sí. City of McAllen Building and Standards handles solar permits. Typical turnaround is 2-6 weeks. Your installer submits and manages the permit application.',
            },
            {
              q: '¿Vale la pena la energía solar + almacenamiento con batería en McAllen? / Is solar + battery storage worth it in McAllen?',
              a: 'Yes / Sí. McAllen has very hot summers with extremely high cooling costs. Solar directly offsets air conditioning demand, and battery backup provides resilience during hurricanes and multi-day outages. You choose your REP -- shop for competitive solar export rates.',
            },
            {
              q: '¿Cuánto sol recibe McAllen para energía solar? / How much sun does McAllen get for solar?',
              a: 'McAllen averages an estimated 5.6 peak sun hours per day. The Rio Grande Valley has excellent solar production year-round, with very high output during the long summer cooling season.',
            },
          ],
        },
      },
      {
        city: 'Edinburg',
        citySlug: 'edinburg',
        utility: 'AEP Texas (TDU)',
        localData: { ...ERCOT_DEREG_BASE, avgMonthlyBillEstimate: 180, peakSunHoursEstimate: 5.6 },
        cityProfile: {
          localNote: 'Edinburg is the Hidalgo County seat, with a subtropical climate and very hot summers. Deregulated power market gives residents REP choice for solar buyback rates.',
          faq: [
            {
              q: '¿Necesito un permiso para energía solar en Edinburg? / Do I need a permit for solar in Edinburg?',
              a: 'Yes / Sí. The City of Edinburg Building Department handles solar permits. Typical turnaround is 2-6 weeks. Your contractor manages the permit process.',
            },
            {
              q: '¿Vale la pena la energía solar residencial en Edinburg? / Is residential solar worth it in Edinburg?',
              a: 'Yes / Sí. Edinburg\'s very hot summers create extremely high cooling costs. Solar offsets air conditioning demand, and battery backup provides storm resilience. You choose your REP -- shop for good solar buyback rates.',
            },
            {
              q: '¿Cómo funciona la energía solar en el clima de Edinburg? / How does solar perform in Edinburg\'s climate?',
              a: 'Edinburg averages an estimated 5.6 peak sun hours per day. Solar production is excellent, with very high output during the long summer cooling season.',
            },
          ],
        },
      },
      {
        city: 'Pharr',
        citySlug: 'pharr',
        utility: 'AEP Texas (TDU)',
        localData: { ...ERCOT_DEREG_BASE, avgMonthlyBillEstimate: 175, peakSunHoursEstimate: 5.6 },
        cityProfile: {
          localNote: 'Pharr is a Rio Grande Valley city with a subtropical climate and very hot summers. Flat terrain and high sun exposure make solar installations highly productive.',
          faq: [
            {
              q: '¿Necesito un permiso para energía solar en Pharr? / Do I need a permit for solar in Pharr?',
              a: 'Yes / Sí. The City of Pharr Building Inspection Division handles solar permits. Typical turnaround is 2-6 weeks. Your installer manages the permit application.',
            },
            {
              q: '¿Vale la pena la energía solar + almacenamiento con batería en Pharr? / Is solar + battery storage worth it in Pharr?',
              a: 'Yes / Sí. Pharr has very hot summers with extremely high cooling demand. Solar offsets air conditioning costs, and battery backup provides resilience during storms. You choose your REP in the deregulated market -- shop for competitive solar export rates.',
            },
            {
              q: '¿Cuánto sol recibe Pharr para energía solar? / How much sun does Pharr get for solar?',
              a: 'Pharr averages an estimated 5.6 peak sun hours per day. The Rio Grande Valley has excellent solar production, with very high output during summer when cooling demand is highest.',
            },
          ],
        },
      },
    ],
  },

  // 10. El Paso County
  {
    county: 'El Paso County',
    regionSlug: 'el-paso-county',
    state: 'texas',
    countyData: {
      utilityRate: {
        utility: 'El Paso Electric (regulated, WECC grid)',
        avgResidentialRatePerKwh: 0.13,
        note: 'El Paso County is served by El Paso Electric, a regulated utility on the WECC grid (not ERCOT). Residents do not choose a REP. El Paso Electric sets its own rates and solar policies -- confirm current solar buyback rates with El Paso Electric directly. Illustrative residential rate: ~$0.13/kWh.',
      },
      permitOffice: {
        name: 'City of El Paso Development Services',
        jurisdiction: 'City of El Paso (unincorporated areas via El Paso County)',
        typicalTurnaround: '2-6 weeks, varies by jurisdiction',
        note: 'El Paso and other incorporated areas in El Paso County have their own building departments. Permit timelines vary -- confirm with your local jurisdiction. Your installer manages the application.',
      },
      climateZone: {
        zone: 'High desert climate (Chihuahuan Desert)',
        description: 'Hot, dry summers with very low humidity. El Paso sits in the Chihuahuan Desert at ~3,800 ft elevation. Exceptional solar potential -- very high peak sun hours and minimal cloud cover year-round. Low humidity and high elevation boost solar production. High cooling demand from May through September.',
      },
      countyContext: 'El Paso County is the far western tip of Texas, centered on El Paso. The high desert climate provides exceptional solar potential -- among the best in Texas. El Paso Electric is a regulated utility on the WECC grid (isolated from ERCOT). Winter Storm Uri did not directly affect El Paso, but battery backup is still valuable for local grid events and summer heat.',
    },
    cities: [
      {
        city: 'El Paso',
        citySlug: 'el-paso',
        utility: 'El Paso Electric (regulated, WECC grid)',
        localData: { ...EPE, avgMonthlyBillEstimate: 165 },
        cityProfile: {
          localNote: 'El Paso is the westernmost major city in Texas, with exceptional solar potential due to high desert climate and minimal cloud cover. High elevation and low humidity boost solar production.',
          faq: [
            {
              q: 'Do I need a permit for solar in El Paso?',
              a: 'Yes. City of El Paso Development Services handles solar permits. Typical turnaround is 2-6 weeks. Your installer submits and manages the permit application.',
            },
            {
              q: 'Is solar + battery storage worth it in El Paso?',
              a: 'Yes. El Paso has exceptional solar potential -- among the best in Texas with an estimated 6.2 peak sun hours per day. High summer cooling demand makes solar highly valuable for offsetting air conditioning costs. Battery backup provides resilience during grid events. El Paso Electric sets its own solar buyback rates -- confirm current programs.',
            },
            {
              q: 'How much sun does El Paso get for solar?',
              a: 'El Paso averages an estimated 6.2 peak sun hours per day -- among the highest in Texas. The high desert climate, high elevation, and minimal cloud cover create exceptional solar production year-round.',
            },
          ],
        },
      },
      {
        city: 'Socorro',
        citySlug: 'socorro',
        utility: 'El Paso Electric (regulated, WECC grid)',
        localData: { ...EPE, avgMonthlyBillEstimate: 160 },
        cityProfile: {
          localNote: 'Socorro is an El Paso suburb in the high desert, with exceptional solar potential and minimal cloud cover. Flat terrain and unobstructed rooftops are ideal for solar installations.',
          faq: [
            {
              q: 'Do I need a permit for solar in Socorro?',
              a: 'Yes. The City of Socorro Building Department handles solar permits. Typical turnaround is 2-6 weeks. Your contractor manages the permit process.',
            },
            {
              q: 'Is residential solar worth it in Socorro?',
              a: 'Yes. Socorro has exceptional solar potential -- among the best in Texas. High summer cooling demand makes solar highly valuable. Battery backup provides grid resilience. El Paso Electric sets solar buyback rates -- confirm current programs.',
            },
            {
              q: 'How does solar perform in Socorro\'s high desert climate?',
              a: 'Socorro averages an estimated 6.2 peak sun hours per day. The high desert climate, high elevation, and minimal cloud cover create exceptional solar production year-round.',
            },
          ],
        },
      },
    ],
  },

  // 11. Montgomery County
  {
    county: 'Montgomery County',
    regionSlug: 'montgomery-county',
    state: 'texas',
    countyData: {
      utilityRate: {
        utility: 'CenterPoint Energy / Entergy Texas (TDU)',
        avgResidentialRatePerKwh: 0.14,
        note: 'Montgomery County is in the deregulated ERCOT market. CenterPoint Energy and Entergy Texas deliver power as wires-only TDUs depending on location, but you choose your own Retail Electric Provider (REP) which sets your solar buyback rate. Solar export rates vary widely by REP and plan -- shop for competitive solar buyback to maximize savings. Illustrative residential rate range: $0.12-$0.16/kWh depending on REP choice.',
      },
      permitOffice: {
        name: 'City of The Woodlands Permitting',
        jurisdiction: 'City of The Woodlands / City of Conroe (unincorporated areas via Montgomery County)',
        typicalTurnaround: '2-6 weeks, varies by jurisdiction',
        note: 'The Woodlands, Conroe, and other incorporated areas in Montgomery County have their own building departments. Permit timelines vary -- confirm with your local jurisdiction. Your installer manages the application.',
      },
      climateZone: {
        zone: 'Hot-humid Gulf Coast / East Texas Piney Woods',
        description: 'Hot, humid summers with frequent afternoon thunderstorms. High cooling demand from May through September. Hurricane and tropical storm risk from the Gulf of Mexico requires wind-rated equipment. Forested areas may have more shading from trees. Battery backup is valuable for multi-day post-storm outages.',
      },
      countyContext: 'Montgomery County is the north Houston metro area, centered on The Woodlands and Conroe. The hot, humid climate drives high summer cooling loads. Hurricane preparedness is important -- solar + battery systems provide backup power during multi-day outages. Winter Storm Uri underscored the importance of battery backup for grid resilience.',
    },
    cities: [
      {
        city: 'The Woodlands',
        citySlug: 'the-woodlands',
        utility: 'CenterPoint Energy (TDU)',
        localData: { ...ERCOT_DEREG_BASE, avgMonthlyBillEstimate: 200 },
        cityProfile: {
          localNote: 'The Woodlands is a master-planned community north of Houston, with hot, humid summers and lush tree cover. Modern homes often have large rooftops ideal for solar, though tree shading should be assessed.',
          faq: [
            {
              q: 'Do I need a permit for solar in The Woodlands?',
              a: 'Yes. City of The Woodlands Permitting handles solar permits. Typical turnaround is 2-6 weeks. Your installer submits and manages the permit application.',
            },
            {
              q: 'Is solar + battery storage worth it in The Woodlands?',
              a: 'Yes. The Woodlands has hot, humid summers with high cooling costs. Solar offsets air conditioning demand, and battery backup provides critical resilience during hurricanes and multi-day outages. Tree shading should be assessed -- your installer will evaluate your roof\'s solar potential. You choose your REP -- shop for competitive solar export rates.',
            },
            {
              q: 'How much sun does The Woodlands get for solar?',
              a: 'The Woodlands averages an estimated 5.3 peak sun hours per day. Tree cover can create shading in some areas -- a site assessment will determine your roof\'s specific solar potential.',
            },
          ],
        },
      },
      {
        city: 'Conroe',
        citySlug: 'conroe',
        utility: 'Entergy Texas (TDU)',
        localData: { ...ERCOT_DEREG_BASE, avgMonthlyBillEstimate: 185 },
        cityProfile: {
          localNote: 'Conroe is the Montgomery County seat, with hot, humid summers and high cooling demand. Deregulated power market gives residents REP choice for solar buyback rates.',
          faq: [
            {
              q: 'Do I need a permit for solar in Conroe?',
              a: 'Yes. The City of Conroe Building Inspection Department handles solar permits. Typical turnaround is 2-6 weeks. Your contractor manages the permit process.',
            },
            {
              q: 'Is residential solar worth it in Conroe?',
              a: 'Yes. Conroe\'s hot summers create high cooling costs. Solar offsets air conditioning demand, and battery backup provides hurricane and storm resilience. You choose your REP -- shop for good solar buyback rates.',
            },
            {
              q: 'How does solar perform in Conroe\'s humid climate?',
              a: 'Conroe averages an estimated 5.3 peak sun hours per day. Solar production is strong despite humidity, with peak output during summer when cooling demand is highest.',
            },
          ],
        },
      },
    ],
  },

  // 12. Williamson County
  {
    county: 'Williamson County',
    regionSlug: 'williamson-county',
    state: 'texas',
    countyData: {
      utilityRate: {
        utility: 'Mixed (Austin Energy, Georgetown, Oncor TDU)',
        avgResidentialRatePerKwh: 0.13,
        note: 'Williamson County has mixed utility service. Some areas are served by Austin Energy (municipal), others by Georgetown Utility Systems (municipal), and others are in the deregulated ERCOT market (Oncor TDU -- residents choose their REP). Solar buyback rates vary by utility and REP choice -- confirm with your specific utility. Illustrative residential rate range: $0.12-$0.15/kWh depending on utility and REP/plan choice.',
      },
      permitOffice: {
        name: 'City of Round Rock Building Services',
        jurisdiction: 'City of Round Rock / City of Georgetown (other cities and unincorporated areas have separate processes)',
        typicalTurnaround: '2-6 weeks, varies by jurisdiction',
        note: 'Round Rock, Georgetown, Cedar Park, and other cities in Williamson County each have their own building departments. Permit timelines vary -- confirm with your local jurisdiction. Your installer manages the application.',
      },
      climateZone: {
        zone: 'Hot-humid Central Texas / Hill Country',
        description: 'Hot summers with very high cooling demand. Williamson County sits in the Texas Hill Country just north of Austin, with hot, dry summers and mild winters. Winter Storm Uri (February 2021) caused multi-day blackouts. Battery backup is valuable for both winter storm resilience and summer heat events.',
      },
      countyContext: 'Williamson County is the northern Austin metro area, centered on Round Rock, Georgetown, and Cedar Park. The hot climate drives very high summer cooling loads, making solar highly valuable for offsetting air conditioning costs. Multiple utilities serve the county -- Austin Energy and Georgetown Utility Systems (municipal) have established solar programs, while deregulated areas allow REP choice. Winter Storm Uri underscored the importance of battery backup.',
    },
    cities: [
      {
        city: 'Round Rock',
        citySlug: 'round-rock',
        utility: 'Austin Energy (municipal)',
        localData: { ...AUSTIN_ENERGY, avgMonthlyBillEstimate: 175 },
        cityProfile: {
          localNote: 'Round Rock is a fast-growing Austin suburb with hot summers and high cooling demand. Austin Energy provides municipal power with established solar programs and competitive buyback rates.',
          faq: [
            {
              q: 'Do I need a permit for solar in Round Rock?',
              a: 'Yes. City of Round Rock Building Services handles solar permits. Typical turnaround is 2-6 weeks. Your installer submits and manages the permit application.',
            },
            {
              q: 'Is solar + battery storage worth it in Round Rock?',
              a: 'Yes. Round Rock has hot summers with very high cooling costs. Solar directly offsets air conditioning demand, and battery backup provides resilience during winter storms and summer heat events. Austin Energy has a Value of Solar program -- confirm current buyback rates.',
            },
            {
              q: 'How much sun does Round Rock get for solar?',
              a: 'Round Rock averages an estimated 5.4 peak sun hours per day. Solar production is strong year-round, with peak output during summer when cooling demand is highest.',
            },
          ],
        },
      },
      {
        city: 'Georgetown',
        citySlug: 'georgetown',
        utility: 'Georgetown Utility Systems (municipal)',
        localData: { ...AUSTIN_ENERGY, avgMonthlyBillEstimate: 170 },
        cityProfile: {
          localNote: 'Georgetown operates its own municipal electric utility (Georgetown Utility Systems), with a commitment to renewable energy. The city sets its own rates and solar policies.',
          faq: [
            {
              q: 'Do I need a permit for solar in Georgetown?',
              a: 'Yes. The City of Georgetown Building Inspection Department handles solar permits. Typical turnaround is 2-6 weeks. Your contractor manages the permit process.',
            },
            {
              q: 'Is residential solar worth it in Georgetown?',
              a: 'Yes. Georgetown has hot summers with high cooling demand. Solar offsets air conditioning costs, and battery backup provides storm resilience. Georgetown Utility Systems sets its own solar buyback rates -- confirm current programs.',
            },
            {
              q: 'How does solar perform in Georgetown\'s climate?',
              a: 'Georgetown averages an estimated 5.4 peak sun hours per day. Solar production is strong, with peak output during the long summer cooling season.',
            },
          ],
        },
      },
      {
        city: 'Cedar Park',
        citySlug: 'cedar-park',
        utility: 'Mixed (Austin Energy / Oncor TDU)',
        localData: { ...AUSTIN_ENERGY, avgMonthlyBillEstimate: 175 },
        cityProfile: {
          localNote: 'Cedar Park is a northwest Austin suburb with hot summers and high cooling demand. Mixed utility service -- some areas have Austin Energy (municipal), others are deregulated (choose your REP).',
          faq: [
            {
              q: 'Do I need a permit for solar in Cedar Park?',
              a: 'Yes. The City of Cedar Park Building Inspection Division handles solar permits. Typical turnaround is 2-6 weeks. Your installer manages the permit application.',
            },
            {
              q: 'Is solar + battery storage worth it in Cedar Park?',
              a: 'Yes. Cedar Park has hot summers with high cooling demand. Solar offsets air conditioning costs, and battery backup provides resilience during storms. Utility varies by location -- Austin Energy areas have Value of Solar, deregulated areas allow REP choice for solar buyback rates.',
            },
            {
              q: 'How much sun does Cedar Park get for solar?',
              a: 'Cedar Park averages an estimated 5.4 peak sun hours per day. Solar production is strong year-round, with peak output during summer when cooling demand is highest.',
            },
          ],
        },
      },
    ],
  },
  // 13. Cameron County
  {
    county: 'Cameron County',
    regionSlug: 'cameron-county',
    state: 'texas',
    countyData: {
      utilityRate: {
        utility: 'AEP Texas (TDU)',
        avgResidentialRatePerKwh: 0.13,
        note: 'Cameron County is in the deregulated ERCOT market. AEP Texas delivers power as the wires-only Transmission and Distribution Utility (TDU), but you choose your own Retail Electric Provider (REP) which sets your solar buyback rate. Solar export rates vary widely by REP and plan -- shop for a REP with a competitive solar buyback plan to maximize your savings. Illustrative residential rate range: $0.11-$0.15/kWh depending on REP and plan choice.',
      },
      permitOffice: {
        name: 'City of Brownsville Building & Standards',
        jurisdiction: 'City of Brownsville (other cities and unincorporated areas have separate processes)',
        typicalTurnaround: '2-6 weeks, varies by jurisdiction',
        note: 'Brownsville, Harlingen, and other incorporated areas in Cameron County each have their own building departments. Permit timelines vary -- confirm with your local jurisdiction. Your installer manages the application.',
      },
      climateZone: {
        zone: 'Subtropical South Texas / Rio Grande Valley',
        description: 'Very hot, humid summers with extremely high cooling demand. Cameron County sits at the southern tip of the Rio Grande Valley, with a subtropical climate, long hot summers, and mild winters. Hurricane and tropical storm risk from the Gulf of Mexico requires wind-rated equipment.',
      },
      countyContext: 'Cameron County is the southernmost county in Texas, centered on Brownsville and Harlingen along the Rio Grande and Gulf Coast. The subtropical climate creates very high summer cooling loads, making solar especially valuable for offsetting air conditioning costs. Hurricane preparedness is important -- solar + battery systems provide backup power during multi-day outages.',
    },
    cities: [
      {
        city: 'Brownsville',
        citySlug: 'brownsville',
        utility: 'AEP Texas (TDU)',
        localData: { ...ERCOT_DEREG_BASE, avgMonthlyBillEstimate: 175, peakSunHoursEstimate: 5.6 },
        cityProfile: {
          localNote: 'Brownsville is the largest city in Cameron County and the southernmost major city in Texas, with a subtropical climate and very hot summers.',
          faq: [
            {
              q: 'Do I need a permit for solar in Brownsville?',
              a: 'Yes. City of Brownsville Building & Standards handles solar permits. Typical turnaround is 2-6 weeks, varies by jurisdiction. Your installer manages the application and submits paperwork on your behalf.',
            },
            {
              q: 'Is solar + battery storage worth it in Brownsville?',
              a: 'Solar can be a strong option in Brownsville depending on your usage and roof. Battery backup adds resilience during grid events like Winter Storm Uri (February 2021). A site-specific assessment from your installer will confirm expected savings for your home.',
            },
            {
              q: 'How much sun does Brownsville get for solar?',
              a: 'Brownsville averages an estimated 5.6 peak sun hours per day. Actual production depends on roof orientation, shading, and system size -- your installer can provide a site-specific estimate.',
            },
          ],
        },
      },
      {
        city: 'Harlingen',
        citySlug: 'harlingen',
        utility: 'AEP Texas (TDU)',
        localData: { ...ERCOT_DEREG_BASE, avgMonthlyBillEstimate: 170, peakSunHoursEstimate: 5.6 },
        cityProfile: {
          localNote: 'Harlingen is a Rio Grande Valley hub city with a subtropical climate and very hot summers. Flat terrain provides consistent solar exposure.',
          faq: [
            {
              q: 'Do I need a permit for solar in Harlingen?',
              a: 'Yes. City of Harlingen Building Department handles solar permits. Typical turnaround is 2-6 weeks, varies by jurisdiction. Your installer manages the application and submits paperwork on your behalf.',
            },
            {
              q: 'Is solar + battery storage worth it in Harlingen?',
              a: 'Solar can be a strong option in Harlingen depending on your usage and roof. Battery backup adds resilience during grid events like Winter Storm Uri (February 2021). A site-specific assessment from your installer will confirm expected savings for your home.',
            },
            {
              q: 'How much sun does Harlingen get for solar?',
              a: 'Harlingen averages an estimated 5.6 peak sun hours per day. Actual production depends on roof orientation, shading, and system size -- your installer can provide a site-specific estimate.',
            },
          ],
        },
      },
    ],
  },

  // 14. Nueces County
  {
    county: 'Nueces County',
    regionSlug: 'nueces-county',
    state: 'texas',
    countyData: {
      utilityRate: {
        utility: 'AEP Texas (TDU)',
        avgResidentialRatePerKwh: 0.14,
        note: 'Nueces County is in the deregulated ERCOT market. AEP Texas delivers power as the wires-only Transmission and Distribution Utility (TDU), but you choose your own Retail Electric Provider (REP) which sets your solar buyback rate. Solar export rates vary widely by REP and plan -- shop for a REP with a competitive solar buyback plan to maximize your savings. Illustrative residential rate range: $0.12-$0.16/kWh depending on REP and plan choice.',
      },
      permitOffice: {
        name: 'City of Corpus Christi Development Services',
        jurisdiction: 'City of Corpus Christi (other cities and unincorporated areas have separate processes)',
        typicalTurnaround: '2-6 weeks, varies by jurisdiction',
        note: 'Corpus Christi, Robstown, and other incorporated areas in Nueces County each have their own building departments. Permit timelines vary -- confirm with your local jurisdiction. Your installer manages the application.',
      },
      climateZone: {
        zone: 'Subtropical Gulf Coast / Coastal Bend',
        description: 'Hot, humid summers with strong coastal winds off the Gulf of Mexico. High cooling demand from May through September. Hurricane and tropical storm risk requires wind-rated equipment, and coastal salt air requires corrosion-resistant hardware.',
      },
      countyContext: 'Nueces County is centered on Corpus Christi, a major Gulf Coast port city on the Coastal Bend. The hot, humid climate drives high summer cooling loads, and coastal exposure means hurricane preparedness is a priority. Solar + battery systems provide backup power during multi-day post-storm outages.',
    },
    cities: [
      {
        city: 'Corpus Christi',
        citySlug: 'corpus-christi',
        utility: 'AEP Texas (TDU)',
        localData: { ...ERCOT_DEREG_BASE, avgMonthlyBillEstimate: 185, peakSunHoursEstimate: 5.4 },
        cityProfile: {
          localNote: 'Corpus Christi is the largest city on the Texas Coastal Bend, with hot, humid summers and strong Gulf breezes. Hurricane preparedness is a priority for coastal homeowners.',
          faq: [
            {
              q: 'Do I need a permit for solar in Corpus Christi?',
              a: 'Yes. City of Corpus Christi Development Services handles solar permits. Typical turnaround is 2-6 weeks, varies by jurisdiction. Your installer manages the application and submits paperwork on your behalf.',
            },
            {
              q: 'Is solar + battery storage worth it in Corpus Christi?',
              a: 'Solar can be a strong option in Corpus Christi depending on your usage and roof. Battery backup adds resilience during grid events like Winter Storm Uri (February 2021). A site-specific assessment from your installer will confirm expected savings for your home.',
            },
            {
              q: 'How much sun does Corpus Christi get for solar?',
              a: 'Corpus Christi averages an estimated 5.4 peak sun hours per day. Actual production depends on roof orientation, shading, and system size -- your installer can provide a site-specific estimate.',
            },
          ],
        },
      },
      {
        city: 'Robstown',
        citySlug: 'robstown',
        utility: 'AEP Texas (TDU)',
        localData: { ...ERCOT_DEREG_BASE, avgMonthlyBillEstimate: 165, peakSunHoursEstimate: 5.4 },
        cityProfile: {
          localNote: 'Robstown is a Nueces County city west of Corpus Christi, with hot summers and flat terrain ideal for solar installations.',
          faq: [
            {
              q: 'Do I need a permit for solar in Robstown?',
              a: 'Yes. City of Robstown Building Department handles solar permits. Typical turnaround is 2-6 weeks, varies by jurisdiction. Your installer manages the application and submits paperwork on your behalf.',
            },
            {
              q: 'Is solar + battery storage worth it in Robstown?',
              a: 'Solar can be a strong option in Robstown depending on your usage and roof. Battery backup adds resilience during grid events like Winter Storm Uri (February 2021). A site-specific assessment from your installer will confirm expected savings for your home.',
            },
            {
              q: 'How much sun does Robstown get for solar?',
              a: 'Robstown averages an estimated 5.4 peak sun hours per day. Actual production depends on roof orientation, shading, and system size -- your installer can provide a site-specific estimate.',
            },
          ],
        },
      },
    ],
  },

  // 15. Bell County
  {
    county: 'Bell County',
    regionSlug: 'bell-county',
    state: 'texas',
    countyData: {
      utilityRate: {
        utility: 'Oncor (TDU)',
        avgResidentialRatePerKwh: 0.14,
        note: 'Bell County is in the deregulated ERCOT market. Oncor delivers power as the wires-only Transmission and Distribution Utility (TDU), but you choose your own Retail Electric Provider (REP) which sets your solar buyback rate. Solar export rates vary widely by REP and plan -- shop for a REP with a competitive solar buyback plan to maximize your savings. Illustrative residential rate range: $0.12-$0.16/kWh depending on REP and plan choice.',
      },
      permitOffice: {
        name: 'City of Killeen Building Inspections',
        jurisdiction: 'City of Killeen (other cities and unincorporated areas have separate processes)',
        typicalTurnaround: '2-6 weeks, varies by jurisdiction',
        note: 'Killeen, Temple, Belton, and other incorporated areas in Bell County each have their own building departments. Permit timelines vary -- confirm with your local jurisdiction. Your installer manages the application.',
      },
      climateZone: {
        zone: 'Hot-humid Central Texas',
        description: 'Hot summers with high cooling demand and mild winters. Bell County sits along the I-35 corridor between Austin and Dallas-Fort Worth. Winter Storm Uri (February 2021) caused multi-day statewide blackouts. Battery backup is valuable for grid resilience.',
      },
      countyContext: 'Bell County is centered on Killeen and Temple, anchored by Fort Cavazos (formerly Fort Hood) and the I-35 corridor. The hot climate drives high summer cooling loads, making solar valuable for offsetting air conditioning costs. Winter Storm Uri underscored the importance of battery backup for grid resilience.',
    },
    cities: [
      {
        city: 'Killeen',
        citySlug: 'killeen',
        utility: 'Oncor (TDU)',
        localData: { ...ERCOT_DEREG_BASE, avgMonthlyBillEstimate: 180, peakSunHoursEstimate: 5.3 },
        cityProfile: {
          localNote: 'Killeen is the largest city in Bell County, adjacent to Fort Cavazos, with hot summers and high cooling demand.',
          faq: [
            {
              q: 'Do I need a permit for solar in Killeen?',
              a: 'Yes. City of Killeen Building Inspections handles solar permits. Typical turnaround is 2-6 weeks, varies by jurisdiction. Your installer manages the application and submits paperwork on your behalf.',
            },
            {
              q: 'Is solar + battery storage worth it in Killeen?',
              a: 'Solar can be a strong option in Killeen depending on your usage and roof. Battery backup adds resilience during grid events like Winter Storm Uri (February 2021). A site-specific assessment from your installer will confirm expected savings for your home.',
            },
            {
              q: 'How much sun does Killeen get for solar?',
              a: 'Killeen averages an estimated 5.3 peak sun hours per day. Actual production depends on roof orientation, shading, and system size -- your installer can provide a site-specific estimate.',
            },
          ],
        },
      },
      {
        city: 'Temple',
        citySlug: 'temple',
        utility: 'Oncor (TDU)',
        localData: { ...ERCOT_DEREG_BASE, avgMonthlyBillEstimate: 175, peakSunHoursEstimate: 5.3 },
        cityProfile: {
          localNote: 'Temple is a growing Central Texas city with a mix of established and new residential areas and hot summer cooling demand.',
          faq: [
            {
              q: 'Do I need a permit for solar in Temple?',
              a: 'Yes. City of Temple Building Department handles solar permits. Typical turnaround is 2-6 weeks, varies by jurisdiction. Your installer manages the application and submits paperwork on your behalf.',
            },
            {
              q: 'Is solar + battery storage worth it in Temple?',
              a: 'Solar can be a strong option in Temple depending on your usage and roof. Battery backup adds resilience during grid events like Winter Storm Uri (February 2021). A site-specific assessment from your installer will confirm expected savings for your home.',
            },
            {
              q: 'How much sun does Temple get for solar?',
              a: 'Temple averages an estimated 5.3 peak sun hours per day. Actual production depends on roof orientation, shading, and system size -- your installer can provide a site-specific estimate.',
            },
          ],
        },
      },
      {
        city: 'Belton',
        citySlug: 'belton',
        utility: 'Oncor (TDU)',
        localData: { ...ERCOT_DEREG_BASE, avgMonthlyBillEstimate: 165, peakSunHoursEstimate: 5.3 },
        cityProfile: {
          localNote: 'Belton is the Bell County seat, with hot summers and flat terrain well suited to solar installations.',
          faq: [
            {
              q: 'Do I need a permit for solar in Belton?',
              a: 'Yes. City of Belton Building Department handles solar permits. Typical turnaround is 2-6 weeks, varies by jurisdiction. Your installer manages the application and submits paperwork on your behalf.',
            },
            {
              q: 'Is solar + battery storage worth it in Belton?',
              a: 'Solar can be a strong option in Belton depending on your usage and roof. Battery backup adds resilience during grid events like Winter Storm Uri (February 2021). A site-specific assessment from your installer will confirm expected savings for your home.',
            },
            {
              q: 'How much sun does Belton get for solar?',
              a: 'Belton averages an estimated 5.3 peak sun hours per day. Actual production depends on roof orientation, shading, and system size -- your installer can provide a site-specific estimate.',
            },
          ],
        },
      },
    ],
  },

  // 16. Lubbock County
  {
    county: 'Lubbock County',
    regionSlug: 'lubbock-county',
    state: 'texas',
    countyData: {
      utilityRate: {
        utility: 'Lubbock Power & Light (LP&L) / Oncor (TDU)',
        avgResidentialRatePerKwh: 0.13,
        note: 'Lubbock County has a transitioning utility structure. Lubbock Power & Light (LP&L), the city\'s longtime municipal-style utility, integrated into the ERCOT grid in 2021; confirm current rate and retail-choice status with LP&L directly. Areas served by Oncor as the wires-only TDU follow the standard deregulated ERCOT model, where you choose your own Retail Electric Provider (REP) which sets your solar buyback rate. Illustrative residential rate range: $0.11-$0.15/kWh depending on utility and REP/plan choice.',
      },
      permitOffice: {
        name: 'City of Lubbock Building Inspection',
        jurisdiction: 'City of Lubbock (other cities and unincorporated areas have separate processes)',
        typicalTurnaround: '2-6 weeks, varies by jurisdiction',
        note: 'Lubbock, Wolfforth, and other incorporated areas in Lubbock County each have their own building departments. Permit timelines vary -- confirm with your local jurisdiction. Your installer manages the application.',
      },
      climateZone: {
        zone: 'Semi-arid South Plains / High Plains',
        description: 'Hot, dry summers with low humidity and cold winters. Lubbock County sits on the South Plains at high elevation, with strong wind resources and high peak sun hours. Severe hailstorms and occasional tornadoes require hail-rated equipment.',
      },
      countyContext: 'Lubbock County is centered on Lubbock, the hub of the South Plains region. The semi-arid climate and high elevation provide strong solar production. Lubbock Power & Light (LP&L) transitioned into the ERCOT market in 2021 -- utility structure and any retail choice options continue to evolve, so confirm current status with your utility. Areas served by Oncor as TDU follow the standard deregulated ERCOT REP-choice model.',
    },
    cities: [
      {
        city: 'Lubbock',
        citySlug: 'lubbock',
        utility: 'Lubbock Power & Light (LP&L)',
        localData: { ...ERCOT_DEREG_BASE, avgMonthlyBillEstimate: 170, peakSunHoursEstimate: 5.7 },
        cityProfile: {
          localNote: 'Lubbock is the hub of the South Plains, with a semi-arid climate, strong sun exposure, and high wind resources.',
          faq: [
            {
              q: 'Do I need a permit for solar in Lubbock?',
              a: 'Yes. City of Lubbock Building Inspection handles solar permits. Typical turnaround is 2-6 weeks, varies by jurisdiction. Your installer manages the application and submits paperwork on your behalf.',
            },
            {
              q: 'Is solar + battery storage worth it in Lubbock?',
              a: 'Solar can be a strong option in Lubbock depending on your usage and roof. Battery backup adds resilience during grid events like Winter Storm Uri (February 2021). A site-specific assessment from your installer will confirm expected savings for your home.',
            },
            {
              q: 'How much sun does Lubbock get for solar?',
              a: 'Lubbock averages an estimated 5.7 peak sun hours per day. Actual production depends on roof orientation, shading, and system size -- your installer can provide a site-specific estimate.',
            },
          ],
        },
      },
      {
        city: 'Wolfforth',
        citySlug: 'wolfforth',
        utility: 'Oncor (TDU)',
        localData: { ...ERCOT_DEREG_BASE, avgMonthlyBillEstimate: 160, peakSunHoursEstimate: 5.7 },
        cityProfile: {
          localNote: 'Wolfforth is a growing Lubbock County suburb southwest of Lubbock, with flat terrain and strong solar exposure.',
          faq: [
            {
              q: 'Do I need a permit for solar in Wolfforth?',
              a: 'Yes. City of Wolfforth Building Department handles solar permits. Typical turnaround is 2-6 weeks, varies by jurisdiction. Your installer manages the application and submits paperwork on your behalf.',
            },
            {
              q: 'Is solar + battery storage worth it in Wolfforth?',
              a: 'Solar can be a strong option in Wolfforth depending on your usage and roof. Battery backup adds resilience during grid events like Winter Storm Uri (February 2021). A site-specific assessment from your installer will confirm expected savings for your home.',
            },
            {
              q: 'How much sun does Wolfforth get for solar?',
              a: 'Wolfforth averages an estimated 5.7 peak sun hours per day. Actual production depends on roof orientation, shading, and system size -- your installer can provide a site-specific estimate.',
            },
          ],
        },
      },
    ],
  },

  // 17. Webb County
  {
    county: 'Webb County',
    regionSlug: 'webb-county',
    state: 'texas',
    countyData: {
      utilityRate: {
        utility: 'AEP Texas (TDU)',
        avgResidentialRatePerKwh: 0.13,
        note: 'Webb County is in the deregulated ERCOT market. AEP Texas delivers power as the wires-only Transmission and Distribution Utility (TDU), but you choose your own Retail Electric Provider (REP) which sets your solar buyback rate. Solar export rates vary widely by REP and plan -- shop for a REP with a competitive solar buyback plan to maximize your savings. Illustrative residential rate range: $0.11-$0.15/kWh depending on REP and plan choice.',
      },
      permitOffice: {
        name: 'City of Laredo Building Development Services',
        jurisdiction: 'City of Laredo (other cities and unincorporated areas have separate processes)',
        typicalTurnaround: '2-6 weeks, varies by jurisdiction',
        note: 'Laredo, El Cenizo, and other incorporated areas in Webb County each have their own building departments. Permit timelines vary -- confirm with your local jurisdiction. Your installer manages the application.',
      },
      climateZone: {
        zone: 'Semi-arid South Texas border region',
        description: 'Very hot summers with low humidity and mild winters. Webb County sits along the Rio Grande border with Mexico, with high solar potential and minimal cloud cover. High cooling demand runs from April through October.',
      },
      countyContext: 'Webb County is centered on Laredo, a major border city along the Rio Grande. The semi-arid climate provides strong, consistent solar production with minimal cloud cover, making solar especially valuable for offsetting the area\'s very high summer cooling costs.',
    },
    cities: [
      {
        city: 'Laredo',
        citySlug: 'laredo',
        utility: 'AEP Texas (TDU)',
        localData: { ...ERCOT_DEREG_BASE, avgMonthlyBillEstimate: 180, peakSunHoursEstimate: 5.6 },
        cityProfile: {
          localNote: 'Laredo is a major border city and international trade hub, with a semi-arid climate and very hot, sunny summers.',
          faq: [
            {
              q: 'Do I need a permit for solar in Laredo?',
              a: 'Yes. City of Laredo Building Development Services handles solar permits. Typical turnaround is 2-6 weeks, varies by jurisdiction. Your installer manages the application and submits paperwork on your behalf.',
            },
            {
              q: 'Is solar + battery storage worth it in Laredo?',
              a: 'Solar can be a strong option in Laredo depending on your usage and roof. Battery backup adds resilience during grid events like Winter Storm Uri (February 2021). A site-specific assessment from your installer will confirm expected savings for your home.',
            },
            {
              q: 'How much sun does Laredo get for solar?',
              a: 'Laredo averages an estimated 5.6 peak sun hours per day. Actual production depends on roof orientation, shading, and system size -- your installer can provide a site-specific estimate.',
            },
          ],
        },
      },
      {
        city: 'El Cenizo',
        citySlug: 'el-cenizo',
        utility: 'AEP Texas (TDU)',
        localData: { ...ERCOT_DEREG_BASE, avgMonthlyBillEstimate: 150, peakSunHoursEstimate: 5.6 },
        cityProfile: {
          localNote: 'El Cenizo is a small city in Webb County along the Rio Grande, with hot, sunny conditions well suited to solar production.',
          faq: [
            {
              q: 'Do I need a permit for solar in El Cenizo?',
              a: 'Yes. City of El Cenizo Building Department handles solar permits. Typical turnaround is 2-6 weeks, varies by jurisdiction. Your installer manages the application and submits paperwork on your behalf.',
            },
            {
              q: 'Is solar + battery storage worth it in El Cenizo?',
              a: 'Solar can be a strong option in El Cenizo depending on your usage and roof. Battery backup adds resilience during grid events like Winter Storm Uri (February 2021). A site-specific assessment from your installer will confirm expected savings for your home.',
            },
            {
              q: 'How much sun does El Cenizo get for solar?',
              a: 'El Cenizo averages an estimated 5.6 peak sun hours per day. Actual production depends on roof orientation, shading, and system size -- your installer can provide a site-specific estimate.',
            },
          ],
        },
      },
    ],
  },

  // 18. Brazoria County
  {
    county: 'Brazoria County',
    regionSlug: 'brazoria-county',
    state: 'texas',
    countyData: {
      utilityRate: {
        utility: 'CenterPoint Energy (TDU)',
        avgResidentialRatePerKwh: 0.14,
        note: 'Brazoria County is in the deregulated ERCOT market. CenterPoint Energy delivers power as the wires-only Transmission and Distribution Utility (TDU), but you choose your own Retail Electric Provider (REP) which sets your solar buyback rate. Solar export rates vary widely by REP and plan -- shop for a REP with a competitive solar buyback plan to maximize your savings. Illustrative residential rate range: $0.12-$0.16/kWh depending on REP and plan choice.',
      },
      permitOffice: {
        name: 'City of Pearland Building Inspection',
        jurisdiction: 'City of Pearland (other cities and unincorporated areas have separate processes)',
        typicalTurnaround: '2-6 weeks, varies by jurisdiction',
        note: 'Pearland, Lake Jackson, Angleton, and other incorporated areas in Brazoria County each have their own building departments. Permit timelines vary -- confirm with your local jurisdiction. Your installer manages the application.',
      },
      climateZone: {
        zone: 'Hot-humid Gulf Coast climate',
        description: 'Hot, humid summers with frequent afternoon thunderstorms. High cooling demand from May through September. Hurricane and tropical storm risk requires wind-rated equipment, and coastal humidity requires corrosion-resistant hardware. Battery backup is valuable for multi-day post-storm outages.',
      },
      countyContext: 'Brazoria County is the southern Houston metro area, centered on Pearland, Lake Jackson, and Angleton along the Gulf Coast. The hot, humid climate drives high summer cooling loads, and hurricane preparedness is a priority. Winter Storm Uri underscored the importance of battery backup for grid resilience.',
    },
    cities: [
      {
        city: 'Pearland',
        citySlug: 'pearland',
        utility: 'CenterPoint Energy (TDU)',
        localData: { ...ERCOT_DEREG_BASE, avgMonthlyBillEstimate: 190, peakSunHoursEstimate: 5.3 },
        cityProfile: {
          localNote: 'Pearland is a fast-growing Houston suburb south of the city, with modern homes and hot, humid summers.',
          faq: [
            {
              q: 'Do I need a permit for solar in Pearland?',
              a: 'Yes. City of Pearland Building Inspection handles solar permits. Typical turnaround is 2-6 weeks, varies by jurisdiction. Your installer manages the application and submits paperwork on your behalf.',
            },
            {
              q: 'Is solar + battery storage worth it in Pearland?',
              a: 'Solar can be a strong option in Pearland depending on your usage and roof. Battery backup adds resilience during grid events like Winter Storm Uri (February 2021). A site-specific assessment from your installer will confirm expected savings for your home.',
            },
            {
              q: 'How much sun does Pearland get for solar?',
              a: 'Pearland averages an estimated 5.3 peak sun hours per day. Actual production depends on roof orientation, shading, and system size -- your installer can provide a site-specific estimate.',
            },
          ],
        },
      },
      {
        city: 'Lake Jackson',
        citySlug: 'lake-jackson',
        utility: 'CenterPoint Energy (TDU)',
        localData: { ...ERCOT_DEREG_BASE, avgMonthlyBillEstimate: 180, peakSunHoursEstimate: 5.3 },
        cityProfile: {
          localNote: 'Lake Jackson is a Gulf Coast city near the coast, with hot, humid summers and hurricane exposure requiring wind-rated equipment.',
          faq: [
            {
              q: 'Do I need a permit for solar in Lake Jackson?',
              a: 'Yes. City of Lake Jackson Building Department handles solar permits. Typical turnaround is 2-6 weeks, varies by jurisdiction. Your installer manages the application and submits paperwork on your behalf.',
            },
            {
              q: 'Is solar + battery storage worth it in Lake Jackson?',
              a: 'Solar can be a strong option in Lake Jackson depending on your usage and roof. Battery backup adds resilience during grid events like Winter Storm Uri (February 2021). A site-specific assessment from your installer will confirm expected savings for your home.',
            },
            {
              q: 'How much sun does Lake Jackson get for solar?',
              a: 'Lake Jackson averages an estimated 5.3 peak sun hours per day. Actual production depends on roof orientation, shading, and system size -- your installer can provide a site-specific estimate.',
            },
          ],
        },
      },
      {
        city: 'Angleton',
        citySlug: 'angleton',
        utility: 'CenterPoint Energy (TDU)',
        localData: { ...ERCOT_DEREG_BASE, avgMonthlyBillEstimate: 170, peakSunHoursEstimate: 5.3 },
        cityProfile: {
          localNote: 'Angleton is the Brazoria County seat, with hot, humid summers and flat terrain ideal for solar installations.',
          faq: [
            {
              q: 'Do I need a permit for solar in Angleton?',
              a: 'Yes. City of Angleton Building Department handles solar permits. Typical turnaround is 2-6 weeks, varies by jurisdiction. Your installer manages the application and submits paperwork on your behalf.',
            },
            {
              q: 'Is solar + battery storage worth it in Angleton?',
              a: 'Solar can be a strong option in Angleton depending on your usage and roof. Battery backup adds resilience during grid events like Winter Storm Uri (February 2021). A site-specific assessment from your installer will confirm expected savings for your home.',
            },
            {
              q: 'How much sun does Angleton get for solar?',
              a: 'Angleton averages an estimated 5.3 peak sun hours per day. Actual production depends on roof orientation, shading, and system size -- your installer can provide a site-specific estimate.',
            },
          ],
        },
      },
    ],
  },

  // 19. Galveston County
  {
    county: 'Galveston County',
    regionSlug: 'galveston-county',
    state: 'texas',
    countyData: {
      utilityRate: {
        utility: 'CenterPoint Energy (TDU)',
        avgResidentialRatePerKwh: 0.14,
        note: 'Galveston County is in the deregulated ERCOT market. CenterPoint Energy delivers power as the wires-only Transmission and Distribution Utility (TDU), but you choose your own Retail Electric Provider (REP) which sets your solar buyback rate. Solar export rates vary widely by REP and plan -- shop for a REP with a competitive solar buyback plan to maximize your savings. Illustrative residential rate range: $0.12-$0.16/kWh depending on REP and plan choice.',
      },
      permitOffice: {
        name: 'City of Galveston Building Inspection',
        jurisdiction: 'City of Galveston (other cities and unincorporated areas have separate processes)',
        typicalTurnaround: '2-6 weeks, varies by jurisdiction',
        note: 'Galveston, League City, Texas City, and other incorporated areas in Galveston County each have their own building departments. Permit timelines vary -- confirm with your local jurisdiction. Your installer manages the application.',
      },
      climateZone: {
        zone: 'Hot-humid Gulf Coast / barrier island climate',
        description: 'Hot, humid summers with strong Gulf breezes. High cooling demand from May through September. Hurricane and tropical storm risk is significant for this Gulf Coast and barrier island county, requiring wind-rated equipment and corrosion-resistant hardware for salt air exposure.',
      },
      countyContext: 'Galveston County spans Galveston Island and the mainland cities of League City and Texas City along Galveston Bay. The hot, humid climate drives high summer cooling loads, and hurricane preparedness is especially important for this coastal county. Solar + battery systems provide critical backup power during multi-day post-storm outages.',
    },
    cities: [
      {
        city: 'Galveston',
        citySlug: 'galveston',
        utility: 'CenterPoint Energy (TDU)',
        localData: { ...ERCOT_DEREG_BASE, avgMonthlyBillEstimate: 185, peakSunHoursEstimate: 5.2 },
        cityProfile: {
          localNote: 'Galveston is a historic barrier island city with high hurricane exposure, making battery backup especially valuable for storm resilience.',
          faq: [
            {
              q: 'Do I need a permit for solar in Galveston?',
              a: 'Yes. City of Galveston Building Inspection handles solar permits. Typical turnaround is 2-6 weeks, varies by jurisdiction. Your installer manages the application and submits paperwork on your behalf.',
            },
            {
              q: 'Is solar + battery storage worth it in Galveston?',
              a: 'Solar can be a strong option in Galveston depending on your usage and roof. Battery backup adds resilience during grid events like Winter Storm Uri (February 2021). A site-specific assessment from your installer will confirm expected savings for your home.',
            },
            {
              q: 'How much sun does Galveston get for solar?',
              a: 'Galveston averages an estimated 5.2 peak sun hours per day. Actual production depends on roof orientation, shading, and system size -- your installer can provide a site-specific estimate.',
            },
          ],
        },
      },
      {
        city: 'League City',
        citySlug: 'league-city',
        utility: 'CenterPoint Energy (TDU)',
        localData: { ...ERCOT_DEREG_BASE, avgMonthlyBillEstimate: 190, peakSunHoursEstimate: 5.2 },
        cityProfile: {
          localNote: 'League City is a fast-growing Houston-area suburb near Galveston Bay, with hot, humid summers and modern homes suited to solar.',
          faq: [
            {
              q: 'Do I need a permit for solar in League City?',
              a: 'Yes. City of League City Building Department handles solar permits. Typical turnaround is 2-6 weeks, varies by jurisdiction. Your installer manages the application and submits paperwork on your behalf.',
            },
            {
              q: 'Is solar + battery storage worth it in League City?',
              a: 'Solar can be a strong option in League City depending on your usage and roof. Battery backup adds resilience during grid events like Winter Storm Uri (February 2021). A site-specific assessment from your installer will confirm expected savings for your home.',
            },
            {
              q: 'How much sun does League City get for solar?',
              a: 'League City averages an estimated 5.2 peak sun hours per day. Actual production depends on roof orientation, shading, and system size -- your installer can provide a site-specific estimate.',
            },
          ],
        },
      },
      {
        city: 'Texas City',
        citySlug: 'texas-city',
        utility: 'CenterPoint Energy (TDU)',
        localData: { ...ERCOT_DEREG_BASE, avgMonthlyBillEstimate: 180, peakSunHoursEstimate: 5.2 },
        cityProfile: {
          localNote: 'Texas City is an industrial Gulf Coast city with hot, humid summers and significant hurricane exposure.',
          faq: [
            {
              q: 'Do I need a permit for solar in Texas City?',
              a: 'Yes. City of Texas City Building Department handles solar permits. Typical turnaround is 2-6 weeks, varies by jurisdiction. Your installer manages the application and submits paperwork on your behalf.',
            },
            {
              q: 'Is solar + battery storage worth it in Texas City?',
              a: 'Solar can be a strong option in Texas City depending on your usage and roof. Battery backup adds resilience during grid events like Winter Storm Uri (February 2021). A site-specific assessment from your installer will confirm expected savings for your home.',
            },
            {
              q: 'How much sun does Texas City get for solar?',
              a: 'Texas City averages an estimated 5.2 peak sun hours per day. Actual production depends on roof orientation, shading, and system size -- your installer can provide a site-specific estimate.',
            },
          ],
        },
      },
    ],
  },

  // 20. Jefferson County
  {
    county: 'Jefferson County',
    regionSlug: 'jefferson-county',
    state: 'texas',
    countyData: {
      utilityRate: {
        utility: 'Entergy Texas',
        avgResidentialRatePerKwh: 0.13,
        note: 'Jefferson County is served by Entergy Texas, a regulated utility -- there is no Retail Electric Provider (REP) choice here, unlike most of Texas. Entergy Texas sets its own rates and solar interconnection policies -- confirm current solar buyback terms directly with the utility. Illustrative residential rate: ~$0.13/kWh.',
      },
      permitOffice: {
        name: 'City of Beaumont Building Codes',
        jurisdiction: 'City of Beaumont (other cities and unincorporated areas have separate processes)',
        typicalTurnaround: '2-6 weeks, varies by jurisdiction',
        note: 'Beaumont, Port Arthur, Nederland, and other incorporated areas in Jefferson County each have their own building departments. Permit timelines vary -- confirm with your local jurisdiction. Your installer manages the application.',
      },
      climateZone: {
        zone: 'Hot-humid Gulf Coast / East Texas Piney Woods',
        description: 'Hot, humid summers with frequent afternoon thunderstorms and very high cooling demand. Jefferson County sits at the eastern edge of the Texas Gulf Coast near the Louisiana border. Hurricane and tropical storm risk requires wind-rated equipment. Battery backup is valuable for multi-day post-storm outages.',
      },
      countyContext: 'Jefferson County is centered on Beaumont and Port Arthur, an industrial Gulf Coast region near the Louisiana border. The hot, humid climate drives high summer cooling loads. Jefferson County is served by Entergy Texas, a regulated utility -- there is no Retail Electric Provider choice here, unlike most of Texas. Hurricane preparedness is a major priority for this coastal, refinery-dense region.',
    },
    cities: [
      {
        city: 'Beaumont',
        citySlug: 'beaumont',
        utility: 'Entergy Texas',
        localData: { ...ENTERGY_TX, avgMonthlyBillEstimate: 175, peakSunHoursEstimate: 5.1 },
        cityProfile: {
          localNote: 'Beaumont is the largest city in Jefferson County, an industrial Gulf Coast hub with hot, humid summers and significant hurricane exposure.',
          faq: [
            {
              q: 'Do I need a permit for solar in Beaumont?',
              a: 'Yes. City of Beaumont Building Codes handles solar permits. Typical turnaround is 2-6 weeks, varies by jurisdiction. Your installer manages the application and submits paperwork on your behalf.',
            },
            {
              q: 'Is solar + battery storage worth it in Beaumont?',
              a: 'Solar can be a strong option in Beaumont depending on your usage and roof. Battery backup adds resilience during grid events like Winter Storm Uri (February 2021). A site-specific assessment from your installer will confirm expected savings for your home.',
            },
            {
              q: 'How much sun does Beaumont get for solar?',
              a: 'Beaumont averages an estimated 5.1 peak sun hours per day. Actual production depends on roof orientation, shading, and system size -- your installer can provide a site-specific estimate.',
            },
          ],
        },
      },
      {
        city: 'Port Arthur',
        citySlug: 'port-arthur',
        utility: 'Entergy Texas',
        localData: { ...ENTERGY_TX, avgMonthlyBillEstimate: 170, peakSunHoursEstimate: 5.1 },
        cityProfile: {
          localNote: 'Port Arthur is a Gulf Coast refining city with high hurricane risk, making battery backup especially valuable for storm resilience.',
          faq: [
            {
              q: 'Do I need a permit for solar in Port Arthur?',
              a: 'Yes. City of Port Arthur Building Department handles solar permits. Typical turnaround is 2-6 weeks, varies by jurisdiction. Your installer manages the application and submits paperwork on your behalf.',
            },
            {
              q: 'Is solar + battery storage worth it in Port Arthur?',
              a: 'Solar can be a strong option in Port Arthur depending on your usage and roof. Battery backup adds resilience during grid events like Winter Storm Uri (February 2021). A site-specific assessment from your installer will confirm expected savings for your home.',
            },
            {
              q: 'How much sun does Port Arthur get for solar?',
              a: 'Port Arthur averages an estimated 5.1 peak sun hours per day. Actual production depends on roof orientation, shading, and system size -- your installer can provide a site-specific estimate.',
            },
          ],
        },
      },
      {
        city: 'Nederland',
        citySlug: 'nederland',
        utility: 'Entergy Texas',
        localData: { ...ENTERGY_TX, avgMonthlyBillEstimate: 165, peakSunHoursEstimate: 5.1 },
        cityProfile: {
          localNote: 'Nederland is a Jefferson County city near Port Arthur, with hot, humid summers and coastal storm exposure.',
          faq: [
            {
              q: 'Do I need a permit for solar in Nederland?',
              a: 'Yes. City of Nederland Building Department handles solar permits. Typical turnaround is 2-6 weeks, varies by jurisdiction. Your installer manages the application and submits paperwork on your behalf.',
            },
            {
              q: 'Is solar + battery storage worth it in Nederland?',
              a: 'Solar can be a strong option in Nederland depending on your usage and roof. Battery backup adds resilience during grid events like Winter Storm Uri (February 2021). A site-specific assessment from your installer will confirm expected savings for your home.',
            },
            {
              q: 'How much sun does Nederland get for solar?',
              a: 'Nederland averages an estimated 5.1 peak sun hours per day. Actual production depends on roof orientation, shading, and system size -- your installer can provide a site-specific estimate.',
            },
          ],
        },
      },
    ],
  },

  // 21. Smith County
  {
    county: 'Smith County',
    regionSlug: 'smith-county',
    state: 'texas',
    countyData: {
      utilityRate: {
        utility: 'Oncor (TDU)',
        avgResidentialRatePerKwh: 0.14,
        note: 'Smith County is in the deregulated ERCOT market. Oncor delivers power as the wires-only Transmission and Distribution Utility (TDU), but you choose your own Retail Electric Provider (REP) which sets your solar buyback rate. Solar export rates vary widely by REP and plan -- shop for a REP with a competitive solar buyback plan to maximize your savings. Illustrative residential rate range: $0.12-$0.16/kWh depending on REP and plan choice.',
      },
      permitOffice: {
        name: 'City of Tyler Building Inspection',
        jurisdiction: 'City of Tyler (other cities and unincorporated areas have separate processes)',
        typicalTurnaround: '2-6 weeks, varies by jurisdiction',
        note: 'Tyler, Whitehouse, and other incorporated areas in Smith County each have their own building departments. Permit timelines vary -- confirm with your local jurisdiction. Your installer manages the application.',
      },
      climateZone: {
        zone: 'Hot-humid East Texas Piney Woods',
        description: 'Hot, humid summers with high cooling demand. Smith County sits in the East Texas Piney Woods, with more tree cover and cloud cover than open prairie counties, which can affect solar siting. Winter Storm Uri (February 2021) caused multi-day statewide blackouts.',
      },
      countyContext: 'Smith County is centered on Tyler, a regional hub in the East Texas Piney Woods known as the "Rose Capital of America." The hot, humid climate drives high summer cooling loads. Forested terrain means shading should be assessed for each roof. Winter Storm Uri underscored the importance of battery backup for grid resilience.',
    },
    cities: [
      {
        city: 'Tyler',
        citySlug: 'tyler',
        utility: 'Oncor (TDU)',
        localData: { ...ERCOT_DEREG_BASE, avgMonthlyBillEstimate: 175, peakSunHoursEstimate: 5 },
        cityProfile: {
          localNote: 'Tyler is the largest city in Smith County and a regional East Texas hub, with hot, humid summers and significant tree cover in older neighborhoods.',
          faq: [
            {
              q: 'Do I need a permit for solar in Tyler?',
              a: 'Yes. City of Tyler Building Inspection handles solar permits. Typical turnaround is 2-6 weeks, varies by jurisdiction. Your installer manages the application and submits paperwork on your behalf.',
            },
            {
              q: 'Is solar + battery storage worth it in Tyler?',
              a: 'Solar can be a strong option in Tyler depending on your usage and roof. Battery backup adds resilience during grid events like Winter Storm Uri (February 2021). A site-specific assessment from your installer will confirm expected savings for your home.',
            },
            {
              q: 'How much sun does Tyler get for solar?',
              a: 'Tyler averages an estimated 5.0 peak sun hours per day. Actual production depends on roof orientation, shading, and system size -- your installer can provide a site-specific estimate.',
            },
          ],
        },
      },
      {
        city: 'Whitehouse',
        citySlug: 'whitehouse',
        utility: 'Oncor (TDU)',
        localData: { ...ERCOT_DEREG_BASE, avgMonthlyBillEstimate: 165, peakSunHoursEstimate: 5 },
        cityProfile: {
          localNote: 'Whitehouse is a growing Tyler suburb with hot summers and a mix of open and wooded residential lots.',
          faq: [
            {
              q: 'Do I need a permit for solar in Whitehouse?',
              a: 'Yes. City of Whitehouse Building Department handles solar permits. Typical turnaround is 2-6 weeks, varies by jurisdiction. Your installer manages the application and submits paperwork on your behalf.',
            },
            {
              q: 'Is solar + battery storage worth it in Whitehouse?',
              a: 'Solar can be a strong option in Whitehouse depending on your usage and roof. Battery backup adds resilience during grid events like Winter Storm Uri (February 2021). A site-specific assessment from your installer will confirm expected savings for your home.',
            },
            {
              q: 'How much sun does Whitehouse get for solar?',
              a: 'Whitehouse averages an estimated 5.0 peak sun hours per day. Actual production depends on roof orientation, shading, and system size -- your installer can provide a site-specific estimate.',
            },
          ],
        },
      },
    ],
  },

  // 22. Brazos County
  {
    county: 'Brazos County',
    regionSlug: 'brazos-county',
    state: 'texas',
    countyData: {
      utilityRate: {
        utility: 'Oncor (TDU) / TNMP (TDU)',
        avgResidentialRatePerKwh: 0.14,
        note: 'Brazos County is in the deregulated ERCOT market. Depending on location, Oncor or Texas-New Mexico Power (TNMP) delivers power as the wires-only TDU, but you choose your own Retail Electric Provider (REP) which sets your solar buyback rate. Illustrative residential rate range: $0.12-$0.16/kWh depending on TDU area and REP/plan choice.',
      },
      permitOffice: {
        name: 'City of College Station Building Development Services',
        jurisdiction: 'City of College Station (other cities and unincorporated areas have separate processes)',
        typicalTurnaround: '2-6 weeks, varies by jurisdiction',
        note: 'College Station, Bryan, and other incorporated areas in Brazos County each have their own building departments. Permit timelines vary -- confirm with your local jurisdiction. Your installer manages the application.',
      },
      climateZone: {
        zone: 'Hot-humid Central Texas',
        description: 'Hot summers with high cooling demand and mild winters. Brazos County sits along the Brazos River in Central Texas, home to Texas A&M University. Winter Storm Uri (February 2021) caused multi-day statewide blackouts.',
      },
      countyContext: 'Brazos County is centered on College Station and Bryan, home to Texas A&M University. The hot climate drives high summer cooling loads, and both Oncor and Texas-New Mexico Power (TNMP) serve as wires-only TDUs depending on location within the deregulated ERCOT market -- residents choose their own Retail Electric Provider (REP). Winter Storm Uri underscored the importance of battery backup for grid resilience.',
    },
    cities: [
      {
        city: 'College Station',
        citySlug: 'college-station',
        utility: 'College Station Utilities (CSU, municipal)',
        localData: { ...ERCOT_DEREG_BASE, avgMonthlyBillEstimate: 180, peakSunHoursEstimate: 5.4 },
        cityProfile: {
          localNote: 'College Station is home to Texas A&M University, with hot summers and a mix of established neighborhoods and new development. The city is served by its own municipal electric utility, College Station Utilities.',
          faq: [
            {
              q: 'Do I need a permit for solar in College Station?',
              a: 'Yes. City of College Station Building Development Services handles solar permits. Typical turnaround is 2-6 weeks, varies by jurisdiction. Your installer manages the application and submits paperwork on your behalf.',
            },
            {
              q: 'Is solar + battery storage worth it in College Station?',
              a: 'Solar can be a strong option in College Station depending on your usage and roof. Battery backup adds resilience during grid events like Winter Storm Uri (February 2021). A site-specific assessment from your installer will confirm expected savings for your home.',
            },
            {
              q: 'How much sun does College Station get for solar?',
              a: 'College Station averages an estimated 5.4 peak sun hours per day. Actual production depends on roof orientation, shading, and system size -- your installer can provide a site-specific estimate.',
            },
          ],
        },
      },
      {
        city: 'Bryan',
        citySlug: 'bryan',
        utility: 'Bryan Texas Utilities (BTU, municipal)',
        localData: { ...ERCOT_DEREG_BASE, avgMonthlyBillEstimate: 170, peakSunHoursEstimate: 5.4 },
        cityProfile: {
          localNote: 'Bryan is the Brazos County seat and twin city to College Station, with hot summers and high cooling demand. The city is served by its own municipal electric utility, Bryan Texas Utilities.',
          faq: [
            {
              q: 'Do I need a permit for solar in Bryan?',
              a: 'Yes. City of Bryan Building Department handles solar permits. Typical turnaround is 2-6 weeks, varies by jurisdiction. Your installer manages the application and submits paperwork on your behalf.',
            },
            {
              q: 'Is solar + battery storage worth it in Bryan?',
              a: 'Solar can be a strong option in Bryan depending on your usage and roof. Battery backup adds resilience during grid events like Winter Storm Uri (February 2021). A site-specific assessment from your installer will confirm expected savings for your home.',
            },
            {
              q: 'How much sun does Bryan get for solar?',
              a: 'Bryan averages an estimated 5.4 peak sun hours per day. Actual production depends on roof orientation, shading, and system size -- your installer can provide a site-specific estimate.',
            },
          ],
        },
      },
    ],
  },

  // 23. McLennan County
  {
    county: 'McLennan County',
    regionSlug: 'mclennan-county',
    state: 'texas',
    countyData: {
      utilityRate: {
        utility: 'Oncor (TDU)',
        avgResidentialRatePerKwh: 0.14,
        note: 'McLennan County is in the deregulated ERCOT market. Oncor delivers power as the wires-only Transmission and Distribution Utility (TDU), but you choose your own Retail Electric Provider (REP) which sets your solar buyback rate. Solar export rates vary widely by REP and plan -- shop for a REP with a competitive solar buyback plan to maximize your savings. Illustrative residential rate range: $0.12-$0.16/kWh depending on REP and plan choice.',
      },
      permitOffice: {
        name: 'City of Waco Development Services',
        jurisdiction: 'City of Waco (other cities and unincorporated areas have separate processes)',
        typicalTurnaround: '2-6 weeks, varies by jurisdiction',
        note: 'Waco, Woodway, Hewitt, and other incorporated areas in McLennan County each have their own building departments. Permit timelines vary -- confirm with your local jurisdiction. Your installer manages the application.',
      },
      climateZone: {
        zone: 'Hot-humid Central Texas',
        description: 'Hot summers with high cooling demand and mild winters. McLennan County sits along the Brazos River in Central Texas. Severe spring hailstorms are common. Winter Storm Uri (February 2021) caused multi-day statewide blackouts.',
      },
      countyContext: 'McLennan County is centered on Waco, a growing Central Texas city along the I-35 corridor. The hot climate drives high summer cooling loads, and solar helps offset air conditioning costs. Winter Storm Uri underscored the importance of battery backup for grid resilience.',
    },
    cities: [
      {
        city: 'Waco',
        citySlug: 'waco',
        utility: 'Oncor (TDU)',
        localData: { ...ERCOT_DEREG_BASE, avgMonthlyBillEstimate: 175, peakSunHoursEstimate: 5.4 },
        cityProfile: {
          localNote: 'Waco is the largest city in McLennan County along the I-35 corridor, with hot summers and high cooling demand.',
          faq: [
            {
              q: 'Do I need a permit for solar in Waco?',
              a: 'Yes. City of Waco Development Services handles solar permits. Typical turnaround is 2-6 weeks, varies by jurisdiction. Your installer manages the application and submits paperwork on your behalf.',
            },
            {
              q: 'Is solar + battery storage worth it in Waco?',
              a: 'Solar can be a strong option in Waco depending on your usage and roof. Battery backup adds resilience during grid events like Winter Storm Uri (February 2021). A site-specific assessment from your installer will confirm expected savings for your home.',
            },
            {
              q: 'How much sun does Waco get for solar?',
              a: 'Waco averages an estimated 5.4 peak sun hours per day. Actual production depends on roof orientation, shading, and system size -- your installer can provide a site-specific estimate.',
            },
          ],
        },
      },
      {
        city: 'Woodway',
        citySlug: 'woodway',
        utility: 'Oncor (TDU)',
        localData: { ...ERCOT_DEREG_BASE, avgMonthlyBillEstimate: 180, peakSunHoursEstimate: 5.4 },
        cityProfile: {
          localNote: 'Woodway is an affluent Waco suburb with modern homes and large rooftops well suited to solar.',
          faq: [
            {
              q: 'Do I need a permit for solar in Woodway?',
              a: 'Yes. City of Woodway Building Department handles solar permits. Typical turnaround is 2-6 weeks, varies by jurisdiction. Your installer manages the application and submits paperwork on your behalf.',
            },
            {
              q: 'Is solar + battery storage worth it in Woodway?',
              a: 'Solar can be a strong option in Woodway depending on your usage and roof. Battery backup adds resilience during grid events like Winter Storm Uri (February 2021). A site-specific assessment from your installer will confirm expected savings for your home.',
            },
            {
              q: 'How much sun does Woodway get for solar?',
              a: 'Woodway averages an estimated 5.4 peak sun hours per day. Actual production depends on roof orientation, shading, and system size -- your installer can provide a site-specific estimate.',
            },
          ],
        },
      },
      {
        city: 'Hewitt',
        citySlug: 'hewitt',
        utility: 'Oncor (TDU)',
        localData: { ...ERCOT_DEREG_BASE, avgMonthlyBillEstimate: 170, peakSunHoursEstimate: 5.4 },
        cityProfile: {
          localNote: 'Hewitt is a growing Waco suburb with hot summers and flat terrain ideal for solar installations.',
          faq: [
            {
              q: 'Do I need a permit for solar in Hewitt?',
              a: 'Yes. City of Hewitt Building Department handles solar permits. Typical turnaround is 2-6 weeks, varies by jurisdiction. Your installer manages the application and submits paperwork on your behalf.',
            },
            {
              q: 'Is solar + battery storage worth it in Hewitt?',
              a: 'Solar can be a strong option in Hewitt depending on your usage and roof. Battery backup adds resilience during grid events like Winter Storm Uri (February 2021). A site-specific assessment from your installer will confirm expected savings for your home.',
            },
            {
              q: 'How much sun does Hewitt get for solar?',
              a: 'Hewitt averages an estimated 5.4 peak sun hours per day. Actual production depends on roof orientation, shading, and system size -- your installer can provide a site-specific estimate.',
            },
          ],
        },
      },
    ],
  },

  // 24. Hays County
  {
    county: 'Hays County',
    regionSlug: 'hays-county',
    state: 'texas',
    countyData: {
      utilityRate: {
        utility: 'Pedernales Electric Cooperative (PEC) / Oncor (TDU)',
        avgResidentialRatePerKwh: 0.13,
        note: 'Hays County has mixed utility service. Much of the county is served by Pedernales Electric Cooperative (PEC), a member-owned electric co-op that sets its own rates and solar interconnection policies -- confirm current solar buyback terms with PEC directly. Other areas are in the deregulated ERCOT market served by Oncor (TDU), where residents choose their own Retail Electric Provider (REP). Illustrative residential rate range: $0.12-$0.15/kWh depending on utility and REP/plan choice.',
      },
      permitOffice: {
        name: 'City of San Marcos Building Inspection',
        jurisdiction: 'City of San Marcos (other cities and unincorporated areas have separate processes)',
        typicalTurnaround: '2-6 weeks, varies by jurisdiction',
        note: 'San Marcos, Kyle, Buda, and other incorporated areas in Hays County each have their own building departments. Permit timelines vary -- confirm with your local jurisdiction. Your installer manages the application.',
      },
      climateZone: {
        zone: 'Hot-humid Central Texas / Hill Country',
        description: 'Hot summers with high cooling demand. Hays County sits at the edge of the Texas Hill Country between Austin and San Antonio, with hot, dry summers and mild winters. Winter Storm Uri (February 2021) caused multi-day statewide blackouts.',
      },
      countyContext: 'Hays County is the fast-growing corridor between Austin and San Antonio, centered on San Marcos, Kyle, and Buda. Much of the county is served by Pedernales Electric Cooperative (PEC), a member-owned electric co-op that sets its own rates and solar interconnection policies -- residents in PEC territory do not choose a REP. Other areas are served by Oncor as TDU in the deregulated ERCOT market. Winter Storm Uri underscored the importance of battery backup for grid resilience.',
    },
    cities: [
      {
        city: 'San Marcos',
        citySlug: 'san-marcos',
        utility: 'Mixed (Pedernales Electric Cooperative / Oncor TDU)',
        localData: { ...ERCOT_DEREG_BASE, avgMonthlyBillEstimate: 175, peakSunHoursEstimate: 5.4 },
        cityProfile: {
          localNote: 'San Marcos is a growing city between Austin and San Antonio, home to Texas State University, with hot summers and high cooling demand.',
          faq: [
            {
              q: 'Do I need a permit for solar in San Marcos?',
              a: 'Yes. City of San Marcos Building Inspection handles solar permits. Typical turnaround is 2-6 weeks, varies by jurisdiction. Your installer manages the application and submits paperwork on your behalf.',
            },
            {
              q: 'Is solar + battery storage worth it in San Marcos?',
              a: 'Solar can be a strong option in San Marcos depending on your usage and roof. Battery backup adds resilience during grid events like Winter Storm Uri (February 2021). A site-specific assessment from your installer will confirm expected savings for your home.',
            },
            {
              q: 'How much sun does San Marcos get for solar?',
              a: 'San Marcos averages an estimated 5.4 peak sun hours per day. Actual production depends on roof orientation, shading, and system size -- your installer can provide a site-specific estimate.',
            },
          ],
        },
      },
      {
        city: 'Kyle',
        citySlug: 'kyle',
        utility: 'Mixed (Pedernales Electric Cooperative / Oncor TDU)',
        localData: { ...ERCOT_DEREG_BASE, avgMonthlyBillEstimate: 175, peakSunHoursEstimate: 5.4 },
        cityProfile: {
          localNote: 'Kyle is one of the fastest-growing cities in Texas, with modern homes and large rooftops well suited to solar.',
          faq: [
            {
              q: 'Do I need a permit for solar in Kyle?',
              a: 'Yes. City of Kyle Building Department handles solar permits. Typical turnaround is 2-6 weeks, varies by jurisdiction. Your installer manages the application and submits paperwork on your behalf.',
            },
            {
              q: 'Is solar + battery storage worth it in Kyle?',
              a: 'Solar can be a strong option in Kyle depending on your usage and roof. Battery backup adds resilience during grid events like Winter Storm Uri (February 2021). A site-specific assessment from your installer will confirm expected savings for your home.',
            },
            {
              q: 'How much sun does Kyle get for solar?',
              a: 'Kyle averages an estimated 5.4 peak sun hours per day. Actual production depends on roof orientation, shading, and system size -- your installer can provide a site-specific estimate.',
            },
          ],
        },
      },
      {
        city: 'Buda',
        citySlug: 'buda',
        utility: 'Mixed (Pedernales Electric Cooperative / Oncor TDU)',
        localData: { ...ERCOT_DEREG_BASE, avgMonthlyBillEstimate: 170, peakSunHoursEstimate: 5.4 },
        cityProfile: {
          localNote: 'Buda is a fast-growing Hays County suburb south of Austin, with hot summers and new residential development.',
          faq: [
            {
              q: 'Do I need a permit for solar in Buda?',
              a: 'Yes. City of Buda Building Department handles solar permits. Typical turnaround is 2-6 weeks, varies by jurisdiction. Your installer manages the application and submits paperwork on your behalf.',
            },
            {
              q: 'Is solar + battery storage worth it in Buda?',
              a: 'Solar can be a strong option in Buda depending on your usage and roof. Battery backup adds resilience during grid events like Winter Storm Uri (February 2021). A site-specific assessment from your installer will confirm expected savings for your home.',
            },
            {
              q: 'How much sun does Buda get for solar?',
              a: 'Buda averages an estimated 5.4 peak sun hours per day. Actual production depends on roof orientation, shading, and system size -- your installer can provide a site-specific estimate.',
            },
          ],
        },
      },
    ],
  },

  // 25. Ellis County
  {
    county: 'Ellis County',
    regionSlug: 'ellis-county',
    state: 'texas',
    countyData: {
      utilityRate: {
        utility: 'Oncor (TDU)',
        avgResidentialRatePerKwh: 0.14,
        note: 'Ellis County is in the deregulated ERCOT market. Oncor delivers power as the wires-only Transmission and Distribution Utility (TDU), but you choose your own Retail Electric Provider (REP) which sets your solar buyback rate. Solar export rates vary widely by REP and plan -- shop for a REP with a competitive solar buyback plan to maximize your savings. Illustrative residential rate range: $0.12-$0.16/kWh depending on REP and plan choice.',
      },
      permitOffice: {
        name: 'City of Waxahachie Building Inspection',
        jurisdiction: 'City of Waxahachie (other cities and unincorporated areas have separate processes)',
        typicalTurnaround: '2-6 weeks, varies by jurisdiction',
        note: 'Waxahachie, Midlothian, Ennis, and other incorporated areas in Ellis County each have their own building departments. Permit timelines vary -- confirm with your local jurisdiction. Your installer manages the application.',
      },
      climateZone: {
        zone: 'Hot-humid North Texas / Hail Alley',
        description: 'Hot, humid summers with high cooling demand. Ellis County is in "Hail Alley" -- severe spring/summer hailstorms are common, requiring hail-rated solar equipment. Winter Storm Uri (February 2021) caused multi-day blackouts.',
      },
      countyContext: 'Ellis County is the southern Dallas-Fort Worth metro area, centered on Waxahachie, Midlothian, and Ennis. The hot, humid climate drives high summer cooling loads. Located in "Hail Alley," hail-rated solar equipment is essential. Winter Storm Uri underscored the importance of battery backup for grid resilience.',
    },
    cities: [
      {
        city: 'Waxahachie',
        citySlug: 'waxahachie',
        utility: 'Oncor (TDU)',
        localData: { ...ERCOT_DEREG_BASE, avgMonthlyBillEstimate: 180, peakSunHoursEstimate: 5.3 },
        cityProfile: {
          localNote: 'Waxahachie is the Ellis County seat, known for its historic downtown, with hot summers and a location in Hail Alley.',
          faq: [
            {
              q: 'Do I need a permit for solar in Waxahachie?',
              a: 'Yes. City of Waxahachie Building Inspection handles solar permits. Typical turnaround is 2-6 weeks, varies by jurisdiction. Your installer manages the application and submits paperwork on your behalf.',
            },
            {
              q: 'Is solar + battery storage worth it in Waxahachie?',
              a: 'Solar can be a strong option in Waxahachie depending on your usage and roof. Battery backup adds resilience during grid events like Winter Storm Uri (February 2021). A site-specific assessment from your installer will confirm expected savings for your home.',
            },
            {
              q: 'How much sun does Waxahachie get for solar?',
              a: 'Waxahachie averages an estimated 5.3 peak sun hours per day. Actual production depends on roof orientation, shading, and system size -- your installer can provide a site-specific estimate.',
            },
          ],
        },
      },
      {
        city: 'Midlothian',
        citySlug: 'midlothian',
        utility: 'Oncor (TDU)',
        localData: { ...ERCOT_DEREG_BASE, avgMonthlyBillEstimate: 185, peakSunHoursEstimate: 5.3 },
        cityProfile: {
          localNote: 'Midlothian is a fast-growing Dallas-Fort Worth suburb with modern homes and large rooftops well suited to solar.',
          faq: [
            {
              q: 'Do I need a permit for solar in Midlothian?',
              a: 'Yes. City of Midlothian Building Department handles solar permits. Typical turnaround is 2-6 weeks, varies by jurisdiction. Your installer manages the application and submits paperwork on your behalf.',
            },
            {
              q: 'Is solar + battery storage worth it in Midlothian?',
              a: 'Solar can be a strong option in Midlothian depending on your usage and roof. Battery backup adds resilience during grid events like Winter Storm Uri (February 2021). A site-specific assessment from your installer will confirm expected savings for your home.',
            },
            {
              q: 'How much sun does Midlothian get for solar?',
              a: 'Midlothian averages an estimated 5.3 peak sun hours per day. Actual production depends on roof orientation, shading, and system size -- your installer can provide a site-specific estimate.',
            },
          ],
        },
      },
      {
        city: 'Ennis',
        citySlug: 'ennis',
        utility: 'Oncor (TDU)',
        localData: { ...ERCOT_DEREG_BASE, avgMonthlyBillEstimate: 170, peakSunHoursEstimate: 5.3 },
        cityProfile: {
          localNote: 'Ennis is an Ellis County city with hot summers and flat terrain ideal for solar installations.',
          faq: [
            {
              q: 'Do I need a permit for solar in Ennis?',
              a: 'Yes. City of Ennis Building Department handles solar permits. Typical turnaround is 2-6 weeks, varies by jurisdiction. Your installer manages the application and submits paperwork on your behalf.',
            },
            {
              q: 'Is solar + battery storage worth it in Ennis?',
              a: 'Solar can be a strong option in Ennis depending on your usage and roof. Battery backup adds resilience during grid events like Winter Storm Uri (February 2021). A site-specific assessment from your installer will confirm expected savings for your home.',
            },
            {
              q: 'How much sun does Ennis get for solar?',
              a: 'Ennis averages an estimated 5.3 peak sun hours per day. Actual production depends on roof orientation, shading, and system size -- your installer can provide a site-specific estimate.',
            },
          ],
        },
      },
    ],
  },

  // 26. Guadalupe County
  {
    county: 'Guadalupe County',
    regionSlug: 'guadalupe-county',
    state: 'texas',
    countyData: {
      utilityRate: {
        utility: 'Guadalupe Valley Electric Cooperative (GVEC) / AEP Texas (TDU)',
        avgResidentialRatePerKwh: 0.13,
        note: 'Guadalupe County has mixed utility service. Much of the county, including rural and some suburban areas, is served by Guadalupe Valley Electric Cooperative (GVEC), a member-owned co-op that sets its own rates and solar interconnection policies -- confirm current solar buyback terms with GVEC directly. Other areas are in the deregulated ERCOT market served by AEP Texas (TDU), where residents choose their own Retail Electric Provider (REP). Illustrative residential rate range: $0.12-$0.15/kWh depending on utility and REP/plan choice.',
      },
      permitOffice: {
        name: 'City of Seguin Building Inspection',
        jurisdiction: 'City of Seguin (other cities and unincorporated areas have separate processes)',
        typicalTurnaround: '2-6 weeks, varies by jurisdiction',
        note: 'Seguin, Schertz, Cibolo, and other incorporated areas in Guadalupe County each have their own building departments. Permit timelines vary -- confirm with your local jurisdiction. Your installer manages the application.',
      },
      climateZone: {
        zone: 'Hot-humid South Central Texas',
        description: 'Hot, humid summers with high cooling demand. Guadalupe County sits between San Antonio and Austin. Winter Storm Uri (February 2021) caused multi-day statewide blackouts.',
      },
      countyContext: 'Guadalupe County is centered on Seguin, Schertz, and Cibolo between San Antonio and Austin. Much of the county is served by Guadalupe Valley Electric Cooperative (GVEC), a member-owned co-op that sets its own rates and solar policies -- residents in GVEC territory do not choose a REP. Other areas are in the deregulated ERCOT market served by AEP Texas (TDU). Winter Storm Uri underscored the importance of battery backup for grid resilience.',
    },
    cities: [
      {
        city: 'Seguin',
        citySlug: 'seguin',
        utility: 'Mixed (Guadalupe Valley Electric Cooperative / AEP Texas TDU)',
        localData: { ...ERCOT_DEREG_BASE, avgMonthlyBillEstimate: 165, peakSunHoursEstimate: 5.5 },
        cityProfile: {
          localNote: 'Seguin is the Guadalupe County seat, with hot, humid summers and high cooling demand.',
          faq: [
            {
              q: 'Do I need a permit for solar in Seguin?',
              a: 'Yes. City of Seguin Building Inspection handles solar permits. Typical turnaround is 2-6 weeks, varies by jurisdiction. Your installer manages the application and submits paperwork on your behalf.',
            },
            {
              q: 'Is solar + battery storage worth it in Seguin?',
              a: 'Solar can be a strong option in Seguin depending on your usage and roof. Battery backup adds resilience during grid events like Winter Storm Uri (February 2021). A site-specific assessment from your installer will confirm expected savings for your home.',
            },
            {
              q: 'How much sun does Seguin get for solar?',
              a: 'Seguin averages an estimated 5.5 peak sun hours per day. Actual production depends on roof orientation, shading, and system size -- your installer can provide a site-specific estimate.',
            },
          ],
        },
      },
      {
        city: 'Schertz',
        citySlug: 'schertz',
        utility: 'Mixed (Guadalupe Valley Electric Cooperative / AEP Texas TDU)',
        localData: { ...ERCOT_DEREG_BASE, avgMonthlyBillEstimate: 175, peakSunHoursEstimate: 5.5 },
        cityProfile: {
          localNote: 'Schertz is a growing San Antonio-area suburb with modern homes and hot, humid summers.',
          faq: [
            {
              q: 'Do I need a permit for solar in Schertz?',
              a: 'Yes. City of Schertz Building Department handles solar permits. Typical turnaround is 2-6 weeks, varies by jurisdiction. Your installer manages the application and submits paperwork on your behalf.',
            },
            {
              q: 'Is solar + battery storage worth it in Schertz?',
              a: 'Solar can be a strong option in Schertz depending on your usage and roof. Battery backup adds resilience during grid events like Winter Storm Uri (February 2021). A site-specific assessment from your installer will confirm expected savings for your home.',
            },
            {
              q: 'How much sun does Schertz get for solar?',
              a: 'Schertz averages an estimated 5.5 peak sun hours per day. Actual production depends on roof orientation, shading, and system size -- your installer can provide a site-specific estimate.',
            },
          ],
        },
      },
      {
        city: 'Cibolo',
        citySlug: 'cibolo',
        utility: 'Mixed (Guadalupe Valley Electric Cooperative / AEP Texas TDU)',
        localData: { ...ERCOT_DEREG_BASE, avgMonthlyBillEstimate: 175, peakSunHoursEstimate: 5.5 },
        cityProfile: {
          localNote: 'Cibolo is a fast-growing San Antonio-area suburb with new residential development and hot summer cooling demand.',
          faq: [
            {
              q: 'Do I need a permit for solar in Cibolo?',
              a: 'Yes. City of Cibolo Building Department handles solar permits. Typical turnaround is 2-6 weeks, varies by jurisdiction. Your installer manages the application and submits paperwork on your behalf.',
            },
            {
              q: 'Is solar + battery storage worth it in Cibolo?',
              a: 'Solar can be a strong option in Cibolo depending on your usage and roof. Battery backup adds resilience during grid events like Winter Storm Uri (February 2021). A site-specific assessment from your installer will confirm expected savings for your home.',
            },
            {
              q: 'How much sun does Cibolo get for solar?',
              a: 'Cibolo averages an estimated 5.5 peak sun hours per day. Actual production depends on roof orientation, shading, and system size -- your installer can provide a site-specific estimate.',
            },
          ],
        },
      },
    ],
  },

  // 27. Comal County
  {
    county: 'Comal County',
    regionSlug: 'comal-county',
    state: 'texas',
    countyData: {
      utilityRate: {
        utility: 'New Braunfels Utilities (NBU, municipal) / deregulated ERCOT (TDU varies by area)',
        avgResidentialRatePerKwh: 0.13,
        note: 'Comal County has mixed utility service. Within New Braunfels city limits, New Braunfels Utilities (NBU) is a municipally-owned utility that sets its own rates and solar interconnection policies -- confirm current solar buyback terms with NBU directly. Other areas of the county are in the deregulated ERCOT market, where the TDU varies by location and residents choose their own Retail Electric Provider (REP). Illustrative residential rate range: $0.12-$0.15/kWh depending on utility and REP/plan choice.',
      },
      permitOffice: {
        name: 'City of New Braunfels Building Inspections',
        jurisdiction: 'City of New Braunfels (other cities and unincorporated areas have separate processes)',
        typicalTurnaround: '2-6 weeks, varies by jurisdiction',
        note: 'New Braunfels, Bulverde, and other incorporated areas in Comal County each have their own building departments. Permit timelines vary -- confirm with your local jurisdiction. Your installer manages the application.',
      },
      climateZone: {
        zone: 'Hot-humid South Central Texas / Hill Country',
        description: 'Hot summers with high cooling demand. Comal County sits at the edge of the Texas Hill Country between San Antonio and Austin. Winter Storm Uri (February 2021) caused multi-day statewide blackouts.',
      },
      countyContext: 'Comal County is centered on New Braunfels, a fast-growing Hill Country city between San Antonio and Austin. Within New Braunfels city limits, New Braunfels Utilities (NBU) is a municipally-owned utility that sets its own rates and solar policies -- residents do not choose a REP. Other areas of the county are served by various deregulated ERCOT TDUs, where residents do choose their own Retail Electric Provider (REP). Winter Storm Uri underscored the importance of battery backup for grid resilience.',
    },
    cities: [
      {
        city: 'New Braunfels',
        citySlug: 'new-braunfels',
        utility: 'New Braunfels Utilities (NBU, municipal)',
        localData: { ...ERCOT_DEREG_BASE, avgMonthlyBillEstimate: 175, peakSunHoursEstimate: 5.5 },
        cityProfile: {
          localNote: 'New Braunfels is a fast-growing Hill Country city between San Antonio and Austin, served by the municipal utility New Braunfels Utilities (NBU).',
          faq: [
            {
              q: 'Do I need a permit for solar in New Braunfels?',
              a: 'Yes. City of New Braunfels Building Inspections handles solar permits. Typical turnaround is 2-6 weeks, varies by jurisdiction. Your installer manages the application and submits paperwork on your behalf.',
            },
            {
              q: 'Is solar + battery storage worth it in New Braunfels?',
              a: 'Solar can be a strong option in New Braunfels depending on your usage and roof. Battery backup adds resilience during grid events like Winter Storm Uri (February 2021). A site-specific assessment from your installer will confirm expected savings for your home.',
            },
            {
              q: 'How much sun does New Braunfels get for solar?',
              a: 'New Braunfels averages an estimated 5.5 peak sun hours per day. Actual production depends on roof orientation, shading, and system size -- your installer can provide a site-specific estimate.',
            },
          ],
        },
      },
      {
        city: 'Bulverde',
        citySlug: 'bulverde',
        utility: 'Mixed (New Braunfels Utilities / deregulated ERCOT, TDU varies by area)',
        localData: { ...ERCOT_DEREG_BASE, avgMonthlyBillEstimate: 180, peakSunHoursEstimate: 5.5 },
        cityProfile: {
          localNote: 'Bulverde is a growing Comal County community north of San Antonio, with hot summers and larger rural-residential lots well suited to solar.',
          faq: [
            {
              q: 'Do I need a permit for solar in Bulverde?',
              a: 'Yes. City of Bulverde Building Department handles solar permits. Typical turnaround is 2-6 weeks, varies by jurisdiction. Your installer manages the application and submits paperwork on your behalf.',
            },
            {
              q: 'Is solar + battery storage worth it in Bulverde?',
              a: 'Solar can be a strong option in Bulverde depending on your usage and roof. Battery backup adds resilience during grid events like Winter Storm Uri (February 2021). A site-specific assessment from your installer will confirm expected savings for your home.',
            },
            {
              q: 'How much sun does Bulverde get for solar?',
              a: 'Bulverde averages an estimated 5.5 peak sun hours per day. Actual production depends on roof orientation, shading, and system size -- your installer can provide a site-specific estimate.',
            },
          ],
        },
      },
    ],
  },

  // 28. Johnson County
  {
    county: 'Johnson County',
    regionSlug: 'johnson-county',
    state: 'texas',
    countyData: {
      utilityRate: {
        utility: 'Oncor (TDU)',
        avgResidentialRatePerKwh: 0.14,
        note: 'Johnson County is in the deregulated ERCOT market. Oncor delivers power as the wires-only Transmission and Distribution Utility (TDU), but you choose your own Retail Electric Provider (REP) which sets your solar buyback rate. Solar export rates vary widely by REP and plan -- shop for a REP with a competitive solar buyback plan to maximize your savings. Illustrative residential rate range: $0.12-$0.16/kWh depending on REP and plan choice.',
      },
      permitOffice: {
        name: 'City of Cleburne Building Inspection',
        jurisdiction: 'City of Cleburne (other cities and unincorporated areas have separate processes)',
        typicalTurnaround: '2-6 weeks, varies by jurisdiction',
        note: 'Cleburne, Burleson, and other incorporated areas in Johnson County each have their own building departments. Permit timelines vary -- confirm with your local jurisdiction. Your installer manages the application.',
      },
      climateZone: {
        zone: 'Hot-humid North Texas / Hail Alley',
        description: 'Hot, humid summers with high cooling demand. Johnson County is in "Hail Alley" -- severe spring/summer hailstorms are common, requiring hail-rated solar equipment. Winter Storm Uri (February 2021) caused multi-day blackouts.',
      },
      countyContext: 'Johnson County is the southern Fort Worth metro area, centered on Cleburne and Burleson. The hot, humid climate drives high summer cooling loads. Located in "Hail Alley," hail-rated solar equipment is essential. Winter Storm Uri underscored the importance of battery backup for grid resilience.',
    },
    cities: [
      {
        city: 'Cleburne',
        citySlug: 'cleburne',
        utility: 'Oncor (TDU)',
        localData: { ...ERCOT_DEREG_BASE, avgMonthlyBillEstimate: 175, peakSunHoursEstimate: 5.3 },
        cityProfile: {
          localNote: 'Cleburne is the Johnson County seat, with hot summers and a location in Hail Alley requiring hail-rated equipment.',
          faq: [
            {
              q: 'Do I need a permit for solar in Cleburne?',
              a: 'Yes. City of Cleburne Building Inspection handles solar permits. Typical turnaround is 2-6 weeks, varies by jurisdiction. Your installer manages the application and submits paperwork on your behalf.',
            },
            {
              q: 'Is solar + battery storage worth it in Cleburne?',
              a: 'Solar can be a strong option in Cleburne depending on your usage and roof. Battery backup adds resilience during grid events like Winter Storm Uri (February 2021). A site-specific assessment from your installer will confirm expected savings for your home.',
            },
            {
              q: 'How much sun does Cleburne get for solar?',
              a: 'Cleburne averages an estimated 5.3 peak sun hours per day. Actual production depends on roof orientation, shading, and system size -- your installer can provide a site-specific estimate.',
            },
          ],
        },
      },
      {
        city: 'Burleson',
        citySlug: 'burleson',
        utility: 'Oncor (TDU)',
        localData: { ...ERCOT_DEREG_BASE, avgMonthlyBillEstimate: 185, peakSunHoursEstimate: 5.3 },
        cityProfile: {
          localNote: 'Burleson is a fast-growing Fort Worth suburb straddling Johnson and Tarrant Counties, with modern homes and hot summer cooling demand.',
          faq: [
            {
              q: 'Do I need a permit for solar in Burleson?',
              a: 'Yes. City of Burleson Building Department handles solar permits. Typical turnaround is 2-6 weeks, varies by jurisdiction. Your installer manages the application and submits paperwork on your behalf.',
            },
            {
              q: 'Is solar + battery storage worth it in Burleson?',
              a: 'Solar can be a strong option in Burleson depending on your usage and roof. Battery backup adds resilience during grid events like Winter Storm Uri (February 2021). A site-specific assessment from your installer will confirm expected savings for your home.',
            },
            {
              q: 'How much sun does Burleson get for solar?',
              a: 'Burleson averages an estimated 5.3 peak sun hours per day. Actual production depends on roof orientation, shading, and system size -- your installer can provide a site-specific estimate.',
            },
          ],
        },
      },
    ],
  },

  // 29. Kaufman County
  {
    county: 'Kaufman County',
    regionSlug: 'kaufman-county',
    state: 'texas',
    countyData: {
      utilityRate: {
        utility: 'Oncor (TDU)',
        avgResidentialRatePerKwh: 0.14,
        note: 'Kaufman County is in the deregulated ERCOT market. Oncor delivers power as the wires-only Transmission and Distribution Utility (TDU), but you choose your own Retail Electric Provider (REP) which sets your solar buyback rate. Solar export rates vary widely by REP and plan -- shop for a REP with a competitive solar buyback plan to maximize your savings. Illustrative residential rate range: $0.12-$0.16/kWh depending on REP and plan choice.',
      },
      permitOffice: {
        name: 'City of Terrell Building Inspection',
        jurisdiction: 'City of Terrell (other cities and unincorporated areas have separate processes)',
        typicalTurnaround: '2-6 weeks, varies by jurisdiction',
        note: 'Terrell, Forney, Kaufman, and other incorporated areas in Kaufman County each have their own building departments. Permit timelines vary -- confirm with your local jurisdiction. Your installer manages the application.',
      },
      climateZone: {
        zone: 'Hot-humid North Texas / Hail Alley',
        description: 'Hot, humid summers with high cooling demand. Kaufman County is in "Hail Alley" -- severe spring/summer hailstorms are common, requiring hail-rated solar equipment. Winter Storm Uri (February 2021) caused multi-day blackouts.',
      },
      countyContext: 'Kaufman County is the eastern Dallas metro area, centered on Terrell, Forney, and Kaufman. The hot, humid climate drives high summer cooling loads. Located in "Hail Alley," hail-rated solar equipment is essential. Winter Storm Uri underscored the importance of battery backup for grid resilience.',
    },
    cities: [
      {
        city: 'Terrell',
        citySlug: 'terrell',
        utility: 'Oncor (TDU)',
        localData: { ...ERCOT_DEREG_BASE, avgMonthlyBillEstimate: 175, peakSunHoursEstimate: 5.3 },
        cityProfile: {
          localNote: 'Terrell is the Kaufman County seat, with hot summers and a location in Hail Alley requiring hail-rated equipment.',
          faq: [
            {
              q: 'Do I need a permit for solar in Terrell?',
              a: 'Yes. City of Terrell Building Inspection handles solar permits. Typical turnaround is 2-6 weeks, varies by jurisdiction. Your installer manages the application and submits paperwork on your behalf.',
            },
            {
              q: 'Is solar + battery storage worth it in Terrell?',
              a: 'Solar can be a strong option in Terrell depending on your usage and roof. Battery backup adds resilience during grid events like Winter Storm Uri (February 2021). A site-specific assessment from your installer will confirm expected savings for your home.',
            },
            {
              q: 'How much sun does Terrell get for solar?',
              a: 'Terrell averages an estimated 5.3 peak sun hours per day. Actual production depends on roof orientation, shading, and system size -- your installer can provide a site-specific estimate.',
            },
          ],
        },
      },
      {
        city: 'Forney',
        citySlug: 'forney',
        utility: 'Oncor (TDU)',
        localData: { ...ERCOT_DEREG_BASE, avgMonthlyBillEstimate: 185, peakSunHoursEstimate: 5.3 },
        cityProfile: {
          localNote: 'Forney is a fast-growing Dallas suburb with modern homes and large rooftops well suited to solar.',
          faq: [
            {
              q: 'Do I need a permit for solar in Forney?',
              a: 'Yes. City of Forney Building Department handles solar permits. Typical turnaround is 2-6 weeks, varies by jurisdiction. Your installer manages the application and submits paperwork on your behalf.',
            },
            {
              q: 'Is solar + battery storage worth it in Forney?',
              a: 'Solar can be a strong option in Forney depending on your usage and roof. Battery backup adds resilience during grid events like Winter Storm Uri (February 2021). A site-specific assessment from your installer will confirm expected savings for your home.',
            },
            {
              q: 'How much sun does Forney get for solar?',
              a: 'Forney averages an estimated 5.3 peak sun hours per day. Actual production depends on roof orientation, shading, and system size -- your installer can provide a site-specific estimate.',
            },
          ],
        },
      },
      {
        city: 'Kaufman',
        citySlug: 'kaufman',
        utility: 'Oncor (TDU)',
        localData: { ...ERCOT_DEREG_BASE, avgMonthlyBillEstimate: 170, peakSunHoursEstimate: 5.3 },
        cityProfile: {
          localNote: 'Kaufman is a Kaufman County city with hot summers and flat terrain ideal for solar installations.',
          faq: [
            {
              q: 'Do I need a permit for solar in Kaufman?',
              a: 'Yes. City of Kaufman Building Department handles solar permits. Typical turnaround is 2-6 weeks, varies by jurisdiction. Your installer manages the application and submits paperwork on your behalf.',
            },
            {
              q: 'Is solar + battery storage worth it in Kaufman?',
              a: 'Solar can be a strong option in Kaufman depending on your usage and roof. Battery backup adds resilience during grid events like Winter Storm Uri (February 2021). A site-specific assessment from your installer will confirm expected savings for your home.',
            },
            {
              q: 'How much sun does Kaufman get for solar?',
              a: 'Kaufman averages an estimated 5.3 peak sun hours per day. Actual production depends on roof orientation, shading, and system size -- your installer can provide a site-specific estimate.',
            },
          ],
        },
      },
    ],
  },

  // 30. Parker County
  {
    county: 'Parker County',
    regionSlug: 'parker-county',
    state: 'texas',
    countyData: {
      utilityRate: {
        utility: 'Oncor (TDU)',
        avgResidentialRatePerKwh: 0.14,
        note: 'Parker County is in the deregulated ERCOT market. Oncor delivers power as the wires-only Transmission and Distribution Utility (TDU), but you choose your own Retail Electric Provider (REP) which sets your solar buyback rate. Solar export rates vary widely by REP and plan -- shop for a REP with a competitive solar buyback plan to maximize your savings. Illustrative residential rate range: $0.12-$0.16/kWh depending on REP and plan choice.',
      },
      permitOffice: {
        name: 'City of Weatherford Building Inspection',
        jurisdiction: 'City of Weatherford (other cities and unincorporated areas have separate processes)',
        typicalTurnaround: '2-6 weeks, varies by jurisdiction',
        note: 'Weatherford, Aledo, and other incorporated areas in Parker County each have their own building departments. Permit timelines vary -- confirm with your local jurisdiction. Your installer manages the application.',
      },
      climateZone: {
        zone: 'Hot-humid North Texas / Hail Alley',
        description: 'Hot, humid summers with high cooling demand. Parker County is in "Hail Alley" -- severe spring/summer hailstorms are common, requiring hail-rated solar equipment. Winter Storm Uri (February 2021) caused multi-day blackouts.',
      },
      countyContext: 'Parker County is the western Fort Worth metro area, centered on Weatherford and Aledo. The hot, humid climate drives high summer cooling loads. Located in "Hail Alley," hail-rated solar equipment is essential. Winter Storm Uri underscored the importance of battery backup for grid resilience.',
    },
    cities: [
      {
        city: 'Weatherford',
        citySlug: 'weatherford',
        utility: 'Oncor (TDU)',
        localData: { ...ERCOT_DEREG_BASE, avgMonthlyBillEstimate: 175, peakSunHoursEstimate: 5.3 },
        cityProfile: {
          localNote: 'Weatherford is the Parker County seat, with hot summers and a location in Hail Alley requiring hail-rated equipment.',
          faq: [
            {
              q: 'Do I need a permit for solar in Weatherford?',
              a: 'Yes. City of Weatherford Building Inspection handles solar permits. Typical turnaround is 2-6 weeks, varies by jurisdiction. Your installer manages the application and submits paperwork on your behalf.',
            },
            {
              q: 'Is solar + battery storage worth it in Weatherford?',
              a: 'Solar can be a strong option in Weatherford depending on your usage and roof. Battery backup adds resilience during grid events like Winter Storm Uri (February 2021). A site-specific assessment from your installer will confirm expected savings for your home.',
            },
            {
              q: 'How much sun does Weatherford get for solar?',
              a: 'Weatherford averages an estimated 5.3 peak sun hours per day. Actual production depends on roof orientation, shading, and system size -- your installer can provide a site-specific estimate.',
            },
          ],
        },
      },
      {
        city: 'Aledo',
        citySlug: 'aledo',
        utility: 'Oncor (TDU)',
        localData: { ...ERCOT_DEREG_BASE, avgMonthlyBillEstimate: 190, peakSunHoursEstimate: 5.3 },
        cityProfile: {
          localNote: 'Aledo is an affluent Fort Worth suburb with large modern homes and rooftops well suited to solar installations.',
          faq: [
            {
              q: 'Do I need a permit for solar in Aledo?',
              a: 'Yes. City of Aledo Building Department handles solar permits. Typical turnaround is 2-6 weeks, varies by jurisdiction. Your installer manages the application and submits paperwork on your behalf.',
            },
            {
              q: 'Is solar + battery storage worth it in Aledo?',
              a: 'Solar can be a strong option in Aledo depending on your usage and roof. Battery backup adds resilience during grid events like Winter Storm Uri (February 2021). A site-specific assessment from your installer will confirm expected savings for your home.',
            },
            {
              q: 'How much sun does Aledo get for solar?',
              a: 'Aledo averages an estimated 5.3 peak sun hours per day. Actual production depends on roof orientation, shading, and system size -- your installer can provide a site-specific estimate.',
            },
          ],
        },
      },
    ],
  },

  // 31. Midland County
  {
    county: 'Midland County',
    regionSlug: 'midland-county',
    state: 'texas',
    countyData: {
      utilityRate: {
        utility: 'Oncor (TDU)',
        avgResidentialRatePerKwh: 0.14,
        note: 'Midland County is in the deregulated ERCOT market. Oncor delivers power as the wires-only Transmission and Distribution Utility (TDU), but you choose your own Retail Electric Provider (REP) which sets your solar buyback rate. Solar export rates vary widely by REP and plan -- shop for a REP with a competitive solar buyback plan to maximize your savings. Illustrative residential rate range: $0.12-$0.16/kWh depending on REP and plan choice.',
      },
      permitOffice: {
        name: 'City of Midland Building Inspection',
        jurisdiction: 'City of Midland (other cities and unincorporated areas have separate processes)',
        typicalTurnaround: '2-6 weeks, varies by jurisdiction',
        note: 'Midland, nearby cities, and other incorporated areas in Midland County each have their own building departments. Permit timelines vary -- confirm with your local jurisdiction. Your installer manages the application.',
      },
      climateZone: {
        zone: 'Semi-arid Permian Basin',
        description: 'Hot, dry summers with low humidity and high peak sun hours. Midland County sits in the Permian Basin, one of the sunniest regions in Texas, with minimal cloud cover year-round. Strong wind and dust conditions require durable mounting hardware.',
      },
      countyContext: 'Midland County is centered on Midland, a hub of the Permian Basin oil and gas industry. The semi-arid climate and high elevation provide exceptional solar potential -- among the highest peak sun hours in Texas. High cooling demand and strong, consistent sun make solar especially productive here.',
    },
    cities: [
      {
        city: 'Midland',
        citySlug: 'midland',
        utility: 'Oncor (TDU)',
        localData: { ...ERCOT_DEREG_BASE, avgMonthlyBillEstimate: 190, peakSunHoursEstimate: 6 },
        cityProfile: {
          localNote: 'Midland is the hub of the Permian Basin, with a semi-arid climate and exceptional solar potential -- among the sunniest regions in Texas.',
          faq: [
            {
              q: 'Do I need a permit for solar in Midland?',
              a: 'Yes. City of Midland Building Inspection handles solar permits. Typical turnaround is 2-6 weeks, varies by jurisdiction. Your installer manages the application and submits paperwork on your behalf.',
            },
            {
              q: 'Is solar + battery storage worth it in Midland?',
              a: 'Solar can be a strong option in Midland depending on your usage and roof. Battery backup adds resilience during grid events like Winter Storm Uri (February 2021). A site-specific assessment from your installer will confirm expected savings for your home.',
            },
            {
              q: 'How much sun does Midland get for solar?',
              a: 'Midland averages an estimated 6.0 peak sun hours per day. Actual production depends on roof orientation, shading, and system size -- your installer can provide a site-specific estimate.',
            },
          ],
        },
      },
    ],
  },

  // 32. Ector County
  {
    county: 'Ector County',
    regionSlug: 'ector-county',
    state: 'texas',
    countyData: {
      utilityRate: {
        utility: 'Oncor (TDU)',
        avgResidentialRatePerKwh: 0.14,
        note: 'Ector County is in the deregulated ERCOT market. Oncor delivers power as the wires-only Transmission and Distribution Utility (TDU), but you choose your own Retail Electric Provider (REP) which sets your solar buyback rate. Solar export rates vary widely by REP and plan -- shop for a REP with a competitive solar buyback plan to maximize your savings. Illustrative residential rate range: $0.12-$0.16/kWh depending on REP and plan choice.',
      },
      permitOffice: {
        name: 'City of Odessa Building Inspection',
        jurisdiction: 'City of Odessa (other cities and unincorporated areas have separate processes)',
        typicalTurnaround: '2-6 weeks, varies by jurisdiction',
        note: 'Odessa, Goldsmith, and other incorporated areas in Ector County each have their own building departments. Permit timelines vary -- confirm with your local jurisdiction. Your installer manages the application.',
      },
      climateZone: {
        zone: 'Semi-arid Permian Basin',
        description: 'Hot, dry summers with low humidity and high peak sun hours. Ector County sits in the Permian Basin, one of the sunniest regions in Texas, with minimal cloud cover year-round. Strong wind and dust conditions require durable mounting hardware.',
      },
      countyContext: 'Ector County is centered on Odessa, a hub of the Permian Basin oil and gas industry. The semi-arid climate and high elevation provide exceptional solar potential -- among the highest peak sun hours in Texas. High cooling demand and strong, consistent sun make solar especially productive here.',
    },
    cities: [
      {
        city: 'Odessa',
        citySlug: 'odessa',
        utility: 'Oncor (TDU)',
        localData: { ...ERCOT_DEREG_BASE, avgMonthlyBillEstimate: 185, peakSunHoursEstimate: 6 },
        cityProfile: {
          localNote: 'Odessa is a hub of the Permian Basin, with a semi-arid climate and exceptional solar potential -- among the sunniest regions in Texas.',
          faq: [
            {
              q: 'Do I need a permit for solar in Odessa?',
              a: 'Yes. City of Odessa Building Inspection handles solar permits. Typical turnaround is 2-6 weeks, varies by jurisdiction. Your installer manages the application and submits paperwork on your behalf.',
            },
            {
              q: 'Is solar + battery storage worth it in Odessa?',
              a: 'Solar can be a strong option in Odessa depending on your usage and roof. Battery backup adds resilience during grid events like Winter Storm Uri (February 2021). A site-specific assessment from your installer will confirm expected savings for your home.',
            },
            {
              q: 'How much sun does Odessa get for solar?',
              a: 'Odessa averages an estimated 6.0 peak sun hours per day. Actual production depends on roof orientation, shading, and system size -- your installer can provide a site-specific estimate.',
            },
          ],
        },
      },
      {
        city: 'Goldsmith',
        citySlug: 'goldsmith',
        utility: 'Oncor (TDU)',
        localData: { ...ERCOT_DEREG_BASE, avgMonthlyBillEstimate: 150, peakSunHoursEstimate: 6 },
        cityProfile: {
          localNote: 'Goldsmith is a small Ector County community with strong, consistent sun exposure typical of the Permian Basin.',
          faq: [
            {
              q: 'Do I need a permit for solar in Goldsmith?',
              a: 'Yes. City of Goldsmith Building Department handles solar permits. Typical turnaround is 2-6 weeks, varies by jurisdiction. Your installer manages the application and submits paperwork on your behalf.',
            },
            {
              q: 'Is solar + battery storage worth it in Goldsmith?',
              a: 'Solar can be a strong option in Goldsmith depending on your usage and roof. Battery backup adds resilience during grid events like Winter Storm Uri (February 2021). A site-specific assessment from your installer will confirm expected savings for your home.',
            },
            {
              q: 'How much sun does Goldsmith get for solar?',
              a: 'Goldsmith averages an estimated 6.0 peak sun hours per day. Actual production depends on roof orientation, shading, and system size -- your installer can provide a site-specific estimate.',
            },
          ],
        },
      },
    ],
  },

  // 33. Randall County
  {
    county: 'Randall County',
    regionSlug: 'randall-county',
    state: 'texas',
    countyData: {
      utilityRate: {
        utility: 'Xcel Energy (Southwestern Public Service, SPS)',
        avgResidentialRatePerKwh: 0.12,
        note: 'Randall County is served by Xcel Energy (Southwestern Public Service, SPS), a regulated utility -- there is no Retail Electric Provider (REP) choice here, unlike most of Texas. Xcel Energy sets its own rates and solar interconnection policies -- confirm current solar buyback terms directly with the utility. Illustrative residential rate: ~$0.12/kWh.',
      },
      permitOffice: {
        name: 'City of Canyon Building Inspection',
        jurisdiction: 'City of Canyon (other cities and unincorporated areas have separate processes)',
        typicalTurnaround: '2-6 weeks, varies by jurisdiction',
        note: 'Canyon, nearby cities, and other incorporated areas in Randall County each have their own building departments. Permit timelines vary -- confirm with your local jurisdiction. Your installer manages the application.',
      },
      climateZone: {
        zone: 'Semi-arid Texas Panhandle / High Plains',
        description: 'Hot, dry summers with cold winters and high wind resources. Randall County sits on the Texas Panhandle High Plains, with excellent solar potential and minimal cloud cover. Strong wind and occasional hail require durable, wind-rated equipment.',
      },
      countyContext: 'Randall County is part of the greater Amarillo area on the Texas Panhandle High Plains. The semi-arid climate and high elevation provide excellent solar potential, among the best in Texas. Randall County is served by Xcel Energy (Southwestern Public Service, SPS), a regulated utility on the SPP grid -- there is no Retail Electric Provider choice here, unlike most of Texas.',
    },
    cities: [
      {
        city: 'Canyon',
        citySlug: 'canyon',
        utility: 'Xcel Energy (Southwestern Public Service, SPS)',
        localData: { ...XCEL_SPS, avgMonthlyBillEstimate: 155, peakSunHoursEstimate: 5.9 },
        cityProfile: {
          localNote: 'Canyon is the Randall County seat, on the Texas Panhandle High Plains, with excellent solar potential and minimal cloud cover.',
          faq: [
            {
              q: 'Do I need a permit for solar in Canyon?',
              a: 'Yes. City of Canyon Building Inspection handles solar permits. Typical turnaround is 2-6 weeks, varies by jurisdiction. Your installer manages the application and submits paperwork on your behalf.',
            },
            {
              q: 'Is solar + battery storage worth it in Canyon?',
              a: 'Solar can be a strong option in Canyon depending on your usage and roof. Battery backup adds resilience during grid events like Winter Storm Uri (February 2021). A site-specific assessment from your installer will confirm expected savings for your home.',
            },
            {
              q: 'How much sun does Canyon get for solar?',
              a: 'Canyon averages an estimated 5.9 peak sun hours per day. Actual production depends on roof orientation, shading, and system size -- your installer can provide a site-specific estimate.',
            },
          ],
        },
      },
    ],
  },

  // 34. Potter County
  {
    county: 'Potter County',
    regionSlug: 'potter-county',
    state: 'texas',
    countyData: {
      utilityRate: {
        utility: 'Xcel Energy (Southwestern Public Service, SPS)',
        avgResidentialRatePerKwh: 0.12,
        note: 'Potter County is served by Xcel Energy (Southwestern Public Service, SPS), a regulated utility -- there is no Retail Electric Provider (REP) choice here, unlike most of Texas. Xcel Energy sets its own rates and solar interconnection policies -- confirm current solar buyback terms directly with the utility. Illustrative residential rate: ~$0.12/kWh.',
      },
      permitOffice: {
        name: 'City of Amarillo Building Safety',
        jurisdiction: 'City of Amarillo (other cities and unincorporated areas have separate processes)',
        typicalTurnaround: '2-6 weeks, varies by jurisdiction',
        note: 'Amarillo, nearby cities, and other incorporated areas in Potter County each have their own building departments. Permit timelines vary -- confirm with your local jurisdiction. Your installer manages the application.',
      },
      climateZone: {
        zone: 'Semi-arid Texas Panhandle / High Plains',
        description: 'Hot, dry summers with cold winters and high wind resources. Potter County sits on the Texas Panhandle High Plains, with excellent solar potential and minimal cloud cover. Strong wind and occasional hail require durable, wind-rated equipment.',
      },
      countyContext: 'Potter County is centered on Amarillo, the largest city in the Texas Panhandle. The semi-arid climate and high elevation provide excellent solar potential, among the best in Texas. Potter County is served by Xcel Energy (Southwestern Public Service, SPS), a regulated utility on the SPP grid -- there is no Retail Electric Provider choice here, unlike most of Texas.',
    },
    cities: [
      {
        city: 'Amarillo',
        citySlug: 'amarillo',
        utility: 'Xcel Energy (Southwestern Public Service, SPS)',
        localData: { ...XCEL_SPS, avgMonthlyBillEstimate: 175, peakSunHoursEstimate: 5.9 },
        cityProfile: {
          localNote: 'Amarillo is the largest city in the Texas Panhandle, with a semi-arid climate, excellent solar potential, and strong wind resources.',
          faq: [
            {
              q: 'Do I need a permit for solar in Amarillo?',
              a: 'Yes. City of Amarillo Building Safety handles solar permits. Typical turnaround is 2-6 weeks, varies by jurisdiction. Your installer manages the application and submits paperwork on your behalf.',
            },
            {
              q: 'Is solar + battery storage worth it in Amarillo?',
              a: 'Solar can be a strong option in Amarillo depending on your usage and roof. Battery backup adds resilience during grid events like Winter Storm Uri (February 2021). A site-specific assessment from your installer will confirm expected savings for your home.',
            },
            {
              q: 'How much sun does Amarillo get for solar?',
              a: 'Amarillo averages an estimated 5.9 peak sun hours per day. Actual production depends on roof orientation, shading, and system size -- your installer can provide a site-specific estimate.',
            },
          ],
        },
      },
    ],
  },

  // 35. Taylor County
  {
    county: 'Taylor County',
    regionSlug: 'taylor-county',
    state: 'texas',
    countyData: {
      utilityRate: {
        utility: 'AEP Texas (TDU) / Oncor (TDU)',
        avgResidentialRatePerKwh: 0.14,
        note: 'Taylor County is in the deregulated ERCOT market. Depending on location, AEP Texas or Oncor delivers power as the wires-only TDU, but you choose your own Retail Electric Provider (REP) which sets your solar buyback rate. Illustrative residential rate range: $0.12-$0.16/kWh depending on TDU area and REP/plan choice.',
      },
      permitOffice: {
        name: 'City of Abilene Building Inspection',
        jurisdiction: 'City of Abilene (other cities and unincorporated areas have separate processes)',
        typicalTurnaround: '2-6 weeks, varies by jurisdiction',
        note: 'Abilene, Merkel, and other incorporated areas in Taylor County each have their own building departments. Permit timelines vary -- confirm with your local jurisdiction. Your installer manages the application.',
      },
      climateZone: {
        zone: 'Semi-arid West-Central Texas',
        description: 'Hot, dry summers with strong wind resources and mild winters. Taylor County sits in West-Central Texas, with high peak sun hours and minimal cloud cover. Occasional severe hail and wind require durable equipment.',
      },
      countyContext: 'Taylor County is centered on Abilene, the hub of West-Central Texas. The semi-arid climate provides strong, consistent solar production. Taylor County is in the deregulated ERCOT market, with AEP Texas and Oncor both serving as TDU depending on location -- residents choose their own Retail Electric Provider (REP) which sets the solar buyback rate.',
    },
    cities: [
      {
        city: 'Abilene',
        citySlug: 'abilene',
        utility: 'Mixed (AEP Texas TDU / Oncor TDU)',
        localData: { ...ERCOT_DEREG_BASE, avgMonthlyBillEstimate: 175, peakSunHoursEstimate: 5.6 },
        cityProfile: {
          localNote: 'Abilene is the hub of West-Central Texas, with a semi-arid climate, strong sun exposure, and consistent wind resources.',
          faq: [
            {
              q: 'Do I need a permit for solar in Abilene?',
              a: 'Yes. City of Abilene Building Inspection handles solar permits. Typical turnaround is 2-6 weeks, varies by jurisdiction. Your installer manages the application and submits paperwork on your behalf.',
            },
            {
              q: 'Is solar + battery storage worth it in Abilene?',
              a: 'Solar can be a strong option in Abilene depending on your usage and roof. Battery backup adds resilience during grid events like Winter Storm Uri (February 2021). A site-specific assessment from your installer will confirm expected savings for your home.',
            },
            {
              q: 'How much sun does Abilene get for solar?',
              a: 'Abilene averages an estimated 5.6 peak sun hours per day. Actual production depends on roof orientation, shading, and system size -- your installer can provide a site-specific estimate.',
            },
          ],
        },
      },
      {
        city: 'Merkel',
        citySlug: 'merkel',
        utility: 'Mixed (AEP Texas TDU / Oncor TDU)',
        localData: { ...ERCOT_DEREG_BASE, avgMonthlyBillEstimate: 150, peakSunHoursEstimate: 5.6 },
        cityProfile: {
          localNote: 'Merkel is a small Taylor County city along I-20 west of Abilene, with strong, consistent sun exposure.',
          faq: [
            {
              q: 'Do I need a permit for solar in Merkel?',
              a: 'Yes. City of Merkel Building Department handles solar permits. Typical turnaround is 2-6 weeks, varies by jurisdiction. Your installer manages the application and submits paperwork on your behalf.',
            },
            {
              q: 'Is solar + battery storage worth it in Merkel?',
              a: 'Solar can be a strong option in Merkel depending on your usage and roof. Battery backup adds resilience during grid events like Winter Storm Uri (February 2021). A site-specific assessment from your installer will confirm expected savings for your home.',
            },
            {
              q: 'How much sun does Merkel get for solar?',
              a: 'Merkel averages an estimated 5.6 peak sun hours per day. Actual production depends on roof orientation, shading, and system size -- your installer can provide a site-specific estimate.',
            },
          ],
        },
      },
    ],
  },

  // 36. Wichita County
  {
    county: 'Wichita County',
    regionSlug: 'wichita-county',
    state: 'texas',
    countyData: {
      utilityRate: {
        utility: 'Oncor (TDU)',
        avgResidentialRatePerKwh: 0.14,
        note: 'Wichita County is in the deregulated ERCOT market. Oncor delivers power as the wires-only Transmission and Distribution Utility (TDU), but you choose your own Retail Electric Provider (REP) which sets your solar buyback rate. Solar export rates vary widely by REP and plan -- shop for a REP with a competitive solar buyback plan to maximize your savings. Illustrative residential rate range: $0.12-$0.16/kWh depending on REP and plan choice.',
      },
      permitOffice: {
        name: 'City of Wichita Falls Development Services',
        jurisdiction: 'City of Wichita Falls (other cities and unincorporated areas have separate processes)',
        typicalTurnaround: '2-6 weeks, varies by jurisdiction',
        note: 'Wichita Falls, Iowa Park, Burkburnett, and other incorporated areas in Wichita County each have their own building departments. Permit timelines vary -- confirm with your local jurisdiction. Your installer manages the application.',
      },
      climateZone: {
        zone: 'Hot-humid North Texas',
        description: 'Hot summers with high cooling demand and cold winters. Wichita County sits in North Texas near the Oklahoma border, with strong wind resources and occasional severe hail and tornado risk. Winter Storm Uri (February 2021) caused multi-day statewide blackouts.',
      },
      countyContext: 'Wichita County is centered on Wichita Falls near the Oklahoma border. The hot climate drives high summer cooling loads, and solar helps offset air conditioning costs. Winter Storm Uri underscored the importance of battery backup for grid resilience during extreme cold events, which are more common this far north.',
    },
    cities: [
      {
        city: 'Wichita Falls',
        citySlug: 'wichita-falls',
        utility: 'Oncor (TDU)',
        localData: { ...ERCOT_DEREG_BASE, avgMonthlyBillEstimate: 170, peakSunHoursEstimate: 5.4 },
        cityProfile: {
          localNote: 'Wichita Falls is the largest city in North Texas near the Oklahoma border, with hot summers and cold winters.',
          faq: [
            {
              q: 'Do I need a permit for solar in Wichita Falls?',
              a: 'Yes. City of Wichita Falls Development Services handles solar permits. Typical turnaround is 2-6 weeks, varies by jurisdiction. Your installer manages the application and submits paperwork on your behalf.',
            },
            {
              q: 'Is solar + battery storage worth it in Wichita Falls?',
              a: 'Solar can be a strong option in Wichita Falls depending on your usage and roof. Battery backup adds resilience during grid events like Winter Storm Uri (February 2021). A site-specific assessment from your installer will confirm expected savings for your home.',
            },
            {
              q: 'How much sun does Wichita Falls get for solar?',
              a: 'Wichita Falls averages an estimated 5.4 peak sun hours per day. Actual production depends on roof orientation, shading, and system size -- your installer can provide a site-specific estimate.',
            },
          ],
        },
      },
      {
        city: 'Iowa Park',
        citySlug: 'iowa-park',
        utility: 'Oncor (TDU)',
        localData: { ...ERCOT_DEREG_BASE, avgMonthlyBillEstimate: 160, peakSunHoursEstimate: 5.4 },
        cityProfile: {
          localNote: 'Iowa Park is a Wichita County city with hot summers and flat terrain ideal for solar installations.',
          faq: [
            {
              q: 'Do I need a permit for solar in Iowa Park?',
              a: 'Yes. City of Iowa Park Building Department handles solar permits. Typical turnaround is 2-6 weeks, varies by jurisdiction. Your installer manages the application and submits paperwork on your behalf.',
            },
            {
              q: 'Is solar + battery storage worth it in Iowa Park?',
              a: 'Solar can be a strong option in Iowa Park depending on your usage and roof. Battery backup adds resilience during grid events like Winter Storm Uri (February 2021). A site-specific assessment from your installer will confirm expected savings for your home.',
            },
            {
              q: 'How much sun does Iowa Park get for solar?',
              a: 'Iowa Park averages an estimated 5.4 peak sun hours per day. Actual production depends on roof orientation, shading, and system size -- your installer can provide a site-specific estimate.',
            },
          ],
        },
      },
      {
        city: 'Burkburnett',
        citySlug: 'burkburnett',
        utility: 'Oncor (TDU)',
        localData: { ...ERCOT_DEREG_BASE, avgMonthlyBillEstimate: 160, peakSunHoursEstimate: 5.4 },
        cityProfile: {
          localNote: 'Burkburnett is a Wichita County city near the Red River, with hot summers and strong wind resources.',
          faq: [
            {
              q: 'Do I need a permit for solar in Burkburnett?',
              a: 'Yes. City of Burkburnett Building Department handles solar permits. Typical turnaround is 2-6 weeks, varies by jurisdiction. Your installer manages the application and submits paperwork on your behalf.',
            },
            {
              q: 'Is solar + battery storage worth it in Burkburnett?',
              a: 'Solar can be a strong option in Burkburnett depending on your usage and roof. Battery backup adds resilience during grid events like Winter Storm Uri (February 2021). A site-specific assessment from your installer will confirm expected savings for your home.',
            },
            {
              q: 'How much sun does Burkburnett get for solar?',
              a: 'Burkburnett averages an estimated 5.4 peak sun hours per day. Actual production depends on roof orientation, shading, and system size -- your installer can provide a site-specific estimate.',
            },
          ],
        },
      },
    ],
  },

  // 37. Gregg County
  {
    county: 'Gregg County',
    regionSlug: 'gregg-county',
    state: 'texas',
    countyData: {
      utilityRate: {
        utility: 'AEP Texas North (SWEPCO)',
        avgResidentialRatePerKwh: 0.13,
        note: 'Gregg County is served by AEP Texas North (SWEPCO), a regulated utility -- there is no Retail Electric Provider (REP) choice here, unlike most of Texas. AEP Texas North sets its own rates and solar interconnection policies -- confirm current solar buyback terms directly with the utility. Illustrative residential rate: ~$0.13/kWh.',
      },
      permitOffice: {
        name: 'City of Longview Building Inspections',
        jurisdiction: 'City of Longview (other cities and unincorporated areas have separate processes)',
        typicalTurnaround: '2-6 weeks, varies by jurisdiction',
        note: 'Longview, Kilgore, and other incorporated areas in Gregg County each have their own building departments. Permit timelines vary -- confirm with your local jurisdiction. Your installer manages the application.',
      },
      climateZone: {
        zone: 'Hot-humid East Texas Piney Woods',
        description: 'Hot, humid summers with high cooling demand. Gregg County sits in the East Texas Piney Woods, with more tree cover and cloud cover than open prairie counties, which can affect solar siting. Winter storms can bring cold and ice to this region.',
      },
      countyContext: 'Gregg County is centered on Longview and Kilgore in the East Texas Piney Woods, historically tied to the East Texas oil boom. Gregg County is served by Southwestern Electric Power Company (SWEPCO), a regulated utility outside the ERCOT grid -- there is no Retail Electric Provider choice here, unlike most of Texas. Forested terrain means shading should be assessed for each roof.',
    },
    cities: [
      {
        city: 'Longview',
        citySlug: 'longview',
        utility: 'AEP Texas North (SWEPCO)',
        localData: { ...SWEPCO, avgMonthlyBillEstimate: 165, peakSunHoursEstimate: 5 },
        cityProfile: {
          localNote: 'Longview is the largest city in Gregg County, in the East Texas Piney Woods, with hot, humid summers and significant tree cover.',
          faq: [
            {
              q: 'Do I need a permit for solar in Longview?',
              a: 'Yes. City of Longview Building Inspections handles solar permits. Typical turnaround is 2-6 weeks, varies by jurisdiction. Your installer manages the application and submits paperwork on your behalf.',
            },
            {
              q: 'Is solar + battery storage worth it in Longview?',
              a: 'Solar can be a strong option in Longview depending on your usage and roof. Battery backup adds resilience during grid events like Winter Storm Uri (February 2021). A site-specific assessment from your installer will confirm expected savings for your home.',
            },
            {
              q: 'How much sun does Longview get for solar?',
              a: 'Longview averages an estimated 5.0 peak sun hours per day. Actual production depends on roof orientation, shading, and system size -- your installer can provide a site-specific estimate.',
            },
          ],
        },
      },
      {
        city: 'Kilgore',
        citySlug: 'kilgore',
        utility: 'AEP Texas North (SWEPCO)',
        localData: { ...SWEPCO, avgMonthlyBillEstimate: 155, peakSunHoursEstimate: 5 },
        cityProfile: {
          localNote: 'Kilgore is a Gregg County city historically tied to the East Texas oil boom, with hot, humid summers and wooded residential lots.',
          faq: [
            {
              q: 'Do I need a permit for solar in Kilgore?',
              a: 'Yes. City of Kilgore Building Department handles solar permits. Typical turnaround is 2-6 weeks, varies by jurisdiction. Your installer manages the application and submits paperwork on your behalf.',
            },
            {
              q: 'Is solar + battery storage worth it in Kilgore?',
              a: 'Solar can be a strong option in Kilgore depending on your usage and roof. Battery backup adds resilience during grid events like Winter Storm Uri (February 2021). A site-specific assessment from your installer will confirm expected savings for your home.',
            },
            {
              q: 'How much sun does Kilgore get for solar?',
              a: 'Kilgore averages an estimated 5.0 peak sun hours per day. Actual production depends on roof orientation, shading, and system size -- your installer can provide a site-specific estimate.',
            },
          ],
        },
      },
    ],
  },

  // 38. Tom Green County
  {
    county: 'Tom Green County',
    regionSlug: 'tom-green-county',
    state: 'texas',
    countyData: {
      utilityRate: {
        utility: 'AEP Texas (TDU) / Oncor (TDU)',
        avgResidentialRatePerKwh: 0.14,
        note: 'Tom Green County is in the deregulated ERCOT market. Depending on location, AEP Texas or Oncor delivers power as the wires-only TDU, but you choose your own Retail Electric Provider (REP) which sets your solar buyback rate. Illustrative residential rate range: $0.12-$0.16/kWh depending on TDU area and REP/plan choice.',
      },
      permitOffice: {
        name: 'City of San Angelo Development Services',
        jurisdiction: 'City of San Angelo (other cities and unincorporated areas have separate processes)',
        typicalTurnaround: '2-6 weeks, varies by jurisdiction',
        note: 'San Angelo, nearby cities, and other incorporated areas in Tom Green County each have their own building departments. Permit timelines vary -- confirm with your local jurisdiction. Your installer manages the application.',
      },
      climateZone: {
        zone: 'Semi-arid West Texas',
        description: 'Hot, dry summers with strong wind resources and mild winters. Tom Green County sits in West Texas, with high peak sun hours and minimal cloud cover. Occasional severe hail and wind require durable equipment.',
      },
      countyContext: 'Tom Green County is centered on San Angelo in West Texas. The semi-arid climate provides strong, consistent solar production. Tom Green County is in the deregulated ERCOT market, with AEP Texas and Oncor both serving as TDU depending on location -- residents choose their own Retail Electric Provider (REP) which sets the solar buyback rate.',
    },
    cities: [
      {
        city: 'San Angelo',
        citySlug: 'san-angelo',
        utility: 'Mixed (AEP Texas TDU / Oncor TDU)',
        localData: { ...ERCOT_DEREG_BASE, avgMonthlyBillEstimate: 175, peakSunHoursEstimate: 5.8 },
        cityProfile: {
          localNote: 'San Angelo is the hub of West Texas, with a semi-arid climate, strong sun exposure, and consistent wind resources.',
          faq: [
            {
              q: 'Do I need a permit for solar in San Angelo?',
              a: 'Yes. City of San Angelo Development Services handles solar permits. Typical turnaround is 2-6 weeks, varies by jurisdiction. Your installer manages the application and submits paperwork on your behalf.',
            },
            {
              q: 'Is solar + battery storage worth it in San Angelo?',
              a: 'Solar can be a strong option in San Angelo depending on your usage and roof. Battery backup adds resilience during grid events like Winter Storm Uri (February 2021). A site-specific assessment from your installer will confirm expected savings for your home.',
            },
            {
              q: 'How much sun does San Angelo get for solar?',
              a: 'San Angelo averages an estimated 5.8 peak sun hours per day. Actual production depends on roof orientation, shading, and system size -- your installer can provide a site-specific estimate.',
            },
          ],
        },
      },
    ],
  },

  // 39. Victoria County
  {
    county: 'Victoria County',
    regionSlug: 'victoria-county',
    state: 'texas',
    countyData: {
      utilityRate: {
        utility: 'AEP Texas (TDU)',
        avgResidentialRatePerKwh: 0.14,
        note: 'Victoria County is in the deregulated ERCOT market. AEP Texas delivers power as the wires-only Transmission and Distribution Utility (TDU), but you choose your own Retail Electric Provider (REP) which sets your solar buyback rate. Solar export rates vary widely by REP and plan -- shop for a REP with a competitive solar buyback plan to maximize your savings. Illustrative residential rate range: $0.12-$0.16/kWh depending on REP and plan choice.',
      },
      permitOffice: {
        name: 'City of Victoria Building Inspection',
        jurisdiction: 'City of Victoria (other cities and unincorporated areas have separate processes)',
        typicalTurnaround: '2-6 weeks, varies by jurisdiction',
        note: 'Victoria, nearby cities, and other incorporated areas in Victoria County each have their own building departments. Permit timelines vary -- confirm with your local jurisdiction. Your installer manages the application.',
      },
      climateZone: {
        zone: 'Hot-humid Gulf Coast / Coastal Bend',
        description: 'Hot, humid summers with frequent afternoon thunderstorms. High cooling demand from May through September. Hurricane and tropical storm risk requires wind-rated equipment.',
      },
      countyContext: 'Victoria County is centered on Victoria, a regional hub between Houston, Corpus Christi, and San Antonio on the Coastal Bend. The hot, humid climate drives high summer cooling loads, and hurricane preparedness is a priority for this Gulf Coast-adjacent region.',
    },
    cities: [
      {
        city: 'Victoria',
        citySlug: 'victoria',
        utility: 'AEP Texas (TDU)',
        localData: { ...ERCOT_DEREG_BASE, avgMonthlyBillEstimate: 175, peakSunHoursEstimate: 5.3 },
        cityProfile: {
          localNote: 'Victoria is a regional hub on the Texas Coastal Bend, with hot, humid summers and hurricane exposure requiring wind-rated equipment.',
          faq: [
            {
              q: 'Do I need a permit for solar in Victoria?',
              a: 'Yes. City of Victoria Building Inspection handles solar permits. Typical turnaround is 2-6 weeks, varies by jurisdiction. Your installer manages the application and submits paperwork on your behalf.',
            },
            {
              q: 'Is solar + battery storage worth it in Victoria?',
              a: 'Solar can be a strong option in Victoria depending on your usage and roof. Battery backup adds resilience during grid events like Winter Storm Uri (February 2021). A site-specific assessment from your installer will confirm expected savings for your home.',
            },
            {
              q: 'How much sun does Victoria get for solar?',
              a: 'Victoria averages an estimated 5.3 peak sun hours per day. Actual production depends on roof orientation, shading, and system size -- your installer can provide a site-specific estimate.',
            },
          ],
        },
      },
    ],
  },

  // 40. Angelina County
  {
    county: 'Angelina County',
    regionSlug: 'angelina-county',
    state: 'texas',
    countyData: {
      utilityRate: {
        utility: 'Entergy Texas',
        avgResidentialRatePerKwh: 0.13,
        note: 'Angelina County is served by Entergy Texas, a regulated utility -- there is no Retail Electric Provider (REP) choice here, unlike most of Texas. Entergy Texas sets its own rates and solar interconnection policies -- confirm current solar buyback terms directly with the utility. Illustrative residential rate: ~$0.13/kWh.',
      },
      permitOffice: {
        name: 'City of Lufkin Building Inspection',
        jurisdiction: 'City of Lufkin (other cities and unincorporated areas have separate processes)',
        typicalTurnaround: '2-6 weeks, varies by jurisdiction',
        note: 'Lufkin, Diboll, Huntington, and other incorporated areas in Angelina County each have their own building departments. Permit timelines vary -- confirm with your local jurisdiction. Your installer manages the application.',
      },
      climateZone: {
        zone: 'Hot-humid East Texas Piney Woods',
        description: 'Hot, humid summers with high cooling demand. Angelina County sits in the East Texas Piney Woods, with more tree cover and cloud cover than open prairie counties, which can affect solar siting. Occasional severe storms and tornado risk require durable equipment.',
      },
      countyContext: 'Angelina County is centered on Lufkin in the East Texas Piney Woods. Angelina County is served by Entergy Texas, a regulated utility -- there is no Retail Electric Provider choice here, unlike most of Texas. Forested terrain means shading should be assessed for each roof.',
    },
    cities: [
      {
        city: 'Lufkin',
        citySlug: 'lufkin',
        utility: 'Entergy Texas',
        localData: { ...ENTERGY_TX, avgMonthlyBillEstimate: 165, peakSunHoursEstimate: 5 },
        cityProfile: {
          localNote: 'Lufkin is the largest city in Angelina County, in the East Texas Piney Woods, with hot, humid summers and significant tree cover.',
          faq: [
            {
              q: 'Do I need a permit for solar in Lufkin?',
              a: 'Yes. City of Lufkin Building Inspection handles solar permits. Typical turnaround is 2-6 weeks, varies by jurisdiction. Your installer manages the application and submits paperwork on your behalf.',
            },
            {
              q: 'Is solar + battery storage worth it in Lufkin?',
              a: 'Solar can be a strong option in Lufkin depending on your usage and roof. Battery backup adds resilience during grid events like Winter Storm Uri (February 2021). A site-specific assessment from your installer will confirm expected savings for your home.',
            },
            {
              q: 'How much sun does Lufkin get for solar?',
              a: 'Lufkin averages an estimated 5.0 peak sun hours per day. Actual production depends on roof orientation, shading, and system size -- your installer can provide a site-specific estimate.',
            },
          ],
        },
      },
      {
        city: 'Diboll',
        citySlug: 'diboll',
        utility: 'Entergy Texas',
        localData: { ...ENTERGY_TX, avgMonthlyBillEstimate: 155, peakSunHoursEstimate: 5 },
        cityProfile: {
          localNote: 'Diboll is an Angelina County city with a timber industry heritage, with hot, humid summers and wooded residential lots.',
          faq: [
            {
              q: 'Do I need a permit for solar in Diboll?',
              a: 'Yes. City of Diboll Building Department handles solar permits. Typical turnaround is 2-6 weeks, varies by jurisdiction. Your installer manages the application and submits paperwork on your behalf.',
            },
            {
              q: 'Is solar + battery storage worth it in Diboll?',
              a: 'Solar can be a strong option in Diboll depending on your usage and roof. Battery backup adds resilience during grid events like Winter Storm Uri (February 2021). A site-specific assessment from your installer will confirm expected savings for your home.',
            },
            {
              q: 'How much sun does Diboll get for solar?',
              a: 'Diboll averages an estimated 5.0 peak sun hours per day. Actual production depends on roof orientation, shading, and system size -- your installer can provide a site-specific estimate.',
            },
          ],
        },
      },
      {
        city: 'Huntington',
        citySlug: 'huntington',
        utility: 'Entergy Texas',
        localData: { ...ENTERGY_TX, avgMonthlyBillEstimate: 150, peakSunHoursEstimate: 5 },
        cityProfile: {
          localNote: 'Huntington is a small Angelina County city with hot, humid summers typical of the East Texas Piney Woods.',
          faq: [
            {
              q: 'Do I need a permit for solar in Huntington?',
              a: 'Yes. City of Huntington Building Department handles solar permits. Typical turnaround is 2-6 weeks, varies by jurisdiction. Your installer manages the application and submits paperwork on your behalf.',
            },
            {
              q: 'Is solar + battery storage worth it in Huntington?',
              a: 'Solar can be a strong option in Huntington depending on your usage and roof. Battery backup adds resilience during grid events like Winter Storm Uri (February 2021). A site-specific assessment from your installer will confirm expected savings for your home.',
            },
            {
              q: 'How much sun does Huntington get for solar?',
              a: 'Huntington averages an estimated 5.0 peak sun hours per day. Actual production depends on roof orientation, shading, and system size -- your installer can provide a site-specific estimate.',
            },
          ],
        },
      },
    ],
  },
];
