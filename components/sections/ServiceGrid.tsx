import type { Locale, Service } from "@/types";
import { companies, t } from "@/content/site";
import { LocaleLink } from "@/components/layout/LocaleLink";

interface ServiceGridProps {
  locale: Locale;
  services: Service[];
}

export function ServiceGrid({ locale, services }: ServiceGridProps) {
  return (
    <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
      {services.map((service) => {
        const company = companies.find((item) => item.id === service.companyId);
        return (
          <article key={service.slug} className="arkon-card">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-arkon-gold">{t(locale, service.category)}</p>
            <h3 className="mt-4 text-2xl font-bold text-white">{t(locale, service.title)}</h3>
            <p className="mt-3 text-sm leading-7 text-arkon-silver">{t(locale, service.summary)}</p>
            {company ? <p className="mt-5 text-xs text-arkon-silver2">{t(locale, company.name)}</p> : null}
            <LocaleLink locale={locale} href={`/services/${service.slug}`} className="arkon-text-link mt-5">
              {service.cta[locale]}
            </LocaleLink>
          </article>
        );
      })}
    </div>
  );
}
