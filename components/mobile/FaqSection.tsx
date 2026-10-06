"use client";

import type { JSX } from "react";
import { useState } from "react";

const faqs = [
  {
    q: "Do we need two separate engineering teams for iOS and Android?",
    a: "No. By leveraging modern cross-platform engineering with React Native or Flutter, we write a single unified, type-safe codebase that compiles to native iOS and Android binary code. This saves 40%–50% of development and maintenance costs compared to maintaining two distinct Swift and Kotlin codebases, while still delivering 60fps native feel.",
  },
  {
    q: "How do you handle App Store and Google Play submissions and approvals?",
    a: "We handle the entire submission lifecycle end-to-end. We configure your Apple Developer Organization and Google Play Console accounts, set up cryptographic signing certificates, draft privacy manifest compliance sheets, record required demo videos for review teams, and handle review appeals. We guarantee store acceptance as part of our milestone delivery.",
  },
  {
    q: "Who owns the intellectual property and code?",
    a: "You do, 100%. Upon completion and sprint milestones, all source code, Figma design files, build pipelines, and production signing keys are transferred directly into your company's GitHub or GitLab organization. There are zero licensing hooks, no vendor lock-in, and zero royalty fees.",
  },
  {
    q: "Can the mobile app connect directly to our existing web database or ERP?",
    a: "Yes, seamlessly. Whether your backend is built on Postgres, MySQL, Supabase, Firebase, custom Node.js/Python microservices, or proprietary ERPs like SAP, NetSuite, or QuickBooks, we architect secure REST or GraphQL gateway endpoints with modern OAuth2 and offline-sync queues.",
  },
  {
    q: "What happens after launch? What is your warranty policy?",
    a: "Every NexusCraft mobile build comes backed by an explicit 30 to 90-day post-launch zero-bug warranty. If any bug or compliance issue arises related to the agreed specifications, we resolve it immediately at no cost to you. Afterwards, we offer lightweight SLA maintenance retainers or help onboard your internal team.",
  },
];

export default function FaqSection(): JSX.Element {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="w-full py-space-xl bg-surface-container-lowest">
      <div className="max-w-[960px] mx-auto px-margin-mobile md:px-gutter lg:px-margin">
        <div className="text-center mb-space-lg">
          <span className="font-label-sm text-label-sm text-primary uppercase tracking-wider font-semibold">
            Clear Answers
          </span>
          <h2 className="font-headline-lg text-headline-lg text-on-surface tracking-tight mt-1">
            Frequently Asked Questions
          </h2>
          <p className="font-body-md text-body-md text-on-surface-variant mt-2">
            Everything you need to know about code ownership, store approvals,
            and cross-platform architecture.
          </p>
        </div>
        <div className="space-y-space-sm" id="faq-accordion">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-surface-container-low"
            >
              <button
                type="button"
                className="faq-toggle w-full flex items-center justify-between text-left gap-space-sm cursor-pointer"
                onClick={() =>
                  setOpenIndex(openIndex === idx ? -1 : idx)
                }
              >
                <h3 className="font-headline-sm text-headline-sm text-on-surface font-semibold">
                  {faq.q}
                </h3>
                <span
                  className={`material-symbols-outlined text-on-surface-variant transform transition-transform duration-200 ${
                    openIndex === idx ? "rotate-180" : ""
                  }`}
                >
                  expand_more
                </span>
              </button>
              <div
                className={`faq-content pt-space-sm font-body-md text-body-md text-on-surface-variant leading-relaxed overflow-hidden transition-all duration-300 ${
                  openIndex === idx ? "max-h-96" : "max-h-0 opacity-0"
                }`}
              >
                {faq.a}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
