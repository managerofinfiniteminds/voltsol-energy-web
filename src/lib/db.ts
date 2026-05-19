import { neon } from '@neondatabase/serverless';

let _sql: ReturnType<typeof neon> | null = null;

export function getDb() {
  if (!_sql) {
    const url = process.env.NEON_DATABASE_URL;
    if (!url) throw new Error('NEON_DATABASE_URL is not set');
    _sql = neon(url);
  }
  return _sql;
}

// Lazy proxy — only initializes on first call
export const sql = new Proxy({} as ReturnType<typeof neon>, {
  get(_target, prop) {
    return (getDb() as any)[prop];
  },
  apply(_target, _thisArg, args) {
    return (getDb() as any)(...args);
  }
}) as unknown as ReturnType<typeof neon>;
