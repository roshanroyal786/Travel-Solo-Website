"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { countries } from "@/content/countries";
import { Plane, MapPin, ArrowRight } from "lucide-react";

interface Stop {
  id: string;
  country: string;
  city: string;
  lat: number;
  lon: number;
  tagline: string;
  slug: string;
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
  },
  {
    id: "cz",
    country: "Czech Republic",
    city: "Prague",
    lat: 50.0755,
    lon: 14.4378,
    tagline: "Schengen Employee Cards and respected engineering colleges in Central Europe.",
    slug: "czech-republic",
  },
  {
    id: "my",
    country: "Malaysia",
    city: "Kuala Lumpur",
    lat: 3.139,
    lon: 101.6869,
    tagline: "Fast 48-hour eVisas, MDEC IT passes, and British university campuses.",
    slug: "malaysia",
  },
  {
    id: "ru",
    country: "Russia",
    city: "Moscow",
    lat: 55.7558,
    lon: 37.6173,
    tagline: "NMC-approved MBBS admissions, commercial trade ties, and unified e-visas.",
    slug: "russia",
  },
  {
    id: "si",
    country: "Slovenia",
    city: "Ljubljana",
    lat: 46.0569,
    lon: 14.5058,
    tagline: "Combined Work & Residence Single Permit in Europe's peaceful alpine heart.",
    slug: "slovenia",
  },
  {
    id: "sg",
    country: "Singapore",
    city: "Singapore",
    lat: 1.3521,
    lon: 103.8198,
    tagline: "High-paying Employment Passes evaluated against the COMPASS framework.",
    slug: "singapore",
  },
];

