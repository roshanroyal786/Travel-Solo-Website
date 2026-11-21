export interface Testimonial {
  name: string;
  city: string;
  destination: string;
  visaType: string;
  quote: string;
  year: string;
  dummy: boolean; // Flag to indicate placeholder/sample review
}

export const testimonials: Testimonial[] = [
  {
    name: "Vikramjit Singh",
    city: "Amritsar",
    destination: "Czech Republic",
    visaType: "Employee Card",
    quote: "Two agents in Jalandhar told me to pay 8 lakhs upfront without showing me any labor vacancy number. Travel Solo showed me the actual Czech Ministry vacancy code on my screen during a video call before taking a rupee. Filed in New Delhi, approved in 71 days.",
    year: "2024",
    dummy: true,
  },
  {
    name: "Ananya Deshmukh",
    city: "Pune",
    destination: "Singapore",
    visaType: "Employment Pass",
    quote: "Singapore MOM COMPASS points were confusing my hiring company's HR. Travel Solo audited my university accreditation and structured my experience proof to secure all 40 required points. Seamless onboarding.",
    year: "2025",
    dummy: true,
  },
  {
    name: "Dr. Rohit Aggarwal",
    city: "Jaipur",
    destination: "Russia",
    visaType: "MBBS Student Visa",
    quote: "My elder brother had his Russian visa delayed for months through an agent who used fake invitation letters. With Travel Solo, the invitation came straight from the university portal. Straightforward and clean.",
    year: "2023",
    dummy: true,
  },
  {
    name: "Pooja & Karan Mehra",
    city: "Gurugram",
    destination: "Slovenia",
    visaType: "Schengen Tourist",
    quote: "We wanted a quiet road trip through Lake Bled and the Julian Alps. The itinerary they drafted was realistic and respected by the embassy. Both visas arrived in 14 days without unnecessary phone calls.",
    year: "2024",
    dummy: true,
  },
  {
    name: "Siddharth Nair",
    city: "Kochi",
    destination: "Malaysia",
    visaType: "Student Pass (Monash)",
    quote: "They handled my EMGS documents and SOP without robotic AI rubbish. When EMGS requested an additional medical declaration, my consultant in Dwarka resolved it within 24 hours.",
    year: "2025",
    dummy: true,
  },
  {
    name: "Harish Chandra",
    city: "New Delhi",
    destination: "Czech Republic",
    visaType: "Business Visa",
    quote: "Needed to inspect CNC tooling machinery outside Prague on short notice. They sorted the certified invitation paperwork and had my Schengen business visa in my passport in under 12 days.",
    year: "2024",
    dummy: true,
  },
];
