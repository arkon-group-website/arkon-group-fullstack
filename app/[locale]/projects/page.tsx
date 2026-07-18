import type { Metadata } from "next";
import Image from "next/image";
import type { Locale } from "@/types";
import { companies, site, t } from "@/content/site";
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
    path: "/projects",
    title: locale === "ar" ? "مشاريع مجموعة أركون" : "ARKON Group Projects",
    description: locale === "ar" ? "منطقة مخصصة لمراجع المشاريع بعد اعتمادها للنشر." : "A publication-ready area for approved ARKON Group project references."
  });
}

export default async function ProjectsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: value } = await params;
  const locale: Locale = isLocale(value) ? value : "en";

  return (
    <>
      <JsonLd data={breadcrumbSchema(locale, [
        { name: locale === "ar" ? "الرئيسية" : "Home", path: "/" },
        { name: locale === "ar" ? "المشاريع" : "Projects", path: "/projects" }
      ])} />
      <Section
        eyebrow={locale === "ar" ? "المشاريع" : "Projects"}
        title={locale === "ar" ? "مركز مراجع المشاريع المعتمدة للنشر" : "Approved Project Reference Center"}
        intro={locale === "ar" ? "لا يتم نشر أسماء العملاء أو تفاصيل المشاريع إلا بعد التأكيد والموافقة، ويمكن استخدام هذه الصفحة لاحقاً لتنظيم المراجع حسب الشركة والخدمة." : "Client names and project details should only be published after confirmation and approval; this page is structured to organize references by company and service."}
      >
        <div className="arkon-card-premium mb-8 overflow-hidden p-0">
          <div className="relative min-h-72 bg-arkon-navy">
            <Image src={site.heroImage} alt="" fill sizes="100vw" className="object-cover opacity-75" />
            <div className="absolute inset-0 bg-gradient-to-r from-arkon-navy/90 via-arkon-navy/42 to-transparent" />
            <div className="absolute bottom-7 start-7 max-w-2xl">
              <p className="arkon-eyebrow">{locale === "ar" ? "سياسة نشر محافظة" : "Controlled publication"}</p>
              <h2 className="mt-3 text-3xl font-black text-white">{locale === "ar" ? "مراجع قابلة للإضافة بعد اعتماد العميل والمحتوى" : "Reference entries can be added after client and content approval"}</h2>
            </div>
          </div>
        </div>
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-5">
          {companies.map((company) => (
            <LocaleLink key={company.id} locale={locale} href={`/companies/${company.slug}`} className="arkon-card-premium block p-5">
              <Image src={company.logo} alt={t(locale, company.name)} width={160} height={62} className="mb-5 max-h-14 w-auto object-contain" />
              <p className="text-xs font-black uppercase tracking-[0.18em] text-arkon-gold">{company.shortName}</p>
              <h2 className="mt-3 text-xl font-black text-arkon-navy">{t(locale, company.name)}</h2>
              <p className="mt-4 text-sm leading-7 text-arkon-muted">{t(locale, company.summary)}</p>
            </LocaleLink>
          ))}
        </div>
      </Section>
    </>
  );
}
