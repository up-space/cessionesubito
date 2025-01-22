'use client';

import { motion, useScroll, useTransform, useAnimationControls } from 'framer-motion';
import { useRef, useEffect } from 'react';
import Image from 'next/image';
import Button from './Button';
import Link from 'next/link';

const images = [
  '/homepage/feature-1.jpg',
  '/homepage/feature-2.jpg',
  '/homepage/feature-3.jpg',
  '/homepage/feature-4.jpg',
  // Duplicate for continuous loop
  '/homepage/feature-1.jpg',
  '/homepage/feature-2.jpg',
  '/homepage/feature-3.jpg',
  '/homepage/feature-4.jpg',
];

const containerVariants = {
  hidden: { 
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.2,
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { 
    opacity: 0,
    y: 20
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.15,
      ease: [0.16, 1, 0.3, 1]
    }
  }
};

export default function Features() {
  const containerRef = useRef(null);
  const controls = useAnimationControls();
  const imagesControls = useAnimationControls();
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  useEffect(() => {
    const startAnimation = async () => {
      // Initial fade in
      await imagesControls.start({
        opacity: [0, 1],
        scale: [0.95, 1],
        transition: {
          duration: 1.2,
          ease: [0.16, 1, 0.3, 1]
        }
      });

      // Start infinite scroll
      controls.start({
        y: [-800, 0],
        transition: {
          duration: 30,
          ease: "linear",
          repeat: Infinity,
          repeatType: "loop"
        }
      });
    };

    startAnimation();
  }, [controls, imagesControls]);

  return (
    <motion.section 
      ref={containerRef}
      className="w-full h-screen sm:h-screen relative overflow-hidden bg-gradient-to-b from-[#40BFEF] to-[#003B7E]/10 flex items-center pt-16"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
    >
      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 md:px-12 max-w-7xl h-[calc(100vh-4rem)] md:h-auto">
        <div className="grid md:grid-cols-2 gap-6 md:gap-12 lg:gap-16 w-full h-full md:h-auto md:items-center">
          {/* Text Content */}
          <motion.div 
            variants={itemVariants}
            className="flex flex-col justify-center gap-8 h-[45vh] md:h-auto md:block md:sticky md:top-32 text-center md:text-left"
          >
            <div className="space-y-4 sm:space-y-6 md:mb-8">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium">
                <span className="text-white block mb-1">Prestito veloce</span>
                <span className="text-[#003B7E] block">e un tasso conveniente?</span>
              </h2>
              <p className="text-[#003B7E]/80 text-base sm:text-lg md:text-xl max-w-2xl mx-auto md:mx-0">
                Cessionesubito.it nasce con l'idea di avvicinarsi quanto più possibile a quell'obiettivo. 
                Lavoriamo da anni nel settore dei finanziamenti, e abbiamo creato un pacchetto di prodotti 
                finanziari che uniscano convenienza e trasparenza.
              </p>
            </div>
            <div className="flex justify-center md:justify-start">
              <Link href="/contatti">
                <Button 
                  text="Cessione Subito"
                  variant="white"
                  contrast={true}
                />
              </Link>
            </div>
          </motion.div>

          {/* Image Grid */}
          <div className="relative h-[calc(55vh-4rem)] md:h-[800px] w-full overflow-hidden">
            {/* Strong top blur gradient */}
            <div className="absolute -top-12 sm:-top-16 md:-top-24 left-0 right-0 h-24 sm:h-32 md:h-48 z-10" style={{
              background: 'linear-gradient(to bottom, #40BFEF 0%, rgba(64, 191, 239, 0.9) 20%, rgba(64, 191, 239, 0.3) 70%, transparent 100%)',
            }} />
            
            {/* Strong bottom blur gradient */}
            <div className="absolute -bottom-12 sm:-bottom-16 md:-bottom-24 left-0 right-0 h-24 sm:h-32 md:h-48 z-10" style={{
              background: 'linear-gradient(to top, #40BFEF 0%, rgba(64, 191, 239, 0.9) 20%, rgba(64, 191, 239, 0.3) 70%, transparent 100%)',
            }} />
            
            {/* Additional blur overlays */}
            <div className="absolute -top-12 sm:-top-16 md:-top-24 left-0 right-0 h-12 sm:h-16 md:h-24 backdrop-blur-xl z-[9]" />
            <div className="absolute -bottom-12 sm:-bottom-16 md:-bottom-24 left-0 right-0 h-12 sm:h-16 md:h-24 backdrop-blur-xl z-[9]" />
            
            {/* Scrolling images container */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={imagesControls}
              className="relative w-full h-full overflow-hidden"
            >
              <motion.div 
                animate={controls}
                className="grid grid-cols-2 gap-2 xs:gap-3 sm:gap-4 md:gap-6 absolute inset-0"
              >
                {images.map((src, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="relative"
                  >
                    <div className="relative aspect-[3/4] w-full overflow-hidden rounded-lg sm:rounded-xl md:rounded-2xl
                                 bg-white/30 backdrop-blur-xl p-1 sm:p-1.5 md:p-2 shadow-[0_8px_32px_0_rgba(31,38,135,0.07)] 
                                 border border-white/20 group">
                      <Image
                        src={src}
                        alt={`Feature ${index % 4 + 1}`}
                        fill
                        className="object-cover rounded-md sm:rounded-lg md:rounded-xl transition-transform duration-700
                                 group-hover:scale-105"
                      />
                      {/* Glass overlay */}
                      <div className="absolute inset-0 bg-[#003B7E]/10 backdrop-blur-sm rounded-md sm:rounded-lg md:rounded-xl
                                    opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.section>
  );
} 