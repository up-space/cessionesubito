import type { Metadata, Viewport } from "next";
import "./globals.css";
import { DM_Sans } from 'next/font/google';

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm-sans',
});

export const metadata: Metadata = {
  title: "Cessione Subito - Il tuo prestito veloce",
  description: "Ottieni un prestito veloce e conveniente con Cessione Subito. Soluzioni finanziarie su misura per te.",
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
    <html lang="it" className={dmSans.variable}>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
