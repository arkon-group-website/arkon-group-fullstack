import type { Metadata } from "next";
import type { Locale } from "@/types";
import { industries, site } from "@/content/site";
import { isLocale } from "@/lib/i18n";
import { pageMetadata } from "@/lib/metadata";
import { breadcrumbSchema } from "@/lib/schema";
import { JsonLd } from "@/components/JsonLd";
import { Section } from "@/components/sections/Section";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale: value } = await params;
  const locale = isLocale(value) ? value : "en";
  return pageMetadata({
    locale,
    path: "/industries",
    title: locale === "ar" ? "القطاعات التي تخدمها مجموعة أركون" : "Industries Served by ARKON Group",
    description: site.description[locale]
  });
}

export default async function IndustriesPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: value } = await params;
  const locale: Locale = isLocale(value) ? value : "en";

  return (
    <>
      <JsonLd data={breadcrumbSchema(locale, [
        { name: locale === "ar" ? "الرئيسية" : "Home", path: "/" },
        { name: locale === "ar" ? "القطاعات" : "Industries", path: "/industries" }
      ])} />
      <Section
        eyebrow={locale === "ar" ? "القطاعات" : "Industries"}
        title={locale === "ar" ? "قطاعات مشاريع نخدمها بمنظومة متكاملة" : "Key project sectors served through one ecosystem"}
        intro={locale === "ar" ? "تدعم شركات أركون احتياجات قطاعات متعددة في السوق السعودي من خلال خدمات متخصصة ومحافظة." : "ARKON Group companies support multiple Saudi project sectors through specialized, conservative service pathways."}
      >
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {industries.map((industry) => (
            <article key={industry.en} className="arkon-card">
              <h2 className="text-2xl font-black text-arkon-navy">{industry[locale]}</h2>
              <p className="mt-4 text-sm leading-7 text-arkon-muted">
                {locale === "ar"
                  ? "صفحة قطاع قابلة للتوسيع لاحقاً بدراسات حالة وروابط خدمات معتمدة."
                  : "Sector page placeholder ready for approved case studies, service links, and supporting credentials."}
              </p>
            </article>
          ))}
        </div>
      </Section>
    </>
  );
}
