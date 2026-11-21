export interface QuizOption {
  label: string;
  value: string;
  score: number;
}

export interface QuizQuestion {
  id: string;
  title: string;
  subtitle: string;
  options: QuizOption[];
  conditionalOn?: { field: string; values: string[] };
}

export const eligibilityQuestions: QuizQuestion[] = [
  {
    id: "purpose",
    title: "What is your main goal abroad?",
    subtitle: "Select the primary purpose of your travel so we can match the exact visa category.",
    options: [
      { label: "Work / Skilled Employment", value: "work", score: 25 },
      { label: "Study / Degree Program", value: "study", score: 25 },
      { label: "Tourism / Holiday Travel", value: "tourist", score: 20 },
      { label: "Business / Trade Meetings", value: "business", score: 25 },
    ],
  },
  {
    id: "destination",
    title: "Where do you want to land?",
    subtitle: "We specialize in five destinations. Pick one or tell us if you are undecided.",
    options: [
      { label: "Czech Republic (Schengen)", value: "czech-republic", score: 10 },
      { label: "Malaysia (Southeast Asia)", value: "malaysia", score: 10 },
      { label: "Russia (Eurasia)", value: "russia", score: 10 },
      { label: "Slovenia (Schengen)", value: "slovenia", score: 10 },
      { label: "Singapore (Financial Capital)", value: "singapore", score: 10 },
      { label: "Not sure yet — guide me", value: "undecided", score: 5 },
    ],
  },
  {
    id: "ageBand",
    title: "What is your age bracket?",
    subtitle: "Certain work and student visas have age thresholds set by national labour ministries.",
    options: [
      { label: "18 to 24 years", value: "18-24", score: 15 },
      { label: "25 to 34 years", value: "25-34", score: 20 },
      { label: "35 to 44 years", value: "35-44", score: 15 },
      { label: "45 years or above", value: "45+", score: 10 },
    ],
  },
  {
    id: "qualification",
    title: "What is your highest completed education?",
    subtitle: "Immigration authorities verify degree certificates through designated evaluation bodies.",
    options: [
      { label: "Master's Degree / Doctorate", value: "masters", score: 20 },
      { label: "Bachelor's Degree (3 or 4 years)", value: "bachelors", score: 18 },
      { label: "Polytechnic Diploma / Vocational Trade", value: "diploma", score: 12 },
      { label: "Senior Secondary (10+2)", value: "highschool", score: 8 },
    ],
  },
  {
    id: "experience",
    title: "How many years of relevant work experience do you have?",
    subtitle: "Work permits typically assess candidate background against standard occupational codes.",
    options: [
      { label: "5+ years documented experience", value: "5-plus", score: 20 },
      { label: "2 to 4 years documented experience", value: "2-4", score: 15 },
      { label: "Less than 2 years / Fresh graduate", value: "0-2", score: 10 },
      { label: "Not applicable (applying as student or tourist)", value: "na", score: 10 },
    ],
  },
  {
    id: "jobOffer",
    title: "Do you currently hold an overseas job offer or employer contract?",
    subtitle: "Applies primarily to work visa candidates.",
    conditionalOn: { field: "purpose", values: ["work"] },
    options: [
      { label: "Yes, I have an official offer letter or contract", value: "yes", score: 25 },
      { label: "In active discussions / awaiting interview outcome", value: "talking", score: 15 },
      { label: "No, I need job placement support and vacancy matching", value: "need-help", score: 10 },
    ],
  },
  {
    id: "fundsComfort",
    title: "How comfortable are you with demonstrating bank balance & proof of funds?",
    subtitle: "Embassies look for clear, legitimate financial records. No manufactured statements.",
    options: [
      { label: "Comfortable: Clean statements with steady disposable funds", value: "comfortable", score: 20 },
      { label: "Moderate: Funds available across family / fixed deposits", value: "moderate", score: 15 },
      { label: "Tight: Need advice on statutory proof of means", value: "tight", score: 8 },
    ],
  },
  {
    id: "refusalHistory",
    title: "Have you ever faced a visa refusal in the past?",
    subtitle: "We ask because prior refusals require special cover letter handling and root-cause analysis.",
    options: [
      { label: "Never refused: First-time or clean travel history", value: "none", score: 15 },
      { label: "Yes, one previous refusal (more than 12 months ago)", value: "past", score: 5 },
      { label: "Yes, recent refusal (within last 12 months)", value: "recent", score: 0 },
      { label: "Prefer not to disclose right now", value: "private", score: 5 },
    ],
  },
];

export interface QuizResult {
  score: number;
  label: "Looks promising" | "Possible with preparation" | "Let's talk";
  badgeColor: string;
  headline: string;
  summary: string;
  nextSteps: string[];
}

export function evaluateQuiz(answers: Record<string, string>, totalScore: number): QuizResult {
  if (totalScore >= 95) {
    return {
      score: totalScore,
      label: "Looks promising",
      badgeColor: "#25D366",
      headline: "Strong Profile with Solid Prospects",
      summary: "Your academic background, financial readiness, and travel profile align well with official immigration criteria. With verified paperwork and tight file structuring, you stand an excellent chance of approval.",
      nextSteps: [
        "Audit original diplomas and ensure identity records match your passport exactly.",
        "Gather the last 6 months of stamped bank statements and tax acknowledgement forms.",
        "Request a detailed written quote on WhatsApp to map out your timeline and filing checklist.",
      ],
    };
  } else if (totalScore >= 65) {
    return {
      score: totalScore,
      label: "Possible with preparation",
      badgeColor: "#E6C48A",
      headline: "Good Potential, Needs Targeted Documentation",
      summary: "Your foundational eligibility is present, but specific areas (such as credential nostrification, employer verification, or fund trails) need deliberate preparation before embassy submission.",
      nextSteps: [
        "Avoid sudden unexplained bank deposits; build a clean 90-day financial trail.",
        "Schedule a free 20-minute consultation with our Dwarka office to review potential weak spots.",
        "Generate your destination document checklist to identify any missing certificates early.",
      ],
    };
  } else {
    return {
      score: totalScore,
      label: "Let's talk",
      badgeColor: "#FF6B4A",
      headline: "Requires One-on-One Evaluation",
      summary: "Your case has specific variables—such as prior refusals, career gaps, or sponsorship questions—that cannot be solved by a generic checklist. We need to inspect your exact file before recommending any application.",
      nextSteps: [
        "Do not file blindly or rely on agents who promise automatic approval.",
        "Gather any previous refusal letters or visa stamps for review.",
        "Message us directly on WhatsApp for an honest, confidential case review.",
      ],
    };
  }
}
