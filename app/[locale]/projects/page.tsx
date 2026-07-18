import type { Metadata } from "next";
import type { Locale } from "@/types";
import { companies, t } from "@/content/site";
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
        title={locale === "ar" ? "مراجع المشاريع تُضاف بعد الاعتماد" : "Approved Project References Will Live Here"}
        intro={locale === "ar" ? "لا يتم نشر أسماء العملاء أو تفاصيل المشاريع إلا بعد التأكيد والموافقة." : "Client names, project details, and reference images should only be published after confirmation and approval."}
      >
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-5">
          {companies.map((company) => (
            <LocaleLink key={company.id} locale={locale} href={`/companies/${company.slug}`} className="arkon-card block">
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
