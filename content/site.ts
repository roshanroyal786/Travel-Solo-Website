export const siteConfig = {
  name: "Travel Solo",
  legalName: "Travel Solo Visa Consultancy Pvt. Ltd.",
  registrationNumber: "DL-DWK-2021-VISA-8842",
  tagline: "Your next chapter starts at the window seat.",
  description:
    "Direct visa consultancy based in Dwarka, New Delhi. Specialized in Czech Republic, Malaysia, Russia, Slovenia, and Singapore. Study, work, tourist, and business visas filed directly with zero sub-agents.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://travelsolo.in",
  phone: "+91 98712 34567",
  whatsappNumber: "919871234567",
  email: "hello@travelsolo.in",
  address: {
    line1: "Plot 14, Sector 12 Dwarka",
    city: "New Delhi",
    state: "Delhi",
    pincode: "110078",
    country: "India",
  },
  stats: {
    experienceYears: 5,
    clientsServed: "257+",
    successRate: "98%",
    successFootnote: "Share of filed applications approved, based on Travel Solo internal audit records (2021–2026).",
    destinationsCount: 5,
  },
  refundPolicy: {
    title: "Clear, Written Refund Policy",
    fullRefundDays: 7,
    summary:
      "100% refund if requested in writing within 7 days of payment. 50% refund after that prior to official embassy submission. Government embassy fees, VFS charges, and direct third-party vendor fees already disbursed are non-refundable.",
  },
  paymentDetails: {
    upiId: process.env.UPI_ID || "travelsolo@icici",
    bankName: process.env.BANK_NAME || "HDFC Bank Ltd.",
    accountName: process.env.BANK_ACCOUNT_NAME || "Travel Solo Visa Consultancy",
    accountNumber: process.env.BANK_ACCOUNT_NUMBER || "50200088991122",
    ifsc: process.env.BANK_IFSC || "HDFC0001234",
    branch: "Sector 12, Dwarka, New Delhi",
  },
  calLink: process.env.NEXT_PUBLIC_CAL_LINK || "https://cal.com/travelsolo/20min",
  disclaimer:
    "Travel Solo is an independent immigration and visa documentation consultancy registered in Delhi. We are not an embassy, consulate, or government authority. Visa approval remains at the sole discretion of the respective embassy and immigration officer.",
};
