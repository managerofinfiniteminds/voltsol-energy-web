import type { Locale } from './locale';

/**
 * UI string dictionary for the /market/... local-SEO landing pages
 * (state hub, county hub, city page). These templates render fully
 * server-side from static data (market-data.ts) and were previously
 * hardcoded in English only — this dictionary fixes that so the pages
 * respect the `lang` cookie / Accept-Language like the rest of the site.
 *
 * Per-city/per-county custom prose stored in market-data.ts (FAQ answers,
 * county context, local notes, utility/permit notes) is NOT covered here —
 * that is raw content data, not UI chrome, and needs its own translation
 * pass if full ES coverage of that copy is wanted.
 */
export interface MarketDict {
  home: string;
  solarMarkets: string;
  serviceAreaSuffix: string; // e.g. "Service Area" appended after utility name
  ctaButton: string;

  // State hub (/market/solar/california)
  stateH1: string;
  stateSub: string;
  whyCaliforniaHeading: string;
  card1Title: string;
  card1Body: string;
  card2Title: string;
  card2Body: string;
  card3Title: string;
  card3Body: string;
  card4Title: string;
  card4Body: string;
  countiesHeading: string;
  citiesServed: (n: number) => string;
  viewCities: string;
  allCitiesHeading: string;
  bottomCtaHeading: string;
  bottomCtaBody: string;
  footerNoteState: string;

  // Region/county hub (/market/solar/california/[region])
  regionH1: (county: string) => string;
  regionSub: (cities: number, county: string) => string;
  countySnapshotHeading: (county: string) => string;
  utilityRateLabel: string;
  permitOfficeLabel: string;
  climateZoneLabel: string;
  countyContextLabel: string;
  turnaroundLabel: string;
  whyCountyHeading: (county: string) => string;
  whyCountyP1: (county: string, utility: string) => string;
  whyCountyP2: string;
  whyCountyP3: (county: string) => string;
  citiesInCountyHeading: (county: string) => string;
  otherCountiesHeading: string;
  backToMarkets: string;
  freeSolarQuote: (place: string) => string;
  noObligationLicensed: string;
  takesUnder2Min: string;
  servingCountyNote: (county: string, cities: string) => string;
  footerNoteRegion: string;

  // City page (/market/solar/california/[region]/[city])
  cityH1: (city: string) => string;
  citySub: (city: string, utility: string, bill: number) => string;
  billDisclaimer: string;
  localEstimatesHeading: (city: string) => string;
  localEstimatesDisclaimer: string;
  statAvgBill: string;
  statSystemSize: string;
  statYear1Savings: string;
  statPayback: string;
  whyCityHeading: (city: string) => string;
  whyCityBullet1: (city: string, hours: number) => string;
  whyCityBullet2: (utility: string, city: string, rate: string, note: string) => string;
  whyCityBullet3: string;
  whyCityBullet4: string;
  pspsHeading: string;
  pspsBody: (city: string) => string;
  localDetailsHeading: (city: string) => string;
  faqHeading: (city: string) => string;
  howItWorksHeading: string;
  step1Title: string;
  step1Desc: string;
  step2Title: string;
  step2Desc: (city: string) => string;
  step3Title: string;
  step3Desc: string;
  step4Title: string;
  step4Desc: string;
  moreCountyQuotes: (county: string) => string;
  solarInCity: (city: string) => string;
  otherMarketsHeading: string;
  freeSolarQuoteCity: (city: string) => string;
  noObligationOneContractor: string;
  licensedInstaller: string;
  noPressureNoObligation: string;
  localCaliforniaTeam: string;
  footerNoteCityPre: string;
  footerNoteCityMid: string;
  termsLink: string;
  privacyLink: string;
}

