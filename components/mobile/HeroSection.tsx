"use client";

import type { JSX } from "react";

export default function HeroSection(): JSX.Element {
  return (
    <section className="w-full py-space-xl relative overflow-hidden bg-gradient-to-b from-surface via-surface-container-low/30 to-surface">
      <div className="max-w-[1280px] mx-auto px-margin-mobile md:px-gutter lg:px-margin">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-center">
          <div className="lg:col-span-6 flex flex-col gap-space-md">
            <div className="inline-flex items-center gap-space-xs self-start px-space-md py-space-xs rounded-full bg-primary/10 text-primary font-label-sm text-label-sm tracking-wide uppercase">
              <span className="material-symbols-outlined text-[16px]">verified</span>
              Production-Ready Cross-Platform Engineering
            </div>
            <h1 className="font-headline-xl text-headline-xl text-on-surface tracking-tight leading-tight">
              Native-Performance <span className="text-primary underline decoration-primary/30 decoration-wavy underline-offset-8">iOS &amp; Android Apps</span> Built for Growing Businesses.
            </h1>
            <p className="font-body-xl text-body-xl text-on-surface-variant leading-relaxed">
              Stop burning $150k+ with sluggish mobile agencies or wrestling with unreliable offshore code. We engineer high-retention, cross-platform mobile apps for iOS &amp; Android (React Native &amp; Flutter) with offline sync, native push notifications, and guaranteed fixed pricing.
            </p>
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-space-sm pt-space-xs">
              <a
                className="inline-flex items-center justify-center gap-space-xs px-space-lg py-space-sm rounded-full bg-primary hover:bg-primary-container text-on-primary font-label-lg text-label-lg transition-all shadow-[0_4px_16px_rgba(0,105,72,0.25)] hover:shadow-[0_8px_24px_rgba(0,105,72,0.35)]"
                href="#pricing-packages"
              >
                Explore Fixed-Scope Packages ($20k–$75k)
                <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
              </a>
              <a
                className="inline-flex items-center justify-center gap-space-xs px-space-md py-space-sm rounded-full bg-surface-container text-on-surface hover:bg-surface-container-high font-label-lg text-label-lg transition-colors"
                href="#scoping-consultation"
              >
                <span className="material-symbols-outlined text-[18px] text-primary">calendar_today</span>
                Book 30-Min Technical Call
              </a>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-space-sm pt-space-md text-on-surface-variant font-label-sm text-label-sm">
              <div className="flex items-center gap-1.5 p-space-xs rounded-lg bg-surface-container-lowest shadow-sm">
                <span className="material-symbols-outlined text-primary text-[18px]">gavel</span>
                100% Fixed-Price
              </div>
              <div className="flex items-center gap-1.5 p-space-xs rounded-lg bg-surface-container-lowest shadow-sm">
                <span className="material-symbols-outlined text-primary text-[18px]">bolt</span>
                6–10 Wks Sprints
              </div>
              <div className="flex items-center gap-1.5 p-space-xs rounded-lg bg-surface-container-lowest shadow-sm">
                <span className="material-symbols-outlined text-primary text-[18px]">task_alt</span>
                App Store Handled
              </div>
              <div className="flex items-center gap-1.5 p-space-xs rounded-lg bg-surface-container-lowest shadow-sm">
                <span className="material-symbols-outlined text-primary text-[18px]">lock_reset</span>
                Full IP Transfer
              </div>
            </div>
          </div>
          <div className="lg:col-span-6 flex flex-col gap-space-md relative">
            <div className="absolute -top-12 -right-12 w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none"></div>
            <div className="relative rounded-2xl overflow-hidden shadow-xl bg-surface-container-lowest p-space-xs group">
              <img
                alt="Mobile app UI mockup showcase on iOS and Android devices"
                className="w-full h-auto rounded-xl object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuB6yipIDIjkiIYli2PLsUOVFaMeGkCtdQ5lmJCoZ-IJS4lA62WGMJjCReDYUXIeqlGZrK5Ta5I0y1_ZoAQiQtHf30Du-YmfdYgZ624W6EPrEGO2gqEZNmbqM3n5GAAWnqGNf44moqBmQJ7v3TFr0JX5DPxrwd5WrPmv7HW0ql5dXy_iZR_vfxZfOb6OzhMWOp3hEMOdsOOZzjXdNMf_NaiZZTDmwX7WkSt3hYEnVef-_AXSa2JOvf-J"
              />
              <div className="absolute top-4 left-4 flex flex-col gap-2 pointer-events-none">
                <div className="backdrop-blur-md bg-surface-container-lowest/90 px-space-sm py-1 rounded-full shadow-md flex items-center gap-2 text-on-surface font-label-sm text-label-sm">
                  <span className="w-2 h-2 rounded-full bg-primary animate-ping"></span>
                  <span className="font-semibold text-primary">App Store:</span> Approved v2.4.1
                </div>
                <div className="backdrop-blur-md bg-surface-container-lowest/90 px-space-sm py-1 rounded-full shadow-md flex items-center gap-2 text-on-surface font-label-sm text-label-sm">
                  <span className="material-symbols-outlined text-[14px] text-tertiary">android</span>
                  <span className="font-semibold text-tertiary">Google Play:</span> Active Production
                </div>
              </div>
              <div className="absolute bottom-4 right-4 flex flex-col items-end gap-2 pointer-events-none">
                <div className="backdrop-blur-md bg-surface-container-lowest/90 px-space-sm py-1 rounded-full shadow-md flex items-center gap-1.5 text-on-surface font-label-sm text-label-sm">
                  <span className="material-symbols-outlined text-[14px] text-primary">speed</span>
                  Sub-16ms 60fps Native UI
                </div>
                <div className="backdrop-blur-md bg-surface-container-lowest/90 px-space-sm py-1 rounded-full shadow-md flex items-center gap-1.5 text-on-surface font-label-sm text-label-sm">
                  <span className="material-symbols-outlined text-[14px] text-primary">cloud_done</span>
                  WatermelonDB Offline-First Synced
                </div>
              </div>
            </div>
            <div className="bg-surface-container-lowest rounded-xl p-space-md shadow-md flex flex-col gap-space-sm">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary text-[20px]">terminal</span>
                  <span className="font-headline-sm text-headline-sm text-on-surface">Automated Production CI/CD Build Monitor</span>
                </div>
                <span className="px-2 py-0.5 rounded-full bg-primary-fixed text-on-primary-fixed font-label-sm text-label-sm font-semibold">
                  Active Pipeline
                </span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-space-xs text-body-sm font-body-sm pt-space-xs">
                <div className="p-space-sm rounded-lg bg-surface-container-low flex flex-col gap-1">
                  <div className="flex items-center justify-between text-on-surface-variant font-label-sm text-label-sm">
                    <span>Fastlane Build</span>
                    <span className="text-primary font-bold">100% Passed</span>
                  </div>
                  <div className="w-full bg-surface-container-high h-1.5 rounded-full overflow-hidden">
                    <div className="bg-primary h-full w-full"></div>
                  </div>
                  <span className="text-[10px] text-on-surface-variant">iOS ipa + Android aab bundled</span>
                </div>
                <div className="p-space-sm rounded-lg bg-surface-container-low flex flex-col gap-1">
                  <div className="flex items-center justify-between text-on-surface-variant font-label-sm text-label-sm">
                    <span>Push Notif Gateway</span>
                    <span className="text-primary font-bold">Ready</span>
                  </div>
                  <div className="w-full bg-surface-container-high h-1.5 rounded-full overflow-hidden">
                    <div className="bg-primary h-full w-[96%]"></div>
                  </div>
                  <span className="text-[10px] text-on-surface-variant">APNs & Firebase Cloud Messaging</span>
                </div>
                <div className="p-space-sm rounded-lg bg-surface-container-low flex flex-col gap-1">
                  <div className="flex items-center justify-between text-on-surface-variant font-label-sm text-label-sm">
                    <span>SQLite Offline Queue</span>
                    <span className="text-primary font-bold">0 Pending</span>
                  </div>
                  <div className="w-full bg-surface-container-high h-1.5 rounded-full overflow-hidden">
                    <div className="bg-primary h-full w-full"></div>
                  </div>
                  <span className="text-[10px] text-on-surface-variant">Zero transaction packet loss</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
