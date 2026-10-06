import type { JSX } from "react";
import NetworkHardwareContent from "@/components/NetworkHardwareContent";

export default function NetworkHardwarePage(): JSX.Element {
  return (
    <main className="w-full pt-20 bg-surface min-h-[calc(100vh-80px)]">
      <NetworkHardwareContent />
    </main>
  );
}
