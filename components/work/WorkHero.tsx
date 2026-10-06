import type { JSX } from "react";

export default function WorkHero(): JSX.Element {
  return (
    <section className="max-w-[1240px] mx-auto px-margin-mobile md:px-gutter lg:px-margin pt-space-lg pb-space-xl">
      <div className="relative flex flex-col items-center text-center max-w-4xl mx-auto space-y-space-md">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[340px] bg-gradient-to-b from-primary/10 via-surface-container/60 to-transparent blur-3xl pointer-events-none -z-10" />

        <div className="inline-flex items-center gap-space-xs px-space-md py-1.5 rounded-full bg-surface-container-high shadow-sm">
          <span className="w-2.5 h-2.5 rounded-full bg-primary animate-ping" />
          <span className="w-2 h-2 rounded-full bg-primary -ml-3" />
          <span className="font-label-sm text-label-sm text-primary uppercase tracking-widest font-bold">
            Verified Production Portfolio • 40+ Shipped Applications • 100% Fixed-Price Delivery
          </span>
        </div>

        <h1 className="font-display-hero text-display-hero-mobile md:text-display-hero text-on-surface tracking-tight">
          40 Shipped Applications.<br className="hidden sm:inline" />
          <span className="text-primary font-extrabold">Real ROI.</span> Zero Retainer Waste.
        </h1>

        <p className="font-body-xl text-body-lg md:text-body-xl text-on-surface-variant max-w-2xl leading-relaxed">
          Explore our complete catalog of custom web apps, mobile apps, enterprise portals, e-commerce engines, and data systems engineered for high-growth SMBs. Every project delivered on a guaranteed fixed fee (<span className="font-semibold text-on-surface">$20k–$95k</span>) in 4 to 12 weeks.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-space-sm pt-space-xs">
          <a
            className="inline-flex items-center gap-space-xs px-space-lg py-space-sm rounded-full bg-primary hover:bg-primary-container text-on-primary font-label-lg text-label-lg transition-all shadow-glow hover:-translate-y-0.5"
            href="#portfolio-directory"
          >
            <span>Filter Applications Below</span>
            <span className="material-symbols-outlined text-[18px]">arrow_downward</span>
          </a>
          <a
            className="inline-flex items-center gap-space-xs px-space-lg py-space-sm rounded-full bg-surface-container-lowest text-on-surface hover:bg-surface-container font-label-lg text-label-lg shadow-sm transition-all hover:-translate-y-0.5"
            href="#quick-scoping"
          >
            <span className="material-symbols-outlined text-primary text-[18px]">calendar_today</span>
            <span>Schedule 30-Min Scoping Call</span>
          </a>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-5 gap-space-sm mt-space-xl p-space-sm md:p-space-md rounded-lg bg-surface-container-lowest shadow-[0_4px_24px_rgba(11,28,48,0.04)]">
        <div className="flex flex-col items-center text-center p-space-sm rounded bg-surface-container-low/60">
          <span className="font-headline-lg text-headline-lg text-primary leading-none font-bold">42</span>
          <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider mt-1">Apps In Production</span>
        </div>
        <div className="flex flex-col items-center text-center p-space-sm rounded bg-surface-container-low/60">
          <span className="font-headline-lg text-headline-lg text-on-surface leading-none font-bold">100%</span>
          <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider mt-1">On-Time &amp; Fixed SLA</span>
        </div>
        <div className="flex flex-col items-center text-center p-space-sm rounded bg-surface-container-low/60">
          <span className="font-headline-lg text-headline-lg text-primary leading-none font-bold">$20k–$95k</span>
          <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider mt-1">Flat Fixed Packages</span>
        </div>
        <div className="flex flex-col items-center text-center p-space-sm rounded bg-surface-container-low/60">
          <span className="font-headline-lg text-headline-lg text-on-surface leading-none font-bold">4.9 / 5</span>
          <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider mt-1">Client Partner CSAT</span>
        </div>
        <div className="col-span-2 md:col-span-1 flex flex-col items-center text-center p-space-sm rounded bg-primary text-on-primary">
          <span className="font-headline-lg text-headline-lg leading-none font-bold">3.4x</span>
          <span className="font-label-sm text-label-sm text-on-primary/80 uppercase tracking-wider mt-1">Avg Year 1 Client ROI</span>
        </div>
      </div>
    </section>
  );
}
