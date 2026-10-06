import type { JSX } from "react";
import SpotlightCard from "@/components/work/SpotlightCard";

const spotlightCases = [
  {
    id: "omnihub",
    title: "OmniHub Warehouse Scanner",
    description:
      "Ruggedized, offline-first mobile inventory tracking system with sub-second Honeywell barcode ingestion and bi-directional ERP sync across 6 distribution hubs.",
    impact: "94% faster cycle counts & zero lost shipments",
    price: "$48,000",
    weeks: "8 Weeks",
    industry: "Logistics & Supply Chain",
    image:
      "https://lh3.googleusercontent.com/aida/AEtjO1X5RyMhgmUvtXsQRZwgrC8bjOoJaer29-pBa0bFSfp99Zvq6vOR2-ZPq0QmhSf_ptjTT_VYfW23gY17LfsT2NIOnc9eTXsstyFuI4C8AG-foXIP7zOMoXuiOQcH11XNgvuVdgyqaH3IQeJ9pquECxUR0OhW0LW-VAnM8phEnYGbP-T2MHk8yLmVTgeFYAp36Kn7rxZDgdeMIec10s2A-agwwHFPlKprOJTAm6UYstVCXg_iXwaX1I99cQ",
    imageAlt: "OmniHub Mobile Scanner App",
    icon: "qr_code_scanner",
    tags: ["React Native", "SQLite", "Node.js", "Honeywell SDK"],
  },
  {
    id: "carepoint",
    title: "CarePoint Clinical Intranet",
    description:
      "HIPAA-compliant medical knowledge and triage portal unifying document compliance, shifts, and EHR lookup protocols for 850+ active healthcare specialists.",
    impact: "Replaced 4 legacy servers; 100% audit pass",
    price: "$42,000",
    weeks: "6 Weeks",
    industry: "Healthcare & MedTech",
    image:
      "https://lh3.googleusercontent.com/aida/AEtjO1Ubx_oUk0ju69N6XcU3NZsl7AitkzHxk8kgCDJry2POQG98lHtJ0JnbDovI4OlqnkejdcVDeKdLhQ3df56rqxeJ4vHJ-7amX9rh9ToaxnjRxAJj2B9zuOk9GD64eG-ay9AooAqUVpM5K33eKtuluxsGGdjdh1jEoYcYxXgk5nhDgCrV3v8O88Jgsbf4SDMLjenk0dHVRor2ycAOzQzWqoUeMzUXlZ0sd-7Sq0RvEWHsAOsmP5j636o99QE",
    imageAlt: "CarePoint Healthcare Intranet",
    icon: "local_hospital",
    tags: ["SharePoint Online", "Azure AD SSO", "Power Automate", "HIPAA"],
  },
  {
    id: "aura-luxe",
    title: "Aura Luxe VIP Storefront",
    description:
      "Ultra-fast headless mobile commerce application featuring one-tap Apple Pay checkouts, personalized drop alerts, and dynamic product recommendations.",
    impact: "+38% repeat buyer rate & 3.1x mobile conversion",
    price: "$36,000",
    weeks: "6 Weeks",
    industry: "D2C & E-Commerce",
    image:
      "https://lh3.googleusercontent.com/aida/AEtjO1VQjQH3PV6eyxMTxuTqee80gbk5mmdpBowDQ7eAz9Y_MPpIGVwIK7dBsW1WBB9BWMzv0Uawsjhb3rqSyv-JAofVaxxai4i9Q3ylCQoJI4NJbWa7r3chgVgNK0bzpFVivkW89haaCdDUnpKdPPYM7gqUABzE5aliRoZFynd7NsKw2CYnn3UxOl4mkubDSk7nNflEKxtCDm1FHmg2JRRl2_i_Pqt8AXp6BwChFgNQuz8epRhh1yBIyQOFyN4",
    imageAlt: "Aura Luxe Mobile Commerce",
    icon: "shopping_bag",
    tags: ["Flutter", "Shopify API", "Klaviyo SDK", "Stripe"],
  },
];

export default function SpotlightCases(): JSX.Element {
  return (
    <section className="max-w-[1240px] mx-auto px-margin-mobile md:px-gutter lg:px-margin py-space-lg">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-sm mb-space-lg">
        <div>
          <span className="font-label-sm text-label-sm text-primary uppercase font-bold tracking-widest block mb-1">Flagship Architectures</span>
          <h2 className="font-headline-xl text-headline-xl text-on-surface">Spotlight Case Studies</h2>
        </div>
        <p className="font-body-md text-body-md text-on-surface-variant max-w-md">
          Deep dive into three production builds demonstrating our offline edge synchronization, high-concurrency microservices, and enterprise compliance engines.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-space-md">
        {spotlightCases.map((spotlight) => (
          <SpotlightCard key={spotlight.id} case={spotlight} />
        ))}
      </div>
    </section>
  );
}
