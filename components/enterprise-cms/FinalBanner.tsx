import type { JSX } from "react";

export default function FinalBanner(): JSX.Element {
  return (
    <section className="w-full py-space-xl bg-inverse-surface text-inverse-on-surface relative overflow-hidden">
      <div className="pointer-events-none absolute -bottom-20 -left-20 w-80 h-80 bg-primary/20 rounded-full blur-3xl"></div>
      <div className="pointer-events-none absolute -top-20 -right-20 w-80 h-80 bg-tertiary/20 rounded-full blur-3xl"></div>
      <div className="max-w-[1280px] mx-auto px-margin-mobile md:px-gutter lg:px-margin text-center relative z-10">
        <span className="inline-flex items-center gap-space-xs px-space-md py-space-xs rounded-full bg-primary/20 text-inverse-primary font-label-sm text-label-sm uppercase tracking-wider mb-space-md">
          Fixed-Price Milestone Delivery
        </span>
        <h2 className="font-display-hero text-display-hero text-inverse-on-surface tracking-tight mb-space-md max-w-3xl mx-auto">
          Ready to Modernize Your Enterprise Portal or CMS?
        </h2>
        <p className="font-body-xl text-body-xl text-inverse-on-surface/80 max-w-2xl mx-auto mb-space-xl">
          Skip bloated enterprise retainers. Get a production-ready,
          SSO-authenticated portal delivered on a guaranteed 4 to 10-week sprint.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-space-md">
          <a
            className="w-full sm:w-auto inline-flex items-center justify-center px-space-lg py-space-md rounded-full bg-primary hover:bg-primary-container text-on-primary font-label-lg text-label-lg transition-all shadow-[0_4px_20px_rgba(0,105,72,0.4)]"
            href="#scoping-intake"
          >
            <span className="material-symbols-outlined mr-space-xs text-[20px]">
              calendar_today
            </span>
            Schedule 30-Min Scoping Call
          </a>
          <a
            className="w-full sm:w-auto inline-flex items-center justify-center px-space-lg py-space-md rounded-full bg-surface-container-lowest/10 hover:bg-surface-container-lowest/20 text-inverse-on-surface font-label-lg text-label-lg transition-all"
            href="#packages"
          >
            <span className="material-symbols-outlined mr-space-xs text-[20px]">
              view_column
            </span>
            View Fixed-Scope Tiers ($22k–$80k)
          </a>
        </div>
        <div className="mt-space-lg flex items-center justify-center gap-space-lg text-body-sm text-inverse-on-surface/60">
          <span>• Direct Principal Architect Scoping</span>
          <span>• Guaranteed 48-Hour Proposal</span>
          <span>• Full IP &amp; Source Ownership</span>
        </div>
      </div>
    </section>
  );
}
