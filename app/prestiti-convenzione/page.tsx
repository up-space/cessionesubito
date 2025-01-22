'use client'

import { motion } from 'framer-motion';
import Image from 'next/image';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import QuotationSection from '../components/shared/QuotationSection';
import Accordion from '../components/shared/Accordion';
import { useState, ReactElement } from 'react';
import NotFoundSection from '../components/shared/NotFoundSection';
import { prestitiConvenzioneContent } from '../lib/content';
import Tabs from '../components/shared/Tabs';
import { 
  HiOutlineDocumentText, 
  HiOutlineCheckCircle, 
  HiOutlineStar,
  HiOutlineClipboardList,
  HiOutlineShieldCheck,
  HiOutlineLightBulb
} from 'react-icons/hi';

type TabId = 'inps' | 'inpdap' | 'noipa' | 'miur';

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

// Map icons to accordion titles with more specific icons
const ICON_MAP: { [key: string]: ReactElement } = {
  'Di cosa si tratta?': <HiOutlineDocumentText className="w-8 h-8 text-[#003B7E]" />,
  'Come funziona?': <HiOutlineClipboardList className="w-8 h-8 text-[#003B7E]" />,
  'Quali sono i vantaggi?': <HiOutlineStar className="w-8 h-8 text-[#003B7E]" />,
  'Come richiederlo?': <HiOutlineCheckCircle className="w-8 h-8 text-[#003B7E]" />,
  'Ho bisogno di un garante?': <HiOutlineShieldCheck className="w-8 h-8 text-[#003B7E]" />,
  'Perchè conviene?': <HiOutlineLightBulb className="w-8 h-8 text-[#003B7E]" />
};

export default function PrestitiConvenzione() {
  const [activeTab, setActiveTab] = useState<TabId>('inps');
  const { hero, loanTypes } = prestitiConvenzioneContent;

  const handleTabChange = (id: string) => {
    setActiveTab(id as TabId);
  };

  const formattedTabs = loanTypes.map(loan => ({
    id: loan.id,
    title: loan.title,
    content: undefined
  }));

  const currentAccordionItems = loanTypes.find(loan => loan.id === activeTab)?.accordionItems || [];

  const renderAccordionContent = (content: any) => {
    if (Array.isArray(content)) {
      return (
        <ul className="space-y-3">
          {content.map((text, i) => (
            <li key={i} className="flex items-start">
              <div className="bg-white/50 backdrop-blur-sm w-full p-5 rounded-2xl border border-gray-100
                            hover:bg-white hover:shadow-md transition-all duration-300
                            flex items-start gap-3">
                <span className="text-[#40BFEF] text-2xl leading-none mt-1">•</span>
                <span className="text-gray-700 leading-relaxed">{text}</span>
              </div>
            </li>
          ))}
        </ul>
      );
    }
    return (
      <div className="bg-white/50 backdrop-blur-sm p-5 rounded-2xl border border-gray-100
                    hover:bg-white hover:shadow-md transition-all duration-300">
        <p className="text-gray-700 leading-relaxed">{content}</p>
      </div>
    );
  };

  const getLoanDescription = () => {
    switch(activeTab) {
      case 'inps':
        return "I pensionati possono chiedere prestiti a banche ed enti accreditati utilizzando fino a un quinto dell'importo mensile della pensione per rimborsarlo a rate.";
      case 'inpdap':
        return "Il prestito INPDAP è un vecchio modo di definire gli attuali prestiti in convenzione INPS, un tipo di finanziamento accessibile ai pensionati pubblici e statali iscritti alla gestione ex INPDAP.";
      case 'noipa':
        return "Con Cessionesubito.it puoi richiedere un prestito in convenzione con il sistema NoiPa in breve tempo e a tasso agevolato.";
      case 'miur':
        return "Se sei un dipendente MIUR con Cessionesubito.it puoi richiedere un prestito a tasso agevolato grazie alla convenzione già attiva con il ministero.";
      default:
        return "";
    }
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
                src={loanTypes.find(loan => loan.id === activeTab)?.image || '/inps.jpg'}
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
                Sei un dipendente MIUR, un dipendente NOIPA o un pensionato INPS?
              </motion.h1>
              <motion.p
                variants={itemVariants}
                className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto text-center drop-shadow mb-8"
              >
                Cessionesubito.it ha il prestito giusto per te. Lavoriamo da anni con i prestiti in convenzione con enti pubblici, enti ministeriali, ed enti pensionistici.
              </motion.p>
              <motion.div
                variants={itemVariants}
                className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto text-center drop-shadow"
              >
                {getLoanDescription()}
              </motion.div>
            </motion.div>

            {/* Tabs at bottom */}
            <div className="container mx-auto px-4 md:px-6 pb-12">
              <motion.div 
                className="max-w-2xl mx-auto"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
              >
                <Tabs
                  tabs={formattedTabs}
                  activeTab={activeTab}
                  onChange={handleTabChange}
                  className="bg-white/10 backdrop-blur-md p-2 rounded-[2rem] shadow-xl border border-white/20
                           hover:shadow-2xl transition-shadow duration-500
                           [&_button]:shadow-lg [&_button]:border [&_button]:border-white/20"
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Info Section */}
        <section className="py-24 bg-gradient-to-b from-[#f8fafc] to-white">
          <div className="container mx-auto px-4 md:px-6">
            <motion.div 
              className="max-w-4xl mx-auto space-y-12"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {currentAccordionItems.map((item, index) => (
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
                      ) : (
                        <div className="bg-white/30 backdrop-blur-md rounded-2xl p-8 border border-white/30
                                    hover:bg-white/40 transition-all duration-300">
                          <p className="text-gray-600 leading-relaxed">
                            {item.content}
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
        <QuotationSection />

        {/* NotFound Section */}
        <section className="bg-gradient-to-b from-white to-gray-50">
          <NotFoundSection />
        </section>
      </main>

      <Footer />
    </div>
  );
} 