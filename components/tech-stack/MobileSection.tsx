"use client";

import { useTechStack } from "./TechStackContext";
import { mobileCards, type MobileCard } from "./techStackData";
import TechLogo from "./TechLogo";

export default function MobileSection() {
  const { activeFilter } = useTechStack();
  const hidden = activeFilter !== "all" && activeFilter !== "mobile";

  const renderLogo = (card: MobileCard) =>
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
      data-category="mobile"
      id="section-mobile"
      style={{ display: hidden ? "none" : "flex" }}
    >
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-space-xs pb-space-xs">
        <div>
          <div className="flex items-center gap-space-xs">
            <span className="font-label-sm text-label-sm text-primary uppercase font-bold tracking-wider">
              Cross-Platform &amp; Native
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-outline-variant"></span>
            <span className="font-label-sm text-label-sm text-on-surface-variant">
              60 FPS Smooth Renders
            </span>
          </div>
          <h2 className="font-headline-lg text-headline-lg text-on-surface">
            Mobile Engineering &amp; Native Apps
          </h2>
        </div>
        <span className="font-label-sm text-label-sm px-space-sm py-1 rounded-full bg-surface-container font-semibold text-on-surface-variant shrink-0">
          iOS &amp; Android Unified
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-space-md">
        {mobileCards.map((card) => (
          <div
            key={card.id}
            className="bg-surface-container-lowest p-space-md rounded-lg shadow-sm flex flex-col justify-between gap-space-sm"
          >
            <div className="flex flex-col gap-space-xs">
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
              <p className="font-body-sm text-body-sm text-on-surface-variant">
                {card.desc}
              </p>
              <div className="flex flex-wrap gap-1 pt-1">
                {card.tags.map((tag) => (
                  <span
                    key={tag}
                    className="font-label-sm text-label-sm px-2 py-0.5 rounded-full bg-surface-container text-on-surface"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <span
              className={`font-label-sm text-label-sm font-semibold ${
                card.footerClass ?? "text-on-surface"
              }`}
            >
              {card.footer}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
