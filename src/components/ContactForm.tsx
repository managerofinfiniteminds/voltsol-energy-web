"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { getDict } from "@/lib/i18n";
import type { Locale } from "@/lib/locale";

export default function ContactForm({ locale = "en" }: { locale?: Locale }) {
  const t = getDict(locale);
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "", company: "" });

  const update = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((f) => ({ ...f, [k]: e.target.value }));

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (status === "sending") return;
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("failed");
      setStatus("success");
      setForm({ name: "", email: "", phone: "", message: "", company: "" });
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-2xl border border-gold/40 bg-navy-700/50 p-8 text-center">
        <div className="text-4xl">⚡</div>
        <p className="mt-4 text-lg font-medium text-white">{t.contact_success}</p>
      </div>
    );
  }

  const inputCls =
    "w-full rounded-lg border border-navy-500/50 bg-navy-800/60 px-4 py-3 text-white placeholder-slate-500 focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold";

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {/* Honeypot — hidden from humans */}
      <input
        type="text"
        name="company"
        value={form.company}
        onChange={update("company")}
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="absolute left-[-9999px] h-0 w-0 opacity-0"
      />

      <div>
        <label className="mb-1.5 block text-sm font-medium text-slate-300">{t.contact_label_name}</label>
        <input type="text" required value={form.name} onChange={update("name")} className={inputCls} autoComplete="name" />
      </div>

      <div>
        <label className="mb-1.5 block text-sm font-medium text-slate-300">{t.contact_label_email}</label>
        <input type="email" required value={form.email} onChange={update("email")} className={inputCls} autoComplete="email" />
      </div>

      <div>
        <label className="mb-1.5 block text-sm font-medium text-slate-300">{t.contact_label_phone_opt}</label>
        <input type="tel" value={form.phone} onChange={update("phone")} className={inputCls} autoComplete="tel" />
      </div>

      <div>
        <label className="mb-1.5 block text-sm font-medium text-slate-300">{t.contact_label_message}</label>
        <textarea required rows={5} value={form.message} onChange={update("message")} className={inputCls} />
      </div>

      {status === "error" && (
        <p className="text-sm text-red-400">{t.contact_error}</p>
      )}

      <Button type="submit" disabled={status === "sending"} className="w-full">
        {status === "sending" ? t.contact_sending : t.contact_submit}
      </Button>
    </form>
  );
}
