'use client';

import { motion } from 'framer-motion';
import Button from './Button';
import Link from 'next/link';
import ImageGrid from './ImageGrid';
import SectionWrapper from './SectionWrapper';
import { useInView } from 'react-intersection-observer';

const animations = {
  text: {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
    }
  },
  stagger: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }
};

export default function Features() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <SectionWrapper 
      className="flex items-center pt-12 sm:pt-16"
      aria-label="Features Section"
    >
      <div className="container mx-auto px-4 sm:px-6 md:px-12 max-w-7xl md:min-h-[600px]">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 md:gap-12 lg:gap-16 w-full items-start">
          <motion.div 
            ref={ref}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={animations.stagger}
            className="flex flex-col justify-center gap-8 md:sticky md:top-32 text-center md:text-left"
          >
            <motion.div 
              variants={animations.text}
              className="space-y-6 sm:space-y-8 md:mb-8"
            >
              <h2 
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
                id="features-heading"
              >
                <motion.span 
                  variants={animations.text}
                  className="text-[#003B7E] block mb-2"
                >
                  Prestito veloce
                </motion.span>
                <motion.span 
                  variants={animations.text}
                  className="text-[#40BFEF] block"
                >
                  e un tasso conveniente?
                </motion.span>
              </h2>
              <motion.p 
                variants={animations.text}
                className="text-gray-700 text-base sm:text-lg md:text-xl max-w-2xl mx-auto md:mx-0 leading-relaxed"
              >
                Cessionesubito.it nasce con l&apos;idea di avvicinarsi quanto più possibile 
                a quell&apos;obiettivo. Lavoriamo da anni nel settore dei finanziamenti, 
                e abbiamo creato un pacchetto di prodotti finanziari che uniscano 
                convenienza e trasparenza.
              </motion.p>
            </motion.div>
            <motion.div 
              variants={animations.text}
              className="flex justify-center md:justify-start"
            >
              <Link 
                href="/contatti" 
                className="group inline-block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded-lg"
                aria-label="Richiedi un preventivo"
              >
                <div className="transform transition-transform duration-300 group-hover:scale-105">
                  <Button 
                    text="Cessione Subito"
                    variant="primary"
                    aria-label="Richiedi preventivo per Cessione del Quinto"
                  />
                </div>
              </Link>
            </motion.div>
          </motion.div>
          <div className="relative">
            <ImageGrid />
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}