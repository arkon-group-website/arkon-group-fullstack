import type { Metadata } from "next";
import Image from "next/image";
import type { Locale } from "@/types";
import { industries, services, site, t } from "@/content/site";
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
          {industries.map((industry, index) => (
            <article key={industry.en} className="arkon-card-premium overflow-hidden p-0">
              <div className="relative min-h-48 bg-arkon-navy">
                <Image
                  src={site.heroImage}
                  alt=""
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover opacity-80"
                  style={{ objectPosition: `${Math.min(82, 25 + index * 10)}% center` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-arkon-navy via-arkon-navy/35 to-transparent" />
                <h2 className="absolute bottom-5 start-5 end-5 text-2xl font-black text-white">{industry[locale]}</h2>
              </div>
              <div className="p-6">
              <p className="mt-4 text-sm leading-7 text-arkon-muted">
                {locale === "ar"
                  ? "يمكن دعم هذا القطاع من خلال مزيج من الاستشارات الهندسية والأمنية والأعمال الفنية والفحوصات والخدمات الرقمية حسب نطاق المشروع."
                  : "This sector can be supported through a mix of engineering, security, technical works, testing, inspection, and digital services depending on project scope."}
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {services.slice(index, index + 3).map((service) => (
                  <span key={service.slug} className="rounded-full border border-arkon-line bg-arkon-pearl2 px-3 py-1 text-xs font-bold text-arkon-muted">
                    {t(locale, service.title)}
                  </span>
                ))}
              </div>
              </div>
            </article>
          ))}
        </div>
      </Section>
    </>
  );
}
