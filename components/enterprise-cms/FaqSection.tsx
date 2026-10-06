import type { JSX } from "react";

const faqs = [
  {
    q: "How do you handle corporate security, compliance, and user permissions (SSO/RBAC)?",
    a: "We configure industry-standard SAML 2.0 and OpenID Connect (OIDC) through your identity provider (Azure AD/Entra ID, Okta, Ping Identity). For SharePoint, we enforce role inheritance rules mapped directly to security groups. For Liferay and Magnolia, we define granular permission schemes ensuring sensitive document repositories remain strictly sandboxed according to compliance guidelines (HIPAA, SOC 2, ISO 27001).",
  },
  {
    q: "Can you migrate legacy data from SharePoint on-premise without workflow disruption?",
    a: "Yes. We execute automated delta migrations via Microsoft SharePoint Migration Tool (SPMT), ShareGate, or custom PowerShell/Python batch extractors. We run test dry runs over staging environments to preserve file versions, metadata creation timestamps, and author references before doing the final differential delta cutover during off-peak weekend windows.",
  },
  {
    q: "Who owns the custom modules, themes, and configuration files?",
    a: "You own 100% of all intellectual property, source code, CI/CD scripts, and configuration repositories from Day 1. We deliver clean Git repositories with comprehensive architectural documentation, runbooks, and zero proprietary lock-in plugins.",
  },
  {
    q: "Do our internal staff need developer experience to manage content after launch?",
    a: "No. We engineer custom page templates, modular drag-and-drop components, and structured taxonomy pickers so non-technical content editors in HR, Marketing, and Operations can create, edit, and publish rich pages safely without touching code. We also record tailored video walkthroughs for your administrators.",
  },
  {
    q: "What post-launch warranties or ongoing support do you provide?",
    a: "Every fixed-scope project includes a 30 to 90-day comprehensive hypercare warranty covering all bug fixes and performance fine-tuning. Following hypercare, clients can transition into optional monthly SLA retainer blocks or manage the fully-documented platform with their internal IT team.",
  },
];

export default function FaqSection(): JSX.Element {
  return (
    <section className="w-full py-space-xl bg-surface-container-low">
      <div className="max-w-[1280px] mx-auto px-margin-mobile md:px-gutter lg:px-margin">
        <div className="text-center max-w-3xl mx-auto mb-space-xl">
          <span className="font-label-sm text-label-sm text-primary uppercase tracking-widest font-bold block mb-space-xs">
            Common Questions
          </span>
          <h2 className="font-headline-xl text-headline-xl text-on-surface tracking-tight mb-space-sm">
            Technical &amp; Commercial FAQ
          </h2>
          <p className="font-body-md text-body-md text-on-surface-variant">
            Clear, direct answers for engineering leaders and executive sponsors.
          </p>
        </div>
        <div className="max-w-4xl mx-auto space-y-space-md">
          {faqs.map((faq, idx) => (
            <div key={idx} className="bg-surface-container-lowest rounded-lg p-space-lg shadow-sm">
              <h3 className="font-headline-sm text-headline-sm text-on-surface mb-space-xs flex items-center justify-between">
                <span>{faq.q}</span>
                <span className="material-symbols-outlined text-primary">
                  expand_more
                </span>
              </h3>
              <p className="font-body-md text-body-md text-on-surface-variant">
                {faq.a}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
