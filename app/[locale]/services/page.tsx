import type { Metadata } from "next";
import Image from "next/image";
import type { Locale } from "@/types";
import { companies, services, site, t } from "@/content/site";
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
        <div className="mb-10 grid gap-4 md:grid-cols-2 xl:grid-cols-5">
          {companies.map((company) => (
            <article key={company.id} className="arkon-card-premium p-5">
              <Image src={company.logo} alt={t(locale, company.name)} width={170} height={68} className="mb-5 max-h-14 w-auto object-contain" />
              <h2 className="text-lg font-black text-arkon-navy">{t(locale, company.name)}</h2>
              <p className="mt-3 text-sm leading-7 text-arkon-muted">{t(locale, company.positioning)}</p>
            </article>
          ))}
        </div>
        <ServiceGrid locale={locale} services={services} />
      </Section>
    </>
  );
}
