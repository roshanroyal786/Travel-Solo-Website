import { VisaType } from "./countries";

export interface VisaContent {
  countrySlug: string;
  visaType: VisaType;
  title: string;
  badge: string;
  seoTitle: string;
  seoDescription: string;
  whoItsFor: string;
  overview: string;
  ourProcess: string[];
  refusalReasons: string[];
  extras?: 'job-placement' | 'admission-sop';
  specialNote?: string;
  verified: boolean;
}

export const visaPages: Record<string, VisaContent> = {
  // CZECH REPUBLIC
  "czech-republic-job": {
    countrySlug: "czech-republic",
    visaType: "job",
    title: "Czech Republic Employee Card & Work Visa",
    badge: "Long-Stay Work Authorization",
    seoTitle: "Czech Republic Work Visa from India | Travel Solo",
    seoDescription: "File your Czech Employee Card without third-party sub-agents. Complete document apostille, vacancy matching, and direct filing from Dwarka, Delhi.",
    whoItsFor: "Indian engineers, CNC operators, IT specialists, warehouse supervisors, and hospitality staff holding a job offer or looking for vacancy matching in the Czech Republic.",
    overview: "The Czech Employee Card combines your residency permit and work authorization into one biometric dual card. Most Indian consultancies promise guaranteed jobs and hand your file to unknown agents in Punjab who cut corners on the legal vacancy number (číslo volného místa). That mistake gets files rejected. We work directly with you in Dwarka, verifying the employer vacancy registration in the central registry before you sign any contract.",
    ourProcess: [
      "Job offer and central vacancy number verification in the Ministry of Labour registry.",
      "Contract vetting to confirm standard Czech wage and mandatory health coverage.",
      "Apostille of police clearance certificate and highest degree diplomas in India.",
      "Certified court translation (soudní překlad) into Czech by accredited translators.",
      "VFS Global appointment booking and mock embassy interview preparation.",
      "Direct tracking with the Department for Asylum and Migration Policy (OAMP).",
    ],
    refusalReasons: [
      "Unregistered vacancy number: The employer never reported the vacancy to the Czech labour office.",
      "Discrepancies in police clearance: Missing MEA apostille or expired certificate (valid only 90 days).",
      "Salary below Czech minimum threshold for the specific occupation category.",
      "Inadequate proof of accommodation registered with the foreign police.",
    ],
    extras: "job-placement",
    specialNote: "Work permits are tied to specific employers registered with the Czech Ministry of Labour. We help identify valid vacancies and prepare your application directly.",
    verified: true,
  },

  "czech-republic-study": {
    countrySlug: "czech-republic",
    visaType: "study",
    title: "Czech Republic Student Long-Stay Visa & Permit",
    badge: "Higher Education & Research",
    seoTitle: "Czech Republic Student Visa from India | Travel Solo",
    seoDescription: "Direct student visa consultation for Czech universities. Document nostrification, authentic SOP drafting, and embassy appointment preparation.",
    whoItsFor: "Students accepted into bachelor, master, or doctoral programs at recognized Czech institutions like Charles University, Czech Technical University (CTU), or Masaryk University.",
    overview: "Studying in Prague gives you high-standard European academics without the 25-lakh annual price tag of Western Europe. But the visa process is rigorous. The Czech Ministry of the Interior requires nostrification (formal validation) of your Indian school boards or degree certificates, Czech court translations, and proof of living funds in a bank account that allows international withdrawals. We handle every detail without generic AI templates.",
    ourProcess: [
      "University acceptance letter validation and intake schedule alignment.",
      "Educational credential nostrification via Czech regional authorities.",
      "Tailored Statement of Purpose (SOP) drafted to match your real academic trajectory.",
      "Proof of funds calculation and bank statement audit to satisfy OAMP criteria.",
      "Comprehensive medical insurance arrangement compliant with Pojišťovna VZP.",
      "Embassy interview rehearsal covering university course specifics and career goals.",
    ],
    refusalReasons: [
      "Incomplete nostrification papers before the scheduled visa appointment.",
      "Unverifiable source of bank funds or sudden recent account deposits without explanation.",
      "Generic, copied SOP that fails to explain why you picked Prague over Indian options.",
      "Failing basic interview questions regarding your syllabus or living costs.",
    ],
    extras: "admission-sop",
    specialNote: "We provide university admission guidance and custom SOP writing. Please note: we do not offer scholarship procurement services.",
    verified: true,
  },

  "czech-republic-tourist": {
    countrySlug: "czech-republic",
    visaType: "tourist",
    title: "Czech Republic Schengen Tourist Visa (Type C)",
    badge: "Short Stay (Up to 90 Days)",
    seoTitle: "Czech Tourist Visa for Indians | Travel Solo",
    seoDescription: "Get your Czech Schengen tourist visa filed with clean itineraries, verified hotel bookings, and airtight financial proof. Direct consultancy in Delhi.",
    whoItsFor: "Solo travelers, families, and couples planning vacations to Prague, Český Krumlov, Karlovy Vary, or traveling onwards across the Schengen area.",
    overview: "A Schengen tourist visa application from India is essentially a test of your intention to return. Visa officers reject applications when itineraries look cooked up or financial leaves look hollow. We draft realistic day-by-day travel plans, verify your flight reservations, and ensure your income tax returns and salary slips tell a clear, credible story.",
    ourProcess: [
      "Assessment of your travel dates, previous visa history, and financial standing.",
      "Building a realistic day-to-day itinerary tailored to actual Czech train schedules and stays.",
      "Compiling Schengen-compliant medical insurance with minimum €30,000 coverage.",
      "VFS Delhi / Mumbai biometrics slot booking and document file structuring.",
      "Detailed review of leave sanction letters and employer NOCs.",
    ],
    refusalReasons: [
      "Doubt regarding intention to leave the Schengen territory before visa expiry.",
      "Unrealistic dummy hotel bookings canceled mid-way through embassy verification.",
      "Weak ties to India: Lack of stable employment proof or property ties.",
      "Mismatched financial capability relative to the declared travel duration.",
    ],
    verified: true,
  },

  "czech-republic-business": {
    countrySlug: "czech-republic",
    visaType: "business",
    title: "Czech Republic Schengen Business Visa",
    badge: "Commercial & Corporate Meetings",
    seoTitle: "Czech Republic Business Visa from India | Travel Solo",
    seoDescription: "Fast-track business visas for Indian executives and entrepreneurs visiting Czech trade partners, factories, and industry expos.",
    whoItsFor: "Indian business owners, exporters, technical consultants, and corporate executives visiting Czech suppliers, clients, or attending European exhibitions.",
    overview: "When you have a factory audit in Brno or partner negotiations in Prague, delays cost money. A business visa requires a verified invitation letter from the Czech entity, often formally attested by the Czech Foreign Police. We ensure your Indian company recommendation letter and Czech host documentation align down to the exact meeting dates.",
    ourProcess: [
      "Review of the Czech business invitation letter to verify police validation requirements.",
      "Drafting the employer deputation letter and company financial sponsorship proof.",
      "Expedited VFS business slot appointment scheduling.",
      "File compilation with certificate of incorporation and GST returns of your Indian company.",
    ],
    refusalReasons: [
      "Vague invitation letter without clear commercial agenda or designated hosting company.",
      "Inconsistency between your Indian business activities and the Czech host's industry.",
      "Missing confirmation of who covers travel and lodging expenses.",
    ],
    verified: true,
  },

  // MALAYSIA
  "malaysia-job": {
    countrySlug: "malaysia",
    visaType: "job",
    title: "Malaysia Employment Pass & Professional Work Permit",
    badge: "Expatriate & Skilled Work",
    seoTitle: "Malaysia Work Visa & Employment Pass from India | Travel Solo",
    seoDescription: "Expatriate Employment Pass (Category I, II, III) filing for Indian professionals in Malaysia. Direct verification with ESD and MDEC.",
    whoItsFor: "IT architects, financial analysts, hospitality leads, and engineers hired by Malaysian companies or multinational shared services in Cyberjaya and KL.",
    overview: "Work in Malaysia for skilled expatriates runs through the Expatriate Services Division (ESD) and MDEC. The hiring company must first secure approval from the Malaysian Expatriate Committee. Once that approval letter arrives, Indian applicants must obtain an electronic Visa with Reference (e-VDR). We guide both candidates and employers through the regulatory documentation so you avoid border hold-ups.",
    ourProcess: [
      "Job offer vetting and ESD / MDEC position classification check.",
      "Cross-checking candidate degree against Malaysian Qualifications Agency guidelines.",
      "e-VDR (Visa with Reference) application filing and tracking.",
      "Medical examination coordination at authorized panel clinics (FOMEMA).",
      "Single entry visa stamp or e-Visa issuance before departure.",
    ],
    refusalReasons: [
      "Employer quota exhaustion or unapproved ESD company profile.",
      "Monthly salary offering below the mandatory statutory tier for the requested Pass category.",
      "Degrees from unaccredited distance universities without required experience letters.",
    ],
    extras: "job-placement",
    specialNote: "Employment passes must be sponsored by a registered Malaysian corporate entity. We coordinate documentation directly with your hiring company.",
    verified: true,
  },

  "malaysia-study": {
    countrySlug: "malaysia",
    visaType: "study",
    title: "Malaysia Student Pass (EMGS Visa Approval Letter)",
    badge: "Undergraduate & Postgraduate",
    seoTitle: "Malaysia Student Visa from India | Travel Solo",
    seoDescription: "Direct consultation for EMGS student visa processing in Malaysia. University admission paperwork, VAL tracking, and genuine SOP drafting.",
    whoItsFor: "Students pursuing engineering, business, and computer science degrees at institutions like Universiti Malaya, Taylor's, Sunway, or Monash Malaysia.",
    overview: "Malaysia has built world-ranking campuses with tuition costs under half of Singapore or Australia. All international student applications go through Education Malaysia Global Services (EMGS). Once EMGS issues your Visa Approval Letter (VAL), getting the single-entry visa takes just days. We audit your academic records and monitor your VAL progress percentage step by step.",
    ourProcess: [
      "Course and university offer letter acceptance verification.",
      "EMGS online portal registration and document submission audit.",
      "Custom Statement of Purpose explaining your chosen field and long-term career intent.",
      "Health declaration and medical screening compliance.",
      "VAL generation tracking and single-entry visa processing through Window Malaysia.",
    ],
    refusalReasons: [
      "Academic gaps over three years without documented employment evidence.",
      "Pre-existing medical conditions flagged during the EMGS screening protocol.",
      "Funds unverified or failing basic living expense adequacy checks.",
    ],
    extras: "admission-sop",
    specialNote: "We support admissions and SOP creation for reputable Malaysian institutions. No scholarship applications are handled.",
    verified: true,
  },

  "malaysia-tourist": {
    countrySlug: "malaysia",
    visaType: "tourist",
    title: "Malaysia Tourist eVisa & MDAC Registration",
    badge: "Rapid Electronic Visa",
    seoTitle: "Malaysia Tourist Visa for Indians | Travel Solo",
    seoDescription: "Fast Malaysia tourist eVisa processing for Indian passport holders. Accurate document upload, photo compliance, and MDAC arrival card filing.",
    whoItsFor: "Families, honeymooners, and solo backpackers visiting Kuala Lumpur, Penang, Langkawi, or Sabah.",
    overview: "While visa policies for Indian tourists periodically include visa-free entry windows with the mandatory Malaysia Digital Arrival Card (MDAC), electronic visa requirements change frequently based on bilateral accords. An incorrect photo dimension or unconfirmed return flight will cause immediate border interrogation or online denial. We take care of the entire filing within 24 to 48 hours.",
    ourProcess: [
      "Review of passport validity (minimum 6 months from entry date).",
      "Photo spec compliance (studio white background, specific facial ratio).",
      "Return air ticket confirmation and confirmed hotel reservation check.",
      "Window Malaysia portal application or MDAC submission 3 days before travel.",
      "Delivering the official PDF entry pass directly to your WhatsApp.",
    ],
    refusalReasons: [
      "Non-compliant passport photo (incorrect dimensions or shadow on background).",
      "Missing confirmed return ticket back to India or onwards to a third country.",
      "Previous overstay record in Malaysia or Southeast Asian neighboring states.",
    ],
    verified: true,
  },

  "malaysia-business": {
    countrySlug: "malaysia",
    visaType: "business",
    title: "Malaysia Business & Trade eVisa",
    badge: "Meetings, Trade Fairs & Site Visits",
    seoTitle: "Malaysia Business Visa for Indians | Travel Solo",
    seoDescription: "Secure your Malaysia business visa for vendor meetings, supply-chain checks, and corporate events across Kuala Lumpur and Penang.",
    whoItsFor: "Traders, sourcing agents, software consultants, and corporate representatives meeting Malaysian suppliers, partners, or attending MITEC conferences.",
    overview: "For commercial discussions and client presentations, arriving on a tourist visa can get you questioned at airport immigration. A business eVisa provides clear legal backing for your trip. We ensure the invitation from the Malaysian SSM-registered company matches your Indian company's authorization letter perfectly.",
    ourProcess: [
      "Verification of Malaysian company SSM registration extract.",
      "Invitation letter vetting with specific business agenda and visit duration.",
      "Indian company deputation letter and GST profile compilation.",
      "Submission on the official business visa portal with prompt follow-up.",
    ],
    refusalReasons: [
      "Invitation letter from an unregistered or dormant Malaysian entity.",
      "Vague business purpose that immigration suspects might be covert manual work.",
    ],
    verified: true,
  },

  // RUSSIA
  "russia-job": {
    countrySlug: "russia",
    visaType: "job",
    title: "Russia Work Visa & Highly Qualified Specialist (HQS) Permit",
    badge: "Direct Employment Authorization",
    seoTitle: "Russia Work Visa for Indians | Travel Solo",
    seoDescription: "Navigate Russian work visas and HQS status directly from Delhi. Official migration invitation, medical tests, and Ministry filings handled end to end.",
    whoItsFor: "Indian engineers, heavy machinery supervisors, chefs, garment specialists, and executives employed by Russian enterprises.",
    overview: "Obtaining a Russian work visa requires a formal electronic or yellow-paper migration invitation issued by the Ministry of Internal Affairs (MVD). Russian immigration enforces strict health checks, including certified HIV and infectious disease testing at accredited centers. We handle your documentation directly from Delhi without shady middle agents.",
    ourProcess: [
      "Verification of Russian corporate employer quota and MVD invitation issue.",
      "Authorized medical exam guidance including HIV and tuberculosis screening.",
      "Educational certificates translation into Russian with notary validation.",
      "Application file submission at the Russian Visa Centre in New Delhi.",
      "Single-entry to multiple-entry work permit extension guidance once in Russia.",
    ],
    refusalReasons: [
      "MVD invitation mismatch or employer failing Russian migration audits.",
      "Failure to provide valid HIV-negative certificate issued within 90 days.",
      "Discrepancies in Russian translation of Indian identification documents.",
    ],
    extras: "job-placement",
    specialNote: "All Russian work visas require a formal Ministry of Internal Affairs (MVD) invitation from an authorized Russian employer.",
    verified: true,
  },

  "russia-study": {
    countrySlug: "russia",
    visaType: "study",
    title: "Russia Student Visa (NMC-Approved Medical & Technical Degrees)",
    badge: "University Education",
    seoTitle: "Russia Student Visa from India | Travel Solo",
    seoDescription: "Get your Russian student visa for MBBS and engineering universities. Ministry of Science invitation verification, HIV testing, and direct filing in Delhi.",
    whoItsFor: "Students admitted to Russian state universities for MBBS, aerospace engineering, computer science, or Russian language preparatory faculties.",
    overview: "Russia remains one of the top destinations for Indian medical aspirants seeking NMC-compliant MBBS courses. However, students frequently fall prey to unauthorized agents who issue bogus invitations or fail to explain the annual visa extension process. We ensure your invitation originates directly from the university through the Ministry of Science and Higher Education, keeping your paperwork legitimate from day one.",
    ourProcess: [
      "Direct verification of university admission letter and official MVD study invitation.",
      "10+2 marksheet MEA apostille and certified Russian translation.",
      "Mandatory medical tests coordination (HIV negative certificate required).",
      "Visa file submission at the Russian Embassy / Visa Application Centre.",
      "Pre-departure briefing regarding Moscow/regional registration upon arrival.",
    ],
    refusalReasons: [
      "Forged or expired university invitation letter from unauthorized brokers.",
      "Missing MEA apostille on academic certificates.",
      "Passport validity under 18 months from the anticipated date of student visa issue.",
    ],
    extras: "admission-sop",
    specialNote: "We guide university document procedures. We do not provide scholarship application services.",
    verified: true,
  },

  "russia-tourist": {
    countrySlug: "russia",
    visaType: "tourist",
    title: "Russia Unified Electronic Visa (e-Visa) & Tourist Voucher",
    badge: "Single-Entry Short Stay",
    seoTitle: "Russia Tourist Visa for Indians | Travel Solo",
    seoDescription: "Simple, fast Russian tourist e-Visa and tourist voucher services for Indian travelers. Explore Moscow, St. Petersburg, and Lake Baikal.",
    whoItsFor: "Travelers heading to Moscow, Saint Petersburg, Kazan, or the Trans-Siberian route for sightseeing and cultural trips.",
    overview: "The Russian Federation's Unified Electronic Visa lets Indian passport holders visit for up to 16 calendar days with an online application. For longer trips, a traditional tourist visa with an official Tourist Confirmation Voucher (Voucher and Confirmation letter from an authorized Russian tour operator) is required. We prepare both with zero guesswork.",
    ourProcess: [
      "Evaluating your trip length to choose between the 16-day e-Visa or standard tourist visa.",
      "Procuring authentic Russian tour operator tourist confirmation and voucher.",
      "Compiling travel health insurance valid on Russian territory for your full stay.",
      "Filing the e-Visa application on the Russian Foreign Ministry portal or embassy center.",
    ],
    refusalReasons: [
      "Typographical error in name or passport number on the e-Visa portal.",
      "Tourist voucher issued by an entity not listed on the Federal Tourism Register.",
      "Insurance policy omitting explicit geographical coverage for Russia.",
    ],
    verified: true,
  },

  "russia-business": {
    countrySlug: "russia",
    visaType: "business",
    title: "Russia Commercial & Business Visa",
    badge: "Trade Delegations & Contracts",
    seoTitle: "Russia Business Visa for Indians | Travel Solo",
    seoDescription: "Business visas for Indian exporters, pharmaceutical leaders, and logistics partners visiting Russian enterprise partners.",
    whoItsFor: "Directors, export managers, and technical specialists negotiating commercial contracts, sourcing commodities, or exhibiting at Expocentre Moscow.",
    overview: "Bilateral trade between India and Russia in pharmaceuticals, tea, electronics, and engineering goods requires steady on-the-ground presence. A Russian business visa can be issued for 3 months, 1 year, or up to 5 years depending on the invitation type (Direct MVD telex or Chamber of Commerce letter). We manage the paperwork cleanly.",
    ourProcess: [
      "Assessing host invitation validity (MVD electronic telex or formal letter).",
      "Drafting Indian corporate covering letter with exact commercial purpose.",
      "HIV test report coordination for multi-entry visas.",
      "Submission at Russian Visa Centre with fast-track processing.",
    ],
    refusalReasons: [
      "Unverifiable Russian counterpart or revoked corporate license.",
      "Mismatch between stated trade purpose and supporting business records.",
    ],
    verified: true,
  },

  // SLOVENIA
  "slovenia-job": {
    countrySlug: "slovenia",
    visaType: "job",
    title: "Slovenia Single Work & Residence Permit (Enotno Dovoljenje)",
    badge: "EU Single Permit",
    seoTitle: "Slovenia Work Visa for Indians | Travel Solo",
    seoDescription: "Apply for Slovenia's Single Work & Residence Permit directly from Delhi. Employer labour market test, apostille, and embassy filing handled clearly.",
    whoItsFor: "Indian software engineers, truck drivers, construction project supervisors, welders, and hospitality workers with Slovenian employment contracts.",
    overview: "Slovenia combines your work authorization and Schengen residence card into one document: the Single Permit (Enotno Dovoljenje). The hiring company must first pass a labour market test with the Slovenian Employment Service (ZRSZ). Once cleared, the application is processed through the Slovenian Embassy in Delhi. We prepare your apostilled paperwork and track every stage.",
    ourProcess: [
      "Verification that the Slovenian employer has cleared the ZRSZ labour market test.",
      "Complete MEA apostille on Indian degree certificates and police clearance report.",
      "Official Slovenian court translation arranged through certified court translators.",
      "Submission packet compilation adhering strictly to the Ljubljana administrative unit guidelines.",
      "Embassy appointment booking in New Delhi and biometric submission guidance.",
    ],
    refusalReasons: [
      "ZRSZ labour market test failure: Slovenian or EU resident available for the position.",
      "Police clearance certificate older than three months at the time of embassy filing.",
      "Employer failing to satisfy statutory tax clearance checks in Slovenia.",
    ],
    extras: "job-placement",
    specialNote: "The Slovenian employer must initiate the labour market clearance. We assist with candidate documentation and direct embassy submission in New Delhi.",
    verified: true,
  },

  "slovenia-study": {
    countrySlug: "slovenia",
    visaType: "study",
    title: "Slovenia Temporary Residence Permit for Study",
    badge: "Higher Education in Schengen",
    seoTitle: "Slovenia Student Visa from India | Travel Solo",
    seoDescription: "Study at the University of Ljubljana or University of Maribor. Secure your student residence permit with direct Delhi documentation support.",
    whoItsFor: "Indian students enrolled in degree courses, Erasmus exchange programs, or doctoral research in Slovenia.",
    overview: "Slovenia boasts high academic standards with very reasonable living costs in central Europe. International students can legally work part-time through the 'Student Service' (Študentski servis) platform. Your residence permit application must prove financial independence, medical insurance, and valid enrolled student status. We build a clear file that leaves no room for administrative rejection.",
    ourProcess: [
      "Validation of university enrollment certificate and study programme.",
      "Nostrification preparation for high school diplomas and university degrees.",
      "Financial means audit satisfying statutory monthly subsistence figures.",
      "Apostille of police verification certificate and birth certificate.",
      "Submission at the Embassy of Slovenia in Delhi and administrative follow-up.",
    ],
    refusalReasons: [
      "Proof of funds falling short of the required Slovenian statutory living allowance.",
      "Missing apostille on secondary school transcripts.",
      "Inability to explain academic program rationale during embassy intake.",
    ],
    extras: "admission-sop",
    specialNote: "We guide university paperwork and SOP writing. We do not provide scholarship acquisition services.",
    verified: true,
  },

  "slovenia-tourist": {
    countrySlug: "slovenia",
    visaType: "tourist",
    title: "Slovenia Schengen Tourist Visa",
    badge: "Short Stay Tourist",
    seoTitle: "Slovenia Tourist Visa for Indians | Travel Solo",
    seoDescription: "Plan your trip to Lake Bled, Ljubljana castle, and the Julian Alps with a verified Schengen tourist visa filed through Travel Solo in Delhi.",
    whoItsFor: "Indian holidaymakers, alpine hiking enthusiasts, and travelers looking for scenic European vacations away from crowded tourist circuits.",
    overview: "Slovenia is a pure alpine wonderland, but its embassy scrutinizes tourist applications with great care because it grants entry to the entire Schengen territory. A boilerplate cover letter or unconfirmed booking will trigger a refusal. We craft detailed, personal itineraries reflecting your genuine travel preferences and assemble an unshakeable financial trail.",
    ourProcess: [
      "Individual travel profiling and itinerary design reflecting actual train and hotel routes.",
      "Financial statement packaging showing clear tax returns and disposable bank balance.",
      "Comprehensive Schengen travel insurance with repatriation coverage.",
      "VFS appointment booking and physical file compilation.",
    ],
    refusalReasons: [
      "Lack of demonstrated financial stability relative to European trip expenses.",
      "Unconvincing itinerary suggesting potential unauthorized employment in the EU.",
      "Incomplete employer NOC or leave sanction certificate.",
    ],
    verified: true,
  },

  "slovenia-business": {
    countrySlug: "slovenia",
    visaType: "business",
    title: "Slovenia Schengen Business Visa",
    badge: "Corporate & Technical Visits",
    seoTitle: "Slovenia Business Visa from India | Travel Solo",
    seoDescription: "Business visas for Indian executives visiting Slovenian manufacturing partners, tech companies, and pharmaceutical plants.",
    whoItsFor: "Indian business executives, industrial engineers, and procurement specialists attending meetings or technical audits in Slovenia.",
    overview: "Slovenia has a specialized industrial base in pharmaceuticals (Krka, Lek), automotive components, and clean tech. If your Indian company is partnering with a Slovenian enterprise, you need a formal business invitation letter certified by the Slovenian Administrative Unit (Upravna Enota). We ensure every formal clause is fulfilled.",
    ourProcess: [
      "Review of the Slovenian Upravna Enota certified letter of guarantee.",
      "Indian company recommendation and financial sponsorship letter drafting.",
      "Priority business biometrics booking and file submission.",
    ],
    refusalReasons: [
      "Letter of guarantee missing mandatory administrative unit stamp.",
      "Ambiguity regarding who bears travel and accommodation expenses.",
    ],
    verified: true,
  },

  // SINGAPORE
  "singapore-job": {
    countrySlug: "singapore",
    visaType: "job",
    title: "Singapore Employment Pass (EP) & S Pass Documentation",
    badge: "High-Skilled Professional Pass",
    seoTitle: "Singapore Work Visa & EP Consultant in Delhi | Travel Solo",
    seoDescription: "Employment Pass and S Pass application review for Indian professionals. COMPASS framework scoring audit and candidate verification in Delhi.",
    whoItsFor: "Software developers, banking professionals, supply chain managers, and executives holding Singapore job offers.",
    overview: "Singapore's Ministry of Manpower (MOM) operates under the COMPASS points-based evaluation framework. Securing an Employment Pass requires passing salary thresholds and points across qualification, diversity, and local hiring criteria. While Singapore work passes are legally submitted by the Singapore hiring employer or authorized employment agency, candidate document verification can make or break the approval. We audit your credentials against MOM standards before your employer submits.",
    ourProcess: [
      "COMPASS framework pre-evaluation (salary benchmark and qualification points check).",
      "Accredited third-party background screening check preparation (Dataflow / CIS / Veremark).",
      "Job role alignment with Singapore Standard Occupational Classification (SSOC).",
      "In-Principal Approval (IPA) tracking and pre-landing onboarding brief.",
    ],
    refusalReasons: [
      "Failing the MOM COMPASS framework passing threshold (minimum 40 points).",
      "Degree awarded by an institution not recognized under MOM's verification lists.",
      "Hiring company exceeding foreign worker dependency ratio ceilings (for S Pass).",
    ],
    extras: "job-placement",
    specialNote: "Singapore Employment Passes must be submitted by the Singapore employer or their registered employment agency. We prepare candidate credentials and pre-screen COMPASS scoring.",
    verified: true,
  },

  "singapore-study": {
    countrySlug: "singapore",
    visaType: "study",
    title: "Singapore Student's Pass (SOLAR System)",
    badge: "Premier Higher Education",
    seoTitle: "Singapore Student Visa from India | Travel Solo",
    seoDescription: "Secure your Singapore Student's Pass through the ICA SOLAR system. Direct document validation, financial declarations, and Delhi consultancy.",
    whoItsFor: "Students accepted into NUS, NTU, SMU, INSEAD Singapore, SIM, or accredited private education institutions (PEIs) registered under EduTrust.",
    overview: "Singapore offers world-class academic pedigree minutes from India. Once accepted by an approved Institute of Higher Learning, your student pass application is filed via the Student's Pass On-Line Application & Registration (SOLAR) system with the Immigration & Checkpoints Authority (ICA). We handle the complete documentation, ensuring your financial guarantees satisfy Singapore immigration.",
    ourProcess: [
      "SOLAR application form eForm 16 drafting and validation.",
      "EduTrust certification check for private education institutions.",
      "Family financial declaration and liquid funds documentation audit.",
      "IPA (In-Principle Approval) letter collection and landing biometrics booking.",
    ],
    refusalReasons: [
      "Unexplained academic gaps over two years without documentary justification.",
      "Discrepancies in parent financial declarations submitted to ICA.",
      "Applying to a private institution that has lost EduTrust certification.",
    ],
    extras: "admission-sop",
    specialNote: "We guide university documentation and admissions. We do not provide scholarship application services.",
    verified: true,
  },

  "singapore-tourist": {
    countrySlug: "singapore",
    visaType: "tourist",
    title: "Singapore Tourist eVisa & SG Arrival Card",
    badge: "Electronic Tourist Entry",
    seoTitle: "Singapore Tourist Visa for Indians | Travel Solo",
    seoDescription: "Fast Singapore tourist eVisa processing for Indian families and solo travelers. Approved through authorized ICA submission channels.",
    whoItsFor: "Families visiting Universal Studios and Gardens by the Bay, cruise passengers, and transit travelers exploring Singapore.",
    overview: "Singapore does not issue visas on arrival for Indian passport holders. You must hold a valid eVisa before boarding your flight. The ICA requires applications to be submitted through authorized visa agents. A simple mismatch in address or a low-resolution scan leads directly to an outright refusal. We process Singapore eVisas with an impeccable 98% track record.",
    ourProcess: [
      "Verification of original passport scan quality and validity.",
      "Form 14A completion with exact employment and residential details.",
      "Review of round-trip flight booking and hotel vouchers.",
      "Submission through authorized direct processing channels.",
      "SG Arrival Card (SGAC) with electronic health declaration filed prior to departure.",
    ],
    refusalReasons: [
      "Submission of unclear passport scans or non-compliant digital photos.",
      "Mismatched employment details or unverified residential address in India.",
      "Previous rejection within the past 6 months without changed material facts.",
    ],
    verified: true,
  },

  "singapore-business": {
    countrySlug: "singapore",
    visaType: "business",
    title: "Singapore Business eVisa & Corporate Pass",
    badge: "Commercial Meetings & FinTech Expos",
    seoTitle: "Singapore Business Visa from India | Travel Solo",
    seoDescription: "Corporate Singapore business visas for fintech founders, tech executives, and commercial representatives. Processed cleanly from Delhi.",
    whoItsFor: "Corporate delegates attending conferences at Marina Bay Sands or Singapore EXPO, meeting investors, or negotiating regional contracts.",
    overview: "As the corporate gateway of Asia, Singapore hosts major regional trade summits and board meetings. A business visa requires an official Form V39A (Letter of Introduction for Visa Application) signed by a Singapore-registered corporate entity or local citizen. We verify your host's ACRA business registration and prepare an airtight submission.",
    ourProcess: [
      "Verification of Form V39A signed by a Singapore-registered entity with valid UEN.",
      "Indian corporate deputation letter and event registration check.",
      "Direct ICA electronic submission with expedited tracking.",
    ],
    refusalReasons: [
      "Invalid or unsigned Form V39A from the local Singapore contact.",
      "Discrepancy in company UEN number with ACRA database.",
    ],
    verified: true,
  },
};
