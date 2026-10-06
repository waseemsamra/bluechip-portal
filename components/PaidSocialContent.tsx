"use client";

import type { JSX } from "react";
import { useState } from "react";
import Image from "next/image";

export default function PaidSocialContent(): JSX.Element {
  const [budget, setBudget] = useState(25000);
  const [aov, setAov] = useState(120);
  const [platformMult, setPlatformMult] = useState(4.8);
  const [formSuccess, setFormSuccess] = useState(false);

  const estRevenue = budget * platformMult;
  const lowerRoas = (platformMult * 0.88).toFixed(1);
  const upperRoas = (platformMult * 1.12).toFixed(1);
  const estOrders = Math.round(estRevenue / aov);

  return (
    <>
      <section className="relative w-full overflow-hidden px-gutter pt-space-lg pb-space-xl">
        <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-space-xs px-space-md py-1.5 rounded-full bg-surface-container-high text-primary font-label-sm text-label-sm uppercase tracking-wider mb-space-md shadow-sm">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
            <span>Data-Driven Performance Marketing • Meta • TikTok • YouTube • Server-Side CAPI</span>
          </div>
          <h1 className="font-display-hero text-display-hero text-on-surface max-w-5xl tracking-tight mb-space-md">
            Performance Marketing &amp; Paid Social Growth Engineering. High-ROAS Media Buying.
          </h1>
          <p className="font-body-xl text-body-xl text-on-surface-variant max-w-3xl mb-space-lg">
            We scale growing SMBs and e-commerce brands across Meta (Facebook &amp; Instagram), TikTok, and YouTube with technical server-side tracking, algorithmic creative testing, and guaranteed ROAS targets. No fluffy metrics—just net revenue.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-space-md mb-space-xl">
            <a className="inline-flex items-center justify-center font-label-lg text-label-lg bg-primary hover:bg-primary-container text-on-primary rounded-full px-space-lg py-space-sm shadow-[0_4px_16px_rgba(0,105,72,0.28)] transition-all hover:-translate-y-0.5" href="#pricing-tiers">
              Explore Growth Packages ($5k - $30k)
            </a>
            <a className="inline-flex items-center justify-center gap-space-xs font-label-lg text-label-lg bg-surface-container-lowest text-on-surface hover:text-primary rounded-full px-space-lg py-space-sm shadow-sm transition-all hover:-translate-y-0.5" href="#audit-form">
              <span className="material-symbols-outlined text-primary text-[20px]">calendar_month</span>
              Book Free Growth &amp; Ad Account Audit
            </a>
          </div>
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-space-md text-left mb-space-xl">
            {[
              { icon: "trending_up", title: "4.8x Avg ROAS", desc: "Verified Meta E-commerce Cohorts" },
              { icon: "cloud_sync", title: "100% CAPI Sync", desc: "Server-Side Meta & TikTok Events" },
              { icon: "videocam", title: "15+ Video Hooks", desc: "Rapid A/B Iterations Tested / Month" },
              { icon: "lock_open", title: "Zero Lock-In", desc: "You Own All Ad Accounts & Data Assets" },
            ].map((badge, i) => (
              <div key={i} className="bg-surface-container-lowest rounded-lg p-space-md shadow-sm flex items-start gap-space-sm">
                <div className="w-10 h-10 rounded-full bg-surface-container-high flex items-center justify-center text-primary shrink-0">
                  <span className="material-symbols-outlined text-[20px]">{badge.icon}</span>
                </div>
                <div>
                  <div className="font-headline-sm text-headline-sm text-on-surface">{badge.title}</div>
                  <div className="font-body-sm text-body-sm text-on-surface-variant">{badge.desc}</div>
                </div>
              </div>
            ))}
          </div>
          <div className="w-full bg-surface-container-lowest rounded-xl p-space-sm sm:p-space-md shadow-xl overflow-hidden relative">
            <div className="flex flex-wrap items-center justify-between gap-space-sm px-space-md py-space-xs bg-surface-container-low rounded-lg mb-space-sm">
              <div className="flex items-center gap-space-xs">
                <span className="inline-block w-2.5 h-2.5 rounded-full bg-primary animate-ping"></span>
                <span className="font-label-sm text-label-sm text-primary uppercase font-bold tracking-wider">Live Multi-Channel Telemetry</span>
              </div>
              <div className="flex flex-wrap items-center gap-space-md text-on-surface font-body-sm text-body-sm">
                <span>Meta ROAS: <strong className="text-primary font-semibold">4.82x</strong></span>
                <span className="hidden sm:inline">•</span>
                <span>TikTok CPA: <strong className="text-primary font-semibold">-38.4%</strong></span>
                <span className="hidden sm:inline">•</span>
                <span>YouTube VTR: <strong className="text-primary font-semibold">42.1%</strong></span>
                <span className="hidden md:inline">•</span>
                <span className="text-on-surface-variant">Last Event: 4s ago via CAPI</span>
              </div>
            </div>
            <div className="relative rounded-lg overflow-hidden bg-surface-container-highest">
              <Image alt="Agency multi-channel marketing performance dashboard on high-resolution monitor" className="w-full h-auto object-cover max-h-[580px] rounded-lg shadow-sm" src="/images/paid-social/dashboard.jpg" width={1440} height={580} priority />
            </div>
          </div>
        </div>
      </section>

      <section className="w-full bg-surface-container-low px-gutter py-space-xl">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-md mb-space-xl">
            <div className="max-w-2xl">
              <div className="font-label-sm text-label-sm text-primary uppercase tracking-widest mb-space-xs">Sprints &amp; Architecture Modules</div>
              <h2 className="font-headline-xl text-headline-xl text-on-surface">The 4 Core Growth Engineering Disciplines</h2>
            </div>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-md">Laser-targeted performance sprints ($5,000 – $30,000) built on strict mathematical optimization instead of vanity impressions.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-space-lg">
            {[
              { price: "$5,000 – $18,000", weeks: "2–4 WEEKS", num: "DISCIPLINE 01", icon: "social_leaderboard", title: "Meta Ads Engine (Facebook &amp; Instagram)", desc: "Engineered for predictable scale with zero budget exhaustion. We transform Meta into a repeatable, high-yielding revenue driver.", features: ["Full-funnel Advantage+ Shopping Campaigns (ASC+) with algorithmic budgeting", "Dynamic Creative Optimization (DCO) matrix testing visual triggers and copy hooks", "High-frequency retention retargeting tailored to high-LTV customer cohorts"], target: "Consistent 3.5x – 6.0x Blended ROAS" },
              { price: "$4,500 – $15,000", weeks: "2–3 WEEKS", num: "DISCIPLINE 02", icon: "bolt", title: "TikTok Viral &amp; Direct-Response Growth", desc: "Drive aggressive consumer acquisitions via algorithmic native video formats, authentic creator collabs, and frictionless checkout.", features: ["High-tempo UGC video creative sprints: testing 8–12 native hooks every 7 days", "TikTok Spark Ads deployments utilizing validated influencer authorization tokens", "TikTok Shop catalog integration with zero-friction in-app conversion funneling"], target: "Sub-$12 Net Cost Per Acquisition (CPA)" },
              { price: "$6,000 – $22,000", weeks: "3–4 WEEKS", num: "DISCIPLINE 03", icon: "play_circle", title: "YouTube Ads &amp; High-Intent Video Funnels", desc: "Capture high-ticket B2B and e-commerce buyers using deep storytelling, proof-driven demonstrations, and Google intent retargeting.", features: ["Demand Gen and In-Feed video frameworks structured around 5-second hook rates", "Cross-ecosystem intent synchronization: retarget users querying high-cost search terms", "Connected TV (CTV) reach targeting high-net-worth households on living room screens"], target: "High-Ticket Pipeline & Enterprise Demos" },
              { price: "$4,000 – $12,000", weeks: "1–2 WEEKS", num: "DISCIPLINE 04", icon: "data_thresholding", title: "Server-Side Tracking &amp; Full-Funnel Attribution", desc: "Reclaim conversion data hidden by iOS 14.5+ restrictions and ad-blockers by engineering first-party edge data pipelines.", features: ["Meta Conversions API (CAPI) edge routing via custom serverless Cloudflare Workers", "TikTok Events API integration with server-side hashing for maximum Match Quality", "Google Enhanced Conversions sync feeding clean signals directly to BigQuery"], target: "+25% to +42% Recorded Conversion Lift" },
            ].map((card, i) => (
              <div key={i} className="bg-surface-container-lowest rounded-lg p-space-lg shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
                <div>
                  <div className="flex items-center justify-between gap-space-sm mb-space-md">
                    <span className="font-label-sm text-label-sm bg-primary-container text-on-primary-container px-space-sm py-1 rounded-full font-bold">{card.price} | {card.weeks}</span>
                    <span className="font-label-sm text-label-sm text-on-surface-variant">{card.num}</span>
                  </div>
                  <div className="flex items-center gap-space-xs mb-space-sm">
                    <span className="material-symbols-outlined text-primary text-[28px]">{card.icon}</span>
                    <h3 className="font-headline-md text-headline-md text-on-surface">{card.title}</h3>
                  </div>
                  <p className="font-body-md text-body-md text-on-surface-variant mb-space-md">{card.desc}</p>
                  <ul className="space-y-space-sm mb-space-lg">
                    {card.features.map((f, j) => (
                      <li key={j} className="flex items-start gap-space-sm font-body-md text-body-md text-on-surface">
                        <span className="material-symbols-outlined text-primary text-[18px] shrink-0 mt-0.5">check_circle</span>
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-surface-container-high rounded p-space-sm font-label-lg text-label-lg text-on-surface flex items-center justify-between">
                  <span className="text-primary font-bold">Target Yield</span>
                  <span>{card.target}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full px-gutter py-space-xl">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-space-xl">
            <div className="font-label-sm text-label-sm text-primary uppercase tracking-widest mb-space-xs">Technical Signal Infrastructure</div>
            <h2 className="font-headline-xl text-headline-xl text-on-surface mb-space-sm">Technical Ad Tracking &amp; First-Party Signal Architecture</h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant">Why standard browser pixels lose 30–40% of conversion signals, and how our resilient server-side proxy architecture restores 100% deterministic attribution.</p>
          </div>
          <div className="bg-surface-container-lowest rounded-xl p-space-md shadow-lg mb-space-xl">
            <div className="rounded-lg overflow-hidden bg-surface-container-high p-space-sm flex items-center justify-center">
              <Image alt="Full-Funnel Paid Social and Growth Engineering Pipeline Diagram with Meta CAPI, TikTok Events API, YouTube Google Enhanced Conversions, Cloudflare Worker proxy, and Google BigQuery data warehouse" className="w-full h-auto object-contain max-h-[500px] rounded-lg" src="/images/paid-social/pipeline.jpg" width={1440} height={500} />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-space-md">
            {[
              { icon: "verified_user", title: "100% Match Quality", desc: "SHA-256 hashed customer identifiers (email, phone, IP, agent) dispatched directly from edge workers to reach Meta EMQ scores of 9.0+." },
              { icon: "speed", title: "Cloudflare Edge Proxy", desc: "Bypasses browser-level ad blockers, privacy DNS filters, and 3rd-party cookie deprecation with sub-10 millisecond event transmission." },
              { icon: "database", title: "BigQuery Warehouse", desc: "Unifies multi-touch attribution, blended CAC, multi-platform ROAS, and 90-day retention into clean, SQL-queryable real-time models." },
              { icon: "shield", title: "Spend Guardrails", desc: "Automated Slack/Webhook triggers pause fatigue ad sets when CPA crosses safety ceilings, preventing overnight cash bleed." },
            ].map((pillar, i) => (
              <div key={i} className="bg-surface-container-lowest rounded-lg p-space-md shadow-sm">
                <div className="w-10 h-10 rounded-full bg-surface-container-high text-primary flex items-center justify-center mb-space-sm">
                  <span className="material-symbols-outlined text-[20px]">{pillar.icon}</span>
                </div>
                <h4 className="font-headline-sm text-headline-sm text-on-surface mb-space-xs">{pillar.title}</h4>
                <p className="font-body-md text-body-md text-on-surface-variant">{pillar.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full bg-surface-container-low px-gutter py-space-xl">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-space-xl">
            <div className="font-label-sm text-label-sm text-primary uppercase tracking-widest mb-space-xs">Systemic Differentiation</div>
            <h2 className="font-headline-xl text-headline-xl text-on-surface mb-space-sm">Traditional Agencies vs. NexusCraft Engineering</h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant">Compare our product-driven growth architecture against typical legacy marketing shops.</p>
          </div>
          <div className="bg-surface-container-lowest rounded-xl shadow-md overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse min-w-[640px]">
                <thead>
                  <tr className="bg-surface-container-high text-on-surface font-label-lg text-label-lg">
                    <th className="py-space-md px-space-lg w-1/3">Evaluation Vector</th>
                    <th className="py-space-md px-space-lg w-1/3 text-on-surface-variant font-medium">Traditional Ad Agencies</th>
                    <th className="py-space-md px-space-lg w-1/3 text-primary font-bold bg-surface-container">NexusCraft Growth Engineering</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-surface-container-low font-body-md text-body-md">
                  {[
                    { dim: "Ad Account Ownership", a: "Held hostage in agency Business Manager; lost upon departure", c: "100% Client-Owned from Day 1 with zero lockouts" },
                    { dim: "Creative Testing Cadence", a: "2–3 static banners per month with little hypothesis testing", c: "12–25 rapid video hooks & copy iterations monthly" },
                    { dim: "Tracking & Signal Accuracy", a: "Basic client-side browser pixel (loses ~35% of events to iOS)", c: "Dual CAPI + Edge Worker proxies with BigQuery data lake" },
                    { dim: "Contractual Commitments", a: "6 to 12 month binding contracts with rigid termination penalties", c: "30-day performance sprints or flexible month-to-month retainers" },
                    { dim: "Pricing Transparency", a: "15–20% ad spend markup + arbitrary hourly invoices", c: "Predictable flat sprints ($5k–$30k) or transparent tiers" },
                  ].map((row, i) => (
                    <tr key={i} className="hover:bg-surface-bright transition-colors">
                      <td className="py-space-md px-space-lg font-headline-sm text-headline-sm text-on-surface">{row.dim}</td>
                      <td className="py-space-md px-space-lg text-on-surface-variant">{row.a}</td>
                      <td className="py-space-md px-space-lg bg-surface-container-low font-semibold text-primary">{row.c}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full px-gutter py-space-xl">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-2xl mb-space-xl">
            <div className="font-label-sm text-label-sm text-primary uppercase tracking-widest mb-space-xs">Documented Performance</div>
            <h2 className="font-headline-xl text-headline-xl text-on-surface mb-space-xs">Real Client Growth Case Studies</h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant">Empirical results delivered for scaling e-commerce brands and high-growth B2B platforms.</p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-space-lg">
            {[
              { tag: "D2C BEAUTY & WELLNESS", spend: "$120K/MO SPEND", title: "PureBotanics Organic Skincare", desc: "Faced heavy ad fatigue on standard Meta carousels. We architected a UGC TikTok creator pipeline paired with Meta Advantage+ Shopping campaigns and custom CAPI routing.", stats: [{ label: "Blended ROAS", value: "4.6x", sub: "Up from 2.1x", primary: true }, { label: "Cost Per Acquisition", value: "-34%", sub: "", primary: false }], result: "Monthly revenue grew from $35,000 to $185,000 in 90 days" },
              { tag: "B2B SAAS PLATFORM", spend: "$20K/MO SPEND", title: "VesselOps Logistics Cloud", desc: "High sales cycle with low conversion from standard display ads. Shifted budget into targeted YouTube Demand Gen video scripting and custom LinkedIn/Meta retargeting clusters.", stats: [{ label: "Enterprise Demos Booked", value: "218", sub: "", primary: true }, { label: "Cost Per Lead", value: "$92", sub: "down from $240", primary: false }], result: "Generated $840k in verifiable pipeline value within 4 months" },
              { tag: "HIGH-TICKET RETAIL", spend: "$80K/MO SPEND", title: "NordicForm Architectural Living", desc: "Severe browser signal loss on high-ticket custom furnishings ($2k-$5k AOV). Implemented full server-side CAPI and YouTube CTV in-stream demonstrations.", stats: [{ label: "Recovered Purchase Events", value: "+42%", sub: "", primary: true }, { label: "Catalog Revenue", value: "$420k", sub: "in 60 Days", primary: false }], result: "Lowered customer acquisition payback period from 82 to 34 days" },
            ].map((cs, i) => (
              <div key={i} className="bg-surface-container-lowest rounded-lg p-space-lg shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
                <div>
                  <div className="flex items-center justify-between mb-space-sm">
                    <span className="font-label-sm text-label-sm bg-primary-container text-on-primary-container px-space-sm py-0.5 rounded-full font-bold">{cs.tag}</span>
                    <span className="font-label-sm text-label-sm text-on-surface-variant">{cs.spend}</span>
                  </div>
                  <h3 className="font-headline-md text-headline-md text-on-surface mb-space-sm">{cs.title}</h3>
                  <p className="font-body-md text-body-md text-on-surface-variant mb-space-md">{cs.desc}</p>
                  <div className="grid grid-cols-2 gap-space-sm bg-surface-container-low p-space-md rounded mb-space-md">
                    {cs.stats.map((stat, j) => (
                      <div key={j}>
                        <div className="font-display-hero text-[32px] leading-tight text-primary font-bold">{stat.value}</div>
                        <div className="font-body-sm text-body-sm text-on-surface-variant">{stat.sub || stat.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="font-body-sm text-body-sm text-on-surface font-semibold flex items-center gap-space-xs">
                  <span className="material-symbols-outlined text-primary text-[18px]">show_chart</span>
                  {cs.result}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full bg-surface-container-low px-gutter py-space-xl" id="pricing-tiers">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-space-xl">
            <div className="font-label-sm text-label-sm text-primary uppercase tracking-widest mb-space-xs">Fixed-Scope &amp; Predictable Retainers</div>
            <h2 className="font-headline-xl text-headline-xl text-on-surface mb-space-sm">Transparent Sprint Packages &amp; Pricing</h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant">Clear deliverables, no hidden percentage-of-spend kickbacks, and 100% client account autonomy.</p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-space-lg items-stretch">
            {[
              { title: "Growth Kickstart & CAPI Tracking", badge: "Sprint Package", price: "$4,500", sub: "One-time sprint (2-week turnaround)", desc: "Perfect for brands seeking rock-solid attribution and ad account rejuvenation.", features: ["Meta CAPI Gateway & TikTok Events API server-side setup", "Complete deep ad account & pixel hygiene audit", "8 high-converting custom video & static ad variations", "Advantage+ Shopping Campaign restructuring"], cta: "Book Kickstart Sprint", highlight: false },
              { title: "Multi-Channel Growth Engine", badge: "Full Growth System", price: "$8,500", sub: "Sprint Setup + $3,500/mo management", desc: "Our flagship hybrid sprint and monthly scaling machine for growing brands.", features: ["Active Meta & TikTok management (up to $50k/mo ad spend)", "16 new iterative creative video hooks produced every month", "Weekly live algorithmic budget allocation and bid optimization", "Bi-weekly ROAS review calls & 24/7 Slack comms channel"], cta: "Deploy Growth Engine", highlight: true },
              { title: "Enterprise Scale & Dominance", badge: "Omni-Channel Scale", price: "$16,000", sub: "Sprint Setup + $6,500/mo management", desc: "Engineered for large spenders requiring custom video studios and BigQuery data lakes.", features: ["Omni-channel: Meta, TikTok, YouTube & Google Demand Gen", "Scales seamlessly up to $250k/mo ad spend without surcharges", "Custom BigQuery multi-touch attribution dashboard", "Dedicated Principal Growth Architect & Video Production lead"], cta: "Initiate Enterprise Sprint", highlight: false },
            ].map((tier, i) => (
              <div key={i} className={`bg-surface-container-lowest rounded-lg p-space-lg shadow-sm flex flex-col justify-between relative ${tier.highlight ? "shadow-xl transform lg:-translate-y-2" : ""}`}>
                {tier.highlight && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-primary text-on-primary font-label-sm text-label-sm px-space-md py-1 rounded-full uppercase tracking-wider font-bold shadow-md">
                    Most Popular • High Scalability
                  </div>
                )}
                <div>
                  <div className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider mb-space-xs">{tier.badge}</div>
                  <h3 className="font-headline-md text-headline-md text-on-surface mb-space-xs">{tier.title}</h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant mb-space-md">{tier.desc}</p>
                  <div className="mb-space-md">
                    <span className="font-display-hero text-[44px] leading-none text-on-surface font-bold">{tier.price}</span>
                    <span className="font-body-sm text-body-sm text-on-surface-variant block mt-1">{tier.sub}</span>
                  </div>
                  <ul className="space-y-space-sm mb-space-lg">
                    {tier.features.map((feat, j) => (
                      <li key={j} className="flex items-start gap-space-sm font-body-md text-body-md text-on-surface">
                        <span className="material-symbols-outlined text-primary text-[18px] shrink-0 mt-0.5">check_circle</span>
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <a className={`w-full inline-flex items-center justify-center font-label-lg text-label-lg rounded-full py-space-sm transition-colors text-center ${tier.highlight ? "bg-primary hover:bg-primary-container text-on-primary shadow-[0_4px_14px_rgba(0,105,72,0.3)] hover:scale-[1.01]" : "bg-surface-container-high hover:bg-surface-container-highest text-on-surface"}`} href="#audit-form">
                  {tier.cta}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full px-gutter py-space-xl">
        <div className="max-w-5xl mx-auto bg-surface-container-lowest rounded-xl p-space-lg sm:p-space-xl shadow-xl">
          <div className="max-w-2xl mb-space-lg">
            <div className="font-label-sm text-label-sm text-primary uppercase tracking-widest mb-space-xs">Predictive Modeling</div>
            <h2 className="font-headline-xl text-headline-xl text-on-surface mb-space-xs">Interactive Ad Spend &amp; ROAS Calculator</h2>
            <p className="font-body-md text-body-md text-on-surface-variant">Simulate revenue outcomes and order volume based on your target platform mix and average order value.</p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-center">
            <div className="lg:col-span-7 space-y-space-md">
              <div>
                <div className="flex items-center justify-between mb-space-xs">
                  <label className="font-headline-sm text-headline-sm text-on-surface" htmlFor="budgetSlider">Monthly Ad Budget</label>
                  <span className="font-display-hero text-headline-lg text-primary font-bold">${budget.toLocaleString()}</span>
                </div>
                <input className="w-full h-2 bg-surface-container-high rounded-lg appearance-none cursor-pointer accent-primary" id="budgetSlider" max="100000" min="5000" step="5000" type="range" value={budget} onChange={(e) => setBudget(parseInt(e.target.value))} />
                <div className="flex justify-between font-body-sm text-body-sm text-on-surface-variant mt-1">
                  <span>$5,000</span>
                  <span>$50,000</span>
                  <span>$100,000+</span>
                </div>
              </div>
              <div>
                <label className="block font-headline-sm text-headline-sm text-on-surface mb-space-xs">Target Platform Architecture</label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-space-xs">
                  {[
                    { mult: 4.8, label: "Meta Ads" },
                    { mult: 4.2, label: "TikTok Ads" },
                    { mult: 3.9, label: "YouTube Ads" },
                    { mult: 5.2, label: "All 3 Combined" },
                  ].map((opt) => (
                    <button
                      key={opt.mult}
                      className={`py-space-xs px-space-sm rounded-lg font-label-sm text-label-sm text-center shadow-sm transition-all ${platformMult === opt.mult ? "bg-primary text-on-primary" : "bg-surface-container-high text-on-surface"}`}
                      onClick={() => setPlatformMult(opt.mult)}
                      type="button"
                    >
                      {opt.label}
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <div className="flex items-center justify-between mb-space-xs">
                  <label className="font-headline-sm text-headline-sm text-on-surface" htmlFor="aovSlider">Average Order Value (AOV)</label>
                  <span className="font-headline-lg text-headline-lg text-on-surface font-bold">${aov.toLocaleString()}</span>
                </div>
                <input className="w-full h-2 bg-surface-container-high rounded-lg appearance-none cursor-pointer accent-primary" id="aovSlider" max="1000" min="50" step="25" type="range" value={aov} onChange={(e) => setAov(parseInt(e.target.value))} />
                <div className="flex justify-between font-body-sm text-body-sm text-on-surface-variant mt-1">
                  <span>$50</span>
                  <span>$500</span>
                  <span>$1,000</span>
                </div>
              </div>
            </div>
            <div className="lg:col-span-5 bg-surface-container-high rounded-xl p-space-lg flex flex-col justify-between shadow-inner">
              <div className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider mb-space-xs">Estimated Monthly Output</div>
              <div className="mb-space-md">
                <div className="font-body-sm text-body-sm text-on-surface-variant">Projected Gross Revenue</div>
                <div className="font-display-hero text-[38px] sm:text-[44px] leading-tight text-primary font-bold">${Math.round(estRevenue).toLocaleString()}</div>
              </div>
              <div className="space-y-space-sm border-t border-surface-container-highest pt-space-sm mb-space-md">
                <div className="flex justify-between font-body-md text-body-md">
                  <span className="text-on-surface-variant">Target ROAS Spectrum:</span>
                  <span className="text-on-surface font-bold">{lowerRoas}x – {upperRoas}x</span>
                </div>
                <div className="flex justify-between font-body-md text-body-md">
                  <span className="text-on-surface-variant">Est. New Monthly Customers:</span>
                  <span className="text-on-surface font-bold">{estOrders.toLocaleString()} orders</span>
                </div>
                <div className="flex justify-between font-body-md text-body-md">
                  <span className="text-on-surface-variant">Server-Side EMQ Lift:</span>
                  <span className="text-primary font-bold">+28% Tracked</span>
                </div>
              </div>
              <a className="w-full inline-flex items-center justify-center font-label-lg text-label-lg bg-primary hover:bg-primary-container text-on-primary rounded-full py-space-sm shadow-sm transition-all hover:scale-[1.01]" href="#audit-form">
                Request Growth Roadmap
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full bg-surface-container-low px-gutter py-space-xl" id="audit-form">
        <div className="max-w-4xl mx-auto bg-surface-container-lowest rounded-xl p-space-lg sm:p-space-xl shadow-lg">
          <div className="text-center max-w-xl mx-auto mb-space-lg">
            <div className="font-label-sm text-label-sm text-primary uppercase tracking-widest mb-space-xs">48-Hour Technical Deep Dive</div>
            <h2 className="font-headline-xl text-headline-xl text-on-surface mb-space-xs">Request a Free Paid Social &amp; Tracking Audit</h2>
            <p className="font-body-md text-body-md text-on-surface-variant">We identify leaked conversion signals, evaluate creative hook velocity, and deliver actionable ROAS recommendations in 48 hours.</p>
          </div>
          <form className="space-y-space-md" onSubmit={(e) => { e.preventDefault(); setFormSuccess(true); }}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-md">
              <div>
                <label className="block font-label-lg text-label-lg text-on-surface mb-1">Full Name</label>
                <input className="w-full bg-surface-container-low text-on-surface rounded-full px-space-md py-space-sm font-body-md text-body-md outline-none focus:bg-surface-container-lowest focus:shadow-[0_0_0_2px_#006948] transition-all" placeholder="Alex Mercer" required type="text" />
              </div>
              <div>
                <label className="block font-label-lg text-label-lg text-on-surface mb-1">Corporate Work Email</label>
                <input className="w-full bg-surface-container-low text-on-surface rounded-full px-space-md py-space-sm font-body-md text-body-md outline-none focus:bg-surface-container-lowest focus:shadow-[0_0_0_2px_#006948] transition-all" placeholder="alex@brandname.com" required type="email" />
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-md">
              <div>
                <label className="block font-label-lg text-label-lg text-on-surface mb-1">Website or E-commerce Store URL</label>
                <input className="w-full bg-surface-container-low text-on-surface rounded-full px-space-md py-space-sm font-body-md text-body-md outline-none focus:bg-surface-container-lowest focus:shadow-[0_0_0_2px_#006948] transition-all" placeholder="https://brandname.com" required type="url" />
              </div>
              <div>
                <label className="block font-label-lg text-label-lg text-on-surface mb-1">Current Monthly Ad Spend</label>
                <select className="w-full bg-surface-container-low text-on-surface rounded-full px-space-md py-space-sm font-body-md text-body-md outline-none focus:bg-surface-container-lowest focus:shadow-[0_0_0_2px_#006948] transition-all">
                  <option>$5,000 – $15,000 / month</option>
                  <option>$15,000 – $50,000 / month</option>
                  <option>$50,000 – $150,000 / month</option>
                  <option>$150,000+ / month</option>
                  <option>Pre-launch / Planning phase</option>
                </select>
              </div>
            </div>
            <div>
              <label className="block font-label-lg text-label-lg text-on-surface mb-1">Primary Advertising Channels</label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-space-xs font-body-md text-body-md text-on-surface">
                {["Meta Ads", "TikTok Ads", "YouTube Ads", "Google Demand"].map((channel, idx) => (
                  <label key={channel} className="flex items-center gap-space-xs bg-surface-container-low px-space-sm py-space-xs rounded-lg cursor-pointer hover:bg-surface-container-high transition-colors">
                    <input defaultChecked={idx < 2} className="accent-primary" type="checkbox" />
                    <span>{channel}</span>
                  </label>
                ))}
              </div>
            </div>
            <div>
              <label className="block font-label-lg text-label-lg text-on-surface mb-1">Core Pain Points or Scaling Bottlenecks</label>
              <textarea className="w-full bg-surface-container-low text-on-surface rounded-2xl p-space-md font-body-md text-body-md outline-none focus:bg-surface-container-lowest focus:shadow-[0_0_0_2px_#006948] transition-all" placeholder="Describe your current CPA spikes, creative fatigue, or iOS tracking discrepancies..." rows={3}></textarea>
            </div>
            <button className="w-full inline-flex items-center justify-center font-label-lg text-label-lg bg-primary hover:bg-primary-container text-on-primary rounded-full py-space-sm shadow-[0_4px_16px_rgba(0,105,72,0.3)] transition-all hover:scale-[1.01]" type="submit">
              Submit for 48-Hour Technical Ad Audit
            </button>
            {formSuccess && (
              <div className="p-space-sm bg-primary-container text-on-primary-container rounded-lg text-center font-body-md text-body-md">
                Thank you! Our growth engineering team has received your request. We will review your tracking endpoints and dispatch your audit report within 48 hours.
              </div>
            )}
            <div className="flex flex-wrap items-center justify-center gap-space-md text-on-surface-variant font-body-sm text-body-sm pt-space-xs">
              {["Zero contractual commitment", "100% Client-owned account access", "Protected by Mutual NDA"].map((text) => (
                <span key={text} className="flex items-center gap-1">
                  <span className="material-symbols-outlined text-primary text-[16px]">check</span> {text}
                </span>
              ))}
            </div>
          </form>
        </div>
      </section>

      <section className="w-full px-gutter py-space-xl">
        <div className="max-w-4xl mx-auto">
          <div className="text-center max-w-xl mx-auto mb-space-xl">
            <div className="font-label-sm text-label-sm text-primary uppercase tracking-widest mb-space-xs">Technical Queries Answered</div>
            <h2 className="font-headline-xl text-headline-xl text-on-surface mb-space-xs">Frequently Asked Questions</h2>
            <p className="font-body-md text-body-md text-on-surface-variant">Everything you need to know about our growth sprints, tracking architecture, and operations.</p>
          </div>
          <div className="space-y-space-md">
            {[
              { q: "How do you handle iOS 14+ tracking issues and ad blockers?", a: "We bypass client-side browser restrictions by implementing server-side Conversion APIs (Meta CAPI and TikTok Events API) through custom Cloudflare Worker reverse proxies. Signals are hashed and dispatched directly from the edge server to platform endpoints, completely immune to Safari ITP and browser ad-blockers." },
              { q: "Do we own our ad accounts and creative assets?", a: "Yes, 100%. All advertising campaigns are launched directly within your verified Business Managers. You retain complete ownership of pixel IDs, BigQuery databases, customer lists, and raw video/motion creative files at all times." },
              { q: "What creative formats work best across TikTok vs. Instagram vs. YouTube?", a: "TikTok thrives on raw, native UGC hooks with first-3-second pattern interrupts and trend soundtracks. Instagram requires polished aesthetic proof points, lifestyle carousels, and high-energy Reels. YouTube demands longer hook narratives (30 to 90 seconds) with explicit problem-solution demonstrations. We tailor each sprint to platform-native psychologies." },
              { q: "How quickly can we launch after project kick-off?", a: "Technical CAPI tracking and edge proxies are deployed within the first 5 business days. Initial creative sprints, audience segmentation matrices, and Advantage+ campaign structures go live by day 10 to 14." },
              { q: "What minimum ad spend do you recommend to see reliable results?", a: "To adequately feed platform machine learning algorithms with 50+ optimization events per ad set weekly, we recommend a minimum paid media spend of $5,000/month. Brands spending between $15,000 and $100,000/month see the highest marginal return from our CAPI and creative testing frameworks." },
            ].map((faq, i) => (
              <div key={i} className="bg-surface-container-lowest rounded-lg p-space-md shadow-sm">
                <h3 className="font-headline-sm text-headline-sm text-on-surface mb-space-xs flex items-center justify-between">
                  <span>{faq.q}</span>
                  <span className="material-symbols-outlined text-primary text-[20px]">verified</span>
                </h3>
                <p className="font-body-md text-body-md text-on-surface-variant">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full px-gutter pb-space-xl">
        <div className="max-w-7xl mx-auto bg-inverse-surface text-inverse-on-surface rounded-xl p-space-lg sm:p-space-xl relative overflow-hidden shadow-2xl">
          <div className="absolute -right-20 -bottom-20 w-96 h-96 rounded-full bg-primary/20 blur-3xl pointer-events-none"></div>
          <div className="relative z-10 max-w-3xl">
            <div className="inline-flex items-center gap-space-xs px-space-sm py-1 rounded-full bg-primary text-on-primary font-label-sm text-label-sm uppercase tracking-wider mb-space-md">
              <span className="w-2 h-2 rounded-full bg-on-primary animate-pulse"></span>
              Ready For Q3 Sprint Cycles
            </div>
            <h2 className="font-display-hero text-headline-xl sm:text-display-hero text-inverse-on-surface mb-space-sm tracking-tight">
              Ready to Scale Your Paid Social with Predictable, Data-Backed ROAS?
            </h2>
            <p className="font-body-xl text-body-xl text-on-secondary-container mb-space-lg max-w-2xl">
              Reserve an architecture sprint with our Principal Growth Director. We audit your tracking hygiene, deliver fresh creative hooks, and unlock predictable scale.
            </p>
            <div className="flex flex-wrap items-center gap-space-md">
              <a className="inline-flex items-center justify-center font-label-lg text-label-lg bg-primary hover:bg-primary-container text-on-primary rounded-full px-space-lg py-space-sm shadow-[0_4px_16px_rgba(0,105,72,0.4)] transition-all hover:-translate-y-0.5" href="#audit-form">
                Schedule 30-Min Strategy Call
              </a>
              <a className="inline-flex items-center justify-center font-label-lg text-label-lg bg-surface-container-highest hover:bg-surface-container text-on-surface rounded-full px-space-lg py-space-sm transition-all hover:-translate-y-0.5" href="#pricing-tiers">
                View Transparent Growth Tiers
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
