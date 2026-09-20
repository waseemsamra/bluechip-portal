import type { JSX } from "react";
import React from "react";

const footerLinks = [
  {
    label: "Platform & Directories",
    links: [
      { label: "Services Master Directory", href: "#" },
      { label: "Industries We Serve", href: "#" },
      { label: "Production Case Studies (40+)", href: "#" },
      { label: "Our Engineering Fellows", href: "#" },
      { label: "Tech Stack Directory", href: "#" },
      { label: "Interactive Budget Estimator", href: "#" },
      { label: "Client Sprint Portal", href: "#" },
      { label: "Real-Time System Status", href: "#" },
    ],
  },
  {
    label: "Disciplines & Pricing",
    links: [
      { label: "Fixed-Scope Packages", href: "#" },
      { label: "Cloud Native Architecture", href: "#" },
      { label: "Sprint Capacity Planner", href: "#" },
      { label: "Fractional Staff Bench", href: "#" },
    ],
  },
  {
    label: "Capabilities",
    links: [
      { label: "Distributed Systems", href: "#" },
      { label: "Kubernetes Platforms", href: "#" },
      { label: "Event-Driven Microservices", href: "#" },
      { label: "Zero-Trust SecOps", href: "#" },
    ],
  },
  {
    label: "Company",
    links: [
      { label: "Production Case Studies", href: "#" },
      { label: "Our Engineering Fellows", href: "#" },
      { label: "Engineering Dispatch", href: "#" },
      { label: "Senior Openings", href: "#" },
    ],
  },
  {
    label: "Operational Desk",
    links: [
      { label: "SF HQ: 500 Howard St, Suite 400", href: "tel:+18005553920" },
      { label: "London: 100 Bishopsgate, Level 14", href: "#" },
      { label: "desk@bluechiptech.engineering", href: "mailto:desk@bluechiptech.engineering" },
    ],
  },
];

const credentials = [
  { icon: "verified", text: "SOC 2 Type II Certified" },
  { icon: "shield", text: "UAE FTA Phase 2 Accredited" },
  { icon: "cloud_done", text: "AWS Advanced Tier Partner" },
  { icon: "shopping_cart", text: "Shopify Plus Preferred Partner" },
  { icon: "medical_services", text: "HIPAA-Hardened Architecture" },
];

const legalLinks = [
  { label: "Privacy Policy", href: "#" },
  { label: "Master Service Agreement", href: "#" },
  { label: "Security Whitepaper", href: "#" },
  { label: "Uptime Metrics", href: "#" },
];

