import type { Company, Locale, Service } from "@/types";
import { companies, site, t } from "@/content/site";
import { localePath } from "@/lib/i18n";
import { normalizeBaseUrl } from "@/lib/utils";

export function organizationSchema(locale: Locale) {
  const base = normalizeBaseUrl();

  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: site.name,
    url: base,
    description: site.description[locale],
    department: companies.map((company) => ({
      "@type": "Organization",
      name: t(locale, company.name),
      description: t(locale, company.summary)
    }))
  };
}

export function websiteSchema(locale: Locale) {
  const base = normalizeBaseUrl();

  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: site.name,
    url: base,
    inLanguage: locale === "ar" ? "ar-SA" : "en-US",
    description: site.description[locale]
  };
}

export function breadcrumbSchema(locale: Locale, items: Array<{ name: string; path: string }>) {
  const base = normalizeBaseUrl();

  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${base}${localePath(locale, item.path)}`
    }))
  };
}

export function serviceSchema(locale: Locale, service: Service) {
  const base = normalizeBaseUrl();
  const company = companies.find((item) => item.id === service.companyId);

  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: t(locale, service.title),
    description: t(locale, service.summary),
    provider: {
      "@type": "Organization",
      name: company ? t(locale, company.name) : site.name
    },
    areaServed: "Saudi Arabia",
    url: `${base}${localePath(locale, `/services/${service.slug}`)}`
  };
}

export function professionalServiceSchema(locale: Locale, company: Company) {
  const base = normalizeBaseUrl();

  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: t(locale, company.name),
    description: t(locale, company.summary),
    parentOrganization: {
      "@type": "Organization",
      name: site.name,
      url: base
    },
    areaServed: "Saudi Arabia",
    url: `${base}${localePath(locale, `/companies/${company.slug}`)}`
  };
}
