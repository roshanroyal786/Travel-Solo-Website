import React from "react";
import Link from "next/link";
import { UserCheck, Shield, MessageCircle, FileText } from "lucide-react";

const pillars = [
  {
    title: "Zero Sub-Agents",
    desc: "Most agencies in Delhi pass your file to third-party sub-brokers in Punjab or Mumbai. We never do that. The person who evaluates your profile in Dwarka is the one who files it.",
    icon: UserCheck,
  },
  {
    title: "100% 7-Day Refund Policy",
    desc: "If you change your mind within 7 days of signing up with us, we issue a 100% refund in full. After that, a 50% refund applies until embassy submission. We put that in writing.",
    icon: Shield,
  },
  {
    title: "Direct WhatsApp Stage Updates",
    desc: "No call centers, IVRs, or waiting on hold. You get a direct WhatsApp line with real-time updates as your translation, apostille, and embassy biometrics progress.",
    icon: MessageCircle,
  },
  {
    title: "Honest File Audits",
    desc: "We refuse to take on files with fraudulent documents or manufactured bank statements. If your file is not ready, we help you fix it legitimately first.",
    icon: FileText,
  },
];

export default function WhyTravelSoloSection() {
  return (
    <section className="py-24 bg-white border-t border-slate-200 relative">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 space-y-6">
            <span className="text-xs uppercase tracking-widest text-primary font-mono font-semibold">
              The Travel Solo Standard
            </span>
            <h2 className="font-display font-normal text-3xl sm:text-5xl text-slate-900 leading-tight">
              Why work with us? <br />
              <span className="italic text-primary font-normal">Because we tell you the truth.</span>
            </h2>
            <p className="text-slate-600 text-base leading-relaxed">
              Anyone promising you a 100% guaranteed visa is lying to your face. The embassy officer decides every single file.
            </p>
            <p className="text-slate-600 text-base leading-relaxed">
              What we do guarantee is that your application will be airtight. No missing translations, no fabricated work experience, and no sub-agents playing games with your life savings.
            </p>

            <div className="pt-2">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary/80 transition-colors"
              >
                <span>Read our founder story & registration details &rarr;</span>
              </Link>
            </div>
          </div>

          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {pillars.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="p-7 rounded-3xl bg-slate-50 border border-slate-200 shadow-2xs hover:border-primary/40 hover:shadow-sm transition-all space-y-4"
                >
                  <div className="w-12 h-12 rounded-2xl bg-sky-50 border border-sky-100 flex items-center justify-center text-primary">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-display text-xl font-normal text-slate-900">
                    {item.title}
                  </h3>
                  <p className="text-slate-600 text-xs leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
