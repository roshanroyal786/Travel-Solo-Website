"use client";

import React, { useState } from "react";
import Link from "next/link";
import { generalFaqs } from "@/content/faqs";
import { ChevronDown, HelpCircle } from "lucide-react";

export default function HomeFaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="py-24 bg-midnight/90 border-t border-champagne/10 relative">
      <div className="max-w-[960px] mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-horizon/40 border border-champagne/15 text-champagne text-xs font-mono uppercase mb-4">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Common Questions</span>
          </div>
          <h2 className="font-display font-light text-3xl sm:text-5xl text-cloud leading-tight mb-4">
            Straight answers to <span className="italic text-champagne font-normal">hard questions.</span>
          </h2>
          <p className="text-mist text-base">
            No evasive corporate jargon. Here is how we run our consultancy, what we charge, and what we guarantee.
          </p>
        </div>

        <div className="space-y-4">
          {generalFaqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={faq.q}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? "bg-horizon/25 border-champagne/30"
                    : "glass-card border-champagne/10 hover:border-champagne/20"
                }`}
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="font-display text-lg font-normal text-cloud">
                    {faq.q}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full border border-champagne/20 flex items-center justify-center text-champagne shrink-0 transition-transform duration-200 ${
                      isOpen ? "rotate-180 bg-champagne text-midnight" : ""
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-mist text-sm leading-relaxed border-t border-champagne/10">
                    <p>{faq.a}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="text-center mt-12 text-sm text-mist">
          Have a specific question about your case?{" "}
          <Link href="/contact" className="text-champagne font-medium hover:underline">
            Talk to our team in Dwarka &rarr;
          </Link>
        </div>
      </div>
    </section>
  );
}
