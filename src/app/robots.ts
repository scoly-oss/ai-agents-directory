import type { MetadataRoute } from "next";

const BASE_URL = "https://ai-agents-directory-mu.vercel.app"; // TODO: replace with custom domain

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
    sitemap: `${BASE_URL}/sitemap.xml`,
  };
}
