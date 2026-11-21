import React from "react";
import Link from "next/link";
import { buildWhatsAppLink } from "@/lib/whatsapp";
import { Calendar, MessageCircle, ShieldCheck } from "lucide-react";

export default function CtaBanner() {
  return (
    <section className="py-24 bg-gradient-to-b from-sky-50/60 via-blue-50/30 to-white border-t border-slate-200 relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-sky-100/60 rounded-full blur-[140px]" />
      </div>

      <div className="max-w-[1280px] mx-auto px-6 relative z-10 text-center">
        <div className="max-w-3xl mx-auto space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-slate-200 text-primary text-xs font-mono uppercase shadow-2xs">
            <ShieldCheck className="w-3.5 h-3.5 text-primary" />
            <span className="font-semibold text-slate-800">Dwarka, New Delhi · Pan-India Service</span>
          </div>

          <h2 className="font-display font-normal text-4xl sm:text-6xl text-slate-900 leading-[1.1]">
            Where will you <span className="italic text-primary font-normal">land next?</span>
          </h2>

          <p className="text-slate-600 text-lg leading-relaxed max-w-xl mx-auto">
            Stop worrying about confusing embassy checklists and untrustworthy middlemen. Get a candid, transparent assessment of your file today.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <a
              href={buildWhatsAppLink({ type: "quote" })}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-primary hover:bg-primary/95 text-white font-semibold text-base transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-5 h-5 fill-white text-primary" />
              <span>Get a Quote on WhatsApp</span>
            </a>

            <Link
              href="/book"
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-white hover:bg-slate-50 border border-slate-200 text-slate-800 font-semibold text-base transition-all shadow-xs hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center gap-2"
            >
              <Calendar className="w-5 h-5 text-primary" />
              <span>Book 20-Min Call</span>
            </Link>
          </div>

          <div className="pt-6 text-xs text-slate-600 font-medium flex flex-wrap items-center justify-center gap-6">
            <span className="flex items-center gap-1.5"><span className="text-emerald-600 font-bold">✓</span> 100% refund in 7 days</span>
            <span className="flex items-center gap-1.5"><span className="text-emerald-600 font-bold">✓</span> Direct consultant in Dwarka</span>
            <span className="flex items-center gap-1.5"><span className="text-emerald-600 font-bold">✓</span> No hidden embassy markup</span>
          </div>
        </div>
      </div>
    </section>
  );
}
