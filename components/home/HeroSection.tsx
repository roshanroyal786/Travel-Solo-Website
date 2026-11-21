"use client";

import React from "react";
import Link from "next/link";
import { buildWhatsAppLink } from "@/lib/whatsapp";
import { siteConfig } from "@/content/site";
import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  ShieldCheck,
  Users,
  Clock,
  Award,
  Star,
} from "lucide-react";
import { motion } from "motion/react";
import BrandSlider, { BrandList } from "@/components/ui/hero-01-utils/brand-slider";

const avatarList = [
  {
    image:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&q=80",
  },
  {
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&q=80",
  },
  {
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=120&q=80",
  },
  {
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=120&q=80",
  },
];

const brandList: BrandList[] = [
  {
    image:
      "https://images.unsplash.com/photo-1541872703-74c5e44368f9?auto=format&fit=crop&w=80&q=80",
    lightimg:
      "https://images.unsplash.com/photo-1541872703-74c5e44368f9?auto=format&fit=crop&w=80&q=80",
    name: "Czech Republic (Schengen)",
  },
  {
    image:
      "https://images.unsplash.com/photo-1596422846543-75c6fc197f07?auto=format&fit=crop&w=80&q=80",
    lightimg:
      "https://images.unsplash.com/photo-1596422846543-75c6fc197f07?auto=format&fit=crop&w=80&q=80",
    name: "Malaysia (e-Visa & MDEC)",
  },
  {
    image:
      "https://images.unsplash.com/photo-1513326738677-b964603b136d?auto=format&fit=crop&w=80&q=80",
    lightimg:
      "https://images.unsplash.com/photo-1513326738677-b964603b136d?auto=format&fit=crop&w=80&q=80",
    name: "Russia (MBBS & Unified e-Visa)",
  },
  {
    image:
      "https://images.unsplash.com/photo-1565008447742-97f6f38c985c?auto=format&fit=crop&w=80&q=80",
    lightimg:
      "https://images.unsplash.com/photo-1565008447742-97f6f38c985c?auto=format&fit=crop&w=80&q=80",
    name: "Slovenia (EU Single Permit)",
  },
  {
    image:
      "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?auto=format&fit=crop&w=80&q=80",
    lightimg:
      "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?auto=format&fit=crop&w=80&q=80",
    name: "Singapore (EP & COMPASS)",
  },
];

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden pt-28 pb-16 md:pt-36 md:pb-20 bg-white">
      {/* Soft Trustworthy Ambient Background Glow */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-12 left-1/2 -translate-x-1/2 w-full max-w-5xl h-[500px] bg-gradient-to-r from-sky-100/80 via-blue-50/50 to-indigo-100/60 rounded-full blur-3xl opacity-75" />
      </div>

      <div className="relative z-10 max-w-[1280px] mx-auto px-6 w-full text-center flex flex-col items-center">
        {/* Official Compliance Pill */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-slate-200/90 text-primary text-xs font-medium shadow-xs mb-6"
        >
          <ShieldCheck className="w-4 h-4 text-primary" />
          <span className="font-semibold text-slate-800">
            Registered in Dwarka, New Delhi · Direct Consultants · Zero Sub-Agents
          </span>
        </motion.div>

        {/* Hero Headline: Playfair Display with Italic Accent */}
        <motion.h1
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeInOut" }}
          className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-[5rem] font-normal leading-[1.1] tracking-tight text-slate-900 max-w-4xl mb-6"
        >
          Your next chapter starts at the{" "}
          <span className="italic font-normal text-primary">
            window seat.
          </span>
        </motion.h1>

        {/* Subline: Human, direct, 0% AI filler */}
        <motion.p
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1, ease: "easeInOut" }}
          className="text-slate-600 text-base sm:text-lg md:text-xl max-w-2xl font-normal leading-relaxed mb-10"
        >
          Visa consultancy for Czech Republic, Malaysia, Russia, Slovenia, and Singapore.
          Study, work, tourist, and business visas filed directly with zero middleman sub-agents.
        </motion.p>

        {/* CTA Action Buttons & Social Proof */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2, ease: "easeInOut" }}
          className="flex flex-col sm:flex-row items-center justify-center gap-5 sm:gap-8 w-full sm:w-auto mb-14"
        >
          {/* Signature Hero-01 Action Button with Animated Arrow */}
          <a
            href={buildWhatsAppLink({ type: "quote" })}
            target="_blank"
            rel="noopener noreferrer"
            className="relative inline-flex items-center text-sm font-semibold rounded-full h-13 ps-7 pe-16 group transition-all duration-500 bg-primary text-white hover:bg-primary/95 shadow-lg shadow-primary/20 hover:ps-16 hover:pe-7 overflow-hidden cursor-pointer w-full sm:w-auto justify-center"
          >
            <span className="relative z-10 transition-all duration-500 whitespace-nowrap">
              Get a Quote on WhatsApp
            </span>
            <span className="absolute right-1.5 w-10 h-10 bg-white text-primary rounded-full flex items-center justify-center transition-all duration-500 group-hover:right-[calc(100%-46px)] group-hover:rotate-45 shadow-sm">
              <ArrowUpRight size={18} />
            </span>
          </a>

          <Link
            href="/tools/eligibility-checker"
            className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-white hover:bg-slate-50 border border-slate-200 text-slate-700 hover:text-slate-900 font-semibold text-sm transition-all shadow-xs flex items-center justify-center gap-2"
          >
            <span>Check My Eligibility (60s)</span>
            <ArrowRight className="w-4 h-4 text-primary" />
          </Link>

          {/* Social Proof Avatars & Stars */}
          <div className="flex items-center sm:gap-4 gap-3 pt-2 sm:pt-0">
            <ul className="avatar flex flex-row items-center">
              {avatarList.map((avatar, index) => (
                <li key={index} className="-mr-2.5 z-1 hover:z-10 transition-transform">
                  <img
                    src={avatar.image}
                    alt="Verified Applicant"
                    width={38}
                    height={38}
                    className="rounded-full border-2 border-white shadow-xs object-cover w-9 h-9"
                  />
                </li>
              ))}
            </ul>
            <div className="gap-0.5 flex flex-col items-start text-left">
              <div className="flex gap-1 text-amber-500">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star key={index} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <p className="text-xs font-medium text-slate-600">
                <span className="font-bold text-slate-900">257+ applicants</span> · 98% approved
              </p>
            </div>
          </div>
        </motion.div>

        {/* Marquee Destination Ticker */}
        <div className="w-full mb-12">
          <BrandSlider brandList={brandList} />
        </div>

        {/* Trust Strip */}
        <div className="w-full max-w-4xl grid grid-cols-2 md:grid-cols-4 gap-4 p-5 rounded-2xl bg-white border border-slate-200/90 shadow-sm text-left">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-sky-50 border border-sky-100 flex items-center justify-center text-primary shrink-0">
              <Users className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xl font-bold text-slate-900 tabular-nums">257+</div>
              <div className="text-xs text-slate-500">Clients Served</div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-sky-50 border border-sky-100 flex items-center justify-center text-primary shrink-0">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xl font-bold text-primary tabular-nums">98%*</div>
              <div className="text-xs text-slate-500">Approval Record</div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-sky-50 border border-sky-100 flex items-center justify-center text-primary shrink-0">
              <Clock className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xl font-bold text-slate-900 tabular-nums">5 Years</div>
              <div className="text-xs text-slate-500">Direct Experience</div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-600 shrink-0">
              <CheckCircle2 className="w-5 h-5 text-emerald-600" />
            </div>
            <div>
              <div className="text-xl font-bold text-slate-900">100%</div>
              <div className="text-xs text-slate-500">7-Day Refund Policy</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
