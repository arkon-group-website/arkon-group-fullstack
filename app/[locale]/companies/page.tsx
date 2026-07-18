import type { Metadata } from "next";
import Image from "next/image";
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
        <div className="arkon-card-premium mb-8 grid gap-6 p-5 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <div className="rounded-2xl bg-white p-6">
            <Image src={site.logo} alt="ARKON Group" width={240} height={88} className="h-auto w-56 max-w-full object-contain" priority />
            <p className="mt-5 text-sm leading-7 text-arkon-muted">{site.tagline[locale]}</p>
          </div>
          <div className="relative min-h-64 overflow-hidden rounded-2xl bg-arkon-navy">
            <Image src={site.heroImage} alt="" fill sizes="(min-width: 1024px) 55vw, 100vw" className="object-cover opacity-80" />
            <div className="absolute inset-0 bg-gradient-to-r from-arkon-navy/80 via-transparent to-white/10" />
          </div>
        </div>
        <CompanyGrid locale={locale} />
      </Section>
    </>
  );
}
