"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Cookie, X } from "lucide-react";

export default function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("travelsolo_cookie_consent");
    if (!consent) {
      const timer = setTimeout(() => setShowBanner(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleChoice = (accepted: boolean) => {
    localStorage.setItem("travelsolo_cookie_consent", accepted ? "accepted" : "rejected");
    setShowBanner(false);
    if (accepted && typeof window !== "undefined" && (window as any).gtag) {
      (window as any).gtag("consent", "update", {
        analytics_storage: "granted",
      });
    }
  };

  if (!showBanner) return null;

  return (
    <div
      role="region"
      aria-label="Cookie Preferences"
      className="fixed bottom-20 lg:bottom-6 left-6 right-6 lg:left-auto lg:right-6 lg:max-w-md z-50 bg-white/98 backdrop-blur-xl border border-slate-200 rounded-2xl p-5 shadow-2xl animate-in fade-in slide-in-from-bottom-5 duration-300"
    >
      <div className="flex items-start gap-3.5">
        <div className="p-2 rounded-xl bg-sky-50 text-primary shrink-0 mt-0.5">
          <Cookie className="w-5 h-5" />
        </div>
        <div className="space-y-1.5 flex-1">
          <div className="text-sm font-semibold text-slate-900">Privacy & Cookie Choices</div>
          <p className="text-xs text-slate-600 leading-relaxed">
            We use privacy-friendly analytics to measure page visits and lead interactions. No tracking cookies are loaded unless you choose to accept. Read our{" "}
            <Link href="/legal/privacy" className="text-primary underline hover:text-primary/80">
              Privacy Policy
            </Link>
            .
          </p>
          <div className="flex items-center gap-2.5 pt-2">
            <button
              onClick={() => handleChoice(true)}
              className="px-4 py-1.5 rounded-full bg-primary hover:bg-primary/95 text-white font-semibold text-xs transition-colors shadow-2xs"
            >
              Accept Analytics
            </button>
            <button
              onClick={() => handleChoice(false)}
              className="px-4 py-1.5 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 font-medium text-xs transition-colors"
            >
              Reject
            </button>
          </div>
        </div>
        <button
          onClick={() => handleChoice(false)}
          className="text-slate-400 hover:text-slate-700 transition-colors p-1"
          aria-label="Close cookie consent banner"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
