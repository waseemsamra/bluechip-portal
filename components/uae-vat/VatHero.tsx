import type { JSX } from "react";
import { trustTickerItems } from "@/components/uae-vat/vatData";
import TelemetryBadge from "@/components/uae-vat/TelemetryBadge";

export default function VatHero(): JSX.Element {
  return (
    <>
      <div className="w-full bg-surface-container-high text-on-surface-variant py-2.5 px-margin-mobile md:px-gutter lg:px-margin text-center">
        <div className="max-w-[1240px] mx-auto flex flex-wrap items-center justify-center gap-x-space-md gap-y-1 font-label-sm text-label-sm uppercase tracking-wider">
          {trustTickerItems.map((item, idx) => (
            <span key={idx} className="inline-flex items-center gap-1">
              {idx > 0 && <span className="text-outline-variant">•</span>}
              {item.text}
              {item.isPrimary && <span className="w-2 h-2 rounded-full bg-primary animate-ping ml-1" />}
            </span>
          ))}
        </div>
      </div>

      <section className="relative w-full overflow-hidden bg-surface py-space-xl">
        <div className="max-w-[1240px] mx-auto px-margin-mobile md:px-gutter lg:px-margin">
          <div className="max-w-4xl mb-space-lg">
            <div className="inline-flex items-center gap-space-xs px-space-md py-1.5 rounded-full bg-surface-container text-primary font-label-sm text-label-sm uppercase mb-space-md shadow-sm">
              <span className="material-symbols-outlined text-primary text-[18px]">verified</span>
              Federal Tax Authority (FTA) Compliant Engineering
            </div>

            <h1 className="font-display-hero text-display-hero text-on-surface mb-space-md tracking-tight">
              UAE VAT &amp; Corporate Tax Compliant Systems{" "}
              <span className="text-primary underline decoration-primary-fixed-dim decoration-4 underline-offset-8">
                Without Enterprise Bloat.
              </span>
            </h1>

            <p className="font-body-xl text-body-xl text-on-surface-variant max-w-3xl mb-space-lg">
              Custom cloud accounting engines, regional ERP localizations, and automated FTA e-Invoicing (XML/UBL 2.1 &amp; Cryptographic QR) engineered specifically for UAE mainland and free zone enterprises. Replace fragile Excel sheets and rigid legacy software with guaranteed fixed-fee sprints ($20k–$70k).
            </p>

            <div className="flex flex-wrap items-center gap-space-md mb-space-lg">
              <a
                className="inline-flex items-center gap-space-xs px-space-lg py-space-sm rounded-full bg-primary hover:bg-primary-container text-on-primary font-label-lg text-label-lg transition-all shadow-glow"
                href="#fixed-tiers"
              >
                <span>Explore Fixed-Price Sprints ($20k – $70k)</span>
                <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
              </a>
              <a
                className="inline-flex items-center gap-space-xs px-space-lg py-space-sm rounded-full bg-surface-container hover:bg-surface-container-high text-on-surface font-label-lg text-label-lg transition-all shadow-sm"
                href="#scoping-call"
              >
                <span className="material-symbols-outlined text-primary text-[20px]">calendar_today</span>
                <span>Book a 30-Min FTA Scoping Call</span>
              </a>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-space-sm pt-space-xs">
              <TrustSignal icon="verified_user" text="100% FTA Audit-Ready (5-Yr Retention)" />
              <TrustSignal icon="qr_code_2" text="Phase 1 & 2 E-Invoicing Ready" />
              <TrustSignal icon="currency_exchange" text="Multi-Currency (AED, SAR, USD, EUR)" />
              <TrustSignal icon="hub" text="Odoo, ERPNext, NetSuite & Next.js" />
            </div>
          </div>

          <div className="relative w-full rounded-xl overflow-hidden shadow-2xl bg-surface-container-lowest p-2 md:p-4">
            <div className="relative w-full rounded-lg overflow-hidden bg-on-background aspect-[16/9] max-h-[640px]">
              <img
                alt="High quality photograph of a modern office desk showing a high-resolution Dell desktop monitor running BlueChip Tech UAE VAT & E-Invoicing Cloud ERP dashboard. Screen displays VAT return reconciliation, live e-invoicing FATOORA QR codes, Form 201 breakdowns, in a bright corporate Dubai tech office setting."
                className="w-full h-full object-cover object-center brightness-95"
                src="/images/uae-vat/hero-dashboard.jpg"
              />

              <TelemetryBadge icon="lock_clock" title="Live Engine" subtitle="FATOORA E-Invoicing: Encrypted" position="top-left" />
              <TelemetryBadge icon="fact_check" title="FTA Form 201" subtitle="Auto-Reconciled • 100% Passed" position="top-right" isPrimary />
              <TelemetryBadge icon="domain_verification" title="Zone Architecture" subtitle="Designated vs Mainland Rules Active" position="bottom-left" />
              <TelemetryBadge icon="percent" title="Corporate Tax Readiness" subtitle="9% AED 375k Threshold Tracked" position="bottom-right" isPrimary />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function TrustSignal({ icon, text }: { icon: string; text: string }): JSX.Element {
  return (
    <div className="flex items-center gap-2 p-space-sm bg-surface-container-lowest rounded-DEFAULT shadow-sm">
      <span className="material-symbols-outlined text-primary text-[20px]">{icon}</span>
      <span className="font-label-sm text-label-sm text-on-surface font-medium">{text}</span>
    </div>
  );
}
