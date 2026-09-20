"use client";

import type { JSX } from "react";
import { useState } from "react";

export default function ConsultationForm(): JSX.Element {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 700);
  };

  if (isSubmitted) {
    return (
      <section
        className="w-full bg-surface-container-high py-space-xl lg:py-[80px]"
        id="consultation"
      >
          <div className="w-full max-w-5xl mx-auto px-margin-mobile md:px-gutter lg:px-margin">
          <div className="max-w-5xl mx-auto">
            <div className="hidden p-6 bg-primary-fixed/20 border border-primary/30 rounded-2xl flex items-center gap-4" id="scopingSuccessMessage">
              <span className="material-symbols-outlined text-primary text-[32px]">
                task_alt
              </span>
              <div>
                <h4 className="text-sm font-bold text-on-surface">
                  Scoping Request Confirmed!
                </h4>
                <p className="text-xs text-on-surface-variant mt-0.5">
                  A Principal Systems Engineer will review your stack and
                  email calendar invitation options within 4 business hours.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section
      className="w-full bg-surface-container-high py-space-xl lg:py-[80px]"
      id="consultation"
    >
      <div className="w-full px-margin-mobile md:px-gutter lg:px-margin">
        <div className="max-w-5xl mx-auto">
          <div className="bg-surface-container-lowest rounded-3xl border border-outline-variant shadow-2xl overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-12">
              <div className="lg:col-span-5 bg-gradient-to-br from-[#0b1c30] to-[#132238] text-white p-8 sm:p-12 flex flex-col justify-between">
                <div className="flex flex-col gap-6">
                  <div className="inline-flex items-center gap-2 self-start bg-emerald-500/10 border border-emerald-500/30 px-3 py-1 rounded-full text-emerald-400 text-xs font-bold uppercase tracking-wider">
                    Direct Principal Pairing
                  </div>
                  <h3 className="font-headline-xl text-3xl font-extrabold text-white tracking-tight">
                    Let&apos;s Scope Your Architecture in 30 Minutes.
                  </h3>
                  <p className="text-slate-300 text-sm leading-relaxed">
                    No sales reps. You will speak directly with a Principal
                    Systems Architect who can validate technical feasibility,
                    estimated sprint costs, and integration requirements.
                  </p>
                  <div className="space-y-4 pt-4 border-t border-slate-700/60">
                    <div className="flex items-start gap-3">
                      <span className="material-symbols-outlined text-emerald-400 text-[20px] mt-0.5">
                        verified
                      </span>
                      <div>
                        <h4 className="text-sm font-bold text-white">
                          Mutual NDA Protected
                        </h4>
                        <p className="text-xs text-slate-400">
                          All technical assets and repository secrets are kept
                          strictly confidential.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="material-symbols-outlined text-emerald-400 text-[20px] mt-0.5">
                        speed
                      </span>
                      <div>
                        <h4 className="text-sm font-bold text-white">
                          &lt; 4 Hour Response SLA
                        </h4>
                        <p className="text-xs text-slate-400">
                          Rapid triage for emergency production cutovers and
                          urgent deliverables.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="pt-8 mt-8 border-t border-slate-700/60 flex items-center justify-between text-xs text-slate-400 font-mono">
                  <span>San Francisco · Dubai · London</span>
                  <span className="text-emerald-400 font-bold">
                    eng@bluechiptech.io
                  </span>
                </div>
              </div>

              <div className="lg:col-span-7 p-8 sm:p-12">
                <div className="mb-6">
                  <h4 className="font-headline-sm text-xl font-bold text-on-surface">
                    Book Architecture Scoping Call
                  </h4>
                  <p className="font-body-sm text-xs text-on-surface-variant mt-1">
                    Fill out the details below to receive a customized
                    technical blueprint and cost proposal.
                  </p>
                </div>

                <form
                  className="space-y-4"
                  id="scopingForm"
                  onSubmit={handleSubmit}
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="contactName"
                        className="block text-xs font-bold uppercase tracking-wider text-on-surface-variant mb-1"
                      >
                        Your Name *
                      </label>
                      <input
                        id="contactName"
                        className="w-full bg-surface-container-low border border-outline-variant rounded-xl px-4 py-2.5 text-sm text-on-surface focus:outline-none focus:border-primary"
                        placeholder="Sarah Jenkins"
                        required
                        type="text"
                        name="name"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="contactEmail"
                        className="block text-xs font-bold uppercase tracking-wider text-on-surface-variant mb-1"
                      >
                        Work Email *
                      </label>
                      <input
                        id="contactEmail"
                        className="w-full bg-surface-container-low border border-outline-variant rounded-xl px-4 py-2.5 text-sm text-on-surface focus:outline-none focus:border-primary"
                        placeholder="sarah@company.com"
                        required
                        type="email"
                        name="email"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="serviceSelect"
                      className="block text-xs font-bold uppercase tracking-wider text-on-surface-variant mb-1"
                    >
                      Service Required *
                    </label>
                    <select
                      id="serviceSelect"
                      className="w-full bg-surface-container-low border border-outline-variant rounded-xl px-4 py-2.5 text-sm text-on-surface focus:outline-none focus:border-primary"
                      required
                      name="service"
                      defaultValue=""
                    >
                      <option value="" disabled>
                        Select a service...
                      </option>
                      <option value="custom-software">
                        01. Custom Software & Cloud ($20k–$80k)
                      </option>
                      <option value="mobile-app">
                        02. iOS & Android Apps ($20k–$75k)
                      </option>
                      <option value="shopify-plus">
                        03. Shopify Plus & Headless ($15k–$60k)
                      </option>
                      <option value="data-warehouse">
                        04. Modern Data Warehousing & BI ($20k–$60k)
                      </option>
                      <option value="uae-vat-erp">
                        05. UAE VAT ERP & E-Invoicing ($20k–$70k)
                      </option>
                      <option value="bare-metal">
                        06. Managed Cloud & Bare-Metal HA ($3k–$25k)
                      </option>
                      <option value="basic-hosting">
                        07. Web Hosting & Email ($500–$3,500)
                      </option>
                      <option value="paid-social">
                        08. Paid Social & Signal CAPI ($5k–$30k)
                      </option>
                      <option value="enterprise-cms">
                        09. Enterprise CMS & Portals ($25k–$85k)
                      </option>
                      <option value="it-networks">
                        10. IT Networks & Hardware ($5k–$35k)
                      </option>
                    </select>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="budgetSelect"
                        className="block text-xs font-bold uppercase tracking-wider text-on-surface-variant mb-1"
                      >
                        Target Budget Tier *
                      </label>
                      <select
                        id="budgetSelect"
                        className="w-full bg-surface-container-low border border-outline-variant rounded-xl px-4 py-2.5 text-sm text-on-surface focus:outline-none focus:border-primary"
                        required
                        name="budget"
                        defaultValue=""
                      >
                        <option value="" disabled>
                          Select a budget tier...
                        </option>
                        <option value="500-5k">
                          $500 – $5,000 (Turnkey / Email / Audit)
                        </option>
                        <option value="5k-25k">
                          $5,000 – $25,000 (Growth / Headless / IT)
                        </option>
                        <option value="25k-60k">
                          $25,000 – $60,000 (Standard MVP / App / ERP)
                        </option>
                        <option value="60k-100k">
                          $60,000 – $100,000+ (Enterprise Multi-Pod)
                        </option>
                      </select>
                    </div>
                    <div>
                      <label
                        htmlFor="timelineSelect"
                        className="block text-xs font-bold uppercase tracking-wider text-on-surface-variant mb-1"
                      >
                        Desired Launch *
                      </label>
                      <select
                        id="timelineSelect"
                        className="w-full bg-surface-container-low border border-outline-variant rounded-xl px-4 py-2.5 text-sm text-on-surface focus:outline-none focus:border-primary"
                        required
                        name="timeline"
                        defaultValue=""
                      >
                        <option value="" disabled>
                          Select a timeline...
                        </option>
                        <option value="immediate">
                          Immediate / Emergency (Under 2 Weeks)
                        </option>
                        <option value="standard">
                          Standard Sprint (3 to 6 Weeks)
                        </option>
                        <option value="q4">Q4 Target Launch</option>
                        <option value="future">Planning ahead (6+ months)</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="projectDescription"
                      className="block text-xs font-bold uppercase tracking-wider text-on-surface-variant mb-1"
                    >
                      Project Context &amp; Key Integrations *
                    </label>
                    <textarea
                      id="projectDescription"
                      className="w-full bg-surface-container-low border border-outline-variant rounded-xl px-4 py-2.5 text-sm text-on-surface focus:outline-none focus:border-primary"
                      placeholder="Tell us about your current stack, expected user scale, or specific systems to integrate..."
                      required
                      rows={3}
                      name="context"
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      id="scopingSubmitBtn"
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-3.5 rounded-xl bg-primary text-on-primary font-bold text-sm shadow-md hover:bg-primary-container active:scale-[0.99] transition-all flex items-center justify-center gap-2 disabled:opacity-70"
                    >
                      {isSubmitting ? (
                        <>
                          <span className="animate-spin">
                            <span className="material-symbols-outlined text-[18px]">
                              progress_activity
                            </span>
                          </span>
                          <span>Verifying Pod Capacity...</span>
                        </>
                      ) : (
                        <>
                          <span>Confirm Architecture Scoping Call</span>
                          <span className="material-symbols-outlined text-[18px]">
                            calendar_today
                          </span>
                        </>
                      )}
                    </button>
                  </div>

                  {isSubmitted && (
                    <div
                      className="p-6 bg-primary-fixed/20 border border-primary/30 rounded-2xl flex items-center gap-4"
                      id="scopingSuccessMessage"
                    >
                      <span className="material-symbols-outlined text-primary text-[32px]">
                        task_alt
                      </span>
                      <div>
                        <h4 className="text-sm font-bold text-on-surface">
                          Scoping Request Confirmed!
                        </h4>
                        <p className="text-xs text-on-surface-variant mt-0.5">
                          A Principal Systems Engineer will review your stack
                          and email calendar invitation options within 4
                          business hours.
                        </p>
                      </div>
                    </div>
                  )}

                  <div className="flex items-center gap-2 justify-center pt-2 text-outline font-body-sm text-xs">
                    <span className="flex items-center gap-1">
                      <span className="material-symbols-outlined text-[16px] text-primary">
                        lock
                      </span>
                      <span>Standard NDA Covered</span>
                    </span>
                    <span>•</span>
                    <span>Zero Sales Spam</span>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
