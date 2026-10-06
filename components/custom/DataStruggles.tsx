import type { JSX } from "react";

const struggles = [
  {
    icon: "cancel",
    iconColor: "text-error",
    title: "The Typical Mid-Market Struggle",
    badge: "High Risk",
    badgeColor: "bg-error-container text-on-error-container",
    bg: "bg-surface-container-lowest",
    items: [
      { icon: "close", iconColor: "text-error", strongText: "Manual Workflows:", text: "Copy-pasting order CSVs between carts and accounting systems causing 12+ hour dispatch delays." },
      { icon: "close", iconColor: "text-error", strongText: "No Self-Service:", text: "Customers calling and emailing for invoice copies, inventory checks, or tracking numbers." },
      { icon: "close", iconColor: "text-error", strongText: "Bloated Plugins:", text: "40+ unmaintained third-party plugins that break during every platform update." },
      { icon: "close", iconColor: "text-error", strongText: "Agency Billing Hell:", text: "Expensive retainers billing hours for project managers instead of senior engineers." },
    ],
  },
  {
    icon: "verified",
    iconColor: "text-primary",
    title: "With NexusCraft Studio",
    badge: "Proven Results",
    badgeColor: "bg-primary-fixed text-on-primary-fixed",
    bg: "bg-primary text-on-primary shadow-md",
    items: [
      { icon: "check", iconColor: "text-primary", strongText: "Real-Time Sync:", text: "Automated 2-way webhook pushes across inventory, invoices, and payment gateways." },
      { icon: "check", iconColor: "text-primary", strongText: "Self-Service Powers:", text: "Customers reorder in 2 clicks, download tax invoices, and track orders." },
      { icon: "check", iconColor: "text-primary", strongText: "Lightning Speed:", text: "Sub-second page speeds and 95+ Core Web Vitals, lifting conversions 20–45%." },
      { icon: "check", iconColor: "text-primary", strongText: "Transparent Pricing:", text: "Fixed milestones with zero hourly creep and direct Slack access to senior engineers." },
    ],
  },
];

export default function DataStruggles(): JSX.Element {
  return (
    <section className="w-full py-space-xl bg-surface-container-low/40">
      <div className="max-w-[1280px] mx-auto px-margin-mobile md:px-gutter lg:px-margin flex flex-col gap-8">
        <div className="text-center max-w-2xl mx-auto">
          <span className="font-label-sm text-label-sm text-primary uppercase font-bold tracking-wide">
            The Pragmatic Shift
          </span>
          <h2 className="font-headline-xl text-headline-xl text-on-surface mt-1">
            Before vs. After NexusCraft
          </h2>
          <p className="font-body-md text-body-md text-on-surface-variant mt-2">
            How our fixed-scope engineering transforms operational headaches into
            automated competitive advantages.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-space-lg">
          {struggles.map((struggle, idx) => (
            <div key={idx} className={`rounded-2xl p-space-lg ${struggle.bg} flex flex-col gap-space-md`}>
              <div className="flex items-center justify-between pb-space-sm border-b-0">
                <div className="flex items-center gap-2">
                  <span className={`material-symbols-outlined text-[24px] ${struggle.iconColor}`}>
                    {struggle.icon}
                  </span>
                  <h3 className="font-headline-sm text-headline-sm text-on-surface font-medium">
                    {struggle.title}
                  </h3>
                </div>
                <span className={`px-2 py-0.5 rounded-full ${struggle.badgeColor} font-label-sm text-label-sm`}>
                  {struggle.badge}
                </span>
              </div>
              <ul className="space-y-4 font-body-md text-body-md">
                {struggle.items.map((item, idx2) => (
                  <li key={idx2} className="flex items-start gap-3">
                    <span className={`material-symbols-outlined text-[20px] shrink-0 mt-0.5 ${item.iconColor}`}>
                      {item.icon}
                    </span>
                    <p>
                      <strong className="text-on-surface">
                        {item.strongText}{" "}
                      </strong>
                      {item.text}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
