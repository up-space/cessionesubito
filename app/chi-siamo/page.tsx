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
      delayChildren: 0.2,
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: [0.25, 0.1, 0.25, 1]
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
        <section className="relative h-[70vh] min-h-[560px] flex items-end pb-16 rounded-b-3xl overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src={hero.imageSrc}
              alt={hero.imageAlt}
              fill
              className="object-cover"
              priority
              sizes="100vw"
              style={{ filter: 'brightness(0.5)' }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 via-transparent to-transparent" />
          </div>
          
          <motion.div 
            className="container mx-auto px-4 md:px-6 relative z-10"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={itemVariants} className="max-w-4xl">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium text-white mb-4">
                <span className="text-white">{hero.title.main}</span>{' '}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#f0f3f4] to-[#72aaea] text-shadow-lg">{hero.title.highlight}</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-200 max-w-2xl">
                {hero.subtitle}
              </p>
            </motion.div>
          </motion.div>
        </section>

        {/* Content Grid */}
        <section className="container mx-auto px-4 md:px-6 py-16 md:py-24">
          <motion.div 
            className="grid grid-cols-1 lg:grid-cols-2 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {/* Mission Card */}
            <motion.div 
              variants={itemVariants}
              className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100 "
            >
              <h2 className="text-3xl md:text-4xl font-medium text-[#003B7E] mb-6">
                {mission.title}
              </h2>
              <div className="space-y-6">
                <p className="text-lg text-gray-600 leading-relaxed">
                  {mission.description}
                </p>
                <div className="pt-6 border-t border-gray-100">
                  <Link href="/contatti">
                    <Button text={mission.ctaText} />
                  </Link>
                </div>
              </div>
            </motion.div>

            {/* Fidiline Card */}
            <motion.div 
              variants={itemVariants}
              className="bg-[#003B7E] rounded-3xl p-8 md:p-12 text-white overflow-hidden"
            >
              <div className="relative z-10">
                <h2 className="text-3xl md:text-4xl font-medium mb-6">
                  {fidiline.title}
                </h2>
                <div className="space-y-6">
                  <p className="text-gray-200 leading-relaxed">
                    {fidiline.description}
                  </p>
                  <div className="p-6 bg-white/10 rounded-xl backdrop-blur-sm">
                    <p className="text-center font-medium">
                      {fidiline.agentInfo}
                    </p>
                  </div>
                  <div className="flex justify-center mt-8 h-48">
  <a 
    href={fidiline.logoLink}
    target="_blank"
    rel="noopener noreferrer"
    className="relative w-full  h-full block hover:scale-[1.02] transition-transform duration-300 bg-white rounded-3xl overflow-hidden"
  >
    <Image
      src={fidiline.logoSrc}
      alt={fidiline.logoAlt}
      fill
      className="object-contain"
      sizes="(max-width: 768px) 50vw, 320px"
    />
  </a>
</div>
</div>
              </div>
              <div className="absolute inset-0 bg-noise opacity-10" />
            </motion.div>
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