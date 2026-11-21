import React from "react";
import type { Metadata } from "next";
import { siteConfig } from "@/content/site";
import { ShieldCheck, AlertCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Refund Policy | 100% 7-Day Guarantee",
  description: "Read Travel Solo's written refund terms: 100% refund within 7 days, 50% after that prior to embassy submission.",
};

export default function RefundPolicyPage() {
  return (
    <div className="pt-32 pb-24 bg-midnight min-h-screen text-mist text-sm leading-relaxed">
      <div className="max-w-[800px] mx-auto px-6 space-y-8">
        <div className="space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-horizon/40 border border-champagne/20 text-champagne text-xs font-mono uppercase">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Guaranteed in Writing</span>
          </div>
          <h1 className="font-display font-light text-4xl text-cloud">
            Refund & Cancellation Policy
          </h1>
          <p className="text-xs text-mist/70 font-mono">
            Applicable to all Travel Solo service agreements · Registered in Dwarka, New Delhi
          </p>
        </div>

        <div className="p-8 rounded-3xl glass-card border border-champagne/15 space-y-6">
          <div className="p-5 rounded-2xl bg-horizon/30 border border-champagne/30 text-xs text-cloud leading-relaxed">
            <strong className="text-champagne block mb-1">Our Core Commitment:</strong>
            We do not lock clients into contracts they regret. If you change your mind within seven (7) days of remitting your consultation fee, you receive a 100% full refund with zero cancellation fee.
          </div>

          <section className="space-y-2">
            <h2 className="text-cloud font-display text-xl">1. The 7-Day Full Refund Window</h2>
            <p>
              Clients may request a complete 100% refund of professional consultation fees if requested in writing (via email or our official WhatsApp number) within seven (7) calendar days of initial payment remittance.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-cloud font-display text-xl">2. Cancellation After 7 Days</h2>
            <p>
              If a cancellation request is submitted after the initial 7-day period has elapsed, but before formal application submission to an embassy or visa authority, a 50% refund of professional fees will be processed to cover case analysis and document structuring already performed by our staff.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-cloud font-display text-xl">3. Exclusions & Third-Party Non-Refundable Expenses</h2>
            <p>
              To maintain absolute transparency, the following direct government and third-party disbursements are strictly non-refundable once incurred or disbursed on the client's behalf:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-xs">
              <li>Official Sovereign Embassy & Consular visa application fees.</li>
              <li>VFS Global / BLS / TLS biometrics and courier booking slot fees.</li>
              <li>Certified sworn court translation fees paid directly to accredited linguists.</li>
              <li>Ministry of External Affairs (MEA) apostille and attestation state fees.</li>
              <li>Third-party medical screening fees (e.g. FOMEMA, HIV panel clinics) and issued travel insurance policies.</li>
            </ul>
          </section>

          <section className="space-y-2">
            <h2 className="text-cloud font-display text-xl">4. Post-Filing Policy</h2>
            <p>
              Once a visa application is officially lodged with an embassy, consulate, or government immigration portal, no refund of professional or statutory fees can be granted, regardless of the visa officer's final approval or refusal decision.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-cloud font-display text-xl">5. How to Request a Refund</h2>
            <p>
              Send an email to <code className="text-champagne font-mono">refunds@travelsolo.in</code> or a WhatsApp message with your payment UTR reference and reason for cancellation. Approved refunds are credited back to the original source bank account within 3 to 5 Indian business days.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
