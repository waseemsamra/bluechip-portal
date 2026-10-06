import type { JSX } from "react";

const platforms = [
  {
    badge: "Recommended for 75% of SMBs",
    badgeColor: "bg-tertiary/10 text-tertiary",
    name: "React Native + TypeScript",
    price: "$25k – $65k",
    desc: "The premier framework for businesses with existing React web teams. Share UI types, API hooks, and utility libraries between web and mobile seamlessly.",
    features: [
      "Near 100% code sharing between iOS & Android",
      "OTA (Over-The-Air) bug updates via Expo EAS",
      "Huge library of battle-tested enterprise plugins",
    ],
    idealFor: "Client Portals, SaaS & Commerce",
  },
  {
    badge: "Pixel-Perfect Rendering",
    badgeColor: "bg-primary/10 text-primary",
    name: "Flutter + Dart Engine",
    price: "$28k – $70k",
    desc: "Impeller graphics engine guarantees identical 60-120fps fluid rendering across diverse Android tablets, rugged warehouse handhelds, and Apple devices.",
    features: [
      "Bespoke custom UI widgets without OS differences",
      "Extreme performance on budget Android devices",
      "Robust compile-time sound type safety",
    ],
    idealFor: "Field Operations & Complex Canvas Apps",
  },
  {
    badge: "Deep Hardware Sprints",
    badgeColor: "bg-secondary-container text-on-secondary",
    name: "Swift & Kotlin Native",
    price: "$45k – $75k",
    desc: "When Bluetooth Low Energy (BLE) peripheral hardware telemetry, CoreBluetooth background threads, or custom ML camera models dictate zero abstraction layer.",
    features: [
      "Full access to latest OS SDKs day zero",
      "Unrestricted background process runtime",
      "Custom Bluetooth LE hardware device communication",
    ],
    idealFor: "Medical Hardware, IoT, Heavy Sensors",
  },
];

export default function TechMatrix(): JSX.Element {
  return (
    <section className="w-full py-space-xl bg-surface">
      <div className="max-w-[1280px] mx-auto px-margin-mobile md:px-gutter lg:px-margin">
        <div className="max-w-2xl mb-space-lg">
          <span className="font-label-sm text-label-sm text-primary uppercase tracking-wider font-semibold">
            Technology Decision Matrix
          </span>
          <h2 className="font-headline-lg text-headline-lg text-on-surface tracking-tight mt-1">
            Choosing the Right Mobile Architecture for Your Business
          </h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant mt-2">
            We don&apos;t believe in dogma. We match the framework to your
            existing internal team skills, budget ceiling, and hardware needs.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-space-lg">
          {platforms.map((platform, idx) => (
            <div
              key={idx}
              className="rounded-2xl bg-surface-container-lowest p-space-lg shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div className="flex flex-col gap-space-sm">
                <div className="flex items-center justify-between">
                  <span
                    className={`px-2 py-1 rounded ${platform.badgeColor} font-label-sm text-label-sm font-bold`}
                  >
                    {platform.badge}
                  </span>
                  <span className="text-on-surface-variant font-label-sm text-label-sm font-mono">
                    {platform.price}
                  </span>
                </div>
                <h3 className="font-headline-md text-headline-md text-on-surface">
                  {platform.name}
                </h3>
                <p className="font-body-md text-body-md text-on-surface-variant">
                  {platform.desc}
                </p>
                <div className="space-y-space-xs pt-space-xs font-body-sm text-body-sm text-on-surface">
                  {platform.features.map((feature, idx2) => (
                    <div key={idx2} className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-primary text-[18px]">
                        check_circle
                      </span>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="pt-space-md mt-space-md bg-surface-container-low rounded-xl p-space-sm flex items-center justify-between text-body-sm">
                <span className="text-on-surface-variant font-medium">
                  Ideal For:
                </span>
                <span className="font-semibold text-on-surface">
                  {platform.idealFor}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
