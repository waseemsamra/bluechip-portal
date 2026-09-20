import type { JSX } from "react";

const pillars = [
  {
    tag: "Pillar A",
    title: "Custom Software & Mobile Apps",
    desc: "Full-lifecycle application engineering for startups and enterprise systems requiring robust security, sub-second latency, and intuitive mobile interfaces.",
    services: [
      { label: "Custom Cloud & Microservices (Go, Rust, Node, Python)", price: "$20k–$80k", note: "Distributed APIs, event-driven workers, and custom customer portals. (4-8 Wks)" },
      { label: "Native & Cross-Platform Mobile (Swift, Kotlin, RN)", price: "$20k–$75k", note: "React Native, Flutter, Swift, offline-first SQLite sync, and secure biometric login. (4-7 Wks)" },
      { label: "High-Scale Web Portals (Next.js, Remix, Astro)", price: "$15k–$50k", note: "Next.js, Remix, Astro with ultra-low latency edge rendering & dynamic routing. (4-6 Wks)" },
    ],
    tech: "Tech: React, Go, Rust, Swift, Kotlin, Next.js, AWS",
  },
  {
    tag: "Pillar B",
    title: "Cloud, Bare-Metal & IT Networks",
    desc: "Resilient infrastructure from high-performance dedicated bare-metal servers to on-site structured cabling and turn-key business emails.",
    services: [
      { label: "Managed Cloud & Bare-Metal HA (K8s, NVMe)", price: "$3k–$25k", note: "99.99% SLA dedicated clusters, automated snapshots, and hardware firewalls. (1-2 Wks)" },
      { label: "Basic Web Hosting & Business Email (M365)", price: "$500–$3,500", note: "DMARC/DKIM zero-spam authentication and white-glove mailbox migration. (1-3 Days)" },
      { label: "Physical IT Networks & Server Racks (Cat6A)", price: "$5k–$35k", note: "Cat6A structured cabling, server rack assembly, and on-premises disaster recovery. (1-3 Wks)" },
    ],
    tech: "Tech: NVMe, Kubernetes, Cisco, M365, Fortinet",
  },
  {
    tag: "Pillar C",
    title: "Data Warehousing & UAE VAT ERP",
    desc: "Deterministic data synchronization, executive telemetry pipelines, and strict compliance with Middle East tax and invoicing mandates.",
    services: [
      { label: "Data Engineering & Warehousing (Snowflake, BigQuery)", price: "$20k–$60k", note: "Snowflake, BigQuery, Apache Airflow with event-driven ELT pipelines. (3-6 Wks)" },
      { label: "Analytics & Dashboard Suite (Looker, Metabase)", price: "$15k–$55k", note: "Looker, Metabase, real-time KPI dashboards with embedded analytics. (2-4 Wks)" },
      { label: "UAE VAT-Compliant ERP & Phase 2 E-Invoicing", price: "$20k–$70k", note: "FTA Phase 2 Peppol XML transmission, automated VAT ledger returns, and audit trails. (4-8 Wks)" },
    ],
    tech: "Tech: Snowflake, dbt, BigQuery, Peppol, UBL XML",
  },
  {
    tag: "Pillar D",
    title: "E-Commerce, CMS & Paid Growth",
    desc: "Maximizing digital transaction velocity, omnichannel conversion rates, secure multi-user intranets, and deterministic signal tracking.",
    services: [
      { label: "Shopify Plus & Headless Commerce (Hydrogen)", price: "$15k–$60k", note: "Custom Hydrogen storefronts with Oxygen CI/CD deployment pipelines. (3-6 Wks)" },
      { label: "Paid Social & Conversions API (Meta/TikTok CAPI)", price: "$5k–$25k", note: "Server-side Meta/TikTok CAPI event matching with multi-touch attribution modeling. (2-4 Wks)" },
      { label: "Enterprise CMS & Internal Intranets (SharePoint)", price: "$25k–$85k", note: "SharePoint workflows, Liferay/Magnolia portals, and role-based documentation hubs. (4-8 Wks)" },
    ],
    tech: "Tech: Shopify Plus, Hydrogen, Meta CAPI, Liferay, SharePoint",
  },
];

export default function PillarsGrid(): JSX.Element {
  return (
    <section
      className="w-full bg-surface-container-low py-space-xl lg:py-[60px] border-b border-outline-variant/40"
      id="pillars-grid"
    >
      <div className="w-full max-w-[1440px] mx-auto px-margin-mobile md:px-gutter lg:px-margin flex flex-col gap-space-xl lg:gap-[40px]">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-md lg:gap-6">
          <div>
            <span className="font-code-badge text-xs font-bold text-primary uppercase tracking-wider">
              Architectural Taxonomy
            </span>
            <h2 className="font-headline-xl text-2xl sm:text-3xl lg:text-4xl font-extrabold text-on-surface tracking-tight mt-1">
              Complete Capabilities Organized in 4 Pillars
            </h2>
          </div>
          <p className="font-body-md text-on-surface-variant max-w-lg">
            Choose by discipline or assemble cross-functional squads with
            dedicated Principal Engineers, QA leads, and DevOps specialists.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-space-lg lg:gap-8">
          {pillars.map((pillar) => (
            <div
              key={pillar.tag}
              className="bg-surface-container-lowest p-8 rounded-2xl border border-outline-variant/70 shadow-sm flex flex-col justify-between hover:border-primary/40 transition-all"
            >
              <div className="flex flex-col gap-4">
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 rounded-full text-xs font-bold bg-primary-fixed/40 text-on-primary-fixed">
                    {pillar.tag}
                  </span>
                  <span className="text-xs text-outline font-semibold">
                    3 Core Services
                  </span>
                </div>

                <h3 className="font-headline-lg text-2xl font-bold text-on-surface">
                  {pillar.title}
                </h3>

                <p className="font-body-sm text-sm text-on-surface-variant leading-relaxed">
                  {pillar.desc}
                </p>

                <div className="space-y-3 pt-2">
                  {pillar.services.map((svc) => (
                    <div
                      key={svc.label}
                      className="p-3 bg-surface-container-low rounded-xl"
                    >
                      <div className="flex items-center justify-between text-xs font-bold text-on-surface mb-1">
                        <span>{svc.label}</span>
                        <span className="text-primary">{svc.price}</span>
                      </div>
                      <p className="text-[12px] text-on-surface-variant">
                        {svc.note}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-outline-variant/40 flex items-center justify-between">
                <span className="text-xs font-bold text-on-surface-variant">
                  {pillar.tech}
                </span>
                <a
                  className="text-xs font-bold text-primary hover:underline"
                  href="#consultation"
                >
                  Discuss Requirements →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
