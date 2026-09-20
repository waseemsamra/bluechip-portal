"use client";

import type { JSX } from "react";
import { useState, useRef, useEffect } from "react";

const services = [
  {
    num: "01",
    label: "CORE CODE",
    icon: "code",
    title: "Custom Software & Cloud",
    price: "$20k – $80k Sprint",
    weeks: "4-8 Wks",
    desc: "Fault-tolerant microservices, async APIs, and custom enterprise dashboards engineered for high throughput and zero technical regressions.",
    tags: ["React", "Go", "Python", "Node.js"],
    accent: "text-emerald-500",
  },
  {
    num: "02",
    label: "MOBILE",
    icon: "smartphone",
    title: "iOS & Android Apps",
    price: "$20k – $75k Sprint",
    weeks: "4-7 Wks",
    desc: "High-performance native and cross-platform apps with rock-solid offline synchronization, biometric authentication, and Apple/Google store compliance.",
    tags: ["React Native", "Flutter", "Swift", "Kotlin"],
    accent: "text-blue-500",
  },
  {
    num: "03",
    label: "E-COMMERCE",
    icon: "shopping_bag",
    title: "Shopify Plus & Headless",
    price: "$15k – $60k Sprint",
    weeks: "3-6 Wks",
    desc: "Custom Hydrogen storefronts, custom checkout extensibility, enterprise ERP integrations, and high-converting OpenCart/Shopify Plus rebuilds.",
    tags: ["Shopify Plus", "Hydrogen", "Sanity CMS", "OpenCart"],
    accent: "text-orange-500",
  },
  {
    num: "04",
    label: "DATA & BI",
    icon: "query_stats",
    title: "Modern Data Warehousing",
    price: "$20k – $60k Sprint",
    weeks: "3-6 Wks",
    desc: "Real-time CDC data pipelines, automated transformation contracts, and executive Looker/Tableau dashboards with sub-second query performance.",
    tags: ["Snowflake", "BigQuery", "dbt Core", "Airflow"],
    accent: "text-purple-500",
  },
  {
    num: "05",
    label: "REGIONAL ERP",
    icon: "account_balance_wallet",
    title: "UAE VAT ERP & Invoicing",
    price: "$20k – $70k Sprint",
    weeks: "4-8 Wks",
    desc: "Bespoke ERP architecture fully compliant with UAE Federal Tax Authority (FTA Phase 2 E-Invoicing) and Peppol format specifications.",
    tags: ["FTA Phase 2", "Peppol", "XML UBL", "Custom ERP"],
    accent: "text-teal-500",
  },
  {
    num: "06",
    label: "HOSTING & CLOUD",
    icon: "dns",
    title: "Managed Bare-Metal HA",
    price: "$3k – $25k Setup",
    weeks: "1-2 Wks",
    desc: "Dedicated NVMe high-availability servers, managed Kubernetes clusters, automated zero-day patching, and 99.99% uptime guarantees.",
    tags: ["NVMe", "Kubernetes", "99.99% SLA", "DDoS Shield"],
    accent: "text-indigo-500",
  },
  {
    num: "07",
    label: "SMB ESSENTIALS",
    icon: "mail",
    title: "Web Hosting & Email",
    price: "$500 – $3,500",
    weeks: "1-3 Days",
    desc: "Turnkey business onboarding: Google Workspace / Microsoft 365, strict DMARC/SPF/DKIM deliverability setup, and fast cPanel/Nginx web hosting.",
    tags: ["Workspace", "M365", "DMARC", "SSL Zero-Spam"],
    accent: "text-rose-500",
  },
  {
    num: "08",
    label: "GROWTH & CAPI",
    icon: "campaign",
    title: "Paid Social & Signal CAPI",
    price: "$5k – $30k Sprint",
    weeks: "2-4 Wks",
    desc: "Server-side Conversions API (Meta CAPI, TikTok Events API), full-funnel attribution tracking, and targeted demand-generation ad funnels.",
    tags: ["Meta CAPI", "TikTok API", "Server GTM", "Attribution"],
    accent: "text-pink-500",
  },
  {
    num: "09",
    label: "ENTERPRISE CMS",
    icon: "grid_view",
    title: "Enterprise Portals & CMS",
    price: "$25k – $85k Sprint",
    weeks: "4-8 Wks",
    desc: "Scalable intranet portals, multi-tenant documentation platforms, custom SharePoint setups, and Liferay/Magnolia enterprise publishing stacks.",
    tags: ["SharePoint", "Liferay", "Magnolia", "SSO RBAC"],
    accent: "text-cyan-500",
  },
  {
    num: "10",
    label: "ON-SITE IT",
    icon: "router",
    title: "IT Networks & Hardware",
    price: "$5k – $35k On-site",
    weeks: "1-3 Wks",
    desc: "Commercial structured cabling, server rack assembly, hardware diagnostics, firewall appliance installations, and on-premises physical recovery.",
    tags: ["Cat6A Fiber", "Server Racks", "Fortinet", "Cisco Meraki"],
    accent: "text-amber-500",
  },
];

