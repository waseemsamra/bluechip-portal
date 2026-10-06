import type { JSX } from "react";

const capabilities = [
  {
    num: "01",
    numLabel: "Portals",
    title: "Customer & Client Portals",
    duration: "$25k – $60k",
    weeks: "6–10 Weeks",
    desc: "Replace endless email threads and manual paperwork with secure, intuitive self-service portals tailored to your proprietary operations.",
    features: [
      "B2B bulk ordering portals with customer-specific tier pricing",
      "Custom quote generators and instant engineering calculations",
      "Role-based access control (Admin, Rep, Distributor, Customer)",
      "Secure Stripe ACH, credit terms, and automated invoice delivery",
    ],
    tech: "Tech: React Native, Flutter, WatermelonDB, SQLite",
  },
  {
    num: "02",
    numLabel: "Logistics",
    title: "Field Operations & Scanning",
    duration: "$25k – $50k",
    weeks: "5–8 Weeks",
    desc: "High-speed barcode/QR camera capture, zero-connectivity offline data queues, warehouse bin audits, technician dispatch, and bi-directional ERP or QuickBooks integration.",
    features: [
      "Offline-First local database (WatermelonDB / SQLite)",
      "Hardware Laser/Barcode camera peripheral SDKs",
      "Geo-fencing & GPS fleet tracking",
      "Signature capture & photo proof of delivery",
    ],
    tech: "Tech: Flutter Engine, SQLite, Honeywell Scanner SDK, Node.js Gateway",
  },
  {
    num: "03",
    numLabel: "Commerce",
    title: "Mobile Commerce & VIP Store",
    duration: "$28k – $55k",
    weeks: "6–9 Weeks",
    desc: "Turnkey mobile storefront synchronized with Shopify Plus or Headless Medusa. 1-tap Apple Pay and Google Pay, personalized push notification drops, and 3.2x higher conversion than mobile web.",
    features: [
      "Apple Pay 1-tap & Google Pay integration",
      "VIP customer segmentation & personalized push drops",
      "Real-time inventory reservation",
      "Post-purchase order tracking & reordering",
    ],
    tech: "Tech: React Native, Shopify Storefront API, Klaviyo Push, Apple Pay",
  },
  {
    num: "04",
    numLabel: "Venture",
    title: "MVP Mobile Launch Sprint",
    duration: "$20k – $35k",
    weeks: "4–6 Weeks",
    desc: "Rapid go-to-market mobile prototype engineered for funded startups and emerging brands. FaceID biometric auth, in-app purchases, analytics pipeline, and verified store deployment.",
    features: [
      "Auth flows (Apple Sign-In, Google, Magic Link)",
      "In-app purchases (IAP) & subscription management",
      "Analytics & crash reporting (Mixpanel, Sentry)",
      "App Store & Play Store submission handling",
    ],
    tech: "Tech: React Native, Stripe SDK, Firebase, Expo",
  },
];

export default function CapabilitiesSection(): JSX.Element {
  return (
    <section className="w-full py-space-xl bg-surface-container-lowest">
      <div className="max-w-[1280px] mx-auto px-margin-mobile md:px-gutter lg:px-margin">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-md mb-space-lg">
          <div>
            <span className="font-label-sm text-label-sm text-primary uppercase tracking-wider font-semibold">
              Specialized Capabilities
            </span>
            <h2 className="font-headline-lg text-headline-lg text-on-surface tracking-tight mt-1">
              Engineered Specifically for High-Growth SMB Operations
            </h2>
          </div>
          <p className="font-body-md text-body-md text-on-surface-variant">
            Every solution includes turnkey store submission, continuous staging
            environments, dedicated QA, and post-launch stability support.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-space-md">
          {capabilities.map((cap, idx) => (
            <div
              key={idx}
              className="rounded-2xl p-space-lg bg-surface-container-low flex flex-col justify-between hover:bg-surface-container transition-all hover:-translate-y-1 shadow-sm"
            >
              <div className="flex flex-col gap-space-sm">
                <div className="flex items-center justify-between">
                  <span className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center">
                    <span className="material-symbols-outlined text-[22px]">
                      {cap.num === "01" ? "diversity_3" :
                       cap.num === "02" ? "qr_code_scanner" :
                       cap.num === "03" ? "shopping_bag" :
                       "rocket_launch"}
                    </span>
                  </span>
                  <span className="font-label-sm text-label-sm text-on-surface-variant uppercase font-mono">
                    {cap.num} / {cap.numLabel}
                  </span>
                </div>
                <h3 className="font-headline-md text-headline-md text-on-surface">
                  {cap.title}
                </h3>
                <p className="font-body-md text-body-md text-on-surface-variant">
                  {cap.desc}
                </p>
              </div>
              <div className="pt-space-md mt-space-md flex flex-col gap-2">
                <div className="flex items-baseline justify-between">
                  <span className="font-headline-sm text-headline-sm text-primary font-bold">
                    {cap.duration}
                  </span>
                  <span className="font-label-sm text-label-sm text-on-surface-variant">
                    {cap.weeks}
                  </span>
                </div>
                <div className="flex flex-wrap gap-1">
                  {cap.features.slice(0, 2).map((_, idx2) => (
                    <span
                      key={idx2}
                      className="text-[11px] px-2 py-0.5 rounded-full bg-surface-container-highest text-on-surface font-mono"
                    >
                      {cap.features[idx2].substring(0, 20)}...
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
