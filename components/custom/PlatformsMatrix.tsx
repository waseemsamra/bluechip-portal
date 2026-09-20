import type { JSX } from "react";

const platforms = [
  {
    name: "Shopify",
    variant: "Plus & Enterprise",
    description:
      "Headless storefronts with Hydrogen or fully managed themes via Liquid + Theme Kit.",
    bgColor: "bg-primary-container/5 border border-primary-container/20",
    icon: "storefront",
    iconColor: "text-[#96bf48]",
  },
  {
    name: "OpenCart",
    variant: "3.x & Multi-Store",
    description:
      "Custom theme development, admin extensions, and API integrations without bloated modules.",
    bgColor: "bg-tertiary-container/5 border border-tertiary-container/20",
    icon: "open_in_browser",
    iconColor: "text-[#2563eb]",
  },
  {
    name: "Custom Cart",
    variant: "Headless React/Vue",
    description:
      "Zero-compromise UX with full control over checkout, pricing logic, and inventory flow.",
    bgColor: "bg-secondary-container/5 border border-secondary-container/20",
    icon: "code",
    iconColor: "text-[#006948]",
  },
];

export default function PlatformsMatrix(): JSX.Element {
  return (
    <section
      id="platforms"
      className="w-full px-margin-mobile md:px-gutter lg:px-margin py-space-xl bg-surface-container-lowest"
    >
      <div className="max-w-[1440px] mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="font-display-lg text-display-lg text-on-surface mb-4">
            E-Commerce Platforms We Master
          </h2>
          <p className="font-body-xl text-body-xl text-on-surface-variant">
            We don&apos;t force you into one solution. We pick the right platform
            based on your growth stage and budget.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
          {platforms.map((platform, idx) => (
            <div
              key={idx}
              className={`p-6 rounded-2xl flex flex-col text-center ${platform.bgColor}`}
            >
              <div className="mb-4 flex justify-center">
                <span
                  className={`material-symbols-outlined text-[40px] ${platform.iconColor}`}
                >
                  {platform.icon}
                </span>
              </div>
              <h3 className="font-display-md text-display-md text-on-surface mb-1">
                {platform.name}
              </h3>
              <span className="font-label-sm text-label-sm text-on-surface-variant mb-3">
                {platform.variant}
              </span>
              <p className="font-body-sm text-body-sm text-on-surface-variant mt-auto">
                {platform.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
