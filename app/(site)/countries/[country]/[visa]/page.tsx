import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { countries } from "@/content/countries";
import { visaPages } from "@/content/visas";
import { checklistsData } from "@/content/checklists";
import { processingData } from "@/content/processing";
import { buildWhatsAppLink } from "@/lib/whatsapp";
import { generateBreadcrumbSchema, generateServiceSchema } from "@/lib/seo";
import {
  ShieldAlert,
  Clock,
  ClipboardList,
  CheckCircle2,
  AlertTriangle,
  ArrowRight,
  Briefcase,
  GraduationCap,
  ExternalLink,
  MessageCircle,
} from "lucide-react";

interface Props {
  params: Promise<{ country: string; visa: string }>;
}

export async function generateStaticParams() {
  const params: { country: string; visa: string }[] = [];
  const visaTypes = ["job", "study", "tourist", "business"];

  Object.keys(countries).forEach((country) => {
    visaTypes.forEach((visa) => {
      params.push({ country, visa });
    });
  });

  return params;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { country: slug, visa: visaType } = await params;
  const key = `${slug}-${visaType}`;
  const visaData = visaPages[key];
  const country = countries[slug];

  if (!visaData || !country) return {};

  return {
    title: visaData.seoTitle,
    description: visaData.seoDescription,
    alternates: {
      canonical: `/countries/${slug}/${visaType}`,
    },
  };
}

