"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { countries } from "@/content/countries";
import { buildWhatsAppLink } from "@/lib/whatsapp";
import { siteConfig } from "@/content/site";
import {
  Menu,
  X,
  ChevronDown,
  Compass,
  PhoneCall,
  Sparkles,
  ClipboardCheck,
  Timer,
  FileText,
  Calendar,
  CreditCard,
  ShieldCheck,
  HelpCircle,
  MapPin,
  ArrowRight,
  Briefcase,
  GraduationCap,
  Globe2,
} from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [destinationsOpen, setDestinationsOpen] = useState(false);
  const [toolsOpen, setToolsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md py-3 border-b border-sky-100 shadow-[0_4px_20px_rgba(0,0,0,0.04)]"
          : "bg-white/85 backdrop-blur-sm py-4 border-b border-sky-100/60"
      }`}
    >
      <div className="max-w-[1280px] mx-auto px-5 sm:px-6 flex items-center justify-between">
        {/* Logo (Playfair Display + Modern Compass Badge) */}
        <Link href="/" className="flex items-center gap-2.5 group">
          <div className="w-9 h-9 rounded-full bg-[#005A9C] text-white flex items-center justify-center shadow-md group-hover:scale-105 transition-transform">
            <Compass className="w-5 h-5 text-white" />
          </div>
          <span className="font-display text-2xl sm:text-3xl font-medium tracking-tight text-slate-900 group-hover:text-[#005A9C] transition-colors">
            Travel <span className="italic text-[#005A9C] font-normal">Solo</span>
          </span>
        </Link>

        {/* Desktop Navigation Links (SkyWings & Novacore Aesthetic) */}
        <nav className="hidden lg:flex items-center gap-6 text-sm font-medium text-slate-700">
          {/* Destinations Mega Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setDestinationsOpen(true)}
            onMouseLeave={() => setDestinationsOpen(false)}
          >
            <button
              className="flex items-center gap-1.5 hover:text-[#005A9C] transition-colors py-2 cursor-pointer focus:outline-none font-semibold text-slate-800"
              aria-expanded={destinationsOpen}
            >
              <span>Destinations</span>
              <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${destinationsOpen ? "rotate-180" : ""}`} />
            </button>

            {destinationsOpen && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 w-[680px] bg-white border border-sky-100 rounded-3xl p-5 shadow-2xl grid grid-cols-5 gap-3 animate-in fade-in slide-in-from-top-2 duration-200">
                {Object.values(countries).map((country) => (
                  <Link
                    key={country.slug}
                    href={`/countries/${country.slug}`}
                    className="group block p-2 rounded-2xl hover:bg-sky-50/70 border border-transparent hover:border-sky-200 transition-all text-center"
                  >
                    <div className="relative aspect-[4/3] rounded-xl overflow-hidden mb-2 border border-slate-200/80 shadow-2xs">
                      <Image
                        src={country.heroImage}
                        alt={country.name}
                        fill
                        className="object-cover group-hover:scale-108 transition-transform duration-300"
                        sizes="130px"
                      />
                    </div>
                    <div className="text-xs font-bold text-slate-900 group-hover:text-[#005A9C] transition-colors line-clamp-1">
                      {country.name}
                    </div>
                    <div className="text-[11px] text-slate-500 truncate">{country.city}</div>
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link href="/countries" className="hover:text-[#005A9C] transition-colors">
            All Visas
          </Link>

          {/* Interactive Tools Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setToolsOpen(true)}
            onMouseLeave={() => setToolsOpen(false)}
          >
            <button
              className="flex items-center gap-1.5 hover:text-[#005A9C] transition-colors py-2 cursor-pointer focus:outline-none"
              aria-expanded={toolsOpen}
            >
              <span>Free Tools</span>
              <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${toolsOpen ? "rotate-180" : ""}`} />
            </button>

            {toolsOpen && (
              <div className="absolute top-full left-0 w-[300px] bg-white border border-sky-100 rounded-2xl p-3 shadow-xl space-y-1 animate-in fade-in slide-in-from-top-2 duration-200">
                <Link
                  href="/tools/eligibility-checker"
                  className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-sky-50 text-slate-800 hover:text-[#005A9C] transition-colors"
                >
                  <Sparkles className="w-4 h-4 text-sky-600 shrink-0" />
                  <div>
                    <div className="text-xs font-semibold">Eligibility Checker</div>
                    <div className="text-[10px] text-slate-500">60-second profile audit</div>
                  </div>
                </Link>
                <Link
                  href="/tools/document-checklist"
                  className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-sky-50 text-slate-800 hover:text-[#005A9C] transition-colors"
                >
                  <ClipboardCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                  <div>
                    <div className="text-xs font-semibold">Document Checklist</div>
                    <div className="text-[10px] text-slate-500">Custom consular requirements</div>
                  </div>
                </Link>
                <Link
                  href="/tools/processing-time"
                  className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-sky-50 text-slate-800 hover:text-[#005A9C] transition-colors"
                >
                  <Timer className="w-4 h-4 text-amber-600 shrink-0" />
                  <div>
                    <div className="text-xs font-semibold">Processing Timelines</div>
                    <div className="text-[10px] text-slate-500">Realistic calendar ranges</div>
                  </div>
                </Link>
              </div>
            )}
          </div>

          <Link href="/services" className="hover:text-[#005A9C] transition-colors">
            Services
          </Link>

          <Link href="/about" className="hover:text-[#005A9C] transition-colors">
            About Us
          </Link>

          <Link href="/contact" className="hover:text-[#005A9C] transition-colors">
            Contact
          </Link>
        </nav>

        {/* Desktop CTA Action Button */}
        <div className="hidden lg:flex items-center gap-4">
          <a
            href={`tel:${siteConfig.phone}`}
            className="flex items-center gap-1.5 text-xs font-semibold text-slate-700 hover:text-[#005A9C] transition-colors"
          >
            <PhoneCall className="w-3.5 h-3.5 text-[#005A9C]" />
            <span>{siteConfig.phone}</span>
          </a>

          <a
            href={buildWhatsAppLink({ type: "quote" })}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 rounded-full bg-[#005A9C] hover:bg-[#00487C] text-white font-semibold text-xs transition-all shadow-sm hover:shadow-md hover:-translate-y-0.5 active:translate-y-0 flex items-center gap-2"
          >
            <span>Get a Quote</span>
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2.5 rounded-full bg-sky-50 border border-sky-100 text-slate-800 hover:text-[#005A9C] transition-colors focus:outline-none"
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6 text-slate-900" /> : <Menu className="w-6 h-6 text-slate-900" />}
        </button>
      </div>

      {/* 
        COMPREHENSIVE MOBILE FULL-SCREEN MENU (Showing ALL Links Organized by Section)
        Matches SkyWings (Reference 1) & Novacore (Reference 3) Aesthetic!
      */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 top-[65px] bg-[#F8FAFD] z-40 overflow-y-auto flex flex-col justify-between animate-in fade-in slide-in-from-top-4 duration-300">
          <div className="p-5 sm:p-6 space-y-6 pb-28">
            {/* Top Headquarters Info Strip */}
            <div className="flex items-center justify-between p-3.5 rounded-2xl bg-white border border-sky-100 shadow-2xs">
              <div className="flex items-center gap-2 text-xs text-slate-700 font-medium">
                <MapPin className="w-3.5 h-3.5 text-[#005A9C] shrink-0" />
                <span>Dwarka Sector 7, New Delhi · Direct Filings</span>
              </div>
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
            </div>

            {/* SECTION 1: 5 Specialized Corridors (Visual Cards with Thumbnails) */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs uppercase tracking-wider text-[#005A9C] font-semibold flex items-center gap-1.5">
                  <Globe2 className="w-3.5 h-3.5 text-[#005A9C]" />
                  <span>5 Specialized Corridors</span>
                </span>
                <Link
                  href="/countries"
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-xs text-[#005A9C] font-semibold hover:underline flex items-center gap-1"
                >
                  <span>View All</span>
                  <ArrowRight className="w-3 h-3" />
                </Link>
              </div>

              <div className="grid grid-cols-2 gap-2.5">
                {Object.values(countries).map((c) => (
                  <Link
                    key={c.slug}
                    href={`/countries/${c.slug}`}
                    onClick={() => setMobileMenuOpen(false)}
                    className="p-2.5 rounded-2xl bg-white border border-slate-200/90 shadow-2xs hover:border-sky-300 transition-all flex items-center gap-2.5"
                  >
                    <div className="relative w-10 h-10 rounded-xl overflow-hidden shrink-0 border border-slate-100">
                      <Image
                        src={c.heroImage}
                        alt={c.name}
                        fill
                        className="object-cover"
                        sizes="40px"
                      />
                    </div>
                    <div className="min-w-0">
                      <div className="text-xs font-bold text-slate-900 truncate">
                        {c.name}
                      </div>
                      <div className="text-[10px] text-slate-500 truncate">
                        {c.city}
                      </div>
                    </div>
                  </Link>
                ))}

                <Link
                  href="/countries"
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2.5 rounded-2xl bg-[#EBF4FD] border border-sky-200 text-[#005A9C] font-semibold text-xs flex items-center justify-center gap-1.5 shadow-2xs hover:bg-sky-100 transition-colors"
                >
                  <span>All 5 Dossiers</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* SECTION 2: Visa Pathways & Services */}
            <div className="space-y-3">
              <span className="text-xs uppercase tracking-wider text-slate-500 font-semibold flex items-center gap-1.5">
                <Briefcase className="w-3.5 h-3.5 text-[#005A9C]" />
                <span>Visa Pathways & Programs</span>
              </span>

              <div className="grid grid-cols-2 gap-2">
                <Link
                  href="/countries"
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-3 rounded-2xl bg-white border border-slate-200/80 hover:border-sky-300 text-xs font-medium text-slate-800 shadow-2xs flex items-center gap-2"
                >
                  <Briefcase className="w-4 h-4 text-sky-600 shrink-0" />
                  <span>Work & Employment</span>
                </Link>

                <Link
                  href="/countries"
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-3 rounded-2xl bg-white border border-slate-200/80 hover:border-sky-300 text-xs font-medium text-slate-800 shadow-2xs flex items-center gap-2"
                >
                  <GraduationCap className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>University & Student</span>
                </Link>

                <Link
                  href="/countries"
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-3 rounded-2xl bg-white border border-slate-200/80 hover:border-sky-300 text-xs font-medium text-slate-800 shadow-2xs flex items-center gap-2"
                >
                  <Compass className="w-4 h-4 text-amber-600 shrink-0" />
                  <span>Tourist & Holiday</span>
                </Link>

                <Link
                  href="/services"
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-3 rounded-2xl bg-white border border-slate-200/80 hover:border-sky-300 text-xs font-medium text-slate-800 shadow-2xs flex items-center gap-2"
                >
                  <FileText className="w-4 h-4 text-indigo-600 shrink-0" />
                  <span>Services & Fees</span>
                </Link>
              </div>
            </div>

            {/* SECTION 3: Free Interactive Tools */}
            <div className="space-y-3">
              <span className="text-xs uppercase tracking-wider text-slate-500 font-semibold flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-sky-600" />
                <span>Self-Service Tools</span>
              </span>

              <div className="space-y-2">
                <Link
                  href="/tools/eligibility-checker"
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-3 rounded-2xl bg-white border border-slate-200/80 hover:border-sky-300 text-xs font-medium text-slate-800 shadow-2xs flex items-center justify-between"
                >
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-xl bg-sky-100 flex items-center justify-center text-[#005A9C]">
                      <Sparkles className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="font-semibold text-slate-900">Eligibility Checker Quiz</div>
                      <div className="text-[10px] text-slate-500">60-second profile evaluation</div>
                    </div>
                  </div>
                  <ArrowRight className="w-3.5 h-3.5 text-slate-400" />
                </Link>

                <Link
                  href="/tools/document-checklist"
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-3 rounded-2xl bg-white border border-slate-200/80 hover:border-sky-300 text-xs font-medium text-slate-800 shadow-2xs flex items-center justify-between"
                >
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-xl bg-emerald-100 flex items-center justify-center text-emerald-700">
                      <ClipboardCheck className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="font-semibold text-slate-900">Document Checklist Tool</div>
                      <div className="text-[10px] text-slate-500">Download official requirements</div>
                    </div>
                  </div>
                  <ArrowRight className="w-3.5 h-3.5 text-slate-400" />
                </Link>

                <Link
                  href="/tools/processing-time"
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-3 rounded-2xl bg-white border border-slate-200/80 hover:border-sky-300 text-xs font-medium text-slate-800 shadow-2xs flex items-center justify-between"
                >
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-xl bg-amber-100 flex items-center justify-center text-amber-700">
                      <Timer className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="font-semibold text-slate-900">Processing Time Calculator</div>
                      <div className="text-[10px] text-slate-500">Realistic decision dates</div>
                    </div>
                  </div>
                  <ArrowRight className="w-3.5 h-3.5 text-slate-400" />
                </Link>
              </div>
            </div>

            {/* SECTION 4: Direct Client Actions */}
            <div className="space-y-3">
              <span className="text-xs uppercase tracking-wider text-slate-500 font-semibold flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                <span>Client Actions & Security</span>
              </span>

              <div className="grid grid-cols-2 gap-2">
                <Link
                  href="/apply"
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-3 rounded-2xl bg-white border border-slate-200/80 hover:border-sky-300 text-xs font-medium text-slate-800 shadow-2xs flex items-center gap-2"
                >
                  <FileText className="w-4 h-4 text-sky-600 shrink-0" />
                  <span>Start Application</span>
                </Link>

                <Link
                  href="/book"
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-3 rounded-2xl bg-white border border-slate-200/80 hover:border-sky-300 text-xs font-medium text-slate-800 shadow-2xs flex items-center gap-2"
                >
                  <Calendar className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Book 20-Min Call</span>
                </Link>

                <Link
                  href="/pay"
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-3 rounded-2xl bg-white border border-slate-200/80 hover:border-sky-300 text-xs font-medium text-slate-800 shadow-2xs flex items-center gap-2"
                >
                  <CreditCard className="w-4 h-4 text-purple-600 shrink-0" />
                  <span>Pay Retainer & Fees</span>
                </Link>

                <Link
                  href="/legal/refund"
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-3 rounded-2xl bg-white border border-slate-200/80 hover:border-sky-300 text-xs font-medium text-slate-800 shadow-2xs flex items-center gap-2"
                >
                  <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>100% Refund Policy</span>
                </Link>
              </div>
            </div>

            {/* SECTION 5: Company, Office & FAQs */}
            <div className="space-y-2 pt-2 border-t border-slate-200/80">
              <div className="flex items-center justify-between py-2 text-xs font-semibold text-slate-700">
                <Link href="/about" onClick={() => setMobileMenuOpen(false)} className="hover:text-[#005A9C]">
                  About Travel Solo
                </Link>
                <span>·</span>
                <Link href="/contact" onClick={() => setMobileMenuOpen(false)} className="hover:text-[#005A9C]">
                  Dwarka Office
                </Link>
                <span>·</span>
                <Link href="/faq" onClick={() => setMobileMenuOpen(false)} className="hover:text-[#005A9C]">
                  FAQ
                </Link>
                <span>·</span>
                <Link href="/legal/disclaimer" onClick={() => setMobileMenuOpen(false)} className="hover:text-[#005A9C]">
                  Disclaimer
                </Link>
              </div>
            </div>
          </div>

          {/* Sticky Bottom Bar inside Mobile Menu */}
          <div className="sticky bottom-0 left-0 right-0 p-4 bg-white/95 backdrop-blur-md border-t border-slate-200 shadow-xl space-y-2">
            <a
              href={buildWhatsAppLink({ type: "quote" })}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3.5 rounded-full bg-[#005A9C] text-white font-semibold text-center flex items-center justify-center gap-2 shadow-md text-sm cursor-pointer"
            >
              <span>Get a Quote on WhatsApp</span>
              <ArrowRight className="w-4 h-4" />
            </a>
            <div className="text-center text-[11px] text-slate-500">
              Sector 7, Dwarka, New Delhi · Call: <a href={`tel:${siteConfig.phone}`} className="font-semibold text-slate-800 underline">{siteConfig.phone}</a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
