import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";
import type { Locale } from "@/types";
import { localePath } from "@/lib/i18n";

interface LocaleLinkProps extends Omit<ComponentProps<typeof Link>, "href"> {
  locale: Locale;
  href: string;
  children: ReactNode;
}

export function LocaleLink({ locale, href, children, ...props }: LocaleLinkProps) {
  return (
    <Link href={localePath(locale, href)} {...props}>
      {children}
    </Link>
  );
}
