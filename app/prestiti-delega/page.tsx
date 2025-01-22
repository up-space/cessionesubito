'use client'

import { motion } from 'framer-motion';
import Image from 'next/image';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import QuotationSection from '../components/shared/QuotationSection';
import Accordion from '../components/shared/Accordion';
import { useState, ReactElement } from 'react';
import NotFoundSection from '../components/shared/NotFoundSection';
import { prestitiDelegaContent } from '../lib/content';
import { 
  HiOutlineDocumentText, 
  HiOutlineCheckCircle, 
  HiOutlineStar,
  HiOutlineClipboardList
} from 'react-icons/hi';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.1,
      ease: "easeOut"
    }
  }
};

// Map icons to accordion titles
const ICON_MAP: { [key: string]: ReactElement } = {
  'CARATTERISTICHE': <HiOutlineDocumentText className="w-8 h-8 text-[#003B7E]" />,
  'REQUISITI': <HiOutlineCheckCircle className="w-8 h-8 text-[#003B7E]" />,
  'VANTAGGI': <HiOutlineStar className="w-8 h-8 text-[#003B7E]" />,
  'COME RICHIEDERLO': <HiOutlineClipboardList className="w-8 h-8 text-[#003B7E]" />
};

export default function PrestitiDelega() {
  const { hero, accordionItems, quotation } = prestitiDelegaContent;

  const renderAccordionContent = (content: any) => {
    if (Array.isArray(content)) {
      return (
        <ul className="space-y-4">
          {content.map((text, i) => (
            <li key={i} className="flex items-start bg-gray-50/50 rounded-xl p-4 hover:bg-gray-50 transition-colors">
              <span className="mr-3 mt-1 text-[#40BFEF] flex-shrink-0">•</span>
              <span className="text-gray-700">{text}</span>
            </li>
          ))}
        </ul>
      );
    } else if (typeof content === 'object' && 'intro' in content) {
      return (
        <div className="space-y-6">
          <p className="text-gray-700 bg-gray-50/50 rounded-xl p-4">{content.intro}</p>
          <ul className="space-y-4">
            {content.items.map((text: string, i: number) => (
              <li key={i} className="flex items-start bg-gray-50/50 rounded-xl p-4 hover:bg-gray-50 transition-colors">
                <span className="mr-3 mt-1 text-[#40BFEF] flex-shrink-0">•</span>
                <span className="text-gray-700">{text}</span>
              </li>
            ))}
          </ul>
        </div>
      );
    } else if (typeof content === 'object' && 'steps' in content) {
      return (
        <div className="space-y-4">
          {content.steps.map((step: { title: string; description: string }, i: number) => (
            <div key={i} className="bg-gray-50/50 rounded-xl p-6 hover:bg-gray-50 transition-colors">
              <h4 className="text-lg font-medium text-[#003B7E] mb-2">{step.title}</h4>
              <p className="text-gray-700">{step.description}</p>
            </div>
          ))}
        </div>
      );
    }
    return (
      <div className="bg-gray-50/50 rounded-xl p-4">
        <p className="text-gray-700">{content}</p>
      </div>
    );
  };

  return (
    <div className="relative min-h-screen bg-[#f8fafc]">
      <Navbar />
      
      <main>
        {/* Hero Section */}
        <section className="relative h-[85vh] pt-20">
          {/* Background Image Container */}
          <motion.div 
            className="absolute inset-x-0 top-0 h-full"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <div className="relative h-full rounded-b-[3rem] overflow-hidden shadow-2xl">
              <Image
                src={hero.imageSrc}
                alt="Hero background"
                fill
                className="object-cover"
                priority
              />
              {/* Enhanced gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/10 to-black/40" />
              
              {/* Decorative elements */}
              <motion.div 
                className="absolute inset-0 bg-[#003B7E]/20"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#003B7E]/20 to-transparent" />
            </div>
          </motion.div>

          {/* Content */}
          <div className="relative h-full flex flex-col">
            {/* Centered Title */}
            <motion.div 
              className="flex-1 flex flex-col items-center justify-center container mx-auto px-4 md:px-6"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              <motion.h1 
                variants={itemVariants}
                className="text-4xl md:text-5xl lg:text-6xl font-medium mb-6 text-white drop-shadow-lg text-center"
              >
                Scegli la soluzione più adatta alle tue esigenze
              </motion.h1>
              <motion.h2
                variants={itemVariants}
                className="text-2xl md:text-3xl lg:text-4xl text-white/90 font-light drop-shadow text-center"
              >
                {hero.title}
              </motion.h2>
              <motion.p
                variants={itemVariants}
                className="mt-6 text-xl text-white/80 max-w-2xl text-center drop-shadow"
              >
                {hero.subtitle}
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* Menu Section */}
        <section className="py-24 bg-gradient-to-b from-[#f8fafc] to-white">
          <div className="container mx-auto px-4 md:px-6">
            <motion.div 
              className="max-w-4xl mx-auto space-y-12"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {accordionItems.map((item, index) => (
                <motion.div 
                  key={index}
                  variants={itemVariants}
                  className="bg-white/20 backdrop-blur-2xl rounded-[2.5rem] p-10 shadow-[0_8px_32px_0_rgba(31,38,135,0.1)]
                           border border-white/30 overflow-hidden relative group
                           hover:shadow-[0_8px_32px_0_rgba(31,38,135,0.2)] hover:bg-white/30 transition-all duration-500"
                >
                  {/* Decorative background effects */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent opacity-50" />
                  <div className="absolute inset-0 bg-gradient-to-tr from-[#40BFEF]/5 via-transparent to-transparent opacity-50" />
                  
                  {/* Content container */}
                  <div className="relative">
                    {/* Header */}
                    <div className="text-center mb-10">
                      <div className="inline-flex p-4 rounded-2xl bg-[#003B7E]/5 backdrop-blur-md border border-[#003B7E]/10
                                  group-hover:bg-[#003B7E]/10 transition-colors duration-500 mb-6">
                        {ICON_MAP[item.title]}
                      </div>
                      <h3 className="text-2xl md:text-3xl font-medium text-[#003B7E] tracking-tight">
                        {item.title}
                      </h3>
                    </div>

                    {/* Content */}
                    <div className="max-w-3xl mx-auto">
                      {Array.isArray(item.content) ? (
                        <div className="grid sm:grid-cols-2 gap-6">
                          {item.content.map((text, i) => (
                            <div 
                              key={i}
                              className="flex items-start gap-4 group/item"
                            >
                              <div className="p-1.5 rounded-full bg-[#40BFEF]/10 backdrop-blur-md flex-shrink-0 mt-1.5
                                            group-hover/item:bg-[#40BFEF]/20 transition-colors duration-300">
                                <div className="w-2 h-2 rounded-full bg-[#40BFEF]" />
                              </div>
                              <p className="text-gray-600 leading-relaxed group-hover/item:text-gray-800 transition-colors duration-300">
                                {text}
                              </p>
                            </div>
                          ))}
                        </div>
                      ) : typeof item.content === 'object' && 'steps' in item.content ? (
                        <div className="grid gap-6">
                          {(item.content as { steps: { title: string; description: string }[] }).steps.map((step, i) => (
                            <div 
                              key={i}
                              className="bg-white/30 backdrop-blur-md rounded-2xl p-8 border border-white/30
                                       hover:bg-white/40 transition-all duration-300 group/item"
                            >
                              <h4 className="text-xl font-medium text-[#003B7E] mb-4 group-hover/item:text-[#003B7E]/90 transition-colors duration-300">
                                {step.title}
                              </h4>
                              <p className="text-gray-600 leading-relaxed group-hover/item:text-gray-800 transition-colors duration-300">
                                {step.description}
                              </p>
                            </div>
                          ))}
                        </div>
                      ) : typeof item.content === 'object' && 'intro' in item.content ? (
                        <div className="space-y-8">
                          <div className="bg-white/30 backdrop-blur-md rounded-2xl p-8 border border-white/30
                                      hover:bg-white/40 transition-all duration-300">
                            <p className="text-gray-600 leading-relaxed">
                              {(item.content as { intro: string; items: string[] }).intro}
                            </p>
                          </div>
                          <div className="grid sm:grid-cols-2 gap-6">
                            {(item.content as { intro: string; items: string[] }).items.map((text, i) => (
                              <div 
                                key={i}
                                className="flex items-start gap-4 group/item"
                              >
                                <div className="p-1.5 rounded-full bg-[#40BFEF]/10 backdrop-blur-md flex-shrink-0 mt-1.5
                                              group-hover/item:bg-[#40BFEF]/20 transition-colors duration-300">
                                  <div className="w-2 h-2 rounded-full bg-[#40BFEF]" />
                                </div>
                                <p className="text-gray-600 leading-relaxed group-hover/item:text-gray-800 transition-colors duration-300">
                                  {text}
                                </p>
                              </div>
                            ))}
                          </div>
                        </div>
                      ) : (
                        <div className="bg-white/30 backdrop-blur-md rounded-2xl p-8 border border-white/30
                                    hover:bg-white/40 transition-all duration-300">
                          <p className="text-gray-600 leading-relaxed">
                            {String(item.content)}
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Quotation Section */}
        <QuotationSection

        />

        {/* NotFound Section */}
        <section className="bg-gradient-to-b from-white to-gray-50">
          <NotFoundSection />
        </section>
      </main>

      <Footer />
    </div>
  );
} 