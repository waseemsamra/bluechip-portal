import type { JSX } from "react";
import BreadcrumbRibbon from "@/components/bi/BreadcrumbRibbon";
import BiHero from "@/components/bi/BiHero";
import DataStruggles from "@/components/bi/DataStruggles";
import DataPillars from "@/components/bi/DataPillars";
import TechStack from "@/components/bi/TechStack";
import DataCaseStudies from "@/components/bi/DataCaseStudies";
import PricingPackages from "@/components/bi/PricingPackages";
import ScopeEstimator from "@/components/bi/ScopeEstimator";
import DataFaq from "@/components/bi/DataFaq";

export default function BiDataWarehousePage(): JSX.Element {
  return (
    <main className="w-full pt-20">
      <BreadcrumbRibbon />
      <BiHero />
      <DataStruggles />
      <DataPillars />
      <TechStack />
      <DataCaseStudies />
      <PricingPackages />
      <ScopeEstimator />
      <DataFaq />
    </main>
  );
}
