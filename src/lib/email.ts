import { Resend } from 'resend';
import type { LeadScore } from './lead-scoring';

let _resend: Resend | null = null;
function getResend(): Resend {
  if (!_resend) {
    const key = process.env.RESEND_API_KEY;
    if (!key) throw new Error('RESEND_API_KEY is not set');
    _resend = new Resend(key);
  }
  return _resend;
}

interface ContactDetails {
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  street_address: string;
  city: string;
  state: string;
  zip: string;
  owns_home: string;
  monthly_bill: string;
  best_contact_time: string;
  notes?: string | null;
  lead_score: LeadScore;
  campaign_name?: string;
  created_at?: string;
}

function scoreLabel(score: LeadScore): string {
  if (score === 'hot_lead') return '🔴 HOT LEAD';
  if (score === 'low_priority') return '⚪ LOW PRIORITY';
  return '🟡 STANDARD';
}

export async function sendConfirmationEmail(contact: ContactDetails): Promise<void> {
  const phoneSection = process.env.VOLTSOL_PHONE
    ? `<p style="margin:0 0 8px 0;">Or call us: <a href="tel:${process.env.VOLTSOL_PHONE}" style="color:#F59E0B;">${process.env.VOLTSOL_PHONE}</a></p>`
    : '';

  const html = `
<!DOCTYPE html>
<html>
<head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="margin:0;padding:0;background:#f8fafc;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;">
  <div style="max-width:600px;margin:0 auto;padding:24px 16px;">
    <!-- Header -->
    <div style="background:#0F172A;border-radius:12px 12px 0 0;padding:32px 24px;text-align:center;">
      <div style="font-size:28px;font-weight:800;color:#F59E0B;letter-spacing:-0.5px;">VoltSol Energy</div>
      <div style="font-size:13px;color:#94a3b8;margin-top:4px;">Northern California Solar</div>
    </div>

    <!-- Body -->
    <div style="background:#ffffff;padding:32px 24px;border:1px solid #e2e8f0;border-top:none;">
      <h1 style="margin:0 0 16px 0;font-size:22px;color:#0F172A;">Hi ${contact.first_name}, we received your request!</h1>
      <p style="margin:0 0 16px 0;color:#475569;line-height:1.6;">
        Thanks for reaching out to VoltSol Energy. A VoltSol advisor will contact you within <strong>24 hours</strong> to discuss your free solar savings estimate.
      </p>

      <!-- Summary box -->
      <div style="background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;padding:20px;margin:24px 0;">
        <div style="font-size:13px;font-weight:600;color:#64748b;text-transform:uppercase;letter-spacing:0.5px;margin-bottom:12px;">Your Submitted Information</div>
        <table style="width:100%;border-collapse:collapse;">
          <tr><td style="padding:4px 0;color:#64748b;font-size:14px;width:40%;">Name</td><td style="padding:4px 0;color:#0F172A;font-size:14px;font-weight:500;">${contact.first_name} ${contact.last_name}</td></tr>
          <tr><td style="padding:4px 0;color:#64748b;font-size:14px;">Address</td><td style="padding:4px 0;color:#0F172A;font-size:14px;font-weight:500;">${contact.street_address}, ${contact.city}, ${contact.state} ${contact.zip}</td></tr>
          <tr><td style="padding:4px 0;color:#64748b;font-size:14px;">Phone</td><td style="padding:4px 0;color:#0F172A;font-size:14px;font-weight:500;">${contact.phone}</td></tr>
          <tr><td style="padding:4px 0;color:#64748b;font-size:14px;">Best Time</td><td style="padding:4px 0;color:#0F172A;font-size:14px;font-weight:500;">${contact.best_contact_time}</td></tr>
        </table>
      </div>

      <p style="margin:0 0 8px 0;color:#475569;line-height:1.6;">
        In the meantime, if you have questions, simply reply to this email.
      </p>
      ${phoneSection}
    </div>

    <!-- Footer -->
    <div style="background:#f1f5f9;border-radius:0 0 12px 12px;padding:16px 24px;text-align:center;border:1px solid #e2e8f0;border-top:none;">
      <div style="font-size:13px;color:#64748b;">VoltSol Energy &nbsp;|&nbsp; <a href="https://voltsolenergy.com" style="color:#F59E0B;text-decoration:none;">voltsolenergy.com</a></div>
      <div style="font-size:12px;color:#94a3b8;margin-top:4px;">Northern California Solar Installation</div>
    </div>
  </div>
</body>
</html>`;

  await getResend().emails.send({
    from: 'VoltSol Energy <hello@voltsolenergy.com>',
    to: contact.email,
    subject: 'We received your request — VoltSol Energy',
    html,
  });
}

