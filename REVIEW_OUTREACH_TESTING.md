# Customer Review Outreach System — Testing Guide

## Overview
Built a two-part review outreach system for VoltSol Energy:
1. **VoltSol Customers**: Request reviews from completed appointments
2. **Legacy Customers**: Outreach to pre-VoltSol customers via editable email template

## What Was Built

### Database (Migration 005)
✅ Applied to Neon DB successfully
- `appointments.review_requested_at` column (nullable TIMESTAMPTZ)
- `legacy_review_requests` table (id, email, name, subject, body, sent_at, resend_id)
- Indexes on email (lowercase) and sent_at

### Email Functions (`src/lib/email.ts`)
1. **`sendReviewRequestEmail()`** — VoltSol customer review request
   - Simple, personal note from Hugo
   - Subject: "{first_name}, quick favor?"
   - Single button linking to Google review page
   - Returns `{ id: string }` (Resend message ID)

2. **`sendLegacyReviewEmail()`** — Legacy customer outreach
   - Supports `{name}` token with "there" fallback
   - Converts `\n\n` to HTML paragraphs
   - Returns `{ id: string }` (Resend message ID)

### API Routes
1. **`POST /api/admin/appointments/[id]/request-review`**
   - Idempotent: only sends if `review_requested_at IS NULL` (unless `force: true`)
   - Updates timestamp BEFORE sending
   - Rolls back timestamp if email fails
   - Returns 400 if already sent, 500 on email error

2. **`GET /api/admin/legacy-review-template`**
   - Loads subject + body from `site_config` table
   - Falls back to hardcoded defaults if missing

3. **`POST /api/admin/legacy-review-template`**
   - Saves subject + body to `site_config` (upserts two rows)
   - Keys: `legacy_review_email_subject`, `legacy_review_email_body`

4. **`GET /api/admin/legacy-reviews`**
   - Returns last 20 sends from `legacy_review_requests` (DESC by sent_at)

5. **`POST /api/admin/legacy-reviews`**
   - Validates email format
   - Rate limits: 20/hour, 50/day (simple count-based)
   - Sends email via `sendLegacyReviewEmail()`
   - Logs to `legacy_review_requests` table
   - Returns 400 (bad email), 429 (rate limit), or 500 (send failure)

### Admin UI (`/admin/reviews`)
Two tabs: "VoltSol Customers" | "Legacy Customers"

**Tab 1: VoltSol Customers**
- Fetches `?status=completed` appointments
- Shows: name, email, phone, install date
- "Request Review" button → green "✓ Review Requested [date]" after send
- "Send Again" button appears after first send (bypasses idempotency check)

**Tab 2: Legacy Customers**
- Email input (required, validated)
- Name input (optional)
- Editable subject + body textareas (pre-loaded from template)
- "Save as Default Template" button (writes to `site_config`)
- "Send Email" button → confirmation modal → actual send
- Recent sends list (last 20) below form

### Admin Nav
Added "Reviews" link to `/admin/layout.tsx` nav (between Schedule and Utilities)

## Manual Testing Checklist

### Pre-Flight
- [ ] `.env` has `RESEND_API_KEY` set
- [ ] `.env` has `SALES_ALERT_EMAIL` (used as FROM name context)
- [ ] Migration 005 applied (check `\d appointments` shows `review_requested_at` column in Neon SQL editor)

### Feature 1: VoltSol Customer Review Requests
1. **Setup**
   - [ ] Create a test appointment in Neon with `status = 'completed'`
   - [ ] Use a real email you control for testing
   
2. **First Send**
   - [ ] Go to `/admin/reviews` → VoltSol Customers tab
   - [ ] Verify appointment appears in list
   - [ ] Click "Request Review"
   - [ ] Check email inbox — should receive:
     - FROM: "Hugo at VoltSol <info@voltsolenergy.com>"
     - SUBJECT: "{first_name}, quick favor?"
     - Simple text email with one Google review link button
   - [ ] Verify button shows "✓ Review Requested [date]" after send
   - [ ] Refresh page — state persists (driven by DB `review_requested_at`)

3. **Idempotency Check**
   - [ ] Click "Send Again" button
   - [ ] Verify email sends again (override works)

4. **Error Handling**
   - [ ] Test with invalid appointment ID → should return 400
   - [ ] Test with Resend API key removed → should rollback timestamp

