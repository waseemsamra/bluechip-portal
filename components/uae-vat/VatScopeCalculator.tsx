"use client";

import type { JSX } from "react";
import { useState, useMemo } from "react";

interface JurisdictionOption {
  value: "mainland" | "designated" | "dual";
  label: string;
}

interface CalcState {
  jurisdiction: "mainland" | "designated" | "dual";
  coreSystem: string;
  einvoice: boolean;
  bankIntegration: boolean;
  corpTax: boolean;
}

interface CalcResult {
  price: string;
  aed: string;
  weeks: string;
}

const jurisdictionOptions: JurisdictionOption[] = [
  { value: "mainland" as const, label: "Mainland LLC (Standard 5% VAT)" },
  { value: "designated" as const, label: "Designated Free Zone (JAFZA, DAFZA, etc.)" },
  { value: "dual" as const, label: "Dual Entity: Free Zone + Mainland Branch" },
];

const coreSystems = [
  { value: "odoo", label: "Odoo 17/18 UAE Tailored Localization" },
  { value: "custom", label: "Bespoke Next.js / PostgreSQL Real-Time Ledger" },
  { value: "erpnext", label: "ERPNext GCC Compliance Build" },
  { value: "netsuite", label: "NetSuite / QuickBooks UAE Bridge & Sync" },
];