const en: MarketDict = {
  home: 'Home',
  solarMarkets: 'Solar Markets',
  serviceAreaSuffix: 'Service Area',
  ctaButton: 'Get My Free Estimate',

  stateH1: 'Residential Solar & Battery Storage in California',
  stateSub:
    'VoltSol specializes in residential solar with EG4 battery storage across California — ' +
    'systems from $8,700. Make your own power, store it, and run your home through blackouts and ' +
    'PSPS shutoffs. Real energy independence, built for the NEM 3.0 era — keep the power you make ' +
    'instead of exporting it for a fraction of what you paid.',
  whyCaliforniaHeading: 'Why Solar + Battery Storage in California?',
  card1Title: 'Sidestep NEM 3.0',
  card1Body:
    "California's NEM 3.0 slashed solar export credits. Battery-first systems sidestep this entirely — you store and use your own power, no utility buyback needed.",
  card2Title: "Own It, Don't Rent It",
  card2Body:
    "The big installers sell you a grid-tied system that still leaves you on the utility's meter. VoltSol builds you your own power plant — solar + EG4 battery — so you stop renting power from the grid for good.",
  card3Title: 'Blackout Resilience',
  card3Body:
    "California's wildfire-driven PSPS shutoffs leave thousands in the dark each year. Solar + battery storage systems keep your lights and HVAC running.",
  card4Title: 'Beat Rising Rates',
  card4Body:
    "Utility rates keep climbing. When you make and store your own power, your local utility's next rate hike stops being your problem — your energy cost is locked in at install.",
  countiesHeading: 'Counties We Serve',
  citiesServed: (n) => `${n} ${n === 1 ? 'city' : 'cities'} served`,
  viewCities: 'View cities →',
  allCitiesHeading: 'All Cities We Serve',
  bottomCtaHeading: 'Ready to go solar in California?',
  bottomCtaBody: 'Get a free, no-obligation quote from a licensed installer serving your area.',
  footerNoteState:
    'VoltSol Energy operates a licensed contractor marketplace in California. All estimates are regional approximations and do not constitute a savings guarantee.',

  regionH1: (county) => `Solar + Battery Storage in ${county}, CA`,
  regionSub: (cities, county) =>
    `VoltSol gives ${cities} cities across ${county} a way to energy independence: residential solar ` +
    `paired with EG4 battery storage, from $8,700. Make your own power, store it, and keep the lights ` +
    `on through blackouts and PSPS shutoffs — instead of exporting it back to the grid for a fraction ` +
    `of what you paid under NEM 3.0.`,
  countySnapshotHeading: (county) => `County Snapshot — ${county}`,
  utilityRateLabel: 'Utility Rate',
  permitOfficeLabel: 'Permit Office',
  climateZoneLabel: 'Climate Zone',
  countyContextLabel: 'County Context',
  turnaroundLabel: 'Typical turnaround',
  whyCountyHeading: (county) => `Why Solar + Battery Storage in ${county}?`,
  whyCountyP1: (county, utility) =>
    `Homeowners in ${county} are served by ${utility}, which has seen significant residential rate ` +
    `increases in recent years. Residential solar + battery storage offers a way to lock in energy ` +
    `costs at installation prices and protect against future rate hikes.`,
  whyCountyP2:
    "Our systems combine rooftop solar panels, EG4 battery storage, and inverters to power your home's " +
    "most energy-intensive loads — like heating, cooling, and major appliances — while maximizing the " +
    "power you keep and use yourself. That means no utility buyback complexity under NEM 3.0, and " +
    "backup power during PSPS shutoffs or outages.",
  whyCountyP3: (county) =>
    "Under California's current net-billing rules (NEM 3.0), the credit homeowners receive for solar " +
    `energy they export is typically only a small fraction of the retail price they pay to buy ` +
    `electricity back. The smart economics in ${county} shifted to storing and using your own power ` +
    `instead of selling it back. The federal 30% residential solar tax credit ended for systems placed ` +
    `in service after Dec 31, 2025, but California programs like SGIP battery rebates may still apply. ` +
    `Consult a tax professional to confirm your eligibility.`,
  citiesInCountyHeading: (county) => `Cities We Serve in ${county}`,
  otherCountiesHeading: 'Other California Counties',
  backToMarkets: '← Back to all California markets',
  freeSolarQuote: (place) => `Free Solar Quote — ${place}`,
  noObligationLicensed: 'No cost. No obligation. Licensed local installer.',
  takesUnder2Min: 'Takes under 2 minutes. Your info is only shared with one local contractor.',
  servingCountyNote: (county, cities) =>
    `Serving ${county}: We work with licensed contractors across ${cities}. Get a customized quote for your home.`,
  footerNoteRegion:
    'VoltSol Energy operates a licensed contractor marketplace in California. All estimates are regional approximations and do not constitute a savings guarantee.',

  cityH1: (city) => `Home Solar + Battery Storage in ${city}, CA`,
  citySub: (city, utility, bill) =>
    `Stop renting your power from the grid. VoltSol installs residential solar paired with EG4 battery ` +
    `storage in ${city} — so you make your own power, store it, and run your home through blackouts and ` +
    `PSPS shutoffs. Systems start at $8,700, and ${city} is served by ${utility} — homes here pay an ` +
    `estimated $${bill}/mo today.`,
  billDisclaimer: '* Electricity bill figures are regional estimates only, not guarantees.',
  localEstimatesHeading: (city) => `Home Solar + Battery Storage in ${city} — Local Estimates`,
  localEstimatesDisclaimer:
    'These are illustrative regional estimates — not guarantees. Your actual savings depend on usage, roof orientation, shading, system size, and future utility rate changes.',
  statAvgBill: 'Avg monthly bill*',
  statSystemSize: 'Typical system size*',
  statYear1Savings: 'Est. year-1 savings*',
  statPayback: 'Est. payback period*',
  whyCityHeading: (city) => `Why Solar + Battery Storage in ${city}?`,
  whyCityBullet1: (city, hours) =>
    `High sun exposure: ${city} averages an estimated ${hours} peak sun hours per day — strong solar production potential year-round.`,
  whyCityBullet2: (utility, city, rate, note) =>
    `High local utility rates: ${utility} customers in ${city} pay an estimated $${rate}/kWh, making solar self-consumption economics strong. ${note}`,
  whyCityBullet3:
    "Battery-first economics under NEM 3.0: Under California's current net-billing rules, many homeowners now receive only a fraction of the retail rate for power they export to the grid — so the value is now in storing and using your own power — exactly what a VoltSol solar + battery system delivers. The federal 30% residential solar tax credit ended for systems placed in service after Dec 31, 2025; ask about current state programs like SGIP battery rebates. Consult a tax professional for your situation.",
  whyCityBullet4:
    'Home value: Studies suggest homes with owned solar systems sell for more than comparable homes without — though results vary by market.',
  pspsHeading: 'When the grid goes down, your lights stay on',
  pspsBody: (city) =>
    `Public Safety Power Shutoffs (PSPS) and wildfire-season outages can leave ${city} homes dark for ` +
    `hours — sometimes days. A VoltSol solar + battery system keeps your fridge, lights, and Wi-Fi ` +
    `running while the grid is down. No generator, no fuel runs, no scramble.`,
  localDetailsHeading: (city) => `Local Details for ${city}`,
  faqHeading: (city) => `Frequently Asked Questions — ${city}`,
  howItWorksHeading: 'How It Works',
  step1Title: 'Submit your info',
  step1Desc: 'Fill out the quick form — takes under 2 minutes.',
  step2Title: 'Get matched',
  step2Desc: (city) => `We share your request with one licensed solar contractor serving ${city}.`,
  step3Title: 'Free consultation',
  step3Desc: 'Your contractor contacts you to assess your home and provide a no-obligation quote.',
  step4Title: 'Go solar',
  step4Desc: 'If the numbers work, move forward on your timeline — no pressure.',
  moreCountyQuotes: (county) => `More ${county} Solar Quotes`,
  solarInCity: (city) => `Solar in ${city}`,
  otherMarketsHeading: 'Other California Solar Markets',
  freeSolarQuoteCity: (city) => `Free Solar Quote — ${city}`,
  noObligationOneContractor: 'No cost. No obligation. One local contractor.',
  licensedInstaller: 'Licensed installer',
  noPressureNoObligation: 'No pressure, no obligation',
  localCaliforniaTeam: 'Local California team',
  footerNoteCityPre:
    'VoltSol Energy operates a licensed contractor marketplace in California. All estimates are regional approximations and do not constitute a savings guarantee. Subject to our',
  footerNoteCityMid: 'and',
  termsLink: 'Terms',
  privacyLink: 'Privacy Policy',
};

