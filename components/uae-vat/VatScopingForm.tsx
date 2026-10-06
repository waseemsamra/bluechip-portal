"use client";

import type { JSX } from "react";
import { useState } from "react";

export default function VatScopingForm(): JSX.Element {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <section className="w-full py-space-xl bg-surface-container-low" id="scoping-call">
      <div className="max-w-[1240px] mx-auto px-margin-mobile md:px-gutter lg:px-margin">
        <div className="bg-surface-container-lowest rounded-xl shadow-xl overflow-hidden grid grid-cols-1 lg:grid-cols-12">
          <div className="lg:col-span-5 p-space-lg md:p-space-xl bg-surface-container flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-space-xs px-space-sm py-1 rounded-full bg-surface-container-lowest text-primary font-label-sm text-label-sm uppercase font-bold mb-space-md">
                Direct Senior Access
              </div>
              <h3 className="font-headline-lg text-headline-lg text-on-surface mb-space-sm">
                Schedule an FTA Technical Scoping Call
              </h3>
              <p className="font-body-md text-body-md text-on-surface-variant mb-space-lg">
                Speak directly with our Principal Financial Systems Architect. We evaluate your current transaction flow, chart of accounts, and FTA tax audit risks.
              </p>

              <div className="space-y-space-md">
                <div className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-primary text-[20px] mt-0.5">
                    verified_user
                  </span>
                  <div>
                    <p className="font-label-lg text-label-lg text-on-surface font-semibold">
                      Mutual Non-Disclosure Agreement
                    </p>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">
                      We sign a bilateral NDA prior to examining trade license or ledger details.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-primary text-[20px] mt-0.5">
                    schedule
                  </span>
                  <div>
                    <p className="font-label-lg text-label-lg text-on-surface font-semibold">
                      48-Hour Turnaround
                    </p>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">
                      Receive a comprehensive fixed-fee milestone breakdown within two business days.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-primary text-[20px] mt-0.5">
                    person_off
                  </span>
                  <div>
                    <p className="font-label-lg text-label-lg text-on-surface font-semibold">
                      Zero Junior Sales Agents
                    </p>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">
                      You talk exclusively with the engineers who design and ship your codebase.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-space-md mt-space-md">
              <p className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant">
                Dubai Internet City • Abu Dhabi Hub71 Registered Partner
              </p>
            </div>
          </div>

          <div className="lg:col-span-7 p-space-lg md:p-space-xl">
            <form
              className="space-y-space-md"
              id="scoping-form"
              onSubmit={handleSubmit}
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-md">
                <FormField label="Full Name *" name="name" type="text" placeholder="Tariq Mansoor" required />
                <FormField label="Corporate Work Email *" name="email" type="email" placeholder="tariq@gulflogistics.ae" required />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-md">
                <FormField label="Company / Trade License Name *" name="company" type="text" placeholder="Al Futtaim Global Trading LLC" required />
                <div>
                  <label className="block font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant mb-1">
                    Entity Jurisdiction *
                  </label>
                  <select className="w-full px-space-md py-space-sm rounded-DEFAULT bg-surface-container-low text-on-surface font-body-md text-body-md focus:outline-none focus:bg-surface-container">
                    <option>Mainland UAE (Dubai / Abu Dhabi DED)</option>
                    <option>Designated Free Zone (JAFZA, DAFZA, KIZAD, etc.)</option>
                    <option>Financial Free Zone (DIFC / ADGM)</option>
                    <option>Commercial Free Zone (DMCC, Shams, Meydan)</option>
                    <option>Multi-Entity Group (Mainland + Free Zone)</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-md">
                <FormField label="Current Accounting / ERP System" name="current-system" type="text" placeholder="e.g. QuickBooks, Excel, Legacy Odoo, Tally" />
                <div>
                  <label className="block font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant mb-1">
                    Estimated Monthly Invoices
                  </label>
                  <select className="w-full px-space-md py-space-sm rounded-DEFAULT bg-surface-container-low text-on-surface font-body-md text-body-md focus:outline-none focus:bg-surface-container">
                    <option>Under 500 invoices / month</option>
                    <option>500 – 2,500 invoices / month</option>
                    <option>2,500 – 10,000 invoices / month</option>
                    <option>10,000+ invoices / month (High volume)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant mb-1">
                  Primary Project Objective
                </label>
                <textarea
                  className="w-full px-space-md py-space-sm rounded-DEFAULT bg-surface-container-low text-on-surface font-body-md text-body-md focus:outline-none focus:bg-surface-container"
                  placeholder="Briefly describe your current tax bottleneck, upcoming audit, or e-invoicing upgrade timeline..."
                  rows={3}
                />
              </div>

              <button
                className="w-full py-space-sm px-space-md rounded-full bg-primary hover:bg-primary-container text-on-primary font-label-lg text-label-lg transition-all shadow-glow flex items-center justify-center gap-2"
                type="submit"
              >
                <span>Book 30-Minute Scoping Call with Principal Engineer</span>
                <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
              </button>

              {isSubmitted && (
                <div className="p-space-sm bg-primary/10 text-primary font-label-sm text-label-sm rounded-DEFAULT text-center font-bold">
                  ✓ Scoping request submitted. You will receive an NDA and calendar invite within 2 business hours.
                </div>
              )}
              <p className="font-body-sm text-[11px] text-center text-on-surface-variant mt-2">
                By submitting, you agree to our Privacy Policy. No marketing spam, ever.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

interface FormFieldProps {
  label: string;
  name: string;
  type: string;
  placeholder?: string;
  required?: boolean;
}

function FormField({ label, name, type, placeholder, required }: FormFieldProps): JSX.Element {
  return (
    <div>
      <label className="block font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant mb-1">
        {label}
      </label>
      <input
        className="w-full px-space-md py-space-sm rounded-DEFAULT bg-surface-container-low text-on-surface font-body-md text-body-md focus:outline-none focus:bg-surface-container"
        name={name}
        type={type}
        placeholder={placeholder}
        required={required}
      />
    </div>
  );
}
