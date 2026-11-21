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
              <div className="flex items-center justify-center gap-4">
                <div className="hidden md:block h-px w-36 bg-gradient-to-r from-transparent via-slate-300 to-slate-400 opacity-60" />
                <p className="text-xs uppercase tracking-widest font-semibold text-slate-500 text-center">
                  Direct Consular Filings · 5 Specialized Global Hubs · Zero Sub-Agents
                </p>
                <div className="hidden md:block h-px w-36 bg-gradient-to-l from-transparent via-slate-300 to-slate-400 opacity-60" />
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
