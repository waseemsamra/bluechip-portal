import type { JSX } from "react";

const pillars = [
  {
    num: "01 / INGESTION",
    icon: "sync_alt",
    title: "Multi-Source Data Ingestion",
    desc: "Automated, fault-tolerant ingestion pipelines extracting historical and incremented syncs from your critical software tools.",
    price: "$20k – $30k",
    weeks: "3–4 WEEKS DELIVERY",
    items: [
      "Shopify, Stripe, & Payment Gateway sync",
      "Meta, Google & TikTok Ads normalization",
      "QuickBooks / Xero ledger sync",
      "Automated failure recovery & alerts",
    ],
    tooling: "Tooling: Airbyte / Fivetran / PyConnect",
    color: "text-primary",
    bg: "bg-primary/10",
  },
  {
    num: "02 / WAREHOUSING",
    icon: "cloud_done",
    title: "Serverless Cloud Warehouse",
    desc: "Production-grade, segregated analytical database configured for zero idle compute bills and instant sub-second queries.",
    price: "$25k – $38k",
    weeks: "4–5 WEEKS DELIVERY",
    items: [
      "Serverless BigQuery or Postgres setup",
      "dbt Core SQL transformation models",
      "Strict role-based access & security",
      "Target run-rate under $40/month",
    ],
    tooling: "Tooling: Google BigQuery / AWS RDS / dbt",
    color: "text-tertiary",
    bg: "bg-tertiary/10",
  },
  {
    num: "03 / TRANSFORMATION",
    icon: "monitoring",
    title: "Executive BI Dashboards",
    desc: "Intuitive visual cockpits tailored for CEOs, Operations, and Finance leaders. Zero SQL knowledge required for daily drilldowns.",
    price: "$20k – $32k",
    weeks: "3–4 WEEKS DELIVERY",
    items: [
      "Executive Cash Flow & Net Revenue",
      "Blended CAC, ROAS & Retention LTV",
      "Supply chain & restock alerts",
      "Automated daily Slack & email digests",
    ],
    tooling: "Tooling: Metabase / Looker Studio / Retool",
    color: "text-primary",
    bg: "bg-primary/10",
  },
];

const fullStack = {
  num: "04 / INTEGRATION",
  icon: "hub",
  title: "Turnkey Data Operating System",
  desc: "The full end-to-end modernization. Connectors, serverless warehouse, automated dbt models, executive dashboards, and hands-on team training.",
  price: "$45k – $60k",
  weeks: "6–8 WEEKS DELIVERY",
  items: [
    "8+ business platforms unified",
    "Executive, Sales & Finance suite",
    "60-day post-launch warranty",
    "Staff video runbooks & handover",
  ],
  tooling: "Includes Full Ownership of Source Code",
  color: "text-on-primary",
  bg: "bg-primary",
  isFeatured: true,
};

export default function DataPillars(): JSX.Element {
  return (
    <section className="w-full max-w-[1440px] mx-auto px-margin-mobile md:px-gutter lg:px-margin pt-space-xl">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-space-lg">
        <div>
          <span className="font-label-sm text-label-sm text-primary uppercase tracking-wider">
            Core Capabilities
          </span>
          <h2 className="font-headline-xl text-headline-xl-mobile md:text-headline-xl text-on-surface mt-space-xs">
            The 4 Pillars of Pragmatic Data Warehousing
          </h2>
        </div>
        <p className="font-body-md text-body-md text-on-surface-variant max-w-md mt-space-xs md:mt-0">
          Engineered specifically for mid-market SMBs with clear deliverables,
          fixed timelines, and transparent pricing bands.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-space-md">
        {pillars.map((p) => (
          <div
            key={p.title}
            className="bg-surface-container-lowest rounded-lg p-space-lg shadow-sm flex flex-col justify-between"
          >
            <div>
              <div
                className={`w-10 h-10 rounded-full ${p.bg} ${p.color} flex items-center justify-center mb-space-md`}
              >
                <span className="material-symbols-outlined">{p.icon}</span>
              </div>
              <span className="font-label-sm text-label-sm text-primary font-bold">
                {p.weeks}
              </span>
              <h3 className="font-headline-md text-headline-md text-on-surface mt-space-xs">
                {p.title}
              </h3>
              <p className="font-headline-sm text-headline-sm text-on-surface-variant mt-space-xs">
                {p.price}
              </p>
              <p className="font-body-md text-body-md text-on-surface-variant mt-space-sm">
                {p.desc}
              </p>
              <ul className="mt-space-md space-y-space-xs">
                {p.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-2 font-body-sm text-body-sm text-on-surface"
                  >
                    <span className="material-symbols-outlined text-primary text-[18px]">
                      check_circle
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="pt-space-sm mt-space-md bg-surface-container-low/60 rounded p-space-xs text-center font-label-sm text-label-sm text-on-surface-variant">
              {p.tooling}
            </div>
          </div>
        ))}

        <div className="bg-surface-container-high rounded-lg p-space-lg shadow-md flex flex-col justify-between relative overflow-hidden">
          <div className="absolute top-0 right-0 bg-primary text-on-primary font-label-sm text-label-sm px-space-sm py-0.5 rounded-bl">
            COMPREHENSIVE
          </div>
          <div>
            <div
              className={`w-10 h-10 rounded-full ${fullStack.bg} ${fullStack.color} flex items-center justify-center mb-space-md`}
            >
              <span className="material-symbols-outlined">{fullStack.icon}</span>
            </div>
            <span className="font-label-sm text-label-sm text-primary font-bold">
              {fullStack.weeks}
            </span>
            <h3 className="font-headline-md text-headline-md text-on-surface mt-space-xs">
              {fullStack.title}
            </h3>
            <p className="font-headline-sm text-headline-sm text-primary mt-space-xs">
              {fullStack.price}
            </p>
            <p className="font-body-md text-body-md text-on-surface-variant mt-space-sm">
              {fullStack.desc}
            </p>
            <ul className="mt-space-md space-y-space-xs">
              {fullStack.items.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-2 font-body-sm text-body-sm text-on-surface"
                >
                  <span className="material-symbols-outlined text-primary text-[18px]">
                    check_circle
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="pt-space-sm mt-space-md bg-surface-container-lowest rounded p-space-xs text-center font-label-sm text-label-sm text-on-surface">
            {fullStack.tooling}
          </div>
        </div>
      </div>
    </section>
  );
}
