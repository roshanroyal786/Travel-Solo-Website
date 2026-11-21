import React from "react";
import type { Metadata } from "next";
import { siteConfig } from "@/content/site";
import { ShieldAlert } from "lucide-react";

export const metadata: Metadata = {
  title: "Terms of Service | Travel Solo",
  description: "Terms of service and client obligations for Travel Solo visa documentation consultancy.",
};

export default function TermsPage() {
  return (
    <div className="pt-32 pb-24 bg-midnight min-h-screen text-mist text-sm leading-relaxed">
      <div className="max-w-[800px] mx-auto px-6 space-y-8">
        <div className="space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-horizon/40 border border-champagne/20 text-champagne text-xs font-mono uppercase">
            <ShieldAlert className="w-3.5 h-3.5" />
            <span>Service Agreement</span>
          </div>
          <h1 className="font-display font-light text-4xl text-cloud">
            Terms of Service
          </h1>
          <p className="text-xs text-mist/70 font-mono">
            Effective Date: November 22, 2026 · {siteConfig.legalName}
          </p>
        </div>

        <div className="p-8 rounded-3xl glass-card border border-champagne/15 space-y-6">
          <section className="space-y-2">
            <h2 className="text-cloud font-display text-xl">1. Scope of Documentation Services</h2>
            <p>
              Travel Solo provides professional documentation review, Statement of Purpose (SOP) drafting, sworn translation coordination, MEA apostille processing, and appointment booking assistance.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-cloud font-display text-xl">2. Client Obligations & Document Authenticity</h2>
            <p>
              The client agrees that all academic certificates, employment records, salary statements, and identification papers submitted to Travel Solo are authentic, unaltered, and genuine. Travel Solo strictly refuses to handle forged documents or fabricated financial trails. Submitting fraudulent paperwork forfeits all services and fees immediately.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-cloud font-display text-xl">3. No Guarantee of Visa Approval</h2>
            <p>
              Travel Solo does not guarantee, warrant, or promise visa approval under any circumstances. Sovereign governments and their appointed consular officers hold sole and absolute discretion over all visa approvals, delays, and refusals.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-cloud font-display text-xl">4. Governing Law & Jurisdiction</h2>
            <p>
              These terms are governed by the laws of the Republic of India. Any legal dispute or proceeding arising out of or related to our services shall fall under the exclusive jurisdiction of the competent courts in New Delhi, India.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
