import type { JSX } from "react";

export default function BreadcrumbRibbon(): JSX.Element {
  return (
    <section className="w-full max-w-[1440px] mx-auto px-margin-mobile md:px-gutter lg:px-margin pt-space-md">
      <div className="flex flex-wrap items-center justify-between gap-space-sm bg-surface-container-lowest rounded-full px-space-md py-space-xs shadow-sm">
        <div className="flex items-center gap-space-xs text-on-surface-variant font-label-sm text-label-sm">
          <a className="hover:text-primary transition-colors" href="#services-carousel">
            Services
          </a>
          <span>/</span>
          <span className="text-on-surface font-semibold">
            BI &amp; Modern Data Warehousing
          </span>
        </div>
        <div className="flex flex-wrap items-center gap-space-xs">
          <span className="inline-flex items-center gap-1.5 px-space-sm py-0.5 rounded-full bg-primary/10 text-primary font-label-sm text-label-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></span>
            FIXED-PRICE DATA SPRINTS ($20k – $60k)
          </span>
          <span className="hidden sm:inline-flex items-center px-space-sm py-0.5 rounded-full bg-surface-container text-on-surface-variant font-label-sm text-label-sm">
            BUILT FOR LEAN TEAMS — ZERO FULL-TIME DATA HIRES REQUIRED
          </span>
        </div>
      </div>
    </section>
  );
}
