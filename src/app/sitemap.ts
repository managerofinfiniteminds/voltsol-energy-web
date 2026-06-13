import type { MetadataRoute } from "next";
import { ALL_MARKET_PARAMS, marketPageHref } from "@/lib/market-data";

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

  // Programmatic market pages (one per city)
  const marketPages: MetadataRoute.Sitemap = ALL_MARKET_PARAMS.map(p => ({
    url: `${baseUrl}${marketPageHref(p)}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...corePages, ...marketPages];
}
