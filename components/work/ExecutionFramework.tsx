import type { JSX } from "react";

const pillars = [
  {
    icon: "groups",
    title: "Senior-Only Pods",
    description:
      "You will never be handed off to junior developers or offshore contractors. Every line of code is architected by staff-level engineers with a minimum of 8 years in production systems.",
    note: "Zero Agency Learning Curves",
  },
  {
    icon: "terminal",
    title: "Working Build in Week 2",
    description:
      "No endless discovery phases or 50-page slide decks. We deploy a functional staging environment with core database schemas and authentic UI by the end of your second sprint week.",
    note: "Weekly Production Previews",
  },
  {
    icon: "lock_open",
    title: "100% IP & Source Ownership",
    description:
      "All source code, Docker configs, and cloud infrastructure belong exclusively to your business. Clean GitHub repositories, pristine inline documentation, and zero proprietary lock-in.",
    note: "Immediate Ownership Transfer",
  },
];

export default function ExecutionFramework(): JSX.Element {
  return (
    <section className="max-w-[1240px] mx-auto px-margin-mobile md:px-gutter lg:px-margin py-space-xl">
      <div className="p-space-lg md:p-space-xl rounded-lg bg-surface-container-low">
        <div className="max-w-2xl mb-space-lg">
          <span className="font-label-sm text-label-sm text-primary uppercase font-bold tracking-widest block mb-1">
            Our Fixed-Fee Engine
          </span>
          <h2 className="font-headline-xl text-headline-xl text-on-surface">
            How We Ship 40+ Apps On Time &amp; Within Budget
          </h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant mt-space-xs">
            Traditional consultancies profit from delays and bloated junior teams. We work exclusively on fixed-scope sprints with senior-only engineering squads.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-space-md">
          {pillars.map((pillar, index) => (
            <div
              key={index}
              className="p-space-lg rounded-DEFAULT bg-surface-container-lowest shadow-[0_2px_12px_rgba(11,28,48,0.03)] flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-full bg-surface-container flex items-center justify-center text-primary mb-space-md">
                  <span className="material-symbols-outlined text-[26px]">{pillar.icon}</span>
                </div>
                <h3 className="font-headline-md text-headline-md text-on-surface mb-space-xs">
                  {pillar.title}
                </h3>
                <p className="font-body-md text-body-md text-on-surface-variant">
                  {pillar.description}
                </p>
              </div>
              <div className="mt-space-md pt-space-sm flex items-center gap-space-xs text-on-surface-variant font-label-sm text-label-sm">
                <span className="w-2 h-2 rounded-full bg-primary" />
                <span>{pillar.note}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
