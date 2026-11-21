"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { countries } from "@/content/countries";
import { WORLD_LAND_POINTS } from "@/content/worldPoints";
import { Plane, MapPin, ArrowRight, Radio, Compass, RotateCcw } from "lucide-react";

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

// Pre-computed starfield for background space
const STARS = Array.from({ length: 85 }).map((_, i) => ({
  x: (i * 137.5) % 100,
  y: (i * 249.7) % 100,
  size: 0.6 + ((i * 17) % 15) / 10,
  alpha: 0.25 + ((i * 31) % 65) / 100,
  speed: 0.6 + ((i * 19) % 10) / 10,
}));

export default function GlobeSection() {
  const [activeStopIndex, setActiveStopIndex] = useState(1); // Default to Prague
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  const activeStop = stops[activeStopIndex];

  // Rotation angles: yaw (longitude rotation) and pitch (latitude tilt)
  const rotationRef = useRef<{
    yaw: number;
    targetYaw: number;
    pitch: number;
    targetPitch: number;
    isDragging: boolean;
    lastX: number;
    lastY: number;
  }>({
    yaw: (activeStop.lon * Math.PI) / 180,
    targetYaw: (activeStop.lon * Math.PI) / 180,
    pitch: (activeStop.lat * Math.PI) / 180,
    targetPitch: (activeStop.lat * Math.PI) / 180,
    isDragging: false,
    lastX: 0,
    lastY: 0,
  });

  // When active stop changes, smoothly glide the globe so the target city centers at (cx, cy)
  useEffect(() => {
    const targetLon = activeStop.lon;
    const targetLat = activeStop.lat;

    // Setting targetYaw to targetLon and targetPitch to targetLat places the point at (x=0, y=0, z=1) - dead center!
    rotationRef.current.targetYaw = (targetLon * Math.PI) / 180;
    rotationRef.current.targetPitch = (targetLat * Math.PI) / 180;
  }, [activeStopIndex, activeStop.lon, activeStop.lat]);

  // Main Canvas Animation Loop
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let flightProgress = 0;
    let pulsePhase = 0;
    let starClock = 0;

    const render = () => {
      const dpr = typeof window !== "undefined" ? Math.min(window.devicePixelRatio || 1, 2) : 1;
      const width = canvas.width;
      const height = canvas.height;

      ctx.clearRect(0, 0, width, height);

      const cx = width / 2;
      const cy = height / 2;
      const R = Math.min(width, height) * 0.40;

      // 1. Draw Starfield Background
      starClock += 0.02;
      STARS.forEach((star) => {
        const sx = (star.x / 100) * width;
        const sy = (star.y / 100) * height;
        const twinkle = Math.sin(starClock * star.speed + star.x) * 0.3 + 0.7;
        ctx.fillStyle = `rgba(196, 181, 253, ${star.alpha * twinkle * 0.7})`;
        ctx.beginPath();
        ctx.arc(sx, sy, star.size * dpr, 0, Math.PI * 2);
        ctx.fill();
      });

      // 2. Violet-Champagne Atmospheric Rim Aura
      const auraGrad = ctx.createRadialGradient(cx, cy, R * 0.85, cx, cy, R * 1.28);
      auraGrad.addColorStop(0, "rgba(124, 58, 237, 0.40)"); // Deep violet glow
      auraGrad.addColorStop(0.4, "rgba(167, 139, 250, 0.20)"); // Lavender aura
      auraGrad.addColorStop(0.75, "rgba(230, 196, 138, 0.12)"); // Champagne edge
      auraGrad.addColorStop(1, "rgba(10, 16, 32, 0)");
      ctx.fillStyle = auraGrad;
      ctx.beginPath();
      ctx.arc(cx, cy, R * 1.28, 0, Math.PI * 2);
      ctx.fill();

      // 3. Spherical Globe Body
      const globeGrad = ctx.createRadialGradient(
        cx - R * 0.35,
        cy - R * 0.35,
        R * 0.1,
        cx,
        cy,
        R
      );
      globeGrad.addColorStop(0, "#191e38");
      globeGrad.addColorStop(0.5, "#0c1224");
      globeGrad.addColorStop(0.85, "#070b18");
      globeGrad.addColorStop(1, "#03060d");
      ctx.fillStyle = globeGrad;
      ctx.beginPath();
      ctx.arc(cx, cy, R, 0, Math.PI * 2);
      ctx.fill();

      // Specular Perimeter Edge Ring
      ctx.strokeStyle = "rgba(196, 181, 253, 0.45)";
      ctx.lineWidth = 1.5 * dpr;
      ctx.stroke();

      // Outer thin orbital guide ring
      ctx.strokeStyle = "rgba(230, 196, 138, 0.15)";
      ctx.lineWidth = 1 * dpr;
      ctx.beginPath();
      ctx.arc(cx, cy, R + 16 * dpr, 0, Math.PI * 2);
      ctx.stroke();

      // Smooth Rotation Interpolation
      const state = rotationRef.current;
      if (!state.isDragging) {
        // Shortest-path longitude diff
        let diffYaw = state.targetYaw - state.yaw;
        while (diffYaw > Math.PI) diffYaw -= 2 * Math.PI;
        while (diffYaw < -Math.PI) diffYaw += 2 * Math.PI;
        state.yaw += diffYaw * 0.08;

        // Pitch diff
        const diffPitch = state.targetPitch - state.pitch;
        state.pitch += diffPitch * 0.08;
      }

      const yaw = state.yaw;
      const pitch = state.pitch;

      // 3D Projection Function: Projects (lat, lon) so that (pitch, yaw) lands at (cx, cy)
      const project = (lat: number, lon: number, radiusOffset = 0) => {
        const phi = (lat * Math.PI) / 180;
        const lam = (lon * Math.PI) / 180;
        const r = R + radiusOffset;

        // Step 1: Rotate around Y-axis by yaw
        const dLam = lam - yaw;
        const x1 = r * Math.cos(phi) * Math.sin(dLam);
        const y1 = r * Math.sin(phi);
        const z1 = r * Math.cos(phi) * Math.cos(dLam);

        // Step 2: Rotate around X-axis by pitch
        const x2 = x1;
        const y2 = y1 * Math.cos(pitch) - z1 * Math.sin(pitch);
        const z2 = y1 * Math.sin(pitch) + z1 * Math.cos(pitch);

        const visible = z2 > -R * 0.05; // Visible on front face
        return {
          x: cx + x2,
          y: cy - y2, // Invert Y for canvas
          z: z2,
          visible,
          depthFactor: Math.max(0, Math.min(1, (z2 + R) / (2 * R))),
        };
      };

      // 4. Faceted Wireframe Lattice
      ctx.lineWidth = 1 * dpr;
      const parallels = [-60, -30, 0, 30, 60];
      parallels.forEach((lat) => {
        ctx.beginPath();
        let started = false;
        for (let lon = -180; lon <= 180; lon += 4) {
          const pt = project(lat, lon);
          if (pt.visible) {
            if (!started) {
              ctx.moveTo(pt.x, pt.y);
              started = true;
            } else {
              ctx.lineTo(pt.x, pt.y);
            }
          } else {
            started = false;
          }
        }
        ctx.strokeStyle =
          lat === 0
            ? "rgba(230, 196, 138, 0.25)" // Equator in champagne
            : "rgba(167, 139, 250, 0.12)"; // Parallels in soft violet
        ctx.stroke();
      });

      // Longitude meridians rotating with globe
      for (let lon = -180; lon < 180; lon += 45) {
        ctx.beginPath();
        let started = false;
        for (let lat = -80; lat <= 80; lat += 4) {
          const pt = project(lat, lon);
          if (pt.visible) {
            if (!started) {
              ctx.moveTo(pt.x, pt.y);
              started = true;
            } else {
              ctx.lineTo(pt.x, pt.y);
            }
          } else {
            started = false;
          }
        }
        ctx.strokeStyle = "rgba(167, 139, 250, 0.10)";
        ctx.stroke();
      }

      // 5. Exact World Dot-Matrix (Sampled from Real Global Topology)
      for (let i = 0; i < WORLD_LAND_POINTS.length; i++) {
        const [lat, lon] = WORLD_LAND_POINTS[i];
        const pt = project(lat, lon);

        if (pt.visible) {
          const depth = pt.depthFactor;
          const dotRadius = (1.0 + depth * 1.5) * dpr;
          const alpha = 0.2 + depth * 0.75;

          let fillColor: string;
          if (Math.abs(lat) < 15 && i % 4 === 0) {
            fillColor = `rgba(230, 196, 138, ${alpha})`; // Champagne accents
          } else if (depth > 0.7) {
            fillColor = `rgba(216, 180, 254, ${alpha})`; // Bright luminous lavender
          } else {
            fillColor = `rgba(167, 139, 250, ${alpha * 0.85})`; // Violet depth dots
          }

          ctx.fillStyle = fillColor;
          ctx.beginPath();
          ctx.arc(pt.x, pt.y, dotRadius, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      // 6. Interactive 3D Flight Arc: New Delhi -> Active Destination
      const delhiLat = 28.6139;
      const delhiLon = 77.209;
      const destLat = activeStop.lat;
      const destLon = activeStop.lon;

      const pDelhi = project(delhiLat, delhiLon);
      const pDest = project(destLat, destLon);

      const arcSamples = 36;
      const arcPoints: { x: number; y: number; visible: boolean }[] = [];

      for (let step = 0; step <= arcSamples; step++) {
        const t = step / arcSamples;
        const curLat = delhiLat + (destLat - delhiLat) * t;
        const curLon = delhiLon + (destLon - delhiLon) * t;
        // Parabolic altitude curve lifting above globe surface
        const altitude = Math.sin(t * Math.PI) * (R * 0.25);
        const pt = project(curLat, curLon, altitude);
        arcPoints.push(pt);
      }

      // Draw dashed arc trajectory
      ctx.beginPath();
      let arcStarted = false;
      arcPoints.forEach((p) => {
        if (p.visible) {
          if (!arcStarted) {
            ctx.moveTo(p.x, p.y);
            arcStarted = true;
          } else {
            ctx.lineTo(p.x, p.y);
          }
        }
      });
      ctx.setLineDash([4 * dpr, 4 * dpr]);
      ctx.strokeStyle = "rgba(230, 196, 138, 0.45)"; // Dashed champagne flight path
      ctx.lineWidth = 1.8 * dpr;
      ctx.stroke();
      ctx.setLineDash([]);

      // Traveling Flight Comet
      flightProgress += 0.012;
      if (flightProgress > 1) flightProgress = 0;

      const tIdx = Math.floor(flightProgress * (arcPoints.length - 1));
      const activeBeaconPt = arcPoints[tIdx];

      if (activeBeaconPt && activeBeaconPt.visible) {
        ctx.beginPath();
        ctx.arc(activeBeaconPt.x, activeBeaconPt.y, 4.5 * dpr, 0, Math.PI * 2);
        ctx.fillStyle = "#FF6B4A"; // Dawn Coral pulse
        ctx.shadowColor = "#FF6B4A";
        ctx.shadowBlur = 12 * dpr;
        ctx.fill();
        ctx.shadowBlur = 0;

        ctx.beginPath();
        ctx.arc(activeBeaconPt.x, activeBeaconPt.y, 8 * dpr, 0, Math.PI * 2);
        ctx.strokeStyle = "rgba(255, 107, 74, 0.5)";
        ctx.lineWidth = 1.5 * dpr;
        ctx.stroke();
      }

      // 7. Draw Origin and Destination Pins
      pulsePhase += 0.035;
      const pulseRadius = ((pulsePhase % 1) * 22 + 6) * dpr;
      const pulseAlpha = Math.max(0, 1 - (pulsePhase % 1));

      // New Delhi Pin (Champagne)
      if (pDelhi.visible) {
        ctx.beginPath();
        ctx.arc(pDelhi.x, pDelhi.y, 5 * dpr, 0, Math.PI * 2);
        ctx.fillStyle = "#E6C48A";
        ctx.fill();
        ctx.strokeStyle = "#FFFFFF";
        ctx.lineWidth = 1.5 * dpr;
        ctx.stroke();

        ctx.fillStyle = "#E6C48A";
        ctx.font = `bold ${10 * dpr}px monospace`;
        ctx.fillText("DELHI (ORIGIN)", pDelhi.x + 8 * dpr, pDelhi.y - 6 * dpr);
      }

      // Target Pin (Centered in middle of globe)
      if (pDest.visible) {
        // Expanding radar rings
        ctx.beginPath();
        ctx.arc(pDest.x, pDest.y, pulseRadius, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(255, 107, 74, ${pulseAlpha * 0.85})`;
        ctx.lineWidth = 1.5 * dpr;
        ctx.stroke();

        ctx.beginPath();
        ctx.arc(pDest.x, pDest.y, pulseRadius * 0.55, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(255, 107, 74, ${pulseAlpha * 0.5})`;
        ctx.lineWidth = 1.2 * dpr;
        ctx.stroke();

        // Pin Solid Head
        ctx.beginPath();
        ctx.arc(pDest.x, pDest.y, 7 * dpr, 0, Math.PI * 2);
        ctx.fillStyle = "#FF6B4A";
        ctx.fill();
        ctx.strokeStyle = "#FFFFFF";
        ctx.lineWidth = 2 * dpr;
        ctx.stroke();

        // Crosshair reticle around the center target
        ctx.strokeStyle = "rgba(230, 196, 138, 0.4)";
        ctx.lineWidth = 1 * dpr;
        ctx.beginPath();
        ctx.moveTo(pDest.x - 14 * dpr, pDest.y);
        ctx.lineTo(pDest.x - 8 * dpr, pDest.y);
        ctx.moveTo(pDest.x + 8 * dpr, pDest.y);
        ctx.lineTo(pDest.x + 14 * dpr, pDest.y);
        ctx.moveTo(pDest.x, pDest.y - 14 * dpr);
        ctx.lineTo(pDest.x, pDest.y - 8 * dpr);
        ctx.moveTo(pDest.x, pDest.y + 8 * dpr);
        ctx.lineTo(pDest.x, pDest.y + 14 * dpr);
        ctx.stroke();

        // City Callout Tag
        ctx.fillStyle = "#FFFFFF";
        ctx.font = `bold ${11 * dpr}px monospace`;
        ctx.fillText(`${activeStop.city.toUpperCase()}`, pDest.x + 14 * dpr, pDest.y + 4 * dpr);
      }

      // 8. Orbiting Satellite
      const satAngle = starClock * 0.4;
      const satR = R * 1.15;
      const satX = cx + satR * Math.cos(satAngle);
      const satY = cy + satR * Math.sin(satAngle) * 0.40;

      ctx.beginPath();
      ctx.arc(satX, satY, 2.5 * dpr, 0, Math.PI * 2);
      ctx.fillStyle = "#a78bfa";
      ctx.shadowColor = "#a78bfa";
      ctx.shadowBlur = 8 * dpr;
      ctx.fill();
      ctx.shadowBlur = 0;

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => cancelAnimationFrame(animationFrameId);
  }, [activeStop, activeStopIndex]);

  // Mouse & Touch Drag Handlers to freely inspect the world map
  const handleMouseDown = (e: React.MouseEvent) => {
    rotationRef.current.isDragging = true;
    rotationRef.current.lastX = e.clientX;
    rotationRef.current.lastY = e.clientY;
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!rotationRef.current.isDragging) return;
    const deltaX = e.clientX - rotationRef.current.lastX;
    const deltaY = e.clientY - rotationRef.current.lastY;
    rotationRef.current.lastX = e.clientX;
    rotationRef.current.lastY = e.clientY;

    // Direct manual rotation
    rotationRef.current.yaw += deltaX * 0.007;
    rotationRef.current.targetYaw = rotationRef.current.yaw;

    // Pitch clamped between -65 deg and +65 deg
    rotationRef.current.pitch = Math.max(-1.15, Math.min(1.15, rotationRef.current.pitch + deltaY * 0.007));
    rotationRef.current.targetPitch = rotationRef.current.pitch;
  };

  const handleMouseUp = () => {
    rotationRef.current.isDragging = false;
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    if (e.touches.length === 1) {
      rotationRef.current.isDragging = true;
      rotationRef.current.lastX = e.touches[0].clientX;
      rotationRef.current.lastY = e.touches[0].clientY;
    }
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!rotationRef.current.isDragging || e.touches.length !== 1) return;
    const deltaX = e.touches[0].clientX - rotationRef.current.lastX;
    const deltaY = e.touches[0].clientY - rotationRef.current.lastY;
    rotationRef.current.lastX = e.touches[0].clientX;
    rotationRef.current.lastY = e.touches[0].clientY;

    rotationRef.current.yaw += deltaX * 0.007;
    rotationRef.current.targetYaw = rotationRef.current.yaw;

    rotationRef.current.pitch = Math.max(-1.15, Math.min(1.15, rotationRef.current.pitch + deltaY * 0.007));
    rotationRef.current.targetPitch = rotationRef.current.pitch;
  };

  const handleTouchEnd = () => {
    rotationRef.current.isDragging = false;
  };

  const handleResetToTarget = () => {
    rotationRef.current.targetYaw = (activeStop.lon * Math.PI) / 180;
    rotationRef.current.targetPitch = (activeStop.lat * Math.PI) / 180;
  };

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

        {/* 3D Dot-Matrix Globe Display & Active Stop Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Globe Canvas with Center-Targeted Pin */}
          <div className="lg:col-span-7 flex justify-center items-center">
            <div className="relative w-full max-w-[500px] aspect-square flex items-center justify-center select-none">
              {/* Telemetry HUD Badge Top */}
              <div className="absolute top-4 left-4 right-4 flex items-center justify-between text-[11px] font-mono text-champagne/90 pointer-events-none z-10 bg-midnight/70 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-champagne/20 shadow-lg">
                <div className="flex items-center gap-1.5">
                  <Radio className="w-3 h-3 text-coral animate-pulse" />
                  <span>TARGET: {activeStop.city.toUpperCase()} ({activeStop.code})</span>
                </div>
                <span>{activeStop.lat.toFixed(2)}°N, {activeStop.lon.toFixed(2)}°E</span>
              </div>

              {/* Canvas Globe */}
              <canvas
                ref={canvasRef}
                width={560}
                height={560}
                onMouseDown={handleMouseDown}
                onMouseMove={handleMouseMove}
                onMouseUp={handleMouseUp}
                onMouseLeave={handleMouseUp}
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
                className="w-full h-full max-w-[500px] cursor-grab active:cursor-grabbing rounded-full"
              />

              {/* Reset to Center Target Button Bottom */}
              <button
                onClick={handleResetToTarget}
                className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 text-[10px] font-mono uppercase tracking-widest text-champagne/90 hover:text-cloud bg-midnight/80 hover:bg-midnight px-3.5 py-1.5 rounded-full border border-champagne/20 backdrop-blur-sm transition-colors flex items-center gap-1.5 cursor-pointer shadow-md"
              >
                <RotateCcw className="w-3 h-3" />
                <span>Centered: {activeStop.city}</span>
              </button>
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
