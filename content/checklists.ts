export interface ChecklistItem {
  id: string;
  name: string;
  category: 'Identity' | 'Financial' | 'Purpose-specific' | 'Supporting';
  description: string;
  verified: boolean;
}

export interface CountryChecklist {
  [visaType: string]: ChecklistItem[];
}

export const checklistsData: Record<string, CountryChecklist> = {
  "czech-republic": {
    job: [
      { id: "cz-j-1", category: "Identity", name: "Original Passport", description: "Valid for at least 3 months beyond intended departure from Schengen, with 2 blank pages.", verified: true },
      { id: "cz-j-2", category: "Identity", name: "Biometric Passport Photographs", description: "3.5 x 4.5 cm, white background, 80% face coverage, taken within last 6 months.", verified: true },
      { id: "cz-j-3", category: "Purpose-specific", name: "Employment Contract / Work Agreement", description: "Signed contract stating Czech minimum wage and 40 weekly work hours.", verified: true },
      { id: "cz-j-4", category: "Purpose-specific", name: "Central Vacancy Number (Číslo volného místa)", description: "Registered vacancy number in the Ministry of Labour portal.", verified: true },
      { id: "cz-j-5", category: "Identity", name: "Police Clearance Certificate (PCC) with MEA Apostille", description: "Issued by Regional Passport Office in India, apostilled, under 90 days old.", verified: true },
      { id: "cz-j-6", category: "Purpose-specific", name: "Certified Czech Court Translation", description: "All Indian documents translated into Czech by an accredited court interpreter.", verified: true },
      { id: "cz-j-7", category: "Supporting", name: "Proof of Czech Accommodation", description: "Notarized rental lease or landlord consent confirmation (Doklad o zajištění ubytování).", verified: true },
      { id: "cz-j-8", category: "Financial", name: "Travel Medical Insurance (Initial 40 Days)", description: "PVZP or recognized Schengen insurance before state insurance takes effect.", verified: true },
    ],
    study: [
      { id: "cz-s-1", category: "Identity", name: "Original Passport & Copy", description: "Valid passport with at least 18 months remaining validity.", verified: true },
      { id: "cz-s-2", category: "Purpose-specific", name: "Official Letter of Acceptance", description: "Original acceptance letter issued in Czech language by the university.", verified: true },
      { id: "cz-s-3", category: "Financial", name: "Bank Balance Certificate & International Card", description: "Account in student's name showing required annual living funds with active debit card.", verified: true },
      { id: "cz-s-4", category: "Purpose-specific", name: "Nostrification of Indian Diplomas", description: "Recognition of Indian 10+2 or bachelor degree by Czech regional education office.", verified: true },
      { id: "cz-s-5", category: "Identity", name: "PCC with MEA Apostille & Czech Translation", description: "Police clearance from Passport Seva Kendra, apostilled by MEA.", verified: true },
      { id: "cz-s-6", category: "Supporting", name: "Dormitory Accommodation Contract", description: "Official accommodation confirmation from Czech student housing or private landlord.", verified: true },
    ],
    tourist: [
      { id: "cz-t-1", category: "Identity", name: "Original Passport", description: "Issued within the last 10 years, valid 3 months past return date.", verified: true },
      { id: "cz-t-2", category: "Financial", name: "Last 6 Months Bank Statement with Stamp", description: "Original bank statement with bank branch seal showing sufficient disposable balance.", verified: true },
      { id: "cz-t-3", category: "Financial", name: "Income Tax Returns (ITR-V) for 3 Years", description: "Official ITR acknowledgement receipts.", verified: true },
      { id: "cz-t-4", category: "Purpose-specific", name: "Day-by-Day Travel Itinerary & Hotel Vouchers", description: "Realistic travel schedule with confirmed hotel bookings across Czech cities.", verified: true },
      { id: "cz-t-5", category: "Supporting", name: "Employer NOC / Leave Approval Letter", description: "Signed on company letterhead confirming approved vacation dates.", verified: true },
      { id: "cz-t-6", category: "Financial", name: "Schengen Travel Insurance (€30,000 Coverage)", description: "Policy covering emergency medical care and repatriation.", verified: true },
    ],
    business: [
      { id: "cz-b-1", category: "Identity", name: "Original Passport", description: "Valid for at least 3 months after planned return with 2 blank pages.", verified: true },
      { id: "cz-b-2", category: "Purpose-specific", name: "Official Czech Business Invitation", description: "Invitation on host company letterhead or certified by Czech Alien Police.", verified: true },
      { id: "cz-b-3", category: "Supporting", name: "Indian Employer Deputation Letter", description: "Letter detailing company background, traveler's role, and visit agenda.", verified: true },
      { id: "cz-b-4", category: "Financial", name: "Indian Company Bank Statements & GST Certificate", description: "Proof of legitimate business activity in India.", verified: true },
    ],
  },

  "malaysia": {
    job: [
      { id: "my-j-1", category: "Identity", name: "Passport Copy (All Pages)", description: "High-resolution color scan of all pages including blank ones.", verified: true },
      { id: "my-j-2", category: "Purpose-specific", name: "MDEC / ESD Expatriate Approval Letter", description: "Approved hiring authorization issued to the Malaysian corporate sponsor.", verified: true },
      { id: "my-j-3", category: "Purpose-specific", name: "Signed Employment Contract", description: "Contract stating salary tier and job classification.", verified: true },
      { id: "my-j-4", category: "Supporting", name: "Academic Certificates & Resume", description: "Degrees certified and matching the required job classification.", verified: true },
      { id: "my-j-5", category: "Financial", name: "Medical Screening Form", description: "Pre-departure medical clearance from an authorized clinic.", verified: true },
    ],
    study: [
      { id: "my-s-1", category: "Identity", name: "Passport (All Pages Scan)", description: "Minimum 18 months validity remaining.", verified: true },
      { id: "my-s-2", category: "Purpose-specific", name: "EMGS Visa Approval Letter (VAL)", description: "Approval document generated by Education Malaysia Global Services.", verified: true },
      { id: "my-s-3", category: "Purpose-specific", name: "University Offer Letter", description: "Unconditional offer of study from the Malaysian university.", verified: true },
      { id: "my-s-4", category: "Supporting", name: "Academic Marksheets & English Scores", description: "10th, 12th, or graduation transcripts plus IELTS/PTE or English medium certificate.", verified: true },
    ],
    tourist: [
      { id: "my-t-1", category: "Identity", name: "Passport Bio-Data Page Scan", description: "Valid for at least 6 months from entry date.", verified: true },
      { id: "my-t-2", category: "Identity", name: "Digital Passport Photograph", description: "35mm x 50mm, white studio backdrop, clear facial features.", verified: true },
      { id: "my-t-3", category: "Purpose-specific", name: "Confirmed Return Flight Ticket", description: "Flight entering and exiting Malaysia within approved duration.", verified: true },
      { id: "my-t-4", category: "Purpose-specific", name: "Hotel Booking Voucher", description: "Confirmed stay booking for all nights in Malaysia.", verified: true },
      { id: "my-t-5", category: "Supporting", name: "MDAC Digital Arrival Card Confirmation", description: "Completed within 3 days prior to arrival.", verified: true },
    ],
    business: [
      { id: "my-b-1", category: "Identity", name: "Passport Scan & Photo", description: "Valid for 6+ months.", verified: true },
      { id: "my-b-2", category: "Purpose-specific", name: "Invitation Letter from Malaysian Company", description: "Detailing purpose of meetings, dates, and local host SSM registration.", verified: true },
      { id: "my-b-3", category: "Supporting", name: "Covering Letter from Indian Employer", description: "Signed by company director confirming employee designation and business mission.", verified: true },
    ],
  },

  "russia": {
    job: [
      { id: "ru-j-1", category: "Identity", name: "Original Passport", description: "Valid for at least 18 months from expected visa issue date.", verified: true },
      { id: "ru-j-2", category: "Purpose-specific", name: "Official MVD Work Invitation", description: "Electronic or yellow paper invitation from Russian Ministry of Internal Affairs.", verified: true },
      { id: "ru-j-3", category: "Supporting", name: "HIV-Negative Medical Certificate", description: "Mandatory blood test report issued within 90 days of application.", verified: true },
      { id: "ru-j-4", category: "Purpose-specific", name: "Russian Employment Agreement", description: "Certified contract detailing salary in rubles and occupational role.", verified: true },
      { id: "ru-j-5", category: "Identity", name: "Notarized Russian Translation of Passport", description: "All personal details translated into Russian by an accredited notary.", verified: true },
    ],
    study: [
      { id: "ru-s-1", category: "Identity", name: "Original Passport", description: "Valid 18 months minimum.", verified: true },
      { id: "ru-s-2", category: "Purpose-specific", name: "Ministry of Science & Higher Education Invitation", description: "Official electronic invitation code issued through university.", verified: true },
      { id: "ru-s-3", category: "Supporting", name: "HIV Test Report & General Medical Fitness", description: "Clear infectious disease screening report.", verified: true },
      { id: "ru-s-4", category: "Purpose-specific", name: "10+2 Marksheets with MEA Apostille", description: "Educational certificates apostilled by Ministry of External Affairs, India.", verified: true },
    ],
    tourist: [
      { id: "ru-t-1", category: "Identity", name: "Passport Bio-Data Page Scan", description: "For unified e-Visa, valid 6+ months.", verified: true },
      { id: "ru-t-2", category: "Identity", name: "Digital Passport Photograph", description: "JPEG file matching strict Russian MFA photo criteria.", verified: true },
      { id: "ru-t-3", category: "Financial", name: "Travel Medical Insurance for Russia", description: "Explicitly stating coverage on the territory of the Russian Federation.", verified: true },
      { id: "ru-t-4", category: "Purpose-specific", name: "Tourist Voucher (For Regular Visa)", description: "If staying beyond 16 days, official tourist voucher from Russian registry.", verified: true },
    ],
    business: [
      { id: "ru-b-1", category: "Identity", name: "Original Passport & Photos", description: "Valid passport with 2 clean blank pages.", verified: true },
      { id: "ru-b-2", category: "Purpose-specific", name: "Official MVD Business Invitation / Telex", description: "Electronic telex number or original paper invite from Russian host.", verified: true },
      { id: "ru-b-3", category: "Supporting", name: "Indian Company Deputation Letter", description: "Stating commercial engagement and expense responsibility.", verified: true },
    ],
  },

  "slovenia": {
    job: [
      { id: "si-j-1", category: "Identity", name: "Original Passport & Copy", description: "Valid for at least 3 months beyond work permit tenure.", verified: true },
      { id: "si-j-2", category: "Purpose-specific", name: "Employment Contract & ZRSZ Market Test", description: "Signed contract with Slovenian company with confirmed labor registry clearance.", verified: true },
      { id: "si-j-3", category: "Identity", name: "Police Clearance Certificate (PCC) with MEA Apostille", description: "From Regional Passport Office, under 90 days old.", verified: true },
      { id: "si-j-4", category: "Purpose-specific", name: "Certified Slovenian Court Translation", description: "All Indian documents translated into Slovenian.", verified: true },
      { id: "si-j-5", category: "Supporting", name: "Proof of Slovenian Residence / Tenancy", description: "Lease contract registered with local administrative unit (Upravna Enota).", verified: true },
    ],
    study: [
      { id: "si-s-1", category: "Identity", name: "Passport & Biometric Photos", description: "Valid passport with sufficient empty pages.", verified: true },
      { id: "si-s-2", category: "Purpose-specific", name: "University Enrollment Certificate (Potrdilo o vpisu)", description: "Original certificate from University of Ljubljana, Maribor, or Primorska.", verified: true },
      { id: "si-s-3", category: "Financial", name: "Proof of Sufficient Living Funds", description: "Bank balance meeting statutory monthly basic income requirements in Slovenia.", verified: true },
      { id: "si-s-4", category: "Identity", name: "PCC with MEA Apostille & Translation", description: "Clean criminal record verification apostilled by MEA.", verified: true },
      { id: "si-s-5", category: "Supporting", name: "Student Health Insurance", description: "Comprehensive policy valid for Schengen and Slovenian territory.", verified: true },
    ],
    tourist: [
      { id: "si-t-1", category: "Identity", name: "Passport", description: "Valid 3 months past return date from Schengen area.", verified: true },
      { id: "si-t-2", category: "Financial", name: "Personal Bank Statement (Last 6 Months)", description: "Showing consistent balances and stamped by your bank.", verified: true },
      { id: "si-t-3", category: "Financial", name: "Income Tax Returns (ITR)", description: "Last 2-3 years acknowledged tax returns.", verified: true },
      { id: "si-t-4", category: "Purpose-specific", name: "Confirmed Travel Plan & Lodging", description: "Hotel bookings across Slovenia and flight reservation details.", verified: true },
      { id: "si-t-5", category: "Supporting", name: "Leave NOC from Indian Employer", description: "Confirming employment status, role, and authorized leave.", verified: true },
    ],
    business: [
      { id: "si-b-1", category: "Identity", name: "Passport & Photographs", description: "Standard Schengen specifications.", verified: true },
      { id: "si-b-2", category: "Purpose-specific", name: "Slovenian Letter of Guarantee (Garancijsko pismo)", description: "Certified by the local administrative unit (Upravna Enota) in Slovenia.", verified: true },
      { id: "si-b-3", category: "Supporting", name: "Indian Corporate Cover Letter", description: "Confirming commercial objectives and meeting schedule.", verified: true },
    ],
  },

  "singapore": {
    job: [
      { id: "sg-j-1", category: "Identity", name: "Passport Bio-Data Scan", description: "Clear, color scan with over 6 months validity.", verified: true },
      { id: "sg-j-2", category: "Purpose-specific", name: "Signed Employment Contract / Offer Letter", description: "Meeting MOM minimum salary thresholds (EP / S Pass).", verified: true },
      { id: "sg-j-3", category: "Purpose-specific", name: "Third-Party Educational Verification Report", description: "Verification check from MOM-approved screening firm (e.g. Dataflow / CIS).", verified: true },
      { id: "sg-j-4", category: "Supporting", name: "Updated Resume & Job Description", description: "Aligned with Singapore Standard Occupational Classification (SSOC).", verified: true },
      { id: "sg-j-5", category: "Purpose-specific", name: "In-Principle Approval (IPA) Letter", description: "Issued by MOM upon initial electronic application clearance.", verified: true },
    ],
    study: [
      { id: "sg-s-1", category: "Identity", name: "Passport Copy", description: "Valid for duration of study course.", verified: true },
      { id: "sg-s-2", category: "Purpose-specific", name: "SOLAR Registration eForm 16", description: "Completed student pass registration details from ICA portal.", verified: true },
      { id: "sg-s-3", category: "Purpose-specific", name: "Institute of Higher Learning Offer Letter", description: "Admission acceptance from NUS, NTU, SMU, or EduTrust-certified PEI.", verified: true },
      { id: "sg-s-4", category: "Financial", name: "Bank Balance Proof & Financial Affidavit", description: "Sufficient liquid funds for tuition and living costs.", verified: true },
    ],
    tourist: [
      { id: "sg-t-1", category: "Identity", name: "Original Passport Color Scan", description: "Minimum 6 months validity from planned arrival date.", verified: true },
      { id: "sg-t-2", category: "Identity", name: "Digital Passport Photograph", description: "35mm x 45mm, matte finish, pure white backdrop, no spectacles.", verified: true },
      { id: "sg-t-3", category: "Purpose-specific", name: "ICA Form 14A", description: "Signed application form with complete residential and travel details.", verified: true },
      { id: "sg-t-4", category: "Purpose-specific", name: "Confirmed Round-Trip Flight Itinerary", description: "Ticket showing entry into and exit out of Singapore.", verified: true },
      { id: "sg-t-5", category: "Financial", name: "Last 6 Months Bank Statement / Pay Slips", description: "Demonstrating sufficient funds for the holiday.", verified: true },
    ],
    business: [
      { id: "sg-b-1", category: "Identity", name: "Passport Scan & Photos", description: "Compliant with ICA electronic criteria.", verified: true },
      { id: "sg-b-2", category: "Purpose-specific", name: "ICA Form V39A (Letter of Introduction)", description: "Completed and signed by Singapore-registered corporate contact with UEN.", verified: true },
      { id: "sg-b-3", category: "Supporting", name: "Indian Corporate Deputation Letter", description: "Explaining specific business negotiations or expo attendance.", verified: true },
    ],
  },
};
