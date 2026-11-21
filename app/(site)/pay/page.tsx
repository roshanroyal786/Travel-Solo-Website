"use client";

import React, { useState } from "react";
import Image from "next/image";
import type { Metadata } from "next";
import { siteConfig } from "@/content/site";
import { buildWhatsAppLink } from "@/lib/whatsapp";
import { Copy, Check, QrCode, ShieldCheck, AlertCircle, ArrowRight, MessageCircle } from "lucide-react";

export default function PayPage() {
  const [copiedKey, setCopiedKey] = useState<string | null>(null);
  const [proofSubmitted, setProofSubmitted] = useState(false);
  const [proofData, setProofData] = useState({
    fullName: "",
    whatsapp: "",
    quoteRef: "",
    utrNumber: "",
    amountPaid: "",
  });

  const copyToClipboard = (text: string, key: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2000);
  };

  const handleProofSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName: proofData.fullName,
          whatsapp: proofData.whatsapp,
          email: "payment@travelsolo.in",
          cityState: "India",
          destination: "Payment Verification",
          visaType: "Fee Remittance",
          shortNote: `Quote Ref: ${proofData.quoteRef} | UTR: ${proofData.utrNumber} | Amount: ${proofData.amountPaid}`,
          consent: true,
          type: "payment",
        }),
      });
      setProofSubmitted(true);
    } catch {
      alert("Submission error. Please send your UTR screenshot on WhatsApp.");
    }
  };

  const upiPayUrl = `upi://pay?pa=${encodeURIComponent(siteConfig.paymentDetails.upiId)}&pn=${encodeURIComponent(siteConfig.paymentDetails.accountName)}&cu=INR`;
  const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=240x240&data=${encodeURIComponent(upiPayUrl)}`;

  return (
    <div className="pt-32 pb-24 bg-midnight min-h-screen">
      <div className="max-w-4xl mx-auto px-6 space-y-12">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-horizon/40 border border-champagne/20 text-champagne text-xs font-mono uppercase">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Secure Direct Remittance</span>
          </div>
          <h1 className="font-display font-light text-4xl sm:text-5xl text-cloud leading-tight">
            Consultation & Service <span className="italic text-champagne font-normal">Payment.</span>
          </h1>
          <p className="text-mist text-base">
            Pay the exact amount quoted in your written WhatsApp agreement. We accept direct UPI and NEFT/RTGS bank transfers only. Zero card surcharge.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          {/* UPI Section */}
          <div className="p-8 rounded-3xl glass-card border border-champagne/20 space-y-6 text-center">
            <div className="flex items-center justify-between border-b border-champagne/15 pb-4">
              <span className="font-mono text-xs uppercase tracking-widest text-champagne font-semibold">
                Option 1: Instant UPI
              </span>
              <span className="text-[11px] font-mono text-mist">Any UPI App</span>
            </div>

            {/* QR Code Container */}
            <div className="w-[200px] h-[200px] mx-auto p-3 rounded-2xl bg-white border border-champagne/30 shadow-2xl flex items-center justify-center relative">
              <Image
                src={qrUrl}
                alt="UPI Payment QR Code"
                width={180}
                height={180}
                className="rounded-lg"
                unoptimized
              />
            </div>

            <div className="space-y-2">
              <div className="text-xs text-mist">Verified UPI ID:</div>
              <div className="flex items-center justify-center gap-2">
                <code className="text-sm font-mono font-bold text-champagne bg-midnight/80 px-3 py-1.5 rounded-lg border border-champagne/20">
                  {siteConfig.paymentDetails.upiId}
                </code>
                <button
                  onClick={() => copyToClipboard(siteConfig.paymentDetails.upiId, "upi")}
                  className="p-2 rounded-lg bg-horizon/50 hover:bg-horizon border border-champagne/20 text-cloud transition-colors"
                  aria-label="Copy UPI ID"
                >
                  {copiedKey === "upi" ? <Check className="w-4 h-4 text-whatsapp" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {/* Mobile UPI Deep-link Button */}
            <div className="pt-2">
              <a
                href={upiPayUrl}
                className="w-full py-3.5 rounded-full bg-coral hover:bg-coral/90 text-white font-medium text-xs flex items-center justify-center gap-2 shadow-lg sm:hidden"
              >
                <span>Pay with Installed UPI App</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Bank Transfer Details */}
          <div className="p-8 rounded-3xl glass-card border border-champagne/20 space-y-6">
            <div className="flex items-center justify-between border-b border-champagne/15 pb-4">
              <span className="font-mono text-xs uppercase tracking-widest text-champagne font-semibold">
                Option 2: Direct NEFT / RTGS
              </span>
              <span className="text-[11px] font-mono text-mist">Current Account</span>
            </div>

            <div className="space-y-4 text-xs">
              <div>
                <span className="text-mist block mb-1">Beneficiary Account Name</span>
                <div className="flex items-center justify-between bg-midnight/80 p-2.5 rounded-xl border border-white/5">
                  <span className="font-medium text-cloud">{siteConfig.paymentDetails.accountName}</span>
                  <button
                    onClick={() => copyToClipboard(siteConfig.paymentDetails.accountName, "name")}
                    className="text-mist hover:text-champagne"
                  >
                    {copiedKey === "name" ? <Check className="w-3.5 h-3.5 text-whatsapp" /> : <Copy className="w-3.5 h-3.5" />}
                  </button>
                </div>
              </div>

              <div>
                <span className="text-mist block mb-1">Bank Name</span>
                <div className="bg-midnight/80 p-2.5 rounded-xl border border-white/5 font-medium text-cloud">
                  {siteConfig.paymentDetails.bankName}
                </div>
              </div>

              <div>
                <span className="text-mist block mb-1">Account Number</span>
                <div className="flex items-center justify-between bg-midnight/80 p-2.5 rounded-xl border border-white/5">
                  <span className="font-mono font-bold text-champagne">{siteConfig.paymentDetails.accountNumber}</span>
                  <button
                    onClick={() => copyToClipboard(siteConfig.paymentDetails.accountNumber, "acc")}
                    className="text-mist hover:text-champagne"
                  >
                    {copiedKey === "acc" ? <Check className="w-3.5 h-3.5 text-whatsapp" /> : <Copy className="w-3.5 h-3.5" />}
                  </button>
                </div>
              </div>

              <div>
                <span className="text-mist block mb-1">IFSC Code</span>
                <div className="flex items-center justify-between bg-midnight/80 p-2.5 rounded-xl border border-white/5">
                  <span className="font-mono font-bold text-champagne">{siteConfig.paymentDetails.ifsc}</span>
                  <button
                    onClick={() => copyToClipboard(siteConfig.paymentDetails.ifsc, "ifsc")}
                    className="text-mist hover:text-champagne"
                  >
                    {copiedKey === "ifsc" ? <Check className="w-3.5 h-3.5 text-whatsapp" /> : <Copy className="w-3.5 h-3.5" />}
                  </button>
                </div>
              </div>

              <div>
                <span className="text-mist block mb-1">Branch</span>
                <div className="bg-midnight/80 p-2.5 rounded-xl border border-white/5 text-cloud">
                  {siteConfig.paymentDetails.branch}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Written Refund Policy Highlight */}
        <div className="p-6 sm:p-8 rounded-3xl bg-horizon/25 border border-champagne/25 space-y-3">
          <div className="flex items-center gap-2 text-champagne font-mono text-xs uppercase tracking-wider font-semibold">
            <ShieldCheck className="w-4 h-4" />
            <span>Guaranteed Refund Policy in Writing</span>
          </div>
          <h3 className="font-display text-xl text-cloud">
            100% Refund within 7 days · 50% Refund After
          </h3>
          <p className="text-mist text-xs sm:text-sm leading-relaxed">
            {siteConfig.refundPolicy.summary}
          </p>
        </div>

        {/* Payment Confirmation Submission Form */}
        <div className="p-8 sm:p-10 rounded-3xl glass-card border border-champagne/20 space-y-6">
          <div className="border-b border-champagne/15 pb-4">
            <h3 className="font-display text-2xl text-cloud">
              Submit Payment Reference (UTR)
            </h3>
            <p className="text-mist text-xs mt-1">
              Once you complete the transfer, paste your transaction reference or UTR below so our accounts desk in Dwarka can issue your tax invoice immediately.
            </p>
          </div>

          {!proofSubmitted ? (
            <form onSubmit={handleProofSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono uppercase tracking-widest text-champagne mb-1.5">
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={proofData.fullName}
                    onChange={(e) => setProofData({ ...proofData, fullName: e.target.value })}
                    className="w-full p-3 rounded-xl bg-midnight border border-champagne/20 text-cloud text-xs focus:outline-none focus:border-champagne"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase tracking-widest text-champagne mb-1.5">
                    WhatsApp Number *
                  </label>
                  <input
                    type="tel"
                    required
                    value={proofData.whatsapp}
                    onChange={(e) => setProofData({ ...proofData, whatsapp: e.target.value })}
                    className="w-full p-3 rounded-xl bg-midnight border border-champagne/20 text-cloud text-xs focus:outline-none focus:border-champagne"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs font-mono uppercase tracking-widest text-champagne mb-1.5">
                    Quote Reference Code
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. TS-2026-CZ-09"
                    value={proofData.quoteRef}
                    onChange={(e) => setProofData({ ...proofData, quoteRef: e.target.value })}
                    className="w-full p-3 rounded-xl bg-midnight border border-champagne/20 text-cloud text-xs focus:outline-none focus:border-champagne"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase tracking-widest text-champagne mb-1.5">
                    12-Digit UTR / Transaction No. *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. 432198765432"
                    value={proofData.utrNumber}
                    onChange={(e) => setProofData({ ...proofData, utrNumber: e.target.value })}
                    className="w-full p-3 rounded-xl bg-midnight border border-champagne/20 text-cloud text-xs focus:outline-none focus:border-champagne"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase tracking-widest text-champagne mb-1.5">
                    Amount Paid (INR) *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. ₹15,000"
                    value={proofData.amountPaid}
                    onChange={(e) => setProofData({ ...proofData, amountPaid: e.target.value })}
                    className="w-full p-3 rounded-xl bg-midnight border border-champagne/20 text-cloud text-xs focus:outline-none focus:border-champagne"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-3.5 rounded-full bg-coral hover:bg-coral/90 text-white font-semibold text-xs flex items-center justify-center gap-2 shadow-lg transition-transform active:scale-95 cursor-pointer"
              >
                <span>Verify Payment & Receive Official Invoice</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          ) : (
            <div className="p-6 rounded-2xl bg-midnight/80 border border-whatsapp/40 text-center space-y-2">
              <Check className="w-8 h-8 text-whatsapp mx-auto" />
              <div className="text-base font-semibold text-cloud">Payment Reference Logged</div>
              <p className="text-xs text-mist">
                Our accounts desk has received your UTR number. We will message your official receipt on WhatsApp within 2 hours.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
