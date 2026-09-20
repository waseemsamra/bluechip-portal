import type { JSX } from "react";

const tiers = [
  {
    label: "Foundation Sprint",
    weeks: "3–4 Weeks",
    price: "$20,000 – $28,000",
    desc: "Ideal for SMBs needing to consolidate up to 3 core systems (e.g. Shopify + Stripe + Meta Ads) into a working dashboard.",
    items: [
      "Up to 3 automated data connectors",
      "BigQuery or Postgres serverless warehouse setup",
      "Core Metabase dashboard (Cash, Sales, Margins)",
      "1 Senior Data Engineer + 1 BI Architect",
      "30-day post-delivery bug guarantee",
    ],
    linkClass:
      "w-full inline-flex items-center justify-center px-space-md py-space-sm rounded-full bg-surface-container hover:bg-surface-container-high text-on-surface font-label-lg text-label-lg transition-colors",
    linkText: "Scope Foundation Sprint",
  },
  {
    label: "Growth Data Platform",
    weeks: "5–6 Weeks",
    price: "$35,000 – $48,000",
    desc: "Comprehensive business visibility across 4 to 7 channels with automated reconciliation, daily audits, and department-specific views.",
    items: [
      "Up to 7 unified SaaS, ERP, or payment sources",
      "Version-controlled dbt models with data quality tests",
      "3 Dedicated BI Portals: Executive, Marketing, Ops",
      "Automated Daily Slack anomaly alerts & summaries",
      "Staff training workshop + 45-day SLA guarantee",
    ],
    featured: true,
    linkClass:
      "w-full inline-flex items-center justify-center px-space-md py-space-sm rounded-full bg-primary hover:bg-primary-container text-on-primary font-label-lg text-label-lg transition-all shadow-[0_4px_14px_rgba(0,105,72,0.25)]",
    linkText: "Scope Growth Platform",
  },
  {
    label: "Full Analytics OS",
    weeks: "7–8 Weeks",
    price: "$50,000 – $60,000",
    desc: "Enterprise-grade data infrastructure built lean. Unlimited sources, custom reverse-ETL syncs back to CRMs, and executive self-service.",
    items: [
      "8+ complex sources & custom webhook ingestion",
      "Reverse ETL (sync enriched data back to HubSpot/CRM)",
      "Advanced predictive cohort modeling & LTV forecasting",
      "Executive board-ready reporting modules",
      "60-day full warranty & monthly architecture reviews",
    ],
    linkClass:
      "w-full inline-flex items-center justify-center px-space-md py-space-sm rounded-full bg-surface-container hover:bg-surface-container-high text-on-surface font-label-lg text-label-lg transition-colors",
    linkText: "Scope Enterprise OS",
  },
];

export default function PricingPackages(): JSX.Element {
  return (
    <section
      className="w-full max-w-[1440px] mx-auto px-margin-mobile md:px-gutter lg:px-margin pt-space-xl"
      id="pricing-packages"
    >
      <div className="text-center max-w-2xl mx-auto mb-space-lg">
        <span className="font-label-sm text-label-sm text-primary uppercase tracking-wider">
          No Billing Creep
        </span>
        <h2 className="font-headline-xl text-headline-xl-mobile md:text-headline-xl text-on-surface mt-space-xs">
          Fixed-Fee Data Engineering Packages
        </h2>
        <p className="font-body-md text-body-md text-on-surface-variant mt-space-xs">
          Guaranteed milestone timelines, complete IP transfer, and verified
          delivery guarantees.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-space-md items-stretch">
        {tiers.map((tier) => (
          <div
            key={tier.label}
            className={`rounded-lg p-space-lg shadow-sm flex flex-col justify-between ${
              tier.featured
                ? "bg-surface-container-lowest relative bg-gradient-to-b from-primary/5 via-surface-container-lowest to-surface-container-lowest"
                : "bg-surface-container-lowest"
            }`}
          >
            {tier.featured && (
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-on-primary font-label-sm text-label-sm px-space-md py-1 rounded-full shadow-sm">
                MOST POPULAR FOR GROWING SMBS
              </div>
            )}
            <div>
              <div className="flex justify-between items-center mb-space-xs">
                <span className="font-label-sm text-label-sm text-on-surface-variant uppercase">
                  {tier.label}
                </span>
                <span className="px-space-xs py-0.5 rounded-full bg-surface-container font-label-sm text-label-sm text-on-surface">
                  {tier.weeks}
                </span>
              </div>
              <h3 className="font-headline-lg text-headline-lg text-on-surface">
                {tier.price}
              </h3>
              <p className="font-body-md text-body-md text-on-surface-variant mt-space-xs">
                {tier.desc}
              </p>
              <div className="mt-space-md pt-space-md space-y-space-xs">
                <div className="font-label-sm text-label-sm text-on-surface font-bold uppercase">
                  What&apos;s Included:
                </div>
                <ul className="space-y-space-xs font-body-sm text-body-sm text-on-surface-variant">
                  {tier.items.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="material-symbols-outlined text-primary text-[18px]">
                        check_circle
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="mt-space-lg pt-space-md">
              <a
                className={tier.linkClass}
                href="#scoping-calculator"
              >
                {tier.linkText}
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
