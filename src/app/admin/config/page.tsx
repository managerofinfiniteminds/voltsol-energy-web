'use client';

import { useState, useEffect, FormEvent } from 'react';

interface HowStep {
  step: string;
  title: string;
  desc: string;
}

interface Testimonial {
  quote: string;
  name: string;
  city: string;
}

interface FaqItem {
  q: string;
  a: string;
}

interface FooterLink {
  label: string;
  href: string;
}

function safeParseJson<T>(value: string | undefined, fallback: T): T {
  if (!value) return fallback;
  try {
    return JSON.parse(value) as T;
  } catch {
    return fallback;
  }
}

export default function AdminConfigPage() {
  const [config, setConfig] = useState<Record<string, string> | null>(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  // Parsed array states
  const [heroTrust, setHeroTrust] = useState<string[]>([]);
  const [howSteps, setHowSteps] = useState<HowStep[]>([]);
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [aboutCredentials, setAboutCredentials] = useState<string[]>([]);
  const [faqs, setFaqs] = useState<FaqItem[]>([]);
  const [footerLinks, setFooterLinks] = useState<FooterLink[]>([]);

  async function fetchConfig() {
    try {
      const res = await fetch('/api/admin/site-config');
      if (!res.ok) throw new Error('Failed to fetch');
      const data = await res.json();
      setConfig(data.config);

      // Parse arrays
      setHeroTrust(safeParseJson<string[]>(data.config.hero_trust, []));
      setHowSteps(safeParseJson<HowStep[]>(data.config.how_steps, []));
      setTestimonials(safeParseJson<Testimonial[]>(data.config.testimonials, []));
      setAboutCredentials(safeParseJson<string[]>(data.config.about_credentials, []));
      setFaqs(safeParseJson<FaqItem[]>(data.config.faqs, []));
      setFooterLinks(safeParseJson<FooterLink[]>(data.config.footer_links, []));

      setError('');
    } catch {
      setError('Failed to load config');
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchConfig();
  }, []);

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!config) return;

    setSaving(true);
    setSuccess(false);
    setError('');

    // Serialize arrays back to JSON
    const payload = {
      ...config,
      hero_trust: JSON.stringify(heroTrust),
      how_steps: JSON.stringify(howSteps),
      testimonials: JSON.stringify(testimonials),
      about_credentials: JSON.stringify(aboutCredentials),
      faqs: JSON.stringify(faqs),
      footer_links: JSON.stringify(footerLinks),
    };

    try {
      const res = await fetch('/api/admin/site-config', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ config: payload }),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || 'Failed to save');
      }

      setSuccess(true);
      setTimeout(() => setSuccess(false), 3000);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to save config');
    } finally {
      setSaving(false);
    }
  }

  function updateField(key: string, value: string) {
    if (!config) return;
    setConfig({ ...config, [key]: value });
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-[#0F172A] flex items-center justify-center">
        <div className="text-slate-400">Loading...</div>
      </div>
    );
  }

  if (!config) {
    return (
      <div className="min-h-screen bg-[#0F172A] flex items-center justify-center">
        <div className="text-red-400">{error || 'Failed to load config'}</div>
      </div>
    );
  }

  const inputClass = "mt-1 w-full bg-slate-800 border border-slate-600 rounded-lg px-4 py-2 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-amber-400";
  const textareaClass = inputClass + " resize-none";
  const labelClass = "text-sm text-slate-400";
  const sectionClass = "bg-slate-900 border border-slate-700 rounded-xl p-6 mb-6";
  const sectionTitleClass = "text-lg font-semibold text-white mb-4";

  return (
    <main className="min-h-screen bg-[#0F172A] p-4 sm:p-8">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-white mb-2">Homepage Content</h1>
          <p className="text-slate-400 text-sm">
            Edit any section of the homepage live. Changes appear immediately — no deploy needed.
          </p>
        </div>

        {error && (
          <div className="bg-red-900/40 border border-red-500 rounded-lg px-4 py-3 text-red-300 text-sm mb-6">
            {error}
          </div>
        )}

        {success && (
          <div className="bg-green-900/40 border border-green-500 rounded-lg px-4 py-3 text-green-300 text-sm mb-6">
            Saved ✓
          </div>
        )}

        <form onSubmit={handleSubmit}>
          {/* ========== GLOBAL ========== */}
          <div className={sectionClass}>
            <h2 className={sectionTitleClass}>Global</h2>
            <label className="block">
              <span className={labelClass}>CTA Button Text (used by all 6 buttons)</span>
              <input
                type="text"
                value={config.cta_button_text}
                onChange={e => updateField('cta_button_text', e.target.value)}
                className={inputClass}
              />
            </label>
          </div>

          {/* ========== SECTION 1: HERO ========== */}
          <div className={sectionClass}>
            <h2 className={sectionTitleClass}>Section 1: Hero</h2>

            <div className="space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="block">
                  <span className={labelClass}>Headline Line 1</span>
                  <input
                    type="text"
                    value={config.hero_headline_line1}
                    onChange={e => updateField('hero_headline_line1', e.target.value)}
                    className={inputClass}
                  />
                </label>
                <label className="block">
                  <span className={labelClass}>Headline Line 2 (gold text)</span>
                  <input
                    type="text"
                    value={config.hero_headline_line2}
                    onChange={e => updateField('hero_headline_line2', e.target.value)}
                    className={inputClass}
                  />
                </label>
              </div>

              <label className="block">
                <span className={labelClass}>Subhead</span>
                <textarea
                  value={config.hero_subhead}
                  onChange={e => updateField('hero_subhead', e.target.value)}
                  rows={2}
                  className={textareaClass}
                />
              </label>

              <label className="block">
                <span className={labelClass}>Secondary CTA Text (arrow is fixed)</span>
                <input
                  type="text"
                  value={config.hero_cta_secondary}
                  onChange={e => updateField('hero_cta_secondary', e.target.value)}
                  className={inputClass}
                />
              </label>

              {/* Trust badges array */}
              <div>
                <span className={labelClass}>Trust Badges</span>
                <div className="mt-2 space-y-2">
                  {heroTrust.map((badge, i) => (
                    <div key={i} className="flex gap-2">
                      <input
                        type="text"
                        value={badge}
                        onChange={e => {
                          const updated = [...heroTrust];
                          updated[i] = e.target.value;
                          setHeroTrust(updated);
                        }}
                        className={inputClass}
                      />
                      <button
                        type="button"
                        onClick={() => setHeroTrust(heroTrust.filter((_, j) => j !== i))}
                        className="px-3 py-2 text-red-400 hover:text-red-300"
                      >
                        Remove
                      </button>
                    </div>
                  ))}
                  <button
                    type="button"
                    onClick={() => setHeroTrust([...heroTrust, ''])}
                    className="text-amber-400 hover:text-amber-300 text-sm font-medium"
                  >
                    + Add Badge
                  </button>
                </div>
              </div>

              {/* Tax banner */}
              <div className="p-4 border border-gold/30 rounded-lg bg-gold/5">
                <p className="text-sm font-medium text-gold mb-3">Tax Banner</p>
                <div className="space-y-3">
                  <label className="block">
                    <span className={labelClass}>Label</span>
                    <input
                      type="text"
                      value={config.hero_tax_banner_label}
                      onChange={e => updateField('hero_tax_banner_label', e.target.value)}
                      className={inputClass}
                    />
                  </label>
                  <label className="block">
                    <span className={labelClass}>Body</span>
                    <textarea
                      value={config.hero_tax_banner_body}
                      onChange={e => updateField('hero_tax_banner_body', e.target.value)}
                      rows={2}
                      className={textareaClass}
                    />
                  </label>
                  <div className="grid gap-3 sm:grid-cols-2">
                    <label className="block">
                      <span className={labelClass}>Link Text</span>
                      <input
                        type="text"
                        value={config.hero_tax_banner_link_text}
                        onChange={e => updateField('hero_tax_banner_link_text', e.target.value)}
                        className={inputClass}
                      />
                    </label>
                    <label className="block">
                      <span className={labelClass}>Link URL</span>
                      <input
                        type="text"
                        value={config.hero_tax_banner_link_url}
                        onChange={e => updateField('hero_tax_banner_link_url', e.target.value)}
                        className={inputClass}
                      />
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ========== SECTION 2: THE NUMBER ========== */}
          <div className={sectionClass}>
            <h2 className={sectionTitleClass}>Section 2: The Number</h2>

            <div className="space-y-4">
              <label className="block">
                <span className={labelClass}>Section Label</span>
                <input
                  type="text"
                  value={config.number_section_label}
                  onChange={e => updateField('number_section_label', e.target.value)}
                  className={inputClass}
                />
              </label>

              <div className="grid gap-4 sm:grid-cols-2">
                <label className="block">
                  <span className={labelClass}>Headline Prefix</span>
                  <input
                    type="text"
                    value={config.number_headline_prefix}
                    onChange={e => updateField('number_headline_prefix', e.target.value)}
                    className={inputClass}
                  />
                </label>
                <label className="block">
                  <span className={labelClass}>Number (numeric only)</span>
                  <input
                    type="text"
                    value={config.number_headline_value}
                    onChange={e => updateField('number_headline_value', e.target.value)}
                    className={inputClass}
                  />
                </label>
              </div>

              {/* Comparison Cards */}
              <div className="space-y-4">
                <div className="p-4 border border-red-500/30 rounded-lg bg-red-950/20">
                  <p className="text-sm font-medium text-red-400 mb-3">Bad Option (Left Card)</p>
                  <div className="grid gap-3 sm:grid-cols-2">
                    <label className="block">
                      <span className={labelClass}>Amount</span>
                      <input
                        type="text"
                        value={config.compare_bad_amount}
                        onChange={e => updateField('compare_bad_amount', e.target.value)}
                        className={inputClass}
                      />
                    </label>
                    <label className="block">
                      <span className={labelClass}>Caption</span>
                      <input
                        type="text"
                        value={config.compare_bad_caption}
                        onChange={e => updateField('compare_bad_caption', e.target.value)}
                        className={inputClass}
                      />
                    </label>
                  </div>
                </div>
                <div className="p-4 border border-amber-400/30 rounded-lg bg-amber-950/20">
                  <p className="text-sm font-medium text-amber-400 mb-3">Good Option (Right Card)</p>
                  <div className="grid gap-3 sm:grid-cols-2">
                    <label className="block">
                      <span className={labelClass}>Amount</span>
                      <input
                        type="text"
                        value={config.compare_good_amount}
                        onChange={e => updateField('compare_good_amount', e.target.value)}
                        className={inputClass}
                      />
                    </label>
                    <label className="block">
                      <span className={labelClass}>Caption</span>
                      <input
                        type="text"
                        value={config.compare_good_caption}
                        onChange={e => updateField('compare_good_caption', e.target.value)}
                        className={inputClass}
                      />
                    </label>
                  </div>
                </div>
              </div>

              {/* Stats */}
              <div>
                <p className="text-sm font-medium text-slate-300 mb-3">Stats (4)</p>
                <div className="space-y-3">
                  {[1, 2, 3, 4].map(n => (
                    <div key={n} className="grid gap-3 sm:grid-cols-2 p-3 border border-slate-700 rounded-lg">
                      <label className="block">
                        <span className={labelClass}>Stat {n} Value</span>
                        <input
                          type="text"
                          value={config[`stat_${n}_value`]}
                          onChange={e => updateField(`stat_${n}_value`, e.target.value)}
                          className={inputClass}
                        />
                      </label>
                      <label className="block">
                        <span className={labelClass}>Stat {n} Label</span>
                        <input
                          type="text"
                          value={config[`stat_${n}_label`]}
                          onChange={e => updateField(`stat_${n}_label`, e.target.value)}
                          className={inputClass}
                        />
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              <label className="block">
                <span className={labelClass}>Payback Line</span>
                <textarea
                  value={config.number_payback_line}
                  onChange={e => updateField('number_payback_line', e.target.value)}
                  rows={2}
                  className={textareaClass}
                />
              </label>
            </div>
          </div>

          {/* ========== SECTION 3: HOW IT WORKS ========== */}
          <div className={sectionClass}>
            <h2 className={sectionTitleClass}>Section 3: How It Works</h2>

            <div className="space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="block">
                  <span className={labelClass}>Headline (pre)</span>
                  <input
                    type="text"
                    value={config.how_headline_pre}
                    onChange={e => updateField('how_headline_pre', e.target.value)}
                    className={inputClass}
                  />
                </label>
                <label className="block">
                  <span className={labelClass}>Headline (gold)</span>
                  <input
                    type="text"
                    value={config.how_headline_gold}
                    onChange={e => updateField('how_headline_gold', e.target.value)}
                    className={inputClass}
                  />
                </label>
              </div>

              {/* Steps */}
              <div>
                <span className={labelClass}>Steps</span>
                <div className="mt-2 space-y-3">
                  {howSteps.map((step, i) => (
                    <div key={i} className="p-4 border border-slate-700 rounded-lg">
                      <div className="flex justify-between items-center mb-3">
                        <span className="text-sm font-medium text-gold">Step {i + 1}</span>
                        <button
                          type="button"
                          onClick={() => setHowSteps(howSteps.filter((_, j) => j !== i))}
                          className="text-red-400 hover:text-red-300 text-sm"
                        >
                          Remove
                        </button>
                      </div>
                      <div className="grid gap-3 sm:grid-cols-3">
                        <label className="block">
                          <span className={labelClass}>Number</span>
                          <input
                            type="text"
                            value={step.step}
                            onChange={e => {
                              const updated = [...howSteps];
                              updated[i] = { ...step, step: e.target.value };
                              setHowSteps(updated);
                            }}
                            className={inputClass}
                          />
                        </label>
                        <label className="block">
                          <span className={labelClass}>Title</span>
                          <input
                            type="text"
                            value={step.title}
                            onChange={e => {
                              const updated = [...howSteps];
                              updated[i] = { ...step, title: e.target.value };
                              setHowSteps(updated);
                            }}
                            className={inputClass}
                          />
                        </label>
                        <label className="block">
                          <span className={labelClass}>Description</span>
                          <input
                            type="text"
                            value={step.desc}
                            onChange={e => {
                              const updated = [...howSteps];
                              updated[i] = { ...step, desc: e.target.value };
                              setHowSteps(updated);
                            }}
                            className={inputClass}
                          />
                        </label>
                      </div>
                    </div>
                  ))}
                  <button
                    type="button"
                    onClick={() => setHowSteps([...howSteps, { step: `0${howSteps.length + 1}`, title: '', desc: '' }])}
                    className="text-amber-400 hover:text-amber-300 text-sm font-medium"
                  >
                    + Add Step
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* ========== SECTION 4: INLINE ESTIMATE ========== */}
          <div className={sectionClass}>
            <h2 className={sectionTitleClass}>Section 4: Inline Estimate</h2>

            <div className="space-y-4">
              <div className="grid gap-4 sm:grid-cols-3">
                <label className="block">
                  <span className={labelClass}>Headline (pre)</span>
                  <input
                    type="text"
                    value={config.estimate_headline_pre}
                    onChange={e => updateField('estimate_headline_pre', e.target.value)}
                    className={inputClass}
                  />
                </label>
                <label className="block">
                  <span className={labelClass}>Headline (gold)</span>
                  <input
                    type="text"
                    value={config.estimate_headline_gold}
                    onChange={e => updateField('estimate_headline_gold', e.target.value)}
                    className={inputClass}
                  />
                </label>
                <label className="block">
                  <span className={labelClass}>Headline (post)</span>
                  <input
                    type="text"
                    value={config.estimate_headline_post}
                    onChange={e => updateField('estimate_headline_post', e.target.value)}
                    className={inputClass}
                  />
                </label>
              </div>

              <label className="block">
                <span className={labelClass}>Subtext</span>
                <input
                  type="text"
                  value={config.estimate_subtext}
                  onChange={e => updateField('estimate_subtext', e.target.value)}
                  className={inputClass}
                />
              </label>
            </div>
          </div>

          {/* ========== SECTION 5: PROOF / TESTIMONIALS ========== */}
          <div className={sectionClass}>
            <h2 className={sectionTitleClass}>Section 5: Proof / Testimonials</h2>

            <div className="space-y-4">
              <label className="block">
                <span className={labelClass}>Eyebrow</span>
                <input
                  type="text"
                  value={config.proof_eyebrow}
                  onChange={e => updateField('proof_eyebrow', e.target.value)}
                  className={inputClass}
                />
              </label>

              <div className="grid gap-4 sm:grid-cols-2">
                <label className="block">
                  <span className={labelClass}>Headline (pre)</span>
                  <input
                    type="text"
                    value={config.proof_headline_pre}
                    onChange={e => updateField('proof_headline_pre', e.target.value)}
                    className={inputClass}
                  />
                </label>
                <label className="block">
                  <span className={labelClass}>Headline (gold)</span>
                  <input
                    type="text"
                    value={config.proof_headline_gold}
                    onChange={e => updateField('proof_headline_gold', e.target.value)}
                    className={inputClass}
                  />
                </label>
              </div>

              {/* Testimonials */}
              <div>
                <span className={labelClass}>Testimonials</span>
                <div className="mt-2 space-y-3">
                  {testimonials.map((t, i) => (
                    <div key={i} className="p-4 border border-slate-700 rounded-lg">
                      <div className="flex justify-between items-center mb-3">
                        <span className="text-sm font-medium text-gold">Testimonial {i + 1}</span>
                        <button
                          type="button"
                          onClick={() => setTestimonials(testimonials.filter((_, j) => j !== i))}
                          className="text-red-400 hover:text-red-300 text-sm"
                        >
                          Remove
                        </button>
                      </div>
                      <div className="space-y-3">
                        <label className="block">
                          <span className={labelClass}>Quote</span>
                          <textarea
                            value={t.quote}
                            onChange={e => {
                              const updated = [...testimonials];
                              updated[i] = { ...t, quote: e.target.value };
                              setTestimonials(updated);
                            }}
                            rows={2}
                            className={textareaClass}
                          />
                        </label>
                        <div className="grid gap-3 sm:grid-cols-2">
                          <label className="block">
                            <span className={labelClass}>Name</span>
                            <input
                              type="text"
                              value={t.name}
                              onChange={e => {
                                const updated = [...testimonials];
                                updated[i] = { ...t, name: e.target.value };
                                setTestimonials(updated);
                              }}
                              className={inputClass}
                            />
                          </label>
                          <label className="block">
                            <span className={labelClass}>City</span>
                            <input
                              type="text"
                              value={t.city}
                              onChange={e => {
                                const updated = [...testimonials];
                                updated[i] = { ...t, city: e.target.value };
                                setTestimonials(updated);
                              }}
                              className={inputClass}
                            />
                          </label>
                        </div>
                      </div>
                    </div>
                  ))}
                  <button
                    type="button"
                    onClick={() => setTestimonials([...testimonials, { quote: '', name: '', city: '' }])}
                    className="text-amber-400 hover:text-amber-300 text-sm font-medium"
                  >
                    + Add Testimonial
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* ========== SECTION 6: MEET HUGO ========== */}
          <div className={sectionClass}>
            <h2 className={sectionTitleClass}>Section 6: Meet Hugo</h2>

            <div className="space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="block">
                  <span className={labelClass}>Headline (pre)</span>
                  <input
                    type="text"
                    value={config.about_headline_pre}
                    onChange={e => updateField('about_headline_pre', e.target.value)}
                    className={inputClass}
                  />
                </label>
                <label className="block">
                  <span className={labelClass}>Headline (gold)</span>
                  <input
                    type="text"
                    value={config.about_headline_gold}
                    onChange={e => updateField('about_headline_gold', e.target.value)}
                    className={inputClass}
                  />
                </label>
              </div>

              <label className="block">
                <span className={labelClass}>Body</span>
                <textarea
                  value={config.about_body}
                  onChange={e => updateField('about_body', e.target.value)}
                  rows={3}
                  className={textareaClass}
                />
              </label>

              {/* Credentials */}
              <div>
                <span className={labelClass}>Credentials (icons are fixed by position)</span>
                <div className="mt-2 space-y-2">
                  {aboutCredentials.map((cred, i) => (
                    <div key={i} className="flex gap-2">
                      <span className="px-3 py-2 text-slate-500 text-sm">{i + 1}.</span>
                      <input
                        type="text"
                        value={cred}
                        onChange={e => {
                          const updated = [...aboutCredentials];
                          updated[i] = e.target.value;
                          setAboutCredentials(updated);
                        }}
                        className={inputClass}
                      />
                      <button
                        type="button"
                        onClick={() => setAboutCredentials(aboutCredentials.filter((_, j) => j !== i))}
                        className="px-3 py-2 text-red-400 hover:text-red-300"
                      >
                        Remove
                      </button>
                    </div>
                  ))}
                  <button
                    type="button"
                    onClick={() => setAboutCredentials([...aboutCredentials, ''])}
                    className="text-amber-400 hover:text-amber-300 text-sm font-medium"
                  >
                    + Add Credential
                  </button>
                </div>
              </div>

              <label className="block">
                <span className={labelClass}>Equipment Link Text</span>
                <input
                  type="text"
                  value={config.about_equipment_link}
                  onChange={e => updateField('about_equipment_link', e.target.value)}
                  className={inputClass}
                />
              </label>
            </div>
          </div>

          {/* ========== SECTION 7: FAQ + BOTTOM CTA ========== */}
          <div className={sectionClass}>
            <h2 className={sectionTitleClass}>Section 7: FAQ & Bottom CTA</h2>

            <div className="space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="block">
                  <span className={labelClass}>FAQ Headline (pre)</span>
                  <input
                    type="text"
                    value={config.faq_headline_pre}
                    onChange={e => updateField('faq_headline_pre', e.target.value)}
                    className={inputClass}
                  />
                </label>
                <label className="block">
                  <span className={labelClass}>FAQ Headline (gold)</span>
                  <input
                    type="text"
                    value={config.faq_headline_gold}
                    onChange={e => updateField('faq_headline_gold', e.target.value)}
                    className={inputClass}
                  />
                </label>
              </div>

              {/* FAQs */}
              <div>
                <span className={labelClass}>FAQs</span>
                <div className="mt-2 space-y-3">
                  {faqs.map((faq, i) => (
                    <div key={i} className="p-4 border border-slate-700 rounded-lg">
                      <div className="flex justify-between items-center mb-3">
                        <span className="text-sm font-medium text-gold">FAQ {i + 1}</span>
                        <button
                          type="button"
                          onClick={() => setFaqs(faqs.filter((_, j) => j !== i))}
                          className="text-red-400 hover:text-red-300 text-sm"
                        >
                          Remove
                        </button>
                      </div>
                      <div className="space-y-3">
                        <label className="block">
                          <span className={labelClass}>Question</span>
                          <input
                            type="text"
                            value={faq.q}
                            onChange={e => {
                              const updated = [...faqs];
                              updated[i] = { ...faq, q: e.target.value };
                              setFaqs(updated);
                            }}
                            className={inputClass}
                          />
                        </label>
                        <label className="block">
                          <span className={labelClass}>Answer</span>
                          <textarea
                            value={faq.a}
                            onChange={e => {
                              const updated = [...faqs];
                              updated[i] = { ...faq, a: e.target.value };
                              setFaqs(updated);
                            }}
                            rows={3}
                            className={textareaClass}
                          />
                        </label>
                      </div>
                    </div>
                  ))}
                  <button
                    type="button"
                    onClick={() => setFaqs([...faqs, { q: '', a: '' }])}
                    className="text-amber-400 hover:text-amber-300 text-sm font-medium"
                  >
                    + Add FAQ
                  </button>
                </div>
              </div>

              {/* Final CTA */}
              <div className="p-4 border border-gold/30 rounded-lg bg-gold/5">
                <p className="text-sm font-medium text-gold mb-3">Final CTA</p>
                <div className="space-y-3">
                  <label className="block">
                    <span className={labelClass}>Headline</span>
                    <input
                      type="text"
                      value={config.final_cta_headline}
                      onChange={e => updateField('final_cta_headline', e.target.value)}
                      className={inputClass}
                    />
                  </label>
                  <label className="block">
                    <span className={labelClass}>Subtext</span>
                    <textarea
                      value={config.final_cta_subtext}
                      onChange={e => updateField('final_cta_subtext', e.target.value)}
                      rows={2}
                      className={textareaClass}
                    />
                  </label>
                </div>
              </div>
            </div>
          </div>

          {/* ========== FOOTER ========== */}
          <div className={sectionClass}>
            <h2 className={sectionTitleClass}>Footer</h2>

            <div className="space-y-4">
              <label className="block">
                <span className={labelClass}>Tagline</span>
                <input
                  type="text"
                  value={config.footer_tagline}
                  onChange={e => updateField('footer_tagline', e.target.value)}
                  className={inputClass}
                />
              </label>
              <label className="block">
                <span className={labelClass}>Contact Email</span>
                <input
                  type="text"
                  value={config.footer_email}
                  onChange={e => updateField('footer_email', e.target.value)}
                  className={inputClass}
                />
              </label>
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="block">
                  <span className={labelClass}>Copyright Year</span>
                  <input
                    type="text"
                    value={config.footer_copyright_year}
                    onChange={e => updateField('footer_copyright_year', e.target.value)}
                    className={inputClass}
                  />
                </label>
                <label className="block">
                  <span className={labelClass}>Copyright Rights Text</span>
                  <input
                    type="text"
                    value={config.footer_copyright_rights}
                    onChange={e => updateField('footer_copyright_rights', e.target.value)}
                    className={inputClass}
                  />
                </label>
              </div>
              <label className="block">
                <span className={labelClass}>Legal Line (CSLB / region)</span>
                <input
                  type="text"
                  value={config.footer_legal_line}
                  onChange={e => updateField('footer_legal_line', e.target.value)}
                  className={inputClass}
                />
              </label>

              {/* Footer Links */}
              <div>
                <span className={labelClass}>Footer Links</span>
                <div className="mt-2 space-y-3">
                  {footerLinks.map((link, i) => (
                    <div key={i} className="p-4 border border-slate-700 rounded-lg">
                      <div className="flex justify-between items-center mb-3">
                        <span className="text-sm font-medium text-gold">Link {i + 1}</span>
                        <button
                          type="button"
                          onClick={() => setFooterLinks(footerLinks.filter((_, j) => j !== i))}
                          className="text-red-400 hover:text-red-300 text-sm"
                        >
                          Remove
                        </button>
                      </div>
                      <div className="grid gap-3 sm:grid-cols-2">
                        <label className="block">
                          <span className={labelClass}>Label</span>
                          <input
                            type="text"
                            value={link.label}
                            onChange={e => {
                              const updated = [...footerLinks];
                              updated[i] = { ...link, label: e.target.value };
                              setFooterLinks(updated);
                            }}
                            className={inputClass}
                          />
                        </label>
                        <label className="block">
                          <span className={labelClass}>URL / Anchor</span>
                          <input
                            type="text"
                            value={link.href}
                            onChange={e => {
                              const updated = [...footerLinks];
                              updated[i] = { ...link, href: e.target.value };
                              setFooterLinks(updated);
                            }}
                            className={inputClass}
                          />
                        </label>
                      </div>
                    </div>
                  ))}
                  <button
                    type="button"
                    onClick={() => setFooterLinks([...footerLinks, { label: '', href: '' }])}
                    className="text-amber-400 hover:text-amber-300 text-sm font-medium"
                  >
                    + Add Link
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* ========== SUBMIT ========== */}
          <div className="sticky bottom-4 flex justify-end">
            <button
              type="submit"
              disabled={saving}
              className="bg-amber-400 hover:bg-amber-300 disabled:bg-amber-800 text-[#0F172A] font-bold px-8 py-3 rounded-lg transition-colors shadow-lg"
            >
              {saving ? 'Saving...' : 'Save Changes'}
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}