export async function sendSalesAlertEmail(contact: ContactDetails): Promise<void> {
  const salesEmail = process.env.SALES_ALERT_EMAIL || 'info@voltsolenergy.com';
  const score = scoreLabel(contact.lead_score);
  const campaignLabel = contact.campaign_name || 'Direct';
  const mapsQuery = encodeURIComponent(`${contact.street_address}, ${contact.city}, ${contact.state} ${contact.zip}`);
  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${mapsQuery}`;
  const submittedAt = contact.created_at ? new Date(contact.created_at).toLocaleString('en-US', { timeZone: 'America/Los_Angeles' }) : new Date().toLocaleString('en-US', { timeZone: 'America/Los_Angeles' });

  const scoreBg = contact.lead_score === 'hot_lead' ? '#fee2e2' : contact.lead_score === 'low_priority' ? '#f1f5f9' : '#fef9c3';
  const scoreBorder = contact.lead_score === 'hot_lead' ? '#fca5a5' : contact.lead_score === 'low_priority' ? '#cbd5e1' : '#fde68a';

  const html = `
<!DOCTYPE html>
<html>
<head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="margin:0;padding:0;background:#f8fafc;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;">
  <div style="max-width:600px;margin:0 auto;padding:24px 16px;">
    <div style="background:#0F172A;border-radius:12px 12px 0 0;padding:24px;text-align:center;">
      <div style="font-size:24px;font-weight:800;color:#F59E0B;">VoltSol Energy</div>
      <div style="font-size:14px;color:#94a3b8;margin-top:4px;">New Lead Alert</div>
    </div>

    <div style="background:#ffffff;padding:24px;border:1px solid #e2e8f0;border-top:none;">
      <!-- Score badge -->
      <div style="background:${scoreBg};border:1px solid ${scoreBorder};border-radius:8px;padding:12px 16px;margin-bottom:20px;font-size:18px;font-weight:700;text-align:center;">
        ${score}
      </div>

      <table style="width:100%;border-collapse:collapse;">
        <tr><td style="padding:6px 0;color:#64748b;font-size:14px;width:38%;">Name</td><td style="padding:6px 0;color:#0F172A;font-size:14px;font-weight:600;">${contact.first_name} ${contact.last_name}</td></tr>
        <tr><td style="padding:6px 0;color:#64748b;font-size:14px;">Phone</td><td style="padding:6px 0;font-size:14px;"><a href="tel:${contact.phone.replace(/\D/g, '')}" style="color:#F59E0B;font-weight:600;">${contact.phone}</a></td></tr>
        <tr><td style="padding:6px 0;color:#64748b;font-size:14px;">Email</td><td style="padding:6px 0;color:#0F172A;font-size:14px;">${contact.email}</td></tr>
        <tr><td style="padding:6px 0;color:#64748b;font-size:14px;">Address</td><td style="padding:6px 0;font-size:14px;"><a href="${mapsUrl}" style="color:#F59E0B;">${contact.street_address}, ${contact.city}, ${contact.state} ${contact.zip}</a></td></tr>
        <tr><td style="padding:6px 0;color:#64748b;font-size:14px;">Owns Home</td><td style="padding:6px 0;color:#0F172A;font-size:14px;">${contact.owns_home}</td></tr>
        <tr><td style="padding:6px 0;color:#64748b;font-size:14px;">Monthly Bill</td><td style="padding:6px 0;color:#0F172A;font-size:14px;">${contact.monthly_bill}</td></tr>
        <tr><td style="padding:6px 0;color:#64748b;font-size:14px;">Best Time</td><td style="padding:6px 0;color:#0F172A;font-size:14px;">${contact.best_contact_time}</td></tr>
        <tr><td style="padding:6px 0;color:#64748b;font-size:14px;">Campaign</td><td style="padding:6px 0;color:#0F172A;font-size:14px;">${campaignLabel}</td></tr>
        <tr><td style="padding:6px 0;color:#64748b;font-size:14px;">Submitted</td><td style="padding:6px 0;color:#0F172A;font-size:14px;">${submittedAt} PT</td></tr>
        ${contact.notes ? `<tr><td style="padding:6px 0;color:#64748b;font-size:14px;vertical-align:top;">Notes</td><td style="padding:6px 0;color:#0F172A;font-size:14px;">${contact.notes}</td></tr>` : ''}
      </table>

      <div style="margin-top:20px;display:flex;gap:12px;">
        <a href="tel:${contact.phone.replace(/\D/g, '')}" style="display:inline-block;background:#F59E0B;color:#0F172A;font-weight:700;padding:10px 20px;border-radius:6px;text-decoration:none;font-size:14px;">Call Now</a>
        <a href="${mapsUrl}" style="display:inline-block;background:#0F172A;color:#F59E0B;font-weight:700;padding:10px 20px;border-radius:6px;text-decoration:none;font-size:14px;">View on Map</a>
      </div>
    </div>

    <div style="background:#f1f5f9;border-radius:0 0 12px 12px;padding:12px 24px;text-align:center;border:1px solid #e2e8f0;border-top:none;">
      <div style="font-size:12px;color:#94a3b8;">VoltSol Energy Lead Management | <a href="https://voltsolenergy.com/admin" style="color:#F59E0B;">Admin Dashboard</a></div>
    </div>
  </div>
</body>
</html>`;

  const subject = `[LEAD] ${score} ${contact.first_name} ${contact.last_name} — ${campaignLabel}`;

  await getResend().emails.send({
    from: 'VoltSol Alerts <alerts@voltsolenergy.com>',
    to: salesEmail,
    subject,
    html,
  });
}
