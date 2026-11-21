import React from "react";
import Link from "next/link";
import { buildWhatsAppLink } from "@/lib/whatsapp";
import { siteConfig } from "@/content/site";
import { ArrowRight, Calendar, MessageCircle, ShieldCheck } from "lucide-react";

export default function CtaBanner() {
  return (
    <section className="py-24 bg-midnight border-t border-champagne/15 relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-horizon/40 rounded-full blur-[140px]" />
        <div className="absolute top-1/3 left-1/3 w-[300px] h-[300px] bg-coral/10 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-[1280px] mx-auto px-6 relative z-10 text-center">
        <div className="max-w-3xl mx-auto space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-horizon/60 border border-champagne/25 text-champagne text-xs font-mono uppercase">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Dwarka, New Delhi · Pan-India Service</span>
          </div>

          <h2 className="font-display font-light text-4xl sm:text-6xl text-cloud leading-[1.1]">
            Where will you <span className="italic text-champagne font-normal">land next?</span>
          </h2>

          <p className="text-mist text-lg leading-relaxed max-w-xl mx-auto">
            Stop worrying about confusing embassy checklists and untrustworthy middlemen. Get a candid, transparent assessment of your file today.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <a
              href={buildWhatsAppLink({ type: "quote" })}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-coral hover:bg-coral/90 text-white font-semibold text-base transition-all shadow-xl hover:shadow-coral/25 hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-5 h-5 fill-white" />
              <span>Get a Quote on WhatsApp</span>
            </a>

            <Link
              href="/book"
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-horizon/50 hover:bg-horizon/80 border border-champagne/30 text-cloud font-semibold text-base transition-all hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center gap-2"
            >
              <Calendar className="w-5 h-5 text-champagne" />
              <span>Book 20-Min Call</span>
            </Link>
          </div>

          <div className="pt-6 text-xs text-mist/80 flex flex-wrap items-center justify-center gap-6">
            <span>✓ 100% refund in 7 days</span>
            <span>✓ Direct consultant in Dwarka</span>
            <span>✓ No hidden embassy markup</span>
          </div>
        </div>
      </div>
    </section>
  );
}
