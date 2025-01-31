// PrestitiConvenzione.tsx (with existing changes + check that Tabs component is properly implemented)

'use client'

import { motion } from 'framer-motion';
import { OptimizedImage } from '../components/ui/optimized-image';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import QuotationSection from '../components/shared/QuotationSection';
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
    HiOutlineLightBulb,
    HiChevronDown,
    HiChevronUp,
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
    'Di cosa si tratta?': <HiOutlineDocumentText className="w-6 h-6 md:w-8 md:h-8 text-[#003B7E]" />,
    'Come funziona?': <HiOutlineClipboardList className="w-6 h-6 md:w-8 md:h-8 text-[#003B7E]" />,
    'Quali sono i vantaggi?': <HiOutlineStar className="w-6 h-6 md:w-8 md:h-8 text-[#003B7E]" />,
    'Come richiederlo?': <HiOutlineCheckCircle className="w-6 h-6 md:w-8 md:h-8 text-[#003B7E]" />,
    'Ho bisogno di un garante?': <HiOutlineShieldCheck className="w-6 h-6 md:w-8 md:h-8 text-[#003B7E]" />,
    'Perchè conviene?': <HiOutlineLightBulb className="w-6 h-6 md:w-8 md:h-8 text-[#003B7E]" />
};

export default function PrestitiConvenzione() {
    const [activeTab, setActiveTab] = useState<TabId>('inps');
    const { hero, loanTypes } = prestitiConvenzioneContent;
    const [openPanel, setOpenPanel] = useState<number | null>(null);

    const handleTabChange = (id: string) => {
        setActiveTab(id as TabId);
    };

    const formattedTabs = loanTypes.map(loan => ({
        id: loan.id,
        title: loan.title,
        content: undefined
    }));

    const currentAccordionItems = loanTypes.find(loan => loan.id === activeTab)?.accordionItems || [];

    const togglePanel = (index: number) => {
      setOpenPanel(openPanel === index ? null : index);
    };

    const getLoanDescription = () => {
        switch (activeTab) {
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
        <div className="relative min-h-screen bg-[#f8fafc] overflow-hidden">
            <Navbar />

            <main>
                 {/* Hero Section */}
                 <section className="relative h-[90vh] md:h-[100vh] pt-20">
                    {/* Background Image Container */}
                    <motion.div
                        className="absolute inset-x-0 top-0 h-full"
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        <div className="relative h-full rounded-b-[3rem] overflow-hidden shadow-2xl">
                            <OptimizedImage
                                src={loanTypes.find(loan => loan.id === activeTab)?.image || '/inps.jpg'}
                                alt="Hero background"
                                fill
                                className="object-cover"
                                priority
                                sizes="100vw"
                            />
                            <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/40 to-black/40" />
                            <motion.div
                                className="absolute inset-0 bg-[#003B7E]/60"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 1 }}
                            />
                            <div className="absolute inset-0 bg-gradient-to-r from-[#003B7E]/20 to-transparent" />
                        </div>
                    </motion.div>

                    {/* Content */}
                    <div className="relative h-full flex flex-col">
                        <motion.div
                            className="flex-1 flex flex-col items-center justify-center container mx-auto px-4 md:px-6"
                            variants={containerVariants}
                            initial="hidden"
                            animate="visible"
                        >
                            <motion.h1
                                variants={itemVariants}
                                className="text-3xl md:text-4xl lg:text-5xl font-medium mb-4 text-white drop-shadow-lg text-center"
                            >
                                Sei un dipendente MIUR, un dipendente NOIPA o un pensionato INPS?
                            </motion.h1>
                            <motion.p
                                variants={itemVariants}
                                className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto text-center drop-shadow mb-8"
                            >
                                Cessionesubito.it ha il prestito giusto per te. Lavoriamo da anni con i prestiti in convenzione con enti pubblici, enti ministeriali, ed enti pensionistici.
                            </motion.p>
                            <motion.div
                                variants={itemVariants}
                                className="text-base md:text-lg text-white/80 max-w-2xl mx-auto text-center drop-shadow"
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
                                    [&_button]:shadow-lg [&_button]:border [&_button]:border-white/20
                                    [&_button]:text-sm md:[&_button]:text-base overflow-x-auto"  // Added overflow-x-auto to tabs
                                />
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* Info Section */}
                <section className="py-16 md:py-24 bg-gradient-to-b from-[#f8fafc] to-white">
                    <div className="container mx-auto px-4 md:px-6">
                        <motion.div
                            className="max-w-5xl mx-auto space-y-8 md:space-y-10"
                            variants={containerVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                        >
                             {currentAccordionItems.map((item, index) => (
                                <motion.div
                                    key={index}
                                    variants={itemVariants}
                                    className={`relative overflow-hidden rounded-[2rem]`}
                                >
                                   <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent opacity-50" />
                                   <div className="absolute inset-0 bg-gradient-to-tr from-[#40BFEF]/5 via-transparent to-transparent opacity-50" />
                                    <button
                                        onClick={() => togglePanel(index)}
                                        className="flex items-center justify-between w-full py-4 md:py-6 text-left focus:outline-none focus-visible:bg-gray-50/50  group transition-colors duration-300 bg-white/10 backdrop-blur-md border-b border-white/20  p-4 md:p-6"
                                    >
                                         <div className="flex items-center gap-4">
                                             <div className="inline-flex p-3 rounded-xl bg-[#003B7E]/5 backdrop-blur-md border border-[#003B7E]/10
                                            group-hover:bg-[#003B7E]/10 transition-colors duration-500">
                                                {ICON_MAP[item.title]}
                                            </div>
                                           <h3 className="text-xl md:text-2xl font-medium text-[#003B7E] tracking-tight group-hover:text-gray-800 transition-colors duration-300">
                                                {item.title}
                                            </h3>
                                        </div>

                                       <span className="transition-transform duration-300">
                                        {openPanel === index ?
                                            <HiChevronUp className="w-6 h-6 text-gray-600 group-hover:text-gray-800"/> :
                                            <HiChevronDown className="w-6 h-6 text-gray-600 group-hover:text-gray-800" />}
                                        </span>
                                    </button>


                                    <motion.div
                                        initial="hidden"
                                        animate={openPanel === index ? "visible" : "hidden"}
                                        variants={{
                                            visible: { opacity: 1, height: 'auto' },
                                            hidden: { opacity: 0, height: 0 }
                                        }}
                                        transition={{ duration: 0.3, ease: "easeOut" }}
                                        className={`overflow-hidden bg-white/5  backdrop-blur-md p-4 md:p-6`}
                                    >
                                         <div className="max-w-4xl mx-auto">
                                            {Array.isArray(item.content) ? (
                                                <ul className="grid sm:grid-cols-2 gap-4 md:gap-6">
                                                {item.content.map((text, i) => (
                                                    <li key={i} className="flex items-start gap-3 group/item">
                                                    <div className="p-1 rounded-full bg-[#40BFEF]/10 backdrop-blur-md flex-shrink-0 mt-1
                                                                group-hover/item:bg-[#40BFEF]/20 transition-colors duration-300">
                                                        <div className="w-2 h-2 rounded-full bg-[#40BFEF]" />
                                                    </div>
                                                    <p className="text-gray-600 leading-relaxed group-hover/item:text-gray-800 transition-colors duration-300">
                                                        {text}
                                                    </p>
                                                    </li>
                                                ))}
                                            </ul>
                                            ) : typeof item.content === 'object' && 'intro' in item.content ? (
                                                <div className="space-y-6">
                                                    <div className="bg-white/20 backdrop-blur-md rounded-xl p-4 md:p-6 border border-white/30
                                                                    hover:bg-white/30 transition-all duration-300">
                                                        <p className="text-gray-600 leading-relaxed">
                                                        {(item.content as { intro: string; items: string[] }).intro}
                                                        </p>
                                                    </div>
                                                    <ul className="grid sm:grid-cols-2 gap-4 md:gap-6">
                                                    {(item.content as { intro: string; items: string[] }).items.map((text: string, i: number) => (
                                                        <li
                                                        key={i}
                                                        className="flex items-start gap-3 group/item"
                                                        >
                                                        <div className="p-1 rounded-full bg-[#40BFEF]/10 backdrop-blur-md flex-shrink-0 mt-1
                                                                        group-hover/item:bg-[#40BFEF]/20 transition-colors duration-300">
                                                            <div className="w-2 h-2 rounded-full bg-[#40BFEF]" />
                                                        </div>
                                                        <p className="text-gray-600 leading-relaxed group-hover/item:text-gray-800 transition-colors duration-300">
                                                            {text}
                                                        </p>
                                                        </li>
                                                    ))}
                                                    </ul>
                                                </div>
                                            ) : (
                                                <div className="bg-white/20 backdrop-blur-md rounded-xl p-4 md:p-6 border border-white/30
                                                            hover:bg-white/30 transition-all duration-300">
                                                <p className="text-gray-600 leading-relaxed">
                                                    {item.content}
                                                </p>
                                                </div>
                                            )}
                                        </div>
                                    </motion.div>
                                </motion.div>
                            ))}

                        </motion.div>
                    </div>
                </section>


                <QuotationSection />

                <section className="bg-gradient-to-b from-white to-gray-50">
                    <NotFoundSection />
                </section>
            </main>

            <Footer />
        </div>
    );
}