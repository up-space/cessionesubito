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
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  viewportFit: 'cover',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it" className={dmSans.variable} >
      <body className="antialiased">
        {children}
        <Analytics />
        <CookieBanner />
      </body>
      
    </html>
  );
}
