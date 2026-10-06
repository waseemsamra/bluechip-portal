import type { JSX } from "react";

type StruggleItem = {
  icon: string;
  iconColor: string;
  strongText: string;
  text: string;
};

type Struggle = {
  icon: string;
  iconColor: string;
  bg?: string;
  bgClass?: string;
  title: string;
  badge: string;
  badgeColor: string;
  items: StruggleItem[];
};

const struggles: Struggle[] = [
  {
    icon: "cancel",
    iconColor: "text-error",
    bg: "bg-surface-container-low",
    title: "Typical Agency / Offshore Model",
    badge: "High Risk",
    badgeColor: "bg-error-container text-on-error-container",
    items: [
      { icon: "close", iconColor: "text-error", strongText: "Sluggish Hybrid Webviews:", text: "Wrapping responsive websites in Cordova/Capacitor that feel slow, jittery, and fail App Store Guidelines 4.2." },
      { icon: "close", iconColor: "text-error", strongText: "Runaway Time-and-Materials Billing:", text: "Estimated at $45k, delivered at $120k+ after 6 months of scope creep and unexpected change orders." },
      { icon: "close", iconColor: "text-error", strongText: "Junior Dev Offshore Bait-and-Switch:", text: "Pitched by senior executives, built by unvetted junior contractors with high turnover and spaghetti code." },
      { icon: "close", iconColor: "text-error", strongText: "Store Rejection Limbo:", text: "App rejected for Guideline violations; developers vanish and charge thousands more to fix compliance warnings." },
    ],
  },
  {
    icon: "verified",
    iconColor: "text-primary",
    bg: "",
    bgClass: "bg-surface-container-lowest relative overflow-hidden",
    title: "The NexusCraft Fixed-Sprint Method",
    badge: "Guaranteed Delivery",
    badgeColor: "bg-primary-fixed text-on-primary-fixed",
    items: [
      { icon: "check", iconColor: "text-primary", strongText: "True Native Compilation:", text: "Native 60fps gesture handling, smooth iOS/Android native components, and offline SQL persistence that feels instant." },
      { icon: "check", iconColor: "text-primary", strongText: "Ironclad Fixed-Price Contracts:", text: "Every feature, view, and integration has a binding fixed price ($20k–$75k). We absorb scope overruns, not you." },
      { icon: "check", iconColor: "text-primary", strongText: "100% Staff/Principal Engineers:", text: "Your app is designed and coded exclusively by senior, veteran mobile architects based in North America." },
      { icon: "check", iconColor: "text-primary", strongText: "Apple & Google Submission SLA:", text: "We manage certificates, privacy manifests, test credentials, and review appeals until your app is live." },
    ],
  },
];

export default function DataStruggles(): JSX.Element {
  return (
    <section className="w-full py-space-xl bg-surface-container-low/40">
      <div className="max-w-[1280px] mx-auto px-margin-mobile md:px-gutter lg:px-margin">
        <div className="text-center max-w-2xl mx-auto mb-space-lg">
          <span className="font-label-sm text-label-sm text-primary uppercase tracking-wider font-semibold">
            Risk De-Escalation
          </span>
          <h2 className="font-headline-lg text-headline-lg text-on-surface tracking-tight mt-1">
            Why SMBs Choose NexusCraft Over Generic Consultancies
          </h2>
          <p className="font-body-md text-body-md text-on-surface-variant mt-2">
            Compare the reality of bloated traditional agencies against our
            agile, fixed-scope engineering partnership.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-space-lg">
          {struggles.map((struggle, idx) => (
            <div
              key={idx}
              className={`rounded-2xl p-space-lg ${
                idx === 0
                  ? "bg-surface-container-lowest shadow-sm"
                  : struggle.bgClass + " shadow-md"
              } flex flex-col gap-space-md`}
            >
              {idx === 1 && (
                <div className="absolute -right-10 -bottom-10 w-80 h-80 bg-primary/10 rounded-full blur-2xl pointer-events-none"></div>
              )}
              <div className="flex items-center justify-between pb-space-sm border-b-0">
                <div className="flex items-center gap-2">
                  <span
                    className={`material-symbols-outlined text-[24px] ${struggle.iconColor}`}
                  >
                    {struggle.icon}
                  </span>
                  <h3 className="font-headline-sm text-headline-sm text-on-surface">
                    {struggle.title}
                  </h3>
                </div>
                <span
                  className={`px-2 py-0.5 rounded-full ${struggle.badgeColor} font-label-sm text-label-sm`}
                >
                  {struggle.badge}
                </span>
              </div>
              <div className="space-y-space-sm font-body-md text-body-md text-on-surface-variant">
                {struggle.items.map((item, idx2) => (
                  <div key={idx2} className="flex items-start gap-3">
                    <span
                      className={`material-symbols-outlined text-[20px] shrink-0 mt-0.5 ${item.iconColor}`}
                    >
                      {item.icon}
                    </span>
                    <p>
                      <strong className="text-on-surface">
                        {item.strongText}{" "}
                      </strong>
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
