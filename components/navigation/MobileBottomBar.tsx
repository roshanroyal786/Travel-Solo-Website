"use client";

import React from "react";
import { buildWhatsAppLink } from "@/lib/whatsapp";
import { siteConfig } from "@/content/site";
import { MessageCircle, PhoneCall } from "lucide-react";

export default function MobileBottomBar() {
  return (
    <div className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-midnight/95 backdrop-blur-md border-t border-champagne/20 p-2.5 px-4 flex items-center gap-3">
      <a
        href={buildWhatsAppLink({ type: "quote" })}
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 py-3 px-4 rounded-xl bg-whatsapp hover:bg-whatsapp/90 text-white font-medium text-sm flex items-center justify-center gap-2 shadow-lg transition-transform active:scale-95"
      >
        <MessageCircle className="w-4 h-4 fill-white" />
        <span>WhatsApp Quote</span>
      </a>

      <a
        href={`tel:${siteConfig.phone}`}
        className="py-3 px-4 rounded-xl bg-horizon/70 hover:bg-horizon border border-champagne/20 text-cloud font-medium text-sm flex items-center justify-center gap-2 transition-transform active:scale-95"
      >
        <PhoneCall className="w-4 h-4 text-champagne" />
        <span>Call</span>
      </a>
    </div>
  );
}
