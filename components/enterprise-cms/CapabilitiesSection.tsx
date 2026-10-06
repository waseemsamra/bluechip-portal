import type { JSX } from "react";

const capabilities = [
  {
    badge: "01 • MICROSOFT 365",
    badgeColor: "bg-primary/10 text-primary",
    weeks: "4–8 Weeks",
    price: "$22k – $55k",
    title: "SharePoint Online & Modern Intranets",
    desc: "Replace sluggish legacy team drives with modern responsive communication hubs, automated metadata taxonomies, and deep Microsoft Teams orchestration.",
    features: [
      "Hub Site Architectures with localized department navigation",
      "Power Automate workflows (approval matrices, compliance auditing)",
      "Legacy on-prem SharePoint 2013/2016 to M365 zero-loss migration",
    ],
    bestFor: "Internal Intranet, MS Teams Hub",
    tech: "SPFx + Graph API Ready",
  },
  {
    badge: "02 • ENTERPRISE DXP",
    badgeColor: "bg-tertiary-fixed text-on-tertiary-fixed",
    weeks: "6–10 Weeks",
    price: "$30k – $75k",
    title: "Liferay DXP Custom Enterprise Portals",
    desc: "Heavy-duty customer self-service portals, distributor partner hubs, and extranets requiring robust Java/OSGi multi-tenancy and military-grade RBAC.",
    features: [
      "Granular Role-Based Access Control (RBAC) across client tiers",
      "Custom OSGi modules, React Client Extensions & fragments",
      "Direct SAP, Oracle, and Salesforce bi-directional API sync",
    ],
    bestFor: "Partner Extranets, B2B Self-Service",
    tech: "Java/OSGi + Headless REST",
  },
  {
    badge: "03 • HYBRID HEADLESS",
    badgeColor: "bg-primary/10 text-primary",
    weeks: "5–9 Weeks",
    price: "$25k – $65k",
    title: "Magnolia CMS & Hybrid Content Hubs",
    desc: "Unify global marketing teams with WYSIWYG visual content authoring while delivering ultra-fast decoupled experiences to Next.js or mobile applications.",
    features: [
      "Multi-site, multi-country localization and asset governance",
      "RESTful & GraphQL Delivery APIs with instant cache invalidation",
      "Seamless DAM & Commerce connectivity (Shopify Plus, Bynder)",
    ],
    bestFor: "Decoupled Multi-Brand Marketing Hubs",
    tech: "Next.js + GraphQL Native",
  },
  {
    badge: "04 • DATA PIPELINES",
    badgeColor: "bg-secondary-container text-on-secondary-container",
    weeks: "3–6 Weeks",
    price: "$20k – $45k",
    title: "Legacy CMS Migration & Enterprise APIs",
    desc: "Extract, sanitize, and ingest millions of content records, taxonomy tags, and document binaries from legacy systems with zero operational disruption.",
    features: [
      "Automated migration scripts from Drupal, WordPress VIP, legacy DBs",
      "Taxonomy realignment and media transformation pipelines",
      "Parallel run validations and zero-downtime cutover guarantees",
    ],
    bestFor: "Risk-Free Legacy Sunsetting",
    tech: "ETL Scripts & Validation",
  },
];

export default function CapabilitiesSection(): JSX.Element {
  return (
    <section className="w-full py-space-xl bg-surface">
      <div className="max-w-[1280px] mx-auto px-margin-mobile md:px-gutter lg:px-margin">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-space-xl">
          <div>
            <span className="font-label-sm text-label-sm text-primary uppercase tracking-widest font-bold block mb-space-xs">
              Engineering Disciplines
            </span>
            <h2 className="font-headline-xl text-headline-xl text-on-surface tracking-tight">
              The 4 Core CMS &amp; Portal Capabilities
            </h2>
          </div>
          <p className="font-body-md text-body-md text-on-surface-variant max-w-md mt-space-sm md:mt-0">
            Targeted production sprints for mission-critical portals. No
            unbounded hourly billing, no junior bench learning on your dime.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-space-lg">
          {capabilities.map((cap, idx) => (
            <div
              key={idx}
              className="p-space-lg rounded-lg bg-surface-container-lowest shadow-md flex flex-col justify-between hover:shadow-xl transition-all group"
            >
              <div>
                <div className="flex items-center justify-between mb-space-md">
                  <span
                    className={`px-space-sm py-space-xs rounded-full ${cap.badgeColor} font-label-sm text-label-sm font-bold`}
                  >
                    {cap.badge}
                  </span>
                  <span className="px-space-sm py-space-xs rounded-full bg-surface-container font-label-sm text-label-sm text-on-surface font-semibold">
                    {cap.weeks}
                  </span>
                </div>
                <h3 className="font-headline-md text-headline-md text-on-surface mb-space-xs group-hover:text-primary transition-colors">
                  {cap.title}
                </h3>
                <p className="font-body-md text-body-md text-on-surface-variant mb-space-md">
                  {cap.desc}
                </p>
                <ul className="space-y-space-sm mb-space-md font-body-md text-body-md text-on-surface">
                  {cap.features.map((feature, idx2) => (
                    <li
                      key={idx2}
                      className="flex items-center gap-space-xs"
                    >
                      <span className="w-4 h-4 rounded-full bg-primary text-on-primary flex items-center justify-center text-[10px]">
                        ✓
                      </span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="pt-space-md mt-space-md bg-surface-container-low p-space-sm rounded-DEFAULT flex items-center justify-between">
                <span className="font-label-sm text-label-sm text-on-surface-variant">
                  Best For: {cap.bestFor}
                </span>
                <span className="font-label-sm text-label-sm text-primary font-bold">
                  {cap.tech}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
