import type { JSX } from "react";

const packages = [
  {
    id: "starter",
    title: "Starter Cart",
    price: "$20,000",
    description: "Single-store Shopify or OpenCart build with custom theme.",
    features: [
      "Custom responsive design",
      "Up to 50 product SKUs",
      "Basic SEO optimization",
      "Stripe/PayPal integration",
      "3 rounds of revisions",
    ],
    delivery: "4 weeks",
    cta: "Get Started",
    isPopular: false,
  },
  {
    id: "growth",
    title: "Growth Portal",
    price: "$45,000",
    description: "Multi-store enterprise e-commerce + customer portal.",
    features: [
      "Headless Shopify or custom cart",
      "Customer self-service portal",
      "Role-based access control",
      "Advanced analytics integration",
      "API integrations (5 endpoints)",
      "Ongoing maintenance add-on",
    ],
    delivery: "8 weeks",
    cta: "Get Started",
    isPopular: true,
  },
  {
    id: "enterprise",
    title: "Enterprise Suite",
    price: "$80,000",
    description: "Full custom SaaS app with admin dashboard and integrations.",
    features: [
      "Complete custom web application",
      "Multi-tenant architecture",
      "Payment gateway + subscriptions",
      "Inventory/ERP sync layer",
      "Mobile-responsive PWA",
      "Full CI/CD pipeline setup",
      "Training & documentation",
    ],
    delivery: "12 weeks",
    cta: "Get Started",
    isPopular: false,
  },
];

export default function PricingPackages(): JSX.Element {
  return (
    <section
      id="fixed-packages"
      className="w-full px-margin-mobile md:px-gutter lg:px-margin py-space-xl"
    >
      <div className="max-w-[1440px] mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="font-display-lg text-display-lg text-on-surface mb-4">
            Fixed-Pricing. No Surprises.
          </h2>
          <p className="font-body-xl text-body-xl text-on-surface-variant">
            Pick a package or request a custom scope. We guarantee our price
            and timeline — or it&apos;s free.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
          {packages.map((pkg) => (
            <div
              key={pkg.id}
              className={`p-6 rounded-2xl shadow-sm flex flex-col ${
                pkg.isPopular
                  ? "bg-primary-container/10 border-2 border-primary"
                  : "bg-surface-container-low"
              }`}
            >
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="font-display-md text-display-md text-on-surface">
                    {pkg.title}
                  </h3>
                  <span className="font-label-sm text-label-sm text-on-surface-variant">
                    {pkg.description}
                  </span>
                </div>
                <span className="font-display-sm text-display-sm text-primary font-bold">
                  {pkg.price}
                </span>
              </div>

              <ul className="space-y-2 mb-4 flex-1">
                {pkg.features.map((feature, idx) => (
                  <li
                    key={idx}
                    className="flex items-center gap-2 font-body-sm text-body-sm text-on-surface-variant"
                  >
                    <span className="material-symbols-outlined text-[16px] text-primary">
                      check_circle
                    </span>
                    {feature}
                  </li>
                ))}
              </ul>

              <div className="flex items-center justify-between mb-4">
                <span className="font-label-sm text-label-sm text-on-surface-variant">
                  Delivery:{" "}
                  <span className="text-primary font-semibold">
                    {pkg.delivery}
                  </span>
                </span>
                {pkg.isPopular && (
                  <span className="px-2 py-0.5 rounded-full bg-primary text-on-primary font-label-xs text-label-xs">
                    Most Popular
                  </span>
                )}
              </div>

              <a
                href="#scoping-call"
                className="mt-auto inline-flex items-center justify-center px-6 py-3 rounded-full bg-primary hover:bg-primary-container text-on-primary font-label-md text-label-md transition-all shadow-[0_2px_8px_rgba(0,0,0,0.1)]"
              >
                {pkg.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
