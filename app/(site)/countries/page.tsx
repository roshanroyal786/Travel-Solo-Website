import React from "react";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { countries } from "@/content/countries";
import { MapPin, ArrowRight, ShieldCheck, CheckCircle2 } from "lucide-react";
import { buildWhatsAppLink } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "Destinations & Visa Hubs | Czech Republic, Malaysia, Russia, Slovenia, Singapore",
  description: "Browse our 5 specialized country hubs. Work permits, student passes, tourist eVisas, and business visas filed directly with zero sub-agents.",
};

export default function CountriesPage() {
  const countryList = Object.values(countries);

  return (
    <div className="pt-32 pb-24 bg-midnight min-h-screen">
      <div className="max-w-[1280px] mx-auto px-6">
        {/* Header */}
        <div className="max-w-3xl mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-horizon/40 border border-champagne/20 text-champagne text-xs font-mono uppercase">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>5 Specialized Corridors</span>
          </div>
          <h1 className="font-display font-light text-4xl sm:text-6xl text-cloud leading-tight">
            Our destination <span className="italic text-champagne font-normal">corridors.</span>
          </h1>
          <p className="text-mist text-lg leading-relaxed">
            We do not pretend to process visas for 100 countries. We focus deeply on five corridors where our documentation pipelines, embassy protocols, and employer networks are thoroughly vetted.
          </p>
        </div>

        {/* 5 Country Cards */}
        <div className="space-y-8">
          {countryList.map((country) => (
            <div
              key={country.slug}
              className="p-6 sm:p-8 rounded-3xl glass-card border border-champagne/15 hover:border-champagne/35 transition-all duration-300 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
            >
              {/* Photo */}
              <div className="lg:col-span-5 relative aspect-[16/10] rounded-2xl overflow-hidden border border-champagne/10">
                <Image
                  src={country.heroImage}
                  alt={country.heroAlt}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 1024px) 100vw, 480px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-midnight/80 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 flex items-center gap-2 text-champagne text-xs font-mono bg-midnight/70 px-3 py-1 rounded-full backdrop-blur-md">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>{country.city}</span>
                </div>
              </div>

              {/* Details & Visa Links */}
              <div className="lg:col-span-7 space-y-5">
                <div>
                  <h2 className="font-display text-3xl font-light text-cloud mb-1">
                    {country.name}
                  </h2>
                  <p className="text-champagne text-sm font-medium">
                    {country.tagline}
                  </p>
                </div>

                <p className="text-mist text-sm leading-relaxed">
                  {country.shortDesc}
                </p>

                {/* 4 Visa category pills */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-1">
                  <Link
                    href={`/countries/${country.slug}/job`}
                    className="p-2.5 rounded-xl bg-horizon/30 hover:bg-horizon/60 border border-champagne/10 text-center text-xs font-medium text-cloud hover:text-champagne transition-colors"
                  >
                    Work Visa
                  </Link>
                  <Link
                    href={`/countries/${country.slug}/study`}
                    className="p-2.5 rounded-xl bg-horizon/30 hover:bg-horizon/60 border border-champagne/10 text-center text-xs font-medium text-cloud hover:text-champagne transition-colors"
                  >
                    Student Visa
                  </Link>
                  <Link
                    href={`/countries/${country.slug}/tourist`}
                    className="p-2.5 rounded-xl bg-horizon/30 hover:bg-horizon/60 border border-champagne/10 text-center text-xs font-medium text-cloud hover:text-champagne transition-colors"
                  >
                    Tourist Visa
                  </Link>
                  <Link
                    href={`/countries/${country.slug}/business`}
                    className="p-2.5 rounded-xl bg-horizon/30 hover:bg-horizon/60 border border-champagne/10 text-center text-xs font-medium text-cloud hover:text-champagne transition-colors"
                  >
                    Business Visa
                  </Link>
                </div>

                <div className="pt-2 flex flex-wrap items-center justify-between gap-4 border-t border-champagne/10">
                  <Link
                    href={`/countries/${country.slug}`}
                    className="inline-flex items-center gap-2 text-xs font-semibold text-coral hover:underline"
                  >
                    <span>View complete {country.name} hub &rarr;</span>
                  </Link>

                  <a
                    href={buildWhatsAppLink({ type: "quote", country: country.name })}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 rounded-full bg-coral hover:bg-coral/90 text-white font-medium text-xs flex items-center gap-1.5 transition-transform active:scale-95"
                  >
                    <span>Get a Quote</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
