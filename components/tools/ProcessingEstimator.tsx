"use client";

import React, { useState } from "react";
import { countries } from "@/content/countries";
import { processingData } from "@/content/processing";
import { buildWhatsAppLink } from "@/lib/whatsapp";
import { Calendar, Clock, AlertCircle, MessageCircle, CheckCircle2 } from "lucide-react";

export default function ProcessingEstimator() {
  const [selectedCountry, setSelectedCountry] = useState("czech-republic");
  const [selectedVisa, setSelectedVisa] = useState("job");
  const [submissionDate, setSubmissionDate] = useState(
    new Date().toISOString().split("T")[0]
  );

  const stageData = processingData[selectedCountry]?.[selectedVisa];

  const calculateDates = () => {
    if (!stageData) return null;

    const base = new Date(submissionDate);

    // Min days: minPrep + minWait + minOfficial
    const minDays =
      stageData.prepDays[0] +
      stageData.appointmentWaitDays[0] +
      stageData.officialProcessingDays[0];

    // Max days: maxPrep + maxWait + maxOfficial + buffer
    const maxDays =
      stageData.prepDays[1] +
      stageData.appointmentWaitDays[1] +
      stageData.officialProcessingDays[1] +
      stageData.bufferDays;

    // Likely days: average
    const likelyDays = Math.round((minDays + maxDays) / 2);

    const earliestDate = new Date(base);
    earliestDate.setDate(base.getDate() + minDays);

    const likelyDate = new Date(base);
    likelyDate.setDate(base.getDate() + likelyDays);

    const latestDate = new Date(base);
    latestDate.setDate(base.getDate() + maxDays);

    return {
      minDays,
      likelyDays,
      maxDays,
      earliestDate: earliestDate.toLocaleDateString("en-IN", {
        day: "numeric",
        month: "short",
        year: "numeric",
      }),
      likelyDate: likelyDate.toLocaleDateString("en-IN", {
        day: "numeric",
        month: "short",
        year: "numeric",
      }),
      latestDate: latestDate.toLocaleDateString("en-IN", {
        day: "numeric",
        month: "short",
        year: "numeric",
      }),
    };
  };

  const dates = calculateDates();

  return (
    <div className="max-w-4xl mx-auto px-6 py-12 space-y-10">
      {/* Controls Card */}
      <div className="p-6 sm:p-8 rounded-3xl glass-card border border-champagne/20 space-y-6">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div>
            <label className="block text-xs font-mono uppercase tracking-widest text-champagne mb-2">
              Destination
            </label>
            <select
              value={selectedCountry}
              onChange={(e) => setSelectedCountry(e.target.value)}
              className="w-full p-3.5 rounded-xl bg-midnight border border-champagne/20 text-cloud text-sm focus:outline-none focus:border-champagne"
            >
              {Object.values(countries).map((c) => (
                <option key={c.slug} value={c.slug}>
                  {c.name}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-xs font-mono uppercase tracking-widest text-champagne mb-2">
              Visa Category
            </label>
            <select
              value={selectedVisa}
              onChange={(e) => setSelectedVisa(e.target.value)}
              className="w-full p-3.5 rounded-xl bg-midnight border border-champagne/20 text-cloud text-sm focus:outline-none focus:border-champagne"
            >
              <option value="job">Work / Employment Pass</option>
              <option value="study">Student / Degree Pass</option>
              <option value="tourist">Tourist / Holiday eVisa</option>
              <option value="business">Business / Commercial Visa</option>
            </select>
          </div>

          <div>
            <label className="block text-xs font-mono uppercase tracking-widest text-champagne mb-2">
              Target Submission Date
            </label>
            <input
              type="date"
              value={submissionDate}
              onChange={(e) => setSubmissionDate(e.target.value)}
              className="w-full p-3 rounded-xl bg-midnight border border-champagne/20 text-cloud text-sm focus:outline-none focus:border-champagne"
            />
          </div>
        </div>
      </div>

      {/* Timeline Projection Display */}
      {dates && stageData ? (
        <div className="p-8 sm:p-10 rounded-3xl glass-card border border-champagne/30 space-y-8 animate-in fade-in duration-300">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-champagne/15 pb-6">
            <div>
              <span className="text-xs uppercase font-mono tracking-widest text-mist">
                Decision Forecast
              </span>
              <h3 className="font-display text-2xl sm:text-3xl text-cloud font-light mt-1">
                Estimated Timeline for {countries[selectedCountry]?.name}
              </h3>
            </div>
            <div className="px-4 py-1.5 rounded-full bg-horizon/40 border border-champagne/20 text-champagne font-mono text-xs">
              Last Verified: {stageData.lastUpdated}
            </div>
          </div>

          {/* Three Date Milestones */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-5 rounded-2xl bg-midnight/70 border border-champagne/15 text-center">
              <span className="text-[11px] font-mono uppercase text-mist">Earliest Decision</span>
              <div className="font-display text-2xl text-cloud mt-2">{dates.earliestDate}</div>
              <div className="text-xs text-mist/70 mt-1 font-mono">Approx {dates.minDays} calendar days</div>
            </div>

            <div className="p-5 rounded-2xl bg-horizon/40 border border-champagne/40 text-center shadow-lg">
              <span className="text-[11px] font-mono uppercase text-champagne font-bold">Likely Decision Date</span>
              <div className="font-display text-3xl text-champagne mt-2 font-normal">{dates.likelyDate}</div>
              <div className="text-xs text-cloud mt-1 font-mono">Approx {dates.likelyDays} calendar days</div>
            </div>

            <div className="p-5 rounded-2xl bg-midnight/70 border border-champagne/15 text-center">
              <span className="text-[11px] font-mono uppercase text-mist">Conservative Date</span>
              <div className="font-display text-2xl text-cloud mt-2">{dates.latestDate}</div>
              <div className="text-xs text-mist/70 mt-1 font-mono">Approx {dates.maxDays} calendar days</div>
            </div>
          </div>

          {/* Breakdown by Stage */}
          <div className="space-y-4 pt-4 border-t border-champagne/10">
            <h4 className="font-mono text-xs uppercase tracking-widest text-champagne font-semibold">
              Stage-by-Stage Breakdown
            </h4>

            <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 text-xs">
              <div className="p-4 rounded-xl bg-midnight/50 border border-white/5 space-y-1">
                <div className="text-mist">1. File Prep & Translation</div>
                <div className="text-cloud font-mono font-bold">
                  {stageData.prepDays[0]} – {stageData.prepDays[1]} Days
                </div>
              </div>

              <div className="p-4 rounded-xl bg-midnight/50 border border-white/5 space-y-1">
                <div className="text-mist">2. Appointment Backlog</div>
                <div className="text-cloud font-mono font-bold">
                  {stageData.appointmentWaitDays[0]} – {stageData.appointmentWaitDays[1]} Days
                </div>
              </div>

              <div className="p-4 rounded-xl bg-midnight/50 border border-white/5 space-y-1">
                <div className="text-mist">3. Official Embassy Review</div>
                <div className="text-cloud font-mono font-bold">
                  {stageData.officialProcessingDays[0]} – {stageData.officialProcessingDays[1]} Days
                </div>
              </div>

              <div className="p-4 rounded-xl bg-midnight/50 border border-white/5 space-y-1">
                <div className="text-mist">4. Seasonal Buffer</div>
                <div className="text-cloud font-mono font-bold">
                  +{stageData.bufferDays} Days
                </div>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-horizon/20 border border-champagne/10 text-xs text-mist leading-relaxed flex items-start gap-2.5">
              <AlertCircle className="w-4 h-4 text-champagne shrink-0 mt-0.5" />
              <span>
                <strong>Field Note:</strong> {stageData.notes}
              </span>
            </div>
          </div>

          {/* CTA */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-xs text-mist/70">
              * Estimate only. Actual processing times are set by embassy caseload and security reviews.
            </div>
            <a
              href={buildWhatsAppLink({
                type: "estimate",
                estimateSummary: {
                  country: countries[selectedCountry]?.name || selectedCountry,
                  visa: selectedVisa,
                  likelyDays: dates.likelyDays,
                },
              })}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-full bg-coral hover:bg-coral/90 text-white font-medium text-xs flex items-center gap-2 transition-transform active:scale-95"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>Discuss Timeline on WhatsApp</span>
            </a>
          </div>
        </div>
      ) : (
        <div className="p-8 rounded-3xl glass-card text-center text-mist text-sm">
          Estimates being updated, message us for current timeline.
        </div>
      )}
    </div>
  );
}
