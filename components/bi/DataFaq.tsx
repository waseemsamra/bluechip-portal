"use client";

import type { JSX } from "react";
import { useState } from "react";

const faqs = [
  {
    q: "Why do you recommend BigQuery or analytical Postgres over Snowflake for SMBs?",
    a: "Snowflake is excellent for massive Fortune 500 teams, but its warehouse credits frequently surprise SMBs with $800 to $2,500/month minimum commitments. Google BigQuery's serverless model charges strictly per query, meaning our SMB clients routinely spend under $40/month on cloud infrastructure while achieving sub-second speed.",
  },
  {
    q: "Will our non-technical team be able to operate this after you finish?",
    a: "Yes, 100%. We design the delivery specifically so that non-technical founders, COOs, and marketing directors can build their own drill-downs in Metabase using point-and-click graphical query builders. We deliver Loom video documentation and full ownership runbooks upon handoff.",
  },
  {
    q: "What happens if a third-party API changes or an ingestion job breaks?",
    a: "Every sprint includes our 30-to-60-day post-launch engineering guarantee. All pipelines feature automated failure notifications routed directly to Slack or email. Because we use standard Airbyte and dbt protocols, maintenance is minimal and requires zero proprietary vendor hooks.",
  },
  {
    q: "How does your fixed-fee billing work?",
    a: "We do not charge hourly billable rates that balloon out of control. We define an exact scope of data sources, schemas, models, and dashboard views up front, assign a binding milestone contract ($20k–$60k), and deliver within 4 to 8 weeks.",
  },
];

export default function DataFaq(): JSX.Element {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="w-full max-w-[1440px] mx-auto px-margin-mobile md:px-gutter lg:px-margin pt-space-xl pb-space-xl">
      <div className="text-center max-w-2xl mx-auto mb-space-lg">
        <span className="font-label-sm text-label-sm text-primary uppercase tracking-wider">
          Clear Answers
        </span>
        <h2 className="font-headline-xl text-headline-xl-mobile md:text-headline-xl text-on-surface mt-space-xs">
          Data Warehousing FAQ for Growing SMBs
        </h2>
      </div>
      <div className="max-w-3xl mx-auto space-y-space-xs">
        {faqs.map((faq, idx) => {
          const isOpen = openIndex === idx;
          return (
            <div
              key={faq.q}
              className="bg-surface-container-lowest rounded-lg p-space-md shadow-sm"
            >
              <button
                type="button"
                onClick={() => setOpenIndex(isOpen ? null : idx)}
                className="w-full flex items-center justify-between text-left font-headline-sm text-headline-sm text-on-surface cursor-pointer"
              >
                {faq.q}
                <span
                  className={`material-symbols-outlined text-primary text-[20px] transition-transform duration-200 ml-2 ${isOpen ? "rotate-180" : ""}`}
                >
                  expand_more
                </span>
              </button>
              {isOpen && (
                <p className="font-body-md text-body-md text-on-surface-variant mt-space-xs">
                  {faq.a}
                </p>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