export default function GlobeSection() {
  const [activeStopIndex, setActiveStopIndex] = useState(1);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  const activeStop = stops[activeStopIndex];

  // Draw interactive flight trajectory from New Delhi to Destination on HTML5 Canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let progress = 0;

    const render = () => {
      const width = canvas.width;
      const height = canvas.height;

      ctx.clearRect(0, 0, width, height);

      // Background globe circle
      const centerX = width / 2;
      const centerY = height / 2;
      const radius = Math.min(width, height) * 0.42;

      // Outer glow atmosphere
      const glowGrad = ctx.createRadialGradient(centerX, centerY, radius * 0.8, centerX, centerY, radius * 1.15);
      glowGrad.addColorStop(0, "rgba(27, 58, 107, 0.4)");
      glowGrad.addColorStop(0.7, "rgba(230, 196, 138, 0.12)");
      glowGrad.addColorStop(1, "rgba(10, 16, 32, 0)");
      ctx.fillStyle = glowGrad;
      ctx.beginPath();
      ctx.arc(centerX, centerY, radius * 1.15, 0, Math.PI * 2);
      ctx.fill();

      // Base globe sphere
      const sphereGrad = ctx.createRadialGradient(
        centerX - radius * 0.3,
        centerY - radius * 0.3,
        radius * 0.1,
        centerX,
        centerY,
        radius
      );
      sphereGrad.addColorStop(0, "#1B3A6B");
      sphereGrad.addColorStop(0.7, "#0d1b33");
      sphereGrad.addColorStop(1, "#0A1020");
      ctx.fillStyle = sphereGrad;
      ctx.beginPath();
      ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
      ctx.fill();
      ctx.strokeStyle = "rgba(230, 196, 138, 0.35)";
      ctx.lineWidth = 1.5;
      ctx.stroke();

      // Latitude and Longitude Grid Lines
      ctx.strokeStyle = "rgba(169, 180, 200, 0.12)";
      ctx.lineWidth = 1;
      for (let i = -60; i <= 60; i += 30) {
        ctx.beginPath();
        const y = centerY + (i / 90) * radius;
        const rAtY = Math.sqrt(Math.max(0, radius * radius - Math.pow((i / 90) * radius, 2)));
        ctx.ellipse(centerX, y, rAtY, rAtY * 0.3, 0, 0, Math.PI * 2);
        ctx.stroke();
      }

      // Convert lat/lon to 2D projection on current visible face
      const project = (lat: number, lon: number) => {
        // Center projection around active destination longitude
        const centerLon = activeStop.lon;
        const radLat = (lat * Math.PI) / 180;
        const radLon = ((lon - centerLon) * Math.PI) / 180;

        const x = centerX + radius * Math.cos(radLat) * Math.sin(radLon) * 0.95;
        const y = centerY - radius * Math.sin(radLat) * 0.95;
        const visible = Math.cos(radLat) * Math.cos(radLon) > -0.2;
        return { x, y, visible };
      };

      const delhi = project(28.6139, 77.209);
      const dest = project(activeStop.lat, activeStop.lon);

      // Draw Flight Arc from Delhi to Active Destination
      if (delhi.visible || dest.visible) {
        const midX = (delhi.x + dest.x) / 2;
        const midY = Math.min(delhi.y, dest.y) - 60;

        // Background arc line
        ctx.beginPath();
        ctx.moveTo(delhi.x, delhi.y);
        ctx.quadraticCurveTo(midX, midY, dest.x, dest.y);
        ctx.strokeStyle = "rgba(230, 196, 138, 0.25)";
        ctx.setLineDash([4, 4]);
        ctx.lineWidth = 2;
        ctx.stroke();
        ctx.setLineDash([]);

        // Animated progress arc
        progress += 0.015;
        if (progress > 1) progress = 0;

        // Current plane position along Bezier curve
        const t = progress;
        const curX = Math.pow(1 - t, 2) * delhi.x + 2 * (1 - t) * t * midX + Math.pow(t, 2) * dest.x;
        const curY = Math.pow(1 - t, 2) * delhi.y + 2 * (1 - t) * t * midY + Math.pow(t, 2) * dest.y;

        // Glowing plane beacon
        ctx.beginPath();
        ctx.arc(curX, curY, 4, 0, Math.PI * 2);
        ctx.fillStyle = "#FF6B4A";
        ctx.shadowColor = "#FF6B4A";
        ctx.shadowBlur = 10;
        ctx.fill();
        ctx.shadowBlur = 0;
      }

      // Draw Delhi Pin
      ctx.beginPath();
      ctx.arc(delhi.x, delhi.y, 6, 0, Math.PI * 2);
      ctx.fillStyle = "#E6C48A";
      ctx.fill();
      ctx.strokeStyle = "#FFFFFF";
      ctx.lineWidth = 2;
      ctx.stroke();

      // Draw Destination Pin
      if (activeStop.id !== "delhi") {
        ctx.beginPath();
        ctx.arc(dest.x, dest.y, 7, 0, Math.PI * 2);
        ctx.fillStyle = "#FF6B4A";
        ctx.fill();
        ctx.strokeStyle = "#FFFFFF";
        ctx.lineWidth = 2;
        ctx.stroke();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => cancelAnimationFrame(animationFrameId);
  }, [activeStop, activeStopIndex]);

  return (
    <section className="py-24 bg-midnight border-t border-champagne/10 relative overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-6">
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

        {/* Destination Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {stops.map((stop, idx) => (
            <button
              key={stop.id}
              onClick={() => setActiveStopIndex(idx)}
              className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wide transition-all ${
                activeStopIndex === idx
                  ? "bg-champagne text-midnight shadow-lg scale-105"
                  : "bg-horizon/30 text-mist hover:text-cloud hover:bg-horizon/50 border border-champagne/10"
              }`}
            >
              {stop.city} {stop.id === "delhi" ? "(Origin)" : ""}
            </button>
          ))}
        </div>

        {/* Interactive Globe Display & Active Stop Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Globe Canvas */}
          <div className="lg:col-span-7 flex justify-center items-center">
            <div className="relative w-full max-w-[480px] aspect-square flex items-center justify-center">
              <canvas
                ref={canvasRef}
                width={500}
                height={500}
                className="w-full h-full max-w-[480px] rounded-full cursor-grab active:cursor-grabbing"
              />
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
