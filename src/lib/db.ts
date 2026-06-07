import { neon } from '@neondatabase/serverless';

let _sql: ReturnType<typeof neon> | null = null;

function getDb(): ReturnType<typeof neon> {
  if (!_sql) {
    const url = process.env.NEON_DATABASE_URL;
    if (!url) throw new Error('NEON_DATABASE_URL is not set');
    _sql = neon(url);
  }
  return _sql;
}

// Typed wrapper that always returns Promise<any[]> for clean TS usage
// eslint-disable-next-line @typescript-eslint/no-explicit-any
type SqlFn = (strings: TemplateStringsArray, ...values: any[]) => Promise<any[]>;

export const sql: SqlFn = (strings, ...values) => {
  return getDb()(strings, ...values) as Promise<any[]>;
};
