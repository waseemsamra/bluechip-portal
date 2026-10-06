import type { JSX } from "react";

const platforms = [
  {
    name: "SharePoint Online",
    sub: "Microsoft 365 Cloud",
    icon: "circle",
    iconColor: "bg-primary",
    desc: "Internal employee intranets, corporate wiki hubs, document lifecycle governance, and Teams-centric collaboration.",
    strengths: "Native M365 license utilization (zero extra software fees), Azure AD SSO out-of-the-box, Power Automate integration.",
    integrations: "Teams, Outlook, OneDrive, Power Platform, Entra ID.",
    price: "$22,000 – $50,000",
    weeks: "4–7 Weeks",
  },
  {
    name: "Liferay DXP",
    sub: "Open-source Java Core",
    icon: "circle",
    iconColor: "bg-tertiary",
    desc: "B2B distributor extranets, high-traffic customer self-service portals, supply chain portals with heavy transactional workflows.",
    strengths: "Unmatched fine-grained RBAC permissions, robust OSGi architecture, multi-tenant portal virtualization.",
    integrations: "SAP, Oracle NetSuite, Salesforce, Custom SOAP/REST backend microservices.",
    price: "$30,000 – $75,000",
    weeks: "6–10 Weeks",
  },
  {
    name: "Magnolia CMS",
    sub: "Hybrid Headless Java",
    icon: "circle",
    iconColor: "bg-primary-container",
    desc: "Multi-brand international digital experiences, high-velocity marketing websites, decoupled e-commerce content hubs.",
    strengths: "Live WYSIWYG authoring for headless frontends, ultra-modular light development, GraphQL content mesh.",
    integrations: "Next.js, Vue, Commercelayer, Bynder DAM, Algolia.",
    price: "$25,000 – $65,000",
    weeks: "5–9 Weeks",
  },
];

export default function PlatformMatrix(): JSX.Element {
  return (
    <section className="w-full py-space-xl bg-surface-container-low">
      <div className="max-w-[1280px] mx-auto px-margin-mobile md:px-gutter lg:px-margin">
        <div className="text-center max-w-3xl mx-auto mb-space-xl">
          <span className="font-label-sm text-label-sm text-primary uppercase tracking-widest font-bold block mb-space-xs">
            Architectural Guidance
          </span>
          <h2 className="font-headline-xl text-headline-xl text-on-surface tracking-tight mb-space-sm">
            Choosing the Right Enterprise Portal Engine
          </h2>
          <p className="font-body-md text-body-md text-on-surface-variant">
            We remain platform-agnostic to recommend what fits your
            organization&apos;s licensing, headcount, and workflow reality.
          </p>
        </div>
        <div className="bg-surface-container-lowest rounded-lg shadow-md overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-[700px]">
            <thead>
              <tr className="bg-surface-container text-on-surface font-label-lg text-label-lg">
                <th className="p-space-md">Platform Engine</th>
                <th className="p-space-md">Ideal Primary Use Case</th>
                <th className="p-space-md">Key Strengths</th>
                <th className="p-space-md">Integration Fit</th>
                <th className="p-space-md">Typical NexusCraft Scope</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-surface-container font-body-md text-body-md text-on-surface">
              {platforms.map((platform, idx) => (
                <tr
                  key={idx}
                  className="hover:bg-surface-container-low/50 transition-colors"
                >
                  <td className="p-space-md align-top font-semibold">
                    <div className="flex items-center gap-space-xs">
                      <span className={`w-3 h-3 rounded-full ${platform.iconColor}`}></span>
                      <div>
                        <p className="font-headline-sm text-headline-sm text-on-surface leading-none">
                          {platform.name}
                        </p>
                        <span className="font-body-sm text-body-sm text-on-surface-variant">
                          {platform.sub}
                        </span>
                      </div>
                    </div>
                  </td>
                  <td className="p-space-md align-top">{platform.desc}</td>
                  <td className="p-space-md align-top">{platform.strengths}</td>
                  <td className="p-space-md align-top">{platform.integrations}</td>
                  <td className="p-space-md align-top font-bold text-primary">
                    {platform.price}
                    <span className="block font-body-sm text-body-sm text-on-surface-variant font-normal">
                      {platform.weeks}
                    </span>
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
