"use client";

import type { JSX } from "react";
import { useState } from "react";

const platforms = [
  { id: "shopify", label: "Shopify Store", price: 24000, weeks: 5 },
  { id: "opencart", label: "OpenCart / B2B", price: 28000, weeks: 6 },
  { id: "portal", label: "Custom Web Portal", price: 38000, weeks: 7 },
  { id: "hybrid", label: "Hybrid / Multi-App", price: 54000, weeks: 9 },
];

const integrations = [
  { id: "quickbooks", label: "QuickBooks Online / Desktop", cost: 6000, weeks: 1 },
  { id: "netsuite", label: "NetSuite / Sage ERP", cost: 8000, weeks: 1 },
  { id: "shipstation", label: "ShipStation & 3PL Warehouses", cost: 5000, weeks: 1 },
  { id: "customquote", label: "Custom Quoting & Calculator", cost: 7000, weeks: 1 },
];

export default function ScopeEstimator(): JSX.Element {
  const [selectedPlatform, setSelectedPlatform] = useState(platforms[0]);
  const [selectedIntegrations, setSelectedIntegrations] = useState<string[]>([]);
  const [complexity, setComplexity] = useState(0);

  const complexityLabels = [
    "Standard (up to 5k SKUs)",
    "Expanded (5k - 25k SKUs)",
    "Enterprise Catalog (25k+ SKUs)",
  ];
  const complexityMultipliers = [1.0, 1.25, 1.5];
  const complexityWeeksAdd = [0, 1, 2];

  const toggleIntegration = (id: string) => {
    if (selectedIntegrations.includes(id)) {
      setSelectedIntegrations(
        selectedIntegrations.filter((i) => i !== id)
      );
    } else {
      setSelectedIntegrations([...selectedIntegrations, id]);
    }
  };

  const integrationAddons = integrations
    .filter((i) => selectedIntegrations.includes(i.id))
    .reduce((sum, i) => sum + i.cost, 0);

  const integrationWeeks = integrations
    .filter((i) => selectedIntegrations.includes(i.id))
    .reduce((sum, i) => sum + i.weeks, 0);

  const complexityMultiplier = complexityMultipliers[complexity];
  const complexityWeeks = complexityWeeksAdd[complexity];

  const rawTotal =
    (selectedPlatform.price + integrationAddons) * complexityMultiplier;
  const lowBound = Math.round(rawTotal / 1000) * 1000;
  const highBound = Math.round((rawTotal * 1.2) / 1000) * 1000;
  const totalWeeks = Math.min(
    10,
    Math.max(4, selectedPlatform.weeks + integrationWeeks + complexityWeeks)
  );

  return (
    <section className="w-full px-margin-mobile md:px-gutter lg:px-margin py-12 md:py-16">
      <div className="max-w-[1280px] mx-auto">
        <div className="rounded-3xl bg-surface-container-lowest p-8 md:p-12 shadow-xl">
          <div className="max-w-3xl mb-8">
            <span className="font-label-sm text-label-sm text-primary uppercase font-bold tracking-wider">
              Instant Scope Estimator
            </span>
            <h2 className="font-headline-xl text-headline-xl text-on-surface mt-1">
              Configure Your Project Budget &amp; Timeline
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant mt-2">
              Select your stack and integration requirements to calculate a
              realistic fixed-price sprint preview.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg bg-surface-container-low rounded-2xl p-space-lg shadow-sm">
            <div className="lg:col-span-7 flex flex-col gap-space-md">
              <div>
                <label className="font-label-lg text-label-lg text-on-surface block mb-3 font-semibold">
                  1. Primary Architecture Needed
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5" id="platformSelector">
                  {platforms.map((plt) => (
                    <button
                      key={plt.id}
                      type="button"
                      onClick={() => setSelectedPlatform(plt)}
                      className={`platform-btn p-3 rounded-xl font-label-sm text-label-sm font-semibold transition-all ${
                        selectedPlatform.id === plt.id
                          ? "bg-primary text-on-primary"
                          : "bg-surface-container text-on-surface"
                      }`}
                    >
                      {plt.label}
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <label className="font-label-lg text-label-lg text-on-surface block mb-3 font-semibold">
                  2. Operational Integrations Required
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {integrations.map((int) => (
                    <label
                      key={int.id}
                      className="p-3.5 rounded-xl bg-surface-container-low flex items-center gap-3 cursor-pointer hover:bg-surface-container transition-colors"
                    >
                      <input
                        type="checkbox"
                        className="w-4 h-4 rounded text-primary accent-primary"
                        checked={selectedIntegrations.includes(int.id)}
                        onChange={() => toggleIntegration(int.id)}
                        data-cost={int.cost}
                        data-weeks={int.weeks}
                      />
                      <div>
                        <span className="font-headline-sm text-headline-sm text-on-surface block">
                          {int.label}
                        </span>
                        <span className="font-body-sm text-body-sm text-on-surface-variant">
                          +${int.cost.toLocaleString()} • 2-way sync
                        </span>
                      </div>
                    </label>
                  ))}
                </div>
              </div>
              <div>
                <div className="flex items-center justify-between mb-2">
                  <label className="font-label-lg text-label-lg text-on-surface font-semibold">
                    3. Catalog &amp; User Complexity Level
                  </label>
                  <span className="font-label-sm text-label-sm text-primary font-bold" id="complexityLabel">
                    {complexityLabels[complexity]}
                  </span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="2"
                  step="1"
                  value={complexity}
                  onChange={(e) => setComplexity(Number(e.target.value))}
                  className="w-full accent-primary cursor-pointer"
                />
                <div className="flex justify-between font-body-sm text-body-sm text-on-surface-variant mt-1">
                  <span>Standard</span>
                  <span>Expanded (5k - 25k SKUs)</span>
                  <span>Enterprise Catalog (25k+ SKUs)</span>
                </div>
              </div>
            </div>
            <div className="lg:col-span-5 p-6 rounded-2xl bg-surface-container-lowest flex flex-col justify-between">
              <div className="space-y-4">
                <span className="font-label-sm text-label-sm text-primary uppercase font-bold tracking-wider">
                  Estimated Project Scope
                </span>
                <div>
                  <span className="font-body-sm text-body-sm text-on-surface-variant block">
                    Guaranteed Fixed Cost Range
                  </span>
                  <div
                    className="font-display-hero text-headline-xl text-on-surface font-extrabold"
                    id="calcPrice"
                  >
                    ${lowBound.toLocaleString()} – ${highBound.toLocaleString()}
                  </div>
                </div>
                <div className="p-3.5 rounded-xl bg-surface-container-lowest shadow-sm flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary">
                      calendar_month
                    </span>
                    <span className="font-headline-sm text-headline-sm text-on-surface">
                      Target Delivery Timeline:
                    </span>
                  </div>
                  <span
                    className="font-label-lg text-label-lg text-primary font-bold"
                    id="calcTimeline"
                  >
                    {totalWeeks} Weeks
                  </span>
                </div>
                <div className="space-y-2 pt-2 text-on-surface-variant font-body-sm text-body-sm">
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary text-[16px]">
                      verified
                    </span>
                    <span>100% In-house senior software engineers</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary text-[16px]">
                      verified
                    </span>
                    <span>Full code IP ownership & clean repository</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary text-[16px]">
                      verified
                    </span>
                    <span>Post-launch warranty included contractually</span>
                  </div>
                </div>
              </div>
              <div className="pt-6">
                <a
                  className="w-full py-3.5 px-4 rounded-full bg-primary hover:bg-primary-container text-on-primary text-center font-label-lg text-label-lg block transition-all shadow-[0_4px_14px_rgba(0,105,72,0.3)]"
                  href="#scoping-call"
                >
                  Lock In This Scope Estimate
                </a>
                <span className="block text-center font-body-sm text-body-sm text-on-surface-variant mt-2">
                  Detailed architecture proposal delivered in 48 hours.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
