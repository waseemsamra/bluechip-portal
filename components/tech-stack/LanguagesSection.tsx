"use client";

import { useTechStack } from "./TechStackContext";
import { languagesCards, type TechCard as TechCardType } from "./techStackData";
import TechCard from "./TechCard";

function cardSearchText(c: TechCardType): string {
  return [
    c.title,
    c.subtitle,
    c.desc,
    ...c.tags,
    c.versionBadge,
    c.spec,
    `P99 Score: ${c.p99Score}`,
    c.keywords,
  ]
    .join(" ")
    .toLowerCase();
}

export default function LanguagesSection() {
  const { activeFilter, searchTerm } = useTechStack();
  const hidden = activeFilter !== "all" && activeFilter !== "languages";

  return (
    <section
      className="tech-category-section flex flex-col gap-space-md scroll-mt-[184px]"
      data-category="languages"
      id="section-languages"
      style={{ display: hidden ? "none" : "flex" }}
    >
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-space-xs pb-space-xs">
        <div>
          <div className="flex items-center gap-space-xs">
            <span className="font-label-sm text-label-sm text-primary uppercase font-bold tracking-wider">
              Frontend &amp; Application Cores
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-outline-variant"></span>
            <span className="font-label-sm text-label-sm text-on-surface-variant">
              Primary Production Engines
            </span>
          </div>
          <h2 className="font-headline-lg text-headline-lg text-on-surface">
            Modern Development Languages &amp; Frameworks
          </h2>
        </div>
        <span className="font-label-sm text-label-sm px-space-sm py-1 rounded-full bg-surface-container font-semibold text-on-surface-variant shrink-0">
          {languagesCards.length} Certified Frameworks
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-space-md">
        {languagesCards.map((card) => {
          const matches =
            !searchTerm || cardSearchText(card).includes(searchTerm.toLowerCase());
          return (
            <TechCard key={card.id} card={card} hidden={!matches} />
          );
        })}
      </div>
    </section>
  );
}
