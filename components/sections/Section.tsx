import type { ReactNode } from "react";
import { cx } from "@/lib/utils";

interface SectionProps {
  eyebrow?: string;
  title: string;
  intro?: string;
  children: ReactNode;
  className?: string;
}

export function Section({ eyebrow, title, intro, children, className }: SectionProps) {
  return (
    <section className={cx("py-16 sm:py-20", className)}>
      <div className="arkon-container">
        <div className="mx-auto mb-9 max-w-3xl text-center">
          {eyebrow ? <p className="arkon-eyebrow">{eyebrow}</p> : null}
          <h2 className="arkon-section-title">{title}</h2>
          {intro ? <p className="arkon-section-intro">{intro}</p> : null}
        </div>
        {children}
      </div>
    </section>
  );
}
