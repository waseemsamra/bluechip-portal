import type { JSX } from "react";

export default function FinalBanner(): JSX.Element {
  return (
    <section className="w-full py-space-xl bg-on-surface text-on-primary">
      <div className="max-w-[1240px] mx-auto px-margin-mobile md:px-gutter lg:px-margin text-center">
        <div className="max-w-3xl mx-auto">
          <span className="font-label-sm text-label-sm uppercase tracking-wider text-primary-fixed font-bold">
            Secure Your Q3/Q4 Sprint
          </span>
          <h2 className="font-headline-xl text-headline-xl text-surface tracking-tight mt-2 mb-space-md">
            Ready to Modernize Your UAE Accounting &amp; Ensure 100% FTA Compliance?
          </h2>
          <p className="font-body-lg text-body-lg text-surface-container-high max-w-2xl mx-auto mb-space-lg">
            Avoid emergency retrofits and compliance fines. Partner with senior financial systems engineers for a guaranteed fixed-fee deployment ($20k–$70k).
          </p>

          <div className="flex flex-wrap items-center justify-center gap-space-md">
            <a
              className="inline-flex items-center gap-space-xs px-space-lg py-space-sm rounded-full bg-primary-fixed text-on-primary-fixed font-label-lg text-label-lg hover:bg-primary transition-all"
              href="#scoping-call"
            >
              <span>Schedule Technical Scoping Call</span>
              <span className="material-symbols-outlined text-[18px]">calendar_today</span>
            </a>
            <a
              className="inline-flex items-center gap-space-xs px-space-lg py-space-sm rounded-full bg-inverse-surface text-on-primary font-label-lg text-label-lg hover:bg-surface-container-high hover:text-on-surface transition-all"
              href="#fixed-tiers"
            >
              <span>View Fixed Scope Tiers ($20k–$70k)</span>
              <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
