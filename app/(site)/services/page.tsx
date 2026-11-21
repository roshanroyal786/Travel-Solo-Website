import React from "react";
import Link from "next/link";
import type { Metadata } from "next";
import { buildWhatsAppLink } from "@/lib/whatsapp";
import {
  Briefcase,
  BookOpen,
  Languages,
  ShieldAlert,
  Plane,
  FileCheck2,
  Compass,
  ArrowRight,
  MessageCircle,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Services & Beyond The Visa | Travel Solo",
  description: "Comprehensive visa and travel documentation services: job placement assistance, university admissions, SOP drafting, MEA apostille, and court translations.",
  alternates: {
    canonical: "/services",
  },
};

const serviceCards = [
  {
    icon: Briefcase,
    title: "Job Placement & Labour Registry Support",
    category: "Employment Relocation",
    desc: "For the Czech Republic, Slovenia, Malaysia, and Singapore, foreign work authorization requires verified employer sponsorship. We review your candidate resume against European formats, assist with vacancy matching, and audit the official vacancy registration number in central government databases before submission.",
  },
  {
    icon: BookOpen,
    title: "University Admission & Custom SOP Drafting",
    category: "Higher Education",
    desc: "We coordinate admissions to recognized institutions including Charles University in Prague, Universiti Malaya, and Russian State Medical Academies. We author narrative-driven Statements of Purpose (SOP) tailored to your real background. Please note: we do not offer scholarship procurement.",
  },
  {
    icon: FileCheck2,
    title: "MEA Apostille & Document Attestation",
    category: "Legal Authentication",
    desc: "Foreign embassies strictly require Ministry of External Affairs (MEA) apostille stamps on police clearance certificates (PCC), educational degrees, and marriage records. We handle the direct submission and pickup in New Delhi without risky courier handoffs.",
  },
  {
    icon: Languages,
    title: "Certified Czech & Slovenian Court Translations",
    category: "Sworn Translation",
    desc: "Schengen immigration authorities in Prague and Ljubljana do not accept English or Hindi documents. Every certificate must be translated by a court-accredited sworn interpreter (soudní překladatel). We coordinate these translations directly with accredited linguists.",
  },
  {
    icon: ShieldAlert,
    title: "Schengen-Compliant Travel Medical Insurance",
    category: "Health & Border Protection",
    desc: "All Schengen visa categories require mandatory health insurance with at least €30,000 coverage, zero deductible, and repatriation clauses. We issue compliant insurance policies accepted across European consular desks.",
  },
  {
    icon: Plane,
    title: "Flight Confirmations & Hotel Itineraries",
    category: "Travel Logistics",
    desc: "Never purchase non-refundable flight tickets before your visa is stamped. We build genuine reservation itineraries that fulfill embassy proof-of-transit rules without financial exposure.",
  },
];

export default function ServicesPage() {
  return (
    <div className="pt-32 pb-24 bg-midnight min-h-screen">
      <div className="max-w-[1280px] mx-auto px-6 space-y-16">
        {/* Header */}
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-horizon/40 border border-champagne/20 text-champagne text-xs font-mono uppercase">
            <Compass className="w-3.5 h-3.5" />
            <span>Complete Documentation Suite</span>
          </div>
          <h1 className="font-display font-light text-4xl sm:text-6xl text-cloud leading-tight">
            Services beyond the <span className="italic text-champagne font-normal">visa stamp.</span>
          </h1>
          <p className="text-mist text-lg leading-relaxed">
            Filing a visa application involves a chain of dependencies: court translations, apostilles, insurance certificates, and accommodation leases. We manage every step in-house.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {serviceCards.map((s, idx) => {
            const Icon = s.icon;
            return (
              <div
                key={idx}
                className="p-8 rounded-3xl glass-card border border-champagne/15 hover:border-champagne/30 transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-horizon/60 border border-champagne/20 flex items-center justify-center text-champagne group-hover:scale-105 transition-transform">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-mono text-champagne bg-horizon/40 px-3 py-1 rounded-full border border-champagne/10">
                      {s.category}
                    </span>
                  </div>

                  <h3 className="font-display text-2xl text-cloud group-hover:text-champagne transition-colors mb-3">
                    {s.title}
                  </h3>
                  <p className="text-mist text-xs sm:text-sm leading-relaxed mb-6">
                    {s.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-champagne/10">
                  <a
                    href={buildWhatsAppLink({ type: "quote" })}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-semibold text-coral group-hover:gap-3 transition-all"
                  >
                    <span>Request Quotation</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner */}
        <div className="p-10 rounded-3xl bg-horizon/25 border border-champagne/20 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div className="space-y-2">
            <h3 className="font-display text-2xl text-cloud">
              Need assistance with an individual service?
            </h3>
            <p className="text-mist text-sm">
              Even if you are filing on your own, we offer standalone MEA apostille, court translations, and SOP audits.
            </p>
          </div>
          <a
            href={buildWhatsAppLink({ type: "quote" })}
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3.5 rounded-full bg-coral hover:bg-coral/90 text-white font-medium text-xs flex items-center gap-2 shadow-lg shrink-0"
          >
            <MessageCircle className="w-4 h-4 fill-white" />
            <span>Ask on WhatsApp</span>
          </a>
        </div>
      </div>
    </div>
  );
}
