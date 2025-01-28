import type { Metadata, Viewport } from "next";
import "./globals.css";
import { DM_Sans } from 'next/font/google';
import { Analytics } from "@vercel/analytics/react"
import CookieBanner from './components/shared/CookieBanner';
import { COMPANY_INFO } from './lib/constants';

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm-sans',
});

export const metadata: Metadata = {
  title: COMPANY_INFO.name,
  description: `${COMPANY_INFO.name} - ${COMPANY_INFO.legalInfo.slice(0, 155)}...`,
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: "Cessione Subito",
  },
  formatDetection: {
    telephone: true,
    date: false,
    address: false,
    email: true,
  },
  metadataBase: new URL('https://cessionesubito.it'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: COMPANY_INFO.name,
    description: `${COMPANY_INFO.name} - ${COMPANY_INFO.legalInfo.slice(0, 155)}...`,
    url: 'https://cessionesubito.it',
    siteName: COMPANY_INFO.name,
    locale: 'it_IT',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: COMPANY_INFO.name,
    description: `${COMPANY_INFO.name} - ${COMPANY_INFO.legalInfo.slice(0, 155)}...`,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  viewportFit: 'cover',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it" className={dmSans.variable}>
      <body className="antialiased">
        <div id="skip-to-content" className="sr-only focus:not-sr-only focus:absolute focus:z-[100] focus:bg-white focus:p-4 focus:text-[#003B7E]">
          <a href="#main-content">Vai al contenuto principale</a>
        </div>
        <main id="main-content" role="main">
          {children}
        </main>
        <Analytics />
        <CookieBanner />
      </body>
    </html>
  );
}
