"use client";

import type { JSX } from "react";
import { useState, useMemo } from "react";
import ProjectCard from "@/components/work/ProjectCard";
import ProjectModal from "@/components/work/ProjectModal";
import {
  Project,
  industries,
  typeOptions,
  budgetOptions,
  stackOptions,
} from "@/components/work/projectData";

interface PortfolioDirectoryProps {
  initialProjects: Project[];
}

export default function PortfolioDirectory({ initialProjects }: PortfolioDirectoryProps): JSX.Element {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeIndustry, setActiveIndustry] = useState("all");
  const [selectedType, setSelectedType] = useState("all");
  const [selectedBudget, setSelectedBudget] = useState("all");
  const [selectedStack, setSelectedStack] = useState("all");
  const [modalProject, setModalProject] = useState<Project | null>(null);

  const filteredProjects = useMemo(() => {
    return initialProjects.filter((p) => {
      const query = searchQuery.toLowerCase().trim();
      const matchQuery =
        query === "" ||
        p.keywords.toLowerCase().includes(query) ||
        p.title.toLowerCase().includes(query) ||
        p.description.toLowerCase().includes(query);

      const matchIndustry = activeIndustry === "all" || p.industry === activeIndustry;
      const matchType = selectedType === "all" || p.appType === selectedType;
      const matchBudget = selectedBudget === "all" || selectedBudget === p.budgetTier;
      const matchStack = selectedStack === "all" || p.stack === selectedStack;

      return matchQuery && matchIndustry && matchType && matchBudget && matchStack;
    });
  }, [initialProjects, searchQuery, activeIndustry, selectedType, selectedBudget, selectedStack]);

  const handleReset = () => {
    setSearchQuery("");
    setActiveIndustry("all");
    setSelectedType("all");
    setSelectedBudget("all");
    setSelectedStack("all");
  };

  return (
    <section
      className="max-w-[1240px] mx-auto px-margin-mobile md:px-gutter lg:px-margin pt-space-xl pb-space-lg w-full"
      id="portfolio-directory"
    >
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-md mb-space-lg">
        <div>
          <div className="inline-flex items-center gap-space-xs px-space-sm py-1 rounded-full bg-surface-container-high text-on-surface-variant font-label-sm text-label-sm font-bold mb-2">
            <span>DIRECTORY BROWSER</span>
          </div>
          <h2 className="font-headline-xl text-headline-xl text-on-surface">The 40 Shipped Applications</h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant mt-1">
            Live systems driving measurable business value across 7 commercial industries.
          </p>
        </div>
        <div className="flex items-center gap-space-xs text-on-surface-variant font-body-sm text-body-sm bg-surface-container-lowest px-space-md py-space-xs rounded-full shadow-sm">
          <span className="font-semibold text-on-surface">{filteredProjects.length}</span>
          <span> of {initialProjects.length} Applications Displayed</span>
        </div>
      </div>

      <div className="bg-surface-container-lowest p-space-md md:p-space-lg rounded-lg shadow-[0_4px_20px_rgba(11,28,48,0.03)] space-y-space-md mb-space-lg">
        <div className="relative w-full">
          <span className="material-symbols-outlined absolute left-space-md top-1/2 -translate-y-1/2 text-on-surface-variant text-[22px]">
            search
          </span>
          <input
            className="w-full pl-12 pr-space-md py-3.5 rounded-full bg-surface-container-low text-on-surface placeholder:text-on-surface-variant/70 font-body-md text-body-md outline-none focus:bg-surface-container-lowest focus:ring-2 focus:ring-primary transition-all"
            id="portfolio-search"
            placeholder="Search by keyword, client type, or stack (e.g. HIPAA, React, SQLite, Shopify, Portal, IoT)..."
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          {searchQuery.length > 0 && (
            <button
              className="absolute right-space-md top-1/2 -translate-y-1/2 text-on-surface-variant hover:text-on-surface text-sm font-semibold"
              id="clear-search"
              onClick={() => setSearchQuery("")}
            >
              Clear
            </button>
          )}
        </div>

        <div className="flex items-center gap-2 overflow-x-auto pb-2 no-scrollbar" id="industry-tabs">
          {industries.map((industry) => (
            <button
              key={industry.id}
              className={`industry-tab px-space-md py-2 rounded-full font-label-sm text-label-sm font-medium whitespace-nowrap transition-all flex items-center gap-1.5 ${
                activeIndustry === industry.id
                  ? "bg-primary text-on-primary shadow-sm"
                  : "bg-surface-container text-on-surface-variant hover:text-on-surface"
              }`}
              data-industry={industry.id}
              onClick={() => setActiveIndustry(industry.id)}
            >
              {industry.label}{" "}
              <span
                className={`px-1.5 py-0.5 rounded-full text-[10px] ${
                  activeIndustry === industry.id
                    ? "bg-on-primary/20 text-on-primary"
                    : "bg-surface-container-highest text-on-surface-variant"
                }`}
              >
                {industry.count}
              </span>
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-space-sm pt-space-xs">
          <div className="relative">
            <select
              className="w-full px-space-md py-2.5 rounded-full bg-surface-container-low text-on-surface font-body-sm text-body-sm outline-none appearance-none cursor-pointer focus:ring-2 focus:ring-primary"
              id="filter-type"
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value)}
            >
              {typeOptions.map((opt) => (
                <option key={opt.value} value={opt.value}>
                  {opt.label}
                </option>
              ))}
            </select>
            <span className="material-symbols-outlined absolute right-space-md top-1/2 -translate-y-1/2 text-on-surface-variant pointer-events-none text-[18px]">
              expand_more
            </span>
          </div>

          <div className="relative">
            <select
              className="w-full px-space-md py-2.5 rounded-full bg-surface-container-low text-on-surface font-body-sm text-body-sm outline-none appearance-none cursor-pointer focus:ring-2 focus:ring-primary"
              id="filter-budget"
              value={selectedBudget}
              onChange={(e) => setSelectedBudget(e.target.value)}
            >
              {budgetOptions.map((opt) => (
                <option key={opt.value} value={opt.value}>
                  {opt.label}
                </option>
              ))}
            </select>
            <span className="material-symbols-outlined absolute right-space-md top-1/2 -translate-y-1/2 text-on-surface-variant pointer-events-none text-[18px]">
              expand_more
            </span>
          </div>

          <div className="relative">
            <select
              className="w-full px-space-md py-2.5 rounded-full bg-surface-container-low text-on-surface font-body-sm text-body-sm outline-none appearance-none cursor-pointer focus:ring-2 focus:ring-primary"
              id="filter-stack"
              value={selectedStack}
              onChange={(e) => setSelectedStack(e.target.value)}
            >
              {stackOptions.map((opt) => (
                <option key={opt.value} value={opt.value}>
                  {opt.label}
                </option>
              ))}
            </select>
            <span className="material-symbols-outlined absolute right-space-md top-1/2 -translate-y-1/2 text-on-surface-variant pointer-events-none text-[18px]">
              expand_more
            </span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-space-md" id="projects-grid">
        {filteredProjects.map((project) => (
          <ProjectCard key={project.id} project={project} onSpecClick={() => setModalProject(project)} />
        ))}
      </div>

      {filteredProjects.length === 0 && (
        <div className="flex flex-col items-center justify-center p-space-xl text-center bg-surface-container-lowest rounded-lg mt-space-md">
          <span className="material-symbols-outlined text-outline text-[48px] mb-space-sm">
            filter_alt_off
          </span>
          <h3 className="font-headline-md text-headline-md text-on-surface mb-space-xs">No matching projects found</h3>
          <p className="font-body-md text-body-md text-on-surface-variant max-w-sm mb-space-md">
            Try broadening your search term or reset the industry and budget filters to view all 40 delivered applications.
          </p>
          <button
            className="px-space-md py-space-sm rounded-full bg-primary text-on-primary font-label-lg text-label-lg shadow-sm"
            id="reset-filters"
            onClick={handleReset}
          >
            Reset All Filters
          </button>
        </div>
      )}

      {modalProject && (
        <ProjectModal project={modalProject} onClose={() => setModalProject(null)} />
      )}
    </section>
  );
}
