import type { JSX } from "react";
import TechLogo from "./TechLogo";
import { bottomConversion } from "./techStackData";

export default function BottomConversion(): JSX.Element {
  return (
    <div className="bg-gradient-to-r from-surface-container-high via-surface-container-low to-surface-container-lowest p-space-lg rounded-xl shadow-md flex flex-col md:flex-row items-center justify-between gap-space-md mt-space-md">
      <div className="flex flex-col gap-space-xs max-w-xl">
        <div className="inline-flex items-center gap-space-xs">
          <span className="w-2 h-2 rounded-full bg-primary"></span>
          <span className="font-label-sm text-label-sm text-primary uppercase font-bold tracking-wider">
            {bottomConversion.badge}
          </span>
        </div>
        <h3 className="font-headline-lg text-headline-lg text-on-surface">
          {bottomConversion.title}
        </h3>
        <p className="font-body-md text-body-md text-on-surface-variant">
          {bottomConversion.desc}
        </p>
      </div>
      <div className="flex flex-col sm:flex-row items-center gap-space-sm shrink-0 w-full md:w-auto">
        <a
          className="w-full sm:w-auto px-space-lg py-3 rounded-full bg-primary text-on-primary font-label-lg text-label-lg hover:bg-primary-container shadow-sm hover:shadow-md transition-all text-center"
          href="#contact"
        >
          {bottomConversion.primaryCTA}
        </a>
        <a
          className="w-full sm:w-auto px-space-lg py-3 rounded-full bg-surface-container text-on-surface font-label-lg text-label-lg hover:bg-surface-container-highest transition-all text-center flex items-center justify-center gap-1.5"
          href="#pdf-standards"
        >
          <TechLogo name="download-pdf" alt="Download PDF" className="w-5 h-5" />
          <span>{bottomConversion.secondaryCTA}</span>
        </a>
      </div>
    </div>
  );
}
