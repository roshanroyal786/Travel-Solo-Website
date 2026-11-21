"use client";

import React, { useRef, useEffect } from "react";
import Link from "next/link";
import { buildWhatsAppLink } from "@/lib/whatsapp";
import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  ShieldCheck,
  Users,
  Clock,
  Award,
  Star,
  Plane,
  Compass,
  MapPin,
  TrendingUp,
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
      "https://images.unsplash.com/photo-1541849546-216549ae216d?auto=format&fit=crop&w=120&q=80",
    lightimg:
      "https://images.unsplash.com/photo-1541849546-216549ae216d?auto=format&fit=crop&w=120&q=80",
    name: "Czech Republic (Schengen)",
  },
  {
    image:
      "https://images.unsplash.com/photo-1596422846543-75c6fc197f07?auto=format&fit=crop&w=120&q=80",
    lightimg:
      "https://images.unsplash.com/photo-1596422846543-75c6fc197f07?auto=format&fit=crop&w=120&q=80",
    name: "Malaysia (e-Visa & MDEC)",
  },
  {
    image:
      "https://images.unsplash.com/photo-1513622470522-26c3c8a854bc?auto=format&fit=crop&w=120&q=80",
    lightimg:
      "https://images.unsplash.com/photo-1513622470522-26c3c8a854bc?auto=format&fit=crop&w=120&q=80",
    name: "Russia (MBBS & e-Visa)",
  },
  {
    image:
      "https://images.unsplash.com/photo-1509299349698-dd22323b5963?auto=format&fit=crop&w=120&q=80",
    lightimg:
      "https://images.unsplash.com/photo-1509299349698-dd22323b5963?auto=format&fit=crop&w=120&q=80",
    name: "Slovenia (EU Single Permit)",
  },
  {
    image:
      "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?auto=format&fit=crop&w=120&q=80",
    lightimg:
      "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?auto=format&fit=crop&w=120&q=80",
    name: "Singapore (EP & COMPASS)",
  },
];

