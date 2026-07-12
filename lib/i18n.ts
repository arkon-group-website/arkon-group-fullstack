import type { Locale } from "@/types";

export const locales: Locale[] = ["en", "ar"];

export const defaultLocale: Locale = "en";

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}

export function dir(locale: Locale): "ltr" | "rtl" {
  return locale === "ar" ? "rtl" : "ltr";
}

export function localePath(locale: Locale, path = "/"): string {
  const cleanPath = path.startsWith("/") ? path : `/${path}`;
  return `/${locale}${cleanPath === "/" ? "" : cleanPath}`;
}

export function oppositeLocale(locale: Locale): Locale {
  return locale === "en" ? "ar" : "en";
}
