"use client";

import React from "react";
import { buildWhatsAppLink } from "@/lib/whatsapp";
import { siteConfig } from "@/content/site";
import { MessageCircle, PhoneCall, Sparkles } from "lucide-react";
import Link from "next/link";

export default function MobileBottomBar() {
  return (
    <div className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-sky-100 p-2.5 px-4 flex items-center gap-2.5 shadow-[0_-4px_20px_rgba(0,0,0,0.06)]">
      <Link
        href="/tools/eligibility-checker"
        className="py-3 px-3.5 rounded-2xl bg-sky-50 hover:bg-sky-100 border border-sky-200 text-[#005A9C] font-semibold text-xs flex items-center justify-center gap-1.5 transition-transform active:scale-95 shadow-2xs"
      >
        <Sparkles className="w-3.5 h-3.5 text-sky-600" />
        <span>Quiz (60s)</span>
      </Link>

      <a
        href={buildWhatsAppLink({ type: "quote" })}
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 py-3 px-4 rounded-2xl bg-[#005A9C] hover:bg-[#00487C] text-white font-semibold text-xs flex items-center justify-center gap-2 shadow-sm transition-transform active:scale-95"
      >
        <MessageCircle className="w-4 h-4 fill-white text-[#005A9C]" />
        <span>WhatsApp Quote</span>
      </a>

      <a
        href={`tel:${siteConfig.phone}`}
        className="py-3 px-3.5 rounded-2xl bg-slate-50 hover:bg-slate-100 border border-slate-200 text-slate-800 font-semibold text-xs flex items-center justify-center gap-1.5 transition-transform active:scale-95 shadow-2xs"
        aria-label="Call Travel Solo"
      >
        <PhoneCall className="w-4 h-4 text-[#005A9C]" />
        <span>Call</span>
      </a>
    </div>
  );
}
