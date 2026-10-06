import type { JSX } from "react";
import { capabilityCards } from "@/components/uae-vat/vatData";
import type { CapabilityCard } from "@/components/uae-vat/vatData";

export default function VatCapabilities(): JSX.Element {
  return (
    <section className="w-full py-space-xl bg-surface-container-low">
      <div className="max-w-[1240px] mx-auto px-margin-mobile md:px-gutter lg:px-margin">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-space-xl gap-space-md">
          <div>
            <span className="font-label-sm text-label-sm uppercase tracking-wider text-primary font-bold">Modular Architecture</span>
            <h2 className="font-headline-xl text-headline-xl text-on-surface tracking-tight mt-1">
              Engineered for UAE &amp; GCC Operational Reality
            </h2>
          </div>
          <p className="font-body-md text-body-md text-on-surface-variant">
            Every component is designed with native support for UAE VAT Executive Regulations, Cabinet decisions, and Ministry of Finance mandates.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-space-lg">
          {capabilityCards.map((card, index) => (
            <CapabilityCardComponent key={card.id} card={card} index={index + 1} />
          ))}
        </div>
      </div>
    </section>
  );
}

interface CapabilityCardProps {
  card: CapabilityCard;
  index: number;
}

function CapabilityCardComponent({ card }: CapabilityCardProps): JSX.Element {
  return (
    <div className="bg-surface-container-lowest rounded-lg p-space-lg shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
      <div>
        <div className="flex items-center justify-between gap-space-sm mb-space-md">
          <span className={`px-space-sm py-1 rounded-full bg-surface-container font-label-sm text-label-sm font-bold ${card.badgeColor}`}>
            {card.badge}
          </span>
          <span className="font-headline-sm text-headline-sm text-primary font-bold">{card.price}</span>
        </div>

        <h3 className="font-headline-md text-headline-md text-on-surface mb-space-sm">
          {card.title}
        </h3>

        <p className="font-body-md text-body-md text-on-surface-variant mb-space-md">
          {card.description}
        </p>

        <ul className="space-y-space-xs font-body-md text-body-md text-on-surface mb-space-md">
          {card.features.map((feature, idx) => (
            <li key={idx} className="flex items-start gap-2">
              <span className="material-symbols-outlined text-primary text-[18px] mt-0.5">
                {feature.icon}
              </span>
              <span className="text-on-surface">{feature.text}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="pt-space-md mt-space-md bg-surface-container-low -mx-space-lg -mb-space-lg px-space-lg py-space-sm rounded-b-lg flex items-center justify-between">
        <span className="font-label-sm text-label-sm text-on-surface-variant">
          Delivery: <strong>{card.timeline}</strong>
        </span>
        <span className="font-label-sm text-label-sm text-primary font-semibold">
          {card.stack}
        </span>
      </div>
    </div>
  );
}
