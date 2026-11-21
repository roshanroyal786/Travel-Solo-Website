"use client";

import React, { useRef, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { motion } from "motion/react";
import { ArrowUpRight, ShieldCheck, Star, ArrowRight } from "lucide-react";
import { buildWhatsAppLink } from "@/lib/whatsapp";

export type AvatarList = {
  image: string;
};

type HeroSectionProps = {
  avatarList: AvatarList[];
};

export default function HeroSection({ avatarList }: HeroSectionProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.defaultMuted = true;
      videoRef.current.muted = true;
      videoRef.current.play().catch(() => {});
    }
  }, []);

  return (
    <section className="relative overflow-hidden pt-8 pb-12 md:pt-16 md:pb-20 min-h-[88vh] flex flex-col justify-center bg-slate-950">
      {/* Real Scenic Aerial Airplane Window Video Background */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          aria-hidden="true"
          className="w-full h-full object-cover object-center scale-100"
        >
          <source src="/videos/airplane-window.mp4" type="video/mp4" />
          <source
            src="https://videos.pexels.com/video-files/28880643/12502659_2560_1440_24fps.mp4"
            type="video/mp4"
          />
        </video>

        {/* Cinematic Scrim: Keeps the airplane window seat crystal clear while ensuring crisp text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/25 to-black/60" />

        {/* Bottom smooth light-theme blend */}
        <div className="absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-white via-white/80 to-transparent" />
      </div>

      <div className="w-full h-full relative z-10">
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col max-w-5xl mx-auto gap-8">
            <div className="relative flex flex-col text-center items-center sm:gap-6 gap-4">
              {/* Official Compliance Pill */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900/65 backdrop-blur-md border border-white/25 text-white text-xs font-medium shadow-xl"
              >
                <ShieldCheck className="w-4 h-4 text-sky-400" />
                <span className="font-semibold text-white tracking-wide drop-shadow-sm">
                  Registered in Dwarka, New Delhi · Direct Consultants · Zero Sub-Agents
                </span>
              </motion.div>

              {/* Main Hero Headline with Drop Shadow */}
              <motion.h1
                initial={{ opacity: 0, y: 32 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, ease: "easeInOut" }}
                className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-[5.2rem] font-medium leading-[1.08] tracking-tight text-white max-w-4xl drop-shadow-[0_4px_16px_rgba(0,0,0,0.85)]"
              >
                Your next chapter starts at the{" "}
                <span className="italic font-normal text-sky-300 drop-shadow-[0_4px_16px_rgba(0,0,0,0.9)]">
                  window seat.
                </span>
              </motion.h1>

              {/* Human Written Subtitle (0% AI Filler) */}
              <motion.p
                initial={{ opacity: 0, y: 32 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 0.1, ease: "easeInOut" }}
                className="text-base sm:text-lg md:text-xl font-normal max-w-2xl text-white leading-relaxed drop-shadow-[0_2px_8px_rgba(0,0,0,0.85)]"
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
                className="relative inline-flex items-center text-sm font-semibold rounded-full h-13 ps-7 pe-16 group transition-all duration-500 bg-sky-500 hover:bg-sky-400 text-slate-950 shadow-2xl hover:shadow-sky-500/40 hover:ps-16 hover:pe-7 overflow-hidden cursor-pointer"
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
                className="text-sm font-semibold text-slate-900 hover:text-slate-950 transition-colors px-6 py-3.5 rounded-full border border-slate-300 bg-white/95 hover:bg-white backdrop-blur-md shadow-xl"
              >
                Check My Eligibility (60s) &rarr;
              </Link>

              {/* Social Proof Avatars & Stars */}
              <div className="flex items-center sm:gap-5 gap-3 py-1.5 px-4 rounded-full bg-slate-900/65 backdrop-blur-md border border-white/20 shadow-xl">
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
                  <div className="flex gap-1 text-amber-400">
                    {Array.from({ length: 5 }).map((_, index) => (
                      <Star key={index} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <p className="text-xs font-medium text-slate-200">
                    <span className="font-bold text-white">257+ applicants</span> · 98% approved
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
