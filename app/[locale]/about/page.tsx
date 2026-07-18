import type { Metadata } from "next";
import Image from "next/image";
import type { Locale } from "@/types";
import { companies, site, t, ui } from "@/content/site";
import { isLocale } from "@/lib/i18n";
import { pageMetadata } from "@/lib/metadata";
import { breadcrumbSchema } from "@/lib/schema";
import { JsonLd } from "@/components/JsonLd";
import { Section } from "@/components/sections/Section";
import { LocaleLink } from "@/components/layout/LocaleLink";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale: value } = await params;
  const locale = isLocale(value) ? value : "en";
  return pageMetadata({
    locale,
    path: "/about",
    title: locale === "ar" ? "عن مجموعة أركون" : "About ARKON Group",
    description: site.description[locale]
  });
}

export default async function AboutPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: value } = await params;
  const locale: Locale = isLocale(value) ? value : "en";

  return (
    <>
      <JsonLd data={breadcrumbSchema(locale, [
        { name: locale === "ar" ? "الرئيسية" : "Home", path: "/" },
        { name: locale === "ar" ? "عن المجموعة" : "About", path: "/about" }
      ])} />
      <Section
        eyebrow={locale === "ar" ? "عن المجموعة" : "About ARKON Group"}
        title={locale === "ar" ? "منظومة متكاملة لدعم المشاريع" : "An integrated ecosystem for project support"}
        intro={site.description[locale]}
      >
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div className="arkon-card-premium p-5">
            <div className="relative min-h-[24rem] overflow-hidden rounded-xl bg-arkon-navy">
              <Image src={site.heroImage} alt="" fill sizes="(min-width: 1024px) 45vw, 100vw" className="object-cover opacity-75" />
              <div className="absolute inset-0 bg-gradient-to-r from-arkon-navy/88 via-arkon-navy/42 to-transparent" />
              <div className="absolute bottom-6 start-6 max-w-sm">
                <p className="arkon-eyebrow">{locale === "ar" ? "رسالة المجموعة" : "Group message"}</p>
                <h2 className="mt-3 text-3xl font-black text-white">{site.tagline[locale]}</h2>
              </div>
            </div>
          </div>
          <div className="grid gap-5">
          {[
            { en: "Mission", ar: "الرسالة", bodyEn: "Connect specialized teams around clear project needs and practical delivery support.", bodyAr: "ربط الفرق المتخصصة باحتياجات المشاريع من خلال دعم عملي وواضح." },
            { en: "Vision", ar: "الرؤية", bodyEn: "Build a structured corporate platform for multidisciplinary project support in Saudi Arabia.", bodyAr: "بناء منصة مؤسسية منظمة لدعم المشاريع متعددة التخصصات في المملكة." },
            { en: "Operating model", ar: "نموذج العمل", bodyEn: "Route each inquiry to the company most suitable for the requested service.", bodyAr: "توجيه كل طلب إلى الشركة المناسبة حسب الخدمة المطلوبة." }
          ].map((item) => (
            <article key={item.en} className="arkon-card-premium p-6">
              <h2 className="text-2xl font-black text-arkon-navy">{locale === "ar" ? item.ar : item.en}</h2>
              <p className="mt-4 text-sm leading-7 text-arkon-muted">{locale === "ar" ? item.bodyAr : item.bodyEn}</p>
            </article>
          ))}
          </div>
        </div>
      </Section>

      <Section
        className="bg-white"
        eyebrow={locale === "ar" ? "هيكل المجموعة" : "Company structure"}
        title={locale === "ar" ? "الشركات الخمس المؤكدة" : "The five confirmed companies"}
      >
        <div className="grid gap-4 md:grid-cols-2">
          {companies.map((company) => (
            <LocaleLink key={company.id} locale={locale} href={`/companies/${company.slug}`} className="arkon-card-premium block p-6">
              <Image src={company.logo} alt={t(locale, company.name)} width={180} height={70} className="mb-5 max-h-16 w-auto object-contain" />
              <h3 className="text-xl font-black text-arkon-navy">{t(locale, company.name)}</h3>
              <p className="mt-3 text-sm leading-7 text-arkon-muted">{t(locale, company.summary)}</p>
            </LocaleLink>
          ))}
        </div>
        <LocaleLink locale={locale} href="/contact" className="arkon-btn arkon-btn-gold mt-8">
          {ui.requestProposal[locale]}
        </LocaleLink>
      </Section>
    </>
  );
}
