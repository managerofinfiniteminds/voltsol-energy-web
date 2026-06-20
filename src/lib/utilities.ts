import { sql } from '@/lib/db';

export interface Utility {
  id: number;
  name: string;
  sort_order: number;
  is_active: boolean;
}

/** Active utilities for the public dropdown, ordered for display. */
export async function getActiveUtilities(): Promise<Utility[]> {
  const rows = await sql`
    SELECT id, name, sort_order, is_active
    FROM utilities
    WHERE is_active = true
    ORDER BY sort_order, name
  `;
  return rows as Utility[];
}

/** All utilities (active + inactive) for the admin console. */
export async function getAllUtilities(): Promise<Utility[]> {
  const rows = await sql`
    SELECT id, name, sort_order, is_active
    FROM utilities
    ORDER BY sort_order, name
  `;
  return rows as Utility[];
}
