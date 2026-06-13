/**
 * VoltSol Lead Engine — Canonical Enums
 * Single source of truth for all qualifying signal values.
 * Both site forms and SEO forms map to these before POSTing to the engine.
 */

import { z } from 'zod';

// ─────────────────────────────────────────────────────────────
// owns_home
// ─────────────────────────────────────────────────────────────
export const OWNS_HOME_VALUES = ['own', 'rent', 'unsure'] as const;
export type OwnsHome = (typeof OWNS_HOME_VALUES)[number];
export const OwnsHomeSchema = z.enum(OWNS_HOME_VALUES);

export const OWNS_HOME_LABELS: Record<OwnsHome, string> = {
  own: 'Owns home',
  rent: 'Renter',
  unsure: 'Unsure',
};

/** Map legacy form values to canonical */
export function mapOwnsHome(raw: string | null | undefined): OwnsHome {
  if (!raw) return 'unsure';
  const normalized = raw.toLowerCase().trim();

  // Site forms: "Yes, I own it", "No, I rent", "Not sure"
  if (normalized.includes('own') || normalized === 'yes') return 'own';
  if (normalized.includes('rent') || normalized === 'no') return 'rent';

  // Already canonical
  if (normalized === 'own') return 'own';
  if (normalized === 'rent') return 'rent';

  return 'unsure';
}

// ─────────────────────────────────────────────────────────────
// monthly_bill
// ─────────────────────────────────────────────────────────────
export const MONTHLY_BILL_VALUES = ['lt_100', '100_200', '200_300', 'gt_300'] as const;
export type MonthlyBill = (typeof MONTHLY_BILL_VALUES)[number];
export const MonthlyBillSchema = z.enum(MONTHLY_BILL_VALUES);

export const MONTHLY_BILL_LABELS: Record<MonthlyBill, string> = {
  lt_100: '<$100',
  '100_200': '$100–$200',
  '200_300': '$200–$300',
  gt_300: '$300+',
};

/** Map legacy form values to canonical */
export function mapMonthlyBill(raw: string | null | undefined): MonthlyBill {
  if (!raw) return '100_200'; // default to middle bucket
  const normalized = raw.toLowerCase().trim();

  // Extract numbers to determine bucket
  const numbers = normalized.match(/\d+/g);

  // Handle "Under $100", "<$100", "$0-$100", etc.
  if (normalized.includes('under') || normalized.startsWith('<')) {
    return 'lt_100';
  }

  // Handle "$300+", "$300 or more", ">$300", "over $300"
  if (normalized.includes('+') || normalized.includes('over') || normalized.startsWith('>')) {
    return 'gt_300';
  }

  // Parse ranges like "$100-$200", "$100–$200", "$200-$250", "$200–$300"
  if (numbers && numbers.length >= 1) {
    const first = parseInt(numbers[0], 10);

    // Determine bucket by the starting value
    if (first < 100) return 'lt_100';
    if (first >= 100 && first < 200) return '100_200';
    if (first >= 200 && first < 300) return '200_300';
    if (first >= 300) return 'gt_300';
  }

  // Already canonical values
  if (normalized === 'lt_100') return 'lt_100';
  if (normalized === '100_200') return '100_200';
  if (normalized === '200_300') return '200_300';
  if (normalized === 'gt_300') return 'gt_300';

  // Default fallback
  return '100_200';
}

// ─────────────────────────────────────────────────────────────
// timeline
// ─────────────────────────────────────────────────────────────
export const TIMELINE_VALUES = ['asap', '1_3mo', '3_6mo', 'exploring'] as const;
export type Timeline = (typeof TIMELINE_VALUES)[number];
export const TimelineSchema = z.enum(TIMELINE_VALUES);

export const TIMELINE_LABELS: Record<Timeline, string> = {
  asap: 'ASAP',
  '1_3mo': '1–3 months',
  '3_6mo': '3–6 months',
  exploring: 'Just exploring',
};

// ─────────────────────────────────────────────────────────────
// utility
// ─────────────────────────────────────────────────────────────
export const UTILITY_VALUES = ['pge', 'smud', 'sce', 'other'] as const;
export type Utility = (typeof UTILITY_VALUES)[number];
export const UtilitySchema = z.enum(UTILITY_VALUES);

export const UTILITY_LABELS: Record<Utility, string> = {
  pge: 'PG&E',
  smud: 'SMUD',
  sce: 'SCE',
  other: 'Other',
};

// ─────────────────────────────────────────────────────────────
// roof_shade
// ─────────────────────────────────────────────────────────────
export const ROOF_SHADE_VALUES = ['full_sun', 'some_shade', 'mostly_shaded'] as const;
export type RoofShade = (typeof ROOF_SHADE_VALUES)[number];
export const RoofShadeSchema = z.enum(ROOF_SHADE_VALUES);

export const ROOF_SHADE_LABELS: Record<RoofShade, string> = {
  full_sun: 'Full sun',
  some_shade: 'Some shade',
  mostly_shaded: 'Mostly shaded',
};

// ─────────────────────────────────────────────────────────────
// Lead status
// ─────────────────────────────────────────────────────────────
export const LEAD_STATUS_VALUES = ['new', 'contacted', 'quoted', 'won', 'lost', 'stale'] as const;
export type LeadStatus = (typeof LEAD_STATUS_VALUES)[number];
export const LeadStatusSchema = z.enum(LEAD_STATUS_VALUES);

// ─────────────────────────────────────────────────────────────
// Lead score
// ─────────────────────────────────────────────────────────────
export const LEAD_SCORE_VALUES = ['hot_lead', 'standard', 'low_priority'] as const;
export type LeadScore = (typeof LEAD_SCORE_VALUES)[number];
export const LeadScoreSchema = z.enum(LEAD_SCORE_VALUES);
