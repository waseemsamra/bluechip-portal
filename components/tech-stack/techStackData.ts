export type TechLogoName =
  | "typescript-react"
  | "python"
  | "go"
  | "java"
  | "nodejs"
  | "vue"
  | "postgres"
  | "redis"
  | "bigquery"
  | "mongodb"
  | "aws"
  | "cloudflare"
  | "terraform"
  | "shopify"
  | "sharepoint"
  | "flutter"
  | "react-native"
  | "dbt"
  | "meta"
  | "download-pdf"
  | "github-actions";

export type TechCard = {
  id: string;
  title: string;
  subtitle: string;
  versionBadge: string;
  versionBadgeClass: string;
  desc: string;
  tags: string[];
  p99Score: string;
  spec: string;
  specClass?: string;
  logo?: TechLogoName;
  icon?: string;
  keywords: string;
};

export type QuickStat = {
  value: string;
  label: string;
  valueClass?: string;
  icon?: string;
};

export type FilterPill = {
  label: string;
  filter: string;
};

export type SidebarCategory = {
  id: string;
  label: string;
  icon: string;
  count: number;
  href: string;
};

export type BenchmarkRow = {
  id: string;
  name: string;
  role: string;
  throughput: string;
  latency: string;
  latencyClass?: string;
  rto: string;
  status: string;
  statusClass?: string;
  logo?: TechLogoName;
  icon?: string;
};

export type DeepDive = {
  icon: string;
  title: string;
  desc: string;
};

export type CloudToolCard = {
  id: string;
  title: string;
  logo?: TechLogoName;
  icon?: string;
  desc: string;
};

export type PortalCard = {
  id: string;
  title: string;
  badge: string;
  badgeClass: string;
  icon: string;
  logo?: TechLogoName;
  desc: string;
  tags: string[];
  metricLeft: string;
  metricRight: string;
};

export type MobileCard = {
  id: string;
  title: string;
  badge: string;
  badgeClass: string;
  icon: string;
  logo?: TechLogoName;
  desc: string;
  tags: string[];
  footer: string;
  footerClass?: string;
};

export type DataFeature = {
  id: string;
  icon: string;
  logo?: TechLogoName;
  label: string;
};

export type GrowthCard = {
  id: string;
  title: string;
  badge: string;
  badgeClass: string;
  icon: string;
  logo?: TechLogoName;
  desc: string;
  metricLeft: string;
  metricRight: string;
  rightClass?: string;
};

export const quickStats: QuickStat[] = [
  { value: "35+", label: "Vetted Frameworks", valueClass: "text-primary" },
  { value: "Zero", label: "Proprietary Lock-In" },
  {
    value: "100%",
    label: "Client Code Ownership",
    valueClass: "text-primary-container",
  },
  { value: "< 140ms", label: "P99 Latency Enforced", valueClass: "text-primary" },
  {
    value: "SOC2 & FTA",
    label: "UAE Compliant Toolchains",
    icon: "verified",
  },
];

export const filterPills: FilterPill[] = [
  { label: "All Stack", filter: "all" },
  { label: "Frontend & Core", filter: "languages" },
  { label: "Databases", filter: "databases" },
  { label: "Cloud & DevOps", filter: "cloud" },
  { label: "Portals & CMS", filter: "portals" },
  { label: "Growth Pipelines", filter: "growth" },
];

