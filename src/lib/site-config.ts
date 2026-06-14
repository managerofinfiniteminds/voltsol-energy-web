import { sql } from '@/lib/db';

// ============ INTERFACES ============

export interface NumberSectionConfig {
  number_section_label: string;
  number_headline_prefix: string;
  number_headline_value: string;
  compare_bad_amount: string;
  compare_bad_caption: string;
  compare_good_amount: string;
  compare_good_caption: string;
  stat_1_value: string;
  stat_1_label: string;
  stat_2_value: string;
  stat_2_label: string;
  stat_3_value: string;
  stat_3_label: string;
  stat_4_value: string;
  stat_4_label: string;
  number_payback_line: string;
}

export interface HowStep {
  step: string;
  title: string;
  desc: string;
}

export interface Testimonial {
  quote: string;
  name: string;
  city: string;
}

export interface FaqItem {
  q: string;
  a: string;
}

export interface FooterLink {
  label: string;
  href: string;
}

export interface HomeConfig {
  // Global
  cta_button_text: string;

  // Section 1: Hero
  hero_headline_line1: string;
  hero_headline_line2: string;
  hero_subhead: string;
  hero_cta_secondary: string;
  hero_trust: string[];
  hero_tax_banner_label: string;
  hero_tax_banner_body: string;
  hero_tax_banner_link_text: string;
  hero_tax_banner_link_url: string;

  // Section 2: The Number (existing)
  number_section_label: string;
  number_headline_prefix: string;
  number_headline_value: string;
  compare_bad_amount: string;
  compare_bad_caption: string;
  compare_good_amount: string;
  compare_good_caption: string;
  stat_1_value: string;
  stat_1_label: string;
  stat_2_value: string;
  stat_2_label: string;
  stat_3_value: string;
  stat_3_label: string;
  stat_4_value: string;
  stat_4_label: string;
  number_payback_line: string;

  // Section 3: How It Works
  how_headline_pre: string;
  how_headline_gold: string;
  how_steps: HowStep[];

  // Section 4: Inline Estimate
  estimate_headline_pre: string;
  estimate_headline_gold: string;
  estimate_headline_post: string;
  estimate_subtext: string;

  // Section 5: Proof / Testimonials
  proof_eyebrow: string;
  proof_headline_pre: string;
  proof_headline_gold: string;
  testimonials: Testimonial[];

  // Section 6: Meet Hugo
  about_headline_pre: string;
  about_headline_gold: string;
  about_body: string;
  about_credentials: string[];
  about_equipment_link: string;

  // Section 7: FAQ + Bottom CTA
  faq_headline_pre: string;
  faq_headline_gold: string;
  faqs: FaqItem[];
  final_cta_headline: string;
  final_cta_subtext: string;

  // Footer
  footer_tagline: string;
  footer_email: string;
  footer_copyright_year: string;
  footer_copyright_rights: string;
  footer_legal_line: string;
  footer_links: FooterLink[];
}

// ============ DEFAULTS ============

const SCALAR_DEFAULTS: Record<string, string> = {
  // Global
  cta_button_text: 'Get My Free Estimate',

  // Section 1: Hero
  hero_headline_line1: "The sun doesn't",
  hero_headline_line2: 'send a bill.',
  hero_subhead: 'How Northern California families are cutting the cord on PG&E — for less than the cost of a used car.',
  hero_cta_secondary: 'See How It Works',
  hero_tax_banner_label: 'California Tax Advantage:',
  hero_tax_banner_body: ' Systems completed by January 1, 2027 qualify for the property tax exclusion. ',
  hero_tax_banner_link_text: 'Learn more',
  hero_tax_banner_link_url: '/resources/california-solar-tax-exclusion-2024.pdf',

  // Section 2: The Number
  number_section_label: 'Total system cost',
  number_headline_prefix: 'Under',
  number_headline_value: '10000',
  compare_bad_amount: '$40,000+',
  compare_bad_caption: 'Traditional solar — loan, still grid-tied',
  compare_good_amount: 'Under $10,000',
  compare_good_caption: 'VoltSol / EG4 — off-grid capable',
  stat_1_value: '8,000+',
  stat_1_label: 'Battery Cycles',
  stat_2_value: '10-Year',
  stat_2_label: 'Warranty',
  stat_3_value: '25+ Year',
  stat_3_label: 'Panel Life',
  stat_4_value: '1–2 Day',
  stat_4_label: 'Install',
  number_payback_line: 'At $300/mo to PG&E, most systems pay for themselves in under 3 years.',

  // Section 3: How It Works
  how_headline_pre: 'Make it. Store it. ',
  how_headline_gold: 'Live on it.',

  // Section 4: Inline Estimate
  estimate_headline_pre: 'See your ',
  estimate_headline_gold: 'ballpark savings',
  estimate_headline_post: ' in seconds',
  estimate_subtext: 'Tap your monthly PG&E bill below to get started.',

  // Section 5: Proof / Testimonials
  proof_eyebrow: 'What Customers Say',
  proof_headline_pre: 'Real homes. ',
  proof_headline_gold: 'Real numbers.',

  // Section 6: Meet Hugo
  about_headline_pre: 'Meet ',
  about_headline_gold: 'Hugo',
  about_body: 'Hugo designs and installs every VoltSol system personally. When you call, he picks up.',
  about_equipment_link: 'Built on EG4 — See the equipment',

  // Section 7: FAQ + Bottom CTA
  faq_headline_pre: 'Straight ',
  faq_headline_gold: 'answers.',
  final_cta_headline: 'Ready to cut the cord on PG&E?',
  final_cta_subtext: 'Get a free, no-obligation estimate — see exactly what your home could save.',

  // Footer
  footer_tagline: 'Clean energy, built to last.',
  footer_email: 'info@voltsolenergy.com',
  footer_copyright_year: '2026',
  footer_copyright_rights: 'LLC. All rights reserved.',
  footer_legal_line: 'CSLB License # pending · Northern California',
};

