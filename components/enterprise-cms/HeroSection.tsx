import type { JSX } from "react";

export default function HeroSection(): JSX.Element {
  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-b from-surface via-surface-container-low to-surface pb-space-xl pt-space-lg">
      <div className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 w-[840px] h-[380px] bg-primary/10 rounded-full blur-3xl"></div>
      <div className="pointer-events-none absolute top-1/3 -right-40 w-[420px] h-[420px] bg-tertiary-container/5 rounded-full blur-2xl"></div>
      <div className="max-w-[1280px] mx-auto px-margin-mobile md:px-gutter lg:px-margin relative z-10">
        <div className="flex flex-wrap items-center justify-center gap-space-xs sm:gap-space-sm mb-space-md text-center">
          <span className="inline-flex items-center gap-space-xs px-space-md py-space-xs rounded-full bg-surface-container-high text-primary font-label-sm text-label-sm uppercase tracking-wider shadow-sm">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
            Enterprise CMS &amp; Secure Portal Engineering
          </span>
          <span className="inline-flex items-center px-space-md py-space-xs rounded-full bg-primary/10 text-primary font-label-sm text-label-sm font-semibold">
            $22k – $80k Fixed Scopes • 4–10 Week Delivery • Zero Scope Creep
          </span>
        </div>
        <div className="text-center max-w-4xl mx-auto mb-space-lg">
          <h1 className="font-display-hero text-display-hero text-on-surface tracking-tight mb-space-md">
            Enterprise CMS &amp; Portal Solutions Engineered Without{" "}
            <span className="text-primary italic">Enterprise Bloat.</span>
          </h1>
          <p className="font-body-xl text-body-xl text-on-surface-variant max-w-3xl mx-auto">
            We install, configure, customize, and migrate mission-critical
            enterprise portals and content systems—specializing in Microsoft
            SharePoint, Liferay DXP, and Magnolia CMS. Clean governance,
            role-based workflows, SSO authentication, and headless API
            architecture delivered on guaranteed fixed timelines.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-space-md mb-space-xl">
          <a
            className="w-full sm:w-auto inline-flex items-center justify-center px-space-lg py-space-md rounded-full bg-primary hover:bg-primary-container text-on-primary font-label-lg text-label-lg transition-all shadow-[0_4px_20px_rgba(0,105,72,0.3)] hover:-translate-y-0.5"
            href="#packages"
          >
            <span className="material-symbols-outlined mr-space-xs text-[20px]">
              layers
            </span>
            Explore Fixed CMS Packages ($22k–$80k)
          </a>
          <a
            className="w-full sm:w-auto inline-flex items-center justify-center px-space-lg py-space-md rounded-full bg-surface-container-highest hover:bg-surface-container text-on-surface font-label-lg text-label-lg transition-all shadow-sm"
            href="#scoping-intake"
          >
            <span className="material-symbols-outlined mr-space-xs text-[20px]">
              calendar_month
            </span>
            Book a 30-Min Technical Scoping Call
          </a>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-space-sm max-w-4xl mx-auto mb-space-xl">
          <div className="flex items-center justify-center gap-space-xs px-space-sm py-space-xs rounded-full bg-surface-container-lowest shadow-sm text-on-surface">
            <span className="material-symbols-outlined text-primary text-[18px]">
              verified
            </span>
            <span className="font-label-sm text-label-sm font-semibold">
              100% Fixed-Price SLA
            </span>
          </div>
          <div className="flex items-center justify-center gap-space-xs px-space-sm py-space-xs rounded-full bg-surface-container-lowest shadow-sm text-on-surface">
            <span className="material-symbols-outlined text-primary text-[18px]">
              lock
            </span>
            <span className="font-label-sm text-label-sm font-semibold">
              SSO &amp; SAML 2.0 Ready
            </span>
          </div>
          <div className="flex items-center justify-center gap-space-xs px-space-sm py-space-xs rounded-full bg-surface-container-lowest shadow-sm text-on-surface">
            <span className="material-symbols-outlined text-primary text-[18px]">
              admin_panel_settings
            </span>
            <span className="font-label-sm text-label-sm font-semibold">
              Role-Based RBAC
            </span>
          </div>
          <div className="flex items-center justify-center gap-space-xs px-space-sm py-space-xs rounded-full bg-surface-container-lowest shadow-sm text-on-surface">
            <span className="material-symbols-outlined text-primary text-[18px]">
              terminal
            </span>
            <span className="font-label-sm text-label-sm font-semibold">
              100% Config &amp; IP Handover
            </span>
          </div>
        </div>
        <div className="relative max-w-5xl mx-auto">
          <div className="relative rounded-lg overflow-hidden shadow-2xl bg-surface-container-lowest">
            <img
              alt="Enterprise digital workspace intranet portal dashboard shown on a desk monitor displaying document library, governance workflows, and multi-site content management"
              className="w-full h-auto object-cover block"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCKZl9mp-Aae-r8gSgsmtg5zU6mCHLtDBtlTuGAkZHXQ3Cwm9RpQe4JlGmZnWvTHn3DCweUsi1ieN8r5tf-xhzWhJ5-cQPe6h-zbqNbKX1_RJPHkYrWY-nAHZLwIkCKwaS8Oc3FI9e14AJS49HTCduxklcLEWlagDhamWot0py5gwsOR5mtgQOnl3z-kim5izRph_MY_g9fgvU8aYKDiFvvdivbjZ7fnagweTUA8pa5gcQYD9Uw-eoV"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-inverse-surface/40 via-transparent to-transparent pointer-events-none"></div>
          </div>
          <div className="hidden lg:flex items-center gap-space-xs absolute -top-5 -left-6 bg-surface-container-lowest/95 backdrop-blur-md px-space-md py-space-xs rounded-full shadow-lg border-l-4 border-primary">
            <span className="w-2.5 h-2.5 rounded-full bg-primary animate-ping"></span>
            <span className="material-symbols-outlined text-primary text-[18px]">
              shield
            </span>
            <span className="font-label-sm text-label-sm text-on-surface font-semibold">
              Azure AD • Okta SSO: Verified Connected
            </span>
          </div>
          <div className="hidden lg:flex items-center gap-space-xs absolute top-1/4 -right-8 bg-surface-container-lowest/95 backdrop-blur-md px-space-md py-space-xs rounded-full shadow-lg border-l-4 border-tertiary">
            <span className="material-symbols-outlined text-tertiary text-[18px]">
              folder_shared
            </span>
            <div className="flex flex-col">
              <span className="font-label-sm text-label-sm text-on-surface font-semibold">
                Multi-Tenant Document Hub
              </span>
              <span className="font-body-sm text-body-sm text-on-surface-variant leading-none">
                450,000+ files encrypted &amp; synced
              </span>
            </div>
          </div>
          <div className="hidden lg:flex items-center gap-space-xs absolute -bottom-5 left-10 bg-surface-container-lowest/95 backdrop-blur-md px-space-md py-space-xs rounded-full shadow-lg border-l-4 border-primary">
            <span className="material-symbols-outlined text-primary text-[18px]">
              bolt
            </span>
            <span className="font-label-sm text-label-sm text-on-surface font-semibold">
              Elasticsearch • Sub-Second Search (&lt;240ms)
            </span>
          </div>
          <div className="hidden lg:flex items-center gap-space-xs absolute -bottom-4 right-8 bg-surface-container-lowest/95 backdrop-blur-md px-space-md py-space-xs rounded-full shadow-lg border-l-4 border-primary-container">
            <span className="material-symbols-outlined text-primary text-[18px]">
              sync
            </span>
            <span className="font-label-sm text-label-sm text-on-surface font-semibold">
              Zero-Downtime Migration Ingestion: Active
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
