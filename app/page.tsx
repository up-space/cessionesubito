'use client'

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Quotation from "./components/Quotation";
import Products from "./components/Products";
import Features from "./components/Features";
import NotFound from './components/NotFound';
import Footer from './components/Footer';
import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

const sectionVariants = {
  hidden: { opacity: 0, scale: 0.98 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: { duration: 0.5 }
  },
  exit: { 
    opacity: 0, 
    scale: 0.98,
    transition: { duration: 0.3 }
  }
};

export default function Home() {
  const [currentSection, setCurrentSection] = useState(0);

  useEffect(() => {
    // Track visit
    fetch('/api/track-visit', { method: 'POST' })
      .catch(error => console.error('Error tracking visit:', error));
  }, []); // Run once when component mounts

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const currentSection = Math.floor(scrollPosition / windowHeight);
      setCurrentSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <main className="relative h-screen overflow-y-auto snap-y snap-mandatory [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:none]">
      <div className="fixed top-0 left-0 right-0 z-50">
        <Navbar />
      </div>

      
      <AnimatePresence mode="wait">
        {/* Hero Section - First screen */}
        <motion.section 
          className="h-screen snap-start snap-always overflow-hidden"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          exit="exit"
          viewport={{ once: true }}
        >
          <Hero />
        </motion.section>

        {/* Quotation Section - Second screen */}
        <motion.section 
          className="h-screen snap-start snap-always overflow-hidden"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          exit="exit"
          viewport={{ once: true }}
        >
          <Quotation />
        </motion.section>

        {/* Products Section - Third screen */}
        <motion.section 
          className="h-screen snap-start snap-always overflow-hidden"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          exit="exit"
          viewport={{ once: true }}
        >
          <Products />
        </motion.section>

        {/* Features Section - Fourth screen */}
        <motion.section 
          className="h-screen snap-start snap-always overflow-hidden"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          exit="exit"
          viewport={{ once: true }}
        >
          <Features />
        </motion.section>

        {/* Not Found Section - Fifth screen */}
        <motion.section 
          className="h-screen snap-start snap-always overflow-hidden"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          exit="exit"
          viewport={{ once: true }}
        >
          <NotFound />
        </motion.section>

        {/* Footer Section - Sixth screen */}
        <motion.section 
          className="h-screen snap-start snap-always overflow-hidden"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          exit="exit"
          viewport={{ once: true }}
        >
          <Footer />
        </motion.section>
      </AnimatePresence>

      {/* Mobile Scroll Indicator - Only visible on small screens */}
      <motion.div 
        className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 md:hidden"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
      >
        <div className="bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg">
          <div className="flex items-center gap-2">
            <span className="text-xs font-medium text-[#003B7E]/80">Scorri verso il basso</span>
            <motion.svg 
              className="w-4 h-4 text-[#003B7E]/80"
              animate={{ y: [0, 4, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 5v14M19 12l-7 7-7-7"/>
            </motion.svg>
          </div>
        </div>
      </motion.div>
    </main>
  );
}
