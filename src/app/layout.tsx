import type { Metadata } from "next";
import { displayFont, bodyFont } from "@/lib/fonts";
import { SiteHeader, SiteFooter, SiteStickyCTA } from "@/components/ui/SiteChrome";
import { getHomeConfig } from "@/lib/site-config";
import "./globals.css";

const siteUrl = "https://voltsolenergy.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default:
      "VoltSol Energy — Off-Grid Solar from $8,700 | Northern California",
    template: "%s — VoltSol Energy",
  },
  description:
    "Off-grid solar installations for Northern California homes — EG4 battery + inverter + solar-powered mini-split systems starting at $8,700. Free estimate, no pressure.",
  keywords: [
    "off-grid solar",
    "Northern California solar",
    "EG4 solar",
    "solar battery storage",
    "affordable off-grid solar",
    "off-grid EG4",
    "solar lead generation",
    "utility bill alternative",
    "solar installation NorCal",
    "FlexBOSS18 inverter",
  ],
  openGraph: {
    title: "VoltSol Energy — Off-Grid Solar from $8,700 | Northern California",
    description:
      "Off-grid solar installations for Northern California homes — EG4 battery + inverter + solar-powered mini-split systems starting at $8,700. Free estimate, no pressure.",
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
    title: "VoltSol Energy — Off-Grid Solar from $8,700",
    description:
      "Off-grid solar for Northern California homes. EG4 systems from $8,700. Free estimate.",
    images: ["/og-image.png"],
  },
  alternates: {
    canonical: siteUrl,
  },
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const cfg = await getHomeConfig();
  const ctaText = cfg.cta_button_text;
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
        <SiteHeader ctaText={ctaText} />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <SiteFooter
          ctaText={ctaText}
          tagline={cfg.footer_tagline}
          email={cfg.footer_email}
          copyrightYear={cfg.footer_copyright_year}
          copyrightRights={cfg.footer_copyright_rights}
          legalLine={cfg.footer_legal_line}
          links={cfg.footer_links}
        />
        <SiteStickyCTA ctaText={ctaText} />
      </body>
    </html>
  );
}
