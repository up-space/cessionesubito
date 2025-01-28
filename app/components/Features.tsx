'use client';

import Button from './Button';
import { motion, useInView } from 'framer-motion';
import Link from 'next/link';
import ImageGrid from './ImageGrid';
import SectionWrapper from './SectionWrapper';
import React from 'react';
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
                staggerChildren: 0.2,
                delayChildren: 0.1
            }
        }
    }
};

export default function Features() {
    const ref = React.useRef(null);
    const inView = useInView(ref, {
        once: true, // Changed from triggerOnce to once
        amount: 0.1, // Changed from threshold to amount
        margin: '-100px' // Changed from rootMargin to margin
    });

    return (
        <SectionWrapper
            className="flex items-center pt-16 sm:pt-20 pb-12 sm:pb-16 md:pb-20 relative overflow-hidden"
            aria-label="Features Section"
        >
            {/* Rest of the component remains the same */}
            <div className="container mx-auto px-4 sm:px-6 md:px-12 max-w-7xl relative z-10">
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent opacity-50" />
                <div className="absolute inset-0 bg-gradient-to-tr from-[#40BFEF]/5 via-transparent to-transparent opacity-50" />
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-12 lg:gap-16 w-full items-start">
                    <motion.div
                        ref={ref}
                        initial="hidden"
                        animate={inView ? "visible" : "hidden"}
                        variants={animations.stagger}
                        className="flex flex-col justify-center gap-6 md:gap-8 md:sticky md:top-24 text-center md:text-left"
                    >
                        <motion.div
                            variants={animations.text}
                            className="space-y-4 sm:space-y-6 md:mb-8"
                        >
                            <h2
                                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium leading-tight text-[#003B7E]"
                                id="features-heading"
                            >
                                <span className="block mb-1 sm:mb-2 text-[#003B7E]">
                                    Prestito veloce
                                </span>
                                <span className="block text-[#40BFEF]">
                                    e un tasso conveniente?
                                </span>
                            </h2>
                            <motion.p
                                variants={animations.text}
                                className="text-gray-700 text-sm sm:text-base md:text-lg max-w-2xl mx-auto md:mx-0 leading-relaxed"
                            >
                                Cessionesubito.it nasce con l'idea di avvicinarsi quanto più possibile
                                a quell'obiettivo. Lavoriamo da anni nel settore dei finanziamenti,
                                e abbiamo creato un pacchetto di prodotti finanziari che uniscano
                                convenienza e trasparenza.
                            </motion.p>
                        </motion.div>
                        <motion.div
                            variants={animations.text}
                            className="flex justify-center md:justify-start mt-2 md:mt-4"
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
                    <div className="relative w-full h-full">
                        <ImageGrid />
                    </div>
                </div>
            </div>
        </SectionWrapper>
    );
}