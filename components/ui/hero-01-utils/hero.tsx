"use client";

import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { motion } from "motion/react";
import { ArrowUpRight, ShieldCheck, Star } from "lucide-react";
import { buildWhatsAppLink } from "@/lib/whatsapp";

export type AvatarList = {
  image: string;
};

type HeroSectionProps = {
  avatarList: AvatarList[];
};

export default function HeroSection({ avatarList }: HeroSectionProps) {
  return (
    <section className="relative overflow-hidden pt-8 pb-12 md:pt-16 md:pb-16">
      <div className="w-full h-full relative">
        {/* Soft Trustworthy Ambient Background Glow */}
        <div className="relative w-full pt-4 md:pt-12 pb-6 md:pb-10 before:absolute before:w-full before:h-full before:bg-gradient-to-r before:from-sky-100/70 before:via-blue-50/50 before:to-indigo-50/60 before:rounded-full before:top-12 before:blur-3xl before:-z-10">
          <div className="container mx-auto px-6 relative z-10">
            <div className="flex flex-col max-w-5xl mx-auto gap-8">
              <div className="relative flex flex-col text-center items-center sm:gap-6 gap-4">
                {/* Official Compliance Pill */}
                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-slate-200/90 text-primary text-xs font-medium shadow-xs"
                >
                  <ShieldCheck className="w-4 h-4 text-primary" />
                  <span className="font-semibold text-slate-800">
                    Registered in Dwarka, New Delhi · Direct Consultants · Zero Sub-Agents
                  </span>
                </motion.div>

                {/* Main Hero Headline */}
                <motion.h1
                  initial={{ opacity: 0, y: 32 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.9, ease: "easeInOut" }}
                  className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-[5rem] font-normal leading-[1.1] tracking-tight text-slate-900 max-w-4xl"
                >
                  Your next chapter starts at the{" "}
                  <span className="italic font-normal text-primary">
                    window seat.
                  </span>
                </motion.h1>

                {/* Human Written Subtitle (0% AI Filler) */}
                <motion.p
                  initial={{ opacity: 0, y: 32 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.9, delay: 0.1, ease: "easeInOut" }}
                  className="text-base sm:text-lg md:text-xl font-normal max-w-2xl text-slate-600 leading-relaxed"
                >
                  Visa consultancy for Czech Republic, Malaysia, Russia, Slovenia, and Singapore.
                  Study, work, tourist, and business visas filed directly with zero middleman sub-agents.
                </motion.p>
              </div>

              {/* Action Buttons & Trust Elements */}
              <motion.div
                initial={{ opacity: 0, y: 32 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 0.2, ease: "easeInOut" }}
                className="flex items-center flex-col md:flex-row justify-center gap-6 sm:gap-8"
              >
                {/* Signature Hero-01 Action Button with Animated Arrow */}
                <a
                  href={buildWhatsAppLink({ type: "quote" })}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative inline-flex items-center text-sm font-semibold rounded-full h-13 ps-7 pe-16 group transition-all duration-500 bg-primary text-white hover:bg-primary/95 shadow-lg shadow-primary/20 hover:ps-16 hover:pe-7 overflow-hidden cursor-pointer"
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
                  className="text-sm font-semibold text-slate-700 hover:text-primary transition-colors px-6 py-3 rounded-full border border-slate-200 hover:border-primary/40 bg-white/80 hover:bg-white shadow-xs"
                >
                  Check My Eligibility (60s) &rarr;
                </Link>

                {/* Social Proof Avatars & Stars */}
                <div className="flex items-center sm:gap-5 gap-3 pt-2 md:pt-0">
                  <ul className="avatar flex flex-row items-center">
                    {avatarList.map((avatar, index) => (
                      <li key={index} className="-mr-2.5 z-1 hover:z-10 transition-transform">
                        <img
                          src={avatar.image}
                          alt="Verified Applicant"
                          width={40}
                          height={40}
                          className="rounded-full border-2 border-white shadow-xs object-cover w-10 h-10"
                        />
                      </li>
                    ))}
                  </ul>
                  <div className="gap-0.5 flex flex-col items-start text-left">
                    <div className="flex gap-1 text-amber-500">
                      {Array.from({ length: 5 }).map((_, index) => (
                        <Star key={index} className="w-4 h-4 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                    <p className="text-xs font-medium text-slate-600">
                      <span className="font-bold text-slate-900">257+ applicants</span> · 98% approved
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
