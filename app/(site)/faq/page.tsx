import React from "react";
import type { Metadata } from "next";
import { generalFaqs } from "@/content/faqs";
import { generateFaqSchema } from "@/lib/seo";
import { buildWhatsAppLink } from "@/lib/whatsapp";
import { HelpCircle, MessageCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Frequently Asked Questions | Travel Solo Visa Consultancy",
  description: "Find clear, honest answers regarding our visa consultancy fees, 7-day refund guarantee, processing timelines, and embassy submission procedures.",
  alternates: {
    canonical: "/faq",
  },
};

export default function FaqPage() {
  const faqSchema = generateFaqSchema(generalFaqs);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="pt-32 pb-24 bg-midnight min-h-screen">
        <div className="max-w-[960px] mx-auto px-6 space-y-12">
          {/* Header */}
          <div className="text-center space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-horizon/40 border border-champagne/20 text-champagne text-xs font-mono uppercase">
              <HelpCircle className="w-3.5 h-3.5" />
              <span>Clarity & Policies</span>
            </div>
            <h1 className="font-display font-light text-4xl sm:text-5xl text-cloud leading-tight">
              Frequently Asked <span className="italic text-champagne font-normal">Questions.</span>
            </h1>
            <p className="text-mist text-base max-w-xl mx-auto">
              Everything you need to know about our fees, written refund policies, and direct filing workflow.
            </p>
          </div>

          {/* FAQ Accordion / Cards List */}
          <div className="space-y-4">
            {generalFaqs.map((faq, idx) => (
              <div
                key={idx}
                className="p-6 sm:p-8 rounded-3xl glass-card border border-champagne/15 space-y-3"
              >
                <h2 className="font-display text-xl sm:text-2xl text-cloud">
                  {faq.q}
                </h2>
                <p className="text-mist text-sm sm:text-base leading-relaxed">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>

          {/* Help Banner */}
          <div className="p-8 rounded-3xl bg-horizon/30 border border-champagne/25 text-center space-y-4">
            <h3 className="font-display text-2xl text-cloud">
              Still have an unanswered question?
            </h3>
            <p className="text-mist text-sm max-w-md mx-auto">
              Every applicant has a unique situation. Send us a message on WhatsApp and we will review your specific scenario.
            </p>
            <div className="pt-2">
              <a
                href={buildWhatsAppLink({ type: "quote" })}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-coral hover:bg-coral/90 text-white font-medium text-xs shadow-lg"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>Ask on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
