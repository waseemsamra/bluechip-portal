import type { JSX } from "react";
import { SpotlightCase } from "@/components/work/projectData";

interface SpotlightCardProps {
  case: SpotlightCase;
}

export default function SpotlightCard({ case: c }: SpotlightCardProps): JSX.Element {
  return (
    <div className="group flex flex-col rounded-lg bg-surface-container-lowest overflow-hidden shadow-[0_4px_24px_rgba(11,28,48,0.05)] transition-all duration-300 hover:-translate-y-1">
      <div className="relative h-64 overflow-hidden bg-surface-container">
        <img
          alt={c.imageAlt}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          src={c.image}
        />
        <div className="absolute top-space-sm left-space-sm flex gap-space-xs">
          <span className="px-space-sm py-1 rounded-full bg-surface/90 backdrop-blur-md font-label-sm text-label-sm text-on-surface font-semibold">
            {c.industry}
          </span>
        </div>
        <div className="absolute bottom-space-sm right-space-sm">
          <span className="px-space-sm py-1 rounded-full bg-primary text-on-primary font-label-sm text-label-sm font-bold shadow-md">
            {c.price} • {c.weeks}
          </span>
        </div>
      </div>

      <div className="p-space-lg flex flex-col flex-1">
        <div className="flex items-center justify-between gap-space-xs mb-space-xs">
          <h3 className="font-headline-md text-headline-md text-on-surface group-hover:text-primary transition-colors">
            {c.title}
          </h3>
          <span className="material-symbols-outlined text-on-surface-variant text-[20px]">{c.icon}</span>
        </div>

        <p className="font-body-md text-body-md text-on-surface-variant mb-space-md flex-1">
          {c.description}
        </p>

        <div className="bg-surface-container-low p-space-sm rounded-DEFAULT mb-space-md">
          <div className="flex items-center gap-space-xs text-primary font-label-sm text-label-sm font-bold">
            <span className="material-symbols-outlined text-[16px]">trending_up</span>
            <span>KEY IMPACT: {c.impact}</span>
          </div>
        </div>

        <div className="flex flex-wrap gap-1.5 pt-space-xs">
          {c.tags.map((tag) => (
            <span
              key={tag}
              className="px-2.5 py-1 rounded-full bg-surface-container text-on-surface-variant font-label-sm text-label-sm"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
