import React from "react";
import { siteConfig } from "@/content/site";

export default function ProofStatsSection() {
  return (
    <section className="py-20 bg-midnight border-t border-champagne/10 relative">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="p-10 lg:p-14 rounded-3xl bg-horizon/20 border border-champagne/20">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center divide-y lg:divide-y-0 lg:divide-x divide-champagne/10">
            <div className="pt-4 lg:pt-0">
              <div className="font-display text-4xl lg:text-6xl font-light text-cloud tabular-nums mb-2">
                {siteConfig.stats.clientsServed}
              </div>
              <div className="text-xs uppercase tracking-widest text-champagne font-mono font-medium">
                Clients Handled
              </div>
              <p className="text-[11px] text-mist/70 mt-1 max-w-[180px] mx-auto">
                Individual and family files across India
              </p>
            </div>

            <div className="pt-6 lg:pt-0">
              <div className="font-display text-4xl lg:text-6xl font-light text-champagne tabular-nums mb-2">
                {siteConfig.stats.successRate}*
              </div>
              <div className="text-xs uppercase tracking-widest text-cloud font-mono font-medium">
                Approval Rate
              </div>
              <p className="text-[11px] text-mist/70 mt-1 max-w-[180px] mx-auto">
                Based on filed documentation audits
              </p>
            </div>

            <div className="pt-6 lg:pt-0">
              <div className="font-display text-4xl lg:text-6xl font-light text-cloud tabular-nums mb-2">
                {siteConfig.stats.experienceYears} Years
              </div>
              <div className="text-xs uppercase tracking-widest text-champagne font-mono font-medium">
                Operational Track Record
              </div>
              <p className="text-[11px] text-mist/70 mt-1 max-w-[180px] mx-auto">
                Started individually, now a registered firm
              </p>
            </div>

            <div className="pt-6 lg:pt-0">
              <div className="font-display text-4xl lg:text-6xl font-light text-cloud tabular-nums mb-2">
                {siteConfig.stats.destinationsCount}
              </div>
              <div className="text-xs uppercase tracking-widest text-champagne font-mono font-medium">
                Focus Corridors
              </div>
              <p className="text-[11px] text-mist/70 mt-1 max-w-[180px] mx-auto">
                Deep expertise in specific embassies
              </p>
            </div>
          </div>

          <div className="text-center mt-10 pt-6 border-t border-champagne/10 text-xs text-mist/70">
            * <strong className="text-cloud">Basis of 98% statistic:</strong> {siteConfig.stats.successFootnote} We do not promise guaranteed outcomes. Every case is decided by embassy visa officers under current immigration laws.
          </div>
        </div>
      </div>
    </section>
  );
}
