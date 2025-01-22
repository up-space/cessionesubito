'use client'

import { motion } from 'framer-motion';
import Image from 'next/image';
import Button from '../components/Button';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import QuotationSection from '../components/shared/QuotationSection';
import NotFoundSection from '../components/shared/NotFoundSection';
import Link from 'next/link';
import { chiSiamoContent } from '../lib/content';

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

export default function ChiSiamo() {
  const { hero, mission, fidiline, quotation } = chiSiamoContent;

  return (
    <div className="relative min-h-screen">
      <Navbar />
      
      <main className="bg-gradient-to-b from-gray-50 to-white">
        {/* Hero Section */}
        <section className="pt-32 pb-16 md:pt-40 md:pb-24">
          <motion.div 
            className="container mx-auto px-4 md:px-6"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <div className="max-w-7xl mx-auto">
              <motion.div variants={itemVariants} className="text-center mb-12">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium mb-6">
                  <span className="text-[#003B7E]">{hero.title.main} </span>
                  <span className="text-[#40BFEF]">{hero.title.highlight}</span>
                </h1>
                <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto">
                  {hero.subtitle}
                </p>
              </motion.div>

              <motion.div variants={itemVariants} className="relative w-full aspect-[21/9] mb-16">
                <Image
                  src={hero.imageSrc}
                  alt={hero.imageAlt}
                  fill
                  className="object-cover rounded-[32px] shadow-lg"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-[32px]" />
              </motion.div>
            </div>
          </motion.div>
        </section>

        {/* Mission Section */}
        <section className="py-16 md:py-24 relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-[#40BFEF]/[0.03] rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-1/4 -translate-x-1/2 w-[600px] h-[600px] bg-[#003B7E]/[0.03] rounded-full blur-3xl" />
          </div>
          
          <motion.div 
            className="container mx-auto px-4 md:px-6 relative"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="max-w-4xl mx-auto">
              <motion.div 
                variants={itemVariants}
                className="bg-white/60 backdrop-blur-sm rounded-[32px] p-8 md:p-12 shadow-sm border border-white/40 relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-96 h-96 bg-[#40BFEF]/[0.02] rounded-full blur-3xl -mr-48 -mt-48" />
                
                <h2 className="text-3xl md:text-4xl font-medium text-[#003B7E] mb-8 text-center">
                  {mission.title}
                </h2>
                <p className="text-lg md:text-xl text-gray-600 mb-12 text-center leading-relaxed">
                  {mission.description}
                </p>
                <div className="flex justify-center">
                  <Link href="/contatti">
                    <Button text={mission.ctaText} />
                  </Link>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </section>

        {/* Fidiline Section */}
        <section className="py-16 md:py-24 relative overflow-hidden">
          <motion.div 
            className="container mx-auto px-4 md:px-6 relative z-10"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="max-w-4xl mx-auto">
              <motion.div 
                variants={itemVariants}
                className="bg-white/60 backdrop-blur-sm rounded-[32px] p-8 md:p-12 shadow-sm border border-white/40 relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-96 h-96 bg-[#40BFEF]/[0.02] rounded-full blur-3xl -mr-48 -mt-48" />
                
                <div className="relative">
                  <h2 className="text-3xl md:text-4xl font-medium text-[#003B7E] mb-8 text-center">
                    {fidiline.title}
                  </h2>
                  
                  <div className="space-y-8">
                    <p className="text-lg text-gray-600 leading-relaxed">
                      {fidiline.description}
                    </p>
                    <div className="p-6 bg-white/40 rounded-[24px] border border-white/60">
                      <p className="text-[#003B7E] font-medium text-center">
                        {fidiline.agentInfo}
                      </p>
                    </div>
                  </div>

                  <div className="mt-12 flex justify-center">
                    <a 
                      href={fidiline.logoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block bg-white/80 rounded-[24px] p-6 shadow-sm hover:shadow-md transition-all hover:scale-105 border border-white/60"
                    >
                      <Image
                        src={fidiline.logoSrc}
                        alt={fidiline.logoAlt}
                        width={180}
                        height={72}
                        className="h-16 w-auto"
                      />
                    </a>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </section>

        {/* Quotation Section */}
        <QuotationSection
          title={quotation.title}
          subtitle={quotation.subtitle}
        />
      </main>

      <NotFoundSection />
      <Footer />
    </div>
  );
} 