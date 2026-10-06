import type { JSX } from "react";

import BreadcrumbRibbon from "@/components/mobile/BreadcrumbRibbon";
import HeroSection from "@/components/mobile/HeroSection";
import CapabilitiesSection from "@/components/mobile/CapabilitiesSection";
import TechMatrix from "@/components/mobile/TechMatrix";
import DataStruggles from "@/components/mobile/DataStruggles";
import CaseStudies from "@/components/mobile/CaseStudies";
import PricingPackages from "@/components/mobile/PricingPackages";
import ScopeEstimator from "@/components/mobile/ScopeEstimator";
import ConsultationForm from "@/components/mobile/ConsultationForm";
import FaqSection from "@/components/mobile/FaqSection";

export const metadata = {
  title: "iOS & Android Mobile App Development | BlueChip Tech",
  description:
    "Build high-performance cross-platform mobile apps with React Native or Flutter. Fixed pricing, guaranteed delivery, full IP ownership.",
};

export default function MobileDevelopmentPage(): JSX.Element {
  return (
    <main className="w-full pt-20 bg-surface min-h-[calc(100vh-80px)]">
      <div className="flex flex-col w-full">
        <BreadcrumbRibbon />
        <HeroSection />
        <CapabilitiesSection />
        <TechMatrix />
        <DataStruggles />
        <CaseStudies />
        <PricingPackages />
        <ScopeEstimator />
        <ConsultationForm />
        <FaqSection />
      </div>
    </main>
  );
}
