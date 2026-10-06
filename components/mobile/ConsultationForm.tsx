"use client";

import type { JSX } from "react";
import { useState } from "react";

const budgetOptions = [
  { value: "20-35", label: "$20,000 – $35,000 (MVP Launch Sprint)" },
  { value: "35-55", label: "$35,000 – $55,000 (Growth Platform & Offline Sync)" },
  { value: "55-75", label: "$55,000 – $75,000 (Complex Architecture & Hardware)" },
  { value: "75plus", label: "$75,000+ (Multi-Platform Enterprise Ecosystem)" },
];

export default function ConsultationForm(): JSX.Element {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      window.location.href = "https://calendly.com/nexuscraft/30min";
    }, 1500);
  };

  return (
    <section
      className="w-full py-space-xl bg-surface"
      id="scoping-consultation"
    >
      <div className="max-w-[1280px] mx-auto px-margin-mobile md:px-gutter lg:px-margin">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-start">
          <div className="lg:col-span-5 flex flex-col gap-space-md">
            <div className="inline-flex items-center gap-space-xs self-start px-space-md py-space-xs rounded-full bg-primary/10 text-primary font-label-sm text-label-sm font-semibold uppercase">
              Direct Architect Access
            </div>
            <h2 className="font-headline-xl text-headline-xl text-on-surface tracking-tight leading-tight">
              Book a 30-Minute Technical Scoping Call
            </h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
              You will speak directly with a Principal Mobile Architect who has
              shipped apps with millions of downloads—never a commissioned
              salesperson or junior account rep.
            </p>
            <div className="space-y-space-md pt-space-xs">
              <div className="flex items-start gap-3">
                <span className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-[18px]">
                    edit_document
                  </span>
                </span>
                <div>
                  <span className="font-headline-sm text-headline-sm text-on-surface block">
                    Pre-Call Mutual NDA
                  </span>
                  <span className="text-body-sm text-on-surface-variant">
                    We treat your proprietary workflows, business logic, and
                    customer data with institutional confidentiality.
                  </span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-[18px]">
                    price_check
                  </span>
                </span>
                <div>
                  <span className="font-headline-sm text-headline-sm text-on-surface block">
                    Binding 48-Hour Fixed Quote
                  </span>
                  <span className="text-body-sm text-on-surface-variant">
                    Receive a detailed breakdown of sprints, timeline
                    milestones, and exact fixed cost ($20k–$75k).
                  </span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-[18px]">
                    alt_route
                  </span>
                </span>
                <div>
                  <span className="font-headline-sm text-headline-sm text-on-surface block">
                    Architectural Pragmatism
                  </span>
                  <span className="text-body-sm text-on-surface-variant">
                    If an existing web or low-code wrapper solves your problem
                    cheaper, we will openly tell you.
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:col-span-7">
            <div className="p-8 md:p-10 rounded-3xl bg-surface-container-lowest shadow-xl">
              <h3 className="font-headline-lg text-headline-lg text-on-surface mb-2">
                Technical Project Intake
              </h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant mb-6">
                Fill in your preliminary requirements to prepare your architect
                prior to the call.
              </p>
              <form
                className="flex flex-col gap-space-md"
                id="scoping-form"
                onSubmit={handleSubmit}
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-md">
                  <div className="flex flex-col gap-1.5">
                    <label
                      className="font-label-lg text-label-lg text-on-surface"
                      htmlFor="contact-name"
                    >
                      Your Name *
                    </label>
                    <input
                      className="w-full px-space-md py-space-sm rounded-full bg-surface-container-low text-on-surface focus:outline-none focus:ring-2 focus:ring-primary font-body-md text-body-md"
                      id="contact-name"
                      placeholder="Sarah Jenkins"
                      required
                      type="text"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label
                      className="font-label-lg text-label-lg text-on-surface"
                      htmlFor="contact-email"
                    >
                      Work Email *
                    </label>
                    <input
                      className="w-full px-space-md py-space-sm rounded-full bg-surface-container-low text-on-surface focus:outline-none focus:ring-2 focus:ring-primary font-body-md text-body-md"
                      id="contact-email"
                      placeholder="s.jenkins@company.com"
                      required
                      type="email"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-md">
                  <div className="flex flex-col gap-1.5">
                    <label
                      className="font-label-lg text-label-lg text-on-surface"
                      htmlFor="contact-company"
                    >
                      Company / Venture Name *
                    </label>
                    <input
                      className="w-full px-space-md py-space-sm rounded-full bg-surface-container-low text-on-surface focus:outline-none focus:ring-2 focus:ring-primary font-body-md text-body-md"
                      id="contact-company"
                      placeholder="Apex Logistics Partners"
                      required
                      type="text"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label
                      className="font-label-lg text-label-lg text-on-surface"
                      htmlFor="target-budget"
                    >
                      Target Budget Envelope *
                    </label>
                    <select
                      className="w-full px-space-md py-space-sm rounded-full bg-surface-container-low text-on-surface focus:outline-none focus:ring-2 focus:ring-primary font-body-md text-body-md"
                      id="target-budget"
                      defaultValue="35-55"
                    >
                      {budgetOptions.map((opt) => (
                        <option key={opt.value} value={opt.value}>
                          {opt.label}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                <div className="flex flex-col gap-1.5">
                  <label
                    className="font-label-lg text-label-lg text-on-surface"
                    htmlFor="app-details"
                  >
                    Briefly describe the mobile application you need built *
                  </label>
                  <textarea
                    className="w-full px-space-md py-space-sm rounded-2xl bg-surface-container-low text-on-surface focus:outline-none focus:ring-2 focus:ring-primary font-body-md text-body-md resize-none"
                    id="app-details"
                    placeholder="We need an iOS & Android app for our 35 warehouse staff to scan incoming pallets, verify barcodes against our SQL server, and work completely offline when in deep storage bays..."
                    rows={3}
                    required
                  ></textarea>
                </div>
                <div className="flex flex-col sm:flex-row items-center justify-between gap-space-sm pt-space-xs">
                  <div className="flex items-center gap-2 text-on-surface-variant font-body-sm text-body-sm">
                    <span className="material-symbols-outlined text-primary text-[18px]">
                      lock
                    </span>
                    Protected by Mutual NDA Guarantee
                  </div>
                  <button
                    className="w-full sm:w-auto px-space-lg py-space-sm rounded-full bg-primary hover:bg-primary-container text-on-primary font-label-lg text-label-lg transition-all shadow-[0_4px_14px_rgba(0,105,72,0.3)]"
                    type="submit"
                    disabled={isSubmitted}
                  >
                    {isSubmitted ? (
                      <span className="flex items-center gap-2">
                        <span className="animate-spin">
                          <span className="material-symbols-outlined text-[18px]">
                            progress_activity
                          </span>
                        </span>
                        Redirecting...
                      </span>
                    ) : (
                      "Submit &amp; Pick 30-Min Call"
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
