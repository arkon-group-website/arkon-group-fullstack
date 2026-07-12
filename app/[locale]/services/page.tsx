import type { Metadata } from "next";
import type { Locale } from "@/types";
import { services, site } from "@/content/site";
import { isLocale } from "@/lib/i18n";
import { pageMetadata } from "@/lib/metadata";
import { breadcrumbSchema } from "@/lib/schema";
import { JsonLd } from "@/components/JsonLd";
import { Section } from "@/components/sections/Section";
import { ServiceGrid } from "@/components/sections/ServiceGrid";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale: value } = await params;
  const locale = isLocale(value) ? value : "en";
  return pageMetadata({
    locale,
    path: "/services",
    title: locale === "ar" ? "خدمات مجموعة أركون" : "ARKON Group Services",
    description: site.description[locale]
  });
}

export default async function ServicesPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: value } = await params;
  const locale: Locale = isLocale(value) ? value : "en";

  return (
    <>
      <JsonLd data={breadcrumbSchema(locale, [
        { name: locale === "ar" ? "الرئيسية" : "Home", path: "/" },
        { name: locale === "ar" ? "الخدمات" : "Services", path: "/services" }
      ])} />
      <Section
        eyebrow={locale === "ar" ? "الخدمات" : "Services"}
        title={locale === "ar" ? "خدمات متخصصة عبر منظومة واحدة" : "Specialized services across one ecosystem"}
        intro={locale === "ar" ? "استكشف صفحات الخدمات ذات الأولوية عبر الشركات الخمس." : "Explore priority service pages across the five confirmed ARKON Group companies."}
      >
        <ServiceGrid locale={locale} services={services} />
      </Section>
    </>
  );
}
