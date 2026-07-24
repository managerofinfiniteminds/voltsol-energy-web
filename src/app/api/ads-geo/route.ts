export const dynamic = 'force-dynamic';
import { NextRequest, NextResponse } from 'next/server';

/**
 * Google Ads geo-aware landing page redirect.
 *
 * Ads use ValueTrack {loc_physical_ms} to pass the searcher's physical
 * location geo-target-constant ID in the final URL, e.g.:
 *   https://voltsolenergy.com/api/ads-geo?gtc={loc_physical_ms}&campaign=norcal-search
 *
 * We map the known county-level geo-target-constant IDs (see campaign build,
 * scripts/ads_build.py in the agent workspace) to the matching county
 * landing page under /market/solar/california/[county]-county, which already
 * carries locale-specific utility rates, permit info, and city FAQs — and
 * whose own CTA correctly attributes back to /start?campaign=county-<slug>.
 *
 * Google's {loc_physical_ms} resolves at the city/postal-code level, not
 * just county, so we map both county-level and known high-volume city-level
 * geo-target-constant IDs to their parent county page.
 *
 * Also supports the Tri-Valley & Fremont campaign (added 2026-07-23),
 * mapping Livermore/Pleasanton/Dublin/Sunol/Fremont -> alameda-county and
 * San Ramon/Danville/Alamo/Blackhawk/Diablo -> contra-costa-county.
 *
 * Unmapped / missing gtc always falls back to the generic /start funnel —
 * a broken or unrecognized geo param must never block the lead.
 */

const GEO_TO_COUNTY_SLUG: Record<string, string> = {
  // Counties (full county-level geo-target-constant IDs)
  '9057122': 'butte-county',
  '9057162': 'shasta-county',
  '9057148': 'placer-county',
  '9057147': 'nevada-county',
  '9057175': 'yuba-county',
  '9057168': 'sutter-county',
  '9057169': 'tehama-county',
  '9057129': 'glenn-county',
  '9057124': 'colusa-county',
  '9057174': 'yolo-county',
  '9057135': 'lake-county',

  // High-volume cities mapped to their parent county page
  '1013671': 'butte-county',   // Chico
  '1014098': 'butte-county',   // Oroville
  '1014114': 'butte-county',   // Paradise
  '1014175': 'shasta-county',  // Redding
  '1014204': 'placer-county',  // Roseville
  '1014199': 'placer-county',  // Rocklin
  '1013563': 'placer-county',  // Auburn
  '1013826': 'nevada-county',  // Grass Valley
  '1014050': 'nevada-county',  // Nevada City
  '1014424': 'sutter-county',  // Yuba City
  '1013989': 'yuba-county',    // Marysville
  '1014174': 'tehama-county',  // Red Bluff
  '1014404': 'glenn-county',   // Willows
  '1013721': 'yolo-county',    // Davis
  '1014415': 'yolo-county',    // Woodland

  // Tri-Valley & Fremont campaign (added 2026-07-23)
  '9057119': 'alameda-county',      // Alameda County
  '9057125': 'contra-costa-county', // Contra Costa County
  '1013950': 'alameda-county',      // Livermore
  '1014149': 'alameda-county',      // Pleasanton
  '1013740': 'alameda-county',      // Dublin
  '1014316': 'alameda-county',      // Sunol
  '1013802': 'alameda-county',      // Fremont
  '1014243': 'contra-costa-county', // San Ramon
  '1013720': 'contra-costa-county', // Danville
  '1013528': 'contra-costa-county', // Alamo
  '9051601': 'contra-costa-county', // Blackhawk
  '1013730': 'contra-costa-county', // Diablo
};

export async function GET(req: NextRequest) {
  const gtc = req.nextUrl.searchParams.get('gtc');
  const campaign = req.nextUrl.searchParams.get('campaign') ?? 'norcal-search';

  const countySlug = gtc ? GEO_TO_COUNTY_SLUG[gtc] : undefined;

  const destination = countySlug
    ? `/market/solar/california/${countySlug}?src=ads&campaign=${encodeURIComponent(campaign)}`
    : `/start?campaign=${encodeURIComponent(campaign)}`;

  return NextResponse.redirect(new URL(destination, req.nextUrl.origin), { status: 302 });
}
