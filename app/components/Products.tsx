'use client';

import Button from './Button';
import { motion, useScroll, useSpring } from 'framer-motion';
import Link from 'next/link';
import { useRef } from 'react';

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
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15
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
            duration: 0.4,
            ease: [0.16, 1, 0.3, 1]
        }
    }
};

export default function Products() {
    const scrollContainerRef = useRef<HTMLDivElement>(null);
    const { scrollXProgress } = useScroll({ container: scrollContainerRef });
    const smoothProgress = useSpring(scrollXProgress, { damping: 20, stiffness: 100 });

    return (
        <section className="w-full min-h-screen bg-gradient-to-b from-[#f8fafc] to-white py-20 px-4 sm:px-6 md:px-12 relative overflow-hidden">
             <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent opacity-50" />
             <div className="absolute inset-0 bg-gradient-to-tr from-[#40BFEF]/5 via-transparent to-transparent opacity-50" />

            <motion.div
                className="container mx-auto relative z-10"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={containerVariants}
            >
                <motion.h2
                    variants={itemVariants}
                    className="text-3xl sm:text-4xl md:text-5xl font-medium text-[#003B7E] text-center mb-12 md:mb-16"
                >
                    I nostri prodotti
                </motion.h2>

                <div className="relative">
                    <div
                        ref={scrollContainerRef}
                        className="flex md:grid md:grid-cols-3 gap-6 md:gap-8 overflow-x-auto md:overflow-x-visible pb-8 md:pb-0
                     snap-x snap-mandatory md:snap-none
                     [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
                    >
                        {products.map((product, index) => (
                            <Link
                                href={product.href}
                                key={index}
                                className="flex-none w-[85vw] sm:w-[70vw] md:w-auto snap-center group"
                            >
                                <motion.div
                                    variants={itemVariants}
                                    className="relative bg-white/10 backdrop-blur-md rounded-[2rem] overflow-hidden h-full min-h-[340px] transition-all duration-300
                                            border border-white/20
                                           shadow-[0_8px_32px_0_rgba(31,38,135,0.08)]
                                             hover:shadow-[0_8px_32px_0_rgba(31,38,135,0.15)] hover:bg-white/15"
                                >
                                    {/* Top Accent */}
                                     <div className="absolute top-0 left-0 right-0 h-[0.2rem] bg-gradient-to-r from-[#40BFEF] to-[#003B7E] transform origin-left transition-transform duration-300 group-hover:scale-x-100" />


                                    {/* Content Container */}
                                    <div className="relative h-full p-6 md:p-8 flex flex-col">
                                        {/* Title Section */}
                                        <div className="mb-4 md:mb-6">
                                            <div className="inline-block">
                                                <h3 className="text-xl md:text-2xl font-semibold text-[#003B7E] leading-tight relative">
                                                    {product.title.map((line, i) => (
                                                        <span key={i} className="block relative z-10">
                                                            {line}
                                                        </span>
                                                    ))}
                                                    <div className="absolute bottom-0 left-0 h-2 w-full bg-[#40BFEF]/10 -rotate-1 transform origin-bottom-left transition-all duration-300 group-hover:scale-x-110" />
                                                </h3>
                                            </div>
                                        </div>

                                        {/* Description */}
                                        <p className="text-[#003B7E]/70 text-base md:text-lg mb-6 md:mb-8 transition-colors duration-300 group-hover:text-[#003B7E]">
                                            {product.description}
                                        </p>

                                        {/* Button */}
                                        <div className="mt-auto relative">
                                           <div className="absolute inset-0 bg-gradient-to-r from-[#40BFEF] to-[#003B7E] opacity-0 rounded-full blur-xl transition-opacity duration-300 group-hover:opacity-20" />
                                              <Button
                                                text={product.buttonText}
                                                className="w-full bg-white hover:bg-[#40BFEF] text-[#003B7E] hover:text-white
                                                         border-2 border-[#40BFEF] hover:border-transparent
                                                         shadow-sm transition-all duration-300 relative z-10
                                                         group-hover:shadow-[0_8px_16px_-8px_rgba(64,191,239,0.5)]"
                                            />
                                        </div>
                                    </div>
                                </motion.div>
                            </Link>
                        ))}
                    </div>

                     {/* Mobile Scroll Indicator */}
                     <motion.div 
                        className="flex justify-center mt-4 md:hidden gap-2"
                        variants={itemVariants}
                    >
                      {[0, 1, 2].map((index) => (
                          <motion.div
                              key={index}
                                className="w-2 h-2 rounded-full"
                                style={{
                                    backgroundColor: smoothProgress.get() > index / 3 - 0.15 && 
                                                    smoothProgress.get() < (index + 1) / 3 - 0.15
                                    ? '#003B7E'
                                    : 'rgba(0,59,126,0.2)'
                                }}
                          />
                       ))}
                   </motion.div>
                </div>
            </motion.div>
        </section>
    );
}