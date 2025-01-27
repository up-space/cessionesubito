'use client';

import { motion } from 'framer-motion';
import Button from './Button';
import Link from 'next/link';
import ImageGrid from './ImageGrid';
import SectionWrapper from './SectionWrapper';

const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
  }
};

export default function Features() {
  return (
    <SectionWrapper className="flex items-center pt-12 sm:pt-16">
      <div className="container mx-auto px-4 sm:px-6 md:px-12 max-w-7xl h-[50vh] sm:h-[calc(100vh-4rem)] md:h-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 md:gap-12 lg:gap-16 w-full h-full md:h-auto md:items-center">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={textVariants}
            className="flex flex-col justify-center gap-8 h-[45vh] md:h-auto md:block md:sticky md:top-32 text-center md:text-left"
          >
            <div className="space-y-6 sm:space-y-8 md:mb-8">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                <span className="text-[#003B7E] block mb-2">Prestito veloce</span>
                <span className="text-[#40BFEF] block">e un tasso conveniente?</span>
              </h2>
              <p className="text-gray-700 text-base sm:text-lg md:text-xl max-w-2xl mx-auto md:mx-0 leading-relaxed">
                Cessionesubito.it nasce con l'idea di avvicinarsi quanto più possibile a quell'obiettivo. 
                Lavoriamo da anni nel settore dei finanziamenti, e abbiamo creato un pacchetto di prodotti 
                finanziari che uniscano convenienza e trasparenza.
              </p>
            </div>
            <div className="flex justify-center md:justify-start">
              <Link href="/contatti" className="hover:scale-105 transition-transform duration-300">
                <Button 
                  text="Cessione Subito"
                  variant="primary"
                />
              </Link>
            </div>
          </motion.div>
          <ImageGrid />
        </div>
      </div>
    </SectionWrapper>
  );
} 