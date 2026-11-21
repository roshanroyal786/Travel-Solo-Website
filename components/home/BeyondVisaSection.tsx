import React from "react";
import { Briefcase, BookOpen, Languages, ShieldAlert, Plane, FileCheck2 } from "lucide-react";

const services = [
  {
    title: "Job Placement Support",
    desc: "Overseas vacancy matching, resume restructuring for European and Southeast Asian formats, and verifying statutory central vacancy registration numbers.",
    icon: Briefcase,
  },
  {
    title: "University Admission & SOP Writing",
    desc: "Direct applications to recognized universities in Prague, Kuala Lumpur, and Moscow. Custom, human-crafted SOPs tailored to your genuine academic journey. We do not offer scholarship procurement.",
    icon: BookOpen,
  },
  {
    title: "MEA Apostille & Legalization",
    desc: "Apostille from the Ministry of External Affairs in New Delhi on police clearance certificates (PCC), degree scrolls, and marriage certificates.",
    icon: FileCheck2,
  },
  {
    title: "Certified Court Translations",
    desc: "Official court translations into Czech and Slovenian, notarized and stamped by accredited interpreters to prevent embassy file rejections.",
    icon: Languages,
  },
  {
    title: "Schengen Medical Insurance",
    desc: "Embassy-compliant travel health insurance policies with minimum €30,000 emergency coverage, repatriation guarantees, and immediate policy delivery.",
    icon: ShieldAlert,
  },
  {
    title: "Flights & Hotel Itineraries",
    desc: "Genuine reservation itineraries matching your embassy cover letter without paying non-refundable flight tickets upfront.",
    icon: Plane,
  },
];

export default function BeyondVisaSection() {
  return (
    <section className="py-24 bg-slate-50/70 border-t border-slate-200 relative">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-widest text-primary font-mono font-semibold">
            Comprehensive Suite
          </span>
          <h2 className="font-display font-normal text-3xl sm:text-5xl text-slate-900 leading-tight mt-3 mb-4">
            Beyond the visa. <span className="italic text-primary font-normal">Everything in one place.</span>
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            A visa is one piece of the puzzle. From state court translations to pre-departure lodging proofs, we handle every detail so your landing is smooth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((svc) => {
            const Icon = svc.icon;
            return (
              <div
                key={svc.title}
                className="p-7 rounded-3xl bg-white border border-slate-200/90 shadow-xs hover:border-primary/40 hover:shadow-md transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-2xl bg-sky-50 border border-sky-100 flex items-center justify-center text-primary mb-5 group-hover:scale-105 transition-transform">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="font-display text-xl font-normal text-slate-900 group-hover:text-primary transition-colors mb-2">
                  {svc.title}
                </h3>
                <p className="text-slate-600 text-xs leading-relaxed">
                  {svc.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
