'use client'

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const sections = [
  { name: 'Hero', color: '#003B7E' },
  { name: 'Quotation', color: '#40BFEF' },
  { name: 'Products', color: '#40BFEF' },
  { name: 'Features', color: '#40BFEF' },
  { name: 'Contact', color: '#003B7E' },
  { name: 'Footer', color: '#003B7E' },
];

export default function PageIndicator() {
  const [activeSection, setActiveSection] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const currentSection = Math.floor(scrollPosition / windowHeight);
      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed right-4 md:right-8 top-1/2 -translate-y-1/2 z-50 hidden md:flex flex-col gap-3">
      {sections.map((section, index) => (
        <motion.div
          key={section.name}
          initial={{ opacity: 0, x: 20 }}
          animate={{ 
            opacity: 1, 
            x: 0,
            scale: activeSection === index ? 1.2 : 1
          }}
          transition={{ 
            duration: 0.3,
            delay: index * 0.1
          }}
          className="relative group"
        >
          <div
            className={`w-3 h-3 rounded-full cursor-pointer transition-all duration-300
                      ${activeSection === index 
                        ? 'bg-current shadow-lg' 
                        : 'bg-current/30 hover:bg-current/50'}`}
            style={{ color: section.color }}
            onClick={() => {
              window.scrollTo({
                top: index * window.innerHeight,
                behavior: 'smooth'
              });
            }}
          />
          <div className="absolute right-full top-1/2 -translate-y-1/2 mr-2 px-2 py-1
                        bg-white/80 backdrop-blur-sm rounded-md opacity-0 -translate-x-2
                        group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
            <span className="text-xs font-medium whitespace-nowrap" style={{ color: section.color }}>
              {section.name}
            </span>
          </div>
        </motion.div>
      ))}
    </div>
  );
} 