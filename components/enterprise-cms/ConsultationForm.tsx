"use client";

import type { JSX } from "react";
import { useState } from "react";

export default function ConsultationForm(): JSX.Element {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <section
      className="w-full py-space-xl bg-surface"
      id="scoping-intake"
    >
      <div className="max-w-[1280px] mx-auto px-margin-mobile md:px-gutter lg:px-margin">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-space-lg">
            <span className="font-label-sm text-label-sm text-primary uppercase tracking-widest font-bold block mb-space-xs">
              Direct Engagement
            </span>
            <h2 className="font-headline-xl text-headline-xl text-on-surface tracking-tight mb-space-xs">
              Book a 30-Minute Technical Scoping Call
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant">
              Speak directly with a Principal CMS &amp; Portal Architect. Zero
              account managers, zero sales pitch decks.
            </p>
          </div>
          <div className="bg-surface-container-lowest p-space-lg md:p-space-xl rounded-lg shadow-xl">
            {isSubmitted ? (
              <div className="text-center py-8">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <span className="material-symbols-outlined text-[32px] text-primary">
                    check_circle
                  </span>
                </div>
                <h3 className="font-headline-lg text-headline-lg text-on-surface mb-2">
                  Scoping Request Received
                </h3>
                <p className="font-body-md text-body-md text-on-surface-variant">
                  A Principal Architect will reach out within 24 hours with your
                  NDA and discovery questionnaire.
                </p>
              </div>
            ) : (
              <form
                className="space-y-space-md"
                onSubmit={handleSubmit}
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-space-md">
                  <div>
                    <label className="block font-label-sm text-label-sm text-on-surface font-semibold mb-space-xs">
                      Full Name *
                    </label>
                    <input
                      className="w-full px-space-md py-space-sm rounded-full bg-surface-container-low text-on-surface font-body-md text-body-md outline-none focus:ring-2 focus:ring-primary"
                      placeholder="e.g. Sarah Jenkins"
                      required
                      type="text"
                    />
                  </div>
                  <div>
                    <label className="block font-label-sm text-label-sm text-on-surface font-semibold mb-space-xs">
                      Work Email *
                    </label>
                    <input
                      className="w-full px-space-md py-space-sm rounded-full bg-surface-container-low text-on-surface font-body-md text-body-md outline-none focus:ring-2 focus:ring-primary"
                      placeholder="sarah@company.com"
                      required
                      type="email"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-space-md">
                  <div>
                    <label className="block font-label-sm text-label-sm text-on-surface font-semibold mb-space-xs">
                      Company / Organization *
                    </label>
                    <input
                      className="w-full px-space-md py-space-sm rounded-full bg-surface-container-low text-on-surface font-body-md text-body-md outline-none focus:ring-2 focus:ring-primary"
                      placeholder="e.g. Apex Global Logistics"
                      required
                      type="text"
                    />
                  </div>
                  <div>
                    <label className="block font-label-sm text-label-sm text-on-surface font-semibold mb-space-xs">
                      Primary Platform of Interest
                    </label>
                    <select className="w-full px-space-md py-space-sm rounded-full bg-surface-container-low text-on-surface font-body-md text-body-md outline-none focus:ring-2 focus:ring-primary">
                      <option>SharePoint Online / M365</option>
                      <option>Liferay DXP Portal</option>
                      <option>Magnolia CMS Hybrid</option>
                      <option>Legacy Migration Assessment</option>
                      <option>Unsure / Architectural Advisory Needed</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block font-label-sm text-label-sm text-on-surface font-semibold mb-space-xs">
                    Brief Scope, User Count, or System Requirements
                  </label>
                  <textarea
                    className="w-full px-space-md py-space-sm rounded-DEFAULT bg-surface-container-low text-on-surface font-body-md text-body-md outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Tell us about your active pain points..."
                    rows={3}
                  ></textarea>
                </div>
                <div className="pt-space-xs">
                  <button
                    className="w-full py-space-md px-space-lg rounded-full bg-primary hover:bg-primary-container text-on-primary font-label-lg text-label-lg transition-all shadow-[0_4px_14px_rgba(0,105,72,0.3)]"
                    type="submit"
                  >
                    Submit Scoping Request • Connect with Principal Architect
                  </button>
                </div>
              </form>
            )}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-space-sm mt-space-lg pt-space-md border-t border-surface-container text-center">
              <div className="flex items-center justify-center gap-space-xs text-on-surface-variant font-label-sm text-label-sm">
                <span className="material-symbols-outlined text-primary text-[18px]">
                  verified_user
                </span>
                <span>Protected by Mutual NDA</span>
              </div>
              <div className="flex items-center justify-center gap-space-xs text-on-surface-variant font-label-sm text-label-sm">
                <span className="material-symbols-outlined text-primary text-[18px]">
                  schedule
                </span>
                <span>Guaranteed 48-Hour Scope Proposal</span>
              </div>
              <div className="flex items-center justify-center gap-space-xs text-on-surface-variant font-label-sm text-label-sm">
                <span className="material-symbols-outlined text-primary text-[18px]">
                  engineering
                </span>
                <span>Zero Junior Sales Reps</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
