import React from "react";
import Link from "next/link";
import { siteConfig } from "@/content/site";
import { countries } from "@/content/countries";
import { Compass, MapPin, Phone, Mail, ExternalLink, ShieldCheck } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-midnight border-t border-champagne/15 text-mist text-sm pt-16 pb-24 lg:pb-12">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          {/* Brand & Office */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="flex items-center gap-2 group">
              <div className="w-8 h-8 rounded-full bg-horizon/60 border border-champagne/30 flex items-center justify-center text-champagne">
                <Compass className="w-4 h-4 text-champagne" />
              </div>
              <span className="font-display text-2xl font-light text-cloud">
                Travel <span className="italic text-champagne">Solo</span>
              </span>
            </Link>

            <p className="text-mist/90 text-sm max-w-sm leading-relaxed">
              Direct visa consultancy in Dwarka, New Delhi. No sub-agents, no bloated fees. You talk with the person preparing and tracking your file from first consultation to embassy decision.
            </p>

            <div className="space-y-2 pt-2 text-xs text-mist/80">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-champagne shrink-0 mt-0.5" />
                <span>
                  {siteConfig.address.line1}, {siteConfig.address.city}, {siteConfig.address.state} - {siteConfig.address.pincode}
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-champagne shrink-0" />
                <a href={`tel:${siteConfig.phone}`} className="hover:text-cloud transition-colors">
                  {siteConfig.phone}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-champagne shrink-0" />
                <a href={`mailto:${siteConfig.email}`} className="hover:text-cloud transition-colors">
                  {siteConfig.email}
                </a>
              </div>
            </div>

            <div className="pt-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-horizon/30 border border-champagne/15 text-[11px] text-champagne">
                <ShieldCheck className="w-3.5 h-3.5" />
                Registration No: {siteConfig.registrationNumber}
              </span>
            </div>
          </div>

          {/* Destinations */}
          <div className="space-y-3">
            <h4 className="font-semibold text-cloud text-xs tracking-wider uppercase font-mono">
              Destinations
            </h4>
            <ul className="space-y-2 text-xs">
              {Object.values(countries).map((country) => (
                <li key={country.slug}>
                  <Link
                    href={`/countries/${country.slug}`}
                    className="hover:text-champagne transition-colors"
                  >
                    {country.name} Visa
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/countries" className="text-champagne hover:underline">
                  View All Hubs &rarr;
                </Link>
              </li>
            </ul>
          </div>

          {/* Free Interactive Tools */}
          <div className="space-y-3">
            <h4 className="font-semibold text-cloud text-xs tracking-wider uppercase font-mono">
              Free Visa Tools
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/tools/eligibility-checker" className="hover:text-champagne transition-colors">
                  Eligibility Checker
                </Link>
              </li>
              <li>
                <Link href="/tools/document-checklist" className="hover:text-champagne transition-colors">
                  Document Checklist
                </Link>
              </li>
              <li>
                <Link href="/tools/processing-time" className="hover:text-champagne transition-colors">
                  Processing Time Estimator
                </Link>
              </li>
              <li>
                <Link href="/apply" className="hover:text-champagne transition-colors">
                  Online Application Form
                </Link>
              </li>
              <li>
                <Link href="/book" className="hover:text-champagne transition-colors">
                  Book 20-Min Consultation
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal & Policies */}
          <div className="space-y-3">
            <h4 className="font-semibold text-cloud text-xs tracking-wider uppercase font-mono">
              Trust & Legal
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/legal/refund" className="hover:text-champagne transition-colors">
                  Refund Policy (7-Day 100%)
                </Link>
              </li>
              <li>
                <Link href="/legal/terms" className="hover:text-champagne transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/legal/privacy" className="hover:text-champagne transition-colors">
                  Privacy Policy (DPDP Act)
                </Link>
              </li>
              <li>
                <Link href="/legal/disclaimer" className="hover:text-champagne transition-colors">
                  Independent Consultancy Notice
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-champagne transition-colors">
                  Why Travel Solo
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Footnote & Disclaimer */}
        <div className="border-t border-champagne/10 pt-8 space-y-3 text-xs text-mist/70">
          <p className="leading-relaxed">
            <strong className="text-cloud font-medium">Important Legal Disclaimer:</strong> {siteConfig.disclaimer}
          </p>
          <p className="text-[11px] leading-relaxed">
            * 98% Success Rate: {siteConfig.stats.successFootnote} 257+ represents verified individual and family client documentation files processed across our focus destinations between November 2021 and November 2026.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-between pt-4 border-t border-white/5 gap-3 text-[11px]">
            <span>
              &copy; {new Date().getFullYear()} {siteConfig.legalName}. All rights reserved.
            </span>
            <span>Registered in Dwarka, New Delhi, India.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
