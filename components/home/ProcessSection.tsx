"use client";

import React from "react";
import {
  MessageSquare,
  FileCheck,
  Send,
  UserCheck,
  ShieldCheck,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import Link from "next/link";

const steps = [
  {
    step: "01",
    title: "Honest Case Consultation",
    desc: "We review your original credentials, salary statements, and passport history. If your paperwork has a critical flaw, we tell you before taking five rupees. No false hopes.",
    icon: MessageSquare,
    featured: false,
    badge: "Step 01 · 60s Audit",
  },
  {
    step: "02",
    title: "Document Vetting & Court Translation",
    desc: "Apostilles from MEA, certified court translations into Czech or Slovenian, and verified corporate vacancy checks. Every single page is audited in Dwarka.",
    icon: FileCheck,
    featured: true, // SkyWings signature featured blue card
    badge: "Step 02 · Zero Errors",
  },
  {
    step: "03",
    title: "Direct Application Filing",
    desc: "We file through authorized official portals (Window Malaysia, KDMD Russia, ICA Singapore, or VFS Delhi). You receive the official submission proof and tracking ID immediately.",
    icon: Send,
    featured: false,
    badge: "Step 03 · Direct Consular",
  },
  {
    step: "04",
    title: "Mock Interview Rehearsal",
    desc: "If your category requires an in-person embassy appointment, we run realistic mock sessions covering your syllabus, employer specifics, and itinerary questions.",
    icon: UserCheck,
    featured: false,
    badge: "Step 04 · Embassy Prep",
  },
  {
    step: "05",
    title: "Decision & Pre-Landing Brief",
    desc: "Once your visa stamp or biometric approval letter arrives, we provide pre-departure guidance: local registration rules, border health cards, and sim setup.",
    icon: ShieldCheck,
    featured: false,
    badge: "Step 05 · Safe Arrival",
  },
];

export default function ProcessSection() {
  return (
    <section className="py-24 bg-white border-t border-slate-200/80 relative overflow-hidden">
      {/* Ambient background decoration */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-sky-100/50 rounded-full blur-3xl pointer-events-none -translate-y-1/2" />

      <div className="max-w-[1280px] mx-auto px-6 relative z-10">
        {/* Section Header (Inspired by Reference Image 1 - Journey To The Skies Made Simple!) */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-sky-100/80 border border-sky-200 text-sky-800 text-xs font-semibold uppercase tracking-wider mb-4 shadow-2xs">
            <Sparkles className="w-3.5 h-3.5 text-sky-600" />
            <span>The Roadmap · Clear Milestones</span>
          </div>

          <h2 className="font-display font-medium text-3xl sm:text-5xl text-slate-900 leading-tight mb-4">
            Journey to the skies made simple. <br />
            <span className="italic text-[#005A9C] font-normal">Complete transparency.</span>
          </h2>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            No vanishing acts. No passing files to anonymous agents in third-tier cities. Here is exactly what happens from our first conversation to your visa decision.
          </p>
        </div>

        {/* 
          Process Cards (Inspired by Reference Image 1 - SkyWings 3-Card & Multi-Card Flow)
        */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {steps.slice(0, 3).map((s) => {
            const Icon = s.icon;
            if (s.featured) {
              return (
                <div
                  key={s.step}
                  className="rounded-3xl p-8 sm:p-10 bg-gradient-to-br from-[#005A9C] to-[#0A3B70] text-white shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col justify-between relative overflow-hidden group transform lg:-translate-y-2 border-2 border-sky-300/40"
                >
                  <div className="relative z-10 space-y-6">
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-3xl font-bold text-sky-200">
                        {s.step}
                      </span>
                      <span className="text-[11px] font-semibold uppercase tracking-wider px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-white border border-white/25">
                        {s.badge}
                      </span>
                    </div>

                    <div className="w-14 h-14 rounded-2xl bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center text-white shadow-md">
                      <Icon className="w-7 h-7 text-white" />
                    </div>

                    <h3 className="font-display text-2xl font-normal text-white">
                      {s.title}
                    </h3>

                    <p className="text-sky-100 text-sm leading-relaxed">
                      {s.desc}
                    </p>
                  </div>

                  <div className="relative z-10 pt-8 mt-6 border-t border-white/20 flex items-center justify-between">
                    <span className="text-xs text-sky-200 font-semibold tracking-wide uppercase">
                      Audited in Dwarka
                    </span>
                    <span className="w-8 h-8 rounded-full bg-white text-slate-900 flex items-center justify-center font-bold text-xs shadow-md">
                      &rarr;
                    </span>
                  </div>
                </div>
              );
            }

            return (
              <div
                key={s.step}
                className="rounded-3xl p-8 sm:p-10 bg-white border border-slate-200/90 shadow-[0_4px_20px_rgba(0,0,0,0.04)] hover:shadow-[0_12px_30px_rgba(0,0,0,0.08)] hover:border-sky-300 transition-all duration-300 flex flex-col justify-between group"
              >
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-3xl font-bold text-[#005A9C]">
                      {s.step}
                    </span>
                    <span className="text-[11px] font-semibold uppercase tracking-wider px-3 py-1 rounded-full bg-sky-50 text-sky-800 border border-sky-100">
                      {s.badge}
                    </span>
                  </div>

                  <div className="w-14 h-14 rounded-2xl bg-sky-50 border border-sky-100 flex items-center justify-center text-[#005A9C] group-hover:scale-110 transition-transform shadow-2xs">
                    <Icon className="w-7 h-7 text-[#005A9C]" />
                  </div>

                  <h3 className="font-display text-2xl font-normal text-slate-900">
                    {s.title}
                  </h3>

                  <p className="text-slate-600 text-sm leading-relaxed">
                    {s.desc}
                  </p>
                </div>

                <div className="pt-8 mt-6 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xs text-slate-500 font-medium">
                    Verified Timeline
                  </span>
                  <span className="w-8 h-8 rounded-full bg-slate-100 text-slate-600 flex items-center justify-center font-bold text-xs group-hover:bg-[#005A9C] group-hover:text-white transition-colors">
                    &rarr;
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Steps 04 & 05 (Additional In-Depth Steps in modern 2-col card ribbon) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          {steps.slice(3, 5).map((s) => {
            const Icon = s.icon;
            return (
              <div
                key={s.step}
                className="rounded-3xl p-7 bg-gradient-to-r from-sky-50/70 via-white to-blue-50/40 border border-slate-200/90 shadow-2xs hover:shadow-md transition-all flex items-start gap-5"
              >
                <div className="w-12 h-12 rounded-2xl bg-[#005A9C] text-white flex items-center justify-center shrink-0 shadow-sm">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-sm font-bold text-[#005A9C]">
                      {s.step}
                    </span>
                    <h4 className="font-display text-lg font-normal text-slate-900">
                      {s.title}
                    </h4>
                  </div>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                    {s.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA link to interactive tool */}
        <div className="text-center mt-12">
          <Link
            href="/tools/eligibility-checker"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#005A9C] hover:bg-[#00487C] text-white shadow-md hover:shadow-lg font-semibold text-sm transition-all"
          >
            <span>Start Step 01: Check Your Eligibility in 60 Seconds</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
