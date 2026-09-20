import type { JSX } from "react";

const cases = [
  {
    category: "FinTech & Payments",
    tech: "Go · Kafka · AWS",
    title: "High-Frequency Micro-Lending Engine",
    desc: "Engineered an idempotent transaction ledger processing 12,000 requests/sec with automated multi-region failover and real-time fraud scoring.",
    metric: "11ms",
    metricLabel: "P99 API Latency",
    secondMetric: "-54%",
    secondMetricLabel: "Cloud Infra Cost",
  },
  {
    category: "HealthTech",
    tech: "React Native · HIPAA",
    title: "Encrypted Telehealth Consultation App",
    desc: "Cross-platform mobile application with end-to-end encrypted WebRTC video, prescription generation, and seamless EHR data sync.",
    metric: "99.99%",
    metricLabel: "Uptime Reliability",
    secondMetric: "Zero",
    secondMetricLabel: "Security Breaches",
  },
  {
    category: "Logistics",
    tech: "Python · Snowflake",
    title: "Cold-Chain Telemetry & Route Matrix",
    desc: "Centralized telemetry ingestion tracking 1,200 refrigerated trucks, detecting temperature drops within 300ms, saving $2.4M annually in spoilage.",
    metric: "Sub-sec",
    metricLabel: "Query Latency",
    secondMetric: "$2.4M",
    secondMetricLabel: "Annual Waste Saved",
  },
  {
    category: "Luxury E-Commerce",
    tech: "Shopify Plus · Hydrogen",
    title: "Headless Luxury Omnichannel Rebuild",
    desc: "Migrated 4.8M legacy Magento accounts to Shopify Plus with zero downtime cutover, customized ERP bridge, and instant edge-rendered catalog pages.",
    metric: "+42%",
    metricLabel: "Revenue Conversion",
    secondMetric: "650ms",
    secondMetricLabel: "Global TTFB",
  },
  {
    category: "LegalTech & UAE VAT",
    tech: "FTA Phase 2 · Peppol",
    title: "Automated GCC E-Invoicing Gateway",
    desc: "Integrated a high-security tax gateway linking legacy SAP installations directly to the UAE Federal Tax Authority portal with real-time cryptographic signing.",
    metric: "0%",
    metricLabel: "Invoice Rejections",
    secondMetric: "100%",
    secondMetricLabel: "FTA Compliant",
  },
  {
    category: "Manufacturing",
    tech: "Bare-Metal · IT Network",
    title: "Factory IoT Network & Server Overhaul",
    desc: "Deployed 140,000 sq ft industrial Cat6A cabling, on-site rack enclosures, and dedicated edge compute nodes monitoring robotic assembly lines.",
    metric: "0 min",
    metricLabel: "Unplanned Halts",
    secondMetric: "10 Gbps",
    secondMetricLabel: "Backbone Speed",
  },
];

export default function PortfolioShowcase(): JSX.Element {
  return (
    <section
      className="w-full bg-surface-container-low py-space-xl lg:py-[60px] border-b border-outline-variant/40"
      id="portfolio"
    >
      <div className="w-full max-w-[1440px] mx-auto px-margin-mobile md:px-gutter lg:px-margin flex flex-col gap-space-xl lg:gap-[40px]">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-md lg:gap-6">
          <div className="flex flex-col gap-space-xs lg:gap-2 max-w-2xl">
            <span className="font-code-badge text-xs font-bold text-primary uppercase tracking-wider">
              Proven Track Record
            </span>
            <h2 className="font-headline-xl text-2xl sm:text-3xl lg:text-4xl font-extrabold text-on-surface tracking-tight mt-1">
              40+ Applications Shipped Across 6 Critical Industries
            </h2>
            <p className="font-body-md text-on-surface-variant mt-2">
              Every system built by BlueChip Tech undergoes automated load
              testing, chaos testing, and rigorous code audits prior to
              handover.
            </p>
          </div>
          <div className="flex items-center gap-2">
            <span className="px-3.5 py-1.5 rounded-full text-xs font-bold bg-primary text-on-primary">
              100% Production SLA Met
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-space-md lg:gap-6">
          {cases.map((c) => (
            <div
              key={c.title}
              className="bg-surface-container-lowest p-6 rounded-2xl border border-outline-variant/60 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow"
            >
              <div className="flex flex-col gap-3">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full">
                    {c.category}
                  </span>
                  <span className="text-xs font-bold text-on-surface">
                    {c.tech}
                  </span>
                </div>
                <h3 className="font-headline-sm text-lg font-bold text-on-surface">
                  {c.title}
                </h3>
                <p className="font-body-sm text-xs text-on-surface-variant leading-relaxed">
                  {c.desc}
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-outline-variant/40 flex items-center justify-between">
                <div>
                  <span className="text-xl font-headline-md font-extrabold text-primary">
                    {c.metric}
                  </span>
                  <span className="text-[11px] text-outline block">
                    {c.metricLabel}
                  </span>
                </div>
                <div>
                  <span className="text-xl font-headline-md font-extrabold text-on-surface">
                    {c.secondMetric}
                  </span>
                  <span className="text-[11px] text-outline block">
                    {c.secondMetricLabel}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
