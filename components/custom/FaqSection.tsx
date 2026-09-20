import type { JSX } from "react";

const faqs = [
  {
    question: "What&apos;s included in a fixed-price package?",
    answer:
      "Everything: design, development, content migration, testing, deployment, and handoff. We include a dedicated project manager, senior developers, and unlimited revisions within scope.",
  },
  {
    question: "Do I really own the code?",
    answer:
      "Yes, 100%. We transfer full ownership of the source code, domain, and all assets. You get a clean Git repo and documentation.",
  },
  {
    question: "What platforms do you work with?",
    answer:
      "Shopify Plus, OpenCart, and fully custom headless React/Vue applications. We also do legacy system modernization.",
  },
  {
    question: "How long does a typical build take?",
    answer:
      "Starter packages ship in 4–6 weeks. Growth portals in 8–10 weeks. Enterprise suites in 10–14 weeks. We include contractual SLAs.",
  },
  {
    question: "What if my requirements change mid-project?",
    answer:
      "Scope changes outside the original agreement are handled via a transparent change request process with no pressure upsells.",
  },
];

export default function FaqSection(): JSX.Element {
  return (
    <section
      id="faq"
      className="w-full px-margin-mobile md:px-gutter lg:px-margin py-space-xl"
    >
      <div className="max-w-[1440px] mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="font-display-lg text-display-lg text-on-surface mb-4">
            Frequently Asked Questions
          </h2>
          <p className="font-body-xl text-body-xl text-on-surface-variant">
            Everything you need to know about working with us.
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, idx) => (
            <details
              key={idx}
              className="bg-surface-container-lowest rounded-xl p-4 shadow-sm group/open"
            >
              <summary className="flex items-center justify-between cursor-pointer list-none">
                <span className="font-display-sm text-display-sm text-on-surface">
                  {faq.question}
                </span>
                <span
                  className={`material-symbols-outlined text-[24px] text-primary transition-transform duration-300 group-open/open:rotate-180`}
                >
                  expand_more
                </span>
              </summary>
              <p className="mt-3 font-body-md text-body-md text-on-surface-variant">
                {faq.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
