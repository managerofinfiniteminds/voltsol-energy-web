import { cookies, headers } from 'next/headers';

export type Locale = 'en' | 'es';
export const LOCALE_COOKIE = 'lang';
export const SUPPORTED_LOCALES: Locale[] = ['en', 'es'];
export const DEFAULT_LOCALE: Locale = 'en';

export function isLocale(v: string | undefined | null): v is Locale {
  return v === 'en' || v === 'es';
}

/**
 * Resolve the active locale for a server component / route.
 * Priority: explicit `lang` cookie → browser Accept-Language → default (en).
 * The cookie is the source of truth once set (by middleware on first visit
 * or by the in-header toggle). This function never mutates state.
 */
export function getLocale(): Locale {
  const cookieVal = cookies().get(LOCALE_COOKIE)?.value;
  if (isLocale(cookieVal)) return cookieVal;

  // No cookie yet (e.g. edge cases) — sniff the browser header as a fallback.
  const accept = headers().get('accept-language') || '';
  if (detectFromAcceptLanguage(accept) === 'es') return 'es';

  return DEFAULT_LOCALE;
}

/**
 * Parse an Accept-Language header and decide en vs es.
 * Returns 'es' only when Spanish outranks English (or English is absent).
 */
export function detectFromAcceptLanguage(accept: string): Locale {
  if (!accept) return 'en';
  // Build a ranked list of [lang, q] pairs.
  const ranked = accept
    .split(',')
    .map((part) => {
      const [tag, ...params] = part.trim().split(';');
      const qParam = params.find((p) => p.trim().startsWith('q='));
      const q = qParam ? parseFloat(qParam.split('=')[1]) : 1;
      return { lang: tag.toLowerCase(), q: Number.isFinite(q) ? q : 1 };
    })
    .sort((a, b) => b.q - a.q);

  for (const { lang } of ranked) {
    if (lang.startsWith('es')) return 'es';
    if (lang.startsWith('en')) return 'en';
  }
  return 'en';
}
