"use client";

import React from "react";
import { buildWhatsAppLink } from "@/lib/whatsapp";
import { MessageCircle } from "lucide-react";

export default function FloatingWhatsApp() {
  return (
    <aside aria-label="WhatsApp quick chat" className="hidden lg:block fixed bottom-8 right-8 z-40">
      <a
        href={buildWhatsAppLink({ type: "quote" })}
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-pulse flex items-center gap-3 px-5 py-3.5 rounded-full bg-whatsapp hover:bg-[#1EBE5D] text-white shadow-2xl transition-all hover:scale-105 active:scale-95 group focus:outline-none focus:ring-4 focus:ring-whatsapp/30"
        aria-label="Direct WhatsApp consultation"
      >
        <MessageCircle className="w-6 h-6 fill-white text-white shrink-0" />
        <span className="font-semibold text-sm tracking-tight pr-1">Get a Quote</span>
      </a>
    </aside>
  );
}
