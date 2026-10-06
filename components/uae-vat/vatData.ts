import type { JSX } from "react";

export interface CapabilityCard {
  id: string;
  badge: string;
  badgeColor: string;
  title: string;
  description: string;
  features: { icon: string; text: string }[];
  price: string;
  timeline: string;
  stack: string;
}

export interface CaseStudy {
  id: string;
  location: string;
  industry: string;
  price: string;
  timeline?: string;
  title: string;
  description: string;
  metrics: { label: string; value: string }[];
  stack: string;
  testimonial: string;
  testimonialAuthor?: string;
}

export interface PricingTier {
  id: string;
  name: string;
  subtitle: string;
  description: string;
  price: string;
  timeline: string;
  features: string[];
  featured?: boolean;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface TrustTickerItem {
  text: string;
  isPrimary?: boolean;
}

export interface TelemetryBadge {
  icon: string;
  title: string;
  subtitle: string;
  isPrimary?: boolean;
}

export const trustTickerItems: TrustTickerItem[] = [
  { text: "FTA ACCREDITED WORKFLOWS", isPrimary: true },
  { text: "5% VAT & CRYPTOGRAPHIC E-INVOICING READY" },
  { text: "CABINET DECISION NO. 52 AUDIT PRESERVATION" },
  { text: "4–8 WEEK FIXED SPRINTS ($20k–$70k)", isPrimary: true },
];

export const telemetryBadges: TelemetryBadge[] = [
  {
    icon: "lock_clock",
    title: "Live Engine",
    subtitle: "FATOORA E-Invoicing: Encrypted",
  },
  {
    icon: "fact_check",
    title: "FTA Form 201",
    subtitle: "Auto-Reconciled • 100% Passed",
    isPrimary: true,
  },
  {
    icon: "domain_verification",
    title: "Zone Architecture",
    subtitle: "Designated vs Mainland Rules Active",
  },
  {
    icon: "percent",
    title: "Corporate Tax Readiness",
    subtitle: "9% AED 375k Threshold Tracked",
    isPrimary: true,
  },
];

export const capabilityCards: CapabilityCard[] = [
  {
    id: "vat-engine",
    badge: "01 • CORE ENGINE",
    badgeColor: "text-primary",
    title: "Automated UAE VAT Return Engine (Form 201)",
    description:
      "Eliminate error-prone spreadsheets. Complete end-to-end automation categorizing standard 5% transactions, zero-rated exports & healthcare supplies, and exempt financial revenues.",
    features: [
      { icon: "check_circle", text: "Automated Reverse Charge Mechanism (RCM) on cross-border services" },
      { icon: "check_circle", text: "Line-by-line Form 201 XML & PDF generation matching FTA portal schema" },
      { icon: "check_circle", text: "Pro-rata input tax recovery calculation for mixed supplies" },
    ],
    price: "$20,000 – $35,000",
    timeline: "3–5 Weeks Fixed",
    stack: "Postgres • Python • Next.js",
  },
  {
    id: "einvoicing",
    badge: "02 • MANDATORY COMPLIANCE",
    badgeColor: "text-primary",
    title: "UAE E-Invoicing (FATOORA XML / UBL 2.1 & QR)",
    description:
      "Future-proof for the nationwide UAE E-Billing System rollout. Generate cryptographic hash chains, digital signatures, and validated TLV-encoded QR codes.",
    features: [
      { icon: "check_circle", text: "UBL 2.1 XML schema compliance with cryptographic stamping" },
      { icon: "check_circle", text: "Automated UUID generation & sequential tamper-proof counter logic" },
      { icon: "check_circle", text: "Pre-clearance API webhook architecture for real-time FTA tax reporting" },
    ],
    price: "$25,000 – $45,000",
    timeline: "4–6 Weeks Fixed",
    stack: "Node.js • Rust Cryptography • APIs",
  },
  {
    id: "erp-localization",
    badge: "03 • LOCALIZATION",
    badgeColor: "text-primary",
    title: "ERP Regional Localization (Odoo, ERPNext, NetSuite)",
    description:
      "Transform standard global ERP software into a precision UAE operational machine. Complete chart of accounts tailoring, direct banking APIs, and bilingual PDF print engines.",
    features: [
      { icon: "check_circle", text: "Direct UAE Bank MT940 / API reconciliation (Emirates NBD, FAB, ADCB, Mashreq)" },
      { icon: "check_circle", text: "Bilingual Arabic & English certified tax invoice templates" },
      { icon: "check_circle", text: "UAE Labor WPS (Wages Protection System) SIF file batch generator" },
    ],
    price: "$30,000 – $60,000",
    timeline: "5–8 Weeks Fixed",
    stack: "Odoo 17/18 • ERPNext • Open Banking",
  },
  {
    id: "multi-entity",
    badge: "04 • ENTERPRISE EXPANSION",
    badgeColor: "text-primary",
    title: "Multi-Entity & Free Zone vs Mainland Systems",
    description:
      "For trading groups balancing Designated Zones (JAFZA, DAFZA, KFAED) with Mainland LLCs. Automatic classification of Qualifying Free Zone Person (QFZP) 0% vs 9% Corporate Tax.",
    features: [
      { icon: "check_circle", text: "Automated Designated Zone customs exit declarations & VAT exemption" },
      { icon: "check_circle", text: "Intercompany transfer pricing documentation & automated ledger eliminations" },
      { icon: "check_circle", text: "Corporate Tax 9% threshold auditing & qualifying income isolation" },
    ],
    price: "$35,000 – $70,000",
    timeline: "6–9 Weeks Fixed",
    stack: "PostgreSQL Multi-Tenant • GraphQL • AWS DXB",
  },
];

export const caseStudies: CaseStudy[] = [
  {
    id: "jafza",
    location: "DUBAI • LOGISTICS",
    industry: "Logistics & Supply Chain",
    price: "$48,000 • 6 WEEKS",
    title: "JAFZA Free Zone Trading & Logistics Group ($18M GMV)",
    description:
      "Struggled with complex designated free zone exemptions, bonded warehouse transfers, and mainland distribution VAT calculations.",
    metrics: [
      { label: "Time Saved:", value: "35 Hours/Month" },
      { label: "Audit Result:", value: "Zero FTA Non-Compliance Penalties" },
      { label: "Stack:", value: "Odoo 17 + PostgreSQL + Emirates NBD API" },
    ],
    stack: "Odoo 17 + PostgreSQL + Emirates NBD API",
    testimonial:
      `"NexusCraft delivered a rock-solid dual-tax system that seamlessly handles our JAFZA vs mainland sales without a hitch."`,
    testimonialAuthor: "Finance Director, JAFZA Trading Group",
  },
  {
    id: "pharmacy",
    location: "ABU DHABI • HEALTHCARE",
    industry: "Healthcare & Medical Supplies",
    price: "$38,000 • 5 WEEKS",
    title: "Abu Dhabi Pharmacy Chain & Medical Supplies (6 Locations)",
    description:
      "Faced intricate zero-rated medication rules, mixed standard supplies, and the need for instant bilingual Arabic tax invoicing.",
    metrics: [
      { label: "Invoicing Accuracy:", value: "99.98% Verification Rate" },
      { label: "e-Invoice Speed:", value: "< 180ms QR Stamping" },
      { label: "Stack:", value: "Next.js + Node.js Microservices + AWS DXB" },
    ],
    stack: "Next.js + Node.js Microservices + AWS DXB",
    testimonial:
      `"Passed our Ministry of Health and FTA audit with zero observations. Flawless Arabic invoice layout."`,
    testimonialAuthor: "IT Manager, Abu Dhabi Pharmacy Chain",
  },
  {
    id: "ecommerce",
    location: "GCC • RETAIL & E-COMMERCE",
    industry: "Retail & E-Commerce",
    price: "$52,000 • 7 WEEKS",
    title: "Cross-Border E-Commerce Brand (Shopify + NetSuite ERP)",
    description:
      "Needed split-tax ledger logic: UAE 5% VAT vs KSA 15% ZATCA Phase 2 compliance with real-time customs duty allocations.",
    metrics: [
      { label: "Order Volume:", value: "120,000 Orders/Month" },
      { label: "Reconciliation:", value: "Real-Time Daily Settlement" },
      { label: "Stack:", value: "Shopify Plus + NetSuite SuiteScript 2.1 + Go" },
    ],
    stack: "Shopify Plus + NetSuite SuiteScript 2.1 + Go",
    testimonial:
      `"Automated what previously required a team of 4 internal accountants. Zero spreadsheet errors."`,
    testimonialAuthor: "COO, GCC E-Commerce Brand",
  },
];

export const pricingTiers: PricingTier[] = [
  {
    id: "tier1",
    name: "Tier 1 • Rapid Compliance",
    subtitle: "VAT & E-Invoicing Sprint",
    description:
      "Essential compliance engine for established SMBs needing rock-solid tax automation.",
    price: "$20,000 – $32,000",
    timeline: "3–5 Weeks Fixed",
    features: [
      "Automated Form 201 VAT Return Generator",
      "Cryptographic QR Code & XML E-Invoices",
      "Bilingual (Arabic/English) Invoice Engine",
      "Reverse Charge & Zero-Rated Tax Categorization",
      "1 Staff Engineer + 1 Tax Tech Specialist",
    ],
  },
  {
    id: "tier2",
    name: "Tier 2 • Full Localization",
    subtitle: "Comprehensive UAE ERP Platform",
    description:
      "Complete localization of Odoo, ERPNext, or bespoke cloud accounting for multi-channel firms.",
    price: "$38,000 – $54,000",
    timeline: "5–7 Weeks Fixed",
    featured: true,
    features: [
      "Everything in Rapid Compliance Tier",
      "UAE Bank Integration (ENBD / FAB / ADCB)",
      "WPS (Wages Protection System) SIF Batch Generator",
      "Inventory Valuation (Weighted Avg / FIFO) under VAT",
      "Corporate Tax 9% Threshold Forecasting",
      "1 Principal Architect + 2 Senior Engineers",
    ],
  },
  {
    id: "tier3",
    name: "Tier 3 • Group Holding",
    subtitle: "Multi-Entity Enterprise OS",
    description:
      "Designed for corporate holdings running mainland entities alongside designated free zone units.",
    price: "$58,000 – $70,000",
    timeline: "7–9 Weeks Fixed",
    features: [
      "Everything in Comprehensive Platform",
      "Multi-Entity Consolidation & Intercompany Eliminations",
      "Designated Free Zone vs Mainland Customs Duty Logic",
      "Qualifying Free Zone Person (QFZP) 0% vs 9% Separation",
      "Custom High-Throughput REST / GraphQL API Mesh",
      "Full Source Code Escrow + 90-Day Production SLA",
    ],
  },
];

export const faqItems: FaqItem[] = [
  {
    question: "How do you guarantee compliance with the UAE Federal Tax Authority (FTA)?",
    answer:
      "Our engines are built strictly adhering to Federal Decree-Law No. (8) of 2017 on Value Added Tax, Cabinet Decision No. 52, and the FTA's published electronic records retention guidelines. Every release passes automated integration test fixtures that reconcile sample transaction ledgers directly against the official FTA Form 201 portal schema.",
  },
  {
    question: "What are the upcoming UAE Phase 2 E-Invoicing requirements you support?",
    answer:
      "The UAE Ministry of Finance is implementing the E-Billing System using the Peppol interoperability network and UBL 2.1 XML data standards. BlueChip Tech prepares your architecture with cryptographic hashing (SHA-256), sequential invoice counters, digital signatures, and secure RESTful endpoints ready to connect to accredited service providers.",
  },
  {
    question: "Can you integrate with local UAE banks like Emirates NBD, FAB, and ADCB?",
    answer:
      "Yes. We implement automated MT940 statement ingestion and direct Open Banking API connections with major UAE corporate financial institutions. Transactions are automatically tokenized, categorized, and reconciled against unpaid tax invoices on a scheduled nightly cadence.",
  },
  {
    question: "Who owns the source code and database upon project completion?",
    answer:
      "You do, 100%. NexusCraft does not use proprietary lock-in models. At project handover, we transfer all private Git repositories, Docker containers, database migration scripts, and documentation directly into your cloud infrastructure (AWS UAE, Azure UAE North, or on-premise).",
  },
  {
    question: "How do you handle Designated Free Zone VAT exemptions vs mainland transactions?",
    answer:
      "Our routing engine segregates goods moving within or between Designated Zones (considered outside the UAE for VAT purposes) from goods released into the mainland. Invoices automatically apply the correct zero-rate or standard 5% rate along with customs bill reference metadata required by FTA auditors.",
  },
];
