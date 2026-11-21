"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { countries } from "@/content/countries";
import { ArrowRight, MapPin, Star, Clock, ShieldCheck, Sparkles } from "lucide-react";

export default function DestinationsSection() {
  const [activeFilter, setActiveFilter] = useState<string>("all");
  const countryList = Object.values(countries);

  const filteredCountries =
    activeFilter === "all"
      ? countryList
      : countryList.filter((c) => c.slug === activeFilter);

  // High-res curated Unsplash travel photography & country metadata
  const countryDetails: Record<
    string,
    {
      rating: string;
      processing: string;
      fee: string;
      badge: string;
      tagColor: string;
    }
  > = {
    "czech-republic": {
      rating: "4.9",
      processing: "15-60 Days",
      fee: "€80 Consular",
      badge: "Schengen Employee Card",
      tagColor: "bg-sky-50 text-sky-700 border-sky-200",
    },
    malaysia: {
      rating: "4.9",
      processing: "48-72 Hours",
      fee: "RM 105 eVisa",
      badge: "MDEC & Fast eVisa",
      tagColor: "bg-amber-50 text-amber-700 border-amber-200",
    },
    russia: {
      rating: "4.8",
      processing: "4 Calendar Days",
      fee: "$52 Official",
      badge: "Unified eVisa & MBBS",
      tagColor: "bg-rose-50 text-rose-700 border-rose-200",
    },
    slovenia: {
      rating: "4.9",
      processing: "30-45 Days",
      fee: "€102 Single Permit",
      badge: "EU Single Work Permit",
      tagColor: "bg-emerald-50 text-emerald-700 border-emerald-200",
    },
    singapore: {
      rating: "5.0",
      processing: "10-21 Days",
      fee: "SGD $105 MOM",
      badge: "EP & COMPASS Framework",
      tagColor: "bg-indigo-50 text-indigo-700 border-indigo-200",
    },
  };

  return (
    <section className="py-24 bg-gradient-to-b from-[#F0F7FD] via-white to-[#F0F7FD] border-t border-slate-200/80 relative overflow-hidden">
      {/* Decorative background atmospheric blur */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-sky-200/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-blue-100/40 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1280px] mx-auto px-6 relative z-10">
        {/* Section Header (Inspired by Reference Image 1 & 2) */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-sky-100/80 border border-sky-200 text-sky-800 text-xs font-semibold uppercase tracking-wider mb-4 shadow-2xs">
            <Sparkles className="w-3.5 h-3.5 text-sky-600" />
            <span>Popular Destinations · Visual Corridors</span>
          </div>

          <h2 className="font-display font-medium text-3xl sm:text-5xl text-slate-900 leading-tight mb-4">
            Five specialized destinations.{" "}
            <span className="italic text-[#005A9C] font-normal">Zero compromise.</span>
          </h2>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            We don't process 80 countries with automated generic templates. We focus on five corridors where our direct embassy channels, court translation pipelines, and document networks are proven.
          </p>
        </div>

        {/* Category Pill Filters (Inspired by Reference Image 2 - My Visual Diary) */}
        <div className="flex items-center justify-center gap-2 sm:gap-3 flex-wrap mb-14">
          <button
            onClick={() => setActiveFilter("all")}
            className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all shadow-2xs cursor-pointer ${
              activeFilter === "all"
                ? "bg-slate-900 text-white shadow-md scale-105"
                : "bg-white text-slate-700 hover:bg-slate-100 border border-slate-200/80"
            }`}
          >
            All Corridors (5)
          </button>
          {countryList.map((country) => (
            <button
              key={country.slug}
              onClick={() => setActiveFilter(country.slug)}
              className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all shadow-2xs cursor-pointer ${
                activeFilter === country.slug
                  ? "bg-[#005A9C] text-white shadow-md scale-105"
                  : "bg-white text-slate-700 hover:bg-slate-100 border border-slate-200/80"
              }`}
            >
              {country.name}
            </button>
          ))}
        </div>

        {/* Destination Card Grid (Inspired by Reference Image 1 & 2) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCountries.map((country) => {
            const details = countryDetails[country.slug] || {
              rating: "4.9",
              processing: "Standard",
              fee: "Official Rates",
              badge: "Verified Corridor",
              tagColor: "bg-sky-50 text-sky-700 border-sky-200",
            };

            return (
              <div
                key={country.slug}
                className="group relative rounded-3xl overflow-hidden bg-white border border-slate-200/90 shadow-[0_4px_20px_rgba(0,0,0,0.04)] hover:shadow-[0_16px_36px_rgba(0,0,0,0.12)] transition-all duration-500 flex flex-col justify-between hover:-translate-y-1.5"
              >
                {/* Visual Photography Header */}
                <div className="relative h-64 w-full overflow-hidden">
                  <Image
                    src={country.heroImage}
                    alt={country.heroAlt}
                    fill
                    className="object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  {/* Subtle photographic vignette overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />

                  {/* Top Rating & Official Badges */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
                    <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-white/95 backdrop-blur-md text-slate-900 text-xs font-bold shadow-md">
                      <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                      <span>{details.rating}</span>
                    </span>

                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900/85 backdrop-blur-md text-white text-xs font-semibold shadow-md">
                      <Clock className="w-3 h-3 text-sky-400" />
                      <span>{details.processing}</span>
                    </span>
                  </div>

                  {/* Bottom Image Callout */}
                  <div className="absolute bottom-4 left-4 right-4 z-10">
                    <div className="inline-flex items-center gap-1.5 text-sky-300 text-xs font-medium mb-1 drop-shadow-sm">
                      <MapPin className="w-3.5 h-3.5 text-sky-400" />
                      <span>{country.city}</span>
                    </div>
                    <h3 className="font-display text-2xl font-normal text-white drop-shadow-md">
                      {country.name}
                    </h3>
                  </div>
                </div>

                {/* Card Content Body */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-xs">
                      <span className={`px-2.5 py-1 rounded-md border font-semibold ${details.tagColor}`}>
                        {details.badge}
                      </span>
                      <span className="font-mono text-slate-500 font-medium">
                        {details.fee}
                      </span>
                    </div>

                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed line-clamp-3">
                      {country.shortDesc}
                    </p>
                  </div>

                  {/* Action Link & Direct Consular Pill */}
                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-3">
                    <div className="flex items-center gap-1.5 text-[11px] text-slate-500 font-medium">
                      <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>Direct Embassy Filing</span>
                    </div>

                    <Link
                      href={`/countries/${country.slug}`}
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#005A9C] hover:bg-[#00487C] text-white text-xs font-semibold transition-all shadow-xs group-hover:gap-2.5 shrink-0"
                    >
                      <span>Explore Visas</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Explorer Prompt */}
        <div className="text-center mt-14">
          <Link
            href="/countries"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-white hover:bg-slate-50 text-slate-900 border border-slate-200 shadow-sm hover:shadow-md text-sm font-semibold transition-all"
          >
            <span>View All 5 Country Dossiers & Official Embassy Checklists</span>
            <ArrowRight className="w-4 h-4 text-[#005A9C]" />
          </Link>
        </div>
      </div>
    </section>
  );
}
