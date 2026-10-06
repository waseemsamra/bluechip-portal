"use client";

import type { JSX } from "react";
import { useState } from "react";

const engines = [
  { id: "sharepoint", label: "SharePoint Online", sub: "M365 Ecosystem", price: 24000, weeks: 4 },
  { id: "liferay", label: "Liferay DXP", sub: "Self-Service Extranets", price: 32000, weeks: 6 },
  { id: "magnolia", label: "Magnolia CMS", sub: "Hybrid Headless Java", price: 28000, weeks: 5 },
  { id: "decoupled", label: "Decoupled API", sub: "Custom Next.js Frontend", price: 35000, weeks: 7 },
];

const features = [
  { id: "sso", label: "Azure AD / Okta SAML 2.0 Single Sign-On", cost: 3000, weeks: 0.5, defaultChecked: true },
  { id: "workflows", label: "Custom Governance & Multi-Step Approvals (BPMN / Power Automate)", cost: 5000, weeks: 1, defaultChecked: true },
  { id: "erp", label: "ERP / CRM Database Connector (SAP / NetSuite / Salesforce)", cost: 7500, weeks: 1.5, defaultChecked: false },
  { id: "multilang", label: "Multi-Language & Global Geo-Routing", cost: 4500, weeks: 1, defaultChecked: false },
];

const migrations = [
  { id: "greenfield", label: "Greenfield (None)", cost: 0, weeks: 0 },
  { id: "tenk", label: "Up to 10k Files", cost: 4000, weeks: 1 },
  { id: "fiftyk", label: "50k+ Complex Docs", cost: 9000, weeks: 2 },
];

