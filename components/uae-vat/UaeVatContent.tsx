import type { JSX } from "react";
import VatHero from "@/components/uae-vat/VatHero";
import VatCapabilities from "@/components/uae-vat/VatCapabilities";
import IntegrationPipeline from "@/components/uae-vat/IntegrationPipeline";
import ValuePropComparison from "@/components/uae-vat/ValuePropComparison";
import CaseStudies from "@/components/uae-vat/CaseStudies";
import FixedTierPackages from "@/components/uae-vat/FixedTierPackages";
import VatScopeCalculator from "@/components/uae-vat/VatScopeCalculator";
import VatScopingForm from "@/components/uae-vat/VatScopingForm";
import FaqAccordion from "@/components/uae-vat/FaqAccordion";
import FinalBanner from "@/components/uae-vat/FinalBanner";

export default function UaeVatContent(): JSX.Element {
  return (
    <>
      <VatHero />
      <VatCapabilities />
      <IntegrationPipeline />
      <ValuePropComparison />
      <CaseStudies />
      <FixedTierPackages />
      <VatScopeCalculator />
      <VatScopingForm />
      <FaqAccordion />
      <FinalBanner />
    </>
  );
}