export const languagesCards: TechCard[] = [
  {
    id: "typescript",
    title: "TypeScript / React & Next.js",
    subtitle: "React 19 Ready",
    versionBadge: "Next.js 15",
    versionBadgeClass: "bg-primary/10 text-primary",
    desc: "Full-stack reactive web applications, React Server Components (RSC), zero-waterfall data streaming, and hybrid SSR/SSG.",
    tags: ["Enterprise Portals", "High-Speed SaaS", "Turbopack"],
    p99Score: "98/100",
    spec: "Standard Spec",
    specClass: "text-primary",
    logo: "typescript-react",
    keywords: "typescript react nextjs next.js javascript ssr rsc frontend",
  },
  {
    id: "python",
    title: "Python (FastAPI & Django)",
    subtitle: "AsyncIO & Pydantic",
    versionBadge: "Python 3.12+",
    versionBadgeClass: "bg-surface-container text-on-surface",
    desc: "High-throughput asynchronous APIs, machine learning pipelines, LLM orchestrations (LangChain / LlamaIndex), and data scraping.",
    tags: ["FastAPI", "Django 5", "PyTorch / ML"],
    p99Score: "95/100",
    spec: "ML / API Core",
    specClass: "text-primary",
    logo: "python",
    keywords: "python fastapi django backend ai ml asynchronous microservices pydantic",
  },
  {
    id: "go",
    title: "Go (Golang)",
    subtitle: "Goroutines / Zero-GC",
    versionBadge: "Go 1.23",
    versionBadgeClass: "bg-surface-container text-on-surface",
    desc: "Ultra-lean microservices, low-memory networking proxies, high-frequency distributed ledgers, and raw concurrency streaming.",
    tags: ["Sub-ms Proxies", "gRPC Engines", "Event Gateways"],
    p99Score: "99.4/100",
    spec: "High Concurrency",
    specClass: "text-primary",
    logo: "go",
    keywords: "go golang microservices high throughput concurrency distributed proxy",
  },
  {
    id: "java",
    title: "Java & Spring Boot 3",
    subtitle: "GraalVM Native",
    versionBadge: "Spring Boot 3.3",
    versionBadgeClass: "bg-surface-container text-on-surface",
    desc: "Mission-critical enterprise transactional backbones, high-volume banking systems, Dubai FTA tax calculators, and multi-tenant ERP integrations.",
    tags: ["Strict ACID", "Enterprise ERP", "Virtual Threads"],
    p99Score: "96.8/100",
    spec: "Banking Grade",
    specClass: "text-tertiary",
    logo: "java",
    keywords: "java spring boot enterprise banking erp transactional acid graalvm",
  },
  {
    id: "nodejs",
    title: "Node.js & NestJS",
    subtitle: "Node v20 LTS",
    versionBadge: "NestJS 10",
    versionBadgeClass: "bg-surface-container text-on-surface",
    desc: "Architecturally disciplined enterprise microservice architectures, bidirectional WebSockets, and high-velocity BFF (Backend-For-Frontend) layers.",
    tags: ["Clean Hexagonal Arch", "WebSockets", "BFF Layer"],
    p99Score: "94/100",
    spec: "Realtime Engine",
    specClass: "text-primary",
    logo: "nodejs",
    keywords: "nodejs node nestjs typescript websockets realtime gateway api",
  },
  {
    id: "vue",
    title: "Vue 3 & Nuxt 3",
    subtitle: "Composition API",
    versionBadge: "Nuxt 3.12",
    versionBadgeClass: "bg-surface-container text-on-surface",
    desc: "Ultra-ergonomic frontend state engines, SSR dashboards, lightweight client hydration, and instantaneous build-time feedback with Vite.",
    tags: ["Pinia State", "Auto Imports", "Admin Consoles"],
    p99Score: "97.2/100",
    spec: "Lean UI",
    specClass: "text-primary",
    logo: "vue",
    keywords: "vue nuxt nuxtjs frontend composition api pinia vite",
  },
];

export const benchmarkRows: BenchmarkRow[] = [
  {
    id: "postgres",
    name: "PostgreSQL 16 (RDS/Aurora)",
    role: "Primary Relational OLTP & pgvector",
    throughput: "45,000+",
    latency: "1.8 ms",
    latencyClass: "text-primary",
    rto: "< 30 sec (Multi-AZ)",
    status: "Primary Default",
    statusClass: "bg-primary/10 text-primary",
    logo: "postgres",
  },
  {
    id: "redis",
    name: "Redis Enterprise / Dragonfly",
    role: "In-Memory Cache, Pub/Sub, Session Store",
    throughput: "400,000+",
    latency: "< 0.4 ms",
    latencyClass: "text-primary",
    rto: "Instant Hot-Standby",
    status: "High Frequency",
    statusClass: "bg-primary/10 text-primary",
    logo: "redis",
  },
  {
    id: "bigquery",
    name: "Google BigQuery & Snowflake",
    role: "Serverless Petabyte OLAP Data Warehouse",
    throughput: "Petabyte Stream",
    latency: "Sub-second query",
    latencyClass: "text-on-surface",
    rto: "99.99% Cloud SLA",
    status: "Analytics Core",
    statusClass: "bg-secondary-container text-on-secondary",
    logo: "bigquery",
    icon: "snowflake",
  },
  {
    id: "dynamodb",
    name: "AWS DynamoDB / MongoDB Atlas",
    role: "Document & Partition Key NoSQL Storage",
    throughput: "Auto-scaling (Infinite)",
    latency: "3.2 ms",
    latencyClass: "text-primary",
    rto: "Multi-region Global",
    status: "Multi-Region",
    statusClass: "bg-surface-container text-on-surface-variant",
    icon: "dataset",
  },
  {
    id: "watermelon",
    name: "WatermelonDB & SQLite",
    role: "Offline-First Mobile Native Sync Layer",
    throughput: "Local In-Thread",
    latency: "Zero Network Lag",
    latencyClass: "text-primary",
    rto: "Deterministic Sync",
    status: "Mobile First",
    statusClass: "bg-primary/10 text-primary",
    icon: "sync_saved_locally",
  },
];