export default function ScopeEstimator(): JSX.Element {
  const [selectedEngine, setSelectedEngine] = useState(engines[0]);
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>(["sso", "workflows"]);
  const [selectedMigration, setSelectedMigration] = useState(migrations[1]);

  const toggleFeature = (id: string) => {
    if (selectedFeatures.includes(id)) {
      setSelectedFeatures(selectedFeatures.filter((f) => f !== id));
    } else {
      setSelectedFeatures([...selectedFeatures, id]);
    }
  };

  const featureAddons = features
    .filter((f) => selectedFeatures.includes(f.id))
    .reduce((sum, f) => sum + f.cost, 0);

  const featureWeeks = features
    .filter((f) => selectedFeatures.includes(f.id))
    .reduce((sum, f) => sum + f.weeks, 0);

  const totalCost = selectedEngine.price + selectedMigration.cost + featureAddons;
  const totalWeeksMin = Math.floor(selectedEngine.weeks + selectedMigration.weeks + featureWeeks);
  const totalWeeksMax = totalWeeksMin + 1.5;

  return (
    <section className="w-full py-space-xl bg-surface-container-low">
      <div className="max-w-[1280px] mx-auto px-margin-mobile md:px-gutter lg:px-margin">
        <div className="text-center max-w-3xl mx-auto mb-space-lg">
          <span className="font-label-sm text-label-sm text-primary uppercase tracking-widest font-bold block mb-space-xs">
            Self-Service Calculator
          </span>
          <h2 className="font-headline-xl text-headline-xl text-on-surface tracking-tight mb-space-xs">
            Interactive Portal Scope &amp; Budget Estimator
          </h2>
          <p className="font-body-md text-body-md text-on-surface-variant">
            Adjust platform engine, integration requirements, and content volume
            to preview your guaranteed fixed-price estimate.
          </p>
        </div>
        <div className="bg-surface-container-lowest rounded-lg p-space-lg md:p-space-xl shadow-xl max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-space-lg">
            <div className="md:col-span-2 space-y-space-lg">
              <div>
                <label className="block font-label-lg text-label-lg text-on-surface mb-space-xs font-bold">
                  1. Select Target CMS / Portal Platform
                </label>
                <div className="grid grid-cols-2 gap-space-sm" id="engine-options">
                  {engines.map((engine) => (
                    <button
                      key={engine.id}
                      type="button"
                      onClick={() => setSelectedEngine(engine)}
                      className={`engine-btn p-space-sm rounded-DEFAULT text-left transition-all ${
                        selectedEngine.id === engine.id
                          ? "bg-surface-container-low border-2 border-primary text-on-surface"
                          : "bg-surface-container-low text-on-surface"
                      }`}
                      data-engine-cost={engine.price}
                      data-engine-time={engine.weeks}
                    >
                      <div className="font-headline-sm text-headline-sm leading-tight">
                        {engine.label}
                      </div>
                      <div className="font-body-sm text-body-sm text-on-surface-variant">
                        {engine.sub}
                      </div>
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <label className="block font-label-lg text-label-lg text-on-surface mb-space-xs font-bold">
                  2. Key Capabilities &amp; Integrations
                </label>
                <div className="space-y-space-xs">
                  {features.map((feature) => (
                    <label
                      key={feature.id}
                      className="flex items-center gap-space-sm p-space-sm rounded-DEFAULT bg-surface-container-low cursor-pointer"
                    >
                      <input
                        type="checkbox"
                        className="feature-checkbox w-4 h-4 text-primary rounded accent-primary"
                        data-feature-cost={feature.cost}
                        data-feature-time={feature.weeks}
                        checked={selectedFeatures.includes(feature.id)}
                        onChange={() => toggleFeature(feature.id)}
                      />
                      <span className="font-body-md text-body-md text-on-surface flex-1">
                        {feature.label}
                      </span>
                      <span className="font-label-sm text-label-sm text-on-surface-variant">
                        +${(feature.cost / 1000).toFixed(1)}k
                      </span>
                    </label>
                  ))}
                </div>
              </div>
              <div>
                <label className="block font-label-lg text-label-lg text-on-surface mb-space-xs font-bold">
                  3. Legacy Data &amp; Document Migration Volume
                </label>
                <div className="grid grid-cols-3 gap-space-xs" id="migration-options">
                  {migrations.map((mig) => (
                    <button
                      key={mig.id}
                      type="button"
                      onClick={() => setSelectedMigration(mig)}
                      className={`migration-btn p-space-xs rounded-DEFAULT text-center transition-all ${
                        selectedMigration.id === mig.id
                          ? "bg-surface-container-low border-2 border-primary text-on-surface font-label-sm text-label-sm"
                          : "bg-surface-container-low text-on-surface font-label-sm text-label-sm"
                      }`}
                      data-migration-cost={mig.cost}
                      data-migration-time={mig.weeks}
                    >
                      {mig.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>
            <div className="bg-surface-container p-space-lg rounded-DEFAULT flex flex-col justify-between">
              <div>
                <span className="font-label-sm text-label-sm text-primary font-bold uppercase tracking-wider block mb-space-xs">
                  Estimated Scope
                </span>
                <div className="text-[38px] font-display-hero text-on-surface mb-space-xs leading-none" id="calc-price-display">
                  ${totalCost.toLocaleString()}
                </div>
                <p className="font-body-sm text-body-sm text-on-surface-variant mb-space-md">
                  Guaranteed Fixed-Price Ceiling SLA
                </p>
                <div className="space-y-space-xs pt-space-sm border-t border-outline-variant/30 mb-space-md">
                  <div className="flex items-center justify-between font-label-sm text-label-sm text-on-surface">
                    <span>Estimated Timeline:</span>
                    <strong className="font-bold text-primary" id="calc-time-display">
                      {totalWeeksMin} – {totalWeeksMax.toFixed(1)} Weeks
                    </strong>
                  </div>
                  <div className="flex items-center justify-between font-label-sm text-label-sm text-on-surface">
                    <span>Architecture Reviews:</span>
                    <span className="font-semibold">Weekly Milestone Sprints</span>
                  </div>
                  <div className="flex items-center justify-between font-label-sm text-label-sm text-on-surface">
                    <span>Post-Launch Warranty:</span>
                    <span className="font-semibold">60 Days Included</span>
                  </div>
                </div>
              </div>
              <div>
                <a
                  className="w-full inline-flex items-center justify-center px-space-md py-space-sm rounded-full bg-primary hover:bg-primary-container text-on-primary font-label-lg text-label-lg transition-all text-center shadow-md"
                  href="#scoping-intake"
                >
                  Lock In This Scope Estimate
                </a>
                <p className="font-body-sm text-body-sm text-on-surface-variant text-center mt-space-xs">
                  No commitment required. 48-hr validation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
