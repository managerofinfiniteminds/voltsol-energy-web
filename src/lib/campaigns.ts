import { sql } from './db';

export interface Campaign {
  id: number;
  code: string;
  name: string;
  source_type: string;
  description: string | null;
  is_active: boolean;
  created_at: string;
}

export async function getCampaignByCode(code: string): Promise<Campaign | null> {
  const rows = await sql`
    SELECT * FROM campaigns
    WHERE LOWER(code) = LOWER(${code})
    AND is_active = true
    LIMIT 1
  `;
  return (rows[0] as Campaign) ?? null;
}

export async function getAllCampaigns(): Promise<(Campaign & { lead_count: number })[]> {
  const rows = await sql`
    SELECT c.*, COUNT(con.id)::int AS lead_count
    FROM campaigns c
    LEFT JOIN contacts con ON con.campaign_id = c.id
    GROUP BY c.id
    ORDER BY c.created_at DESC
  `;
  return rows as (Campaign & { lead_count: number })[];
}

export async function createCampaign(code: string, name: string, source_type: string): Promise<Campaign> {
  const rows = await sql`
    INSERT INTO campaigns (code, name, source_type)
    VALUES (${code.toUpperCase()}, ${name}, ${source_type})
    RETURNING *
  `;
  return rows[0] as Campaign;
}

export async function toggleCampaignActive(id: number, is_active: boolean): Promise<void> {
  await sql`
    UPDATE campaigns SET is_active = ${is_active} WHERE id = ${id}
  `;
}
