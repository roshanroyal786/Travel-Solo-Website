import React, { Suspense } from "react";
import type { Metadata } from "next";
import ProcessingEstimator from "@/components/tools/ProcessingEstimator";
import { Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Visa Processing Time Estimator | Real Turnaround Windows",
  description: "Calculate realistic visa processing timelines for Czech Republic, Malaysia, Russia, Slovenia, and Singapore based on appointment backlogs and embassy rules.",
  alternates: {
    canonical: "/tools/processing-time",
  },
};

export default function ProcessingTimePage() {
  return (
    <div className="pt-32 pb-24 bg-midnight min-h-screen">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-10 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-horizon/40 border border-champagne/20 text-champagne text-xs font-mono uppercase">
            <Clock className="w-3.5 h-3.5" />
            <span>Turnaround Calculator</span>
          </div>
          <h1 className="font-display font-light text-4xl sm:text-5xl text-cloud leading-tight">
            Processing Time <span className="italic text-champagne font-normal">Estimator.</span>
          </h1>
          <p className="text-mist text-base">
            Forecast realistic decision dates factoring in file assembly, VFS biometrics queues, and statutory embassy review limits.
          </p>
        </div>

        <Suspense fallback={<div className="text-center text-mist py-12">Loading estimator...</div>}>
          <ProcessingEstimator />
        </Suspense>
      </div>
    </div>
  );
}
