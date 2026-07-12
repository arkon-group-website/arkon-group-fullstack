"use client";

import { useState } from "react";
import Link from "next/link";
import type { Locale } from "@/types";
import { navigation, ui } from "@/content/site";
import { localePath, oppositeLocale } from "@/lib/i18n";
import { cx } from "@/lib/utils";

interface HeaderProps {
  locale: Locale;
}

export function Header({ locale }: HeaderProps) {
  const [open, setOpen] = useState(false);
  const otherLocale = oppositeLocale(locale);
  const isArabic = locale === "ar";

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-arkon-navy/92 backdrop-blur-xl">
      <div className="arkon-container flex min-h-20 items-center justify-between gap-5">
        <Link href={localePath(locale)} className="group flex items-center gap-3" aria-label="ARKON Group">
          <span className="grid h-11 w-11 place-items-center rounded-sm border border-arkon-gold/50 bg-white/5 text-sm font-black text-arkon-gold shadow-arkon">
            AG
          </span>
          <span className="leading-tight">
            <span className="block text-sm font-semibold uppercase tracking-[0.24em] text-white">
              ARKON
            </span>
            <span className="block text-xs text-arkon-silver2">{isArabic ? "مجموعة أركون" : "Group"}</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label={isArabic ? "التنقل الرئيسي" : "Primary navigation"}>
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={localePath(locale, item.href)}
              className="rounded-sm px-3 py-2 text-sm font-medium text-arkon-silver transition hover:bg-white/8 hover:text-white focus:outline-none focus:ring-2 focus:ring-arkon-gold"
            >
              {item.label[locale]}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Link
            href={localePath(otherLocale)}
            className="rounded-sm border border-white/15 px-3 py-2 text-sm text-arkon-silver transition hover:border-arkon-gold hover:text-white focus:outline-none focus:ring-2 focus:ring-arkon-gold"
          >
            {isArabic ? "English" : "العربية"}
          </Link>
          <Link href={localePath(locale, "/contact")} className="arkon-btn arkon-btn-gold">
            {ui.requestProposal[locale]}
          </Link>
        </div>

        <button
          type="button"
          className="grid h-11 w-11 place-items-center rounded-sm border border-white/15 text-white lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={isArabic ? "القائمة" : "Menu"}
          onClick={() => setOpen((value) => !value)}
        >
          <span className="sr-only">{isArabic ? "القائمة" : "Menu"}</span>
          <span className={cx("block h-0.5 w-5 bg-current transition", open && "translate-y-1 rotate-45")} />
          <span className={cx("block h-0.5 w-5 bg-current transition", open && "hidden")} />
          <span className={cx("block h-0.5 w-5 bg-current transition", open && "-translate-y-1 -rotate-45")} />
        </button>
      </div>

      <div id="mobile-menu" className={cx("border-t border-white/10 lg:hidden", !open && "hidden")}>
        <nav className="arkon-container grid gap-2 py-5" aria-label={isArabic ? "التنقل عبر الجوال" : "Mobile navigation"}>
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={localePath(locale, item.href)}
              className="rounded-sm border border-white/10 px-4 py-3 text-sm font-medium text-arkon-silver"
              onClick={() => setOpen(false)}
            >
              {item.label[locale]}
            </Link>
          ))}
          <div className="mt-2 grid grid-cols-2 gap-2">
            <Link
              href={localePath(otherLocale)}
              className="arkon-btn arkon-btn-ghost"
              onClick={() => setOpen(false)}
            >
              {isArabic ? "English" : "العربية"}
            </Link>
            <Link
              href={localePath(locale, "/contact")}
              className="arkon-btn arkon-btn-gold"
              onClick={() => setOpen(false)}
            >
              {ui.requestProposal[locale]}
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
