import type { JSX } from "react";
import { Project } from "@/components/work/projectData";

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
}

export default function ProjectModal({ project: p, onClose }: ProjectModalProps): JSX.Element {
  return (
    <div
      className="fixed inset-0 z-50 bg-on-surface/40 backdrop-blur-sm flex items-center justify-center p-space-sm md:p-space-md"
      onClick={onClose}
    >
      <div
        className="w-full max-w-xl bg-surface-container-lowest rounded-lg shadow-2xl p-space-lg space-y-space-md max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between pb-space-xs border-b border-surface-container">
          <div>
            <span className="font-label-sm text-label-sm text-primary uppercase font-bold">Case Study Specification</span>
            <h3 className="font-headline-md text-headline-md text-on-surface mt-0.5">{p.title}</h3>
          </div>
          <button
            className="w-8 h-8 rounded-full bg-surface-container flex items-center justify-center text-on-surface hover:bg-surface-container-high"
            onClick={onClose}
          >
            <span className="material-symbols-outlined text-[20px]">close</span>
          </button>
        </div>

        <div className="grid grid-cols-2 gap-space-sm bg-surface-container-low p-space-md rounded-DEFAULT">
          <div>
            <span className="font-label-sm text-label-sm text-on-surface-variant block uppercase">Guaranteed Budget</span>
            <span className="font-headline-sm text-headline-sm text-primary font-bold">{p.budget}</span>
          </div>
          <div>
            <span className="font-label-sm text-label-sm text-on-surface-variant block uppercase">Time to Staging</span>
            <span className="font-headline-sm text-headline-sm text-on-surface font-bold">{p.weeks}</span>
          </div>
        </div>

        <div>
          <h4 className="font-label-lg text-label-lg text-on-surface font-bold mb-1">Production Architecture &amp; Stack</h4>
          <p className="font-body-md text-body-md text-on-surface-variant">{p.tags.join(", ")}</p>
        </div>

        <div>
          <h4 className="font-label-lg text-label-lg text-on-surface font-bold mb-1">Problem &amp; Impact Solved</h4>
          <p className="font-body-md text-body-md text-on-surface-variant">{p.impact}</p>
        </div>

        <div className="pt-space-sm flex items-center justify-end gap-space-sm">
          <button
            className="px-space-md py-2 rounded-full bg-surface-container text-on-surface font-label-sm text-label-sm font-semibold"
            onClick={onClose}
          >
            Close Specs
          </button>
          <a
            className="px-space-md py-2 rounded-full bg-primary text-on-primary font-label-sm text-label-sm font-bold shadow-sm"
            href="#quick-scoping"
            onClick={onClose}
          >
            Build Similar App
          </a>
        </div>
      </div>
    </div>
  );
}
