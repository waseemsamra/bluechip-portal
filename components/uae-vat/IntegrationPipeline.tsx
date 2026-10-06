import type { JSX } from "react";

const pipelineTechItems = [
  {
    icon: "speed",
    title: "Sub-180ms Clearance SLA",
    description:
      "Automated asynchronous mTLS gateway to FTA pre-clearance endpoint with instant validation response.",
  },
  {
    icon: "integration_instructions",
    title: "UBL 2.1 & Peppol BIS Compliant",
    description:
      "Certified XML syntax transformation with SHA-256 hash chaining and strict data dictionary validation.",
  },
  {
    icon: "key",
    title: "ECDSA & TLV Base64 QR",
    description:
      "Cryptographic signatures and cryptographic stamps embedded directly into PDF/XML invoices seamlessly.",
  },
  {
    icon: "folder_supervised",
    title: "Cabinet Decision No. 52",
    description:
      "Automated immutable 5-year cryptographic archival and zero-downtime retrieval for tax audits.",
  },
];

const comparisonData = [
  {
    criteria: "FTA Form 201 Exact Line-by-Line Breakdown",
    saas: "Manual calculation & export required",
    legacy: "Requires $25k third-party add-on module",
    bluechip: "Native 1-Click Form 201 Generation",
  },
  {
    criteria: "Bilingual (Arabic / English) Invoices with TRN & QR",
    saas: "Rigid single-language template, no QR hash",
    legacy: "Custom Jasper/Crystal Reports dev needed",
    bluechip: "FTA Certified Bilingual PDF & TLV QR",
  },
  {
    criteria: "Designated Zone (DZ) Custom Exemption Rules",
    saas: "Unsupported; manual tax overrides",
    legacy: "Complex configuration spanning months",
    bluechip: "Built-in Mainland vs DZ logic routing",
  },
  {
    criteria: "Cabinet Decision No. 52 (5-Year Audit Trail)",
    saas: "Data purge policies violate retention rules",
    legacy: "High annual storage licensing fees",
    bluechip: "Immutable UAE-Cloud Archive (WORM compliant)",
  },
  {
    criteria: "UAE Local Bank Auto-Feeds (ENBD, FAB, ADCB)",
    saas: "Frequent connection disconnects & delays",
    legacy: "Dedicated middleware project required",
    bluechip: "Direct Open Banking API & MT940 Parser",
  },
  {
    criteria: "Total Cost & Delivery Timeline",
    saas: "$100/mo + hundreds of manual hours/year",
    legacy: "$150,000+ & 9 to 14 months delivery",
    bluechip: "$20,000 – $70,000 in 4 to 8 Weeks",
  },
];

export default function IntegrationPipeline(): JSX.Element {
  return (
    <>
      <section className="w-full py-space-xl bg-surface-container-lowest border-y border-outline-variant/30">
        <div className="max-w-[1240px] mx-auto px-margin-mobile md:px-gutter lg:px-margin">
          <div className="text-center max-w-3xl mx-auto mb-space-xl">
            <div className="inline-flex items-center gap-space-xs px-space-md py-1.5 rounded-full bg-surface-container text-primary font-label-sm text-label-sm uppercase mb-space-sm font-bold shadow-sm">
              <span className="material-symbols-outlined text-primary text-[18px]">security</span>
              <span>MANDATORY E-BILLING ARCHITECTURE</span>
            </div>
            <h2 className="font-headline-xl text-headline-xl text-on-surface tracking-tight mt-1 mb-space-sm">
              UAE FTA Phase 2 E-Invoicing Integration Pipeline
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant">
              End-to-end cryptographic pipeline: from raw ERP transaction events to real-time FTA clearance, ECDSA signing, and immutable 5-year audit compliance.
            </p>
          </div>

          <div className="relative w-full rounded-xl overflow-hidden shadow-xl bg-surface-container-lowest border border-outline-variant/40 p-3 md:p-6 mb-space-lg">
            <div className="flex items-center justify-between pb-space-sm mb-space-sm border-b border-outline-variant/30">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-primary/20 flex items-center justify-center">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                </span>
                <span className="font-label-sm text-label-sm text-on-surface font-semibold uppercase tracking-wider">
                  FTA Clearance Gateway Pipeline • End-to-End Architecture
                </span>
              </div>
              <div className="flex items-center gap-space-xs text-on-surface-variant font-label-sm text-label-sm">
                <span className="material-symbols-outlined text-[16px] text-primary">zoom_in</span>
                <span>High-Resolution Schema (Click to Zoom)</span>
              </div>
            </div>

            <div className="w-full rounded-lg overflow-hidden bg-surface-container-low shadow-inner border border-outline-variant/20">
              <img
                src="/images/uae-vat/high_resolution_technical_enterprise_system_architecture_diagram_illustrating.png"
                alt="UAE Federal Tax Authority (FTA) Phase 2 E-Invoicing Architecture Diagram showing end-to-end cryptographic pipeline from ERP to clearance"
                className="w-full h-auto object-cover block"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-space-md">
            {pipelineTechItems.map((item) => (
              <div
                key={item.title}
                className="p-space-md bg-surface-container-low rounded-lg border border-outline-variant/30 flex flex-col justify-between"
              >
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center">
                    <span className="material-symbols-outlined text-[18px]">{item.icon}</span>
                  </div>
                  <h4 className="font-headline-sm text-headline-sm text-on-surface">{item.title}</h4>
                </div>
                <p className="font-body-sm text-body-sm text-on-surface-variant">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full py-space-xl bg-surface">
        <div className="max-w-[1240px] mx-auto px-margin-mobile md:px-gutter lg:px-margin">
          <div className="text-center max-w-3xl mx-auto mb-space-xl">
            <span className="font-label-sm text-label-sm uppercase tracking-wider text-primary font-bold">
              Regulatory Architecture Matrix
            </span>
            <h2 className="font-headline-xl text-headline-xl text-on-surface tracking-tight mt-1 mb-space-sm">
              Why Generic Software Fails UAE Tax Audits
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant">
              Western SaaS platforms lack local FTA specifics. Legacy enterprise ERPs charge exorbitant custom consultant retainers. Here is how BlueChip Tech stacks up.
            </p>
          </div>

          <div className="w-full overflow-x-auto bg-surface-container-lowest rounded-xl shadow-md p-space-md">
            <table className="w-full text-left font-body-md text-body-md">
              <thead>
                <tr className="bg-surface-container text-on-surface">
                  <th className="p-space-md rounded-l-DEFAULT font-headline-sm text-headline-sm">
                    Audit &amp; Operational Criteria
                  </th>
                  <th className="p-space-md font-label-lg text-label-lg text-on-surface-variant">
                    Generic SaaS (Xero / Intuit)
                  </th>
                  <th className="p-space-md font-label-lg text-label-lg text-on-surface-variant">
                    Legacy ERP ($150k+ SAP/Oracle)
                  </th>
                  <th className="p-space-md rounded-r-DEFAULT font-headline-sm text-headline-sm text-primary bg-primary/10">
                    BlueChip Tech Platform
                  </th>
                </tr>
              </thead>
              <tbody className="text-on-surface">
                {comparisonData.map((row) => (
                  <tr key={row.criteria} className="hover:bg-surface-container-low transition-colors">
                    <td className="p-space-md font-semibold">{row.criteria}</td>
                    <td className="p-space-md text-on-surface-variant">{row.saas}</td>
                    <td className="p-space-md text-on-surface-variant">{row.legacy}</td>
                    <td className="p-space-md font-medium text-primary bg-primary/5">{row.bluechip}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </>
  );
}
