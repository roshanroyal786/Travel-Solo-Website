import React from "react";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { countries } from "@/content/countries";
import { visaPages } from "@/content/visas";
import { buildWhatsAppLink } from "@/lib/whatsapp";
import { generateBreadcrumbSchema, generateFaqSchema } from "@/lib/seo";
import {
  MapPin,
  ExternalLink,
  Briefcase,
  GraduationCap,
  Compass,
  Building2,
  ArrowRight,
  ShieldAlert,
  Clock,
  ClipboardList,
} from "lucide-react";

interface Props {
  params: Promise<{ country: string }>;
}

export async function generateStaticParams() {
  return Object.keys(countries).map((country) => ({ country }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { country: slug } = await params;
  const country = countries[slug];
  if (!country) return {};

  return {
    title: `${country.name} Visa Consultant from India`,
    description: `Direct visa consultancy for ${country.name}. Work permits, student passes, tourist eVisas, and business invitations processed from Dwarka, Delhi.`,
    alternates: {
      canonical: `/countries/${slug}`,
    },
  };
}

export default async function CountryHubPage({ params }: Props) {
  const { country: slug } = await params;
  const country = countries[slug];

  if (!country) {
    notFound();
  }

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Destinations", url: "/countries" },
    { name: country.name, url: `/countries/${country.slug}` },
  ]);

  const countryFaqs = [
    {
      q: `Do Indian citizens need a visa to enter ${country.name}?`,
      a: `Yes. Indian passport holders require a valid visa, eVisa, or entry pass before traveling to ${country.name}. Requirements and processing times depend on whether you are traveling for tourism, employment, or academic study.`,
    },
    {
      q: `How long does it take to process a visa for ${country.name}?`,
      a: `Turnaround varies by category. Electronic tourist visas generally issue within 2 to 4 days, whereas formal long-stay work and student permits typically take 4 to 12 weeks depending on Ministry and police checks.`,
    },
    {
      q: `Can I apply through Travel Solo if I live outside Delhi?`,
      a: `Yes. We manage documentation, translation, and embassy appointment scheduling for clients across all Indian states through secure digital document verification and WhatsApp updates.`,
    },
    {
      q: `What happens if my visa for ${country.name} is refused?`,
      a: `If an application is refused, the embassy provides a formal decision notice stating specific grounds. We review the rejection letter free of charge to determine whether an administrative appeal or fresh submission with corrected evidence is viable.`,
    },
  ];

  const faqSchema = generateFaqSchema(countryFaqs);

  const visaCards = [
    { type: "job", title: "Work & Employment Pass", icon: Briefcase, desc: "Direct filing for employment cards, central vacancy checks, and employer contract vetting." },
    { type: "study", title: "Student Pass & University Degree", icon: GraduationCap, desc: "University admission support and custom SOP drafting. No scholarship hype." },
    { type: "tourist", title: "Tourist & Holiday eVisa", icon: Compass, desc: "Clean itineraries, hotel reservations, and airtight financial proof." },
    { type: "business", title: "Business & Trade Visa", icon: Building2, desc: "Commercial invitation verification, company deputation letters, and priority VFS slots." },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="pt-28 pb-24 bg-midnight min-h-screen">
        {/* Full-Bleed Hero Banner */}
        <div className="relative h-[480px] sm:h-[540px] w-full overflow-hidden mb-16">
          <Image
            src={country.heroImage}
            alt={country.heroAlt}
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-midnight via-midnight/60 to-midnight/30" />

          <div className="absolute inset-0 max-w-[1280px] mx-auto px-6 flex flex-col justify-end pb-12">
            <div className="space-y-4 max-w-3xl">
              <div className="flex flex-wrap items-center gap-3">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-midnight/70 backdrop-blur-md border border-champagne/25 text-champagne text-xs font-mono">
                  <MapPin className="w-3.5 h-3.5" />
                  {country.city}
                </span>
                <span className="text-xs text-mist font-mono">
                  Last Updated: {country.lastUpdated}
                </span>
              </div>

              <h1 className="font-display font-light text-4xl sm:text-6xl md:text-7xl text-cloud leading-tight">
                {country.name} <span className="italic text-champagne font-normal">Visa Hub.</span>
              </h1>

              <p className="text-mist text-lg sm:text-xl max-w-2xl font-normal leading-relaxed">
                {country.tagline}
              </p>

              <div className="pt-2">
                <a
                  href={buildWhatsAppLink({ type: "quote", country: country.name })}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-coral hover:bg-coral/90 text-white font-medium text-sm shadow-xl transition-transform active:scale-95"
                >
                  <span>Get a Quote for {country.name}</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-[1280px] mx-auto px-6 space-y-20">
          {/* Four Visa Categories Grid */}
          <section className="space-y-8">
            <div className="max-w-2xl">
              <span className="text-xs uppercase tracking-widest text-champagne font-mono font-semibold">
                Available Visa Pathways
              </span>
              <h2 className="font-display font-light text-3xl sm:text-4xl text-cloud mt-2">
                Choose your visa category for {country.name}.
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {visaCards.map((v) => {
                const Icon = v.icon;
                return (
                  <Link
                    key={v.type}
                    href={`/countries/${country.slug}/${v.type}`}
                    className="p-8 rounded-3xl glass-card hover:bg-horizon/30 border border-champagne/15 hover:border-champagne/35 transition-all group flex flex-col justify-between"
                  >
                    <div>
                      <div className="w-12 h-12 rounded-2xl bg-horizon/60 border border-champagne/20 flex items-center justify-center text-champagne mb-5 group-hover:scale-105 transition-transform">
                        <Icon className="w-6 h-6" />
                      </div>
                      <h3 className="font-display text-2xl text-cloud group-hover:text-champagne transition-colors mb-2">
                        {v.title}
                      </h3>
                      <p className="text-mist text-sm leading-relaxed mb-6">
                        {v.desc}
                      </p>
                    </div>

                    <div className="flex items-center gap-2 text-xs font-semibold text-coral group-hover:translate-x-1 transition-transform">
                      <span>View Requirements & Process</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </div>
                  </Link>
                );
              })}
            </div>
          </section>

          {/* Why Go Section (3 items) */}
          <section className="p-8 sm:p-12 rounded-3xl glass-card border border-champagne/20 space-y-8">
            <div className="max-w-2xl">
              <span className="text-xs uppercase tracking-widest text-champagne font-mono font-semibold">
                Strategic Advantages
              </span>
              <h2 className="font-display font-light text-3xl sm:text-4xl text-cloud mt-2">
                Why choose {country.name}?
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {country.whyGo.map((item, idx) => (
                <div key={idx} className="space-y-3">
                  <div className="font-mono text-xs text-champagne font-bold">
                    0{idx + 1}
                  </div>
                  <h3 className="font-display text-xl text-cloud">
                    {item.title}
                  </h3>
                  <p className="text-mist text-xs sm:text-sm leading-relaxed">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Fast Tools Banner Pre-set to this country */}
          <section className="p-8 rounded-3xl bg-horizon/25 border border-champagne/20 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-2">
              <h3 className="font-display text-2xl text-cloud">
                Ready to prepare your {country.name} file?
              </h3>
              <p className="text-mist text-sm">
                Generate a tickable checklist or compute estimated decision dates instantly.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <Link
                href={`/tools/document-checklist?country=${country.slug}`}
                className="px-5 py-2.5 rounded-full bg-horizon/60 hover:bg-horizon border border-champagne/20 text-cloud text-xs font-medium flex items-center gap-2"
              >
                <ClipboardList className="w-4 h-4 text-champagne" />
                <span>Checklist Generator</span>
              </Link>
              <Link
                href={`/tools/processing-time?country=${country.slug}`}
                className="px-5 py-2.5 rounded-full bg-horizon/60 hover:bg-horizon border border-champagne/20 text-cloud text-xs font-medium flex items-center gap-2"
              >
                <Clock className="w-4 h-4 text-champagne" />
                <span>Timeline Estimator</span>
              </Link>
            </div>
          </section>

          {/* Official Government Sources Box */}
          <section className="p-6 sm:p-8 rounded-2xl bg-midnight/80 border border-champagne/15 space-y-4">
            <div className="flex items-center justify-between flex-wrap gap-2">
              <div className="flex items-center gap-2 text-champagne text-xs font-mono uppercase tracking-wider font-semibold">
                <ShieldAlert className="w-4 h-4" />
                <span>Official Government Portals</span>
              </div>
              <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-horizon/50 text-champagne border border-champagne/20">
                Last checked: {country.lastUpdated}
              </span>
            </div>

            <p className="text-mist text-xs leading-relaxed">
              Visa regulations, required documentation fees, and consular policies change frequently. Always confirm your application specifics on the official sovereign authorities below before making travel commitments:
            </p>

            <div className="flex flex-wrap gap-3 pt-2">
              {country.officialSources.map((src, i) => (
                <a
                  key={i}
                  href={src.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-horizon/40 hover:bg-horizon/70 border border-champagne/10 text-cloud text-xs transition-colors"
                >
                  <span>{src.label}</span>
                  <ExternalLink className="w-3 h-3 text-champagne" />
                </a>
              ))}
            </div>
          </section>

          {/* Country FAQs */}
          <section className="space-y-6">
            <h2 className="font-display text-3xl font-light text-cloud">
              Frequently Asked Questions: {country.name}
            </h2>
            <div className="space-y-4">
              {countryFaqs.map((faq, i) => (
                <div key={i} className="p-6 rounded-2xl glass-card border border-champagne/10 space-y-2">
                  <h3 className="font-display text-lg text-cloud">{faq.q}</h3>
                  <p className="text-mist text-sm leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Bottom CTA Band */}
          <section className="p-10 rounded-3xl bg-horizon/30 border border-champagne/25 text-center space-y-4">
            <h3 className="font-display text-3xl text-cloud">
              Ready to file your {country.name} application?
            </h3>
            <p className="text-mist text-sm max-w-xl mx-auto">
              Send your profile details on WhatsApp. We provide a transparent quote within a few working hours.
            </p>
            <div className="pt-2">
              <a
                href={buildWhatsAppLink({ type: "quote", country: country.name })}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-coral hover:bg-coral/90 text-white font-semibold text-sm shadow-xl transition-transform active:scale-95"
              >
                <span>Get a Quote for {country.name}</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
