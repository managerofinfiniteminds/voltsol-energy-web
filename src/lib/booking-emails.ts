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
const HUGO_EMAIL = process.env.SALES_ALERT_EMAIL || 'hugo@voltsolenergy.com';

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

/** Format a YYYY-MM-DD date string without timezone shifting. */
export function formatSlotDate(slotDate: string): string {
  const [y, m, d] = slotDate.slice(0, 10).split('-').map(Number);
  const date = new Date(Date.UTC(y, m - 1, d));
  return date.toLocaleDateString('en-US', {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
    year: 'numeric',
    timeZone: 'UTC',
  });
}

/** Format an HH:MM:SS time string as h:MM AM/PM. */
export function formatSlotTime(time: string): string {
  const [hRaw, mRaw] = time.split(':');
  const h = Number(hRaw);
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
      <div style="font-size:28px;font-weight:800;color:#F59E0B;letter-spacing:-0.5px;">VoltSol Energy</div>
      <div style="font-size:13px;color:#94a3b8;margin-top:4px;">Northern California Solar</div>
    </div>
    <div style="background:#ffffff;padding:32px 24px;border:1px solid #e2e8f0;border-top:none;">
      ${body}
    </div>
    <div style="background:#f1f5f9;border-radius:0 0 12px 12px;padding:16px 24px;text-align:center;border:1px solid #e2e8f0;border-top:none;">
      <div style="font-size:13px;color:#64748b;">VoltSol Energy &nbsp;|&nbsp; <a href="${SITE_URL}" style="color:#F59E0B;text-decoration:none;">voltsolenergy.com</a></div>
      <div style="font-size:12px;color:#94a3b8;margin-top:4px;">Clean energy, built to last.</div>
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
          <tr><td style="padding:4px 0;color:#64748b;font-size:14px;width:30%;">Date</td><td style="padding:4px 0;color:#040D1C;font-size:14px;font-weight:600;">${dateStr}</td></tr>
          <tr><td style="padding:4px 0;color:#64748b;font-size:14px;">Time</td><td style="padding:4px 0;color:#040D1C;font-size:14px;font-weight:600;">${timeStr}</td></tr>
          ${appt.address ? `<tr><td style="padding:4px 0;color:#64748b;font-size:14px;">Address</td><td style="padding:4px 0;color:#040D1C;font-size:14px;font-weight:600;">${appt.address}</td></tr>` : ''}
        </table>
      </div>
      <p style="margin:0 0 16px 0;color:#475569;line-height:1.6;">
        Hugo will arrive ready to assess your home and build you a custom proposal. No pressure, no obligation. He'll call ahead to confirm.
      </p>
      <div style="text-align:center;margin:24px 0;">
        <a href="${magicLink}" style="display:inline-block;background:#F59E0B;color:#040D1C;font-weight:700;padding:12px 24px;border-radius:8px;text-decoration:none;font-size:15px;">View or Manage Your Appointment</a>
      </div>
      <p style="margin:0;color:#475569;line-height:1.6;font-size:14px;">
        Questions? Reply to this email or reach Hugo directly at <a href="mailto:hugo@voltsolenergy.com" style="color:#F59E0B;">hugo@voltsolenergy.com</a>.
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
        Questions? Reply to this email or reach Hugo at <a href="mailto:hugo@voltsolenergy.com" style="color:#F59E0B;">hugo@voltsolenergy.com</a>.
      </p>`;

  await getResend().emails.send({
    from: 'VoltSol Energy <hello@voltsolenergy.com>',
    to: appt.email,
    subject,
    html: emailShell(body),
  });
  return subject;
}
