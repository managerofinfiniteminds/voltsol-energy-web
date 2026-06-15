import type { Locale } from './locale';

/**
 * Bilingual content for the /technology page. English is the canonical
 * source; Spanish is natural, region-neutral Latin American Spanish.
 * Structure mirrors the page's scenes 1:1.
 */
export interface TechContent {
  badge: string;
  hero_h1_pre: string;
  hero_h1_gold: string;
  hero_p: string; // may contain <strong> via dangerous? No — split below
  hero_tagline_make: string;
  hero_tagline_store: string;
  hero_tagline_live: string;
  hero_cta: string;

  s2_h2_pre: string;
  s2_h2_gold: string;
  s2_sub: string;
  s2_bad_title: string;
  s2_bad_path: string;
  s2_bad_points: string[];
  s2_good_title: string;
  s2_good_path: string;
  s2_good_points: string[];

  s3_h2: string;
  s3_steps: { step: string; title: string; desc: string }[];

  s4_stat_caption: string;
  s4_p: string;
  s4_cta: string;

  s5_h2_pre: string;
  s5_h2_gold: string;
  s5_sub: string;
  s5_cards: { title: string; desc: string }[];

  s6_h2_pre: string;
  s6_h2_gold: string;
  s6_sub: string;
  s6_zones: { size: string; room: string; area: string }[];

  specs_summary: string;
  specs_intro_pre: string;
  specs_intro_bold: string;
  specs_intro_post: string;
  specs_rows: [string, string][];
  specs_footnote: string;

  cta_h2: string;
  cta_p: string;
  cta_back: string;
}

const en: TechContent = {
  badge: 'The Technology',
  hero_h1_pre: 'The only system where the sun powers your home',
  hero_h1_gold: 'directly.',
  hero_p:
    "Most solar takes the long way around — through an inverter, out to the grid, past your meter, and back. Ours sends sunlight straight into your heating and cooling. Free all day. Still running when the power's out.",
  hero_tagline_make: 'Make it.',
  hero_tagline_store: 'Store it.',
  hero_tagline_live: 'Live on it.™',
  hero_cta: 'See if my home qualifies',

  s2_h2_pre: 'Same sun.',
  s2_h2_gold: 'Shorter path.',
  s2_sub: 'Why ordinary solar still leaves you tied to the utility — and how we cut the cord.',
  s2_bad_title: 'Ordinary solar',
  s2_bad_path: 'Panels → inverter → grid → meter → back to your house → AC',
  s2_bad_points: [
    'Every conversion loses energy along the way',
    "You're still buying power back from the utility",
    'Rates and rules can change on you anytime',
    'When the grid goes down, your AC goes down with it',
  ],
  s2_good_title: 'The VoltSol way',
  s2_good_path: 'Panels → straight into your AC. That\u2019s it.',
  s2_good_points: [
    'Solar plugs directly into the system — no round trip',
    '100% daytime energy savings on sunny days',
    'A battery banks the extra for night and outages',
    'Keeps your home comfortable even in a blackout',
  ],

  s3_h2: 'How it actually works',
  s3_steps: [
    {
      step: '01',
      title: 'MAKE IT',
      desc: 'Rooftop panels turn free sunlight into power and feed it straight into the system — no inverter middleman skimming energy off the top.',
    },
    {
      step: '02',
      title: 'STORE IT',
      desc: 'A home battery banks the extra power for nighttime and blackouts, so the sun you caught at noon still cools your house at midnight.',
    },
    {
      step: '03',
      title: 'LIVE ON IT',
      desc: 'Whole-home heating and cooling runs on stored sun — comfortable, quiet, and on sunny days, powered entirely by the panels on your roof.',
    },
  ],

  s4_stat_caption: 'daytime energy savings on sunny days',
  s4_p: "When the sun's out, your heating and cooling can run on $0 of utility power. That's the difference between renting electricity and making your own — and it's why so many homeowners watch their bill fall toward zero.",
  s4_cta: 'See your potential savings',

  s5_h2_pre: 'Built to handle',
  s5_h2_gold: 'all four seasons',
  s5_sub: 'Real performance, in plain English.',
  s5_cards: [
    {
      title: 'Cools a whole home, sips power',
      desc: 'Up to 36,000 BTU across as many as 4 rooms — about 2,000 sq ft — at an efficiency rating (SEER2 up to 22.5) that puts it among the most efficient systems made.',
    },
    {
      title: 'Handles a heat wave and a cold snap',
      desc: 'Keeps cooling in triple-digit heat and keeps heating when it drops near freezing — true four-season comfort.',
    },
    {
      title: 'Whisper quiet indoors',
      desc: "As low as 29 dB on the indoor units — quieter than a library reading room. You'll forget it's running.",
    },
    {
      title: 'Cleaner refrigerant',
      desc: 'Uses modern R32 refrigerant — more efficient and lower environmental impact than the older blends in most legacy AC systems.',
    },
    {
      title: 'Smart install, lower cost',
      desc: 'Quick-connect, pre-charged lines mean a faster, cleaner installation — less labor on the bill, no torch-and-vacuum guesswork.',
    },
    {
      title: 'Backed for the long haul',
      desc: 'Covered by a manufacturer limited warranty, installed by a licensed local pro who stands behind the work.',
    },
  ],

  s6_h2_pre: 'Right-sized for',
  s6_h2_gold: 'your home',
  s6_sub: "One outdoor unit can run two to four indoor zones. We match each room to the right size — so you never overpay for capacity you won't use.",
  s6_zones: [
    { size: '12K', room: 'Bedrooms', area: '300–500 sq ft' },
    { size: '18K', room: 'Living rooms & kitchens', area: '600–800 sq ft' },
    { size: '24K', room: 'Great rooms & shops', area: '1,000–1,250 sq ft' },
  ],

  specs_summary: 'The full specs',
  specs_intro_pre: 'VoltSol systems are built on ',
  specs_intro_bold: 'EG4 Hybrid AC/DC mini-split',
  specs_intro_post:
    ' technology — single-zone (12K / 24K) and multizone (24K / 36K) configurations with direct solar DC input.',
  specs_rows: [
    ['Capacity', '12,000 – 36,000 BTU/h'],
    ['Zones (multizone)', '2 to 4 indoor air handlers'],
    ['Coverage', 'Up to ~2,000 sq ft'],
    ['Efficiency', 'SEER2 up to 22.5 · Energy Star'],
    ['Heating efficiency', 'COP up to 14.3'],
    ['Solar DC input', '90 – 410 VDC direct to unit'],
    ['Rated PV', 'Up to 2,200W (single) / 4,400W (multizone)'],
    ['Refrigerant', 'R32'],
    ['Cooling op. range', 'Down to extreme heat (to ~125–131°F outdoor)'],
    ['Heating op. range', 'Down to ~5°F outdoor'],
    ['Indoor noise', 'As low as 29 dB(A)'],
    ['Install', 'Plug-N-Cool quick-connect, pre-charged line set'],
    ['Warranty', '5-year limited (manufacturer)'],
  ],
  specs_footnote:
    'Specs reflect EG4 Hybrid Mini-Split AC/DC product family. Exact configuration and performance depend on your home; your free estimate confirms the system sized for you.',

  cta_h2: 'See your home running on sunlight',
  cta_p: "Licensed. Local. No pressure. Answer a few quick questions and we'll show you the system — and the savings — sized for your home.",
  cta_back: 'Back to How It Works',
};

