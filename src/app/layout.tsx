import type { Metadata } from "next";
import { displayFont, bodyFont } from "@/lib/fonts";
import { SiteHeader, SiteFooter, SiteStickyCTA } from "@/components/ui/SiteChrome";
import "./globals.css";

const siteUrl = "https://voltsolenergy.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default:
      "VoltSol Energy — Off-Grid Solar Under $10k | Northern California",
    template: "%s — VoltSol Energy",
  },
  description:
    "Off-grid solar installations for Northern California homes — EG4 battery + inverter + mini-split systems under $10,000. Free estimate, no pressure.",
  keywords: [
    "off-grid solar",
    "Northern California solar",
    "EG4 solar",
    "solar battery storage",
    "solar under $10k",
    "off-grid EG4",
    "solar lead generation",
    "PG&E alternative",
    "solar installation NorCal",
    "FlexBOSS18 inverter",
  ],
  openGraph: {
    title: "VoltSol Energy — Off-Grid Solar Under $10k | Northern California",
    description:
      "Off-grid solar installations for Northern California homes — EG4 battery + inverter + mini-split systems under $10,000. Free estimate, no pressure.",
    siteName: "VoltSol Energy",
    url: siteUrl,
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "VoltSol Energy — Off-Grid Solar for Northern California",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "VoltSol Energy — Off-Grid Solar Under $10k",
    description:
      "Off-grid solar for Northern California homes. EG4 systems under $10k. Free estimate.",
    images: ["/og-image.png"],
  },
  alternates: {
    canonical: siteUrl,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${displayFont.variable} ${bodyFont.variable}`}
    >
      <body className="flex min-h-screen flex-col">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-gold focus:px-4 focus:py-2 focus:font-semibold focus:text-navy"
        >
          Skip to content
        </a>
        <SiteHeader />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <SiteFooter />
        <SiteStickyCTA />
      </body>
    </html>
  );
}
