"use client";

import type { JSX } from "react";
import { useState } from "react";
import { faqItems, FaqItem } from "@/components/uae-vat/vatData";

export default function FaqAccordion(): JSX.Element {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="w-full py-space-xl bg-surface">
      <div className="max-w-[1240px] mx-auto px-margin-mobile md:px-gutter lg:px-margin">
        <div className="text-center max-w-3xl mx-auto mb-space-xl">
          <span className="font-label-sm text-label-sm uppercase tracking-wider text-primary font-bold">
            Technical Clarifications
          </span>
          <h2 className="font-headline-xl text-headline-xl text-on-surface tracking-tight mt-1 mb-space-sm">
            Frequently Asked Questions on UAE Tax Engineering
          </h2>
          <p className="font-body-md text-body-md text-on-surface-variant">
            Everything technical leaders and CFOs ask before commissioning a software sprint with BlueChip Tech.
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-space-sm" id="faq-accordion">
          {faqItems.map((item, index) => (
            <FaqItemComponent
              key={index}
              item={item}
              isOpen={openIndex === index}
              onToggle={() => setOpenIndex(openIndex === index ? null : index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

interface FaqItemProps {
  item: FaqItem;
  isOpen: boolean;
  onToggle: () => void;
}

function FaqItemComponent({ item, isOpen, onToggle }: FaqItemProps): JSX.Element {
  return (
    <div className="bg-surface-container-lowest rounded-DEFAULT p-space-md shadow-sm">
      <button
        className="w-full text-left flex items-center justify-between font-headline-sm text-headline-sm text-on-surface"
        onClick={onToggle}
      >
        <span>{item.question}</span>
        <span
          className="material-symbols-outlined text-primary text-[20px] transition-transform"
          style={{ transform: isOpen ? "rotate(180deg)" : "rotate(0deg)" }}
        >
          expand_more
        </span>
      </button>
      <div
        className={`mt-space-sm text-on-surface-variant font-body-md text-body-md transition-all duration-200 overflow-hidden ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        {item.answer}
      </div>
    </div>
  );
}
