import type { JSX } from "react";
import { caseStudies } from "@/components/uae-vat/vatData";

export default function CaseStudies(): JSX.Element {
  return (
    <section className="w-full py-space-xl bg-surface">
      <div className="max-w-[1240px] mx-auto px-margin-mobile md:px-gutter lg:px-margin">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-space-xl gap-space-md">
          <div>
            <span className="font-label-sm text-label-sm uppercase tracking-wider text-primary font-bold">
              Proof of Execution
            </span>
            <h2 className="font-headline-xl text-headline-xl text-on-surface tracking-tight mt-1">
              Verified UAE Client Case Studies ($26k–$58k)
            </h2>
          </div>
          <p className="font-body-md text-body-md text-on-surface-variant max-w-md">
            Real numbers, actual timelines, and concrete technical solutions delivered for UAE businesses across trade, logistics, and healthcare.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-space-lg">
          {caseStudies.map((study) => (
            <CaseStudyCard key={study.id} study={study} />
          ))}
        </div>
      </div>
    </section>
  );
}

import { CaseStudy } from "@/components/uae-vat/vatData";

interface CaseStudyCardProps {
  study: CaseStudy;
}

function CaseStudyCard({ study }: CaseStudyCardProps): JSX.Element {
  return (
    <div className="bg-surface-container-lowest rounded-lg p-space-lg shadow-sm flex flex-col justify-between">
      <div>
        <div className="flex items-center justify-between mb-space-sm">
          <span className="px-space-sm py-1 rounded-full bg-surface-container text-on-surface-variant font-label-sm text-label-sm font-semibold">
            {study.location}
          </span>
          <span className="font-label-sm text-label-sm text-primary font-bold">
            {study.price}
          </span>
        </div>

        <h3 className="font-headline-sm text-headline-sm text-on-surface mb-space-xs">
          {study.title}
        </h3>

        <p className="font-body-sm text-body-sm text-on-surface-variant mb-space-md">
          {study.description}
        </p>

        <div className="space-y-space-xs mb-space-md p-space-sm bg-surface-container-low rounded-DEFAULT">
          {study.metrics.map((metric) => (
            <div key={metric.label} className="flex justify-between font-label-sm text-label-sm">
              <span className="text-on-surface-variant">{metric.label}</span>
              <span className="font-bold text-primary">{metric.value}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="text-on-surface-variant font-body-sm text-body-sm italic">
        {study.testimonial}
      </div>
    </div>
  );
}
