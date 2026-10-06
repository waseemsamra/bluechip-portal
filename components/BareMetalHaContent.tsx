"use client";

import type { JSX } from "react";
import { useState } from "react";
import Image from "next/image";

export default function BareMetalHaContent(): JSX.Element {
  const [archetypeMult, setArchetypeMult] = useState(1.2);
  const [redundancyMult, setRedundancyMult] = useState(1.0);
  const [trafficVal, setTrafficVal] = useState(2);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [formSuccess, setFormSuccess] = useState(false);

  const trafficLabels: Record<number, string> = {
    1: "< 100K Monthly Requests",
    2: "100K - 1M Monthly Requests",
    3: "1M - 10M Monthly Requests",
    4: "10M+ Enterprise Monthly Requests",
  };

  const trafficMultipliers: Record<number, number> = {
    1: 0.8,
    2: 1.0,
    3: 1.4,
    4: 1.9,
  };

  const baseSprintCost = 7500;
  const totalSprint = Math.round(
    (baseSprintCost * archetypeMult * trafficMultipliers[trafficVal] * redundancyMult) / 250
  ) * 250;

  let weeks = "1 - 2 Weeks";
  if (totalSprint > 16000) weeks = "3 - 4 Weeks";
  else if (totalSprint > 9000) weeks = "2 - 3 Weeks";

  const estSavings = Math.round((totalSprint * 0.18) / 50) * 50;

  const toggleFaq = (idx: number) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  return (
    <>
      <section className="relative w-full overflow-hidden bg-surface pt-space-lg pb-space-xl">
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[920px] h-[360px] bg-primary/5 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute top-48 right-[-10%] w-[420px] h-[420px] bg-tertiary-container/5 rounded-full blur-3xl pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-gutter relative z-10 flex flex-col gap-space-lg">
          <div className="flex items-center gap-space-xs self-start">
            <span className="inline-flex items-center gap-space-xs font-label-sm text-label-sm bg-primary-container text-on-primary-container px-space-md py-1.5 rounded-full shadow-sm tracking-wider uppercase">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
              ENTERPRISE CLOUD &amp; BARE-METAL INFRASTRUCTURE • 99.999% SLA • ZERO VENDOR LOCK-IN
            </span>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg items-end">
            <div className="lg:col-span-8 flex flex-col gap-space-sm">
              <h1 className="font-display-hero text-display-hero text-on-surface tracking-tight">
                Managed Cloud Hosting &amp; Dedicated Bare-Metal Infrastructure.
                <span className="block italic text-primary font-normal">Engineered for Zero Downtime.</span>
              </h1>
              <p className="font-body-xl text-body-xl text-on-surface-variant max-w-3xl">
                From hardened Kubernetes clusters and dedicated bare-metal servers to resilient multi-region disaster recovery. Fixed-price transparent deployment sprints with round-the-clock SysOps monitoring and zero hidden egress markups.
              </p>
            </div>
            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-space-sm lg:items-end justify-end">
              <a className="inline-flex items-center justify-center gap-space-xs font-label-lg text-label-lg bg-primary hover:bg-primary-container text-on-primary rounded-full px-space-lg py-space-md shadow-[0_4px_20px_rgba(0,105,72,0.28)] transition-all hover:-translate-y-0.5 w-full sm:w-auto text-center" href="#estimator">
                <span>Explore Hosting Architecture ($3k - $25k)</span>
                <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
              </a>
              <a className="inline-flex items-center justify-center gap-space-xs font-label-lg text-label-lg bg-surface-container hover:bg-surface-container-high text-on-surface rounded-full px-space-lg py-space-md shadow-sm transition-all hover:-translate-y-0.5 w-full sm:w-auto text-center" href="#scoping-form">
                <span className="material-symbols-outlined text-[18px] text-primary">calendar_today</span>
                <span>Schedule Architecture Scoping Call</span>
              </a>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-space-sm pt-space-xs">
            {[
              { icon: "verified_user", title: "99.999% SLA", desc: "Financial Uptime Guarantee", bg: "bg-primary-fixed", text: "text-on-primary-fixed" },
              { icon: "radar", title: "24/7/365 SRE", desc: "Tier-3 Active NOC Probing", bg: "bg-secondary-fixed", text: "text-on-secondary-fixed" },
              { icon: "bolt", title: "< 15ms Latency", desc: "Anycast CDN & BGP Core", bg: "bg-tertiary-fixed", text: "text-on-tertiary-fixed" },
              { icon: "money_off", title: "$0 Markup Egress", desc: "Unmetered Bare Metal", bg: "bg-primary-fixed", text: "text-on-primary-fixed" },
            ].map((badge, i) => (
              <div key={i} className="bg-surface-container-lowest rounded-lg p-space-md shadow-[0_4px_20px_-2px_rgba(15,23,42,0.04)] flex items-center gap-space-sm">
                <div className={`w-10 h-10 rounded-full ${badge.bg} flex items-center justify-center ${badge.text} shrink-0`}>
                  <span className="material-symbols-outlined text-[20px]">{badge.icon}</span>
                </div>
                <div className="min-w-0">
                  <div className="font-headline-sm text-headline-sm text-on-surface truncate">{badge.title}</div>
                  <div className="font-body-sm text-body-sm text-on-surface-variant truncate">{badge.desc}</div>
                </div>
              </div>
            ))}
          </div>
          <div className="relative rounded-lg overflow-hidden shadow-[0_24px_48px_-8px_rgba(15,23,42,0.12)] bg-inverse-surface mt-space-sm">
            <div className="relative w-full aspect-[16/9] max-h-[580px] overflow-hidden">
              <Image alt="High-resolution panoramic workstation monitor with curved ultrawide display presenting real-time cloud server cluster telemetry and network graphs" className="w-full h-full object-cover object-center" src="/images/bare-metal-ha/hero-workstation.jpg" width={1440} height={580} priority />
              <div className="absolute inset-0 bg-gradient-to-t from-inverse-surface/90 via-inverse-surface/30 to-transparent"></div>
              <div className="absolute top-4 left-4 sm:top-6 sm:left-6 flex flex-wrap gap-space-xs max-w-xl">
                <div className="backdrop-blur-md bg-surface-container-lowest/90 px-space-md py-1.5 rounded-full shadow-sm flex items-center gap-space-xs text-on-surface">
                  <span className="w-2.5 h-2.5 rounded-full bg-primary"></span>
                  <span className="font-label-sm text-label-sm">Frankfurt &amp; Dubai Colocation Active • 10 Gbps Uplink</span>
                </div>
                <div className="backdrop-blur-md bg-surface-container-lowest/90 px-space-md py-1.5 rounded-full shadow-sm flex items-center gap-space-xs text-on-surface">
                  <span className="material-symbols-outlined text-primary text-[16px]">token</span>
                  <span className="font-label-sm text-label-sm">Kubernetes: 16 Nodes Healthy • Dynamic Autoscaling</span>
                </div>
              </div>
              <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 flex flex-wrap items-center justify-between gap-space-sm">
                <div className="backdrop-blur-md bg-inverse-surface/80 px-space-md py-space-xs rounded-full flex items-center gap-space-sm text-inverse-on-surface">
                  <span className="material-symbols-outlined text-primary-fixed text-[18px]">security</span>
                  <span className="font-body-sm text-body-sm font-semibold">DDoS Shield: Cloudflare Magic Transit &amp; AWS Shield Tier-1</span>
                </div>
                <div className="backdrop-blur-md bg-primary-container px-space-md py-space-xs rounded-full flex items-center gap-space-xs text-on-primary-container shadow-sm">
                  <span className="material-symbols-outlined text-[18px]">restore</span>
                  <span className="font-label-sm text-label-sm">Cold DR Snapshot: RPO &lt; 60s • RTO &lt; 4 mins</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full bg-surface-container-low py-space-xl">
        <div className="max-w-7xl mx-auto px-gutter flex flex-col gap-space-lg">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-sm">
            <div>
              <span className="font-label-sm text-label-sm text-primary uppercase tracking-wider font-bold">DISCIPLINE ARCHITECTURE</span>
              <h2 className="font-headline-xl text-headline-xl text-on-surface tracking-tight mt-1">4 Production-Grade Infrastructure Sprints</h2>
            </div>
            <p className="font-body-md text-body-md text-on-surface-variant max-w-md">Every deployment is scoped as a fixed-fee milestone sprint. You retain complete Infrastructure-as-Code Terraform ownership with 0% vendor capture.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-space-md">
            {[
              { num: "01", price: "$6,000 - $18,000", weeks: "2-3 Weeks", title: "High-Availability Managed Cloud & Kubernetes", desc: "Automated multi-zone clustering across EKS, GKE, or DigitalOcean with zero single points of failure. Hardened GitOps CI/CD delivery and unified service mesh isolation.", features: ["Automated multi-AZ pod scheduling, Karpenter / Cluster Autoscaler", "ArgoCD GitOps deployment with automated progressive rollouts", "Istio / Linkerd mTLS encryption between all microservices"], tags: ["AWS EKS", "GCP GKE", "Terraform", "ArgoCD", "Helm"] },
              { num: "02", price: "$5,000 - $22,000", weeks: "1-2 Weeks", title: "High-Performance Dedicated Bare-Metal & Private Cloud", desc: "Bespoke high-IOPS hardware clusters deployed on Hetzner, OVHcloud, or Equinix Metal. Slashes hyper-cloud compute invoices by up to 65% for database and high-throughput workloads.", features: ["Proxmox VE / KVM virtualization with Ceph distributed block storage", "Dual 10G/25G SFP+ bonded uplinks with isolated VLAN topologies", "Hardware IPMI/iDRAC secure out-of-band management gateway"], tags: ["AMD EPYC 9654", "Proxmox VE", "Ceph Storage", "NVMe Gen5 RAID"] },
              { num: "03", price: "$3,000 - $12,000", weeks: "1-2 Weeks", title: "Mission-Critical Database Clusters & Managed VPS", desc: "PostgreSQL Patroni, MySQL Galera, and Redis Sentinel architectures with split-second leader failover, pgBouncer pooling, and encrypted continuous WAL archiving.", features: ["Zero-data-loss Point-in-Time Recovery (PITR) streaming to cold S3/B2", "Kernel network optimization: TCP BBR congestion control & NVMe schedulers", "Automated read-replica routing & intelligent connection multiplexing"], tags: ["PostgreSQL Patroni", "Redis Sentinel", "pgBouncer", "MySQL Galera"] },
              { num: "04", price: "$4,000 - $16,000", weeks: "1-2 Weeks", title: "Disaster Recovery, Multi-Region Failover & DDoS Shield", desc: "Enterprise resilience through cross-continental replication, sub-minute RPO, automated DNS geo-steering, and volumetric 100+ Gbps edge scrubbing via Cloudflare Magic Transit.", features: ["Automated simulated disaster drills with audited recovery certification", "L3/L4/L7 DDoS mitigation filtering over 150M packets per second", "Immutable write-once-read-many (WORM) ransomware backup vaults"], tags: ["Cloudflare Magic Transit", "BGP Anycast", "RTO < 4m", "WORM Vault"] },
            ].map((card, i) => (
              <div key={i} className="bg-surface-container-lowest rounded-lg p-space-lg shadow-[0_4px_20px_-2px_rgba(15,23,42,0.04)] flex flex-col justify-between group hover:shadow-[0_12px_32px_-4px_rgba(15,23,42,0.08)] transition-all">
                <div className="flex flex-col gap-space-sm">
                  <div className="flex items-center justify-between gap-space-sm">
                    <span className="font-display-hero text-headline-lg text-secondary/30">{card.num}</span>
                    <div className="flex items-center gap-space-xs">
                      <span className="font-label-sm text-label-sm bg-primary-fixed text-on-primary-fixed px-space-sm py-1 rounded-full font-bold">{card.price}</span>
                      <span className="font-label-sm text-label-sm bg-surface-container text-on-surface-variant px-space-sm py-1 rounded-full">{card.weeks}</span>
                    </div>
                  </div>
                  <h3 className="font-headline-md text-headline-md text-on-surface">{card.title}</h3>
                  <p className="font-body-md text-body-md text-on-surface-variant">{card.desc}</p>
                  <ul className="flex flex-col gap-space-xs font-body-sm text-body-sm text-on-surface mt-space-xs">
                    {card.features.map((f, j) => (
                      <li key={j} className="flex items-start gap-space-xs">
                        <span className="w-4 h-4 rounded-full bg-primary flex items-center justify-center text-on-primary text-[10px] mt-0.5">✓</span>
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex flex-wrap gap-space-xs pt-space-md mt-space-md">
                  {card.tags.map((tag) => (
                    <span key={tag} className="font-label-sm text-label-sm bg-surface-container text-on-surface-variant px-space-xs py-0.5 rounded-full">{tag}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full bg-surface py-space-xl">
        <div className="max-w-7xl mx-auto px-gutter flex flex-col gap-space-lg">
          <div className="flex flex-col gap-space-xs">
            <span className="font-label-sm text-label-sm text-primary uppercase tracking-wider font-bold">ARCHITECTURAL AUDIT</span>
            <h2 className="font-headline-xl text-headline-xl text-on-surface tracking-tight">Hosting Architecture Decision Matrix</h2>
            <p className="font-body-md text-body-md text-on-surface-variant max-w-2xl">Evaluate public clouds, commodity unmanaged virtual machines, and our managed bare-metal hybrid approach side-by-side.</p>
          </div>
          <div className="overflow-x-auto rounded-lg shadow-[0_4px_20px_-2px_rgba(15,23,42,0.04)] bg-surface-container-lowest">
            <table className="w-full text-left font-body-md text-body-md">
              <thead>
                <tr className="bg-surface-container-high text-on-surface">
                  <th className="p-space-md font-headline-sm text-headline-sm">Decision Criterion</th>
                  <th className="p-space-md font-headline-sm text-headline-sm opacity-70">Hyperscale Cloud (AWS / GCP)</th>
                  <th className="p-space-md font-headline-sm text-headline-sm opacity-70">Commodity VPS (Linode/Vultr)</th>
                  <th className="p-space-md font-headline-sm text-headline-sm text-primary bg-primary-fixed/30">NexusCraft Dedicated Hybrid</th>
                </tr>
              </thead>
              <tbody className="divide-y-0">
                {[
                  { dim: "Compute Cost Predictability", a: "Volatile bills, high IOPS multipliers, memory surcharges", b: "Low fixed cost but severe noisy-neighbor CPU throttling", c: "100% Guaranteed Flat Monthly Rate (60-70% savings)" },
                  { dim: "Network Egress Fees", a: "$0.08 - $0.12 per GB transferred out", b: "Limited bandwidth pools with sudden step-up overage", c: "Unmetered 10 Gbps / 25 Gbps uplinks with $0 egress markups", error: true },
                  { dim: "SysOps & SRE Support", a: "Requires $15k+/mo in-house DevOps engineer overhead", b: "Zero support; unmanaged ticket systems with 48h SLA", c: "24/7/365 Tier-3 NOC monitoring + proactive kernel patching" },
                  { dim: "Disaster Recovery RTO", a: "Complex multi-service config, costly redundant reservations", b: "Manual backup downloads; multi-hour to multi-day downtime", c: "Sub-4 minute automated multi-region cold/hot cutover" },
                  { dim: "Infrastructure Ownership", a: "Proprietary managed service lock-in (Dynamo, CloudWatch)", b: "Raw basic virtual machines without IaC blueprints", c: "100% Client-Owned Terraform, Proxmox, and Helm manifests" },
                ].map((row, i) => (
                  <tr key={i} className="hover:bg-surface-container-low transition-colors">
                    <td className="p-space-md font-semibold text-on-surface">{row.dim}</td>
                    <td className={`p-space-md ${row.error ? "text-error font-medium" : "text-on-surface-variant"}`}>{row.a}</td>
                    <td className="p-space-md text-on-surface-variant">{row.b}</td>
                    <td className={`p-space-md ${row.error ? "" : "text-on-surface font-semibold bg-primary-fixed/10"}`}>{row.c}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="w-full bg-surface-container-low py-space-xl">
        <div className="max-w-7xl mx-auto px-gutter flex flex-col gap-space-lg">
          <div className="flex flex-col gap-space-xs">
            <span className="font-label-sm text-label-sm text-primary uppercase tracking-wider font-bold">SEAMLESS TRANSITION</span>
            <h2 className="font-headline-xl text-headline-xl text-on-surface tracking-tight">The 4-Stage Zero-Downtime Migration Protocol</h2>
            <p className="font-body-md text-body-md text-on-surface-variant max-w-2xl">We migrate running production workloads without dropping a single active customer session or HTTP request.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-space-md">
            {[
              { num: "1", weeks: "Day 1 - 3", title: "Workload Profiling & IaC Blueprint", desc: "Full telemetry audit of IOPS, RAM allocation, CPU spikes, and egress mapping. Generation of immutable Terraform manifests." },
              { num: "2", weeks: "Day 4 - 7", title: "Sandbox Staging & OS Hardening", desc: "Zero-trust OS kernel hardening (CIS benchmark Level 2), TCP BBR tuning, firewalls, and parallel staging hypervisors." },
              { num: "3", weeks: "Day 8 - 11", title: "Data Sync & Shadow Rehearsal", desc: "Live database streaming replication (WAL sync), file asset synchronizing, and simulated 50k concurrent stress-tests." },
              { num: "4", weeks: "Day 12 - 14", title: "Zero-Downtime DNS & Hypercare", desc: "BGP Anycast routing cutover, sub-second traffic diversion, followed by 30-day dedicated NOC monitoring and warranty.", highlight: true },
            ].map((stage, i) => (
              <div key={i} className={`bg-surface-container-lowest rounded-lg p-space-md shadow-[0_4px_20px_-2px_rgba(15,23,42,0.04)] flex flex-col gap-space-sm relative`}>
                <div className="flex items-center justify-between">
                  <span className={`w-8 h-8 rounded-full ${stage.highlight ? "bg-primary-container text-on-primary-container" : "bg-primary text-on-primary"} font-label-lg text-label-lg flex items-center justify-center font-bold`}>{stage.num}</span>
                  <span className={`font-label-sm text-label-sm ${stage.highlight ? "bg-primary-fixed text-on-primary-fixed" : "bg-surface-container text-on-surface-variant"} px-space-sm py-0.5 rounded-full ${stage.highlight ? "font-bold" : ""}`}>{stage.weeks}</span>
                </div>
                <h3 className="font-headline-sm text-headline-sm text-on-surface">{stage.title}</h3>
                <p className="font-body-md text-body-md text-on-surface-variant">{stage.desc}</p>
                <div className={`pt-space-xs ${stage.highlight ? "text-primary" : "text-primary"} font-label-sm text-label-sm flex items-center gap-1`}>
                  <span>Continuous hypercare</span>
                  <span className="material-symbols-outlined text-[14px]">check</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full bg-surface py-space-xl">
        <div className="max-w-7xl mx-auto px-gutter flex flex-col gap-space-lg">
          <div className="flex flex-col gap-space-xs">
            <span className="font-label-sm text-label-sm text-primary uppercase tracking-wider font-bold">PROVEN DEPLOYMENTS</span>
            <h2 className="font-headline-xl text-headline-xl text-on-surface tracking-tight">Verified Infrastructure Transformations</h2>
            <p className="font-body-md text-body-md text-on-surface-variant max-w-2xl">Real architectural upgrades engineered with strict budget caps and zero business interruption.</p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-space-md">
            {[
              { tag: "FINTECH / PAYMENTS", price: "$18,500 Sprint", title: "Dual-Region Bare-Metal (Frankfurt + Dubai)", desc: "Migrated a runaway $14,000/month AWS compute invoice to private dual-datacenter AMD EPYC bare-metal running Proxmox VE & Kubernetes Talos.", stats: [{ label: "Monthly Server Cost", value: "$4,200/mo (-70% cost reduction)", primary: true }, { label: "Verified Availability", value: "99.999% over 18 continuous months" }, { label: "Dropped Transactions", value: "0 dropped packets" }] },
              { tag: "E-COMMERCE SCALE", price: "$12,000 Sprint", title: "Headless API & Flash-Sale Kubernetes", desc: "Resolved Black Friday crash bottlenecks by deploying horizontal pod autoscaling with Redis Sentinel cluster and Cloudflare Anycast edge caching.", stats: [{ label: "Peak Load Handled", value: "45,000 concurrent shoppers" }, { label: "Global Edge Latency", value: "< 85ms 99th percentile", primary: true }, { label: "Cart Drop Rate", value: "Reduced from 14% to 1.8%" }] },
              { tag: "HEALTHCARE EHR", price: "$15,000 Sprint", title: "HIPAA PostgreSQL Patroni & Immutable DR", desc: "Engineered zero-loss medical record clustering across 2 continents with automated Patroni leader failover and continuous WORM encrypted snapshots.", stats: [{ label: "Failover Downtime", value: "0 seconds during cutover", primary: true }, { label: "Recovery Point (RPO)", value: "< 30 seconds" }, { label: "Audit Status", value: "100% HIPAA & SOC-2 Compliant" }] },
            ].map((cs, i) => (
              <div key={i} className="bg-surface-container-lowest rounded-lg p-space-lg shadow-[0_4px_20px_-2px_rgba(15,23,42,0.04)] flex flex-col justify-between">
                <div className="flex flex-col gap-space-sm">
                  <div className="flex items-center justify-between">
                    <span className="font-label-sm text-label-sm bg-primary-fixed text-on-primary-fixed px-space-xs py-0.5 rounded-full font-bold">{cs.tag}</span>
                    <span className="font-headline-sm text-headline-sm text-primary font-bold">{cs.price}</span>
                  </div>
                  <h3 className="font-headline-md text-headline-md text-on-surface">{cs.title}</h3>
                  <p className="font-body-md text-body-md text-on-surface-variant">{cs.desc}</p>
                  <div className="bg-surface-container-low p-space-md rounded-lg flex flex-col gap-space-xs my-space-xs">
                    {cs.stats.map((stat, j) => (
                      <div key={j} className="flex justify-between font-body-sm text-body-sm">
                        <span className="text-on-surface-variant">{stat.label}:</span>
                        <span className={`font-semibold ${stat.primary ? "text-primary" : "text-on-surface"}`}>{stat.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="pt-space-sm flex items-center gap-space-xs text-on-surface-variant font-label-sm text-label-sm">
                  <span className="material-symbols-outlined text-primary text-[18px]">lock</span>
                  <span>PCI-DSS Compliant Tier-3 Isolation</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full bg-surface-container-low py-space-xl">
        <div className="max-w-7xl mx-auto px-gutter flex flex-col gap-space-lg">
          <div className="text-center max-w-2xl mx-auto flex flex-col gap-space-xs">
            <span className="font-label-sm text-label-sm text-primary uppercase tracking-wider font-bold">PREDICTABLE FIXED PACKAGES</span>
            <h2 className="font-headline-xl text-headline-xl text-on-surface tracking-tight">Transparent Sprint Engineering Tiers</h2>
            <p className="font-body-md text-body-md text-on-surface-variant">No vague hourly estimates. No sudden consultant overages. Every deliverable is bound by milestone acceptance criteria and code handover.</p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-space-md items-stretch">
            {[
              { title: "High-Performance Cloud & VPS", badge: "1-2 Weeks", price: "$3,500", range: "- $6,500", desc: "Ideal for high-growth SaaS web applications needing rock-solid Dockerized VPS deployments with automated offsite backup and SSL orchestration.", features: ["Hardened Ubuntu LTS / Debian OS kernel tuning", "Automated Let's Encrypt SSL with Caddy/Nginx reverse proxy", "Encrypted daily offsite backup pipeline to AWS S3 or Backblaze B2", "30-day post-cutover SysOps warranty & monitoring"], cta: "Book Tier 1 Sprint", highlight: false },
              { title: "Dedicated Bare-Metal & DB Cluster", badge: "2-3 Weeks", price: "$8,500", range: "- $16,000", desc: "Complete migration to dedicated hardware. Enterprise Proxmox VE hypervisors, HA database failover, and massive compute savings.", features: ["Dual dedicated bare-metal servers (AMD EPYC/Intel Xeon)", "PostgreSQL / MySQL HA cluster with automatic failover", "Grafana & Prometheus live monitoring with PagerDuty alerts", "Complete Terraform source scripts & Proxmox automation", "60-day post-launch dedicated SRE hypercare SLA"], cta: "Lock In Bare-Metal Package", highlight: true },
              { title: "Enterprise Multi-Region Kubernetes", badge: "3-4 Weeks", price: "$18,000", range: "- $25,000", desc: "Designed for regulated fintechs, high-traffic marketplaces, and enterprise platforms requiring 99.999% SLA and multi-continental redundancy.", features: ["Full production Kubernetes cluster (EKS/GKE or Bare-Metal Talos)", "Active-Active or Active-Passive multi-region Anycast routing", "Enterprise Cloudflare Magic Transit 100+ Gbps DDoS scrubbing", "GitOps ArgoCD continuous delivery pipeline & Helm charts", "Automated disaster recovery drills & SOC-2 compliance handover"], cta: "Book Enterprise Kubernetes", highlight: false },
            ].map((tier, i) => (
              <div key={i} className={`bg-surface-container-lowest rounded-lg p-space-lg shadow-[0_4px_20px_-2px_rgba(15,23,42,0.04)] flex flex-col justify-between relative ${tier.highlight ? "shadow-[0_12px_32px_-4px_rgba(0,105,72,0.18)] transform lg:-translate-y-2" : ""}`}>
                {tier.highlight && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="font-label-sm text-label-sm bg-primary text-on-primary px-space-md py-1 rounded-full shadow-md uppercase tracking-wider font-bold">MOST POPULAR CHOICE</span>
                  </div>
                )}
                <div className={`flex flex-col gap-space-sm ${tier.highlight ? "pt-2" : ""}`}>
                  <div className="flex items-center justify-between">
                    <span className="font-headline-sm text-headline-sm text-on-surface">{tier.title}</span>
                    <span className={`font-label-sm text-label-sm ${tier.highlight ? "bg-primary-fixed text-on-primary-fixed" : "bg-surface-container text-on-surface-variant"} px-space-sm py-0.5 rounded-full ${tier.highlight ? "font-bold" : ""}`}>{tier.badge}</span>
                  </div>
                  <div className="flex items-baseline gap-1 my-space-xs">
                    <span className="font-display-hero text-headline-xl text-on-surface font-extrabold">{tier.price}</span>
                    <span className="font-body-md text-body-md text-on-surface-variant">{tier.range}</span>
                  </div>
                  <p className="font-body-md text-body-md text-on-surface-variant">{tier.desc}</p>
                  <ul className="flex flex-col gap-space-xs font-body-sm text-body-sm text-on-surface pt-space-xs">
                    {tier.features.map((feat, j) => (
                      <li key={j} className="flex items-start gap-space-xs">
                        <span className="w-4 h-4 rounded-full bg-primary flex items-center justify-center text-on-primary text-[10px] mt-0.5">✓</span>
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <a className={`inline-flex items-center justify-center font-label-lg text-label-lg rounded-full px-space-md py-space-sm mt-space-lg transition-colors text-center w-full ${tier.highlight ? "bg-primary hover:bg-primary-container text-on-primary shadow-[0_4px_14px_rgba(0,105,72,0.3)] hover:-translate-y-0.5" : "bg-surface-container hover:bg-surface-container-high text-on-surface"}`} href="#scoping-form">
                  {tier.cta}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full bg-surface py-space-xl scroll-mt-24" id="estimator">
        <div className="max-w-7xl mx-auto px-gutter flex flex-col gap-space-lg">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-sm">
            <div>
              <span className="font-label-sm text-label-sm text-primary uppercase tracking-wider font-bold">REAL-TIME CALCULATOR</span>
              <h2 className="font-headline-xl text-headline-xl text-on-surface tracking-tight mt-1">Hosting & Infrastructure Budget Estimator</h2>
            </div>
            <p className="font-body-md text-body-md text-on-surface-variant max-w-md">Tune your workload profile below to view real-time fixed sprint costs and estimated recurring monthly savings compared to public cloud.</p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg bg-surface-container-low p-space-lg rounded-lg shadow-[0_4px_20px_-2px_rgba(15,23,42,0.04)]">
            <div className="lg:col-span-7 flex flex-col gap-space-md">
              <div className="flex flex-col gap-space-xs">
                <label className="font-label-lg text-label-lg text-on-surface">1. Infrastructure Archetype</label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-xs">
                  {[
                    { mult: 1.2, name: "Cloud Kubernetes", title: "Managed Cloud & K8s", sub: "EKS, GKE, DigitalOcean clusters" },
                    { mult: 1.4, name: "Bare-Metal", title: "Dedicated Bare-Metal", sub: "Proxmox, Hetzner, Equinix high-IOPS" },
                    { mult: 1.0, name: "Database HA", title: "HA Database Cluster", sub: "Postgres Patroni, Redis Sentinel" },
                    { mult: 1.6, name: "Disaster Recovery", title: "Multi-Region Disaster Recovery", sub: "Active-Active, DDoS scrubbing, BGP" },
                  ].map((opt) => (
                    <button key={opt.mult} className={`text-left p-space-md rounded-lg transition-all ${archetypeMult === opt.mult ? "bg-primary-container/20 ring-2 ring-primary" : "bg-surface-container-lowest hover:bg-primary-container/10"}`} onClick={() => setArchetypeMult(opt.mult)} type="button">
                      <div className="font-headline-sm text-headline-sm text-on-surface">{opt.title}</div>
                      <div className="font-body-sm text-body-sm text-on-surface-variant">{opt.sub}</div>
                    </button>
                  ))}
                </div>
              </div>
              <div className="flex flex-col gap-space-xs">
                <div className="flex justify-between items-center">
                  <label className="font-label-lg text-label-lg text-on-surface" htmlFor="traffic-slider">2. Monthly Traffic & Active User Scale</label>
                  <span className="font-headline-sm text-headline-sm text-primary font-bold">{trafficLabels[trafficVal]}</span>
                </div>
                <input className="w-full h-2 bg-surface-container-high rounded-lg appearance-none cursor-pointer accent-primary" id="traffic-slider" max="4" min="1" type="range" value={trafficVal} onChange={(e) => setTrafficVal(parseInt(e.target.value, 10))} />
                <div className="flex justify-between font-body-sm text-body-sm text-on-surface-variant">
                  <span>&lt;100k requests</span>
                  <span>100k - 1M</span>
                  <span>1M - 10M</span>
                  <span>10M+ Enterprise</span>
                </div>
              </div>
              <div className="flex flex-col gap-space-xs">
                <label className="font-label-lg text-label-lg text-on-surface">3. Redundancy & High Availability Level</label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-xs">
                  {[
                    { val: 1.0, title: "Multi-Zone High Availability", sub: "Single region, zero single-point failure" },
                    { val: 1.5, title: "Multi-Region Active/Standby", sub: "Cross-continental < 60s failover" },
                  ].map((opt) => (
                    <button key={opt.val} className={`text-left p-space-sm px-space-md rounded-lg transition-all ${redundancyMult === opt.val ? "bg-primary-container/20 ring-2 ring-primary" : "bg-surface-container-lowest hover:bg-primary-container/10"}`} onClick={() => setRedundancyMult(opt.val)} type="button">
                      <span className="font-label-lg text-label-lg text-on-surface block">{opt.title}</span>
                      <span className="font-body-sm text-body-sm text-on-surface-variant block">{opt.sub}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
            <div className="lg:col-span-5 bg-surface-container-lowest rounded-lg p-space-lg shadow-[0_12px_32px_-4px_rgba(15,23,42,0.06)] flex flex-col justify-between">
              <div className="flex flex-col gap-space-md">
                <div className="flex items-center justify-between">
                  <span className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant">ESTIMATED FIXED SPRINT</span>
                  <span className="font-label-sm text-label-sm bg-primary-fixed text-on-primary-fixed px-space-xs py-0.5 rounded-full font-bold">Fixed Price Guarantee</span>
                </div>
                <div className="flex flex-col">
                  <div className="font-display-hero text-display-hero text-primary font-extrabold tracking-tight">${totalSprint.toLocaleString()}</div>
                  <div className="font-body-sm text-body-sm text-on-surface-variant">Includes complete architecture, IaC code handover & 30-day hypercare.</div>
                </div>
                <div className="bg-surface-container-low p-space-md rounded-lg flex flex-col gap-space-xs">
                  <div className="flex justify-between items-center font-body-sm text-body-sm">
                    <span className="text-on-surface-variant">Target Sprint Delivery:</span>
                    <span className="font-semibold text-on-surface">{weeks}</span>
                  </div>
                  <div className="flex justify-between items-center font-body-sm text-body-sm">
                    <span className="text-on-surface-variant">Est. Monthly Cloud Bill Savings:</span>
                    <span className="font-semibold text-primary font-bold">-${estSavings.toLocaleString()} / mo vs AWS</span>
                  </div>
                  <div className="flex justify-between items-center font-body-sm text-body-sm">
                    <span className="text-on-surface-variant">Team Resourcing:</span>
                    <span className="font-semibold text-on-surface">1 Principal SRE + 1 DevOps Lead</span>
                  </div>
                </div>
                <div className="flex flex-col gap-space-xs">
                  <span className="font-label-sm text-label-sm uppercase text-on-surface-variant font-bold tracking-wider">Scope Deliverables Included:</span>
                  <ul className="flex flex-col gap-1 font-body-sm text-body-sm text-on-surface">
                    <li className="flex items-center gap-2"><span className="text-primary text-[14px] font-bold">✓</span><span>100% Client-Owned Terraform Source Repositories</span></li>
                    <li className="flex items-center gap-2"><span className="text-primary text-[14px] font-bold">✓</span><span>Zero-Downtime Data Migration & DNS Cutover</span></li>
                    <li className="flex items-center gap-2"><span className="text-primary text-[14px] font-bold">✓</span><span>Prometheus + Grafana Dashboard Integration</span></li>
                  </ul>
                </div>
              </div>
              <a className="inline-flex items-center justify-center font-label-lg text-label-lg bg-primary hover:bg-primary-container text-on-primary rounded-full px-space-md py-space-sm mt-space-lg shadow-[0_4px_14px_rgba(0,105,72,0.25)] transition-all hover:-translate-y-0.5 text-center w-full" href="#scoping-form">
                Lock In Scope & Schedule Survey
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full bg-surface-container-low py-space-xl scroll-mt-24" id="scoping-form">
        <div className="max-w-4xl mx-auto px-gutter flex flex-col gap-space-lg">
          <div className="text-center flex flex-col gap-space-xs">
            <span className="font-label-sm text-label-sm text-primary uppercase tracking-wider font-bold">DIRECT ARCHITECT ENGAGEMENT</span>
            <h2 className="font-headline-xl text-headline-xl text-on-surface tracking-tight">Schedule 30-Minute Technical Infrastructure Scoping Call</h2>
            <p className="font-body-md text-body-md text-on-surface-variant max-w-xl mx-auto">No junior sales reps. Speak directly with a Principal Infrastructure Architect. Mutual NDA protected automatically upon booking.</p>
          </div>
          <div className="bg-surface-container-lowest rounded-lg p-space-lg sm:p-space-xl shadow-[0_12px_32px_-4px_rgba(15,23,42,0.06)]">
            <form className="flex flex-col gap-space-md" onSubmit={(e) => { e.preventDefault(); setFormSuccess(true); }}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-md">
                <div className="flex flex-col gap-space-xs">
                  <label className="font-label-lg text-label-lg text-on-surface" htmlFor="full-name">Full Name *</label>
                  <input className="w-full px-space-md py-3 rounded-full bg-surface-container-low text-on-surface font-body-md placeholder:text-on-surface-variant/60 focus:bg-surface-container-lowest focus:outline-none focus:ring-2 focus:ring-primary transition-all" id="full-name" placeholder="e.g. Alex Henderson" required type="text" />
                </div>
                <div className="flex flex-col gap-space-xs">
                  <label className="font-label-lg text-label-lg text-on-surface" htmlFor="work-email">Work Email *</label>
                  <input className="w-full px-space-md py-3 rounded-full bg-surface-container-low text-on-surface font-body-md placeholder:text-on-surface-variant/60 focus:bg-surface-container-lowest focus:outline-none focus:ring-2 focus:ring-primary transition-all" id="work-email" placeholder="alex@company.com" required type="email" />
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-md">
                <div className="flex flex-col gap-space-xs">
                  <label className="font-label-lg text-label-lg text-on-surface" htmlFor="company-name">Company / Application Name *</label>
                  <input className="w-full px-space-md py-3 rounded-full bg-surface-container-low text-on-surface font-body-md placeholder:text-on-surface-variant/60 focus:bg-surface-container-lowest focus:outline-none focus:ring-2 focus:ring-primary transition-all" id="company-name" placeholder="e.g. PayVantage Networks" required type="text" />
                </div>
                <div className="flex flex-col gap-space-xs">
                  <label className="font-label-lg text-label-lg text-on-surface" htmlFor="provider-select">Current Hosting Provider</label>
                  <select className="w-full px-space-md py-3 rounded-full bg-surface-container-low text-on-surface font-body-md focus:bg-surface-container-lowest focus:outline-none focus:ring-2 focus:ring-primary transition-all" id="provider-select">
                    <option value="aws">Amazon Web Services (AWS)</option>
                    <option value="gcp">Google Cloud Platform (GCP)</option>
                    <option value="digitalocean">DigitalOcean</option>
                    <option value="hetzner">Hetzner / Bare Metal</option>
                    <option value="on-prem">On-Premise Private Datacenter</option>
                    <option value="other">Other / Multi-Cloud</option>
                  </select>
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-md">
                <div className="flex flex-col gap-space-xs">
                  <label className="font-label-lg text-label-lg text-on-surface" htmlFor="server-budget">Current Monthly Cloud Spend ($/mo)</label>
                  <input className="w-full px-space-md py-3 rounded-full bg-surface-container-low text-on-surface font-body-md placeholder:text-on-surface-variant/60 focus:bg-surface-container-lowest focus:outline-none focus:ring-2 focus:ring-primary transition-all" id="server-budget" placeholder="e.g. $4,500 / month" type="text" />
                </div>
                <div className="flex flex-col gap-space-xs">
                  <label className="font-label-lg text-label-lg text-on-surface" htmlFor="primary-goal">Primary Goal / Bottleneck</label>
                  <select className="w-full px-space-md py-3 rounded-full bg-surface-container-low text-on-surface font-body-md focus:bg-surface-container-lowest focus:outline-none focus:ring-2 focus:ring-primary transition-all" id="primary-goal">
                    <option value="cost">Slashing Cloud Invoices (40-70% savings)</option>
                    <option value="downtime">Eliminating Downtime & Outages (99.999% SLA)</option>
                    <option value="kubernetes">Modernizing to Kubernetes / GitOps</option>
                    <option value="compliance">HIPAA / SOC-2 / Regional Compliance</option>
                    <option value="disaster">Multi-Region Disaster Recovery</option>
                  </select>
                </div>
              </div>
              <div className="flex flex-col gap-space-xs">
                <label className="font-label-lg text-label-lg text-on-surface" htmlFor="project-notes">Architecture Notes or Constraints</label>
                <textarea className="w-full px-space-md py-3 rounded-lg bg-surface-container-low text-on-surface font-body-md placeholder:text-on-surface-variant/60 focus:bg-surface-container-lowest focus:outline-none focus:ring-2 focus:ring-primary transition-all" id="project-notes" placeholder="Tell us about your current stack, database size, traffic spikes, or compliance mandates..." rows={3}></textarea>
              </div>
              <div className="flex flex-col sm:flex-row items-center justify-between gap-space-md pt-space-xs">
                <div className="flex items-center gap-space-xs text-on-surface-variant font-body-sm text-body-sm">
                  <span className="material-symbols-outlined text-primary text-[20px]">lock</span>
                  <span>Mutual Non-Disclosure Agreement (NDA) automatically protected.</span>
                </div>
                <button className="inline-flex items-center justify-center font-label-lg text-label-lg bg-primary hover:bg-primary-container text-on-primary rounded-full px-space-lg py-space-sm shadow-[0_4px_14px_rgba(0,105,72,0.3)] transition-all hover:-translate-y-0.5 w-full sm:w-auto" type="submit">
                  Request 30-Min Architecture Session
                </button>
              </div>
              {formSuccess && (
                <div className="font-body-md text-body-md text-primary bg-primary-fixed/20 p-space-sm rounded-lg text-center font-semibold">
                  Thank you! Your infrastructure blueprint inquiry has been routed directly to our Principal SRE lead. We will respond within 4 business hours.
                </div>
              )}
            </form>
          </div>
        </div>
      </section>

      <section className="w-full bg-surface py-space-xl">
        <div className="max-w-4xl mx-auto px-gutter flex flex-col gap-space-lg">
          <div className="text-center flex flex-col gap-space-xs">
            <span className="font-label-sm text-label-sm text-primary uppercase tracking-wider font-bold">TECHNICAL CLARITY</span>
            <h2 className="font-headline-xl text-headline-xl text-on-surface tracking-tight">Frequently Asked Architecture Questions</h2>
          </div>
          <div className="flex flex-col gap-space-xs">
            {[
              { q: "How does dedicated bare-metal hosting compare to AWS/Azure for recurring costs?", a: "For workloads with constant compute requirements (e.g. databases, microservice meshes, caching layers), AWS and Azure charge heavy premiums on RAM, CPU reservation, and egress bandwidth ($0.09/GB). A dedicated modern AMD EPYC server (128 threads, 256GB RAM, NVMe RAID) hosted on Hetzner or Equinix Metal costs $250 - $450/month with unmetered bandwidth, compared to $2,200 - $3,500/month for equivalent EC2/RDS instances. Clients typically reduce total hosting spend by 60% to 75%." },
              { q: "How do you guarantee zero downtime during a live database migration?", a: "We use continuous change-data-capture (CDC) and streaming replication (PostgreSQL logical replication / WAL streaming or MySQL binary logging). Your existing cluster acts as master while the new target environment syncs continuously in the shadow background until data lag is sub-millisecond. During the scheduled cutover, we flip connection routers (pgBouncer / Envoy) and DNS records with 0 dropped write queries and 0 user-facing downtime." },
              { q: "Who owns the server accounts, licenses, and Infrastructure-as-Code scripts?", a: "You own 100% of everything from day one. All bare-metal provider accounts, cloud subscriptions, domain registrations, and SSL certificates are provisioned under your organization's legal name. Complete Terraform manifests, Ansible playbooks, and Helm charts are handed over into your private GitHub/GitLab repositories upon milestone acceptance." },
              { q: "What disaster recovery benchmarks (RTO/RPO) do you commit to in writing?", a: "Our standard multi-region and bare-metal packages contractually commit to a Recovery Point Objective (RPO) of < 60 seconds (data freshness) and a Recovery Time Objective (RTO) of < 4 minutes (full system availability in secondary datacenter). These metrics are validated via simulated disaster drill tests prior to final handover." },
              { q: "Can you assist with compliance frameworks like SOC 2, ISO 27001, and HIPAA?", a: "Yes. We enforce CIS benchmark Level-2 operating system hardening, automated audit logging (Auditd / Falco), encrypted storage at rest (LUKS / AES-256), encrypted transit (mTLS), and centralized secret rotation via HashiCorp Vault. We provide complete audit documentation required by compliance assessors." },
            ].map((faq, i) => (
              <div key={i} className="bg-surface-container-lowest rounded-lg overflow-hidden shadow-[0_2px_12px_rgba(15,23,42,0.03)]">
                <button className="faq-toggle w-full p-space-md flex items-center justify-between text-left font-headline-sm text-headline-sm text-on-surface hover:text-primary transition-colors" type="button" onClick={() => toggleFaq(i)}>
                  <span>{faq.q}</span>
                  <span className={`material-symbols-outlined text-[20px] transition-transform duration-200 ${openFaq === i ? "rotate-180" : ""}`}>expand_more</span>
                </button>
                <div className={`faq-content px-space-md pb-space-md text-on-surface-variant font-body-md text-body-md ${openFaq === i ? "" : "hidden"}`}>
                  {faq.a}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full bg-primary py-space-xl">
        <div className="max-w-7xl mx-auto px-gutter flex flex-col md:flex-row items-center justify-between gap-space-lg text-on-primary">
          <div className="flex flex-col gap-space-xs text-center md:text-left">
            <h2 className="font-headline-xl text-headline-xl text-on-primary tracking-tight">Ready to Slash Cloud Bills & Guarantee 99.999% Uptime?</h2>
            <p className="font-body-lg text-body-lg text-on-primary/90 max-w-xl">Reserve an architecture sprint slot with our principal infrastructure team. Fixed pricing, guaranteed delivery windows, zero vendor capture.</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-space-sm shrink-0 w-full sm:w-auto">
            <a className="inline-flex items-center justify-center font-label-lg text-label-lg bg-surface-container-lowest text-primary hover:bg-surface-container-low rounded-full px-space-lg py-space-md shadow-md transition-all hover:-translate-y-0.5 text-center" href="#scoping-form">
              Schedule 30-Min Scoping Call
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
