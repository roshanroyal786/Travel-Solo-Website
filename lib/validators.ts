export interface LeadFormData {
  fullName: string;
  whatsapp: string;
  email: string;
  cityState: string;
  destination: string;
  visaType: string;
  shortNote?: string;
  targetDate?: string;
  qualification?: string;
  experience?: string;
  passportStatus?: 'valid' | 'expired' | 'not-applied';
  previousRefusal?: 'none' | 'yes' | 'private';
  honeypot?: string; // Must be empty
  consent: boolean;
  type?: 'apply' | 'quiz' | 'payment';
}

export function validateLeadForm(data: Partial<LeadFormData>): { isValid: boolean; errors: Record<string, string> } {
  const errors: Record<string, string> = {};

  if (!data.fullName || data.fullName.trim().length < 2) {
    errors.fullName = "Please enter your full name.";
  }

  if (!data.whatsapp || data.whatsapp.replace(/\D/g, '').length < 10) {
    errors.whatsapp = "Please enter a valid 10-digit WhatsApp number.";
  }

  if (!data.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.email = "Please enter a valid email address.";
  }

  if (!data.destination) {
    errors.destination = "Please select a destination country.";
  }

  if (!data.visaType) {
    errors.visaType = "Please select a visa category.";
  }

  if (data.honeypot && data.honeypot.trim().length > 0) {
    errors.honeypot = "Spam detected.";
  }

  if (!data.consent) {
    errors.consent = "You must agree to the terms and privacy notice to submit.";
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
}
