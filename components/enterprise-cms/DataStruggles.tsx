import type { JSX } from "react";

const struggles = [
  {
    icon: "dangerous",
    iconColor: "text-error",
    title: "Traditional Big-Agency / Consultancies",
    badge: "High Risk",
    badgeColor: "bg-error-container text-on-error-container",
    bg: "bg-surface-container-high/60",
    items: [
      { iconColor: "text-error", strongText: "Sluggish Hybrid Webviews:", text: "Wrapping responsive websites in Cordova/Capacitor that feel slow, jittery, and fail App Store Guidelines 4.2." },
      { iconColor: "text-error", strongText: "Runaway Time-and-Materials Billing:", text: "Estimated at $45k, delivered at $120k+ after 6 months of scope creep and unexpected change orders." },
      { iconColor: "text-error", strongText: "Junior Staffing Bait-and-Switch:", text: "Senior partners pitch the proposal; junior offshore developers learn SharePoint/Liferay on your billable hours." },
      { iconColor: "text-error", strongText: "Vendor Hostage Code:", text: "Proprietary wrappers and obscure configs designed to force an ongoing $15,000/mo maintenance retainer." },
    ],
    result: "Exhausted budgets, missed deadlines, shelfware portals.",
    resultBg: "bg-surface-container",
    resultColor: "text-on-surface-variant",
  },
  {
    icon: "verified",
    iconColor: "text-primary",
    title: "The NexusCraft Fixed-Sprint Method",
    badge: "Proven Results",
    badgeColor: "bg-primary-fixed text-on-primary-fixed",
    bg: "bg-surface-container-lowest border-2 border-primary/30",
    items: [
      { iconColor: "text-primary", strongText: "True Native Compilation:", text: "Native 60fps gesture handling, smooth iOS/Android native components, and offline SQL persistence that feels instant." },
      { iconColor: "text-primary", strongText: "Ironclad Fixed-Price Contracts:", text: "Every feature, view, and integration has a binding fixed price ($20k–$75k). We absorb scope overruns, not you." },
      { iconColor: "text-primary", strongText: "100% Staff/Principal Engineers:", text: "Your app is designed and coded exclusively by senior, veteran mobile architects based in North America." },
      { iconColor: "text-primary", strongText: "Apple & Google Submission SLA:", text: "We manage certificates, privacy manifests, test credentials, and review appeals until your app is live." },
    ],
    result: "On-time delivery, empowered teams, and transparent pricing.",
    resultBg: "bg-primary/10",
    resultColor: "text-primary",
  },
];

export default function DataStruggles(): JSX.Element {
  return (
    <section className="w-full py-space-xl bg-surface">
      <div className="max-w-[1280px] mx-auto px-margin-mobile md:px-gutter lg:px-margin">
        <div className="text-center max-w-3xl mx-auto mb-space-xl">
          <span className="font-label-sm text-label-sm text-error uppercase tracking-widest font-bold block mb-space-xs">
            Radical Delivery Transparency
          </span>
          <h2 className="font-headline-xl text-headline-xl text-on-surface tracking-tight mb-space-sm">
            The Traditional Big-Agency Trap vs. The NexusCraft Method
          </h2>
          <p className="font-body-md text-body-md text-on-surface-variant">
            Why mid-market leaders avoid the 9-month enterprise consulting
            vortex and choose disciplined engineering sprints.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-space-lg">
          {struggles.map((struggle, idx) => (
            <div
              key={idx}
              className={`rounded-lg p-space-lg ${struggle.bg} shadow-sm flex flex-col justify-between`}
            >
              <div>
                <div className="flex items-center gap-space-xs font-headline-sm text-headline-sm mb-space-md">
                  <span
                    className={`material-symbols-outlined text-[24px] ${struggle.iconColor}`}
                  >
                    {struggle.icon}
                  </span>
                  {struggle.title}
                </div>
                <ul className="space-y-space-md font-body-md text-body-md text-on-surface">
                  {struggle.items.map((item, idx2) => (
                    <li key={idx2} className="flex items-start gap-space-sm">
                      <span
                        className={`material-symbols-outlined text-[20px] shrink-0 mt-0.5 ${
                          idx === 0 ? "text-error" : "text-primary"
                        }`}
                      >
                        {idx === 0 ? "close" : "check_circle"}
                      </span>
                      <div>
                        <strong className="font-semibold block">{item.strongText} </strong>
                        {item.text}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
              <div
                className={`mt-space-lg p-space-sm ${struggle.resultBg} rounded-DEFAULT text-center font-label-sm text-label-sm ${struggle.resultColor}`}
              >
                Result: {struggle.result}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
