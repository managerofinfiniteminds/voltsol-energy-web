import type { Metadata } from "next";
import { displayFont, bodyFont } from "@/lib/fonts";
import { Header } from "@/components/ui/Header";
import { Footer } from "@/components/ui/Footer";
import { StickyMobileCTA } from "@/components/ui/StickyMobileCTA";
import "./globals.css";

export const metadata: Metadata = {
  title: "VoltSol Energy — Off-Grid Solar | Northern California",
  description:
    "Premium off-grid solar installations for Northern California. EG4 battery systems, expert design, and turnkey builds. Get your free quote today.",
  openGraph: {
    title: "VoltSol Energy — Off-Grid Solar | Northern California",
    description:
      "Premium off-grid solar installations for Northern California. EG4 battery systems, expert design, and turnkey builds.",
    siteName: "VoltSol Energy",
    type: "website",
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
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <StickyMobileCTA />
      </body>
    </html>
  );
}
