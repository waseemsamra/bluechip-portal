import type { JSX } from "react";
import PortfolioDirectory from "@/components/PortfolioDirectory";

export default function PortfolioPage(): JSX.Element {
  return (
    <main className="w-full pt-20 bg-surface min-h-[calc(100vh-80px)]">
      <PortfolioDirectory />
    </main>
  );
}
