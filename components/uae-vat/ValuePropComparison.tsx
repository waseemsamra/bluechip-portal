import type { JSX } from "react";

export default function ValuePropComparison(): JSX.Element {
  return (
    <section className="w-full py-space-xl bg-surface-container-low">
      <div className="max-w-[1240px] mx-auto px-margin-mobile md:px-gutter lg:px-margin">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-space-xl items-center">
          <div>
            <span className="font-label-sm text-label-sm uppercase tracking-wider text-primary font-bold">
              The Engineering Difference
            </span>
            <h2 className="font-headline-xl text-headline-xl text-on-surface tracking-tight mt-1 mb-space-md">
              The Traditional IT Integrator Trap vs. The BlueChip Tech Fixed Sprint
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant mb-space-lg">
              Most Gulf regional software implementations stall in endless discovery phases with bloated retainers. We work exclusively on fixed-scope, fixed-fee deliverables with direct access to senior financial engineers.
            </p>

            <div className="space-y-space-md">
              <ComparisonCard
                icon="close"
                iconBg="bg-error-container"
                iconText="text-on-error-container"
                title="The Traditional Integrator Model"
                description="6-month discovery phases, billable hourly creep, junior offshore teams with no knowledge of UAE FTA Cabinet decisions, and crippling multi-year vendor lock-in."
                isNegative
              />
              <ComparisonCard
                icon="done_all"
                iconBg="bg-primary"
                iconText="text-on-primary"
                title="The BlueChip Tech Sprint Guarantee"
                description="Guaranteed fixed-fee scope, interactive prototypes running in Week 2, direct communication with principal tax systems architects, and 100% intellectual property & source code ownership."
              />
            </div>
          </div>

          <div className="bg-surface-container-lowest rounded-xl p-space-lg shadow-lg">
            <div className="flex items-center justify-between mb-space-md">
              <span className="font-headline-sm text-headline-sm text-on-surface">
                BlueChip Sprint Delivery SLAs
              </span>
              <span className="px-space-sm py-1 rounded-full bg-primary/10 text-primary font-label-sm text-label-sm uppercase font-bold">
                UAE Q3/Q4 ALLOCATION
              </span>
            </div>

            <div className="grid grid-cols-2 gap-space-md mb-space-lg">
              <MetricCard label="Time to Prototype" value="10 Days" subtext="Live working VAT staging environment" />
              <MetricCard label="FTA Audit Rate" value="100%" subtext="Full compliance on all audited clients" />
              <MetricCard label="Budget Variance" value="0.0%" subtext="Guaranteed fixed fee written in contract" />
              <MetricCard label="Source Code" value="100%" subtext="Full Git repo & DB ownership transfer" />
            </div>

            <div className="p-space-md bg-surface-container rounded-DEFAULT flex items-center justify-between">
              <div className="flex items-center gap-space-sm">
                <span className="material-symbols-outlined text-primary text-[20px]">verified</span>
                <span className="font-label-lg text-label-lg text-on-surface">
                  Protected by Comprehensive Mutual NDA
                </span>
              </div>
              <a
                className="text-primary font-label-lg text-label-lg hover:underline font-semibold"
                href="#scoping-call"
              >
                Start Discovery &rarr;
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

interface ComparisonCardProps {
  icon: string;
  iconBg: string;
  iconText: string;
  title: string;
  description: string;
  isNegative?: boolean;
}

function ComparisonCard({ icon, iconBg, iconText, title, description, isNegative }: ComparisonCardProps): JSX.Element {
  return (
    <div className="p-space-md bg-surface-container-lowest rounded-DEFAULT shadow-sm flex items-start gap-space-md">
      <div className={`w-10 h-10 rounded-full ${iconBg} ${iconText} flex items-center justify-center shrink-0`}>
        <span className="material-symbols-outlined text-[20px]">{icon}</span>
      </div>
      <div>
        <h4 className="font-headline-sm text-headline-sm text-on-surface">{title}</h4>
        <p className={`font-body-md text-body-md ${isNegative ? "text-on-surface-variant" : "text-on-surface-variant"} mt-1`}>
          {description}
        </p>
      </div>
    </div>
  );
}

interface MetricCardProps {
  label: string;
  value: string;
  subtext: string;
}

function MetricCard({ label, value, subtext }: MetricCardProps): JSX.Element {
  return (
    <div className="p-space-md bg-surface-container-low rounded-DEFAULT">
      <span className="font-label-sm text-label-sm text-on-surface-variant uppercase">
        {label}
      </span>
      <p className="font-headline-lg text-headline-lg text-primary mt-1">{value}</p>
      <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">{subtext}</p>
    </div>
  );
}
