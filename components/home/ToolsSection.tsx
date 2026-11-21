"use client";

import React from "react";
import Link from "next/link";
import { Sparkles, ClipboardCheck, Timer, ArrowRight, CheckCircle2 } from "lucide-react";

const tools = [
  {
    title: "Eligibility Checker",
    badge: "60-Second Profile Audit",
    desc: "Answer 8 straightforward questions on education, experience, and destination. Get an indicative profile rating before spending money.",
    icon: Sparkles,
    href: "/tools/eligibility-checker",
    action: "Launch Quiz",
    pillBg: "bg-sky-100 text-[#005A9C] border-sky-200",
    iconBg: "bg-sky-50 border-sky-100 text-[#005A9C]",
  },
  {
    title: "Document Checklist Generator",
    badge: "Interactive & Downloadable",
    desc: "Pick your destination and visa type to view all required papers. Tick off items as you gather them, download a PDF, or send to WhatsApp.",
    icon: ClipboardCheck,
    href: "/tools/document-checklist",
    action: "Build Checklist",
    pillBg: "bg-emerald-100 text-emerald-800 border-emerald-200",
    iconBg: "bg-emerald-50 border-emerald-100 text-emerald-700",
  },
  {
    title: "Processing Time Estimator",
    badge: "Real Calendar Ranges",
    desc: "Calculate realistic decision dates factoring in document preparation, VFS biometrics wait, official embassy reviews, and seasonal buffers.",
    icon: Timer,
    href: "/tools/processing-time",
    action: "Calculate Dates",
    pillBg: "bg-amber-100 text-amber-800 border-amber-200",
    iconBg: "bg-amber-50 border-amber-100 text-amber-700",
  },
];

export default function ToolsSection() {
  return (
    <section className="py-24 bg-gradient-to-b from-white via-sky-50/50 to-white border-t border-slate-200/80 relative">
      <div className="max-w-[1280px] mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-sky-100 border border-sky-200 text-[#005A9C] text-xs font-semibold uppercase tracking-wider mb-3">
              Self-Service Hub
            </span>
            <h2 className="font-display font-medium text-3xl sm:text-5xl text-slate-900 leading-tight">
              Free interactive tools. <br />
              <span className="italic text-[#005A9C] font-normal">Know exactly where you stand.</span>
            </h2>
          </div>
          <p className="text-slate-600 text-base max-w-md leading-relaxed">
            No signup or credit card required. Test your profile against official embassy criteria, generate country-specific checklists, and compute realistic visa decision dates.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {tools.map((tool) => {
            const Icon = tool.icon;
            return (
              <div
                key={tool.title}
                className="p-8 rounded-3xl bg-white border border-slate-200/90 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_16px_36px_rgba(0,0,0,0.08)] hover:border-sky-300 transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className={`w-12 h-12 rounded-2xl border flex items-center justify-center ${tool.iconBg} group-hover:scale-110 transition-transform shadow-2xs`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className={`text-[11px] font-semibold uppercase tracking-wider px-3 py-1 rounded-full border ${tool.pillBg}`}>
                      {tool.badge}
                    </span>
                  </div>

                  <h3 className="font-display text-2xl font-normal text-slate-900 mb-3">
                    {tool.title}
                  </h3>

                  <p className="text-slate-600 text-sm leading-relaxed mb-6">
                    {tool.desc}
                  </p>
                </div>

                <div className="pt-6 border-t border-slate-100">
                  <Link
                    href={tool.href}
                    className="inline-flex items-center justify-center gap-2 w-full py-3 rounded-full bg-slate-50 hover:bg-[#005A9C] text-slate-800 hover:text-white border border-slate-200 hover:border-[#005A9C] text-xs font-semibold transition-all shadow-2xs group-hover:bg-[#005A9C] group-hover:text-white"
                  >
                    <span>{tool.action}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