export default function VatScopeCalculator(): JSX.Element {
  const [data, setData] = useState<CalcState>({
    jurisdiction: "mainland",
    coreSystem: "odoo",
    einvoice: true,
    bankIntegration: true,
    corpTax: true,
  });

  const result = useMemo<CalcResult>(() => {
    let minBase = 20000;
    let maxBase = 30000;
    let minWeeks = 3;
    let maxWeeks = 5;

    if (data.jurisdiction === "designated") {
      minBase += 6000;
      maxBase += 8000;
      minWeeks += 1;
      maxWeeks += 1;
    } else if (data.jurisdiction === "dual") {
      minBase += 14000;
      maxBase += 18000;
      minWeeks += 2;
      maxWeeks += 3;
    }

    if (data.coreSystem === "custom") {
      minBase += 8000;
      maxBase += 12000;
    } else if (data.coreSystem === "netsuite") {
      minBase += 10000;
      maxBase += 14000;
    }

    if (data.einvoice) {
      minBase += 3000;
      maxBase += 5000;
    }
    if (data.bankIntegration) {
      minBase += 2500;
      maxBase += 4000;
    }
    if (data.corpTax) {
      minBase += 4000;
      maxBase += 6000;
    }

    const aedRate = 3.6725;
    const aedMin = Math.round((minBase * aedRate) / 100) * 100;
    const aedMax = Math.round((maxBase * aedRate) / 100) * 100;

    return {
      price: `$${minBase.toLocaleString()} – $${maxBase.toLocaleString()}`,
      aed: `≈ AED ${aedMin.toLocaleString()} – ${aedMax.toLocaleString()} (Fixed Contract)`,
      weeks: `${minWeeks} to ${maxWeeks} Weeks`,
    };
  }, [data]);

  return (
    <section className="w-full py-space-xl bg-surface">
      <div className="max-w-[1240px] mx-auto px-margin-mobile md:px-gutter lg:px-margin">
        <div className="text-center max-w-2xl mx-auto mb-space-lg">
          <span className="font-label-sm text-label-sm uppercase tracking-wider text-primary font-bold">
            Transparent Estimator
          </span>
          <h2 className="font-headline-xl text-headline-xl text-on-surface tracking-tight mt-1 mb-space-xs">
            Interactive UAE Tax &amp; ERP Scope Calculator
          </h2>
          <p className="font-body-md text-body-md text-on-surface-variant">
            Configure your operational specifications to see immediate budget ranges and turnaround time in business days.
          </p>
        </div>

        <div className="bg-surface-container-lowest rounded-xl p-space-lg md:p-space-xl shadow-xl max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-space-lg mb-space-lg">
            <div className="space-y-space-md">
              <div>
                <label className="block font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant mb-2">
                  1. Operating Jurisdiction
                </label>
                <div className="grid grid-cols-1 gap-2" id="calc-jurisdiction">
                  {jurisdictionOptions.map((opt) => (
                    <button
                      key={opt.value}
                      type="button"
                      data-val={opt.value}
                      className={`text-left p-space-sm rounded-DEFAULT font-body-md text-body-md flex items-center justify-between ${
                        data.jurisdiction === opt.value
                          ? "bg-surface-container text-on-surface"
                          : "bg-surface-container-low hover:bg-surface-container text-on-surface"
                      }`}
                      onClick={() =>
                        setData((prev) => ({ ...prev, jurisdiction: opt.value }))
                      }
                    >
                      <span>{opt.label}</span>
                      <span
                        className={`material-symbols-outlined text-primary text-[18px] ${
                          data.jurisdiction === opt.value ? "" : "opacity-0"
                        }`}
                      >
                        check_circle
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant mb-2">
                  2. Desired Core Architecture
                </label>
                <select
                  className="w-full p-space-sm rounded-DEFAULT bg-surface-container-low text-on-surface font-body-md text-body-md focus:outline-none focus:bg-surface-container"
                  id="calc-core"
                  value={data.coreSystem}
                  onChange={(e) =>
                    setData((prev) => ({ ...prev, coreSystem: e.target.value }))
                  }
                >
                  {coreSystems.map((opt) => (
                    <option key={opt.value} value={opt.value}>
                      {opt.label}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant mb-2">
                  3. Required Compliance Modules
                </label>
                <div className="space-y-2">
                  <label className="flex items-center gap-2 font-body-md text-body-md text-on-surface cursor-pointer">
                    <input
                      id="mod-einvoice"
                      type="checkbox"
                      className="rounded text-primary w-4 h-4 accent-primary"
                      checked={data.einvoice}
                      onChange={(e) =>
                        setData((prev) => ({ ...prev, einvoice: e.target.checked }))
                      }
                    />
                    <span>Cryptographic E-Invoicing (XML/UBL 2.1 &amp; QR)</span>
                  </label>
                  <label className="flex items-center gap-2 font-body-md text-body-md text-on-surface cursor-pointer">
                    <input
                      id="mod-bank"
                      type="checkbox"
                      className="rounded text-primary w-4 h-4 accent-primary"
                      checked={data.bankIntegration}
                      onChange={(e) =>
                        setData((prev) => ({ ...prev, bankIntegration: e.target.checked }))
                      }
                    />
                    <span>UAE Direct Bank Automated Feed (MT940/API)</span>
                  </label>
                  <label className="flex items-center gap-2 font-body-md text-body-md text-on-surface cursor-pointer">
                    <input
                      id="mod-corptax"
                      type="checkbox"
                      className="rounded text-primary w-4 h-4 accent-primary"
                      checked={data.corpTax}
                      onChange={(e) =>
                        setData((prev) => ({ ...prev, corpTax: e.target.checked }))
                      }
                    />
                    <span>UAE 9% Corporate Tax Threshold &amp; QFZP Tracker</span>
                  </label>
                </div>
              </div>
            </div>

            <div className="bg-surface-container-low rounded-lg p-space-lg flex flex-col justify-between">
              <div>
                <span className="font-label-sm text-label-sm uppercase tracking-wider text-primary font-bold">
                  Estimated Fixed Sprint Investment
                </span>
                <div className="mt-space-sm mb-space-sm">
                  <div className="font-display-hero text-headline-xl text-on-surface font-extrabold tracking-tight" id="est-usd">
                    {result.price}
                  </div>
                  <div className="font-body-md text-body-md text-on-surface-variant" id="est-aed">
                    {result.aed}
                  </div>
                </div>

                <div className="space-y-space-xs mt-space-md pt-space-md bg-surface-container-lowest p-space-sm rounded-DEFAULT">
                  <div className="flex justify-between font-label-sm text-label-sm">
                    <span className="text-on-surface-variant">Sprint Duration:</span>
                    <span className="font-bold text-on-surface" id="est-weeks">
                      {result.weeks}
                    </span>
                  </div>
                  <div className="flex justify-between font-label-sm text-label-sm">
                    <span className="text-on-surface-variant">Team Capacity:</span>
                    <span className="font-bold text-on-surface">1 Principal + 2 Full-Stack</span>
                  </div>
                  <div className="flex justify-between font-label-sm text-label-sm">
                    <span className="text-on-surface-variant">FTA Compliance SLA:</span>
                    <span className="font-bold text-primary">100% Guaranteed</span>
                  </div>
                </div>
              </div>

              <div className="mt-space-md">
                <a
                  className="w-full inline-flex items-center justify-center gap-2 py-space-sm px-space-md rounded-full bg-primary hover:bg-primary-container text-on-primary font-label-lg text-label-lg transition-colors shadow-md"
                  href="#scoping-call"
                >
                  <span>Lock in This Sprint Scope</span>
                  <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                </a>
                <p className="font-body-sm text-body-sm text-center text-on-surface-variant mt-2">
                  Zero commitment • 48-Hour formal architectural proposal
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
