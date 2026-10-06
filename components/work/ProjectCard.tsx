import type { JSX } from "react";
import { Project } from "@/components/work/projectData";

interface ProjectCardProps {
  project: Project;
  onSpecClick: () => void;
}

export default function ProjectCard({ project: p, onSpecClick }: ProjectCardProps): JSX.Element {
  return (
    <div
      className="group flex flex-col justify-between p-space-lg rounded-lg bg-surface-container-lowest shadow-[0_2px_12px_rgba(11,28,48,0.03)] hover:shadow-[0_12px_32px_rgba(11,28,48,0.08)] transition-all duration-300 hover:-translate-y-1"
      data-budget={p.budgetTier}
      data-industry={p.industry}
      data-keywords={p.keywords}
      data-stack={p.stack}
      data-type={p.appType}
    >
      <div>
        <div className="flex items-center justify-between gap-2 mb-space-sm">
          <span className="px-2.5 py-1 rounded-full bg-surface-container text-primary font-label-sm text-label-sm font-bold uppercase tracking-wider">
            {p.industry.charAt(0).toUpperCase() + p.industry.slice(1)}
          </span>
          <span className="font-label-sm text-label-sm text-on-surface-variant font-semibold">
            {p.subtitle}
          </span>
        </div>

        <h3 className="font-headline-sm text-headline-sm text-on-surface group-hover:text-primary transition-colors">
          {p.title}
        </h3>

        <p className="font-body-sm text-body-sm text-on-surface-variant mt-1.5 mb-space-md">
          {p.description}
        </p>

        <div className="flex items-center gap-1.5 p-2 rounded-DEFAULT bg-surface-container-low text-primary font-label-sm text-label-sm font-semibold mb-space-md">
          <span className="material-symbols-outlined text-[16px]">{p.icon}</span>
          <span>{p.impact}</span>
        </div>
      </div>

      <div>
        <div className="flex flex-wrap gap-1 mb-space-md">
          {p.tags.map((tag) => (
            <span
              key={tag}
              className="px-2 py-0.5 rounded bg-surface text-on-surface-variant font-body-sm text-[11px]"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="flex items-center justify-between pt-space-xs bg-surface-container-low/50 px-space-sm py-2 rounded-DEFAULT">
          <span className="font-headline-sm text-headline-sm text-on-surface font-bold">
            {p.budget}{" "}
            <span className="font-body-sm text-body-sm text-on-surface-variant font-normal">• {p.weeks}</span>
          </span>
          <button
            className="font-label-sm text-label-sm text-primary font-bold hover:underline flex items-center gap-0.5"
            onClick={onSpecClick}
          >
            Specs{" "}
            <span className="material-symbols-outlined text-[14px]">chevron_right</span>
          </button>
        </div>
      </div>
    </div>
  );
}
