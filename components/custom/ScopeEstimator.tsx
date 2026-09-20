"use client";

import type { JSX } from "react";
import { useState } from "react";

const sources = [
  {
    id: "shopify",
    label: "Shopify",
    icon: "storefront",
    price: 10,
  },
  {
    id: "opencart",
    label: "OpenCart",
    icon: "open_in_browser",
    price: 15,
  },
  {
    id: "custom",
    label: "Custom Platform",
    icon: "code",
    price: 20,
  },
  {
    id: "legacy",
    label: "Legacy System",
    icon: "storage",
    price: 10,
  },
];

const complexityOptions = [
  { id: "basic", label: "Basic (1–2 pages)", price: 0 },
  { id: "standard", label: "Standard (3–6 pages)", price: 500 },
  { id: "complex", label: "Complex (7+ pages / user auth)", price: 1500 },
];

export default function ScopeEstimator(): JSX.Element {
  const [selectedSources, setSelectedSources] = useState<string[]>(["shopify"]);
  const [complexity, setComplexity] = useState("standard");
  const [addons, setAddons] = useState({
    hosting: false,
    maintenance: false,
    seo: false,
    migration: false,
  });

  const selectedComplex = complexityOptions.find((c) => c.id === complexity);

  let basePrice = 12000;
  let estDays = 21;

  selectedSources.forEach((src) => {
    const source = sources.find((s) => s.id === src);
    if (source) {
      basePrice += source.price * 500;
      estDays += 2;
    }
  });

  if (selectedComplex) {
    basePrice += selectedComplex.price;
    estDays += 3;
  }

  if (addons.hosting) {
    basePrice += 500;
  }
  if (addons.maintenance) {
    basePrice += 1500;
  }
  if (addons.seo) {
    basePrice += 1000;
  }
  if (addons.migration) {
    basePrice += 3000;
  }

  estDays += Math.floor(selectedSources.length / 2);

  const toggleSource = (id: string) => {
    if (selectedSources.includes(id)) {
      setSelectedSources(selectedSources.filter((s) => s !== id));
    } else {
      setSelectedSources([...selectedSources, id]);
    }
  };

  const toggleAddon = (key: keyof typeof addons) => {
    setAddons({ ...addons, [key]: !addons[key] });
  };

  return (
    <section
      id="scoping-call"
      className="w-full px-margin-mobile md:px-gutter lg:px-margin py-space-xl bg-surface-container-lowest"
    >
      <div className="max-w-[1440px] mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="font-display-lg text-display-lg text-on-surface mb-4">
            Estimate Your Build Cost &amp; Timeline
          </h2>
          <p className="font-body-xl text-body-xl text-on-surface-variant">
            Select your platforms and scope to get an instant quote.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-gutter">
          <div className="space-y-6">
            <div>
              <label className="font-label-md text-label-md text-on-surface mb-2 block">
                Platforms (Select all that apply)
              </label>
              <div className="grid grid-cols-2 gap-2">
                {sources.map((source) => (
                  <button
                    key={source.id}
                    type="button"
                    onClick={() => toggleSource(source.id)}
                    className={`p-3 rounded-xl border-2 font-label-sm text-label-sm font-semibold transition-all ${
                      selectedSources.includes(source.id)
                        ? "border-primary bg-primary/10 text-primary"
                        : "border-surface-variant text-on-surface-variant hover:border-primary"
                    }`}
                  >
                    <span className="material-symbols-outlined mr-2">
                      {source.icon}
                    </span>
                    {source.label}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="font-label-md text-label-md text-on-surface mb-2 block">
                Project Complexity
              </label>
              <div className="space-y-2">
                {complexityOptions.map((opt) => (
                  <button
                    key={opt.id}
                    type="button"
                    onClick={() => setComplexity(opt.id)}
                    className={`w-full p-3 rounded-xl border-2 text-left font-label-sm text-label-sm transition-all ${
                      complexity === opt.id
                        ? "border-primary bg-primary/10 text-primary"
                        : "border-surface-variant text-on-surface-variant hover:border-primary"
                    }`}
                  >
                    <span className="font-semibold">{opt.label}</span>
                    <span className="float-right ${opt.price === 0 ? 'text-on-surface-variant' : 'text-primary'}">
                      ${opt.price === 0 ? "—" : `+$${opt.price}`}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="font-label-md text-label-md text-on-surface mb-2 block">
                Add-On Services
              </label>
              <div className="space-y-2">
                {Object.entries(addons).map(([key, checked]) => (
                  <label
                    key={key}
                    className="flex items-center justify-between p-3 rounded-xl bg-surface-container-low cursor-pointer"
                  >
                    <span className="font-label-sm text-label-sm text-on-surface capitalize">
                      {key}
                    </span>
                    <input
                      type="checkbox"
                      checked={checked}
                      onChange={() => toggleAddon(key as keyof typeof addons)}
                      className="w-5 h-5 rounded accent-primary cursor-pointer"
                    />
                  </label>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-surface-container-lowest rounded-2xl p-6 shadow-lg h-fit">
            <h3 className="font-display-md text-display-md text-on-surface mb-4">
              Your Estimate
            </h3>
            <div className="space-y-4">
              <div>
                <span className="font-label-sm text-label-sm text-on-surface-variant">
                  Estimated Price
                </span>
                <div className="font-display-hero text-display-hero text-primary">
                  ${basePrice.toLocaleString()}
                </div>
              </div>
              <div>
                <span className="font-label-sm text-label-sm text-on-surface-variant">
                  Delivery Timeline
                </span>
                <div className="font-display-sm text-display-sm text-on-surface">
                  {estDays} days ({Math.ceil(estDays / 7)} weeks)
                </div>
              </div>
              <div className="pt-4">
                <span className="font-label-xs text-label-xs text-on-surface-variant">
                  Platforms: {selectedSources.length} selected
                </span>
                <br />
                <span className="font-label-xs text-label-xs text-on-surface-variant">
                  Complexity:{" "}
                  {complexityOptions.find((c) => c.id === complexity)?.label ||
                    "Standard"}
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center">
          <a
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-primary hover:bg-primary-container text-on-primary font-label-lg text-label-lg transition-all shadow-[0_4px_14px_rgba(0,105,72,0.3)]"
          >
            Book Your Scoping Call — Let&apos;s Build This
          </a>
        </div>
      </div>
    </section>
  );
}
