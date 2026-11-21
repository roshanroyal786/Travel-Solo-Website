"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { countries } from "@/content/countries";
import { Plane, MapPin, ArrowRight, Compass, Radio } from "lucide-react";

interface Stop {
  id: string;
  country: string;
  city: string;
  lat: number;
  lon: number;
  tagline: string;
  slug: string;
  code: string;
}

const stops: Stop[] = [
  {
    id: "delhi",
    country: "India (Headquarters)",
    city: "New Delhi (Dwarka)",
    lat: 28.6139,
    lon: 77.209,
    tagline: "Where every file is audited and managed directly. No sub-agents.",
    slug: "",
    code: "DEL",
  },
  {
    id: "cz",
    country: "Czech Republic",
    city: "Prague",
    lat: 50.0755,
    lon: 14.4378,
    tagline: "Schengen Employee Cards and respected engineering colleges in Central Europe.",
    slug: "czech-republic",
    code: "PRG",
  },
  {
    id: "my",
    country: "Malaysia",
    city: "Kuala Lumpur",
    lat: 3.139,
    lon: 101.6869,
    tagline: "Fast 48-hour eVisas, MDEC IT passes, and British university campuses.",
    slug: "malaysia",
    code: "KUL",
  },
  {
    id: "ru",
    country: "Russia",
    city: "Moscow",
    lat: 55.7558,
    lon: 37.6173,
    tagline: "NMC-approved MBBS admissions, commercial trade ties, and unified e-visas.",
    slug: "russia",
    code: "SVO",
  },
  {
    id: "si",
    country: "Slovenia",
    city: "Ljubljana",
    lat: 46.0569,
    lon: 14.5058,
    tagline: "Combined Work & Residence Single Permit in Europe's peaceful alpine heart.",
    slug: "slovenia",
    code: "LJU",
  },
  {
    id: "sg",
    country: "Singapore",
    city: "Singapore",
    lat: 1.3521,
    lon: 103.8198,
    tagline: "High-paying Employment Passes evaluated against the COMPASS framework.",
    slug: "singapore",
    code: "SIN",
  },
];

const VIDEO_URL =
  "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260912_104036_bd6924f6-3c8e-417e-8465-6d03c8c2e9e6.mp4";
const POSTER_URL =
  "https://d2ol7oe51mr4n9.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/82e7eb75-c65f-490a-99b5-f3d1cad54200.webp";

