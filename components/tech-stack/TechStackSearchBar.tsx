"use client";

import { useTechStack } from "./TechStackContext";
import { filterPills } from "./techStackData";

export default function TechStackSearchBar() {
  const { searchTerm, setSearchTerm, activeFilter, setActiveFilter } =
    useTechStack();

  const handleFilter = (filter: string) => {
    setActiveFilter(filter);
    if (filter !== "all") {
      const el = document.getElementById(`section-${filter}`);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  };

  return (
    <div className="sticky top-[120px] z-30 bg-surface/95 backdrop-blur-md shadow-sm py-space-sm">
      <div className="max-w-7xl mx-auto px-margin-mobile md:px-gutter lg:px-margin flex flex-col md:flex-row items-center justify-between gap-space-sm">
        <div className="relative w-full md:w-96">
          <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-outline text-[20px]">
            search
          </span>
          <input
            className="w-full pl-12 pr-4 py-2.5 rounded-full bg-surface-container-lowest text-on-surface font-body-md text-body-md shadow-sm focus:outline-none focus:bg-surface-container-lowest focus:shadow-md transition-all"
            placeholder="Search tech, database, or tool (e.g. Postgres, Next.js, Redis)..."
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="flex items-center gap-space-xs overflow-x-auto w-full md:w-auto no-scrollbar py-1">
          {filterPills.map((pill) => {
            const active = activeFilter === pill.filter;
            return (
              <button
                key={pill.filter}
                type="button"
                onClick={() => handleFilter(pill.filter)}
                className={`filter-pill shrink-0 px-space-md py-1.5 rounded-full font-label-sm text-label-sm font-bold uppercase tracking-wider transition-all ${
                  active
                    ? "bg-primary text-on-primary shadow-sm"
                    : "bg-surface-container-lowest text-on-surface-variant hover:bg-surface-container-high"
                }`}
              >
                {pill.label}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
