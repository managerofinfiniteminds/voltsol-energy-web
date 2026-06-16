import { Resend } from 'resend';

let _resend: Resend | null = null;
function getResend(): Resend {
  if (!_resend) {
    const key = process.env.RESEND_API_KEY;
    if (!key) throw new Error('RESEND_API_KEY is not set');
    _resend = new Resend(key);
  }
  return _resend;
}

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://voltsolenergy.com';
const HUGO_EMAIL = process.env.SALES_ALERT_EMAIL || 'info@voltsolenergy.com';

export interface AppointmentEmailDetails {
  first_name: string;
  last_name: string;
  email: string;
  phone?: string | null;
  address?: string | null;
  notes?: string | null;
  magic_token: string;
  slot_date: string; // YYYY-MM-DD
  start_time: string; // HH:MM:SS
  end_time: string; // HH:MM:SS
}

/** Format a YYYY-MM-DD date string without timezone shifting. Returns empty string on invalid input. */
export function formatSlotDate(slotDate: string | null | undefined): string {
  if (!slotDate || typeof slotDate !== 'string') return '';
  const match = slotDate.slice(0, 10).match(/^(\d{4})-(\d{2})-(\d{2})$/);
  if (!match) return '';
  const [, yStr, mStr, dStr] = match;
  const y = Number(yStr);
  const m = Number(mStr);
  const d = Number(dStr);
  if (isNaN(y) || isNaN(m) || isNaN(d) || m < 1 || m > 12 || d < 1 || d > 31) return '';
  const date = new Date(Date.UTC(y, m - 1, d));
  if (isNaN(date.getTime())) return '';
  return date.toLocaleDateString('en-US', {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
    year: 'numeric',
    timeZone: 'UTC',
  });
}

/** Format an HH:MM:SS time string as h:MM AM/PM. Returns empty string on invalid input. */
export function formatSlotTime(time: string | null | undefined): string {
  if (!time || typeof time !== 'string') return '';
  const parts = time.split(':');
  if (parts.length < 2) return '';
  const [hRaw, mRaw] = parts;
  const h = Number(hRaw);
  if (isNaN(h) || h < 0 || h > 23) return '';
  const ampm = h >= 12 ? 'PM' : 'AM';
  const h12 = h % 12 === 0 ? 12 : h % 12;
  return `${h12}:${mRaw} ${ampm}`;
}

function emailShell(body: string): string {
  return `
<!DOCTYPE html>
<html>
<head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="margin:0;padding:0;background:#f8fafc;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;">
  <div style="max-width:600px;margin:0 auto;padding:24px 16px;">
    <div style="background:#040D1C;border-radius:12px 12px 0 0;padding:32px 24px;text-align:center;">
      <img src="${SITE_URL}/images/voltsol-email-mark.png" width="56" height="56" alt="VoltSol Energy" style="display:block;margin:0 auto 12px;border:0;outline:none;">
      <div style="font-size:28px;font-weight:800;letter-spacing:-0.5px;"><span style="color:#ffffff;">Volt</span><span style="color:#F49527;">Sol</span><span style="color:#ffffff;"> Energy</span></div>
      <div style="font-size:13px;color:#94a3b8;margin-top:6px;">Make it. Store it. Live on it.&#8482;</div>
    </div>
    <div style="background:#ffffff;padding:32px 24px;border:1px solid #e2e8f0;border-top:none;">
      ${body}
    </div>
    <div style="background:#f1f5f9;border-radius:0 0 12px 12px;padding:16px 24px;text-align:center;border:1px solid #e2e8f0;border-top:none;">
      <div style="font-size:13px;color:#64748b;"><span style="color:#0F172A;font-weight:700;">Volt</span><span style="color:#F49527;font-weight:700;">Sol</span><span style="color:#0F172A;font-weight:700;"> Energy</span> &nbsp;|&nbsp; <a href="${SITE_URL}" style="color:#F49527;text-decoration:none;">voltsolenergy.com</a></div>
      <div style="font-size:12px;color:#94a3b8;margin-top:4px;">Make it. Store it. Live on it.&#8482;</div>
    </div>
  </div>
</body>
</html>`;
}

