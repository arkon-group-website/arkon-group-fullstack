import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import type { Locale } from "@/types";
import { companies, services, site, t, ui } from "@/content/site";
import { isLocale, locales } from "@/lib/i18n";
import { pageMetadata } from "@/lib/metadata";
import { breadcrumbSchema, professionalServiceSchema } from "@/lib/schema";
import { JsonLd } from "@/components/JsonLd";
import { Section } from "@/components/sections/Section";
import { ServiceGrid } from "@/components/sections/ServiceGrid";
import { LocaleLink } from "@/components/layout/LocaleLink";

export function generateStaticParams() {
  return locales.flatMap((locale) => companies.map((company) => ({ locale, slug: company.slug })));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string; slug: string }> }): Promise<Metadata> {
  const { locale: value, slug } = await params;
  const locale = isLocale(value) ? value : "en";
  const company = companies.find((item) => item.slug === slug);
  if (!company) return {};
  return pageMetadata({
    locale,
    path: `/companies/${company.slug}`,
    title: t(locale, company.name),
    description: t(locale, company.summary)
  });
}

export default async function CompanyPage({ params }: { params: Promise<{ locale: string; slug: string }> }) {
  const { locale: value, slug } = await params;
  const locale: Locale = isLocale(value) ? value : "en";
  const company = companies.find((item) => item.slug === slug);
  if (!company) notFound();
  const companyServices = services.filter((service) => service.companyId === company.id);

  return (
    <>
      <JsonLd data={[
        breadcrumbSchema(locale, [
          { name: locale === "ar" ? "الرئيسية" : "Home", path: "/" },
          { name: locale === "ar" ? "الشركات" : "Companies", path: "/companies" },
          { name: t(locale, company.name), path: `/companies/${company.slug}` }
        ]),
        professionalServiceSchema(locale, company)
      ]} />

      <section className="relative overflow-hidden bg-arkon-pearl2 py-16 sm:py-20">
        <div className="absolute inset-0 bg-pearl-radial" />
        <div className="absolute inset-0 bg-command-grid bg-[length:42px_42px] opacity-35" />
        <div className="arkon-container relative grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div>
            <p className="arkon-eyebrow">{company.shortName}</p>
            <h1 className="mt-4 max-w-3xl text-4xl font-black leading-tight text-arkon-navy sm:text-5xl">{t(locale, company.name)}</h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-arkon-muted">{t(locale, company.positioning)}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <LocaleLink locale={locale} href="/request-proposal" className="arkon-btn arkon-btn-gold">
                {company.cta[locale] || ui.requestProposal[locale]}
              </LocaleLink>
              <LocaleLink locale={locale} href="/services" className="arkon-btn arkon-btn-ghost">
                {ui.exploreServices[locale]}
              </LocaleLink>
            </div>
          </div>

          <div className="arkon-card-premium min-h-[23rem] p-5">
            <div className="relative min-h-[22rem] overflow-hidden rounded-xl bg-arkon-navy">
              <Image src={site.heroImage} alt="" fill sizes="(min-width: 1024px) 46vw, 100vw" className="object-cover opacity-70" />
              <div className="absolute inset-0 bg-gradient-to-r from-arkon-navy/90 via-arkon-navy/55 to-transparent" />
              <div className="absolute inset-x-6 top-6 rounded-2xl border border-white/18 bg-white/90 p-5 shadow-glow backdrop-blur-xl">
                <Image src={company.logo} alt={t(locale, company.name)} width={230} height={92} className="max-h-20 w-auto object-contain" />
              </div>
              <div className="absolute bottom-6 start-6 max-w-sm">
                <p className="text-xs font-black uppercase tracking-[0.2em] text-arkon-gold">{locale === "ar" ? "ضمن مجموعة أركون" : "Inside ARKON Group"}</p>
                <h2 className="mt-3 text-2xl font-black text-white">{t(locale, company.summary)}</h2>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Section
        className="bg-white"
        eyebrow={locale === "ar" ? "نظرة عامة" : "Overview"}
        title={locale === "ar" ? "دور الشركة داخل منظومة أركون" : "The Company Role inside the ARKON Ecosystem"}
        intro={t(locale, company.overview)}
      >
        <div className="grid gap-5 lg:grid-cols-3">
          <InfoPanel title={locale === "ar" ? "نقاط القوة" : "Technical strengths"} items={company.strengths.map((item) => t(locale, item))} />
          <InfoPanel title={locale === "ar" ? "منهجية العمل" : "Methodology"} items={company.methodology.map((item) => t(locale, item))} />
          <InfoPanel title={locale === "ar" ? "ملاحظات نشر محافظة" : "Conservative proof points"} items={company.proofPoints.map((item) => t(locale, item))} />
        </div>
      </Section>

      <Section
        eyebrow={locale === "ar" ? "الخدمات" : "Services"}
        title={locale === "ar" ? "الخدمات الرئيسية" : "Core Services"}
        intro={locale === "ar" ? "روابط مباشرة إلى صفحات الخدمات ذات الصلة بهذه الشركة." : "Direct links to the service pages associated with this company."}
      >
        <ServiceGrid locale={locale} services={companyServices} />
      </Section>

      <Section
        className="bg-white"
        eyebrow={locale === "ar" ? "القطاعات والعملاء" : "Sectors and client types"}
        title={locale === "ar" ? "بيئات مشاريع مناسبة" : "Relevant Project Environments"}
      >
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {company.industries.map((industry) => (
            <article key={industry.en} className="arkon-card">
              <h2 className="text-xl font-black text-arkon-navy">{t(locale, industry)}</h2>
              <p className="mt-3 text-sm leading-7 text-arkon-muted">
                {locale === "ar" ? "يمكن توجيه الطلبات لهذا القطاع حسب نطاق الخدمة والمتطلبات الفنية." : "Inquiries in this sector can be routed based on service scope and technical requirements."}
              </p>
            </article>
          ))}
        </div>
        <div className="mt-10 rounded-3xl bg-arkon-navy p-7 text-white shadow-arkon sm:p-9">
          <p className="arkon-eyebrow">{locale === "ar" ? "توجيه الطلب" : "Request routing"}</p>
          <h2 className="mt-3 text-3xl font-black">{locale === "ar" ? "أرسل نطاق المشروع للفريق المناسب" : "Send the project scope to the right specialist team"}</h2>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-white/72">
            {locale === "ar" ? "سيتم استخدام معلومات المشروع لتوجيه الطلب إلى الشركة والخدمة الأكثر صلة داخل مجموعة أركون." : "Project information is used to route your inquiry to the most relevant company and service team inside ARKON Group."}
          </p>
          <LocaleLink locale={locale} href="/request-proposal" className="arkon-btn arkon-btn-gold mt-6">
          {company.cta[locale] || ui.requestProposal[locale]}
        </LocaleLink>
        </div>
      </Section>
    </>
  );
}

function InfoPanel({ title, items }: { title: string; items: string[] }) {
  return (
    <article className="arkon-card-premium p-6">
      <h2 className="text-2xl font-black text-arkon-navy">{title}</h2>
      <ul className="mt-5 grid gap-3 text-sm leading-7 text-arkon-muted">
        {items.map((item) => <li key={item} className="arkon-list-check">{item}</li>)}
      </ul>
    </article>
  );
}
