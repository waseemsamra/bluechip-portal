import type { JSX } from "react";
import AboutUsContent from "@/components/AboutUsContent";

export default function AboutUsPage(): JSX.Element {
  return (
    <main className="w-full pt-20 bg-surface min-h-[calc(100vh-80px)]">
      <AboutUsContent />
    </main>
  );
}
