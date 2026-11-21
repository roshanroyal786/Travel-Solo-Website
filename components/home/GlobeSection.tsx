"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { countries } from "@/content/countries";
import { Plane, MapPin, ArrowRight, Radio, Compass, Sparkles } from "lucide-react";

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

// Pre-compute landmass points for dot-matrix Earth
function getLandPoints(): [number, number][] {
  const points: [number, number][] = [];
  function isLand(lat: number, lon: number): boolean {
    if (lat > 75 || lat < -58) return false;

    // North America
    if (lat >= 15 && lat <= 72 && lon >= -168 && lon <= -52) {
      if (lat > 50 && lon > -140 && lon < -60) return true;
      if (lat >= 25 && lat <= 50 && lon >= -125 && lon <= -68) return true;
      if (lat >= 15 && lat < 25 && lon >= -105 && lon <= -85) return true;
    }
    // South America
    if (lat >= -56 && lat <= 12 && lon >= -82 && lon <= -34) {
      if (lat >= -20 && lon >= -75 && lon <= -40) return true;
      if (lat < -20 && lon >= -72 && lon <= -50) return true;
      if (lat > -20 && lon >= -80 && lon <= -60) return true;
    }
    // Europe
    if (lat >= 35 && lat <= 71 && lon >= -10 && lon <= 42) {
      if (lat >= 36 && lat <= 60 && lon >= -10 && lon <= 30) return true;
      if (lat >= 55 && lat <= 71 && lon >= 5 && lon <= 32) return true;
    }
    // Russia & Northern Asia
    if (lat >= 48 && lat <= 75 && lon >= 30 && lon <= 170) return true;
    // Africa
    if (lat >= -35 && lat <= 37 && lon >= -18 && lon <= 52) {
      if (lat >= 15 && lon >= -15 && lon <= 40) return true;
      if (lat >= -10 && lat < 15 && lon >= -15 && lon <= 45) return true;
      if (lat < -10 && lon >= 12 && lon <= 36) return true;
    }
    // Middle East
    if (lat >= 12 && lat <= 38 && lon >= 35 && lon <= 60) return true;
    // India & South Asia
    if (lat >= 6 && lat <= 36 && lon >= 68 && lon <= 92) return true;
    // China & East Asia
    if (lat >= 20 && lat <= 48 && lon >= 75 && lon <= 130) return true;
    // Japan
    if (lat >= 30 && lat <= 45 && lon >= 128 && lon <= 145) return true;
    // Southeast Asia (Malaysia, Singapore, Indonesia, Thailand)
    if (lat >= -11 && lat <= 20 && lon >= 95 && lon <= 142) return true;
    // Australia & New Zealand
    if (lat >= -44 && lat <= -11 && lon >= 113 && lon <= 154) return true;
    if (lat >= -47 && lat <= -34 && lon >= 166 && lon <= 178) return true;

    return false;
  }

  for (let lat = -55; lat <= 72; lat += 2.2) {
    for (let lon = -180; lon <= 180; lon += 2.8) {
      if (isLand(lat, lon)) {
        points.push([lat, lon]);
      }
    }
  }
  return points;
}

const LAND_POINTS = getLandPoints();

// Pre-compute starfield background
const STARS = Array.from({ length: 80 }).map((_, i) => ({
  x: (i * 137.5) % 100,
  y: (i * 249.7) % 100,
  size: 0.6 + ((i * 17) % 15) / 10,
  alpha: 0.2 + ((i * 31) % 70) / 100,
  speed: 0.5 + ((i * 19) % 10) / 10,
}));

