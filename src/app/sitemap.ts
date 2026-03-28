import { agents, categories } from "@/data/agents";
import type { MetadataRoute } from "next";

const BASE_URL = "https://ai-agents-directory-mu.vercel.app"; // TODO: replace with custom domain

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date().toISOString();

  const staticPages: MetadataRoute.Sitemap = [
    { url: BASE_URL, lastModified: now, changeFrequency: "daily", priority: 1 },
    { url: `${BASE_URL}/pricing`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/submit`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
  ];

  const categoryPages: MetadataRoute.Sitemap = categories
    .filter((c) => c.count > 0)
    .map((c) => ({
      url: `${BASE_URL}/category/${c.slug}`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: 0.8,
    }));

  const agentPages: MetadataRoute.Sitemap = agents.map((a) => ({
    url: `${BASE_URL}/agent/${a.slug}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: 0.9,
  }));

  return [...staticPages, ...categoryPages, ...agentPages];
}
