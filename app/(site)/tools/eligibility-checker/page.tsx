import React from "react";
import type { Metadata } from "next";
import EligibilityQuiz from "@/components/tools/EligibilityQuiz";
import { Sparkles, ShieldCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "Visa Eligibility Checker | 60-Second Profile Evaluation",
  description: "Check your visa eligibility for Czech Republic, Malaysia, Russia, Slovenia, and Singapore. Answer 8 questions for an indicative profile assessment.",
  alternates: {
    canonical: "/tools/eligibility-checker",
  },
};

export default function EligibilityCheckerPage() {
  return (
    <div className="pt-32 pb-24 bg-midnight min-h-screen">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-10 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-horizon/40 border border-champagne/20 text-champagne text-xs font-mono uppercase">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Interactive Visa Audit</span>
          </div>
          <h1 className="font-display font-light text-4xl sm:text-5xl text-cloud leading-tight">
            Visa Eligibility <span className="italic text-champagne font-normal">Checker.</span>
          </h1>
          <p className="text-mist text-base">
            60 seconds. 8 questions. Find out whether your academic background, funds, and travel intent match official immigration standards.
          </p>
        </div>

        <EligibilityQuiz />
      </div>
    </div>
  );
}
