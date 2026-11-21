"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { countries } from "@/content/countries";
import { buildWhatsAppLink } from "@/lib/whatsapp";
import { Menu, X, ChevronDown, Compass, PhoneCall } from "lucide-react";
import { siteConfig } from "@/content/site";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [countriesDropdownOpen, setCountriesDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md py-3 border-b border-slate-200/90 shadow-xs"
          : "bg-white/80 backdrop-blur-sm py-4 border-b border-slate-100"
      }`}
    >
      <div className="max-w-[1280px] mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-8 h-8 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center text-primary group-hover:scale-105 transition-transform">
            <Compass className="w-4 h-4 text-primary" />
          </div>
          <span className="font-display text-2xl font-normal tracking-tight text-slate-900 group-hover:text-primary transition-colors">
            Travel <span className="italic text-primary font-normal">Solo</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-slate-600">
          {/* Countries Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setCountriesDropdownOpen(true)}
            onMouseLeave={() => setCountriesDropdownOpen(false)}
          >
            <button
              className="flex items-center gap-1.5 hover:text-slate-900 transition-colors py-2 cursor-pointer focus:outline-none"
              aria-expanded={countriesDropdownOpen}
            >
              Destinations
              <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
            </button>

            {countriesDropdownOpen && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 w-[700px] bg-white border border-slate-200 rounded-2xl p-5 shadow-xl grid grid-cols-5 gap-3 animate-in fade-in slide-in-from-top-2 duration-200">
                {Object.values(countries).map((country) => (
                  <Link
                    key={country.slug}
                    href={`/countries/${country.slug}`}
                    className="group block p-2 rounded-xl hover:bg-slate-50 border border-transparent hover:border-slate-200 transition-all"
                  >
                    <div className="relative aspect-[4/3] rounded-lg overflow-hidden mb-2 border border-slate-200">
                      <Image
                        src={country.heroImage}
                        alt={country.name}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                        sizes="120px"
                      />
                    </div>
                    <div className="text-xs font-semibold text-slate-900 group-hover:text-primary transition-colors">
                      {country.name}
                    </div>
                    <div className="text-[11px] text-slate-500 truncate">{country.city}</div>
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link href="/countries" className="hover:text-slate-900 transition-colors">
            All Visas
          </Link>

          <Link href="/tools/eligibility-checker" className="hover:text-slate-900 transition-colors">
            Eligibility Quiz
          </Link>

          <Link href="/tools/document-checklist" className="hover:text-slate-900 transition-colors">
            Checklist Tool
          </Link>

          <Link href="/tools/processing-time" className="hover:text-slate-900 transition-colors">
            Timelines
          </Link>

          <Link href="/about" className="hover:text-slate-900 transition-colors">
            About
          </Link>

          <Link href="/contact" className="hover:text-slate-900 transition-colors">
            Contact
          </Link>
        </nav>

        {/* Desktop CTA Pill */}
        <div className="hidden lg:flex items-center gap-4">
          <a
            href={`tel:${siteConfig.phone}`}
            className="flex items-center gap-1.5 text-xs font-medium text-slate-600 hover:text-primary transition-colors"
          >
            <PhoneCall className="w-3.5 h-3.5 text-primary" />
            <span>{siteConfig.phone}</span>
          </a>

          <a
            href={buildWhatsAppLink({ type: "quote" })}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 rounded-full bg-primary hover:bg-primary/95 text-white font-medium text-xs transition-all shadow-sm hover:shadow-md hover:-translate-y-0.5 active:translate-y-0 flex items-center gap-2"
          >
            <span>Get a Quote</span>
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 text-slate-700 hover:text-primary transition-colors"
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Full-Screen Overlay Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 top-[65px] bg-white z-40 px-6 py-8 flex flex-col justify-between overflow-y-auto border-t border-slate-100">
          <div className="space-y-6">
            <div className="border-b border-slate-200 pb-4">
              <span className="text-xs tracking-wider uppercase text-slate-500 font-mono font-semibold">
                Destinations
              </span>
              <div className="grid grid-cols-2 gap-2 mt-3">
                {Object.values(countries).map((c) => (
                  <Link
                    key={c.slug}
                    href={`/countries/${c.slug}`}
                    onClick={() => setMobileMenuOpen(false)}
                    className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-800 hover:text-primary text-xs font-medium"
                  >
                    {c.name}
                  </Link>
                ))}
              </div>
            </div>

            <div className="space-y-3 text-base font-medium text-slate-700">
              <div>
                <Link
                  href="/countries"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block py-1 hover:text-primary"
                >
                  All Countries & Visas
                </Link>
              </div>
              <div>
                <Link
                  href="/tools/eligibility-checker"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block py-1 hover:text-primary"
                >
                  Eligibility Checker Quiz
                </Link>
              </div>
              <div>
                <Link
                  href="/tools/document-checklist"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block py-1 hover:text-primary"
                >
                  Document Checklist Generator
                </Link>
              </div>
              <div>
                <Link
                  href="/tools/processing-time"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block py-1 hover:text-primary"
                >
                  Processing Time Estimator
                </Link>
              </div>
              <div>
                <Link
                  href="/about"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block py-1 hover:text-primary"
                >
                  About Travel Solo
                </Link>
              </div>
              <div>
                <Link
                  href="/contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block py-1 hover:text-primary"
                >
                  Dwarka Office & Contact
                </Link>
              </div>
            </div>
          </div>

          <div className="pt-6 border-t border-slate-200 space-y-3">
            <a
              href={buildWhatsAppLink({ type: "quote" })}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3.5 rounded-full bg-primary text-white font-medium text-center block shadow-md text-sm"
            >
              Get a Quote on WhatsApp
            </a>
            <div className="text-center text-xs text-slate-500">
              Sector 12, Dwarka, New Delhi · {siteConfig.phone}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
