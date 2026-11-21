import React, { Suspense } from "react";
import type { Metadata } from "next";
import DocumentChecklist from "@/components/tools/DocumentChecklist";
import { ClipboardList } from "lucide-react";

export const metadata: Metadata = {
  title: "Visa Document Checklist Generator | Download PDF",
  description: "Generate and tick off your required visa documents for Czech Republic, Malaysia, Russia, Slovenia, and Singapore. Export PDF or send to WhatsApp.",
  alternates: {
    canonical: "/tools/document-checklist",
  },
};

export default function DocumentChecklistPage() {
  return (
    <div className="pt-32 pb-24 bg-midnight min-h-screen">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-10 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-horizon/40 border border-champagne/20 text-champagne text-xs font-mono uppercase">
            <ClipboardList className="w-3.5 h-3.5" />
            <span>Interactive File Preparation</span>
          </div>
          <h1 className="font-display font-light text-4xl sm:text-5xl text-cloud leading-tight">
            Document Checklist <span className="italic text-champagne font-normal">Generator.</span>
          </h1>
          <p className="text-mist text-base">
            Select your corridor and visa category. Track verified documents, download a branded PDF, or send your pending list straight to WhatsApp.
          </p>
        </div>

        <Suspense fallback={<div className="text-center text-mist py-12">Loading checklist tool...</div>}>
          <DocumentChecklist />
        </Suspense>
      </div>
    </div>
  );
}