export default function HeroSection() {
  const windowVideoRef = useRef<HTMLVideoElement>(null);
  const ambientVideoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const playSafe = (video: HTMLVideoElement | null) => {
      if (video) {
        video.defaultMuted = true;
        video.muted = true;
        video.play().catch(() => {});
      }
    };
    playSafe(windowVideoRef.current);
    playSafe(ambientVideoRef.current);
  }, []);

  return (
    <section className="relative overflow-hidden pt-24 pb-14 md:pt-32 md:pb-20 bg-gradient-to-b from-[#0B2341] via-[#10355E] to-[#1B4B7E] rounded-b-[2.5rem] md:rounded-b-[4.5rem] shadow-2xl">
      {/* Ambient aerial atmosphere in background with subtle blur */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none opacity-40 mix-blend-overlay">
        <video
          ref={ambientVideoRef}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          aria-hidden="true"
          className="w-full h-full object-cover scale-105 filter blur-xs"
        >
          <source src="/videos/airplane-window.mp4" type="video/mp4" />
          <source
            src="https://videos.pexels.com/video-files/28880643/12502659_2560_1440_24fps.mp4"
            type="video/mp4"
          />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-[#0B2341]/80 via-[#10355E]/60 to-[#1B4B7E]/90" />
      </div>

      <div className="relative z-10 max-w-[1280px] mx-auto px-5 sm:px-6 w-full text-center flex flex-col items-center">
        {/* Official Compliance Pill */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900/80 backdrop-blur-md border border-sky-400/30 text-white text-xs font-medium shadow-2xl mb-6"
        >
          <ShieldCheck className="w-4 h-4 text-sky-400" />
          <span className="font-semibold text-white tracking-wide drop-shadow-sm">
            Registered in Dwarka, New Delhi · Direct Consultants · Zero Sub-Agents
          </span>
        </motion.div>

        {/* Hero Headline: Playfair Display with Drop Shadow for Maximum Visibility */}
        <motion.h1
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeInOut" }}
          className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-[5.2rem] font-medium leading-[1.08] tracking-tight text-white max-w-4xl mb-6 drop-shadow-[0_4px_24px_rgba(0,0,0,0.85)]"
        >
          Your next chapter starts at the{" "}
          <span className="italic font-normal text-sky-300 drop-shadow-[0_4px_20px_rgba(56,189,248,0.6)]">
            window seat.
          </span>
        </motion.h1>

        {/* Subline: Human, direct, 0% AI filler with deep drop shadow */}
        <motion.p
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1, ease: "easeInOut" }}
          className="text-white text-base sm:text-lg md:text-xl max-w-2xl font-normal leading-relaxed mb-8 drop-shadow-[0_2px_10px_rgba(0,0,0,0.85)]"
        >
          Visa consultancy for Czech Republic, Malaysia, Russia, Slovenia, and Singapore.
          Study, work, tourist, and business visas filed directly with zero middleman sub-agents.
        </motion.p>

        {/* CTA Action Buttons & Social Proof */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2, ease: "easeInOut" }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 w-full sm:w-auto mb-10"
        >
          {/* Signature Action Button with Animated Arrow */}
          <a
            href={buildWhatsAppLink({ type: "quote" })}
            target="_blank"
            rel="noopener noreferrer"
            className="relative inline-flex items-center text-sm font-semibold rounded-full h-13 ps-7 pe-16 group transition-all duration-500 bg-sky-400 hover:bg-sky-300 text-slate-950 shadow-2xl hover:shadow-sky-400/50 hover:ps-16 hover:pe-7 overflow-hidden cursor-pointer w-full sm:w-auto justify-center"
          >
            <span className="relative z-10 transition-all duration-500 whitespace-nowrap font-bold">
              Get a Quote on WhatsApp
            </span>
            <span className="absolute right-1.5 w-10 h-10 bg-slate-950 text-white rounded-full flex items-center justify-center transition-all duration-500 group-hover:right-[calc(100%-46px)] group-hover:rotate-45 shadow-sm">
              <ArrowUpRight size={18} />
            </span>
          </a>

          <Link
            href="/tools/eligibility-checker"
            className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-white/95 hover:bg-white text-slate-900 font-semibold text-sm transition-all shadow-xl hover:shadow-2xl flex items-center justify-center gap-2"
          >
            <span>Check My Eligibility (60s)</span>
            <ArrowRight className="w-4 h-4 text-sky-600" />
          </Link>

          {/* Social Proof Avatars & Stars with Frosted Glass Pill */}
          <div className="flex items-center sm:gap-4 gap-3 py-1.5 px-4 rounded-full bg-slate-900/80 backdrop-blur-md border border-white/20 shadow-2xl">
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
              <div className="flex gap-1 text-amber-400">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star key={index} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <p className="text-xs font-medium text-slate-200">
                <span className="font-bold text-white">257+ applicants</span> · 98% approved
              </p>
            </div>
          </div>
        </motion.div>

        {/* 
          AIRCRAFT WINDOW VIEWPORT PORTAL (Solving Mobile Video Cropping):
          Maintains authentic 16:10 aspect ratio so the entire airplane window seat,
          curved bezel, wing and rolling clouds are 100% VISIBLE on mobile & desktop!
        */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
          className="relative w-full max-w-4xl mx-auto my-6"
        >
          {/* Beveled aircraft frame wrapper */}
          <div className="relative rounded-[2.5rem] sm:rounded-[3.5rem] p-2 sm:p-4 bg-gradient-to-b from-white/30 via-white/10 to-sky-400/20 backdrop-blur-md border-2 sm:border-4 border-white/60 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.6)]">
            <div className="relative aspect-[16/10] sm:aspect-[16/9] md:aspect-[21/9] w-full rounded-[2rem] sm:rounded-[2.8rem] overflow-hidden bg-slate-950 border border-white/30 shadow-inner">
              {/* Window Seat Video - Fully visible without vertical cropping */}
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

              {/* Realistic oval airplane window glass reflection overlay */}
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent pointer-events-none" />

              {/* Top Telemetry Header inside Window */}
              <div className="absolute top-3 sm:top-5 left-4 sm:left-6 right-4 sm:right-6 flex items-center justify-between pointer-events-none">
                <div className="inline-flex items-center gap-2 px-3 py-1 sm:px-4 sm:py-1.5 rounded-full bg-slate-950/75 backdrop-blur-md border border-white/20 text-white text-[10px] sm:text-xs font-mono shadow-lg">
                  <Plane className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-sky-400 animate-pulse" />
                  <span>CRUISING AT 36,000 FT · SEAT 14A</span>
                </div>

                <div className="inline-flex items-center gap-1.5 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-emerald-500/80 backdrop-blur-md text-white text-[10px] sm:text-xs font-semibold shadow-lg">
                  <span className="w-1.5 h-1.5 rounded-full bg-white animate-ping" />
                  <span>ON TRACK</span>
                </div>
              </div>

              {/* Interactive Location Pinned Badges (Inspired by Reference Image 4) */}
              <div className="absolute top-1/2 left-6 sm:left-14 -translate-y-1/2 hidden xs:flex flex-col gap-2 pointer-events-none">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-slate-900/85 backdrop-blur-md border border-sky-400/40 text-white text-xs shadow-xl animate-bounce">
                  <MapPin className="w-3.5 h-3.5 text-sky-400" />
                  <span className="font-semibold">Czech Republic & EU Schengen</span>
                </div>
              </div>

              <div className="absolute top-1/3 right-6 sm:right-14 hidden sm:flex flex-col gap-2 pointer-events-none">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-slate-900/85 backdrop-blur-md border border-amber-400/40 text-white text-xs shadow-xl">
                  <MapPin className="w-3.5 h-3.5 text-amber-400" />
                  <span className="font-semibold">Singapore & Malaysia Corridors</span>
                </div>
              </div>

              {/* Bottom Flight Route & Live Indicator */}
              <div className="absolute bottom-3 sm:bottom-5 left-4 sm:left-6 right-4 sm:right-6 flex items-center justify-between pointer-events-none">
                <div className="inline-flex items-center gap-2 px-3 py-1 sm:px-4 sm:py-1.5 rounded-full bg-slate-950/75 backdrop-blur-md border border-white/20 text-white text-[10px] sm:text-xs font-medium">
                  <Compass className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-sky-400" />
                  <span>DEL (Dwarka HQ) ➔ 5 Specialized Global Hubs</span>
                </div>

                <div className="hidden sm:inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-500/80 backdrop-blur-md text-slate-950 text-xs font-bold">
                  <span>Direct Consular Filing · No Middlemen</span>
                </div>
              </div>
            </div>

            {/* Floating Bento Micro-Stat (Inspired by Reference Image 3 - Novacore) */}
            <div className="absolute -bottom-4 -left-2 sm:-left-6 hidden sm:flex items-center gap-3 px-4 py-2.5 rounded-2xl bg-white/95 backdrop-blur-md border border-slate-200/90 shadow-2xl text-slate-900">
              <div className="w-8 h-8 rounded-xl bg-sky-100 flex items-center justify-center text-primary">
                <TrendingUp className="w-4 h-4 text-sky-600" />
              </div>
              <div className="text-left">
                <div className="text-xs font-bold text-slate-900">+38.4% Faster</div>
                <div className="text-[10px] text-slate-500">Average Filing Speed</div>
              </div>
            </div>

            <div className="absolute -top-4 -right-2 sm:-right-6 hidden sm:flex items-center gap-3 px-4 py-2.5 rounded-2xl bg-white/95 backdrop-blur-md border border-slate-200/90 shadow-2xl text-slate-900">
              <div className="w-8 h-8 rounded-xl bg-emerald-100 flex items-center justify-center text-emerald-600">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              </div>
              <div className="text-left">
                <div className="text-xs font-bold text-slate-900">100% Written</div>
                <div className="text-[10px] text-slate-500">7-Day Refund Guarantee</div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Marquee Destination Ticker with HIGH CONTRAST Prominent Badge */}
        <div className="w-full mt-4 mb-8">
          <BrandSlider brandList={brandList} />
        </div>

        {/* Novacore-Style Bento Trust Strip */}
        <div className="w-full max-w-4xl grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 p-4 sm:p-5 rounded-3xl bg-white/95 backdrop-blur-md border border-slate-200/90 shadow-2xl text-left">
          <div className="flex items-center gap-3 p-2">
            <div className="w-10 h-10 rounded-xl bg-sky-50 border border-sky-100 flex items-center justify-center text-primary shrink-0">
              <Users className="w-5 h-5 text-sky-600" />
            </div>
            <div>
              <div className="text-xl font-bold text-slate-900 tabular-nums">257+</div>
              <div className="text-xs text-slate-500">Clients Served</div>
            </div>
          </div>

          <div className="flex items-center gap-3 p-2">
            <div className="w-10 h-10 rounded-xl bg-sky-50 border border-sky-100 flex items-center justify-center text-primary shrink-0">
              <Award className="w-5 h-5 text-sky-600" />
            </div>
            <div>
              <div className="text-xl font-bold text-sky-600 tabular-nums">98%*</div>
              <div className="text-xs text-slate-500">Approval Record</div>
            </div>
          </div>

          <div className="flex items-center gap-3 p-2">
            <div className="w-10 h-10 rounded-xl bg-sky-50 border border-sky-100 flex items-center justify-center text-primary shrink-0">
              <Clock className="w-5 h-5 text-sky-600" />
            </div>
            <div>
              <div className="text-xl font-bold text-slate-900 tabular-nums">5 Years</div>
              <div className="text-xs text-slate-500">Direct Experience</div>
            </div>
          </div>

          <div className="flex items-center gap-3 p-2">
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
