import type { JSX } from "react";

import BreadcrumbRibbon from "@/components/custom/BreadcrumbRibbon";
import HeroSection from "@/components/custom/HeroSection";
import CapabilitiesSection from "@/components/custom/CapabilitiesSection";
import PlatformsMatrix from "@/components/custom/PlatformsMatrix";
import DataStruggles from "@/components/custom/DataStruggles";
import CaseStudies from "@/components/custom/CaseStudies";
import PricingPackages from "@/components/custom/PricingPackages";
import ScopeEstimator from "@/components/custom/ScopeEstimator";
import ConsultationForm from "@/components/custom/ConsultationForm";
import FaqSection from "@/components/custom/FaqSection";

export const metadata = {
  title: "Custom Software & E-Commerce Development | BlueChip Tech",
  description:
    "Build custom web apps, customer portals, and high-converting e-commerce stores with fixed pricing and guaranteed delivery.",
};

export default function CustomSoftwarePage(): JSX.Element {
  return (
    <main className="w-full pt-20 bg-surface min-h-[calc(100vh-80px)]">
      <div className="flex flex-col w-full">
        <BreadcrumbRibbon />
        <HeroSection />
        <CapabilitiesSection />
        <PlatformsMatrix />
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