export const dbDeepDives: DeepDive[] = [
  {
    icon: "schema",
    title: "Native Vector Embeddings (pgvector)",
    desc: "We eliminate redundant vector databases (Pinecone/Milvus) when building enterprise RAG. Postgres + pgvector scales to tens of millions of documents with deterministic relational safety.",
  },
  {
    icon: "published_with_changes",
    title: "Zero-Downtime Migration Pipelines",
    desc: "Automated dual-write and schema migration pipelines executed through Flyway and Prisma Migrate with roll-forward canary checkpoints.",
  },
];

export const cloudSources: CloudToolCard[] = [
  { id: "meta", title: "Meta (FB & IG)", icon: "dns", desc: "Conversions API (CAPI)" },
  { id: "tiktok", title: "TikTok Events API", icon: "dns", desc: "Real-Time Event Relay" },
  {
    id: "youtube",
    title: "YouTube / Google Ads",
    icon: "dns",
    desc: "Enhanced Conversions",
  },
];

export const cloudDestinations: CloudToolCard[] = [
  {
    id: "bigquery",
    title: "Google BigQuery",
    desc: "Raw Partitioned Warehouse",
    logo: "bigquery",
  },
  {
    id: "attribution",
    title: "Attribution Models",
    desc: "Marketing Mix Modeling (MMM)",
    icon: "pie_chart",
  },
];

export const cloudToolCards: CloudToolCard[] = [
  {
    id: "ecs",
    title: "AWS ECS & Lambda",
    logo: "aws",
    desc: "Containerized auto-scaling with Fargate and event-driven functions for bursty workloads.",
  },
  {
    id: "terraform",
    title: "Terraform & OpenTofu",
    logo: "terraform",
    desc: "100% codified cloud state. Multi-region redundancy reproducable in a single command.",
  },
  {
    id: "github",
    title: "GitHub Actions & Snyk",
    logo: "github-actions",
    icon: "security",
    desc: "Automated SAST/DAST security scanning, zero secret exposure, and sub-4 min deploy times.",
  },
];

export const portalsCards: PortalCard[] = [
  {
    id: "shopify",
    title: "Shopify Plus & Hydrogen",
    badge: "E-Commerce Benchmark",
    badgeClass: "bg-primary/10 text-primary",
    icon: "shopping_bag",
    logo: "shopify",
    desc: "Decoupled headless storefronts powered by Shopify Hydrogen on Oxygen edge servers. Sub-600ms page transitions with high-converting localized checkouts and multi-currency UAE payment gateways.",
    tags: ["Headless Hydrogen", "Shopify GraphQL", "UAE FTA Tax Engines"],
    metricLeft: "Production TTFB: < 220ms",
    metricRight: "100% Checkout SLA",
  },
  {
    id: "sharepoint",
    title: "SharePoint Online & Graph API",
    badge: "Internal Intranets",
    badgeClass: "bg-surface-container text-on-surface",
    icon: "corporate_fare",
    logo: "sharepoint",
    desc: "Enterprise-grade internal portals, document governance engines, Microsoft Azure Active Directory SAML/SSO federations, and automated approval workflows built on modern SPFx components.",
    tags: ["SPFx React", "Microsoft Graph", "Azure AD SSO"],
    metricLeft: "Enterprise Security: ISO 27001",
    metricRight: "Zero Data Breach",
  },
  {
    id: "liferay",
    title: "Liferay DXP (Enterprise Portals)",
    badge: "Government & Banking",
    badgeClass: "bg-surface-container text-on-surface",
    icon: "domain",
    desc: "High-security public sector customer portals, complex permission topologies, self-service government dashboards, and multi-tenant citizen engagement matrices.",
    tags: ["Liferay 7.4", "OSGi Architecture", "Fine-Grained RBAC"],
    metricLeft: "Security Standard: SOC2 Type II",
    metricRight: "Banking Approved",
  },
  {
    id: "magnolia",
    title: "Magnolia CMS & OpenCart API",
    badge: "Flexible Commerce",
    badgeClass: "bg-surface-container text-on-surface",
    icon: "auto_stories",
    desc: "Composable headless content orchestration for global brands alongside high-margin, custom-built OpenCart headless API engines for regional wholesale B2B portals.",
    tags: ["Decoupled REST", "Multi-Language Content", "Wholesale ERP Sync"],
    metricLeft: "Scalability: 1M+ SKUs",
    metricRight: "99.98% Uptime",
  },
];

