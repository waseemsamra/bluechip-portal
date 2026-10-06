"use client";

import type { JSX } from "react";
import { useState, useEffect } from "react";

const cases = [
  {
    id: 1,
    title: "CarePoint Patient Portal & Intranet",
    category: "Healthcare",
    type: "portal",
    industry: "healthcare",
    budget: "tier-core",
    stack: "portal-stack",
    keywords: "carepoint hipaa patient portal intranet sharepoint azure medical health",
    desc: "Consolidated clinical intranet and patient document hub unifying 850 medical staff with role-based HIPAA record lookups and Azure AD encryption.",
    impact: "70% faster chart retrieval • 100% HIPAA audit pass",
    icon: "verified",
    price: "$42,000",
    weeks: "6 Wks",
    tech: ["SharePoint", "Azure AD", "PowerAutomate"],
  },
  {
    id: 2,
    title: "MedSchedule Telehealth Booking",
    category: "Healthcare",
    type: "web",
    industry: "healthcare",
    budget: "tier-entry",
    stack: "react",
    keywords: "medschedule telehealth booking twilio web app calendar clinic video",
    desc: "Self-service specialist scheduling with embedded Twilio WebRTC video rooms, automated SMS reminders, and zero double-booking locks.",
    impact: "-42% appointment no-shows • 14,000+ sessions held",
    icon: "trending_down",
    price: "$34,000",
    weeks: "5 Wks",
    tech: ["Next.js", "Twilio WebRTC", "Stripe Health"],
  },
  {
    id: 3,
    title: "OrthoTrack Physical Therapy App",
    category: "Healthcare",
    type: "mobile",
    industry: "healthcare",
    budget: "tier-entry",
    stack: "mobile-stack",
    keywords: "orthotrack physical therapy mobile flutter camera motion rehabilitation",
    desc: "Patient exercise adherence mobile application featuring camera posture detection and daily range-of-motion logging for physical rehabilitation clinics.",
    impact: "89% protocol completion rate • 4.8 App Store score",
    icon: "check_circle",
    price: "$28,000",
    weeks: "4 Wks",
    tech: ["Flutter", "CoreML", "Firebase"],
  },
  {
    id: 4,
    title: "BioLab Sample Tracking LIMS",
    category: "Healthcare",
    type: "web",
    industry: "healthcare",
    budget: "tier-core",
    stack: "backend",
    keywords: "biolab lims laboratory sample tracking biotech python postgres",
    desc: "Full-lifecycle biospecimen inventory tracker with cryogenic freezer rack visualization, barcode scanning, and FDA 21 CFR Part 11 audit trails.",
    impact: "220k specimens managed • Zero custody breaks",
    icon: "speed",
    price: "$58,000",
    weeks: "8 Wks",
    tech: ["FastAPI", "React", "PostgreSQL"],
  },
  {
    id: 5,
    title: "DentalCare Multi-Clinic EHR Sync",
    category: "Healthcare",
    type: "portal",
    industry: "healthcare",
    budget: "tier-core",
    stack: "react",
    keywords: "dentalcare ehr sync dental patient records multi location",
    desc: "Bi-directional synchronization layer joining 8 satellite dental practices to a unified central billing, scheduling, and x-ray imaging repository.",
    impact: "Saved 18 hours/week in duplicate billing data entry",
    icon: "savings",
    price: "$36,000",
    weeks: "5 Wks",
    tech: ["Node.js", "HL7 / FHIR", "AWS Lambda"],
  },
  {
    id: 6,
    title: "PharmaDose Prescription Verifier",
    category: "Healthcare",
    type: "web",
    industry: "healthcare",
    budget: "tier-core",
    stack: "react",
    keywords: "pharmadose prescription verifier pharmacist drug interaction pharmacy",
    desc: "Safety validation engine that cross-references dosages against patient kidney markers and FDA adverse-interaction matrices prior to pharmacy dispense.",
    impact: "Prevented 34 critical drug-interaction collisions",
    icon: "security",
    price: "$48,000",
    weeks: "7 Wks",
    tech: ["React", "Python", "Redis Cache"],
  },
  {
    id: 7,
    title: "OmniHub Warehouse Scanner",
    category: "Logistics",
    type: "mobile",
    industry: "logistics",
    budget: "tier-core",
    stack: "mobile-stack",
    keywords: "omnihub warehouse inventory scanner honeywell react native logistics offline",
    desc: "Offline-tolerant barcode and RFID scanning suite for forklift operators and pickers with automatic conflict resolution upon WiFi re-docking.",
    impact: "94% faster inventory cycle counts",
    icon: "bolt",
    price: "$48,000",
    weeks: "8 Wks",
    tech: ["React Native", "SQLite", "Honeywell SDK"],
  },
  {
    id: 8,
    title: "FreightFlow Dispatch & Telemetry",
    category: "Logistics",
    type: "web",
    industry: "logistics",
    budget: "tier-enterprise",
    stack: "react",
    keywords: "freightflow fleet dispatch telemetry trucking logistics gps map",
    desc: "Live interactive GPS telemetry and load assignment console handling 400 semi-trucks, driver hours-of-service compliance, and fuel efficiency scoring.",
    impact: "12% fleet fuel savings • Sub-second position ping",
    icon: "local_gas_station",
    price: "$62,000",
    weeks: "9 Wks",
    tech: ["React / Mapbox", "Go Kafka", "TimescaleDB"],
  },
  {
    id: 9,
    title: "ColdChain Temperature IoT Portal",
    category: "Logistics",
    type: "data",
    industry: "logistics",
    budget: "tier-core",
    stack: "backend",
    keywords: "coldchain temperature iot sensor reefer food pharma logistics",
    desc: "Real-time thermal sensor alert network tracking perishable food and vaccine cargo with automated incident logging and SMS threshold excursions.",
    impact: "Zero spoilage write-offs across 1,800 shipments",
    icon: "thermostat",
    price: "$44,000",
    weeks: "6 Wks",
    tech: ["Node.js", "AWS IoT Core", "React Dashboard"],
  },
  {
    id: 10,
    title: "DockMaster 3PL Dock Scheduler",
    category: "Logistics",
    type: "web",
    industry: "logistics",
    budget: "tier-entry",
    stack: "react",
    keywords: "dockmaster warehouse dock scheduler carrier booking 3pl logistics",
    desc: "Carrier-facing dock door booking application eliminating truck yard congestion with time-slotted check-ins and live gate camera verification.",
    impact: "Yard wait times cut from 3.8 hrs to 26 mins",
    icon: "schedule",
    price: "$32,000",
    weeks: "5 Wks",
    tech: ["Next.js", "Tailwind", "Supabase"],
  },
  {
    id: 11,
    title: "RouteWise Last-Mile Driver App",
    category: "Logistics",
    type: "mobile",
    industry: "logistics",
    budget: "tier-core",
    stack: "mobile-stack",
    keywords: "routewise last mile navigation proof of delivery signature mobile flutter",
    desc: "Multi-stop route sequence optimizer with instant electronic proof-of-delivery (e-sign + photo capture) and customer delivery ETA updates.",
    impact: "+22% stops per shift • 100% digital POD",
    icon: "navigation",
    price: "$38,000",
    weeks: "6 Wks",
    tech: ["Flutter", "Mapbox Turn-by-Turn", "S3 Media"],
  },
  {
    id: 12,
    title: "PalletTrack RFID Ingestion Engine",
    category: "Logistics",
    type: "data",
    industry: "logistics",
    budget: "tier-core",
    stack: "backend",
    keywords: "pallettrack rfid ingestion engine warehouse logistics bulk items",
    desc: "Ultra-high throughput gateway daemon capturing up to 600 passive RFID pallet tags simultaneously passing through high-speed warehouse portal docks.",
    impact: "Sub-20ms packet parsing • Zero tag collision drop",
    icon: "sensors",
    price: "$54,000",
    weeks: "7 Wks",
    tech: ["Go / MQTT", "PostgreSQL", "Impinj Reader SDK"],
  },
  {
    id: 13,
    title: "CustomsClear Cross-Border Vault",
    category: "Logistics",
    type: "portal",
    industry: "logistics",
    budget: "tier-entry",
    stack: "react",
    keywords: "customsclear customs cross border document vault freight brokerage ocr",
    desc: "Automated commercial invoice and bill-of-lading processing engine with AI-assisted tariff classification for US-Canada freight brokers.",
    impact: "Border clearance delay reduced by 78%",
    icon: "verified",
    price: "$29,000",
    weeks: "4 Wks",
    tech: ["React", "Python OCR", "PostgreSQL"],
  },
];

