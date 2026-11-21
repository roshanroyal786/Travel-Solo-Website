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
    <section className="py-24 bg-midnight/90 border-t border-champagne/10 relative">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <span className="text-xs uppercase tracking-widest text-champagne font-mono font-semibold">
              Pathway Architecture
            </span>
            <h2 className="font-display font-light text-3xl sm:text-5xl text-cloud leading-tight mt-3">
              Four ways to go. <span className="italic text-champagne font-normal">Choose your route.</span>
            </h2>
          </div>
          <p className="text-mist text-base max-w-md">
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
                className="group p-8 rounded-3xl glass-card hover:bg-horizon/30 border border-champagne/15 hover:border-champagne/35 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-horizon/60 border border-champagne/20 flex items-center justify-center text-champagne group-hover:scale-110 transition-transform">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-mono uppercase tracking-wider text-mist px-3 py-1 rounded-full bg-midnight/60 border border-champagne/10">
                      {p.badge}
                    </span>
                  </div>

                  <h3 className="font-display text-2xl font-normal text-cloud group-hover:text-champagne transition-colors mb-2">
                    {p.title}
                  </h3>
                  <div className="text-xs font-semibold text-champagne/90 mb-3 font-mono">
                    {p.subtitle}
                  </div>
                  <p className="text-mist text-sm leading-relaxed mb-6">
                    {p.description}
                  </p>
                </div>

                <div className="flex items-center gap-2 text-xs font-semibold text-coral group-hover:translate-x-1 transition-transform">
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
