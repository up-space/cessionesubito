'use client'

import Image from "next/image";
import Button from "./Button";
import { motion } from "framer-motion";
import Link from "next/link";
import { memo, useEffect, useState } from 'react';

const imageVariants = {
  hidden: { opacity: 0, x: -100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1],
      delay: 0.2
    }
  }
};

const contentVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1]
    }
  }
};

const GradientOverlay = memo(() => (
  <motion.div
    className="absolute bottom-0 left-0 right-0 h-16 sm:h-24 md:h-32"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
    style={{
      background: "linear-gradient(to top, rgba(64, 191, 239, 0.2) 0%, transparent 100%)",
      backdropFilter: "blur(8px)"
    }}
  />
));
GradientOverlay.displayName = 'GradientOverlay';

const HeroImage = memo(({ isMobile = false }: { isMobile?: boolean }) => (
  <div className="relative w-full h-full overflow-hidden">
    <Image 
      src="/homepage/big-favicon.png" 
      alt="Decorative circles" 
      fill 
      className={`transition-transform duration-700 ${
        isMobile 
          ? "object-contain opacity-50" 
          : "object-contain scale-50 xs:scale-65 sm:scale-75 md:scale-100 -translate-y-1/4 md:translate-y-0 hover:scale-105"
      }`}
      priority
      sizes={isMobile ? "(max-width: 768px) 280px" : "(max-width: 768px) 100vw, 66vw"}
      loading="eager"
      quality={85}
    />
  </div>
));
HeroImage.displayName = 'HeroImage';

function Hero() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`min-h-[calc(100vh-4rem)] sm:min-h-screen w-full bg-gray-100 relative transition-all duration-300 ${
      scrolled ? 'pt-16' : 'pt-20 sm:pt-24 md:pt-32'
    }`}>
      <GradientOverlay />
      
      <div className="md:hidden absolute inset-0 z-0 opacity-30">
        <HeroImage isMobile />
      </div>

      <div className="relative h-[calc(100vh-4rem)] sm:h-[calc(100vh-6rem)] md:h-[calc(100vh-8rem)] flex items-center">
        <motion.div 
          className="hidden md:block absolute left-0 h-full w-full md:w-2/3 -ml-12 xs:-ml-16 sm:-ml-24 md:-ml-96"
          variants={imageVariants}
          initial="hidden"
          animate="visible"
        >
          <HeroImage />
        </motion.div>

        <div className="w-full flex items-center justify-center md:justify-start">
          <motion.div 
            className="w-full md:w-1/2 md:ml-auto flex flex-col items-center md:items-start justify-center px-6 sm:px-8 md:px-20 z-10"
            variants={contentVariants}
            initial="hidden"
            animate="visible"
          >
            <h1 className="text-5xl xs:text-6xl sm:text-5xl md:text-6xl text-center md:text-left leading-tight">
              <motion.span 
                className="text-[#40BFEF] block mb-3 md:mb-0 font-bold"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                Il tuo prestito veloce,
              </motion.span>
              <motion.span 
                className="text-[#003B7E] block font-medium"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                a portata di clic.
              </motion.span>
            </h1>

            <motion.div 
              className="mt-8 xs:mt-10 md:mt-8 flex justify-center md:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              <Link href="/contatti">
                <Button text="Scopri ora" className="hover:scale-105 transition-transform duration-300" />
              </Link>
            </motion.div>

            <motion.div 
              className="md:hidden mt-12 relative w-full max-w-[280px] mx-auto"
              variants={imageVariants}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-t from-gray-100 to-transparent"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 1, ease: [0.16, 1, 0.3, 1] }}
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default memo(Hero);