const ARRAY_DEFAULTS = {
  hero_trust: ['Licensed', 'Local', 'Off-Grid Capable', 'No Pressure'] as string[],
  how_steps: [
    { step: '01', title: 'MAKE IT', desc: 'Solar panels turn free sunlight into power.' },
    { step: '02', title: 'STORE IT', desc: 'EG4 battery banks it for night and blackouts.' },
    { step: '03', title: 'LIVE ON IT', desc: 'Your home runs on stored sun — heating and cooling included.' },
  ] as HowStep[],
  testimonials: [
    { quote: 'Our PG&E bill went from $340 to almost nothing — and we kept the lights on during a 2-day blackout.', name: 'Maria S.', city: 'Redding' },
    { quote: 'SunPower quoted $38,000. Hugo did the whole thing for under ten grand.', name: 'David R.', city: 'Chico' },
    { quote: 'First summer with no AC bill. First winter with no gas bill.', name: 'Carmen L.', city: 'Grass Valley' },
  ] as Testimonial[],
  about_credentials: ['CSLB Licensed', 'Northern California Native', 'Every Install Done Personally', 'Answers His Phone'] as string[],
  footer_links: [
    { label: 'How It Works', href: '/#how' },
    { label: 'Technology', href: '/#systems' },
    { label: 'FAQ', href: '/#faq' },
    { label: 'Get My Free Estimate', href: '/book' },
    { label: 'Get a Quote', href: '/#quote' },
    { label: 'Privacy Policy', href: '/privacy' },
  ] as FooterLink[],
  faqs: [
    { q: "What does a system cost, and what's included?", a: "Under $10,000 all-in — solar panels, EG4 hybrid inverter, EG4 LiFePO4 battery, mini-split heat pump, and full installation. Your free estimate shows the exact number for your home." },
    { q: "What's the difference between off-grid and grid-tie solar?", a: "Grid-tie solar feeds power back to PG&E and shuts off during blackouts — you stay dependent on the utility. Our systems are off-grid capable: the battery runs your home directly, so you can keep the grid as backup or cut it entirely." },
    { q: "Do I need permits?", a: "Yes, and we handle them. Permitting and county paperwork are included in every install — you don't file a single form." },
    { q: "How long do the batteries last?", a: "EG4 LiFePO4 batteries are rated for 8,000 cycles — roughly 20 years of daily use — and carry a 10-year manufacturer warranty." },
    { q: "How long does installation take?", a: "Most installs are done in 1–2 days. From your free estimate to power-on is typically 2–4 weeks, depending on county permit turnaround." },
  ] as FaqItem[],
};

// For back-compat with existing getNumberSectionConfig
const DEFAULTS: NumberSectionConfig = {
  number_section_label: SCALAR_DEFAULTS.number_section_label,
  number_headline_prefix: SCALAR_DEFAULTS.number_headline_prefix,
  number_headline_value: SCALAR_DEFAULTS.number_headline_value,
  compare_bad_amount: SCALAR_DEFAULTS.compare_bad_amount,
  compare_bad_caption: SCALAR_DEFAULTS.compare_bad_caption,
  compare_good_amount: SCALAR_DEFAULTS.compare_good_amount,
  compare_good_caption: SCALAR_DEFAULTS.compare_good_caption,
  stat_1_value: SCALAR_DEFAULTS.stat_1_value,
  stat_1_label: SCALAR_DEFAULTS.stat_1_label,
  stat_2_value: SCALAR_DEFAULTS.stat_2_value,
  stat_2_label: SCALAR_DEFAULTS.stat_2_label,
  stat_3_value: SCALAR_DEFAULTS.stat_3_value,
  stat_3_label: SCALAR_DEFAULTS.stat_3_label,
  stat_4_value: SCALAR_DEFAULTS.stat_4_value,
  stat_4_label: SCALAR_DEFAULTS.stat_4_label,
  number_payback_line: SCALAR_DEFAULTS.number_payback_line,
};

// All allowed keys for whitelist
const ARRAY_KEYS = ['hero_trust', 'how_steps', 'testimonials', 'about_credentials', 'faqs', 'footer_links'] as const;
const ALL_KEYS = [...Object.keys(SCALAR_DEFAULTS), ...ARRAY_KEYS];

