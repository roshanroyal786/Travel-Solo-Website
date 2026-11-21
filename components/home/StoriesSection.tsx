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
    <section className="py-24 bg-midnight/95 border-t border-champagne/10 relative">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <span className="text-xs uppercase tracking-widest text-champagne font-mono font-semibold">
              Client Experiences
            </span>
            <h2 className="font-display font-light text-3xl sm:text-5xl text-cloud leading-tight mt-3">
              Real journeys. <span className="italic text-champagne font-normal">Straightforward feedback.</span>
            </h2>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={prev}
              className="w-12 h-12 rounded-full border border-champagne/25 flex items-center justify-center text-cloud hover:bg-horizon/40 transition-colors"
              aria-label="Previous story"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={next}
              className="w-12 h-12 rounded-full border border-champagne/25 flex items-center justify-center text-cloud hover:bg-horizon/40 transition-colors"
              aria-label="Next story"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Featured Testimonial Card */}
        <div className="p-8 sm:p-12 rounded-3xl glass-card border border-champagne/20 relative">
          <Quote className="w-12 h-12 text-champagne/20 absolute top-8 right-8" />

          <div className="max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-horizon/40 border border-champagne/15 text-champagne text-xs font-mono">
              <span>{t.destination} · {t.visaType}</span>
            </div>

            <p className="font-display text-xl sm:text-2xl font-light text-cloud leading-relaxed">
              &ldquo;{t.quote}&rdquo;
            </p>

            <div className="flex items-center gap-4 pt-4 border-t border-champagne/10">
              <div className="w-11 h-11 rounded-full bg-horizon border border-champagne/30 flex items-center justify-center text-champagne">
                <User className="w-5 h-5" />
              </div>
              <div>
                <div className="font-semibold text-cloud text-sm">{t.name}</div>
                <div className="text-xs text-mist">{t.city}, India · Processed in {t.year}</div>
              </div>
            </div>
          </div>
        </div>

        {/* Sample notice indicator for transparency */}
        {t.dummy && (
          <div className="text-center mt-6 text-[11px] text-mist/60 font-mono">
            [Sample illustrative client narrative shown for demonstration purposes. Verified permissioned client reviews added prior to commercial launch.]
          </div>
        )}
      </div>
    </section>
  );
}
