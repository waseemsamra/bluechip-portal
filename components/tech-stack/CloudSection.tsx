"use client";

import { useTechStack } from "./TechStackContext";
import { cloudToolCards, type CloudToolCard } from "./techStackData";
import TechLogo from "./TechLogo";

export default function CloudSection() {
  const { activeFilter } = useTechStack();
  const hidden = activeFilter !== "all" && activeFilter !== "cloud";

  return (
    <section
      className="tech-category-section flex flex-col gap-space-md scroll-mt-[184px]"
      data-category="cloud"
      id="section-cloud"
      style={{ display: hidden ? "none" : "flex" }}
    >
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-space-xs pb-space-xs">
        <div>
          <div className="flex items-center gap-space-xs">
            <span className="font-label-sm text-label-sm text-primary uppercase font-bold tracking-wider">
              Cloud Native &amp; IaC
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-outline-variant"></span>
            <span className="font-label-sm text-label-sm text-on-surface-variant">
              Zero Configuration Drift
            </span>
          </div>
          <h2 className="font-headline-lg text-headline-lg text-on-surface">
            Cloud Infrastructure, DevOps &amp; Serverless
          </h2>
        </div>
        <span className="font-label-sm text-label-sm px-space-sm py-1 rounded-full bg-surface-container font-semibold text-on-surface-variant shrink-0">
          AWS &amp; Cloudflare Native
        </span>
      </div>

      <div className="bg-surface-container-lowest p-space-md rounded-lg shadow-sm flex flex-col gap-space-md">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-space-xs">
          <div>
            <span className="font-label-sm text-label-sm text-primary uppercase font-bold tracking-wider">
              Production Topology
            </span>
            <h3 className="font-headline-md text-headline-md text-on-surface">
              Server-Side Proxy &amp; Event Attribution Pipeline
            </h3>
          </div>
          <span className="font-label-sm text-label-sm px-3 py-1 rounded-full bg-surface-container font-semibold text-on-surface">
            Sub-50ms Global Edge Routing
          </span>
        </div>

        <div className="bg-surface-container-low p-space-md rounded-DEFAULT flex flex-col gap-space-md relative overflow-hidden">
          {/* Upstream Event Sources */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-space-sm">
            <div className="bg-surface-container-lowest p-space-sm rounded-DEFAULT shadow-sm flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">
                  M
                </div>
                <div>
                  <div className="font-label-lg text-label-lg text-on-surface font-bold">
                    Meta (FB &amp; IG)
                  </div>
                  <div className="font-body-sm text-body-sm text-on-surface-variant">
                    Conversions API (CAPI)
                  </div>
                </div>
              </div>
              <span className="material-symbols-outlined text-outline text-[18px]">
                dns
              </span>
            </div>
            <div className="bg-surface-container-lowest p-space-sm rounded-DEFAULT shadow-sm flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-surface-container-high flex items-center justify-center text-on-surface font-bold">
                  TT
                </div>
                <div>
                  <div className="font-label-lg text-label-lg text-on-surface font-bold">
                    TikTok Events API
                  </div>
                  <div className="font-body-sm text-body-sm text-on-surface-variant">
                    Real-Time Event Relay
                  </div>
                </div>
              </div>
              <span className="material-symbols-outlined text-outline text-[18px]">
                dns
              </span>
            </div>
            <div className="bg-surface-container-lowest p-space-sm rounded-DEFAULT shadow-sm flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-error-container flex items-center justify-center text-on-error-container font-bold">
                  YT
                </div>
                <div>
                  <div className="font-label-lg text-label-lg text-on-surface font-bold">
                    YouTube / Google Ads
                  </div>
                  <div className="font-body-sm text-body-sm text-on-surface-variant">
                    Enhanced Conversions
                  </div>
                </div>
              </div>
              <span className="material-symbols-outlined text-outline text-[18px]">
                dns
              </span>
            </div>
          </div>

          {/* Connecting Arrows SVG */}
          <div className="flex justify-center -my-2">
            <svg
              className="w-full max-w-md h-8 text-primary"
              fill="none"
              viewBox="0 0 400 32"
            >
              <path
                d="M 66 0 L 66 12 L 200 12 L 200 24"
                stroke="currentColor"
                strokeLinecap="round"
                strokeWidth="2.5"
              />
              <path
                d="M 200 0 L 200 24"
                stroke="currentColor"
                strokeLinecap="round"
                strokeWidth="2.5"
              />
              <path
                d="M 334 0 L 334 12 L 200 12 L 200 24"
                stroke="currentColor"
                strokeLinecap="round"
                strokeWidth="2.5"
              />
              <polygon
                fill="currentColor"
                points="196,24 204,24 200,30"
              />
            </svg>
          </div>

          {/* Server-Side Proxy Node */}
          <div className="max-w-md mx-auto w-full bg-inverse-surface text-inverse-on-surface p-space-sm rounded-DEFAULT shadow-md flex items-center justify-between">
            <div className="flex items-center gap-space-xs">
              <div className="w-8 h-8 rounded-DEFAULT bg-primary flex items-center justify-center text-on-primary">
                <span className="material-symbols-outlined text-[18px]">
                  bolt
                </span>
              </div>
              <div>
                <div className="font-label-lg text-label-lg font-bold">
                  Cloudflare Worker Edge Runtime
                </div>
                <div className="font-body-sm text-body-sm text-outline-variant">
                  Zero-Latency Server-Side Proxy &amp; Sanitization
                </div>
              </div>
            </div>
            <span className="font-label-sm text-label-sm px-2 py-0.5 rounded-full bg-surface-container-highest/20 text-inverse-on-surface font-bold">
              &lt; 15ms
            </span>
          </div>

          {/* Downstream Arrow */}
          <div className="flex justify-center -my-2">
            <svg
              className="w-8 h-6 text-primary"
              fill="none"
              viewBox="0 0 32 24"
            >
              <path
                d="M 16 0 L 16 18"
                stroke="currentColor"
                strokeLinecap="round"
                strokeWidth="2.5"
              />
              <polygon
                fill="currentColor"
                points="12,18 20,18 16,24"
              />
            </svg>
          </div>

          {/* Final Destination Nodes */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-sm max-w-xl mx-auto w-full">
            <div className="bg-primary text-on-primary p-space-sm rounded-DEFAULT shadow-sm flex items-center gap-space-xs">
              <span className="material-symbols-outlined text-[24px]">
                query_stats
              </span>
              <div>
                <div className="font-label-lg text-label-lg font-bold">
                  Google BigQuery
                </div>
                <div className="font-body-sm text-body-sm opacity-90">
                  Raw Partitioned Warehouse
                </div>
              </div>
            </div>
            <div className="bg-surface-container-highest text-on-surface p-space-sm rounded-DEFAULT shadow-sm flex items-center gap-space-xs">
              <span className="material-symbols-outlined text-[24px] text-primary">
                pie_chart
              </span>
              <div>
                <div className="font-label-lg text-label-lg font-bold">
                  Attribution Models
                </div>
                <div className="font-body-sm text-body-sm text-on-surface-variant">
                  Marketing Mix Modeling (MMM)
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-space-sm pt-space-xs">
          {cloudToolCards.map((card: CloudToolCard) => (
            <div
              key={card.id}
              className="p-space-sm rounded-DEFAULT bg-surface-container-low flex flex-col gap-1"
            >
              <div className="flex items-center justify-between">
                <span className="font-headline-sm text-headline-sm text-on-surface font-semibold">
                  {card.title}
                </span>
                {card.logo ? (
                  <TechLogo name={card.logo} alt={card.title} className="w-6 h-6" />
                ) : (
                  <span className="material-symbols-outlined text-primary text-[20px]">
                    {card.icon ?? "cloud"}
                  </span>
                )}
              </div>
              <p className="font-body-sm text-body-sm text-on-surface-variant">
                {card.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
