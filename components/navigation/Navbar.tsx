"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { countries } from "@/content/countries";
import { buildWhatsAppLink } from "@/lib/whatsapp";
import { Menu, X, ChevronDown, Compass, PhoneCall } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [countriesDropdownOpen, setCountriesDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "glass-nav py-3 shadow-2xl" : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-[1280px] mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-9 h-9 rounded-full bg-horizon/60 border border-champagne/30 flex items-center justify-center text-champagne group-hover:scale-105 transition-transform">
            <Compass className="w-5 h-5 text-champagne" />
          </div>
          <span className="font-display text-2xl font-light tracking-tight text-cloud group-hover:text-champagne transition-colors">
            Travel <span className="italic text-champagne font-normal">Solo</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-mist">
          {/* Countries Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setCountriesDropdownOpen(true)}
            onMouseLeave={() => setCountriesDropdownOpen(false)}
          >
            <button
              className="flex items-center gap-1.5 hover:text-cloud transition-colors py-2 cursor-pointer focus:outline-none"
              aria-expanded={countriesDropdownOpen}
            >
              Destinations
              <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
            </button>

            {countriesDropdownOpen && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 w-[700px] bg-midnight/95 backdrop-blur-xl border border-champagne/20 rounded-2xl p-5 shadow-2xl grid grid-cols-5 gap-3 animate-in fade-in slide-in-from-top-2 duration-200">
                {Object.values(countries).map((country) => (
                  <Link
                    key={country.slug}
                    href={`/countries/${country.slug}`}
                    className="group block p-2 rounded-xl hover:bg-horizon/40 transition-colors"
                  >
                    <div className="relative aspect-[4/3] rounded-lg overflow-hidden mb-2 border border-champagne/10">
                      <Image
                        src={country.heroImage}
                        alt={country.name}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                        sizes="120px"
                      />
                      <div className="absolute inset-0 bg-midnight/30 group-hover:bg-transparent transition-colors" />
                    </div>
                    <div className="text-xs font-semibold text-cloud group-hover:text-champagne transition-colors">
                      {country.name}
                    </div>
                    <div className="text-[11px] text-mist/80 truncate">{country.city}</div>
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link href="/countries" className="hover:text-cloud transition-colors">
            All Visas
          </Link>

          <Link href="/tools/eligibility-checker" className="hover:text-cloud transition-colors">
            Eligibility Quiz
          </Link>

          <Link href="/tools/document-checklist" className="hover:text-cloud transition-colors">
            Checklist Tool
          </Link>

          <Link href="/tools/processing-time" className="hover:text-cloud transition-colors">
            Timelines
          </Link>

          <Link href="/about" className="hover:text-cloud transition-colors">
            About
          </Link>

          <Link href="/contact" className="hover:text-cloud transition-colors">
            Contact
          </Link>
        </nav>

        {/* Desktop CTA Pill */}
        <div className="hidden lg:flex items-center gap-4">
          <a
            href={buildWhatsAppLink({ type: "quote" })}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 rounded-full bg-coral hover:bg-coral/90 text-white font-medium text-sm transition-all shadow-lg hover:shadow-coral/20 hover:-translate-y-0.5 active:translate-y-0 flex items-center gap-2"
          >
            <span>Get a Quote</span>
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 text-cloud hover:text-champagne transition-colors"
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Full-Screen Overlay Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 top-[65px] bg-midnight/98 backdrop-blur-2xl z-40 px-6 py-8 flex flex-col justify-between overflow-y-auto">
          <div className="space-y-6">
            <div className="border-b border-champagne/10 pb-4">
              <span className="text-xs tracking-wider uppercase text-champagne/80 font-mono">
                Destinations
              </span>
              <div className="grid grid-cols-2 gap-3 mt-3">
                {Object.values(countries).map((c) => (
                  <Link
                    key={c.slug}
                    href={`/countries/${c.slug}`}
                    onClick={() => setMobileMenuOpen(false)}
                    className="p-3 rounded-xl bg-horizon/20 border border-champagne/10 text-cloud hover:text-champagne text-sm font-medium"
                  >
                    {c.name}
                  </Link>
                ))}
              </div>
            </div>

            <div className="space-y-4 text-lg font-medium text-cloud">
              <div>
                <Link
                  href="/countries"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block hover:text-champagne"
                >
                  All Countries & Visas
                </Link>
              </div>
              <div>
                <Link
                  href="/tools/eligibility-checker"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block hover:text-champagne"
                >
                  Eligibility Checker Quiz
                </Link>
              </div>
              <div>
                <Link
                  href="/tools/document-checklist"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block hover:text-champagne"
                >
                  Document Checklist Generator
                </Link>
              </div>
              <div>
                <Link
                  href="/tools/processing-time"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block hover:text-champagne"
                >
                  Processing Time Estimator
                </Link>
              </div>
              <div>
                <Link
                  href="/services"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block hover:text-champagne"
                >
                  Beyond The Visa
                </Link>
              </div>
              <div>
                <Link
                  href="/about"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block hover:text-champagne"
                >
                  About Travel Solo
                </Link>
              </div>
              <div>
                <Link
                  href="/contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block hover:text-champagne"
                >
                  Dwarka Office & Contact
                </Link>
              </div>
              <div>
                <Link
                  href="/book"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block hover:text-champagne"
                >
                  Book 20-Min Consultation
                </Link>
              </div>
            </div>
          </div>

          <div className="pt-6 border-t border-champagne/10 space-y-3">
            <a
              href={buildWhatsAppLink({ type: "quote" })}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3.5 rounded-full bg-coral text-white font-medium text-center block shadow-lg"
            >
              Get a Quote on WhatsApp
            </a>
            <div className="text-center text-xs text-mist">
              Sector 12, Dwarka, New Delhi · Reply in working hours
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
