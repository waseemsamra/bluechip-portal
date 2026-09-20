"use client";

import type { JSX } from "react";
import { useState, useEffect, useRef } from "react";

const megaMenuItems = {
  services: [
    { label: "Core & Mobile", icon: "terminal" },
    { label: "Cloud & Networks", icon: "cloud" },
    { label: "Data & Compliance", icon: "security" },
    { label: "Commerce & Growth", icon: "shopping_cart" },
  ],
  industries: [
    {
      label: "FinTech & Neobanking",
      icon: "account_balance",
      badge: "PCI-DSS L1",
      description:
        "Multi-currency wallets, automated clearing house adapters, and sub-millisecond fraud scoring engines.",
    },
    {
      label: "HealthTech & Telemedicine",
      icon: "health_and_safety",
      badge: "HIPAA / HL7",
      description:
        "Encrypted patient telemetry, WebRTC video clinical consultations, and FHIR interoperable data pipes.",
    },
    {
      label: "Autonomous Logistics & TMS",
      icon: "local_shipping",
      badge: "IoT Telemetry",
      description:
        "Dynamic route optimization algorithms, cold-chain GPS tracking, and warehouse automated pick-and-pack.",
    },
    {
      label: "Luxury & Omnichannel Retail",
      icon: "diamond",
      badge: "Headless Hydrogen",
      description:
        "Bespoke 3D product visualizers, private client booking portals, and VIP localized currency checkouts.",
    },
    {
      label: "LegalTech & UAE VAT Phase 2",
      icon: "gavel",
      badge: "Zakat / FTA",
      description:
        "Cryptographic invoice signing, contract OCR ingestion, and localized GCC compliance microservices.",
    },
    {
      label: "Smart Manufacturing & SCADA",
      icon: "precision_manufacturing",
      badge: "OPC-UA Ready",
      description:
        "Edge telemetry nodes, real-time industrial yield graphs, and predictive machine maintenance.",
    },
  ],
  techStack: [
    {
      category: "Client & Frontend",
      icon: "layers",
      items: ["Next.js 14 (App Router)", "React Native / Expo", "Swift 6 / SwiftUI", "Kotlin Multiplatform", "Tailwind CSS 3.4+"],
      color: "bg-primary",
    },
    {
      category: "Backend & Distributed",
      icon: "dns",
      items: ["Go (Golang 1.22)", "Rust (Tokio / Axum)", "Node.js / TypeScript", "Python 3.12 (FastAPI)", "gRPC & Protobuf"],
      color: "bg-primary",
    },
    {
      category: "Cloud & Orchestration",
      icon: "cloud_circle",
      items: ["Kubernetes (EKS / GKE)", "Terraform / OpenTofu", "ArgoCD GitOps", "AWS Lambda / EventBridge", "Cloudflare Workers"],
      color: "bg-primary",
    },
    {
      category: "Data & Persistence",
      icon: "database",
      items: ["PostgreSQL 16 (pgvector)", "Redis 7 (Cluster)", "ClickHouse OLAP", "Apache Kafka", "ScyllaDB / Cassandra"],
      color: "bg-tertiary",
    },
  ],
  company: [
    { label: "About the Studio", icon: "info" },
    { label: "Regional Hubs", icon: "public" },
    { label: "Engineering Fellows", icon: "people" },
  ],
};

