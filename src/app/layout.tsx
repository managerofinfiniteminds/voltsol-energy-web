import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'VoltSol Energy — Solar Installation Northern California',
  description: 'Get a free solar estimate from VoltSol Energy. Licensed solar installation in Northern California.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