function Icon({ name }: { name: string }) {
  const icons: Record<string, JSX.Element> = {
    verified: <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14M22 4L12 14.01l-3-3" />,
    shield: <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />,
    cloud_done: <path d="M16 13h-3v-3h-2v3H8v2h3v3h2v-3h3z" />,
    shopping_cart: <path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zm13.55-7.71L17.2 8.71C16.91 8.26 16.47 8 16 8c-.47 0-.93.26-1.21.71L11.76 12l-2.55-2.55c-.28-.45-.74-.71-1.21-.71-.53 0-1.07.26-1.36.71l-3.76 5.41c-.34.49-.45 1.11-.31 1.7.14.59.52 1.12 1.07 1.41l7.55 3.78c.49.24 1.05.36 1.62.36.57 0 1.13-.12 1.62-.36l4.55-2.27c.55-.28 1.03-.78 1.31-1.41z" />,
    medical_services: <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14M22 4L12 14.01l-3-3" />,
    terminal: <path d="M4 17h16M4 12h16M4 7h16" />,
    lock: <path d="M12 17a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm6-9h-1V6a3 3 0 0 0-6 0v2H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2zM9 6a3 3 0 0 1 6 0v2H9z" />,
  };

  const path = icons[name] || icons.terminal;
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {path}
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="w-full bg-surface-container-low mt-space-xl">
      <div className="w-full max-w-[1440px] mx-auto bg-surface-container-high py-space-md">
        <div className="flex flex-col md:flex-row items-center justify-between gap-space-md">
          <div className="flex items-center gap-space-md">
            <div className="w-12 h-12 rounded bg-primary flex items-center justify-center text-on-primary shrink-0">
              <Icon name="terminal" />
            </div>
            <div>
              <span className="font-headline-sm text-headline-sm text-on-surface">
                Ready to scope your engineering sprint?
              </span>
              <p className="font-body-sm text-body-sm text-on-surface-variant">
                Direct technical partner intake with fixed deliverables and
                guaranteed velocity.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-space-md w-full md:w-auto">
            <a
              className="px-space-md py-space-xs rounded-full bg-surface text-primary hover:bg-surface-container transition-colors text-center shrink-0 font-label-lg"
              href="#contact"
            >
              Direct Line: +1 800 555-3920
            </a>
            <a
              className="px-space-lg py-space-xs rounded-full bg-primary text-on-primary font-label-lg hover:bg-primary-container transition-all shadow-sm text-center shrink-0"
              href="#booking"
            >
              Book 30-Min Call
            </a>
          </div>
        </div>
      </div>

      <div className="w-full max-w-[1440px] mx-auto px-margin py-space-xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-space-lg">
        <div className="lg:col-span-1 flex flex-col gap-space-sm">
          <div className="flex items-center gap-space-xs">
            <div className="w-8 h-8 rounded bg-primary flex items-center justify-center text-on-primary">
              <Icon name="code" />
            </div>
            <span className="font-headline-sm text-headline-sm text-on-surface">
              BlueChip Tech
            </span>
          </div>
          <p className="font-body-md text-body-md text-on-surface-variant mt-space-xs">
            High-conviction product architecture, cloud modernizations, and
            embedded engineering teams for high-growth tech ventures.
          </p>
          <div className="flex items-center gap-space-sm mt-space-sm">
            <Icon name="verified" />
            <span className="font-label-sm text-label-sm text-on-surface-variant uppercase">
              ISO/IEC 27001 • SOC2
            </span>
          </div>
        </div>

        {footerLinks.map((col) => (
          <div
            key={col.label}
            className="flex flex-col gap-space-xs"
          >
            <h4 className="font-label-lg text-label-lg text-on-surface uppercase mb-space-xs">
              {col.label}
            </h4>
            {col.links.map((link) => (
              <a
                key={link.label}
                className="font-body-md text-body-md text-on-surface-variant hover:text-on-surface transition-colors"
                href={link.href}
              >
                {link.label}
              </a>
            ))}
          </div>
        ))}
      </div>

      <div className="bg-surface-container py-space-md">
         <div className="w-full max-w-[1440px] mx-auto px-margin flex flex-col md:flex-row items-center justify-between gap-space-sm font-label-sm text-label-sm text-on-surface-variant">
          <div className="flex flex-wrap items-center justify-center gap-space-md">
            {credentials.map((item) => (
              <span
                key={item.text}
                className="flex items-center gap-1"
              >
                <span className="text-primary w-5 h-5 flex items-center justify-center">
                  <Icon name={item.icon} />
                </span>
                {item.text}
              </span>
            ))}
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
            <span className="text-on-surface font-mono">
              Global Mesh SRE: All Nodes Operational
            </span>
          </div>
        </div>
      </div>

      <div className="bg-surface-container-low py-space-md">
         <div className="w-full max-w-[1440px] mx-auto px-margin flex flex-col md:flex-row items-center justify-between gap-space-sm font-body-sm text-body-sm text-on-surface-variant">
          <p>
            © 2025 BlueChip Tech Engineering LLC. Registered in Delaware (US) &amp; Dubai International Financial Centre (DIFC). All rights reserved.
          </p>
          <div className="flex items-center gap-space-md">
            {legalLinks.map((link) => (
              <React.Fragment key={link.label}>
                <a
                  className="hover:text-on-surface transition-colors"
                  href={link.href}
                >
                  {link.label}
                </a>
                <span className="text-outline-variant">•</span>
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
