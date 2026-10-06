"use client";

import type { JSX } from "react";
import { useState } from "react";
import Image from "next/image";

export default function ShopifyPlusContent(): JSX.Element {
  const [submitted, setSubmitted] = useState(false);

  return (
    <>
      <section className="w-full bg-surface-container-low border-b border-outline-variant py-space-sm">
        <div className="max-w-7xl mx-auto px-margin flex flex-wrap items-center justify-between gap-space-xs">
          <div className="flex items-center gap-space-xs font-code-badge text-code-badge text-on-surface-variant uppercase tracking-wider">
            <a className="hover:text-secondary transition-colors" href="/work">
              Services
            </a>
            <span>/</span>
            <span className="text-on-surface font-semibold">
              Shopify Plus &amp; Headless Commerce
            </span>
          </div>
          <div className="flex items-center gap-space-sm font-code-badge text-code-badge">
            <span className="inline-flex items-center gap-1 text-emerald-700 bg-emerald-50 px-2 py-0.5 border border-emerald-200">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
              EDGE MESH ONLINE: 247 NODES ACTIVE
            </span>
            <span className="text-outline hidden md:inline">
              // OXYGEN-RUNTIME: v2.2025.4
            </span>
          </div>
        </div>
      </section>

      <section className="w-full bg-surface-container-lowest border-b border-outline-variant py-space-xl">
        <div className="max-w-7xl mx-auto px-margin">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-start">
            <div className="lg:col-span-7 flex flex-col gap-space-md">
              <div className="inline-flex items-center gap-2 self-start bg-surface-container px-space-sm py-1 border border-outline-variant">
                <span className="font-code-badge text-code-badge text-secondary font-bold uppercase tracking-widest">
                  // HEADLESS COMMERCE &amp; HIGH-CONVERTING ARCHITECTURE
                </span>
              </div>
              <h1 className="font-headline-2xl text-headline-xl md:text-headline-2xl text-on-surface uppercase tracking-tight">
                Sub-Second Headless Commerce, Bespoke Hydrogen Frontends &amp;
                Enterprise Shopify Plus Engineering
              </h1>
              <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl leading-relaxed">
                We architect decoupled, edge-rendered Hydrogen and Oxygen
                storefronts, custom ERP/PIM middleware pipelines, and hardened
                Checkout Extensibility integrations designed to handle 50,000+
                checkout operations/minute during flash peak loads with zero
                catalog latency.
              </p>
              <div className="flex flex-wrap items-center gap-space-sm pt-space-xs">
                <a
                  className="inline-flex items-center justify-center font-label-md text-label-md text-on-primary bg-primary px-space-lg py-3 hover:bg-secondary transition-all shadow-[3px_3px_0px_0px_#0b1c30] active:translate-x-0.5 active:translate-y-0.5 active:shadow-none"
                  href="#review-form"
                >
                  Schedule Commerce Architecture Review
                  <span className="material-symbols-outlined ml-2 text-base">
                    arrow_forward
                  </span>
                </a>
                <a
                  className="inline-flex items-center justify-center font-label-md text-label-md text-on-surface bg-surface-container-lowest border border-on-surface px-space-lg py-3 hover:bg-surface-container-low transition-all"
                  href="#pipeline-blueprint"
                >
                  View Headless Hydrogen Benchmark
                  <span className="material-symbols-outlined ml-2 text-base">
                    terminal
                  </span>
                </a>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-space-xs pt-space-md border-t border-outline-variant mt-space-sm">
                {[
                  { label: "Shopify Plus Premier", top: "Tier Verification" },
                  { label: "Oxygen Certified", top: "Edge Runtime" },
                  { label: "Sub-50ms TTFB SLA", top: "Response Metric" },
                  { label: "99.999% Availability", top: "Checkout SLA" },
                ].map((badge, i) => (
                  <div
                    key={i}
                    className="flex flex-col p-2 bg-surface-container-low border border-outline-variant"
                  >
                    <span className="font-code-badge text-code-badge text-outline uppercase">
                      {badge.top}
                    </span>
                    <span className="font-label-sm text-label-sm font-semibold text-on-surface">
                      {badge.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:col-span-5 bg-primary-container text-surface-container-lowest border border-outline p-space-md shadow-[6px_6px_0px_0px_#0051d5]">
              <div className="flex items-center justify-between pb-space-sm border-b border-on-primary-fixed-variant">
                <div className="flex items-center gap-space-xs">
                  <div className="w-2.5 h-2.5 bg-emerald-400 animate-ping rounded-none"></div>
                  <span className="font-code-badge text-code-badge text-tertiary-fixed-dim uppercase tracking-wider">
                    LIVE EDGE STREAM
                  </span>
                </div>
                <span className="font-code-badge text-code-badge text-outline uppercase">
                  NODE: EDGE-WORKER-CLUSTER // US-EAST &amp; EU-CENTRAL
                </span>
              </div>
              <div className="grid grid-cols-2 gap-2 my-space-md">
                {[
                  { label: "Edge TTFB", value: "32ms", sub: "▼ 88.4% vs Monolith Liquid" },
                  { label: "Checkout Velocity", value: "48,200", sub: "Orders / Min Ingest" },
                  { label: "Cart Mutation Latency", value: "14ms", sub: "GraphQL Edge Gateway" },
                  { label: "Global Cache Hit Rate", value: "99.4%", sub: "Oxygen Distributed ISR" },
                ].map((metric, i) => (
                  <div
                    key={i}
                    className="bg-inverse-surface p-space-sm border border-on-primary-fixed-variant"
                  >
                    <span className="font-code-badge text-code-badge text-outline block uppercase">
                      {metric.label}
                    </span>
                    <span className="font-headline-md text-headline-md text-tertiary-fixed font-bold">
                      {metric.value}
                    </span>
                    <span className="font-code-badge text-[10px] text-tertiary-fixed-dim block mt-0.5">
                      {metric.sub}
                    </span>
                  </div>
                ))}
              </div>
              <div className="font-code-badge text-code-badge bg-inverse-surface p-3 border border-on-primary-fixed-variant flex flex-col gap-1.5 overflow-hidden">
                <div className="text-tertiary-fixed-dim border-b border-on-primary-fixed-variant pb-1 flex justify-between">
                  <span>// REAL-TIME OXYGEN &amp; STOREFRONT LOGS</span>
                  <span className="text-emerald-400">STATUS: NOMINAL</span>
                </div>
                <div className="text-outline-variant truncate">
                  <span className="text-tertiary-fixed">[14:48:02.104]</span>{" "}
                  <span className="text-secondary-fixed">HYDROGEN_SSR:</span>{" "}
                  Server-side streaming rendering chunk via Shopify Oxygen edge
                  runtime (TTFB: 28ms)
                </div>
                <div className="text-outline-variant truncate">
                  <span className="text-tertiary-fixed">[14:48:02.215]</span>{" "}
                  <span className="text-tertiary-fixed-dim">
                    GRAPHQL_STOREFRONT:
                  </span>{" "}
                  Customer cart mutation payload normalized via Custom Edge
                  Gateway (latency: 12ms)
                </div>
                <div className="text-outline-variant truncate">
                  <span className="text-tertiary-fixed">[14:48:02.490]</span>{" "}
                  <span className="text-amber-300">ERP_CONNECTOR:</span> SAP
                  S/4HANA real-time inventory delta synced via Kafka event mesh to
                  Shopify Metafields
                </div>
                <div className="text-outline-variant truncate">
                  <span className="text-tertiary-fixed">[14:48:03.012]</span>{" "}
                  <span className="text-emerald-300">
                    CHECKOUT_EXTENSIBILITY:
                  </span>{" "}
                  Dynamic tier-based B2B discount engine executed in Shopify
                  Functions sandbox (&lt; 4ms execution)
                </div>
                <div className="text-outline-variant truncate">
                  <span className="text-tertiary-fixed">[14:48:03.450]</span>{" "}
                  <span className="text-secondary-fixed">PIM_RECON:</span>{" "}
                  Akeneo catalog sync completed. 140,000 product variants updated
                  across 12 localized markets
                </div>
                <div className="text-emerald-400 pt-1 border-t border-on-primary-fixed-variant">
                  // Deterministic edge hydration running at zero layout shift
                  (CLS: 0.001)
                </div>
              </div>
              <div className="mt-space-sm flex items-center justify-between text-[11px] font-code-badge text-outline">
                <span>ISOLATE RUNTIME: CLOUDFLARE WORKERS / OXYGEN</span>
                <span className="text-tertiary-fixed">LATENCY JITTER: ±1.4ms</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full bg-surface-container-low border-b border-outline-variant py-space-xl" id="pipeline-blueprint">
        <div className="max-w-7xl mx-auto px-margin flex flex-col gap-space-lg">
          <div className="flex flex-col gap-space-xs max-w-3xl">
            <span className="font-code-badge text-code-badge text-secondary uppercase tracking-widest font-bold">
              // MODERN HEADLESS COMMERCE PIPELINE &amp; RUNTIME
            </span>
            <h2 className="font-headline-xl text-headline-xl text-on-surface uppercase tracking-tight">
              The NexusScale Composed Headless Commerce Engine
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant">
              A battle-tested edge architecture decoupling high-traffic
              storefronts from backend commerce cores, orchestration layers, and
              localized enterprise ERPs.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 border border-outline-variant bg-surface-container-lowest">
            {[
              {
                stage: "01",
                title: "Edge Storefront &amp; SSR",
                desc: "Hydrogen 2.0 and Remix executing on Shopify Oxygen global workers. Sub-50ms worldwide TTFB, Sanity and Contentful headless CMS orchestration, and edge ISR caching with zero waterfall requests.",
                tags: ["HYDROGEN", "OXYGEN RUNTIME", "REMIX", "EDGE SSR"],
              },
              {
                stage: "02",
                title: "Orchestration &amp; GraphQL Mesh",
                desc: "Apollo Federation GraphQL mesh unifying Shopify Storefront API, Algolia search catalogs, PIM data schemas, and custom enterprise loyalty systems into a single high-performance schema stitched at the edge.",
                tags: ["GRAPHQL MESH", "APOLLO FEDERATION", "TYPESCRIPT"],
              },
              {
                stage: "03",
                title: "Bespoke Checkout Extensibility",
                desc: "High-performance Shopify Functions written in Rust and compiled to WebAssembly. Complex B2B volume pricing matrices, dynamic checkout UI extensions, and tiered discount engines with guaranteed sub-5ms latency.",
                tags: ["SHOPIFY FUNCTIONS", "RUST / WASM", "CHECKOUT UI"],
              },
              {
                stage: "04",
                title: "Enterprise ERP &amp; Middleware",
                desc: "Bi-directional Change Data Capture (CDC) streaming between SAP S/4HANA, NetSuite SuiteTalk, Akeneo PIM, and Shopify Metafields via Kafka event mesh with guaranteed zero inventory overselling.",
                tags: ["SAP S/4HANA", "NETSUITE", "REDPANDA", "APACHE KAFKA"],
              },
            ].map((item, i) => (
              <div
                key={i}
                className="p-space-md border-b md:border-b-0 md:border-r border-outline-variant flex flex-col justify-between relative group hover:bg-surface-container-low transition-colors"
              >
                <div className="flex flex-col gap-space-xs">
                  <div className="flex items-center justify-between">
                    <span className="font-code-badge text-code-badge bg-primary text-on-primary px-2 py-0.5">
                      STAGE {item.stage}
                    </span>
                    <span className="material-symbols-outlined text-secondary text-xl">
                      {i === 0 ? "devices" : i === 1 ? "hub" : i === 2 ? "shopping_cart_checkout" : "sync_alt"}
                    </span>
                  </div>
                  <h3 className="font-headline-sm text-headline-sm text-on-surface uppercase mt-space-xs">
                    {item.title}
                  </h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">
                    {item.desc}
                  </p>
                </div>
                <div className="flex flex-wrap gap-1 mt-space-md pt-space-xs border-t border-outline-variant">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="font-code-badge text-[10px] bg-surface-container px-1.5 py-0.5 text-on-surface"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="bg-primary-container text-surface-container-lowest border border-outline p-space-md">
            <div className="flex items-center justify-between pb-space-sm border-b border-on-primary-fixed-variant">
              <div className="flex items-center gap-space-sm">
                <span className="font-code-badge text-code-badge bg-secondary text-on-secondary px-2 py-0.5 uppercase">
                  PRODUCTION SANDBOX
                </span>
                <span className="font-code-badge text-code-badge text-tertiary-fixed-dim uppercase tracking-wider">
                  SHOPIFY-FUNCTION-CONFIG // cart-transform.wasm // RUST &amp;
                  GRAPHQL COMPILER
                </span>
              </div>
              <span className="font-code-badge text-code-badge text-emerald-400">
                EXEC TIME: 1.84ms (SLA &lt; 5.0ms)
              </span>
            </div>
            <pre
              className="font-code-badge text-code-badge text-surface-container-highest overflow-x-auto p-space-sm leading-5"
              dangerouslySetInnerHTML={{
                __html: `<code><span class="text-tertiary-fixed">// crates/cart_transform_b2b/src/run.rs - Optimized Rust WebAssembly Module</span>
<span class="text-outline">use</span> shopify_function::prelude::*;
<span class="text-outline">use</span> shopify_function::Result;

<span class="text-secondary-fixed">#[shopify_function_target(query = "src/run.graphql", schema = "schema.graphql")]</span>
<span class="text-tertiary-fixed">fn</span> <span class="text-tertiary-fixed-dim">run</span>(input: input::ResponseData) -&gt; Result&lt;output::FunctionRunResult&gt; {
    <span class="text-tertiary-fixed">let</span> tier_rules = parse_metafield_tier_matrix(&amp;input.cart.buyer_identity)?;
    <span class="text-tertiary-fixed">let mut</span> operations = <span class="text-secondary-fixed">Vec::new</span>();

    <span class="text-outline">// High-throughput deterministic SKU grouping for bulk wholesale discounts</span>
    <span class="text-tertiary-fixed">for</span> line <span class="text-tertiary-fixed">in</span> input.cart.lines.iter().filter(|l| l.quantity &gt;= <span class="text-amber-300">50</span>) {
        operations.push(output::Operation::Update(output::CartLineUpdateOperation {
            cart_line_id: line.id.clone(),
            price: <span class="text-secondary-fixed">Some</span>(calculate_dynamic_volume_tier(line, &amp;tier_rules)),
            title: <span class="text-secondary-fixed">Some</span>(<span class="text-emerald-300">format!</span>(<span class="text-emerald-300">"{} [Tier B2B Enterprise Volume Applied]"</span>, line.merchandise.title)),
            image: <span class="text-secondary-fixed">None</span>,
        }));
    }

    <span class="text-secondary-fixed">Ok</span>(output::FunctionRunResult { operations })
}</code>`,
              }}
            ></pre>
          </div>
        </div>
      </section>

      <section className="w-full bg-surface-container-lowest border-b border-outline-variant py-space-xl">
        <div className="max-w-7xl mx-auto px-margin flex flex-col gap-space-lg">
          <div className="flex flex-col gap-space-xs max-w-3xl">
            <span className="font-code-badge text-code-badge text-secondary uppercase tracking-widest font-bold">
              // TECHNICAL SPECIALIZATION &amp; COMMERCE STACK
            </span>
            <h2 className="font-headline-xl text-headline-xl text-on-surface uppercase tracking-tight">
              Enterprise Commerce Engineering Capabilities
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant">
              We replace bloated theme code with deterministic, zero-latency
              cloud and edge architectures engineered to protect margins and
              conversion velocity.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter">
            {[
              {
                num: "01",
                title: "Headless Hydrogen &amp; Oxygen Architecture",
                desc: "Complete migration from legacy monolithic Liquid themes to Remix-powered Shopify Hydrogen. Worldwide deployment onto Shopify Oxygen workers delivering sub-50ms TTFB and deterministic cache invalidation.",
                spec: "SUB-50MS TTFB // REMIX / HYDROGEN // 99.4% CACHE HIT",
              },
              {
                num: "02",
                title: "Shopify Functions &amp; Checkout Extensibility",
                desc: "High-performance Rust-compiled WebAssembly functions replacing deprecated Shopify Scripts. Custom checkout validation, dynamic B2B pricing matrices, payment customization, and multi-tier bundle engines executing in &lt; 5ms.",
                spec: "RUST &amp; WASM ENGINE // &lt; 5MS EXECUTION // 50K ORDERS/MIN",
              },
              {
                num: "03",
                title: "Enterprise ERP, CRM &amp; PIM Synchronization",
                desc: "Custom bi-directional streaming connectors linking Shopify Plus with SAP S/4HANA, NetSuite, Akeneo, and Salsify. Built on Apache Kafka to synchronize 1M+ SKU inventories, pricing tables, and localized B2B price lists with sub-second CDC.",
                spec: "REAL-TIME CDC // KAFKA / REDPANDA // ZERO CATALOG DRIFT",
              },
              {
                num: "04",
                title: "Global Multi-Currency &amp; Internationalization",
                desc: "Unified headless international commerce across 40+ localized regions. Geolocation routing, dynamic localized pricing schemas, automated tax nexus handling via Avalara/Vertex, and multilingual content routing without duplicate codebases.",
                spec: "40+ REGIONS // DYNAMIC CURRENCY // SUB-CENT PRECISION",
              },
              {
                num: "05",
                title: "High-Volume Flash Sale Hardening",
                desc: "Architected for high-heat product drops. Distributed Redis Redlock inventory reservations, custom edge rate-limiting, Cloudflare bot protection, and automated checkout queue shedding that protects payment processing during extreme spikes.",
                spec: "100K+ CONCURRENT CONCESSIONS // ZERO INVENTORY LOCKOUT",
              },
              {
                num: "06",
                title: "Composable Headless CMS Integration",
                desc: "Structured omnichannel content modeling using Sanity.io, Contentful, or Strapi. Real-time visual previews for merchandising teams, automated edge CDN webhook purging, and deeply embedded custom product storytelling components.",
                spec: "INSTANT PREVIEWS // STRUCTURED SCHEMAS // CDN PURGE WEBHOOKS",
              },
            ].map((card, i) => (
              <div
                key={i}
                className="p-space-md bg-surface-container-low border border-outline-variant flex flex-col justify-between hover:border-on-surface transition-all"
              >
                <div className="flex flex-col gap-space-xs">
                  <div className="flex items-center justify-between pb-space-xs border-b border-outline-variant">
                    <span className="font-code-badge text-code-badge text-secondary font-bold uppercase">
                      CAPABILITY {card.num}
                    </span>
                    <span className="material-symbols-outlined text-on-surface text-lg">
                      {i === 0 ? "bolt" : i === 1 ? "memory" : i === 2 ? "database" : i === 3 ? "public" : i === 4 ? "shield" : "view_quilt"}
                    </span>
                  </div>
                  <h3 className="font-headline-sm text-headline-sm text-on-surface uppercase mt-space-xs">
                    {card.title}
                  </h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">
                    {card.desc}
                  </p>
                </div>
                <div className="mt-space-md pt-space-xs border-t border-outline-variant">
                  <span className="font-code-badge text-code-badge text-outline uppercase block">
                    PERFORMANCE SPEC:
                  </span>
                  <span className="font-code-badge text-code-badge text-on-surface font-semibold">
                    {card.spec}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full bg-surface-container-low border-b border-outline-variant py-space-xl">
        <div className="max-w-7xl mx-auto px-margin flex flex-col gap-space-lg">
          <div className="flex flex-col gap-space-xs max-w-3xl">
            <span className="font-code-badge text-code-badge text-secondary uppercase tracking-widest font-bold">
              // COMMERCE PERFORMANCE &amp; STABILITY MATRIX
            </span>
            <h2 className="font-headline-xl text-headline-xl text-on-surface uppercase tracking-tight">
              Traditional Shopify Monolith vs. NexusScale Composed Headless
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant">
              Why enterprise retailers outgrow standard Liquid theme
              architectures and choose hardened headless edge stacks.
            </p>
          </div>
          <div className="w-full border border-outline-variant overflow-x-auto bg-surface-container-lowest shadow-[4px_4px_0px_0px_#0b1c30]">
            <table className="w-full text-left border-collapse min-w-[700px]">
              <thead>
                <tr className="bg-primary text-on-primary font-code-badge text-code-badge">
                  <th className="p-space-sm uppercase tracking-wider border-r border-outline w-1/4">
                    System Dimension
                  </th>
                  <th className="p-space-sm uppercase tracking-wider border-r border-outline w-3/8">
                    Traditional Liquid Monolith
                  </th>
                  <th className="p-space-sm uppercase tracking-wider text-secondary-fixed w-3/8">
                    NexusScale Composed Headless Architecture
                  </th>
                </tr>
              </thead>
              <tbody className="font-body-sm text-body-sm divide-y divide-outline-variant">
                {[
                  {
                    dim: "Page Load (TTFB) &amp; Web Vitals",
                    a: "800ms - 2,400ms global latency. Heavy app bloat, render-blocking Liquid scripts, frequent layout shifts (CLS &gt; 0.25).",
                    c: "&lt; 45ms Global Edge TTFB. Deterministic streaming SSR on Oxygen, near-zero CLS, sub-second LCP globally.",
                  },
                  {
                    dim: "Flash Sale Peak Load Capacity",
                    a: "Susceptible to API rate limits, database locks, cart script bottlenecks, and checkout queue drop-offs during high traffic.",
                    c: "50,000+ Orders / Min Decoupled Queue. Redis Redlock edge isolation protecting core cart mutations during flash spikes.",
                  },
                  {
                    dim: "Custom Business &amp; Pricing Logic",
                    a: "Brittle, deprecated Ruby Shopify Scripts. Severe execution timeouts on complex matrices; limited to Plus cart.",
                    c: "Rust-Compiled Shopify Functions. Sub-5ms WebAssembly sandbox execution, deeply integrated into checkout extensibility.",
                  },
                  {
                    dim: "Enterprise ERP &amp; PIM Integration",
                    a: "Nightly batch CSV uploads or point-to-point REST polling. High inventory drift, phantom stock, and overselling risks.",
                    c: "Real-Time Event CDC (&lt; 200ms). Kafka event-driven bidirectional middleware for SAP, NetSuite, and Akeneo catalog parity.",
                  },
                  {
                    dim: "International Multi-Store Scaling",
                    a: "Disjointed multi-store admin sprawl. Duplicate codebases, manual content copy-pasting, fragmented operational overhead.",
                    c: "Unified Multi-Tenant Storefront. Single headless codebase dynamically routing multi-market currencies, domains, and catalogs.",
                  },
                  {
                    dim: "Developer Velocity &amp; CI/CD",
                    a: "Sluggish theme preview uploads, manual QA regressions, lack of modern component testing and isolated environments.",
                    c: "GitOps CI/CD &amp; Ephemeral Previews. TypeScript strict types, Playwright E2E testing, branch previews on Oxygen, automated releases.",
                  },
                ].map((row, i) => (
                  <tr key={i} className="hover:bg-surface-container-low transition-colors">
                    <td className="p-space-sm font-semibold text-on-surface bg-surface-container-low border-r border-outline-variant">
                      {row.dim}
                    </td>
                    <td className="p-space-sm text-on-surface-variant border-r border-outline-variant">
                      {row.a}
                    </td>
                    <td className="p-space-sm text-on-surface bg-blue-50/40 font-medium">
                      <div className="flex items-center gap-1.5 text-secondary">
                        <span className="material-symbols-outlined text-base">
                          check_circle
                        </span>
                        <span className="font-code-badge text-code-badge">
                          {row.c.split(".")[0]}
                        </span>
                      </div>
                      {row.c.includes(".") && row.c.split(".")[1]}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="w-full bg-surface-container-lowest border-b border-outline-variant py-space-xl">
        <div className="max-w-7xl mx-auto px-margin flex flex-col gap-space-lg">
          <div className="flex flex-col gap-space-xs max-w-3xl">
            <span className="font-code-badge text-code-badge text-secondary uppercase tracking-widest font-bold">
              // CERTIFIED PARTNER INFRASTRUCTURE
            </span>
            <h2 className="font-headline-xl text-headline-xl text-on-surface uppercase tracking-tight">
              Supported Commerce Ecosystem
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter">
            {[
              {
                title: "01 // FRONTEND &amp; EDGE RUNTIME",
                items: [
                  ["Shopify Hydrogen", "v2.0 SSR"],
                  ["Shopify Oxygen Edge", "Worker Mesh"],
                  ["Remix / React 19", "Edge Runtime"],
                  ["Next.js Commerce", "App Router"],
                ],
              },
              {
                title: "02 // COMMERCE BACKEND &amp; EXTENSIONS",
                items: [
                  ["Shopify Plus Admin", "REST / GraphQL"],
                  ["Shopify Functions", "Rust / Wasm"],
                  ["Checkout Extensibility", "Native UI"],
                  ["Storefront API", "High-Burst Rate"],
                ],
              },
              {
                title: "03 // ENTERPRISE ERP &amp; PIM",
                items: [
                  ["SAP S/4HANA", "OData / IDoc"],
                  ["NetSuite SuiteTalk", "REST Web Serv."],
                  ["Akeneo Enterprise", "PIM Catalog"],
                  ["Apache Kafka / Redpanda", "CDC Bus"],
                ],
              },
              {
                title: "04 // COMPOSABLE CMS &amp; SEARCH",
                items: [
                  ["Sanity.io Studio", "GROQ Engine"],
                  ["Contentful headless", "GraphQL API"],
                  ["Algolia Enterprise", "Neural Search"],
                  ["Constructor.io", "AI Discovery"],
                ],
              },
            ].map((pillar, i) => (
              <div
                key={i}
                className="p-space-md bg-surface-container-low border border-outline-variant flex flex-col gap-space-sm"
              >
                <span className="font-code-badge text-code-badge text-secondary font-bold uppercase">
                  {pillar.title}
                </span>
                <div className="flex flex-col gap-space-xs pt-space-xs">
                  {pillar.items.map(([name, ver]) => (
                    <div
                      key={name}
                      className="flex items-center justify-between p-2 bg-surface-container-lowest border border-outline-variant"
                    >
                      <span className="font-label-sm text-label-sm font-semibold text-on-surface">
                        {name}
                      </span>
                      <span className="font-code-badge text-[10px] text-outline">
                        {ver}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full bg-surface-container-low border-b border-outline-variant py-space-xl">
        <div className="max-w-7xl mx-auto px-margin">
          <div className="bg-surface-container-lowest border border-outline p-space-lg md:p-space-xl shadow-[8px_8px_0px_0px_#0b1c30]">
            <div className="flex flex-wrap items-center justify-between gap-space-xs pb-space-sm border-b border-outline-variant">
              <span className="font-code-badge text-code-badge text-secondary font-bold uppercase">
                // PRODUCTION CASE STUDY // CS-ENG-94 -- GLOBAL LUXURY OMNICHANNEL
                COMMERCE
              </span>
              <span className="font-code-badge text-code-badge bg-primary text-on-primary px-2 py-0.5 uppercase">
                VERIFIED PRODUCTION AUDIT
              </span>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter mt-space-md items-start">
              <div className="lg:col-span-7 flex flex-col gap-space-sm">
                <h3 className="font-headline-lg text-headline-lg text-on-surface uppercase tracking-tight">
                  Replatforming a $140M Luxury Brand to Headless Hydrogen:
                  3.2X Revenue Conversion &amp; 38ms TTFB
                </h3>
                <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                  A Tier-1 luxury fashion house operating 8 regional storefronts
                  suffered from 3.2s Liquid load times and inventory
                  desynchronization during product drops. NexusScale engineered a
                  unified Hydrogen 2.0 edge architecture integrated with SAP
                  S/4HANA via Kafka, replacing monolithic scripts with Rust-powered
                  Shopify Functions.
                </p>
                <blockquote className="bg-surface-container-low p-space-md border-l-4 border-secondary mt-space-xs">
                  <p className="font-body-md text-body-md italic text-on-surface">
                    “NexusScale delivered the rare combination of deep systems
                    engineering and pragmatic commerce execution. Our checkout
                    failure rate during seasonal flash sales dropped to absolute
                    zero, and mobile conversion leaped by over 44%.”
                  </p>
                  <footer className="mt-2 font-code-badge text-code-badge text-outline uppercase">
                    — VP of Digital Experience &amp; Architecture, Global Luxury
                    Fashion Group
                  </footer>
                </blockquote>
              </div>
              <div className="lg:col-span-5 grid grid-cols-2 gap-space-xs">
                {[
                  { label: "P99 Edge TTFB", value: "38ms", sub: "Reduced from 3,200ms Liquid baseline" },
                  { label: "Mobile Conversion", value: "+44.6%", sub: "Post-launch baseline uplift" },
                  { label: "Peak Checkout", value: "42k", sub: "Orders / min without queue drop" },
                  { label: "Catalog Sync", value: "&lt;180ms", sub: "Real-time SAP S/4HANA CDC event sync" },
                ].map((m, i) => (
                  <div
                    key={i}
                    className="p-space-sm bg-surface-container-low border border-outline-variant flex flex-col justify-between"
                  >
                    <span className="font-code-badge text-code-badge text-outline uppercase">
                      {m.label}
                    </span>
                    <span className="font-headline-xl text-headline-xl text-secondary font-bold">
                      {m.value}
                    </span>
                    <span className="font-body-sm text-body-sm text-on-surface-variant">
                      {m.sub}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full bg-surface-container-lowest py-space-xl" id="review-form">
        <div className="max-w-4xl mx-auto px-margin">
          <div className="bg-surface-container-low border border-outline p-space-lg md:p-space-xl shadow-[8px_8px_0px_0px_#0051d5]">
            <div className="flex flex-col gap-space-xs pb-space-md border-b border-outline-variant">
              <span className="font-code-badge text-code-badge text-secondary font-bold uppercase tracking-widest">
                // PRINCIPAL COMMERCE ARCHITECT ENGAGEMENT
              </span>
              <h2 className="font-headline-lg text-headline-lg text-on-surface uppercase tracking-tight">
                Request a Headless Commerce Architecture Review
              </h2>
              <p className="font-body-md text-body-md text-on-surface-variant">
                Direct engagement with a NexusScale Principal Commerce Systems
                Architect. Confidential evaluation of your checkout
                extensibility, ERP middleware, and edge performance.
              </p>
            </div>
            <form
              className="flex flex-col gap-space-md mt-space-md"
              onSubmit={(e) => {
                e.preventDefault();
                setSubmitted(true);
              }}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-space-md">
                <div className="flex flex-col gap-1.5">
                  <label
                    className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface font-semibold"
                    htmlFor="work-email"
                  >
                    Corporate Email <span className="text-secondary">*</span>
                  </label>
                  <input
                    className="bg-surface-container-lowest border border-outline p-3 font-body-sm text-body-sm text-on-surface focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary rounded-none"
                    id="work-email"
                    placeholder="engineering.leader@enterprise.com"
                    required
                    type="email"
                  />
                  <span className="font-code-badge text-[11px] text-outline">
                    CTO, VP of Digital, Head of E-Commerce
                  </span>
                </div>
                <div className="flex flex-col gap-1.5">
                  <label
                    className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface font-semibold"
                    htmlFor="current-platform"
                  >
                    Current Commerce Platform <span className="text-secondary">*</span>
                  </label>
                  <select
                    className="bg-surface-container-lowest border border-outline p-3 font-body-sm text-body-sm text-on-surface focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary rounded-none"
                    id="current-platform"
                    required
                  >
                    <option value="">Select Platform Baseline...</option>
                    <option value="shopify_liquid">Shopify Plus Monolith (Liquid Theme)</option>
                    <option value="adobe_magento">Magento / Adobe Commerce 2.x</option>
                    <option value="sfcc">Salesforce Commerce Cloud (SFCC)</option>
                    <option value="custom_monolith">Custom Legacy Commerce Monolith</option>
                    <option value="bigcommerce">BigCommerce Enterprise</option>
                  </select>
                  <span className="font-code-badge text-[11px] text-outline">
                    Existing frontend &amp; checkout foundation
                  </span>
                </div>
                <div className="flex flex-col gap-1.5">
                  <label
                    className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface font-semibold"
                    htmlFor="target-objective"
                  >
                    Target Architecture Objective <span className="text-secondary">*</span>
                  </label>
                  <select
                    className="bg-surface-container-lowest border border-outline p-3 font-body-sm text-body-sm text-on-surface focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary rounded-none"
                    id="target-objective"
                    required
                  >
                    <option value="">Select Primary Objective...</option>
                    <option value="hydrogen_migration">Headless Hydrogen &amp; Oxygen Migration</option>
                    <option value="erp_cdc_pipeline">Custom ERP/PIM Middleware &amp; CDC Pipeline</option>
                    <option value="shopify_functions">Shopify Functions &amp; Checkout Extensibility</option>
                    <option value="multi_storefront">Global Multi-Storefront Consolidation</option>
                    <option value="flash_sale_hardening">Flash Sale &amp; Peak Throughput Hardening</option>
                  </select>
                  <span className="font-code-badge text-[11px] text-outline">
                    Core architectural deliverable
                  </span>
                </div>
                <div className="flex flex-col gap-1.5">
                  <label
                    className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface font-semibold"
                    htmlFor="annual-gmv"
                  >
                    Current Annual GMV / Peak Minute Volume{" "}
                    <span className="text-secondary">*</span>
                  </label>
                  <select
                    className="bg-surface-container-lowest border border-outline p-3 font-body-sm text-body-sm text-on-surface focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary rounded-none"
                    id="annual-gmv"
                    required
                  >
                    <option value="">Select Annual Scale Tier...</option>
                    <option value="tier_1">$20M - $50M GMV</option>
                    <option value="tier_2">$50M - $150M GMV</option>
                    <option value="tier_3">$150M - $500M+ GMV</option>
                    <option value="flash_spike">10,000+ Orders/Min Flash Drops</option>
                  </select>
                  <span className="font-code-badge text-[11px] text-outline">
                    Determines concurrency modeling &amp; worker allocation
                  </span>
                </div>
              </div>
              <div className="flex flex-col gap-1.5">
                <label
                  className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface font-semibold"
                  htmlFor="bottlenecks"
                >
                  Known Architectural Bottlenecks &amp; Integration Constraints
                </label>
                <textarea
                  className="bg-surface-container-lowest border border-outline p-3 font-body-sm text-body-sm text-on-surface focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary rounded-none resize-none"
                  id="bottlenecks"
                  placeholder="e.g. Current Liquid theme experiences 2.8s TTFB on mobile. SAP inventory updates lag by 45 minutes causing overselling during product drops. Need to replace legacy Ruby scripts with Rust-compiled Shopify Functions."
                  rows={4}
                ></textarea>
              </div>
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-space-sm pt-space-xs">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-secondary text-lg">
                    lock
                  </span>
                  <span className="font-code-badge text-code-badge text-outline">
                    MUTUAL NON-DISCLOSURE AGREEMENT PROTECTED // ENTERPRISE
                    PRIVACY SLA
                  </span>
                </div>
                <button
                  className="inline-flex items-center justify-center font-label-md text-label-md text-on-primary bg-primary px-space-xl py-3.5 hover:bg-secondary transition-all shadow-[3px_3px_0px_0px_#0051d5] active:translate-x-0.5 active:translate-y-0.5 active:shadow-none w-full sm:w-auto uppercase tracking-wider font-semibold cursor-pointer"
                  type="submit"
                >
                  Submit Commerce Architecture Scope
                  <span className="material-symbols-outlined ml-2 text-base">
                    send
                  </span>
                </button>
              </div>
              {submitted && (
                <div className="p-space-sm bg-emerald-50 border border-emerald-300 text-emerald-800 flex items-center gap-space-xs mt-space-xs">
                  <span className="material-symbols-outlined text-emerald-600">
                    check_circle
                  </span>
                  <span className="font-label-sm text-label-sm">
                    Scope request ingested into architecture triage queue. A
                    NexusScale Principal Commerce Architect will follow up within
                    4 business hours with custom benchmark documentation.
                  </span>
                </div>
              )}
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
