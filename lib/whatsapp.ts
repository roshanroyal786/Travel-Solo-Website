export interface WhatsAppContext {
  type?: 'quote' | 'quiz' | 'checklist' | 'estimate' | 'generic';
  country?: string;
  visaType?: string;
  quizSummary?: {
    purpose?: string;
    destination?: string;
    qualification?: string;
    experience?: string;
    timeline?: string;
  };
  checklistSummary?: {
    country: string;
    visa: string;
    pendingCount: number;
  };
  estimateSummary?: {
    country: string;
    visa: string;
    likelyDays: number;
  };
}

export function buildWhatsAppLink(context: WhatsAppContext = {}): string {
  const rawNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '48537623077';
  // Strip any non-digit characters
  const cleanNumber = rawNumber.replace(/\D/g, '');

  let message = "Hi Travel Solo, I'd like a quote for a visa.";

  if (context.quizSummary) {
    const { purpose, destination, qualification, experience, timeline } = context.quizSummary;
    message = `Hi Travel Solo, I finished your eligibility check for a ${purpose || 'visa'} to ${destination || 'abroad'}. Qualification: ${qualification || 'N/A'}, Experience: ${experience || 'N/A'}, Target Date: ${timeline || 'ASAP'}. Could you give me an honest quote and next steps?`;
  } else if (context.checklistSummary) {
    message = `Hi Travel Solo, I generated my document checklist for ${context.checklistSummary.visa} visa to ${context.checklistSummary.country}. I have ${context.checklistSummary.pendingCount} pending items and would like to get a quote and file my application.`;
  } else if (context.estimateSummary) {
    message = `Hi Travel Solo, I checked the processing timeline for ${context.estimateSummary.visa} visa to ${context.estimateSummary.country} (approx ${context.estimateSummary.likelyDays} days). I want to discuss moving forward with my file.`;
  } else if (context.country && context.visaType) {
    message = `Hi Travel Solo, I'd like a quote for a ${context.visaType} visa to ${context.country}.`;
  } else if (context.country) {
    message = `Hi Travel Solo, I'd like a quote for a visa to ${context.country}.`;
  }

  return `https://wa.me/${cleanNumber}?text=${encodeURIComponent(message)}`;
}
