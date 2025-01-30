'use client'

import { motion, useScroll, useTransform } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { containerVariants, itemVariants } from '../constants/animations';
import { Check, ArrowDown, Euro, Calendar, FileText, Percent } from 'lucide-react';
import Image from 'next/image';
import QuotationSection from '../components/shared/QuotationSection';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useRef } from 'react';

export default function PromoPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const features = [
    { text: 'Da 5.000 a 50.000 €', icon: Euro },
    { text: 'Fino a 88 anni', icon: Calendar },
    { text: 'ZERO Spese istruttorie', icon: FileText },
    { text: 'ZERO Commissioni', icon: Percent }
  ];

  return (
    <div ref={containerRef} className="relative min-h-screen bg-gradient-to-br overflow-hidden selection:bg-white/30 selection:text-white">
      {/* Background decorations */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5 bg-repeat mix-blend-overlay" />
      <motion.div 
        style={{ y, opacity }}
        className="absolute inset-0 bg-gradient-to-b from-white/10 via-transparent to-transparent backdrop-blur-[2px]" 
      />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1)_0%,transparent_100%)] pointer-events-none" />
      
      <Navbar />

      <main className="relative">
        {/* Hero Section */}
        <section className="pt-32 md:pt-48 pb-24 md:pb-32 relative from-[#40BFEF] via-[#35a5d3] to-[#40BFEF]/20">
          <div className="absolute inset-0 bg-gradient-to-b pointer-events-none" />
          <motion.div
            className="container mx-auto px-4 md:px-6 relative z-10"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <div className="max-w-6xl mx-auto">
              {/* Badge moved above title */}
              <motion.div 
                variants={itemVariants}
                className="flex justify-center mb-8 md:order-2 order-2"
              >
                <Badge 
                  variant="secondary" 
                  className="rounded-full px-6 py-3 text-base backdrop-blur-sm bg-white/20 border-white/30 hover:bg-white/30 transition-colors duration-500 shadow-lg"
                  aria-label="Offerta esclusiva per pensionati"
                >
                  <span className="text-white">
                    Offerta Esclusiva Pensionati
                  </span>
                </Badge>
              </motion.div>

              <motion.h1
                variants={itemVariants}
                className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-center relative"
              >
                <span className="block mb-4 text-white [text-shadow:0_4px_8px_rgba(0,0,0,0.15)] tracking-tight">
                  Prestito riservato
                </span>
                <span className="font-extrabold text-white [text-shadow:0_4px_8px_rgba(0,0,0,0.15)] tracking-tight relative">
                  <span className="absolute inset-0 " aria-hidden="true" />
                  Pensionati Inps
                </span>
              </motion.h1>

              {/* Mobile image placed after title */}
              <motion.div 
                variants={itemVariants}
                className="relative aspect-square rounded-full overflow-hidden w-3/4 max-w-[250px] mx-auto shadow-2xl shadow-black/20 border border-white/20 group bg-blue-900/20 md:hidden mb-8"
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent z-10" />
                <Image
                  src="/senior-tablet.jpg"
                  alt="Pensionato che usa un tablet"
                  fill
                  className="object-cover scale-[1.01]"
                  priority
                  sizes="(max-width: 768px) 80vw, 50vw"
                />
              </motion.div>

              <div className="grid md:grid-cols-2 gap-12 lg:gap-20 mt-12">
                {/* Desktop image remains in grid */}
                <motion.div 
                  variants={itemVariants}
                  className="hidden md:block relative aspect-square rounded-full overflow-hidden w-full max-w-md mx-auto shadow-2xl border border-white/20"
                >
                  <Image
                    src="/senior-tablet.jpg"
                    alt="Pensionato che usa un tablet"
                    fill
                    className="object-cover scale-[1.01]"
                    priority
                    sizes="(max-width: 768px) 80vw, 50vw"
                  />
                </motion.div>

                {/* Features list */}
                <motion.div
                  variants={itemVariants}
                  className="flex flex-col justify-center space-y-4"
                >
                  {features.map(({ text, icon: Icon }, index) => (
                    <Card 
                      key={index}
                      className="flex items-center rounded-full space-x-4 backdrop-blur-sm bg-white/10 border-white/20 p-4 hover:bg-white/20 transition-all duration-500 group hover:translate-x-1 shadow-lg"
                    >
                      <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center flex-shrink-0 group-hover:bg-white/30 transition-colors duration-500">
                        <Icon className="w-6 h-6 text-white rounded-full" />
                      </div>
                      <span className="font-medium text-xl md:text-2xl text-white tracking-tight [text-shadow:0_1px_2px_rgba(0,0,0,0.1)]">{text}</span>
                    </Card>
                  ))}
                </motion.div>
              </div>

              <motion.div 
                variants={itemVariants}
                className="mt-16 text-center"
              >
                <Button
                  onClick={() => document.getElementById('form')?.scrollIntoView({ behavior: 'smooth' })}
                  size="lg"
                  aria-label="Richiedi un preventivo gratuito"
                  className="px-8 py-7 text-lg bg-[#003B7E] hover:bg-[#003B7E]/90 text-white rounded-full shadow-xl shadow-[#003B7E]/20 hover:scale-105 transition-all duration-500 group relative overflow-hidden"
                >
                  <span className="relative z-10 flex items-center gap-2 [text-shadow:0_1px_2px_rgba(0,0,0,0.1)]">
                    Richiedi Preventivo Gratuito
                    <ArrowDown className="ml-2 h-5 w-5 group-hover:translate-y-1 transition-transform duration-500" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-[#003B7E] to-[#0056b8] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </section>

        {/* Quotation Section */}
        <section id="form" className="relative bg-gradient-to-b from-white to-blue-50">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(64,191,239,0.1)_0%,transparent_100%)]" />
          <div className="relative">
            <QuotationSection />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
} 