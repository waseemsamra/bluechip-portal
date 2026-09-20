import type { JSX } from "react";

export default function BreadcrumbRibbon(): JSX.Element {
  return (
    <section className="w-full px-margin-mobile md:px-gutter lg:px-margin pt-6 pb-4">
      <div className="max-w-[1440px] mx-auto flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="flex items-center gap-2 font-body-sm text-body-sm text-on-surface-variant">
          <a
            className="hover:text-primary transition-colors flex items-center gap-1"
            href="#capabilities"
          >
            <span className="material-symbols-outlined text-[16px]">
              layers
            </span>{" "}
            Capabilities
          </a>
          <span>/</span>
          <span className="text-on-surface font-semibold">
            Custom Software, Web &amp; E-Commerce Portals
          </span>
        </div>
        <div className="inline-flex items-center gap-2 self-start md:self-auto px-space-md py-1 rounded-full bg-primary/10 text-primary font-label-sm text-label-sm tracking-wide">
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
          <span>
            FIXED-PRICE SPRINTS ($20k – $80k) • SHIPPED IN 4–10 WEEKS • 100%
            IN-HOUSE SENIOR DEVS
          </span>
        </div>
      </div>
    </section>
  );
}