export default function ServicesCarousel(): JSX.Element {
  const [activeIndex, setActiveIndex] = useState(0);
  const trackRef = useRef<HTMLDivElement>(null);

  const scrollToIndex = (idx: number) => {
    const track = trackRef.current;
    if (!track) return;
    const cards = track.querySelectorAll(".carousel-item");
    if (cards[idx]) {
      cards[idx].scrollIntoView({
        behavior: "smooth",
        inline: "start",
        block: "nearest",
      });
    }
  };

  const handlePrev = () => {
    const newIdx = Math.max(0, activeIndex - 1);
    setActiveIndex(newIdx);
    scrollToIndex(newIdx);
  };

  const handleNext = () => {
    const newIdx = Math.min(services.length - 1, activeIndex + 1);
    setActiveIndex(newIdx);
    scrollToIndex(newIdx);
  };

  const handleDotClick = (idx: number) => {
    setActiveIndex(idx);
    scrollToIndex(idx);
  };

  const handleScroll = () => {
    const track = trackRef.current;
    if (!track) return;
    const cards = track.querySelectorAll(".carousel-item");
    if (cards.length === 0) return;
    const cardWidth = (cards[0] as HTMLElement).offsetWidth + 24;
    const activeIdx = Math.round(track.scrollLeft / cardWidth);
    setActiveIndex(Math.min(activeIdx, services.length - 1));
  };

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    track.addEventListener("scroll", handleScroll);
    return () => track.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      className="w-full bg-surface-container-lowest py-space-xl lg:py-[60px] border-b border-outline-variant/40"
      id="services-carousel"
    >
      <div className="w-full max-w-[1440px] mx-auto px-margin-mobile md:px-gutter lg:px-margin flex flex-col gap-space-xl lg:gap-[40px]">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-md lg:gap-6">
          <div className="flex flex-col gap-space-xs lg:gap-2 max-w-2xl">
            <div className="inline-flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-primary"></span>
              <span className="font-code-badge text-xs font-bold uppercase tracking-wider text-primary">
                Interactive Directory
              </span>
            </div>
            <h2 className="font-headline-xl text-2xl sm:text-3xl lg:text-4xl font-extrabold text-on-surface tracking-tight">
              Featured Engineering &amp; IT Services
            </h2>
            <p className="font-body-md text-on-surface-variant">
              Swipe or browse our 10 end-to-end engineering, cloud, regional
              ERP, and infrastructure capabilities with transparent upfront
              budgets and fixed-sprint delivery timeframes.
            </p>
          </div>

          <div className="flex items-center gap-space-sm">
            <button
              aria-label="Previous service"
              onClick={handlePrev}
              disabled={activeIndex === 0}
              className="w-11 h-11 rounded-full border border-outline-variant bg-surface-container-lowest text-on-surface flex items-center justify-center hover:bg-surface-container hover:text-primary transition-all shadow-sm disabled:opacity-40 disabled:cursor-not-allowed"
              type="button"
            >
              <span className="material-symbols-outlined text-[20px]">
                arrow_back
              </span>
            </button>
            <button
              aria-label="Next service"
              onClick={handleNext}
              disabled={activeIndex === services.length - 1}
              className="w-11 h-11 rounded-full border border-outline-variant bg-surface-container-lowest text-on-surface flex items-center justify-center hover:bg-surface-container hover:text-primary transition-all shadow-sm disabled:opacity-40 disabled:cursor-not-allowed"
              type="button"
            >
              <span className="material-symbols-outlined text-[20px]">
                arrow_forward
              </span>
            </button>
          </div>
        </div>

        <div className="relative overflow-hidden">
          <div
            ref={trackRef}
            className="service-carousel flex gap-6 overflow-x-auto no-scrollbar scroll-smooth pb-6 pt-2"
            id="service-track"
          >
            {services.map((service) => (
              <div
                key={service.title}
                className="carousel-item flex-none w-[320px] sm:w-[380px] bg-surface-container-low rounded-2xl p-6 border border-outline-variant/60 flex flex-col justify-between hover:shadow-xl hover:border-primary/50 transition-all duration-300 group"
              >
                <div className="flex flex-col gap-4">
                  <div className="flex items-center justify-between">
                    <span className="font-code-badge text-xs font-bold text-primary bg-primary-fixed/30 px-2.5 py-1 rounded-full">
                      {service.num} · {service.label}
                    </span>
                    <span className="text-xs font-bold text-on-surface bg-surface-container-lowest px-2 py-0.5 rounded border border-outline-variant/40">
                      {service.weeks}
                    </span>
                  </div>

                  <div className="flex items-center gap-3">
                    <div
                      className={`w-12 h-12 rounded-xl bg-surface-container-lowest flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-on-primary transition-colors shadow-sm group-hover:scale-110`}
                    >
                      <span className="material-symbols-outlined text-[26px]">
                        {service.icon}
                      </span>
                    </div>
                    <div>
                      <h3 className="font-headline-sm text-lg font-bold text-on-surface">
                        {service.title}
                      </h3>
                      <span className="text-xs text-primary font-bold">
                        {service.price}
                      </span>
                    </div>
                  </div>

                  <p className="font-body-sm text-sm text-on-surface-variant leading-relaxed">
                    {service.desc}
                  </p>

                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {service.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[11px] font-medium bg-surface-container-lowest px-2 py-0.5 rounded text-on-surface-variant"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-6 border-t border-outline-variant/40 mt-4 flex items-center justify-between">
                  <span className="text-xs font-bold text-emerald-700">
                    Enterprise SLA Ready
                  </span>
                  <a
                    className="text-xs font-bold text-primary group-hover:underline flex items-center gap-1"
                    href="#consultation"
                  >
                    <span>Inquire Spec</span>
                    <span className="material-symbols-outlined text-[14px]">
                      arrow_forward
                    </span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div
          className="flex items-center justify-center gap-2"
          id="carousel-dots"
        >
          {services.map((_, idx) => (
            <button
              key={idx}
              aria-label={`Go to slide ${idx + 1}`}
              onClick={() => handleDotClick(idx)}
              className={`rounded-full transition-all ${
                idx === activeIndex
                  ? "w-6 h-2.5 bg-primary"
                  : "w-2.5 h-2.5 bg-outline-variant"
              }`}
              type="button"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
