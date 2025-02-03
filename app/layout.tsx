import type { Metadata, Viewport } from "next";
import "./globals.css";
import { DM_Sans } from 'next/font/google';
import { Analytics } from "@vercel/analytics/react"
import CookieBanner from './components/shared/CookieBanner';
import { COMPANY_INFO } from './lib/constants';
import { JsonLd } from './components/shared/JsonLd';

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm-sans',
});

export const metadata: Metadata = {
  title: {
    default: `${COMPANY_INFO.name} - Prestiti e Cessione del Quinto`,
    template: `%s | ${COMPANY_INFO.name}`
  },
  description: `${COMPANY_INFO.name} - Specialisti in Cessione del Quinto dello Stipendio e della Pensione. ${COMPANY_INFO.legalInfo.slice(0, 120)}...`,
  keywords: ['cessione del quinto', 'prestiti', 'finanziamenti', 'cessione quinto stipendio', 'cessione quinto pensione', 'prestiti dipendenti', 'prestiti pensionati'],
  authors: [{ name: COMPANY_INFO.name }],
  creator: COMPANY_INFO.name,
  publisher: COMPANY_INFO.name,
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: COMPANY_INFO.name,
  },
  formatDetection: {
    telephone: true,
    date: false,
    address: true,
    email: true,
  },
  metadataBase: new URL('https://cessionesubito.it'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: `${COMPANY_INFO.name} - Prestiti e Cessione del Quinto`,
    description: `${COMPANY_INFO.name} - Specialisti in Cessione del Quinto dello Stipendio e della Pensione. ${COMPANY_INFO.legalInfo.slice(0, 120)}...`,
    url: 'https://cessionesubito.it',
    siteName: COMPANY_INFO.name,
    locale: 'it_IT',
    type: 'website',
    images: [
      {
        url: '/full-logo.webp',
        width: 1200,
        height: 630,
        alt: `${COMPANY_INFO.name} logo`
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: `${COMPANY_INFO.name} - Prestiti e Cessione del Quinto`,
    description: `${COMPANY_INFO.name} - Specialisti in Cessione del Quinto dello Stipendio e della Pensione. ${COMPANY_INFO.legalInfo.slice(0, 120)}...`,
    images: ['/full-logo.webp'],
    creator: `@${COMPANY_INFO.name.toLowerCase().replace(/\s+/g, '')}`
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
      'notranslate': true
    },
  },
  verification: {
    google: 'add-your-google-site-verification-here'
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  viewportFit: 'cover',
  themeColor: '#003B7E'
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it" className={dmSans.variable}>
      <head>
        <link rel="alternate" hrefLang="it" href="https://cessionesubito.it" />
        <meta name="geo.region" content="IT-MI" />
        <meta name="geo.placename" content="Milano" />
        <meta name="geo.position" content="45.4668;9.1905" />
        <meta name="ICBM" content="45.4668, 9.1905" />
      </head>
      <body className="antialiased">
        <JsonLd 
          data={{
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": COMPANY_INFO.name,
            "url": "https://cessionesubito.it",
            "logo": "https://cessionesubito.it/full-logo.webp",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": COMPANY_INFO.address.split('-')[0].trim(),
              "addressLocality": "Milano",
              "postalCode": "20129",
              "addressCountry": "IT"
            },
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": COMPANY_INFO.phone,
              "contactType": "customer service",
              "email": COMPANY_INFO.email,
              "areaServed": "IT",
              "availableLanguage": "Italian"
            }
          }}
        />
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
