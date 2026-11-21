export type VisaType = 'job' | 'study' | 'tourist' | 'business';

export interface OfficialSource {
  label: string;
  url: string;
}

export interface CountryData {
  slug: string;
  name: string;
  tagline: string;
  city: string;
  coords: { lat: number; lon: number };
  heroImage: string;
  heroAlt: string;
  whyGo: { title: string; text: string }[];
  officialSources: OfficialSource[];
  lastUpdated: string;
  shortDesc: string;
}

export const countries: Record<string, CountryData> = {
  "czech-republic": {
    slug: "czech-republic",
    name: "Czech Republic",
    city: "Prague",
    coords: { lat: 50.0755, lon: 14.4378 },
    tagline: "Heart of Central Europe: solid manufacturing, low living costs, and direct Schengen access.",
    shortDesc: "Prague combines strong industrial employment with respected public universities. An ideal European gateway for Indian professionals and students.",
    heroImage: "https://images.unsplash.com/photo-1541849546-216549ae216d?q=80&w=1600&auto=format&fit=crop",
    heroAlt: "Prague old town square with historic towers and terracotta rooftops",
    whyGo: [
      {
        title: "Strong Engineering & Tech Job Market",
        text: "The Czech automotive and manufacturing sector continuously recruits skilled technicians, mechanical engineers, and software developers across Brno, Ostrava, and Prague.",
      },
      {
        title: "Affordable European Tuition",
        text: "Tuition at public universities like Charles University and CTU runs significantly lower than in Germany or the UK, with student living costs under 600 Euros a month.",
      },
      {
        title: "Full Schengen Mobility",
        text: "Holding a Czech long-term visa or employee card lets you travel freely across all 29 Schengen member states without separate border visas.",
      },
    ],
    officialSources: [
      { label: "Ministry of Foreign Affairs (MZV)", url: "https://mzv.gov.cz" },
      { label: "Ministry of the Interior - Immigration Portal", url: "https://mv.gov.cz" },
      { label: "Embassy of the Czech Republic in New Delhi", url: "https://mzv.gov.cz/newdelhi" },
    ],
    lastUpdated: "2026-11-15",
  },

  "malaysia": {
    slug: "malaysia",
    name: "Malaysia",
    city: "Kuala Lumpur",
    coords: { lat: 3.1390, lon: 101.6869 },
    tagline: "Southeast Asia's fastest-moving business hub, with rapid eVisa turnarounds and English-friendly campuses.",
    shortDesc: "Quick eVisas for holidaymakers, low barriers for business owners, and global university branch campuses just four hours from Chennai and Delhi.",
    heroImage: "https://images.unsplash.com/photo-1596422846543-75c6fc197f07?q=80&w=1600&auto=format&fit=crop",
    heroAlt: "Kuala Lumpur skyline with Petronas Twin Towers illuminated at dusk",
    whyGo: [
      {
        title: "48-Hour eVisa Approvals",
        text: "Tourist and short-term business visits process online through Window Malaysia without sending your physical passport to an embassy.",
      },
      {
        title: "UK & Australian University Degrees",
        text: "Monash, Nottingham, and Southampton maintain full branch campuses in Kuala Lumpur. You earn an identical degree at a third of the Australian or British tuition cost.",
      },
      {
        title: "Growing Tech & Logistics Hub",
        text: "The Multimedia Super Corridor (MSC) status gives foreign IT specialists direct employment passes without arduous local sponsorship quotas.",
      },
    ],
    officialSources: [
      { label: "Window Malaysia eVisa Official Portal", url: "https://windowmalaysia.my" },
      { label: "Immigration Department of Malaysia (JIM)", url: "https://imi.gov.my" },
      { label: "Education Malaysia Global Services (EMGS)", url: "https://emgs.com.my" },
    ],
    lastUpdated: "2026-11-10",
  },

  "russia": {
    slug: "russia",
    name: "Russia",
    city: "Moscow",
    coords: { lat: 55.7558, lon: 37.6173 },
    tagline: "Medical education and heavy industry opportunities with an established Indian community.",
    shortDesc: "World-class medical degrees recognized by NMC, growing demand for skilled Indian technical labor, and modern e-visas for fast entry.",
    heroImage: "https://images.unsplash.com/photo-1513622470522-26c3c8a854bc?q=80&w=1600&auto=format&fit=crop",
    heroAlt: "Red Square and Saint Basil's Cathedral in Moscow under evening sky",
    whyGo: [
      {
        title: "Affordable NMC-Approved MBBS",
        text: "Russian state medical academies have trained thousands of practicing Indian doctors. Degrees are English-medium and direct without capitation fees.",
      },
      {
        title: "Bilateral Trade & Commercial Ties",
        text: "With expanding rupee-ruble trade settlement, Indian exporters, pharmaceuticals, and agricultural suppliers find fast-track commercial invitations.",
      },
      {
        title: "Straightforward Unified Electronic Visa",
        text: "For tourism and guest business visits, the official Russian e-visa issues in 4 calendar days through the Russian Foreign Ministry portal.",
      },
    ],
    officialSources: [
      { label: "Official Unified e-Visa Portal (KDMD)", url: "https://evisa.kdmid.ru" },
      { label: "Ministry of Foreign Affairs of the Russian Federation", url: "https://mid.ru" },
      { label: "Embassy of the Russian Federation in New Delhi", url: "https://india.mid.ru" },
    ],
    lastUpdated: "2026-11-01",
  },

  "slovenia": {
    slug: "slovenia",
    name: "Slovenia",
    city: "Ljubljana",
    coords: { lat: 46.0569, lon: 14.5058 },
    tagline: "Europe's greenest tech haven: high wages, clean mountain air, and a direct path to EU permanent residency.",
    shortDesc: "Tucked between Austria and Italy, Slovenia offers Schengen living with peaceful cities, English-friendly workplaces, and excellent tech salaries.",
    heroImage: "https://images.unsplash.com/photo-1509299349698-dd22323b5963?q=80&w=1600&auto=format&fit=crop",
    heroAlt: "Lake Bled in Slovenia with island church surrounded by Julian Alps",
    whyGo: [
      {
        title: "Single Work & Residence Permit",
        text: "Slovenia issues a combined work-and-residence card. One application covers both your job authorization and your legal right to live in the country.",
      },
      {
        title: "High Safety & Quality of Life",
        text: "Ranked among the top 10 safest countries globally. Families enjoy free public healthcare, clean alpine surroundings, and safe neighborhood schools.",
      },
      {
        title: "Gateway to Northern Italy and Austria",
        text: "From Ljubljana, you can drive to Venice in two hours or Vienna in three. A Slovenian residence card grants unrestricted Schengen border crossing.",
      },
    ],
    officialSources: [
      { label: "Slovenian Government Portal (GOV.SI)", url: "https://gov.si" },
      { label: "Ministry of Foreign and European Affairs", url: "https://gov.si/en/ministries/ministry-of-foreign-and-european-affairs" },
      { label: "Embassy of Slovenia in New Delhi", url: "https://newdelhi.embassy.si" },
    ],
    lastUpdated: "2026-11-12",
  },

  "singapore": {
    slug: "singapore",
    name: "Singapore",
    city: "Singapore",
    coords: { lat: 1.3521, lon: 103.8198 },
    tagline: "Asia's premier financial capital: rigorous standards, high salaries, and unmatched global connectivity.",
    shortDesc: "Clear rules, high standards, zero corruption. Singapore rewards qualified Indian professionals, business investors, and top-tier university students.",
    heroImage: "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?q=80&w=1600&auto=format&fit=crop",
    heroAlt: "Marina Bay Singapore skyline at twilight with modern architectural landmarks",
    whyGo: [
      {
        title: "High Pay & Low Personal Taxes",
        text: "Employment Pass holders command some of the highest take-home compensation packages in Asia, with effective tax brackets rarely topping 15%.",
      },
      {
        title: "Ivy-League Caliber Universities",
        text: "National University of Singapore (NUS) and Nanyang Technological University (NTU) rank regularly in the global top 20 universities.",
      },
      {
        title: "Direct Regional Headquarters",
        text: "More than 7,000 multinational corporations run their regional Asia-Pacific headquarters out of Singapore, giving specialists fast career progression.",
      },
    ],
    officialSources: [
      { label: "Immigration & Checkpoints Authority (ICA)", url: "https://ica.gov.sg" },
      { label: "Ministry of Manpower (MOM) - Work Passes", url: "https://mom.gov.sg" },
      { label: "Singapore High Commission in New Delhi", url: "https://mfa.gov.sg/newdelhi" },
    ],
    lastUpdated: "2026-11-18",
  },
};
