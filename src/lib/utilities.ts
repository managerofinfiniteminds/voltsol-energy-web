import { sql } from '@/lib/db';

export interface Utility {
  id: number;
  name: string;
  sort_order: number;
  is_active: boolean;
  state: string;
}

/** Default state when a caller doesn't specify one (VoltSol's home market). */
export const DEFAULT_UTILITY_STATE = 'CA';

/** Normalize any state input to the stored 2-letter uppercase code. */
export function normalizeState(input?: string | null): string {
  if (!input) return DEFAULT_UTILITY_STATE;
  const raw = input.trim();
  if (!raw) return DEFAULT_UTILITY_STATE;
  // Accept full names from URL slugs / address fields as well as abbreviations.
  const map: Record<string, string> = {
    california: 'CA',
    ca: 'CA',
    texas: 'TX',
    tx: 'TX',
  };
  const key = raw.toLowerCase();
  if (map[key]) return map[key];
  // Fall back to the first two letters uppercased (covers other USPS codes).
  return raw.slice(0, 2).toUpperCase();
}

/** Active utilities for the public dropdown in a given state, display-ordered. */
export async function getActiveUtilities(state?: string | null): Promise<Utility[]> {
  const st = normalizeState(state);
  const rows = await sql`
    SELECT id, name, sort_order, is_active, state
    FROM utilities
    WHERE is_active = true AND state = ${st}
    ORDER BY sort_order, name
  `;
  return rows as Utility[];
}

/** All utilities (active + inactive) for the admin console, optionally by state. */
export async function getAllUtilities(state?: string | null): Promise<Utility[]> {
  if (state) {
    const st = normalizeState(state);
    const rows = await sql`
      SELECT id, name, sort_order, is_active, state
      FROM utilities
      WHERE state = ${st}
      ORDER BY sort_order, name
    `;
    return rows as Utility[];
  }
  const rows = await sql`
    SELECT id, name, sort_order, is_active, state
    FROM utilities
    ORDER BY state, sort_order, name
  `;
  return rows as Utility[];
}

/** Distinct states that currently have at least one active utility. */
export async function getSupportedStates(): Promise<string[]> {
  const rows = await sql`
    SELECT DISTINCT state
    FROM utilities
    WHERE is_active = true
    ORDER BY state
  `;
  return (rows as { state: string }[]).map(r => r.state);
}
