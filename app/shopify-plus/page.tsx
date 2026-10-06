import type { JSX } from "react";
import ShopifyPlusContent from "@/components/ShopifyPlusContent";

export default function ShopifyPlusPage(): JSX.Element {
  return (
    <main className="w-full pt-20 bg-surface-container-lowest">
      <ShopifyPlusContent />
    </main>
  );
}
