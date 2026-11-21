import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/navigation/Navbar";
import Footer from "@/components/navigation/Footer";
import FloatingWhatsApp from "@/components/navigation/FloatingWhatsApp";
import MobileBottomBar from "@/components/navigation/MobileBottomBar";
import CookieConsent from "@/components/navigation/CookieConsent";
import { siteConfig } from "@/content/site";
import { generateOrganizationSchema } from "@/lib/seo";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "Travel Solo | Visa Consultants in Delhi for 5 Countries",
    template: "%s | Travel Solo",
  },
  description:
    "Direct visa consultancy in Dwarka, New Delhi. Specialized in Czech Republic, Malaysia, Russia, Slovenia, and Singapore. Study, work, tourist, and business visas filed directly with zero sub-agents.",
  keywords: [
    "visa consultant Dwarka Delhi",
    "Czech Republic work visa from India",
    "Slovenia work permit India",
    "Malaysia tourist visa",
    "Russia MBBS student visa",
    "Singapore employment pass help",
  ],
  alternates: {
    canonical: "./",
  },
  openGraph: {
    title: "Travel Solo | Direct Visa Consultancy in Delhi",
    description: "Your next chapter starts at the window seat. Specialized in 5 countries with zero sub-agents and a 100% 7-day refund guarantee.",
    url: siteConfig.url,
    siteName: siteConfig.name,
    locale: "en_IN",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const orgSchema = generateOrganizationSchema();

  return (
    <html lang="en-IN" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300;0,9..144,400;1,9..144,400&family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
        />
      </head>
      <body className="bg-midnight text-cloud min-h-screen flex flex-col selection:bg-coral selection:text-white">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <FloatingWhatsApp />
        <MobileBottomBar />
        <CookieConsent />
      </body>
    </html>
  );
}
