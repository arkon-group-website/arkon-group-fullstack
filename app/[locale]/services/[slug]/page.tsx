import type { Metadata } from "next";
import { notFound } from "next/navigation";
import type { Locale } from "@/types";
import { companies, services, t } from "@/content/site";
import { isLocale, locales } from "@/lib/i18n";
import { pageMetadata } from "@/lib/metadata";
import { breadcrumbSchema, serviceSchema } from "@/lib/schema";
import { JsonLd } from "@/components/JsonLd";
import { Section } from "@/components/sections/Section";
import { LocaleLink } from "@/components/layout/LocaleLink";

export function generateStaticParams() {
  return locales.flatMap((locale) => services.map((service) => ({ locale, slug: service.slug })));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string; slug: string }> }): Promise<Metadata> {
  const { locale: value, slug } = await params;
  const locale = isLocale(value) ? value : "en";
  const service = services.find((item) => item.slug === slug);
  if (!service) return {};
  return pageMetadata({
    locale,
    path: `/services/${service.slug}`,
    title: t(locale, service.title),
    description: t(locale, service.summary)
  });
}

export default async function ServicePage({ params }: { params: Promise<{ locale: string; slug: string }> }) {
  const { locale: value, slug } = await params;
  const locale: Locale = isLocale(value) ? value : "en";
  const service = services.find((item) => item.slug === slug);
  if (!service) notFound();
  const company = companies.find((item) => item.id === service.companyId);

  return (
    <>
      <JsonLd data={[
        breadcrumbSchema(locale, [
          { name: locale === "ar" ? "الرئيسية" : "Home", path: "/" },
          { name: locale === "ar" ? "الخدمات" : "Services", path: "/services" },
          { name: t(locale, service.title), path: `/services/${service.slug}` }
        ]),
        serviceSchema(locale, service)
      ]} />
      <Section eyebrow={t(locale, service.category)} title={t(locale, service.title)} intro={t(locale, service.summary)}>
        <div className="grid gap-5 lg:grid-cols-3">
          <InfoList title={locale === "ar" ? "المخرجات" : "Key deliverables"} items={service.deliverables.map((item) => t(locale, item))} />
          <InfoList title={locale === "ar" ? "العملاء المناسبون" : "Typical clients"} items={service.clients.map((item) => t(locale, item))} />
          <InfoList title={locale === "ar" ? "منهجية العمل" : "Process"} items={service.process.map((item) => t(locale, item))} />
        </div>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <LocaleLink locale={locale} href="/contact" className="arkon-btn arkon-btn-gold">
            {service.cta[locale]}
          </LocaleLink>
          {company ? (
            <LocaleLink locale={locale} href={`/companies/${company.slug}`} className="arkon-btn arkon-btn-ghost">
              {locale === "ar" ? "الشركة المرتبطة" : "Related company"}
            </LocaleLink>
          ) : null}
        </div>
      </Section>
    </>
  );
}

function InfoList({ title, items }: { title: string; items: string[] }) {
  return (
    <article className="arkon-card">
      <h2 className="text-2xl font-black text-arkon-navy">{title}</h2>
      <ul className="mt-5 grid gap-3 text-sm leading-7 text-arkon-muted">
        {items.map((item) => <li key={item}>{item}</li>)}
      </ul>
    </article>
  );
}
