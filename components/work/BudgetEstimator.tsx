"use client";

import type { JSX } from "react";
import { useState } from "react";

const platforms = [
  { name: "Web SaaS", cost: 28000, weeks: 5 },
  { name: "Mobile App", cost: 36000, weeks: 6 },
  { name: "Portal / CMS", cost: 38000, weeks: 7 },
  { name: "Data / IoT", cost: 44000, weeks: 8 },
];

const addons = [
  { name: "Offline-First Sync Engine (+$6k)", cost: 6000, weeks: 1 },
  { name: "HIPAA / SOC-2 Audit Armor (+$8k)", cost: 8000, weeks: 1 },
  { name: "ERP Sync (NetSuite/QuickBooks) (+$5k)", cost: 5000, weeks: 1 },
  { name: "Payment / ACH Gateway & Invoicing (+$7k)", cost: 7000, weeks: 1 },
];

export default function BudgetEstimator(): JSX.Element {
  const [selectedPlatform, setSelectedPlatform] = useState(platforms[1]);
  const [selectedAddons, setSelectedAddons] = useState([0, 1]);

  const totalPrice = selectedPlatform.cost + selectedAddons.reduce((sum, idx) => sum + addons[idx].cost, 0);
  const totalWeeks = selectedPlatform.weeks + selectedAddons.reduce((sum, idx) => sum + addons[idx].weeks, 0);

  const toggleAddon = (idx: number) => {
    setSelectedAddons((prev) =>
      prev.includes(idx) ? prev.filter((i) => i !== idx) : [...prev, idx]
    );
  };

  return (
    <section className="max-w-[1240px] mx-auto px-margin-mobile md:px-gutter lg:px-margin py-space-lg">
      <div className="p-space-lg md:p-space-xl rounded-lg bg-surface-container-lowest shadow-[0_4px_24px_rgba(11,28,48,0.04)]">
        <div className="max-w-xl mb-space-lg">
          <span className="font-label-sm text-label-sm text-primary uppercase font-bold tracking-widest block mb-1">
            Instant Transparency
          </span>
          <h2 className="font-headline-xl text-headline-xl text-on-surface">
            Interactive Sprint Budget Estimator
          </h2>
          <p className="font-body-md text-body-md text-on-surface-variant mt-1">
            Adjust the parameters below to see typical investment parameters and delivery timelines derived from our historical 40-application benchmarks.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg">
          <div className="lg:col-span-7 space-y-space-md">
            <div>
              <label className="block font-label-lg text-label-lg text-on-surface mb-2 font-semibold">
                1. What kind of application are you building?
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-space-xs">
                  {platforms.map((platform) => (
                  <button
                    key={platform.name}
                    type="button"
                    data-cost={platform.cost}
                    data-weeks={platform.weeks}
                    className={`estimator-platform p-space-sm rounded font-label-sm text-label-sm font-semibold transition-all ${
                      selectedPlatform.name === platform.name
                        ? "bg-primary text-on-primary"
                        : "bg-surface-container text-on-surface hover:bg-surface-container-high"
                    }}`}
                    onClick={() => setSelectedPlatform(platform)}
                  >
                    {platform.name}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block font-label-lg text-label-lg text-on-surface mb-2 font-semibold">
                2. Key Technical Requirements &amp; Integrations
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-xs">
                {addons.map((addon, idx) => (
                  <label
                    key={addon.name}
                    className="flex items-center gap-space-xs p-space-sm rounded bg-surface-container-low cursor-pointer hover:bg-surface-container"
                  >
                    <input
                      className="estimator-addon rounded accent-primary w-4 h-4"
                      data-cost={addon.cost}
                      data-weeks={addon.weeks}
                      type="checkbox"
                      checked={selectedAddons.includes(idx)}
                      onChange={() => toggleAddon(idx)}
                    />
                    <span className="font-body-sm text-body-sm text-on-surface">{addon.name}</span>
                  </label>
                ))}
              </div>
            </div>

            <p className="font-body-sm text-body-sm text-on-surface-variant italic">
              *All BlueChip Tech contracts are fixed price. Scope changes require mutually agreed change orders—no surprise hourly overrun invoices.
            </p>
          </div>

          <div className="lg:col-span-5 flex flex-col justify-between p-space-lg rounded-DEFAULT bg-surface-container-high">
            <div>
              <span className="font-label-sm text-label-sm text-on-surface-variant uppercase font-bold tracking-widest">
                Fixed Milestone Estimate
              </span>
              <div className="mt-space-sm mb-space-md">
                <span className="font-display-hero text-display-hero-mobile md:text-display-hero text-on-surface font-extrabold">
                  ${totalPrice.toLocaleString()}
                </span>
                <span className="font-body-md text-body-md text-on-surface-variant block mt-1">
                  Guaranteed fixed fee (no hourly billables)
                </span>
              </div>

              <div className="space-y-space-xs py-space-sm bg-surface-container-lowest/70 p-space-sm rounded-DEFAULT mb-space-md">
                <div className="flex items-center justify-between text-on-surface font-body-sm text-body-sm">
                  <span>Estimated Delivery Speed:</span>
                  <span className="font-bold text-on-surface">{totalWeeks} Weeks</span>
                </div>
                <div className="flex items-center justify-between text-on-surface font-body-sm text-body-sm">
                  <span>Dedicated Pod:</span>
                  <span className="font-semibold text-primary">1 Staff Architect + 1 Sr Engineer</span>
                </div>
                <div className="flex items-center justify-between text-on-surface font-body-sm text-body-sm">
                  <span>Milestone Code Delivery:</span>
                  <span className="font-semibold text-on-surface">Every Friday (GitHub)</span>
                </div>
              </div>
            </div>

            <a
              className="w-full inline-flex items-center justify-center gap-space-xs py-space-sm rounded-full bg-primary hover:bg-primary-container text-on-primary font-label-lg text-label-lg transition-all shadow-md"
              href="#quick-scoping"
            >
              <span>Lock In This Sprint Scope</span>
              <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
