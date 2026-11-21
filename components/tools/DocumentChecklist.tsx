"use client";

import React, { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { countries } from "@/content/countries";
import { checklistsData, ChecklistItem } from "@/content/checklists";
import { buildWhatsAppLink } from "@/lib/whatsapp";
import { jsPDF } from "jspdf";
import { CheckSquare, Square, Download, MessageCircle, Info, RefreshCw } from "lucide-react";

export default function DocumentChecklist() {
  const searchParams = useSearchParams();
  const initialCountry = searchParams?.get("country") || "czech-republic";
  const initialVisa = searchParams?.get("visa") || "job";

  const [selectedCountry, setSelectedCountry] = useState(initialCountry);
  const [selectedVisa, setSelectedVisa] = useState(initialVisa);
  const [checkedIds, setCheckedIds] = useState<Record<string, boolean>>({});

  const storageKey = `travelsolo_check_${selectedCountry}_${selectedVisa}`;

  useEffect(() => {
    try {
      const saved = localStorage.getItem(storageKey);
      if (saved) {
        setCheckedIds(JSON.parse(saved));
      } else {
        setCheckedIds({});
      }
    } catch {
      setCheckedIds({});
    }
  }, [selectedCountry, selectedVisa, storageKey]);

  const toggleItem = (id: string) => {
    const updated = { ...checkedIds, [id]: !checkedIds[id] };
    setCheckedIds(updated);
    try {
      localStorage.setItem(storageKey, JSON.stringify(updated));
    } catch {
      // Ignored
    }
  };

  const currentChecklist: ChecklistItem[] =
    checklistsData[selectedCountry]?.[selectedVisa] || [];

  const categories = ["Identity", "Purpose-specific", "Financial", "Supporting"] as const;

  const totalItems = currentChecklist.length;
  const completedCount = currentChecklist.filter((i) => checkedIds[i.id]).length;
  const pendingCount = totalItems - completedCount;

  // Generate Branded PDF using jsPDF
  const downloadPdf = () => {
    const doc = new jsPDF();
    const dateStr = new Date().toLocaleDateString("en-IN", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });

    const countryName = countries[selectedCountry]?.name || selectedCountry;

    // Header
    doc.setFont("helvetica", "bold");
    doc.setFontSize(18);
    doc.setTextColor(10, 16, 32);
    doc.text("Travel Solo - Visa Document Checklist", 14, 20);

    doc.setFontSize(10);
    doc.setFont("helvetica", "normal");
    doc.setTextColor(100, 110, 130);
    doc.text(`Sector 12, Dwarka, New Delhi | Generated on: ${dateStr}`, 14, 26);
    doc.text(`Destination: ${countryName} | Visa Category: ${selectedVisa.toUpperCase()}`, 14, 32);

    doc.setDrawColor(230, 196, 138);
    doc.setLineWidth(0.5);
    doc.line(14, 36, 196, 36);

    let y = 44;

    categories.forEach((cat) => {
      const items = currentChecklist.filter((item) => item.category === cat);
      if (items.length === 0) return;

      doc.setFont("helvetica", "bold");
      doc.setFontSize(12);
      doc.setTextColor(27, 58, 107);
      doc.text(cat.toUpperCase(), 14, y);
      y += 6;

      items.forEach((item) => {
        if (y > 270) {
          doc.addPage();
          y = 20;
        }

        const isChecked = checkedIds[item.id];
        doc.setFont("helvetica", "normal");
        doc.setFontSize(10);
        doc.setTextColor(isChecked ? 40 : 10, isChecked ? 160 : 16, isChecked ? 60 : 32);

        const checkMark = isChecked ? "[X] " : "[  ] ";
        doc.text(checkMark + item.name, 16, y);
        y += 5;

        doc.setFontSize(8.5);
        doc.setTextColor(120, 120, 120);
        const splitDesc = doc.splitTextToSize(`Why required: ${item.description}`, 170);
        doc.text(splitDesc, 22, y);
        y += splitDesc.length * 4 + 3;
      });

      y += 4;
    });

    // Footer notice
    if (y > 260) {
      doc.addPage();
      y = 20;
    }
    doc.setFontSize(8);
    doc.setTextColor(140, 140, 140);
    doc.text(
      "Notice: Requirements are subject to change by respective embassies. Verify your final file with Travel Solo.",
      14,
      y + 10
    );

    doc.save(`TravelSolo_${selectedCountry}_${selectedVisa}_checklist.pdf`);
  };

  return (
    <div className="max-w-4xl mx-auto px-6 py-12 space-y-8">
      {/* Selector Controls */}
      <div className="p-6 sm:p-8 rounded-3xl glass-card border border-champagne/20 space-y-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-mono uppercase tracking-widest text-champagne mb-2">
              Select Destination
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
        </div>

        {/* Progress & Actions Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-champagne/10">
          <div className="text-sm text-mist">
            Status:{" "}
            <strong className="text-champagne font-mono">
              {completedCount} of {totalItems}
            </strong>{" "}
            documents ready ({pendingCount} pending)
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={downloadPdf}
              className="px-4 py-2 rounded-full bg-horizon/60 hover:bg-horizon border border-champagne/20 text-cloud font-medium text-xs flex items-center gap-2 transition-colors cursor-pointer"
            >
              <Download className="w-3.5 h-3.5 text-champagne" />
              <span>Download PDF</span>
            </button>

            <a
              href={buildWhatsAppLink({
                type: "checklist",
                checklistSummary: {
                  country: countries[selectedCountry]?.name || selectedCountry,
                  visa: selectedVisa,
                  pendingCount,
                },
              })}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-full bg-whatsapp hover:bg-whatsapp/90 text-white font-medium text-xs flex items-center gap-2 transition-transform active:scale-95"
            >
              <MessageCircle className="w-3.5 h-3.5 fill-white" />
              <span>Send Pending to WhatsApp</span>
            </a>
          </div>
        </div>
      </div>

      {/* Grouped Checklist */}
      <div className="space-y-8">
        {categories.map((category) => {
          const items = currentChecklist.filter((i) => i.category === category);
          if (items.length === 0) return null;

          return (
            <div key={category} className="space-y-3">
              <h3 className="font-mono text-xs uppercase tracking-widest text-champagne font-semibold pl-2">
                {category} Documents
              </h3>

              <div className="space-y-3">
                {items.map((item) => {
                  const isChecked = checkedIds[item.id];
                  return (
                    <div
                      key={item.id}
                      onClick={() => toggleItem(item.id)}
                      className={`p-4 sm:p-5 rounded-2xl border transition-all duration-200 cursor-pointer flex items-start gap-4 ${
                        isChecked
                          ? "bg-horizon/30 border-whatsapp/40"
                          : "glass-card border-champagne/15 hover:border-champagne/30"
                      }`}
                    >
                      <button
                        type="button"
                        className="mt-0.5 text-champagne shrink-0 focus:outline-none"
                        aria-label={isChecked ? "Mark as pending" : "Mark as ready"}
                      >
                        {isChecked ? (
                          <CheckSquare className="w-5 h-5 text-whatsapp" />
                        ) : (
                          <Square className="w-5 h-5 text-mist/60" />
                        )}
                      </button>

                      <div className="flex-1 space-y-1">
                        <div className="flex items-center justify-between gap-2">
                          <span
                            className={`text-sm sm:text-base font-medium ${
                              isChecked ? "text-mist line-through" : "text-cloud"
                            }`}
                          >
                            {item.name}
                          </span>
                          {!item.verified && (
                            <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-horizon/60 text-champagne border border-champagne/20">
                              Confirm with us
                            </span>
                          )}
                        </div>
                        <p className="text-xs text-mist/80 leading-relaxed flex items-start gap-1.5">
                          <Info className="w-3.5 h-3.5 text-champagne/70 shrink-0 mt-0.5" />
                          <span>{item.description}</span>
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
