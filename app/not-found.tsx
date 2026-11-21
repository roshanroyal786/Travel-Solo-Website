import React from "react";
import Link from "next/link";
import { Compass, ArrowRight } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-midnight flex items-center justify-center px-6 py-32 text-center">
      <div className="max-w-md mx-auto space-y-6">
        <div className="w-16 h-16 rounded-full bg-horizon/60 border border-champagne/30 flex items-center justify-center text-champagne mx-auto">
          <Compass className="w-8 h-8 text-champagne animate-spin-slow" />
        </div>

        <div className="space-y-2">
          <span className="text-xs font-mono uppercase tracking-widest text-champagne">
            404 Error · Lost in Transit
          </span>
          <h1 className="font-display font-light text-4xl text-cloud">
            Destination not found.
          </h1>
          <p className="text-mist text-sm leading-relaxed">
            The page or corridor you were looking for doesn't exist or has moved. Let's get you back on track to your intended destination.
          </p>
        </div>

        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            href="/countries"
            className="w-full sm:w-auto px-6 py-3 rounded-full bg-coral hover:bg-coral/90 text-white font-medium text-xs flex items-center justify-center gap-2 shadow-lg"
          >
            <span>Explore All 5 Destinations</span>
            <ArrowRight className="w-4 h-4" />
          </Link>

          <Link
            href="/"
            className="w-full sm:w-auto px-6 py-3 rounded-full bg-horizon/40 hover:bg-horizon/70 border border-champagne/20 text-cloud font-medium text-xs flex items-center justify-center gap-2"
          >
            <span>Back to Home</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
