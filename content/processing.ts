export interface ProcessingStage {
  prepDays: [number, number]; // [min, max] days for Travel Solo document preparation & translation
  appointmentWaitDays: [number, number]; // VFS / embassy appointment backlog
  officialProcessingDays: [number, number]; // Embassy internal decision timeline
  bufferDays: number; // Discretionary buffer
  verified: boolean;
  lastUpdated: string;
  notes: string;
}

export interface CountryProcessing {
  [visaType: string]: ProcessingStage;
}

export const processingData: Record<string, CountryProcessing> = {
  "czech-republic": {
    job: {
      prepDays: [14, 21],
      appointmentWaitDays: [15, 30],
      officialProcessingDays: [60, 90],
      bufferDays: 14,
      verified: true,
      lastUpdated: "2026-11-15",
      notes: "Czech Employee Cards involve Ministry of Labour checks and court translations. Statutory limit is 60 to 90 days from biometrics.",
    },
    study: {
      prepDays: [10, 15],
      appointmentWaitDays: [14, 25],
      officialProcessingDays: [60, 60],
      bufferDays: 10,
      verified: true,
      lastUpdated: "2026-11-15",
      notes: "Student permits carry a statutory 60-day window under Czech law. Nostrification must be finished first.",
    },
    tourist: {
      prepDays: [3, 5],
      appointmentWaitDays: [7, 14],
      officialProcessingDays: [15, 21],
      bufferDays: 5,
      verified: true,
      lastUpdated: "2026-11-15",
      notes: "Schengen standard turnaround is 15 calendar days once files reach the embassy in New Delhi.",
    },
    business: {
      prepDays: [3, 5],
      appointmentWaitDays: [5, 10],
      officialProcessingDays: [10, 15],
      bufferDays: 3,
      verified: true,
      lastUpdated: "2026-11-15",
      notes: "Business priority lanes at VFS usually reduce biometrics wait times.",
    },
  },

  "malaysia": {
    job: {
      prepDays: [7, 10],
      appointmentWaitDays: [0, 0],
      officialProcessingDays: [14, 28],
      bufferDays: 7,
      verified: true,
      lastUpdated: "2026-11-10",
      notes: "ESD / MDEC corporate approvals take 2 to 4 weeks. e-VDR issues in 5 working days after that.",
    },
    study: {
      prepDays: [5, 7],
      appointmentWaitDays: [0, 0],
      officialProcessingDays: [14, 21],
      bufferDays: 5,
      verified: true,
      lastUpdated: "2026-11-10",
      notes: "EMGS VAL processing status updates online in real time.",
    },
    tourist: {
      prepDays: [1, 2],
      appointmentWaitDays: [0, 0],
      officialProcessingDays: [2, 4],
      bufferDays: 2,
      verified: true,
      lastUpdated: "2026-11-10",
      notes: "Window Malaysia eVisas typically issue within 48 to 72 hours.",
    },
    business: {
      prepDays: [2, 3],
      appointmentWaitDays: [0, 0],
      officialProcessingDays: [3, 5],
      bufferDays: 2,
      verified: true,
      lastUpdated: "2026-11-10",
      notes: "Commercial eVisa processed online without physical embassy appointment.",
    },
  },

  "russia": {
    job: {
      prepDays: [10, 14],
      appointmentWaitDays: [3, 7],
      officialProcessingDays: [20, 30],
      bufferDays: 7,
      verified: true,
      lastUpdated: "2026-11-01",
      notes: "Requires MVD official invitation issue in Russia (takes 20-30 days by employer) before embassy filing.",
    },
    study: {
      prepDays: [7, 10],
      appointmentWaitDays: [3, 5],
      officialProcessingDays: [10, 15],
      bufferDays: 5,
      verified: true,
      lastUpdated: "2026-11-01",
      notes: "University telex invitation must arrive before Delhi Russian Visa Centre submission.",
    },
    tourist: {
      prepDays: [1, 2],
      appointmentWaitDays: [0, 0],
      officialProcessingDays: [4, 6],
      bufferDays: 2,
      verified: true,
      lastUpdated: "2026-11-01",
      notes: "Unified electronic visa (e-Visa) takes exactly 4 calendar days on the Russian portal.",
    },
    business: {
      prepDays: [3, 5],
      appointmentWaitDays: [3, 5],
      officialProcessingDays: [7, 10],
      bufferDays: 3,
      verified: true,
      lastUpdated: "2026-11-01",
      notes: "Standard commercial visa submission in New Delhi.",
    },
  },

  "slovenia": {
    job: {
      prepDays: [14, 21],
      appointmentWaitDays: [15, 30],
      officialProcessingDays: [60, 90],
      bufferDays: 14,
      verified: true,
      lastUpdated: "2026-11-12",
      notes: "Labour market test takes 15 days in Slovenia. Single Permit administrative unit review takes 2-3 months.",
    },
    study: {
      prepDays: [10, 14],
      appointmentWaitDays: [10, 20],
      officialProcessingDays: [45, 60],
      bufferDays: 10,
      verified: true,
      lastUpdated: "2026-11-12",
      notes: "Student temporary residence permits are decided directly by the Slovenian administrative units.",
    },
    tourist: {
      prepDays: [3, 5],
      appointmentWaitDays: [10, 18],
      officialProcessingDays: [15, 21],
      bufferDays: 5,
      verified: true,
      lastUpdated: "2026-11-12",
      notes: "Standard Schengen evaluation timeline.",
    },
    business: {
      prepDays: [3, 5],
      appointmentWaitDays: [5, 12],
      officialProcessingDays: [10, 15],
      bufferDays: 3,
      verified: true,
      lastUpdated: "2026-11-12",
      notes: "Slovenian host must arrange certified Letter of Guarantee in advance.",
    },
  },

  "singapore": {
    job: {
      prepDays: [5, 8],
      appointmentWaitDays: [0, 0],
      officialProcessingDays: [10, 21],
      bufferDays: 5,
      verified: true,
      lastUpdated: "2026-11-18",
      notes: "MOM COMPASS evaluation takes 10 to 21 working days for Employment Pass candidates.",
    },
    study: {
      prepDays: [5, 7],
      appointmentWaitDays: [0, 0],
      officialProcessingDays: [10, 14],
      bufferDays: 4,
      verified: true,
      lastUpdated: "2026-11-18",
      notes: "ICA SOLAR eForm 16 processing takes 1 to 2 weeks for In-Principle Approval (IPA).",
    },
    tourist: {
      prepDays: [1, 2],
      appointmentWaitDays: [0, 0],
      officialProcessingDays: [3, 5],
      bufferDays: 2,
      verified: true,
      lastUpdated: "2026-11-18",
      notes: "Direct submission through authorized Singapore visa partners. Turnaround 3-5 working days.",
    },
    business: {
      prepDays: [1, 2],
      appointmentWaitDays: [0, 0],
      officialProcessingDays: [3, 5],
      bufferDays: 2,
      verified: true,
      lastUpdated: "2026-11-18",
      notes: "Form V39A commercial submissions processed electronically.",
    },
  },
};