export default function GlobeSection() {
  const [activeStopIndex, setActiveStopIndex] = useState(1);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  // Rotation state: yaw (rotation around Y-axis) and pitch (tilt around X-axis)
  const rotationRef = useRef<{
    yaw: number;
    targetYaw: number;
    pitch: number;
    autoRotate: boolean;
    isDragging: boolean;
    lastX: number;
  }>({
    yaw: -0.8,
    targetYaw: -0.8,
    pitch: 0.28, // Slight forward tilt for 3D depth
    autoRotate: true,
    isDragging: false,
    lastX: 0,
  });

  const activeStop = stops[activeStopIndex];

  // When active stop changes, smoothly rotate targetYaw toward that stop
  useEffect(() => {
    // Center the target stop on the globe
    const targetLon = activeStop.lon;
    // Convert target longitude to yaw in radians
    const targetAngle = (targetLon * Math.PI) / 180 - Math.PI / 2;
    rotationRef.current.targetYaw = targetAngle;
    rotationRef.current.autoRotate = false;

    // Resume subtle auto-rotation after 6 seconds of inactivity
    const timer = setTimeout(() => {
      rotationRef.current.autoRotate = true;
    }, 6000);

    return () => clearTimeout(timer);
  }, [activeStopIndex, activeStop.lon]);

  // Main Canvas Rendering Loop
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
        ctx.fillStyle = `rgba(196, 181, 253, ${star.alpha * twinkle * 0.75})`;
        ctx.beginPath();
        ctx.arc(sx, sy, star.size * dpr, 0, Math.PI * 2);
        ctx.fill();
      });

      // 2. Draw Atmospheric Rim Glow (Violet + Champagne breathing aura)
      const auraGrad = ctx.createRadialGradient(cx, cy, R * 0.85, cx, cy, R * 1.25);
      auraGrad.addColorStop(0, "rgba(124, 58, 237, 0.45)"); // Deep Violet
      auraGrad.addColorStop(0.4, "rgba(167, 139, 250, 0.22)"); // Lavender glow
      auraGrad.addColorStop(0.75, "rgba(230, 196, 138, 0.10)"); // Champagne rim
      auraGrad.addColorStop(1, "rgba(10, 16, 32, 0)");
      ctx.fillStyle = auraGrad;
      ctx.beginPath();
      ctx.arc(cx, cy, R * 1.25, 0, Math.PI * 2);
      ctx.fill();

      // 3. Globe Spherical Body (Deep Midnight Cosmic Base)
      const globeGrad = ctx.createRadialGradient(
        cx - R * 0.35,
        cy - R * 0.35,
        R * 0.1,
        cx,
        cy,
        R
      );
      globeGrad.addColorStop(0, "#1a1e38");
      globeGrad.addColorStop(0.45, "#0d1326");
      globeGrad.addColorStop(0.85, "#080c18");
      globeGrad.addColorStop(1, "#03060d");
      ctx.fillStyle = globeGrad;
      ctx.beginPath();
      ctx.arc(cx, cy, R, 0, Math.PI * 2);
      ctx.fill();

      // Circumference Specular Edge Ring
      ctx.strokeStyle = "rgba(196, 181, 253, 0.45)";
      ctx.lineWidth = 1.5 * dpr;
      ctx.stroke();

      // Outer delicate orbital ring
      ctx.strokeStyle = "rgba(230, 196, 138, 0.15)";
      ctx.lineWidth = 1 * dpr;
      ctx.beginPath();
      ctx.arc(cx, cy, R + 18 * dpr, 0, Math.PI * 2);
      ctx.stroke();

      // Update rotation
      const state = rotationRef.current;
      if (state.autoRotate && !state.isDragging) {
        state.targetYaw += 0.0035; // Continuous subtle rotation
      }
      // Lerp yaw toward targetYaw
      state.yaw += (state.targetYaw - state.yaw) * 0.06;

      const yaw = state.yaw;
      const pitch = state.pitch;

      // 3D Projection Helper
      // lat: -90 to +90, lon: -180 to +180
      const project = (lat: number, lon: number, radiusOffset = 0) => {
        const radLat = (lat * Math.PI) / 180;
        const radLon = (lon * Math.PI) / 180;
        const r = R + radiusOffset;

        // Spherical to 3D Cartesian
        const x3 = r * Math.cos(radLat) * Math.sin(radLon - yaw);
        const y3 = -r * Math.sin(radLat);
        const z3 = r * Math.cos(radLat) * Math.cos(radLon - yaw);

        // Apply pitch tilt around X-axis
        const yRot = y3 * Math.cos(pitch) - z3 * Math.sin(pitch);
        const zRot = y3 * Math.sin(pitch) + z3 * Math.cos(pitch);

        const visible = zRot > -R * 0.1; // Front hemisphere + slight limb curvature
        return {
          x: cx + x3,
          y: cy + yRot,
          z: zRot,
          visible,
          depthFactor: Math.max(0, Math.min(1, (zRot + R) / (2 * R))),
        };
      };

      // 4. Draw Faceted Wireframe Lattice (Latitude & Longitude lines)
      ctx.lineWidth = 1 * dpr;
      // Latitude parallels: -60, -30, 0, 30, 60
      const parallels = [-60, -30, 0, 30, 60];
      parallels.forEach((lat) => {
        ctx.beginPath();
        let started = false;
        for (let lon = -180; lon <= 180; lon += 5) {
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
            ? "rgba(230, 196, 138, 0.25)" // Equator in subtle champagne
            : "rgba(167, 139, 250, 0.12)"; // Parallels in soft violet
        ctx.stroke();
      });

      // Longitude meridians (rotating with the globe)
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

      // 5. Draw 3D Dot-Matrix Earth (Continents Points)
      for (let i = 0; i < LAND_POINTS.length; i++) {
        const [lat, lon] = LAND_POINTS[i];
        const pt = project(lat, lon);

        if (pt.visible) {
          // Point brightness and size scale with 3D depth
          const depth = pt.depthFactor;
          const dotRadius = (1.1 + depth * 1.5) * dpr;
          const alpha = 0.18 + depth * 0.72;

          // Hue shift: bright lavender/violet in front, champagne accents on equator
          let fillColor: string;
          if (Math.abs(lat) < 15 && (i % 5 === 0)) {
            fillColor = `rgba(230, 196, 138, ${alpha})`; // Champagne accent dots
          } else if (depth > 0.75) {
            fillColor = `rgba(216, 180, 254, ${alpha})`; // Crisp luminous violet
          } else {
            fillColor = `rgba(167, 139, 250, ${alpha * 0.85})`; // Subtle violet
          }

          ctx.fillStyle = fillColor;
          ctx.beginPath();
          ctx.arc(pt.x, pt.y, dotRadius, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      // 6. Draw Interactive 3D Flight Arc (New Delhi -> Active Destination)
      const delhiLat = 28.6139;
      const delhiLon = 77.209;
      const destLat = activeStop.lat;
      const destLon = activeStop.lon;

      const pDelhi = project(delhiLat, delhiLon);
      const pDest = project(destLat, destLon);

      // Draw the lifted Bezier flight trajectory
      const arcSamples = 32;
      const arcPoints: { x: number; y: number; visible: boolean }[] = [];

      for (let step = 0; step <= arcSamples; step++) {
        const t = step / arcSamples;
        // Spherical linear interpolation between Delhi and Dest
        const curLat = delhiLat + (destLat - delhiLat) * t;
        const curLon = delhiLon + (destLon - delhiLon) * t;
        // Lift altitude above globe surface (peaks at middle t=0.5)
        const altitude = Math.sin(t * Math.PI) * (R * 0.22);
        const pt = project(curLat, curLon, altitude);
        arcPoints.push(pt);
      }

      // Render base trajectory path
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
      ctx.strokeStyle = "rgba(230, 196, 138, 0.45)"; // Dashed champagne trajectory
      ctx.lineWidth = 1.8 * dpr;
      ctx.stroke();
      ctx.setLineDash([]);

      // Traveling Flight Beacon (Comet Pulse)
      flightProgress += 0.012;
      if (flightProgress > 1) flightProgress = 0;

      const tIdx = Math.floor(flightProgress * (arcPoints.length - 1));
      const activeBeaconPt = arcPoints[tIdx];

      if (activeBeaconPt && activeBeaconPt.visible) {
        // Glowing comet head
        ctx.beginPath();
        ctx.arc(activeBeaconPt.x, activeBeaconPt.y, 4.5 * dpr, 0, Math.PI * 2);
        ctx.fillStyle = "#FF6B4A"; // Dawn Coral pulse
        ctx.shadowColor = "#FF6B4A";
        ctx.shadowBlur = 12 * dpr;
        ctx.fill();
        ctx.shadowBlur = 0;

        // Comet halo
        ctx.beginPath();
        ctx.arc(activeBeaconPt.x, activeBeaconPt.y, 8 * dpr, 0, Math.PI * 2);
        ctx.strokeStyle = "rgba(255, 107, 74, 0.5)";
        ctx.lineWidth = 1.5 * dpr;
        ctx.stroke();
      }

      // 7. Draw Radar Origin & Destination Pins
      pulsePhase += 0.04;
      const pulseRadius = ((pulsePhase % 1) * 18 + 6) * dpr;
      const pulseAlpha = Math.max(0, 1 - (pulsePhase % 1));

      // Origin Pin: New Delhi (Champagne)
      if (pDelhi.visible) {
        ctx.beginPath();
        ctx.arc(pDelhi.x, pDelhi.y, 5 * dpr, 0, Math.PI * 2);
        ctx.fillStyle = "#E6C48A";
        ctx.fill();
        ctx.strokeStyle = "#FFFFFF";
        ctx.lineWidth = 1.5 * dpr;
        ctx.stroke();

        // Label tag
        ctx.fillStyle = "#E6C48A";
        ctx.font = `bold ${10 * dpr}px monospace`;
        ctx.fillText("DELHI (ORIGIN)", pDelhi.x + 8 * dpr, pDelhi.y - 6 * dpr);
      }

      // Destination Pin: Active Target (Dawn Coral + Radar Rings)
      if (activeStop.id !== "delhi" && pDest.visible) {
        // Concentric expanding radar wave
        ctx.beginPath();
        ctx.arc(pDest.x, pDest.y, pulseRadius, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(255, 107, 74, ${pulseAlpha * 0.8})`;
        ctx.lineWidth = 1.5 * dpr;
        ctx.stroke();

        // Solid pin head
        ctx.beginPath();
        ctx.arc(pDest.x, pDest.y, 6.5 * dpr, 0, Math.PI * 2);
        ctx.fillStyle = "#FF6B4A";
        ctx.fill();
        ctx.strokeStyle = "#FFFFFF";
        ctx.lineWidth = 2 * dpr;
        ctx.stroke();

        // Target badge label
        ctx.fillStyle = "#FFFFFF";
        ctx.font = `bold ${11 * dpr}px monospace`;
        ctx.fillText(`${activeStop.city.toUpperCase()}`, pDest.x + 10 * dpr, pDest.y + 4 * dpr);
      }

      // 8. Orbiting Satellite / Light Node
      const satAngle = starClock * 0.45;
      const satR = R * 1.14;
      const satX = cx + satR * Math.cos(satAngle);
      const satY = cy + satR * Math.sin(satAngle) * 0.42;

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

  // Mouse & Touch Drag Handlers to spin globe freely
  const handleMouseDown = (e: React.MouseEvent) => {
    rotationRef.current.isDragging = true;
    rotationRef.current.lastX = e.clientX;
    rotationRef.current.autoRotate = false;
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!rotationRef.current.isDragging) return;
    const deltaX = e.clientX - rotationRef.current.lastX;
    rotationRef.current.lastX = e.clientX;
    rotationRef.current.targetYaw += deltaX * 0.008;
  };

  const handleMouseUp = () => {
    rotationRef.current.isDragging = false;
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    if (e.touches.length === 1) {
      rotationRef.current.isDragging = true;
      rotationRef.current.lastX = e.touches[0].clientX;
      rotationRef.current.autoRotate = false;
    }
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!rotationRef.current.isDragging || e.touches.length !== 1) return;
    const deltaX = e.touches[0].clientX - rotationRef.current.lastX;
    rotationRef.current.lastX = e.touches[0].clientX;
    rotationRef.current.targetYaw += deltaX * 0.008;
  };

  const handleTouchEnd = () => {
    rotationRef.current.isDragging = false;
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
          {/* 3D Dot-Matrix Globe Canvas */}
          <div className="lg:col-span-7 flex justify-center items-center">
            <div className="relative w-full max-w-[500px] aspect-square flex items-center justify-center select-none">
              {/* Telemetry HUD Badge Top */}
              <div className="absolute top-4 left-4 right-4 flex items-center justify-between text-[11px] font-mono text-champagne/90 pointer-events-none z-10 bg-midnight/70 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-champagne/20">
                <div className="flex items-center gap-1.5">
                  <Radio className="w-3 h-3 text-coral animate-pulse" />
                  <span>ROUTE: DEL &rarr; {activeStop.code}</span>
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

              {/* Interactive Cue Badge Bottom */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 pointer-events-none z-10 text-center">
                <span className="text-[10px] font-mono uppercase tracking-widest text-mist/80 bg-midnight/80 px-3 py-1 rounded-full border border-champagne/15 backdrop-blur-sm">
                  Drag to rotate globe · {activeStop.city}
                </span>
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
