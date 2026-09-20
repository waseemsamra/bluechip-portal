import type { JSX } from "react";

export default function HeroSection(): JSX.Element {
  return (
    <section
      className="relative w-full overflow-hidden bg-gradient-to-b from-surface-container-low via-surface-container-lowest to-surface-container-low py-16 lg:py-24 border-b border-outline-variant/40"
      id="overview"
    >
      <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-primary-fixed/30 rounded-full blur-3xl pointer-events-none -z-10"></div>

      <div className="w-full max-w-[1440px] mx-auto px-margin-mobile md:px-gutter lg:px-margin">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 flex flex-col gap-6">
            <div className="inline-flex items-center gap-2 self-start bg-surface-container-lowest border border-primary/20 px-3.5 py-1.5 rounded-full shadow-sm">
              <span className="w-2.5 h-2.5 rounded-full bg-primary animate-pulse"></span>
              <span className="font-code-badge text-xs font-bold uppercase tracking-wider text-primary">
                Senior Engineering Pods · Q2 Sprint Capacity Open
              </span>
            </div>

            <h1 className="font-display-hero text-3xl sm:text-4xl lg:text-5xl font-extrabold text-on-surface tracking-tight leading-[1.12]">
              End-to-End{" "}
              <span className="text-primary underline decoration-primary-fixed decoration-wavy underline-offset-8">
                Software Engineering
              </span>{" "}
              &amp; Scalable Infrastructure for High-Growth SMBs and Enterprises.
            </h1>

            <p className="font-body-lg text-base sm:text-lg text-on-surface-variant max-w-2xl leading-relaxed">
              We eliminate technical debt and scope creep. From{" "}
              <strong>
                $500 turnkey deployments to $100k+ distributed enterprise
                architectures
              </strong>
              , our team has successfully shipped{" "}
              <strong>40+ production applications</strong> across mobile, cloud,
              e-commerce, and regional ERP systems.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <a
                href="#consultation"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-primary text-on-primary font-headline-sm text-sm font-bold shadow-lg shadow-primary/25 hover:bg-primary-container hover:-translate-y-0.5 active:translate-y-0 transition-all"
              >
                <span>Book 30-Min Architecture Call</span>
                <span className="material-symbols-outlined text-[18px]">
                  arrow_forward
                </span>
              </a>
              <a
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-surface-container-lowest text-on-surface font-headline-sm text-sm font-bold border border-outline-variant hover:bg-surface-container-low transition-all"
                href="#services-carousel"
              >
                <span className="material-symbols-outlined text-primary text-[18px]">
                  view_carousel
                </span>
                <span>Explore All 10 Services</span>
              </a>
            </div>

            <div className="pt-4 border-t border-outline-variant/60 flex flex-wrap gap-2.5">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-surface-container rounded-full text-xs font-semibold text-on-surface-variant">
                <span className="material-symbols-outlined text-primary text-[15px]">
                  verified
                </span>
                <span>40+ Shipped Apps</span>
              </div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-surface-container rounded-full text-xs font-semibold text-on-surface-variant">
                <span className="material-symbols-outlined text-primary text-[15px]">
                  timer
                </span>
                <span>99.99% Uptime SLA</span>
              </div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-surface-container rounded-full text-xs font-semibold text-on-surface-variant">
                <span className="material-symbols-outlined text-primary text-[15px]">
                  analytics
                </span>
                <span>100% CAPI &amp; Signal Accuracy</span>
              </div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-surface-container rounded-full text-xs font-semibold text-on-surface-variant">
                <span className="material-symbols-outlined text-primary text-[15px]">
                  account_balance
                </span>
                <span>UAE VAT Compliant</span>
              </div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-surface-container rounded-full text-xs font-semibold text-on-surface-variant">
                <span className="material-symbols-outlined text-primary text-[15px]">
                  lock_open
                </span>
                <span>Zero Lock-in</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              <div className="bg-surface-container-lowest border border-outline-variant/70 rounded-2xl shadow-2xl overflow-hidden">
                <div className="bg-surface-container px-4 py-3 border-b border-outline-variant/60 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-red-400"></span>
                    <span className="w-3 h-3 rounded-full bg-amber-400"></span>
                    <span className="w-3 h-3 rounded-full bg-emerald-500"></span>
                    <span className="font-code-badge text-[11px] font-bold text-on-surface-variant ml-2">
                      bluechip-production-pod-v4
                    </span>
                  </div>
                  <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-primary/10 text-primary uppercase">
                    Healthy
                  </span>
                </div>

                <div className="p-6 flex flex-col gap-5">
                  <div className="grid grid-cols-3 gap-3 text-center">
                    <div className="p-3 bg-surface-container-low rounded-xl border border-outline-variant/40">
                      <span className="block text-[11px] uppercase font-bold text-outline mb-1">
                        Sprint Velocity
                      </span>
                      <span className="text-xl font-headline-md font-extrabold text-primary">
                        100%
                      </span>
                      <span className="text-[10px] text-on-surface-variant block">
                        On-time SLA
                      </span>
                    </div>
                    <div className="p-3 bg-surface-container-low rounded-xl border border-outline-variant/40">
                      <span className="block text-[11px] uppercase font-bold text-outline mb-1">
                        Avg Latency
                      </span>
                      <span className="text-xl font-headline-md font-extrabold text-on-surface">
                        18ms
                      </span>
                      <span className="text-[10px] text-emerald-600 block">
                        P99 Verified
                      </span>
                    </div>
                    <div className="p-3 bg-surface-container-low rounded-xl border border-outline-variant/40">
                      <span className="block text-[11px] uppercase font-bold text-outline mb-1">
                        Code Scope
                      </span>
                      <span className="text-xl font-headline-md font-extrabold text-on-surface">
                        Fixed
                      </span>
                      <span className="text-[10px] text-on-surface-variant block">
                        Guaranteed
                      </span>
                    </div>
                  </div>

                  <div className="bg-[#0b1c30] text-emerald-400 p-4 rounded-xl font-mono text-xs space-y-1.5 shadow-inner">
                    <div className="flex items-center justify-between text-slate-400 border-b border-slate-700/60 pb-1.5 mb-1.5">
                      <span>Live Orchestration Status</span>
                      <span className="text-emerald-400 flex items-center gap-1 text-[11px]">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping"></span>
                        40 Nodes
                      </span>
                    </div>
                    <p className="text-slate-300">
                      <span className="text-primary-fixed-dim">
                        ✓ [Microservices]
                      </span>{" "}
                      Go + Lambda pipelines active (sub-second queries)
                    </p>
                    <p className="text-slate-300">
                      <span className="text-primary-fixed-dim">
                        ✓ [Commerce]
                      </span>{" "}
                      Shopify Plus + Oxygen headless storefront synced
                    </p>
                    <p className="text-slate-300">
                      <span className="text-primary-fixed-dim">
                        ✓ [ERP System]
                      </span>{" "}
                      UAE FTA Phase 2 XML E-Invoicing verified
                    </p>
                    <p className="text-emerald-400">
                      <span className="text-emerald-300">
                        ✓ [CAPI Ingestion]
                      </span>{" "}
                      100% Meta &amp; TikTok events validated
                    </p>
                  </div>

                  <div className="flex items-center justify-between p-3 rounded-xl bg-primary-fixed/20 border border-primary/20">
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-primary">
                        verified_user
                      </span>
                      <div className="text-left">
                        <p className="text-xs font-bold text-on-surface">
                          100% Source Code Ownership
                        </p>
                        <p className="text-[11px] text-on-surface-variant">
                          Full IP transfer on sprint completion
                        </p>
                      </div>
                    </div>
                    <span className="text-xs font-bold text-primary bg-surface-container-lowest px-2.5 py-1 rounded-full shadow-sm">
                      No IP Lock
                    </span>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-6 -left-6 bg-surface-container-lowest p-3.5 rounded-xl border border-outline-variant shadow-xl hidden sm:flex items-center gap-3 animate-bounce [animation-duration:5s]">
                <div className="w-9 h-9 rounded-lg bg-emerald-100 text-primary flex items-center justify-center">
                  <span className="material-symbols-outlined text-[20px]">
                    bolt
                  </span>
                </div>
                <div>
                  <p className="text-xs font-bold text-on-surface">
                    650ms Global TTFB
                  </p>
                  <p className="text-[10px] text-on-surface-variant">
                    Shopify &amp; Bare-Metal Edge
                  </p>
                </div>
              </div>

              <div className="absolute -top-5 -right-5 bg-surface-container-lowest p-3 rounded-xl border border-outline-variant shadow-xl hidden sm:flex items-center gap-2.5">
                <span className="material-symbols-outlined text-tertiary text-[20px]">
                  devices
                </span>
                <div>
                  <p className="text-xs font-extrabold text-on-surface">
                    40+ Delivered Apps
                  </p>
                  <p className="text-[10px] text-emerald-600 font-bold">
                    100% Client Approval
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
