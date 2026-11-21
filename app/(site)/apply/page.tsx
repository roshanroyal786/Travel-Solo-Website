"use client";

import React, { useState } from "react";
import Link from "next/link";
import { countries } from "@/content/countries";
import { buildWhatsAppLink } from "@/lib/whatsapp";
import { ShieldCheck, MessageCircle, Calendar, CheckCircle2, AlertCircle, Upload, ArrowRight } from "lucide-react";

export default function ApplyPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    whatsapp: "",
    email: "",
    cityState: "",
    destination: "czech-republic",
    visaType: "job",
    shortNote: "",
    targetDate: "",
    qualification: "bachelors",
    experience: "2-4",
    passportStatus: "valid",
    previousRefusal: "none",
    honeypot: "",
    consent: false,
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [firstName, setFirstName] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    if (type === "checkbox") {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData((prev) => ({ ...prev, [name]: checked }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg("");

    if (!formData.fullName.trim()) {
      setErrorMsg("Please provide your full legal name.");
      return;
    }

    if (formData.whatsapp.replace(/\D/g, "").length < 10) {
      setErrorMsg("Please enter a valid 10-digit WhatsApp number.");
      return;
    }

    if (!formData.email.includes("@")) {
      setErrorMsg("Please provide a valid email address.");
      return;
    }

    if (!formData.consent) {
      setErrorMsg("You must consent to document review to submit.");
      return;
    }

    setLoading(true);

    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const json = await res.json();

      if (res.ok && json.success) {
        setFirstName(json.firstName || formData.fullName.split(" ")[0]);
        setSubmitted(true);
      } else {
        setErrorMsg(json.error || "Submission failed. Please message us directly on WhatsApp.");
      }
    } catch {
      setErrorMsg("Network error. Please use WhatsApp for instant submission.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="pt-32 pb-24 bg-midnight min-h-screen">
      <div className="max-w-[800px] mx-auto px-6">
        {!submitted ? (
          <div className="space-y-10">
            {/* Header */}
            <div className="text-center space-y-3">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-horizon/40 border border-champagne/20 text-champagne text-xs font-mono uppercase">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>Direct Case Intake</span>
              </div>
              <h1 className="font-display font-light text-4xl sm:text-5xl text-cloud leading-tight">
                Submit your profile for an <span className="italic text-champagne font-normal">honest audit.</span>
              </h1>
              <p className="text-mist text-base max-w-xl mx-auto">
                No salespeople. No pressure. Fill out your details below and a senior documentation consultant in Dwarka will review your file within a few working hours.
              </p>
            </div>

            {errorMsg && (
              <div className="p-4 rounded-2xl bg-coral/10 border border-coral/30 text-coral text-sm flex items-center gap-3">
                <AlertCircle className="w-5 h-5 shrink-0" />
                <span>{errorMsg}</span>
              </div>
            )}

            {/* Form */}
            <form onSubmit={handleSubmit} className="p-8 sm:p-10 rounded-3xl glass-card border border-champagne/20 space-y-6">
              {/* Honeypot field (hidden from genuine users) */}
              <input
                type="text"
                name="honeypot"
                value={formData.honeypot}
                onChange={handleChange}
                className="hidden"
                tabIndex={-1}
                autoComplete="off"
              />

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-mono uppercase tracking-widest text-champagne mb-2">
                    Full Legal Name *
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    required
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="As shown on your passport"
                    className="w-full p-3.5 rounded-xl bg-midnight border border-champagne/20 text-cloud text-sm focus:outline-none focus:border-champagne"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase tracking-widest text-champagne mb-2">
                    WhatsApp Number *
                  </label>
                  <input
                    type="tel"
                    name="whatsapp"
                    required
                    value={formData.whatsapp}
                    onChange={handleChange}
                    placeholder="+91 98765 43210"
                    className="w-full p-3.5 rounded-xl bg-midnight border border-champagne/20 text-cloud text-sm focus:outline-none focus:border-champagne"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-mono uppercase tracking-widest text-champagne mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="name@example.com"
                    className="w-full p-3.5 rounded-xl bg-midnight border border-champagne/20 text-cloud text-sm focus:outline-none focus:border-champagne"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase tracking-widest text-champagne mb-2">
                    Current City & State *
                  </label>
                  <input
                    type="text"
                    name="cityState"
                    required
                    value={formData.cityState}
                    onChange={handleChange}
                    placeholder="e.g. Pune, Maharashtra"
                    className="w-full p-3.5 rounded-xl bg-midnight border border-champagne/20 text-cloud text-sm focus:outline-none focus:border-champagne"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-mono uppercase tracking-widest text-champagne mb-2">
                    Destination Country *
                  </label>
                  <select
                    name="destination"
                    value={formData.destination}
                    onChange={handleChange}
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
                    Visa Purpose *
                  </label>
                  <select
                    name="visaType"
                    value={formData.visaType}
                    onChange={handleChange}
                    className="w-full p-3.5 rounded-xl bg-midnight border border-champagne/20 text-cloud text-sm focus:outline-none focus:border-champagne"
                  >
                    <option value="job">Work / Employment Pass</option>
                    <option value="study">Student / University Degree</option>
                    <option value="tourist">Tourist / Holiday eVisa</option>
                    <option value="business">Business / Commercial Meetings</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-mono uppercase tracking-widest text-champagne mb-2">
                    Highest Education
                  </label>
                  <select
                    name="qualification"
                    value={formData.qualification}
                    onChange={handleChange}
                    className="w-full p-3.5 rounded-xl bg-midnight border border-champagne/20 text-cloud text-sm focus:outline-none focus:border-champagne"
                  >
                    <option value="masters">Master's Degree / PhD</option>
                    <option value="bachelors">Bachelor's Degree</option>
                    <option value="diploma">Polytechnic / Diploma</option>
                    <option value="highschool">High School (10+2)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase tracking-widest text-champagne mb-2">
                    Years of Work Experience
                  </label>
                  <select
                    name="experience"
                    value={formData.experience}
                    onChange={handleChange}
                    className="w-full p-3.5 rounded-xl bg-midnight border border-champagne/20 text-cloud text-sm focus:outline-none focus:border-champagne"
                  >
                    <option value="5-plus">5+ Years</option>
                    <option value="2-4">2 to 4 Years</option>
                    <option value="0-2">0 to 2 Years / Fresh Graduate</option>
                    <option value="na">Not Applicable</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono uppercase tracking-widest text-champagne mb-2">
                  Target Course, Job Title, or Note
                </label>
                <textarea
                  name="shortNote"
                  rows={3}
                  value={formData.shortNote}
                  onChange={handleChange}
                  placeholder="Tell us briefly about your current role, planned university course, or specific questions."
                  className="w-full p-3.5 rounded-xl bg-midnight border border-champagne/20 text-cloud text-sm focus:outline-none focus:border-champagne"
                />
              </div>

              {/* Consent Checkbox */}
              <div className="p-4 rounded-xl bg-midnight/60 border border-white/5 space-y-2">
                <label className="flex items-start gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    name="consent"
                    checked={formData.consent}
                    onChange={handleChange}
                    className="mt-1 w-4 h-4 rounded border-champagne/30 text-coral focus:ring-coral"
                  />
                  <span className="text-xs text-mist leading-relaxed">
                    I understand that Travel Solo is an independent visa documentation consultancy registered in Dwarka, New Delhi. I agree that my details are submitted solely for case evaluation under the{" "}
                    <Link href="/legal/privacy" className="text-champagne underline">
                      Privacy Policy
                    </Link>
                    .
                  </span>
                </label>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-4 rounded-full bg-coral hover:bg-coral/90 text-white font-semibold text-sm transition-all shadow-xl hover:shadow-coral/25 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
              >
                {loading ? (
                  <span>Evaluating your profile...</span>
                ) : (
                  <>
                    <span>Submit Profile for Direct Audit</span>
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>

              <div className="text-center text-xs text-mist/70">
                Prefer immediate messaging?{" "}
                <a
                  href={buildWhatsAppLink({ type: "quote" })}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-champagne hover:underline font-mono"
                >
                  Chat with us on WhatsApp directly &rarr;
                </a>
              </div>
            </form>
          </div>
        ) : (
          /* Calm Confetti-Free Success Screen */
          <div className="p-10 sm:p-14 rounded-3xl glass-card border border-champagne/30 text-center space-y-6 animate-in fade-in zoom-in-95 duration-400">
            <div className="w-16 h-16 rounded-full bg-horizon/60 border border-champagne/40 flex items-center justify-center text-champagne mx-auto">
              <CheckCircle2 className="w-8 h-8 text-champagne" />
            </div>

            <div className="space-y-2">
              <h2 className="font-display text-3xl sm:text-4xl text-cloud">
                Thanks, {firstName}.
              </h2>
              <p className="text-mist text-base max-w-md mx-auto leading-relaxed">
                We have received your application file. A senior consultant in our Dwarka office will message you on WhatsApp within a few working hours with honest feedback and next steps.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-midnight/70 border border-champagne/15 text-xs text-mist max-w-md mx-auto">
              Response Commitment: Monday to Saturday, 10:00 AM – 7:00 PM IST.
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <a
                href={buildWhatsAppLink({ type: "quote" })}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-whatsapp hover:bg-whatsapp/90 text-white font-medium text-sm flex items-center justify-center gap-2 shadow-lg"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>Chat on WhatsApp Now</span>
              </a>

              <Link
                href="/book"
                className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-horizon/50 hover:bg-horizon/80 border border-champagne/20 text-cloud font-medium text-sm flex items-center justify-center gap-2"
              >
                <Calendar className="w-4 h-4 text-champagne" />
                <span>Book a Video Consultation</span>
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
