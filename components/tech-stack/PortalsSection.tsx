"use client";

import { useTechStack } from "./TechStackContext";
import { portalsCards, type PortalCard } from "./techStackData";
import TechLogo from "./TechLogo";

export default function PortalsSection() {
  const { activeFilter } = useTechStack();
  const hidden = activeFilter !== "all" && activeFilter !== "portals";

  const renderLogo = (card: PortalCard) =>
    card.logo ? (
      <TechLogo name={card.logo} alt={card.title} className="w-6 h-6" />
    ) : (
      <span className="material-symbols-outlined text-primary text-[22px]">
        {card.icon}
      </span>
    );

  return (
    <section
      className="tech-category-section flex flex-col gap-space-md scroll-mt-[184px]"
      data-category="portals"
      id="section-portals"
      style={{ display: hidden ? "none" : "flex" }}
    >
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-space-xs pb-space-xs">
        <div>
          <div className="flex items-center gap-space-xs">
            <span className="font-label-sm text-label-sm text-primary uppercase font-bold tracking-wider">
              Enterprise Systems &amp; DXP
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-outline-variant"></span>
            <span className="font-label-sm text-label-sm text-on-surface-variant">
              Customized Governance
            </span>
          </div>
          <h2 className="font-headline-lg text-headline-lg text-on-surface">
            Web, Portals, CMS &amp; Commerce
          </h2>
        </div>
        <span className="font-label-sm text-label-sm px-space-sm py-1 rounded-full bg-surface-container font-semibold text-on-surface-variant shrink-0">
          Headless Architecture
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-space-md">
        {portalsCards.map((card) => (
          <div
            key={card.id}
            className="bg-surface-container-lowest p-space-md rounded-lg shadow-sm flex flex-col justify-between gap-space-sm group"
          >
            <div className="flex flex-col gap-space-xs">
              <div className="flex items-center justify-between">
                <span
                  className={`font-label-sm text-label-sm px-2.5 py-0.5 rounded-full font-bold ${card.badgeClass}`}
                >
                  {card.badge}
                </span>
                {renderLogo(card)}
              </div>
              <h3 className="font-headline-md text-headline-md text-on-surface group-hover:text-primary transition-colors">
                {card.title}
              </h3>
              <p className="font-body-md text-body-md text-on-surface-variant leading-snug">
                {card.desc}
              </p>
              <div className="flex flex-wrap gap-1.5 pt-2">
                {card.tags.map((tag) => (
                  <span
                    key={tag}
                    className="font-label-sm text-label-sm px-2 py-0.5 rounded-full bg-surface-container text-on-surface font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <div className="flex items-center justify-between pt-space-xs font-label-sm text-label-sm text-on-surface-variant">
              <span>{card.metricLeft}</span>
              <span className="text-primary font-bold">{card.metricRight}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
