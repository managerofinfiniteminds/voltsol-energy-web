'use client';

import { useRouter } from 'next/navigation';
import { Check } from 'lucide-react';
import { cn } from '@/lib/utils';

// Bill options matching EstimateFlow Step 0
const BILL_OPTIONS = [
  { value: 'lt_100', label: 'Under $150', sub: 'Light usage' },
  { value: '100_200', label: '$150–$300', sub: 'Average home' },
  { value: '200_300', label: '$300–$500', sub: 'Higher usage' },
  { value: 'gt_300', label: '$500+', sub: 'Very high usage' },
] as const;

export default function InlineEstimateEntry() {
  const router = useRouter();

  function handleSelect(bill: string) {
    // Navigate to /start with the bill preselected via query param
    router.push(`/start?bill=${encodeURIComponent(bill)}`);
  }

  return (
    <div className="grid grid-cols-2 gap-3 sm:gap-4">
      {BILL_OPTIONS.map((opt) => (
        <button
          key={opt.value}
          type="button"
          onClick={() => handleSelect(opt.value)}
          className={cn(
            'flex flex-col items-center justify-center p-5 rounded-xl border-2 text-center transition-all duration-150',
            'border-blue-900 bg-navy-700/50 text-blue-100 hover:border-gold hover:bg-gold/10 hover:text-white'
          )}
        >
          <span className="font-bold text-xl leading-tight">{opt.label}</span>
          <span className="text-xs text-blue-300 mt-1">{opt.sub}</span>
        </button>
      ))}
    </div>
  );
}
