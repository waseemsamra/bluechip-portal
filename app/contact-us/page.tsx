import type { JSX } from "react";
import ContactUsContent from "@/components/ContactUsContent";

export default function ContactUsPage(): JSX.Element {
  return (
    <main className="w-full pt-20 bg-surface min-h-[calc(100vh-80px)]">
      <ContactUsContent />
    </main>
  );
}
