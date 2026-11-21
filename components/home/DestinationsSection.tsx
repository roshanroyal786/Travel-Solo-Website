"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { countries } from "@/content/countries";
import { ArrowRight, MapPin } from "lucide-react";

export default function DestinationsSection() {
  const [hoveredSlug, setHoveredSlug] = useState<string>("czech-republic");
  const countryList = Object.values(countries);

  return (
    <section className="py-24 bg-white border-t border-slate-200 relative overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div>
            <span className="text-xs uppercase tracking-widest text-primary font-mono font-semibold">
              Selected Corridors
            </span>
            <h2 className="font-display font-normal text-3xl sm:text-5xl text-slate-900 leading-tight mt-3">
              Five destinations. <span className="italic text-primary font-normal">Zero compromise.</span>
            </h2>
          </div>
          <p className="text-slate-600 text-base max-w-md">
            We don't claim to process 80 countries with generic templates. We specialize in five corridors where our document networks and embassy processes are proven.
          </p>
        </div>

        {/* Desktop Expandable Panels */}
        <div className="hidden lg:flex gap-4 h-[480px] w-full">
          {countryList.map((country) => {
            const isHovered = hoveredSlug === country.slug;
            return (
              <div
                key={country.slug}
                onMouseEnter={() => setHoveredSlug(country.slug)}
                className={`relative rounded-3xl overflow-hidden border transition-all duration-500 ease-out flex flex-col justify-end p-8 cursor-pointer ${
                  isHovered
                    ? "flex-[3.5] border-primary/40 shadow-xl"
                    : "flex-[1] border-slate-200/90 opacity-80 hover:opacity-100"
                }`}
              >
                {/* Background Image */}
                <Image
                  src={country.heroImage}
                  alt={country.heroAlt}
                  fill
                  className="object-cover transition-transform duration-700 ease-out scale-100 hover:scale-105"
                  sizes="(max-width: 1280px) 300px, 600px"
                />

                {/* Gradient Overlays for readable white text over images */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/60 to-transparent" />

                {/* Content Overlay */}
                <div className="relative z-10 space-y-3">
                  <div className="flex items-center gap-2 text-sky-300 text-xs font-mono">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>{country.city}</span>
                  </div>

                  <h3 className="font-display text-2xl lg:text-3xl font-normal text-white">
                    {country.name}
                  </h3>

                  {isHovered && (
                    <div className="animate-in fade-in slide-in-from-bottom-2 duration-300 space-y-4">
                      <p className="text-slate-200 text-sm max-w-md leading-relaxed line-clamp-2">
                        {country.shortDesc}
                      </p>
                      <div>
                        <Link
                          href={`/countries/${country.slug}`}
                          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary hover:bg-primary/95 text-white font-medium text-xs shadow-md transition-all hover:gap-3"
                        >
                          <span>Explore {country.name} Visas</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </Link>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Mobile & Tablet Snap-Scroll Carousel */}
        <div className="lg:hidden flex gap-4 overflow-x-auto pb-6 snap-x snap-mandatory scrollbar-none">
          {countryList.map((country) => (
            <div
              key={country.slug}
              className="relative min-w-[280px] sm:min-w-[340px] h-[400px] rounded-3xl overflow-hidden border border-slate-200 flex flex-col justify-end p-6 snap-center shrink-0 shadow-sm"
            >
              <Image
                src={country.heroImage}
                alt={country.heroAlt}
                fill
                className="object-cover"
                sizes="340px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/70 to-transparent" />

              <div className="relative z-10 space-y-2">
                <div className="text-sky-300 text-xs font-mono flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>{country.city}</span>
                </div>
                <h3 className="font-display text-2xl text-white font-normal">{country.name}</h3>
                <p className="text-slate-200 text-xs line-clamp-2">{country.shortDesc}</p>
                <div className="pt-2">
                  <Link
                    href={`/countries/${country.slug}`}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary text-white font-medium text-xs shadow-sm"
                  >
                    <span>View Hub</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
