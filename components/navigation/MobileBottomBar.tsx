"use client";

import React from "react";
import { buildWhatsAppLink } from "@/lib/whatsapp";
import { siteConfig } from "@/content/site";
import { MessageCircle, PhoneCall } from "lucide-react";

export default function MobileBottomBar() {
  return (
    <div className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-slate-200 p-2.5 px-4 flex items-center gap-3 shadow-lg">
      <a
        href={buildWhatsAppLink({ type: "quote" })}
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-medium text-sm flex items-center justify-center gap-2 shadow-sm transition-transform active:scale-95"
      >
        <MessageCircle className="w-4 h-4 fill-white text-emerald-600" />
        <span>WhatsApp Quote</span>
      </a>

      <a
        href={`tel:${siteConfig.phone}`}
        className="py-3 px-4 rounded-xl bg-slate-100 hover:bg-slate-200 border border-slate-200 text-slate-800 font-medium text-sm flex items-center justify-center gap-2 transition-transform active:scale-95 shadow-2xs"
      >
        <PhoneCall className="w-4 h-4 text-primary" />
        <span>Call</span>
      </a>
    </div>
  );
}
