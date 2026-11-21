import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/content/site";
import { buildWhatsAppLink } from "@/lib/whatsapp";
import { MapPin, Phone, Mail, Clock, MessageCircle, ShieldCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact Travel Solo | Visa Consultant in Dwarka, Delhi",
  description: "Get in touch with Travel Solo in Sector 12 Dwarka, New Delhi. Direct WhatsApp, phone, email, and consultation booking.",
  alternates: {
    canonical: "/contact",
  },
};

export default function ContactPage() {
  return (
    <div className="pt-32 pb-24 bg-midnight min-h-screen">
      <div className="max-w-[1280px] mx-auto px-6 space-y-16">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-horizon/40 border border-champagne/20 text-champagne text-xs font-mono uppercase">
            <MapPin className="w-3.5 h-3.5" />
            <span>Dwarka, New Delhi</span>
          </div>
          <h1 className="font-display font-light text-4xl sm:text-5xl text-cloud leading-tight">
            Get in touch with <span className="italic text-champagne font-normal">our desk.</span>
          </h1>
          <p className="text-mist text-base">
            Reach out by WhatsApp, call our office, or visit us in Sector 12, Dwarka. We reply promptly during working hours.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Contact Details (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-8 rounded-3xl glass-card border border-champagne/20 space-y-6">
              <h2 className="font-display text-2xl text-cloud">
                Office Information
              </h2>

              <div className="space-y-5 text-sm">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-horizon/50 border border-champagne/20 flex items-center justify-center text-champagne shrink-0 mt-0.5">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-mono uppercase text-mist block">Registered Office</span>
                    <span className="text-cloud font-medium block mt-1">
                      {siteConfig.address.line1}
                    </span>
                    <span className="text-mist text-xs">
                      {siteConfig.address.city}, {siteConfig.address.state} - {siteConfig.address.pincode}, India
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-horizon/50 border border-champagne/20 flex items-center justify-center text-champagne shrink-0 mt-0.5">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-mono uppercase text-mist block">Direct Phone</span>
                    <a
                      href={`tel:${siteConfig.phone}`}
                      className="text-cloud font-medium block mt-1 hover:text-champagne transition-colors"
                    >
                      {siteConfig.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-horizon/50 border border-champagne/20 flex items-center justify-center text-champagne shrink-0 mt-0.5">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-mono uppercase text-mist block">Email Support</span>
                    <a
                      href={`mailto:${siteConfig.email}`}
                      className="text-cloud font-medium block mt-1 hover:text-champagne transition-colors"
                    >
                      {siteConfig.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-horizon/50 border border-champagne/20 flex items-center justify-center text-champagne shrink-0 mt-0.5">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-mono uppercase text-mist block">Operating Hours</span>
                    <span className="text-cloud font-medium block mt-1">
                      Monday to Saturday: 10:00 AM – 7:00 PM IST
                    </span>
                    <span className="text-mist text-xs">Sunday: Closed (Emergency WhatsApp support)</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-champagne/15">
                <a
                  href={buildWhatsAppLink({ type: "quote" })}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 rounded-full bg-whatsapp hover:bg-whatsapp/90 text-white font-medium text-xs flex items-center justify-center gap-2 shadow-lg"
                >
                  <MessageCircle className="w-4 h-4 fill-white" />
                  <span>Start WhatsApp Conversation</span>
                </a>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-horizon/20 border border-champagne/15 text-xs text-mist space-y-2">
              <div className="text-cloud font-medium flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-champagne" />
                <span>Visiting in person?</span>
              </div>
              <p>
                Our office is 5 minutes from Sector 12 Dwarka Metro Station (Blue Line). Please schedule an appointment on WhatsApp prior to visiting so our case consultant has your file ready.
              </p>
            </div>
          </div>

          {/* Interactive Map & Direct Actions (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="p-8 rounded-3xl glass-card border border-champagne/20 space-y-4">
              <h2 className="font-display text-2xl text-cloud">
                Office Location Map
              </h2>
              <div className="w-full h-[400px] rounded-2xl overflow-hidden bg-midnight/80 border border-champagne/10 relative">
                <iframe
                  title="Travel Solo Dwarka Office Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14013.298135835617!2d77.037194!3d28.59012!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1b285b0d0615%3A0x6b14620027f3b890!2sSector%2012%20Dwarka%2C%20Dwarka%2C%20Delhi%2C%20110075!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                  className="w-full h-full border-0"
                  loading="lazy"
                />
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-midnight/80 border border-champagne/15 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <div className="text-cloud font-medium text-sm">Need a comprehensive profile review?</div>
                <div className="text-xs text-mist">Submit our structured online form for a 2-hour turnaround.</div>
              </div>
              <Link
                href="/apply"
                className="px-6 py-2.5 rounded-full bg-coral hover:bg-coral/90 text-white font-medium text-xs whitespace-nowrap shadow-md"
              >
                Open Intake Form &rarr;
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