### Feature 2: Legacy Customer Outreach
1. **Template Load**
   - [ ] Go to `/admin/reviews` → Legacy Customers tab
   - [ ] Verify default template loads in subject + body fields
   - [ ] Template should include `{name}` token and STOP line

2. **Template Editing & Save**
   - [ ] Edit subject to "Test Subject {name}"
   - [ ] Edit body to add "Hello {name}, test message."
   - [ ] Click "Save as Default Template"
   - [ ] Reload page — verify edits persist

3. **Sending**
   - [ ] Enter your email in Email field
   - [ ] Enter "TestUser" in Name field
   - [ ] Click "Send Email" → confirmation modal appears
   - [ ] Modal shows "You're about to email [your-email]. Send?"
   - [ ] Click "Yes, Send"
   - [ ] Check email inbox — should receive:
     - FROM: "Hugo <info@voltsolenergy.com>"
     - SUBJECT: "Test Subject TestUser" (not "{name}")
     - BODY: "Hello TestUser, test message." (not "{name}")

4. **{name} Token Fallback**
   - [ ] Send another email with Email filled but Name BLANK
   - [ ] Check inbox — body should say "Hello there" (not "Hello {name}")

5. **Recent Sends List**
   - [ ] After sending, verify email appears in "Recent Sends (Last 20)" section below form
   - [ ] Shows: name (or "(no name)"), email, subject, sent date

6. **Rate Limiting**
   - [ ] Send 20 emails in <1 hour → 21st should return 429 error
   - [ ] Error message: "Rate limit exceeded: 20 emails per hour"

7. **Validation**
   - [ ] Try sending with invalid email format → should return 400
   - [ ] Try sending with blank subject → client-side prevents submit

### Integration Tests
- [ ] Admin auth: logout, try accessing `/admin/reviews` → redirect to `/admin/login`
- [ ] Mobile responsive: test on narrow viewport (nav tabs, form layout)
- [ ] Error display: network failure, API errors show in red banner at top

## Notes for Production Deploy
1. **Migration**: Already applied to Neon DB (005_review_outreach.sql ran successfully)
2. **Resend**: Emails send from `info@voltsolenergy.com` — verify domain is verified in Resend dashboard
3. **Google Review Link**: Uses existing production link `https://g.page/r/CQOUYctMQ1MMEBM/review`
4. **Rate Limits**: Current limits (20/hr, 50/day) are per-DB, not per-IP — adjust if needed
5. **Template Defaults**: Default legacy email mentions VoltSol launch + pre-VoltSol work — review for accuracy before first use

## Files Changed
- `sql/005_review_outreach.sql` (new)
- `src/lib/email.ts` (added 2 functions)
- `src/app/admin/reviews/page.tsx` (new)
- `src/app/api/admin/appointments/[id]/request-review/route.ts` (new)
- `src/app/api/admin/legacy-review-template/route.ts` (new)
- `src/app/api/admin/legacy-reviews/route.ts` (new)
- `src/app/admin/layout.tsx` (added Reviews nav link)
- `src/app/api/admin/appointments/route.ts` (added `review_requested_at` to SELECT)

## Known Limitations
- No email preview before sending (legacy tab) — user sees raw template in textarea
- No bulk send for VoltSol customers — one button per appointment
- Rate limits are simple counts, not sliding window (resets at hour/day boundary)
- No email open/click tracking (Resend supports this but not implemented)
- No unsubscribe link in legacy emails (just "Reply STOP" text)

## Troubleshooting
**Email not arriving:**
1. Check Resend dashboard for send logs
2. Verify `RESEND_API_KEY` in `.env`
3. Check Resend domain verification status
4. Check spam folder

**"Review Requested" not persisting:**
1. Verify migration 005 applied (`\d appointments` in Neon)
2. Check `/api/admin/appointments?status=completed` includes `review_requested_at` field
3. Check browser console for API errors

**Rate limit triggering too early:**
1. Check `legacy_review_requests` table for existing rows in timeframe
2. Queries count ALL sends, not per-user — adjust if multiple admins sending

**Template not saving:**
1. Check `site_config` table exists (migration 010 or 011)
2. Check browser console for POST errors to `/api/admin/legacy-review-template`
