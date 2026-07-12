import type { Metadata } from "next";
import type { Locale } from "@/types";
import { site } from "@/content/site";
import { isLocale } from "@/lib/i18n";
import { pageMetadata } from "@/lib/metadata";
import { breadcrumbSchema } from "@/lib/schema";
import { JsonLd } from "@/components/JsonLd";
import { Section } from "@/components/sections/Section";
import { CompanyGrid } from "@/components/sections/CompanyGrid";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale: value } = await params;
  const locale = isLocale(value) ? value : "en";
  return pageMetadata({
    locale,
    path: "/companies",
    title: locale === "ar" ? "شركات مجموعة أركون" : "ARKON Group Companies",
    description: site.description[locale]
  });
}

export default async function CompaniesPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: value } = await params;
  const locale: Locale = isLocale(value) ? value : "en";

  return (
    <>
      <JsonLd data={breadcrumbSchema(locale, [
        { name: locale === "ar" ? "الرئيسية" : "Home", path: "/" },
        { name: locale === "ar" ? "الشركات" : "Companies", path: "/companies" }
      ])} />
      <Section
        eyebrow={locale === "ar" ? "الشركات" : "Companies"}
        title={locale === "ar" ? "خمس شركات متخصصة داخل مجموعة أركون" : "Five specialized companies inside ARKON Group"}
        intro={locale === "ar" ? "استكشف الشركات التي تشكل منظومة أركون لدعم المشاريع." : "Explore the companies that form the ARKON Group delivery ecosystem."}
      >
        <CompanyGrid locale={locale} />
      </Section>
    </>
  );
}
