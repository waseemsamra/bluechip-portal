"use client";

import type { JSX } from "react";
import { useState } from "react";

export default function ConsultationForm(): JSX.Element {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    budget: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1500);
  };

  if (isSubmitted) {
    return (
      <section
        id="form-success"
        className="w-full px-margin-mobile md:px-gutter lg:px-margin py-space-xl"
      >
        <div className="max-w-[1440px] mx-auto">
          <div className="text-center py-16">
            <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
              <span className="material-symbols-outlined text-[48px] text-primary">
                check_circle
              </span>
            </div>
            <h2 className="font-display-lg text-display-lg text-on-surface mb-4">
              Thank You!
            </h2>
            <p className="font-body-xl text-body-xl text-on-surface-variant max-w-2xl mx-auto">
              We received your request and will contact you within 1 business
              day to schedule your free 30-minute scoping call.
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section
      id="scoping-call"
      className="w-full px-margin-mobile md:px-gutter lg:px-margin py-space-xl bg-surface-container-low"
    >
      <div className="max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-gutter">
          <div>
            <h2 className="font-display-lg text-display-lg text-on-surface mb-4">
              Ready to Build Something Great?
            </h2>
            <p className="font-body-xl text-body-xl text-on-surface-variant mb-6">
              Fill out the form and we&apos;ll reach out to schedule a free
              30-minute scoping call. We review your requirements and provide a
              fixed-price proposal — no pressure, no fluff.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-primary text-[24px]">
                  schedule
                </span>
                <span className="font-body-md text-body-md text-on-surface">
                  30-minute free call
                </span>
              </div>
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-primary text-[24px]">
                  price_change
                </span>
                <span className="font-body-md text-body-md text-on-surface">
                  Fixed-price proposal
                </span>
              </div>
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-primary text-[24px]">
                  security
                </span>
                <span className="font-body-md text-body-md text-on-surface">
                  100% IP ownership transfer
                </span>
              </div>
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className="space-y-4 bg-surface-container-lowest p-6 rounded-2xl shadow-lg"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                type="text"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                className="px-4 py-3 rounded-xl bg-surface-container border border-surface-variant font-body-md text-body-md text-on-surface placeholder-on-surface-variant/50 focus:outline-none focus:ring-2 focus:ring-primary transition-all"
              />
              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="Email Address"
                className="px-4 py-3 rounded-xl bg-surface-container border border-surface-variant font-body-md text-body-md text-on-surface placeholder-on-surface-variant/50 focus:outline-none focus:ring-2 focus:ring-primary transition-all"
              />
            </div>
            <input
              type="text"
              name="company"
              required
              value={formData.company}
              onChange={handleChange}
              placeholder="Company Name"
              className="w-full px-4 py-3 rounded-xl bg-surface-container border border-surface-variant font-body-md text-body-md text-on-surface placeholder-on-surface-variant/50 focus:outline-none focus:ring-2 focus:ring-primary transition-all"
            />
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Phone Number"
              className="w-full px-4 py-3 rounded-xl bg-surface-container border border-surface-variant font-body-md text-body-md text-on-surface placeholder-on-surface-variant/50 focus:outline-none focus:ring-2 focus:ring-primary transition-all"
            />
            <select
              name="budget"
              value={formData.budget}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl bg-surface-container border border-surface-variant font-body-md text-body-md text-on-surface placeholder-on-surface-variant/50 focus:outline-none focus:ring-2 focus:ring-primary transition-all"
            >
              <option value="">Select your budget range</option>
              <option value="10k-25k">$10k – $25k</option>
              <option value="25k-50k">$25k – $50k</option>
              <option value="50k-100k">$50k – $100k</option>
              <option value="100k+">$100k+</option>
            </select>
            <textarea
              name="message"
              rows={4}
              value={formData.message}
              onChange={handleChange}
              placeholder="Project details and goals..."
              className="w-full px-4 py-3 rounded-xl bg-surface-container border border-surface-variant font-body-md text-body-md text-on-surface placeholder-on-surface-variant/50 focus:outline-none focus:ring-2 focus:ring-primary resize-none transition-all"
            />
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full px-6 py-4 rounded-full bg-primary hover:bg-primary-container text-on-primary font-label-md text-label-md transition-all shadow-[0_4px_14px_rgba(0,105,72,0.3)] disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {isSubmitting ? (
                <>
                  <span className="animate-spin">
                    <span className="material-symbols-outlined">
                      progress_activity
                    </span>
                  </span>
                  Sending...
                </>
              ) : (
                "Book Free Scoping Call"
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
