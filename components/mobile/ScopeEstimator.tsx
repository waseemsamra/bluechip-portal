"use client";

import type { JSX } from "react";
import { useState } from "react";

const platforms = [
  { id: "cross", label: "Both iOS & Android", sublabel: "Single Codebase (Best Value)", multiplier: 1.0 },
  { id: "ios", label: "iOS Only", sublabel: "Apple App Store", multiplier: 0.88 },
  { id: "android", label: "Android Only", sublabel: "Google Play Store", multiplier: 0.88 },
];

const features = [
  { id: "feat-offline", label: "Offline-First Sync Engine (SQLite / WatermelonDB)", cost: 7500, weeks: 1.5 },
  { id: "feat-push", label: "Segmented Push Notifications & Deep Linking", cost: 4500, weeks: 1 },
  { id: "feat-pay", label: "Apple Pay & Google Pay 1-Tap Checkout", cost: 5500, weeks: 1 },
  { id: "feat-scanner", label: "Barcode, QR Scanner & Camera Capture", cost: 6000, weeks: 1.5 },
  { id: "feat-erp", label: "ERP, CRM, or Legacy SQL Database Connector", cost: 9000, weeks: 2 },
];

export default function ScopeEstimator(): JSX.Element {
  const [selectedPlatform, setSelectedPlatform] = useState(platforms[0]);
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>([]);

  const baseCost = 24500;
  const baseWeeksMin = 5;
  const baseWeeksMax = 6;

  const toggleFeature = (id: string) => {
    if (selectedFeatures.includes(id)) {
      setSelectedFeatures(selectedFeatures.filter((f) => f !== id));
    } else {
      setSelectedFeatures([...selectedFeatures, id]);
    }
  };

  const addCost = features
    .filter((f) => selectedFeatures.includes(f.id))
    .reduce((sum, f) => sum + f.cost, 0);

  const addWeeks = features
    .filter((f) => selectedFeatures.includes(f.id))
    .reduce((sum, f) => sum + f.weeks, 0);

  const totalCost = Math.round((baseCost + addCost) * selectedPlatform.multiplier);
  const minW = Math.round(baseWeeksMin + addWeeks);
  const maxW = Math.round(baseWeeksMax + addWeeks + 1);

  return (
    <section className="w-full py-space-xl bg-surface-container-lowest">
      <div className="max-w-[1280px] mx-auto px-margin-mobile md:px-gutter lg:px-margin">
        <div className="max-w-2xl mb-space-lg">
          <span className="font-label-sm text-label-sm text-primary uppercase tracking-wider font-semibold">
            Interactive Estimation
          </span>
          <h2 className="font-headline-xl text-headline-xl text-on-surface tracking-tight mt-1">
            Live Mobile Sprint Scope Calculator
          </h2>
          <p className="font-body-md text-body-md text-on-surface-variant mt-2">
            Toggle platforms and required functionality below to immediately
            calculate your transparent fixed price and development timeline.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg bg-surface-container-low rounded-2xl p-space-lg shadow-sm">
          <div className="lg:col-span-7 flex flex-col gap-space-md">
            <div>
              <label className="font-label-lg text-label-lg text-on-surface">
                1. Target Platforms
              </label>
              <div className="grid grid-cols-3 gap-2" id="platform-selector">
                {platforms.map((plt) => (
                  <button
                    key={plt.id}
                    type="button"
                    onClick={() => setSelectedPlatform(plt)}
                    className={`p-space-sm rounded-xl font-label-lg text-label-lg flex flex-col items-center gap-1 transition-all ${
                      selectedPlatform.id === plt.id
                        ? "bg-surface-container-lowest text-on-surface shadow-sm active-platform"
                        : "bg-surface-container text-on-surface-variant"
                    }`}
                    data-val={plt.id}
                  >
                    <span className="material-symbols-outlined text-primary text-[22px]">
                      {plt.id === "cross" ? "devices" :
                       plt.id === "ios" ? "phone_iphone" : "android"}
                    </span>
                    <span>{plt.label}</span>
                    <span className="text-[10px] text-primary font-normal">
                      {plt.sublabel}
                    </span>
                  </button>
                ))}
              </div>
            </div>
            <div>
              <label className="font-label-lg text-label-lg text-on-surface">
                2. Select Key Modules &amp; Capabilities
              </label>
              <div className="space-y-2">
                <label className="flex items-center justify-between p-space-sm rounded-xl bg-surface-container-lowest cursor-pointer shadow-sm hover:bg-surface-bright transition-colors">
                  <div className="flex items-center gap-3">
                    <input
                      type="checkbox"
                      className="accent-primary w-4 h-4 rounded"
                      defaultChecked
                      disabled
                    />
                    <div>
                      <span className="font-label-lg text-label-lg text-on-surface block">
                        Native Authentication & Profile Engine
                      </span>
                      <span className="text-body-sm text-on-surface-variant">
                        Apple Sign In, Google, Email magic link, and session
                        security.
                      </span>
                    </div>
                  </div>
                  <span className="font-mono text-label-sm text-label-sm text-primary font-bold">
                    Included
                  </span>
                </label>
                {features.map((feature) => (
                  <label
                    key={feature.id}
                    className="flex items-center justify-between p-space-sm rounded-xl bg-surface-container-lowest cursor-pointer shadow-sm hover:bg-surface-bright transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <input
                        type="checkbox"
                        className="feature-calc-check accent-primary w-4 h-4 rounded"
                        data-cost={feature.cost}
                        data-weeks={feature.weeks}
                        id={feature.id}
                        checked={selectedFeatures.includes(feature.id)}
                        onChange={() => toggleFeature(feature.id)}
                      />
                      <div>
                        <span className="font-label-lg text-label-lg text-on-surface block">
                          {feature.label}
                        </span>
                        <span className="text-body-sm text-on-surface-variant">
                          ${feature.cost.toLocaleString()} • {feature.weeks} weeks
                        </span>
                      </div>
                    </div>
                    <span className="font-mono text-label-sm text-label-sm text-on-surface-variant">
                      +${feature.cost.toLocaleString()}
                    </span>
                  </label>
                ))}
              </div>
            </div>
          </div>
          <div className="lg:col-span-5 flex flex-col justify-between rounded-xl bg-surface-container-lowest p-space-md md:p-space-lg shadow-md">
            <div className="flex flex-col gap-space-md">
              <div className="flex items-center justify-between border-b-0 pb-space-xs">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary text-[20px]">
                    terminal
                  </span>
                  <span className="font-headline-sm text-headline-sm text-on-surface">
                    Sprint Estimate
                  </span>
                </div>
                <span className="px-2 py-0.5 rounded-full bg-primary/10 text-primary font-label-sm text-label-sm font-semibold">
                  Guaranteed Fixed Quote
                </span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">
                  Estimated Investment
                </span>
                <div className="flex items-baseline gap-2">
                  <span
                    className="font-headline-xl text-headline-xl text-on-surface font-extrabold"
                    id="calc-price-readout"
                  >
                    ${totalCost.toLocaleString()}
                  </span>
                  <span className="text-on-surface-variant font-label-sm text-label-sm">
                    USD all-inclusive
                  </span>
                </div>
              </div>
              <div className="flex flex-col gap-1">
                <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">
                  Guaranteed Sprint Duration
                </span>
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary text-[20px]">
                    timelapse
                  </span>
                  <span
                    className="font-headline-sm text-headline-sm text-on-surface font-bold"
                    id="calc-timeline-readout"
                  >
                    {minW} – {maxW} Weeks
                  </span>
                </div>
              </div>
              <div className="space-y-space-xs font-body-sm text-body-sm text-on-surface-variant pt-space-xs">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary text-[16px]">
                    check
                  </span>
                  Includes Figma UX Prototypes & Design System
                </div>
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary text-[16px]">
                    check
                  </span>
                  1 Dedicated Principal Mobile Engineer
                </div>
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary text-[16px]">
                    check
                  </span>
                  Full TestFlight & Google Play Internal Track
                </div>
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary text-[16px]">
                    check
                  </span>
                  Zero billable hour overruns contract guarantee
                </div>
              </div>
            </div>
            <div className="pt-space-md">
              <a
                className="w-full inline-flex items-center justify-center gap-2 py-space-sm rounded-full bg-primary hover:bg-primary-container text-on-primary font-label-lg text-label-lg transition-all shadow-[0_4px_14px_rgba(0,105,72,0.3)]"
                href="#scoping-consultation"
              >
                <span>Lock in This Scope &amp; Dates</span>
                <span className="material-symbols-outlined text-[18px]">
                  calendar_month
                </span>
              </a>
              <p className="text-center font-body-sm text-body-sm text-on-surface-variant mt-2">
                Fixed proposal generated within 48 hours under standard NDA.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
