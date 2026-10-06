import type { JSX } from "react";
import PaidSocialContent from "@/components/PaidSocialContent";

export default function PaidSocialPage(): JSX.Element {
  return (
    <main className="w-full pt-20 bg-surface min-h-[calc(100vh-80px)]">
      <PaidSocialContent />
    </main>
  );
}
