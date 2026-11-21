"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Briefcase, GraduationCap, Compass, Building2, ArrowRight, CheckCircle2 } from "lucide-react";

const pathways = [
  {
    id: "work",
    title: "Work & Professional Permits",
    subtitle: "Job placement assistance & vacancy registration",
    description: "Legal employment passes with employer vacancy verification. We check labour ministry codes in the Czech Republic, Slovenia, Malaysia, and Singapore before you sign.",
    icon: Briefcase,
    href: "/countries",
    badge: "Employment & Skilled Relocation",
    pillColor: "bg-sky-100 text-sky-800 border-sky-200",
    image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=800&auto=format&fit=crop",
    metric: "Audited Labour Codes",
  },
  {
    id: "study",
    title: "University & Student Passes",
    subtitle: "Direct admissions & bespoke SOP writing",
    description: "NMC-approved MBBS in Russia, prestigious UK/Australian branch campuses in Malaysia, and low-cost European degrees in Prague and Ljubljana. Zero scholarship hype.",
    icon: GraduationCap,
    href: "/tools/eligibility-checker",
    badge: "Higher Education Abroad",
    pillColor: "bg-emerald-100 text-emerald-800 border-emerald-200",
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=800&auto=format&fit=crop",
    metric: "Direct University Filings",
  },
  {
    id: "tourist",
    title: "Tourist & Holiday eVisas",
    subtitle: "Airtight itineraries & honest financial trails",
    description: "Schengen tourist visas for Slovenia and Czech Republic, fast eVisas for Malaysia and Singapore. We structure credible itineraries that satisfy embassy officers.",
    icon: Compass,
    href: "/tools/document-checklist",
    badge: "Vacations & Cultural Travel",
    pillColor: "bg-amber-100 text-amber-800 border-amber-200",
    image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?q=80&w=800&auto=format&fit=crop",
    metric: "48h – 15d Approval",
  },
  {
    id: "business",
    title: "Commercial & Business Visas",
    subtitle: "Certified corporate invitations & priority filing",
    description: "Fast-track documentation for Indian entrepreneurs, technical auditors, and exporters attending international expos or negotiating foreign distributor contracts.",
    icon: Building2,
    href: "/countries",
    badge: "Corporate & Trade Meetings",
    pillColor: "bg-purple-100 text-purple-800 border-purple-200",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800&auto=format&fit=crop",
    metric: "Official Consular Invites",
  },
];

export default function WaysToGoSection() {
  return (
    <section className="py-24 bg-gradient-to-b from-white via-sky-50/40 to-white border-t border-slate-200/80 relative">
      <div className="max-w-[1280px] mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-sky-100 border border-sky-200 text-[#005A9C] text-xs font-semibold uppercase tracking-wider mb-3">
              Pathway Architecture
            </span>
            <h2 className="font-display font-medium text-3xl sm:text-5xl text-slate-900 leading-tight">
              Four ways to go. <br />
              <span className="italic text-[#005A9C] font-normal">Choose your route.</span>
            </h2>
          </div>
          <p className="text-slate-600 text-base max-w-md leading-relaxed">
            Whether you are relocating for a skilled salary or exploring European cities, every category has its own strict documentation logic audited right in Dwarka.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {pathways.map((p) => {
            const Icon = p.icon;
            return (
              <Link
                key={p.id}
                href={p.href}
                className="group rounded-3xl overflow-hidden bg-white border border-slate-200/90 shadow-[0_4px_20px_rgba(0,0,0,0.04)] hover:shadow-[0_16px_36px_rgba(0,0,0,0.1)] hover:border-sky-300 transition-all duration-300 flex flex-col justify-between hover:-translate-y-1"
              >
                {/* Photo Banner */}
                <div className="relative h-44 w-full overflow-hidden">
                  <Image
                    src={p.image}
                    alt={p.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/30 to-transparent" />

                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${p.pillColor}`}>
                      {p.badge}
                    </span>
                    <span className="px-3 py-1 rounded-full bg-white/95 backdrop-blur-md text-slate-900 text-xs font-bold shadow-sm">
                      {p.metric}
                    </span>
                  </div>

                  <div className="absolute bottom-4 left-4 z-10 flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-white text-[#005A9C] flex items-center justify-center shadow-md">
                      <Icon className="w-5 h-5 text-[#005A9C]" />
                    </div>
                    <h3 className="font-display text-xl sm:text-2xl font-normal text-white drop-shadow-sm">
                      {p.title}
                    </h3>
                  </div>
                </div>

                {/* Content */}
                <div className="p-7 space-y-4 flex-1 flex flex-col justify-between">
                  <div className="space-y-2">
                    <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                      {p.subtitle}
                    </div>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      {p.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-[#005A9C] font-semibold group-hover:translate-x-1 transition-transform">
                    <span>Explore {p.title} Requirements</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