export default async function VisaDetailPage({ params }: Props) {
  const { country: slug, visa: visaType } = await params;
  const key = `${slug}-${visaType}`;
  const visaData = visaPages[key];
  const country = countries[slug];

  if (!visaData || !country) {
    notFound();
  }

  const checklistItems = checklistsData[slug]?.[visaType] || [];
  const processingStage = processingData[slug]?.[visaType];

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Destinations", url: "/countries" },
    { name: country.name, url: `/countries/${slug}` },
    { name: visaData.title, url: `/countries/${slug}/${visaType}` },
  ]);

  const serviceSchema = generateServiceSchema(visaData.title, visaData.seoDescription, country.name);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />

      <div className="pt-32 pb-24 bg-midnight min-h-screen">
        <div className="max-w-[1280px] mx-auto px-6 space-y-16">
          {/* Breadcrumbs Header */}
          <div className="space-y-4 max-w-4xl">
            <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-mist">
              <Link href="/" className="hover:text-champagne">Home</Link>
              <span>/</span>
              <Link href="/countries" className="hover:text-champagne">Destinations</Link>
              <span>/</span>
              <Link href={`/countries/${slug}`} className="hover:text-champagne">{country.name}</Link>
              <span>/</span>
              <span className="text-champagne">{visaData.badge}</span>
            </div>

            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-horizon/40 border border-champagne/20 text-champagne text-xs font-mono">
              <span>{country.name} · {visaData.badge}</span>
            </div>

            <h1 className="font-display font-light text-4xl sm:text-6xl text-cloud leading-[1.15]">
              {visaData.title}
            </h1>

            <p className="text-mist text-lg sm:text-xl leading-relaxed">
              {visaData.overview}
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-4">
              <a
                href={buildWhatsAppLink({ type: "quote", country: country.name, visaType: visaData.badge })}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3.5 rounded-full bg-coral hover:bg-coral/90 text-white font-medium text-sm flex items-center gap-2 shadow-xl transition-transform active:scale-95"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>Get a Quote on WhatsApp</span>
              </a>

              <Link
                href={`/tools/document-checklist?country=${slug}&visa=${visaType}`}
                className="px-6 py-3.5 rounded-full bg-horizon/40 hover:bg-horizon/70 border border-champagne/25 text-cloud font-medium text-sm flex items-center gap-2 transition-colors"
              >
                <ClipboardList className="w-4 h-4 text-champagne" />
                <span>Document Checklist</span>
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Main Content (8 cols) */}
            <div className="lg:col-span-8 space-y-14">
              {/* Who It Is For */}
              <section className="p-8 rounded-3xl glass-card border border-champagne/20 space-y-4">
                <h2 className="font-display text-2xl text-cloud">
                  Who is this visa for?
                </h2>
                <p className="text-mist text-base leading-relaxed">
                  {visaData.whoItsFor}
                </p>
              </section>

              {/* Special Extras: Work Placement or University Admission */}
              {visaData.extras === "job-placement" && (
                <section className="p-8 rounded-3xl bg-horizon/30 border border-champagne/30 space-y-4">
                  <div className="flex items-center gap-2.5 text-champagne font-mono text-xs uppercase tracking-wider font-semibold">
                    <Briefcase className="w-4 h-4" />
                    <span>Job Placement Support Included</span>
                  </div>
                  <h3 className="font-display text-2xl text-cloud">
                    Labour Market Registry & Vacancy Support
                  </h3>
                  <p className="text-mist text-sm leading-relaxed">
                    Work permits in {country.name} require legitimate employer sponsorship registered with national labour authorities. We audit the employer registration code, review the wage structure against statutory minimums, and ensure the contract matches immigration compliance standards.
                  </p>
                </section>
              )}

              {visaData.extras === "admission-sop" && (
                <section className="p-8 rounded-3xl bg-horizon/30 border border-champagne/30 space-y-4">
                  <div className="flex items-center gap-2.5 text-champagne font-mono text-xs uppercase tracking-wider font-semibold">
                    <GraduationCap className="w-4 h-4" />
                    <span>University Admission & SOP Guidance</span>
                  </div>
                  <h3 className="font-display text-2xl text-cloud">
                    Tailored Statement of Purpose (SOP) & Admission Audit
                  </h3>
                  <p className="text-mist text-sm leading-relaxed">
                    Visa officers spot copied, generic AI templates immediately. We craft authentic, narrative-driven Statements of Purpose grounded in your real academic history and career aspirations. <strong className="text-cloud">Please note: We do not offer scholarship acquisition services.</strong>
                  </p>
                </section>
              )}

              {/* Our 6-Step Process for this visa */}
              <section className="space-y-6">
                <div>
                  <span className="text-xs uppercase tracking-widest text-champagne font-mono font-semibold">
                    Step-by-Step Filing
                  </span>
                  <h2 className="font-display text-3xl font-light text-cloud mt-1">
                    How we prepare your application
                  </h2>
                </div>

                <div className="space-y-3">
                  {visaData.ourProcess.map((step, idx) => (
                    <div
                      key={idx}
                      className="p-5 rounded-2xl glass-card border border-champagne/15 flex items-start gap-4"
                    >
                      <span className="font-mono text-sm font-bold text-champagne bg-horizon/50 px-2.5 py-1 rounded-lg shrink-0">
                        0{idx + 1}
                      </span>
                      <p className="text-mist text-sm leading-relaxed pt-0.5">
                        {step}
                      </p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Common Reasons for Refusal */}
              <section className="p-8 rounded-3xl bg-midnight/80 border border-coral/30 space-y-6">
                <div className="flex items-center gap-2.5 text-coral text-xs font-mono uppercase tracking-wider font-semibold">
                  <AlertTriangle className="w-4 h-4" />
                  <span>Candid Immigration Risk Analysis</span>
                </div>

                <div>
                  <h2 className="font-display text-2xl sm:text-3xl font-light text-cloud">
                    Common reasons why {country.name} visas get rejected
                  </h2>
                  <p className="text-mist text-sm mt-1">
                    Most consultancies pretend rejections don't happen. We study rejection patterns so we can prevent them before submission:
                  </p>
                </div>

                <div className="space-y-3">
                  {visaData.refusalReasons.map((reason, idx) => (
                    <div
                      key={idx}
                      className="p-4 rounded-xl bg-horizon/20 border border-coral/15 flex items-start gap-3"
                    >
                      <div className="w-2 h-2 rounded-full bg-coral shrink-0 mt-2" />
                      <p className="text-mist text-xs sm:text-sm leading-relaxed">
                        {reason}
                      </p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Document Overview */}
              <section className="space-y-6">
                <div className="flex items-center justify-between">
                  <h2 className="font-display text-2xl text-cloud">
                    Core Document Requirements
                  </h2>
                  <Link
                    href={`/tools/document-checklist?country=${slug}&visa=${visaType}`}
                    className="text-xs text-champagne hover:underline font-mono"
                  >
                    Open Full Interactive Checklist &rarr;
                  </Link>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {checklistItems.slice(0, 6).map((item) => (
                    <div
                      key={item.id}
                      className="p-4 rounded-2xl glass-card border border-champagne/10 space-y-1"
                    >
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-champagne shrink-0" />
                        <span className="text-sm font-medium text-cloud">{item.name}</span>
                      </div>
                      <p className="text-xs text-mist/80 pl-6 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  ))}
                </div>
              </section>
            </div>

            {/* Sticky Sidebar (4 cols) */}
            <div className="lg:col-span-4 space-y-6 lg:sticky lg:top-28">
              {/* Timeline Card */}
              {processingStage && (
                <div className="p-6 rounded-3xl glass-card border border-champagne/20 space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-champagne text-xs font-mono uppercase tracking-wider font-semibold">
                      <Clock className="w-4 h-4" />
                      <span>Timeline Estimate</span>
                    </div>
                    <span className="text-[10px] font-mono text-mist">
                      Verified
                    </span>
                  </div>

                  <div className="space-y-2 text-xs">
                    <div className="flex justify-between py-1.5 border-b border-white/5">
                      <span className="text-mist">Document Prep</span>
                      <span className="text-cloud font-mono font-medium">
                        {processingStage.prepDays[0]}–{processingStage.prepDays[1]} Days
                      </span>
                    </div>
                    <div className="flex justify-between py-1.5 border-b border-white/5">
                      <span className="text-mist">Embassy Review</span>
                      <span className="text-cloud font-mono font-medium">
                        {processingStage.officialProcessingDays[0]}–{processingStage.officialProcessingDays[1]} Days
                      </span>
                    </div>
                    <div className="flex justify-between py-1.5">
                      <span className="text-mist">Seasonal Buffer</span>
                      <span className="text-cloud font-mono font-medium">
                        +{processingStage.bufferDays} Days
                      </span>
                    </div>
                  </div>

                  <div className="pt-2 text-[11px] text-mist/70 italic">
                    Estimate only. Set by embassy caseload.
                  </div>
                </div>
              )}

              {/* Consultation Card */}
              <div className="p-6 rounded-3xl bg-horizon/40 border border-champagne/30 space-y-5 text-center">
                <h3 className="font-display text-xl text-cloud">
                  Need an honest file review?
                </h3>
                <p className="text-mist text-xs leading-relaxed">
                  We don't charge to tell you whether your file is ready. Message us on WhatsApp for a straight answer.
                </p>
                <a
                  href={buildWhatsAppLink({ type: "quote", country: country.name, visaType: visaData.badge })}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 rounded-full bg-coral hover:bg-coral/90 text-white font-semibold text-xs flex items-center justify-center gap-2 shadow-lg"
                >
                  <MessageCircle className="w-4 h-4 fill-white" />
                  <span>Chat with Consultant</span>
                </a>
                <div className="text-[11px] text-mist/70">
                  Sector 12, Dwarka · Reply in working hours
                </div>
              </div>

              {/* Official Sources */}
              <div className="p-6 rounded-3xl bg-midnight/80 border border-champagne/15 space-y-3">
                <div className="flex items-center gap-2 text-champagne text-xs font-mono uppercase tracking-wider font-semibold">
                  <ShieldAlert className="w-4 h-4" />
                  <span>Sovereign Sources</span>
                </div>
                <div className="space-y-2">
                  {country.officialSources.map((src, i) => (
                    <a
                      key={i}
                      href={src.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between p-2 rounded-xl bg-horizon/20 hover:bg-horizon/40 text-xs text-mist hover:text-cloud transition-colors"
                    >
                      <span className="truncate">{src.label}</span>
                      <ExternalLink className="w-3 h-3 text-champagne shrink-0" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
