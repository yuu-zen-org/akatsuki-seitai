import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site-config";
import { symptoms } from "@/data/symptoms";
import { recommends } from "@/data/recommends";

const base = siteConfig.url;
const now = new Date();

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = [
    { url: `${base}/`,           lastModified: now, priority: 1.0, changeFrequency: "weekly" },
    { url: `${base}/symptoms/`,  lastModified: now, priority: 0.9, changeFrequency: "monthly" },
    { url: `${base}/first/`,     lastModified: now, priority: 0.8, changeFrequency: "monthly" },
    { url: `${base}/price/`,     lastModified: now, priority: 0.8, changeFrequency: "monthly" },
    { url: `${base}/contact/`,   lastModified: now, priority: 0.8, changeFrequency: "monthly" },
    { url: `${base}/faq/`,       lastModified: now, priority: 0.7, changeFrequency: "monthly" },
    { url: `${base}/staff/`,     lastModified: now, priority: 0.7, changeFrequency: "monthly" },
    { url: `${base}/voice/`,     lastModified: now, priority: 0.7, changeFrequency: "monthly" },
    { url: `${base}/recommend/`, lastModified: now, priority: 0.7, changeFrequency: "monthly" },
    { url: `${base}/access/`,    lastModified: now, priority: 0.6, changeFrequency: "yearly" },
  ];

  const symptomPages: MetadataRoute.Sitemap = symptoms.map((s) => ({
    url: `${base}/symptoms/${s.slug}/`,
    lastModified: now,
    priority: 0.8,
    changeFrequency: "monthly",
  }));

  const recommendPages: MetadataRoute.Sitemap = recommends.map((r) => ({
    url: `${base}/recommend/${r.slug}/`,
    lastModified: now,
    priority: 0.6,
    changeFrequency: "monthly",
  }));

  return [...staticPages, ...symptomPages, ...recommendPages];
}