const spotlights = [
  {
    id: 7,
    title: "OmniHub Warehouse Scanner",
    category: "Logistics & Supply Chain",
    tech: "React Native • SQLite • Honeywell SDK",
    price: "$48,000 • 8 Weeks",
    image: "https://placehold.co/640x256/006948/ffffff?text=OmniHub+Warehouse+Scanner",
    impact: "94% faster cycle counts & zero lost shipments",
    tags: ["React Native", "SQLite", "Node.js", "Honeywell SDK"],
  },
  {
    id: 1,
    title: "CarePoint Clinical Intranet",
    category: "Healthcare & MedTech",
    tech: "SharePoint Online • Azure AD • Power Automate",
    price: "$42,000 • 6 Weeks",
    image: "https://placehold.co/640x256/0051d5/ffffff?text=CarePoint+Clinical+Intranet",
    impact: "Replaced 4 legacy servers; 100% audit pass",
    tags: ["SharePoint Online", "Azure AD SSO", "Power Automate", "HIPAA"],
  },
  {
    id: 14,
    title: "Aura Luxe VIP Storefront",
    category: "D2C & E-Commerce",
    tech: "Flutter • Shopify API • Klaviyo",
    price: "$36,000 • 6 Weeks",
    image: "https://placehold.co/640x256/316bf3/ffffff?text=Aura+Luxe+VIP+Storefront",
    impact: "+38% repeat buyer rate & 3.1x mobile conversion",
    tags: ["Flutter", "Shopify API", "Klaviyo SDK", "Stripe"],
  },
];

