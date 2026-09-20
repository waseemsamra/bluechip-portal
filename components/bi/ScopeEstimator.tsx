"use client";

import type { JSX } from "react";
import { useState } from "react";

export default function ScopeEstimator(): JSX.Element {
  const [selectedSrc, setSelectedSrc] = useState(1);
  const [selectedTool, setSelectedTool] = useState("metabase");
  const [selectedDepth, setSelectedDepth] = useState("1yr");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const calculatePrice = () => {
    let minPrice = 20000;
    let maxPrice = 28000;
    let time = "3 – 4 Weeks";

    if (selectedSrc === 2) {
      minPrice = 35000;
      maxPrice = 48000;
      time = "5 – 6 Weeks";
    } else if (selectedSrc === 3) {
      minPrice = 50000;
      maxPrice = 60000;
      time = "7 – 8 Weeks";
    }

    if (selectedDepth === "deep") {
      minPrice += 4000;
      maxPrice += 6000;
    }

    if (selectedTool === "retool") {
      minPrice += 3000;
      maxPrice += 4000;
    }

    return {
      price: `$${minPrice.toLocaleString()} – $${maxPrice.toLocaleString()}`,
      time,
    };
  };

  const { price, time } = calculatePrice();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <section
      className="w-full max-w-[1440px] mx-auto px-margin-mobile md:px-gutter lg:px-margin pt-space-xl"
      id="scoping-calculator"
    >
      <div className="bg-surface-container-lowest rounded-xl p-space-lg md:p-space-xl shadow-[0_8px_30px_rgba(11,28,48,0.06)]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-xl">
          <div className="lg:col-span-6 flex flex-col justify-between">
            <div>
              <span className="font-label-sm text-label-sm text-primary uppercase tracking-wider">
                Fast Estimator
              </span>
              <h2 className="font-headline-lg text-headline-lg text-on-surface mt-space-xs">
                Configure Your Data Sprint
              </h2>
              <p className="font-body-md text-body-md text-on-surface-variant mt-space-xs">
                Adjust variables to see real-time price ranges and estimated
                delivery timelines for your specific architecture.
              </p>

              <div className="mt-space-lg space-y-space-md">
                <div>
                  <label className="block font-label-sm text-label-sm text-on-surface font-bold uppercase mb-space-xs">
                    1. How many active data sources?
                  </label>
                  <div className="grid grid-cols-3 gap-space-xs" id="source-buttons">
                    {[
                      { val: 1, label: "1 – 3 Sources" },
                      { val: 2, label: "4 – 7 Sources" },
                      { val: 3, label: "8+ Sources / Custom" },
                    ].map((opt) => (
                      <button
                        key={opt.val}
                        type="button"
                        onClick={() => setSelectedSrc(opt.val)}
                        className={`px-space-sm py-space-sm rounded font-label-sm text-label-sm text-center transition-colors ${
                          selectedSrc === opt.val
                            ? "bg-primary text-on-primary"
                            : "bg-surface-container text-on-surface hover:bg-surface-container-high"
                        }`}
                      >
                        {opt.label}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block font-label-sm text-label-sm text-on-surface font-bold uppercase mb-space-xs">
                    2. Preferred Reporting Layer
                  </label>
                  <div className="grid grid-cols-3 gap-space-xs" id="tool-buttons">
                    {[
                      { val: "metabase", label: "Metabase" },
                      { val: "looker", label: "Looker Studio" },
                      { val: "retool", label: "Retool / Embedded" },
                    ].map((opt) => (
                      <button
                        key={opt.val}
                        type="button"
                        onClick={() => setSelectedTool(opt.val)}
                        className={`px-space-sm py-space-sm rounded font-label-sm text-label-sm text-center transition-colors ${
                          selectedTool === opt.val
                            ? "bg-primary text-on-primary"
                            : "bg-surface-container text-on-surface hover:bg-surface-container-high"
                        }`}
                      >
                        {opt.label}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block font-label-sm text-label-sm text-on-surface font-bold uppercase mb-space-xs">
                    3. Historical Backfill Depth
                  </label>
                  <div className="grid grid-cols-2 gap-space-xs" id="depth-buttons">
                    {[
                      { val: "1yr", label: "Standard (Trailing 1–2 Years)" },
                      { val: "deep", label: "Deep Legacy (3+ Years Backfill)" },
                    ].map((opt) => (
                      <button
                        key={opt.val}
                        type="button"
                        onClick={() => setSelectedDepth(opt.val)}
                        className={`px-space-sm py-space-sm rounded font-label-sm text-label-sm text-center transition-colors ${
                          selectedDepth === opt.val
                            ? "bg-primary text-on-primary"
                            : "bg-surface-container text-on-surface hover:bg-surface-container-high"
                        }`}
                      >
                        {opt.label}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-space-lg p-space-md rounded-lg bg-surface-container-low space-y-space-xs">
              <div className="flex items-center justify-between">
                <span className="font-label-sm text-label-sm text-on-surface-variant uppercase">
                  Estimated Budget Window:
                </span>
                <span className="font-headline-md text-headline-md text-primary font-bold">
                  {price}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="font-label-sm text-label-sm text-on-surface-variant uppercase">
                  Estimated Sprint Timeline:
                </span>
                <span className="font-label-lg text-label-lg text-on-surface font-semibold">
                  {time}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="font-label-sm text-label-sm text-on-surface-variant uppercase">
                  Cloud Running Estimate:
                </span>
                <span className="font-label-lg text-label-lg text-primary font-semibold">
                  &lt; $40 / month
                </span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 bg-surface-container-low p-space-lg rounded-xl">
            <div className="flex items-center gap-space-xs mb-space-xs">
              <span className="w-3 h-3 rounded-full bg-primary animate-pulse"></span>
              <span className="font-label-sm text-label-sm text-on-surface uppercase tracking-wider font-semibold">
                Talk With a Staff Data Engineer
              </span>
            </div>
            <h3 className="font-headline-md text-headline-md text-on-surface">
              Book a 30-Min Technical Scoping Call
            </h3>
            <p className="font-body-sm text-body-sm text-on-surface-variant mt-1 mb-space-md">
              No commissioned sales reps. You&apos;ll speak directly with a
              Senior BI Architect who can examine your schema and deliver a
              binding fixed-scope proposal in 48 hours.
            </p>

            {isSubmitted ? (
              <div className="p-space-sm rounded bg-primary/20 text-on-surface font-body-sm text-body-sm text-center">
                <span className="font-bold text-primary">
                  Request Logged!
                </span>{" "}
                Our data architect will reach out within 4 business hours to
                lock in your preferred session time.
              </div>
            ) : (
              <form
                className="space-y-space-sm"
                onSubmit={handleSubmit}
              >
                <div>
                  <label
                    htmlFor="contactName"
                    className="block font-label-sm text-label-sm text-on-surface mb-1"
                  >
                    Your Name
                  </label>
                  <input
                    id="contactName"
                    className="w-full px-space-md py-space-sm rounded bg-surface-container-lowest text-on-surface font-body-md text-body-md focus:outline-none focus:ring-2 focus:ring-primary shadow-sm"
                    placeholder="e.g. Alex Henderson"
                    required
                    type="text"
                    name="name"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-sm">
                  <div>
                    <label
                      htmlFor="contactEmail"
                      className="block font-label-sm text-label-sm text-on-surface mb-1"
                    >
                      Work Email
                    </label>
                    <input
                      id="contactEmail"
                      className="w-full px-space-md py-space-sm rounded bg-surface-container-lowest text-on-surface font-body-md text-body-md focus:outline-none focus:ring-2 focus:ring-primary shadow-sm"
                      placeholder="alex@company.com"
                      required
                      type="email"
                      name="email"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="revenueSelect"
                      className="block font-label-sm text-label-sm text-on-surface mb-1"
                    >
                      Current Annual Revenue
                    </label>
                    <select
                      id="revenueSelect"
                      className="w-full px-space-md py-space-sm rounded bg-surface-container-lowest text-on-surface font-body-md text-body-md focus:outline-none focus:ring-2 focus:ring-primary shadow-sm"
                      name="revenue"
                      defaultValue="5M-20M"
                    >
                      <option value="" disabled>
                        Select revenue range...
                      </option>
                      <option>$1M – $5M GMV/Revenue</option>
                      <option value="5M-20M">
                        $5M – $20M GMV/Revenue
                      </option>
                      <option>$20M – $50M GMV/Revenue</option>
                      <option>$50M+ Enterprise</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="toolsInput"
                    className="block font-label-sm text-label-sm text-on-surface mb-1"
                  >
                    What tools do you need consolidated?
                  </label>
                  <input
                    id="toolsInput"
                    className="w-full px-space-md py-space-sm rounded bg-surface-container-lowest text-on-surface font-body-md text-body-md focus:outline-none focus:ring-2 focus:ring-primary shadow-sm"
                    placeholder="e.g. Shopify, Stripe, QuickBooks, Meta Ads, HubSpot"
                    type="text"
                    name="tools"
                  />
                </div>

                <div className="pt-space-xs">
                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center px-space-lg py-space-sm rounded-full bg-primary hover:bg-primary-container text-on-primary font-label-lg text-label-lg transition-all shadow-[0_4px_14px_rgba(0,105,72,0.3)]"
                  >
                    <span>Confirm 30-Min Technical Scoping Call</span>
                    <span className="material-symbols-outlined ml-2 text-[18px]">
                      calendar_today
                    </span>
                  </button>
                </div>
              </form>
            )}

            {isSubmitted && (
              <div className="mt-space-sm p-space-sm rounded bg-primary/20 text-on-surface font-body-sm text-body-sm text-center">
                <span className="font-bold text-primary">
                  Request Logged!
                </span>{" "}
                Our data architect will reach out within 4 business hours to
                lock in your preferred session time.
              </div>
            )}

            <div className="flex items-center justify-center gap-space-xs text-on-surface-variant font-label-sm text-label-sm pt-space-xs">
              <span className="material-symbols-outlined text-[14px] text-primary">
                verified_user
              </span>
              <span>
                Strict NDA Guarantee • Fixed Proposal within 48 Hours
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
