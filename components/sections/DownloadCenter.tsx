import type { Locale } from "@/types";
import { downloads, t, ui } from "@/content/site";
import { LocaleLink } from "@/components/layout/LocaleLink";

interface DownloadCenterProps {
  locale: Locale;
}

export function DownloadCenter({ locale }: DownloadCenterProps) {
  return (
    <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
      {downloads.map((asset) => (
        <article key={`${asset.title.en}-${asset.company.en}`} className="arkon-card">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-arkon-gold">{t(locale, asset.category)}</p>
              <h3 className="mt-4 text-xl font-bold text-white">{t(locale, asset.title)}</h3>
            </div>
            <span className="rounded-sm border border-white/10 px-2 py-1 text-xs text-arkon-silver2">{asset.type}</span>
          </div>
          <p className="mt-3 text-sm leading-7 text-arkon-silver">{t(locale, asset.description)}</p>
          <dl className="mt-5 grid grid-cols-2 gap-3 text-xs text-arkon-silver2">
            <div>
              <dt>{locale === "ar" ? "الشركة" : "Company"}</dt>
              <dd className="mt-1 text-white">{t(locale, asset.company)}</dd>
            </div>
            <div>
              <dt>{locale === "ar" ? "الإصدار" : "Version"}</dt>
              <dd className="mt-1 text-white">{asset.version}</dd>
            </div>
          </dl>
          <LocaleLink locale={locale} href="/contact" className="arkon-btn arkon-btn-ghost mt-6 w-full">
            {asset.gated ? ui.gated[locale] : ui.download[locale]}
          </LocaleLink>
        </article>
      ))}
    </div>
  );
}
