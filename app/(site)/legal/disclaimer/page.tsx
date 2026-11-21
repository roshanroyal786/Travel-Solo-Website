import React from "react";
import type { Metadata } from "next";
import { siteConfig } from "@/content/site";
import { ShieldCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "Independent Consultancy Disclaimer | Travel Solo",
  description: "Official disclaimer clarifying Travel Solo's independent corporate status and lack of government or embassy affiliation.",
};

export default function DisclaimerPage() {
  return (
    <div className="pt-32 pb-24 bg-midnight min-h-screen text-mist text-sm leading-relaxed">
      <div className="max-w-[800px] mx-auto px-6 space-y-8">
        <div className="space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-horizon/40 border border-champagne/20 text-champagne text-xs font-mono uppercase">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Public Disclosure</span>
          </div>
          <h1 className="font-display font-light text-4xl text-cloud">
            Independent Consultancy Notice
          </h1>
          <p className="text-xs text-mist/70 font-mono">
            {siteConfig.legalName} · Registration No: {siteConfig.registrationNumber}
          </p>
        </div>

        <div className="p-8 rounded-3xl glass-card border border-champagne/15 space-y-6">
          <section className="space-y-2">
            <h2 className="text-cloud font-display text-xl">1. No Embassy or Consular Affiliation</h2>
            <p>
              Travel Solo is a private, independent visa documentation consultancy registered in Dwarka, New Delhi. We are not an embassy, consulate, high commission, or an official agency of any government, including but not limited to the governments of the Czech Republic, Malaysia, the Russian Federation, the Republic of Slovenia, or the Republic of Singapore.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-cloud font-display text-xl">2. Sovereign Authority Discretion</h2>
            <p>
              Granting or denying visas is an exclusive sovereign power of the respective nation. Our role is strictly limited to candidate profiling, file structuring, linguistic translation, and administrative appointment support.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-cloud font-display text-xl">3. Regulatory Disclosures</h2>
            <p>
              Information published on our website is for general guidance and educational purposes only. Visa requirements, consular processing times, and fees are subject to revision by foreign authorities at any time without notice.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
