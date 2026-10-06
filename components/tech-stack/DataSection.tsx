"use client";

import { useTechStack } from "./TechStackContext";
import { dataFeatures, type DataFeature } from "./techStackData";
import TechLogo from "./TechLogo";

export default function DataSection() {
  const { activeFilter } = useTechStack();
  const hidden = activeFilter !== "all" && activeFilter !== "data";

  return (
    <section
      className="tech-category-section flex flex-col gap-space-md scroll-mt-[184px]"
      data-category="data"
      id="section-data"
      style={{ display: hidden ? "none" : "flex" }}
    >
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-space-xs pb-space-xs">
        <div>
          <div className="flex items-center gap-space-xs">
            <span className="font-label-sm text-label-sm text-primary uppercase font-bold tracking-wider">
              Modern Data Stack (MDS)
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-outline-variant"></span>
            <span className="font-label-sm text-label-sm text-on-surface-variant">
              Governed Metrics
            </span>
          </div>
          <h2 className="font-headline-lg text-headline-lg text-on-surface">
            Data Pipelines, Warehousing &amp; BI
          </h2>
        </div>
        <span className="font-label-sm text-label-sm px-space-sm py-1 rounded-full bg-surface-container font-semibold text-on-surface-variant shrink-0">
          Automated dbt Lineage
        </span>
      </div>

      <div className="bg-surface-container-lowest p-space-md rounded-lg shadow-sm grid grid-cols-1 md:grid-cols-3 gap-space-md">
        <div className="md:col-span-2 flex flex-col gap-space-sm">
          <span className="font-label-sm text-label-sm text-primary uppercase font-bold tracking-wider">
            Governed Data Orchestration
          </span>
          <h3 className="font-headline-md text-headline-md text-on-surface">
            dbt Core + Apache Airflow Pipelines
          </h3>
          <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
            Transform raw event logs into production-grade analytics marts with
            automated schema testing, data freshness assertions, and
            cryptographic lineage tracking. We eliminate messy ad-hoc SQL
            spreadsheets in favor of software-engineered data models.
          </p>
          <div className="grid grid-cols-2 gap-space-xs pt-1">
            {dataFeatures.map((f: DataFeature) => (
              <div
                key={f.id}
                className="p-space-xs rounded-DEFAULT bg-surface-container-low flex items-center gap-2"
              >
                {f.logo ? (
                  <TechLogo name={f.logo} alt={f.label} className="w-5 h-5" />
                ) : (
                  <span className="material-symbols-outlined text-primary text-[18px]">
                    {f.icon}
                  </span>
                )}
                <span className="font-body-sm text-body-sm font-semibold text-on-surface">
                  {f.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-surface-container-low p-space-sm rounded-DEFAULT flex flex-col justify-between gap-space-xs">
          <div className="flex items-center justify-between pb-1">
            <span className="font-label-sm text-label-sm text-on-surface font-bold">
              Pipeline Freshness
            </span>
            <span className="font-label-sm text-label-sm px-2 py-0.5 rounded-full bg-primary/10 text-primary font-bold">
              100% Passing
            </span>
          </div>
          <div className="w-full h-28 flex flex-col justify-end">
            <svg className="w-full h-24 overflow-visible" viewBox="0 0 200 80">
              <defs>
                <linearGradient
                  id="chartGrad"
                  x1="0"
                  x2="0"
                  y1="0"
                  y2="1"
                >
                  <stop offset="0%" stopColor="#006948" stopOpacity="0.3" />
                  <stop offset="100%" stopColor="#006948" stopOpacity="0" />
                </linearGradient>
              </defs>
              <path
                d="M 0,60 Q 30,30 60,45 T 120,20 T 160,35 T 200,10 L 200,80 L 0,80 Z"
                fill="url(#chartGrad)"
              />
              <path
                d="M 0,60 Q 30,30 60,45 T 120,20 T 160,35 T 200,10"
                fill="none"
                stroke="#006948"
                strokeWidth="2.5"
              />
              <circle cx="120" cy="20" fill="#006948" r="3.5" />
              <circle cx="200" cy="10" fill="#00855d" r="3.5" />
            </svg>
          </div>
          <div className="flex justify-between items-center pt-2 font-body-sm text-body-sm text-on-surface-variant">
            <span>Avg Query Runtime</span>
            <span className="font-bold text-on-surface">420 ms (P95)</span>
          </div>
        </div>
      </div>
    </section>
  );
}
