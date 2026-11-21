"use client";

import React, { useRef, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { motion } from "motion/react";
import {
  ArrowUpRight,
  ShieldCheck,
  Star,
  ArrowRight,
  Plane,
  Compass,
  MapPin,
  TrendingUp,
  CheckCircle2,
} from "lucide-react";
import { buildWhatsAppLink } from "@/lib/whatsapp";

export type AvatarList = {
  image: string;
};

type HeroSectionProps = {
  avatarList: AvatarList[];
};

export default function HeroSection({ avatarList }: HeroSectionProps) {
  const windowVideoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (windowVideoRef.current) {
      windowVideoRef.current.defaultMuted = true;
      windowVideoRef.current.muted = true;
      windowVideoRef.current.play().catch(() => {});
    }
  }, []);

  return (
    <section className="relative overflow-hidden pt-8 pb-12 md:pt-16 md:pb-20 bg-gradient-to-b from-[#D8EBFC] via-[#E8F3FD] to-[#F8FAFD] rounded-b-[3rem] md:rounded-b-[5rem] shadow-sm border-b border-sky-100">
      {/* Decorative sky clouds and atmospheric lighting */}
      <div className="absolute top-0 right-10 w-[500px] h-[500px] bg-sky-200/40 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 left-0 w-[400px] h-[400px] bg-blue-100/50 rounded-full blur-[100px] pointer-events-none" />

      <div className="w-full h-full relative z-10">
        <div className="container mx-auto px-5 sm:px-6 relative z-10">
          <div className="flex flex-col max-w-5xl mx-auto gap-8">
            <div className="relative flex flex-col text-center items-center sm:gap-6 gap-4">
              {/* Compliance Pill Badge */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/95 backdrop-blur-md border border-sky-200 text-[#005A9C] text-xs font-semibold shadow-sm"
              >
                <ShieldCheck className="w-4 h-4 text-[#005A9C]" />
                <span className="tracking-wide text-slate-800">
                  Registered in Dwarka, New Delhi · Direct Embassy Filings · Zero Sub-Agents
                </span>
              </motion.div>

              {/* Main Hero Headline */}
              <motion.h1
                initial={{ opacity: 0, y: 32 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, ease: "easeInOut" }}
                className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-[5.4rem] font-medium leading-[1.08] tracking-tight text-[#0B2545] max-w-4xl"
              >
                Your next chapter starts at the{" "}
                <span className="italic font-normal text-[#005A9C] underline decoration-sky-300 decoration-wavy decoration-2 underline-offset-8">
                  window seat.
                </span>
              </motion.h1>

              {/* Human Written Subtitle */}
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
              className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 w-full sm:w-auto"
            >
              <a
                href={buildWhatsAppLink({ type: "quote" })}
                target="_blank"
                rel="noopener noreferrer"
                className="relative inline-flex items-center text-sm font-semibold rounded-full h-13 ps-7 pe-16 group transition-all duration-500 bg-[#005A9C] hover:bg-[#00487C] text-white shadow-xl hover:shadow-[#005A9C]/30 hover:ps-16 hover:pe-7 overflow-hidden cursor-pointer w-full sm:w-auto justify-center"
              >
                <span className="relative z-10 transition-all duration-500 whitespace-nowrap font-bold">
                  Get a Quote on WhatsApp
                </span>
                <span className="absolute right-1.5 w-10 h-10 bg-white text-[#005A9C] rounded-full flex items-center justify-center transition-all duration-500 group-hover:right-[calc(100%-46px)] group-hover:rotate-45 shadow-sm">
                  <ArrowUpRight size={18} />
                </span>
              </a>

              <Link
                href="/tools/eligibility-checker"
                className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-white hover:bg-slate-50 text-slate-900 border border-slate-200 font-semibold text-sm transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2"
              >
                <span>Check My Eligibility (60s)</span>
                <ArrowRight className="w-4 h-4 text-[#005A9C]" />
              </Link>

              <div className="flex items-center sm:gap-4 gap-3 py-1.5 px-4 rounded-full bg-white/95 border border-sky-200/90 shadow-md">
                <ul className="avatar flex flex-row items-center">
                  {avatarList.map((avatar, index) => (
                    <li key={index} className="-mr-2.5 z-1 hover:z-10 transition-transform">
                      <img
                        src={avatar.image}
                        alt="Applicant"
                        width={38}
                        height={38}
                        className="rounded-full border-2 border-white shadow-xs object-cover w-9 h-9"
                      />
                    </li>
                  ))}
                </ul>
                <div className="gap-0.5 flex flex-col items-start text-left">
                  <div className="flex gap-1 text-amber-400">
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

            {/* Aircraft Window Viewport Portal on Mobile & Desktop */}
            <motion.div
              initial={{ opacity: 0, scale: 0.94, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
              className="relative w-full max-w-4xl mx-auto my-2"
            >
              <div className="relative rounded-[2.5rem] sm:rounded-[3.8rem] p-2.5 sm:p-5 bg-gradient-to-b from-white via-white/80 to-sky-100/80 backdrop-blur-md border-4 sm:border-8 border-white shadow-[0_25px_60px_-15px_rgba(0,90,156,0.22)]">
                <div className="relative aspect-[16/10] sm:aspect-[16/9] md:aspect-[21/9] w-full rounded-[2rem] sm:rounded-[3rem] overflow-hidden bg-slate-950 border-2 border-white/80 shadow-inner">
                  <video
                    ref={windowVideoRef}
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="auto"
                    aria-hidden="true"
                    className="w-full h-full object-cover object-center"
                  >
                    <source src="/videos/airplane-window.mp4" type="video/mp4" />
                    <source
                      src="https://videos.pexels.com/video-files/28880643/12502659_2560_1440_24fps.mp4"
                      type="video/mp4"
                    />
                  </video>

                  <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/15 to-transparent pointer-events-none" />

                  <div className="absolute top-3 sm:top-5 left-4 sm:left-6 right-4 sm:right-6 flex items-center justify-between pointer-events-none">
                    <div className="inline-flex items-center gap-2 px-3 py-1 sm:px-4 sm:py-1.5 rounded-full bg-slate-950/75 backdrop-blur-md border border-white/20 text-white text-[10px] sm:text-xs font-mono shadow-lg">
                      <Plane className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-sky-400 animate-pulse" />
                      <span>CRUISING AT 36,000 FT · SEAT 14A</span>
                    </div>

                    <div className="inline-flex items-center gap-1.5 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-emerald-500/85 backdrop-blur-md text-white text-[10px] sm:text-xs font-semibold shadow-lg">
                      <span className="w-1.5 h-1.5 rounded-full bg-white animate-ping" />
                      <span>ON SCHEDULE</span>
                    </div>
                  </div>

                  <div className="absolute bottom-3 sm:bottom-5 left-4 sm:left-6 right-4 sm:right-6 flex items-center justify-between pointer-events-none">
                    <div className="inline-flex items-center gap-2 px-3 py-1 sm:px-4 sm:py-1.5 rounded-full bg-slate-950/75 backdrop-blur-md border border-white/20 text-white text-[10px] sm:text-xs font-medium">
                      <Compass className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-sky-400" />
                      <span>DEL ➔ 5 Specialized Global Corridors</span>
                    </div>

                    <div className="hidden sm:inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-500/85 backdrop-blur-md text-slate-950 text-xs font-bold">
                      <span>Zero Sub-Agents · Direct Embassies</span>
                    </div>
                  </div>
                </div>

                <div className="absolute -bottom-4 -left-2 sm:-left-6 hidden sm:flex items-center gap-3 px-4 py-2.5 rounded-2xl bg-white/95 backdrop-blur-md border border-slate-200/90 shadow-xl text-slate-900">
                  <div className="w-8 h-8 rounded-xl bg-sky-100 flex items-center justify-center text-[#005A9C]">
                    <TrendingUp className="w-4 h-4 text-sky-600" />
                  </div>
                  <div className="text-left">
                    <div className="text-xs font-bold text-slate-900">+38.4% Faster</div>
                    <div className="text-[10px] text-slate-500">Average Filing Speed</div>
                  </div>
                </div>

                <div className="absolute -top-4 -right-2 sm:-right-6 hidden sm:flex items-center gap-3 px-4 py-2.5 rounded-2xl bg-white/95 backdrop-blur-md border border-slate-200/90 shadow-xl text-slate-900">
                  <div className="w-8 h-8 rounded-xl bg-emerald-100 flex items-center justify-center text-emerald-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  </div>
                  <div className="text-left">
                    <div className="text-xs font-bold text-slate-900">100% Written</div>
                    <div className="text-[10px] text-slate-500">7-Day Refund Guarantee</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
