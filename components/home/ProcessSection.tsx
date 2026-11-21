import React from "react";
import { MessageSquare, FileCheck, Send, UserCheck, ShieldCheck } from "lucide-react";

const steps = [
  {
    step: "01",
    title: "Honest Case Consultation",
    desc: "We review your original credentials, salary statements, and passport history. If your paperwork has a critical flaw, we tell you before taking five rupees. No false hopes.",
    icon: MessageSquare,
  },
  {
    step: "02",
    title: "Document Vetting & Translation",
    desc: "Apostilles from MEA, certified court translations into Czech or Slovenian, and verified corporate vacancy checks. Every single page is audited in Dwarka.",
    icon: FileCheck,
  },
  {
    step: "03",
    title: "Direct Application Filing",
    desc: "We file through authorized official portals (Window Malaysia, KDMD Russia, ICA Singapore, or VFS Delhi). You receive the official submission proof and tracking ID immediately.",
    icon: Send,
  },
  {
    step: "04",
    title: "Mock Interview Rehearsal",
    desc: "If your category requires an in-person embassy appointment, we run realistic mock sessions covering your syllabus, employer specifics, and itinerary questions.",
    icon: UserCheck,
  },
  {
    step: "05",
    title: "Decision & Pre-Landing Brief",
    desc: "Once your visa stamp or biometric approval letter arrives, we provide pre-departure guidance: local registration rules, border health cards, and sim setup.",
    icon: ShieldCheck,
  },
];

export default function ProcessSection() {
  return (
    <section className="py-24 bg-white border-t border-slate-200 relative">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <span className="text-xs uppercase tracking-widest text-primary font-mono font-semibold">
            The Roadmap
          </span>
          <h2 className="font-display font-normal text-3xl sm:text-5xl text-slate-900 leading-tight mt-3 mb-4">
            Five steps. <span className="italic text-primary font-normal">Complete transparency.</span>
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            No vanishing acts. No passing files to anonymous agents. Here is exactly what happens from our first conversation to your visa decision.
          </p>
        </div>

        {/* Process Timeline */}
        <div className="relative">
          {/* Subtle connecting track line on desktop */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-px bg-slate-200 -translate-y-8 z-0" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 relative z-10">
            {steps.map((s, idx) => {
              const Icon = s.icon;
              return (
                <div
                  key={s.step}
                  className="p-6 rounded-3xl bg-slate-50 border border-slate-200/90 shadow-2xs hover:bg-white hover:border-primary/40 hover:shadow-md transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <span className="font-mono text-2xl font-bold text-primary">
                        {s.step}
                      </span>
                      <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-primary shadow-2xs">
                        <Icon className="w-5 h-5" />
                      </div>
                    </div>

                    <h3 className="font-display text-lg font-normal text-slate-900 mb-2">
                      {s.title}
                    </h3>
                    <p className="text-slate-600 text-xs leading-relaxed">
                      {s.desc}
                    </p>
                  </div>

                  <div className="pt-6 border-t border-slate-200/80 mt-6 text-[11px] font-mono text-slate-400">
                    Step {idx + 1} of 5
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
