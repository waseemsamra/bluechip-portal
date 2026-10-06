import type { JSX } from "react";
import TechStackDirectory from "@/components/tech-stack/TechStackDirectory";

export const metadata = {
  title: "Tech Stack Directory | BlueChip Tech",
  description:
    "Architectural Stack & Tooling Index. Vetted frameworks, distributed databases, cloud-native DevOps pipelines, and AI-accelerated tooling with zero vendor lock-in and deterministic P99 latency.",
  keywords:
    "Tech Stack, Engineering Tools, Next.js, React, Go, Python, PostgreSQL, Redis, AWS, Cloudflare, Terraform, DevOps, CI/CD, Headless Commerce, Mobile, Data Warehousing, dbt, Marketing CAPI",
  openGraph: {
    title: "Tech Stack Directory | BlueChip Tech",
    description:
      "Browse our architectural stack & tooling index: production-grade frameworks, databases, and cloud-native DevOps selected for zero vendor lock-in.",
    type: "website",
  },
};

export default function TechStackPage(): JSX.Element {
  return (
    <main className="w-full pt-20 bg-background min-h-screen">
      <TechStackDirectory />
    </main>
  );
}
