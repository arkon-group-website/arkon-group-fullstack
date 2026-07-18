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
        <article key={company.id} className="arkon-card flex min-h-[21rem] flex-col text-center">
          <div className="mb-5 flex h-20 items-center justify-center rounded-lg bg-gradient-to-br from-white to-arkon-pearl2 p-3">
            <Image src={company.logo} alt={t(locale, company.name)} width={150} height={52} className="max-h-14 w-auto object-contain" unoptimized />
          </div>
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
