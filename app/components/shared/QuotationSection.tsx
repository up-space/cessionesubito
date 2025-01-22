'use client'

import { motion } from 'framer-motion';
import Quotation from '../Quotation';

interface QuotationSectionProps {
  title?: string;
  subtitle?: string;
  className?: string;
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

export default function QuotationSection({ 
  title = "", 
  subtitle = "",
  className = ''
}: QuotationSectionProps) {
  return (
    <section className={`w-full ${className}`}>
      <motion.div 
        className="w-full max-w-[1920px] mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {(title || subtitle) && (
          <motion.div variants={itemVariants} className="text-center mb-12 px-4 md:px-6">
            {title && (
              <h2 className="text-3xl md:text-4xl font-medium text-[#003B7E] mb-4">
                {title}
              </h2>
            )}
            {subtitle && (
              <p className="text-lg text-gray-600">
                {subtitle}
              </p>
            )}
          </motion.div>
        )}

        <motion.div variants={itemVariants} className="w-full">
          <Quotation />
        </motion.div>
      </motion.div>
    </section>
  );
} 