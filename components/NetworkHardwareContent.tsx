"use client";

import type { JSX } from "react";
import { useState } from "react";
import Image from "next/image";

export default function NetworkHardwareContent(): JSX.Element {
  const [totalPrice, setTotalPrice] = useState(14800);
  const [timeline, setTimeline] = useState("7–10 Business Days");
  const [env, setEnv] = useState("commercial");
  const [lab, setLab] = useState("standard");
  const [drops, setDrops] = useState(24);
  const [aps, setAps] = useState(4);

  const calculate = () => {
    let baseRate = 3500;
    let dropRate = 180;
    let apRate = 750;
    let labRate = lab === "priority" ? 3500 : 0;

    if (env === "residential") {
      baseRate = 4200;
      dropRate = 210;
      apRate = 850;
    } else if (env === "lab") {
      baseRate = 2500;
      dropRate = 80;
      apRate = 300;
    }

    const total = baseRate + drops * dropRate + aps * apRate + labRate;
    setTotalPrice(total);

    let days = "3-5 Business Days";
    if (drops > 48 || aps > 8) {
      days = "2-3 Weeks";
    } else if (drops > 16 || aps > 3) {
      days = "7-10 Business Days";
    }
    setTimeline(days);
  };

  return (
    <>
      <main className="w-full pt-20 bg-surface min-h-[calc(100vh-80px)]">
        <div className="flex flex-col w-full">
          {/* BREADCRUMBS */}
          <div className="max-w-7xl mx-auto px-gutter w-full pt-space-lg pb-space-xs">
            <nav className="flex items-center gap-space-xs font-body-sm text-body-sm text-on-surface-variant mb-space-sm">
              <a className="hover:text-primary transition-colors" href="/work">
                Capabilities
              </a>
              <span className="text-outline-variant">/</span>
              <a className="text-on-surface font-semibold" href="/network-hardware">
                Infrastructure &amp; Hardware Lab
              </a>
              <span className="text-outline-variant">/</span>
              <span className="text-primary font-medium">
                Fixed Sprint Scoping ($5k–$35k)
              </span>
            </nav>
          </div>

          {/* HERO */}
          <section className="max-w-7xl mx-auto px-gutter w-full pb-space-xl">
            <div className="flex flex-col gap-space-md">
              <div className="inline-flex items-center gap-space-xs bg-surface-container-high text-on-surface px-space-md py-1.5 rounded-full w-fit shadow-sm">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                <span className="font-label-sm text-label-sm tracking-wider uppercase text-on-surface font-bold">
                  CERTIFIED ENTERPRISE &amp; RESIDENTIAL INFRASTRUCTURE • CISCO &amp;
                  UBIQUITI CERTIFIED ENGINEERS • RAPID ONSITE DISPATCH
                </span>
              </div>
              <div className="max-w-5xl">
                <h1 className="font-display-hero text-display-hero text-on-surface tracking-tight leading-[1.08] mb-space-md">
                  Mission-Critical Office &amp; Home Networks, Structured Cabling
                  &amp; Hardware Repair.
                  <span className="text-primary italic font-headline-xl">
                    Engineered for Zero Downtime.
                  </span>
                </h1>
                <p className="font-body-xl text-body-xl text-on-surface-variant max-w-4xl leading-relaxed">
                  From high-density corporate Wi-Fi 7 and Cat6a/Fiber structured
                  cabling to smart executive home networks and dedicated
                  component-level hardware repair lab services. Fixed-price
                  transparent scoping, zero hourly bloat, and enterprise SLA
                  reliability.
                </p>
              </div>
              <div className="flex flex-wrap items-center gap-space-md pt-space-xs">
                <a
                  className="inline-flex items-center justify-center font-label-lg text-label-lg bg-primary hover:bg-primary-container text-on-primary rounded-full px-space-lg py-space-sm shadow-[0_4px_14px_rgba(5,150,105,0.25)] transition-all hover:translate-y-[-1px]"
                  href="#pricing-tiers"
                >
                  Explore Network &amp; Hardware Tiers ($5k–$35k)
                </a>
                <a
                  className="inline-flex items-center justify-center font-label-lg text-label-lg bg-surface-container-lowest text-on-surface rounded-full px-space-lg py-space-sm shadow-sm hover:bg-surface-container transition-all"
                  href="#site-survey"
                >
                  <span className="material-symbols-outlined text-primary text-[18px] mr-1.5">
                    calendar_month
                  </span>
                  Schedule Onsite Site Survey
                </a>
                <div className="hidden sm:flex items-center gap-space-xs text-on-surface-variant font-body-sm text-body-sm pl-space-xs">
                  <span className="material-symbols-outlined text-primary text-[18px]">
                    verified_user
                  </span>
                  <span>100% Passed Fluke Certification Guaranteed</span>
                </div>
              </div>

              {/* Trust Badges */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-space-sm pt-space-md">
                {[
                  {
                    icon: "speed",
                    title: "10 Gbps Backbone",
                    desc: "Certified OM4/Cat6a",
                  },
                  {
                    icon: "task_alt",
                    title: "Fluke Networks",
                    desc: "DSX-8000 Cable Cert",
                  },
                  {
                    icon: "security",
                    title: "24/7 SLA Monitored",
                    desc: "High-Availability Failover",
                  },
                  {
                    icon: "precision_manufacturing",
                    title: "Class-100 ESD Lab",
                    desc: "Micro-Soldering Workbench",
                  },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="bg-surface-container-low rounded-lg p-space-sm flex items-center gap-space-xs shadow-sm"
                  >
                    <span className="material-symbols-outlined text-primary text-[20px]">
                      {item.icon}
                    </span>
                    <div>
                      <div className="font-label-sm text-label-sm font-bold uppercase tracking-wider text-on-surface">
                        {item.title}
                      </div>
                      <div className="font-body-sm text-body-sm text-on-surface-variant">
                        {item.desc}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Hero Visual */}
              <div className="relative rounded-xl overflow-hidden shadow-xl mt-space-sm bg-surface-container-lowest">
                <Image
                  alt="NexusCraft Structured Cabling Rack and Hardware Diagnostic Micro-Soldering Bench Facility"
                  className="w-full h-[480px] lg:h-[580px] object-cover"
                  src="/images/network-hardware/hero-rack.jpg"
                  width={1440}
                  height={580}
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-inverse-surface/80 via-transparent to-black/20 pointer-events-none"></div>

                {/* Floating Telemetry */}
                <div className="absolute top-4 left-4 sm:top-6 sm:left-6 flex flex-col gap-2 max-w-sm">
                  <div className="bg-surface-container-lowest/90 backdrop-blur-md rounded-full px-4 py-2 flex items-center gap-2 shadow-md">
                    <span className="w-2.5 h-2.5 rounded-full bg-primary animate-ping"></span>
                    <span className="font-label-sm text-label-sm text-on-surface font-bold">
                      Core Switch: 10 Gbps SFP+ Uplink Active
                    </span>
                  </div>
                  <div className="bg-surface-container-lowest/90 backdrop-blur-md rounded-full px-4 py-2 flex items-center gap-2 shadow-md">
                    <span className="material-symbols-outlined text-tertiary text-[16px]">
                      biotech
                    </span>
                    <span className="font-label-sm text-label-sm text-on-surface font-semibold">
                      Hardware Diagnostics Bench • Micro-Soldering Active
                    </span>
                  </div>
                </div>
                <div className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 flex flex-col items-end gap-2 max-w-sm">
                  <div className="bg-surface-container-lowest/95 backdrop-blur-md rounded-full px-4 py-2 flex items-center gap-2 shadow-md">
                    <span className="material-symbols-outlined text-primary text-[18px]">
                      verified
                    </span>
                    <span className="font-label-sm text-label-sm text-on-surface font-bold">
                      Fluke DSX-8000: 100% Passed (Cat6a ISO/TIA)
                    </span>
                  </div>
                  <div className="bg-inverse-surface/90 text-inverse-on-surface backdrop-blur-md rounded-full px-4 py-2 flex items-center gap-2 shadow-md">
                    <span className="material-symbols-outlined text-primary-fixed-dim text-[16px]">
                      network_check
                    </span>
                    <span className="font-body-sm text-body-sm font-semibold">
                      Zero Packet Loss • 0.8ms Core Latency
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* CAPABILITIES BENTO */}
          <section className="w-full bg-surface-container-low py-space-xl">
            <div className="max-w-7xl mx-auto px-gutter flex flex-col gap-space-lg">
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-md">
                <div>
                  <span className="font-label-sm text-label-sm text-primary uppercase font-bold tracking-widest">
                    Sprint Execution Modules
                  </span>
                  <h2 className="font-headline-xl text-headline-xl text-on-surface mt-1">
                    Four High-Conviction Engineering Disciplines
                  </h2>
                </div>
                <p className="font-body-lg text-body-lg text-on-surface-variant max-w-md">
                  Structured scopes packaged into transparent, milestone-guaranteed
                  deliverables with all physical and digital architectural blueprints
                  handed over.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-space-lg">
                {[
                  {
                    num: "01",
                    price: "$8,000 – $28,000 • 1–2 WEEKS",
                    title: "Office &amp; Commercial Structured Cabling &amp; Rack Architecture",
                    desc: "High-throughput Cat6a, shielded Cat7, and single/multi-mode fiber optics installation. Bespoke 42U rack cable dressing, Velcro comb lacing, enterprise UPS battery bank integration, and fully documented patch schematics.",
                    features: [
                      "Certified Fluke DSX-8000 channel & permanent link test reports",
                      "Zero-sag cable ladder trays and server rack airflow baffles",
                      "Dual-line redundant Smart UPS with automatic generator cutover",
                    ],
                    tech: "Tech: Corning Fiber, Panduit, APC, Tripp Lite",
                  },
                  {
                    num: "02",
                    price: "$5,000 – $18,000 • 1 WEEK",
                    title: "Enterprise Wi-Fi 6E/7 &amp; High-Density Mesh Deployment",
                    desc: "Ekahau 3D predictive simulation and live spectrum site analysis. Elimination of client roaming drops across multi-story buildings, granular VLAN segmentation, and enterprise 802.1X WPA3 network segregation.",
                    features: [
                      "Sub-5ms fast BSS roaming transitions (802.11r/k/v)",
                      "IoT, Executive, Staff, and Guest captive portal segregation",
                      "High-density 2.5G/10G PoE++ switch port backhaul",
                    ],
                    tech: "Tech: UniFi Enterprise, Cisco Meraki, Aruba CX",
                  },
                  {
                    num: "03",
                    price: "$6,000 – $22,000 • 1–2 WEEKS",
                    title: "Executive &amp; Smart Luxury Home Network Infrastructure",
                    desc: "Aesthetic, discrete in-wall Cat6a cabling for architectural residences and luxury estates. Complete whole-property coverage including pool cabanas, guest homes, and dedicated low-latency pipelines for AV streaming.",
                    features: [
                      "Zero-dead-zone whole-estate roaming across concrete/stone walls",
                      "Home Assistant, Control4, Crestron &amp; Lutron system containment",
                      "4K HDR video streaming QoS prioritization and hardware firewall",
                    ],
                    tech: "Tech: Ubiquiti UniFi, Lutron RadioRA3, Control4 Core",
                  },
                  {
                    num: "04",
                    price: "$3,000 – $15,000 • 24–72 HR TURNAROUND",
                    title: "Dedicated Hardware Diagnostics, Repair &amp; Recovery Facility",
                    desc: "In-house ESD-safe physical lab for component-level diagnosis, micro-soldering, server motherboard capacitor replacement, switch power supply repairs, and enterprise solid-state recovery.",
                    features: [
                      "FLIR thermal imaging fault detection & oscilloscope telemetry",
                      "Micro-soldering BGA rework, trace repairs &amp; SMD component swap",
                      "24-hour burn-in load testing prior to certified release",
                    ],
                    tech: "Tech: Hakko Micro-Soldering, Rigol Oscilloscopes, Fluke",
                  },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="bg-surface-container-lowest rounded-lg p-space-lg shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between gap-space-sm mb-space-sm">
                        <span className="font-headline-md text-headline-md text-primary font-bold">
                          {item.num}
                        </span>
                        <span className="bg-primary-container text-on-primary-container font-label-sm text-label-sm px-3 py-1 rounded-full">
                          {item.price}
                        </span>
                      </div>
                      <h3 className="font-headline-md text-headline-md text-on-surface mb-2">
                        {item.title}
                      </h3>
                      <p className="font-body-md text-body-md text-on-surface-variant mb-space-md">
                        {item.desc}
                      </p>
                      <ul className="flex flex-col gap-2 font-body-md text-body-md text-on-surface mb-space-md">
                        {item.features.map((f, i) => (
                          <li key={i} className="flex items-center gap-2">
                            <span className="w-5 h-5 rounded-full bg-primary flex items-center justify-center text-on-primary text-[12px]">
                              ✓
                            </span>
                            {f}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="pt-space-sm flex items-center justify-between text-on-surface-variant font-body-sm text-body-sm">
                      <span>{item.tech}</span>
                      <a className="text-primary font-semibold hover:underline" href="#estimator">
                        Calculate Sprint →
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* HARDWARE DIAGNOSTIC LAB */}
          <section className="max-w-7xl mx-auto px-gutter w-full py-space-xl">
            <div className="flex flex-col gap-space-lg">
              <div>
                <span className="font-label-sm text-label-sm text-primary uppercase font-bold tracking-widest">
                  In-House Engineering Workbench
                </span>
                <h2 className="font-headline-xl text-headline-xl text-on-surface mt-1">
                  4-Stage Precision Hardware Repair &amp; Recovery Workflow
                </h2>
                <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mt-1">
                  When mission-critical hardware fails, replacing long-lead industrial
                  switches and servers causes crippling enterprise delays. Our
                  diagnostic bench solves faults at the board level.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-space-md">
                {[
                  {
                    num: "1",
                    title: "Rapid Intake &amp; ESD Physical Assessment",
                    desc: "Apparatus logged into Class-100 anti-static clean zone. Visual stereomicroscope scan for physical damage, liquid exposure, trace burnouts, and connector oxidation.",
                    time: "BENCH TIME: 0-4 HOURS",
                  },
                  {
                    num: "2",
                    title: "Thermal Imaging &amp; Circuit Telemetry",
                    desc: "FLIR calibrated thermal mapping under current injection to isolate shorted capacitors and MOSFETs. Digital multimeter and digital oscilloscope clock-line verification.",
                    time: "BENCH TIME: 4-12 HOURS",
                  },
                  {
                    num: "3",
                    title: "Precision Micro-Soldering &amp; OEM Swap",
                    desc: "Direct component replacement using precision micro-soldering irons and infrared reflow stations. Board ultrasonic bath cleaning to remove flux and contaminants.",
                    time: "BENCH TIME: 12-24 HOURS",
                  },
                  {
                    num: "4",
                    title: "24-Hr Burn-In &amp; Fluke Certification",
                    desc: "Full load environmental stress testing on test rack. Network throughput packet-loss telemetry verification and digital certification signoff before redeployment.",
                    time: "BENCH TIME: 24-48 HOURS",
                  },
                ].map((stage, i) => (
                  <div
                    key={i}
                    className="bg-surface-container rounded-lg p-space-md flex flex-col justify-between shadow-sm"
                  >
                    <div>
                      <div className="w-10 h-10 rounded-full bg-primary text-on-primary flex items-center justify-center font-headline-sm text-headline-sm mb-space-sm font-bold">
                        {stage.num}
                      </div>
                      <h4 className="font-headline-sm text-headline-sm text-on-surface mb-2">
                        {stage.title}
                      </h4>
                      <p className="font-body-md text-body-md text-on-surface-variant">
                        {stage.desc}
                      </p>
                    </div>
                    <div className="pt-space-sm font-label-sm text-label-sm text-primary font-bold">
                      {stage.time}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* COMPARISON SPEC MATRIX */}
          <section className="w-full bg-surface-container-low py-space-xl">
            <div className="max-w-7xl mx-auto px-gutter flex flex-col gap-space-lg">
              <div>
                <span className="font-label-sm text-label-sm text-primary uppercase font-bold tracking-widest">
                  Engineering Standard vs Industry Norms
                </span>
                <h2 className="font-headline-xl text-headline-xl text-on-surface mt-1">
                  Infrastructure Specification Matrix
                </h2>
                <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mt-1">
                  Why leading enterprises, financial institutions, and executive estates
                  migrate from erratic hourly contractors to NexusCraft&apos;s sprint
                  engineering.
                </p>
              </div>

              <div className="overflow-x-auto bg-surface-container-lowest rounded-lg shadow-sm">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-surface-container text-on-surface">
                      <th className="p-space-md font-label-lg text-label-lg">
                        Specification Dimension
                      </th>
                      <th className="p-space-md font-label-lg text-label-lg text-on-surface-variant">
                        Standard Handyman / Electrician
                      </th>
                      <th className="p-space-md font-label-lg text-label-lg text-on-surface-variant">
                        Typical IT MSP (Hourly)
                      </th>
                      <th className="p-space-md font-label-lg text-label-lg bg-primary text-on-primary rounded-t-lg">
                        NexusCraft Certified Sprint
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-surface-container font-body-md text-body-md">
                    {[
                      {
                        dim: "Cabling &amp; Testing Standard",
                        a: "Cheap Cat5e/Cat6, simple LED continuity test",
                        b: "Cat6, random spot tests, uncertified",
                        c: "Cat6a/Cat7/Fiber with 100% Fluke DSX-8000 report handed over",
                      },
                      {
                        dim: "Rack Dressing &amp; Thermal Flow",
                        a: "Tangled zip ties, blocked exhaust paths",
                        b: "Standard plastic organizers, basic routing",
                        c: "Velcro comb-dressed, zero-sag laced, certified CFM airflow design",
                      },
                      {
                        dim: "Wi-Fi Optimization",
                        a: "Consumer mesh plugs, default channel overlap",
                        b: "Basic AP placement, standard auto-channeling",
                        c: "Ekahau 3D RF heatmap, fast BSS roaming &lt;5ms, zero RF dead zones",
                      },
                      {
                        dim: "Hardware Repair Capabilities",
                        a: "None (discard and buy new)",
                        b: "RMA return, 4-8 weeks client downtime",
                        c: "In-house Class-100 ESD bench, component micro-soldering, 24-72h turnaround",
                      },
                      {
                        dim: "Pricing &amp; Account Risk",
                        a: "Low upfront, high risk of network re-pulls",
                        b: "Hourly billable creep ($150-$250/hr), open-ended",
                        c: "100% Fixed-Price Packages ($5k-$35k), guaranteed milestone acceptance",
                      },
                    ].map((row, i) => (
                      <tr key={i}>
                        <td className="p-space-md font-semibold text-on-surface">
                          {row.dim}
                        </td>
                        <td className="p-space-md text-on-surface-variant">{row.a}</td>
                        <td className="p-space-md text-on-surface-variant">{row.b}</td>
                        <td className="p-space-md bg-surface-container-high/40 font-semibold text-primary">
                          {row.c}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          {/* THREE VERIFIED CASE STUDIES */}
          <section className="max-w-7xl mx-auto px-gutter w-full py-space-xl">
            <div className="flex flex-col gap-space-lg">
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-md">
                <div>
                  <span className="font-label-sm text-label-sm text-primary uppercase font-bold tracking-widest">
                    Field Deployments
                  </span>
                  <h2 className="font-headline-xl text-headline-xl text-on-surface mt-1">
                    Verified Installations &amp; Lab Recoveries
                  </h2>
                </div>
                <a
                  className="font-label-lg text-label-lg text-primary hover:underline flex items-center gap-1"
                  href="/work"
                >
                  Explore All 40+ Deployments{" "}
                  <span className="material-symbols-outlined text-[16px]">
                    arrow_forward
                  </span>
                </a>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-space-md">
                {[
                  {
                    tag: "FINTECH TRADING FLOOR",
                    price: "$22,000 • 8 DAYS",
                    title: "Dubai DIFC: 65 Workstations Zero-Downtime Weekend Cutover",
                    desc: "Complete overhaul of rat-nest cabling into dual 42U racks, 10G dual-WAN fiber failover with sub-millisecond route convergence, and Fluke DSX-8000 certification for 130 Cat6a runs.",
                    result: "0.6ms internal latency, zero packets dropped during Monday open market trades.",
                  },
                  {
                    tag: "LUXURY RESIDENCE",
                    price: "$16,500 • 10 DAYS",
                    title: "12,000 sq ft Luxury Villa &amp; Executive Compound",
                    desc: "Trench-laid armored fiber link between primary estate and detached office pavilion. Deployed 8x discrete Wi-Fi 7 access points, 16x 4K PoE surveillance cameras, and discrete Crestron VLAN isolation.",
                    result: "1.8 Gbps real-world wireless throughput across 3 acres with zero roaming interruption.",
                  },
                  {
                    tag: "HARDWARE LAB RECOVERY",
                    price: "$7,800 • 48 HOURS",
                    title: "Critical Logistics Hub Core Switch Component Repair",
                    desc: "Obsolete but mission-critical 48-port industrial fiber switch suffered catastrophic power surge. Our ESD lab diagnosed burned MOSFETs and replaced SMD power rails with micro-soldering.",
                    result: "Avoided $45,000 architectural rip-and-replace, fully redeployed and certified in 48 hours.",
                  },
                ].map((cs, i) => (
                  <div
                    key={i}
                    className="bg-surface-container rounded-lg p-space-md flex flex-col justify-between shadow-sm"
                  >
                    <div>
                      <div className="flex items-center justify-between text-on-surface-variant font-body-sm text-body-sm mb-space-xs">
                        <span>{cs.tag}</span>
                        <span className="font-bold text-primary">{cs.price}</span>
                      </div>
                      <h4 className="font-headline-sm text-headline-sm text-on-surface mb-2">
                        {cs.title}
                      </h4>
                      <p className="font-body-md text-body-md text-on-surface-variant mb-space-sm">
                        {cs.desc}
                      </p>
                    </div>
                    <div className="bg-surface-container-lowest rounded p-space-xs text-on-surface font-body-sm text-body-sm">
                      <span className="font-bold text-primary">Result:</span> {cs.result}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* PRICING TIERS */}
          <section
            className="w-full bg-surface-container-low py-space-xl"
            id="pricing-tiers"
          >
            <div className="max-w-7xl mx-auto px-gutter flex flex-col gap-space-lg">
              <div className="text-center max-w-2xl mx-auto">
                <span className="font-label-sm text-label-sm text-primary uppercase font-bold tracking-widest">
                  Guaranteed Milestone Delivery
                </span>
                <h2 className="font-headline-xl text-headline-xl text-on-surface mt-1">
                  Transparent Fixed Sprint Pricing
                </h2>
                <p className="font-body-lg text-body-lg text-on-surface-variant mt-2">
                  No open-ended consulting hours or unexpected scope creep. Choose
                  your infrastructure footprint with predictable, guaranteed delivery
                  timelines.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-space-lg items-stretch">
                {[
                  {
                    badge: "3–5 Days",
                    tier: "Tier 01",
                    title: "Executive Home &amp; Small Office",
                    price: "$5,000 – $9,500",
                    desc: "Ideal for executive home offices, boutique agencies, and clinics up to 3,500 sq ft.",
                    features: [
                      "Up to 16 Cat6a structured drops",
                      "3x Enterprise Wi-Fi 7 Access Points",
                      "UniFi Cloud Gateway &amp; 16-Port PoE Switch",
                      "Basic wall-mount 9U rack enclosure",
                      "Fluke cable certification report",
                    ],
                    team: "Team: 1 Network Eng + 1 Cabling Tech",
                    cta: "Scope Tier 01",
                    highlight: false,
                  },
                  {
                    badge: "1–2 Weeks",
                    tier: "Tier 02",
                    title: "High-Density Commercial Office",
                    price: "$12,000 – $24,000",
                    desc: "Full structured cabling and hardware build for growth tech companies up to 15,000 sq ft.",
                    features: [
                      "Up to 64 Cat6a drops &amp; server room backbone",
                      "6x High-Density Wi-Fi 7 with Ekahau Heatmap",
                      "Dual 48-Port PoE+ switches &amp; 10G SFP+ uplinks",
                      "Dual-WAN failover firewall &amp; corporate/guest VLANs",
                      "Full 24U/42U rack Velcro dressing + 1-Yr hardware warranty",
                    ],
                    team: "Team: 1 Lead Network Architect + 2 Cabling Engs",
                    cta: "Reserve Commercial Sprint",
                    highlight: true,
                  },
                  {
                    badge: "2–3 Weeks",
                    tier: "Tier 03",
                    title: "Enterprise Campus &amp; Lab SLA",
                    price: "$26,000 – $35,000+",
                    desc: "Multi-floor commercial facilities, trading desks, and mission-critical 24/7 operations.",
                    features: [
                      "Multi-floor OM4 Fiber backbone &amp; 96+ Cat6a drops",
                      "Redundant HA firewalls with zero-packet-loss failover",
                      "Dual 42U rack architecture with Smart PDU power metering",
                      "24/7 Priority hardware diagnostic &amp; emergency repair bench SLA",
                      "Immediate swap-in cold spare staging in our lab",
                    ],
                    team: "Team: Principal Systems Architect + 3 Lab Specialists",
                    cta: "Request Enterprise SLA",
                    highlight: false,
                  },
                ].map((tier, i) => (
                  <div
                    key={i}
                    className={`bg-surface-container-lowest rounded-lg p-space-lg shadow-sm flex flex-col justify-between relative ${
                      tier.highlight ? "transform lg:-translate-y-2 shadow-xl" : ""
                    }`}
                  >
                    {tier.highlight && (
                      <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-primary text-on-primary font-label-sm text-label-sm px-4 py-1 rounded-full shadow-md font-bold tracking-wider uppercase">
                        MOST POPULAR COMMERCIAL SPRINT
                      </div>
                    )}
                    <div>
                      <div className="flex items-center justify-between gap-space-sm mb-space-xs mt-1">
                        <span
                          className={`font-label-sm text-label-sm font-bold uppercase tracking-wider ${tier.highlight ? "text-primary" : "text-secondary"}`}
                        >
                          {tier.tier}
                        </span>
                        <span className="bg-surface-container text-on-surface font-label-sm text-label-sm px-2.5 py-0.5 rounded-full font-semibold">
                          {tier.badge}
                        </span>
                      </div>
                      <h3 className="font-headline-md text-headline-md text-on-surface">
                        {tier.title}
                      </h3>
                      <p className="font-body-sm text-body-sm text-on-surface-variant mt-1 mb-space-md">
                        {tier.desc}
                      </p>
                      <div className="mb-space-md">
                        <span className="font-display-hero text-headline-lg text-on-surface font-extrabold">
                          {tier.price}
                        </span>
                      </div>
                      <ul className="flex flex-col gap-2 font-body-md text-body-md text-on-surface mb-space-md">
                        {tier.features.map((feat, j) => (
                          <li key={j} className="flex items-center gap-2">
                            <span className="w-4 h-4 rounded-full bg-primary flex items-center justify-center text-on-primary text-[10px]">
                              ✓
                            </span>
                            {feat}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="pt-space-md flex flex-col gap-space-xs">
                      <span className="font-body-sm text-body-sm text-on-surface-variant">
                        {tier.team}
                      </span>
                      <a
                        className={`inline-flex items-center justify-center font-label-lg text-label-lg rounded-full py-space-sm transition-colors text-center w-full ${
                          tier.highlight
                            ? "bg-primary hover:bg-primary-container text-on-primary shadow-[0_4px_14px_rgba(5,150,105,0.3)]"
                            : "bg-surface-container-highest hover:bg-surface-container-high text-on-surface"
                        }`}
                        href="#site-survey"
                      >
                        {tier.cta}
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* BUDGET CALCULATOR */}
          <section className="max-w-7xl mx-auto px-gutter w-full py-space-xl" id="estimator">
            <div className="bg-surface-container rounded-xl p-space-lg shadow-md">
              <div className="flex flex-col lg:flex-row gap-space-xl">
                <div className="lg:w-7/12 flex flex-col gap-space-md">
                  <div>
                    <span className="font-label-sm text-label-sm text-primary uppercase font-bold tracking-widest">
                      Sprint Configurator
                    </span>
                    <h2 className="font-headline-lg text-headline-lg text-on-surface mt-1">
                      Interactive Network &amp; Repair Budget Estimator
                    </h2>
                    <p className="font-body-md text-body-md text-on-surface-variant mt-1">
                      Select your property parameters and hardware requirements to
                      obtain an instant scoping projection.
                    </p>
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="font-label-lg text-label-lg text-on-surface">
                      1. Deployment Environment
                    </label>
                    <div className="grid grid-cols-3 gap-2" id="env-selector">
                      {[
                        { val: "commercial", label: "Commercial Office", sub: "Open floor, server room" },
                        { val: "residential", label: "Luxury Home / Villa", sub: "Multi-zone, smart home" },
                        { val: "lab", label: "Hardware Lab Only", sub: "Diagnostics & recovery" },
                      ].map((opt) => (
                        <button
                          key={opt.val}
                          className={`calc-btn p-3 rounded-md text-left font-body-sm text-body-sm transition-all shadow-sm ${
                            env === opt.val
                              ? "bg-primary text-on-primary active"
                              : "bg-surface-container-lowest text-on-surface"
                          }`}
                          onClick={() => {
                            setEnv(opt.val);
                            calculate();
                          }}
                          type="button"
                        >
                          <div className="font-bold">{opt.label}</div>
                          <div className="text-[11px] opacity-90 text-on-surface-variant">{opt.sub}</div>
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-col gap-2">
                    <div className="flex justify-between items-center">
                      <label className="font-label-lg text-label-lg text-on-surface">
                        2. Structured Cat6a / Fiber Drops
                      </label>
                      <span className="font-headline-sm text-headline-sm text-primary font-bold">
                        {drops} Drops
                      </span>
                    </div>
                    <input
                      className="w-full h-2 bg-surface-container-highest rounded-lg appearance-none cursor-pointer accent-primary"
                      id="drops-slider"
                      max="96"
                      min="4"
                      step="4"
                      type="range"
                      value={drops}
                      onChange={(e) => {
                        setDrops(parseInt(e.target.value, 10));
                        calculate();
                      }}
                    />
                    <div className="flex justify-between text-on-surface-variant text-[11px]">
                      <span>4 Drops (Small)</span>
                      <span>48 Drops (Medium)</span>
                      <span>96+ Drops (Enterprise)</span>
                    </div>
                  </div>

                  <div className="flex flex-col gap-2">
                    <div className="flex justify-between items-center">
                      <label className="font-label-lg text-label-lg text-on-surface">
                        3. Enterprise Wi-Fi 7 Access Points
                      </label>
                      <span className="font-headline-sm text-headline-sm text-primary font-bold">
                        {aps} APs
                      </span>
                    </div>
                    <input
                      className="w-full h-2 bg-surface-container-highest rounded-lg appearance-none cursor-pointer accent-primary"
                      id="aps-slider"
                      max="16"
                      min="0"
                      step="1"
                      type="range"
                      value={aps}
                      onChange={(e) => {
                        setAps(parseInt(e.target.value, 10));
                        calculate();
                      }}
                    />
                    <div className="flex justify-between text-on-surface-variant text-[11px]">
                      <span>0 (Cabling only)</span>
                      <span>8 APs (Sprawling)</span>
                      <span>16 APs (Campus)</span>
                    </div>
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="font-label-lg text-label-lg text-on-surface">
                      4. Diagnostic Bench &amp; Emergency Spare Staging
                    </label>
                    <div className="grid grid-cols-2 gap-2" id="lab-selector">
                      {[
                        { val: "standard", label: "Standard Warranty", sub: "1-Year hardware warranty" },
                        { val: "priority", label: "24/7 Priority Lab SLA", sub: "+$3,500 • 4h response bench" },
                      ].map((opt) => (
                        <button
                          key={opt.val}
                          className={`lab-btn p-3 rounded-md text-left font-body-sm text-body-sm transition-all shadow-sm ${
                            lab === opt.val
                              ? "bg-primary text-on-primary active"
                              : "bg-surface-container-lowest text-on-surface"
                          }`}
                          onClick={() => {
                            setLab(opt.val);
                            calculate();
                          }}
                          type="button"
                        >
                          <div className="font-bold">{opt.label}</div>
                          <div className="text-[11px] text-on-surface-variant">{opt.sub}</div>
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="lg:w-5/12 bg-surface-container-lowest rounded-lg p-space-lg shadow-lg flex flex-col justify-between">
                  <div className="flex flex-col gap-space-sm">
                    <div className="flex items-center justify-between pb-space-xs">
                      <span className="font-label-sm text-label-sm uppercase font-bold text-on-surface-variant tracking-wider">
                        PROJECTED SPRINT INVESTMENT
                      </span>
                      <span className="bg-primary-container text-on-primary-container px-2 py-0.5 rounded-full font-label-sm text-label-sm font-bold">
                        FIXED FEE
                      </span>
                    </div>
                    <div>
                      <div className="text-on-surface-variant font-body-sm text-body-sm">
                        Estimated Sprint Budget:
                      </div>
                      <div className="font-display-hero text-headline-lg text-primary font-extrabold leading-none my-1">
                        ${totalPrice.toLocaleString()}
                      </div>
                      <div className="font-body-sm text-body-sm text-secondary font-semibold">
                        Estimated Timeline: {timeline}
                      </div>
                    </div>
                    <div className="my-space-xs"></div>
                    <div className="flex flex-col gap-2 font-body-sm text-body-sm text-on-surface">
                      <div className="flex justify-between">
                        <span className="text-on-surface-variant">Environment:</span>
                        <span className="font-semibold">
                          {env === "commercial"
                            ? "Commercial Office"
                            : env === "residential"
                            ? "Luxury Home / Villa"
                            : "Dedicated Hardware Lab"}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-on-surface-variant">Structured Drops:</span>
                        <span className="font-semibold">
                          {drops} Runs (Cat6a LSZH)
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-on-surface-variant">Wi-Fi Radios:</span>
                        <span className="font-semibold">
                          {aps}x Wi-Fi 7 Pro Radios
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-on-surface-variant">Lab Support Level:</span>
                        <span className="font-semibold">
                          {lab === "standard"
                            ? "Standard 1-Yr Warranty"
                            : "24/7 Priority Lab SLA (+3.5k)"}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-on-surface-variant">Fluke DSX-8000 Cert:</span>
                        <span className="font-semibold text-primary">
                          Included &amp; Guaranteed
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="pt-space-md flex flex-col gap-space-xs">
                    <a
                      className="inline-flex items-center justify-center font-label-lg text-label-lg bg-primary hover:bg-primary-container text-on-primary rounded-full py-space-sm shadow-[0_4px_14px_rgba(5,150,105,0.3)] transition-all text-center w-full"
                      href="#site-survey"
                    >
                      Lock in Site Survey with This Estimate
                    </a>
                    <p className="text-center font-body-sm text-body-sm text-on-surface-variant">
                      No obligation. Onsite physical walkthrough validates cable paths
                      and confirms fixed quote.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* SITE SURVEY FORM */}
          <section className="w-full bg-surface-container-low py-space-xl" id="site-survey">
            <div className="max-w-4xl mx-auto px-gutter">
              <div className="bg-surface-container-lowest rounded-xl p-space-lg md:p-space-xl shadow-lg">
                <div className="text-center max-w-xl mx-auto mb-space-lg">
                  <span className="font-label-sm text-label-sm text-primary uppercase font-bold tracking-widest">
                    Rapid Onsite Dispatch
                  </span>
                  <h2 className="font-headline-xl text-headline-xl text-on-surface mt-1">
                    Schedule Your 30-Min Onsite Survey
                  </h2>
                  <p className="font-body-md text-body-md text-on-surface-variant mt-2">
                    A certified NexusCraft systems engineer visits your facility or
                    residence, surveys cable paths, checks electrical grounding, and
                    delivers an exact fixed-price blueprint.
                  </p>
                </div>
                <form
                  className="flex flex-col gap-space-md"
                  onSubmit={(e) => {
                    e.preventDefault();
                    alert("Site Survey request received! A NexusCraft lead engineer will call within 4 business hours.");
                  }}
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-space-md">
                    <div className="flex flex-col gap-1.5">
                      <label className="font-label-lg text-label-lg text-on-surface">
                        Full Name *
                      </label>
                      <input
                        className="w-full px-4 py-3 rounded-full bg-surface-container-low text-on-surface text-body-md focus:outline-none focus:ring-2 focus:ring-primary shadow-sm"
                        placeholder="Alexander Wright"
                        required
                        type="text"
                      />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label className="font-label-lg text-label-lg text-on-surface">
                        Corporate Email / Direct Email *
                      </label>
                      <input
                        className="w-full px-4 py-3 rounded-full bg-surface-container-low text-on-surface text-body-md focus:outline-none focus:ring-2 focus:ring-primary shadow-sm"
                        placeholder="alex@company.com"
                        required
                        type="email"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-space-md">
                    <div className="flex flex-col gap-1.5">
                      <label className="font-label-lg text-label-lg text-on-surface">
                        Site Location / City *
                      </label>
                      <input
                        className="w-full px-4 py-3 rounded-full bg-surface-container-low text-on-surface text-body-md focus:outline-none focus:ring-2 focus:ring-primary shadow-sm"
                        placeholder="e.g. Dubai DIFC or Austin HQ"
                        required
                        type="text"
                      />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label className="font-label-lg text-label-lg text-on-surface">
                        Target Start Timeline
                      </label>
                      <select className="w-full px-4 py-3 rounded-full bg-surface-container-low text-on-surface text-body-md focus:outline-none focus:ring-2 focus:ring-primary shadow-sm">
                        <option>Immediate (Within 48-72 Hours)</option>
                        <option>Next 2 Weeks</option>
                        <option>Q3 Planned Sprint</option>
                        <option>Urgent Hardware Lab Repair</option>
                      </select>
                    </div>
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="font-label-lg text-label-lg text-on-surface">
                      Facility Specifics &amp; Technical Requirements
                    </label>
                    <textarea
                      className="w-full px-4 py-3 rounded-lg bg-surface-container-low text-on-surface text-body-md focus:outline-none focus:ring-2 focus:ring-primary shadow-sm resize-none"
                      placeholder="Tell us about the physical space (e.g. square footage, concrete walls, existing rack condition, number of staff or connected IoT devices)..."
                      rows={3}
                    ></textarea>
                  </div>
                  <div className="flex items-center gap-2 pt-1">
                    <input
                      defaultChecked
                      className="w-4 h-4 accent-primary rounded cursor-pointer"
                      id="nda-agree"
                      type="checkbox"
                    />
                    <label
                      className="font-body-sm text-body-sm text-on-surface-variant cursor-pointer"
                      htmlFor="nda-agree"
                    >
                      Automatically execute standard mutual NDA for proprietary network
                      architecture &amp; floor plans.
                    </label>
                  </div>
                  <button
                    className="inline-flex items-center justify-center font-label-lg text-label-lg bg-primary hover:bg-primary-container text-on-primary rounded-full py-space-sm px-space-lg shadow-[0_4px_14px_rgba(5,150,105,0.3)] transition-all mt-space-xs"
                    type="submit"
                  >
                    Confirm &amp; Book Onsite Site Survey
                  </button>
                </form>
              </div>
            </div>
          </section>

          {/* FAQ */}
          <section className="max-w-5xl mx-auto px-gutter w-full py-space-xl">
            <div className="flex flex-col gap-space-lg">
              <div className="text-center">
                <span className="font-label-sm text-label-sm text-primary uppercase font-bold tracking-widest">
                  Engineering FAQ
                </span>
                <h2 className="font-headline-xl text-headline-xl text-on-surface mt-1">
                  Frequently Asked Technical Questions
                </h2>
              </div>
              <div className="flex flex-col gap-space-sm">
                {[
                  {
                    q: "How does Fluke DSX-8000 certification guarantee network performance?",
                    a: "Unlike cheap handheld wire-mappers that only test simple pin-to-pin continuity, our Fluke DSX-8000 analyzer tests Near-End Crosstalk (NEXT), Return Loss, Propagation Delay, and Alien Crosstalk under high frequency (up to 2 GHz). Every single drop receives an ISO/TIA compliance test certificate with full parameter graphs.",
                  },
                  {
                    q: "Can we upgrade our commercial office cabling without taking staff offline during work hours?",
                    a: "Yes. We specialize in zero-downtime weekend and after-hours cutovers. We pre-cable, dress patch panels, stage core switches, and conduct parallel burn-ins during normal hours, executing the physical network cutover between Friday 7 PM and Sunday noon. Your team logs in on Monday morning with zero downtime.",
                  },
                  {
                    q: "What types of hardware can be repaired in your ESD micro-soldering facility?",
                    a: "Our Class-100 ESD bench repairs enterprise core switches (Cisco, Juniper, Arista), 1U/2U server motherboards, redundant hot-swap power supplies, PoE injectors, logic boards, and storage backplanes. We replace blown capacitors, shorted MOSFETs, burned IC controllers, damaged RJ45/SFP+ cages, and perform BGA rework.",
                  },
                  {
                    q: "Why is Wi-Fi 7 superior for luxury homes with thick concrete/stone walls?",
                    a: "Wi-Fi 7 introduces Multi-Link Operation (MLO), allowing devices to send and receive data across multiple frequency bands (2.4 GHz, 5 GHz, 6 GHz) simultaneously. Combined with 320 MHz channels and targeted directional beamforming, client devices maintain stable high-throughput connections even when transitioning through dense architectural materials.",
                  },
                  {
                    q: "How does your fixed pricing guarantee protect our budget?",
                    a: "Our initial onsite survey covers exact conduit paths, rack spatial requirements, and cable distances. Once the sprint scope is signed, your price is completely locked between $5,000 and $35,000. If we encounter unexpected masonry challenges or extra drop requirements within the agreed blueprint, NexusCraft absorbs the cost.",
                  },
                ].map((faq, i) => (
                  <div
                    key={i}
                    className="bg-surface-container rounded-lg p-space-md shadow-sm"
                  >
                    <h4 className="font-headline-sm text-headline-sm text-on-surface mb-2">
                      {faq.q}
                    </h4>
                    <p className="font-body-md text-body-md text-on-surface-variant">
                      {faq.a}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>
      </main>

      <footer className="w-full bg-surface-container-low shadow-[0_-1px_12px_rgba(0,0,0,0.02)] mt-space-xl">
        <div className="max-w-7xl mx-auto px-gutter py-space-xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-space-xl pb-space-xl">
            <div className="flex flex-col gap-space-sm">
              <div className="flex items-center gap-space-xs mb-space-xs">
                <span className="font-headline-sm text-headline-sm text-on-surface">
                  NexusCraft
                </span>
                <span className="font-label-sm text-label-sm bg-primary-container text-on-primary-container px-space-xs py-0.5 rounded-full">
                  ENG LAB
                </span>
              </div>
              <p className="font-body-md text-body-md text-on-surface-variant max-w-xs">
                Kinetic engineering partner crafting resilient software architectures,
                bare-metal hardware networks, and mission-critical cloud apps for
                modern enterprises.
              </p>
              <div className="flex items-center gap-space-xs mt-space-sm">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                <span className="font-label-sm text-label-sm text-primary tracking-wide uppercase">
                  Available for Q3 Sprints
                </span>
              </div>
            </div>
            <div className="flex flex-col gap-space-xs">
              <h4 className="font-headline-sm text-headline-sm text-on-surface mb-space-xs">
                Core Capabilities
              </h4>
              <ul className="flex flex-col gap-space-xs font-body-md text-body-md text-on-surface-variant">
                <li className="hover:text-primary transition-colors cursor-pointer">
                  Distributed Cloud Architecture
                </li>
                <li className="hover:text-primary transition-colors cursor-pointer">
                  Enterprise Full-Stack Applications
                </li>
                <li className="hover:text-primary transition-colors cursor-pointer">
                  Network Infrastructure &amp; Edge Hardware
                </li>
                <li className="hover:text-primary transition-colors cursor-pointer">
                  High-Throughput Microservices
                </li>
                <li className="hover:text-primary transition-colors cursor-pointer">
                  Mission-Critical Database Engineering
                </li>
              </ul>
            </div>
            <div className="flex flex-col gap-space-xs">
              <h4 className="font-headline-sm text-headline-sm text-on-surface mb-space-xs">
                Fixed Pricing Guarantee
              </h4>
              <ul className="flex flex-col gap-space-xs font-body-md text-body-md text-on-surface-variant">
                {[
                  "Predictable Sprint Packages ($20k–$100k)",
                  "Zero Variable Consulting Overages",
                  "Guaranteed Milestone Acceptance",
                  "Full IP &amp; Bare-Metal Code Handover",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-space-xs">
                    <span className="material-symbols-outlined text-primary text-[18px] mt-0.5">
                      verified
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-col gap-space-xs">
              <h4 className="font-headline-sm text-headline-sm text-on-surface mb-space-xs">
                Direct Engagement
              </h4>
              <p className="font-body-md text-body-md text-on-surface-variant mb-space-xs">
                Reserve a private engineering architecture session with our staff
                lead.
              </p>
              <a
                className="inline-flex items-center justify-center font-label-lg text-label-lg bg-surface-container-highest hover:bg-surface-container-high text-on-surface rounded-full px-space-md py-space-sm transition-colors text-center w-full mb-space-xs"
                href="/contact-us"
              >
                Book 30-Min Scoping Call
              </a>
              <span className="font-body-sm text-body-sm text-on-surface-variant">
                scoping@nexuscraft.systems
              </span>
            </div>
          </div>
          <div className="pt-space-lg flex flex-col sm:flex-row items-center justify-between gap-space-md text-on-surface-variant font-body-sm text-body-sm">
            <p>© 2025 NexusCraft Software &amp; Systems Inc. All rights reserved.</p>
            <div className="flex items-center gap-space-lg">
              <a className="hover:text-on-surface transition-colors" href="#">
                Security &amp; Compliance
              </a>
              <a className="hover:text-on-surface transition-colors" href="#">
                Architecture SLAs
              </a>
              <a className="hover:text-on-surface transition-colors" href="#">
                Privacy Policy
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
