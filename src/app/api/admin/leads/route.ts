export const dynamic = 'force-dynamic';

import { cookies } from 'next/headers';
import { NextRequest, NextResponse } from 'next/server';
import { sql } from '@/lib/db';

function isAuthenticated(): boolean {
  const session = cookies().get('admin_session')?.value;
  return session === 'authenticated';
}

/**
 * GET /api/admin/leads
 * Fetch all engine_leads for tenant_id=1 (Hugo), sorted by triage priority.
 * Query params: status, score, city
 */
export async function GET(req: NextRequest) {
  if (!isAuthenticated()) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const { searchParams } = new URL(req.url);
  const status = searchParams.get('status');
  const score = searchParams.get('score');
  const city = searchParams.get('city');

  try {
    // Build WHERE clauses
    const conditions: string[] = ['tenant_id = 1'];
    const params: (string | number)[] = [];
    let paramIndex = 1;

    if (status) {
      conditions.push(`status = $${paramIndex++}`);
      params.push(status);
    }
    if (score) {
      conditions.push(`score = $${paramIndex++}`);
      params.push(score);
    }
    if (city) {
      conditions.push(`LOWER(city) = LOWER($${paramIndex++})`);
      params.push(city);
    }

    // Triage sort: score (hot first), then timeline asap-first, then monthly_bill desc, then recency
    // Score priority: hot_lead > standard > low_priority
    // Timeline priority: asap > 1_3mo > 3_6mo > exploring > null
    // Bill priority: gt_300 > 200_300 > 100_200 > lt_100
    const query = `
      SELECT
        id, tenant_id, vertical, source_consumer, source_page,
        first_name, last_name, email, phone,
        street_address, city, state, zip,
        owns_home, monthly_bill, timeline, utility, roof_shade,
        intent, notes,
        score, status, sale_value,
        attribution_json, consent_json, ip_address,
        created_at, updated_at
      FROM engine_leads
      WHERE ${conditions.join(' AND ')}
      ORDER BY
        CASE score
          WHEN 'hot_lead' THEN 1
          WHEN 'standard' THEN 2
          WHEN 'low_priority' THEN 3
          ELSE 4
        END ASC,
        CASE timeline
          WHEN 'asap' THEN 1
          WHEN '1_3mo' THEN 2
          WHEN '3_6mo' THEN 3
          WHEN 'exploring' THEN 4
          ELSE 5
        END ASC,
        CASE monthly_bill
          WHEN 'gt_300' THEN 1
          WHEN '200_300' THEN 2
          WHEN '100_200' THEN 3
          WHEN 'lt_100' THEN 4
          ELSE 5
        END ASC,
        created_at DESC
      LIMIT 500
    `;

    // Use tagged template for parameterized query
    let rows;
    if (params.length === 0) {
      rows = await sql`
        SELECT
          id, tenant_id, vertical, source_consumer, source_page,
          first_name, last_name, email, phone,
          street_address, city, state, zip,
          owns_home, monthly_bill, timeline, utility, roof_shade,
          intent, notes,
          score, status, sale_value,
          attribution_json, consent_json, ip_address,
          created_at, updated_at
        FROM engine_leads
        WHERE tenant_id = 1
        ORDER BY
          CASE score
            WHEN 'hot_lead' THEN 1
            WHEN 'standard' THEN 2
            WHEN 'low_priority' THEN 3
            ELSE 4
          END ASC,
          CASE timeline
            WHEN 'asap' THEN 1
            WHEN '1_3mo' THEN 2
            WHEN '3_6mo' THEN 3
            WHEN 'exploring' THEN 4
            ELSE 5
          END ASC,
          CASE monthly_bill
            WHEN 'gt_300' THEN 1
            WHEN '200_300' THEN 2
            WHEN '100_200' THEN 3
            WHEN 'lt_100' THEN 4
            ELSE 5
          END ASC,
          created_at DESC
        LIMIT 500
      `;
    } else if (params.length === 1) {
      const [p1] = params;
      if (status) {
        rows = await sql`
          SELECT
            id, tenant_id, vertical, source_consumer, source_page,
            first_name, last_name, email, phone,
            street_address, city, state, zip,
            owns_home, monthly_bill, timeline, utility, roof_shade,
            intent, notes,
            score, status, sale_value,
            attribution_json, consent_json, ip_address,
            created_at, updated_at
          FROM engine_leads
          WHERE tenant_id = 1 AND status = ${p1}
          ORDER BY
            CASE score WHEN 'hot_lead' THEN 1 WHEN 'standard' THEN 2 WHEN 'low_priority' THEN 3 ELSE 4 END ASC,
            CASE timeline WHEN 'asap' THEN 1 WHEN '1_3mo' THEN 2 WHEN '3_6mo' THEN 3 WHEN 'exploring' THEN 4 ELSE 5 END ASC,
            CASE monthly_bill WHEN 'gt_300' THEN 1 WHEN '200_300' THEN 2 WHEN '100_200' THEN 3 WHEN 'lt_100' THEN 4 ELSE 5 END ASC,
            created_at DESC
          LIMIT 500
        `;
      } else if (score) {
        rows = await sql`
          SELECT
            id, tenant_id, vertical, source_consumer, source_page,
            first_name, last_name, email, phone,
            street_address, city, state, zip,
            owns_home, monthly_bill, timeline, utility, roof_shade,
            intent, notes,
            score, status, sale_value,
            attribution_json, consent_json, ip_address,
            created_at, updated_at
          FROM engine_leads
          WHERE tenant_id = 1 AND score = ${p1}
          ORDER BY
            CASE score WHEN 'hot_lead' THEN 1 WHEN 'standard' THEN 2 WHEN 'low_priority' THEN 3 ELSE 4 END ASC,
            CASE timeline WHEN 'asap' THEN 1 WHEN '1_3mo' THEN 2 WHEN '3_6mo' THEN 3 WHEN 'exploring' THEN 4 ELSE 5 END ASC,
            CASE monthly_bill WHEN 'gt_300' THEN 1 WHEN '200_300' THEN 2 WHEN '100_200' THEN 3 WHEN 'lt_100' THEN 4 ELSE 5 END ASC,
            created_at DESC
          LIMIT 500
        `;
      } else {
        rows = await sql`
          SELECT
            id, tenant_id, vertical, source_consumer, source_page,
            first_name, last_name, email, phone,
            street_address, city, state, zip,
            owns_home, monthly_bill, timeline, utility, roof_shade,
            intent, notes,
            score, status, sale_value,
            attribution_json, consent_json, ip_address,
            created_at, updated_at
          FROM engine_leads
          WHERE tenant_id = 1 AND LOWER(city) = LOWER(${p1})
          ORDER BY
            CASE score WHEN 'hot_lead' THEN 1 WHEN 'standard' THEN 2 WHEN 'low_priority' THEN 3 ELSE 4 END ASC,
            CASE timeline WHEN 'asap' THEN 1 WHEN '1_3mo' THEN 2 WHEN '3_6mo' THEN 3 WHEN 'exploring' THEN 4 ELSE 5 END ASC,
            CASE monthly_bill WHEN 'gt_300' THEN 1 WHEN '200_300' THEN 2 WHEN '100_200' THEN 3 WHEN 'lt_100' THEN 4 ELSE 5 END ASC,
            created_at DESC
          LIMIT 500
        `;
      }
    } else {
      // Fallback for multiple params - use base query with no filters
      rows = await sql`
        SELECT
          id, tenant_id, vertical, source_consumer, source_page,
          first_name, last_name, email, phone,
          street_address, city, state, zip,
          owns_home, monthly_bill, timeline, utility, roof_shade,
          intent, notes,
          score, status, sale_value,
          attribution_json, consent_json, ip_address,
          created_at, updated_at
        FROM engine_leads
        WHERE tenant_id = 1
        ORDER BY
          CASE score WHEN 'hot_lead' THEN 1 WHEN 'standard' THEN 2 WHEN 'low_priority' THEN 3 ELSE 4 END ASC,
          CASE timeline WHEN 'asap' THEN 1 WHEN '1_3mo' THEN 2 WHEN '3_6mo' THEN 3 WHEN 'exploring' THEN 4 ELSE 5 END ASC,
          CASE monthly_bill WHEN 'gt_300' THEN 1 WHEN '200_300' THEN 2 WHEN '100_200' THEN 3 WHEN 'lt_100' THEN 4 ELSE 5 END ASC,
          created_at DESC
        LIMIT 500
      `;
    }

    return NextResponse.json(rows);
  } catch (err) {
    console.error('[admin/leads] GET failed:', err);
    return NextResponse.json({ error: 'Failed to fetch leads' }, { status: 500 });
  }
}
