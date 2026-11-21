"use client";

import React from "react";
import Link from "next/link";
import { UserCheck, Shield, MessageCircle, FileText, ArrowRight, ShieldCheck } from "lucide-react";

const pillars = [
  {
    title: "Zero Sub-Agents",
    desc: "Most agencies in Delhi pass your file to third-party sub-brokers in Punjab or Mumbai. We never do that. The person who evaluates your profile in Dwarka is the one who files it directly.",
    icon: UserCheck,
    tag: "100% In-House",
    color: "bg-sky-50 border-sky-200 text-[#005A9C]",
  },
  {
    title: "100% 7-Day Refund Policy",
    desc: "If you change your mind within 7 days of signing up with us, we issue a 100% refund in full. After that, a 50% refund applies until embassy submission. We put that in writing.",
    icon: Shield,
    tag: "Written in Contract",
    color: "bg-emerald-50 border-emerald-200 text-emerald-700",
  },
  {
    title: "Direct WhatsApp Stage Updates",
    desc: "No call centers, IVRs, or waiting on hold. You get a direct WhatsApp line with real-time updates as your translation, apostille, and embassy biometrics progress.",
    icon: MessageCircle,
    tag: "Real-Time Tracking",
    color: "bg-amber-50 border-amber-200 text-amber-700",
  },
  {
    title: "Honest File Audits",
    desc: "We refuse to take on files with fraudulent documents or manufactured bank statements. If your file is not ready, we help you fix it legitimately first.",
    icon: FileText,
    tag: "Strict Anti-Fraud",
    color: "bg-indigo-50 border-indigo-200 text-indigo-700",
  },
];

export default function WhyTravelSoloSection() {
  return (
    <section className="py-24 bg-gradient-to-b from-[#F0F7FD] via-white to-[#F0F7FD] border-t border-slate-200/80 relative">
      <div className="max-w-[1280px] mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 space-y-6">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-sky-100 border border-sky-200 text-[#005A9C] text-xs font-semibold uppercase tracking-wider">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>The Travel Solo Standard</span>
            </span>

            <h2 className="font-display font-medium text-3xl sm:text-5xl text-slate-900 leading-tight">
              Why work with us? <br />
              <span className="italic text-[#005A9C] font-normal">Because we tell you the truth.</span>
            </h2>

            <p className="text-slate-600 text-base leading-relaxed">
              Anyone promising you a 100% guaranteed visa is lying to your face. The embassy officer decides every single file under current consular law.
            </p>

            <p className="text-slate-600 text-base leading-relaxed">
              What we do guarantee is that your application will be airtight. No missing translations, no fabricated work experience, and no sub-agents playing games with your life savings.
            </p>

            <div className="pt-2">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white hover:bg-slate-50 text-slate-900 border border-slate-200 shadow-xs hover:shadow-md text-sm font-semibold transition-all"
              >
                <span>Read our founder story & registration details</span>
                <ArrowRight className="w-4 h-4 text-[#005A9C]" />
              </Link>
            </div>
          </div>

          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {pillars.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="p-8 rounded-3xl bg-white border border-slate-200/90 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_12px_30px_rgba(0,0,0,0.08)] hover:border-sky-300 transition-all duration-300 flex flex-col justify-between space-y-4"
                >
                  <div className="flex items-center justify-between">
                    <div className={`w-12 h-12 rounded-2xl border flex items-center justify-center ${item.color} shadow-2xs`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-md bg-slate-100 text-slate-700">
                      {item.tag}
                    </span>
                  </div>

                  <div>
                    <h3 className="font-display text-xl font-normal text-slate-900 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
