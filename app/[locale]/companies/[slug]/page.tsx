import type { Metadata } from "next";
import { notFound } from "next/navigation";
import type { Locale } from "@/types";
import { companies, services, t, ui } from "@/content/site";
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
      <Section
        eyebrow={company.shortName}
        title={t(locale, company.name)}
        intro={t(locale, company.positioning)}
      >
        <div className="grid gap-5 lg:grid-cols-3">
          <article className="arkon-card lg:col-span-2">
            <h2 className="text-2xl font-black text-arkon-navy">{locale === "ar" ? "الخدمات الرئيسية" : "Key services"}</h2>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {company.services.map((service) => (
                <div key={service.en} className="rounded-xl border border-arkon-line bg-arkon-pearl2 p-4 text-sm font-semibold text-arkon-muted">
                  {t(locale, service)}
                </div>
              ))}
            </div>
          </article>
          <article className="arkon-card">
            <h2 className="text-2xl font-black text-arkon-navy">{locale === "ar" ? "نقاط القوة" : "Strengths"}</h2>
            <ul className="mt-5 grid gap-3 text-sm leading-7 text-arkon-muted">
              {company.strengths.map((strength) => <li key={strength.en}>{t(locale, strength)}</li>)}
            </ul>
          </article>
        </div>
      </Section>

      <Section className="bg-white" title={locale === "ar" ? "خدمات مرتبطة" : "Related service pages"}>
        <ServiceGrid locale={locale} services={companyServices} />
        <LocaleLink locale={locale} href="/contact" className="arkon-btn arkon-btn-gold mt-8">
          {company.cta[locale] || ui.requestProposal[locale]}
        </LocaleLink>
      </Section>
    </>
  );
}
