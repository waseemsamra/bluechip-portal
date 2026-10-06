"use client";

import { useEffect } from "react";
import { useTechStack } from "./TechStackContext";
import {
  languagesCards,
  benchmarkRows,
  cloudToolCards,
  portalsCards,
  mobileCards,
  dataFeatures,
  growthCards,
  evaluationMetrics,
} from "./techStackData";

const categories = [
  {
    id: "languages",
    label: "Languages & Core",
    icon: "terminal",
    count: languagesCards.length,
  },
  {
    id: "databases",
    label: "Databases & Storage",
    icon: "database",
    count: benchmarkRows.length,
  },
  {
    id: "cloud",
    label: "Cloud & DevOps",
    icon: "cloud_sync",
    count: cloudToolCards.length,
  },
  {
    id: "portals",
    label: "Web, Portals & CMS",
    icon: "web",
    count: portalsCards.length,
  },
  {
    id: "mobile",
    label: "Mobile Engineering",
    icon: "phone_iphone",
    count: mobileCards.length,
  },
  {
    id: "data",
    label: "Data & Warehousing",
    icon: "insights",
    count: dataFeatures.length,
  },
  {
    id: "growth",
    label: "Growth & Event CAPI",
    icon: "hub",
    count: growthCards.length,
  },
];

export default function TechStackSidebar() {
  const { activeSection, setActiveSection } = useTechStack();

  useEffect(() => {
    const sections = document.querySelectorAll<HTMLElement>(
      ".tech-category-section",
    );
    if (!sections.length) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute("id") ?? "";
            const key = id.replace("section-", "");
            setActiveSection(key);
          }
        });
      },
      {
        root: null,
        rootMargin: "-100px 0px -70% 0px",
        threshold: 0,
      },
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, [setActiveSection]);

  return (
    <aside className="lg:col-span-3 lg:sticky lg:top-36 flex flex-col gap-space-md">
      <div className="bg-surface-container-lowest p-space-md rounded-lg shadow-sm flex flex-col gap-space-sm">
        <div className="flex items-center justify-between pb-space-xs">
          <span className="font-label-sm text-label-sm text-primary uppercase font-bold tracking-wider">
            Stack Categories
          </span>
          <span className="font-label-sm text-label-sm px-2 py-0.5 rounded-full bg-surface-container font-semibold text-on-surface-variant">
            {categories.length} Disciplines
          </span>
        </div>
        <nav className="flex flex-col gap-1.5" id="sidebarNav">
          {categories.map((cat) => {
            const active = activeSection === cat.id;
            return (
              <a
                key={cat.id}
                href={`#section-${cat.id}`}
                className={`sidebar-tab-link flex items-center justify-between px-space-sm py-2.5 rounded-DEFAULT transition-all group ${
                  active
                    ? "bg-surface-container-high text-primary font-bold shadow-sm"
                    : "hover:bg-surface-container-low text-on-surface-variant hover:text-on-surface"
                }`}
              >
                <div className="flex items-center gap-space-xs">
                  <span
                    className={`material-symbols-outlined text-[19px] ${
                      active ? "text-primary" : "text-outline group-hover:text-primary transition-colors"
                    }`}
                  >
                    {cat.icon}
                  </span>
                  <span className="font-label-lg text-label-lg">{cat.label}</span>
                </div>
                <span
                  className={`font-label-sm text-label-sm px-2 py-0.5 rounded-full font-medium ${
                    active
                      ? "bg-surface-container-lowest text-primary font-bold"
                      : "bg-surface-container text-on-surface-variant"
                  }`}
                >
                  {cat.count}
                </span>
              </a>
            );
          })}
        </nav>
      </div>

      <div className="bg-gradient-to-br from-surface-container-low to-surface-container p-space-md rounded-lg shadow-sm flex flex-col gap-space-sm">
        <div className="flex items-center gap-space-xs text-primary">
          <span className="material-symbols-outlined text-[22px]">
            architecture
          </span>
          <span className="font-headline-sm text-headline-sm text-on-surface font-semibold">
            Unsure Which Tech?
          </span>
        </div>
        <p className="font-body-sm text-body-sm text-on-surface-variant">
          Avoid premature microservices or heavy licensing costs. Schedule a
          confidential 30-min evaluation with our Principal Systems Architect.
        </p>
        <div className="flex flex-col gap-2 pt-1">
          <a
            className="flex items-center justify-center gap-space-xs w-full py-2.5 rounded-full bg-primary text-on-primary font-label-lg text-label-lg hover:bg-primary-container shadow-sm transition-all text-center"
            href="#contact"
          >
            <span>Book Stack Review</span>
            <span className="material-symbols-outlined text-[16px]">
              arrow_forward
            </span>
          </a>
          <div className="flex items-center justify-center gap-space-xs text-on-surface-variant font-body-sm text-body-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
            <span>Typically responds within 2 hours</span>
          </div>
        </div>
      </div>

      <div className="bg-surface-container-lowest p-space-md rounded-lg shadow-sm flex flex-col gap-space-xs">
        <span className="font-label-sm text-label-sm text-on-surface font-bold uppercase tracking-wider">
          Evaluation Barometer
        </span>
        <div className="flex flex-col gap-2 pt-2">
          {evaluationMetrics.map((m) => (
            <div key={m.label}>
              <div className="flex justify-between items-center font-body-sm text-body-sm">
                <span className="text-on-surface-variant">{m.label}</span>
                <span className="font-semibold text-primary">{m.value}</span>
              </div>
              <div className="w-full bg-surface-container-high h-1.5 rounded-full overflow-hidden">
                <div
                  className="bg-primary h-full rounded-full"
                  style={{ width: m.width }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </aside>
  );
}
