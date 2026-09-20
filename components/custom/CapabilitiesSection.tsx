import type { JSX } from "react";

const capabilities = [
  {
    title: "Enterprise Portals & Dashboards",
    desc: "Role-based access, real-time KPIs, and admin modules built from scratch.",
    icon: "dashboard",
    iconColor: "text-primary",
    bgColor: "bg-primary-container/10",
  },
  {
    title: "B2B & B2C E-Commerce Stores",
    desc: "Conversion-focused Shopify Plus, OpenCart, or fully custom headless carts.",
    icon: "shopping_cart",
    iconColor: "text-tertiary",
    bgColor: "bg-tertiary-container/10",
  },
  {
    title: "Custom Web Applications",
    desc: "SaaS MVPs with authentication, workflows, and multi-tenant architecture.",
    icon: "apps",
    iconColor: "text-secondary",
    bgColor: "bg-secondary-container/10",
  },
  {
    title: "Legacy System Modernization",
    desc: "Replatform monolithic systems into scalable cloud-native microservices.",
    icon: "upgrade",
    iconColor: "text-primary",
    bgColor: "bg-primary-container/10",
  },
];

export default function CapabilitiesSection(): JSX.Element {
  return (
    <section
      id="capabilities"
      className="w-full px-margin-mobile md:px-gutter lg:px-margin py-space-xl md:py-space-xl"
    >
      <div className="max-w-[1440px] mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="font-display-lg text-display-lg text-on-surface mb-4">
            What We Build, Why It Works
          </h2>
          <p className="font-body-xl text-body-xl text-on-surface-variant">
            Custom software that adapts to your workflow — not the other way
            around.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-space-md">
          {capabilities.map((cap, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-surface-container-low shadow-sm flex flex-col gap-4 transition-all hover:shadow-md"
            >
              <div
                className={`w-12 h-12 rounded-xl flex items-center justify-center ${cap.bgColor}`}
              >
                <span
                  className={`material-symbols-outlined text-[28px] ${cap.iconColor}`}
                >
                  {cap.icon}
                </span>
              </div>
              <h3 className="font-display-md text-display-md text-on-surface">
                {cap.title}
              </h3>
              <p className="font-body-md text-body-md text-on-surface-variant flex-1">
                {cap.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
