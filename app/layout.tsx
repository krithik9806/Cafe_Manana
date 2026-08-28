import type { Metadata } from "next";
import { Playfair_Display, DM_Sans, Alex_Brush } from "next/font/google";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FloatingCTA from "@/components/layout/FloatingCTA";
import PageTransition from "@/components/layout/PageTransition";
import ScrollProgress from "@/components/ui/ScrollProgress";
import JsonLd from "@/components/seo/JsonLd";
import { SITE_SETTINGS } from "@/lib/data/siteData";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

const alexBrush = Alex_Brush({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-alex-brush",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000"),
  title: {
    template: "%s | Cafe Manana",
    default: "Cafe Manana — Coffee & Community",
  },
  description: SITE_SETTINGS.tagline || "Specialty coffee, wood-fired 12\" sourdough pizzas, and slow mornings.",
  openGraph: {
    title: "Cafe Manana — Specialty Coffee & Woodfired Bakehouse",
    description: SITE_SETTINGS.heroSubtext || SITE_SETTINGS.tagline,
    siteName: "Cafe Manana",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cafe Manana",
    description: SITE_SETTINGS.tagline,
  },
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${dmSans.variable} ${alexBrush.variable} scroll-smooth`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <JsonLd siteSettings={SITE_SETTINGS} />
      </head>
      <body className="antialiased bg-cream text-brown-mid font-body min-h-screen flex flex-col justify-between">
        <ScrollProgress />
        <Navbar siteSettings={SITE_SETTINGS} />
        <main className="flex-grow">
          <PageTransition>{children}</PageTransition>
        </main>
        <Footer siteSettings={SITE_SETTINGS} />
        <FloatingCTA phone={SITE_SETTINGS.phone} />
      </body>
    </html>
  );
}
