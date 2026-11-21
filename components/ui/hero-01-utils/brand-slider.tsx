"use client";

import React from "react";
import { Marquee } from "@/components/ui/hero-01-utils/marquee";
import { motion } from "motion/react";

export interface BrandList {
  image: string;
  name: string;
  lightimg: string;
}

export default function BrandSlider({ brandList }: { brandList: BrandList[] }) {
  return (
    <section className="relative z-10">
      <div className="py-6 md:py-10">
        <div className="mx-auto max-w-6xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.4, ease: "easeInOut" }}
            className="flex flex-col gap-3"
          >
            <div className="flex justify-center text-center py-3 md:py-4 relative">
              <div className="inline-flex items-center gap-2.5 px-6 py-2.5 rounded-full bg-slate-900/90 sm:bg-white/95 backdrop-blur-md border border-sky-400/50 sm:border-slate-300 shadow-[0_4px_24px_rgba(0,0,0,0.25)] sm:shadow-[0_4px_20px_rgba(0,90,156,0.12)] transition-all">
                <span className="w-2 h-2 rounded-full bg-sky-400 animate-ping shrink-0" />
                <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-white sm:text-slate-900 drop-shadow-xs whitespace-nowrap">
                  Direct Consular Filings · 5 Specialized Global Hubs · Zero Sub-Agents
                </span>
              </div>
            </div>
            {brandList && brandList.length > 0 && (
              <div className="py-4">
                <Marquee pauseOnHover className="[--duration:24s] p-0">
                  {brandList.map((brand, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-3 px-6 py-2.5 rounded-full bg-white/80 border border-slate-200/80 shadow-xs hover:border-sky-300 transition-all mx-3"
                    >
                      <img
                        src={brand.image}
                        alt={brand.name}
                        className="w-6 h-6 object-contain"
                      />
                      <span className="text-xs font-semibold text-slate-700 whitespace-nowrap">
                        {brand.name}
                      </span>
                    </div>
                  ))}
                </Marquee>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
export { BrandSlider };
