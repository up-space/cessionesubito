'use client'

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface ContentSectionProps {
  children: ReactNode;
  className?: string;
  bgColor?: string;
}

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

export default function ContentSection({ children, className = '', bgColor = 'bg-white' }: ContentSectionProps) {
  return (
    <section className={`py-16 md:py-24 ${bgColor} ${className}`}>
      <motion.div 
        className="container mx-auto px-4 md:px-6"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="max-w-4xl mx-auto">
          {children}
        </div>
      </motion.div>
    </section>
  );
} 