// ============ HELPERS ============

function safeParseJson<T>(value: string | undefined, fallback: T): T {
  if (!value) return fallback;
  try {
    return JSON.parse(value) as T;
  } catch {
    return fallback;
  }
}

function isValidJson(value: string): boolean {
  try {
    JSON.parse(value);
    return true;
  } catch {
    return false;
  }
}

// ============ PUBLIC FUNCTIONS ============

/**
 * Get the Number Section config for the homepage (back-compat).
 * Falls back to DEFAULTS if DB is unavailable or table missing.
 */
export async function getNumberSectionConfig(): Promise<NumberSectionConfig> {
  try {
    const rows = await sql`SELECT key, value FROM site_config`;
    const dbValues: Record<string, string> = {};
    for (const row of rows) {
      dbValues[row.key] = row.value;
    }
    return {
      ...DEFAULTS,
      ...Object.fromEntries(
        Object.keys(DEFAULTS).map((k) => [k, dbValues[k] ?? DEFAULTS[k as keyof NumberSectionConfig]])
      ),
    } as NumberSectionConfig;
  } catch {
    return DEFAULTS;
  }
}

/**
 * Get the full homepage config with all sections.
 * Falls back to defaults if DB is unavailable.
 */
export async function getHomeConfig(): Promise<HomeConfig> {
  try {
    const rows = await sql`SELECT key, value FROM site_config`;
    const dbValues: Record<string, string> = {};
    for (const row of rows) {
      dbValues[row.key] = row.value;
    }

    // Merge scalar values
    const scalars: Record<string, string> = {};
    for (const key of Object.keys(SCALAR_DEFAULTS)) {
      scalars[key] = dbValues[key] ?? SCALAR_DEFAULTS[key];
    }

    // Parse array values with fallback
    const hero_trust = safeParseJson<string[]>(dbValues.hero_trust, ARRAY_DEFAULTS.hero_trust);
    const how_steps = safeParseJson<HowStep[]>(dbValues.how_steps, ARRAY_DEFAULTS.how_steps);
    const testimonials = safeParseJson<Testimonial[]>(dbValues.testimonials, ARRAY_DEFAULTS.testimonials);
    const about_credentials = safeParseJson<string[]>(dbValues.about_credentials, ARRAY_DEFAULTS.about_credentials);
    const faqs = safeParseJson<FaqItem[]>(dbValues.faqs, ARRAY_DEFAULTS.faqs);
    const footer_links = safeParseJson<FooterLink[]>(dbValues.footer_links, ARRAY_DEFAULTS.footer_links);

    return {
      ...scalars,
      hero_trust,
      how_steps,
      testimonials,
      about_credentials,
      faqs,
      footer_links,
    } as HomeConfig;
  } catch {
    // DB error — return full defaults
    return {
      ...SCALAR_DEFAULTS,
      ...ARRAY_DEFAULTS,
    } as HomeConfig;
  }
}

/**
 * Get all config as a key-value map (for admin editor).
 * Array values are returned as JSON strings.
 */
export async function getAllConfig(): Promise<Record<string, string>> {
  try {
    const rows = await sql`SELECT key, value FROM site_config`;
    const dbValues: Record<string, string> = {};
    for (const row of rows) {
      dbValues[row.key] = row.value;
    }

    const result: Record<string, string> = {};

    // Add scalar defaults
    for (const key of Object.keys(SCALAR_DEFAULTS)) {
      result[key] = dbValues[key] ?? SCALAR_DEFAULTS[key];
    }

    // Add array defaults (as JSON strings)
    for (const key of ARRAY_KEYS) {
      result[key] = dbValues[key] ?? JSON.stringify(ARRAY_DEFAULTS[key]);
    }

    return result;
  } catch {
    // Return defaults on error
    const result: Record<string, string> = {};
    for (const key of Object.keys(SCALAR_DEFAULTS)) {
      result[key] = SCALAR_DEFAULTS[key];
    }
    for (const key of ARRAY_KEYS) {
      result[key] = JSON.stringify(ARRAY_DEFAULTS[key]);
    }
    return result;
  }
}

/**
 * Update config values. Only allows known keys.
 * For array keys, validates JSON before writing.
 */
export async function updateConfig(
  updates: Record<string, string>,
  updatedBy: string
): Promise<void> {
  for (const [key, value] of Object.entries(updates)) {
    // Only allow known keys
    if (!ALL_KEYS.includes(key)) continue;

    // For array keys, validate JSON before writing
    if (ARRAY_KEYS.includes(key as typeof ARRAY_KEYS[number])) {
      if (!isValidJson(value)) continue;
    }

    await sql`
      INSERT INTO site_config (key, value, updated_by, updated_at)
      VALUES (${key}, ${value}, ${updatedBy}, NOW())
      ON CONFLICT (key) DO UPDATE SET
        value = EXCLUDED.value,
        updated_at = NOW(),
        updated_by = EXCLUDED.updated_by
    `;
  }
}
