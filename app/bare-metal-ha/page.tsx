import type { JSX } from "react";
import BareMetalHaContent from "@/components/BareMetalHaContent";

export default function BareMetalHaPage(): JSX.Element {
  return (
    <main className="w-full pt-20 bg-surface min-h-[calc(100vh-80px)]">
      <BareMetalHaContent />
    </main>
  );
}
