'use client';

import { useRouter } from 'next/navigation';
import { cn } from '@/lib/utils';
import { track } from '@/lib/track';
import { getDict } from '@/lib/i18n';
import type { Locale } from '@/lib/locale';

export default function InlineEstimateEntry({ locale = 'en' }: { locale?: Locale }) {
  const router = useRouter();
  const t = getDict(locale);
  const BILL_OPTIONS = [
    { value: 'lt_100', label: t.bill_lt_100, sub: t.bill_lt_100_sub },
    { value: '100_200', label: t.bill_100_200, sub: t.bill_100_200_sub },
    { value: '200_300', label: t.bill_200_300, sub: t.bill_200_300_sub },
    { value: 'gt_300', label: t.bill_gt_300, sub: t.bill_gt_300_sub },
  ] as const;

  function handleSelect(bill: string, label: string) {
    // Track the CTA click
    track('cta_click', { location: 'inline_capture', bill_band: bill, label });
    track('flow_step_complete', { step_index: 0, answer: { monthly_bill: bill } });

    // Navigate to /start with the bill preselected via query param
    router.push(`/start?bill=${encodeURIComponent(bill)}`);
  }

  return (
    <div className="grid grid-cols-2 gap-3 sm:gap-4">
      {BILL_OPTIONS.map((opt) => (
        <button
          key={opt.value}
          type="button"
          onClick={() => handleSelect(opt.value, opt.label)}
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
