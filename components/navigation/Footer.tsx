import React from "react";
import Link from "next/link";
import { siteConfig } from "@/content/site";
import { countries } from "@/content/countries";
import { Compass, MapPin, Phone, Mail, ShieldCheck } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-50 border-t border-slate-200 text-slate-600 text-sm pt-16 pb-24 lg:pb-12">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          {/* Brand & Office */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="flex items-center gap-2 group">
              <div className="w-8 h-8 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center text-primary">
                <Compass className="w-4 h-4 text-primary" />
              </div>
              <span className="font-display text-2xl font-normal text-slate-900">
                Travel <span className="italic text-primary">Solo</span>
              </span>
            </Link>

            <p className="text-slate-600 text-sm max-w-sm leading-relaxed">
              Direct visa consultancy in Dwarka, New Delhi. No sub-agents, no bloated fees. You talk with the person preparing and tracking your file from first consultation to embassy decision.
            </p>

            <div className="space-y-2 pt-2 text-xs text-slate-600">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                <span>
                  {siteConfig.address.line1}, {siteConfig.address.city}, {siteConfig.address.state} - {siteConfig.address.pincode}
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-primary shrink-0" />
                <a href={`tel:${siteConfig.phone}`} className="hover:text-primary transition-colors font-medium">
                  {siteConfig.phone}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-primary shrink-0" />
                <a href={`mailto:${siteConfig.email}`} className="hover:text-primary transition-colors font-medium">
                  {siteConfig.email}
                </a>
              </div>
            </div>

            <div className="pt-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-white border border-slate-200 text-[11px] text-slate-700 font-medium shadow-2xs">
                <ShieldCheck className="w-3.5 h-3.5 text-primary" />
                Registration No: {siteConfig.registrationNumber}
              </span>
            </div>
          </div>

          {/* Destinations */}
          <div className="space-y-3">
            <h4 className="font-semibold text-slate-900 text-xs tracking-wider uppercase font-mono">
              Destinations
            </h4>
            <ul className="space-y-2 text-xs">
              {Object.values(countries).map((country) => (
                <li key={country.slug}>
                  <Link
                    href={`/countries/${country.slug}`}
                    className="hover:text-primary transition-colors"
                  >
                    {country.name} Visa
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/countries" className="text-primary font-semibold hover:underline">
                  View All Hubs &rarr;
                </Link>
              </li>
            </ul>
          </div>

          {/* Free Interactive Tools */}
          <div className="space-y-3">
            <h4 className="font-semibold text-slate-900 text-xs tracking-wider uppercase font-mono">
              Free Visa Tools
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/tools/eligibility-checker" className="hover:text-primary transition-colors">
                  Eligibility Checker
                </Link>
              </li>
              <li>
                <Link href="/tools/document-checklist" className="hover:text-primary transition-colors">
                  Document Checklist
                </Link>
              </li>
              <li>
                <Link href="/tools/processing-time" className="hover:text-primary transition-colors">
                  Processing Time Estimator
                </Link>
              </li>
              <li>
                <Link href="/apply" className="hover:text-primary transition-colors">
                  Online Application Form
                </Link>
              </li>
              <li>
                <Link href="/book" className="hover:text-primary transition-colors">
                  Book 20-Min Consultation
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal & Policies */}
          <div className="space-y-3">
            <h4 className="font-semibold text-slate-900 text-xs tracking-wider uppercase font-mono">
              Trust & Legal
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/legal/refund" className="hover:text-primary transition-colors">
                  Refund Policy (7-Day 100%)
                </Link>
              </li>
              <li>
                <Link href="/legal/terms" className="hover:text-primary transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/legal/privacy" className="hover:text-primary transition-colors">
                  Privacy Policy (DPDP Act)
                </Link>
              </li>
              <li>
                <Link href="/legal/disclaimer" className="hover:text-primary transition-colors">
                  Independent Consultancy Notice
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-primary transition-colors">
                  Why Travel Solo
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Footnote & Disclaimer */}
        <div className="border-t border-slate-200 pt-8 space-y-3 text-xs text-slate-500">
          <p className="leading-relaxed">
            <strong className="text-slate-800 font-semibold">Important Legal Disclaimer:</strong> {siteConfig.disclaimer}
          </p>
          <p className="text-[11px] leading-relaxed">
            * 98% Success Rate: {siteConfig.stats.successFootnote} 257+ represents verified individual and family client documentation files processed across our focus destinations between November 2021 and November 2026.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-between pt-4 border-t border-slate-200 gap-3 text-[11px] text-slate-400">
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
