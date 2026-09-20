"use client";

import type { JSX } from "react";
import { useState } from "react";

const tabs = [
  {
    id: "orders",
    label: "B2B Portal",
    active: true,
  },
  {
    id: "integrations",
    label: "2-Way Sync Engine",
    active: false,
  },
  {
    id: "inventory",
    label: "Live Stock Feed",
    active: false,
  },
];

export default function CustomHero(): JSX.Element {
  const [activeTab, setActiveTab] = useState("orders");

  return (
    <section className="w-full px-margin-mobile md:px-gutter lg:px-margin pt-space-lg md:pt-space-xl">
      <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        <div className="lg:col-span-7 flex flex-col gap-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-container/10 text-primary font-label-sm text-label-sm">
            <span className="material-symbols-outlined text-[16px]">
              code
            </span>
            Pragmatic SMB Software Architecture
          </div>
          <h1 className="font-display-hero text-display-hero text-on-surface leading-tight tracking-tight">
            Custom Software, Customer Portals &amp; High-Converting Commerce
            Built for Growing Businesses.
          </h1>
          <p className="font-body-xl text-body-xl text-on-surface-variant max-w-2xl">
            Stop wrestling with clunky off-the-shelf templates or paying agency
            retainers that bleed cash. We build custom web apps, customer
            self-service portals, and robust e-commerce stores (Shopify,
            OpenCart, and custom carts) with fixed pricing, clear deliverables,
            and guaranteed timelines.
          </p>
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <a
              href="#fixed-packages"
              className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3.5 rounded-full bg-primary hover:bg-primary-container text-on-primary font-label-lg text-label-lg transition-all shadow-[0_4px_14px_rgba(0,105,72,0.3)]"
            >
              <span>Explore Fixed-Scope Packages ($20k–$80k)</span>
              <span className="material-symbols-outlined ml-2 text-[18px]">
                arrow_downward
              </span>
            </a>
            <a
              href="#scoping-call"
              className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3.5 rounded-full bg-surface-container hover:bg-surface-container-high text-on-surface font-label-lg text-label-lg transition-all"
            >
              <span className="material-symbols-outlined mr-2 text-[18px] text-primary">
                calendar_today
              </span>
              <span>Book a 30-Min Scoping Call</span>
            </a>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4">
            <div className="p-3.5 rounded-xl bg-surface-container-lowest shadow-sm flex flex-col gap-1">
              <div className="flex items-center gap-1.5 text-primary">
                <span className="material-symbols-outlined text-[18px]">
                  shield
                </span>
                <span className="font-label-sm text-label-sm font-bold uppercase">
                  100% Guaranteed
                </span>
              </div>
              <span className="font-body-sm text-body-sm text-on-surface-variant">
                Zero scope creep or billable surprises
              </span>
            </div>
            <div className="p-3.5 rounded-xl bg-surface-container-lowest shadow-sm flex flex-col gap-1">
              <div className="flex items-center gap-1.5 text-primary">
                <span className="material-symbols-outlined text-[18px]">
                  timer
                </span>
                <span className="font-label-sm text-label-sm font-bold uppercase">
                  4–10 Weeks SLA
                </span>
              </div>
              <span className="font-body-sm text-body-sm text-on-surface-variant">
                Contractual launch deadlines
              </span>
            </div>
            <div className="p-3.5 rounded-xl bg-surface-container-lowest shadow-sm flex flex-col gap-1">
              <div className="flex items-center gap-1.5 text-primary">
                <span className="material-symbols-outlined text-[18px]">
                  groups
                </span>
                <span className="font-label-sm text-label-sm font-bold uppercase">
                  Senior Devs Only
                </span>
              </div>
              <span className="font-body-sm text-body-sm text-on-surface-variant">
                No junior off-shoring hand-offs
              </span>
            </div>
            <div className="p-3.5 rounded-xl bg-surface-container-lowest shadow-sm flex flex-col gap-1">
              <div className="flex items-center gap-1.5 text-primary">
                <span className="material-symbols-outlined text-[18px]">
                  code
                </span>
                <span className="font-label-sm text-label-sm font-bold uppercase">
                  Full Ownership
                </span>
              </div>
              <span className="font-body-sm text-body-sm text-on-surface-variant">
                100% IP, repo, &amp; clean code transfer
              </span>
            </div>
          </div>
        </div>

        <div className="lg:col-span-5 relative">
          <div className="rounded-2xl bg-surface-container-lowest p-6 shadow-xl relative overflow-hidden">
            <div className="flex items-center justify-between pb-4 mb-4 bg-surface-container px-4 py-2.5 rounded-xl">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-primary animate-pulse"></span>
                <span className="font-headline-sm text-headline-sm text-on-surface">
                  OmniChannel Commerce &amp; Portal Hub
                </span>
              </div>
              <span className="px-2.5 py-1 rounded-full bg-primary/10 text-primary font-label-sm text-label-sm">
                Sync Live
              </span>
            </div>

            <div className="flex items-center gap-2 mb-4 bg-surface-container p-1 rounded-full text-center" id="demoTabs">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex-1 py-1.5 px-3 rounded-full font-label-sm text-label-sm font-semibold transition-all ${
                    activeTab === tab.id
                      ? "bg-surface-container-lowest text-on-surface shadow-sm"
                      : "text-on-surface-variant"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {activeTab === "orders" && (
              <div className="space-y-3" id="demo-content-orders">
                <div className="p-3.5 rounded-xl bg-surface-container-low flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-primary/20 text-primary flex items-center justify-center">
                      <span className="material-symbols-outlined text-[18px]">
                        receipt_long
                      </span>
                    </div>
                    <div>
                      <div className="font-headline-sm text-headline-sm text-on-surface">
                        PO #98421 • Apex Gear Ltd
                      </div>
                      <div className="font-body-sm text-body-sm text-on-surface-variant">
                        Tier-2 Distributor Pricing Applied (35% margin)
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-headline-sm text-headline-sm text-primary">
                      $18,450.00
                    </div>
                    <div className="font-label-sm text-label-sm text-primary font-semibold">
                      Approved (Stripe Net 30)
                    </div>
                  </div>
                </div>
                <div className="p-3.5 rounded-xl bg-surface-container-low flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-tertiary-container/20 text-tertiary flex items-center justify-center">
                      <span className="material-symbols-outlined text-[18px]">
                        storefront
                      </span>
                    </div>
                    <div>
                      <div className="font-headline-sm text-headline-sm text-on-surface">
                        Shopify D2C Cart #58129
                      </div>
                      <div className="font-body-sm text-body-sm text-on-surface-variant">
                        Custom 3D Color Configurator • Express Checkout
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-headline-sm text-headline-sm text-on-surface">
                      $429.00
                    </div>
                    <div className="font-label-sm text-label-sm text-on-surface-variant">
                      Fulfillment Queued
                    </div>
                  </div>
                </div>
                <div className="p-3.5 rounded-xl bg-surface-container-low flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-primary/20 text-primary flex items-center justify-center">
                      <span className="material-symbols-outlined text-[18px]">
                        sync_alt
                      </span>
                    </div>
                    <div>
                      <div className="font-headline-sm text-headline-sm text-on-surface">
                        OpenCart Legacy Wholesale DB
                      </div>
                      <div className="font-body-sm text-body-sm text-on-surface-variant">
                        42 SKUs Synchronized to QuickBooks Enterprise
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-headline-sm text-headline-sm text-on-surface">
                      Synced
                    </div>
                    <div className="font-label-sm text-label-sm text-on-surface-variant">
                      0.32s Latency
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "integrations" && (
              <div className="space-y-3">
                <div className="p-3 rounded-xl bg-surface-container-low flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-primary">
                      cloud_done
                    </span>
                    <span className="font-headline-sm text-headline-sm">
                      QuickBooks Desktop &amp; Online
                    </span>
                  </div>
                  <span className="font-label-sm text-label-sm text-primary font-bold">
                    Auto Invoicing Active
                  </span>
                </div>
                <div className="p-3 rounded-xl bg-surface-container-low flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-primary">
                      local_shipping
                    </span>
                    <span className="font-headline-sm text-headline-sm">
                      ShipStation &amp; WMS Webhooks
                    </span>
                  </div>
                  <span className="font-label-sm text-label-sm text-primary font-bold">
                    Instant Tracking Dispatch
                  </span>
                </div>
                <div className="p-3 rounded-xl bg-surface-container-low flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-primary">
                      credit_card
                    </span>
                    <span className="font-headline-sm text-headline-sm">
                      Stripe ACH &amp; Payment Intents
                    </span>
                  </div>
                  <span className="font-label-sm text-label-sm text-primary font-bold">
                    0.8% B2B Fee Routing
                  </span>
                </div>
              </div>
            )}

            {activeTab === "inventory" && (
              <div className="space-y-3">
                <div className="p-3 rounded-xl bg-surface-container-low flex items-center justify-between">
                  <div>
                    <div className="font-headline-sm text-headline-sm">
                      SKU-7801 (Industrial Hydraulic Valve)
                    </div>
                    <div className="font-body-sm text-body-sm text-on-surface-variant">
                      Warehouse East • Bin 4-C
                    </div>
                  </div>
                  <span className="px-2 py-1 rounded bg-primary/20 text-primary font-label-sm text-label-sm font-bold">
                    540 In Stock
                  </span>
                </div>
                <div className="p-3 rounded-xl bg-surface-container-low flex items-center justify-between">
                  <div>
                    <div className="font-headline-sm text-headline-sm">
                      SKU-4412 (Titanium Fastener Pack 50x)
                    </div>
                    <div className="font-body-sm text-body-sm text-on-surface-variant">
                      Warehouse West • Bin 12-A
                    </div>
                  </div>
                  <span className="px-2 py-1 rounded bg-tertiary/20 text-tertiary font-label-sm text-label-sm font-bold">
                    1,240 In Stock
                  </span>
                </div>
                <div className="p-3 rounded-xl bg-surface-container-low flex items-center justify-between">
                  <div>
                    <div className="font-headline-sm text-headline-sm">
                      SKU-9903 (Heavy-Duty Mounting Bracket)
                    </div>
                    <div className="font-body-sm text-body-sm text-on-surface-variant">
                      Main Hub • Assembly Ready
                    </div>
                  </div>
                  <span className="px-2 py-1 rounded bg-primary/20 text-primary font-label-sm text-label-sm font-bold">
                    88 In Stock
                  </span>
                </div>
              </div>
            )}

            <div className="mt-4 p-4 rounded-xl bg-surface-container flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-primary text-[24px]">
                  bolt
                </span>
                <div>
                  <span className="font-label-lg text-label-lg text-on-surface block">
                    Automated Sync Frequency
                  </span>
                  <span className="font-body-sm text-body-sm text-on-surface-variant">
                    Real-time webhook push (no batch delay)
                  </span>
                </div>
              </div>
              <span className="font-headline-sm text-headline-sm text-primary font-bold">
                99.99% Uptime
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