function Icon({ name }: { name: string }) {
  const icons: Record<string, JSX.Element> = {
    terminal: <path d="M4 17h16M4 12h16M4 7h16" />,
    call: (
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .87 2.92 1.5 1.5 0 0 1-.34 1.85L9.17 9.17a12.2 12.2 0 0 0 2.53 2.53 1.5 1.5 0 0 1 1.85-.34 12.84 12.84 0 0 0 2.92-.87A2 2 0 0 1 22 6.91z" />
    ),
    calendar_month: <path d="M19 4h-1V2h-2v2H8V2H6v2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm0 16H5V9h14v11z" />,
    person: (
      <path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 9.6 12 9.6zm0 2.4c-3.2 0-5.8 2.6-5.8 5.8v.6h11.6v-.6c0-3.2-2.6-5.8-5.8-5.8z" />
    ),
    menu: <path d="M3 6h18M3 12h18M3 18h18" />,
    close: <path d="M18 6L6 18M6 6l12 12" />,
    expand_more: <path d="M12 16l-6-6h12z" />,
    verified: (
      <path d="M22 11.08V12a10 10 0 0 1-5.93-9.14M22 4L12 14.01l-3-3" />
    ),
    code: <path d="M9.4 16.6L4.8 12l4.6-4.6 1.4 1.4L7.6 12l3.2 3.2z" />,
    layers: <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />,
    dns: <path d="M12 2C7.58 2 4 5.58 4 10c0 4.42 3.58 8 8 8s8-3.58 8-8-3.58-8-8-8z" />,
    cloud: (
      <path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.61 5.64 5.36 8.04 2.35 8.36 0 10.9 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.79-4.65-4.96z" />
    ),
    cloud_circle: <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" />,
    database: <path d="M12 3v18m-9-9h18" />,
    security: <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />,
    account_balance: <path d="M12 2L2 7v10c0 6 8 12 8 12s8-6 8-12V7l-10-5z" />,
    health_and_safety: (
      <path d="M12 2L4 5v6c0 5 4.5 9.5 8 11 3.5-1.5 8-6 8-11V5l-8-3z" />
    ),
    local_shipping: (
      <path d="M22 16v-5l-8-4V4c0-1.1-.9-2-2-2H4C2.9 2 2 2.9 2 4v7.5c0 .55.45 1 1 1H6v6c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2h4z" />
    ),
    diamond: <path d="M12 2l4 8-4 6-4-6z" />,
    gavel: <path d="M5.25 3.75l6 6 4-4-6-6-4 4z" />,
    precision_manufacturing: (
      <path d="M12 2l8 4v4l-8 4-8-4 8-4zM4 8l8 4 8-4M4 12l8 4 8-4" />
    ),
    shopping_cart: (
      <path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM0 4v2.55l2 2.7V22h2V12.5l4-5.45V22h2V9.55L10 5.45V2H4c-.55 0-1 .45-1 1v1v1zM17 14c1.1 0 1.99.9 1.99 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm0-1.5c-1.35 0-2.5-.7-3.11-1.75l1.34-2.68A3.5 3.5 0 1117 14z" />
    ),
    check_circle: (
      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
    ),
    info: (
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z" />
    ),
    public: (
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93C7.05 18.67 4 15.62 4 11.5 4 7.36 7.36 4 11.5 4c2.33 0 4.47 1 5.88 2.69L9 15.5v.5c0 .55.45 1 1 1v3.43z" />
    ),
    people: <path d="M16 9c0 2.21-1.79 4-4 4s-4-1.79-4-4 1.79-4 4-4 4 1.79 4 4z" />,
  };

  const path = icons[name] || icons.info;
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {path}
    </svg>
  );
}

function MegaNavButton({
  label,
  menuKey,
  activeMenu,
  setActiveMenu,
  cancelClose,
  scheduleClose,
}: {
  label: string;
  menuKey: string;
  activeMenu: string | null;
  setActiveMenu: (v: string | null) => void;
  cancelClose: () => void;
  scheduleClose: () => void;
}) {
  return (
    <div
      className="relative group"
      onMouseEnter={() => {
        cancelClose();
        setActiveMenu(menuKey);
      }}
      onMouseLeave={scheduleClose}
    >
      <button
        type="button"
        onClick={() => {
          if (activeMenu === menuKey) {
            setActiveMenu(null);
          } else {
            setActiveMenu(menuKey);
          }
        }}
        className="px-space-md py-space-xs rounded text-on-surface hover:bg-surface-container-high transition-colors flex items-center gap-1"
      >
        <span>{label}</span>
        <Icon name="expand_more" />
      </button>
    </div>
  );
}

