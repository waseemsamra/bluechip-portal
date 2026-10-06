import type { JSX } from "react";

const caseStudies = [
  {
    badge: "$18M Distributor",
    price: "$48k FIXED FEE • 8 WKS",
    title: "B2B Wholesale Portal & OpenCart Sync",
    desc: "Eliminated manual order entry by deploying a customized wholesale ordering system directly connected to QuickBooks Enterprise and existing warehouse inventory.",
    metrics: [
      { label: "Online Re-orders:", value: "+64% In 90 Days" },
      { label: "Weekly Time Saved:", value: "20 Hours Admin" },
      { label: "Error Rate on Invoices:", value: "Reduced to 0.0%" },
    ],
    avatar: "MK",
    avatarBg: "bg-primary/20 text-primary",
    author: "Markus Kramer",
    role: "VP of Operations",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBJRfZaRX4DzPrYtwiAcVTCOx5rg1GSqWQlDLySXyCktzjJKWcPvvGyyt-wNk76WMpST4oCxwQSxPJOpO7efcsRtI6DcZF8L_xvTFOPhKk36fxs7T5JEJxxNO2Ul1TMNtOWsMHxGWZSIei5COldnvbFOvooXuJk7n1He-TJYgw-D9fHZrRyqJw74uvvSKRNKdI7kkeOLqr9ryzERki-4_Yq0AsI3qP4KZ_Xp1SC8-TBkxuHg9XmFVN9",
  },
  {
    badge: "$7M Apparel Brand",
    price: "$34k FIXED FEE • 6 WKS",
    title: "Shopify Custom Visualizer & Headless Cart",
    desc: "Rebuilt slow multi-plugin storefront into high-performance custom Shopify experience featuring instant 3D leather material previews and 1-click checkout.",
    metrics: [
      { label: "Mobile Conversion:", value: "3.1x Lift" },
      { label: "Average Order Value:", value: "+28% Higher ($310)" },
      { label: "Checkout Reliability:", value: "99.8% Uptime" },
    ],
    avatar: "ES",
    avatarBg: "bg-secondary-container text-on-secondary",
    author: "Elena Solano",
    role: "Founder & Creative Director",
  },
  {
    badge: "$12M Services Firm",
    price: "$52k FIXED FEE • 7 WKS",
    title: "Field Service Client Booking & Pay Portal",
    desc: "Constructed a multi-tenant React portal empowering commercial clients to schedule technicians, review real-time GPS arrival, and settle digital work orders.",
    metrics: [
      { label: "Support Call Volume:", value: "90% Reduction" },
      { label: "Days Sales Outstanding:", value: "Cut from 44 to 9 days" },
      { label: "Client Retention:", value: "98% Satisfaction" },
    ],
    avatar: "DL",
    avatarBg: "bg-primary/20 text-primary",
    author: "David Lindqvist",
    role: "Managing Director",
  },
];

export default function CaseStudies(): JSX.Element {
  return (
    <section className="w-full py-space-xl bg-surface-container-lowest">
      <div className="max-w-[1280px] mx-auto px-margin-mobile md:px-gutter lg:px-margin flex flex-col gap-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <span className="font-label-sm text-label-sm text-primary uppercase tracking-wider font-semibold">
              Proof of Work
            </span>
            <h2 className="font-headline-xl text-headline-xl text-on-surface mt-1">
              Shipped SMB Case Studies ($24k – $62k)
            </h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant mt-2">
              Real outcomes delivered for growing businesses on time and within
              strict budget constraints.
            </p>
          </div>
          <div className="flex items-center gap-2">
            <span className="px-3 py-1 rounded-full bg-surface-container text-on-surface-variant font-label-sm text-label-sm">
              3 of 42 Projects Highlighted
            </span>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-space-md">
          {caseStudies.map((cs, idx) => (
            <div key={idx} className="rounded-2xl bg-surface-container-lowest shadow-sm overflow-hidden flex flex-col justify-between">
              <div className="p-6">
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="px-2.5 py-0.5 rounded-full bg-surface-container text-on-surface-variant font-label-sm text-label-sm font-semibold">
                    {cs.badge}
                  </span>
                  <span className="font-label-sm text-label-sm text-primary font-bold">{cs.price}</span>
                </div>
                <h3 className="font-headline-md text-headline-md text-on-surface mb-2">{cs.title}</h3>
                <p className="font-body-md text-body-md text-on-surface-variant mb-4">{cs.desc}</p>
                <div className="bg-surface-container-low p-4 rounded-xl space-y-2 mb-4">
                  {cs.metrics.map((metric, idx2) => (
                    <div key={idx2} className="flex items-center justify-between">
                      <span className="font-body-sm text-body-sm text-on-surface-variant">{metric.label}</span>
                      <span className="font-label-sm text-label-sm text-primary font-bold">{metric.value}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="px-6 pb-6 pt-0">
                <div className="border-t border-surface-container-low pt-4 flex items-center gap-3">
                  <div className={`w-8 h-8 rounded-full ${cs.avatarBg} flex items-center justify-center font-bold text-body-sm`}>
                    {cs.avatar}
                  </div>
                  <div className="flex flex-col">
                    <span className="font-label-sm text-label-sm text-on-surface font-bold">{cs.author}</span>
                    <span className="font-body-sm text-body-sm text-on-surface-variant">{cs.role}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
