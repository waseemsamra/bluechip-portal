"use client";

import type { JSX } from "react";
import { useState } from "react";
import Image from "next/image";

const disciplines = [
  { label: "Custom Software", selected: true },
  { label: "Mobile Apps", selected: false },
  { label: "FinTech & Pay", selected: false },
  { label: "Shopify Plus", selected: false },
  { label: "UAE VAT & ERP", selected: false },
  { label: "Cloud & Infra", selected: false },
  { label: "BI / Data Lake", selected: false },
  { label: "Bare-Metal IT", selected: false },
];

const guarantees = [
  { icon: "policy", title: "Mutual Day 1 NDA", desc: "All codebases, strategic specs, and database designs remain your strictly confidential property before a single diagnostic runs." },
  { icon: "balance", title: "Zero Scope Creep", desc: "Transparent sprint milestones. If an estimated feature exceeds the sprint boundary due to our sizing, we absorb the engineering overhead." },
  { icon: "copyright", title: "100% IP Handover", desc: "You retain absolute, unconditional ownership of all repository commits, cloud accounts, Figma systems, and compiled assets upon sprint completion." },
  { icon: "verified", title: "30-Day Defect Warranty", desc: "Post-deployment coverage is built in. Any regression or anomaly within the scoped architecture is patched immediately without charge." },
];

const steps = [
  {
    num: "01",
    icon: "timer",
    badge: "< 4 Hours SLA",
    badgeColor: "bg-primary",
    title: "Technical Triaging",
    desc: "A Principal Systems Architect assesses your codebase, constraints, target scaling vectors, and enterprise security requirements to determine system feasibility.",
    icon2: "fact_check",
    note: "Immediate stack feasibility audit",
  },
  {
    num: "02",
    icon: "terminal",
    badge: "30 Minutes",
    badgeColor: "bg-tertiary",
    title: "Architecture Whiteboard",
    desc: "A focused technical deep-dive session conducted under NDA. We stress-test schemas, latency targets, cloud infrastructure choices, and third-party integrations.",
    icon2: "draw",
    note: "Zero sales fluff, pure engineering schema",
  },
  {
    num: "03",
    icon: "task_alt",
    badge: "Within 48h",
    badgeColor: "bg-primary-container",
    title: "Fixed-Cap Sprint Plan",
    desc: "You receive an architectural blueprint, delivery milestone breakdowns, guaranteed fixed cost, and dedicated engineer pod assignments ready to deploy.",
    icon2: "task_alt",
    note: "Guaranteed deliverables & capped budget",
  },
];

const faqs = [
  {
    question: "Do you work with non-technical founders?",
    answer: "Yes. A primary responsibility of our Principal Architects is translating high-level business models, unit economics, and operational workflows into robust technical blueprints, database schemas, and clean user experiences.",
  },
  {
    question: "How fast can a dedicated pod start?",
    answer: "Dedicated pods typically spin up within 5 to 7 business days following scoping sign-off. We maintain benchmarked core engineering capacity across cloud infra, backend microservices, and mobile stacks so you never sit in multi-month agency queues.",
  },
  {
    question: "Can you sign our company's custom enterprise NDA?",
    answer: "Absolutely. While we provide our standard bilateral Mutual NDA for immediate execution, our corporate legal desk routinely reviews and countersigns client-provided enterprise non-disclosure agreements within 24 business hours.",
  },
  {
    question: "What is the minimum engagement size?",
    answer: "Our structured sprint packages begin at $10,000 for technical feasibility audits, security vulnerability remediations, or initial MVP prototypes. Full architecture engineering sprints usually fall within the $25k to $80k range.",
  },
];

