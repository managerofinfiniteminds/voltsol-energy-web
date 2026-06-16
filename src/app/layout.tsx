import type { Metadata } from "next";
import { displayFont, bodyFont } from "@/lib/fonts";
import { SiteHeader, SiteFooter, SiteStickyCTA } from "@/components/ui/SiteChrome";
import { getHomeConfig } from "@/lib/site-config";
import { getLocale } from "@/lib/locale";
import "./globals.css";

const siteUrl = "https://voltsolenergy.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default:
      "VoltSol Energy — Off-Grid Solar from $8,700",
    template: "%s — VoltSol Energy",
  },
  description:
    "Off-grid solar installations for your home — EG4 battery + inverter + solar-powered mini-split systems starting at $8,700. Free estimate, no pressure.",
  keywords: [
    "off-grid solar",
    "residential solar",
    "EG4 solar",
    "solar battery storage",
    "affordable off-grid solar",
    "off-grid EG4",
    "solar lead generation",
    "utility bill alternative",
    "solar installation",
    "FlexBOSS18 inverter",
  ],
  openGraph: {
    title: "VoltSol Energy — Off-Grid Solar from $8,700",
    description:
      "Off-grid solar installations for your home — EG4 battery + inverter + solar-powered mini-split systems starting at $8,700. Free estimate, no pressure.",
    siteName: "VoltSol Energy",
    url: siteUrl,
    type: "website",
    locale: "en_US",
    // og:image is auto-generated from src/app/opengraph-image.tsx (real VoltSol logo card)
  },
  twitter: {
    card: "summary_large_image",
    title: "VoltSol Energy — Off-Grid Solar from $8,700",
    description:
      "Off-grid solar for your home. EG4 systems from $8,700. Free estimate.",
    // twitter:image also auto-uses the generated opengraph-image card
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
  const locale = getLocale();
  const cfg = await getHomeConfig(locale);
  const ctaText = cfg.cta_button_text;
  return (
    <html
      lang={locale}
      className={`${displayFont.variable} ${bodyFont.variable}`}
    >
      <body className="flex min-h-screen flex-col">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-gold focus:px-4 focus:py-2 focus:font-semibold focus:text-navy"
        >
          Skip to content
        </a>
        <SiteHeader ctaText={ctaText} locale={locale} />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <SiteFooter
          ctaText={ctaText}
          tagline={cfg.footer_tagline}
          email={cfg.footer_email}
          phone={cfg.contact_phone}
          copyrightYear={cfg.footer_copyright_year}
          copyrightRights={cfg.footer_copyright_rights}
          legalLine={cfg.footer_legal_line}
          links={cfg.footer_links}
        />
        <SiteStickyCTA ctaText={ctaText} locale={locale} />
      </body>
    </html>
  );
}
