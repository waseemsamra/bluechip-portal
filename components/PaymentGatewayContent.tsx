"use client";

import type { JSX } from "react";
import { useState } from "react";
import Image from "next/image";

export default function PaymentGatewayContent(): JSX.Element {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="flex flex-col w-full">
      <section className="relative w-full overflow-hidden bg-surface-container-lowest pb-space-xl">
        <div className="absolute inset-0 pointer-events-none opacity-40">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern
                height="32"
                id="grid-pattern"
                patternUnits="userSpaceOnUse"
                width="32"
              >
                <path
                  className="text-surface-container-high"
                  d="M 32 0 L 0 0 0 32"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1"
                />
              </pattern>
            </defs>
            <rect fill="url(#grid-pattern)" height="100%" width="100%" />
          </svg>
        </div>
        <div className="absolute -top-32 right-12 w-96 h-96 rounded-full bg-primary/10 blur-3xl pointer-events-none"></div>
        <div className="absolute top-48 -left-20 w-80 h-80 rounded-full bg-tertiary/10 blur-3xl pointer-events-none"></div>
        <div className="relative max-w-7xl mx-auto px-margin-mobile md:px-gutter lg:px-margin pt-space-lg flex flex-col gap-space-lg">
          <div className="flex flex-wrap items-center justify-between gap-space-sm pt-space-xs">
            <div className="inline-flex items-center gap-space-xs px-space-md py-space-xs rounded-full bg-primary/10 text-primary">
              <span className="w-2 h-2 rounded-full bg-primary animate-ping"></span>
              <span className="font-label-sm text-label-sm uppercase tracking-wider font-bold">
                Financial Infrastructure &amp; Secure Checkouts • Level 1 PCI-DSS Compliant
              </span>
            </div>
            <div className="flex items-center gap-space-xs text-on-surface-variant font-label-sm text-label-sm">
              <span
                className="material-symbols-outlined text-[16px] text-primary"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                security
              </span>
              <span>SAQ-A Scope Minimization • Zero Cardholder Data Footprint</span>
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-center">
            <div className="lg:col-span-8 flex flex-col gap-space-md">
              <h1 className="font-headline-xl text-headline-xl text-on-surface tracking-tight">
                Payment Gateway Integration &amp; Global Financial API Engineering
              </h1>
              <p className="font-body-xl text-body-xl text-on-surface-variant max-w-3xl leading-relaxed">
                Battle-tested integrations for Stripe, Adyen, Checkout.com, Apple
                Pay, PayPal, Tamara, and Tabby. Zero-drop checkout funnels,
                multi-currency settlement, tokenized vaults, and automated
                reconciliation for high-volume commerce &amp; SaaS.
              </p>
              <div className="flex flex-wrap gap-space-xs pt-space-xs">
                <span className="inline-flex items-center gap-space-xs px-space-sm py-space-xs rounded-full bg-surface-container-low text-on-surface font-label-sm text-label-sm shadow-sm">
                  <span className="material-symbols-outlined text-primary text-[15px]">
                    verified
                  </span>
                  PCI-DSS Level 1 Ready
                </span>
                <span className="inline-flex items-center gap-space-xs px-space-sm py-space-xs rounded-full bg-surface-container-low text-on-surface font-label-sm text-label-sm shadow-sm">
                  <span className="material-symbols-outlined text-primary text-[15px]">
                    speed
                  </span>
                  Sub-800ms Tokenization
                </span>
                <span className="inline-flex items-center gap-space-xs px-space-sm py-space-xs rounded-full bg-surface-container-low text-on-surface font-label-sm text-label-sm shadow-sm">
                  <span className="material-symbols-outlined text-primary text-[15px]">
                    sync_alt
                  </span>
                  99.999% Webhook Delivery SLA
                </span>
                <span className="inline-flex items-center gap-space-xs px-space-sm py-space-xs rounded-full bg-surface-container-low text-on-surface font-label-sm text-label-sm shadow-sm">
                  <span className="material-symbols-outlined text-primary text-[15px]">
                    fingerprint
                  </span>
                  3D Secure 2.2 (3DS) Smart Routing
                </span>
                <span className="inline-flex items-center gap-space-xs px-space-sm py-space-xs rounded-full bg-surface-container-low text-on-surface font-label-sm text-label-sm shadow-sm">
                  <span className="material-symbols-outlined text-primary text-[15px]">
                    lock
                  </span>
                  Zero Raw Card Storage
                </span>
              </div>
              <div className="flex flex-wrap items-center gap-space-md pt-space-sm">
                <a
                  className="inline-flex items-center justify-center gap-space-xs px-space-lg py-space-md rounded-full bg-primary text-on-primary font-label-lg text-label-lg hover:bg-primary-container shadow-[0_6px_20px_rgba(0,105,72,0.28)] transition-all"
                  href="#scoping-form"
                >
                  <span className="material-symbols-outlined text-[18px]">
                    calendar_month
                  </span>
                  Book Payment Architecture Review
                </a>
                <a
                  className="inline-flex items-center justify-center gap-space-xs px-space-lg py-space-md rounded-full bg-surface-container-high text-on-surface font-label-lg text-label-lg hover:bg-surface-container-highest transition-all shadow-sm"
                  href="#gateway-matrix"
                >
                  <span className="material-symbols-outlined text-[18px]">
                    account_tree
                  </span>
                  Explore Gateway Matrix &amp; Pricing
                </a>
              </div>
            </div>
            <div className="lg:col-span-4 flex flex-col">
              <div className="relative w-full rounded-lg bg-inverse-surface p-space-md shadow-xl text-inverse-on-surface flex flex-col gap-space-sm">
                <div className="flex items-center justify-between pb-space-xs">
                  <div className="flex items-center gap-space-xs">
                    <span className="w-3 h-3 rounded-full bg-error"></span>
                    <span className="w-3 h-3 rounded-full bg-primary-fixed-dim"></span>
                    <span className="w-3 h-3 rounded-full bg-primary"></span>
                  </div>
                  <span className="font-label-sm text-label-sm text-surface-variant font-mono">
                    nexus-pay-orchestrator.ts
                  </span>
                </div>
                  <div className="font-mono text-body-sm text-surface-container-high leading-relaxed flex flex-col gap-1 overflow-x-auto py-space-xs">
                    <p>
                      <span className="text-primary-fixed-dim">const</span>{" "}
                      intent ={" "}
                      <span className="text-primary-fixed-dim">await</span>{" "}
                      paymentOrchestrator({"{"}
                    </p>
                    <p className="pl-4">
                      amount:{" "}
                      <span className="text-tertiary-fixed-dim">285000</span>,{" "}
                      <span className="text-outline-variant">
                        // AED 2,850.00
                      </span>
                    </p>
                    <p className="pl-4">
                      currency:{" "}
                      <span className="text-primary-fixed">'AED'</span>,
                    </p>
                    <p className="pl-4">
                      capture_method:{" "}
                      <span className="text-primary-fixed">'automatic'</span>,
                    </p>
                    <p className="pl-4">routing_matrix: [</p>
                    <p className="pl-8">
                      <span className="text-surface-variant">
                        {"{ if: 'bin.gcc_domestic', gw: 'checkout_uae' },"}
                      </span>
                    </p>
                    <p className="pl-8">
                      <span className="text-surface-variant">
                        {"{ if: 'method.bnpl', gw: 'tamara_tabby_cascade' },"}
                      </span>
                    </p>
                    <p className="pl-8">
                      <span className="text-surface-variant">
                        {"{ fallback: 'stripe_global_vault' }"}
                      </span>
                    </p>
                    <p className="pl-4">],</p>
                    <p className="pl-4">
                      sca_mode:{" "}
                      <span className="text-primary-fixed">
                        {'3ds2_frictionless_optimal'}
                      </span>
                      ,
                    </p>
                    <p className="pl-4">
                      idempotency_key:{" "}
                      <span className="text-primary-fixed">
                        {'idem_nx_982bfe182741'}
                      </span>
                    </p>
                    <p>{"});"}</p>
                    <p className="text-primary-fixed-dim pt-2">
                      {"> Tokenized & 3DS exemption certified: 412ms"}
                    </p>
                    <p className="text-primary-fixed-dim">
                      {"> Network Token: MDES_PROVISIONED (Visa VTS)"}
                    </p>
                  </div>
                </div>
                <div className="mt-space-xs p-space-xs rounded-DEFAULT bg-surface-container/10 flex items-center justify-between">
                  <span className="font-label-sm text-label-sm text-surface-variant">
                    Active Circuit Breaker
                  </span>
                  <span className="font-label-sm text-label-sm text-primary-fixed-dim flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary-fixed-dim"></span>
                    Failover: Healthy
                  </span>
                </div>
              </div>
            </div>
          </div>
      </section>

      <section className="w-full bg-surface-container-low py-space-md">
        <div className="max-w-7xl mx-auto px-margin-mobile md:px-gutter lg:px-margin">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-gutter items-center">
            <div className="flex flex-col p-space-sm bg-surface-container-lowest rounded-DEFAULT shadow-sm">
              <span className="font-headline-md text-headline-md text-primary font-bold">
                99.98%
              </span>
              <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">
                Payment Uptime Delivered
              </span>
            </div>
            <div className="flex flex-col p-space-sm bg-surface-container-lowest rounded-DEFAULT shadow-sm">
              <span className="font-headline-md text-headline-md text-primary font-bold">
                +28%
              </span>
              <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">
                Mobile Checkout Conversion
              </span>
            </div>
            <div className="flex flex-col p-space-sm bg-surface-container-lowest rounded-DEFAULT shadow-sm">
              <span className="font-headline-md text-headline-md text-primary font-bold">
                &lt; 620ms
              </span>
              <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">
                P95 Auth Processing Latency
              </span>
            </div>
            <div className="flex flex-col p-space-sm bg-surface-container-lowest rounded-DEFAULT shadow-sm">
              <span className="font-headline-md text-headline-md text-primary font-bold">
                $120M+
              </span>
              <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">
                Annual Transaction Volume
              </span>
            </div>
          </div>
        </div>
      </section>

      <section
        className="w-full bg-surface py-space-xl"
        id="gateway-matrix"
      >
        <div className="max-w-7xl mx-auto px-margin-mobile md:px-gutter lg:px-margin flex flex-col gap-space-lg">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-md">
            <div className="flex flex-col gap-space-xs max-w-2xl">
              <span className="font-label-sm text-label-sm text-primary uppercase font-bold tracking-wider">
                Supported Financial Connectors
              </span>
              <h2 className="font-headline-lg text-headline-lg text-on-surface">
                Integrated Gateway &amp; Local Rails Directory
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant">
                We architect directly against primary acquiring APIs and unified
                payment processors, avoiding brittle third-party no-code wrappers
                that inflate latency and compromise data sovereignty.
              </p>
            </div>
            <div className="flex items-center gap-space-xs bg-surface-container-low p-space-xs rounded-full">
              <span className="font-label-sm text-label-sm text-on-surface font-semibold px-space-sm">
                Supported APIs: 24+
              </span>
              <span className="w-2 h-2 rounded-full bg-primary"></span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter">
            <div className="p-space-lg rounded-lg bg-surface-container-lowest shadow-md flex flex-col justify-between gap-space-md">
              <div className="flex flex-col gap-space-sm">
                <div className="w-12 h-12 rounded-DEFAULT bg-primary/10 flex items-center justify-center text-primary">
                  <span className="material-symbols-outlined text-[26px]">
                    credit_card
                  </span>
                </div>
                <h3 className="font-headline-md text-headline-md text-on-surface">
                  Global Processors
                </h3>
                <p className="font-body-md text-body-md text-on-surface-variant">
                  Direct API and Elements tokenization with automated cross-border
                  currency settlement.
                </p>
                <div className="flex flex-col gap-space-xs pt-space-xs font-body-sm text-body-sm text-on-surface">
                  <div className="flex items-center justify-between p-space-xs rounded-DEFAULT bg-surface-container-low">
                    <span className="font-semibold">Stripe Elements &amp; Billing</span>
                    <span className="font-label-sm text-label-sm text-primary font-bold">
                      Certified
                    </span>
                  </div>
                  <div className="flex items-center justify-between p-space-xs rounded-DEFAULT bg-surface-container-low">
                    <span className="font-semibold">Adyen Drop-in &amp; Webhook</span>
                    <span className="font-label-sm text-label-sm text-primary font-bold">
                      Direct API
                    </span>
                  </div>
                  <div className="flex items-center justify-between p-space-xs rounded-DEFAULT bg-surface-container-low">
                    <span className="font-semibold">
                      Checkout.com (Unified API)
                    </span>
                    <span className="font-label-sm text-label-sm text-primary font-bold">
                      NAS Compliant
                    </span>
                  </div>
                  <div className="flex items-center justify-between p-space-xs rounded-DEFAULT bg-surface-container-low">
                    <span className="font-semibold">
                      Braintree &amp; PayPal Commerce
                    </span>
                    <span className="font-label-sm text-label-sm text-primary font-bold">
                      v3 SDK
                    </span>
                  </div>
                </div>
              </div>
              <div className="pt-space-xs">
                <span className="font-label-sm text-label-sm text-secondary uppercase tracking-widest font-bold">
                  Global Card Schemes: Visa, MC, Amex
                </span>
              </div>
            </div>

            <div className="p-space-lg rounded-lg bg-surface-container-lowest shadow-md flex flex-col justify-between gap-space-md">
              <div className="flex flex-col gap-space-sm">
                <div className="w-12 h-12 rounded-DEFAULT bg-tertiary/10 flex items-center justify-center text-tertiary">
                  <span className="material-symbols-outlined text-[26px]">
                    payments
                  </span>
                </div>
                <h3 className="font-headline-md text-headline-md text-on-surface">
                  GCC / MENA &amp; BNPL
                </h3>
                <p className="font-body-md text-body-md text-on-surface-variant">
                  Localized acquiring, zero FX markups, Pay-in-3/4 widgets, and
                  UAE/KSA regulatory e-invoicing.
                </p>
                <div className="flex flex-col gap-space-xs pt-space-xs font-body-sm text-body-sm text-on-surface">
                  <div className="flex items-center justify-between p-space-xs rounded-DEFAULT bg-surface-container-low">
                    <span className="font-semibold">Tamara &amp; Tabby (BNPL)</span>
                    <span className="font-label-sm text-label-sm text-tertiary font-bold">
                      Pre-Auth + Split
                    </span>
                  </div>
                  <div className="flex items-center justify-between p-space-xs rounded-DEFAULT bg-surface-container-low">
                    <span className="font-semibold">Network Intl (N-Genius)</span>
                    <span className="font-label-sm text-label-sm text-tertiary font-bold">
                      UAE Acquiring
                    </span>
                  </div>
                  <div className="flex items-center justify-between p-space-xs rounded-DEFAULT bg-surface-container-low">
                    <span className="font-semibold">Telr, PayTabs &amp; HyperPay</span>
                    <span className="font-label-sm text-label-sm text-tertiary font-bold">
                      Mada / KNET
                    </span>
                  </div>
                  <div className="flex items-center justify-between p-space-xs rounded-DEFAULT bg-surface-container-low">
                    <span className="font-semibold">Fawry &amp; BenefitPay</span>
                    <span className="font-label-sm text-label-sm text-tertiary font-bold">
                      Cash/Instant
                    </span>
                  </div>
                </div>
              </div>
              <div className="pt-space-xs">
                <span className="font-label-sm text-label-sm text-secondary uppercase tracking-widest font-bold">
                  FTA VAT &amp; ZATCA Stage-2 Ready
                </span>
              </div>
            </div>

            <div className="p-space-lg rounded-lg bg-surface-container-lowest shadow-md flex flex-col justify-between gap-space-md">
              <div className="flex flex-col gap-space-sm">
                <div className="w-12 h-12 rounded-DEFAULT bg-primary-container/20 flex items-center justify-center text-primary-container">
                  <span className="material-symbols-outlined text-[26px]">
                    smartphone
                  </span>
                </div>
                <h3 className="font-headline-md text-headline-md text-on-surface">
                  Digital Wallets
                </h3>
                <p className="font-body-md text-body-md text-on-surface-variant">
                  1-Click accelerated biometric checkouts cutting mobile funnel
                  friction across Web and Mobile.
                </p>
                <div className="flex flex-col gap-space-xs pt-space-xs font-body-sm text-body-sm text-on-surface">
                  <div className="flex items-center justify-between p-space-xs rounded-DEFAULT bg-surface-container-low">
                    <span className="font-semibold">Apple Pay (Web &amp; iOS)</span>
                    <span className="font-label-sm text-label-sm text-primary font-bold">
                      Merchant ID Cert
                    </span>
                  </div>
                  <div className="flex items-center justify-between p-space-xs rounded-DEFAULT bg-surface-container-low">
                    <span className="font-semibold">Google Pay API</span>
                    <span className="font-label-sm text-label-sm text-primary font-bold">
                      Dynamic Auth
                    </span>
                  </div>
                  <div className="flex items-center justify-between p-space-xs rounded-DEFAULT bg-surface-container-low">
                    <span className="font-semibold">Click to Pay (EMVCo)</span>
                    <span className="font-label-sm text-label-sm text-primary font-bold">
                      SRC Unified
                    </span>
                  </div>
                  <div className="flex items-center justify-between p-space-xs rounded-DEFAULT bg-surface-container-low">
                    <span className="font-semibold">Samsung Pay / Wallet</span>
                    <span className="font-label-sm text-label-sm text-primary font-bold">
                      MST/NFC Pass
                    </span>
                  </div>
                </div>
              </div>
              <div className="pt-space-xs">
                <span className="font-label-sm text-label-sm text-secondary uppercase tracking-widest font-bold">
                  Touch/Face ID Biometric Auth
                </span>
              </div>
            </div>

            <div className="p-space-lg rounded-lg bg-surface-container-lowest shadow-md flex flex-col justify-between gap-space-md">
              <div className="flex flex-col gap-space-sm">
                <div className="w-12 h-12 rounded-DEFAULT bg-secondary-container flex items-center justify-center text-on-secondary-fixed">
                  <span className="material-symbols-outlined text-[26px]">
                    autorenew
                  </span>
                </div>
                <h3 className="font-headline-md text-headline-md text-on-surface">
                  Recurring &amp; SaaS
                </h3>
                <p className="font-body-md text-body-md text-on-surface-variant">
                  Automated proration, multi-tier seat billing, dunning rules,
                  and account updaters.
                </p>
                <div className="flex flex-col gap-space-xs pt-space-xs font-body-sm text-body-sm text-on-surface">
                  <div className="flex items-center justify-between p-space-xs rounded-DEFAULT bg-surface-container-low">
                    <span className="font-semibold">Stripe Billing Engine</span>
                    <span className="font-label-sm text-label-sm text-secondary font-bold">
                      Usage-Based
                    </span>
                  </div>
                  <div className="flex items-center justify-between p-space-xs rounded-DEFAULT bg-surface-container-low">
                    <span className="font-semibold">Chargebee &amp; Recurly</span>
                    <span className="font-label-sm text-label-sm text-secondary font-bold">
                      Sync Connect
                    </span>
                  </div>
                  <div className="flex items-center justify-between p-space-xs rounded-DEFAULT bg-surface-container-low">
                    <span className="font-semibold">Paddle Merchant of Record</span>
                    <span className="font-label-sm text-label-sm text-secondary font-bold">
                      Global VAT
                    </span>
                  </div>
                  <div className="flex items-center justify-between p-space-xs rounded-DEFAULT bg-surface-container-low">
                    <span className="font-semibold">Visa/Mastercard VAU/ABU</span>
                    <span className="font-label-sm text-label-sm text-secondary font-bold">
                      Auto Update
                    </span>
                  </div>
                </div>
              </div>
              <div className="pt-space-xs">
                <span className="font-label-sm text-label-sm text-secondary uppercase tracking-widest font-bold">
                  Smart Smart Retries &amp; Churn Defense
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full bg-surface-container-low py-space-xl">
        <div className="max-w-7xl mx-auto px-margin-mobile md:px-gutter lg:px-margin flex flex-col gap-space-lg">
          <div className="flex flex-col gap-space-xs max-w-3xl">
            <span className="font-label-sm text-label-sm text-primary uppercase font-bold tracking-wider">
              Production Topology
            </span>
            <h2 className="font-headline-lg text-headline-lg text-on-surface">
              Zero-Trust Payment Tokenization &amp; Webhook Orchestration Pipeline
            </h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant">
              Complete structural isolation of sensitive payment information. Our
              end-to-end payment topologies ensure customer PANs never touch your
              private servers, reducing PCI assessment scope from months to a
              trivial SAQ-A attestation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-space-md">
            <div className="p-space-md rounded-lg bg-surface-container-lowest shadow-sm flex flex-col gap-space-sm">
              <div className="flex items-center justify-between">
                <span className="w-8 h-8 rounded-full bg-primary/10 text-primary font-bold flex items-center justify-center font-label-sm text-label-sm">
                  01
                </span>
                <span className="font-label-sm text-label-sm text-on-surface-variant font-mono">
                  Scoped Handshake
                </span>
              </div>
              <h4 className="font-headline-sm text-headline-sm text-on-surface">
                Ephemeral Secret
              </h4>
              <p className="font-body-sm text-body-sm text-on-surface-variant">
                Client Browser or Native Mobile SDK requests single-use,
                time-bounded <code>client_secret</code> from your authenticated
                API gateway.
              </p>
              <div className="mt-auto pt-space-xs">
                <span className="inline-block px-space-xs py-0.5 rounded-DEFAULT bg-surface-container text-on-surface-variant font-mono font-label-sm text-label-sm">
                  TTL: 900s
                </span>
              </div>
            </div>

            <div className="p-space-md rounded-lg bg-surface-container-lowest shadow-sm flex flex-col gap-space-sm">
              <div className="flex items-center justify-between">
                <span className="w-8 h-8 rounded-full bg-primary/10 text-primary font-bold flex items-center justify-center font-label-sm text-label-sm">
                  02
                </span>
                <span className="font-label-sm text-label-sm text-on-surface-variant font-mono">
                  Direct Vault
                </span>
              </div>
              <h4 className="font-headline-sm text-headline-sm text-on-surface">
                Direct Vault Token
              </h4>
              <p className="font-body-sm text-body-sm text-on-surface-variant">
                Cardholder PAN &amp; CVV post directly into the Level 1 PCI Vault
                via sandboxed iFrames or encrypted SDK, generating a persistent{" "}
                <code>payment_method_id</code>.
              </p>
              <div className="mt-auto pt-space-xs">
                <span className="inline-block px-space-xs py-0.5 rounded-DEFAULT bg-primary/10 text-primary font-mono font-label-sm text-label-sm">
                  SAQ-A Isolation
                </span>
              </div>
            </div>

            <div className="p-space-md rounded-lg bg-surface-container-lowest shadow-sm flex flex-col gap-space-sm">
              <div className="flex items-center justify-between">
                <span className="w-8 h-8 rounded-full bg-primary/10 text-primary font-bold flex items-center justify-center font-label-sm text-label-sm">
                  03
                </span>
                <span className="font-label-sm text-label-sm text-on-surface-variant font-mono">
                  Dynamic Auth
                </span>
              </div>
              <h4 className="font-headline-sm text-headline-sm text-on-surface">
                Smart 3DS Routing
              </h4>
              <p className="font-body-sm text-body-sm text-on-surface-variant">
                Backend Engine executes authorization with automated TRA exemption
                rules and frictionless 3DS2.2 biometric validation.
              </p>
              <div className="mt-auto pt-space-xs">
                <span className="inline-block px-space-xs py-0.5 rounded-DEFAULT bg-surface-container text-on-surface-variant font-mono font-label-sm text-label-sm">
                  &lt; 350ms Challenge
                </span>
              </div>
            </div>

            <div className="p-space-md rounded-lg bg-surface-container-lowest shadow-sm flex flex-col gap-space-sm">
              <div className="flex items-center justify-between">
                <span className="w-8 h-8 rounded-full bg-primary/10 text-primary font-bold flex items-center justify-center font-label-sm text-label-sm">
                  04
                </span>
                <span className="font-label-sm text-label-sm text-on-surface-variant font-mono">
                  Queue Listener
                </span>
              </div>
              <h4 className="font-headline-sm text-headline-sm text-on-surface">
                Idempotent Webhook
              </h4>
              <p className="font-body-sm text-body-sm text-on-surface-variant">
                Serverless SQS/Redis consumer verifies HMAC-SHA256 signature,
                acquires a distributed lock, and executes state changes with zero
                double charges.
              </p>
              <div className="mt-auto pt-space-xs">
                <span className="inline-block px-space-xs py-0.5 rounded-DEFAULT bg-primary/10 text-primary font-mono font-label-sm text-label-sm">
                  Lock: Redis SETNX
                </span>
              </div>
            </div>

            <div className="p-space-md rounded-lg bg-surface-container-lowest shadow-sm flex flex-col gap-space-sm">
              <div className="flex items-center justify-between">
                <span className="w-8 h-8 rounded-full bg-primary/10 text-primary font-bold flex items-center justify-center font-label-sm text-label-sm">
                  05
                </span>
                <span className="font-label-sm text-label-sm text-on-surface-variant font-mono">
                  Ledger Reconcile
                </span>
              </div>
              <h4 className="font-headline-sm text-headline-sm text-on-surface">
                ERP &amp; VAT Sync
              </h4>
              <p className="font-body-sm text-body-sm text-on-surface-variant">
                Instantaneous reconciliation dispatching normalized invoice events
                to NetSuite, SAP, Xero, and UAE FTA / ZATCA compliant e-tax
                engines.
              </p>
              <div className="mt-auto pt-space-xs">
                <span className="inline-block px-space-xs py-0.5 rounded-DEFAULT bg-surface-container text-on-surface-variant font-mono font-label-sm text-label-sm">
                  Zero Reconciliation Drift
                </span>
              </div>
            </div>
          </div>

          <div className="p-space-lg rounded-lg bg-inverse-surface text-inverse-on-surface shadow-xl flex flex-col gap-space-md">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-space-sm">
              <div className="flex items-center gap-space-xs">
                <span className="material-symbols-outlined text-primary-fixed-dim text-[20px]">
                  monitor_heart
                </span>
                <span className="font-headline-sm text-headline-sm">
                  Simulated Resilient Event Ingestion
                </span>
              </div>
              <div className="flex items-center gap-space-xs font-label-sm text-label-sm">
                <span className="text-surface-variant">Distributed Cluster:</span>
                <span className="font-mono text-primary-fixed-dim">
                  aws-me-central-1 (UAE)
                </span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-space-md bg-surface-container/10 p-space-md rounded-DEFAULT">
              <div className="flex flex-col gap-1">
                <span className="font-label-sm text-label-sm text-surface-variant uppercase tracking-wider">
                  Gateway A (Stripe UAE)
                </span>
                <div className="flex items-center justify-between text-primary-fixed">
                  <span className="font-headline-sm text-headline-sm font-mono">
                    ACTIVE (Primary)
                  </span>
                  <span className="font-label-sm text-label-sm">99.99% OK</span>
                </div>
                <div className="w-full h-1.5 rounded-full bg-surface-container-high/20 overflow-hidden">
                  <div className="h-full bg-primary-fixed w-[98%]"></div>
                </div>
              </div>
              <div className="flex flex-col gap-1">
                <span className="font-label-sm text-label-sm text-surface-variant uppercase tracking-wider">
                  Gateway B (Checkout.com)
                </span>
                <div className="flex items-center justify-between text-secondary-fixed">
                  <span className="font-headline-sm text-headline-sm font-mono">
                    STANDBY (Warm)
                  </span>
                  <span className="font-label-sm text-label-sm">Healthcheck 200</span>
                </div>
                <div className="w-full h-1.5 rounded-full bg-surface-container-high/20 overflow-hidden">
                  <div className="h-full bg-tertiary-fixed-dim w-full"></div>
                </div>
              </div>
              <div className="flex flex-col gap-1">
                <span className="font-label-sm text-label-sm text-surface-variant uppercase tracking-wider">
                  Local Rails (Tamara / Tabby)
                </span>
                <div className="flex items-center justify-between text-primary-fixed">
                  <span className="font-headline-sm text-headline-sm font-mono">
                    DEDICATED BNPL
                  </span>
                  <span className="font-label-sm text-label-sm">Direct Callback</span>
                </div>
                <div className="w-full h-1.5 rounded-full bg-surface-container-high/20 overflow-hidden">
                  <div className="h-full bg-primary-fixed w-[94%]"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full bg-surface py-space-xl">
        <div className="max-w-7xl mx-auto px-margin-mobile md:px-gutter lg:px-margin flex flex-col gap-space-lg">
          <div className="flex flex-col gap-space-xs max-w-3xl">
            <span className="font-label-sm text-label-sm text-primary uppercase font-bold tracking-wider">
              Engineering Disciplines
            </span>
            <h2 className="font-headline-lg text-headline-lg text-on-surface">
              Architectural Modules Built for Scaled Volumes
            </h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant">
              We don't just plug in payment forms. We design distributed
              financial engines that minimize transaction fees, maximize card
              acceptance rates, and safeguard your balance sheets against
              edge-case reconciliation drop-offs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter">
            <div className="p-space-lg rounded-lg bg-surface-container-lowest shadow-sm flex flex-col gap-space-sm hover:-translate-y-1 transition-transform">
              <div className="w-10 h-10 rounded-DEFAULT bg-primary/10 flex items-center justify-center text-primary">
                <span className="material-symbols-outlined text-[24px]">
                  vpn_key
                </span>
              </div>
              <h3 className="font-headline-sm text-headline-sm text-on-surface">
                Card Vaulting &amp; Network Tokenization
              </h3>
              <p className="font-body-md text-body-md text-on-surface-variant">
                Upgrade standard gateway customer IDs to Card Scheme Network
                Tokens (Visa VTS / Mastercard MDES). Gain +3% to 5% higher
                authorization rates, eliminate declined expired cards
                automatically, and secure lower interchange costs.
              </p>
              <ul className="flex flex-col gap-space-xs pt-space-xs font-body-sm text-body-sm text-on-surface">
                <li className="flex items-center gap-space-xs">
                  <span className="w-4 h-4 rounded-full bg-primary/10 text-primary flex items-center justify-center text-[10px] font-bold">
                    ✓
                  </span>
                  Gateway-agnostic token portability
                </li>
                <li className="flex items-center gap-space-xs">
                  <span className="w-4 h-4 rounded-full bg-primary/10 text-primary flex items-center justify-center text-[10px] font-bold">
                    ✓
                  </span>
                  Automatic Card Updater (VAU/ABU) sync
                </li>
              </ul>
            </div>

            <div className="p-space-lg rounded-lg bg-surface-container-lowest shadow-sm flex flex-col gap-space-sm hover:-translate-y-1 transition-transform">
              <div className="w-10 h-10 rounded-DEFAULT bg-primary/10 flex items-center justify-center text-primary">
                <span className="material-symbols-outlined text-[24px]">
                  verified_user
                </span>
              </div>
              <h3 className="font-headline-sm text-headline-sm text-on-surface">
                Smart 3D Secure (3DS2) Dynamic Cascading
              </h3>
              <p className="font-body-md text-body-md text-on-surface-variant">
                Eliminate checkout friction for legitimate shoppers while staying
                strictly PSD2 / SCA compliant. Dynamic risk-scoring engine
                applies SCA exemptions (Low-Value, Transaction Risk Analysis -
                TRA, Whitelisted Merchant) in real-time.
              </p>
              <ul className="flex flex-col gap-space-xs pt-space-xs font-body-sm text-body-sm text-on-surface">
                <li className="flex items-center gap-space-xs">
                  <span className="w-4 h-4 rounded-full bg-primary/10 text-primary flex items-center justify-center text-[10px] font-bold">
                    ✓
                  </span>
                  Frictionless biometric fallback for Apple/Google Pay
                </li>
                <li className="flex items-center gap-space-xs">
                  <span className="w-4 h-4 rounded-full bg-primary/10 text-primary flex items-center justify-center text-[10px] font-bold">
                    ✓
                  </span>
                  Radar / Sift heuristic challenge orchestration
                </li>
              </ul>
            </div>

            <div className="p-space-lg rounded-lg bg-surface-container-lowest shadow-sm flex flex-col gap-space-sm hover:-translate-y-1 transition-transform">
              <div className="w-10 h-10 rounded-DEFAULT bg-primary/10 flex items-center justify-center text-primary">
                <span className="material-symbols-outlined text-[24px]">
                  currency_exchange
                </span>
              </div>
              <h3 className="font-headline-sm text-headline-sm text-on-surface">
                Multi-Currency &amp; Local Payment Rails (LPMs)
              </h3>
              <p className="font-body-md text-body-md text-on-surface-variant">
                Settle in USD, EUR, GBP, AED, and SAR without predatory
                conversion penalties. Dynamically present local payment favorites
                based on client IP, device locale, and basket composition (KNET,
                Mada, iDEAL, Bancontact).
              </p>
              <ul className="flex flex-col gap-space-xs pt-space-xs font-body-sm text-body-sm text-on-surface">
                <li className="flex items-center gap-space-xs">
                  <span className="w-4 h-4 rounded-full bg-primary/10 text-primary flex items-center justify-center text-[10px] font-bold">
                    ✓
                  </span>
                  Dynamic Currency Conversion (DCC) margin control
                </li>
                <li className="flex items-center gap-space-xs">
                  <span className="w-4 h-4 rounded-full bg-primary/10 text-primary flex items-center justify-center text-[10px] font-bold">
                    ✓
                  </span>
                  Instant split checkout widgets for regional BNPL
                </li>
              </ul>
            </div>

            <div className="p-space-lg rounded-lg bg-surface-container-lowest shadow-sm flex flex-col gap-space-sm hover:-translate-y-1 transition-transform">
              <div className="w-10 h-10 rounded-DEFAULT bg-primary/10 flex items-center justify-center text-primary">
                <span className="material-symbols-outlined text-[24px]">
                  bolt
                </span>
              </div>
              <h3 className="font-headline-sm text-headline-sm text-on-surface">
                Idempotent Webhooks &amp; Ledger Locking
              </h3>
              <p className="font-body-md text-body-md text-on-surface-variant">
                Guaranteed protection against duplicate billing and uncaptured
                order drop-offs. We deploy Redis-based distributed mutex locks
                and cryptographic header verification, resolving out-of-order
                network race conditions.
              </p>
              <ul className="flex flex-col gap-space-xs pt-space-xs font-body-sm text-body-sm text-on-surface">
                <li className="flex items-center gap-space-xs">
                  <span className="w-4 h-4 rounded-full bg-primary/10 text-primary flex items-center justify-center text-[10px] font-bold">
                    ✓
                  </span>
                  Dead-letter queue (DLQ) replay instrumentation
                </li>
                <li className="flex items-center gap-space-xs">
                  <span className="w-4 h-4 rounded-full bg-primary/10 text-primary flex items-center justify-center text-[10px] font-bold">
                    ✓
                  </span>
                  Cryptographic HMAC-SHA256 signature verification
                </li>
              </ul>
            </div>

            <div className="p-space-lg rounded-lg bg-surface-container-lowest shadow-sm flex flex-col gap-space-sm hover:-translate-y-1 transition-transform">
              <div className="w-10 h-10 rounded-DEFAULT bg-primary/10 flex items-center justify-center text-primary">
                <span className="material-symbols-outlined text-[24px]">
                  touch_app
                </span>
              </div>
              <h3 className="font-headline-sm text-headline-sm text-on-surface">
                Accelerated One-Click Checkout Sheets
              </h3>
              <p className="font-body-md text-body-md text-on-surface-variant">
                Cut standard mobile checkout forms down to a single Face ID click.
                Native Apple Pay Payment Request APIs and Google Pay Web SDK
                embedded directly into product display and slide-out cart
                drawers.
              </p>
              <ul className="flex flex-col gap-space-xs pt-space-xs font-body-sm text-body-sm text-on-surface">
                <li className="flex items-center gap-space-xs">
                  <span className="w-4 h-4 rounded-full bg-primary/10 text-primary flex items-center justify-center text-[10px] font-bold">
                    ✓
                  </span>
                  Address and shipping method dynamic estimation
                </li>
                <li className="flex items-center gap-space-xs">
                  <span className="w-4 h-4 rounded-full bg-primary/10 text-primary flex items-center justify-center text-[10px] font-bold">
                    ✓
                  </span>
                  Up to +28% measured conversion on mobile traffic
                </li>
              </ul>
            </div>

            <div className="p-space-lg rounded-lg bg-surface-container-lowest shadow-sm flex flex-col gap-space-sm hover:-translate-y-1 transition-transform">
              <div className="w-10 h-10 rounded-DEFAULT bg-primary/10 flex items-center justify-center text-primary">
                <span className="material-symbols-outlined text-[24px]">
                  account_balance_wallet
                </span>
              </div>
              <h3 className="font-headline-sm text-headline-sm text-on-surface">
                Marketplace Split Payouts &amp; Escrow
              </h3>
              <p className="font-body-md text-body-md text-on-surface-variant">
                Architect compliant multi-party payout flows via Stripe
                Connect, Adyen for Platforms, or custom escrow. Automated fee
                withholding, vendor KYB verification, and automated payouts to
                local banking rails.
              </p>
              <ul className="flex flex-col gap-space-xs pt-space-xs font-body-sm text-body-sm text-on-surface">
                <li className="flex items-center gap-space-xs">
                  <span className="w-4 h-4 rounded-full bg-primary/10 text-primary flex items-center justify-center text-[10px] font-bold">
                    ✓
                  </span>
                  Split charges with automatic application fee withholding
                </li>
                <li className="flex items-center gap-space-xs">
                  <span className="w-4 h-4 rounded-full bg-primary/10 text-primary flex items-center justify-center text-[10px] font-bold">
                    ✓
                  </span>
                  Automated vendor 1099 / UAE VAT deduction logs
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full bg-surface-container-low py-space-xl">
        <div className="max-w-7xl mx-auto px-margin-mobile md:px-gutter lg:px-margin flex flex-col gap-space-lg">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-md">
            <div className="flex flex-col gap-space-xs max-w-2xl">
              <span className="font-label-sm text-label-sm text-primary uppercase font-bold tracking-wider">
                Production Case Studies
              </span>
              <h2 className="font-headline-lg text-headline-lg text-on-surface">
                High-Volume Deployments In Production
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant">
                Real architectural benchmarks from enterprise commerce and SaaS
                ventures running on our payment infrastructure.
              </p>
            </div>
            <div className="inline-flex items-center gap-space-xs p-space-xs bg-surface-container-lowest rounded-full shadow-sm text-on-surface font-label-sm text-label-sm">
              <span className="w-2 h-2 rounded-full bg-primary"></span>
              <span>Verified Production Systems</span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-gutter">
            <div className="flex flex-col rounded-lg bg-surface-container-lowest overflow-hidden shadow-md">
              <div className="relative w-full h-48 overflow-hidden bg-surface-container-high">
                <Image
                  alt="Minimalist luxury fashion showroom interior with clean architectural lines, warm recessed lighting, marble fixtures, and an elegant digital checkout terminal reflecting deep emerald and white studio tones."
                  className="w-full h-full object-cover"
                  src="/images/payment-gateway/case1-fashion.jpg"
                  width={400}
                  height={192}
                />
                <div className="absolute top-space-xs right-space-xs px-space-xs py-0.5 rounded-full bg-surface-container-lowest/90 backdrop-blur-sm text-on-surface font-label-sm text-label-sm font-semibold">
                  Shopify Plus + Adyen / Stripe
                </div>
              </div>
              <div className="p-space-lg flex flex-col gap-space-md flex-1 justify-between">
                <div className="flex flex-col gap-space-xs">
                  <span className="font-label-sm text-label-sm text-primary uppercase font-bold">
                    D2C Global Retail
                  </span>
                  <h3 className="font-headline-sm text-headline-sm text-on-surface">
                    Global Luxury D2C Fashion Brand
                  </h3>
                  <p className="font-body-md text-body-md text-on-surface-variant">
                    Engineered hybrid multi-currency tokenization routing across 14
                    markets with 1-click Apple Pay integration directly in product
                    detail drawers.
                  </p>
                </div>
                <div className="p-space-sm rounded-DEFAULT bg-surface-container-low flex flex-col gap-space-xs">
                  <div className="flex items-center justify-between">
                    <span className="font-body-sm text-body-sm text-on-surface-variant">
                      Mobile Conversion Lift
                    </span>
                    <span className="font-headline-sm text-headline-sm text-primary font-bold">
                      +22%
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="font-body-sm text-body-sm text-on-surface-variant">
                      Processed Volume
                    </span>
                    <span className="font-headline-sm text-headline-sm text-on-surface font-bold">
                      $14,200,000
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="font-body-sm text-body-sm text-on-surface-variant">
                      Fraud / Chargeback Rate
                    </span>
                    <span className="font-headline-sm text-headline-sm text-primary font-bold">
                      0.00%
                    </span>
                  </div>
                </div>
                <div className="pt-space-xs flex items-center gap-space-xs text-on-surface font-label-sm text-label-sm">
                  <span className="material-symbols-outlined text-primary text-[18px]">
                    verified
                  </span>
                  <span>Zero-downtime Black Friday peak traffic</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col rounded-lg bg-surface-container-lowest overflow-hidden shadow-md">
              <div className="relative w-full h-48 overflow-hidden bg-surface-container-high">
                <Image
                  alt="High-tech enterprise logistics and warehouse fulfillment hub with automated conveyor systems, industrial tablet scanners displaying clean emerald data graphs and dark blue UI readouts."
                  className="w-full h-full object-cover"
                  src="/images/payment-gateway/case2-logistics.jpg"
                  width={400}
                  height={192}
                />
                <div className="absolute top-space-xs right-space-xs px-space-xs py-0.5 rounded-full bg-surface-container-lowest/90 backdrop-blur-sm text-on-surface font-label-sm text-label-sm font-semibold">
                  Stripe Connect Custom Engine
                </div>
              </div>
              <div className="p-space-lg flex flex-col gap-space-md flex-1 justify-between">
                <div className="flex flex-col gap-space-xs">
                  <span className="font-label-sm text-label-sm text-tertiary uppercase font-bold">
                    B2B Trade &amp; Marketplace
                  </span>
                  <h3 className="font-headline-sm text-headline-sm text-on-surface">
                    Enterprise Wholesale Marketplace
                  </h3>
                  <p className="font-body-md text-body-md text-on-surface-variant">
                    Constructed automated escrow settlement with split-payouts to
                    450+ vetted manufacturers, handling international wire, ACH,
                    and automated invoicing.
                  </p>
                </div>
                <div className="p-space-sm rounded-DEFAULT bg-surface-container-low flex flex-col gap-space-xs">
                  <div className="flex items-center justify-between">
                    <span className="font-body-sm text-body-sm text-on-surface-variant">
                      Automated Payout Rate
                    </span>
                    <span className="font-headline-sm text-headline-sm text-tertiary font-bold">
                      100%
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="font-body-sm text-body-sm text-on-surface-variant">
                      Active Supplier Accounts
                    </span>
                    <span className="font-headline-sm text-headline-sm text-on-surface font-bold">
                      450+ KYB
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="font-body-sm text-body-sm text-on-surface-variant">
                      Ledger Update Speed
                    </span>
                    <span className="font-headline-sm text-headline-sm text-tertiary font-bold">
                      4.2ms
                    </span>
                  </div>
                </div>
                <div className="pt-space-xs flex items-center gap-space-xs text-on-surface font-label-sm text-label-sm">
                  <span className="material-symbols-outlined text-tertiary text-[18px]">
                    verified
                  </span>
                  <span>Fully automated tax and withholding sync</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col rounded-lg bg-surface-container-lowest overflow-hidden shadow-md">
              <div className="relative w-full h-48 overflow-hidden bg-surface-container-high">
                <Image
                  alt="Modern architectural shopping flagship in Dubai featuring sleek digital kiosks, smartphone customer payment interactions, soft emerald ambient display lighting, and high-contrast signage."
                  className="w-full h-full object-cover"
                  src="/images/payment-gateway/case3-gcc.jpg"
                  width={400}
                  height={192}
                />
                <div className="absolute top-space-xs right-space-xs px-space-xs py-0.5 rounded-full bg-surface-container-lowest/90 backdrop-blur-sm text-on-surface font-label-sm text-label-sm font-semibold">
                  Tamara + Tabby + Checkout.com
                </div>
              </div>
              <div className="p-space-lg flex flex-col gap-space-md flex-1 justify-between">
                <div className="flex flex-col gap-space-xs">
                  <span className="font-label-sm text-label-sm text-primary uppercase font-bold">
                    MENA Omnichannel
                  </span>
                  <h3 className="font-headline-sm text-headline-sm text-on-surface">
                    GCC High-Growth Omnichannel Retailer
                  </h3>
                  <p className="font-body-md text-body-md text-on-surface-variant">
                    Integrated multi-gateway fallback with native Pay-in-4 widgets,
                    instant Mada settlement, and direct UAE FTA VAT compliant
                    e-receipts.
                  </p>
                </div>
                <div className="p-space-sm rounded-DEFAULT bg-surface-container-low flex flex-col gap-space-xs">
                  <div className="flex items-center justify-between">
                    <span className="font-body-sm text-body-sm text-on-surface-variant">
                      Average Order Value (AOV)
                    </span>
                    <span className="font-headline-sm text-headline-sm text-primary font-bold">
                      +38%
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="font-body-sm text-body-sm text-on-surface-variant">
                      Webhook Delivery Rate
                    </span>
                    <span className="font-headline-sm text-headline-sm text-on-surface font-bold">
                      99.98%
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="font-body-sm text-body-sm text-on-surface-variant">
                      FTA VAT E-Receipt Sync
                    </span>
                    <span className="font-headline-sm text-headline-sm text-primary font-bold">
                      &lt; 1.2s
                    </span>
                  </div>
                </div>
                <div className="pt-space-xs flex items-center gap-space-xs text-on-surface font-label-sm text-label-sm">
                  <span className="material-symbols-outlined text-primary text-[18px]">
                    verified
                  </span>
                  <span>Zero drop-off during UAE National Day sale</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full bg-surface py-space-xl">
        <div className="max-w-7xl mx-auto px-margin-mobile md:px-gutter lg:px-margin flex flex-col gap-space-lg">
          <div className="text-center max-w-3xl mx-auto flex flex-col gap-space-xs">
            <span className="font-label-sm text-label-sm text-primary uppercase font-bold tracking-wider">
              Transparent Engineering Sprints
            </span>
            <h2 className="font-headline-lg text-headline-lg text-on-surface">
              Fixed-Scope, Guaranteed Delivery Packages
            </h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant">
              No vague enterprise hourly estimates. Predictable 2-5 week
              execution sprints driven by dedicated Staff FinTech Engineers and
              certified PCI-DSS specialists.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-gutter items-stretch">
            <div className="p-space-lg rounded-lg bg-surface-container-lowest shadow-md flex flex-col justify-between gap-space-lg">
              <div className="flex flex-col gap-space-md">
                <div className="flex items-center justify-between">
                  <span className="font-label-sm text-label-sm text-secondary uppercase font-bold">
                    Tier 01 // Foundation
                  </span>
                  <span className="px-space-xs py-0.5 rounded-full bg-surface-container font-mono font-label-sm text-label-sm text-on-surface">
                    2-3 WEEKS
                  </span>
                </div>
                <div className="flex flex-col gap-space-xs">
                  <h3 className="font-headline-md text-headline-md text-on-surface">
                    Turnkey Gateway &amp; Digital Wallets
                  </h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">
                    Ideal for scaling brands upgrading from basic plug-and-play
                    checkouts to optimized, zero-drop tokenization.
                  </p>
                </div>
                <div className="flex items-baseline gap-1">
                  <span className="font-headline-xl text-headline-xl text-on-surface font-bold">
                    $10,000
                  </span>
                  <span className="font-body-md text-body-md text-on-surface-variant">
                    – $18,000
                  </span>
                </div>
                <div className="p-space-xs rounded-DEFAULT bg-surface-container-low font-body-sm text-body-sm text-on-surface-variant">
                  <span className="font-semibold text-on-surface">
                    Dedicated Team:
                  </span>{" "}
                  1 Staff FinTech Eng + 1 QA Automation Eng
                </div>
                <div className="flex flex-col gap-space-xs pt-space-xs">
                  <span className="font-label-sm text-label-sm text-on-surface uppercase font-bold tracking-wider">
                    Sprint Deliverables:
                  </span>
                  <ul className="flex flex-col gap-space-xs font-body-sm text-body-sm text-on-surface">
                    <li className="flex items-start gap-space-xs">
                      <span className="w-4 h-4 rounded-full bg-primary text-on-primary flex items-center justify-center text-[10px] font-bold mt-0.5 shrink-0">
                        ✓
                      </span>
                      Single or Dual Gateway Setup (Stripe, Checkout.com, or
                      Adyen)
                    </li>
                    <li className="flex items-start gap-space-xs">
                      <span className="w-4 h-4 rounded-full bg-primary text-on-primary flex items-center justify-center text-[10px] font-bold mt-0.5 shrink-0">
                        ✓
                      </span>
                      Apple Pay Web/iOS &amp; Google Pay API integration
                    </li>
                    <li className="flex items-start gap-space-xs">
                      <span className="w-4 h-4 rounded-full bg-primary text-on-primary flex items-center justify-center text-[10px] font-bold mt-0.5 shrink-0">
                        ✓
                      </span>
                      Standard Webhook Receiver with Redis Idempotency checks
                    </li>
                    <li className="flex items-start gap-space-xs">
                      <span className="w-4 h-4 rounded-full bg-primary text-on-primary flex items-center justify-center text-[10px] font-bold mt-0.5 shrink-0">
                        ✓
                      </span>
                      3DS2 compliant frictionless card element forms
                    </li>
                    <li className="flex items-start gap-space-xs">
                      <span className="w-4 h-4 rounded-full bg-primary text-on-primary flex items-center justify-center text-[10px] font-bold mt-0.5 shrink-0">
                        ✓
                      </span>
                      Automated Sandbox Suite with 50+ payment card test cases
                    </li>
                  </ul>
                </div>
              </div>
              <a
                className="w-full inline-flex items-center justify-center py-space-sm rounded-full bg-surface-container-high text-on-surface font-label-lg text-label-lg hover:bg-surface-container-highest transition-all"
                href="#scoping-form"
              >
                Select Tier 01 Sprint
              </a>
            </div>

            <div className="relative p-space-lg rounded-lg bg-surface-container-lowest shadow-xl flex flex-col justify-between gap-space-lg transform lg:-translate-y-2">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-space-md py-1 rounded-full bg-primary text-on-primary font-label-sm text-label-sm font-bold shadow-md uppercase tracking-wider">
                Most Popular For High Growth
              </div>
              <div className="flex flex-col gap-space-md pt-2">
                <div className="flex items-center justify-between">
                  <span className="font-label-sm text-label-sm text-primary uppercase font-bold">
                    Tier 02 // Advanced Commerce
                  </span>
                  <span className="px-space-xs py-0.5 rounded-full bg-primary/10 font-mono font-label-sm text-label-sm text-primary font-bold">
                    3-4 WEEKS
                  </span>
                </div>
                <div className="flex flex-col gap-space-xs">
                  <h3 className="font-headline-md text-headline-md text-on-surface">
                    Multi-Currency, Subscriptions &amp; BNPL
                  </h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">
                    Engineered for ventures expanding across GCC / Europe
                    demanding BNPL splits, multi-currency wallets, and recurring
                    billing.
                  </p>
                </div>
                <div className="flex items-baseline gap-1">
                  <span className="font-headline-xl text-headline-xl text-primary font-bold">
                    $20,000
                  </span>
                  <span className="font-body-md text-body-md text-on-surface-variant">
                    – $32,000
                  </span>
                </div>
                <div className="p-space-xs rounded-DEFAULT bg-primary/5 font-body-sm text-body-sm text-on-surface">
                  <span className="font-semibold text-primary">
                    Dedicated Team:
                  </span>{" "}
                  1 Lead FinTech Architect + 1 Backend Eng + 1 QA
                </div>
                <div className="flex flex-col gap-space-xs pt-space-xs">
                  <span className="font-label-sm text-label-sm text-on-surface uppercase font-bold tracking-wider">
                    Everything in Tier 01, Plus:
                  </span>
                  <ul className="flex flex-col gap-space-xs font-body-sm text-body-sm text-on-surface">
                    <li className="flex items-start gap-space-xs">
                      <span className="w-4 h-4 rounded-full bg-primary text-on-primary flex items-center justify-center text-[10px] font-bold mt-0.5 shrink-0">
                        ✓
                      </span>
                      Tamara &amp; Tabby BNPL split payments with cart widgets
                    </li>
                    <li className="flex items-start gap-space-xs">
                      <span className="w-4 h-4 rounded-full bg-primary text-on-primary flex items-center justify-center text-[10px] font-bold mt-0.5 shrink-0">
                        ✓
                      </span>
                      Multi-gateway failover logic (Stripe &lt;-&gt; Checkout.com)
                    </li>
                    <li className="flex items-start gap-space-xs">
                      <span className="w-4 h-4 rounded-full bg-primary text-on-primary flex items-center justify-center text-[10px] font-bold mt-0.5 shrink-0">
                        ✓
                      </span>
                      Subscription recurring engine with smart dunning retry
                      cadence
                    </li>
                    <li className="flex items-start gap-space-xs">
                      <span className="w-4 h-4 rounded-full bg-primary text-on-primary flex items-center justify-center text-[10px] font-bold mt-0.5 shrink-0">
                        ✓
                      </span>
                      Automated ERP &amp; accounting sync (Xero / QuickBooks /
                      NetSuite)
                    </li>
                    <li className="flex items-start gap-space-xs">
                      <span className="w-4 h-4 rounded-full bg-primary text-on-primary flex items-center justify-center text-[10px] font-bold mt-0.5 shrink-0">
                        ✓
                      </span>
                      UAE FTA &amp; ZATCA Stage-2 Tax-compliant PDF receipt
                      dispatch
                    </li>
                  </ul>
                </div>
              </div>
              <a
                className="w-full inline-flex items-center justify-center py-space-sm rounded-full bg-primary text-on-primary font-label-lg text-label-lg hover:bg-primary-container shadow-[0_4px_14px_rgba(0,105,72,0.3)] transition-all"
                href="#scoping-form"
              >
                Book Tier 02 Architecture Sprint
              </a>
            </div>

            <div className="p-space-lg rounded-lg bg-surface-container-lowest shadow-md flex flex-col justify-between gap-space-lg">
              <div className="flex flex-col gap-space-md">
                <div className="flex items-center justify-between">
                  <span className="font-label-sm text-label-sm text-secondary uppercase font-bold">
                    Tier 03 // Enterprise Custom
                  </span>
                  <span className="px-space-xs py-0.5 rounded-full bg-surface-container font-mono font-label-sm text-label-sm text-on-surface">
                    4-5 WEEKS
                  </span>
                </div>
                <div className="flex flex-col gap-space-xs">
                  <h3 className="font-headline-md text-headline-md text-on-surface">
                    Enterprise Marketplace &amp; Custom Engine
                  </h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">
                    Built for multi-vendor marketplaces, complex fintech apps,
                    and enterprises handling multi-million monthly flows.
                  </p>
                </div>
                <div className="flex items-baseline gap-1">
                  <span className="font-headline-xl text-headline-xl text-on-surface font-bold">
                    $35,000
                  </span>
                  <span className="font-body-md text-body-md text-on-surface-variant">
                    – $45,000+
                  </span>
                </div>
                <div className="p-space-xs rounded-DEFAULT bg-surface-container-low font-body-sm text-body-sm text-on-surface-variant">
                  <span className="font-semibold text-on-surface">
                    Dedicated Team:
                  </span>{" "}
                  1 Principal Architect + 2 Senior FinTech Engs + 1 Compliance
                  Lead
                </div>
                <div className="flex flex-col gap-space-xs pt-space-xs">
                  <span className="font-label-sm text-label-sm text-on-surface uppercase font-bold tracking-wider">
                    Everything in Tier 02, Plus:
                  </span>
                  <ul className="flex flex-col gap-space-xs font-body-sm text-body-sm text-on-surface">
                    <li className="flex items-start gap-space-xs">
                      <span className="w-4 h-4 rounded-full bg-primary text-on-primary flex items-center justify-center text-[10px] font-bold mt-0.5 shrink-0">
                        ✓
                      </span>
                      Stripe Connect / Adyen Platforms marketplace split escrow
                    </li>
                    <li className="flex items-start gap-space-xs">
                      <span className="w-4 h-4 rounded-full bg-primary text-on-primary flex items-center justify-center text-[10px] font-bold mt-0.5 shrink-0">
                        ✓
                      </span>
                      Zero-downtime card vault data migration from legacy acquirer
                    </li>
                    <li className="flex items-start gap-space-xs">
                      <span className="w-4 h-4 rounded-full bg-primary text-on-primary flex items-center justify-center text-[10px] font-bold mt-0.5 shrink-0">
                        ✓
                      </span>
                      Custom fraud risk rules engine (Stripe Radar &amp; Sift
                      heuristics)
                    </li>
                    <li className="flex items-start gap-space-xs">
                      <span className="w-4 h-4 rounded-full bg-primary text-on-primary flex items-center justify-center text-[10px] font-bold mt-0.5 shrink-0">
                        ✓
                      </span>
                      Network Tokenization provisioning (Visa VTS / Mastercard
                      MDES)
                    </li>
                    <li className="flex items-start gap-space-xs">
                      <span className="w-4 h-4 rounded-full bg-primary text-on-primary flex items-center justify-center text-[10px] font-bold mt-0.5 shrink-0">
                        ✓
                      </span>
                      Direct SLA guarantees &amp; 30-day hyper-care engineer
                      coverage
                    </li>
                  </ul>
                </div>
              </div>
              <a
                className="w-full inline-flex items-center justify-center py-space-sm rounded-full bg-surface-container-high text-on-surface font-label-lg text-label-lg hover:bg-surface-container-highest transition-all"
                href="#scoping-form"
              >
                Inquire for Custom Scope
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full bg-surface-container-low py-space-xl">
        <div className="max-w-5xl mx-auto px-margin-mobile md:px-gutter lg:px-margin flex flex-col gap-space-lg">
          <div className="flex flex-col gap-space-xs text-center items-center">
            <span className="font-label-sm text-label-sm text-primary uppercase font-bold tracking-wider">
              Compliance &amp; Engineering Assurance
            </span>
            <h2 className="font-headline-lg text-headline-lg text-on-surface">
              Payment Infrastructure FAQs
            </h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">
              Everything technical CTOs, finance directors, and product founders
              need to know about our integration protocols and security
              guarantees.
            </p>
          </div>

          <div className="flex flex-col gap-space-sm">
            <details
              className="group p-space-md rounded-DEFAULT bg-surface-container-lowest shadow-sm transition-all open:shadow-md cursor-pointer"
              open
            >
              <summary className="flex items-center justify-between font-headline-sm text-headline-sm text-on-surface list-none">
                <span className="flex items-center gap-space-xs">
                  <span className="material-symbols-outlined text-primary text-[20px]">
                    verified_user
                  </span>
                  How do you guarantee our application maintains PCI-DSS SAQ-A
                  scope?
                </span>
                <span className="material-symbols-outlined text-on-surface-variant group-open:rotate-180 transition-transform">
                  expand_more
                </span>
              </summary>
              <div className="mt-space-sm pt-space-xs text-body-md text-on-surface-variant leading-relaxed">
                By leveraging audited client-side tokenization (such as Stripe
                Elements, Checkout.com Frames, or Adyen Drop-in), raw primary
                account numbers (PAN) and CVVs are transmitted directly from the
                user's browser or mobile device to the gateway's Level-1 PCI HSM
                environment. Your application servers receive only an opaque,
                cryptographically verifiable token. This reduces your audit
                overhead from 300+ complex controls down to the streamlined
                Self-Assessment Questionnaire (SAQ-A).
              </div>
            </details>

            <details className="group p-space-md rounded-DEFAULT bg-surface-container-lowest shadow-sm transition-all open:shadow-md cursor-pointer">
              <summary className="flex items-center justify-between font-headline-sm text-headline-sm text-on-surface list-none">
                <span className="flex items-center gap-space-xs">
                  <span className="material-symbols-outlined text-primary text-[20px]">
                    shield
                  </span>
                  How are chargeback protection and fraud scoring heuristics
                  handled?
                </span>
                <span className="material-symbols-outlined text-on-surface-variant group-open:rotate-180 transition-transform">
                  expand_more
                </span>
              </summary>
              <div className="mt-space-sm pt-space-xs text-body-md text-on-surface-variant leading-relaxed">
                We configure specialized machine-learning rules via Stripe Radar,
                Checkout.com Fraud Detection, or Adyen RevenueProtect.
                Furthermore, our 3D Secure dynamic cascading shifts fraud
                liability to the card-issuing bank under the EMV 3DS liability
                shift rules whenever available, actively shielding your merchant
                account from illegitimate disputes.
              </div>
            </details>

            <details className="group p-space-md rounded-DEFAULT bg-surface-container-lowest shadow-sm transition-all open:shadow-md cursor-pointer">
              <summary className="flex items-center justify-between font-headline-sm text-headline-sm text-on-surface list-none">
                <span className="flex items-center gap-space-xs">
                  <span className="material-symbols-outlined text-primary text-[20px]">
                    sync_problem
                  </span>
                  What happens if our servers or the payment gateway webhooks go
                  down?
                </span>
                <span className="material-symbols-outlined text-on-surface-variant group-open:rotate-180 transition-transform">
                  expand_more
                </span>
              </summary>
              <div className="mt-space-sm pt-space-xs text-body-md text-on-surface-variant leading-relaxed">
                We engineer a multi-tier resilient ingestion pipeline using Amazon
                SQS or Google Cloud Pub/Sub queues with dead-letter queue (DLQ)
                support. If downstream processing encounters transient outages or
                database contention, webhooks are acknowledged immediately to
                prevent gateway throttling, while background workers re-attempt
                execution with exponential backoff and jitter. Out-of-order
                execution is prevented using distributed transaction locks.
              </div>
            </details>

            <details className="group p-space-md rounded-DEFAULT bg-surface-container-lowest shadow-sm transition-all open:shadow-md cursor-pointer">
              <summary className="flex items-center justify-between font-headline-sm text-headline-sm text-on-surface list-none">
                <span className="flex items-center gap-space-xs">
                  <span className="material-symbols-outlined text-primary text-[20px]">
                    receipt_long
                  </span>
                  Can you synchronize transactions directly to UAE FTA / ZATCA
                  e-invoicing systems?
                </span>
                <span className="material-symbols-outlined text-on-surface-variant group-open:rotate-180 transition-transform">
                  expand_more
                </span>
              </summary>
              <div className="mt-space-sm pt-space-xs text-body-md text-on-surface-variant leading-relaxed">
                Yes. Every payment intent event captures line-item VAT, customer
                TRN, and localized billing details. Our webhook orchestration
                pipelines automatically trigger signed XML e-invoice generation
                and sync directly to enterprise accounting platforms (NetSuite,
                SAP, Xero, QuickBooks) or regional FTA compliance providers
                without manual bookkeeper intervention.
              </div>
            </details>

            <details className="group p-space-md rounded-DEFAULT bg-surface-container-lowest shadow-sm transition-all open:shadow-md cursor-pointer">
              <summary className="flex items-center justify-between font-headline-sm text-headline-sm text-on-surface list-none">
                <span className="flex items-center gap-space-xs">
                  <span className="material-symbols-outlined text-primary text-[20px]">
                    swap_horiz
                  </span>
                  Can we migrate existing stored customer cards from an old
                  payment provider?
                </span>
                <span className="material-symbols-outlined text-on-surface-variant group-open:rotate-180 transition-transform">
                  expand_more
                </span>
              </summary>
              <div className="mt-space-sm pt-space-xs text-body-md text-on-surface-variant leading-relaxed">
                Yes. Under our Tier 03 sprints, we coordinate secure Level-1
                PCI-to-PCI PGP-encrypted card migration between your legacy
                acquirer and your new gateway. We map customer identifiers
                seamlessly so your users experience zero interrupted
                subscriptions or re-entry requirements.
              </div>
            </details>
          </div>
        </div>
      </section>

      <section className="w-full bg-surface py-space-xl" id="scoping-form">
        <div className="max-w-7xl mx-auto px-margin-mobile md:px-gutter lg:px-margin">
          <div className="rounded-xl bg-inverse-surface text-inverse-on-surface p-space-lg md:p-space-xl shadow-xl grid grid-cols-1 lg:grid-cols-12 gap-gutter items-center">
            <div className="lg:col-span-6 flex flex-col gap-space-md">
              <div className="inline-flex items-center gap-space-xs px-space-md py-space-xs rounded-full bg-primary/20 text-primary-fixed-dim w-fit font-label-sm text-label-sm uppercase tracking-wider font-bold">
                Direct Lead Engineer Access
              </div>
              <h2 className="font-headline-xl text-headline-xl text-inverse-on-surface tracking-tight">
                Schedule a 30-Min Payment Architecture Review
              </h2>
              <p className="font-body-lg text-body-lg text-surface-variant leading-relaxed">
                Speak directly with a Lead FinTech Engineer—not a sales agent. We
                will inspect your current checkout funnel, review gateway fee
                economics, and map your target tokenization topology.
              </p>
              <div className="flex flex-col gap-space-xs pt-space-xs font-body-sm text-body-sm text-surface-variant">
                <div className="flex items-center gap-space-xs">
                  <span className="material-symbols-outlined text-primary-fixed-dim text-[18px]">
                    check_circle
                  </span>
                  Detailed API routing assessment and interchange optimization
                  audit
                </div>
                <div className="flex items-center gap-space-xs">
                  <span className="material-symbols-outlined text-primary-fixed-dim text-[18px]">
                    check_circle
                  </span>
                  PCI-DSS SAQ-A scope isolation and compliance roadmap
                </div>
                <div className="flex items-center gap-space-xs">
                  <span className="material-symbols-outlined text-primary-fixed-dim text-[18px]">
                    check_circle
                  </span>
                  Fixed-price sprint delivery proposal within 24 business hours
                </div>
              </div>
              <div className="p-space-sm rounded-DEFAULT bg-surface-container/10 flex items-center gap-space-sm mt-space-xs">
                <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-on-primary shrink-0 font-bold">
                  NC
                </div>
                <div className="flex flex-col">
                  <span className="font-label-sm text-label-sm font-bold text-inverse-on-surface">
                    NexusCraft FinTech Guild
                  </span>
                  <span className="font-body-sm text-body-sm text-surface-variant">
                    Dubai • London • Singapore • Global Delivery
                  </span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6">
              <form
                className="bg-surface-container-lowest text-on-surface p-space-lg rounded-lg shadow-2xl flex flex-col gap-space-md"
                id="payment-intake-form"
                onSubmit={(e) => {
                  e.preventDefault();
                  setSubmitted(true);
                }}
              >
                <div className="flex flex-col gap-1">
                  <span className="font-headline-sm text-headline-sm text-on-surface font-bold">
                    Payment Architecture Intake
                  </span>
                  <span className="font-body-sm text-body-sm text-on-surface-variant">
                    Complete this form to connect with our Lead FinTech Architect.
                  </span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-space-sm">
                  <div className="flex flex-col gap-1">
                    <label
                      className="font-label-sm text-label-sm text-on-surface font-semibold"
                      htmlFor="work-email"
                    >
                      Work Email *
                    </label>
                    <input
                      className="w-full px-space-md py-space-sm rounded-full bg-surface-container-low text-body-md text-on-surface focus:bg-surface-container-lowest transition-all"
                      id="work-email"
                      placeholder="alex@venture.com"
                      required
                      type="email"
                    />
                  </div>
                  <div className="flex flex-col gap-1">
                    <label
                      className="font-label-sm text-label-sm text-on-surface font-semibold"
                      htmlFor="current-platform"
                    >
                      Current Platform / Cart *
                    </label>
                    <input
                      className="w-full px-space-md py-space-sm rounded-full bg-surface-container-low text-body-md text-on-surface focus:bg-surface-container-lowest transition-all"
                      id="current-platform"
                      placeholder="Custom Next.js / Shopify / Medusa"
                      required
                      type="text"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-space-sm">
                  <div className="flex flex-col gap-1">
                    <label
                      className="font-label-sm text-label-sm text-on-surface font-semibold"
                      htmlFor="gateway-selection"
                    >
                      Target Gateway(s)
                    </label>
                    <select
                      className="w-full px-space-md py-space-sm rounded-full bg-surface-container-low text-body-md text-on-surface focus:bg-surface-container-lowest transition-all"
                      id="gateway-selection"
                    >
                      <option value="stripe">Stripe + Apple Pay</option>
                      <option value="checkout">Checkout.com + Local GCC</option>
                      <option value="bnpl">Tamara &amp; Tabby BNPL</option>
                      <option value="multi">
                        Multi-Gateway Failover (Hybrid)
                      </option>
                      <option value="adyen">Adyen Unified Commerce</option>
                      <option value="marketplace">
                        Marketplace Split Escrow
                      </option>
                    </select>
                  </div>
                  <div className="flex flex-col gap-1">
                    <label
                      className="font-label-sm text-label-sm text-on-surface font-semibold"
                      htmlFor="monthly-volume"
                    >
                      Monthly Processing Volume
                    </label>
                    <select
                      className="w-full px-space-md py-space-sm rounded-full bg-surface-container-low text-body-md text-on-surface focus:bg-surface-container-lowest transition-all"
                      id="monthly-volume"
                    >
                      <option value="sub50k">&lt; $50,000 / month</option>
                      <option value="50k-250k">
                        $50,000 – $250,000 / month
                      </option>
                      <option value="250k-1m">
                        $250,000 – $1,000,000 / month
                      </option>
                      <option value="1m-plus">$1,000,000+ / month (Enterprise)</option>
                    </select>
                  </div>
                </div>
                <div className="flex flex-col gap-1">
                  <label
                    className="font-label-sm text-label-sm text-on-surface font-semibold"
                    htmlFor="target-launch"
                  >
                    Target Launch Window
                  </label>
                  <select
                    className="w-full px-space-md py-space-sm rounded-full bg-surface-container-low text-body-md text-on-surface focus:bg-surface-container-lowest transition-all"
                    id="target-launch"
                  >
                    <option value="immediate">
                      Immediate (Next 2-3 Weeks)
                    </option>
                    <option value="next-sprint">
                      Next Scheduled Sprint (Within 30-45 Days)
                    </option>
                    <option value="planning">
                      Exploratory / Architecture Audit
                    </option>
                  </select>
                </div>
                <button
                  className="w-full inline-flex items-center justify-center gap-space-xs py-space-md rounded-full bg-primary text-on-primary font-label-lg text-label-lg hover:bg-primary-container shadow-[0_6px_20px_rgba(0,105,72,0.3)] transition-all"
                  type="submit"
                >
                  <span className="material-symbols-outlined text-[18px]">
                    send
                  </span>
                  Submit Architecture Request
                </button>
                {submitted && (
                  <div className="p-space-sm rounded-DEFAULT bg-primary/10 text-primary flex items-center gap-space-xs font-body-sm text-body-sm">
                    <span className="material-symbols-outlined text-[20px]">
                      check_circle
                    </span>
                    <span>
                      Intake received. A Lead FinTech Architect will reply within
                      4 business hours with calendar invites.
                    </span>
                  </div>
                )}
                <div className="flex items-center justify-center gap-space-xs text-on-surface-variant font-label-sm text-label-sm">
                  <span className="material-symbols-outlined text-[14px]">
                    lock
                  </span>
                  <span>
                    Protected by 256-bit SSL • Mutual Non-Disclosure Standard
                  </span>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
