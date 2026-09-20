import type { JSX } from "react";

const comparisonRows = [
  {
    metric: "Code & Asset Ownership",
    nexuscraft: "100% Unconditional IP Transfer",
    agency: "Proprietary CMS lock-in or licensing fees",
    freelance: "Frequent disputes & orphaned repos",
  },
  {
    metric: "Pricing Predictability",
    nexuscraft: "Fixed-Price Sprints ($500 – $100k)",
    agency: "Vague time & materials runaway billing",
    freelance: "Low initial bid with constant upsells",
  },
  {
    metric: "Support SLA & Incident Response",
    nexuscraft: "Sub-15 Minute P1 Response Time",
    agency: "24-48 business hours ticket response",
    freelance: "Ghosting during critical downtime",
  },
  {
    metric: "Engineer Seniority",
    nexuscraft: "100% Senior Architects & Leads Only",
    agency: "Senior pitch followed by junior offshore work",
    freelance: "Inconsistent solo skill proficiency",
  },
  {
    metric: "Delivery Warranty",
    nexuscraft: "30-Day Zero-Bug Production Guarantee",
    agency: "Paid hourly maintenance contracts only",
    freelance: "None once milestone is approved",
  },
];

export default function BenchmarkComparison(): JSX.Element {
  return (
    <section
      className="w-full bg-surface-container-lowest py-space-xl lg:py-[60px] border-b border-outline-variant/40"
      id="benchmark"
    >
      <div className="w-full max-w-[1440px] mx-auto px-margin-mobile md:px-gutter lg:px-margin flex flex-col gap-space-xl lg:gap-[40px]">
        <div className="text-center max-w-2xl mx-auto">
          <span className="font-code-badge text-xs font-bold text-primary uppercase tracking-wide">
            Engineering Standard
          </span>
          <h2 className="font-headline-xl text-2xl sm:text-3xl lg:text-4xl font-extrabold text-on-surface tracking-tight mt-1">
            Why High-Growth Companies Choose BlueChip Tech
          </h2>
          <p className="font-body-md text-on-surface-variant mt-2">
            Generic dev agencies outsource junior contractors and
            nickel-and-dime revisions. We function as your high-velocity
            in-house engineering squad.
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-[640px]">
            <thead>
              <tr className="border-b-2 border-outline-variant/80">
                <th className="py-4 px-4 text-xs font-extrabold uppercase text-on-surface-variant">
                  Key Metric / Standard
                </th>
                <th className="py-4 px-4 text-sm font-extrabold text-primary bg-primary-fixed/20 rounded-t-xl">
                  BlueChip Tech
                </th>
                <th className="py-4 px-4 text-xs font-bold uppercase text-on-surface-variant">
                  Generic Dev Agencies
                </th>
                <th className="py-4 px-4 text-xs font-bold uppercase text-on-surface-variant">
                  Freelance Marketplaces
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-outline-variant/40 text-sm">
              {comparisonRows.map((row) => (
                <tr key={row.metric}>
                  <td className="py-4 px-4 font-bold text-on-surface">
                    {row.metric}
                  </td>
                  <td className="py-4 px-4 font-extrabold text-emerald-800 bg-primary-fixed/10">
                    {row.nexuscraft}
                  </td>
                  <td className="py-4 px-4 text-on-surface-variant">
                    {row.agency}
                  </td>
                  <td className="py-4 px-4 text-on-surface-variant">
                    {row.freelance}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
