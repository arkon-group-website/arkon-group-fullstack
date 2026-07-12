import type { Locale } from "@/types";
import type { ReactNode } from "react";
import { companies, navigation, services, site, t, ui } from "@/content/site";
import { LocaleLink } from "@/components/layout/LocaleLink";

interface FooterProps {
  locale: Locale;
}

export function Footer({ locale }: FooterProps) {
  const topServices = services.slice(0, 6);

  return (
    <footer className="border-t border-white/10 bg-[#030B15]">
      <div className="arkon-container grid gap-10 py-14 lg:grid-cols-[1.2fr_0.8fr_0.8fr_0.8fr]">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-arkon-gold">ARKON Group</p>
          <p className="mt-4 max-w-md text-sm leading-7 text-arkon-silver">{site.description[locale]}</p>
          <LocaleLink locale={locale} href="/contact" className="arkon-btn arkon-btn-gold mt-6 inline-flex">
            {ui.speakTeam[locale]}
          </LocaleLink>
        </div>

        <FooterColumn title={locale === "ar" ? "الشركات" : "Companies"}>
          {companies.map((company) => (
            <LocaleLink key={company.id} locale={locale} href={`/companies/${company.slug}`}>
              {t(locale, company.name)}
            </LocaleLink>
          ))}
        </FooterColumn>

        <FooterColumn title={locale === "ar" ? "الخدمات" : "Services"}>
          {topServices.map((service) => (
            <LocaleLink key={service.slug} locale={locale} href={`/services/${service.slug}`}>
              {t(locale, service.title)}
            </LocaleLink>
          ))}
        </FooterColumn>

        <FooterColumn title={locale === "ar" ? "روابط سريعة" : "Quick links"}>
          {navigation.map((item) => (
            <LocaleLink key={item.href} locale={locale} href={item.href}>
              {item.label[locale]}
            </LocaleLink>
          ))}
          <LocaleLink locale={locale} href="/privacy">{locale === "ar" ? "سياسة الخصوصية" : "Privacy"}</LocaleLink>
          <LocaleLink locale={locale} href="/terms">{locale === "ar" ? "الشروط" : "Terms"}</LocaleLink>
        </FooterColumn>
      </div>
      <div className="border-t border-white/10">
        <div className="arkon-container flex flex-col gap-3 py-5 text-xs text-arkon-silver2 md:flex-row md:items-center md:justify-between">
          <p>{locale === "ar" ? "حقوق النشر محفوظة لمجموعة أركون. جميع الحقوق محفوظة." : "Copyright ARKON Group. All rights reserved."}</p>
          <p>{site.tagline[locale]}</p>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div>
      <h2 className="text-sm font-semibold text-white">{title}</h2>
      <div className="mt-4 grid gap-3 text-sm text-arkon-silver2">
        {children}
      </div>
    </div>
  );
}
