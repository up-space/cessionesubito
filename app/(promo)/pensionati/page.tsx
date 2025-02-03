'use client'
import { motion } from 'framer-motion';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { containerVariants, itemVariants } from '../../constants/animations';
import { Check, ArrowDown, Euro, Calendar, FileText, Percent, ArrowRight } from 'lucide-react';
import { OptimizedImage } from '../../components/ui/optimized-image';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from 'next/link';
import { Suspense } from 'react';

export default function PromoPage() {
  const features = [
    { text: 'Da 5.000 a 50.000 €', icon: Euro },
    { text: 'Fino a 88 anni', icon: Calendar },
    { text: 'ZERO Spese istruttorie', icon: FileText },
    { text: 'ZERO Commissioni', icon: Percent }
  ];

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-[#003B7E] via-[#002f66] to-[#002755] overflow-hidden selection:bg-white/30 selection:text-white">
      {/* Enhanced background pattern */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.03] bg-[size:60px_60px] mix-blend-overlay" />
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="absolute inset-0 bg-gradient-to-b from-white/10 via-transparent to-transparent backdrop-blur-[1px]" 
      />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.15)_0%,transparent_60%)] pointer-events-none" />
      
      <Navbar />

      <main className="relative">
        {/* Hero Section */}
        <Suspense fallback={<div>Loading...</div>}>
        <section className="pt-28 md:pt-40 pb-20 md:pb-28 px-4 sm:px-6 relative">
          <motion.div
            className="max-w-7xl mx-auto relative z-10"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
              {/* Text Content */}
              <div className="flex-1 space-y-6 text-center md:text-left">
                <motion.h1
                  variants={itemVariants}
                  className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight"
                >
                  <span className="block text-[#40BFEF] mb-3">Prestito riservato</span>
                  Pensionati INPS
                </motion.h1>

                <motion.p 
                  variants={itemVariants}
                  className="text-lg sm:text-xl text-white/90 max-w-2xl mx-auto md:mx-0 leading-relaxed"
                >
                  Soluzioni finanziarie su misura per pensionati INPS.
                  <br />
                  Condizioni vantaggiose e zero spese accessorie.
                </motion.p>

                <motion.div 
                  variants={itemVariants}
                  className="pt-4 flex flex-col sm:flex-row gap-4 justify-center md:justify-start
                            fixed md:static bottom-0 left-0 right-0 z-50 px-4 pb-6 sm:pb-8
                            bg-gradient-to-t from-white/20 backdrop-blur-[2px] md:bg-none"
                >
                  <Button
                    asChild
                    size="lg"
                    className="bg-[#40BFEF] hover:bg-[#35a5d3] text-white px-8 py-6 rounded-xl 
                              text-base sm:text-lg font-semibold shadow-lg hover:shadow-xl 
                              transition-all duration-300 transform hover:scale-105"
                  >
                    <Link href="/pensionati/preventivo">
                      Richiedi Preventivo Gratuito
                      <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-y-1 transition-transform duration-500" />
                    </Link>
                  </Button>
                </motion.div>
              </div>

              {/* Image Section */}
              <motion.div 
                variants={itemVariants}
                className="relative w-full md:w-1/2 max-w-[600px] aspect-[1.1] rounded-2xl overflow-hidden shadow-2xl border border-white/10"
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent z-10" />
                <OptimizedImage
                  src="/senior.jpg"
                  alt="Pensionato che usa un tablet"
                  fill
                  className="object-cover object-center"
                  priority
                  sizes="(max-width: 768px) 90vw, 50vw"
                />
              </motion.div>
            </div>

            {/* Features Grid */}
            <motion.div
              variants={containerVariants}
              className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16 sm:mt-20"
            >
              {features.map(({ text, icon: Icon }, index) => (
                <motion.div 
                  key={index}
                  variants={itemVariants}
                  whileHover={{ y: -5 }}
                  className="group"
                >
                  <Card className="h-full bg-white/5 backdrop-blur-sm border-white/10 p-6 hover:bg-white/10 transition-colors duration-300">
                    <div className="flex flex-col items-center text-center space-y-4">
                      <div className="p-3 bg-white/10 rounded-lg group-hover:bg-white/20 transition-colors duration-300">
                        <Icon className="w-8 h-8 text-[#40BFEF]" />
                      </div>
                      <h3 className="text-xl font-semibold text-white">{text}</h3>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </motion.div>

            {/* Disclaimer */}
            <motion.div
              variants={itemVariants}
              className="mt-8 text-center"
            >
              <p className="text-white/70 text-sm bg-white/5 backdrop-blur-sm inline-block px-6 py-3 rounded-xl">
                * La promozione zero spese e zero commissioni è applicabile ad operazioni con una durata minima di 84 mesi
              </p>
            </motion.div>
          </motion.div>
        </section>
        </Suspense>
      </main>

      <Footer />
    </div>
  );
}