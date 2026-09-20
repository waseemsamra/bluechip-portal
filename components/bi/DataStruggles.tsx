import type { JSX } from "react";

const struggles = [
  {
    num: "01. Manual Overhead",
    beforeTitle: "The Monday Morning Spreadsheet Scramble",
    beforeDesc:
      "Operations spends 6 hours every Monday manually exporting CSVs from Shopify, ad managers, and Stripe, pasting them into brittle VLOOKUP tables that break if a column header shifts.",
    afterTitle: "Automated 8:00 AM Executive Briefings",
    afterDesc:
      "Pipelines run autonomously every night. Executive dashboards refresh before your first coffee, delivering real-time gross margins and ad efficiency directly to Slack and email.",
    icon: "close",
    errorColor: "text-error",
    bgColor: "bg-error-container/20",
  },
  {
    num: "02. Data Accuracy",
    beforeTitle: "Conflicting Numbers Across Departments",
    beforeDesc:
      "Marketing reports a 3.4x ROAS, Finance says true cash margin was negative last month, and Operations is looking at a different inventory valuation. Leadership wastes meetings arguing over which number is real.",
    afterTitle: "Single Certified Source of Truth",
    afterDesc:
      "Every business metric has an auditable, SQL-versioned dbt formula. Net revenue, blended CAC, and churn cohort numbers are uniform across every dashboard and team.",
    errorColor: "text-error",
    bgColor: "bg-error-container/20",
  },
  {
    num: "03. Production Performance",
    beforeTitle: "Heavy Queries Freezing Live App Databases",
    beforeDesc:
      "Non-technical staff run massive export queries against your live web app database, locking tables, degrading customer checkouts, and causing random checkout errors during peak traffic.",
    afterTitle: "Dedicated Isolated Analytics Warehouse",
    afterDesc:
      "Analytics workloads are 100% segregated inside BigQuery or an analytical Postgres read-replica. Query billions of historical rows without impacting a single live customer transaction.",
    errorColor: "text-error",
    bgColor: "bg-error-container/20",
  },
  {
    num: "04. Cost & Staffing",
    beforeTitle: "Paying $150k+/yr for a Dedicated Data Hire",
    beforeDesc:
      "Full-time data engineers demand massive salaries, take 6 months to ramp up, and often build over-engineered, opaque architectures that collapse the moment they depart.",
    afterTitle: "Turnkey, Low-Maintenance Setup You Own",
    afterDesc:
      "Delivered in a 4-to-8 week fixed-scope sprint. Fully documented, automated failure alerting, zero proprietary vendor lock-in, and managed at under $50/month in cloud infrastructure.",
    errorColor: "text-error",
    bgColor: "bg-error-container/20",
  },
];

export default function DataStruggles(): JSX.Element {
  return (
    <section className="w-full max-w-[1440px] mx-auto px-margin-mobile md:px-gutter lg:px-margin pt-space-xl">
      <div className="text-center max-w-2xl mx-auto mb-space-lg">
        <span className="font-label-sm text-label-sm text-primary uppercase tracking-wider">
          The Real-World SMB Reality
        </span>
        <h2 className="font-headline-xl text-headline-xl-mobile md:text-headline-xl text-on-surface mt-space-xs">
          Why Spreadsheets Break at $5M to $50M Revenue
        </h2>
        <p className="font-body-md text-body-md text-on-surface-variant mt-space-xs">
          Most growing businesses don&apos;t need a bloated 5-person enterprise
          data department. You just need clean pipelines and answers you can
          trust every single morning.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-space-md">
        {struggles.map((s) => (
          <div
            key={s.num}
            className="bg-surface-container-lowest rounded-lg p-space-lg shadow-sm flex flex-col justify-between"
          >
            <div>
              <span className="font-label-sm text-label-sm text-outline uppercase tracking-wider">
                {s.num}
              </span>
              <div className="mt-space-sm space-y-space-xs">
                <div className={`p-space-sm rounded ${s.bgColor} text-on-surface`}>
                  <span className={`font-label-sm text-label-sm ${s.errorColor} uppercase font-bold flex items-center gap-1`}>
                    <span className="material-symbols-outlined text-[16px]">
                      {s.icon}
                    </span>
                    Before BlueChip Tech
                  </span>
                  <h3 className="font-headline-sm text-headline-sm mt-1">
                    {s.beforeTitle}
                  </h3>
                  <p className="font-body-md text-body-md text-on-surface-variant mt-1">
                    {s.beforeDesc}
                  </p>
                </div>
                <div className="p-space-sm rounded bg-primary/10 text-on-surface">
                  <span className="font-label-sm text-label-sm text-primary uppercase font-bold flex items-center gap-1">
                    <span className="material-symbols-outlined text-[16px]">
                      check
                    </span>
                    After BlueChip Tech
                  </span>
                  <h3 className="font-headline-sm text-headline-sm mt-1">
                    {s.afterTitle}
                  </h3>
                  <p className="font-body-md text-body-md text-on-surface-variant mt-1">
                    {s.afterDesc}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