const es: MarketDict = {
  home: 'Inicio',
  solarMarkets: 'Mercados Solares',
  serviceAreaSuffix: 'Área de Servicio',
  ctaButton: 'Recibir Mi Estimado Gratis',

  stateH1: 'Energía Solar Residencial y Almacenamiento en Batería en California',
  stateSub:
    'VoltSol se especializa en energía solar residencial con almacenamiento en batería EG4 en todo ' +
    'California — sistemas desde $8,700. Produce tu propia energía, almacénala y mantén tu casa ' +
    'funcionando durante apagones y cortes de PSPS. Independencia energética real, hecha para la era ' +
    'de NEM 3.0 — quédate con la energía que produces en lugar de exportarla por una fracción de lo que pagaste.',
  whyCaliforniaHeading: '¿Por qué Solar + Batería en California?',
  card1Title: 'Evita NEM 3.0',
  card1Body:
    'El NEM 3.0 de California redujo drásticamente los créditos por exportar energía solar. Los sistemas centrados en batería evitan esto por completo — almacenas y usas tu propia energía, sin necesidad de venderla a la compañía eléctrica.',
  card2Title: 'Sé Dueño, No Rentes',
  card2Body:
    'Los grandes instaladores te venden un sistema conectado a la red que te sigue dejando al margen del medidor de la compañía eléctrica. VoltSol te construye tu propia planta de energía — solar + batería EG4 — para que dejes de rentar energía de la red para siempre.',
  card3Title: 'Resiliencia ante Apagones',
  card3Body:
    'Los cortes de energía por PSPS relacionados con incendios forestales en California dejan a miles de hogares sin luz cada año. Los sistemas solares + batería mantienen tus luces y tu aire acondicionado funcionando.',
  card4Title: 'Adelántate a las Tarifas',
  card4Body:
    'Las tarifas eléctricas siguen subiendo. Cuando produces y almacenas tu propia energía, el próximo aumento de tarifa de tu compañía eléctrica deja de ser tu problema — tu costo energético queda fijado desde la instalación.',
  countiesHeading: 'Condados que Atendemos',
  citiesServed: (n) => `${n} ${n === 1 ? 'ciudad atendida' : 'ciudades atendidas'}`,
  viewCities: 'Ver ciudades →',
  allCitiesHeading: 'Todas las Ciudades que Atendemos',
  bottomCtaHeading: '¿Listo para pasarte a la energía solar en California?',
  bottomCtaBody: 'Recibe un estimado gratis y sin compromiso de un instalador licenciado en tu área.',
  footerNoteState:
    'VoltSol Energy opera un mercado de contratistas licenciados en California. Todos los estimados son aproximaciones regionales y no constituyen una garantía de ahorro.',

  regionH1: (county) => `Solar + Almacenamiento en Batería en ${county}, CA`,
  regionSub: (cities, county) =>
    `VoltSol le da a ${cities} ciudades en todo ${county} una forma de lograr independencia energética: ` +
    `energía solar residencial combinada con almacenamiento en batería EG4, desde $8,700. Produce tu ` +
    `propia energía, almacénala y mantén las luces encendidas durante apagones y cortes de PSPS — en ` +
    `lugar de exportarla a la red por una fracción de lo que pagaste bajo NEM 3.0.`,
  countySnapshotHeading: (county) => `Panorama del Condado — ${county}`,
  utilityRateLabel: 'Tarifa Eléctrica',
  permitOfficeLabel: 'Oficina de Permisos',
  climateZoneLabel: 'Zona Climática',
  countyContextLabel: 'Contexto del Condado',
  turnaroundLabel: 'Tiempo típico de espera',
  whyCountyHeading: (county) => `¿Por qué Solar + Batería en ${county}?`,
  whyCountyP1: (county, utility) =>
    `Los propietarios en ${county} son atendidos por ${utility}, que ha visto aumentos significativos ` +
    `en las tarifas residenciales en los últimos años. La energía solar residencial + almacenamiento en ` +
    `batería ofrece una forma de fijar los costos de energía a los precios de instalación y protegerte ` +
    `contra futuros aumentos de tarifas.`,
  whyCountyP2:
    'Nuestros sistemas combinan paneles solares en el techo, almacenamiento en batería EG4 e inversores ' +
    'para alimentar las cargas más exigentes de tu casa — como calefacción, aire acondicionado y ' +
    'electrodomésticos grandes — mientras maximizamos la energía que conservas y usas tú mismo. Eso ' +
    'significa nada de complicaciones de venta a la red bajo NEM 3.0, y energía de respaldo durante ' +
    'cortes de PSPS o apagones.',
  whyCountyP3: (county) =>
    'Bajo las reglas actuales de facturación neta de California (NEM 3.0), el crédito que reciben los ' +
    'propietarios por la energía solar que exportan suele ser solo una pequeña fracción del precio al ' +
    `menudeo que pagan por comprar electricidad de vuelta. La economía inteligente en ${county} cambió ` +
    'hacia almacenar y usar tu propia energía en lugar de venderla. El crédito fiscal federal del 30% ' +
    'para solar residencial terminó para los sistemas puestos en servicio después del 31 de diciembre ' +
    'de 2025, pero programas estatales de California como los reembolsos de batería SGIP pueden seguir ' +
    'aplicando. Consulta a un profesional de impuestos para confirmar tu elegibilidad.',
  citiesInCountyHeading: (county) => `Ciudades que Atendemos en ${county}`,
  otherCountiesHeading: 'Otros Condados de California',
  backToMarkets: '← Volver a todos los mercados de California',
  freeSolarQuote: (place) => `Estimado Solar Gratis — ${place}`,
  noObligationLicensed: 'Sin costo. Sin compromiso. Instalador local licenciado.',
  takesUnder2Min: 'Toma menos de 2 minutos. Tu información solo se comparte con un contratista local.',
  servingCountyNote: (county, cities) =>
    `Atendiendo ${county}: Trabajamos con contratistas licenciados en ${cities}. Recibe un estimado personalizado para tu hogar.`,
  footerNoteRegion:
    'VoltSol Energy opera un mercado de contratistas licenciados en California. Todos los estimados son aproximaciones regionales y no constituyen una garantía de ahorro.',

  cityH1: (city) => `Solar Residencial + Almacenamiento en Batería en ${city}, CA`,
  citySub: (city, utility, bill) =>
    `Deja de rentar tu energía de la red. VoltSol instala energía solar residencial combinada con ` +
    `almacenamiento en batería EG4 en ${city} — para que produzcas tu propia energía, la almacenes y ` +
    `mantengas tu casa funcionando durante apagones y cortes de PSPS. Los sistemas comienzan en $8,700, ` +
    `y ${city} es atendida por ${utility} — los hogares aquí pagan un estimado de $${bill}/mes hoy.`,
  billDisclaimer: '* Las cifras de la factura de electricidad son estimados regionales, no garantías.',
  localEstimatesHeading: (city) => `Solar + Batería en ${city} — Estimados Locales`,
  localEstimatesDisclaimer:
    'Estos son estimados regionales ilustrativos — no garantías. Tus ahorros reales dependen del uso, la orientación del techo, la sombra, el tamaño del sistema y futuros cambios en las tarifas eléctricas.',
  statAvgBill: 'Factura mensual prom.*',
  statSystemSize: 'Tamaño típico del sistema*',
  statYear1Savings: 'Ahorro estimado año 1*',
  statPayback: 'Período de recuperación est.*',
  whyCityHeading: (city) => `¿Por qué Solar + Batería en ${city}?`,
  whyCityBullet1: (city, hours) =>
    `Alta exposición solar: ${city} promedia un estimado de ${hours} horas de sol pico al día — un fuerte potencial de producción solar durante todo el año.`,
  whyCityBullet2: (utility, city, rate, note) =>
    `Tarifas eléctricas locales altas: los clientes de ${utility} en ${city} pagan un estimado de $${rate}/kWh, lo que hace que la economía del autoconsumo solar sea sólida. ${note}`,
  whyCityBullet3:
    'Economía centrada en batería bajo NEM 3.0: bajo las reglas actuales de facturación neta de California, muchos propietarios ahora reciben solo una fracción de la tarifa al menudeo por la energía que exportan a la red — así que el valor ahora está en almacenar y usar tu propia energía — exactamente lo que ofrece un sistema solar + batería de VoltSol. El crédito fiscal federal del 30% para solar residencial terminó para los sistemas puestos en servicio después del 31 de diciembre de 2025; pregunta sobre programas estatales actuales como los reembolsos de batería SGIP. Consulta a un profesional de impuestos para tu situación.',
  whyCityBullet4:
    'Valor de la propiedad: estudios sugieren que los hogares con sistemas solares propios se venden por más que hogares comparables sin ellos — aunque los resultados varían según el mercado.',
  pspsHeading: 'Cuando la red se cae, tus luces siguen encendidas',
  pspsBody: (city) =>
    `Los cortes de energía por seguridad pública (PSPS) y los apagones en temporada de incendios pueden ` +
    `dejar a los hogares de ${city} sin luz por horas — a veces días. Un sistema solar + batería de ` +
    `VoltSol mantiene tu refrigerador, luces y Wi-Fi funcionando mientras la red está caída. Sin ` +
    `generador, sin ir por combustible, sin apuros.`,
  localDetailsHeading: (city) => `Detalles Locales para ${city}`,
  faqHeading: (city) => `Preguntas Frecuentes — ${city}`,
  howItWorksHeading: 'Cómo Funciona',
  step1Title: 'Envía tu información',
  step1Desc: 'Llena el formulario rápido — toma menos de 2 minutos.',
  step2Title: 'Te conectamos',
  step2Desc: (city) => `Compartimos tu solicitud con un contratista solar licenciado que atiende ${city}.`,
  step3Title: 'Consulta gratis',
  step3Desc: 'Tu contratista te contacta para evaluar tu casa y darte un estimado sin compromiso.',
  step4Title: 'Pásate a la energía solar',
  step4Desc: 'Si los números funcionan, avanza en tu propio tiempo — sin presión.',
  moreCountyQuotes: (county) => `Más Estimados Solares en ${county}`,
  solarInCity: (city) => `Solar en ${city}`,
  otherMarketsHeading: 'Otros Mercados Solares de California',
  freeSolarQuoteCity: (city) => `Estimado Solar Gratis — ${city}`,
  noObligationOneContractor: 'Sin costo. Sin compromiso. Un contratista local.',
  licensedInstaller: 'Instalador licenciado',
  noPressureNoObligation: 'Sin presión, sin compromiso',
  localCaliforniaTeam: 'Equipo local de California',
  footerNoteCityPre:
    'VoltSol Energy opera un mercado de contratistas licenciados en California. Todos los estimados son aproximaciones regionales y no constituyen una garantía de ahorro. Sujeto a nuestros',
  footerNoteCityMid: 'y',
  termsLink: 'Términos',
  privacyLink: 'Política de Privacidad',
};

const DICTS: Record<Locale, MarketDict> = { en, es };

export function getMarketDict(locale: Locale): MarketDict {
  return DICTS[locale] ?? en;
}
