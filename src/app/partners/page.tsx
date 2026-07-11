export const dynamic = 'force-dynamic';

import { sql } from '@/lib/db';
import Image from 'next/image';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Partners | VoltSol Energy',
  description:
    'VoltSol Energy partners with top contractors and businesses who share our commitment to quality solar installation and energy independence.',
};

interface Partner {
  id: number;
  company_name: string;
  category: string | null;
  website_url: string | null;
  logo_url: string | null;
  blurb: string | null;
  sort_order: number;
}

async function getPartners(): Promise<Partner[]> {
  const rows = await sql`
    SELECT id, company_name, category, website_url, logo_url, blurb, sort_order
    FROM partners
    WHERE visible = true
    ORDER BY sort_order ASC, id DESC
  `;
  return rows as Partner[];
}

export default async function PartnersPage() {
  const partners = await getPartners();

  return (
    <div className="min-h-screen bg-[#0F172A]">
      {/* Hero header */}
      <div className="border-b border-slate-800 bg-gradient-to-b from-slate-900 to-[#0F172A] px-6 py-16 sm:py-24">
        <div className="mx-auto max-w-5xl text-center">
          <h1 className="font-display text-4xl font-bold sm:text-5xl">
            <span className="text-white">Our </span>
            <span className="text-amber-400">Partners</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-slate-300">
            VoltSol Energy works with the best contractors and businesses. These partnerships help us deliver top-quality solar installations while supporting the communities we serve.
          </p>
        </div>
      </div>

      {/* Partner grid */}
      <div className="px-6 py-16">
        <div className="mx-auto max-w-6xl">
          {partners.length === 0 ? (
            <div className="rounded-lg border border-slate-700 bg-slate-800/50 p-12 text-center text-slate-400">
              <p>No partners listed yet. Check back soon!</p>
            </div>
          ) : (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {partners.map(partner => (
                <a
                  key={partner.id}
                  href={partner.website_url || '#'}
                  target={partner.website_url ? '_blank' : undefined}
                  rel={partner.website_url ? 'noopener' : undefined}
                  className={`group rounded-lg border border-slate-700 bg-slate-800/50 p-6 transition ${
                    partner.website_url
                      ? 'hover:border-amber-400/50 hover:bg-slate-800'
                      : 'cursor-default'
                  }`}
                >
                  {/* Logo */}
                  {partner.logo_url && (
                    <div className="mb-4 flex h-20 items-center justify-center">
                      <div className="relative h-full w-full">
                        <Image
                          src={partner.logo_url}
                          alt={`${partner.company_name} logo`}
                          fill
                          className="object-contain transition group-hover:grayscale-0 grayscale"
                          unoptimized={partner.logo_url.startsWith('http')}
                        />
                      </div>
                    </div>
                  )}

                  {/* Company name */}
                  <h2 className="text-center text-lg font-semibold text-white">
                    {partner.company_name}
                  </h2>

                  {/* Category tag */}
                  {partner.category && (
                    <div className="mt-2 flex justify-center">
                      <span className="rounded-full bg-slate-700 px-3 py-1 text-xs font-medium text-slate-300">
                        {partner.category}
                      </span>
                    </div>
                  )}

                  {/* Blurb */}
                  {partner.blurb && (
                    <p className="mt-4 text-center text-sm leading-relaxed text-slate-400">
                      {partner.blurb}
                    </p>
                  )}

                  {/* Visit link indicator */}
                  {partner.website_url && (
                    <div className="mt-4 text-center text-xs text-amber-400 opacity-0 transition group-hover:opacity-100">
                      Visit website →
                    </div>
                  )}
                </a>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* CTA footer */}
      <div className="border-t border-slate-800 bg-slate-900 px-6 py-12">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-2xl font-bold text-white">
            Interested in partnering with VoltSol?
          </h2>
          <p className="mt-3 text-slate-300">
            We&apos;re always looking to build relationships with quality contractors and businesses.
          </p>
          <a
            href="mailto:info@voltsolenergy.com"
            className="mt-6 inline-block rounded-lg bg-amber-500 px-6 py-3 font-bold text-slate-900 transition hover:bg-amber-400"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </div>
  );
}
