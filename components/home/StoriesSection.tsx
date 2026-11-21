"use client";

import React, { useState } from "react";
import { testimonials } from "@/content/testimonials";
import { Quote, ChevronLeft, ChevronRight, User } from "lucide-react";

export default function StoriesSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prev = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const next = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const t = testimonials[currentIndex];

  return (
    <section className="py-24 bg-white border-t border-slate-200 relative">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <span className="text-xs uppercase tracking-widest text-primary font-mono font-semibold">
              Client Experiences
            </span>
            <h2 className="font-display font-normal text-3xl sm:text-5xl text-slate-900 leading-tight mt-3">
              Real journeys. <span className="italic text-primary font-normal">Straightforward feedback.</span>
            </h2>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={prev}
              className="w-12 h-12 rounded-full border border-slate-200 bg-white flex items-center justify-center text-slate-700 hover:text-primary hover:bg-slate-50 transition-colors shadow-2xs"
              aria-label="Previous story"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={next}
              className="w-12 h-12 rounded-full border border-slate-200 bg-white flex items-center justify-center text-slate-700 hover:text-primary hover:bg-slate-50 transition-colors shadow-2xs"
              aria-label="Next story"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Featured Testimonial Card */}
        <div className="p-8 sm:p-12 rounded-3xl bg-slate-50 border border-slate-200/90 relative shadow-xs">
          <Quote className="w-12 h-12 text-slate-300 absolute top-8 right-8" />

          <div className="max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-slate-200 text-primary text-xs font-mono font-medium shadow-2xs">
              <span>{t.destination} · {t.visaType}</span>
            </div>

            <p className="font-display text-xl sm:text-2xl font-normal text-slate-900 leading-relaxed">
              &ldquo;{t.quote}&rdquo;
            </p>

            <div className="flex items-center gap-4 pt-4 border-t border-slate-200">
              <div className="w-11 h-11 rounded-full bg-sky-50 border border-sky-100 flex items-center justify-center text-primary shadow-2xs">
                <User className="w-5 h-5" />
              </div>
              <div>
                <div className="font-semibold text-slate-900 text-sm">{t.name}</div>
                <div className="text-xs text-slate-500">{t.city}, India · Processed in {t.year}</div>
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
