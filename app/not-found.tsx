'use client'

import { motion } from 'framer-motion';
import { OptimizedImage } from './components/ui/optimized-image';
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white flex items-center justify-center p-4">
      <motion.div 
        className="text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="mb-8">
          <Link href="/" className="inline-block">
            <OptimizedImage
              src="/full-logo.png"
              alt="CessioneSubito"
              width={180}
              height={60}
              className="h-14 w-auto"
              priority
              sizes="180px"
            />
          </Link>
        </div>

        <h1 className="text-4xl md:text-5xl font-medium mb-4 text-[#003B7E]">
          Pagina non trovata
        </h1>
        
        <p className="text-gray-600 text-lg md:text-xl mb-8 max-w-md mx-auto">
          La pagina che stai cercando non esiste o è stata spostata.
        </p>

        <Link 
          href="/"
          className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-[#003B7E] text-white font-medium hover:bg-[#003B7E]/90 transition-colors"
        >
          Torna alla Home
        </Link>
      </motion.div>
    </div>
  );
} 