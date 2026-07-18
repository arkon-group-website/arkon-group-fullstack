import Image from "next/image";
import type { Locale } from "@/types";
import { companies, t, ui } from "@/content/site";
import { LocaleLink } from "@/components/layout/LocaleLink";

interface CompanyGridProps {
  locale: Locale;
}

export function CompanyGrid({ locale }: CompanyGridProps) {
  return (
    <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-5">
      {companies.map((company) => (
        <article key={company.id} className="arkon-card-premium flex min-h-[23rem] flex-col p-5 text-center">
          <div className="mb-5 flex h-24 items-center justify-center rounded-xl bg-gradient-to-br from-white via-arkon-pearl2 to-arkon-beige/35 p-4">
            <Image src={company.logo} alt={t(locale, company.name)} width={170} height={68} className="max-h-16 w-auto object-contain" />
          </div>
          <p className="text-[11px] font-black uppercase tracking-[0.18em] text-arkon-gold">{company.shortName}</p>
          <h3 className="text-lg font-black leading-snug text-arkon-navy">{t(locale, company.name)}</h3>
          <p className="mt-3 flex-1 text-sm leading-7 text-arkon-muted">{t(locale, company.summary)}</p>
          <LocaleLink locale={locale} href={`/companies/${company.slug}`} className="arkon-text-link mt-5 justify-center">
            {ui.learnMore[locale]} <span aria-hidden="true">→</span>
          </LocaleLink>
        </article>
      ))}
    </div>
  );
}
