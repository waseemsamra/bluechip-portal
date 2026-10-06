import type { JSX } from "react";

export default function ScopingForm(): JSX.Element {
  return (
    <section
      className="max-w-[1240px] mx-auto px-margin-mobile md:px-gutter lg:px-margin py-space-xl"
      id="quick-scoping"
    >
      <div className="relative rounded-lg bg-surface-container-lowest shadow-[0_8px_32px_rgba(11,28,48,0.06)] overflow-hidden">
        <div className="h-2 w-full bg-primary" />
        <div className="p-space-lg md:p-space-xl grid grid-cols-1 lg:grid-cols-12 gap-space-xl">
          <div className="lg:col-span-5 flex flex-col justify-between space-y-space-md">
            <div>
              <span className="font-label-sm text-label-sm text-primary uppercase font-bold tracking-widest block mb-2">
                Speak Directly With An Engineer
              </span>
              <h2 className="font-headline-xl text-headline-xl text-on-surface tracking-tight">
                Ready to Build Your Application on a Guaranteed Fixed Scope?
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant mt-space-sm leading-relaxed">
                Skip the sales reps. You will speak directly with a Principal Software Architect who will analyze your operational bottlenecks, assess feasibility, and provide a binding scope outline within 48 hours under mutual NDA.
              </p>
            </div>

            <div className="space-y-space-sm pt-space-md">
              <div className="flex items-start gap-space-sm">
                <span className="material-symbols-outlined text-primary text-[22px] mt-0.5">
                  verified
                </span>
                <div>
                  <h4 className="font-headline-sm text-headline-sm text-on-surface text-[16px]">
                    Mutual NDA Protection
                  </h4>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">
                    We sign an agreement before you disclose sensitive business workflows or APIs.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-space-sm">
                <span className="material-symbols-outlined text-primary text-[22px] mt-0.5">
                  timer
                </span>
                <div>
                  <h4 className="font-headline-sm text-headline-sm text-on-surface text-[16px]">
                    48-Hour Proposal Turnaround
                  </h4>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">
                    Receive an itemized architecture breakdown, technical stack blueprint, and fixed price tag.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-space-sm">
                <span className="material-symbols-outlined text-primary text-[22px] mt-0.5">
                  thumb_up
                </span>
                <div>
                  <h4 className="font-headline-sm text-headline-sm text-on-surface text-[16px]">
                    Zero Retainer Overages
                  </h4>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">
                    If a milestone takes longer than planned due to our estimation, you pay nothing extra.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-space-md flex items-center gap-space-sm">
              <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-on-primary font-bold">
                B
              </div>
              <div>
                <p className="font-label-lg text-label-lg text-on-surface font-bold leading-tight">
                  BlueChip Tech Software Studio
                </p>
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  Austin, TX • Fixed-fee builds worldwide
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 bg-surface-container-low p-space-md md:p-space-lg rounded-DEFAULT">
            <form
              className="space-y-space-sm"
              id="scoping-form"
              onSubmit={(e) => {
                e.preventDefault();
                alert(
                  "Thank you! Your project parameters have been securely routed to a Principal Architect. We will deliver your fixed-scope architecture specification within 48 hours."
                );
                (e.target as HTMLFormElement).reset();
              }}
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-sm">
                <div>
                  <label className="block font-label-sm text-label-sm text-on-surface-variant uppercase font-bold mb-1">
                    Your Name
                  </label>
                  <input
                    className="w-full px-space-md py-2.5 rounded bg-surface-container-lowest text-on-surface font-body-md text-body-md outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Alex Mercer"
                    required
                    type="text"
                  />
                </div>
                <div>
                  <label className="block font-label-sm text-label-sm text-on-surface-variant uppercase font-bold mb-1">
                    Work Email
                  </label>
                  <input
                    className="w-full px-space-md py-2.5 rounded bg-surface-container-lowest text-on-surface font-body-md text-body-md outline-none focus:ring-2 focus:ring-primary"
                    placeholder="alex@company.com"
                    required
                    type="email"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-sm">
                <div>
                  <label className="block font-label-sm text-label-sm text-on-surface-variant uppercase font-bold mb-1">
                    Company / Project Name
                  </label>
                  <input
                    className="w-full px-space-md py-2.5 rounded bg-surface-container-lowest text-on-surface font-body-md text-body-md outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Mercer Logistics Corp"
                    required
                    type="text"
                  />
                </div>
                <div>
                  <label className="block font-label-sm text-label-sm text-on-surface-variant uppercase font-bold mb-1">
                    Target Platform
                  </label>
                  <select
                    className="w-full px-space-md py-2.5 rounded bg-surface-container-lowest text-on-surface font-body-md text-body-md outline-none focus:ring-2 focus:ring-primary"
                    defaultValue="Mobile App (iOS / Android)"
                  >
                    <option>Mobile App (iOS / Android)</option>
                    <option>Custom Web Application</option>
                    <option>Enterprise Portal &amp; Intranet</option>
                    <option>E-Commerce / Headless Store</option>
                    <option>Modern Data Warehouse / IoT</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block font-label-sm text-label-sm text-on-surface-variant uppercase font-bold mb-1">
                  Target Fixed Budget Range
                </label>
                <div className="grid grid-cols-3 gap-space-xs">
                  <label className="flex items-center justify-center p-2 rounded bg-surface-container-lowest cursor-pointer font-label-sm text-label-sm text-on-surface has-[:checked]:bg-primary has-[:checked]:text-on-primary">
                    <input className="sr-only" name="budget-range" type="radio" defaultChecked />
                    $20k – $35k
                  </label>
                  <label className="flex items-center justify-center p-2 rounded bg-surface-container-lowest cursor-pointer font-label-sm text-label-sm text-on-surface has-[:checked]:bg-primary has-[:checked]:text-on-primary">
                    <input className="sr-only" name="budget-range" type="radio" />
                    $35k – $60k
                  </label>
                  <label className="flex items-center justify-center p-2 rounded bg-surface-container-lowest cursor-pointer font-label-sm text-label-sm text-on-surface has-[:checked]:bg-primary has-[:checked]:text-on-primary">
                    <input className="sr-only" name="budget-range" type="radio" />
                    $60k – $95k+
                  </label>
                </div>
              </div>

              <div>
                <label className="block font-label-sm text-label-sm text-on-surface-variant uppercase font-bold mb-1">
                  Brief Project Summary &amp; Constraints
                </label>
                <textarea
                  className="w-full px-space-md py-2.5 rounded bg-surface-container-lowest text-on-surface font-body-md text-body-md outline-none focus:ring-2 focus:ring-primary"
                  placeholder="What problem does the application solve? Are there legacy systems (ERP, CRM, SQL) we must integrate with?"
                  required
                  rows={3}
                />
              </div>

              <button
                className="w-full py-3.5 rounded-full bg-primary hover:bg-primary-container text-on-primary font-label-lg text-label-lg transition-all shadow-glow"
                type="submit"
              >
                Submit Scoping Request &amp; Receive Fixed Estimate
              </button>
              <p className="font-body-sm text-[11px] text-center text-on-surface-variant mt-2">
                We respond in under 24 business hours. No marketing spam, ever.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
