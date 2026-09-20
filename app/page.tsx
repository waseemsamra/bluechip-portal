import type { JSX } from "react";
import HeroSection from "@/components/HeroSection";
import ServicesCarousel from "@/components/ServicesCarousel";
import PillarsGrid from "@/components/PillarsGrid";
import PortfolioShowcase from "@/components/PortfolioShowcase";
import BudgetEstimator from "@/components/BudgetEstimator";
import BenchmarkComparison from "@/components/BenchmarkComparison";
import ConsultationForm from "@/components/ConsultationForm";

export default function Home(): JSX.Element {
  return (
    <main className="w-full pt-20">
      <HeroSection />
      <ServicesCarousel />
      <PillarsGrid />
      <PortfolioShowcase />
      <BudgetEstimator />
      <BenchmarkComparison />
      <ConsultationForm />
    </main>
  );
}
