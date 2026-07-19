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
];
