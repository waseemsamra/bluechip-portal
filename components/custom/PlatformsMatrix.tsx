import type { JSX } from "react";

const platforms = [
  {
    name: "Shopify & Shopify Plus",
    icon: "shopping_bag",
    tag: "Speed • Scale • D2C",
    tagColor: "text-primary",
    desc: "Best suited for direct-to-consumer businesses and brands who prioritize rapid market launch, frictionless checkout APIs, low hosting overhead, and native merchant apps.",
    whenToChoose: [
      "$1M - $20M annual consumer commerce",
      "Standard checkout flows + Shop Pay",
      "Lean internal team with zero DevOps needs",
      "Focus on high-speed merchandising",
    ],
    price: "$20k – $45k typical scope",
  },
  {
    name: "OpenCart & Self-Hosted",
    icon: "database",
    tag: "Zero Commish • Full Control",
    tagColor: "text-on-surface-variant",
    desc: "The premier choice for wholesale distributors, B2B enterprises, and high-volume catalogs that need zero platform fees, deep database freedom, and complex tiered pricing.",
    whenToChoose: [
      "Massive catalogs (25,000+ SKUs)",
      "Zero recurring transaction or platform fees",
      "Custom multi-warehouse logic",
      "Deep on-premise ERP & legacy DB sync",
    ],
    price: "$24k – $55k typical scope",
  },
  {
    name: "Custom Next.js & Web Portals",
    icon: "terminal",
    tag: "Proprietary • Tailored UI",
    tagColor: "text-tertiary",
    desc: "When no SaaS or off-the-shelf software can accommodate your distinct business logic, custom calculation matrix, or proprietary partner workflow.",
    whenToChoose: [
      "Custom multi-role self-service dashboards",
      "Automated dynamic quotation engines",
      "SaaS MVP or proprietary client interfaces",
      "Zero constraints on UX, workflow, or APIs",
    ],
    price: "$35k – $80k typical scope",
  },
];

export default function PlatformsMatrix(): JSX.Element {
  return (
    <section className="w-full py-space-xl bg-surface">
      <div className="max-w-[1280px] mx-auto px-margin-mobile md:px-gutter lg:px-margin">
        <div className="text-center max-w-3xl mx-auto">
          <span className="font-label-sm text-label-sm text-primary uppercase font-bold tracking-wide">
            Unbiased Engineering Guidance
          </span>
          <h2 className="font-headline-xl text-headline-xl text-on-surface mt-1">
            Platform Matrix: The Right Engine for Your Model
          </h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant mt-2">
            We do not force you into one proprietary stack. We deploy the optimal
            platform architecture based on your business volume, margins, and
            operational complexity.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-space-md">
          {platforms.map((platform, idx) => (
            <div key={idx} className="p-6 rounded-2xl bg-surface-container-lowest shadow-sm flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-4">
                  <span className="material-symbols-outlined text-[28px]">{platform.icon}</span>
                </div>
                <h3 className="font-headline-md text-headline-md text-on-surface mb-1">{platform.name}</h3>
                <span className={`font-label-sm text-label-sm ${platform.tagColor} uppercase font-bold tracking-wide`}>
                  {platform.tag}
                </span>
                <p className="font-body-md text-body-md text-on-surface-variant my-4">{platform.desc}</p>
                <div className="bg-surface-container-low p-4 rounded-xl space-y-2 mb-4">
                  <div className="font-label-sm text-label-sm text-on-surface font-semibold uppercase">
                    When To Choose:
                  </div>
                  <ul className="font-body-sm text-body-sm text-on-surface-variant space-y-1.5 list-disc pl-4">
                    {platform.whenToChoose.map((item, idx2) => <li key={idx2}>{item}</li>)}
                  </ul>
                </div>
              </div>
              <div className="pt-2">
                <span className="font-headline-sm text-headline-sm text-on-surface">{platform.price}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
