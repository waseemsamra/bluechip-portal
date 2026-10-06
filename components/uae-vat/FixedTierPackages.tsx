import type { JSX } from "react";
import { pricingTiers } from "@/components/uae-vat/vatData";

interface PricingTier {
  id: string;
  name: string;
  subtitle: string;
  description: string;
  price: string;
  timeline: string;
  features: string[];
  featured?: boolean;
}

export default function FixedTierPackages(): JSX.Element {
  return (
    <section className="w-full py-space-xl bg-surface-container-low" id="fixed-tiers">
      <div className="max-w-[1240px] mx-auto px-margin-mobile md:px-gutter lg:px-margin">
        <div className="text-center max-w-3xl mx-auto mb-space-xl">
          <span className="font-label-sm text-label-sm uppercase tracking-wider text-primary font-bold">
            Predictable Investment
          </span>
          <h2 className="font-headline-xl text-headline-xl text-on-surface tracking-tight mt-1 mb-space-sm">
            Fixed-Scope UAE Accounting &amp; ERP Tiers
          </h2>
          <p className="font-body-md text-body-md text-on-surface-variant">
            Guaranteed budget caps. No surprising monthly invoices. Every tier includes a dedicated Principal Systems Architect and formal FTA tax test harness.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-space-lg">
          {pricingTiers.map((tier) => (
            <PricingCard key={tier.id} tier={tier} />
          ))}
        </div>
      </div>
    </section>
  );
}

interface PricingCardProps {
  tier: PricingTier;
}

function PricingCard({ tier }: PricingCardProps): JSX.Element {
  const isFeatured = tier.featured;

  return (
    <div
      className={`rounded-lg p-space-lg shadow-sm flex flex-col justify-between ${
        isFeatured
          ? "bg-surface-container-lowest shadow-xl relative"
          : "bg-surface-container-lowest"
      }`}
    >
      {isFeatured && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-space-md py-1 rounded-full bg-primary text-on-primary font-label-sm text-label-sm uppercase tracking-wider font-bold shadow-md">
          Most Selected by UAE Enterprises
        </div>
      )}

      <div>
        <div className="mb-space-md">
          <span
            className={`font-label-sm text-label-sm uppercase tracking-wider ${
              isFeatured ? "text-primary" : "text-on-surface-variant"
            } font-bold`}
          >
            {tier.name}
          </span>
          <h3 className="font-headline-md text-headline-md text-on-surface mt-1">
            {tier.subtitle}
          </h3>
          <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
            {tier.description}
          </p>
        </div>

        <div
          className={`mb-space-lg pb-space-md p-space-md rounded-DEFAULT ${
            isFeatured
              ? "bg-primary/10"
              : "bg-surface-container-low"
          }`}
        >
          <span className="font-headline-xl text-headline-xl text-on-surface font-extrabold tracking-tight">
            {tier.price}
          </span>
          <p className="font-label-sm text-label-sm text-on-surface-variant mt-1">
            Timeline: <strong>{tier.timeline}</strong>
          </p>
        </div>

        <ul className="space-y-space-sm font-body-md text-body-md text-on-surface mb-space-lg">
          {tier.features.map((feature) => (
            <li key={feature} className="flex items-start gap-2">
              <span className="material-symbols-outlined text-primary text-[18px] mt-0.5">
                check_circle
              </span>
              <span className="text-on-surface">{feature}</span>
            </li>
          ))}
        </ul>
      </div>

      <a
        className={`w-full text-center py-space-sm px-space-md rounded-full font-label-lg text-label-lg transition-colors ${
          isFeatured
            ? "bg-primary hover:bg-primary-container text-on-primary shadow-md"
            : "bg-surface-container hover:bg-surface-container-high text-on-surface"
        }`}
        href="#scoping-call"
      >
        {isFeatured ? "Select Comprehensive ERP" : tier.id === "tier1" ? "Scope Rapid Sprint" : "Scope Enterprise OS"}
      </a>
    </div>
  );
}
