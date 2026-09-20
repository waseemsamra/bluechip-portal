import type { JSX } from "react";

const problems = [
  {
    id: "slow",
    before: "Manual CSV exports emailed daily — order data lags by 12+ hours.",
    after: "Real-time webhook pushes from Shopify/Stripe → QuickBooks, updating within seconds.",
    icon: "sync",
  },
  {
    id: "errors",
    before: "Bookkeepers spend 3 hrs/week reconciling mismatched order IDs across platforms.",
    after: "Zero-touch auto-reconciliation with shared UUIDs — no human oversight needed.",
    icon: "check_circle",
  },
  {
    id: "costs",
    before: "Agency charges $5,000/month retainer just to monitor 'integration health'.",
    after: "Fixed $20k build cost with self-service dashboard monitoring and alerts.",
    icon: "attach_money",
  },
  {
    id: "flexibility",
    before: "Off-the-shelf plugin breaks every time Shopify updates its API.",
    after: "Own the codebase, repo, and integration keys — future-proof against vendor changes.",
    icon: "settings",
  },
];

export default function DataStruggles(): JSX.Element {
  return (
    <section
      id="data-struggles"
      className="w-full px-margin-mobile md:px-gutter lg:px-margin py-space-xl"
    >
      <div className="max-w-[1440px] mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="font-display-lg text-display-lg text-on-surface mb-4">
            Why Off-The-Shelf Solutions Leave You Bleeding Money
          </h2>
          <p className="font-body-xl text-body-xl text-on-surface-variant">
            Every minute you wait for a manual sync or debug a broken plugin
            is a minute your team isn&apos;t driving growth.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-gutter">
          {problems.map((problem) => (
            <div
              key={problem.id}
              className="p-6 rounded-2xl bg-surface-container-low shadow-sm flex flex-col gap-4"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center">
                  <span className="material-symbols-outlined text-[22px]">
                    {problem.icon}
                  </span>
                </div>
                <h3 className="font-display-sm text-display-sm text-error">
                  Problem
                </h3>
              </div>
              <p className="font-body-md text-body-md text-on-surface-variant">
                {problem.before}
              </p>

              <div className="flex items-center gap-3 mt-auto">
                <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center">
                  <span className="material-symbols-outlined text-[22px]">
                    auto_awesome
                  </span>
                </div>
                <h3 className="font-display-sm text-display-sm text-primary">
                  Our Fix
                </h3>
              </div>
              <p className="font-body-md text-body-md text-on-surface font-medium">
                {problem.after}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
