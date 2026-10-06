"use client";

import { useTechStack } from "./TechStackContext";
import { dbDeepDives, type BenchmarkRow, benchmarkRows } from "./techStackData";
import TechLogo from "./TechLogo";

export default function DatabasesSection() {
  const { activeFilter } = useTechStack();
  const hidden = activeFilter !== "all" && activeFilter !== "databases";

  return (
    <section
      className="tech-category-section flex flex-col gap-space-md scroll-mt-[184px]"
      data-category="databases"
      id="section-databases"
      style={{ display: hidden ? "none" : "flex" }}
    >
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-space-xs pb-space-xs">
        <div>
          <div className="flex items-center gap-space-xs">
            <span className="font-label-sm text-label-sm text-primary uppercase font-bold tracking-wider">
              Persistence &amp; Cache Tiers
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-outline-variant"></span>
            <span className="font-label-sm text-label-sm text-on-surface-variant">
              Deterministic Latency
            </span>
          </div>
          <h2 className="font-headline-lg text-headline-lg text-on-surface">
            Databases, Distributed Storage &amp; Caching Matrix
          </h2>
        </div>
        <span className="font-label-sm text-label-sm px-space-sm py-1 rounded-full bg-surface-container font-semibold text-on-surface-variant shrink-0">
          OLTP &amp; OLAP Vetted
        </span>
      </div>

      <div className="bg-surface-container-lowest p-space-md rounded-lg shadow-sm flex flex-col gap-space-md overflow-hidden">
        <div className="flex items-center justify-between">
          <span className="font-headline-sm text-headline-sm text-on-surface font-semibold">
            Engine Latency &amp; Maintenance Benchmark
          </span>
          <span className="font-label-sm text-label-sm text-on-surface-variant font-medium">
            All deployments run automated daily backups &amp; HA failover
          </span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left font-body-md text-body-md">
            <thead>
              <tr className="bg-surface-container-low text-on-surface font-semibold">
                <th className="p-3 rounded-l-DEFAULT">Engine</th>
                <th className="p-3">Primary Architectural Role</th>
                <th className="p-3">Throughput (Ops/sec)</th>
                <th className="p-3">P99 Read Latency</th>
                <th className="p-3">Failover RTO</th>
                <th className="p-3 rounded-r-DEFAULT text-right">
                  Production Status
                </th>
              </tr>
            </thead>
            <tbody className="divide-y-0">
              {benchmarkRows.map((row: BenchmarkRow) => (
                <tr
                  key={row.id}
                  className="hover:bg-surface-container-low/60 transition-colors"
                >
                  <td className="p-3">
                    <div className="flex items-center gap-2">
                      {row.logo ? (
                        <TechLogo
                          name={row.logo}
                          alt={row.name}
                          className="w-5 h-5"
                        />
                      ) : (
                        <span className="material-symbols-outlined text-outline text-[20px]">
                          {row.icon ?? "storage"}
                        </span>
                      )}
                      <span className="font-bold text-on-surface">{row.name}</span>
                    </div>
                  </td>
                  <td className="p-3 text-on-surface-variant">{row.role}</td>
                  <td className="p-3 font-semibold text-on-surface">
                    {row.throughput}
                  </td>
                  <td
                    className={`p-3 font-bold ${
                      row.latencyClass ?? "text-primary"
                    }`}
                  >
                    {row.latency}
                  </td>
                  <td className="p-3 text-on-surface-variant">{row.rto}</td>
                  <td className="p-3 text-right">
                    <span
                      className={`px-2.5 py-0.5 rounded-full font-label-sm text-label-sm font-bold ${
                        row.statusClass ?? "bg-surface-container text-on-surface-variant"
                      }`}
                    >
                      {row.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-space-sm pt-space-xs">
          {dbDeepDives.map((d) => (
            <div
              key={d.title}
              className="p-space-sm rounded-DEFAULT bg-surface-container-low flex items-start gap-space-xs"
            >
              <span className="material-symbols-outlined text-primary text-[22px] shrink-0">
                {d.icon}
              </span>
              <div>
                <h4 className="font-headline-sm text-headline-sm text-on-surface font-semibold">
                  {d.title}
                </h4>
                <p className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">
                  {d.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
