import type { Metadata } from "next";
import type { Locale } from "@/types";
import { industries, services, site, ui } from "@/content/site";
import { isLocale } from "@/lib/i18n";
import { pageMetadata } from "@/lib/metadata";
import { breadcrumbSchema } from "@/lib/schema";
import { JsonLd } from "@/components/JsonLd";
import { HeroSection } from "@/components/sections/HeroSection";
import { Section } from "@/components/sections/Section";
import { CompanyGrid } from "@/components/sections/CompanyGrid";
import { ServiceGrid } from "@/components/sections/ServiceGrid";
import { LocaleLink } from "@/components/layout/LocaleLink";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale: value } = await params;
  const locale = isLocale(value) ? value : "en";
  return pageMetadata({
    locale,
    title: locale === "ar" ? "مجموعة أركون" : "ARKON Group",
    description: site.description[locale]
  });
}

export default async function HomePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: value } = await params;
  const locale: Locale = isLocale(value) ? value : "en";

  return (
    <>
      <JsonLd data={breadcrumbSchema(locale, [{ name: locale === "ar" ? "الرئيسية" : "Home", path: "/" }])} />
      <HeroSection locale={locale} />

      <Section
        eyebrow={locale === "ar" ? "الشركات" : "Group ecosystem"}
        title={locale === "ar" ? "خمس شركات متخصصة ضمن منظومة واحدة" : "Five specialized companies. One delivery ecosystem."}
        intro={locale === "ar" ? "تجمع مجموعة أركون بين تخصصات هندسية وأمنية وتنفيذية وفنية ورقمية لدعم احتياجات المشاريع من نقطة واحدة." : "ARKON Group connects engineering, security, technical delivery, testing, and digital capability through a single corporate ecosystem."}
      >
        <CompanyGrid locale={locale} />
      </Section>

      <Section
        className="bg-arkon-navy2/55"
        eyebrow={locale === "ar" ? "الخدمات" : "Core capabilities"}
        title={locale === "ar" ? "خدمات عملية لفرق المشاريع" : "Practical services for project teams"}
        intro={locale === "ar" ? "تبدأ الرحلة من الاستشارة والتخطيط، وتمتد إلى التنفيذ والفحص والتسويق الرقمي." : "From advisory and planning to execution, testing, and digital growth, the site routes every inquiry to the right specialist team."}
      >
        <ServiceGrid locale={locale} services={services.slice(0, 6)} />
      </Section>

      <Section
        eyebrow={locale === "ar" ? "القطاعات" : "Industries served"}
        title={locale === "ar" ? "مصمم لسوق المشاريع السعودي" : "Designed for Saudi project environments"}
        intro={locale === "ar" ? "تخاطب منظومة أركون احتياجات المطورين والمقاولين والاستشاريين والمشغلين وفرق التسويق." : "The ARKON ecosystem is structured for developers, contractors, consultants, operators, and marketing teams working across Saudi Arabia."}
      >
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {industries.map((industry) => (
            <div key={industry.en} className="rounded-sm border border-white/10 bg-white/[0.045] p-5 text-white">
              {industry[locale]}
            </div>
          ))}
        </div>
      </Section>

      <section className="border-y border-white/10 bg-[#030B15] py-16">
        <div className="arkon-container grid gap-8 lg:grid-cols-[1fr_0.7fr] lg:items-center">
          <div>
            <p className="arkon-eyebrow">{locale === "ar" ? "طلب مشروع" : "Project intake"}</p>
            <h2 className="arkon-section-title">{locale === "ar" ? "ابدأوا الطلب مع الفريق المناسب" : "Start with the right specialist team"}</h2>
            <p className="mt-4 max-w-2xl text-base leading-8 text-arkon-silver">
              {locale === "ar" ? "أرسلوا معلومات المشروع وسيتم توجيه الطلب إلى الشركة المناسبة داخل مجموعة أركون." : "Share your project information and the request will be routed to the relevant ARKON Group company."}
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row lg:justify-end">
            <LocaleLink locale={locale} href="/contact" className="arkon-btn arkon-btn-gold">
              {ui.requestProposal[locale]}
            </LocaleLink>
            <LocaleLink locale={locale} href="/credentials" className="arkon-btn arkon-btn-ghost">
              {ui.downloadProfile[locale]}
            </LocaleLink>
          </div>
        </div>
      </section>
    </>
  );
}
