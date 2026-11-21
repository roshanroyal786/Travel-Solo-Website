import React from "react";
import type { Metadata } from "next";
import { siteConfig } from "@/content/site";
import { ShieldCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy | DPDP Act 2023 Compliance",
  description: "Read Travel Solo's Privacy Policy. Compliant with India's Digital Personal Data Protection Act, 2023.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="pt-32 pb-24 bg-midnight min-h-screen text-mist text-sm leading-relaxed">
      <div className="max-w-[800px] mx-auto px-6 space-y-8">
        <div className="space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-horizon/40 border border-champagne/20 text-champagne text-xs font-mono uppercase">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>DPDP Act 2023 Compliant</span>
          </div>
          <h1 className="font-display font-light text-4xl text-cloud">
            Privacy Policy
          </h1>
          <p className="text-xs text-mist/70 font-mono">
            Last Updated: November 22, 2026 · Travel Solo Visa Consultancy Pvt. Ltd.
          </p>
        </div>

        <div className="p-8 rounded-3xl glass-card border border-champagne/15 space-y-6">
          <section className="space-y-2">
            <h2 className="text-cloud font-display text-xl">1. Notice & Data We Collect</h2>
            <p>
              Travel Solo collected personal and biometric data strictly for evaluating, assembling, and submitting visa applications. This includes:
            </p>
            <ul className="list-disc pl-5 space-y-1 text-xs">
              <li>Contact identity: Full name, WhatsApp number, email address, physical address.</li>
              <li>Travel records: Passport copies, previous entry stamps, refusal notices.</li>
              <li>Financial records: Bank statements, income tax returns (ITR-V), employment pay slips.</li>
              <li>Educational records: University degrees, marksheets, Statement of Purpose (SOP).</li>
            </ul>
          </section>

          <section className="space-y-2">
            <h2 className="text-cloud font-display text-xl">2. Purpose & Legal Basis</h2>
            <p>
              Under India's Digital Personal Data Protection Act, 2023 (DPDP Act), we process your data exclusively with your explicit consent to deliver visa file preparation, government apostilles, and embassy appointment bookings.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-cloud font-display text-xl">3. Data Sharing & Third Parties</h2>
            <p>
              We do not sell, rent, or lease your personal data. We disclose documents only to:
            </p>
            <ul className="list-disc pl-5 space-y-1 text-xs">
              <li>Official sovereign authorities (embassies, consulates, immigration departments).</li>
              <li>Accredited court interpreters for certified translations into Czech or Slovenian.</li>
              <li>Authorized biometrics partners (e.g. VFS Global) for appointment scheduling.</li>
            </ul>
          </section>

          <section className="space-y-2">
            <h2 className="text-cloud font-display text-xl">4. Document Retention & Purging</h2>
            <p>
              Your uploaded identification and financial documents are stored securely in encrypted private folders and are permanently purged within 90 days following your final visa decision, unless statutory Indian tax accounting mandates longer invoice retention.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-cloud font-display text-xl">5. Grievance Officer</h2>
            <p>
              If you wish to access, correct, or request the deletion of your personal data, contact our designated Grievance Officer at:
            </p>
            <div className="p-4 rounded-xl bg-midnight/70 border border-white/5 text-xs text-cloud space-y-1">
              <div>Email: grievance@travelsolo.in</div>
              <div>Address: {siteConfig.address.line1}, {siteConfig.address.city}, {siteConfig.address.state} - {siteConfig.address.pincode}</div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
