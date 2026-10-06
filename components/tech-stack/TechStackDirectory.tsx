"use client";

import { TechStackProvider } from "./TechStackContext";
import TechStackHero from "./TechStackHero";
import TechStackSearchBar from "./TechStackSearchBar";
import TechStackSidebar from "./TechStackSidebar";
import LanguagesSection from "./LanguagesSection";
import DatabasesSection from "./DatabasesSection";
import CloudSection from "./CloudSection";
import PortalsSection from "./PortalsSection";
import MobileSection from "./MobileSection";
import DataSection from "./DataSection";
import GrowthSection from "./GrowthSection";
import BottomConversion from "./BottomConversion";

export default function TechStackDirectory() {
  return (
    <TechStackProvider>
      <TechStackHero />
      <TechStackSearchBar />
      <div className="max-w-7xl mx-auto px-margin-mobile md:px-gutter lg:px-margin py-space-lg w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg items-start">
          <aside className="lg:col-span-3 lg:sticky lg:top-[184px] flex flex-col gap-space-md">
            <TechStackSidebar />
          </aside>
          <main className="lg:col-span-9 flex flex-col gap-space-xl">
            <LanguagesSection />
            <DatabasesSection />
            <CloudSection />
            <PortalsSection />
            <MobileSection />
            <DataSection />
            <GrowthSection />
            <BottomConversion />
          </main>
        </div>
      </div>
    </TechStackProvider>
  );
}
