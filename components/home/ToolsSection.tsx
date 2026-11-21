import React from "react";
import Link from "next/link";
import { Sparkles, ClipboardCheck, Timer, ArrowRight } from "lucide-react";

const tools = [
  {
    title: "Eligibility Checker",
    badge: "60-Second Profile Audit",
    desc: "Answer 8 straightforward questions on education, experience, and destination. Get an indicative profile rating before spending money.",
    icon: Sparkles,
    href: "/tools/eligibility-checker",
    action: "Launch Quiz",
  },
  {
    title: "Document Checklist Generator",
    badge: "Interactive & Downloadable",
    desc: "Pick your destination and visa type to view all required papers. Tick off items as you gather them, download a PDF, or send to WhatsApp.",
    icon: ClipboardCheck,
    href: "/tools/document-checklist",
    action: "Build Checklist",
  },
  {
    title: "Processing Time Estimator",
    badge: "Real Calendar Ranges",
    desc: "Calculate realistic decision dates factoring in document preparation, VFS biometrics wait, official embassy reviews, and seasonal buffers.",
    icon: Timer,
    href: "/tools/processing-time",
    action: "Calculate Dates",
  },
];

export default function ToolsSection() {
  return (
    <section className="py-24 bg-midnight border-t border-champagne/10 relative">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <span className="text-xs uppercase tracking-widest text-champagne font-mono font-semibold">
              Self-Service Hub
            </span>
            <h2 className="font-display font-light text-3xl sm:text-5xl text-cloud leading-tight mt-3">
              Free interactive tools. <span className="italic text-champagne font-normal">Know where you stand.</span>
            </h2>
          </div>
          <p className="text-mist text-base max-w-md">
            No signup required. Test your background, download destination-specific checklists, and calculate realistic processing windows.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {tools.map((tool) => {
            const Icon = tool.icon;
            return (
              <div
                key={tool.title}
                className="p-8 rounded-3xl glass-card border border-champagne/15 hover:border-champagne/35 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-horizon/60 border border-champagne/20 flex items-center justify-center text-champagne group-hover:scale-110 transition-transform">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-mono uppercase tracking-wider text-champagne px-3 py-1 rounded-full bg-horizon/40 border border-champagne/15">
                      {tool.badge}
                    </span>
                  </div>

                  <h3 className="font-display text-2xl font-normal text-cloud group-hover:text-champagne transition-colors mb-3">
                    {tool.title}
                  </h3>
                  <p className="text-mist text-sm leading-relaxed mb-8">
                    {tool.desc}
                  </p>
                </div>

                <Link
                  href={tool.href}
                  className="inline-flex items-center justify-between w-full p-3.5 rounded-2xl bg-horizon/40 hover:bg-horizon/70 border border-champagne/15 text-cloud font-medium text-xs transition-colors group-hover:border-champagne/30"
                >
                  <span>{tool.action}</span>
                  <ArrowRight className="w-4 h-4 text-coral group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
