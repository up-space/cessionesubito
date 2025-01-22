'use client'

import Image from "next/image";
import Button from "./Button";
import { motion } from "framer-motion";
import Link from "next/link";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
};

const imageVariants = {
  hidden: { opacity: 0, scale: 0.8, rotate: -5 },
  visible: {
    opacity: 1,
    scale: 1,
    rotate: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut"
    }
  }
};

export default function Hero() {
  return (
    <div className="min-h-[calc(100vh-4rem)] sm:min-h-screen w-full bg-gray-100 relative pt-20 sm:pt-24 md:pt-32">
      {/* Animated gradient overlay */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-16 sm:h-24 md:h-32"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        style={{
          background: "linear-gradient(to top, rgba(64, 191, 239, 0.2) 0%, transparent 100%)"
        }}
      />
      
      <div className="relative h-[calc(100vh-4rem)] sm:h-[calc(100vh-6rem)] md:h-[calc(100vh-8rem)] flex items-center">
        {/* Background image - hidden on mobile */}
        <motion.div 
          className="hidden md:block absolute left-0 h-full w-full md:w-2/3 -ml-12 xs:-ml-16 sm:-ml-24 md:-ml-96"
          variants={imageVariants}
          initial="hidden"
          animate="visible"
        >
          <Image 
            src="/homepage/big-favicon.png" 
            alt="Decorative circles" 
            fill 
            className="object-contain scale-50 xs:scale-65 sm:scale-75 md:scale-100 -translate-y-1/4 md:translate-y-0"
            priority 
          />
        </motion.div>

        {/* Content */}
        <div className="w-full flex items-center justify-center md:justify-start">
          <motion.div 
            className="w-full md:w-1/2 md:ml-auto flex flex-col items-center md:items-start justify-center px-6 sm:px-8 md:px-20"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.h1 
              className="text-4xl xs:text-5xl sm:text-5xl md:text-6xl text-center md:text-left leading-tight"
              variants={itemVariants}
            >
              <motion.span 
                className="text-[#40BFEF] block mb-3 md:mb-0 font-bold"
                variants={itemVariants}
              >
                Il tuo prestito veloce,
              </motion.span>
              <motion.span 
                className="text-[#003B7E] block font-medium"
                variants={itemVariants}
              >
                a portata di clic
              </motion.span>
            </motion.h1>

            <motion.div 
              className="mt-8 xs:mt-10 md:mt-8 flex justify-center md:justify-start"
              variants={itemVariants}
            >
              <Link href="/contatti">
                <Button text="Richiedi un preventivo" />
              </Link>
            </motion.div>

            {/* Mobile-only decorative elements */}
            <motion.div 
              className="md:hidden mt-12 relative w-full max-w-[280px] mx-auto"
              variants={imageVariants}
            >
              <div className="aspect-square relative">
                <Image
                  src="/homepage/big-favicon.png"
                  alt="Decorative circles"
                  fill
                  className="object-contain opacity-50"
                />
              </div>
              <motion.div
                className="absolute inset-0 bg-gradient-to-t from-gray-100 to-transparent"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 1 }}
              />
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator - visible only on larger screens */}
      <motion.div
        className="hidden md:block absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.5 }}
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="flex flex-col items-center"
        >
          <span className="text-sm text-[#003B7E]/60 mb-2">Scorri verso il basso</span>
          <svg
            className="w-6 h-6 text-[#003B7E]/40"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </motion.div>
      </motion.div>
    </div>
  );
}