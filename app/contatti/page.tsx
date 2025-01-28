'use client'

import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ContactForm from '../components/contact/ContactForm';
import { containerVariants, itemVariants } from '../constants/animations';
import { contattiContent } from '../lib/content';
import { Content } from '../types/contact';
import { COMPANY_INFO } from '../lib/constants';
import { 
    Mail, 
    Phone, 
    MapPin,
    Building2 
} from 'lucide-react';

export default function Contatti() {
  const content = {
    hero: contattiContent.hero,
    form: contattiContent.form,
    contact: contattiContent.contact,
    map: contattiContent.map
  } as Content;

  return (
    <div className="relative min-h-screen bg-[#f8fafc] overflow-hidden">
        <Navbar />

        <main className="bg-gradient-to-b from-white to-gray-50/50">
            {/* Hero Section */}
            <section className="pt-60 md:pt-50 pb-16 md:pb-24 relative">
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent opacity-50" />
                <div className="absolute inset-0 bg-gradient-to-tr from-[#40BFEF]/5 via-transparent to-transparent opacity-50" />
                <motion.div
                    className="container mx-auto px-4 md:px-6 relative z-10" // Added z-10 for content stacking
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    <div className="max-w-5xl mx-auto">
                        <motion.div variants={itemVariants} className="text-center mb-12 md:mb-16">
                            <h1 className="text-3xl md:text-4xl lg:text-5xl font-medium mb-4 md:mb-6">
                                <span className="text-[#003B7E]">{content.hero.title.main}</span>
                                <br />
                                <span className="text-[#40BFEF]">{content.hero.title.highlight}</span>
                            </h1>
                            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
                                {content.hero.subtitle}
                            </p>
                        </motion.div>

                        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
                            {/* Contact Form */}
                            <motion.div 
                                variants={itemVariants}
                                className="bg-white/10 backdrop-blur-md rounded-[2rem] p-6 md:p-8 border border-white/20
                                           shadow-[0_8px_32px_0_rgba(31,38,135,0.08)]
                                           hover:shadow-[0_8px_32px_0_rgba(31,38,135,0.15)] hover:bg-white/15 transition-all duration-500 relative overflow-hidden"
                            >
                                <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent opacity-50" />
                                <div className="absolute inset-0 bg-gradient-to-tr from-[#40BFEF]/5 via-transparent to-transparent opacity-50" />
                                <div className="relative z-10">
                                  <ContactForm content={content.form} />
                                </div>

                            </motion.div>


                            {/* Contact Info  */}
                            <motion.div variants={itemVariants} className="space-y-6">
                                <div
                                    className="bg-white/10 backdrop-blur-md rounded-[2rem] p-6 md:p-8 border border-white/20
                                             shadow-[0_8px_32px_0_rgba(31,38,135,0.08)]
                                             hover:shadow-[0_8px_32px_0_rgba(31,38,135,0.15)] hover:bg-white/15 transition-all duration-500 relative overflow-hidden"
                                >
                                    <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent opacity-50" />
                                    <div className="absolute inset-0 bg-gradient-to-tr from-[#40BFEF]/5 via-transparent to-transparent opacity-50" />
                                  <div className="relative z-10 space-y-6">
                                     <h3 className="text-xl md:text-2xl font-medium text-[#003B7E] mb-4">
                                         Informazioni di contatto
                                     </h3>
                                     <ul className="space-y-4">
                                        <li className="flex items-center gap-4">
                                         <div className="p-2 rounded-xl bg-[#003B7E]/5 backdrop-blur-md border border-[#003B7E]/10">
                                            <Mail className="w-5 h-5 md:w-6 md:h-6 text-[#003B7E]" />
                                          </div>
                                          <a href={`mailto:${COMPANY_INFO.email}`} className="text-gray-700 hover:text-gray-900 transition-colors duration-300">
                                                {COMPANY_INFO.email}
                                          </a>
                                        </li>
                                       <li className="flex items-center gap-4">
                                          <div className="p-2 rounded-xl bg-[#003B7E]/5 backdrop-blur-md border border-[#003B7E]/10">
                                              <Phone className="w-5 h-5 md:w-6 md:h-6 text-[#003B7E]" />
                                          </div>
                                          <a href={`tel:${COMPANY_INFO.phone}`} className="text-gray-700 hover:text-gray-900 transition-colors duration-300">
                                                {COMPANY_INFO.phone}
                                          </a>
                                        </li>
                                          <li className="flex items-center gap-4">
                                            <div className="p-2 rounded-xl bg-[#003B7E]/5 backdrop-blur-md border border-[#003B7E]/10">
                                              <MapPin  className="w-5 h-5 md:w-6 md:h-6 text-[#003B7E]"/>
                                          </div>
                                            <p className="text-gray-700">
                                              {COMPANY_INFO.address}
                                           </p>
                                         </li>
                                           <li className="flex items-center gap-4">
                                             <div className="p-2 rounded-xl bg-[#003B7E]/5 backdrop-blur-md border border-[#003B7E]/10">
                                                <Building2 className="w-5 h-5 md:w-6 md:h-6 text-[#003B7E]"/>
                                              </div>
                                             <p className="text-gray-700">
                                                 {COMPANY_INFO.name}
                                             </p>
                                           </li>
                                     </ul>
                                  </div>
                                </div>

                            </motion.div>
                        </div>
                     <motion.div variants={itemVariants} className="mt-12 text-gray-500 text-sm md:text-base">
                       <p className="mb-4 text-center">
                           {COMPANY_INFO.legalInfo}
                       </p>
                        <ul className="space-y-2 text-center">
                           <li>{COMPANY_INFO.vat}</li>
                            <li>{COMPANY_INFO.company}</li>
                           <li>{COMPANY_INFO.oamNumber}</li>
                           <li>{COMPANY_INFO.bank}</li>
                           </ul>
                       </motion.div>
                    </div>
                </motion.div>
            </section>
        </main>

        <Footer />
    </div>
  );
}