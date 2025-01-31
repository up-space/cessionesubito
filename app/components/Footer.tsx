import Link from 'next/link';
import { OptimizedImage } from './ui/optimized-image';
import { COMPANY_INFO } from '../lib/constants';

const footerLinks = {
  prodotti: [
    { name: 'Cessione del quinto', href: '/cessione-quinto' },
    { name: 'Delegazione di pagamento', href: '/prestiti-delega' },
    { name: 'Prestiti in convenzione', href: '/prestiti-convenzione' },
  ],
  azienda: [
    { name: 'Chi siamo', href: '/chi-siamo' },
    { name: 'Lavora con noi', href: '/lavora-con-noi' },
    { name: 'Contatti', href: '/contatti' },
  ],
  contatti: [
    { name: COMPANY_INFO.phone, href: `tel:${COMPANY_INFO.phone}` },
    { name: COMPANY_INFO.email, href: `mailto:${COMPANY_INFO.email}` },
  ],
  normativa: [
    { name: 'Privacy Policy', href: '/privacy-policy' },
    { name: 'Cookie Policy', href: '/cookie-policy' },
    { name: 'Trasparenza', href: '/trasparenza' },
  ],
};

export default function Footer() {
  return (
    <footer className="w-full h-full flex flex-col justify-end pb-4 md:pb-6">
      {/* Logo */}
      <div className="w-full">
        <div className="container mx-auto max-w-7xl px-4 md:px-6 mb-4 md:mb-6">
          <div className="bg-white/80 backdrop-blur-xl rounded-2xl md:rounded-[2rem] py-8 md:py-12 flex justify-center items-center">
            <OptimizedImage
              src="/full-logo.png"
              alt="Cessione Subito"
              width={800}
              height={200}
              className="w-[280px] md:w-[600px] h-auto"
              priority
            />
          </div>
        </div>
      </div>

      {/* Legal Notice */}
      <div className="w-full">
        <div className="container mx-auto max-w-7xl px-4 md:px-6">
          <div className="bg-white/80 backdrop-blur-xl py-4 px-6 md:px-8 rounded-2xl md:rounded-[2rem] mb-4 md:mb-6">
            <p className="text-[#003B7E]/80 text-xs md:text-sm">
              Cessionesubito è un servizio di Fidiline SRL (agente in attività finanziaria con sede in Viale Bianca Maria 22 – 20129 Milano, MI – P.IVA 06331970829 – iscr. OAM n. A10847) opera su mandato diretto di Banca Sistema S.p.A. per la promozione ed il collocamento del prodotto Quinto Puoi. La concessione del prestito è subordinata all'approvazione di Banca Sistema S.p.A.
            </p>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="w-full">
        <div className="container mx-auto max-w-7xl px-4 md:px-6">
          <div className="bg-[#003B7E] text-white rounded-2xl md:rounded-[2rem] overflow-hidden shadow-[0_4px_12px_rgba(0,59,126,0.08)]">
            <div className="px-6 md:px-8 py-8 md:py-12">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {/* Links Sections */}
                <div>
                  <h3 className="text-base md:text-lg font-medium mb-4">Prodotti</h3>
                  <ul className="space-y-2">
                    {footerLinks.prodotti.map((link) => (
                      <li key={link.name}>
                        <Link 
                          href={link.href}
                          className="text-sm md:text-base text-white/80 hover:text-white transition-colors"
                        >
                          {link.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-base md:text-lg font-medium mb-4">L'azienda</h3>
                  <ul className="space-y-2">
                    {footerLinks.azienda.map((link) => (
                      <li key={link.name}>
                        <Link 
                          href={link.href}
                          className="text-sm md:text-base text-white/80 hover:text-white transition-colors"
                        >
                          {link.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-base md:text-lg font-medium mb-4">Contatti</h3>
                  <ul className="space-y-2">
                    {footerLinks.contatti.map((link) => (
                      <li key={link.name}>
                        <Link 
                          href={link.href}
                          className="text-sm md:text-base text-white/80 hover:text-white transition-colors"
                        >
                          {link.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-base md:text-lg font-medium mb-4">Normativa</h3>
                  <ul className="space-y-2">
                    {footerLinks.normativa.map((link) => (
                      <li key={link.name}>
                        <Link 
                          href={link.href}
                          className="text-sm md:text-base text-white/80 hover:text-white transition-colors"
                        >
                          {link.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-white/10 bg-white/5 backdrop-blur-lg">
              <div className="px-6 md:px-8 py-4 flex flex-col md:flex-row justify-between items-center gap-4">
                <p className="text-xs md:text-sm text-white/60">
                  Copyright © {new Date().getFullYear()} — All Rights Reserved
                </p>
                <div className="flex flex-col md:flex-row items-center gap-4">
                  <div className="flex items-center gap-4">
                    <p className="text-xs md:text-sm text-white/60">Made in</p>
                    <Link 
                      href="https://upspace.tech" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-xs md:text-sm text-white hover:text-white/80 transition-colors"
                    >
                      Upspace
                    </Link>
                  </div>
                  <div className="flex items-center gap-4">
                    <Link 
                      href="https://facebook.com" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-white/60 hover:text-white transition-colors"
                    >
                      <svg className="w-4 h-4 md:w-5 md:h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                      </svg>
                    </Link>
                    <Link 
                      href="https://linkedin.com" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-white/60 hover:text-white transition-colors"
                    >
                      <svg className="w-4 h-4 md:w-5 md:h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
} 