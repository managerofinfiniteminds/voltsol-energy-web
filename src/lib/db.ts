import { neon } from '@neondatabase/serverless';

let _sql: ReturnType<typeof neon> | null = null;

function getDb(): ReturnType<typeof neon> {
  if (!_sql) {
    const url = process.env.NEON_DATABASE_URL || process.env.DATABASE_URL;
    if (!url) throw new Error('NEON_DATABASE_URL or DATABASE_URL is not set');
    // Disable Next.js fetch caching on DB reads. The Neon serverless driver
    // queries via fetch(), which Next caches even on force-dynamic routes —
    // that would serve stale config and break live (no-deploy) CMS edits.
    _sql = neon(url, { fetchOptions: { cache: 'no-store' } });
  }
  return _sql;
}

// Typed wrapper that always returns Promise<any[]> for clean TS usage
// eslint-disable-next-line @typescript-eslint/no-explicit-any
type SqlFn = (strings: TemplateStringsArray, ...values: any[]) => Promise<any[]>;

export const sql: SqlFn = (strings, ...values) => {
  return getDb()(strings, ...values) as Promise<any[]>;
};

// Raw parameterized query escape hatch for cases the tagged-template form
// can't express (e.g. a dynamic ORDER BY chosen from a small fixed set of
// query strings). Never interpolate raw user input into `text` itself —
// only ever pass user-derived values via `params`.
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function sqlRaw(text: string, params: any[] = []): Promise<any[]> {
  return getDb()(text, params) as Promise<any[]>;
}
