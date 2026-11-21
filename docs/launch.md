# Travel Solo Launch QA & Verification Checklist

Checklist before connecting the custom domain and spending on paid marketing.

## 1. Domain & Environment Configuration
- [ ] Connect custom apex domain (`travelsolo.in`) and `www` alias with automatic SSL on Vercel.
- [ ] Set production environment variables in Vercel project settings:
  - `NEXT_PUBLIC_WHATSAPP_NUMBER` (e.g. `48537623077`)
  - `NEXT_PUBLIC_SITE_URL` (`https://travelsolo.in`)
  - `NEXT_PUBLIC_CAL_LINK` (`https://cal.com/travelsolo/20min`)
  - `NEXT_PUBLIC_GA_ID` (Google Analytics 4 Measurement ID)
  - `APPS_SCRIPT_URL` & `APPS_SCRIPT_TOKEN`
  - `UPI_ID`, `BANK_ACCOUNT_NAME`, `BANK_ACCOUNT_NUMBER`, `BANK_IFSC`, `BANK_NAME`
- [ ] Verify `ALLOW_DUMMY=false` in production build so testimonials require verified real reviews before deploy.

## 2. Technical SEO & Indexing
- [ ] Verify `sitemap.xml` generated at `/sitemap.xml`.
- [ ] Verify `robots.txt` disallows `/pay` and `/api/` endpoints.
- [ ] Submit sitemap in Google Search Console on launch day.
- [ ] Verify structured data (Organization, ProfessionalService, BreadcrumbList, FAQPage, Service) using the Google Rich Results Test tool.

## 3. Local SEO (Google Business Profile)
- [ ] Claim and verify Google Business Profile for the Dwarka office:
  - **Business Name:** Travel Solo Visa Consultancy
  - **Address:** Plot 14, Sector 12 Dwarka, New Delhi, Delhi 110078
  - **Phone:** +48 537 623 077
  - **Primary Category:** Visa Consultant / Immigration Attorney
- [ ] Embed confirmed Google Maps iframe on the `/contact` page.

## 4. Conversion & Flow Testing
- [ ] Test every "Get a Quote" button across mobile Safari and Android Chrome to confirm WhatsApp opens with the correct prefilled text.
- [ ] Test the Eligibility Checker Quiz: completes in ~60s, score calculates, WhatsApp link inherits candidate's qualification & timeline.
- [ ] Test Document Checklist PDF download: generates branded PDF with date and selected destination.
- [ ] Test `/apply` form submission: check that Google Sheet records new row and owner receives instant email notification.
- [ ] Test `/pay` page: QR code renders with correct UPI string and copy buttons copy account numbers accurately.
