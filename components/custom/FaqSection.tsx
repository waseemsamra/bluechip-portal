import type { JSX } from "react";

const faqs = [
  {
    q: "How do you guarantee a 100% fixed fee with no surprise charges?",
    a: "Before writing a single line of code, our Senior Solutions Architects conduct a strict 48-hour scoping session. We define the exact user stories, API contracts, data models, and acceptance criteria upfront. If a deliverable is in the specification, you will never be charged extra for it—even if it takes us longer than anticipated.",
  },
  {
    q: "Should my business build on Shopify, OpenCart, or a Custom React portal?",
    a: "If you are a direct-to-consumer brand with standard SKU structures, Shopify Plus offers unmatched speed and out-of-the-box payment integrations. If you are a wholesale or industrial distributor needing zero platform commission, massive catalogs, and on-premise ERP integration, OpenCart provides complete control. For custom quoting calculators, multi-role client dashboards, and proprietary workflow applications, a bespoke Next.js/React portal is ideal. We advise on this objectively during our initial scoping call.",
  },
  {
    q: "Do we own 100% of the code and intellectual property?",
    a: "Yes. Upon completion of each project sprint and milestone settlement, 100% of the IP, Git repositories, custom design files, and documentation belong completely to your company. There are no recurring agency lock-ins or proprietary license fees.",
  },
  {
    q: "What happens after launch? Do you offer post-launch warranties?",
    a: "Every build we ship includes a complimentary 30 to 90-day comprehensive bug-fix warranty. If any unexpected defect or integration hiccup emerges during that window, our team resolves it at zero additional cost. Following warranty completion, we offer flexible, low-overhead maintenance retainers or complete developer hand-offs to your team.",
  },
];

export default function FaqSection(): JSX.Element {
  return (
    <section className="w-full px-margin-mobile md:px-gutter lg:px-margin py-12 md:py-16">
      <div className="max-w-[1280px] mx-auto flex flex-col gap-10">
        <div className="text-center max-w-3xl mx-auto">
          <span className="font-label-sm text-label-sm text-primary uppercase font-bold tracking-wider">
            Clear Answers
          </span>
          <h2 className="font-headline-xl text-headline-xl text-on-surface mt-1">
            Frequently Asked Questions
          </h2>
          <p className="font-body-md text-body-md text-on-surface-variant mt-2">
            Everything you need to know about our fixed pricing, delivery
            SLAs, and code transfer protocols.
          </p>
        </div>
        <div className="max-w-3xl mx-auto w-full space-y-4">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-surface-container-lowest shadow-sm"
            >
              <h3 className="font-headline-sm text-headline-sm text-on-surface mb-2 font-bold">
                {faq.q}
              </h3>
              <p className="font-body-md text-body-md text-on-surface-variant">
                {faq.a}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
