import React from "react";
import type { Metadata } from "next";
import { siteConfig } from "@/content/site";
import { buildWhatsAppLink } from "@/lib/whatsapp";
import { Calendar, ShieldCheck, Clock, MessageCircle, MapPin } from "lucide-react";

export const metadata: Metadata = {
  title: "Book a Free 20-Minute Visa Consultation",
  description: "Schedule a one-on-one video or phone consultation with a senior visa documentation specialist in Dwarka, Delhi.",
  alternates: {
    canonical: "/book",
  },
};

export default function BookPage() {
  return (
    <div className="pt-32 pb-24 bg-midnight min-h-screen">
      <div className="max-w-[1000px] mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-horizon/40 border border-champagne/20 text-champagne text-xs font-mono uppercase">
            <Calendar className="w-3.5 h-3.5" />
            <span>Direct Strategy Call</span>
          </div>
          <h1 className="font-display font-light text-4xl sm:text-5xl text-cloud leading-tight">
            Book a 20-Minute <span className="italic text-champagne font-normal">Consultation.</span>
          </h1>
          <p className="text-mist text-base">
            Discuss your case privately by video or phone with our lead documentation consultant in Dwarka. Zero charge, zero obligation.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Cal.com Embed Container */}
          <div className="lg:col-span-8 p-6 sm:p-8 rounded-3xl glass-card border border-champagne/25 min-h-[580px] flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center justify-between border-b border-champagne/15 pb-4">
                <div>
                  <h3 className="font-display text-xl text-cloud">
                    Free Visa Profile Evaluation
                  </h3>
                  <div className="text-xs text-champagne font-mono flex items-center gap-2 mt-1">
                    <Clock className="w-3.5 h-3.5" />
                    <span>20 Minutes · IST (India Standard Time)</span>
                  </div>
                </div>
                <div className="text-xs font-mono px-3 py-1 rounded-full bg-horizon/50 text-cloud border border-champagne/10">
                  Google Meet / Phone
                </div>
              </div>

              {/* Responsive Iframe Embed to Cal.com */}
              <div className="w-full h-[460px] rounded-2xl overflow-hidden bg-midnight/80 border border-white/5 relative">
                <iframe
                  src={siteConfig.calLink}
                  title="Cal.com Booking Embed"
                  className="w-full h-full border-0"
                />
              </div>
            </div>

            <div className="text-center pt-4 text-xs text-mist/70">
              Slots sync directly with our Delhi office calendar. If no time suits you, chat with us on WhatsApp for an on-demand slot.
            </div>
          </div>

          {/* Consultation Brief & Details (4 cols) */}
          <div className="lg:col-span-4 space-y-6">
            <div className="p-6 rounded-3xl glass-card border border-champagne/20 space-y-4">
              <h4 className="font-display text-lg text-cloud">
                What we cover in 20 minutes
              </h4>
              <ul className="space-y-3 text-xs text-mist leading-relaxed">
                <li className="flex items-start gap-2.5">
                  <span className="text-champagne font-bold">1.</span>
                  <span>We evaluate your original passport validity, travel intent, and education records.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-champagne font-bold">2.</span>
                  <span>We check if your destination requires apostille, court translations, or labor market vacancy tests.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-champagne font-bold">3.</span>
                  <span>We give you a candid timeline and written fee breakdown.</span>
                </li>
              </ul>
            </div>

            <div className="p-6 rounded-3xl bg-horizon/30 border border-champagne/25 space-y-4 text-center">
              <h4 className="font-display text-lg text-cloud">
                Need answers right away?
              </h4>
              <p className="text-mist text-xs leading-relaxed">
                Don't wait for a slot if your travel date or university deadline is pressing.
              </p>
              <a
                href={buildWhatsAppLink({ type: "quote" })}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 rounded-full bg-whatsapp hover:bg-whatsapp/90 text-white font-medium text-xs flex items-center justify-center gap-2 shadow-lg"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>Message on WhatsApp</span>
              </a>
            </div>

            <div className="p-5 rounded-2xl bg-midnight/70 border border-champagne/10 text-xs text-mist/80 space-y-2">
              <div className="flex items-center gap-2 text-cloud font-medium">
                <MapPin className="w-4 h-4 text-champagne" />
                <span>In-Person Office Meetings</span>
              </div>
              <p className="leading-relaxed">
                Our office is located at Plot 14, Sector 12 Dwarka, New Delhi. Walk-ins are welcomed with prior WhatsApp confirmation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
