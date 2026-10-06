"use client";

import { useTechStack } from "./TechStackContext";
import {
  growthCards,
  type GrowthCard,
} from "./techStackData";
import TechLogo from "./TechLogo";

export default function GrowthSection() {
  const { activeFilter } = useTechStack();
  const hidden = activeFilter !== "all" && activeFilter !== "growth";

  const renderLogo = (card: GrowthCard) =>
    card.logo ? (
      <TechLogo name={card.logo} alt={card.title} className="w-7 h-7" />
    ) : (
      <span className="material-symbols-outlined text-primary text-[28px]">
        {card.icon}
      </span>
    );

  return (
    <section
      className="tech-category-section flex flex-col gap-space-md scroll-mt-[184px]"
      data-category="growth"
      id="section-growth"
      style={{ display: hidden ? "none" : "flex" }}
    >
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-space-xs pb-space-xs">
        <div>
          <div className="flex items-center gap-space-xs">
            <span className="font-label-sm text-label-sm text-primary uppercase font-bold tracking-wider">
              Conversion Engineering
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-outline-variant"></span>
            <span className="font-label-sm text-label-sm text-on-surface-variant">
              Cookieless Event Resilience
            </span>
          </div>
          <h2 className="font-headline-lg text-headline-lg text-on-surface">
            Growth &amp; Server-Side Event Pipelines
          </h2>
        </div>
        <span className="font-label-sm text-label-sm px-space-sm py-1 rounded-full bg-surface-container font-semibold text-on-surface-variant shrink-0">
          iOS 14.5+ Immune
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-space-md">
        {growthCards.map((card) => (
          <div
            key={card.id}
            className="bg-surface-container-lowest p-space-md rounded-lg shadow-sm flex flex-col gap-space-sm"
          >
            <div className="flex items-center justify-between">
              {renderLogo(card)}
              <span
                className={`font-label-sm text-label-sm px-2 py-0.5 rounded-full font-bold ${card.badgeClass}`}
              >
                {card.badge}
              </span>
            </div>
            <h3 className="font-headline-sm text-headline-sm text-on-surface">
              {card.title}
            </h3>
            <p className="font-body-md text-body-md text-on-surface-variant">
              {card.desc}
            </p>
            <div className="p-space-xs rounded-DEFAULT bg-surface-container-low flex items-center justify-between text-body-sm font-body-sm">
              <span className="text-on-surface-variant">{card.metricLeft}</span>
              <span
                className={`font-bold ${
                  card.rightClass ?? "text-primary"
                }`}
              >
                {card.metricRight}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
