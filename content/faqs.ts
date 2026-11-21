export interface FaqItem {
  q: string;
  a: string;
  category?: string;
}

export const generalFaqs: FaqItem[] = [
  {
    q: "Do you guarantee my visa approval?",
    a: "No honest consultancy can guarantee an approval. The final decision rests entirely with the visa officer and embassy. What we do guarantee is that your documentation will be complete, legally compliant, and structured without errors. Anyone promising '100% guaranteed visas' is deceiving you.",
  },
  {
    q: "How much will your visa consultation cost?",
    a: "Every case is distinct depending on the destination, visa category, translation requirements, and whether you need job placement or document apostilles. Click 'Get a Quote' on any page, and we will send you a clear, written quotation on WhatsApp with zero hidden charges.",
  },
  {
    q: "What is your refund policy?",
    a: "We maintain a transparent written policy: you receive a 100% refund if requested within 7 days of payment. After 7 days (and before formal submission to the embassy), a 50% refund applies. Direct third-party expenses already incurred—such as official government visa fees, VFS slots, and translation costs—are non-refundable.",
  },
  {
    q: "How long will it take to get my visa?",
    a: "Timelines depend heavily on the destination and category. An electronic tourist visa to Malaysia or Russia takes 2 to 4 days, while European long-term work permits (Czech Republic or Slovenia) take 60 to 90 days under statutory administrative rules. Use our interactive Processing Time Estimator for current ranges.",
  },
  {
    q: "Do you help candidates find a job abroad?",
    a: "Yes. For our five focus countries, we provide job placement assistance, employer vacancy verification, and contract vetting as part of our work visa packages. We make sure any vacancy number is officially registered with the relevant labour ministry before filing.",
  },
  {
    q: "Do you assist with university admissions and SOP writing?",
    a: "Yes. We help students select accredited institutions and craft tailored, human-written Statements of Purpose (SOPs) that reflect their real academic path. Please note: we do not offer scholarship acquisition services.",
  },
  {
    q: "Are you a registered company in India?",
    a: "Yes. Travel Solo is a registered business based in Sector 12, Dwarka, New Delhi. Our legal registration details and corporate registration numbers are published openly on our website and contracts.",
  },
  {
    q: "I live outside Delhi. Can I still work with you?",
    a: "Absolutely. Over 60% of our clients reside across Punjab, Kerala, Maharashtra, Gujarat, and Karnataka. We manage all file audits, drafting, and updates through WhatsApp, secure document portals, and video consultations.",
  },
];
