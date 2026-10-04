import type { Metadata } from "next";
import "./globals.css";
import { siteConfig } from "@/lib/config/site";
import { LanguageProvider } from "@/lib/i18n/context";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppFloating } from "@/components/layout/WhatsAppFloating";

export const metadata: Metadata = {
  title: {
    default: `${siteConfig.name} — ${siteConfig.tagline}`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "presentation design",
    "Bangla presentation",
    "Class 5 science presentation",
    "Class 8 science slides",
    "Class 9 physics presentation",
    "university thesis defense presentation",
    "investor pitch deck Bangladesh",
    "madrasa presentation",
    "Alia madrasa slides",
    "Qawmi madrasa ifta slides",
    "business presentation service",
    "academic lecture slides",
    "Make Your Presentation",
    "MYP",
  ],
  authors: [{ name: "Make Your Presentation" }],
  creator: "Make Your Presentation",
  openGraph: {
    type: "website",
    locale: "bn_BD",
    alternateLocale: "en_US",
    url: "https://makeyourpresentation.com",
    title: `${siteConfig.name} — ${siteConfig.tagline}`,
    description: siteConfig.description,
    siteName: siteConfig.name,
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} — ${siteConfig.tagline}`,
    description: siteConfig.description,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="bn" dir="ltr" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:wght@500;600;700;800&family=Hind+Siliguri:wght@400;500;600;700&family=Noto+Sans+Arabic:wght@400;600;700&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="/brand-mark.webp" type="image/webp" />
      </head>
      <body className="min-h-screen flex flex-col bg-[#F7F8FB] text-[#0E1B33] antialiased selection:bg-[#1456C8] selection:text-white font-sans">
        <LanguageProvider>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
          <WhatsAppFloating />
        </LanguageProvider>
      </body>
    </html>
  );
}
