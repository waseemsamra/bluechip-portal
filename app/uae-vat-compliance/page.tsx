import type { JSX } from "react";
import UaeVatContent from "@/components/uae-vat/UaeVatContent";

export default function UaeVatCompliancePage(): JSX.Element {
  return (
    <main className="w-full pt-20 bg-surface min-h-[calc(100vh-80px)]">
      <UaeVatContent />
    </main>
  );
}
