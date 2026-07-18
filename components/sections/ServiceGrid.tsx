import type { Locale, Service } from "@/types";
import { companies, t } from "@/content/site";
import { LocaleLink } from "@/components/layout/LocaleLink";

interface ServiceGridProps {
  locale: Locale;
  services: Service[];
}

export function ServiceGrid({ locale, services }: ServiceGridProps) {
  return (
    <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
      {services.map((service) => {
        const company = companies.find((item) => item.id === service.companyId);
        return (
          <article key={service.slug} className="arkon-card-premium flex min-h-[22rem] flex-col p-6">
            <div className="mb-5 grid h-12 w-12 place-items-center rounded-xl border border-arkon-gold/30 bg-arkon-gold/10 text-xl text-arkon-gold shadow-glow">
              ✦
            </div>
            <p className="text-[11px] font-black uppercase tracking-[0.18em] text-arkon-gold">{t(locale, service.category)}</p>
            <h3 className="mt-3 text-xl font-black leading-snug text-arkon-navy">{t(locale, service.title)}</h3>
            <p className="mt-3 flex-1 text-sm leading-7 text-arkon-muted">{t(locale, service.summary)}</p>
            {company ? <p className="mt-5 text-xs font-semibold text-arkon-muted">{t(locale, company.name)}</p> : null}
            <LocaleLink locale={locale} href={`/services/${service.slug}`} className="arkon-text-link mt-5">
              {service.cta[locale]} <span aria-hidden="true">→</span>
            </LocaleLink>
          </article>
        );
      })}
    </div>
  );
}
