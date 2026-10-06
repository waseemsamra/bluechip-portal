import type { JSX } from "react";
import Image from "next/image";

export default function AboutUsContent(): JSX.Element {
  return (
    <>
      {/* SECTION 1: HIGH-IMPACT HERO */}
      <section className="relative w-full overflow-hidden pb-16 pt-8 lg:pb-24 lg:pt-12">
        <div className="absolute -top-32 right-1/4 h-96 w-96 rounded-full bg-primary/5 blur-3xl pointer-events-none"></div>
        <div className="absolute top-1/2 -left-20 h-80 w-80 rounded-full bg-tertiary/5 blur-3xl pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-10">
          <div className="flex flex-col items-start gap-4 max-w-4xl">
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-surface-container-low text-primary shadow-sm">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
              <span className="font-label-sm text-label-sm uppercase tracking-wider text-primary font-bold">
                ABOUT NEXUSCRAFT SOFTWARE • HIGH-CONVICTION ENGINEERING
              </span>
            </div>
            <h1 className="font-display-hero text-headline-xl lg:text-display-hero text-on-surface tracking-tight">
              Engineering Scalable Software Systems with Radical Transparency
              and Absolute Code Ownership.
            </h1>
            <p className="font-body-xl text-body-lg lg:text-body-xl text-on-surface-variant max-w-3xl leading-relaxed">
              Founded on the belief that growing enterprises and SMBs deserve
              high-tier engineering squads without agency markup, vendor
              lock-in, or offshore junior handoffs.
            </p>
          </div>

          <div className="relative w-full rounded-2xl overflow-hidden shadow-xl bg-surface-container-highest">
            <Image
              alt="NexusCraft principal systems engineering pod collaborating over high-throughput architecture topologies"
              className="w-full h-[380px] sm:h-[460px] lg:h-[560px] object-cover object-center transform hover:scale-[1.01] transition-transform duration-700 ease-out"
              src="/images/about/hero-image.jpg"
              width={1440}
              height={560}
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-inverse-surface/80 via-transparent to-black/20 pointer-events-none"></div>

            <div className="absolute top-6 left-6 sm:top-8 sm:left-8 flex items-center gap-3 px-4 py-2.5 rounded-full bg-surface/90 backdrop-blur-md shadow-lg">
              <span
                className="material-symbols-outlined text-primary text-[20px]"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                verified
              </span>
              <div className="flex flex-col">
                <span className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface font-bold">
                  Principal Led
                </span>
                <span className="font-body-sm text-body-sm text-on-surface-variant font-medium">
                  Staff Pods Led by Principal Architects
                </span>
              </div>
            </div>

            <div className="absolute bottom-6 right-6 sm:bottom-8 sm:right-8 flex items-center gap-3 px-4 py-2.5 rounded-full bg-surface/90 backdrop-blur-md shadow-lg">
              <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                <span className="material-symbols-outlined text-[18px]">
                  verified_user
                </span>
              </div>
              <div className="flex flex-col text-left">
                <span className="font-label-sm text-label-sm uppercase tracking-wider text-primary font-bold">
                  100% Quality Mandate
                </span>
                <span className="font-body-sm text-body-sm text-on-surface font-semibold">
                  Zero-Defect 30-Day Production Warranty
                </span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 pt-4">
            <div className="p-6 rounded-2xl bg-surface-container-lowest shadow-sm flex flex-col gap-1 transition-all hover:-translate-y-1 hover:shadow-md">
              <div className="font-display-hero text-headline-xl lg:text-headline-xl text-primary font-extrabold tracking-tight">
                40+
              </div>
              <span className="font-headline-sm text-headline-sm text-on-surface font-semibold">
                Shipped Enterprise Systems
              </span>
              <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
                Multi-region SaaS, high-throughput e-commerce, & FinTech
                engines.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-surface-container-lowest shadow-sm flex flex-col gap-1 transition-all hover:-translate-y-1 hover:shadow-md">
              <div className="font-display-hero text-headline-xl lg:text-headline-xl text-primary font-extrabold tracking-tight">
                100%
              </div>
              <span className="font-headline-sm text-headline-sm text-on-surface font-semibold">
                Client Code Ownership
              </span>
              <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
                Zero vendor lock-in. Full repositories, schemas, and CI/CD
                pipelines transferred.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-surface-container-lowest shadow-sm flex flex-col gap-1 transition-all hover:-translate-y-1 hover:shadow-md">
              <div className="font-display-hero text-headline-xl lg:text-headline-xl text-primary font-extrabold tracking-tight">
                11
              </div>
              <span className="font-headline-sm text-headline-sm text-on-surface font-semibold">
                Disciplines Under One Roof
              </span>
              <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
                From distributed Go backends to Shopify Plus headless
                architecture.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-surface-container-lowest shadow-sm flex flex-col gap-1 transition-all hover:-translate-y-1 hover:shadow-md">
              <div className="font-display-hero text-headline-xl lg:text-headline-xl text-primary font-extrabold tracking-tight">
                99.98%
              </div>
              <span className="font-headline-sm text-headline-sm text-on-surface font-semibold">
                Guaranteed Production SLA
              </span>
              <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
                Resilient high-availability Kubernetes setups with
                zero-downtime cutovers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: DEDICATED VISION & MISSION */}
      <section className="w-full py-16 lg:py-24 bg-surface-container-low/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center text-center gap-3 mb-12">
            <span className="font-label-sm text-label-sm uppercase tracking-widest text-primary font-bold">
              OUR CONVICTION
            </span>
            <h2 className="font-headline-xl text-headline-lg lg:text-headline-xl text-on-surface max-w-2xl font-bold tracking-tight">
              Purpose-Built for Transparent, Deterministic Execution
            </h2>
            <p className="font-body-lg text-body-md lg:text-body-lg text-on-surface-variant max-w-xl">
              We threw out traditional consulting retainers and murky billing
              models to build the engineering squad we always wanted to hire.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
            {/* Mission Card */}
            <div className="p-8 sm:p-10 rounded-3xl bg-surface-container-lowest shadow-sm flex flex-col justify-between transition-shadow hover:shadow-md">
              <div className="flex flex-col gap-6">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                    <span
                      className="material-symbols-outlined text-[28px]"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      rocket_launch
                    </span>
                  </div>
                  <span className="px-3.5 py-1 rounded-full bg-surface-container font-label-sm text-label-sm text-on-surface-variant font-bold">
                    PILLAR 01
                  </span>
                </div>
                <div>
                  <h3 className="font-headline-lg text-headline-lg text-on-surface font-bold tracking-tight">
                    Our Mission
                  </h3>
                  <p className="font-body-lg text-body-lg text-on-surface-variant mt-3 leading-relaxed">
                    To empower ambitious SMBs and growing enterprises with
                    production-grade software engineering, cloud
                    infrastructure, and compliance architecture delivered
                    through fixed-price sprints and dedicated senior squads.
                  </p>
                </div>
                <div className="space-y-4 pt-4">
                  <span className="font-label-sm text-label-sm uppercase tracking-wider text-primary font-bold">
                    Delivery Commitments
                  </span>
                  <div className="flex items-start gap-3.5">
                    <div className="w-6 h-6 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0 mt-0.5">
                      <span className="material-symbols-outlined text-[16px]">
                        check
                      </span>
                    </div>
                    <div>
                      <h4 className="font-headline-sm text-headline-sm text-on-surface font-semibold">
                        Guaranteed Delivery Timelines (1 to 8 Weeks)
                      </h4>
                      <p className="font-body-sm text-body-sm text-on-surface-variant">
                        Deterministic sprint roadmaps where deliverables hit
                        staging and production exactly on cadence.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3.5">
                    <div className="w-6 h-6 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0 mt-0.5">
                      <span className="material-symbols-outlined text-[16px]">
                        check
                      </span>
                    </div>
                    <div>
                      <h4 className="font-headline-sm text-headline-sm text-on-surface font-semibold">
                        Transparent Fixed Budgets ($500 to $80k)
                      </h4>
                      <p className="font-body-sm text-body-sm text-on-surface-variant">
                        Zero surprise hours. Pre-scoped deliverables locked in
                        milestone escrow contracts before line one is coded.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3.5">
                    <div className="w-6 h-6 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0 mt-0.5">
                      <span className="material-symbols-outlined text-[16px]">
                        check
                      </span>
                    </div>
                    <div>
                      <h4 className="font-headline-sm text-headline-sm text-on-surface font-semibold">
                        Clean IP Transfer Upon Milestone Sign-off
                      </h4>
                      <p className="font-body-sm text-body-sm text-on-surface-variant">
                        Git commits, AWS role assumptions, and secrets handed
                        over completely with full documentation.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-8 pt-6 flex items-center gap-2 text-on-surface-variant font-body-sm text-body-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                <span>
                  Immediate copyright handover clause baked into Master
                  Services SLA
                </span>
              </div>
            </div>

            {/* Vision Card */}
            <div className="p-8 sm:p-10 rounded-3xl bg-surface-container-lowest shadow-sm flex flex-col justify-between transition-shadow hover:shadow-md">
              <div className="flex flex-col gap-6">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-xl bg-tertiary/10 flex items-center justify-center text-tertiary">
                    <span
                      className="material-symbols-outlined text-[28px]"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      visibility
                    </span>
                  </div>
                  <span className="px-3.5 py-1 rounded-full bg-surface-container font-label-sm text-label-sm text-on-surface-variant font-bold">
                    PILLAR 02
                  </span>
                </div>
                <div>
                  <h3 className="font-headline-lg text-headline-lg text-on-surface font-bold tracking-tight">
                    Our Vision
                  </h3>
                  <p className="font-body-lg text-body-lg text-on-surface-variant mt-3 leading-relaxed">
                    To become the global standard for high-conviction
                    engineering partnerships—where zero technical debt,
                    verified regulatory compliance, and deterministic uptime
                    replace vague hourly billing.
                  </p>
                </div>
                <div className="space-y-4 pt-4">
                  <span className="font-label-sm text-label-sm uppercase tracking-wider text-tertiary font-bold">
                    Strategic Horizons
                  </span>
                  <div className="flex items-start gap-3.5">
                    <div className="w-6 h-6 rounded-full bg-tertiary/10 text-tertiary flex items-center justify-center shrink-0 mt-0.5">
                      <span className="material-symbols-outlined text-[16px]">
                        public
                      </span>
                    </div>
                    <div>
                      <h4 className="font-headline-sm text-headline-sm text-on-surface font-semibold">
                        Global Distributed Delivery
                      </h4>
                      <p className="font-body-sm text-body-sm text-on-surface-variant">
                        Continuous coverage pods across London, Dubai, and
                        Singapore offering 24/7 architecture sync.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3.5">
                    <div className="w-6 h-6 rounded-full bg-tertiary/10 text-tertiary flex items-center justify-center shrink-0 mt-0.5">
                      <span className="material-symbols-outlined text-[16px]">
                        security
                      </span>
                    </div>
                    <div>
                      <h4 className="font-headline-sm text-headline-sm text-on-surface font-semibold">
                        Automated Regulatory Toolchains
                      </h4>
                      <p className="font-body-sm text-body-sm text-on-surface-variant">
                        Built-in compliance modules for UAE FTA Phase 2
                        E-Invoicing, PCI-DSS SAQ-A, and HIPAA data isolation.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3.5">
                    <div className="w-6 h-6 rounded-full bg-tertiary/10 text-tertiary flex items-center justify-center shrink-0 mt-0.5">
                      <span className="material-symbols-outlined text-[16px]">
                        bolt
                      </span>
                    </div>
                    <div>
                      <h4 className="font-headline-sm text-headline-sm text-on-surface font-semibold">
                        AI-Accelerated Production Pipelines
                      </h4>
                      <p className="font-body-sm text-body-sm text-on-surface-variant">
                        Harnessing LLM-driven static analysis, deterministic
                        synthetic test generators, and autonomous Canary
                        deploys.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-8 pt-6 flex items-center gap-2 text-on-surface-variant font-body-sm text-body-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-tertiary"></span>
                <span>
                  Autonomous SRE-managed infrastructure with 99.99% uptime
                  guarantees on every production release
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: CORE ENGINEERING VALUES & GUIDING PRINCIPLES */}
      <section className="w-full py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-16">
            <div className="max-w-2xl flex flex-col gap-3">
              <span className="font-label-sm text-label-sm uppercase tracking-widest text-primary font-bold">
                ETHOS & PROTOCOLS
              </span>
              <h2 className="font-headline-xl text-headline-lg lg:text-headline-xl text-on-surface font-bold tracking-tight">
                The NexusCraft Engineering Canon
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant">
                Four non-negotiable rules we uphold for every client, every
                pull request, and every production deployment.
              </p>
            </div>
            <div className="hidden lg:flex items-center gap-3">
              <span className="w-12 h-0.5 bg-outline-variant/40"></span>
              <span className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant font-bold">
                Standard 2025 Edition
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Principle 01 */}
            <div className="p-8 rounded-2xl bg-surface-container-lowest shadow-sm hover:shadow-md transition-all flex flex-col justify-between group">
              <div className="flex flex-col gap-4">
                <div className="flex items-center justify-between">
                  <span className="font-display-hero text-headline-lg text-primary font-extrabold">
                    01
                  </span>
                  <div className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center group-hover:scale-110 transition-transform">
                    <span className="material-symbols-outlined text-[20px]">
                      copyright
                    </span>
                  </div>
                </div>
                <h3 className="font-headline-md text-headline-md text-on-surface font-bold">
                  Absolute Intellectual Property Ownership
                </h3>
                <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                  Every line of code, Docker file, Terraform script, and
                  database schema belongs 100% to the client from Day 1. We
                  operate in your private GitHub/GitLab orgs, deploy directly
                  to your AWS/GCP accounts, and retain zero proprietary
                  royalty hooks.
                </p>
              </div>
              <div className="mt-6 pt-4 flex items-center gap-2 text-on-surface-variant font-body-sm text-body-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                <span>
                  Immediate copyright handover clause baked into Master
                  Services SLA
                </span>
              </div>
            </div>

            {/* Principle 02 */}
            <div className="p-8 rounded-2xl bg-surface-container-lowest shadow-sm hover:shadow-md transition-all flex flex-col justify-between group">
              <div className="flex flex-col gap-4">
                <div className="flex items-center justify-between">
                  <span className="font-display-hero text-headline-lg text-primary font-extrabold">
                    02
                  </span>
                  <div className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center group-hover:scale-110 transition-transform">
                    <span className="material-symbols-outlined text-[20px]">
                      groups
                    </span>
                  </div>
                </div>
                <h3 className="font-headline-md text-headline-md text-on-surface font-bold">
                  Senior Staff Only — Zero Junior Hand-Offs
                </h3>
                <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                  We never pitch with veteran partners and switch to green
                  juniors after contract execution. Every squad member
                  touching your infrastructure has at least 8+ years of
                  production experience shipping high-scale distributed
                  systems and enterprise platforms.
                </p>
              </div>
              <div className="mt-6 pt-4 flex items-center gap-2 text-on-surface-variant font-body-sm text-body-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                <span>
                  Direct Slack/Teams channel integration with Principal
                  engineers
                </span>
              </div>
            </div>

            {/* Principle 03 */}
            <div className="p-8 rounded-2xl bg-surface-container-lowest shadow-sm hover:shadow-md transition-all flex flex-col justify-between group">
              <div className="flex flex-col gap-4">
                <div className="flex items-center justify-between">
                  <span className="font-display-hero text-headline-lg text-primary font-extrabold">
                    03
                  </span>
                  <div className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center group-hover:scale-110 transition-transform">
                    <span className="material-symbols-outlined text-[20px]">
                      request_quote
                    </span>
                  </div>
                </div>
                <h3 className="font-headline-md text-headline-md text-on-surface font-bold">
                  Predictable Sprint Economics
                </h3>
                <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                  Fixed-price caps and clear milestone escrow prevent budget
                  blowouts and scope creep. You know the exact financial
                  investment and sprint milestone output before any work
                  begins—no billing surprises, ever.
                </p>
              </div>
              <div className="mt-6 pt-4 flex items-center gap-2 text-on-surface-variant font-body-sm text-body-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                <span>
                  Escrow milestones tied to rigorous Acceptance Criteria tests
                </span>
              </div>
            </div>

            {/* Principle 04 */}
            <div className="p-8 rounded-2xl bg-surface-container-lowest shadow-sm hover:shadow-md transition-all flex flex-col justify-between group">
              <div className="flex flex-col gap-4">
                <div className="flex items-center justify-between">
                  <span className="font-display-hero text-headline-lg text-primary font-extrabold">
                    04
                  </span>
                  <div className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center group-hover:scale-110 transition-transform">
                    <span className="material-symbols-outlined text-[20px]">
                      lock_open
                    </span>
                  </div>
                </div>
                <h3 className="font-headline-md text-headline-md text-on-surface font-bold">
                  Zero Vendor Lock-In
                </h3>
                <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                  We build exclusively on industry-standard open-source
                  ecosystems (PostgreSQL, TypeScript, Go, Python, AWS,
                  Docker). Any competent in-house engineering team can adopt,
                  maintain, and expand our codebases on day one without
                  proprietary frameworks.
                </p>
              </div>
              <div className="mt-6 pt-4 flex items-center gap-2 text-on-surface-variant font-body-sm text-body-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                <span>
                  Complete Runbooks, Architectural Decision Records (ADRs)
                  provided
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: LEADERSHIP & PRINCIPAL ARCHITECTS */}
      <section className="w-full py-16 lg:py-24 bg-surface-container-low/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center text-center gap-3 mb-16">
            <span className="font-label-sm text-label-sm uppercase tracking-widest text-primary font-bold">
              LEADERSHIP SQUAD
            </span>
            <h2 className="font-headline-xl text-headline-lg lg:text-headline-xl text-on-surface max-w-2xl font-bold tracking-tight">
              Headed by Seasoned Systems Architects
            </h2>
            <p className="font-body-lg text-body-md lg:text-body-lg text-on-surface-variant max-w-2xl">
              Our principals actively write code, review PRs, orchestrate cloud
              topologies, and sit in design reviews alongside our enterprise
              clients.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Leader 1 */}
            <div className="p-6 rounded-2xl bg-surface-container-lowest shadow-sm flex flex-col justify-between hover:shadow-md transition-all">
              <div className="flex flex-col gap-4">
                <div className="w-full h-56 rounded-xl overflow-hidden bg-surface-container-high relative">
                  <Image
                    alt="Professional studio portrait of Alexander Vance, a male tech lead with a thoughtful expression and short dark hair, wearing a navy minimalist sweater against a soft studio backdrop with gentle emerald rim lighting."
                    className="w-full h-full object-cover object-top"
                    src="/images/about/alexander-vance.jpg"
                    width={384}
                    height={224}
                  />
                  <span className="absolute bottom-3 left-3 px-2.5 py-1 rounded-full bg-surface/90 backdrop-blur-sm text-primary font-label-sm text-label-sm font-bold">
                    14+ YRS EXP
                  </span>
                </div>
                <div>
                  <h3 className="font-headline-sm text-headline-sm text-on-surface font-bold">
                    Alexander Vance
                  </h3>
                  <p className="font-label-sm text-label-sm text-primary font-semibold uppercase tracking-wider mt-0.5">
                    Managing Partner & Chief Systems Architect
                  </p>
                  <p className="font-body-sm text-body-sm text-on-surface-variant mt-2 leading-relaxed">
                    Ex-Enterprise Cloud Lead. Specialist in distributed
                    microservices, low-latency transaction routing, and AWS
                    container virtualization.
                  </p>
                </div>
              </div>
              <div className="mt-4 pt-3 flex flex-wrap gap-1.5">
                <span className="px-2.5 py-0.5 rounded-full bg-surface-container-low text-on-surface font-label-sm text-label-sm">
                  AWS Architect Pro
                </span>
                <span className="px-2.5 py-0.5 rounded-full bg-surface-container-low text-on-surface font-label-sm text-label-sm">
                  Go / Rust
                </span>
              </div>
            </div>

            {/* Leader 2 */}
            <div className="p-6 rounded-2xl bg-surface-container-lowest shadow-sm flex flex-col justify-between hover:shadow-md transition-all">
              <div className="flex flex-col gap-4">
                <div className="w-full h-56 rounded-xl overflow-hidden bg-surface-container-high relative">
                  <Image
                    alt="Professional studio portrait of Elena Rostova, a female software engineering director with focused hazel eyes and dark blonde hair tied back, wearing an executive tailored blazer under clean lighting with subtle mint green reflections."
                    className="w-full h-full object-cover object-top"
                    src="/images/about/elena-rostova.jpg"
                    width={384}
                    height={224}
                  />
                  <span className="absolute bottom-3 left-3 px-2.5 py-1 rounded-full bg-surface/90 backdrop-blur-sm text-primary font-label-sm text-label-sm font-bold">
                    12+ YRS EXP
                  </span>
                </div>
                <div>
                  <h3 className="font-headline-sm text-headline-sm text-on-surface font-bold">
                    Elena Rostova
                  </h3>
                  <p className="font-label-sm text-label-sm text-primary font-semibold uppercase tracking-wider mt-0.5">
                    VP of Engineering & Compliance
                  </p>
                  <p className="font-body-sm text-body-sm text-on-surface-variant mt-2 leading-relaxed">
                    PCI-DSS Qualified Security Assessor & UAE FTA E-Invoicing
                    Lead. Expert in sovereign cryptographic signing, data
                    governance, and audits.
                  </p>
                </div>
              </div>
              <div className="mt-4 pt-3 flex flex-wrap gap-1.5">
                <span className="px-2.5 py-0.5 rounded-full bg-surface-container-low text-on-surface font-label-sm text-label-sm">
                  FTA Phase 2
                </span>
                <span className="px-2.5 py-0.5 rounded-full bg-surface-container-low text-on-surface font-label-sm text-label-sm">
                  SOC 2 / ISO27001
                </span>
              </div>
            </div>

            {/* Leader 3 */}
            <div className="p-6 rounded-2xl bg-surface-container-lowest shadow-sm flex flex-col justify-between hover:shadow-md transition-all">
              <div className="flex flex-col gap-4">
                <div className="w-full h-56 rounded-xl overflow-hidden bg-surface-container-high relative">
                  <Image
                    alt="Professional headshot of Tariq Al-Mansoor, a male mobile software architect with neatly trimmed beard and black casual tech blazer, smiling warmly in a high-tech modern office space filled with natural daylight."
                    className="w-full h-full object-cover object-top"
                    src="/images/about/tariq-al-mansoor.jpg"
                    width={384}
                    height={224}
                  />
                  <span className="absolute bottom-3 left-3 px-2.5 py-1 rounded-full bg-surface/90 backdrop-blur-sm text-primary font-label-sm text-label-sm font-bold">
                    11+ YRS EXP
                  </span>
                </div>
                <div>
                  <h3 className="font-headline-sm text-headline-sm text-on-surface font-bold">
                    Tariq Al-Mansoor
                  </h3>
                  <p className="font-label-sm text-label-sm text-primary font-semibold uppercase tracking-wider mt-0.5">
                    Head of Commerce & Mobile
                  </p>
                  <p className="font-body-sm text-body-sm text-on-surface-variant mt-2 leading-relaxed">
                    Shopify Plus partner engineer and React Native
                    open-source core contributor. Architect of $100M+ ARR
                    omnichannel checkout systems.
                  </p>
                </div>
              </div>
              <div className="mt-4 pt-3 flex flex-wrap gap-1.5">
                <span className="px-2.5 py-0.5 rounded-full bg-surface-container-low text-on-surface font-label-sm text-label-sm">
                  Shopify Plus
                </span>
                <span className="px-2.5 py-0.5 rounded-full bg-surface-container-low text-on-surface font-label-sm text-label-sm">
                  React Native / iOS
                </span>
              </div>
            </div>

            {/* Leader 4 */}
            <div className="p-6 rounded-2xl bg-surface-container-lowest shadow-sm flex flex-col justify-between hover:shadow-md transition-all">
              <div className="flex flex-col gap-4">
                <div className="w-full h-56 rounded-xl overflow-hidden bg-surface-container-high relative">
                  <Image
                    alt="Professional studio portrait of Marcus Chen, an Asian male Site Reliability Engineer with spectacles and a black crewneck shirt, calm analytical gaze with subtle ambient server room lighting reflections in background."
                    className="w-full h-full object-cover object-top"
                    src="/images/about/marcus-chen.jpg"
                    width={384}
                    height={224}
                  />
                  <span className="absolute bottom-3 left-3 px-2.5 py-1 rounded-full bg-surface/90 backdrop-blur-sm text-primary font-label-sm text-label-sm font-bold">
                    13+ YRS EXP
                  </span>
                </div>
                <div>
                  <h3 className="font-headline-sm text-headline-sm text-on-surface font-bold">
                    Marcus Chen
                  </h3>
                  <p className="font-label-sm text-label-sm text-primary font-semibold uppercase tracking-wider mt-0.5">
                    Director of Cloud Infrastructure & SRE
                  </p>
                  <p className="font-body-sm text-body-sm text-on-surface-variant mt-2 leading-relaxed">
                    Kubernetes maintainer, multi-cloud high-availability
                    architect, and veteran of zero-downtime database
                    migrations with petabyte footprints.
                  </p>
                </div>
              </div>
              <div className="mt-4 pt-3 flex flex-wrap gap-1.5">
                <span className="px-2.5 py-0.5 rounded-full bg-surface-container-low text-on-surface font-label-sm text-label-sm">
                  CKA / Terraform
                </span>
                <span className="px-2.5 py-0.5 rounded-full bg-surface-container-low text-on-surface font-label-sm text-label-sm">
                  Zero-Downtime HA
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: GLOBAL PRESENCE & REGIONAL ENGINEERING HUBS */}
      <section className="w-full py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-start gap-4 mb-12 max-w-3xl">
            <span className="font-label-sm text-label-sm uppercase tracking-widest text-primary font-bold">
              GLOBAL REACH
            </span>
            <h2 className="font-headline-xl text-headline-lg lg:text-headline-xl text-on-surface font-bold tracking-tight">
              Regional Engineering Hubs Positioned in Core Capital Markets
            </h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant">
              Strategically deployed engineering pods aligned to cross-border
              time zones, regional tax mandates, and international compliance
              jurisdictions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Hub 1: Dubai */}
            <div className="rounded-2xl bg-surface-container-lowest shadow-sm overflow-hidden flex flex-col transition-all hover:shadow-md">
              <div
                className="w-full h-48 bg-cover bg-center"
                style={{
                  backgroundImage:
                    "url('/images/about/dubai-hub.jpg')",
                }}
                data-location="DIFC Dubai, United Arab Emirates"
              ></div>
              <div className="p-6 flex flex-col flex-1 justify-between gap-4">
                <div className="flex flex-col gap-2">
                  <div className="flex items-center justify-between">
                    <span className="font-label-sm text-label-sm uppercase tracking-wider text-primary font-bold">
                      Global Headquarters
                    </span>
                    <span className="w-2.5 h-2.5 rounded-full bg-primary"></span>
                  </div>
                  <h3 className="font-headline-md text-headline-md text-on-surface font-bold">
                    Dubai, UAE
                  </h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant font-medium">
                    DIFC Innovation Hub & Silicon Oasis
                  </p>
                  <p className="font-body-sm text-body-sm text-on-surface-variant mt-2 leading-relaxed">
                    Specialized in UAE FTA Phase 2 E-Invoicing SDKs, GCC
                    Cross-Border Payment Gateways, and high-security MENA
                    FinTech backends.
                  </p>
                </div>
                <div className="pt-3 border-t border-outline-variant/30 flex items-center justify-between font-label-sm text-label-sm text-on-surface-variant">
                  <span>Timezone: GMT+4</span>
                  <span className="text-primary font-bold">
                    Active Sprint Hub
                  </span>
                </div>
              </div>
            </div>

            {/* Hub 2: London */}
            <div className="rounded-2xl bg-surface-container-lowest shadow-sm overflow-hidden flex flex-col transition-all hover:shadow-md">
              <div
                className="w-full h-48 bg-cover bg-center"
                style={{
                  backgroundImage:
                    "url('/images/about/london-hub.jpg')",
                }}
                data-location="Canary Wharf London, UK"
              ></div>
              <div className="p-6 flex flex-col flex-1 justify-between gap-4">
                <div className="flex flex-col gap-2">
                  <div className="flex items-center justify-between">
                    <span className="font-label-sm text-label-sm uppercase tracking-wider text-tertiary font-bold">
                      European Tech Center
                    </span>
                    <span className="w-2.5 h-2.5 rounded-full bg-tertiary"></span>
                  </div>
                  <h3 className="font-headline-md text-headline-md text-on-surface font-bold">
                    London, UK
                  </h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant font-medium">
                    Canary Wharf Financial District
                  </p>
                  <p className="font-body-sm text-body-sm text-on-surface-variant mt-2 leading-relaxed">
                    Specialized in Enterprise Cloud migration, Open Banking
                    PSD2 APIs, GDPR audit-ready database sharding, and UK SMB
                    digital infrastructure.
                  </p>
                </div>
                <div className="pt-3 border-t border-outline-variant/30 flex items-center justify-between font-label-sm text-label-sm text-on-surface-variant">
                  <span>Timezone: GMT+0 / BST</span>
                  <span className="text-tertiary font-bold">
                    Active Sprint Hub
                  </span>
                </div>
              </div>
            </div>

            {/* Hub 3: Singapore */}
            <div className="rounded-2xl bg-surface-container-lowest shadow-sm overflow-hidden flex flex-col justify-between transition-all hover:shadow-md">
              <div
                className="w-full h-48 bg-cover bg-center"
                style={{
                  backgroundImage:
                    "url('/images/about/singapore-hub.jpg')",
                }}
                data-location="Marina Bay Singapore"
              ></div>
              <div className="p-6 flex flex-col flex-1 justify-between gap-4">
                <div className="flex flex-col gap-2">
                  <div className="flex items-center justify-between">
                    <span className="font-label-sm text-label-sm uppercase tracking-wider text-secondary font-bold">
                      APAC Delivery Center
                    </span>
                    <span className="w-2.5 h-2.5 rounded-full bg-secondary"></span>
                  </div>
                  <h3 className="font-headline-md text-headline-md text-on-surface font-bold">
                    Singapore
                  </h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant font-medium">
                    Marina Bay Financial Tower
                  </p>
                  <p className="font-body-sm text-body-sm text-on-surface-variant mt-2 leading-relaxed">
                    Specialized in High-Throughput E-Commerce, Asia-Pacific
                    Site Relativity Engineering, multi-CDN caching, and
                    localized payment rails.
                  </p>
                </div>
                <div className="pt-3 border-t border-outline-variant/30 flex items-center justify-between font-label-sm text-label-sm text-on-surface-variant">
                  <span>Timezone: GMT+8</span>
                  <span className="text-secondary font-bold">
                    Active Sprint Hub
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6: BOTTOM CALL-TO-ACTION BANNER */}
      <section className="w-full py-16 lg:py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-3xl bg-inverse-surface text-inverse-on-surface p-8 sm:p-12 lg:p-16 shadow-2xl flex flex-col items-center text-center">
            <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-96 h-96 bg-primary/20 rounded-full blur-3xl pointer-events-none"></div>
            <div className="relative z-10 max-w-3xl flex flex-col items-center gap-6">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/20 text-inverse-primary text-label-sm font-label-sm font-bold tracking-wide uppercase">
                <span className="w-2 h-2 rounded-full bg-inverse-primary animate-pulse"></span>
                <span>Now Scheduling Q3 & Q4 Architecture Sprints</span>
              </div>
              <h2 className="font-display-hero text-headline-xl lg:text-display-hero font-extrabold tracking-tight text-white leading-tight">
                Ready to Build with High Conviction?
              </h2>
              <p className="font-body-xl text-body-lg lg:text-body-xl text-inverse-on-surface/80 max-w-2xl leading-relaxed">
                Stop losing momentum to bloated consultancies and hourly
                invoices. Partner directly with Principal engineers under
                fixed-scope, milestone-guaranteed contracts.
              </p>
              <div className="flex flex-col sm:flex-row items-center gap-4 mt-4 w-full sm:w-auto">
                <a
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-primary text-on-primary font-label-lg text-label-lg font-bold shadow-lg shadow-primary/30 hover:bg-primary-container active:scale-95 transition-all"
                  href="#book-scoping-call"
                >
                  <span>Schedule Architecture Scoping Call</span>
                  <span className="material-symbols-outlined text-[20px]">
                    calendar_month
                  </span>
                </a>
                <a
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-surface/10 hover:bg-surface/20 text-white font-label-lg text-label-lg font-semibold backdrop-blur-sm transition-all"
                  href="#services"
                >
                  <span>Explore Engineering Services Directory</span>
                  <span className="material-symbols-outlined text-[20px]">
                    arrow_outward
                  </span>
                </a>
              </div>
              <div className="flex flex-wrap items-center justify-center gap-6 pt-4 text-inverse-on-surface/60 font-body-sm text-body-sm">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-[16px] text-primary-fixed-dim">
                    done
                  </span>
                  <span>Direct 30-min call with Principal Architect</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-[16px] text-primary-fixed-dim">
                    done
                  </span>
                  <span>No aggressive sales reps</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-[16px] text-primary-fixed-dim">
                    done
                  </span>
                  <span>Fixed quote delivered in 48 hours</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
