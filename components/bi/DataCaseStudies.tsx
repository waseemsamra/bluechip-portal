import type { JSX } from "react";

const caseStudies = [
  {
    category: "D2C E-COMMERCE",
    price: "$28k Fixed Sprint",
    title: "$9M GMV Apparel Brand",
    desc: "Consolidated Shopify Plus, Amazon FBA, Meta Ads, and Klaviyo data into Google BigQuery with automated daily blended ROAS calculation.",
    metrics: [
      { label: "Time Saved Weekly:", value: "22 hours / week", color: "text-primary" },
      { label: "Delivery Duration:", value: "4 Weeks", color: "text-on-surface" },
      { label: "Infrastructure Cost:", value: "$24 / month (GCP)", color: "text-on-surface" },
    ],
    quote:
      "BlueChip Tech replaced 4 fragmented agency reports with a single morning dashboard. We cut $18k in wasted monthly ad spend in our first two weeks.",
  },
  {
    category: "WHOLESALE / DISTRIBUTION",
    price: "$44k Fixed Sprint",
    title: "$24M Equipment Distributor",
    desc: "Automated QuickBooks Online, Salesforce CRM, and legacy warehouse inventory SQL data to eliminate monthly finance reporting bottlenecks.",
    metrics: [
      { label: "Month-End Close:", value: "16 days down to 3 days", color: "text-primary" },
      { label: "Delivery Duration:", value: "6 Weeks", color: "text-on-surface" },
      { label: "Annual Labor Recaptured:", value: "~$65,000 / year", color: "text-on-surface" },
    ],
    quote:
      "BlueChip Tech built our investor-grade analytics stack in under a month. We used to dread the 1st of every month. Now our CFO has complete balance sheet and warehouse inventory clarity within 72 hours.",
  },
  {
    category: "B2B SAAS",
    price: "$32k Fixed Sprint",
    title: "Subscription App (12k Users)",
    desc: "Engineered Stripe billing pipelines with Postgres analytics replica to monitor expansion MRR, churn cohorts, and feature utilization.",
    metrics: [
      { label: "Churn Blindspots:", value: "100% Resolved", color: "text-primary" },
      { label: "Delivery Duration:", value: "4.5 Weeks", color: "text-on-surface" },
      { label: "Production Database Load:", value: "-78% reduction", color: "text-on-surface" },
    ],
    quote:
      "Our Series A investors asked for cohort charts we couldn't produce. BlueChip Tech engineered our investor-grade analytics stack in under a month.",
  },
];

export default function DataCaseStudies(): JSX.Element {
  return (
    <section className="w-full max-w-[1440px] mx-auto px-margin-mobile md:px-gutter lg:px-margin pt-space-xl">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-space-lg">
        <div>
          <span className="font-label-sm text-label-sm text-primary uppercase tracking-wider">
            Client Outcomes
          </span>
          <h2 className="font-headline-xl text-headline-xl-mobile md:text-headline-xl text-on-surface mt-space-xs">
            Verified Field Results from $20k–$44k Sprints
          </h2>
        </div>
        <span className="font-body-md text-body-md text-on-surface-variant">
          Real companies, measurable operational returns.
        </span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-space-md">
        {caseStudies.map((c) => (
          <div
            key={c.title}
            className="bg-surface-container-lowest rounded-lg p-space-lg shadow-sm flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between pb-space-xs">
                <span className="px-space-xs py-0.5 rounded-full bg-primary/10 text-primary font-label-sm text-label-sm">
                  {c.category}
                </span>
                <span className="font-label-sm text-label-sm text-outline">
                  {c.price}
                </span>
              </div>
              <h3 className="font-headline-md text-headline-md text-on-surface mt-space-sm">
                {c.title}
              </h3>
              <p className="font-body-md text-body-md text-on-surface-variant mt-space-xs">
                {c.desc}
              </p>
              <div className="mt-space-md p-space-sm bg-surface-container-low rounded-lg space-y-space-xs">
                {c.metrics.map((m) => (
                  <div
                    key={m.label}
                    className="flex items-center justify-between"
                  >
                    <span className="font-body-sm text-body-sm text-on-surface-variant">
                      {m.label}
                    </span>
                    <span className={`font-label-lg text-label-lg ${m.color}`}>
                      {m.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            <p className="font-body-sm text-body-sm text-on-surface-variant italic mt-space-md pt-space-sm">
              &quot;{c.quote}&quot;
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
