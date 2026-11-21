"use client";

import React from "react";
import Link from "next/link";
import { buildWhatsAppLink } from "@/lib/whatsapp";
import { Calendar, MessageCircle, ShieldCheck, ArrowRight, Plane } from "lucide-react";

export default function CtaBanner() {
  return (
    <section className="py-24 bg-gradient-to-b from-white via-sky-50 to-[#E8F3FD] relative overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-6 relative z-10">
        {/* Curated curved promo banner card inspired by Reference Image 1 */}
        <div className="relative rounded-[2.5rem] sm:rounded-[3.5rem] p-10 sm:p-16 bg-gradient-to-br from-[#0B2341] via-[#0E3259] to-[#005A9C] text-white shadow-2xl overflow-hidden text-center">
          {/* Ambient lighting & airplane graphic */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-sky-400/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-10 -left-10 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-3xl mx-auto space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/15 backdrop-blur-md border border-white/25 text-white text-xs font-semibold uppercase tracking-wider shadow-sm">
              <Plane className="w-3.5 h-3.5 text-sky-300" />
              <span>Dwarka, New Delhi · Pan-India Consular Filings</span>
            </div>

            <h2 className="font-display font-medium text-4xl sm:text-6xl text-white leading-[1.1] drop-shadow-md">
              Where will you <span className="italic text-sky-300 font-normal">land next?</span>
            </h2>

            <p className="text-sky-100 text-base sm:text-lg leading-relaxed max-w-xl mx-auto drop-shadow-xs">
              Stop worrying about confusing embassy portals and third-party middlemen. Get an honest, expert audit of your passport and documents today.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <a
                href={buildWhatsAppLink({ type: "quote" })}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-sky-400 hover:bg-sky-300 text-slate-950 font-bold text-base transition-all shadow-xl hover:shadow-2xl hover:scale-105 active:scale-95 flex items-center justify-center gap-2 cursor-pointer"
              >
                <MessageCircle className="w-5 h-5 fill-slate-950 text-sky-400" />
                <span>Get a Quote on WhatsApp</span>
              </a>

              <Link
                href="/book"
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-white/15 hover:bg-white/25 border border-white/30 text-white font-semibold text-base transition-all backdrop-blur-md shadow-md flex items-center justify-center gap-2"
              >
                <Calendar className="w-5 h-5 text-sky-300" />
                <span>Book 20-Min Call</span>
              </Link>
            </div>

            <div className="pt-8 border-t border-white/20 text-xs text-sky-100 font-medium flex flex-wrap items-center justify-center gap-6">
              <span className="flex items-center gap-1.5">
                <span className="w-4 h-4 rounded-full bg-emerald-400 text-slate-900 font-bold flex items-center justify-center text-[10px]">✓</span>
                100% money-back in 7 days
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-4 h-4 rounded-full bg-emerald-400 text-slate-900 font-bold flex items-center justify-center text-[10px]">✓</span>
                Direct consultant in Dwarka
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-4 h-4 rounded-full bg-emerald-400 text-slate-900 font-bold flex items-center justify-center text-[10px]">✓</span>
                Zero third-party sub-agents
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
