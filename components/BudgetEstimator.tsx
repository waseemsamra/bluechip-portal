"use client";

import type { JSX } from "react";
import { useState } from "react";

interface TierInfo {
  tag: string;
  duration: string;
  team: string;
  warranty: string;
}

const tierThresholds: { max: number; info: TierInfo }[] = [
  {
    max: 38000,
    info: {
      tag: "Tier 1: Sprint MVP / Core",
      duration: "4 – 6 Weeks",
      team: "1 Senior Dev + UI/UX",
      warranty: "30 Days Coverage",
    },
  },
  {
    max: 78000,
    info: {
      tag: "Tier 2: Growth Platform",
      duration: "8 – 10 Weeks",
      team: "2 Senior Devs + Designer",
      warranty: "60 Days Coverage",
    },
  },
  {
    max: Infinity,
    info: {
      tag: "Tier 3: Turnkey Architecture",
      duration: "10 – 14 Weeks",
      team: "Cross-Functional Pod (4)",
      warranty: "90 Days Support SLA",
    },
  },
];

const estimatorButtons = [
  { id: "custom-app", label: "Custom Web / Mobile App", icon: "terminal" },
  { id: "shopify", label: "Shopify / Commerce Build", icon: "shopping_bag" },
  { id: "automation", label: "Internal Tool / Automation", icon: "sync_alt" },
  { id: "cloud", label: "Cloud / Data Modernization", icon: "cloud" },
];

export default function BudgetEstimator(): JSX.Element {
  const [budget, setBudget] = useState(45000);
  const [activeScope, setActiveScope] = useState("custom-app");

  const tierInfo = tierThresholds.find((t) => budget <= t.max)!.info;
  const budgetFormatted = `$${budget.toLocaleString()}`;

  return (
    <section
      className="w-full bg-surface-container-low py-space-xl lg:py-[60px] border-b border-outline-variant/40"
      id="estimator"
    >
      <div className="w-full px-margin-mobile md:px-gutter lg:px-margin max-w-4xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="font-code-badge text-xs font-bold text-primary uppercase tracking-wider">
            Transparent Economics
          </span>
          <h2 className="font-headline-xl text-2xl sm:text-3xl lg:text-4xl font-extrabold text-on-surface tracking-tight mt-1">
            Interactive Engineering Budget Estimator
          </h2>
          <p className="font-body-md text-on-surface-variant mt-2">
            Calculate estimated sprint investments ($500 to $100k+) and
            deployment timelines tailored to your organization&apos;s technical
            scale.
          </p>
        </div>

        <div className="bg-surface-container-lowest rounded-3xl p-6 sm:p-10 border border-outline-variant/70 shadow-xl">
          <div className="mb-8">
            <label className="block text-xs font-bold uppercase tracking-wider text-on-surface-variant mb-3">
              Select Project Scope &amp; Organization Maturity
            </label>
            <div
              className="flex gap-3 overflow-x-auto no-scrollbar scroll-smooth pb-1"
              id="type-selector-group"
            >
              {estimatorButtons.map((btn) => {
                const isActive = activeScope === btn.id;
                return (
                  <button
                    key={btn.id}
                    type="button"
                    onClick={() => setActiveScope(btn.id)}
                    data-val={btn.id}
                    className={`flex-none w-[180px] sm:w-[190px] p-4 rounded-xl border text-left transition-all focus:outline-none ${
                      isActive
                        ? "border-2 border-primary bg-primary/5 text-on-primary font-semibold shadow-sm"
                        : "border-outline-variant hover:border-primary"
                    }`}
                  >
                    <span
                      className={`block text-sm font-bold ${isActive ? "text-primary" : "text-on-surface"}`}
                    >
                      {btn.label}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="mb-8">
            <div className="flex items-center justify-between mb-2">
              <label
                className="text-xs font-bold uppercase tracking-wider text-on-surface-variant"
                htmlFor="budgetSlider"
              >
                Target Budget Range
              </label>
              <span
                className="font-headline-sm text-lg font-bold text-primary bg-primary-fixed/40 px-2.5 py-1 rounded-full"
                id="budgetDisplay"
              >
                {budgetFormatted}
              </span>
            </div>
            <input
              id="budgetSlider"
              type="range"
              min={20000}
              max={100000}
              step={5000}
              value={budget}
              onChange={(e) => setBudget(parseInt(e.target.value))}
              className="w-full h-2 bg-surface-container rounded-lg cursor-pointer accent-primary"
            />
            <div className="flex justify-between text-[11px] text-outline mt-1.5 font-mono">
              <span>$20,000 (Sprint MVP)</span>
              <span>$50,000 (Growth Platform)</span>
              <span>$100,000 (Turnkey Scale)</span>
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-gradient-to-br from-surface-container-low to-surface-container border border-outline-variant/60 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="flex flex-col">
              <span
                className="text-xs uppercase font-bold text-on-surface-variant"
                id="tierTag"
              >
                {tierInfo.tag}
              </span>
              <div className="flex items-baseline gap-2 mt-1">
                <span
                  className="text-2xl sm:text-3xl font-headline-2xl font-extrabold text-primary"
                  id="estimatedCost"
                >
                  {budgetFormatted}
                </span>
                <span className="text-xs font-bold text-on-surface-variant">
                  Fixed Cap
                </span>
              </div>
              <p
                className="text-xs text-on-surface-variant mt-1 font-medium"
                id="estimatedTimeline"
              >
                Estimated Delivery: <strong>{tierInfo.duration}</strong> with
                dedicated senior pod
              </p>
            </div>
            <a
              className="w-full sm:w-auto text-center px-6 py-3 rounded-xl bg-primary text-on-primary font-bold text-sm shadow-md hover:bg-primary-container transition-all"
              href="#consultation"
            >
              Lock In This Scope
            </a>
          </div>

          <p className="text-center text-[11px] text-outline mt-4">
            All scopes include weekly automated sprint demos, source code
            repository transfer, and 30-day post-launch warranty.
          </p>
        </div>
      </div>
    </section>
  );
}
