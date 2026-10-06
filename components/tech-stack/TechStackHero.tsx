import type { JSX } from "react";
import { quickStats } from "./techStackData";

export default function TechStackHero(): JSX.Element {
  return (
    <div className="flex flex-col w-full">
      <div className="relative w-full overflow-hidden">
        <div className="absolute -top-36 left-1/2 -translate-x-1/2 w-[900px] h-[350px] bg-gradient-to-b from-primary-fixed/30 via-surface-container-high/40 to-transparent blur-3xl pointer-events-none rounded-full"></div>

        <div className="max-w-7xl mx-auto px-margin-mobile md:px-gutter lg:px-margin pt-space-lg pb-space-lg flex flex-col gap-space-md relative z-10">
          <div className="flex flex-wrap items-center justify-between gap-space-sm">
            <div className="inline-flex items-center gap-space-xs px-space-md py-space-xs rounded-full bg-surface-container-highest shadow-sm">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
              <span className="font-label-sm text-label-sm text-primary uppercase font-bold tracking-wider">
                Architectural Stack &amp; Tooling Index
              </span>
            </div>
            <div className="flex items-center gap-space-xs">
              <span className="font-label-sm text-label-sm text-on-surface-variant uppercase">
                Standard v4.8
              </span>
              <span className="font-label-sm text-label-sm text-primary font-bold px-space-xs py-0.5 rounded-full bg-primary/10">
                Active Production Set
              </span>
            </div>
          </div>

          <div className="max-w-4xl flex flex-col gap-space-xs">
            <h1 className="font-headline-xl text-headline-xl text-on-surface tracking-tight">
              Enterprise &amp; Modern SMB Technology Ecosystem
            </h1>
            <p className="font-body-xl text-body-xl text-on-surface-variant max-w-3xl leading-relaxed">
              Battle-tested frameworks, distributed databases, cloud-native DevOps
              pipelines, and AI-accelerated tooling. Every tool is selected for zero
              vendor lock-in, deterministic latency, and production reliability.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-space-sm pt-space-xs">
            {quickStats.map((stat) => (
              <div
                key={stat.label}
                className={`flex flex-col p-space-sm bg-surface-container-lowest rounded-DEFAULT shadow-sm ${
                  stat.icon ? "items-center text-center" : ""
                }`}
              >
                {stat.icon ? (
                  <div className="flex items-center gap-space-xs text-primary mb-1">
                    <span className="material-symbols-outlined text-[18px]">
                      {stat.icon}
                    </span>
                    <span className="font-label-sm text-label-sm font-bold uppercase tracking-wider">
                      {stat.value}
                    </span>
                  </div>
                ) : (
                  <span
                    className={`font-headline-md text-headline-md font-bold ${
                      stat.valueClass ?? "text-on-surface"
                    }`}
                  >
                    {stat.value}
                  </span>
                )}
                <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
