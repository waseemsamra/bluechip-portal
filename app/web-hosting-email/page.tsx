import type { JSX } from "react";
import WebHostingEmailContent from "@/components/WebHostingEmailContent";

export default function WebHostingEmailPage(): JSX.Element {
  return (
    <main className="w-full pt-20 bg-surface min-h-[calc(100vh-80px)]">
      <WebHostingEmailContent />
    </main>
  );
}
