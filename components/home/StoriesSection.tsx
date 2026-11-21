"use client";

import React, { useState } from "react";
import { testimonials } from "@/content/testimonials";
import { Quote, ChevronLeft, ChevronRight, Star, MapPin, ShieldCheck, Sparkles } from "lucide-react";

// Curated high quality Unsplash portraits for applicants
const applicantAvatars: Record<number, string> = {
  0: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=240&q=80",
  1: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=240&q=80",
  2: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=240&q=80",
  3: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=240&q=80",
  4: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=240&q=80",
};

export default function StoriesSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prev = () => {
    setCurrentIndex((p) => (p === 0 ? testimonials.length - 1 : p - 1));
  };

  const next = () => {
    setCurrentIndex((p) => (p === testimonials.length - 1 ? 0 : p + 1));
  };

  const t = testimonials[currentIndex];
  const avatar = applicantAvatars[currentIndex] || applicantAvatars[0];

  return (
    <section className="py-24 bg-gradient-to-b from-[#F0F7FD] via-white to-[#F0F7FD] border-t border-slate-200/80 relative overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-sky-100 border border-sky-200 text-[#005A9C] text-xs font-semibold uppercase tracking-wider mb-3">
              <Sparkles className="w-3.5 h-3.5 text-sky-600" />
              <span>Applicant Stories · Real Journeys</span>
            </span>
            <h2 className="font-display font-medium text-3xl sm:text-5xl text-slate-900 leading-tight">
              Real journeys. <br />
              <span className="italic text-[#005A9C] font-normal">Straightforward outcomes.</span>
            </h2>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={prev}
              className="w-12 h-12 rounded-full border border-slate-200 bg-white flex items-center justify-center text-slate-700 hover:text-[#005A9C] hover:border-[#005A9C] hover:bg-slate-50 transition-all shadow-xs cursor-pointer"
              aria-label="Previous story"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={next}
              className="w-12 h-12 rounded-full border border-slate-200 bg-white flex items-center justify-center text-slate-700 hover:text-[#005A9C] hover:border-[#005A9C] hover:bg-slate-50 transition-all shadow-xs cursor-pointer"
              aria-label="Next story"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Featured Testimonial Card with Unsplash portrait & high visual polish */}
        <div className="rounded-3xl p-8 sm:p-12 bg-white border border-slate-200/90 shadow-[0_8px_30px_rgba(0,0,0,0.06)] relative overflow-hidden">
          <Quote className="w-24 h-24 text-sky-100 absolute -top-4 -right-4 pointer-events-none rotate-12" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            {/* Applicant Portrait & Rating */}
            <div className="lg:col-span-4 flex flex-col items-center sm:items-start text-center sm:text-left space-y-4">
              <div className="relative w-28 h-28 sm:w-36 sm:h-36 rounded-3xl overflow-hidden border-4 border-sky-100 shadow-xl">
                <img
                  src={avatar}
                  alt={t.name}
                  className="w-full h-full object-cover"
                />
              </div>

              <div>
                <div className="flex items-center justify-center sm:justify-start gap-1 text-amber-400 mb-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <div className="font-display text-xl font-normal text-slate-900">{t.name}</div>
                <div className="text-xs text-slate-500 flex items-center justify-center sm:justify-start gap-1 mt-0.5">
                  <MapPin className="w-3 h-3 text-sky-500" />
                  <span>{t.city}, India · Approved {t.year}</span>
                </div>
              </div>

              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-semibold">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                <span>Verified Direct Consular Filing</span>
              </div>
            </div>

            {/* Quote content */}
            <div className="lg:col-span-8 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-50 border border-sky-200 text-[#005A9C] text-xs font-semibold">
                <span>{t.destination} · {t.visaType}</span>
              </div>

              <p className="font-display text-xl sm:text-2xl font-normal text-slate-800 leading-relaxed italic">
                &ldquo;{t.quote}&rdquo;
              </p>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                <span>Case handled directly in Dwarka, New Delhi</span>
                <span className="font-mono text-sky-600 font-semibold">Story {currentIndex + 1} of {testimonials.length}</span>
              </div>
            </div>
          </div>
        </div>

        {t.dummy && (
          <div className="text-center mt-6 text-[11px] text-slate-400 font-mono">
            [Sample illustrative client narrative shown for demonstration purposes. Verified permissioned client reviews added prior to commercial launch.]
          </div>
        )}
      </div>
    </section>
  );
}
