"use client";

import React from "react";
import { siteConfig } from "@/content/site";
import {
  Users,
  Award,
  Clock,
  ShieldCheck,
  TrendingUp,
  CheckCircle2,
  FileCheck,
  Star,
  ExternalLink,
} from "lucide-react";
import Link from "next/link";

export default function ProofStatsSection() {
  const verifiedAvatars = [
    "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&q=80",
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&q=80",
    "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=120&q=80",
    "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=120&q=80",
    "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=120&q=80",
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-[#F0F7FD] via-white to-[#F0F7FD] border-t border-slate-200/80 relative overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-100/80 border border-sky-200 text-sky-800 text-xs font-semibold uppercase tracking-wider mb-3">
              <TrendingUp className="w-3.5 h-3.5 text-sky-600" />
              <span>Proven Track Record · Real Metrics</span>
            </div>
            <h2 className="font-display font-medium text-3xl sm:text-5xl text-slate-900 leading-tight">
              Honest data. <br />
              <span className="italic text-[#005A9C] font-normal">Backed by signed contracts.</span>
            </h2>
          </div>
          <p className="text-slate-600 text-base max-w-md leading-relaxed">
            Every statistic we publish represents real passport holders, audited documentation files, and official embassy submissions managed right here in Dwarka.
          </p>
        </div>

        {/* 
          MODERN BENTO GRID (Inspired by Reference Image 3 - Novacore)
          Replacing flat white boxes with rich, multi-colored Bento tiles!
        */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6">
          {/* Card 1: Vibrant Royal Ocean Blue (Large 7-col Bento Tile) */}
          <div className="lg:col-span-7 rounded-3xl p-8 sm:p-10 bg-gradient-to-br from-[#0B3B6F] to-[#005A9C] text-white shadow-xl flex flex-col justify-between relative overflow-hidden group">
            {/* Ambient decorative glow */}
            <div className="absolute top-0 right-0 w-72 h-72 bg-sky-400/20 rounded-full blur-3xl pointer-events-none group-hover:scale-125 transition-transform duration-700" />

            <div className="relative z-10 space-y-4">
              <div className="flex items-center justify-between">
                <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/15 backdrop-blur-md border border-white/20 text-xs font-semibold text-sky-200 uppercase tracking-wider">
                  <Users className="w-3.5 h-3.5" />
                  <span>Applicant Volume</span>
                </span>
                <span className="text-xs text-sky-200 font-mono">2021 – 2026</span>
              </div>

              <div className="font-display text-5xl sm:text-7xl font-normal tracking-tight text-white tabular-nums">
                {siteConfig.stats.clientsServed}
              </div>

              <h3 className="font-display text-xl sm:text-2xl font-normal text-white">
                Individual & Family Files Successfully Guided
              </h3>

              <p className="text-sky-100 text-sm max-w-lg leading-relaxed">
                From engineering professionals moving to Brno to medical students enrolled in Moscow, our direct filing process eliminates third-party intermediaries and miscommunication.
              </p>
            </div>

            <div className="relative z-10 pt-8 mt-8 border-t border-white/20 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              {/* Stacked client avatars */}
              <div className="flex items-center gap-3">
                <div className="flex -space-x-2">
                  {verifiedAvatars.map((src, i) => (
                    <img
                      key={i}
                      src={src}
                      alt="Verified client"
                      className="w-10 h-10 rounded-full border-2 border-white object-cover shadow-sm"
                    />
                  ))}
                </div>
                <div className="text-xs text-sky-100">
                  <span className="font-bold text-white block">100% Real People</span>
                  <span>Zero fake stock testimonials</span>
                </div>
              </div>

              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/20 backdrop-blur-md text-xs font-semibold text-white">
                <Star className="w-3.5 h-3.5 fill-amber-300 text-amber-300" />
                <span>4.9 / 5 Overall Client Rating</span>
              </div>
            </div>
          </div>

          {/* Card 2: Vibrant Soft Lime / Emerald Bento Tile (5-col) */}
          <div className="lg:col-span-5 rounded-3xl p-8 sm:p-10 bg-[#ECFCCB] border border-[#BEF264] shadow-lg flex flex-col justify-between text-slate-900 relative overflow-hidden group">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 border border-emerald-300 text-emerald-900 text-xs font-bold uppercase tracking-wider">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-700" />
                  <span>Document Audit Success</span>
                </span>
              </div>

              <div className="font-display text-5xl sm:text-7xl font-normal text-slate-900 tabular-nums">
                {siteConfig.stats.successRate}*
              </div>

              <h3 className="font-display text-xl sm:text-2xl font-normal text-slate-900">
                Audited Profile Approval Record
              </h3>

              <p className="text-slate-700 text-sm leading-relaxed">
                When we accept a file after our initial 60-second assessment, our rejection rate is under 2%. If your case has critical flaws, we tell you upfront and decline to file.
              </p>
            </div>

            <div className="pt-6 mt-6 border-t border-emerald-200/80 flex items-center justify-between">
              <span className="text-xs text-emerald-800 font-medium">
                Audited against official embassy criteria
              </span>
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-600 animate-ping" />
            </div>
          </div>

          {/* Card 3: Sky Ice Blue Bento Tile (4-col) */}
          <div className="lg:col-span-4 rounded-3xl p-8 bg-[#E0F2FE] border border-sky-200 shadow-md flex flex-col justify-between text-slate-900">
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-white border border-sky-200 flex items-center justify-center text-[#005A9C] shadow-2xs">
                <Clock className="w-6 h-6 text-[#005A9C]" />
              </div>
              <div className="font-display text-4xl sm:text-5xl font-normal text-slate-900 tabular-nums">
                5+ Years
              </div>
              <h4 className="font-display text-lg font-normal text-slate-900">
                Direct Consular Practice
              </h4>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                Established first as a personal consultancy, now registered in Dwarka with active MEA apostille and court translation pipelines.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-sky-200/70 text-xs text-sky-800 font-semibold">
              Dwarka Sector 7, New Delhi Headquarters
            </div>
          </div>

          {/* Card 4: Deep Trust Navy Bento Tile (4-col) */}
          <div className="lg:col-span-4 rounded-3xl p-8 bg-[#0A1C36] text-white shadow-xl flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center text-emerald-400 shadow-2xs">
                <ShieldCheck className="w-6 h-6 text-emerald-400" />
              </div>
              <div className="font-display text-4xl sm:text-5xl font-normal text-white tabular-nums">
                100% Written
              </div>
              <h4 className="font-display text-lg font-normal text-white">
                7-Day Money-Back Commitment
              </h4>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                If you change your mind within 7 calendar days of signing up, we refund 100% of our fee with zero deductions. Written directly into your client agreement.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-white/15 text-xs text-emerald-300 font-semibold">
              Guaranteed Contract Protection
            </div>
          </div>

          {/* Card 5: Soft Lavender / Clean Bento Tile (4-col) */}
          <div className="lg:col-span-4 rounded-3xl p-8 bg-white border border-slate-200/90 shadow-md flex flex-col justify-between text-slate-900">
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-sky-50 border border-sky-100 flex items-center justify-center text-[#005A9C] shadow-2xs">
                <FileCheck className="w-6 h-6 text-[#005A9C]" />
              </div>
              <div className="font-display text-4xl sm:text-5xl font-normal text-slate-900 tabular-nums">
                5 Corridors
              </div>
              <h4 className="font-display text-lg font-normal text-slate-900">
                Specialized Country Focus
              </h4>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                Czech Republic, Malaysia, Russia, Slovenia, and Singapore. We don't pretend to know 80 countries; we master the five we file daily.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-[#005A9C] font-semibold">
              <Link href="/countries" className="inline-flex items-center gap-1 hover:underline">
                <span>View Country Hubs</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>

        {/* Footnote */}
        <div className="mt-10 p-5 rounded-2xl bg-white border border-slate-200/80 text-xs text-slate-500 text-center max-w-4xl mx-auto shadow-2xs">
          * <strong className="text-slate-800">Basis of 98% statistic:</strong> {siteConfig.stats.successFootnote} We do not promise guaranteed visa outcomes. Every final decision rests with embassy visa officers under current immigration laws.
        </div>
      </div>
    </section>
  );
}
