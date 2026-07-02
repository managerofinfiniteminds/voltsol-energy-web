import type { Metadata } from "next";
import Script from "next/script";
import { displayFont, bodyFont } from "@/lib/fonts";

// Google Analytics 4 Measurement ID (public by design). Property: VoltSol Energy.
const GA_MEASUREMENT_ID = "G-9FMXFMQLYT";
import { SiteHeader, SiteFooter, SiteStickyCTA, SiteChatWidget } from "@/components/ui/SiteChrome";
import { getHomeConfig } from "@/lib/site-config";
import { getLocale } from "@/lib/locale";
import "./globals.css";

const siteUrl = "https://voltsolenergy.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default:
      "VoltSol Energy — Residential Solar + Battery Storage in California from $8,700",
    template: "%s — VoltSol Energy",
  },
  description:
    "Residential solar + battery storage across Northern California — make your own power, store it, and use it. EG4 battery + inverter systems from $8,700. Keep the power you make instead of selling it to the grid for pennies. Free estimate, no pressure.",
  keywords: [
    "residential solar California",
    "home solar and battery storage",
    "solar battery storage",
    "solar self-consumption",
    "solar battery backup California",
    "NEM 3.0 solar battery",
    "keep your own solar power",
    "solar that works in a blackout",
    "EG4 solar",
    "home battery storage",
    "solar plus storage",
    "FlexBOSS18 inverter",
    "Northern California solar",
    "California solar installation",
  ],
  openGraph: {
    title: "VoltSol Energy — Residential Solar + Battery Storage in California from $8,700",
    description:
      "Residential solar + battery storage across Northern California — make it, store it, use it. EG4 systems from $8,700. Keep the power you make. Free estimate, no pressure.",
    siteName: "VoltSol Energy",
    url: siteUrl,
    type: "website",
    locale: "en_US",
    // og:image is auto-generated from src/app/opengraph-image.tsx (real VoltSol logo card)
  },
  twitter: {
    card: "summary_large_image",
    title: "VoltSol Energy — Residential Solar + Battery Storage from $8,700",
    description:
      "Residential solar + battery storage for Northern California. Make it, store it, use it. EG4 systems from $8,700. Free estimate.",
    // twitter:image also auto-uses the generated opengraph-image card
  },
  alternates: {
    canonical: siteUrl,
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "VoltSol Energy",
  url: siteUrl,
  logo: `${siteUrl}/images/voltsol-mark.svg`,
  email: "info@voltsolenergy.com",
  telephone: "+1-530-228-1091",
  description: "Residential solar + battery storage installations serving Northern California",
  areaServed: {
    "@type": "State",
    name: "California",
  },
  serviceType: "Solar Panel Installation",
  hasCredential: {
    "@type": "EducationalOccupationalCredential",
    credentialCategory: "license",
    name: "California Contractors State License Board (CSLB) License",
    identifier: "1148585",
    recognizedBy: {
      "@type": "GovernmentOrganization",
      name: "California Contractors State License Board",
    },
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
        {/* Google Analytics 4 (gtag.js) */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
          strategy="afterInteractive"
        />
        <Script id="ga4-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}');
          `}
        </Script>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
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
        <SiteChatWidget />
      </body>
    </html>
  );
}
