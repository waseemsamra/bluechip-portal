import type { JSX } from "react";
import PaymentGatewayContent from "@/components/PaymentGatewayContent";

export const metadata = {
  title: "Payment Gateway Integration | BlueChip Tech",
  description:
    "Battle-tested payment gateway integrations for Stripe, Adyen, Checkout.com, Apple Pay, PayPal, Tamara, and Tabby. Zero-drop checkout funnels, multi-currency settlement, tokenized vaults, and automated reconciliation.",
  keywords:
    "Payment Gateway Integration, Stripe, Adyen, Checkout.com, Apple Pay, PayPal, Tamara, Tabby, PCI-DSS, 3DS2, Network Tokenization, BNPL, Multi-Currency, Webhook Orchestration",
  openGraph: {
    title: "Payment Gateway Integration | BlueChip Tech",
    description:
      "Battle-tested payment gateway integrations for Stripe, Adyen, Checkout.com, Apple Pay, PayPal, Tamara, and Tabby with zero-drop checkout funnels and PCI-DSS compliance.",
    type: "website",
  },
};

export default function PaymentGatewayPage(): JSX.Element {
  return (
    <main className="w-full pt-20 bg-background min-h-screen">
      <PaymentGatewayContent />
    </main>
  );
}
