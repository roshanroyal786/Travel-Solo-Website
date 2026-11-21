import React from "react";
import Link from "next/link";
import { Briefcase, GraduationCap, Compass, Building2, ArrowUpRight } from "lucide-react";

const pathways = [
  {
    id: "work",
    title: "Work & Professional Permits",
    subtitle: "Job placement assistance & vacancy registration",
    description: "Legal employment passes with employer vacancy verification. We check labour ministry codes in the Czech Republic, Slovenia, Malaysia, and Singapore before you sign.",
    icon: Briefcase,
    href: "/countries",
    badge: "Employment & Skilled Relocation",
  },
  {
    id: "study",
    title: "University & Student Passes",
    subtitle: "Direct admissions & bespoke SOP writing",
    description: "NMC-approved MBBS in Russia, prestigious UK/Australian branch campuses in Malaysia, and low-cost European degrees in Prague and Ljubljana. Zero scholarship hype.",
    icon: GraduationCap,
    href: "/tools/eligibility-checker",
    badge: "Higher Education Abroad",
  },
  {
    id: "tourist",
    title: "Tourist & Holiday eVisas",
    subtitle: "Airtight itineraries & honest financial trails",
    description: "Schengen tourist visas for Slovenia and Czech Republic, fast eVisas for Malaysia and Singapore. We structure credible itineraries that satisfy embassy officers.",
    icon: Compass,
    href: "/tools/document-checklist",
    badge: "Vacations & Cultural Travel",
  },
  {
    id: "business",
    title: "Commercial & Business Visas",
    subtitle: "Certified corporate invitations & priority filing",
    description: "Fast-track documentation for Indian entrepreneurs, technical auditors, and exporters attending international expos or negotiating foreign distributor contracts.",
    icon: Building2,
    href: "/countries",
    badge: "Corporate & Trade Meetings",
  },
];

export default function WaysToGoSection() {
  return (
    <section className="py-24 bg-slate-50/70 border-t border-slate-200 relative">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <span className="text-xs uppercase tracking-widest text-primary font-mono font-semibold">
              Pathway Architecture
            </span>
            <h2 className="font-display font-normal text-3xl sm:text-5xl text-slate-900 leading-tight mt-3">
              Four ways to go. <span className="italic text-primary font-normal">Choose your route.</span>
            </h2>
          </div>
          <p className="text-slate-600 text-base max-w-md">
            Whether you are relocating for a skilled salary or backpacking across Central Europe, every category has its own strict documentation logic.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {pathways.map((p) => {
            const Icon = p.icon;
            return (
              <Link
                key={p.id}
                href={p.href}
                className="group p-8 rounded-3xl bg-white hover:bg-sky-50/40 border border-slate-200/90 hover:border-primary/40 shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-sky-50 border border-sky-100 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-mono uppercase tracking-wider text-slate-500 px-3 py-1 rounded-full bg-slate-100 border border-slate-200">
                      {p.badge}
                    </span>
                  </div>

                  <h3 className="font-display text-2xl font-normal text-slate-900 group-hover:text-primary transition-colors mb-2">
                    {p.title}
                  </h3>
                  <div className="text-xs font-semibold text-primary mb-3 font-mono">
                    {p.subtitle}
                  </div>
                  <p className="text-slate-600 text-sm leading-relaxed mb-6">
                    {p.description}
                  </p>
                </div>

                <div className="flex items-center gap-2 text-xs font-semibold text-primary group-hover:translate-x-1 transition-transform">
                  <span>Explore Requirements</span>
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