export default function PortfolioDirectory(): JSX.Element {
  const [search, setSearch] = useState("");
  const [activeIndustry, setActiveIndustry] = useState("all");
  const [activeType, setActiveType] = useState("all");
  const [activeBudget, setActiveBudget] = useState("all");
  const [activeStack, setActiveStack] = useState("all");
  const [modalProject, setModalProject] = useState<(typeof cases[0]) | null>(null);

  const filtered = cases.filter((c) => {
    const matchSearch =
      search === "" ||
      c.title.toLowerCase().includes(search.toLowerCase()) ||
      c.desc.toLowerCase().includes(search.toLowerCase()) ||
      c.keywords.toLowerCase().includes(search.toLowerCase());
    const matchIndustry = activeIndustry === "all" || c.industry === activeIndustry;
    const matchType = activeType === "all" || c.type === activeType;
    const matchBudget = activeBudget === "all" || c.budget === activeBudget;
    const matchStack = activeStack === "all" || c.stack === activeStack;
    return matchSearch && matchIndustry && matchType && matchBudget && matchStack;
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      // noop: placeholder for future debounced search
    }, 300);
    return () => clearTimeout(timer);
  }, [search]);

  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="relative w-full overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[340px] bg-gradient-to-b from-primary/10 via-surface-container/60 to-transparent blur-3xl pointer-events-none -z-10"></div>
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-12">
          <div className="flex flex-col items-center text-center max-w-4xl mx-auto space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-surface-container-high shadow-sm">
              <span className="w-2.5 h-2.5 rounded-full bg-primary animate-ping"></span>
              <span className="w-2 h-2 rounded-full bg-primary -ml-3"></span>
              <span className="font-label-sm text-label-sm text-primary uppercase tracking-widest font-bold">
                Verified Production Portfolio • 40+ Shipped Applications • 100% Fixed-Price Delivery
              </span>
            </div>
            <h1 className="font-display-hero text-display-hero-mobile md:text-display-hero text-on-surface tracking-tight">
              40 Shipped Applications.
              <br className="hidden sm:inline" />
              <span className="text-primary font-extrabold">Real ROI.</span> Zero Retainer Waste.
            </h1>
            <p className="font-body-xl text-body-lg md:text-body-xl text-on-surface-variant max-w-2xl leading-relaxed">
              Explore our complete catalog of custom web apps, mobile apps,
              enterprise portals, e-commerce engines, and data systems
              engineered for high-growth SMBs. Every project delivered on a
              guaranteed fixed fee ($20k–$95k) in 4 to 12 weeks.
            </p>
          </div>

          {/* Live Performance Metrics */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mt-8 p-4 md:p-6 rounded-lg bg-surface-container-lowest shadow-[0_4px_24px_rgba(11,28,48,0.04)]">
            <div className="flex flex-col items-center text-center p-4 rounded bg-surface-container-low/60">
              <span className="font-headline-lg text-headline-lg text-primary leading-none font-bold">42</span>
              <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider mt-1">Apps In Production</span>
            </div>
            <div className="flex flex-col items-center text-center p-4 rounded bg-surface-container-low/60">
              <span className="font-headline-lg text-headline-lg text-on-surface leading-none font-bold">100%</span>
              <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider mt-1">On-Time & Fixed SLA</span>
            </div>
            <div className="flex flex-col items-center text-center p-4 rounded bg-surface-container-low/60">
              <span className="font-headline-lg text-headline-lg text-primary leading-none font-bold">$20k–$95k</span>
              <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider mt-1">Flat Fixed Packages</span>
            </div>
            <div className="flex flex-col items-center text-center p-4 rounded bg-surface-container-low/60">
              <span className="font-headline-lg text-headline-lg text-on-surface leading-none font-bold">4.9 / 5</span>
              <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider mt-1">Client Partner CSAT</span>
            </div>
            <div className="col-span-2 md:col-span-1 flex flex-col items-center text-center p-4 rounded bg-primary text-on-primary">
              <span className="font-headline-lg text-headline-lg leading-none font-bold">3.4x</span>
              <span className="font-label-sm text-label-sm text-on-primary/80 uppercase tracking-wider mt-1">Avg Year 1 Client ROI</span>
            </div>
          </div>
        </div>
      </section>

      {/* Flagship Spotlights */}
      <section className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <span className="font-label-sm text-label-sm text-primary uppercase font-bold tracking-widest block mb-1">Flagship Architectures</span>
            <h2 className="font-headline-xl text-headline-xl text-on-surface">Spotlight Case Studies</h2>
          </div>
          <p className="font-body-md text-body-md text-on-surface-variant max-w-md">
            Deep dive into three production builds demonstrating our offline edge
            synchronization, high-concurrency microservices, and enterprise
            compliance engines.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {spotlights.map((s) => (
            <div
              key={s.id}
              className="group flex flex-col rounded-lg bg-surface-container-lowest overflow-hidden shadow-[0_4px_24px_rgba(11,28,48,0.05)] transition-all duration-300 hover:-translate-y-1"
            >
              <div className="relative h-64 overflow-hidden bg-surface-container">
                <img
                  alt={s.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  src={s.image}
                />
                <div className="absolute top-4 left-4 flex gap-2">
                  <span className="px-3 py-1 rounded-full bg-surface/90 backdrop-blur-md font-label-sm text-label-sm text-on-surface font-semibold">
                    {s.category}
                  </span>
                </div>
                <div className="absolute bottom-4 right-4">
                  <span className="px-3 py-1 rounded-full bg-primary text-on-primary font-label-sm text-label-sm font-bold shadow-md">
                    {s.price}
                  </span>
                </div>
              </div>
              <div className="p-6 flex flex-col flex-1">
                <div className="flex items-center justify-between gap-2 mb-2">
                  <h3 className="font-headline-md text-headline-md text-on-surface group-hover:text-primary transition-colors">
                    {s.title}
                  </h3>
                  <span className="material-symbols-outlined text-on-surface-variant text-[20px]">
                    qr_code_scanner
                  </span>
                </div>
                <p className="font-body-md text-body-md text-on-surface-variant mb-4 flex-1">
                  {cases.find((c) => c.id === s.id)?.desc}
                </p>
                <div className="bg-surface-container-low p-3 rounded mb-4">
                  <div className="flex items-center gap-2 text-primary font-label-sm text-label-sm font-bold">
                    <span className="material-symbols-outlined text-[16px]">trending_up</span>
                    <span>KEY IMPACT: {s.impact}</span>
                  </div>
                </div>
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {s.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded-full bg-surface-container text-on-surface-variant font-label-sm text-label-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Interactive Directory */}
      <section className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-12 w-full" id="portfolio-directory">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-container-high text-on-surface-variant font-label-sm text-label-sm font-bold mb-2">
              <span>DIRECTORY BROWSER</span>
            </div>
            <h2 className="font-headline-xl text-headline-xl text-on-surface">The 40 Shipped Applications</h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant mt-1">
              Live systems driving measurable business value across 7 commercial
              industries.
            </p>
          </div>
          <div className="flex items-center gap-2 text-on-surface-variant font-body-sm text-body-sm bg-surface-container-lowest px-4 py-2 rounded-full shadow-sm">
            <span className="font-semibold text-on-surface">{filtered.length}</span> of{" "}
            {cases.length} Applications Displayed
          </div>
        </div>

        {/* Filters */}
        <div className="bg-surface-container-lowest p-4 md:p-6 rounded-lg shadow-[0_4px_20px_rgba(11,28,48,0.03)] space-y-4 mb-8">
          <div className="relative w-full">
            <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant text-[22px]">
              search
            </span>
            <input
              className="w-full pl-12 pr-4 py-3.5 rounded-full bg-surface-container-low text-on-surface placeholder:text-on-surface-variant/70 font-body-md text-body-md outline-none focus:bg-surface-container-lowest focus:ring-2 focus:ring-primary transition-all"
              id="portfolio-search"
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search by keyword, client type, or stack..."
              type="text"
            />
          </div>

          <div className="flex items-center gap-2 overflow-x-auto pb-2">
            {[
              { key: "all", label: "All Industries", count: cases.length },
              { key: "healthcare", label: "Healthcare & MedTech", count: 6 },
              { key: "logistics", label: "Logistics & Supply Chain", count: 7 },
              { key: "ecommerce", label: "E-Commerce & Retail", count: 8 },
              { key: "fintech", label: "FinTech & Financial", count: 5 },
              { key: "manufacturing", label: "Manufacturing & Field Ops", count: 6 },
              { key: "saas", label: "B2B SaaS & Services", count: 5 },
              { key: "hospitality", label: "Hospitality & Real Estate", count: 3 },
            ].map((tab) => (
              <button
                key={tab.key}
                className={`px-4 py-2 rounded-full font-label-sm text-label-sm whitespace-nowrap transition-all flex items-center gap-1.5 ${
                  activeIndustry === tab.key
                    ? "bg-primary text-on-primary shadow-sm"
                    : "bg-surface-container text-on-surface-variant hover:text-on-surface"
                }`}
                onClick={() => setActiveIndustry(tab.key)}
              >
                {tab.label}
                <span className={`px-1.5 py-0.5 rounded-full text-[10px] ${
                  activeIndustry === tab.key
                    ? "bg-on-primary/20 text-on-primary"
                    : "bg-surface-container-highest text-on-surface-variant"
                }`}>
                  {tab.count}
                </span>
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
            <select
              className="w-full px-4 py-2.5 rounded-full bg-surface-container-low text-on-surface font-body-sm text-body-sm outline-none focus:ring-2 focus:ring-primary"
              value={activeType}
              onChange={(e) => setActiveType(e.target.value)}
            >
              <option value="all">Architecture: All Types</option>
              <option value="web">Custom Web App</option>
              <option value="mobile">Mobile (iOS / Android)</option>
              <option value="portal">Enterprise Portal / CMS</option>
              <option value="ecommerce">E-Commerce Architecture</option>
              <option value="data">BI & Modern Data Engine</option>
            </select>
            <select
              className="w-full px-4 py-2.5 rounded-full bg-surface-container-low text-on-surface font-body-sm text-body-sm outline-none focus:ring-2 focus:ring-primary"
              value={activeBudget}
              onChange={(e) => setActiveBudget(e.target.value)}
            >
              <option value="all">Budget: All Tiers ($20k–$95k)</option>
              <option value="tier-entry">Under $35,000 (Rapid Sprint)</option>
              <option value="tier-core">$35,000 – $60,000 (Production Scale)</option>
              <option value="tier-enterprise">$60,000 – $95,000 (Flagship Ecosystem)</option>
            </select>
            <select
              className="w-full px-4 py-2.5 rounded-full bg-surface-container-low text-on-surface font-body-sm text-body-sm outline-none focus:ring-2 focus:ring-primary"
              value={activeStack}
              onChange={(e) => setActiveStack(e.target.value)}
            >
              <option value="all">Primary Tech Stack: All</option>
              <option value="react">React / Next.js</option>
              <option value="mobile-stack">React Native / Flutter</option>
              <option value="backend">Node / Python / Go</option>
              <option value="ecommerce-stack">Shopify / OpenCart</option>
              <option value="portal-stack">SharePoint / Azure</option>
            </select>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((c) => (
            <div
              key={c.id}
              className="group flex flex-col justify-between p-6 rounded-lg bg-surface-container-lowest shadow-[0_2px_12px_rgba(11,28,48,0.03)] hover:shadow-[0_12px_32px_rgba(11,28,48,0.08)] transition-all duration-300 hover:-translate-y-1"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="px-2.5 py-1 rounded-full bg-surface-container text-primary font-label-sm text-label-sm font-bold uppercase tracking-wider">
                    {c.category}
                  </span>
                  <span className="font-label-sm text-label-sm text-on-surface-variant font-semibold">
                    {c.type === "portal" ? "Portal & Intranet" : c.type === "mobile" ? "Mobile App" : c.type === "data" ? "Data Portal" : c.type === "ecommerce" ? "E-Commerce" : "Web Application"}
                  </span>
                </div>
                <h3 className="font-headline-sm text-headline-sm text-on-surface group-hover:text-primary transition-colors">
                  {c.id}. {c.title.replace(/^(1\.|2\.|3\.|4\.|5\.|6\.|7\.|8\.|9\.|10\.|11\.|12\.|13\.|14\.|15\.|16\.|17\.|18\.|19\.|20\.|21\.|22\.|23\.|24\.|25\.|26\.|27\.|28\.|29\.|30\.|31\.|32\.|33\.|34\.|35\.|36\.|37\.|38\.|39\.|40\.)\s*/, "")}
                </h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant mt-1.5 mb-4">
                  {c.desc}
                </p>
                <div className="flex items-center gap-1.5 p-2 rounded bg-surface-container-low text-primary font-label-sm text-label-sm font-semibold mb-4">
                  <span className="material-symbols-outlined text-[16px]">{c.icon}</span>
                  <span>{c.impact}</span>
                </div>
              </div>
              <div>
                <div className="flex flex-wrap gap-1 mb-4">
                  {c.tech.map((t) => (
                    <span
                      key={t}
                      className="px-2 py-0.5 rounded bg-surface text-on-surface-variant font-body-sm text-[11px]"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <div className="flex items-center justify-between pt-2 bg-surface-container-low/50 px-3 py-2 rounded">
                  <span className="font-headline-sm text-headline-sm text-on-surface font-bold">
                    {c.price}{" "}
                    <span className="font-body-sm text-body-sm text-on-surface-variant font-normal">
                      • {c.weeks}
                    </span>
                  </span>
                  <button
                    className="font-label-sm text-label-sm text-primary font-bold hover:underline flex items-center gap-0.5"
                    onClick={() => setModalProject(c)}
                  >
                    Specs{" "}
                    <span className="material-symbols-outlined text-[14px]">
                      chevron_right
                    </span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Modal */}
      {modalProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-on-surface/40 backdrop-blur-sm p-4"
          onClick={() => setModalProject(null)}
        >
          <div
            className="w-full max-w-xl bg-surface-container-lowest rounded-lg shadow-2xl p-6 space-y-4 max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-3 border-b border-surface-container">
              <div>
                <span className="font-label-sm text-label-sm text-primary uppercase font-bold">
                  Case Study Specification
                </span>
                <h3 className="font-headline-md text-headline-md text-on-surface mt-0.5">
                  {modalProject.id}. {modalProject.title}
                </h3>
              </div>
              <button
                className="w-8 h-8 rounded-full bg-surface-container flex items-center justify-center text-on-surface hover:bg-surface-container-high"
                onClick={() => setModalProject(null)}
              >
                <span className="material-symbols-outlined text-[20px]">close</span>
              </button>
            </div>
            <div className="grid grid-cols-2 gap-4 bg-surface-container-low p-4 rounded">
              <div>
                <span className="font-label-sm text-label-sm text-on-surface-variant block uppercase">
                  Guaranteed Budget
                </span>
                <span className="font-headline-sm text-headline-sm text-primary font-bold">
                  {modalProject.price}
                </span>
              </div>
              <div>
                <span className="font-label-sm text-label-sm text-on-surface-variant block uppercase">
                  Time to Staging
                </span>
                <span className="font-headline-sm text-headline-sm text-on-surface font-bold">
                  {modalProject.weeks}
                </span>
              </div>
            </div>
            <div>
              <h4 className="font-label-lg text-label-lg text-on-surface font-bold mb-1">
                Production Architecture & Stack
              </h4>
              <p className="font-body-md text-body-md text-on-surface-variant">
                {modalProject.tech.join(", ")}
              </p>
            </div>
            <div>
              <h4 className="font-label-lg text-label-lg text-on-surface font-bold mb-1">
                Problem & Impact Solved
              </h4>
              <p className="font-body-md text-body-md text-on-surface-variant">
                {modalProject.desc}
              </p>
            </div>
            <div className="pt-4 flex items-center justify-end gap-3">
              <button
                className="px-4 py-2 rounded-full bg-surface-container text-on-surface font-label-sm text-label-sm font-semibold"
                onClick={() => setModalProject(null)}
              >
                Close Specs
              </button>
              <a
                className="px-4 py-2 rounded-full bg-primary text-on-primary font-label-sm text-label-sm font-bold shadow-sm"
                href="#quick-scoping"
                onClick={() => setModalProject(null)}
              >
                Build Similar App
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
