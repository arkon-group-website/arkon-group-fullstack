"use client";

import { useMemo, useState } from "react";
import type { Locale } from "@/types";
import { downloads, t, ui } from "@/content/site";
import { LocaleLink } from "@/components/layout/LocaleLink";

interface DownloadCenterProps {
  locale: Locale;
}

export function DownloadCenter({ locale }: DownloadCenterProps) {
  const [activeCategory, setActiveCategory] = useState("all");
  const categories = useMemo(
    () => ["all", ...Array.from(new Set(downloads.map((asset) => asset.category.en)))],
    []
  );
  const visibleDownloads = activeCategory === "all" ? downloads : downloads.filter((asset) => asset.category.en === activeCategory);
  const isArabic = locale === "ar";

  return (
    <div>
      <div className="mb-8 flex flex-wrap justify-center gap-2">
        {categories.map((category) => {
          const label = category === "all" ? (isArabic ? "كل الملفات" : "All assets") : downloads.find((asset) => asset.category.en === category)?.category[locale] || category;
          const active = activeCategory === category;

          return (
            <button
              key={category}
              type="button"
              onClick={() => setActiveCategory(category)}
              className={active ? "arkon-btn arkon-btn-gold min-h-10 px-4 py-2" : "arkon-btn arkon-btn-ghost min-h-10 px-4 py-2"}
            >
              {label}
            </button>
          );
        })}
      </div>

      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {visibleDownloads.map((asset) => (
          <article key={`${asset.title.en}-${asset.company.en}`} className="arkon-card-premium flex min-h-[22rem] flex-col p-6">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-arkon-gold">{t(locale, asset.category)}</p>
                <h3 className="mt-4 text-xl font-black text-arkon-navy">{t(locale, asset.title)}</h3>
              </div>
              <span className="rounded-md border border-arkon-line bg-arkon-pearl2 px-2 py-1 text-xs font-bold text-arkon-muted">{asset.type}</span>
            </div>
            <p className="mt-3 flex-1 text-sm leading-7 text-arkon-muted">{t(locale, asset.description)}</p>
            <dl className="mt-5 grid grid-cols-2 gap-3 text-xs text-arkon-muted">
              <div>
                <dt>{isArabic ? "الشركة" : "Company"}</dt>
                <dd className="mt-1 font-bold text-arkon-navy">{t(locale, asset.company)}</dd>
              </div>
              <div>
                <dt>{isArabic ? "اللغة" : "Language"}</dt>
                <dd className="mt-1 font-bold text-arkon-navy">{asset.language}</dd>
              </div>
              <div>
                <dt>{isArabic ? "الإصدار" : "Version"}</dt>
                <dd className="mt-1 font-bold text-arkon-navy">{asset.version}</dd>
              </div>
              <div>
                <dt>{isArabic ? "آخر تحديث" : "Last updated"}</dt>
                <dd className="mt-1 font-bold text-arkon-navy">{asset.updated}</dd>
              </div>
            </dl>
            <LocaleLink locale={locale} href={asset.gated ? "/request-proposal" : "/contact"} className="arkon-btn arkon-btn-ghost mt-6 w-full">
              {asset.gated ? ui.gated[locale] : ui.download[locale]}
            </LocaleLink>
          </article>
        ))}
      </div>
    </div>
  );
}
