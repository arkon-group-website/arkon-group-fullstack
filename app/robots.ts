import type { MetadataRoute } from "next";
import { normalizeBaseUrl } from "@/lib/utils";

export default function robots(): MetadataRoute.Robots {
  const base = normalizeBaseUrl();

  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/", "/_next/"]
    },
    sitemap: `${base}/sitemap.xml`
  };
}
