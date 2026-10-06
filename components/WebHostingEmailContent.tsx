"use client";

import type { JSX } from "react";
import { useState } from "react";
import Image from "next/image";

export default function WebHostingEmailContent(): JSX.Element {
  const [sites, setSites] = useState(1);
  const [mailboxes, setMailboxes] = useState(5);
  const [migration, setMigration] = useState(true);
  const [formSuccess, setFormSuccess] = useState(false);

  const setupCost = Math.min(Math.max(500 + (sites > 1 ? (sites - 1) * 200 : 0) + (mailboxes > 5 ? Math.ceil((mailboxes - 5) / 5) * 150 : 0) + (migration ? 250 : 0), 500), 3500);

  const baseMonthly = sites > 3 ? 149 : sites > 1 ? 69 : 29;
  const monthlyCost = (mailboxes > 25 && baseMonthly < 149) ? 149 : baseMonthly;

  return (
    <>
      <section className="relative w-full overflow-hidden bg-gradient-to-b from-surface-container-low via-surface to-surface pb-space-xl">
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[900px] h-[450px] bg-primary-fixed/20 blur-[130px] rounded-full pointer-events-none -z-0"></div>
        <div className="absolute top-48 right-10 w-[350px] h-[350px] bg-tertiary-fixed/30 blur-[100px] rounded-full pointer-events-none -z-0"></div>
        <div className="max-w-7xl mx-auto px-gutter relative z-10 pt-space-lg md:pt-space-xl">
          <div className="inline-flex items-center gap-space-xs bg-surface-container-lowest px-space-md py-1.5 rounded-full shadow-sm mb-space-md">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-primary"></span>
            </span>
            <span className="font-label-sm text-label-sm text-primary uppercase tracking-wider">Managed Web Hosting &amp; Business Email • 99.99% Uptime • Zero-Spam Guarantee</span>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg items-end mb-space-xl">
            <div className="lg:col-span-8 flex flex-col gap-space-sm">
              <h1 className="font-display-hero text-display-hero text-on-surface tracking-tight leading-[1.08]">
                Reliable Business Website Hosting &amp; Enterprise-Grade Email.
              </h1>
              <p className="font-body-xl text-body-xl text-on-surface-variant max-w-2xl">
                Fast, secure SSD cloud hosting paired with Google Workspace or Microsoft 365. Stop losing customer leads to spam folders or slow servers. Fixed setup sprint from $500 to $3,500 with zero headache.
              </p>
            </div>
            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-space-sm items-start lg:items-end justify-end">
              <a className="w-full sm:w-auto inline-flex items-center justify-center font-label-lg text-label-lg bg-primary hover:bg-primary-container text-on-primary px-space-lg py-space-sm rounded-full shadow-[0_4px_14px_rgba(5,150,105,0.25)] transition-all hover:-translate-y-0.5 text-center" href="#pricing-calculator">
                Explore Hosting &amp; Email Plans ($29 - $199/mo)
                <span className="material-symbols-outlined ml-1.5 text-[20px]">arrow_downward</span>
              </a>
              <a className="w-full sm:w-auto inline-flex items-center justify-center font-label-lg text-label-lg bg-surface-container-highest hover:bg-surface-container-high text-on-surface px-space-lg py-space-sm rounded-full transition-colors text-center" href="#scoping-audit">
                <span className="material-symbols-outlined mr-1.5 text-primary text-[18px]">verified_user</span>
                Schedule Free DNS &amp; Mail Audit
              </a>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-space-sm mb-space-xl">
            {[
              { icon: "speed", title: "99.99%", desc: "Uptime SLA Backed" },
              { icon: "mark_email_read", title: "100%", desc: "Inbox Deliverability (SPF/DKIM)" },
              { icon: "lock", title: "Free SSL", desc: "& Daily Cloud Backups" },
              { icon: "support_agent", title: "< 15 Mins", desc: "Staff Engineer Support" },
            ].map((badge, i) => (
              <div key={i} className="bg-surface-container-lowest p-space-md rounded-lg shadow-sm flex items-center gap-space-sm">
                <div className="w-10 h-10 rounded-full bg-primary-container/20 flex items-center justify-center text-primary flex-shrink-0">
                  <span className="material-symbols-outlined text-[22px]">{badge.icon}</span>
                </div>
                <div>
                  <span className="font-headline-sm text-headline-sm text-on-surface block">{badge.title}</span>
                  <span className="font-label-sm text-label-sm text-on-surface-variant uppercase">{badge.desc}</span>
                </div>
              </div>
            ))}
          </div>
          <div className="relative w-full bg-surface-container-lowest rounded-xl shadow-xl overflow-hidden p-space-sm md:p-space-md">
            <div className="flex items-center justify-between px-space-md py-space-xs bg-surface-container-low rounded-lg mb-space-sm">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-error"></div>
                <div className="w-3 h-3 rounded-full bg-amber-400"></div>
                <div className="w-3 h-3 rounded-full bg-primary"></div>
                <span className="font-body-sm text-body-sm text-on-surface-variant ml-2 hidden sm:inline">nexuscraft.systems/console/hosting-email-hub</span>
              </div>
              <div className="flex items-center gap-space-xs">
                <span className="font-label-sm text-label-sm bg-primary-container text-on-primary-container px-space-xs py-0.5 rounded-full">PRODUCTION CLUSTER ONLINE</span>
              </div>
            </div>
            <div className="relative rounded-lg overflow-hidden max-h-[560px]">
              <Image alt="NexusCraft Web Hosting and Business Email centralized dashboard on ultrawide curved monitor" className="w-full h-auto object-cover object-center" src="/images/web-hosting-email/hero.jpg" width={1440} height={560} priority />
              <div className="absolute bottom-4 left-4 right-4 md:right-auto md:bottom-6 md:left-6 flex flex-wrap gap-space-xs pointer-events-none">
                {[
                  { icon: "domain_verification", text: "Active Domains: 12 Protected" },
                  { icon: "verified", text: "DMARC: 100% Enforced (p=reject)" },
                  { icon: "sync_alt", text: "Google Workspace & M365 Sync: Active", hidden: "hidden sm:flex" },
                ].map((overlay, i) => (
                  <div key={i} className={`bg-inverse-surface/90 backdrop-blur-md text-inverse-on-surface px-space-md py-space-xs rounded-full shadow-lg flex items-center gap-space-xs pointer-events-auto ${overlay.hidden || ""}`}>
                    <span className="material-symbols-outlined text-primary-fixed text-[18px]">{overlay.icon}</span>
                    <span className="font-label-sm text-label-sm">{overlay.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full max-w-7xl mx-auto px-gutter py-space-xl">
        <div className="flex flex-col gap-space-xs mb-space-lg">
          <div className="flex items-center gap-space-xs">
            <span className="w-2 h-2 rounded-full bg-primary"></span>
            <span className="font-label-sm text-label-sm text-primary uppercase tracking-wider">Clear Fixed-Scope Deliverables</span>
          </div>
          <h2 className="font-headline-xl text-headline-xl text-on-surface">The 4 Core Hosting &amp; Email Services</h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">Predictable fixed sprint pricing with zero hidden billable hours. We configure rock-solid infrastructure and hand over keys with full team training.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-space-lg">
          {[
            { num: "01", time: "1–3 Business Days", title: "Managed NVMe Cloud Web Hosting", desc: "Engineered for WordPress, WooCommerce, PHP apps, and Static JAMstack sites. Enterprise LiteSpeed caching layer with automated daily offsite cold-storage snapshots.", features: ["Sub-600ms TTFB on isolated NVMe SSD clusters", "Free AutoSSL (Let's Encrypt / Sectigo wildcard)", "Redis Object Cache & 1-click staging environments", "WAF Firewall & real-time proactive brute-force shielding"], price: "$500 – $1,200", link: "#scoping-audit", cta: "Deploy Host" },
            { num: "02", time: "2–4 Business Days", title: "Corporate Business Email Migration", desc: "Cut ties with antiquated webmail or unreliable POP3/IMAP accounts. Seamless migration to Google Workspace or Microsoft 365 with zero lost emails or downtime.", features: ["Full mailbox, historical folder, calendar & contact transfer", "Branded you@company.com addresses with multi-device sync", "Outlook & Gmail web client device onboarding manuals", "Team shared inboxes (info@, sales@, billing@) configured"], price: "$600 – $1,800", link: "#scoping-audit", cta: "Migrate Mail" },
            { num: "03", time: "1–2 Business Days", title: "100% Inbox Deliverability & DNS Hardening", desc: "Eliminate junk-box quarantine. We configure SPF, DKIM 2048-bit keys, DMARC policy enforcement, and Google/Yahoo 2024 compliance so your client quotes get read.", features: ["SPF TXT string syntax audit & alignment optimization", "2048-bit DKIM private/public cryptographic signatures", "Strict DMARC Policy (p=reject or quarantine) + RUA reports", "BIMI verified brand logo display inside recipient inboxes"], price: "$500 – $1,500", link: "#scoping-audit", cta: "Fix Deliverability" },
            { num: "04", badge: "Recommended Turnkey", time: "", title: "All-in-One Turnkey Web &amp; Email Starter Bundle", desc: "The full foundational stack for new ventures, spin-offs, or total company rebrandings. Complete hands-off handover within 5 business days.", features: ["Domain registration, DNSSEC routing & nameserver locks", "Ultra-fast cloud web hosting setup with SSL & Redis cache", "Up to 25 Google Workspace or M365 mailboxes configured", "Branded email HTML signatures + 90 days warranty & monitoring"], price: "$1,200 – $3,500", link: "#pricing-calculator", cta: "Build Bundle" },
          ].map((service, i) => (
            <div key={i} className="bg-surface-container-lowest p-space-lg rounded-lg shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
              <div>
                <div className="flex items-start justify-between mb-space-sm">
                  <span className="font-headline-sm text-headline-sm text-primary font-bold">{service.num}</span>
                  <span className="font-label-sm text-label-sm bg-primary-container text-on-primary-container px-space-xs py-0.5 rounded-full">{service.time || service.badge}</span>
                </div>
                <h3 className="font-headline-md text-headline-md text-on-surface mb-space-xs">{service.title}</h3>
                <p className="font-body-md text-body-md text-on-surface-variant mb-space-md">{service.desc}</p>
                <ul className="flex flex-col gap-space-xs mb-space-lg font-body-md text-body-md text-on-surface">
                  {service.features.map((f, j) => (
                    <li key={j} className="flex items-center gap-space-xs">
                      <span className="material-symbols-outlined text-primary text-[18px]">check_circle</span>
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="pt-space-md bg-surface-container-low -mx-space-lg -mb-space-lg px-space-lg py-space-sm rounded-b-lg flex items-center justify-between">
                <div>
                  <span className="font-body-sm text-body-sm text-on-surface-variant block">Setup sprint</span>
                  <span className="font-headline-sm text-headline-sm text-on-surface">{service.price}</span>
                </div>
                <a className="font-label-lg text-label-lg text-primary hover:text-primary-container font-semibold inline-flex items-center gap-1" href={service.link}>
                  {service.cta} <span className="material-symbols-outlined text-[18px]">chevron_right</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="w-full bg-surface-container-low py-space-xl">
        <div className="max-w-7xl mx-auto px-gutter">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-center">
            <div className="lg:col-span-5 flex flex-col gap-space-md">
              <div className="inline-flex items-center gap-space-xs bg-surface-container-lowest px-space-md py-1 rounded-full shadow-sm w-fit">
                <span className="material-symbols-outlined text-primary text-[18px]">security</span>
                <span className="font-label-sm text-label-sm text-primary uppercase">Cryptographic Architecture</span>
              </div>
              <h2 className="font-headline-xl text-headline-xl text-on-surface">The 100% Inbox Deliverability Pipeline</h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant">In 2024, Google and Yahoo instituted strict sender mandates: missing cryptographic records mean instant spam placement or permanent domain blacklisting. Here is how NexusCraft engineers your DNS records for bulletproof reputation.</p>
              <div className="flex flex-col gap-space-sm mt-space-xs">
                {[
                  { badge: "SPF & DKIM", title: "Origin Authentication", desc: "Sender Policy Framework locks authorized sending IPs, while 2048-bit DKIM hashes verify that messages have never been altered in transit." },
                  { badge: "DMARC p=reject", title: "Zero Phishing Spoofing", desc: "Instructs receiving servers (Outlook, Gmail, Apple Mail) to discard unauthorized spoofed emails pretending to come from your executives." },
                  { badge: "BIMI Protocol", title: "Verified Inbox Brand Avatar", desc: "Displays your official vector SVG logo and blue verification badge right beside your subject line in Gmail & Apple Mail for immediate client trust." },
                ].map((step, i) => (
                  <div key={i} className="bg-surface-container-lowest p-space-md rounded-lg shadow-sm">
                    <div className="flex items-center gap-space-xs mb-1">
                      <span className="font-label-sm text-label-sm bg-primary-container text-on-primary-container px-2 py-0.5 rounded-full">{step.badge}</span>
                      <span className="font-headline-sm text-headline-sm text-on-surface">{step.title}</span>
                    </div>
                    <p className="font-body-md text-body-md text-on-surface-variant">{step.desc}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:col-span-7 flex flex-col gap-space-sm">
              <div className="bg-surface-container-lowest p-space-md rounded-xl shadow-lg">
                <div className="flex items-center justify-between pb-space-xs mb-space-sm">
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary text-[20px]">hub</span>
                    <span className="font-headline-sm text-headline-sm text-on-surface">End-to-End Mail Security Flow</span>
                  </div>
                  <span className="font-label-sm text-label-sm bg-primary-fixed text-on-primary-fixed-variant px-2 py-0.5 rounded-full font-bold">100% SPAM-FREE SCORE</span>
                </div>
                <div className="rounded-lg overflow-hidden bg-surface-container">
                  <Image alt="Diagram of SPF, DKIM, DMARC, Cloud Email Platforms and Inbound Outbound Security Gateways with 100% spam-free reputation score" className="w-full h-auto object-contain" src="/images/web-hosting-email/pipeline.jpg" width={1440} height={500} />
                </div>
                <div className="grid grid-cols-3 gap-space-sm mt-space-md pt-space-sm text-center">
                  <div>
                    <span className="font-headline-sm text-headline-sm text-primary block">0.0%</span>
                    <span className="font-body-sm text-body-sm text-on-surface-variant">Spam Rate Target</span>
                  </div>
                  <div>
                    <span className="font-headline-sm text-headline-sm text-on-surface block">2048 Bit</span>
                    <span className="font-body-sm text-body-sm text-on-surface-variant">DKIM Key Strength</span>
                  </div>
                  <div>
                    <span className="font-headline-sm text-headline-sm text-tertiary block">100%</span>
                    <span className="font-body-sm text-body-sm text-on-surface-variant">TLS 1.3 Encryption</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full max-w-7xl mx-auto px-gutter py-space-xl">
        <div className="text-center max-w-3xl mx-auto mb-space-xl">
          <span className="font-label-sm text-label-sm text-primary uppercase tracking-wider mb-space-xs block">Engineering Depth Benchmark</span>
          <h2 className="font-headline-xl text-headline-xl text-on-surface mb-space-xs">Generic Shared Hosting vs. The NexusCraft Managed Advantage</h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant">Why low-cost $5/mo shared hosting ends up costing thousands in missed customer leads, slow loading times, and blacklisted corporate emails.</p>
        </div>
        <div className="w-full bg-surface-container-lowest rounded-xl shadow-md overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-[700px]">
            <thead>
              <tr className="bg-surface-container-high text-on-surface font-headline-sm text-headline-sm">
                <th className="p-space-md w-1/3">Infrastructure Dimension</th>
                <th className="p-space-md w-1/3 text-on-surface-variant">Generic Shared Hosting<br /><span className="font-body-sm text-body-sm font-normal">(GoDaddy, Bluehost, HostGator)</span></th>
                <th className="p-space-md w-1/3 bg-primary text-on-primary rounded-t-lg">NexusCraft Managed Suite<br /><span className="font-body-sm text-body-sm font-normal text-on-primary/90">(NVMe Cloud + Google / M365)</span></th>
              </tr>
            </thead>
            <tbody className="font-body-md text-body-md divide-y divide-surface-container-high/40 text-on-surface">
              {[
                { dim: "Page Load Speed & TTFB", a: "3.5s - 6.0s (Throttled spinning HDDs)", error: true, c: "Sub-600ms (Dedicated NVMe + Redis Cache)" },
                { dim: "Server Neighbors & Security", a: "5,000+ noisy shared sites on 1 server. One hack can affect your site.", c: "Isolated Linux Cloud Containers with strictly fenced CPU/RAM limits." },
                { dim: "Email Inbox Deliverability", a: "Shared blacklisted IPs. Invoices land in Spam.", error: true, c: "100% Direct Google/M365 Cloud + Full DMARC" },
                { dim: "Daily Backups & Disaster Recovery", a: "Paid upsell ($50-100/yr), often unverified or overwritten weekly.", c: "Included daily immutable 30-day offsite cold storage backups." },
                { dim: "Technical Support Caliber", a: "Tier-1 overseas chatbot & phone queues with 48h resolution time.", c: "Sub-15 min direct Senior Systems Engineer SLA." },
                { dim: "Setup & Migration Hassle", a: "100% DIY. You break DNS records, miss emails, and debug errors.", c: "White-glove 48-hour turnkey migration managed by our staff leads." },
              ].map((row, i) => (
                <tr key={i} className="hover:bg-surface-container-low transition-colors">
                  <td className="p-space-md font-semibold">{row.dim}</td>
                  <td className={`p-space-md ${row.error ? "text-error flex items-center gap-1.5" : "text-on-surface-variant"}`}>
                    {row.error && <span className="material-symbols-outlined text-[20px]">cancel</span>}
                    {row.a}
                  </td>
                  <td className={`p-space-md ${row.error ? "" : "font-semibold text-primary bg-primary/5"}`}>
                    {!row.error && <div className="flex items-center gap-1.5"><span className="material-symbols-outlined text-[20px]">check_circle</span></div>}
                    {row.c}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="w-full bg-surface-container-low py-space-xl" id="pricing-calculator">
        <div className="max-w-7xl mx-auto px-gutter">
          <div className="text-center max-w-3xl mx-auto mb-space-xl">
            <span className="font-label-sm text-label-sm text-primary uppercase tracking-wider mb-space-xs block">Transparent Turnkey Packages</span>
            <h2 className="font-headline-xl text-headline-xl text-on-surface mb-space-xs">Fixed Setup Sprint + Monthly Managed Care</h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant">No vague retainers or unmetered consulting overages. Pick the right tier for your current organization size and scale effortlessly as you grow.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-space-lg items-stretch">
            {[
              { badge: "Small Business & Clinics", title: "Starter Business Web & Mail", price: "$500", sub: "one-time setup", monthly: "+ $29 / month hosting SLA", desc: "Ideal for single-location companies, local professional services, and solo founders.", features: ["1 Production Domain + Free Wildcard SSL", "15 GB High-Speed NVMe Storage", "Up to 5 Business Mailboxes Configured", "Full SPF & DKIM DNS records", "Daily automated 14-day offsite backups"], cta: "Select Starter Plan", highlight: false },
              { badge: "Growing Ventures & Law Firms", title: "Growing Company Pro Suite", price: "$1,200", sub: "one-time setup", monthly: "+ $69 / month hosting SLA", desc: "Comprehensive web infrastructure and bulletproof Google Workspace or Microsoft 365 alignment.", features: ["Up to 3 Production Websites & Staging Areas", "50 GB NVMe Storage + Redis Object Cache", "Up to 20 Google / M365 Mailboxes Migrated", "Full DMARC (p=quarantine/reject) + BIMI Logo", "Daily 30-day offsite snapshots + instant rollback", "Proactive WordPress/WooCommerce plugin patching"], cta: "Select Pro Suite", highlight: true },
              { badge: "Agencies & Multi-Brand", title: "Agency & High-Traffic Multi-Site", price: "$2,500", sub: "one-time setup", monthly: "+ $149 / month hosting SLA", desc: "High-concurrency cluster for e-commerce, portfolio networks, or busy agency client portals.", features: ["Up to 10 Websites + Dedicated Cloud IP Address", "150 GB Ultra NVMe Storage with LiteSpeed Enterprise", "Up to 50 Mailboxes with White-Glove Onboarding", "Priority 24/7 Phone & Emergency Escalation", "Automated Real-Time Malware Disinfection Guarantee"], cta: "Select Agency Plan", highlight: false },
            ].map((tier, i) => (
              <div key={i} className={`bg-surface-container-lowest p-space-lg rounded-lg shadow-sm flex flex-col justify-between relative ${tier.highlight ? "shadow-xl ring-2 ring-primary" : ""}`}>
                {tier.highlight && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-primary text-on-primary px-space-md py-0.5 rounded-full font-label-sm text-label-sm tracking-wider uppercase shadow-sm">
                    Most Popular For SMBs
                  </div>
                )}
                <div>
                  <div className="flex items-center justify-between mb-space-xs">
                    <span className="font-label-sm text-label-sm bg-secondary-container text-on-secondary-container px-2.5 py-0.5 rounded-full">{tier.badge}</span>
                  </div>
                  <h3 className="font-headline-md text-headline-md text-on-surface mb-space-xs">{tier.title}</h3>
                  <p className="font-body-md text-body-md text-on-surface-variant mb-space-md">{tier.desc}</p>
                  <div className="mb-space-lg">
                    <div className="flex items-baseline gap-1">
                      <span className={`font-display-hero text-headline-xl ${tier.highlight ? "text-primary" : "text-on-surface"}`}>{tier.price}</span>
                      <span className="font-body-md text-body-md text-on-surface-variant">{tier.sub}</span>
                    </div>
                    <div className="flex items-baseline gap-1 text-primary">
                      <span className="font-headline-sm text-headline-sm font-bold">{tier.monthly.split("+ ")[1].split(" /")[0]}</span>
                      <span className="font-body-sm text-body-sm">/ month hosting SLA</span>
                    </div>
                  </div>
                  <ul className="flex flex-col gap-space-xs mb-space-lg font-body-md text-body-md text-on-surface">
                    {tier.features.map((feat, j) => (
                      <li key={j} className="flex items-center gap-space-xs">
                        <span className="material-symbols-outlined text-primary text-[18px]">check_circle</span>
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <a className={`w-full inline-flex items-center justify-center font-label-lg text-label-lg rounded-full py-space-sm transition-colors text-center ${tier.highlight ? "bg-primary hover:bg-primary-container text-on-primary shadow-[0_4px_14px_rgba(5,150,105,0.25)] hover:-translate-y-0.5" : "bg-surface-container-highest hover:bg-surface-container-high text-on-surface"}`} href="#scoping-audit">
                  {tier.cta}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full max-w-7xl mx-auto px-gutter py-space-xl">
        <div className="bg-surface-container-lowest p-space-lg md:p-space-xl rounded-xl shadow-md">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-xl">
            <div className="lg:col-span-7 flex flex-col gap-space-lg">
              <div>
                <span className="font-label-sm text-label-sm text-primary uppercase tracking-wider block mb-1">Instant Interactive Estimator</span>
                <h3 className="font-headline-lg text-headline-lg text-on-surface">Custom Setup &amp; Monthly Sizing Calculator</h3>
                <p className="font-body-md text-body-md text-on-surface-variant">Adjust your exact parameters below. See your guaranteed one-time sprint price and running infrastructure costs update immediately.</p>
              </div>
              <div className="flex flex-col gap-space-md">
                <div className="flex flex-col gap-1.5">
                  <div className="flex justify-between items-center">
                    <label className="font-headline-sm text-headline-sm text-on-surface" htmlFor="sites-range">Number of Websites to Host</label>
                    <span className="font-label-lg text-label-lg text-primary font-bold bg-primary/10 px-2.5 py-0.5 rounded-full">{sites === 1 ? '1 Website' : `${sites} Websites`}</span>
                  </div>
                  <input className="w-full accent-primary cursor-pointer h-2 bg-surface-container rounded-lg" id="sites-range" max="10" min="1" type="range" value={sites} onChange={(e) => setSites(parseInt(e.target.value, 10))} />
                  <div className="flex justify-between text-[11px] text-on-surface-variant">
                    <span>1 Site</span>
                    <span>3 Sites</span>
                    <span>5 Sites</span>
                    <span>10+ Sites</span>
                  </div>
                </div>
                <div className="flex flex-col gap-1.5">
                  <div className="flex justify-between items-center">
                    <label className="font-headline-sm text-headline-sm text-on-surface" htmlFor="mailboxes-range">Number of Business Mailboxes</label>
                    <span className="font-label-lg text-label-lg text-primary font-bold bg-primary/10 px-2.5 py-0.5 rounded-full">{mailboxes === 1 ? '1 Mailbox' : `${mailboxes} Mailboxes`}</span>
                  </div>
                  <input className="w-full accent-primary cursor-pointer h-2 bg-surface-container rounded-lg" id="mailboxes-range" max="50" min="1" type="range" value={mailboxes} onChange={(e) => setMailboxes(parseInt(e.target.value, 10))} />
                  <div className="flex justify-between text-[11px] text-on-surface-variant">
                    <span>1 Mailbox</span>
                    <span>15 Mailboxes</span>
                    <span>30 Mailboxes</span>
                    <span>50+ Mailboxes</span>
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <label className="font-headline-sm text-headline-sm text-on-surface">Target Business Email Suite</label>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-space-xs">
                    {["google", "microsoft", "private"].map((provider) => (
                      <label key={provider} className="flex items-center gap-2 p-space-sm bg-surface-container-low rounded-lg cursor-pointer hover:bg-surface-container transition-colors">
                        <input defaultChecked={provider === "google"} className="accent-primary" name="email-provider" type="radio" value={provider} />
                        <span className="font-body-md text-body-md text-on-surface">{provider === "google" ? "Google Workspace" : provider === "microsoft" ? "Microsoft 365" : "Private Webmail"}</span>
                      </label>
                    ))}
                  </div>
                </div>
                <div className="flex items-center justify-between p-space-sm bg-surface-container-low rounded-lg">
                  <div>
                    <span className="font-headline-sm text-headline-sm text-on-surface block">Data Migration Needed?</span>
                    <span className="font-body-sm text-body-sm text-on-surface-variant">Transfer old email archives, contacts & WordPress database</span>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input checked={migration} className="sr-only peer" id="migration-toggle" type="checkbox" onChange={(e) => setMigration(e.target.checked)} />
                    <div className="w-11 h-6 bg-surface-container-highest peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                  </label>
                </div>
              </div>
            </div>
            <div className="lg:col-span-5 bg-surface-container-high p-space-lg rounded-xl flex flex-col justify-between">
              <div className="flex flex-col gap-space-md">
                <span className="font-label-sm text-label-sm bg-surface-container-lowest text-on-surface px-space-xs py-0.5 rounded-full w-fit">LIVE CONFIGURATION ESTIMATE</span>
                <div>
                  <span className="font-body-sm text-body-sm text-on-surface-variant block">Estimated One-Time Fixed Setup:</span>
                  <span className="font-display-hero text-display-hero text-on-surface font-extrabold leading-none">${setupCost.toLocaleString()}</span>
                  <span className="font-body-sm text-body-sm text-on-surface-variant block mt-1">Includes white-glove DNS, DMARC, SSL & account onboarding.</span>
                </div>
                <div className="pt-space-sm border-t border-on-surface/10">
                  <span className="font-body-sm text-body-sm text-on-surface-variant block">Ongoing Monthly Infrastructure:</span>
                  <div className="flex items-baseline gap-1">
                    <span className="font-headline-xl text-headline-xl text-primary font-bold">${monthlyCost}</span>
                    <span className="font-body-md text-body-md text-on-surface-variant">/ month hosting SLA</span>
                  </div>
                  <span className="font-body-sm text-body-sm text-on-surface-variant block mt-0.5">+ Provider seat fees directly to Google/Microsoft ($6–$12.50/seat/mo).</span>
                </div>
                <div className="p-space-sm bg-surface-container-lowest rounded-lg flex items-start gap-2 text-on-surface">
                  <span className="material-symbols-outlined text-primary text-[20px] mt-0.5">verified_user</span>
                  <p className="font-body-sm text-body-sm">Zero surprise hourly invoices. Complete setup guaranteed delivered within 3-5 days.</p>
                </div>
              </div>
              <a className="mt-space-md w-full inline-flex items-center justify-center font-label-lg text-label-lg bg-primary hover:bg-primary-container text-on-primary py-space-sm rounded-full shadow-[0_4px_14px_rgba(5,150,105,0.25)] transition-all hover:-translate-y-0.5" href="#scoping-audit">
                Lock In This Estimate
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full max-w-7xl mx-auto px-gutter py-space-xl">
        <div className="text-center max-w-3xl mx-auto mb-space-xl">
          <span className="font-label-sm text-label-sm text-primary uppercase tracking-wider mb-space-xs block">Documented Results</span>
          <h2 className="font-headline-xl text-headline-xl text-on-surface mb-space-xs">Real Companies Rescued from Broken Hosting &amp; Spam Boxes</h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant">From legal contracts stuck in recipient spam folders to e-commerce checkouts losing sales from 4-second loading times.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-space-lg">
          {[
            { tag: "LEGAL & CORPORATE SERVICES", location: "Dubai & London", title: "Boutique Commercial Law Firm (18 Partners)", desc: "We were in a crisis: time-sensitive settlement agreements and closing documents were bouncing or landing in corporate spam filters because our previous shared host had blacklisted IP ranges. NexusCraft migrated all 18 mailboxes to Microsoft 365 in 48 hours, hardened our DMARC to 100% strict rejection, and we haven't had a single dropped communication since.", stats: [{ title: "18 Mailboxes", value: "Zero Lost Messages" }, { title: "0% Spam Filter", value: "100% DMARC Enforced" }] },
            { tag: "HIGH-CONCURRENCY E-COMMERCE", location: "WooCommerce Retailer", title: "Direct-to-Consumer Lifestyle Brand (15,000 SKUs)", desc: "During marketing flash sales, our WooCommerce site would freeze with 504 Gateway errors on generic cPanel hosting. NexusCraft transferred us to their dedicated NVMe LiteSpeed cluster with Redis object caching. Our page load dropped from 4.2 seconds to 650 milliseconds, and checkout abandonment immediately dropped by 26%.", stats: [{ title: "650ms TTFB", value: "Down from 4.2s" }, { title: "-26% Drops", value: "Cart Abandonment Reduced" }] },
          ].map((cs, i) => (
            <div key={i} className="bg-surface-container-lowest p-space-lg rounded-lg shadow-sm flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-space-sm">
                  <span className="font-label-sm text-label-sm bg-secondary-container text-on-secondary-container px-2.5 py-0.5 rounded-full font-semibold">{cs.tag}</span>
                  <span className="font-body-sm text-body-sm text-on-surface-variant">{cs.location}</span>
                </div>
                <h3 className="font-headline-md text-headline-md text-on-surface mb-space-xs">{cs.title}</h3>
                <p className="font-body-md text-body-md text-on-surface-variant mb-space-md">{cs.desc}</p>
              </div>
              <div className="grid grid-cols-2 gap-space-xs pt-space-md border-t border-surface-container-high">
                {cs.stats.map((stat, j) => (
                  <div key={j}>
                    <span className="font-headline-sm text-headline-sm text-primary font-bold">{stat.title}</span>
                    <span className="font-body-sm text-body-sm text-on-surface-variant block">{stat.value}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="w-full bg-surface-container py-space-xl" id="scoping-audit">
        <div className="max-w-7xl mx-auto px-gutter">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-center">
            <div className="lg:col-span-5 flex flex-col gap-space-sm">
              <div className="inline-flex items-center gap-space-xs bg-surface-container-lowest px-space-md py-1 rounded-full shadow-sm w-fit">
                <span className="material-symbols-outlined text-primary text-[18px]">verified</span>
                <span className="font-label-sm text-label-sm text-primary uppercase">No-Obligation Diagnostic</span>
              </div>
              <h2 className="font-headline-xl text-headline-xl text-on-surface">Request a Free 24-Hour Domain &amp; Email Deliverability Audit</h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant">Enter your domain. Our systems engineers will run a full cryptographic DNS diagnostic, inspect your SPF/DKIM/DMARC health, scan for IP blacklisting, and provide a clear remediation blueprint.</p>
              <div className="flex flex-col gap-space-xs mt-space-sm font-body-md text-body-md text-on-surface">
                <div className="flex items-center gap-space-xs">
                  <span className="material-symbols-outlined text-primary text-[20px]">schedule</span>
                  <span>Audit report delivered directly to your inbox within 24 hours</span>
                </div>
                <div className="flex items-center gap-space-xs">
                  <span className="material-symbols-outlined text-primary text-[20px]">lock_reset</span>
                  <span>Zero access credentials required—we analyze public DNS records</span>
                </div>
                <div className="flex items-center gap-space-xs">
                  <span className="material-symbols-outlined text-primary text-[20px]">person_check</span>
                  <span>Option to book a 30-min scoping call with a senior engineer</span>
                </div>
              </div>
            </div>
            <div className="lg:col-span-7 bg-surface-container-lowest p-space-lg md:p-space-xl rounded-xl shadow-lg">
              {!formSuccess ? (
                <form className="flex flex-col gap-space-md" onSubmit={(e) => { e.preventDefault(); setFormSuccess(true); }}>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-md">
                    <div className="flex flex-col gap-1.5">
                      <label className="font-label-lg text-label-lg text-on-surface" htmlFor="company-name">Company or Firm Name</label>
                      <input className="w-full px-space-md py-3 bg-surface-container-low rounded-lg text-on-surface font-body-md text-body-md focus:bg-surface-container-lowest focus:outline-none focus:ring-2 focus:ring-primary transition-all" id="company-name" placeholder="Acme Legal Group" required type="text" />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label className="font-label-lg text-label-lg text-on-surface" htmlFor="website-domain">Website Domain</label>
                      <input className="w-full px-space-md py-3 bg-surface-container-low rounded-lg text-on-surface font-body-md text-body-md focus:bg-surface-container-lowest focus:outline-none focus:ring-2 focus:ring-primary transition-all" id="website-domain" placeholder="company.com" required type="text" />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-md">
                    <div className="flex flex-col gap-1.5">
                      <label className="font-label-lg text-label-lg text-on-surface" htmlFor="work-email">Your Work Email Address</label>
                      <input className="w-full px-space-md py-3 bg-surface-container-low rounded-lg text-on-surface font-body-md text-body-md focus:bg-surface-container-lowest focus:outline-none focus:ring-2 focus:ring-primary transition-all" id="work-email" placeholder="you@company.com" required type="email" />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label className="font-label-lg text-label-lg text-on-surface" htmlFor="current-host">Current Hosting / Email Provider</label>
                      <select className="w-full px-space-md py-3 bg-surface-container-low rounded-lg text-on-surface font-body-md text-body-md focus:bg-surface-container-lowest focus:outline-none focus:ring-2 focus:ring-primary transition-all" id="current-host">
                        <option>GoDaddy / Bluehost / HostGator</option>
                        <option>Google Workspace (Existing)</option>
                        <option>Microsoft 365 (Existing)</option>
                        <option>Private cPanel / Webmail</option>
                        <option>New Project / Not Launched Yet</option>
                      </select>
                    </div>
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="font-label-lg text-label-lg text-on-surface" htmlFor="primary-pain">Primary Pain Point or Objective</label>
                    <select className="w-full px-space-md py-3 bg-surface-container-low rounded-lg text-on-surface font-body-md text-body-md focus:bg-surface-container-lowest focus:outline-none focus:ring-2 focus:ring-primary transition-all" id="primary-pain">
                      <option>Emails frequently ending up in recipient spam / junk folders</option>
                      <option>Website is painfully slow (need fast NVMe cloud migration)</option>
                      <option>Need clean migration to Google Workspace or Microsoft 365</option>
                      <option>Brand new business: need complete domain, mail & web setup</option>
                      <option>Other / Comprehensive technical review</option>
                    </select>
                  </div>
                  <div className="flex items-center gap-space-xs">
                    <input defaultChecked className="accent-primary w-4 h-4 rounded" id="audit-call-check" type="checkbox" />
                    <label className="font-body-sm text-body-sm text-on-surface-variant" htmlFor="audit-call-check">Include direct 30-minute scoping call invitation with our Senior Infrastructure Lead</label>
                  </div>
                  <button className="w-full inline-flex items-center justify-center font-label-lg text-label-lg bg-primary hover:bg-primary-container text-on-primary py-space-sm rounded-full shadow-[0_4px_14px_rgba(5,150,105,0.25)] transition-all hover:-translate-y-0.5" type="submit">
                    Generate Free Audit & Scoping Blueprint
                    <span className="material-symbols-outlined ml-1.5 text-[20px]">arrow_forward</span>
                  </button>
                </form>
              ) : (
                <div className="p-space-lg bg-primary-fixed/20 rounded-lg text-center flex flex-col items-center gap-space-xs">
                  <span className="material-symbols-outlined text-primary text-[40px]">check_circle</span>
                  <h4 className="font-headline-md text-headline-md text-on-surface">Audit Initiated Successfully</h4>
                  <p className="font-body-md text-body-md text-on-surface-variant max-w-md">Our DNS crawler is now analyzing your domain records. You will receive the comprehensive deliverability and speed audit at your provided email shortly.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="w-full max-w-7xl mx-auto px-gutter py-space-xl">
        <div className="text-center max-w-3xl mx-auto mb-space-xl">
          <span className="font-label-sm text-label-sm text-primary uppercase tracking-wider mb-space-xs block">Technical Clarity</span>
          <h2 className="font-headline-xl text-headline-xl text-on-surface mb-space-xs">Frequently Asked Questions</h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant">Everything you need to know about our business hosting, DNS hardening, and zero-downtime email migration protocol.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-space-md">
          {[
            { q: "Will we lose any incoming emails during the mailbox migration?", a: "Zero emails will be lost. We configure dual-delivery routing and lowered DNS TTLs (Time-to-Live) 48 hours prior to cutover. New emails automatically queue while old historical archives, folders, and attachments are synchronized in the background." },
            { q: "What is the difference between SPF, DKIM, and DMARC?", a: "SPF tells receiving servers which IP addresses are authorized to send mail for your domain. DKIM attaches a tamper-proof cryptographic signature to every outgoing email. DMARC tells recipient filters (like Outlook or Gmail) to completely discard or quarantine any message claiming to be from your domain that fails SPF or DKIM." },
            { q: "Do I still pay Google or Microsoft for mailbox licenses?", a: "Yes. Google Workspace seats are billed directly to you ($6–$14/user/mo) and Microsoft 365 Business licenses are billed directly through Microsoft. NexusCraft handles the engineering, DNS hardening, initial data migration, and ongoing SLA maintenance so you have zero admin headaches." },
            { q: "Can I migrate an existing WordPress or WooCommerce site?", a: "Yes. We perform complete white-glove site migrations: databases, media libraries, plugins, and custom configurations are duplicated to our staging servers, verified for zero bugs, and then switched live with negligible downtime (typically under 60 seconds)." },
            { q: "How do daily backups and emergency restores work?", a: "Automated snapshots run every 24 hours and are transmitted encrypted to geographically separate cold-storage AWS S3 vaults. Should you ever make a catastrophic edit or suffer a plugin conflict, our engineering team can roll your entire site or single mailbox back within 15 minutes." },
            { q: "What if we want to add more mailboxes or subdomains later?", a: "All packages are dynamically elastic. Simply send a note to your assigned NexusCraft engineer or use your console to request additional user provisioning. We enforce our security baseline rules on all new team members automatically." },
          ].map((faq, i) => (
            <div key={i} className="bg-surface-container-lowest p-space-md rounded-lg shadow-sm">
              <h3 className="font-headline-sm text-headline-sm text-on-surface mb-space-xs">{faq.q}</h3>
              <p className="font-body-md text-body-md text-on-surface-variant">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="w-full bg-gradient-to-r from-inverse-surface via-inverse-surface to-inverse-surface text-inverse-on-surface py-space-xl">
        <div className="max-w-7xl mx-auto px-gutter flex flex-col md:flex-row items-center justify-between gap-space-lg">
          <div className="flex flex-col gap-space-xs max-w-2xl">
            <span className="font-label-sm text-label-sm text-primary-fixed uppercase tracking-wider">Zero Headaches • Fixed Sprint Pricing</span>
            <h2 className="font-headline-xl text-headline-xl text-on-primary">Ready to Upgrade Your Corporate Web &amp; Email Infrastructure?</h2>
            <p className="font-body-lg text-body-lg text-surface-dim">Stop wondering if your proposals are landing in spam. Get enterprise cloud speed, 100% email deliverability, and sub-15 min senior engineering support today.</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-space-sm w-full md:w-auto">
            <a className="inline-flex items-center justify-center font-label-lg text-label-lg bg-primary hover:bg-primary-container text-on-primary px-space-lg py-space-sm rounded-full shadow-lg transition-all text-center" href="#scoping-audit">
              Schedule Scoping Call
            </a>
            <a className="inline-flex items-center justify-center font-label-lg text-label-lg bg-surface-container-lowest/10 hover:bg-surface-container-lowest/20 text-on-primary px-space-lg py-space-sm rounded-full transition-colors text-center" href="#pricing-calculator">
              View Plans &amp; Rates
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
