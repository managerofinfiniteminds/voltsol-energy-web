import type { MetadataRoute } from "next";
import { ALL_MARKET_PARAMS, MARKETS_BY_STATE, marketPageHref } from "@/lib/market-data";
import { LEARN_ARTICLES } from "@/lib/learn-content";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://voltsolenergy.com";

  const corePages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${baseUrl}/start`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/go`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/privacy`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.3,
    },
    {
      url: `${baseUrl}/partners`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.5,
    },
    // Marketplace legal pages
    {
      url: `${baseUrl}/market/legal/terms`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.3,
    },
    {
      url: `${baseUrl}/market/legal/privacy`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.3,
    },
  ];

  // Market hub pages
  const marketHubs: MetadataRoute.Sitemap = [
    // Market index
    {
      url: `${baseUrl}/market`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
    // State hubs and county hubs (all states)
    ...Object.entries(MARKETS_BY_STATE).flatMap(([state, markets]) => [
      {
        url: `${baseUrl}/market/solar/${state}`,
        lastModified: new Date(),
        changeFrequency: "monthly" as const,
        priority: 0.9,
      },
      ...markets.map(region => ({
        url: `${baseUrl}/market/solar/${state}/${region.regionSlug}`,
        lastModified: new Date(),
        changeFrequency: "monthly" as const,
        priority: 0.8,
      })),
    ]),
  ];

  // City pages (existing)
  const cityPages: MetadataRoute.Sitemap = ALL_MARKET_PARAMS.map(p => ({
    url: `${baseUrl}${marketPageHref(p)}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  // Learn hub and articles
  const learnPages: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/learn`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.6,
    },
    ...LEARN_ARTICLES.map(article => ({
      url: `${baseUrl}/learn/${article.slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
  ];

  return [...corePages, ...marketHubs, ...cityPages, ...learnPages];
}
