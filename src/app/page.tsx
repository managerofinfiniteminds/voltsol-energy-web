import { redirect } from 'next/navigation';

// The root / is served by index.html (coming soon page).
// In Next.js, this page.tsx would normally take over /.
// We redirect to /go for the solar intake form, preserving index.html
// at the static root for Cloudflare/CDN.
export default function RootPage() {
  // Redirect to /go for the intake form
  redirect('/go');
}