const es: TechContent = {
  badge: 'La Tecnología',
  hero_h1_pre: 'El único sistema donde el sol alimenta tu hogar',
  hero_h1_gold: 'directamente.',
  hero_p:
    'La mayoría de la energía solar toma el camino largo — pasa por un inversor, sale a la red eléctrica, cruza tu medidor y regresa. La nuestra envía la luz del sol directamente a tu calefacción y aire acondicionado. Gratis todo el día. Y sigue funcionando cuando se va la luz.',
  hero_tagline_make: 'Genérala.',
  hero_tagline_store: 'Almacénala.',
  hero_tagline_live: 'Vive de ella.™',
  hero_cta: 'Ver si mi casa califica',

  s2_h2_pre: 'El mismo sol.',
  s2_h2_gold: 'Un camino más corto.',
  s2_sub: 'Por qué la energía solar común te mantiene atado a la compañía eléctrica — y cómo cortamos esa dependencia.',
  s2_bad_title: 'Energía solar común',
  s2_bad_path: 'Paneles → inversor → red → medidor → de vuelta a tu casa → aire',
  s2_bad_points: [
    'Cada conversión pierde energía en el camino',
    'Sigues comprándole electricidad a la compañía',
    'Las tarifas y las reglas pueden cambiar en cualquier momento',
    'Cuando se cae la red, tu aire acondicionado se cae con ella',
  ],
  s2_good_title: 'El método VoltSol',
  s2_good_path: 'Paneles → directo a tu aire acondicionado. Así de simple.',
  s2_good_points: [
    'El sol entra directo al sistema — sin vueltas',
    '100% de ahorro de energía durante el día con sol',
    'Una batería guarda lo extra para la noche y los apagones',
    'Mantiene tu hogar cómodo incluso durante un apagón',
  ],

  s3_h2: 'Cómo funciona en realidad',
  s3_steps: [
    {
      step: '01',
      title: 'GENÉRALA',
      desc: 'Los paneles en el techo convierten la luz gratis del sol en energía y la envían directo al sistema — sin un inversor de por medio robándose parte de la energía.',
    },
    {
      step: '02',
      title: 'ALMACÉNALA',
      desc: 'Una batería en casa guarda la energía extra para la noche y los apagones, así el sol que captaste al mediodía sigue enfriando tu casa a medianoche.',
    },
    {
      step: '03',
      title: 'VIVE DE ELLA',
      desc: 'La calefacción y el aire de toda la casa funcionan con sol almacenado — cómodo, silencioso, y en días soleados, alimentado por completo por los paneles de tu techo.',
    },
  ],

  s4_stat_caption: 'de ahorro de energía durante el día con sol',
  s4_p: 'Cuando hay sol, tu calefacción y aire acondicionado pueden funcionar con $0 de electricidad de la compañía. Esa es la diferencia entre rentar electricidad y generar la tuya — y por eso tantos dueños de casa ven su factura caer hacia cero.',
  s4_cta: 'Ver tu ahorro potencial',

  s5_h2_pre: 'Hecho para enfrentar',
  s5_h2_gold: 'las cuatro estaciones',
  s5_sub: 'Rendimiento real, en palabras sencillas.',
  s5_cards: [
    {
      title: 'Enfría toda la casa, gasta poco',
      desc: 'Hasta 36,000 BTU en hasta 4 habitaciones — unos 185 m² (2,000 pies²) — con una eficiencia (SEER2 hasta 22.5) que lo ubica entre los sistemas más eficientes que existen.',
    },
    {
      title: 'Aguanta una ola de calor y un frío intenso',
      desc: 'Sigue enfriando con calor de tres dígitos y sigue calentando cuando baja casi a punto de congelación — verdadera comodidad en las cuatro estaciones.',
    },
    {
      title: 'Silencioso por dentro',
      desc: 'Tan bajo como 29 dB en las unidades interiores — más silencioso que una sala de lectura. Olvidarás que está encendido.',
    },
    {
      title: 'Refrigerante más limpio',
      desc: 'Usa el refrigerante moderno R32 — más eficiente y con menor impacto ambiental que las mezclas más viejas de la mayoría de los aires tradicionales.',
    },
    {
      title: 'Instalación inteligente, menor costo',
      desc: 'Las líneas de conexión rápida y precargadas permiten una instalación más rápida y limpia — menos mano de obra en la factura, sin complicaciones.',
    },
    {
      title: 'Respaldado a largo plazo',
      desc: 'Cubierto por una garantía limitada del fabricante, instalado por un profesional local con licencia que respalda su trabajo.',
    },
  ],

  s6_h2_pre: 'Del tamaño justo para',
  s6_h2_gold: 'tu hogar',
  s6_sub: 'Una sola unidad exterior puede alimentar de dos a cuatro zonas interiores. Ajustamos cada habitación al tamaño correcto — para que nunca pagues de más por capacidad que no vas a usar.',
  s6_zones: [
    { size: '12K', room: 'Recámaras', area: '28–46 m² (300–500 pies²)' },
    { size: '18K', room: 'Salas y cocinas', area: '56–74 m² (600–800 pies²)' },
    { size: '24K', room: 'Salones grandes y talleres', area: '93–116 m² (1,000–1,250 pies²)' },
  ],

  specs_summary: 'Especificaciones completas',
  specs_intro_pre: 'Los sistemas VoltSol están construidos con tecnología ',
  specs_intro_bold: 'mini-split híbrida EG4 AC/DC',
  specs_intro_post:
    ' — configuraciones de una zona (12K / 24K) y multizona (24K / 36K) con entrada solar DC directa.',
  specs_rows: [
    ['Capacidad', '12,000 – 36,000 BTU/h'],
    ['Zonas (multizona)', '2 a 4 unidades interiores'],
    ['Cobertura', 'Hasta ~185 m² (2,000 pies²)'],
    ['Eficiencia', 'SEER2 hasta 22.5 · Energy Star'],
    ['Eficiencia de calefacción', 'COP hasta 14.3'],
    ['Entrada solar DC', '90 – 410 VDC directo a la unidad'],
    ['PV nominal', 'Hasta 2,200W (una zona) / 4,400W (multizona)'],
    ['Refrigerante', 'R32'],
    ['Rango de enfriamiento', 'Hasta calor extremo (~52–55°C exterior)'],
    ['Rango de calefacción', 'Hasta ~-15°C exterior'],
    ['Ruido interior', 'Tan bajo como 29 dB(A)'],
    ['Instalación', 'Conexión rápida Plug-N-Cool, líneas precargadas'],
    ['Garantía', 'Limitada de 5 años (fabricante)'],
  ],
  specs_footnote:
    'Las especificaciones corresponden a la familia de productos mini-split híbridos EG4 AC/DC. La configuración exacta y el rendimiento dependen de tu hogar; tu estimado gratis confirma el sistema dimensionado para ti.',

  cta_h2: 'Ve tu hogar funcionando con luz del sol',
  cta_p: 'Con licencia. Local. Sin presión. Responde unas preguntas rápidas y te mostramos el sistema — y el ahorro — dimensionado para tu hogar.',
  cta_back: 'Volver a Cómo Funciona',
};

const TECH: Record<Locale, TechContent> = { en, es };

export function getTechContent(locale: Locale): TechContent {
  return TECH[locale] ?? en;
}
