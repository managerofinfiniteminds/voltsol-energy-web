import { NextRequest, NextResponse } from 'next/server';

// Feature flags (read directly from env for Edge runtime)
const PARTNER_SIGNUP = process.env.FLAG_PARTNER_SIGNUP === 'true';

// Decide en vs es from an Accept-Language header (Spanish wins only if it
// outranks English). Mirrors src/lib/locale.ts for the Edge runtime.
function detectLocale(accept: string): 'en' | 'es' {
  if (!accept) return 'en';
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

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  // Language auto-detect: on first visit (no `lang` cookie), sniff the
  // browser's preferred language and persist it. Spanish browsers get
  // Spanish automatically; everyone else gets English. The in-header
  // EN|ES toggle overwrites this cookie on demand. Skip for asset/api paths.
  const hasLangCookie = req.cookies.has('lang');
  const isAsset =
    pathname.startsWith('/_next') ||
    pathname.startsWith('/api') ||
    pathname.includes('.');
  let langToSet: 'en' | 'es' | null = null;
  if (!hasLangCookie && !isAsset) {
    langToSet = detectLocale(req.headers.get('accept-language') || '');
  }

  // Protect /admin routes (but not /admin/login, /admin/auth, or /admin/seo-strategy)
  // This is a COARSE gate: only checks cookie presence, not validity.
  // Real session validation (token vs DB) happens in getAdminSession() inside each route/page.
  if (
    pathname.startsWith('/admin') &&
    !pathname.startsWith('/admin/login') &&
    !pathname.startsWith('/admin/auth') &&
    !pathname.startsWith('/admin/seo-strategy')
  ) {
    const session = req.cookies.get('admin_session')?.value;
    if (!session) {
      return NextResponse.redirect(new URL('/admin/login', req.url));
    }
  }

  // Gate /app/signup behind PARTNER_SIGNUP flag (redirect to login when disabled)
  if (pathname.startsWith('/app/signup') && !PARTNER_SIGNUP) {
    return NextResponse.redirect(new URL('/app/login', req.url));
  }

  // Protect /app/* marketplace routes (but not /app/login or /app/signup)
  if (
    pathname.startsWith('/app/') &&
    !pathname.startsWith('/app/login') &&
    !pathname.startsWith('/app/signup')
  ) {
    const token = req.cookies.get('mp_session')?.value;
    if (!token) {
      return NextResponse.redirect(new URL('/app/login', req.url));
    }
  }

  const res = NextResponse.next();
  if (langToSet) {
    res.cookies.set('lang', langToSet, {
      path: '/',
      maxAge: 60 * 60 * 24 * 365, // 1 year
      sameSite: 'lax',
    });
  }
  return res;
}

export const config = {
  // Run on all customer-facing paths (not just admin/app) so language
  // auto-detect fires site-wide, while excluding Next internals + assets.
  matcher: ['/((?!_next/static|_next/image|favicon.ico).*)'],
};
