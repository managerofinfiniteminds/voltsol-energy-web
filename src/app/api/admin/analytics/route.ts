export const dynamic = 'force-dynamic';
import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import { sql } from '@/lib/db';

function isAuthenticated(): boolean {
  const cookieStore = cookies();
  return cookieStore.get('admin_session')?.value === 'authenticated';
}

export async function GET() {
  if (!isAuthenticated()) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const [
    kpiRows,
    funnelEventRows,
    formStep1Rows,
    attrSourceRows,
    attrRepRows,
    attrCampaignRows,
    attrUtmRows,
    timeSeriesRows,
    pipelineRows,
  ] = await Promise.all([
    // KPIs from contacts table
    sql`
      SELECT
        COUNT(*)::int                                                              AS total_leads,
        COUNT(*) FILTER (WHERE lead_score = 'hot_lead')::int                      AS hot_leads,
        COUNT(*) FILTER (WHERE created_at >= date_trunc('week',  NOW()))::int     AS this_week,
        COUNT(*) FILTER (WHERE created_at >= date_trunc('month', NOW()))::int     AS this_month
      FROM contacts
    `,
    // Funnel event totals (all types except form_step handled separately)
    sql`
      SELECT event_type, COUNT(*)::int AS count
      FROM lead_events
      WHERE event_type IN ('page_view','estimator_complete','form_complete','lead_created')
      GROUP BY event_type
    `,
    // form_step step=1 specifically
    sql`
      SELECT COUNT(*)::int AS count
      FROM lead_events
      WHERE event_type = 'form_step' AND meta->>'step' = '1'
    `,
    // Attribution by source
    sql`
      SELECT
        COALESCE(source, 'direct')                                                AS source,
        COUNT(*)::int                                                             AS leads,
        COUNT(*) FILTER (WHERE lead_score = 'hot_lead')::int                      AS hot_leads
      FROM contacts
      GROUP BY COALESCE(source, 'direct')
      ORDER BY leads DESC
    `,
    // Attribution by rep
    sql`
      SELECT
        COALESCE(rep, 'unassigned')                                               AS rep,
        COUNT(*)::int                                                             AS leads,
        COUNT(*) FILTER (WHERE lead_score = 'hot_lead')::int                      AS hot_leads
      FROM contacts
      GROUP BY COALESCE(rep, 'unassigned')
      ORDER BY leads DESC
    `,
    // Attribution by campaign
    sql`
      SELECT
        COALESCE(c.code, 'none')                                                  AS campaign_code,
        COALESCE(c.name, 'No Campaign')                                           AS campaign_name,
        COUNT(co.id)::int                                                         AS leads,
        COUNT(co.id) FILTER (WHERE co.lead_score = 'hot_lead')::int               AS hot_leads
      FROM contacts co
      LEFT JOIN campaigns c ON c.id = co.campaign_id
      GROUP BY COALESCE(c.code, 'none'), COALESCE(c.name, 'No Campaign')
      ORDER BY leads DESC
    `,
    // Attribution by utm_source
    sql`
      SELECT
        COALESCE(utm_source, 'none')                                              AS utm_source,
        COUNT(*)::int                                                             AS leads,
        COUNT(*) FILTER (WHERE lead_score = 'hot_lead')::int                      AS hot_leads
      FROM contacts
      GROUP BY COALESCE(utm_source, 'none')
      ORDER BY leads DESC
    `,
    // Time series: leads per day last 30 days
    sql`
      SELECT
        date_trunc('day', created_at)::date::text                                 AS day,
        COUNT(*)::int                                                             AS leads
      FROM contacts
      WHERE created_at >= NOW() - INTERVAL '30 days'
      GROUP BY date_trunc('day', created_at)::date
      ORDER BY day ASC
    `,
    // Pipeline by status
    sql`
      SELECT status, COUNT(*)::int AS count
      FROM contacts
      GROUP BY status
      ORDER BY count DESC
    `,
  ]);

  const funnelMap = new Map<string, number>();
  for (const row of funnelEventRows) {
    funnelMap.set(row.event_type as string, row.count as number);
  }

  const pageViews         = funnelMap.get('page_view')          ?? 0;
  const estimatorComplete = funnelMap.get('estimator_complete')  ?? 0;
  const formComplete      = funnelMap.get('form_complete')       ?? 0;
  const leadCreated       = funnelMap.get('lead_created')        ?? 0;
  const formStep1         = (formStep1Rows[0]?.count as number)  ?? 0;

  function pct(num: number, denom: number): number {
    if (denom === 0) return 0;
    return Math.round((num / denom) * 10000) / 100;
  }

  const kpi = kpiRows[0] as {
    total_leads: number;
    hot_leads: number;
    this_week: number;
    this_month: number;
  };

  return NextResponse.json({
    kpis: {
      total_leads:              kpi.total_leads,
      hot_leads:                kpi.hot_leads,
      this_week:                kpi.this_week,
      this_month:               kpi.this_month,
      conversion_rate_pct:      pct(leadCreated,       pageViews),
      estimator_completion_pct: pct(estimatorComplete, pageViews),
    },
    funnel: [
      { step: 'page_view',           label: 'Page Views',        count: pageViews,         pct_from_prev: 100 },
      { step: 'estimator_complete',  label: 'Estimator Complete', count: estimatorComplete, pct_from_prev: pct(estimatorComplete, pageViews) },
      { step: 'form_step_1',         label: 'Form Started',      count: formStep1,         pct_from_prev: pct(formStep1, estimatorComplete) },
      { step: 'form_complete',       label: 'Form Complete',     count: formComplete,      pct_from_prev: pct(formComplete, formStep1) },
      { step: 'lead_created',        label: 'Lead Created',      count: leadCreated,       pct_from_prev: pct(leadCreated, formComplete) },
    ],
    attribution: {
      by_source:     attrSourceRows,
      by_rep:        attrRepRows,
      by_campaign:   attrCampaignRows,
      by_utm_source: attrUtmRows,
    },
    time_series: timeSeriesRows,
    pipeline:    pipelineRows,
  });
}
