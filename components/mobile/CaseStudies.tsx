import type { JSX } from "react";

const cases = [
  {
    badge: "Logistics & Wholesale SMB",
    price: "$48,000 Fixed Sprint",
    weeks: "8-Week Delivery",
    title: "Wholesale Field Scanner & Offline Inventory App",
    desc: "A Midwest industrial distributor with 4 warehouses was losing thousands weekly to manual paper audits and dead Wi-Fi zones in metal storage bays. NexusCraft engineered an offline-first camera scanner app that queues barcode logs locally and syncs bidirectionally to their custom SQL database upon network reconnection.",
    metrics: [
      { value: "94%", label: "Faster Cycle Counts" },
      { value: "0", label: "Lost Shipments in Q1" },
      { value: "100%", label: "Offline Sync Uptime" },
    ],
    stack: "Stack: Flutter Engine, SQLite Local Store, Honeywell Scanner SDK, Node.js Gateway",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBJRfZaRX4DzPrYtwiAcVTCOx5rg1GSqWQlDLySXyCktzjJKWcPvvGyyt-wNk76WMpST4oCxwQSxPJOpO7efcsRtI6DcZF8L_xvTFOPhKk36fxs7T5JEJxxNO2Ul1TMNtOWsMHxGWZSIei5COldnvbFOvooXuJk7n1He-TJYgw-D9fHZrRyqJw74uvvSKRNKdI7kkeOLqr9ryzERki-4_Yq0AsI3qP4KZ_Xp1SC8-TBkxuHg9XmFVN9",
  },
  {
    badge: "D2C Fashion & Apparel",
    price: "$36,000 • 6 Weeks",
    weeks: "",
    title: "D2C Luxury Apparel VIP Shopping App",
    desc: "Replaced sluggish mobile web checkout with a React Native app featuring 1-tap Apple Pay, VIP collection push alerts, and real-time inventory reservation.",
    metrics: [
      { value: "4.8★", label: "App Store Rating" },
      { value: "38%", label: "Repeat Buyer Rate" },
      { value: "2.8x", label: "Session Duration" },
    ],
    stack: "React Native, Shopify Storefront API, Klaviyo Push, Apple Pay",
  },
  {
    badge: "Home Services SMB",
    price: "$54,000 • 7 Weeks",
    weeks: "",
    title: "Field Service Technician Dispatch & Invoicing",
    desc: "Automated route dispatch, photo verification of work, on-site digital signatures, and direct payment collection that posts to QuickBooks instantly.",
    metrics: [
      { value: "4 Days", label: "DSO (down from 38d)" },
      { value: "99.2%", label: "Customer Approval" },
      { value: "120+", label: "Daily Jobs Tracked" },
    ],
    stack: "React Native, Stripe Terminal SDK, GeoLocation, QuickBooks API",
  },
];

export default function CaseStudies(): JSX.Element {
  return (
    <section className="w-full py-space-xl bg-surface-container-lowest">
      <div className="max-w-[1280px] mx-auto px-margin-mobile md:px-gutter lg:px-margin">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-md mb-space-lg">
          <div>
            <span className="font-label-sm text-label-sm text-primary uppercase tracking-wider font-semibold">
              Production Proof
            </span>
            <h2 className="font-headline-lg text-headline-lg text-on-surface tracking-tight mt-1">
              Shipped SMB Mobile Case Studies ($24k – $68k)
            </h2>
          </div>
          <div className="flex items-center gap-space-xs text-on-surface-variant font-label-sm text-label-sm">
            <span className="w-2.5 h-2.5 rounded-full bg-primary"></span>
            Verified Client Deployments
          </div>
        </div>
        <div className="rounded-2xl bg-surface-container-low p-space-md md:p-space-lg shadow-sm mb-space-lg">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg items-center">
            <div className="lg:col-span-7 flex flex-col gap-space-sm">
              <div className="flex flex-wrap items-center gap-2">
                <span className="px-2.5 py-0.5 rounded-full bg-primary/10 text-primary font-label-sm text-label-sm font-semibold">
                  {cases[0].badge}
                </span>
                <span className="px-2.5 py-0.5 rounded-full bg-surface-container text-on-surface-variant font-mono text-[11px]">
                  {cases[0].price}
                </span>
                <span className="px-2.5 py-0.5 rounded-full bg-surface-container text-on-surface-variant font-mono text-[11px]">
                  {cases[0].weeks}
                </span>
              </div>
              <h3 className="font-headline-md text-headline-md text-on-surface font-bold">
                {cases[0].title}
              </h3>
              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                {cases[0].desc}
              </p>
              <div className="grid grid-cols-3 gap-space-xs pt-space-xs">
                {cases[0].metrics.map((metric, idx) => (
                  <div
                    key={idx}
                    className="p-space-sm rounded-xl bg-surface-container-lowest shadow-sm flex flex-col"
                  >
                    <span className="font-headline-md text-headline-md text-primary font-bold">
                      {metric.value}
                    </span>
                    <span className="font-label-sm text-label-sm text-on-surface-variant">
                      {metric.label}
                    </span>
                  </div>
                ))}
              </div>
              <div className="flex items-center gap-2 pt-space-xs">
                <span className="material-symbols-outlined text-primary text-[18px]">
                  memory
                </span>
                <span className="font-label-sm text-label-sm text-on-surface">
                  {cases[0].stack}
                </span>
              </div>
            </div>
            <div className="lg:col-span-5">
              <div className="rounded-xl overflow-hidden shadow-lg bg-surface-container-lowest">
                <img
                  alt="Field inventory and scanner mobile app running on phone"
                  className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500"
                  src={cases[0].image}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-space-md">
          {cases.slice(1).map((cs, idx) => (
            <div
              key={idx}
              className="rounded-2xl p-space-lg bg-surface-container-low flex flex-col justify-between shadow-sm"
            >
              <div className="flex flex-col gap-space-sm">
                <div className="flex items-center justify-between">
                  <span className="px-2.5 py-0.5 rounded-full bg-secondary-container text-on-secondary font-label-sm text-label-sm font-semibold">
                    {cs.badge}
                  </span>
                  <span className="text-on-surface-variant font-mono text-[11px]">
                    {cs.price}
                  </span>
                </div>
                <h4 className="font-headline-sm text-headline-sm text-on-surface">
                  {cs.title}
                </h4>
                <p className="font-body-md text-body-md text-on-surface-variant">
                  {cs.desc}
                </p>
                <div className="grid grid-cols-3 gap-2 pt-space-xs text-center">
                  {cs.metrics.map((metric, idx2) => (
                    <div
                      key={idx2}
                      className="p-2 rounded-lg bg-surface-container-lowest"
                    >
                      <span className="block font-headline-sm text-primary font-bold">
                        {metric.value}
                      </span>
                      <span className="text-[10px] text-on-surface-variant">
                        {metric.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
              <span className="text-body-sm text-on-surface-variant pt-space-sm">
                {cs.stack}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
