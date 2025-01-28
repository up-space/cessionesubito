'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if user has already made a choice
    const cookieConsent = localStorage.getItem('cookieConsent');
    if (!cookieConsent) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    setIsVisible(false);
    // Here you would initialize your analytics or other cookie-dependent services
  };

  const handleReject = () => {
    localStorage.setItem('cookieConsent', 'rejected');
    setIsVisible(false);
    // Here you would ensure no optional cookies are set
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-8"
          role="dialog"
          aria-labelledby="cookie-title"
          aria-describedby="cookie-description"
        >
          <div 
            className="max-w-4xl mx-auto bg-white/80 backdrop-blur-md rounded-[2rem] shadow-lg border border-white/50"
          >
            <div className="p-6 md:p-8">
              <div className="flex flex-col md:flex-row gap-6 items-start md:items-center justify-between">
                <div className="flex-1 space-y-3">
                  <h3 id="cookie-title" className="text-xl font-semibold text-[#003B7E]">
                    Informativa sui Cookie
                  </h3>
                  <p id="cookie-description" className="text-sm text-gray-600 leading-relaxed">
                    Utilizziamo i cookie per migliorare la tua esperienza sul nostro sito. 
                    Alcuni cookie sono necessari per il funzionamento del sito, mentre altri 
                    ci aiutano a capire come interagisci con esso. Consulta la nostra{' '}
                    <Link 
                      href="/cookie-policy" 
                      className="text-[#003B7E] hover:text-[#002B5E] font-medium transition-colors underline decoration-[#003B7E]/30 hover:decoration-[#003B7E] focus:outline-none focus:ring-2 focus:ring-[#003B7E] focus:ring-offset-2 rounded"
                    >
                      Cookie Policy
                    </Link>{' '}
                    e la nostra{' '}
                    <Link 
                      href="/privacy-policy" 
                      className="text-[#003B7E] hover:text-[#002B5E] font-medium transition-colors underline decoration-[#003B7E]/30 hover:decoration-[#003B7E] focus:outline-none focus:ring-2 focus:ring-[#003B7E] focus:ring-offset-2 rounded"
                    >
                      Privacy Policy
                    </Link>{' '}
                    per maggiori informazioni.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-3 min-w-fit">
                  <button
                    onClick={handleReject}
                    className="px-6 py-2.5 text-sm font-medium text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-full shadow-sm hover:shadow transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#003B7E] focus:ring-offset-2"
                    aria-label="Rifiuta i cookie"
                  >
                    Rifiuta
                  </button>
                  <button
                    onClick={handleAccept}
                    className="px-6 py-2.5 text-sm font-medium text-white bg-[#003B7E] hover:bg-[#002B5E] rounded-full shadow-sm hover:shadow transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#003B7E] focus:ring-offset-2"
                    aria-label="Accetta i cookie"
                  >
                    Accetta
                  </button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}