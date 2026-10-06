"use client";

import type { JSX } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WorkHero from "@/components/work/WorkHero";
import { projects } from "@/components/work/projectData";
import SpotlightCases from "@/components/work/SpotlightCases";
import PortfolioDirectory from "@/components/work/PortfolioDirectory";
import ExecutionFramework from "@/components/work/ExecutionFramework";
import BudgetEstimator from "@/components/work/BudgetEstimator";
import ScopingForm from "@/components/work/ScopingForm";

export default function WorkPage(): JSX.Element {
  return (
    <>
      <Header />
      <main className="w-full pt-20 bg-surface min-h-[calc(100vh-80px)]">
        <WorkHero />
        <SpotlightCases />
        <PortfolioDirectory initialProjects={projects} />
        <ExecutionFramework />
        <BudgetEstimator />
        <ScopingForm />
      </main>
      <Footer />
    </>
  );
}
