import type { Metadata } from "next";
import { Section, Container } from "@/components/ui";
import { FileText, Download } from "lucide-react";

export const metadata: Metadata = {
  title: "Documents — VoltSol Energy",
  description:
    "Download official VoltSol Energy documents, contracts, and resources.",
  alternates: { canonical: "https://voltsolenergy.com/documents" },
};

type DocItem = {
  title: string;
  description: string;
  href: string;
  filename: string;
  size: string;
  updated: string;
};

// Add new documents here over time.
const documents: DocItem[] = [
  {
    title: "Brightshield Contract",
    description: "Official Brightshield service contract.",
    href: "/documents/brightshield-contract.pdf",
    filename: "brightshield-contract.pdf",
    size: "2.9 MB",
    updated: "June 15, 2026",
  },
];

export default function DocumentsPage() {
  return (
    <Section className="hero-bg relative overflow-hidden py-12 sm:py-16 lg:py-20">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="solar-rays absolute inset-x-0 top-0 h-[320px]" />
      </div>

      <Container className="relative">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="font-display text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
            Documents
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-lg text-blue-200">
            Official VoltSol Energy documents and resources, available to view
            or download.
          </p>
        </div>

        <div className="mx-auto mt-12 max-w-3xl">
          <ul className="space-y-4">
            {documents.map((doc) => (
              <li
                key={doc.href}
                className="group flex flex-col gap-4 rounded-2xl border border-blue-900/50 bg-navy/40 p-5 backdrop-blur-sm transition-colors hover:border-gold/50 sm:flex-row sm:items-center sm:justify-between sm:p-6"
              >
                <div className="flex items-start gap-4">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gold/10 text-gold ring-1 ring-gold/20">
                    <FileText size={22} aria-hidden="true" />
                  </span>
                  <div>
                    <h2 className="font-display text-lg font-semibold text-white">
                      {doc.title}
                    </h2>
                    <p className="mt-1 text-sm text-blue-200/80">
                      {doc.description}
                    </p>
                    <p className="mt-2 text-xs text-slate-400">
                      PDF &middot; {doc.size} &middot; Updated {doc.updated}
                    </p>
                  </div>
                </div>

                <a
                  href={doc.href}
                  download={doc.filename}
                  className="inline-flex shrink-0 items-center justify-center gap-2 rounded-lg bg-gold px-5 py-2.5 text-sm font-semibold text-navy shadow-sm transition-transform hover:scale-[1.02] hover:bg-gold-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
                  aria-label={`Download ${doc.title} (PDF, ${doc.size})`}
                >
                  <Download size={16} aria-hidden="true" />
                  Download
                </a>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </Section>
  );
}
