"use client";

import type { JSX } from "react";
import { useState } from "react";

const budgetOptions = [
  { value: "20-35", label: "$20,000 – $35,000 (Sprint MVP / Storefront)" },
  {
    value: "35-55",
    label: "$35,000 – $55,000 (Growth Portal & ERP Sync)",
    selected: true,
  },
  { value: "55-80", label: "$55,000 – $80,000 (Enterprise Multi-App Architecture)" },
  { value: "75plus", label: "$80,000+ (Custom Multi-Platform System)" },
];

export default function ConsultationForm(): JSX.Element {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1200);
  };

  if (isSubmitted) {
    return (
      <section
        className="w-full px-margin-mobile md:px-gutter lg:px-margin py-12 md:py-16 bg-surface-container-low"
        id="scoping-call"
      >
        <div className="max-w-[1280px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-5 flex flex-col gap-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary w-max font-label-sm text-label-sm font-bold">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                DIRECT ARCHITECT ACCESS
              </div>
              <h2 className="font-headline-xl text-headline-xl text-on-surface leading-tight">
                Book a 30-Min Technical Scoping Call
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant">
                Speak directly with a Senior Solutions Architect. No sales
                intermediaries, no vague pitches, and zero high-pressure
                tactics.
              </p>
              <div className="space-y-4 pt-2">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary text-on-primary flex items-center justify-center font-bold text-body-sm">
                    ✓
                  </div>
                  <div>
                    <span className="font-label-lg text-label-lg text-on-surface block font-bold">
                      48-Hour Fixed-Price Scope Guarantee
                    </span>
                    <span className="font-body-sm text-body-sm text-on-surface-variant">
                      We deliver a detailed sprint breakdown and firm flat-rate
                      price within 48 hours of our call.
                    </span>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary text-on-primary flex items-center justify-center font-bold text-body-sm">
                    ✓
                  </div>
                  <div>
                    <span className="font-label-lg text-label-lg text-on-surface block font-bold">
                      Pragmatic Tech Stack Evaluation
                    </span>
                    <span className="font-body-sm text-body-sm text-on-surface-variant">
                      Unbiased assessment of whether Shopify, OpenCart, or
                      Custom Next.js yields the highest ROI.
                    </span>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary text-on-primary flex items-center justify-center font-bold text-body-sm">
                    ✓
                  </div>
                  <div>
                    <span className="font-label-lg text-label-lg text-on-surface block font-bold">
                      Guaranteed Delivery SLA
                    </span>
                    <span className="font-body-sm text-body-sm text-on-surface-variant">
                      Fixed milestone commitments backed by contractual
                      delivery dates.
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
                <div className="hidden mt-3 p-3 rounded-xl bg-primary/10 text-primary font-label-sm text-label-sm text-center font-bold" id="formSuccess">
                  ✓ Request received! Redirecting you to our Solutions Architect calendar...
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section
      className="w-full px-margin-mobile md:px-gutter lg:px-margin py-12 md:py-16 bg-surface-container-low"
      id="scoping-call"
    >
      <div className="max-w-[1280px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary w-max font-label-sm text-label-sm font-bold">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
              DIRECT ARCHITECT ACCESS
            </div>
            <h2 className="font-headline-xl text-headline-xl text-on-surface leading-tight">
              Book a 30-Min Technical Scoping Call
            </h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant">
              Speak directly with a Senior Solutions Architect. No sales
              intermediaries, no vague pitches, and zero high-pressure tactics.
            </p>
            <div className="space-y-4 pt-2">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-primary text-on-primary flex items-center justify-center font-bold text-body-sm">
                  ✓
                </div>
                <div>
                  <span className="font-label-lg text-label-lg text-on-surface block font-bold">
                    48-Hour Fixed-Price Scope Guarantee
                  </span>
                  <span className="font-body-sm text-body-sm text-on-surface-variant">
                    We deliver a detailed sprint breakdown and firm flat-rate
                    price within 48 hours of our call.
                  </span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-primary text-on-primary flex items-center justify-center font-bold text-body-sm">
                  ✓
                </div>
                <div>
                  <span className="font-label-lg text-label-lg text-on-surface block font-bold">
                    Pragmatic Tech Stack Evaluation
                  </span>
                  <span className="font-body-sm text-body-sm text-on-surface-variant">
                    Unbiased assessment of whether Shopify, OpenCart, or Custom
                    Next.js yields the highest ROI.
                  </span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-primary text-on-primary flex items-center justify-center font-bold text-body-sm">
                  ✓
                </div>
                <div>
                  <span className="font-label-lg text-label-lg text-on-surface block font-bold">
                    Guaranteed Delivery SLA
                  </span>
                  <span className="font-body-sm text-body-sm text-on-surface-variant">
                    Fixed milestone commitments backed by contractual delivery
                    dates.
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
                className="space-y-4"
                id="scoping-form"
                onSubmit={handleSubmit}
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      className="font-label-sm text-label-sm text-on-surface-variant block mb-1"
                      htmlFor="contact-name"
                    >
                      Full Name *
                    </label>
                    <input
                      className="w-full px-4 py-3 rounded-full bg-surface-container-low text-on-surface placeholder:text-on-surface-variant/50 focus:outline-none focus:ring-2 focus:ring-primary text-body-md"
                      id="contact-name"
                      placeholder="Sarah Jenkins"
                      required
                      type="text"
                    />
                  </div>
                  <div>
                    <label
                      className="font-label-sm text-label-sm text-on-surface-variant block mb-1"
                      htmlFor="contact-email"
                    >
                      Work Email *
                    </label>
                    <input
                      className="w-full px-4 py-3 rounded-full bg-surface-container-low text-on-surface placeholder:text-on-surface-variant/50 focus:outline-none focus:ring-2 focus:ring-primary text-body-md"
                      id="contact-email"
                      placeholder="sarah@company.com"
                      required
                      type="email"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      className="font-label-sm text-label-sm text-on-surface-variant block mb-1"
                      htmlFor="contact-company"
                    >
                      Company &amp; Current URL *
                    </label>
                    <input
                      className="w-full px-4 py-3 rounded-full bg-surface-container-low text-on-surface placeholder:text-on-surface-variant/50 focus:outline-none focus:ring-2 focus:ring-primary text-body-md"
                      id="contact-company"
                      placeholder="Apex Distribution (apexgear.com)"
                      required
                      type="text"
                    />
                  </div>
                  <div>
                    <label
                      className="font-label-sm text-label-sm text-on-surface-variant block mb-1"
                      htmlFor="target-budget"
                    >
                      Estimated Budget Range *
                    </label>
                    <select
                      className="w-full px-4 py-3 rounded-full bg-surface-container-low text-on-surface focus:outline-none focus:ring-2 focus:ring-primary text-body-md"
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
                <div>
                  <label
                    className="font-label-sm text-label-sm text-on-surface-variant block mb-1"
                    htmlFor="app-details"
                  >
                    Briefly describe the mobile application you need built *
                  </label>
                  <textarea
                    className="w-full px-4 py-3 rounded-2xl bg-surface-container-low text-on-surface placeholder:text-on-surface-variant/50 focus:outline-none focus:ring-2 focus:ring-primary text-body-md resize-none"
                    id="app-details"
                    placeholder="We need an iOS & Android app for our 35 warehouse staff to scan incoming pallets..."
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
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
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
