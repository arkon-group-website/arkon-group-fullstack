import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import type { Locale } from "@/types";
import { companies, services, site, t, ui } from "@/content/site";
import { isLocale, locales } from "@/lib/i18n";
import { pageMetadata } from "@/lib/metadata";
import { breadcrumbSchema, serviceSchema } from "@/lib/schema";
import { JsonLd } from "@/components/JsonLd";
import { Section } from "@/components/sections/Section";
import { ServiceGrid } from "@/components/sections/ServiceGrid";
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
  const relatedServices = service.relatedSlugs
    .map((relatedSlug) => services.find((item) => item.slug === relatedSlug))
    .filter((item): item is typeof services[number] => Boolean(item));

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

      <section className="relative overflow-hidden bg-arkon-pearl2 py-16 sm:py-20">
        <div className="absolute inset-0 bg-pearl-radial" />
        <div className="absolute inset-0 bg-command-grid bg-[length:42px_42px] opacity-35" />
        <div className="arkon-container relative grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div>
            <p className="arkon-eyebrow">{t(locale, service.category)}</p>
            <h1 className="mt-4 max-w-3xl text-4xl font-black leading-tight text-arkon-navy sm:text-5xl">{t(locale, service.title)}</h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-arkon-muted">{t(locale, service.summary)}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <LocaleLink locale={locale} href="/request-proposal" className="arkon-btn arkon-btn-gold">
                {service.cta[locale]}
              </LocaleLink>
              {company ? (
                <LocaleLink locale={locale} href={`/companies/${company.slug}`} className="arkon-btn arkon-btn-ghost">
                  {locale === "ar" ? "الشركة المرتبطة" : "Related company"}
                </LocaleLink>
              ) : null}
            </div>
          </div>

          <div className="arkon-card-premium min-h-[23rem] p-5">
            <div className="relative min-h-[22rem] overflow-hidden rounded-xl bg-arkon-navy">
              <Image src={site.heroImage} alt="" fill sizes="(min-width: 1024px) 46vw, 100vw" className="object-cover opacity-70" />
              <div className="absolute inset-0 bg-gradient-to-r from-arkon-navy/92 via-arkon-navy/50 to-transparent" />
              <div className="absolute start-6 top-6 rounded-2xl border border-white/15 bg-white/90 p-4 shadow-glow backdrop-blur-xl">
                {company ? <Image src={company.logo} alt={t(locale, company.name)} width={210} height={82} className="max-h-16 w-auto object-contain" /> : null}
              </div>
              <div className="absolute bottom-6 start-6 max-w-md">
                <p className="text-xs font-black uppercase tracking-[0.2em] text-arkon-gold">{locale === "ar" ? "مسار خدمة منظم" : "Structured service pathway"}</p>
                <h2 className="mt-3 text-2xl font-black text-white">{company ? t(locale, company.name) : site.name}</h2>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Section
        className="bg-white"
        eyebrow={locale === "ar" ? "نطاق الخدمة" : "Service scope"}
        title={locale === "ar" ? "ما الذي تغطيه الخدمة" : "What This Service Covers"}
      >
        <div className="grid gap-5 lg:grid-cols-4">
          <InfoList title={locale === "ar" ? "يغطي" : "Covers"} items={service.covers.map((item) => t(locale, item))} />
          <InfoList title={locale === "ar" ? "المخرجات" : "Deliverables"} items={service.deliverables.map((item) => t(locale, item))} />
          <InfoList title={locale === "ar" ? "العملاء المناسبون" : "Typical clients"} items={service.clients.map((item) => t(locale, item))} />
          <InfoList title={locale === "ar" ? "منهجية العمل" : "Process"} items={service.process.map((item) => t(locale, item))} />
        </div>
      </Section>

      <Section
        eyebrow={locale === "ar" ? "الجاهزية والامتثال" : "Readiness and compliance"}
        title={locale === "ar" ? "صياغة محافظة وواضحة" : "Conservative and Clear Positioning"}
        intro={t(locale, service.complianceNote)}
      >
        <div className="grid gap-5 lg:grid-cols-[0.8fr_1.2fr]">
          {company ? (
            <LocaleLink locale={locale} href={`/companies/${company.slug}`} className="arkon-card-premium block p-6">
              <p className="arkon-eyebrow">{locale === "ar" ? "الشركة المرتبطة" : "Related company"}</p>
              <div className="mt-5 flex h-24 items-center rounded-xl bg-white p-3">
                <Image src={company.logo} alt={t(locale, company.name)} width={230} height={92} className="max-h-20 w-auto object-contain" />
              </div>
              <h2 className="mt-5 text-2xl font-black text-arkon-navy">{t(locale, company.name)}</h2>
              <p className="mt-3 text-sm leading-7 text-arkon-muted">{t(locale, company.positioning)}</p>
            </LocaleLink>
          ) : null}

          <div className="arkon-navy-panel relative overflow-hidden rounded-3xl p-7 sm:p-9">
            <div className="absolute inset-0 bg-command-grid bg-[length:44px_44px] opacity-[0.08]" />
            <div className="relative">
              <p className="arkon-eyebrow">{locale === "ar" ? "طلب الخدمة" : "Request this service"}</p>
              <h2 className="mt-3 text-3xl font-black text-white">{locale === "ar" ? "شاركنا نطاق المشروع والجدول الزمني" : "Share the project scope and timeline"}</h2>
              <p className="mt-4 max-w-2xl text-sm leading-7 text-white/72">
                {locale === "ar" ? "سيتم توجيه طلبكم حسب الخدمة والشركة المرتبطة مع الحفاظ على لغة مهنية واضحة." : "Your inquiry will be routed by service and related company with clear professional follow-up."}
              </p>
              <LocaleLink locale={locale} href="/request-proposal" className="arkon-btn arkon-btn-gold mt-6">
                {ui.requestProposal[locale]}
              </LocaleLink>
            </div>
          </div>
        </div>
      </Section>

      {relatedServices.length > 0 ? (
        <Section className="bg-white" title={locale === "ar" ? "خدمات مرتبطة" : "Related Services"}>
          <ServiceGrid locale={locale} services={relatedServices} />
        </Section>
      ) : null}
    </>
  );
}

function InfoList({ title, items }: { title: string; items: string[] }) {
  return (
    <article className="arkon-card-premium p-6">
      <h2 className="text-2xl font-black text-arkon-navy">{title}</h2>
      <ul className="mt-5 grid gap-3 text-sm leading-7 text-arkon-muted">
        {items.map((item) => <li key={item} className="arkon-list-check">{item}</li>)}
      </ul>
    </article>
  );
}