export default function GlobeSection() {
  const [activeStopIndex, setActiveStopIndex] = useState(1);
  const [activeVideo, setActiveVideo] = useState<"A" | "B">("A");

  const videoARef = useRef<HTMLVideoElement | null>(null);
  const videoBRef = useRef<HTMLVideoElement | null>(null);

  const activeStop = stops[activeStopIndex];

  // Seamless Dual-Video Crossfade at the loop boundary
  useEffect(() => {
    const vA = videoARef.current;
    const vB = videoBRef.current;
    if (!vA || !vB) return;

    const FADE = 0.9;
    let cur = vA;
    let nxt = vB;
    let swapping = false;

    const playSafe = (vid: HTMLVideoElement) => {
      vid.play().catch(() => {});
    };

    playSafe(vA);

    const tick = () => {
      if (swapping || !cur.duration) return;
      if (cur.duration - cur.currentTime > FADE) return;

      swapping = true;
      const out = cur;
      nxt.currentTime = 0;
      playSafe(nxt);

      if (nxt === vA) {
        setActiveVideo("A");
      } else {
        setActiveVideo("B");
      }

      cur = nxt;
      nxt = out;

      setTimeout(() => {
        out.pause();
        out.currentTime = 0;
        swapping = false;
      }, FADE * 1000 + 100);
    };

    vA.addEventListener("timeupdate", tick);
    vB.addEventListener("timeupdate", tick);

    return () => {
      vA.removeEventListener("timeupdate", tick);
      vB.removeEventListener("timeupdate", tick);
    };
  }, []);

  return (
    <section className="py-24 bg-midnight border-t border-champagne/10 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-horizon/20 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-[350px] h-[350px] bg-[#6d28d9]/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-[1280px] mx-auto px-6 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-horizon/40 border border-champagne/20 text-champagne text-xs font-mono uppercase mb-4">
            <Plane className="w-3.5 h-3.5 text-champagne" />
            <span>Flight Trajectory & Global Hubs</span>
          </div>
          <h2 className="font-display font-light text-3xl sm:text-5xl text-cloud leading-tight mb-4">
            From Delhi to <span className="italic text-champagne font-normal">anywhere.</span>
          </h2>
          <p className="text-mist text-base sm:text-lg">
            Five destination hubs. Direct documentation pathways. Every application prepared and submitted from our Dwarka office.
          </p>
        </div>

        {/* Destination Selector Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-14">
          {stops.map((stop, idx) => (
            <button
              key={stop.id}
              onClick={() => setActiveStopIndex(idx)}
              className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wide transition-all cursor-pointer ${
                activeStopIndex === idx
                  ? "bg-champagne text-midnight shadow-lg scale-105"
                  : "bg-horizon/30 text-mist hover:text-cloud hover:bg-horizon/50 border border-champagne/10"
              }`}
            >
              {stop.city} {stop.id === "delhi" ? "(Origin)" : ""}
            </button>
          ))}
        </div>

        {/* 3D Rotating Dot-Matrix Globe Display & Active Stop Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* 3D Dot-Matrix Globe Display */}
          <div className="lg:col-span-7 flex justify-center items-center">
            <div className="relative w-full max-w-[500px] aspect-square flex items-center justify-center">
              {/* Outer atmospheric aura ring */}
              <div className="absolute -inset-4 rounded-full bg-gradient-to-tr from-horizon/40 via-[#7c3aed]/20 to-champagne/20 blur-xl opacity-70 animate-pulse pointer-events-none" />

              {/* Main Globe Masked Sphere Container */}
              <div className="relative w-full h-full rounded-full overflow-hidden border border-champagne/30 shadow-[0_0_90px_rgba(124,58,237,0.3)] bg-black">
                {/* Video A */}
                <video
                  ref={videoARef}
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="auto"
                  disablePictureInPicture
                  poster={POSTER_URL}
                  aria-hidden="true"
                  className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-[900ms] linear ${
                    activeVideo === "A" ? "opacity-100" : "opacity-0"
                  }`}
                  style={{ objectPosition: "50% 50%" }}
                >
                  <source src={VIDEO_URL} type="video/mp4" />
                </video>

                {/* Video B (Seamless Crossfade at Loop Point) */}
                <video
                  ref={videoBRef}
                  muted
                  loop
                  playsInline
                  preload="auto"
                  disablePictureInPicture
                  poster={POSTER_URL}
                  aria-hidden="true"
                  className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-[900ms] linear ${
                    activeVideo === "B" ? "opacity-100" : "opacity-0"
                  }`}
                  style={{ objectPosition: "50% 50%" }}
                >
                  <source src={VIDEO_URL} type="video/mp4" />
                </video>

                {/* Internal Spherical Shadow & Atmospheric Vignette */}
                <div className="absolute inset-0 rounded-full pointer-events-none shadow-[inset_0_0_80px_rgba(0,0,0,0.85)] ring-1 ring-inset ring-white/15" />
                <div className="absolute inset-0 rounded-full pointer-events-none bg-gradient-to-t from-midnight/70 via-transparent to-transparent opacity-80" />

                {/* Live Flight Telemetry Overlay */}
                <div className="absolute top-6 left-6 right-6 flex items-center justify-between text-[11px] font-mono text-champagne/90 pointer-events-none z-10 bg-midnight/60 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-champagne/20">
                  <div className="flex items-center gap-1.5">
                    <Radio className="w-3 h-3 text-coral animate-pulse" />
                    <span>CORRIDOR: DEL &rarr; {activeStop.code}</span>
                  </div>
                  <span>{activeStop.lat.toFixed(2)}°N, {activeStop.lon.toFixed(2)}°E</span>
                </div>

                {/* Radial Target Beacon at Center */}
                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 pointer-events-none z-10 text-center">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-mist/80 bg-midnight/80 px-3 py-1 rounded-full border border-champagne/15 backdrop-blur-sm">
                    {activeStop.city} Active
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Active Stop Detail Card */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-8 rounded-3xl glass-card border border-champagne/20 space-y-5">
              <div className="flex items-center justify-between">
                <span className="text-xs uppercase tracking-widest text-champagne font-mono font-semibold">
                  Destination Protocol
                </span>
                <span className="text-xs text-mist font-mono">
                  {activeStop.lat.toFixed(2)}°N, {activeStop.lon.toFixed(2)}°E
                </span>
              </div>

              <div>
                <h3 className="font-display text-3xl font-normal text-cloud mb-1">
                  {activeStop.country}
                </h3>
                <div className="text-champagne font-medium text-sm flex items-center gap-1.5">
                  <MapPin className="w-4 h-4" />
                  <span>{activeStop.city}</span>
                </div>
              </div>

              <p className="text-mist text-base leading-relaxed">
                {activeStop.tagline}
              </p>

              {activeStop.slug ? (
                <div className="pt-2">
                  <Link
                    href={`/countries/${activeStop.slug}`}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-coral hover:bg-coral/90 text-white font-medium text-sm transition-all shadow-md hover:gap-3"
                  >
                    <span>Explore {activeStop.country} Visa Hub</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              ) : (
                <div className="pt-2 text-xs text-mist/70 italic">
                  Headquarters: Plot 14, Sector 12 Dwarka, New Delhi. Consultations available in-office and online.
                </div>
              )}
            </div>

            {/* Quick Micro-stats for active country */}
            {activeStop.slug && countries[activeStop.slug] && (
              <div className="p-4 rounded-2xl bg-horizon/20 border border-champagne/10 text-xs text-mist flex items-center justify-between">
                <span>Official Processing Available</span>
                <span className="text-champagne font-medium">Job · Study · Tourist · Business</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
