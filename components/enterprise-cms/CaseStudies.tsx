import type { JSX } from "react";

const caseStudies = [
  {
    industry: "Logistics & Distribution",
    price: "$54k • 7 Wks",
    title: "B2B Partner Extranet & Order Portal on Liferay DXP",
    desc: "Replaced daily phone and email inquiries with a self-service partner portal synced live with their SAP ERP system.",
    metrics: [
      { label: "Order-Status Support Tickets:", value: "-84% in 90 Days" },
      { label: "Customer Onboarding:", value: "100% Automated" },
    ],
    platform: "Liferay DXP + SAP BAPI Connectors",
  },
  {
    industry: "Healthcare Network",
    price: "$42k • 6 Wks",
    title: "HIPAA-Compliant SharePoint Online Intranet Hub",
    desc: "Consolidated 4 legacy departmental network drives into a unified modern SharePoint Hub with automated policy sign-offs for 850+ medical staff.",
    metrics: [
      { label: "Clinical Policy Compliance:", value: "100% Audit-Ready" },
      { label: "Search Retrieval Time:", value: "Reduced by 70%" },
    ],
    platform: "SharePoint Online + Azure AD RBAC",
  },
  {
    industry: "Global Retail & CPG",
    price: "$64k • 8 Wks",
    title: "Multi-Region Magnolia CMS Hybrid Replatform",
    desc: "Migrated 12 international country storefronts into a headless Magnolia CMS powering high-speed Next.js frontends with localized editorial controls.",
    metrics: [
      { label: "Editorial Publishing Cycle:", value: "4x Faster Time-to-Market" },
      { label: "System Uptime SLA:", value: "99.99% Maintained" },
    ],
    platform: "Magnolia CMS + Next.js Headless",
  },
];

export default function CaseStudies(): JSX.Element {
  return (
    <section className="w-full py-space-xl bg-surface-container-low">
      <div className="max-w-[1280px] mx-auto px-margin-mobile md:px-gutter lg:px-margin">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-space-xl">
          <div>
            <span className="font-label-sm text-label-sm text-primary uppercase tracking-widest font-bold block mb-space-xs">
              Production Track Record
            </span>
            <h2 className="font-headline-xl text-headline-xl text-on-surface tracking-tight">
              Verified Client Case Studies
            </h2>
          </div>
          <p className="font-body-md text-body-md text-on-surface-variant max-w-md mt-space-sm md:mt-0">
            Real enterprise portals delivered on-time, strictly within agreed
            fixed budgets between $28k and $72k.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-space-lg">
          {caseStudies.map((cs, idx) => (
            <div
              key={idx}
              className="bg-surface-container-lowest rounded-lg p-space-lg shadow-md flex flex-col justify-between hover:-translate-y-1 transition-transform"
            >
              <div>
                <div className="flex items-center justify-between mb-space-sm">
                  <span className="font-label-sm text-label-sm text-on-surface-variant uppercase">
                    {cs.industry}
                  </span>
                  <span className="px-space-sm py-space-xs rounded-full bg-primary/10 text-primary font-label-sm text-label-sm font-bold">
                    {cs.price}
                  </span>
                </div>
                <h3 className="font-headline-md text-headline-md text-on-surface mb-space-xs">
                  {cs.title}
                </h3>
                <p className="font-body-md text-body-md text-on-surface-variant mb-space-md">
                  {cs.desc}
                </p>
                <div className="space-y-space-xs py-space-sm bg-surface-container-low rounded-DEFAULT px-space-sm mb-space-md">
                  {cs.metrics.map((metric, idx2) => (
                    <div
                      key={idx2}
                      className="flex items-center justify-between font-label-sm text-label-sm"
                    >
                      <span className="text-on-surface-variant">{metric.label}</span>
                      <span className="font-bold text-primary">{metric.value}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="font-body-sm text-body-sm text-on-surface-variant pt-space-xs">
                Platform:{" "}
                <span className="font-semibold text-on-surface">{cs.platform}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