export default function ContactUsContent(): JSX.Element {
  const [activeDiscipline, setActiveDiscipline] = useState(0);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [showModal, setShowModal] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowModal(true);
  };

  return (
    <>
      {/* HERO EXECUTIVE HEADER */}
      <section className="relative w-full py-16 lg:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden bg-surface">
        <div className="absolute -top-32 right-1/4 w-96 h-96 bg-primary-fixed/25 rounded-full blur-3xl pointer-events-none -z-10"></div>
        <div className="absolute top-1/2 -left-20 w-80 h-80 bg-tertiary-fixed/30 rounded-full blur-3xl pointer-events-none -z-10"></div>
        <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-surface-container-low text-primary shadow-sm mb-6">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
            <span className="font-label-sm text-label-sm uppercase tracking-wider text-primary font-bold">
              Direct Architect Access • Rapid Response SLA
            </span>
          </div>
          <h1 className="font-display-hero text-display-hero-mobile sm:text-display-hero text-on-surface max-w-4xl tracking-tight mb-6">
            Let&rsquo;s Architect Your Next <span className="text-primary italic">Mission-Critical</span> System
          </h1>
          <p className="font-body-xl text-body-xl text-on-surface-variant max-w-3xl leading-relaxed mb-10">
            Speak directly with a Principal Systems Architect within 24 hours.
            No sales reps, no junior qualification calls—just direct technical
            scoping, clear feasibility analysis, and fixed-cap estimates.
          </p>
          <div className="w-full grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl">
            <div className="p-5 rounded-lg bg-surface-container-lowest shadow-sm flex flex-col items-center text-center">
              <div className="w-9 h-9 rounded-full bg-primary-fixed/30 flex items-center justify-center text-primary mb-2">
                <span className="material-symbols-outlined text-[20px]">timer</span>
              </div>
              <span className="font-headline-md text-headline-md font-bold text-on-surface">
                &lt; 4 Hours
              </span>
              <span className="font-body-sm text-body-sm text-on-surface-variant">
                Response SLA Guarantee
              </span>
            </div>
            <div className="p-5 rounded-lg bg-surface-container-lowest shadow-sm flex flex-col items-center text-center">
              <div className="w-9 h-9 rounded-full bg-tertiary-fixed/50 flex items-center justify-center text-tertiary mb-2">
                <span className="material-symbols-outlined text-[20px]">terminal</span>
              </div>
              <span className="font-headline-md text-headline-md font-bold text-on-surface">
                100% Principal
              </span>
              <span className="font-body-sm text-body-sm text-on-surface-variant">
                No Middlemen or Sales Reps
              </span>
            </div>
            <div className="p-5 rounded-lg bg-surface-container-lowest shadow-sm flex flex-col items-center text-center">
              <div className="w-9 h-9 rounded-full bg-surface-container-high flex items-center justify-center text-on-surface mb-2">
                <span className="material-symbols-outlined text-[20px]">verified_user</span>
              </div>
              <span className="font-headline-md text-headline-md font-bold text-on-surface">
                Day 1 NDA
              </span>
              <span className="font-body-sm text-body-sm text-on-surface-variant">
                Bilateral IP Protection
              </span>
            </div>
            <div className="p-5 rounded-lg bg-surface-container-lowest shadow-sm flex flex-col items-center text-center">
              <div className="w-9 h-9 rounded-full bg-primary-fixed/40 flex items-center justify-center text-primary mb-2">
                <span className="material-symbols-outlined text-[20px]">price_check</span>
              </div>
              <span className="font-headline-md text-headline-md font-bold text-on-surface">
                Zero Creep
              </span>
              <span className="font-body-sm text-body-sm text-on-surface-variant">
                Guaranteed Fixed-Cap Sprints
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* TWO-COLUMN ARCHITECTURE SCOPING & DIRECT CONTACT HUB */}
      <section className="w-full py-12 px-4 sm:px-6 lg:px-8 bg-surface-container-low">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* LEFT COLUMN: Comprehensive Intake Form */}
          <div className="lg:col-span-7 bg-surface-container-lowest rounded-lg p-6 sm:p-10 shadow-md">
            <div className="flex items-center justify-between pb-6 mb-6">
              <div>
                <span className="font-label-sm text-label-sm uppercase font-bold tracking-wider text-primary">
                  Technical Intake
                </span>
                <h2 className="font-headline-lg text-headline-lg text-on-surface mt-1">
                  Architecture Scoping Matrix
                </h2>
              </div>
              <div className="hidden sm:flex items-center gap-1.5 px-3 py-1 bg-surface-container rounded-full text-on-surface-variant font-label-sm text-label-sm">
                <span className="material-symbols-outlined text-[16px] text-primary">lock</span>
                <span>256-Bit SSL Encrypted</span>
              </div>
            </div>

            <form className="space-y-6" id="scoping-form" onSubmit={handleSubmit}>
              {/* Name & Work Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label
                    className="font-label-lg text-label-lg text-on-surface"
                    htmlFor="lead-name"
                  >
                    Full Name *
                  </label>
                  <input
                    className="w-full px-4 py-3 rounded-full bg-surface-container-lowest text-on-surface font-body-md placeholder:text-outline-variant focus:outline-none focus:ring-2 focus:ring-primary shadow-sm"
                    id="lead-name"
                    placeholder="Elena Rostova"
                    required
                    type="text"
                  />
                </div>
                <div className="space-y-1.5">
                  <label
                    className="font-label-lg text-label-lg text-on-surface"
                    htmlFor="lead-email"
                  >
                    Corporate Work Email *
                  </label>
                  <input
                    className="w-full px-4 py-3 rounded-full bg-surface-container-lowest text-on-surface font-body-md placeholder:text-outline-variant focus:outline-none focus:ring-2 focus:ring-primary shadow-sm"
                    id="lead-email"
                    placeholder="elena@enterprise.com"
                    required
                    type="email"
                  />
                </div>
              </div>

              {/* Company & Website */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label
                    className="font-label-lg text-label-lg text-on-surface"
                    htmlFor="company-name"
                  >
                    Company / Organization *
                  </label>
                  <input
                    className="w-full px-4 py-3 rounded-full bg-surface-container-lowest text-on-surface font-body-md placeholder:text-outline-variant focus:outline-none focus:ring-2 focus:ring-primary shadow-sm"
                    id="company-name"
                    placeholder="Nexus Logistics Group"
                    required
                    type="text"
                  />
                </div>
                <div className="space-y-1.5">
                  <label
                    className="font-label-lg text-label-lg text-on-surface"
                    htmlFor="website-url"
                  >
                    Website or GitHub Repository
                  </label>
                  <input
                    className="w-full px-4 py-3 rounded-full bg-surface-container-lowest text-on-surface font-body-md placeholder:text-outline-variant focus:outline-none focus:ring-2 focus:ring-primary shadow-sm"
                    id="website-url"
                    placeholder="https://nexuslogistics.io"
                    type="url"
                  />
                </div>
              </div>

              {/* Target Discipline Selector */}
              <div className="space-y-2">
                <label className="font-label-lg text-label-lg text-on-surface">
                  Target Engineering Discipline *
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-center">
                  {disciplines.map((disc, idx) => (
                    <button
                      key={disc.label}
                      className={`px-3 py-2 rounded-full font-label-sm text-label-sm transition-all ${
                        activeDiscipline === idx
                          ? "bg-primary text-on-primary shadow-sm"
                          : "bg-surface-container text-on-surface-variant hover:bg-surface-container-high"
                      }`}
                      onClick={() => setActiveDiscipline(idx)}
                      type="button"
                    >
                      {disc.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Budget Range & Timeline */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label
                    className="font-label-lg text-label-lg text-on-surface"
                    htmlFor="budget-range"
                  >
                    Expected Budget Band
                  </label>
                  <select
                    className="w-full px-4 py-3 rounded-full bg-surface-container-lowest text-on-surface font-body-md focus:outline-none focus:ring-2 focus:ring-primary shadow-sm cursor-pointer"
                    id="budget-range"
                  >
                    <option value="10-25k">
                      $10,000 – $25,000 (Sprint POC / Prototype)
                    </option>
                    <option selected value="25-50k">
                      $25,000 – $50,000 (Production System MVP)
                    </option>
                    <option value="50-80k">
                      $50,000 – $80,000 (Multi-tier Scale & Infra)
                    </option>
                    <option value="80k+">
                      $80,000+ (Global Enterprise Transformation)
                    </option>
                  </select>
                </div>
                <div className="space-y-1.5">
                  <label
                    className="font-label-lg text-label-lg text-on-surface"
                    htmlFor="timeline"
                  >
                    Target Deployment Velocity
                  </label>
                  <select
                    className="w-full px-4 py-3 rounded-full bg-surface-container-lowest text-on-surface font-body-md focus:outline-none focus:ring-2 focus:ring-primary shadow-sm cursor-pointer"
                    id="timeline"
                  >
                    <option selected value="immediate">
                      Immediate / 2–4 Weeks
                    </option>
                    <option value="1-2months">
                      1–2 Months Preparation
                    </option>
                    <option value="exploratory">
                      Exploratory / Q3-Q4 Budgeting
                    </option>
                  </select>
                </div>
              </div>

              {/* Technical Scope */}
              <div className="space-y-1.5">
                <div className="flex justify-between items-center">
                  <label
                    className="font-label-lg text-label-lg text-on-surface"
                    htmlFor="tech-scope"
                  >
                    Technical Scope &amp; Architecture Directives
                  </label>
                  <span className="font-body-sm text-body-sm text-outline">
                    Be as granular as possible
                  </span>
                </div>
                <textarea
                  className="w-full p-4 rounded-DEFAULT bg-surface-container-lowest text-on-surface font-body-md placeholder:text-outline-variant focus:outline-none focus:ring-2 focus:ring-primary shadow-sm resize-y"
                  id="tech-scope"
                  placeholder="Tell us about your system requirements, target integrations, database volume, latency SLAs, or compliance standards (HIPAA, SOC2, UAE FTA)..."
                  rows={4}
                ></textarea>
              </div>

              {/* Security Checkbox */}
              <div className="p-4 rounded-DEFAULT bg-surface-container-low flex items-start gap-3">
                <input
                  checked
                  className="mt-1 w-4 h-4 rounded text-primary focus:ring-primary focus:ring-offset-0 cursor-pointer"
                  id="mutual-nda"
                  type="checkbox"
                />
                <label
                  className="font-body-sm text-body-sm text-on-surface cursor-pointer leading-relaxed"
                  htmlFor="mutual-nda"
                >
                  <strong className="font-semibold text-primary">
                    Request bilateral Mutual NDA before technical documentation
                    transfer.
                  </strong>
                  Our legal desk will automatically counter-sign and issue an
                  enterprise NDA vault before our whiteboard call.
                </label>
              </div>

              {/* Submit CTA */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
                <button
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-3.5 rounded-full bg-primary text-on-primary font-label-lg text-label-lg shadow-md shadow-primary/20 hover:bg-primary-container active:scale-95 transition-all"
                  type="submit"
                >
                  <span>Submit Technical Scoping Request</span>
                  <span className="material-symbols-outlined text-[20px]">
                    arrow_forward
                  </span>
                </button>
                <div className="flex items-center gap-2 text-on-surface-variant font-body-sm text-body-sm">
                  <span className="material-symbols-outlined text-primary text-[18px]">
                    verified
                  </span>
                  <span>Zero sales spam • 100% Architect Review</span>
                </div>
              </div>
            </form>
          </div>

          {/* RIGHT COLUMN: Direct Contact Hub */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            {/* Executive Lounge Image Card */}
            <div className="relative rounded-lg overflow-hidden shadow-md group">
              <Image
                alt="NexusCraft software engineering executive consulting lounge and reception"
                className="w-full h-64 object-cover object-center group-hover:scale-105 transition-transform duration-500"
                src="/images/contact/executive-lounge.jpg"
                width={512}
                height={286}
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-inverse-surface/90 via-inverse-surface/30 to-transparent flex flex-col justify-end p-6">
                <span className="font-label-sm text-label-sm uppercase font-bold text-primary-fixed tracking-wider">
                  Dubai DIFC Reception Suite
                </span>
                <p className="font-body-sm text-body-sm text-surface-container-low mt-1">
                  Host architecture reviews, sprint demos, and whiteboarding
                  in person or securely via telepresence.
                </p>
              </div>
            </div>

            {/* Direct Architectural Hotline Box */}
            <div className="p-6 rounded-lg bg-surface-container-lowest shadow-sm flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary-fixed/40 flex items-center justify-center text-primary shrink-0">
                  <span className="material-symbols-outlined text-[22px]">
                    headset_mic
                  </span>
                </div>
                <div>
                  <span className="font-label-sm text-label-sm uppercase tracking-wider text-primary font-bold">
                    Priority Triage Hotlines
                  </span>
                  <h3 className="font-headline-sm text-headline-sm text-on-surface font-semibold">
                    Principal Desk Access
                  </h3>
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <a
                  className="p-3 rounded-DEFAULT bg-surface-container-low hover:bg-surface-container transition-colors flex items-center gap-3"
                  href="tel:+18005553920"
                >
                  <span className="material-symbols-outlined text-primary text-[20px]">
                    call
                  </span>
                  <div className="flex flex-col">
                    <span className="font-body-sm text-body-sm text-on-surface-variant font-medium">
                      Americas / Global
                    </span>
                    <span className="font-label-lg text-label-lg font-bold text-on-surface">
                      +1 (800) 555-3920
                    </span>
                  </div>
                </a>
                <a
                  className="p-3 rounded-DEFAULT bg-surface-container-low hover:bg-surface-container transition-colors flex items-center gap-3"
                  href="tel:+97148006398"
                >
                  <span className="material-symbols-outlined text-primary text-[20px]">
                    call
                  </span>
                  <div className="flex flex-col">
                    <span className="font-body-sm text-body-sm text-on-surface-variant font-medium">
                      EMEA / GCC
                    </span>
                    <span className="font-label-lg text-label-lg font-bold text-on-surface">
                      +971 4 800 6398
                    </span>
                  </div>
                </a>
              </div>
              <div className="pt-2 flex flex-col gap-2 font-body-sm text-body-sm">
                <div className="flex items-center justify-between p-2 rounded-DEFAULT bg-surface-container-low">
                  <span className="text-on-surface-variant font-medium">
                    Architecture Inquiries:
                  </span>
                  <a
                    className="font-semibold text-primary hover:underline"
                    href="mailto:arch@nexuscraft.io"
                  >
                    arch@nexuscraft.io
                  </a>
                </div>
                <div className="flex items-center justify-between p-2 rounded-DEFAULT bg-surface-container-low">
                  <span className="text-on-surface-variant font-medium">
                    Security &amp; Compliance:
                  </span>
                  <a
                    className="font-semibold text-primary hover:underline"
                    href="mailto:security@nexuscraft.io"
                  >
                    security@nexuscraft.io
                  </a>
                </div>
              </div>
            </div>

            {/* Global Physical Engineering Hubs */}
            <div className="p-6 rounded-lg bg-surface-container-lowest shadow-sm flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <span className="font-label-sm text-label-sm uppercase font-bold text-primary tracking-wider">
                  Global Engineering Hubs
                </span>
                <span className="px-2.5 py-0.5 rounded-full bg-primary-fixed/30 text-primary font-label-sm text-label-sm font-semibold">
                  24/7 SRE Active
                </span>
              </div>
              <div className="p-3.5 rounded-DEFAULT bg-surface-container-low flex items-start gap-3">
                <span className="material-symbols-outlined text-primary text-[22px] mt-0.5">
                  location_on
                </span>
                <div className="flex flex-col">
                  <div className="flex items-center gap-2">
                    <span className="font-label-lg text-label-lg font-bold text-on-surface">
                      Dubai Headquarters
                    </span>
                    <span className="text-xs px-2 py-0.5 bg-surface-container rounded-full text-on-surface-variant">
                      DIFC
                    </span>
                  </div>
                  <p className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">
                    Office 1402, Level 14, DIFC Innovation Tower, Dubai, UAE
                  </p>
                  <span className="font-body-sm text-body-sm text-outline mt-1 font-mono">
                    +971 4 800 6398 • GST/VAT Registered
                  </span>
                </div>
              </div>
              <div className="p-3.5 rounded-DEFAULT bg-surface-container-low flex items-start gap-3">
                <span className="material-symbols-outlined text-primary text-[22px] mt-0.5">
                  apartment
                </span>
                <div className="flex flex-col">
                  <div className="flex items-center gap-2">
                    <span className="font-label-lg text-label-lg font-bold text-on-surface">
                      London Tech Hub
                    </span>
                    <span className="text-xs px-2 py-0.5 bg-surface-container rounded-full text-on-surface-variant">
                      Canary Wharf
                    </span>
                  </div>
                  <p className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">
                    25 Bank Street, Canary Wharf, London E14 5JP, UK
                  </p>
                  <span className="font-body-sm text-body-sm text-outline mt-1 font-mono">
                    +44 20 7946 0912
                  </span>
                </div>
              </div>
              <div className="p-3.5 rounded-DEFAULT bg-surface-container-low flex items-start gap-3">
                <span className="material-symbols-outlined text-primary text-[22px] mt-0.5">
                  domain
                </span>
                <div className="flex flex-col">
                  <div className="flex items-center gap-2">
                    <span className="font-label-lg text-label-lg font-bold text-on-surface">
                      San Francisco Scoping Suite
                    </span>
                    <span className="text-xs px-2 py-0.5 bg-surface-container rounded-full text-on-surface-variant">
                      SoMa
                    </span>
                  </div>
                  <p className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">
                    500 Howard Street, Suite 400, San Francisco, CA 94105, USA
                  </p>
                  <span className="font-body-sm text-body-sm text-outline mt-1 font-mono">
                    +1 (800) 555-3920
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3-STEP PREDICTABLE SCOPING PROCESS */}
      <section className="w-full py-16 px-4 sm:px-6 lg:px-8 bg-surface">
        <div className="max-w-7xl mx-auto flex flex-col items-center">
          <div className="text-center max-w-2xl mb-12">
            <span className="font-label-sm text-label-sm uppercase font-bold tracking-wider text-primary">
              Transparent Roadmapping
            </span>
            <h2 className="font-headline-xl text-headline-xl-mobile sm:text-headline-xl text-on-surface mt-2">
              What Happens Next?
            </h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant mt-3">
              From initial intake to complete sprint-ready architecture in
              less than 72 hours.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
            {steps.map((step) => (
              <div
                key={step.num}
                className="p-8 rounded-lg bg-surface-container-lowest shadow-sm flex flex-col relative group hover:-translate-y-1 transition-transform"
              >
                <div className="flex items-center justify-between mb-6">
                  <span
                    className={`w-12 h-12 rounded-full ${step.icon2 === "draw" ? "bg-tertiary" : step.icon2 === "task_alt" && step.num === "03" ? "bg-primary-container" : "bg-primary"} text-on-primary font-headline-sm text-headline-sm font-bold flex items-center justify-center shadow-md ${step.icon2 === "draw" ? "shadow-tertiary/20" : step.icon2 === "task_alt" && step.num === "03" ? "shadow-primary/20" : "shadow-primary/20"}`}
                  >
                    {step.num}
                  </span>
                  <span
                    className={`px-3 py-1 rounded-full bg-surface-container-low font-label-sm text-label-sm font-semibold ${
                      step.icon2 === "draw"
                        ? "text-tertiary"
                        : step.icon2 === "task_alt" && step.num === "03"
                        ? "text-on-primary"
                        : "text-primary"
                    }`}
                  >
                    {step.badge}
                  </span>
                </div>
                <h3 className="font-headline-md text-headline-md text-on-surface font-semibold mb-3">
                  {step.title}
                </h3>
                <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed mb-6">
                  {step.desc}
                </p>
                <div className="mt-auto pt-4 border-t border-surface-container flex items-center gap-2 text-on-surface-variant font-body-sm text-body-sm">
                  <span className="material-symbols-outlined text-primary text-[18px]">
                    {step.icon2}
                  </span>
                  <span>{step.note}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CLIENT ENGAGEMENT GUARANTEES */}
      <section className="w-full py-16 px-4 sm:px-6 lg:px-8 bg-surface-container-low">
        <div className="max-w-7xl mx-auto flex flex-col">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
            <div>
              <span className="font-label-sm text-label-sm uppercase font-bold tracking-wider text-primary">
                Uncompromising Reliability
              </span>
              <h2 className="font-headline-xl text-headline-xl-mobile sm:text-headline-xl text-on-surface mt-1">
                Our Scoping &amp; Contract Guarantees
              </h2>
            </div>
            <p className="font-body-md text-body-md text-on-surface-variant max-w-md">
              NexusCraft is structured to eliminate consulting ambiguity through
              contractual accountability.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {guarantees.map((g) => (
              <div
                key={g.title}
                className="p-6 rounded-lg bg-surface-container-lowest shadow-sm flex flex-col"
              >
                <div className="w-10 h-10 rounded-full bg-primary-fixed/40 flex items-center justify-center text-primary mb-4">
                  <span className="material-symbols-outlined text-[22px]">
                    {g.icon}
                  </span>
                </div>
                <h3 className="font-headline-sm text-headline-sm text-on-surface font-semibold mb-2">
                  {g.title}
                </h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                  {g.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INTERACTIVE SCOPING FAQS */}
      <section className="w-full py-16 px-4 sm:px-6 lg:px-8 bg-surface">
        <div className="max-w-4xl mx-auto flex flex-col">
          <div className="text-center mb-10">
            <span className="font-label-sm text-label-sm uppercase font-bold tracking-wider text-primary">
              Direct Answers
            </span>
            <h2 className="font-headline-xl text-headline-xl-mobile sm:text-headline-xl text-on-surface mt-2">
              Frequently Asked Architecture Questions
            </h2>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div
                key={faq.question}
                className="p-6 rounded-lg bg-surface-container-lowest shadow-sm"
              >
                <button
                  className="w-full flex items-center justify-between text-left"
                  onClick={() =>
                    setOpenFaq(openFaq === idx ? null : idx)
                  }
                  type="button"
                >
                  <h3 className="font-headline-sm text-headline-sm text-on-surface font-semibold">
                    {faq.question}
                  </h3>
                  <span
                    className={`material-symbols-outlined text-primary transition-transform`}
                  >
                    expand_more
                  </span>
                </button>
                {openFaq === idx && (
                  <p className="mt-3 font-body-md text-body-md text-on-surface-variant leading-relaxed">
                    {faq.answer}
                  </p>
                )}
              </div>
            ))}
          </div>

          {/* Emergency Escalation Strip */}
          <div className="mt-12 p-6 rounded-lg bg-surface-container-low flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-error-container text-on-error-container flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-[20px]">
                  crisis_alert
                </span>
              </div>
              <div>
                <span className="font-label-lg text-label-lg font-bold text-on-surface">
                  Experiencing an active infrastructure outage?
                </span>
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  Our Site Reliability Engineering team handles urgent
                  bare-metal and cloud failovers.
                </p>
              </div>
            </div>
            <a
              className="shrink-0 px-5 py-2.5 rounded-full bg-inverse-surface text-inverse-on-surface font-label-lg text-label-lg hover:bg-surface-tint hover:text-on-primary transition-colors flex items-center gap-2"
              href="tel:+18005553920"
            >
              <span className="material-symbols-outlined text-[18px]">
                phone_in_talk
              </span>
              <span>Emergency SRE Desk</span>
            </a>
          </div>
        </div>
      </section>

      {/* Success Confirmation Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-inverse-surface/60 backdrop-blur-sm p-4">
          <div className="w-full max-w-lg bg-surface-container-lowest rounded-lg p-8 shadow-xl flex flex-col items-center text-center">
            <div className="w-16 h-16 rounded-full bg-primary-fixed/40 flex items-center justify-center text-primary mb-4">
              <span className="material-symbols-outlined text-[36px]">
                verified
              </span>
            </div>
            <span className="font-label-sm text-label-sm uppercase font-bold tracking-wider text-primary">
              Request Triaged
            </span>
            <h3 className="font-headline-lg text-headline-lg text-on-surface font-bold mt-1 mb-2">
              Technical Dossier Received
            </h3>
            <p className="font-body-md text-body-md text-on-surface-variant mb-6 leading-relaxed">
              Your architecture scoping request has been routed directly to our
              Lead Infrastructure Architect. A counter-signed Mutual NDA and
              whiteboard link will arrive in your work inbox within 4 hours.
            </p>
            <button
              className="w-full py-3 rounded-full bg-primary text-on-primary font-label-lg text-label-lg shadow-md hover:bg-primary-container transition-all"
              onClick={() => setShowModal(false)}
              type="button"
            >
              Return to NexusCraft Portal
            </button>
          </div>
        </div>
      )}
    </>
  );
}
