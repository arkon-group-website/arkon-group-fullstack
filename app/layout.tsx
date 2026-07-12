import type { Metadata } from "next";
import type { ReactNode } from "react";
import "@/styles/globals.css";
import { site } from "@/content/site";
import { normalizeBaseUrl } from "@/lib/utils";

export const metadata: Metadata = {
  metadataBase: new URL(normalizeBaseUrl()),
  title: {
    default: "ARKON Group",
    template: "%s | ARKON Group"
  },
  description: site.description.en
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
