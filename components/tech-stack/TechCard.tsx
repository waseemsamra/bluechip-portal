import type { JSX } from "react";
import TechLogo from "./TechLogo";
import type { TechCard as TechCardType } from "./techStackData";

export interface TechCardProps {
  card: TechCardType;
  hidden?: boolean;
}

export default function TechCard({
  card,
  hidden,
}: TechCardProps): JSX.Element {
  const iconNode = card.logo ? (
    <TechLogo name={card.logo} alt={card.title} className="w-7 h-7" />
  ) : (
    <span className="material-symbols-outlined text-primary text-[26px]">
      {card.icon ?? "apps"}
    </span>
  );

  return (
    <div
      className={`tech-card bg-surface-container-lowest p-space-md rounded-lg shadow-sm hover:shadow-md transition-all flex flex-col justify-between gap-space-md group ${
        hidden ? "hidden" : "flex"
      }`}
      data-keywords={card.keywords}
    >
      <div className="flex flex-col gap-space-sm">
        <div className="flex items-start justify-between">
          <div className="w-12 h-12 rounded-DEFAULT bg-surface-container-low flex items-center justify-center">
            {iconNode}
          </div>
          <div className="flex flex-col items-end">
            <span
              className={`font-label-sm text-label-sm px-2 py-0.5 rounded-full font-bold ${card.versionBadgeClass}`}
            >
              {card.versionBadge}
            </span>
            <span className="font-body-sm text-body-sm text-on-surface-variant">
              {card.subtitle}
            </span>
          </div>
        </div>
        <div>
          <h3 className="font-headline-sm text-headline-sm text-on-surface group-hover:text-primary transition-colors">
            {card.title}
          </h3>
          <p className="font-body-sm text-body-sm text-on-surface-variant mt-1 leading-snug">
            {card.desc}
          </p>
        </div>
        <div className="flex flex-wrap gap-1.5 pt-1">
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
      <div className="flex items-center justify-between pt-space-xs bg-surface-container-low/50 -mx-space-md -mb-space-md p-space-md rounded-b-lg">
        <div className="flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-primary" />
          <span className="font-label-sm text-label-sm font-bold text-on-surface">
            P99 Score: {card.p99Score}
          </span>
        </div>
        <span
          className={`font-label-sm text-label-sm font-bold ${
            card.specClass ?? "text-primary"
          }`}
        >
          {card.spec}
        </span>
      </div>
    </div>
  );
}