export default function Header() {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
  const [expandedAccordion, setExpandedAccordion] = useState<string | null>(null);
  const closeTimerRef = useRef<number | null>(null);

  const scheduleClose = () => {
    if (closeTimerRef.current) clearTimeout(closeTimerRef.current);
    closeTimerRef.current = window.setTimeout(() => {
      setActiveMenu(null);
    }, 200);
  };

  const cancelClose = () => {
    if (closeTimerRef.current) clearTimeout(closeTimerRef.current);
    closeTimerRef.current = null;
  };

  const toggleAccordion = (key: string) => {
    setExpandedAccordion(expandedAccordion === key ? null : key);
  };

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setActiveMenu(null);
        setMobileDrawerOpen(false);
      }
    };
    document.addEventListener("keydown", handleEsc);
    return () => document.removeEventListener("keydown", handleEsc);
  }, []);

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-50 bg-surface/90 backdrop-blur-xl shadow-[0_1px_8px_rgba(0,0,0,0.04)]">
        {/* Utility Bar */}
          <div className="w-full bg-surface-container-low">
            <div className="w-full max-w-[1440px] mx-auto px-margin flex items-center justify-between h-10">
              <div className="flex items-center gap-space-md">
              <span className="flex items-center gap-space-xs font-label-sm text-label-sm text-primary uppercase">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                Available For Q3 Sprints
              </span>
              <span className="hidden md:inline font-body-sm text-body-sm text-on-surface-variant">
                Direct Architecture Desk: +1 (800) 492-BLUE
              </span>
            </div>
            <div className="flex items-center gap-space-lg font-label-sm text-label-sm">
              <span className="hidden lg:inline text-on-surface-variant">
                SOC2 Type II Certified
              </span>
              <a
                className="text-on-surface-variant hover:text-on-surface transition-colors"
                href="#"
              >
                Client Portal
              </a>
              <a
                className="text-on-surface-variant hover:text-on-surface transition-colors"
                href="#"
              >
                System Status
              </a>
            </div>
          </div>
        </div>

        {/* Main Navigation */}
        <div className="w-full max-w-[1440px] mx-auto px-margin h-20 flex items-center justify-between">
          <div className="flex items-center gap-space-xl">
            <a className="flex items-center gap-space-xs group" href="#overview">
              <div className="w-10 h-10 rounded bg-primary-container flex items-center justify-center text-on-primary shadow-sm group-hover:scale-105 transition-transform">
                <Icon name="terminal" />
              </div>
              <div className="flex flex-col">
                <span className="font-headline-sm text-headline-sm text-on-surface leading-tight tracking-tight">
                  BlueChip Tech
                </span>
                <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">
                  Engineering Studio
                </span>
              </div>
            </a>

            <nav
              aria-label="Global Navigation"
              className="hidden lg:flex items-center gap-space-xs font-label-lg text-label-lg"
            >
              <MegaNavButton
                label="Services"
                menuKey="services"
                activeMenu={activeMenu}
                setActiveMenu={setActiveMenu}
                cancelClose={cancelClose}
                scheduleClose={scheduleClose}
              />
              <MegaNavButton
                label="Industries"
                menuKey="industries"
                activeMenu={activeMenu}
                setActiveMenu={setActiveMenu}
                cancelClose={cancelClose}
                scheduleClose={scheduleClose}
              />
              <MegaNavButton
                label="Tech Stack & Tools"
                menuKey="stack"
                activeMenu={activeMenu}
                setActiveMenu={setActiveMenu}
                cancelClose={cancelClose}
                scheduleClose={scheduleClose}
              />
              <MegaNavButton
                label="Company"
                menuKey="company"
                activeMenu={activeMenu}
                setActiveMenu={setActiveMenu}
                cancelClose={cancelClose}
                scheduleClose={scheduleClose}
              />
              <a
                className="px-space-md py-space-xs rounded text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-colors"
                href="#bench"
              >
                Staff Bench
              </a>
              <a
                className="px-space-md py-space-xs rounded text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-colors"
                href="#notes"
              >
                Field Notes
              </a>
            </nav>
          </div>

          <div className="flex items-center gap-space-md">
            <div className="hidden xl:flex flex-col items-end">
              <span className="font-label-sm text-label-sm text-on-surface-variant uppercase">
                Sprint Inquiries
              </span>
              <span className="font-headline-sm text-headline-sm text-primary leading-none">
                +1 800 555-3920
              </span>
            </div>
            <a
              className="hidden sm:inline-flex items-center gap-2 px-space-lg py-space-sm rounded-full bg-primary text-on-primary font-label-lg text-label-lg shadow-[0_4px_14px_rgba(0,105,72,0.25)] transition-all"
              href="#booking"
            >
              <Icon name="calendar_month" />
              <span>Book Scoping Call</span>
            </a>
            <button
              className="lg:hidden p-2 rounded bg-surface-container-high text-on-surface"
              onClick={() => setMobileDrawerOpen(true)}
            >
              <Icon name="menu" />
            </button>
          </div>
        </div>
      </header>

      {/* ==================== MEGA-MENUS CONTAINER ==================== */}

      {/* 1. SERVICES MEGA-MENU (4 Columns with Pricing & Architecture Breakdown) */}
      {activeMenu === "services" && (
        <div
          className="fixed top-[120px] left-0 w-full z-40 bg-surface shadow-2xl transition-all duration-200"
          onMouseEnter={cancelClose}
          onMouseLeave={scheduleClose}
        >
          <div className="w-full max-w-[1440px] mx-auto px-margin py-space-lg">
            <div className="flex items-center justify-between pb-space-md mb-space-md bg-surface-container-low p-space-md rounded">
              <div className="flex items-center gap-space-md">
                <span className="font-headline-sm text-headline-sm text-on-surface">
                  Direct Engineering Disciplines
                </span>
                <span className="font-label-sm text-label-sm bg-primary/10 text-primary px-3 py-1 rounded-full uppercase">
                  11 Production Modules • Fixed-Scope
                </span>
              </div>
              <a
                className="flex items-center gap-1 font-label-lg text-label-lg text-primary hover:underline"
                href="#pricing-calculator"
              >
                <span>Launch Sprint Cost Estimator</span>
                <span className="material-symbols-outlined text-[18px]">
                  arrow_forward
                </span>
              </a>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-space-lg">
              {/* Col 1: Core & Mobile */}
              <div className="flex flex-col gap-space-sm">
                <div className="flex items-center gap-2 text-primary font-label-lg text-label-lg uppercase tracking-wider">
                  <span className="material-symbols-outlined text-[20px]">
                    terminal
                  </span>
                  <span>Core &amp; Mobile</span>
                </div>
                <a
                  className="p-space-sm rounded hover:bg-surface-container transition-colors group flex flex-col gap-1"
                  href="#custom-cloud"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-label-lg text-label-lg text-on-surface group-hover:text-primary transition-colors">
                      Custom Cloud &amp; Microservices
                    </span>
                    <span className="font-label-sm text-label-sm px-2 py-0.5 rounded-full bg-primary/10 text-primary">
                      $20k–$80k
                    </span>
                  </div>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">
                    Go, Rust, Node.js distributed systems with 99.99%
                    fault-tolerant gRPC pipelines.
                  </p>
                </a>
                <a
                  className="p-space-sm rounded hover:bg-surface-container transition-colors group flex flex-col gap-1"
                  href="#mobile-native"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-label-lg text-label-lg text-on-surface group-hover:text-primary transition-colors">
                      iOS &amp; Android Apps
                    </span>
                    <span className="font-label-sm text-label-sm px-2 py-0.5 rounded-full bg-primary/10 text-primary">
                      $20k–$75k
                    </span>
                  </div>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">
                    Swift UI, Kotlin Multiplatform, React Native with
                    biometrics &amp; offline caches.
                  </p>
                </a>
                <a
                  className="p-space-sm rounded hover:bg-surface-container transition-colors group flex flex-col gap-1"
                  href="#web-systems"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-label-lg text-label-lg text-on-surface group-hover:text-primary transition-colors">
                      High-Scale Web Portals
                    </span>
                    <span className="font-label-sm text-label-sm px-2 py-0.5 rounded-full bg-surface-container-highest text-on-surface-variant">
                      $15k–$50k
                    </span>
                  </div>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">
                    Next.js, Remix, Astro with ultra-low latency edge
                    rendering &amp; dynamic routing.
                  </p>
                </a>
              </div>

              {/* Col 2: Cloud & Networks */}
              <div className="flex flex-col gap-space-sm">
                <div className="flex items-center gap-2 text-primary font-label-lg text-label-lg uppercase tracking-wider">
                  <span className="material-symbols-outlined text-[20px]">
                    cloud
                  </span>
                  <span>Cloud &amp; Networks</span>
                </div>
                <a
                  className="p-space-sm rounded hover:bg-surface-container transition-colors group flex flex-col gap-1"
                  href="#k8s"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-label-lg text-label-lg text-on-surface group-hover:text-primary transition-colors">
                      Managed Kubernetes Clusters
                    </span>
                    <span className="font-label-sm text-label-sm px-2 py-0.5 rounded-full bg-primary/10 text-primary">
                      $3k–$25k
                    </span>
                  </div>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">
                    EKS/GKE with autoscaling, blue-green deployments, and
                    multi-env CI/CD.
                  </p>
                </a>
                <a
                  className="p-space-sm rounded hover:bg-surface-container transition-colors group flex flex-col gap-1"
                  href="#serverless"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-label-lg text-label-lg text-on-surface group-hover:text-primary transition-colors">
                      Serverless Event Architecture
                    </span>
                    <span className="font-label-sm text-label-sm px-2 py-0.5 rounded-full bg-primary/10 text-primary">
                      $5k–$30k
                    </span>
                  </div>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">
                    Lambda, EventBridge, Cloudflare Workers with
                    dead-letter queue patterns.
                  </p>
                </a>
                <a
                  className="p-space-sm rounded hover:bg-surface-container transition-colors group flex flex-col gap-1"
                  href="#networking"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-label-lg text-label-lg text-on-surface group-hover:text-primary transition-colors">
                      SD-WAN &amp; Edge Networking
                    </span>
                    <span className="font-label-sm text-label-sm px-2 py-0.5 rounded-full bg-primary/10 text-primary">
                      $8k–$35k
                    </span>
                  </div>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">
                    Global CDN with multi-region failover and
                    latency-based routing.
                  </p>
                </a>
              </div>

              {/* Col 3: Data & Compliance */}
              <div className="flex flex-col gap-space-sm">
                <div className="flex items-center gap-2 text-primary font-label-lg text-label-lg uppercase tracking-wider">
                  <span className="material-symbols-outlined text-[20px]">
                    security
                  </span>
                  <span>Data &amp; Compliance</span>
                </div>
                <a
                  className="p-space-sm rounded hover:bg-surface-container transition-colors group flex flex-col gap-1"
                  href="#data-warehouse"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-label-lg text-label-lg text-on-surface group-hover:text-primary transition-colors">
                      Data Engineering &amp; Warehousing
                    </span>
                    <span className="font-label-sm text-label-sm px-2 py-0.5 rounded-full bg-primary/10 text-primary">
                      $18k–$85k
                    </span>
                  </div>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">
                    Snowflake, BigQuery, Apache Airflow with event-driven
                    ELT pipelines.
                  </p>
                </a>
                <a
                  className="p-space-sm rounded hover:bg-surface-container transition-colors group flex flex-col gap-1"
                  href="#analytics"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-label-lg text-label-lg text-on-surface group-hover:text-primary transition-colors">
                      Analytics &amp; Dashboard Suite
                    </span>
                    <span className="font-label-sm text-label-sm px-2 py-0.5 rounded-full bg-primary/10 text-primary">
                      $12k–$55k
                    </span>
                  </div>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">
                    Looker, Metabase, real-time KPI dashboards with
                    embedded analytics.
                  </p>
                </a>
                <a
                  className="p-space-sm rounded hover:bg-surface-container transition-colors group flex flex-col gap-1"
                  href="#compliance"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-label-lg text-label-lg text-on-surface group-hover:text-primary transition-colors">
                      Compliance Automation
                    </span>
                    <span className="font-label-sm text-label-sm px-2 py-0.5 rounded-full bg-primary/10 text-primary">
                      $15k–$60k
                    </span>
                  </div>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">
                    SOC 2, ISO 27001, HIPAA audit tooling with automated
                    evidence collection.
                  </p>
                </a>
              </div>

              {/* Col 4: Commerce & Growth */}
              <div className="flex flex-col gap-space-sm">
                <div className="flex items-center gap-2 text-primary font-label-lg text-label-lg uppercase tracking-wider">
                  <span className="material-symbols-outlined text-[20px]">
                    shopping_cart
                  </span>
                  <span>Commerce &amp; Growth</span>
                </div>
                <a
                  className="p-space-sm rounded hover:bg-surface-container transition-colors group flex flex-col gap-1"
                  href="#shopify"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-label-lg text-label-lg text-on-surface group-hover:text-primary transition-colors">
                      Shopify Plus Headless Store
                    </span>
                    <span className="font-label-sm text-label-sm px-2 py-0.5 rounded-full bg-primary/10 text-primary">
                      $15k–$60k
                    </span>
                  </div>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">
                    Custom Hydrogen storefronts with Oxygen CI/CD deployment
                    pipelines.
                  </p>
                </a>
                <a
                  className="p-space-sm rounded hover:bg-surface-container transition-colors group flex flex-col gap-1"
                  href="#capi"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-label-lg text-label-lg text-on-surface group-hover:text-primary transition-colors">
                      Paid Social CAPI Integration
                    </span>
                    <span className="font-label-sm text-label-sm px-2 py-0.5 rounded-full bg-primary/10 text-primary">
                      $5k–$25k
                    </span>
                  </div>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">
                    Meta/TikTok conversion API with multi-touch attribution
                    modeling.
                  </p>
                </a>
                <a
                  className="p-space-sm rounded hover:bg-surface-container transition-colors group flex flex-col gap-1"
                  href="#marketing"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-label-lg text-label-lg text-on-surface group-hover:text-primary transition-colors">
                      Performance Marketing Stack
                    </span>
                    <span className="font-label-sm text-label-sm px-2 py-0.5 rounded-full bg-primary/10 text-primary">
                      $10k–$45k
                    </span>
                  </div>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">
                    A/B testing, CRO, and growth automation with segment
                    integration.
                  </p>
                </a>
              </div>
            </div>

            {/* Mega-Menu Bottom Highlight Bar */}
            <div className="mt-space-lg pt-space-md flex flex-wrap items-center justify-between bg-surface-container-low rounded py-space-lg px-space-lg gap-space-md">
              <div className="flex items-center gap-space-md">
                <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-on-primary">
                  <span className="material-symbols-outlined text-[20px]">
                    bolt
                  </span>
                </div>
                <div>
                  <p className="font-label-lg text-label-lg text-on-surface">
                    Need a custom, bespoke hybrid sprint team?
                  </p>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">
                    Blend 1 Staff Architect with 2 Full-Stack Fellows
                    starting at $22,500/two-week cadence.
                  </p>
                </div>
              </div>
              <a
                className="px-space-md py-space-xs rounded-full bg-surface text-primary hover:bg-surface-container-highest font-label-lg text-label-lg transition-colors shadow-sm"
                href="#sprint-estimator"
              >
                Open Team Customizer &rarr;
              </a>
            </div>
          </div>
        </div>
      )}

      {/* 2. INDUSTRIES DROPDOWN */}
      {activeMenu === "industries" && (
        <div
          className="fixed top-[120px] left-0 w-full z-40 bg-surface shadow-2xl transition-all duration-200"
          onMouseEnter={cancelClose}
          onMouseLeave={scheduleClose}
        >
          <div className="w-full max-w-[1440px] mx-auto px-margin py-space-lg">
            <div className="mb-space-md">
              <span className="font-label-sm text-label-sm text-primary uppercase tracking-widest font-bold">
                Domain Expertise
              </span>
              <h3 className="font-headline-lg text-headline-lg text-on-surface mt-1">
                Regulated Verticals &amp; Enterprise Stacks
              </h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-space-md">
              {megaMenuItems.industries.map((item) => (
                <div
                  key={item.label}
                  className="p-space-md rounded bg-surface-container-low hover:bg-surface-container transition-all group flex gap-space-sm"
                >
                  <div className="w-12 h-12 rounded bg-primary/10 text-primary flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                    <span className="material-symbols-outlined text-[26px]">{item.icon}</span>
                  </div>
                  <div>
                    <div className="flex items-center justify-between">
                      <h4 className="font-headline-sm text-headline-sm text-on-surface">
                        {item.label}
                      </h4>
                      <span className="font-label-sm text-label-sm text-primary bg-primary/10 px-2 py-0.5 rounded-full">
                        {item.badge}
                      </span>
                    </div>
                    <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* 3. TECH STACK & TOOLS MEGA-PANEL */}
      {activeMenu === "stack" && (
        <div
          className="fixed top-[120px] left-0 w-full z-40 bg-surface shadow-2xl transition-all duration-200"
          onMouseEnter={cancelClose}
          onMouseLeave={scheduleClose}
        >
          <div className="w-full max-w-[1440px] mx-auto px-margin py-space-lg">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-space-lg">
              {megaMenuItems.techStack.map((category) => (
                <div key={category.category} className="flex flex-col gap-space-sm">
                  <div className="flex items-center gap-2 pb-space-xs text-primary font-headline-sm text-headline-sm">
                    <span className="material-symbols-outlined">{category.icon}</span>
                    <span>{category.category}</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {category.items.map((tech) => (
                      <span
                        key={tech}
                        className={`px-3 py-1.5 rounded bg-surface-container-low text-on-surface font-label-md text-body-md flex items-center gap-1.5`}
                      >
                        <span className={`w-2 h-2 rounded-full ${category.color}`}></span>
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* 4. COMPANY & REGIONAL HUBS FLYOUT */}
      {activeMenu === "company" && (
        <div
          className="fixed top-[120px] left-0 w-full z-40 bg-surface shadow-2xl transition-all duration-200"
          onMouseEnter={cancelClose}
          onMouseLeave={scheduleClose}
        >
          <div className="w-full max-w-[1440px] mx-auto px-margin py-space-lg">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-space-lg">
              {/* Column 1: Studio */}
              <div className="flex flex-col gap-space-sm">
                <span className="font-label-sm text-label-sm text-primary uppercase tracking-widest font-bold">
                  The Studio
                </span>
                <h4 className="font-headline-md text-headline-md text-on-surface">
                  Pragmatic Engineers Who Write Production Code
                </h4>
                <p className="font-body-md text-body-md text-on-surface-variant">
                  BlueChip Tech was founded by former Big Tech Staff Engineers
                  tired of bloated agencies that outsource work. Every project
                  is led by a hands-on technical partner.
                </p>
                <div className="mt-space-sm flex flex-col gap-2">
                  <a
                    className="font-label-lg text-label-lg text-primary hover:underline flex items-center gap-1"
                    href="#about"
                  >
                    <span>The BlueChip Tech Canon &amp; Manifesto</span>
                    <span className="material-symbols-outlined text-[16px]">
                      arrow_forward
                    </span>
                  </a>
                  <a
                    className="font-label-lg text-label-lg text-primary hover:underline flex items-center gap-1"
                    href="#bench"
                  >
                    <span>Principal Architects &amp; Staff Bench</span>
                    <span className="material-symbols-outlined text-[16px]">
                      arrow_forward
                    </span>
                  </a>
                </div>
              </div>

              {/* Column 2: Regional Desks */}
              <div className="flex flex-col gap-space-sm">
                <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-widest font-bold">
                  Regional Desks
                </span>
                <div className="space-y-space-sm">
                  <div className="p-space-sm rounded bg-surface-container-low">
                    <div className="font-label-lg text-label-lg text-on-surface flex items-center justify-between">
                      <span>San Francisco HQ</span>
                      <span className="text-primary font-label-sm">
                        500 Howard St
                      </span>
                    </div>
                    <span className="font-body-sm text-body-sm text-on-surface-variant">
                      Pacific Engineering Operations • Direct: +1 (800) 555-3920
                    </span>
                  </div>
                  <div className="p-space-sm rounded bg-surface-container-low">
                    <div className="font-label-lg text-label-lg text-on-surface flex items-center justify-between">
                      <span>Dubai DIFC Hub</span>
                      <span className="text-primary font-label-sm">
                        Gate Village 04
                      </span>
                    </div>
                    <span className="font-body-sm text-body-sm text-on-surface-variant">
                      GCC Tax Tech &amp; FinTech Squads • Direct: +971 4 800 6398
                    </span>
                  </div>
                  <div className="p-space-sm rounded bg-surface-container-low">
                    <div className="font-label-lg text-label-lg text-on-surface flex items-center justify-between">
                      <span>London Office</span>
                      <span className="text-primary font-label-sm">
                        100 Bishopsgate
                      </span>
                    </div>
                    <span className="font-body-sm text-body-sm text-on-surface-variant">
                      EMEA Banking &amp; Cloud Infrastructure
                    </span>
                  </div>
                </div>
              </div>

              {/* Column 3: NDA CTA */}
              <div className="flex flex-col justify-between p-space-md rounded bg-primary text-on-primary">
                <div>
                  <span className="font-label-sm text-label-sm uppercase tracking-widest opacity-80">
                    Instant Engagement
                  </span>
                  <h5 className="font-headline-sm text-headline-sm mt-1">
                    Mutual NDA Guaranteed
                  </h5>
                  <p className="font-body-md text-body-md opacity-90 mt-2">
                    Download our pre-executed mutual NDA for rapid IP clearance
                    prior to our scoping consultation.
                  </p>
                </div>
                <div className="mt-space-md">
                  <a
                    className="inline-flex items-center justify-center w-full px-space-md py-2.5 rounded-full bg-on-primary text-primary font-label-lg text-label-lg hover:bg-surface-container transition-colors shadow-sm"
                    href="#nda-download"
                  >
                    Download Direct Mutual NDA
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Interactive Backdrop Overlay (for desktop mega-menus) */}
      {activeMenu && (
        <div
          className="fixed inset-0 z-30 bg-inverse-surface/40 backdrop-blur-sm transition-opacity"
          onClick={() => setActiveMenu(null)}
        />
      )}

      {/* ==================== MOBILE SLIDING DRAWER ==================== */}
      <div
        aria-hidden="true"
        className={`fixed inset-0 z-50 transform transition-transform duration-300 ease-in-out flex justify-end ${
          mobileDrawerOpen
            ? "translate-x-0"
            : "translate-x-full"
        }`}
        id="mobile-drawer"
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-inverse-surface/60 backdrop-blur-sm"
          onClick={() => setMobileDrawerOpen(false)}
        />
        {/* Drawer Content Panel */}
        <div className="relative w-full max-w-md bg-surface h-full shadow-2xl flex flex-col overflow-y-auto z-10">
          {/* Drawer Header */}
          <div className="p-space-md flex items-center justify-between bg-surface-container-low">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded bg-primary flex items-center justify-center text-on-primary">
                <Icon name="terminal" />
              </div>
              <span className="font-headline-sm text-headline-sm text-on-surface">
                BlueChip Tech Menu
              </span>
            </div>
            <button
              className="p-2 rounded-full hover:bg-surface-container text-on-surface"
              onClick={() => setMobileDrawerOpen(false)}
            >
              <Icon name="close" />
            </button>
          </div>

          {/* Drawer Accordion Navigation */}
          <div className="p-space-md flex-1 flex flex-col gap-space-sm divide-y divide-surface-container-highest">
            {/* Section 1: Services */}
            <div className="pt-space-xs">
              <button
                type="button"
                className="w-full flex items-center justify-between py-2 text-left font-headline-sm text-headline-sm text-on-surface"
                onClick={() => toggleAccordion("acc-services")}
              >
                <span>Engineering Services (11)</span>
                <span
                  className={`material-symbols-outlined transition-transform ${
                    expandedAccordion === "acc-services" ? "rotate-180" : ""
                  }`}
                >
                  expand_more
                </span>
              </button>
              {expandedAccordion === "acc-services" && (
                <div className="flex flex-col gap-2 pt-2 pl-2">
                  <a
                    className="text-body-md font-body-md text-on-surface-variant hover:text-primary flex justify-between py-1"
                    href="#custom-cloud"
                  >
                    <span>Cloud Microservices</span>
                    <span className="text-primary font-label-sm">
                      $20k–$80k
                    </span>
                  </a>
                  <a
                    className="text-body-md font-body-md text-on-surface-variant hover:text-primary flex justify-between py-1"
                    href="#mobile-native"
                  >
                    <span>iOS &amp; Android Apps</span>
                    <span className="text-primary font-label-sm">
                      $20k–$75k
                    </span>
                  </a>
                  <a
                    className="text-body-md font-body-md text-on-surface-variant hover:text-primary flex justify-between py-1"
                    href="#uae-vat-phase2"
                  >
                    <span>UAE VAT Phase 2</span>
                    <span className="text-primary font-label-sm">
                      $20k–$70k
                    </span>
                  </a>
                </div>
              )}
            </div>

            {/* Section 2: Industries */}
            <div className="pt-space-xs">
              <button
                type="button"
                className="w-full flex items-center justify-between py-2 text-left font-headline-sm text-headline-sm text-on-surface"
                onClick={() => toggleAccordion("acc-industries")}
              >
                <span>Regulated Verticals</span>
                <span
                  className={`material-symbols-outlined transition-transform ${
                    expandedAccordion === "acc-industries" ? "rotate-180" : ""
                  }`}
                >
                  expand_more
                </span>
              </button>
              {expandedAccordion === "acc-industries" && (
                <div className="flex flex-col gap-2 pt-2 pl-2">
                  <a
                    className="text-body-md font-body-md text-on-surface-variant hover:text-primary py-1 block"
                    href="#fintech"
                  >
                    FinTech &amp; Ledger Banking
                  </a>
                  <a
                    className="text-body-md font-body-md text-on-surface-variant hover:text-primary py-1 block"
                    href="#healthtech"
                  >
                    HealthTech &amp; HIPAA
                  </a>
                  <a
                    className="text-body-md font-body-md text-on-surface-variant hover:text-primary py-1 block"
                    href="#logistics"
                  >
                    Logistics &amp; TMS
                  </a>
                </div>
              )}
            </div>

            {/* Section 3: Tech Stack */}
            <div className="pt-space-xs">
              <button
                type="button"
                className="w-full flex items-center justify-between py-2 text-left font-headline-sm text-headline-sm text-on-surface"
                onClick={() => toggleAccordion("acc-stack")}
              >
                <span>Tech Stack &amp; Tools</span>
                <span
                  className={`material-symbols-outlined transition-transform ${
                    expandedAccordion === "acc-stack" ? "rotate-180" : ""
                  }`}
                >
                  expand_more
                </span>
              </button>
              {expandedAccordion === "acc-stack" && (
                <div className="flex flex-col gap-2 pt-2 pl-2">
                  <span className="text-body-sm font-body-sm text-on-surface-variant">
                    Go, Rust, Swift, Next.js, Kubernetes, PostgreSQL,
                    ClickHouse, AWS, GCP.
                  </span>
                </div>
              )}
            </div>

            {/* Section 4: Hotlines & Direct Desks */}
            <div className="pt-space-md flex flex-col gap-2">
              <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">
                Direct Telephone Desks
              </span>
              <a
                className="flex items-center gap-2 p-2.5 rounded bg-surface-container-low text-on-surface font-label-lg text-label-lg"
                href="tel:+18005553920"
              >
                <span className="material-symbols-outlined text-primary text-[20px]">
                  call
                </span>
                <span>US Hotline: +1 800 555-3920</span>
              </a>
              <a
                className="flex items-center gap-2 p-2.5 rounded bg-surface-container-low text-on-surface font-label-lg text-label-lg"
                href="tel:+97148006398"
              >
                <span className="material-symbols-outlined text-primary text-[20px]">
                  call
                </span>
                <span>UAE Hotline: +971 4 800 6398</span>
              </a>
            </div>
          </div>

          {/* Drawer Bottom Action */}
          <div className="p-space-md bg-surface-container-low flex flex-col gap-2">
            <a
              className="w-full py-space-sm rounded-full bg-primary text-on-primary text-center font-label-lg text-label-lg hover:bg-primary-container transition-all"
              href="#booking"
            >
              <div className="flex items-center justify-center gap-2">
                <Icon name="calendar_month" />
                <span>Book Architecture Scoping Call</span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
