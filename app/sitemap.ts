import type { MetadataRoute } from "next";
import { companies, services } from "@/content/site";
import { locales } from "@/lib/i18n";
import { normalizeBaseUrl } from "@/lib/utils";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = normalizeBaseUrl();
  const staticPaths = ["", "/about", "/companies", "/services", "/credentials", "/contact", "/privacy", "/terms"];
  const companyPaths = companies.map((company) => `/companies/${company.slug}`);
  const servicePaths = services.map((service) => `/services/${service.slug}`);
  const paths = [...staticPaths, ...companyPaths, ...servicePaths];

  return locales.flatMap((locale) =>
    paths.map((path) => ({
      url: `${base}/${locale}${path}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: path === "" ? 1 : 0.7
    }))
  );
}
