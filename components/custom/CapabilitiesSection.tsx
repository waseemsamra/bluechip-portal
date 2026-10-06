import type { JSX } from "react";

const capabilities = [
  {
    num: "01",
    title: "Custom Web & Client Portals",
    price: "$25k – $60k • 6–10 WEEKS",
    desc: "Replace endless email threads and manual paperwork with secure, intuitive self-service portals tailored to your proprietary operations.",
    features: [
      "B2B bulk ordering portals with customer-specific tier pricing",
      "Custom quote generators and instant engineering calculations",
      "Role-based access control (Admin, Rep, Distributor, Customer)",
      "Secure Stripe ACH, credit terms, and automated invoice delivery",
    ],
    tech: "Tech: React • Next.js • Node • PostgreSQL",
  },
  {
    num: "02",
    title: "Multi-Platform E-Commerce Solutions",
    price: "$20k – $55k • 4–8 WEEKS",
    desc: "Modernize your digital storefront for maximum conversion rates and frictionless checkouts across Shopify, OpenCart, and custom stores.",
    features: [
      "Shopify Plus enterprise architecture & liquid custom theme crafting",
      "OpenCart performance tune-up, DB optimization & PHP 8.x upgrade",
      "Bespoke product builders, 3D visualizers, & bundled logic",
      "Sub-second Core Web Vitals optimization for immediate SEO lift",
    ],
    tech: "Tech: Shopify Liquid • OpenCart • Headless • Tailwind",
  },
  {
    num: "03",
    title: "High-Converting Web Apps & Sites",
    price: "$20k – $40k • 4–6 WEEKS",
    desc: "Lightning-fast marketing engines with modern headless CMS setups that allow non-technical teams to publish without breaking styling.",
    features: [
      "Blazing Next.js static site generation with edge SSR",
      "Sanity / Strapi headless CMS setup for seamless editorial control",
      "Conversion-tested lead qualification & CRM pipeline webhooks",
      "Integrated analytics, Heatmaps, and custom event dispatching",
    ],
    tech: "Tech: Next.js • TypeScript • Sanity • Vercel",
  },
  {
    num: "04",
    title: "E-Commerce & ERP Integrations",
    price: "$18k – $35k • 3–5 WEEKS",
    desc: "Eliminate costly human data-entry errors by establishing resilient, bidirectional sync bridges between your sales channels and backend ERPs.",
    features: [
      "Automated sync for QuickBooks Online / Desktop & NetSuite",
      "ShipStation & custom 3PL warehouse inventory polling",
      "Custom webhook handlers with automatic error retry queues",
      "Legacy database wrappers (SQL Server, MySQL, CSV automations)",
    ],
    tech: "Tech: REST APIs • GraphQL • AWS Lambda • Redis",
  },
];

export default function CapabilitiesSection(): JSX.Element {
  return (
    <section className="w-full py-space-xl bg-surface-container-lowest">
      <div className="max-w-[1280px] mx-auto px-margin-mobile md:px-gutter lg:px-margin flex flex-col gap-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="max-w-2xl">
            <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">
              PRICING BANDS: $18,000 — $80,000 FLAT RATE
            </span>
            <h2 className="font-headline-xl text-headline-xl text-on-surface mt-1">
              Engineered For Growth
            </h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant mt-2">
              Custom Software & Mobile Applications that don&apos;t break the bank or
              the bank&apos;s backend systems.
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <span className="font-label-sm text-label-sm text-primary uppercase tracking-wide font-semibold">
              Capabilities
            </span>
            <span className="font-headline-sm text-headline-sm text-on-surface">
              4 Core Software &amp; Commerce Capabilities
            </span>
            <p className="font-body-md text-body-md text-on-surface-variant">
              Engineered exclusively for revenue-producing businesses who need high-performance tools without massive agency bloat.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-space-md">
          {capabilities.map((cap, idx) => (
            <div
              key={idx}
              className="p-space-md rounded-2xl bg-surface-container-lowest shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div className="flex flex-col gap-space-sm">
                <div className="flex items-center justify-between mb-4">
                  <span className="font-headline-xl text-headline-xl text-primary font-extrabold opacity-30">
                    {cap.num}
                  </span>
                  <span className="px-3 py-1 rounded-full bg-primary/10 text-primary font-label-sm text-label-sm font-semibold">
                    {cap.price}
                  </span>
                </div>
                <h3 className="font-headline-lg text-headline-lg text-on-surface mb-3">
                  {cap.title}
                </h3>
                <p className="font-body-md text-body-md text-on-surface-variant mb-6">
                  {cap.desc}
                </p>
                <div className="space-y-2.5 mb-6">
                  {cap.features.map((feature, idx2) => (
                    <div key={idx2} className="flex items-start gap-2.5">
                      <span className="material-symbols-outlined text-primary text-[18px] mt-0.5">
                        check_circle
                      </span>
                      <span className="font-body-md text-body-md text-on-surface">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="pt-4 flex items-center justify-between">
                <span className="font-label-sm text-label-sm text-on-surface-variant">
                  {cap.tech}
                </span>
                <a
                  className="font-label-lg text-label-lg text-primary hover:underline inline-flex items-center gap-1"
                  href="#scoping-call"
                >
                  Scope this build{" "}
                  <span className="material-symbols-outlined text-[16px]">
                    arrow_forward
                  </span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
