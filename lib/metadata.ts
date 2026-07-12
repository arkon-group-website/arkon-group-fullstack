import type { Metadata } from "next";
import type { Locale } from "@/types";
import { localePath } from "@/lib/i18n";
import { normalizeBaseUrl, truncate } from "@/lib/utils";
import { site } from "@/content/site";

interface MetadataInput {
  locale: Locale;
  path?: string;
  title: string;
  description: string;
}

export function pageMetadata({ locale, path = "/", title, description }: MetadataInput): Metadata {
  const base = normalizeBaseUrl();
  const localizedPath = localePath(locale, path);
  const url = `${base}${localizedPath}`;
  const opposite = locale === "en" ? "ar" : "en";

  return {
    metadataBase: new URL(base),
    title,
    description: truncate(description),
    alternates: {
      canonical: localizedPath,
      languages: {
        en: localePath("en", path),
        ar: localePath("ar", path),
        "x-default": localePath("en", path)
      }
    },
    openGraph: {
      title,
      description: truncate(description),
      url,
      siteName: site.name,
      locale: locale === "ar" ? "ar_SA" : "en_US",
      alternateLocale: opposite === "ar" ? "ar_SA" : "en_US",
      type: "website"
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: truncate(description)
    }
  };
}
