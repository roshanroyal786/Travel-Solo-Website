# Travel Solo — Visa Consultancy Website

Cinematic, fast, editorial, and conversion-focused website for **Travel Solo**, a registered visa consultancy in Dwarka, New Delhi.

Specialized in five destination corridors: **Czech Republic, Malaysia, Russia, Slovenia, and Singapore** across four visa types: **Job (Work), Study, Tourist, and Business**.

---

## Tech Stack

- **Framework**: Next.js 15 (App Router), TypeScript
- **Styling**: Tailwind CSS v4, custom CSS variables
- **Icons**: Lucide React
- **Document Generation**: jsPDF (client-side branded PDF checklist generator)
- **Validation**: Zod & structured server-side handlers
- **Lead Pipeline**: Route handlers forwarding to Google Apps Script (Sheets & Drive)

---

## Key Features

1. **Editorial & Brand Pacing**: Midnight Ink base, Champagne accents, Dawn Coral CTAs, Fraunces serif headlines.
2. **Interactive Tools**:
   - **Eligibility Checker**: 60-second quiz assessing candidate qualification, funds, and experience.
   - **Document Checklist Generator**: Grouped tickable items with client-side PDF export and WhatsApp share.
   - **Processing Time Estimator**: Realistic timelines factoring prep, biometrics queue, embassy review, and buffer.
3. **25 Country & Visa Hubs**: 5 country hubs and 20 statically generated visa pages.
4. **Lead Capture & Booking**: Custom `/apply` form with spam protection (honeypot) and Cal.com integration at `/book`.
5. **Private Payment Route**: `/pay` (noindex) with dynamic UPI QR code, bank transfer details, and UTR payment verification.
6. **Full Legal Suite**: Privacy Policy (DPDP Act 2023), Terms of Service, 100% 7-day Refund Policy, and Independent Consultancy Notice.

---

## Local Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

---

## Building for Production

```bash
npm run build
npm run start
```
