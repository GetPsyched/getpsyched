import type { Metadata } from 'next';

import './globals.css';

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

const title = 'Priyanshu Tripathi';
const description = 'Software developer. I code things I find interesting.';
const url = 'https://getpsyched.dev';
export const metadata: Metadata = {
  metadataBase: new URL(url),
  title,
  description,
  robots: { index: true, follow: true },
  twitter: { card: 'summary_large_image', creator: '@getpsyched26' },
  openGraph: {
    title,
    description,
    url,
    siteName: title,
    type: 'website',
  },
  alternates: { canonical: url },
};
