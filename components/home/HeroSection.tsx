"use client";

import React from "react";
import Link from "next/link";
import { buildWhatsAppLink } from "@/lib/whatsapp";
import { siteConfig } from "@/content/site";
import { ArrowRight, CheckCircle2, Shield, Users, Clock, Award } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-28 pb-20 overflow-hidden bg-midnight">
      {/* Background Cinematic Visual & Ambient Gradients */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30 transform scale-105 transition-transform duration-1000 ease-out"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=2000&auto=format&fit=crop')",
          }}
        />
        {/* Dark gradient overlay from bottom up to ensure 100% WCAG AA contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-midnight via-midnight/80 to-midnight/40" />
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-horizon/25 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute bottom-10 right-10 w-[350px] h-[350px] bg-champagne/10 rounded-full blur-[120px] pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-[1280px] mx-auto px-6 w-full text-center flex flex-col items-center">
        {/* Registration & Location Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-horizon/50 border border-champagne/25 text-champagne text-xs font-medium tracking-wide uppercase mb-6 animate-in fade-in slide-in-from-bottom-3 duration-500">
          <Shield className="w-3.5 h-3.5" />
          <span>Registered in Dwarka, New Delhi · Direct Consultants</span>
        </div>

        {/* Hero Headline: Fraunces Display with Italic Accent */}
        <h1 className="font-display font-light text-cloud text-4xl sm:text-6xl md:text-7xl lg:text-[5.2rem] leading-[1.08] tracking-tight max-w-5xl mb-6">
          <span className="italic font-normal text-champagne">Your next chapter</span> starts at the window seat.
        </h1>

        {/* Subline: Human, direct, 0% AI filler */}
        <p className="text-mist text-lg sm:text-xl max-w-2xl font-normal leading-relaxed mb-10">
          Visa consultancy for Czech Republic, Malaysia, Russia, Slovenia, and Singapore.
          Study, work, tourist, and business visas filed directly with zero middleman sub-agents.
        </p>

        {/* CTA Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto mb-16">
          <a
            href={buildWhatsAppLink({ type: "quote" })}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-coral hover:bg-coral/90 text-white font-semibold text-base transition-all shadow-xl hover:shadow-coral/25 hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center gap-2"
          >
            <span>Get a Quote on WhatsApp</span>
            <ArrowRight className="w-4 h-4" />
          </a>

          <Link
            href="/tools/eligibility-checker"
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-horizon/40 hover:bg-horizon/70 border border-champagne/25 text-cloud font-semibold text-base transition-all hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center gap-2"
          >
            <span>Check My Eligibility (60s)</span>
          </Link>
        </div>

        {/* Trust Strip */}
        <div className="w-full max-w-4xl grid grid-cols-2 md:grid-cols-4 gap-4 p-5 rounded-2xl glass-card border border-champagne/15 text-left">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-horizon/50 border border-champagne/20 flex items-center justify-center text-champagne shrink-0">
              <Users className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xl font-bold text-cloud tabular-nums">257+</div>
              <div className="text-xs text-mist">Clients Served</div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-horizon/50 border border-champagne/20 flex items-center justify-center text-champagne shrink-0">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xl font-bold text-champagne tabular-nums">98%*</div>
              <div className="text-xs text-mist">Approval Record</div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-horizon/50 border border-champagne/20 flex items-center justify-center text-champagne shrink-0">
              <Clock className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xl font-bold text-cloud tabular-nums">5 Years</div>
              <div className="text-xs text-mist">Direct Experience</div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-horizon/50 border border-champagne/20 flex items-center justify-center text-champagne shrink-0">
              <CheckCircle2 className="w-5 h-5 text-whatsapp" />
            </div>
            <div>
              <div className="text-xl font-bold text-cloud">100%</div>
              <div className="text-xs text-mist">7-Day Refund Policy</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
