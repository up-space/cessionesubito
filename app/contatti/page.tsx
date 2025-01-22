'use client'

import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ContactForm from '../components/contact/ContactForm';
import ContactInfo from '../components/contact/ContactInfo';
import MapSection from '../components/contact/MapSection';
import { containerVariants, itemVariants } from '../constants/animations';
import { contattiContent } from '../lib/content';
import { Content } from '../types/contact';

export default function Contatti() {
  const content = {
    hero: contattiContent.hero,
    form: contattiContent.form,
    contact: contattiContent.contact,
    map: contattiContent.map
  } as Content;

  return (
    <div className="relative min-h-screen">
      <Navbar />
      
      <main className="bg-gradient-to-b from-white to-gray-50/50">
        {/* Hero Section */}
        <section className="pt-32 pb-16 md:pt-40 md:pb-24">
          <motion.div 
            className="container mx-auto px-4 md:px-6"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <div className="max-w-7xl mx-auto">
              <motion.div variants={itemVariants} className="text-center mb-16">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium mb-6">
                  <span className="text-[#003B7E]">{content.hero.title.main}</span>
                  <br />
                  <span className="text-[#40BFEF]">{content.hero.title.highlight}</span>
                </h1>
                <p className="text-lg md:text-xl text-gray-600">
                  {content.hero.subtitle}
                </p>
              </motion.div>

              <div className="grid md:grid-cols-2 gap-8 md:gap-12">
                {/* Contact Form */}
                <ContactForm content={content.form} />

                {/* Contact Info and Map */}
                <motion.div variants={itemVariants} className="space-y-8">
                  <ContactInfo content={content.contact} />
                  <MapSection content={content.map} />
                </motion.div>
              </div>
            </div>
          </motion.div>
        </section>
      </main>

      <Footer />
    </div>
  );
} 