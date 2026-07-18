import Image from "next/image";
import type { Locale } from "@/types";
import type { ReactNode } from "react";
import { companies, navigation, services, site, t, ui } from "@/content/site";
import { LocaleLink } from "@/components/layout/LocaleLink";

interface FooterProps {
  locale: Locale;
}

export function Footer({ locale }: FooterProps) {
  const isArabic = locale === "ar";
  const topServices = services.slice(0, 7);

  return (
    <footer className="relative overflow-hidden bg-arkon-navy text-white">
      <div className="absolute inset-0 bg-command-grid bg-[length:54px_54px] opacity-[0.06]" />
      <div className="absolute -start-28 top-10 h-72 w-72 rounded-full bg-arkon-gold/10 blur-3xl" />
      <div className="arkon-container relative grid gap-10 py-14 lg:grid-cols-[1.25fr_0.7fr_0.9fr_0.85fr_0.75fr_0.95fr]">
        <div>
          <div className="inline-flex rounded-xl bg-white p-2 shadow-glow">
            <Image src={site.logo} alt="ARKON Group" width={170} height={50} className="h-12 w-auto object-contain" />
          </div>
          <p className="mt-5 max-w-sm text-sm leading-7 text-white/70">{site.description[locale]}</p>
          <div className="mt-6 flex gap-3 text-sm font-black text-white/70">
            {["in", "X", "◎", "f"].map((item) => (
              <span key={item} className="grid h-9 w-9 place-items-center rounded-full border border-white/15 hover:border-arkon-gold hover:text-arkon-gold">
                {item}
              </span>
            ))}
          </div>
        </div>

        <FooterColumn title={isArabic ? "روابط سريعة" : "Quick Links"}>
          {navigation.map((item) => (
            <LocaleLink key={item.href} locale={locale} href={item.href}>
              {item.label[locale]}
            </LocaleLink>
          ))}
        </FooterColumn>

        <FooterColumn title={isArabic ? "الشركات" : "Companies"}>
          {companies.map((company) => (
            <LocaleLink key={company.id} locale={locale} href={`/companies/${company.slug}`}>
              {t(locale, company.name)}
            </LocaleLink>
          ))}
        </FooterColumn>

        <FooterColumn title={isArabic ? "خدماتنا" : "Our Services"}>
          {topServices.map((service) => (
            <LocaleLink key={service.slug} locale={locale} href={`/services/${service.slug}`}>
              {service.title[locale]}
            </LocaleLink>
          ))}
        </FooterColumn>

        <FooterColumn title={isArabic ? "الدعم" : "Support"}>
          <LocaleLink locale={locale} href="/download-center">{ui.downloadCenter[locale]}</LocaleLink>
          <LocaleLink locale={locale} href="/request-proposal">{ui.requestProposalShort[locale]}</LocaleLink>
          <LocaleLink locale={locale} href="/privacy">{isArabic ? "سياسة الخصوصية" : "Privacy Policy"}</LocaleLink>
          <LocaleLink locale={locale} href="/terms">{isArabic ? "الشروط والأحكام" : "Terms & Conditions"}</LocaleLink>
        </FooterColumn>

        <div>
          <h2 className="text-sm font-black text-white">{isArabic ? "تواصل معنا" : "Contact Us"}</h2>
          <div className="mt-4 grid gap-3 text-sm leading-7 text-white/70">
            <a href="tel:+966920014917" className="hover:text-arkon-gold">9200 14917</a>
            <a href="mailto:info@arkonec.com" className="hover:text-arkon-gold">info@arkonec.com</a>
            <p>{isArabic ? "جدة، الرياض، المملكة العربية السعودية" : "Jeddah, Riyadh, Kingdom of Saudi Arabia"}</p>
          </div>
          <LocaleLink locale={locale} href="/request-proposal" className="arkon-btn arkon-btn-gold mt-6">
            {ui.requestProposalShort[locale]} <span aria-hidden="true">→</span>
          </LocaleLink>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="arkon-container relative flex flex-col gap-3 py-5 text-xs text-white/60 md:flex-row md:items-center md:justify-between">
          <p>{isArabic ? "© 2026 مجموعة أركون. جميع الحقوق محفوظة." : "© 2026 ARKON Group. All rights reserved."}</p>
          <p>{isArabic ? "مصمم بمعايير مؤسسية للمشاريع السعودية." : "Designed with excellence. Built for the future."}</p>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div>
      <h2 className="text-sm font-black text-white">{title}</h2>
      <div className="mt-4 grid gap-3 text-sm text-white/65">
        {children}
      </div>
    </div>
  );
}
