import type { JSX } from "react";

import HeroSection from "@/components/enterprise-cms/HeroSection";
import CapabilitiesSection from "@/components/enterprise-cms/CapabilitiesSection";
import PlatformMatrix from "@/components/enterprise-cms/PlatformMatrix";
import DataStruggles from "@/components/enterprise-cms/DataStruggles";
import CaseStudies from "@/components/enterprise-cms/CaseStudies";
import PricingPackages from "@/components/enterprise-cms/PricingPackages";
import ScopeEstimator from "@/components/enterprise-cms/ScopeEstimator";
import ConsultationForm from "@/components/enterprise-cms/ConsultationForm";
import FaqSection from "@/components/enterprise-cms/FaqSection";
import FinalBanner from "@/components/enterprise-cms/FinalBanner";

export const metadata = {
  title: "Enterprise CMS & Portal Development | BlueChip Tech",
  description:
    "Install, configure, customize, and migrate mission-critical enterprise portals. SharePoint, Liferay DXP, Magnolia CMS with fixed pricing and SSO authentication.",
};

export default function EnterpriseCmsPage(): JSX.Element {
  return (
    <main className="w-full pt-20 bg-surface min-h-[calc(100vh-80px)]">
      <div className="flex flex-col w-full">
        <HeroSection />
        <CapabilitiesSection />
        <PlatformMatrix />
        <DataStruggles />
        <CaseStudies />
        <PricingPackages />
        <ScopeEstimator />
        <ConsultationForm />
        <FaqSection />
        <FinalBanner />
      </div>
    </main>
  );
}
