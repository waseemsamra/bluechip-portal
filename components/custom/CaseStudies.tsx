import type { JSX } from "react";

const caseStudies = [
  {
    client: "Apex Gear Ltd",
    title: "Wholesale B2B Portal + Shopify D2C Integration",
    result: "Reduced order-processing time from 4 hrs/day to 12 min/day",
    metric: "90% Time Saved",
    quote:
      "Since launching our new portal, invoicing errors dropped to zero and our fulfillment team works 3 hours fewer each day.",
    author: "— Sarah Chen, Operations Director",
    image: "bg-gradient-to-br from-primary-container/10 to-tertiary-container/10",
    icon: "store_mall_directory",
  },
  {
    client: "MedTech Supply Co",
    title: "HIPAA-Compliant Inventory Dashboard",
    result: "Automated medical device tracking across 12 warehouses",
    metric: "Zero Audit Findings",
    quote:
      "The custom inventory dashboard passed FDA audit without a single finding. The BlueChip team understood our compliance needs.",
    author: "— James Park, IT Director",
    image: "bg-gradient-to-br from-secondary-container/10 to-primary-container/10",
    icon: "medical_services",
  },
  {
    client: "Summit Builders Inc",
    title: "Project Costing Web App MVP",
    result: "Replaced spreadsheet chaos with real-time gross margin tracking",
    metric: "18% Margin Improvement",
    quote:
      "We went from 5 different Excel sheets to one unified app. Margin visibility improved instantly — we caught a $250k overrun before it happened.",
    author: "— Maria Rodriguez, CFO",
    image: "bg-gradient-to-br from-tertiary-container/10 to-secondary-container/10",
    icon: "home_work",
  },
];

export default function CaseStudies(): JSX.Element {
  return (
    <section
      id="case-studies"
      className="w-full px-margin-mobile md:px-gutter lg:px-margin py-space-xl"
    >
      <div className="max-w-[1440px] mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="font-display-lg text-display-lg text-on-surface mb-4">
            Results From Businesses Like Yours
          </h2>
          <p className="font-body-xl text-body-xl text-on-surface-variant">
            No fluff. No retainers. Just measurable outcomes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
          {caseStudies.map((study, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-surface-container-low shadow-sm flex flex-col"
            >
              <div
                className={`w-full h-40 rounded-xl mb-4 ${study.image} flex items-center justify-center`}
              >
                <span
                  className={`material-symbols-outlined text-[48px] text-primary`}
                >
                  {study.icon}
                </span>
              </div>
              <span className="font-label-xs text-label-xs text-on-surface-variant uppercase tracking-wider">
                {study.client}
              </span>
              <h3 className="font-display-sm text-display-sm text-on-surface mt-2 mb-3">
                {study.title}
              </h3>
              <div className="mt-auto">
                <div className="font-headline-sm text-headline-sm text-primary font-bold mb-2">
                  {study.metric}
                </div>
                <p className="font-body-sm text-body-sm text-on-surface-variant italic">
                  {study.quote}
                </p>
                <span className="font-label-sm text-label-sm text-on-surface-variant mt-2 block">
                  {study.author}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
