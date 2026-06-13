/**
 * VoltSol Lead Engine — Canonical Scoring
 * Single scoring function consuming ONLY canonical enum values.
 */

import type { OwnsHome, MonthlyBill, LeadScore } from './engine-enums';

interface ScoreInput {
  ownsHome: OwnsHome | null | undefined;
  monthlyBill: MonthlyBill | null | undefined;
  timeline?: string | null; // reserved for future bump logic
}

/**
 * Canonical lead scoring per spec §4:
 * - hot_lead = own AND (200_300 OR gt_300)
 * - low_priority = rent
 * - standard = everything else
 */
export function scoreLead({ ownsHome, monthlyBill }: ScoreInput): LeadScore {
  // Hot lead: homeowner with high bill
  if (
    ownsHome === 'own' &&
    (monthlyBill === '200_300' || monthlyBill === 'gt_300')
  ) {
    return 'hot_lead';
  }

  // Low priority: renter
  if (ownsHome === 'rent') {
    return 'low_priority';
  }

  // Everything else
  return 'standard';
}