export const mobileCards: MobileCard[] = [
  {
    id: "react-native",
    title: "React Native & Expo SDK 52",
    badge: "Top Choice",
    badgeClass: "bg-primary/10 text-primary",
    icon: "phone_android",
    logo: "react-native",
    desc: "Unified codebase across iOS and Android with New Architecture (Fabric & TurboModules) enabled. Zero-downtime OTA code updates.",
    tags: ["Expo EAS", "Hermes Engine"],
    footer: "95% Code Share Across OS",
  },
  {
    id: "flutter",
    title: "Flutter & Dart 3",
    badge: "Impeller Ready",
    badgeClass: "bg-surface-container text-on-surface",
    icon: "flutter",
    logo: "flutter",
    desc: "Pixel-perfect high-animation interfaces with the new Impeller rendering backend, ensuring zero shader-compilation jank.",
    tags: ["Bloc State", "Hardware Sensors"],
    footer: "Deterministic 120Hz Animations",
    footerClass: "text-tertiary",
  },
  {
    id: "native",
    title: "Swift & Kotlin Native",
    badge: "Native Direct",
    badgeClass: "bg-surface-container text-on-surface",
    icon: "devices",
    desc: "For compute-heavy biometric processing, BLE hardware peripherals, and low-level audio/video processing pipelines.",
    tags: ["SwiftUI", "Jetpack Compose"],
    footer: "Direct Metal / NDK Access",
  },
];

export const dataFeatures: DataFeature[] = [
  { id: "dbt", icon: "verified", logo: "dbt", label: "dbt Cloud / Core Tested" },
  { id: "airflow", icon: "account_tree", label: "Airflow DAG Reliability" },
  { id: "looker", icon: "monitoring", label: "Looker Semantic Layer" },
  { id: "powerbi", icon: "table_chart", label: "Power BI DirectLake Mode" },
];

export const growthCards: GrowthCard[] = [
  {
    id: "meta",
    title: "Meta Conversions API (CAPI) Server Gateway",
    badge: "Event Match Score: 9.2/10",
    badgeClass: "bg-primary/10 text-primary",
    icon: "ads_click",
    logo: "meta",
    desc: "Direct server-to-server connection dispatching purchase events, lead submissions, and user interaction hashes without browser ad-blocker interception.",
    metricLeft: "Attribution Lift:",
    metricRight: "+24% Tracked Conversions",
    rightClass: "text-primary",
  },
  {
    id: "gtm",
    title: "Google Tag Manager (Server-Side) & TikTok API",
    badge: "Cloudflare Worker Relays",
    badgeClass: "bg-surface-container text-on-surface",
    icon: "hub",
    desc: "Custom first-party proxy domains that cleanse PII data, enforce strict GDPR/FTA compliance, and distribute real-time telemetry to multiple downstream ad endpoints simultaneously.",
    metricLeft: "First-Party Cookie TTL:",
    metricRight: "365-Day Safe Persistence",
    rightClass: "text-primary",
  },
];

export const bottomConversion = {
  badge: "Zero Architectural Debt",
  title: "Audit or Modernize Your Technology Stack",
  desc: "Have legacy monolithic debt or migrating from aging on-premise infrastructure? Speak with a NexusCraft Principal Architect to map your modernization roadmap.",
  primaryCTA: "Book 30-Min Tech Stack Audit",
  secondaryCTA: "Download PDF Standards",
};

export const evaluationMetrics = [
  { label: "Open-Source Maturity", value: "> 5 Yrs", width: "92%" },
  { label: "Zero Cold-Start P99", value: "< 150ms", width: "88%" },
  { label: "Global Talent Pool", value: "Top Tier", width: "95%" },
];

export const sidebarCategories: (Omit<SidebarCategory, "count"> & {
  data: unknown[];
})[] = [];
