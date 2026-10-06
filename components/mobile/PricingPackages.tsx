import type { JSX } from "react";

const tiers = [
  {
    label: "TIER 01",
    labelColor: "text-on-surface-variant",
    title: "Mobile MVP Launchpad",
    desc: "The fastest path from concept to working App Store & Play Store release for seed ventures and straightforward business utilities.",
    price: "$20k–$32k",
    subtitle: "Fixed Fee • 4–6 Weeks Turnaround",
    features: [
      "Single cross-platform React Native / Flutter codebase",
      "Authentication (Email, Google, Apple Sign-In)",
      "Push notifications & deep linking configured",
      "Stripe Mobile SDK or In-App Purchases (IAP)",
      "100% Guaranteed App Store / Play approval handling",
      "30-Day Post-Launch Warranty SLA",
    ],
    cta: "Select MVP Sprint",
    ctaClass: "bg-surface-container hover:bg-surface-container-high text-on-surface",
  },
  {
    label: "TIER 02",
    labelColor: "text-primary",
    title: "Growth Mobile Platform",
    desc: "Full-featured native mobile app with offline synchronization, complex role permissions, and bidirectional enterprise database sync.",
    price: "$38k–$55k",
    subtitle: "Fixed Fee • 6–8 Weeks Turnaround",
    features: [
      "Everything in Tier 01, plus:",
      "Offline-First local database (WatermelonDB / SQLite)",
      "Direct custom API, ERP, or CRM bi-directional sync",
      "Multi-role access (Client, Dispatcher, Manager)",
      "Biometric Security (FaceID, Fingerprint Unlock)",
      "60-Day Post-Launch Zero-Bug Guarantee SLA",
      "Complete CI/CD automated deployment repo pipeline",
    ],
    cta: "Select Growth Platform",
    ctaClass: "bg-primary hover:bg-primary-container text-on-primary",
    featured: true,
    badge: "Most Popular for SMBs",
  },
  {
    label: "TIER 03",
    labelColor: "text-on-surface-variant",
    title: "Scale & Hardware Architecture",
    desc: "Designed for mission-critical operations requiring physical hardware interfaces, custom camera algorithms, or microsecond BLE streaming.",
    price: "$60k–$75k",
    subtitle: "Fixed Fee • 8–10 Weeks Turnaround",
    features: [
      "Everything in Tier 02, plus:",
      "Hardware integrations (Bluetooth LE, RFID, Zebra Scanners)",
      "Automated UI testing across 15+ physical devices",
      "High-volume push notification segmentation infrastructure",
      "Custom background audio/location thread workers",
      "90-Day Post-Launch SLA with 2-hour response window",
    ],
    cta: "Select Enterprise Tier",
    ctaClass: "bg-surface-container hover:bg-surface-container-high text-on-surface",
  },
];

export default function PricingPackages(): JSX.Element {
  return (
    <section
      className="w-full py-space-xl bg-surface"
      id="pricing-packages"
    >
      <div className="max-w-[1280px] mx-auto px-margin-mobile md:px-gutter lg:px-margin">
        <div className="text-center max-w-2xl mx-auto mb-space-lg">
          <span className="font-label-sm text-label-sm text-primary uppercase tracking-wider font-semibold">
            Strict Budget Integrity
          </span>
          <h2 className="font-headline-lg text-headline-lg text-on-surface tracking-tight mt-1">
            Guaranteed Fixed-Price Mobile Development Sprints
          </h2>
          <p className="font-body-md text-body-md text-on-surface-variant mt-2">
            Never sign an open-ended hourly invoice again. All packages include
            UX design, native engineering, store launch management, and full IP
            handover.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-space-lg items-stretch">
          {tiers.map((tier, idx) => (
            <div
              key={idx}
              className={`rounded-2xl p-space-lg ${
                tier.featured
                  ? "bg-surface-container-lowest shadow-xl relative transform lg:-translate-y-2"
                  : "bg-surface-container-lowest shadow-sm"
              } flex flex-col justify-between`}
            >
              {tier.badge && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-primary text-on-primary font-label-sm text-label-sm font-bold shadow-md tracking-wide uppercase">
                  {tier.badge}
                </div>
              )}
              <div className="flex flex-col gap-space-sm">
                <span
                  className={`font-label-sm text-label-sm ${tier.labelColor} font-mono uppercase ${
                    tier.featured ? "pt-2" : ""
                  }`}
                >
                  {tier.label}
                </span>
                <h3 className="font-headline-md text-headline-md text-on-surface font-bold">
                  {tier.title}
                </h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  {tier.desc}
                </p>
                <div className="pt-space-xs pb-space-sm">
                  <span
                    className={`font-headline-xl text-headline-xl ${
                      tier.featured ? "text-primary" : "text-on-surface"
                    } font-extrabold`}
                  >
                    {tier.price}
                  </span>
                  <span className="block font-label-sm text-label-sm text-on-surface-variant">
                    {tier.subtitle}
                  </span>
                </div>
                <div className="space-y-space-xs font-body-sm text-body-sm text-on-surface pt-space-xs">
                  {tier.features.map((feature, idx2) => (
                    <div key={idx2} className="flex items-center gap-2">
                      {feature.includes("Everything in Tier") ? (
                        <span className="material-symbols-outlined text-primary text-[18px]">
                          add_task
                        </span>
                      ) : (
                        <span className="material-symbols-outlined text-primary text-[18px]">
                          check_circle
                        </span>
                      )}
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="pt-space-md mt-space-md">
                <a
                  className={`w-full inline-flex items-center justify-center py-space-sm rounded-full ${tier.ctaClass} font-label-lg text-label-lg transition-all ${
                    tier.featured
                      ? "shadow-[0_4px_14px_rgba(0,105,72,0.3)]"
                      : ""
                  }`}
                  href="#scoping-consultation"
                >
                  {tier.cta}
                </a>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-space-lg p-space-md rounded-2xl bg-surface-container-low flex flex-col md:flex-row items-center justify-between gap-space-md">
          <div className="flex items-center gap-space-sm">
            <span className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0">
              <span className="material-symbols-outlined text-[20px]">
                shield
              </span>
            </span>
            <div>
              <span className="font-headline-sm text-headline-sm text-on-surface">
                The NexusCraft Fixed-Price Warranty
              </span>
              <p className="font-body-sm text-body-sm text-on-surface-variant">
                All intellectual property, source repositories, keys, and store
                listings are 100% owned by your company from Day 1.
              </p>
            </div>
          </div>
          <a
            className="shrink-0 text-primary font-label-lg text-label-lg hover:underline flex items-center gap-1"
            href="#scoping-consultation"
          >
            Review standard Master Services Agreement{" "}
            <span className="material-symbols-outlined text-[16px]">
              arrow_forward
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
