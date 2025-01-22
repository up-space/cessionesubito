'use client';

import Button from './Button';
import { motion } from 'framer-motion';
import Link from 'next/link';

const products = [
  {
    title: ['Cessione del quinto', 'dello stipendio'],
    buttonText: 'Scopri il prodotto',
    href: '/cessione-quinto',
    description: 'Ottieni un prestito utilizzando fino a un quinto del tuo stipendio.'
  },
  {
    title: ['Prestiti in', 'convenzione'],
    buttonText: 'Scopri le convenzioni',
    href: '/prestiti-convenzione',
    description: 'Soluzioni dedicate per dipendenti pubblici e statali.'
  },
  {
    title: ['Prestiti', 'delega'],
    buttonText: 'Scopri come funziona',
    href: '/prestiti-delega',
    description: 'Un prestito aggiuntivo alla cessione del quinto.'
  }
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

export default function Products() {
  return (
    <motion.section 
      className="w-full h-screen sm:min-h-screen relative overflow-hidden bg-gradient-to-b from-[#40BFEF]/90 via-[#40BFEF] to-[#40BFEF]/90 flex items-center px-4 sm:px-6 md:px-12 py-20"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
    >
      {/* Content Container */}
      <div className="container mx-auto pt-20 w-full">
        <motion.div
          className="bg-white/20 backdrop-blur-xl rounded-[2rem] sm:rounded-[2.5rem] p-6 sm:p-8 md:p-12
                     shadow-[0_8px_32px_0_rgba(31,38,135,0.07)] border border-white/20
                     max-w-xl md:max-w-none mx-auto"
        >
          <div className="flex flex-col gap-8 md:gap-16">
            {/* Title - Centered on both mobile and desktop */}
            <motion.h2 
              variants={itemVariants}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium text-white text-center"
            >
              I nostri prodotti
            </motion.h2>

            {/* Products Grid - Stack on mobile, three equal columns on desktop */}
            <div className="flex flex-col md:grid md:grid-cols-3 gap-4 md:gap-8">
              {products.map((product, index) => (
                <Link href={product.href} key={index}>
                  <motion.div
                    variants={itemVariants}
                    className="bg-white/30 backdrop-blur-xl rounded-[1.5rem] p-5 md:p-8
                              shadow-[0_8px_32px_0_rgba(31,38,135,0.07)] border border-white/20 
                              flex flex-col items-start gap-4 md:gap-6
                              relative overflow-hidden group hover:bg-white/40 transition-colors
                              h-full"
                  >
                    <motion.div 
                      className="absolute top-0 right-0 w-32 h-32 md:w-48 md:h-48
                                bg-white/20 rounded-full blur-3xl -mr-16 -mt-16 md:-mr-24 md:-mt-24
                                group-hover:bg-white/30 transition-colors"
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                    />
                    <div className="space-y-3 md:space-y-4 relative">
                      <h3 className="text-xl md:text-2xl font-medium text-[#003B7E] relative leading-tight tracking-tight">
                        {product.title.map((line, i) => (
                          <span key={i} className="block">
                            {line}
                          </span>
                        ))}
                      </h3>
                      <div className="h-1 w-12 md:w-16 bg-[#003B7E]/40 rounded-full" />
                      <p className="text-sm md:text-base text-[#003B7E]/80">
                        {product.description}
                      </p>
                    </div>
                    <div className="relative w-full mt-auto">
                      <Button 
                        text={product.buttonText}
                        variant="white"
                        className="w-full"
                      />
                    </div>
                  </motion.div>
                </Link>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
} 