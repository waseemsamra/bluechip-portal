import type { JSX } from "react";

const tiers = [
  {
    label: "Tier 01 • Essentials",
    labelColor: "text-on-surface-variant",
    featured: false,
    weeks: "4–5 Weeks",
    price: "$22,000",
    priceRange: "– $35,000",
    title: "Portal Launchpad",
    desc: "Turnkey foundation for intranets or corporate content systems seeking fast security & clean information hierarchy.",
    features: [
      "Turnkey SharePoint or Magnolia Setup",
      "Custom Brand Theme & Typography styling",
      "Azure AD / Okta SSO Authentication",
      "Core Document Taxonomy & Permissions",
      "30-Day Post-Launch Bug Warranty",
    ],
    resourcing: "1 Senior Architect + 1 Frontend Eng",
    cta: "Scope Launchpad Tier",
    ctaClass: "bg-surface-container-highest hover:bg-surface-container text-on-surface",
  },
  {
    label: "Tier 02 • Enterprise",
    labelColor: "text-primary",
    featured: true,
    badge: "MOST POPULAR CHOICE",
    weeks: "6–8 Weeks",
    price: "$38,000",
    priceRange: "– $58,000",
    title: "Enterprise DXP & Workflows",
    desc: "Full-featured portal ecosystem with customized business logic, multi-tier permissions, and bi-directional API integrations.",
    features: [
      "Liferay DXP or Advanced SharePoint Online Hub",
      "Granular Multi-Role RBAC & External Customer Portals",
      "Automated Approval Workflows (Power Automate / BPMN)",
      "1 Core ERP or CRM Bi-Directional Connector",
      "Automated Data Ingestion (Up to 15,000 files/records)",
      "60-Day Post-Launch SLA & Admin Training Sprints",
    ],
    resourcing: "1 Principal DXP Architect + 2 Full-Stack Engineers",
    cta: "Scope Custom DXP Tier",
    ctaClass: "bg-primary hover:bg-primary-container text-on-primary",
    ctaExtraClass: "shadow-[0_4px_14px_rgba(0,105,72,0.25)]",
  },
  {
    label: "Tier 03 • Global Scale",
    labelColor: "text-on-surface-variant",
    featured: false,
    weeks: "8–10 Weeks",
    price: "$65,000",
    priceRange: "– $80,000",
    title: "Hybrid Multi-Site Scale",
    desc: "Designed for multi-national brands, complex headless architectures, and massive legacy system retirements.",
    features: [
      "Multi-Tenant or Multi-Country CMS Orchestration",
      "Decoupled Headless API Gateway (Next.js / Nuxt)",
      "Massive Content Migration (50,000+ files & metadata)",
      "High-Availability Cloud Infrastructure (Terraform/IaC)",
      "90-Day Post-Launch SLA + Dedicated Engineer on Slack",
    ],
    resourcing: "Staff Architect + Lead DevOps + 2 Senior Devs",
    cta: "Scope Multi-Site Tier",
    ctaClass: "bg-surface-container-highest hover:bg-surface-container text-on-surface",
  },
];

export default function PricingPackages(): JSX.Element {
  return (
    <section
      className="w-full py-space-xl bg-surface"
      id="packages"
    >
      <div className="max-w-[1280px] mx-auto px-margin-mobile md:px-gutter lg:px-margin">
        <div className="text-center max-w-3xl mx-auto mb-space-xl">
          <span className="font-label-sm text-label-sm text-primary uppercase tracking-widest font-bold block mb-space-xs">
            Predictable Commercials
          </span>
          <h2 className="font-headline-xl text-headline-xl text-on-surface tracking-tight mb-space-sm">
            Transparent Fixed-Fee CMS Packages
          </h2>
          <p className="font-body-md text-body-md text-on-surface-variant">
            Complete end-to-end implementation sprints. Includes technical
            scoping, UI theme adaptation, configuration, migration, and
            post-launch hypercare.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-space-lg items-stretch">
          {tiers.map((tier, idx) => (
            <div
              key={idx}
              className={`bg-surface-container-lowest rounded-lg p-space-lg shadow-md flex flex-col justify-between hover:shadow-xl transition-all`}
            >
              {tier.badge && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-space-md py-space-xs rounded-full bg-primary text-on-primary font-label-sm text-label-sm font-bold shadow-md">
                  {tier.badge}
                </div>
              )}
              <div>
                <div className="flex items-center justify-between mb-space-sm">
                  <span
                    className={`font-label-sm text-label-sm ${tier.labelColor} font-bold uppercase tracking-wider`}
                  >
                    {tier.label}
                  </span>
                  <span
                    className={`px-space-sm py-space-xs rounded-full bg-surface-container font-label-sm text-label-sm font-semibold ${
                      tier.labelColor === "text-primary" ? "text-primary" : "text-on-surface"
                    }`}
                  >
                    {tier.weeks}
                  </span>
                </div>
                <h3 className="font-headline-lg text-headline-lg text-on-surface mb-space-xs">
                  {tier.title}
                </h3>
                <p className="font-body-md text-body-md text-on-surface-variant mb-space-md">
                  {tier.desc}
                </p>
                <div className="font-display-hero text-[36px] text-on-surface mb-space-lg leading-tight">
                  {tier.price}{" "}
                  <span className="text-headline-sm text-on-surface-variant font-normal">
                    {tier.priceRange}
                  </span>
                </div>
                <ul className="space-y-space-sm mb-space-lg font-body-md text-body-md text-on-surface">
                  {tier.features.map((feature, idx2) => (
                    <li key={idx2} className="flex items-start gap-space-xs">
                      <span className="material-symbols-outlined text-primary text-[18px] shrink-0 mt-1">
                        {tier.featured && idx2 === 0 ? "add_task" : "check_circle"}
                      </span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <div className="text-body-sm text-on-surface-variant mb-space-md">
                  Resourcing:{" "}
                  <strong className="text-on-surface">{tier.resourcing}</strong>
                </div>
                <a
                  className={`w-full inline-flex items-center justify-center px-space-md py-space-sm rounded-full ${tier.ctaClass} font-label-lg text-label-lg transition-all text-center ${tier.featured ? tier.ctaExtraClass : ""}`}
                  href="#scoping-intake"
                >
                  {tier.cta}
                </a>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-space-lg p-space-md rounded-2xl bg-surface-container-low flex flex-col md:flex-row items-center justify-between gap-space-md">
          <div className="flex items-center gap-space-sm">
            <span className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0">
              <span className="material-symbols-outlined text-[20px]">shield</span>
            </span>
            <div>
              <span className="font-headline-sm text-headline-sm text-on-surface">
                The NexusCraft Fixed-Price Warranty
              </span>
              <p className="font-body-sm text-body-sm text-on-surface-variant">
                All intellectual property, source repositories, keys, and store
                listings are 100% owned by your company from Day 1.
              </p>
            </div>
          </div>
          <a
            className="shrink-0 text-primary font-label-lg text-label-lg hover:underline flex items-center gap-1"
            href="#scoping-intake"
          >
            Review standard Master Services Agreement{" "}
            <span className="material-symbols-outlined text-[16px]">
              arrow_forward
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
