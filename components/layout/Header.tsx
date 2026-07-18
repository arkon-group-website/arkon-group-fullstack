"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import type { Locale } from "@/types";
import { companies, navigation, services, site, t, ui } from "@/content/site";
import { localePath, oppositeLocale } from "@/lib/i18n";
import { cx } from "@/lib/utils";

interface HeaderProps {
  locale: Locale;
}

export function Header({ locale }: HeaderProps) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const otherLocale = oppositeLocale(locale);
  const isArabic = locale === "ar";
  const currentPath = pathname.replace(/^\/(en|ar)(?=\/|$)/, "") || "/";
  const switchHref = localePath(otherLocale, currentPath);
  const serviceGroups = companies.map((company) => ({
    company,
    services: services.filter((service) => service.companyId === company.id).slice(0, 4)
  }));

  return (
    <header className="sticky top-0 z-50 border-b border-arkon-line bg-white/90 shadow-sm backdrop-blur-xl">
      <div className="border-b border-arkon-line bg-arkon-pearl/90">
        <div className="arkon-container flex min-h-10 flex-wrap items-center justify-between gap-x-5 gap-y-2 py-2 text-xs font-semibold text-arkon-muted">
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
            <a href="mailto:info@arkonec.com" className="inline-flex items-center gap-2 hover:text-arkon-gold">
              <span className="text-arkon-gold">✉</span>
              info@arkonec.com
            </a>
            <a href="tel:+966920014917" className="inline-flex items-center gap-2 hover:text-arkon-gold">
              <span className="text-arkon-gold">☎</span>
              9200 14917
            </a>
            <span className="inline-flex items-center gap-2">
              <span className="text-arkon-gold">⌖</span>
              {isArabic ? "المملكة العربية السعودية" : "KSA"}
            </span>
          </div>

          <div className="hidden items-center gap-2 md:flex">
            <Link href={localePath(locale, "/download-center")} className="rounded-md border border-arkon-line bg-white px-3 py-2 text-arkon-navy transition hover:border-arkon-gold">
              {ui.downloadCenter[locale]}
            </Link>
            <Link href={localePath(locale, "/request-proposal")} className="rounded-md bg-arkon-gold px-3 py-2 font-black text-white shadow-sm transition hover:bg-arkon-navy">
              {ui.requestProposalShort[locale]}
            </Link>
            <span className="mx-1 h-5 w-px bg-arkon-line" />
            <Link href={switchHref} className="font-black text-arkon-navy transition hover:text-arkon-gold">
              {isArabic ? "EN" : "العربية"}
            </Link>
          </div>
        </div>
      </div>

      <div className="arkon-container flex min-h-20 items-center justify-between gap-5">
        <Link href={localePath(locale)} className="flex items-center" aria-label="ARKON Group">
          <Image src={site.logo} alt="ARKON Group" width={184} height={54} priority className="h-14 w-auto object-contain" />
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label={isArabic ? "التنقل الرئيسي" : "Primary navigation"}>
          {navigation.map((item) => {
            const href = localePath(locale, item.href);
            const active = item.href === "/" ? pathname === href : pathname.startsWith(href);
            const isCompanies = item.href === "/companies";
            const isServices = item.href === "/services";
            const hasMenu = isCompanies || isServices;

            return (
              <div key={item.href} className="group relative">
                <Link
                  href={href}
                  className={cx(
                    "relative rounded-md px-3 py-2 text-sm font-bold text-arkon-navy transition hover:text-arkon-gold focus:outline-none focus:ring-2 focus:ring-arkon-gold/35",
                    active && "text-arkon-gold after:absolute after:inset-x-3 after:-bottom-5 after:h-0.5 after:bg-arkon-gold"
                  )}
                >
                  <span className="inline-flex items-center gap-1">
                    {item.label[locale]}
                    {hasMenu ? <span aria-hidden="true" className="text-[10px]">⌄</span> : null}
                  </span>
                </Link>

                {isCompanies ? (
                  <div className="invisible absolute start-0 top-full w-[25rem] translate-y-3 rounded-2xl border border-arkon-line bg-white/96 p-3 opacity-0 shadow-arkon backdrop-blur-xl transition group-hover:visible group-hover:translate-y-5 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-5 group-focus-within:opacity-100">
                    <div className="grid gap-2">
                      {companies.map((company) => (
                        <Link key={company.id} href={localePath(locale, `/companies/${company.slug}`)} className="flex items-center gap-3 rounded-xl p-3 text-sm transition hover:bg-arkon-pearl2">
                          <span className="grid h-12 w-16 shrink-0 place-items-center rounded-lg bg-white shadow-sm">
                            <Image src={company.logo} alt="" width={64} height={36} className="max-h-9 w-auto object-contain" />
                          </span>
                          <span>
                            <span className="block font-black text-arkon-navy">{t(locale, company.name)}</span>
                            <span className="mt-1 block text-xs font-semibold text-arkon-muted">{t(locale, company.positioning)}</span>
                          </span>
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : null}

                {isServices ? (
                  <div className="invisible absolute end-0 top-full w-[46rem] translate-y-3 rounded-2xl border border-arkon-line bg-white/96 p-5 opacity-0 shadow-arkon backdrop-blur-xl transition group-hover:visible group-hover:translate-y-5 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-5 group-focus-within:opacity-100">
                    <div className="grid gap-4 md:grid-cols-2">
                      {serviceGroups.map(({ company, services: items }) => (
                        <div key={company.id} className="rounded-xl border border-arkon-line bg-arkon-pearl2 p-4">
                          <Link href={localePath(locale, `/companies/${company.slug}`)} className="text-sm font-black text-arkon-navy hover:text-arkon-gold">
                            {t(locale, company.name)}
                          </Link>
                          <div className="mt-3 grid gap-2">
                            {items.map((service) => (
                              <Link key={service.slug} href={localePath(locale, `/services/${service.slug}`)} className="text-xs font-bold leading-5 text-arkon-muted hover:text-arkon-gold">
                                {t(locale, service.title)}
                              </Link>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ) : null}
              </div>
            );
          })}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Link href={localePath(locale, "/download-center")} className="arkon-btn arkon-btn-ghost min-h-10 px-4 py-2">
            {ui.downloadCenter[locale]}
          </Link>
          <Link href={localePath(locale, "/request-proposal")} className="arkon-btn arkon-btn-gold min-h-10 px-4 py-2">
            {ui.requestProposalShort[locale]}
          </Link>
        </div>

        <button
          type="button"
          className="grid h-11 w-11 place-items-center rounded-md border border-arkon-line bg-white text-arkon-navy lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={isArabic ? "القائمة" : "Menu"}
          onClick={() => setOpen((value) => !value)}
        >
          <span className="sr-only">{isArabic ? "القائمة" : "Menu"}</span>
          <span className={cx("block h-0.5 w-5 bg-current transition", open && "translate-y-1.5 rotate-45")} />
          <span className={cx("block h-0.5 w-5 bg-current transition", open && "opacity-0")} />
          <span className={cx("block h-0.5 w-5 bg-current transition", open && "-translate-y-1.5 -rotate-45")} />
        </button>
      </div>

      <div id="mobile-menu" className={cx("border-t border-arkon-line bg-white lg:hidden", !open && "hidden")}>
        <nav className="arkon-container grid gap-2 py-5" aria-label={isArabic ? "التنقل عبر الجوال" : "Mobile navigation"}>
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={localePath(locale, item.href)}
              className="rounded-md border border-arkon-line bg-arkon-pearl2 px-4 py-3 text-sm font-bold text-arkon-navy"
              onClick={() => setOpen(false)}
            >
              {item.label[locale]}
            </Link>
          ))}
          <div className="grid gap-2 rounded-xl border border-arkon-line bg-arkon-pearl2 p-3">
            <p className="px-1 text-xs font-black uppercase tracking-[0.18em] text-arkon-gold">{isArabic ? "الشركات" : "Companies"}</p>
            {companies.map((company) => (
              <Link key={company.id} href={localePath(locale, `/companies/${company.slug}`)} className="rounded-lg bg-white px-3 py-2 text-sm font-bold text-arkon-navy" onClick={() => setOpen(false)}>
                {t(locale, company.name)}
              </Link>
            ))}
          </div>
          <div className="mt-2 grid gap-2 sm:grid-cols-3">
            <Link href={switchHref} className="arkon-btn arkon-btn-ghost" onClick={() => setOpen(false)}>
              {isArabic ? "English" : "العربية"}
            </Link>
            <Link href={localePath(locale, "/download-center")} className="arkon-btn arkon-btn-ghost" onClick={() => setOpen(false)}>
              {ui.downloadCenter[locale]}
            </Link>
            <Link href={localePath(locale, "/request-proposal")} className="arkon-btn arkon-btn-gold" onClick={() => setOpen(false)}>
              {ui.requestProposalShort[locale]}
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
