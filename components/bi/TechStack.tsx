import type { JSX } from "react";

const stackLayers = [
  {
    num: "01 / INGESTION",
    icon: "cloud_sync",
    title: "Airbyte & Fivetran",
    desc: "Open pipelines or managed low-cost connectors to reliably pull from 300+ SaaS apps and payment gateways with automated retry logic.",
    tags: ["Webhooks", "Stripe API", "REST Sync"],
  },
  {
    num: "02 / WAREHOUSING",
    icon: "storage",
    title: "Serverless BigQuery",
    desc: "Zero fixed servers to maintain. You only pay pennies per query. For 90% of SMBs, monthly Google Cloud costs stay strictly under $30 to $50.",
    tags: ["Zero Idle Cost", "Postgres RDS", "Encrypted"],
  },
  {
    num: "03 / TRANSFORMATION",
    icon: "terminal",
    title: "dbt Core (SQL)",
    desc: "All your business metrics are declared in clear, version-controlled SQL models with automated tests for duplicates, null values, and discrepancies.",
    tags: ["Git Backed", "Automated CI", "Data Tests"],
  },
  {
    num: "04 / CONSUMPTION",
    icon: "query_stats",
    title: "Metabase & Retool",
    desc: "Ultra-fast, clean interface your entire non-technical executive team can use without friction. Self-serve filters and interactive visual charts.",
    tags: ["Self-Service", "Slack Alerts", "Looker Studio"],
  },
];

export default function TechStack(): JSX.Element {
  return (
    <section className="w-full max-w-[1440px] mx-auto px-margin-mobile md:px-gutter lg:px-margin pt-space-xl">
      <div className="bg-surface-container-low rounded-xl p-space-lg md:p-space-xl">
        <div className="max-w-2xl mb-space-lg">
          <span className="font-label-sm text-label-sm text-primary uppercase tracking-wider">
            Architecture Blueprint
          </span>
          <h2 className="font-headline-xl text-headline-xl-mobile md:text-headline-xl text-on-surface mt-space-xs">
            The &quot;No-Bloat&quot; Pragmatic Modern Data Stack
          </h2>
          <p className="font-body-md text-body-md text-on-surface-variant mt-space-xs">
            We reject multi-million-dollar enterprise bloatware like Snowflake
            credits gone wild or rigid proprietary suites. We build using open,
            portable, cost-efficient infrastructure that you completely own.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-space-md">
          {stackLayers.map((layer) => (
            <div
              key={layer.num}
              className="bg-surface-container-lowest rounded-lg p-space-md shadow-sm"
            >
              <div className="flex items-center justify-between mb-space-xs">
                <span className="font-label-sm text-label-sm text-outline font-mono">
                  {layer.num}
                </span>
                <span className="material-symbols-outlined text-primary text-[20px]">
                  {layer.icon}
                </span>
              </div>
              <h4 className="font-headline-sm text-headline-sm text-on-surface">
                {layer.title}
              </h4>
              <p className="font-body-md text-body-md text-on-surface-variant mt-space-xs">
                {layer.desc}
              </p>
              <div className="mt-space-md pt-space-xs flex flex-wrap gap-1">
                {layer.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-0.5 rounded-full bg-surface-container text-on-surface-variant font-label-sm text-label-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
