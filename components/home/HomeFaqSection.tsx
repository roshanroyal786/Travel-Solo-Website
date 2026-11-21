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
    <section className="py-24 bg-slate-50/70 border-t border-slate-200 relative">
      <div className="max-w-[960px] mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-slate-200 text-primary text-xs font-mono uppercase mb-4 shadow-2xs">
            <HelpCircle className="w-3.5 h-3.5" />
            <span className="font-semibold text-slate-800">Common Questions</span>
          </div>
          <h2 className="font-display font-normal text-3xl sm:text-5xl text-slate-900 leading-tight mb-4">
            Straight answers to <span className="italic text-primary font-normal">hard questions.</span>
          </h2>
          <p className="text-slate-600 text-base">
            No evasive corporate jargon. Here is how we run our consultancy, what we charge, and what we guarantee.
          </p>
        </div>

        <div className="space-y-4">
          {generalFaqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={faq.q}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden bg-white ${
                  isOpen
                    ? "border-primary/40 shadow-sm"
                    : "border-slate-200/90 shadow-2xs hover:border-slate-300"
                }`}
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 focus:outline-none cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span className="font-display text-lg font-normal text-slate-900">
                    {faq.q}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full border border-slate-200 flex items-center justify-center text-slate-600 shrink-0 transition-transform duration-200 ${
                      isOpen ? "rotate-180 bg-primary text-white border-primary" : "bg-slate-50"
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-slate-600 text-sm leading-relaxed border-t border-slate-100">
                    <p>{faq.a}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="text-center mt-12 text-sm text-slate-600">
          Have a specific question about your case?{" "}
          <Link href="/contact" className="text-primary font-semibold hover:underline">
            Talk to our team in Dwarka &rarr;
          </Link>
        </div>
      </div>
    </section>
  );
}
