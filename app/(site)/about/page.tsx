import React from "react";
import Link from "next/link";
import type { Metadata } from "next";
import { siteConfig } from "@/content/site";
import { buildWhatsAppLink } from "@/lib/whatsapp";
import { Shield, Users, Clock, Award, MapPin, CheckCircle2, MessageCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "About Travel Solo | Registered Visa Consultancy in Dwarka, Delhi",
  description: "Learn about Travel Solo's direct consultancy model. 5 years of experience, 257+ clients, no sub-agents, and a written refund guarantee.",
  alternates: {
    canonical: "/about",
  },
};

export default function AboutPage() {
  return (
    <div className="pt-32 pb-24 bg-midnight min-h-screen">
      <div className="max-w-[1000px] mx-auto px-6 space-y-16">
        {/* Header */}
        <div className="space-y-4 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-horizon/40 border border-champagne/20 text-champagne text-xs font-mono uppercase">
            <Shield className="w-3.5 h-3.5" />
            <span>Our Foundation & Ethos</span>
          </div>
          <h1 className="font-display font-light text-4xl sm:text-6xl text-cloud leading-tight">
            Built on a simple premise: <span className="italic text-champagne font-normal">tell people the truth.</span>
          </h1>
          <p className="text-mist text-lg leading-relaxed">
            The Indian visa industry is flooded with false promises. "100% Guaranteed Visa." "Pay after approval." "No interview required." You've seen the hoardings in Connaught Place and Nehru Place. Most of them are traps.
          </p>
        </div>

        {/* Narrative & Origin */}
        <div className="p-8 sm:p-12 rounded-3xl glass-card border border-champagne/20 space-y-6 text-mist text-base leading-relaxed">
          <h2 className="font-display text-2xl text-cloud">
            How Travel Solo started
          </h2>
          <p>
            Travel Solo began five years ago as an independent consultancy in West Delhi. I watched hardworking Indian professionals and students pay enormous sums to flashy agencies, only to discover their files had been handed off to anonymous third-party sub-agents in other states.
          </p>
          <p>
            When those applications got refused due to shoddy translations or fake vacancy numbers, the big agencies simply shrugged, pointed to the fine print, and refused refunds.
          </p>
          <p>
            We built Travel Solo to do the exact opposite.
          </p>
          <p>
            When you work with us, you deal directly with the specialist in Dwarka who audits your transcripts, reviews your salary statements, and compiles your legal file. No sub-agents. No commissions split three ways. If your profile is not ready, we tell you frankly before you spend money on non-refundable embassy slots.
          </p>
        </div>

        {/* Four Operational Pillars */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="p-7 rounded-3xl bg-horizon/25 border border-champagne/15 space-y-3">
            <div className="text-champagne font-mono text-xs uppercase tracking-wider font-semibold">
              Pillar 01
            </div>
            <h3 className="font-display text-xl text-cloud">Direct Handling, Zero Sub-Agents</h3>
            <p className="text-mist text-xs leading-relaxed">
              Every document is handled under our direct supervision in Delhi. Your original certificates are never couriered to unauthorized brokers.
            </p>
          </div>

          <div className="p-7 rounded-3xl bg-horizon/25 border border-champagne/15 space-y-3">
            <div className="text-champagne font-mono text-xs uppercase tracking-wider font-semibold">
              Pillar 02
            </div>
            <h3 className="font-display text-xl text-cloud">Written 7-Day Refund Guarantee</h3>
            <p className="text-mist text-xs leading-relaxed">
              100% refund if requested within 7 days of payment. 50% after that until formal embassy filing. We put this in writing in every quote.
            </p>
          </div>

          <div className="p-7 rounded-3xl bg-horizon/25 border border-champagne/15 space-y-3">
            <div className="text-champagne font-mono text-xs uppercase tracking-wider font-semibold">
              Pillar 03
            </div>
            <h3 className="font-display text-xl text-cloud">Deep Consular Focus</h3>
            <p className="text-mist text-xs leading-relaxed">
              We specialize in five destinations: Czech Republic, Malaysia, Russia, Slovenia, and Singapore. Deep knowledge of specific embassy checklists beats superficial coverage of 80 countries.
            </p>
          </div>

          <div className="p-7 rounded-3xl bg-horizon/25 border border-champagne/15 space-y-3">
            <div className="text-champagne font-mono text-xs uppercase tracking-wider font-semibold">
              Pillar 04
            </div>
            <h3 className="font-display text-xl text-cloud">Realistic Outcome Setting</h3>
            <p className="text-mist text-xs leading-relaxed">
              "We prepare, file, and follow up. The embassy decides." We will never sell you fake hope or charge you for services you do not need.
            </p>
          </div>
        </div>

        {/* Registration & Corporate Identity */}
        <div className="p-8 rounded-3xl bg-midnight/80 border border-champagne/20 space-y-4">
          <div className="flex items-center gap-2 text-champagne text-xs font-mono uppercase tracking-wider font-semibold">
            <Shield className="w-4 h-4" />
            <span>Corporate Registration Details</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-mist">
            <div>
              <span className="text-cloud font-medium block">Registered Legal Entity:</span>
              <span>{siteConfig.legalName}</span>
            </div>
            <div>
              <span className="text-cloud font-medium block">Corporate Registration ID:</span>
              <span>{siteConfig.registrationNumber}</span>
            </div>
            <div>
              <span className="text-cloud font-medium block">Registered Office:</span>
              <span>{siteConfig.address.line1}, {siteConfig.address.city}, {siteConfig.address.state} - {siteConfig.address.pincode}</span>
            </div>
            <div>
              <span className="text-cloud font-medium block">Direct Verification Line:</span>
              <span>{siteConfig.phone}</span>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="p-10 rounded-3xl bg-horizon/30 border border-champagne/25 text-center space-y-4">
          <h3 className="font-display text-3xl text-cloud">
            Want to speak with our team?
          </h3>
          <p className="text-mist text-sm max-w-lg mx-auto">
            We are based in Sector 12 Dwarka and assist clients across all Indian states online and in-person.
          </p>
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={buildWhatsAppLink({ type: "quote" })}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3.5 rounded-full bg-coral hover:bg-coral/90 text-white font-medium text-xs flex items-center gap-2 shadow-lg"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>Connect on WhatsApp</span>
            </a>
            <Link
              href="/contact"
              className="px-8 py-3.5 rounded-full bg-horizon/50 hover:bg-horizon/80 border border-champagne/20 text-cloud font-medium text-xs"
            >
              <span>View Office & Contact Details</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
