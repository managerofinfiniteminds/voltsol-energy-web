export type LeadScore = 'hot_lead' | 'standard' | 'low_priority';

export function scoreLead(ownsHome: string, monthlyBill: string): LeadScore {
  if (ownsHome === 'Yes, I own it' && (monthlyBill === '$200–$300' || monthlyBill === '$300+')) {
    return 'hot_lead';
  }
  if (ownsHome === 'No, I rent') {
    return 'low_priority';
  }
  return 'standard';
}
