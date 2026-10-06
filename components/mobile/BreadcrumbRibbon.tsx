import type { JSX } from "react";

export default function BreadcrumbRibbon(): JSX.Element {
  return (
    <section className="w-full bg-surface-container-low/60 border-b-0 py-space-sm">
      <div className="max-w-[1280px] mx-auto px-margin-mobile md:px-gutter lg:px-margin flex flex-wrap items-center justify-between gap-space-sm text-body-sm font-body-sm">
        <div className="flex items-center gap-space-xs text-on-surface-variant">
          <a
            className="hover:text-primary transition-colors flex items-center gap-1"
            data-path="capabilities"
            href="#capabilities"
          >
            <span className="material-symbols-outlined text-[16px]">
              folder_open
            </span>{" "}
            Capabilities
          </a>
          <span>/</span>
          <span className="text-on-surface font-semibold flex items-center gap-1">
            <span className="material-symbols-outlined text-primary text-[16px]">
              phone_iphone
            </span>{" "}
            iOS &amp; Android Mobile Development
          </span>
        </div>
        <div className="flex flex-wrap items-center gap-space-xs">
          <span className="inline-flex items-center gap-1.5 px-space-sm py-0.5 rounded-full bg-surface-container text-on-surface-variant font-label-sm text-label-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></span>
            Fixed-Price Sprints ($20k–$75k)
          </span>
          <span className="inline-flex items-center gap-1 px-space-sm py-0.5 rounded-full bg-surface-container text-on-surface-variant font-label-sm text-label-sm">
            <span className="material-symbols-outlined text-[13px] text-primary">
              schedule
            </span>
            Shipped in 6–10 Weeks
          </span>
          <span className="inline-flex items-center gap-1 px-space-sm py-0.5 rounded-full bg-surface-container text-on-surface-variant font-label-sm text-label-sm">
            <span className="material-symbols-outlined text-[13px] text-primary">
              verified_user
            </span>
            100% In-House Senior Devs
          </span>
        </div>
      </div>
    </section>
  );
}