export async function sendAppointmentConfirmationEmail(appt: AppointmentEmailDetails): Promise<string> {
  const dateStr = formatSlotDate(appt.slot_date);
  const timeStr = `${formatSlotTime(appt.start_time)} \u2013 ${formatSlotTime(appt.end_time)}`;
  const magicLink = `${SITE_URL}/my/appointment/${appt.magic_token}`;
  const subject = 'Your VoltSol Estimate Appointment is Confirmed';

  const body = `
      <h1 style="margin:0 0 16px 0;font-size:22px;color:#040D1C;">Hi ${appt.first_name}, you're booked!</h1>
      <p style="margin:0 0 16px 0;color:#475569;line-height:1.6;">
        Your free solar estimate appointment with VoltSol Energy is confirmed.
      </p>
      <div style="background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;padding:20px;margin:24px 0;">
        <table style="width:100%;border-collapse:collapse;">
          <tr><td style="padding:4px 0;color:#64748b;font-size:14px;width:30%;">Date</td><td style="padding:4px 0;color:#040D1C;font-size:14px;font-weight:600;">${dateStr || 'To be confirmed'}</td></tr>
          <tr><td style="padding:4px 0;color:#64748b;font-size:14px;">Time</td><td style="padding:4px 0;color:#040D1C;font-size:14px;font-weight:600;">${timeStr || 'To be confirmed'}</td></tr>
          <tr><td style="padding:4px 0;color:#64748b;font-size:14px;">Format</td><td style="padding:4px 0;color:#040D1C;font-size:14px;font-weight:600;">Google Meet (video link sent before your call)</td></tr>
          ${appt.address ? `<tr><td style="padding:4px 0;color:#64748b;font-size:14px;">Property</td><td style="padding:4px 0;color:#040D1C;font-size:14px;font-weight:600;">${appt.address}</td></tr>` : ''}
        </table>
      </div>
      <p style="margin:0 0 16px 0;color:#475569;line-height:1.6;">
        Your estimate is a quick 30–45 min Google Meet video call. Hugo will walk through your roof, your PG&amp;E bill, and a custom savings proposal — screen-shared, live. No pressure, no obligation. You'll receive a Google Meet link before your appointment.
      </p>
      <div style="text-align:center;margin:24px 0;">
        <a href="${magicLink}" style="display:inline-block;background:#F59E0B;color:#040D1C;font-weight:700;padding:12px 24px;border-radius:8px;text-decoration:none;font-size:15px;">View or Manage Your Appointment</a>
      </div>
      <p style="margin:0;color:#475569;line-height:1.6;font-size:14px;">
        Questions? Reply to this email or reach Hugo directly at <a href="mailto:info@voltsolenergy.com" style="color:#F59E0B;">info@voltsolenergy.com</a>.
      </p>`;

  await getResend().emails.send({
    from: 'VoltSol Energy <hello@voltsolenergy.com>',
    to: appt.email,
    subject,
    html: emailShell(body),
  });
  return subject;
}

export async function sendAppointmentAlertEmail(appt: AppointmentEmailDetails): Promise<string> {
  const dateStr = formatSlotDate(appt.slot_date);
  const timeStr = `${formatSlotTime(appt.start_time)}\u2013${formatSlotTime(appt.end_time)}`;
  const subject = `New Appointment Booked \u2014 ${appt.first_name} ${appt.last_name}`;

  const body = `
      <h1 style="margin:0 0 16px 0;font-size:20px;color:#040D1C;">New appointment booked</h1>
      <table style="width:100%;border-collapse:collapse;">
        <tr><td style="padding:6px 0;color:#64748b;font-size:14px;width:30%;">Name</td><td style="padding:6px 0;color:#040D1C;font-size:14px;font-weight:600;">${appt.first_name} ${appt.last_name}</td></tr>
        <tr><td style="padding:6px 0;color:#64748b;font-size:14px;">Date</td><td style="padding:6px 0;color:#040D1C;font-size:14px;">${dateStr} ${timeStr}</td></tr>
        <tr><td style="padding:6px 0;color:#64748b;font-size:14px;">Address</td><td style="padding:6px 0;color:#040D1C;font-size:14px;">${appt.address || '\u2014'}</td></tr>
        <tr><td style="padding:6px 0;color:#64748b;font-size:14px;">Phone</td><td style="padding:6px 0;font-size:14px;">${appt.phone ? `<a href="tel:${appt.phone.replace(/\D/g, '')}" style="color:#F59E0B;font-weight:600;">${appt.phone}</a>` : '\u2014'}</td></tr>
        <tr><td style="padding:6px 0;color:#64748b;font-size:14px;">Email</td><td style="padding:6px 0;color:#040D1C;font-size:14px;">${appt.email}</td></tr>
        ${appt.notes ? `<tr><td style="padding:6px 0;color:#64748b;font-size:14px;vertical-align:top;">Notes</td><td style="padding:6px 0;color:#040D1C;font-size:14px;">${appt.notes}</td></tr>` : ''}
      </table>
      <div style="text-align:center;margin-top:24px;">
        <a href="${SITE_URL}/admin/schedule" style="display:inline-block;background:#040D1C;color:#F59E0B;font-weight:700;padding:12px 24px;border-radius:8px;text-decoration:none;font-size:15px;">View in Admin</a>
      </div>`;

  await getResend().emails.send({
    from: 'VoltSol Alerts <alerts@voltsolenergy.com>',
    to: HUGO_EMAIL,
    subject,
    html: emailShell(body),
  });
  return subject;
}

