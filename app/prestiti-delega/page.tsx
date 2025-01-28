'use client'

import { motion } from 'framer-motion';
import Image from 'next/image';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import QuotationSection from '../components/shared/QuotationSection';
import { useState, ReactElement } from 'react';
import NotFoundSection from '../components/shared/NotFoundSection';
import { prestitiDelegaContent } from '../lib/content';
import {
    FileText,
    CheckCircle,
    Star,
    ClipboardList,
    ChevronDown,
    ChevronUp
} from 'lucide-react';


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
    'CARATTERISTICHE': <FileText className="w-6 h-6 md:w-8 md:h-8 text-[#003B7E]" />,
    'REQUISITI': <CheckCircle className="w-6 h-6 md:w-8 md:h-8 text-[#003B7E]" />,
    'VANTAGGI': <Star className="w-6 h-6 md:w-8 md:h-8 text-[#003B7E]" />,
    'COME RICHIEDERLO': <ClipboardList className="w-6 h-6 md:w-8 md:h-8 text-[#003B7E]" />
};

export default function PrestitiDelega() {
    const { hero, accordionItems, quotation } = prestitiDelegaContent;
    const [openPanel, setOpenPanel] = useState<number | null>(null);

     const togglePanel = (index: number) => {
        setOpenPanel(openPanel === index ? null : index);
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
                        {/* Centered Title */}
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
                                Scegli la soluzione più adatta alle tue esigenze
                            </motion.h1>
                            <motion.h2
                                variants={itemVariants}
                                className="text-xl md:text-2xl lg:text-3xl text-white/90 font-light drop-shadow text-center"
                            >
                                {hero.title}
                            </motion.h2>
                            <motion.p
                                variants={itemVariants}
                                className="mt-6 text-lg md:text-xl text-white/80 max-w-2xl text-center drop-shadow"
                            >
                                {hero.subtitle}
                            </motion.p>
                        </motion.div>
                    </div>
                </section>

                {/* Menu Section */}
               <section className="py-16 md:py-24 bg-gradient-to-b from-[#f8fafc] to-white">
                    <div className="container mx-auto px-4 md:px-6">
                        <motion.div
                            className="max-w-5xl mx-auto space-y-6 md:space-y-8" // Reduced spacing here
                            variants={containerVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                        >
                             {accordionItems.map((item, index) => (
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
                                            <ChevronUp className="w-6 h-6 text-gray-600 group-hover:text-gray-800"/> :
                                            <ChevronDown className="w-6 h-6 text-gray-600 group-hover:text-gray-800" />}
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
                                            ) : typeof item.content === 'object' && 'steps' in item.content ? (
                                                <div className="grid gap-6">
                                                    {(item.content as { steps: { title: string; description: string }[] }).steps.map((step, i) => (
                                                    <div 
                                                        key={i}
                                                        className="bg-white/20 backdrop-blur-md rounded-xl p-4 md:p-6 border border-white/30
                                                                    hover:bg-white/30 transition-all duration-300 group/item"
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
                                                <div className="space-y-6">
                                                    <div className="bg-white/20 backdrop-blur-md rounded-xl p-4 md:p-6 border border-white/30
                                                                    hover:bg-white/30 transition-all duration-300">
                                                        <p className="text-gray-600 leading-relaxed">
                                                        {(item.content as { intro: string; items: string[] }).intro}
                                                        </p>
                                                    </div>
                                                    <ul className="grid sm:grid-cols-2 gap-4 md:gap-6">
                                                    {(item.content as { intro: string; items: string[] }).items.map((text, i) => (
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
                                                    {String(item.content)}
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