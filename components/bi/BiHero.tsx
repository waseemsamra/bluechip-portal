import type { JSX } from "react";

export default function BiHero(): JSX.Element {
  return (
    <section className="w-full max-w-[1440px] mx-auto px-margin-mobile md:px-gutter lg:px-margin pt-space-lg md:pt-space-xl">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg items-center">
        <div className="lg:col-span-7 flex flex-col items-start space-y-space-md">
          <div className="inline-flex items-center gap-space-xs px-space-md py-space-xs rounded-full bg-primary-container/10 text-primary font-label-sm text-label-sm">
            <span className="material-symbols-outlined text-[16px]">database</span>
            Pragmatic SMB Data Engineering
          </div>
          <h1 className="font-display-hero text-display-hero-mobile md:text-display-hero text-on-surface tracking-tight">
            Pragmatic Data Warehousing &amp; Real-Time BI for Growing Businesses.
          </h1>
          <p className="font-body-xl text-body-lg md:text-body-xl text-on-surface-variant max-w-2xl">
            Stop running your business on duct-taped spreadsheets and stale CSV
            exports. We consolidate your Shopify, Stripe, QuickBooks, CRM, and
            ad platforms into an automated cloud data warehouse with
            crystal-clear executive dashboards in 4 to 8 weeks.
          </p>
          <div className="flex flex-wrap items-center gap-space-sm pt-space-xs w-full sm:w-auto">
            <a
              href="#pricing-packages"
              className="w-full sm:w-auto inline-flex items-center justify-center px-space-lg py-space-sm rounded-full bg-primary hover:bg-primary-container text-on-primary font-label-lg text-label-lg transition-all shadow-[0_4px_14px_rgba(0,105,72,0.3)]"
            >
              Explore Fixed-Price Packages ($20k–$60k)
              <span className="material-symbols-outlined ml-2 text-[18px]">
                arrow_forward
              </span>
            </a>
            <a
              href="#scoping-calculator"
              className="w-full sm:w-auto inline-flex items-center justify-center px-space-lg py-space-sm rounded-full bg-surface-container hover:bg-surface-container-high text-on-surface font-label-lg text-label-lg transition-colors"
            >
              Book 30-Min Scoping Call
            </a>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-space-md w-full pt-space-md">
            <div className="flex flex-col">
              <span className="font-headline-md text-headline-md text-on-surface">
                100%
              </span>
              <span className="font-body-sm text-body-sm text-on-surface-variant">
                Fixed-Price SLA
              </span>
            </div>
            <div className="flex flex-col">
              <span className="font-headline-md text-headline-md text-on-surface">
                4–6 Wks
              </span>
              <span className="font-body-sm text-body-sm text-on-surface-variant">
                Avg. Turnaround
              </span>
            </div>
            <div className="flex flex-col">
              <span className="font-headline-md text-headline-md text-primary">
                &lt; $50/mo
              </span>
              <span className="font-body-sm text-body-sm text-on-surface-variant">
                Cloud Run Cost
              </span>
            </div>
            <div className="flex flex-col">
              <span className="font-headline-md text-headline-md text-on-surface">
                Zero
              </span>
              <span className="font-body-sm text-body-sm text-on-surface-variant">
                In-House Data Hires
              </span>
            </div>
          </div>
        </div>

        <div className="lg:col-span-5 relative">
          <div className="relative bg-surface-container-lowest rounded-xl p-space-md md:p-space-lg shadow-[0_8px_30px_rgba(11,28,48,0.06)]">
            <div className="flex items-center justify-between pb-space-sm">
              <div className="flex items-center gap-space-xs">
                <span className="w-2.5 h-2.5 rounded-full bg-primary animate-pulse"></span>
                <span className="font-label-sm text-label-sm text-on-surface uppercase tracking-wider">
                  Live Pipeline Simulation
                </span>
              </div>
              <span className="px-space-xs py-0.5 rounded-full bg-surface-container text-on-surface-variant font-label-sm text-label-sm">
                v2.4 Production
              </span>
            </div>

            <div className="space-y-space-sm pt-space-xs">
              <div className="bg-surface-container-low rounded-lg p-space-sm">
                <span className="font-label-sm text-label-sm text-on-surface-variant uppercase">
                  1. Ingestion Sources (Continuous)
                </span>
                <div className="grid grid-cols-2 gap-space-xs mt-space-xs">
                  <div className="flex items-center justify-between bg-surface-container-lowest rounded px-space-xs py-1 text-on-surface font-body-sm text-body-sm">
                    <span className="flex items-center gap-1">
                      <span className="material-symbols-outlined text-[14px] text-primary">
                        storefront
                      </span>
                      Shopify Plus
                    </span>
                    <span className="text-primary font-label-sm text-label-sm">
                      4m ago
                    </span>
                  </div>
                  <div className="flex items-center justify-between bg-surface-container-lowest rounded px-space-xs py-1 text-on-surface font-body-sm text-body-sm">
                    <span className="flex items-center gap-1">
                      <span className="material-symbols-outlined text-[14px] text-tertiary">
                        credit_card
                      </span>
                      Stripe Billing
                    </span>
                    <span className="text-primary font-label-sm text-label-sm">
                      1m ago
                    </span>
                  </div>
                  <div className="flex items-center justify-between bg-surface-container-lowest rounded px-space-xs py-1 text-on-surface font-body-sm text-body-sm">
                    <span className="flex items-center gap-1">
                      <span className="material-symbols-outlined text-[14px] text-secondary">
                        receipt_long
                      </span>
                      QuickBooks
                    </span>
                    <span className="text-primary font-label-sm text-label-sm">
                      12m ago
                    </span>
                  </div>
                  <div className="flex items-center justify-between bg-surface-container-lowest rounded px-space-xs py-1 text-on-surface font-body-sm text-body-sm">
                    <span className="flex items-center gap-1">
                      <span className="material-symbols-outlined text-[14px] text-primary-container">
                        ads_click
                      </span>
                      Meta / Ads
                    </span>
                    <span className="text-primary font-label-sm text-label-sm">
                      30m ago
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between px-space-md py-space-xs bg-surface-container rounded-lg">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary text-[18px]">
                    alt_route
                  </span>
                  <span className="font-label-sm text-label-sm text-on-surface">
                    dbt Core Modeling + Daily Reconciliation
                  </span>
                </div>
                <span className="font-label-sm text-label-sm text-primary font-semibold">
                  100% Passed
                </span>
              </div>

              <div className="bg-surface-container-low rounded-lg p-space-sm space-y-space-xs">
                <div className="flex items-center justify-between">
                  <span className="font-label-sm text-label-sm text-on-surface uppercase">
                    2. Metabase Executive Overview
                  </span>
                  <span className="text-on-surface-variant font-label-sm text-label-sm">
                    Synced 8:00 AM
                  </span>
                </div>
                <div className="grid grid-cols-2 gap-space-xs">
                  <div className="bg-surface-container-lowest p-space-xs rounded">
                    <p className="font-label-sm text-label-sm text-on-surface-variant">
                      Net Cash Revenue
                    </p>
                    <p className="font-headline-sm text-headline-sm text-on-surface">
                      $482,900
                    </p>
                    <span className="font-label-sm text-label-sm text-primary flex items-center gap-0.5">
                      <span className="material-symbols-outlined text-[12px]">
                        trending_up
                      </span>{" "}
                      +14.2% MoM
                    </span>
                  </div>
                  <div className="bg-surface-container-lowest p-space-xs rounded">
                    <p className="font-label-sm text-label-sm text-on-surface-variant">
                      Blended CAC
                    </p>
                    <p className="font-headline-sm text-headline-sm text-on-surface">
                      $48.20
                    </p>
                    <span className="font-label-sm text-label-sm text-primary flex items-center gap-0.5">
                      <span className="material-symbols-outlined text-[12px]">
                        trending_down
                      </span>{" "}
                      -$6.40 vs Last Mo
                    </span>
                  </div>
                  <div className="bg-surface-container-lowest p-space-xs rounded">
                    <p className="font-label-sm text-label-sm text-on-surface-variant">
                      True Margin (Post-COGS)
                    </p>
                    <p className="font-headline-sm text-headline-sm text-on-surface">
                      28.4%
                    </p>
                    <span className="font-label-sm text-label-sm text-primary flex items-center gap-0.5">
                      <span className="material-symbols-outlined text-[12px]">
                        check_circle
                      </span>
                      Healthy Target
                    </span>
                  </div>
                  <div className="bg-surface-container-lowest p-space-xs rounded">
                    <p className="font-label-sm text-label-sm text-on-surface-variant">
                      Inventory Alert
                    </p>
                    <p className="font-headline-sm text-headline-sm text-error">
                      2 SKUs Low
                    </p>
                    <span className="font-label-sm text-label-sm text-on-surface-variant">
                      Restock in 6 days
                    </span>
                  </div>
                </div>
              </div>

              <div className="bg-surface-container-lowest p-space-xs rounded flex flex-col gap-1">
                <div className="flex items-center justify-between text-on-surface-variant font-label-sm text-label-sm">
                  <span>90-Day Trailing Contribution Run-rate</span>
                  <span className="text-primary font-semibold">
                    $1.44M TTM
                  </span>
                </div>
                <svg
                  className="w-full h-8 text-primary overflow-visible"
                  fill="none"
                  preserveAspectRatio="none"
                  viewBox="0 0 200 30"
                >
                  <path
                    d="M0 25 C30 20, 50 24, 70 14 C100 2, 130 18, 160 8 C180 2, 190 6, 200 4"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeWidth="2.5"
                  />
                  <path
                    d="M0 25 C30 20, 50 24, 70 14 C100 2, 130 18, 160 8 C180 2, 190 6, 200 4 L200 30 L0 30 Z"
                    fill="currentColor"
                    fillOpacity="0.08"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