export async function sendCancellationEmail(appt: AppointmentEmailDetails): Promise<string> {
  const dateStr = formatSlotDate(appt.slot_date);
  const timeStr = `${formatSlotTime(appt.start_time)} \u2013 ${formatSlotTime(appt.end_time)}`;
  const subject = 'Your VoltSol Appointment Has Been Cancelled';

  const body = `
      <h1 style="margin:0 0 16px 0;font-size:22px;color:#040D1C;">Hi ${appt.first_name}, your appointment is cancelled.</h1>
      <p style="margin:0 0 16px 0;color:#475569;line-height:1.6;">
        Your appointment on <strong>${dateStr}</strong> (${timeStr}) has been cancelled. No further action is needed.
      </p>
      <p style="margin:0 0 16px 0;color:#475569;line-height:1.6;">
        Changed your mind? You can book a new time anytime:
      </p>
      <div style="text-align:center;margin:24px 0;">
        <a href="${SITE_URL}/book" style="display:inline-block;background:#F59E0B;color:#040D1C;font-weight:700;padding:12px 24px;border-radius:8px;text-decoration:none;font-size:15px;">Book a New Appointment</a>
      </div>
      <p style="margin:0;color:#475569;line-height:1.6;font-size:14px;">
        Questions? Reply to this email or reach Hugo at <a href="mailto:info@voltsolenergy.com" style="color:#F59E0B;">info@voltsolenergy.com</a>.
      </p>`;

  await getResend().emails.send({
    from: 'VoltSol Energy <hello@voltsolenergy.com>',
    to: appt.email,
    subject,
    html: emailShell(body),
  });
  return subject;
}

/**
 * Send a magic-link login email to an admin.
 */
export async function sendAdminLoginEmail(email: string, token: string): Promise<void> {
  const magicLink = `${SITE_URL}/admin/auth/${token}`;
  const subject = 'Your VoltSol Admin login link';

  const body = `
      <h1 style="margin:0 0 16px 0;font-size:22px;color:#040D1C;">Admin Login Request</h1>
      <p style="margin:0 0 16px 0;color:#475569;line-height:1.6;">
        Click the button below to log in to VoltSol Admin.
      </p>
      <div style="text-align:center;margin:24px 0;">
        <a href="${magicLink}" style="display:inline-block;background:#F59E0B;color:#040D1C;font-weight:700;padding:14px 28px;border-radius:8px;text-decoration:none;font-size:16px;">Log in to VoltSol Admin</a>
      </div>
      <p style="margin:0 0 16px 0;color:#475569;line-height:1.6;font-size:14px;">
        This link expires in 15 minutes and can be used once.
      </p>
      <p style="margin:0;color:#94a3b8;line-height:1.6;font-size:13px;">
        If you didn't request this login link, you can safely ignore this email.
      </p>`;

  await getResend().emails.send({
    from: 'VoltSol Admin <hello@voltsolenergy.com>',
    to: email,
    subject,
    html: emailShell(body),
  });
}
