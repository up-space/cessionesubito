'use client'

import { motion } from 'framer-motion';
import { OptimizedImage } from '../ui/optimized-image';

interface ImageSectionProps {
  imageSrc: string;
  title?: string;
  subtitle?: string;
  className?: string;
  imageClassName?: string;
  overlayClassName?: string;
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

export default function ImageSection({ 
  imageSrc,
  title,
  subtitle,
  className = '',
  imageClassName = '',
  overlayClassName = ''
}: ImageSectionProps) {
  return (
    <section className={`relative w-full ${className}`}>
      <motion.div 
        className="relative w-full aspect-[16/9]"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <OptimizedImage
          src={imageSrc}
          alt={title || 'Section image'}
          fill
          className={`object-cover rounded-3xl ${imageClassName}`}
          priority
          sizes="(max-width: 768px) 100vw, 90vw"
        />
        
        {(title || subtitle) && (
          <div className={`absolute inset-0 flex flex-col items-center justify-center 
                          bg-black/20 backdrop-blur-sm rounded-3xl ${overlayClassName}`}>
            {title && (
              <motion.h2 
                variants={itemVariants}
                className="text-3xl md:text-4xl lg:text-5xl font-medium text-white mb-4 text-center px-4"
              >
                {title}
              </motion.h2>
            )}
            {subtitle && (
              <motion.p 
                variants={itemVariants}
                className="text-lg md:text-xl text-white/90 text-center max-w-2xl px-4"
              >
                {subtitle}
              </motion.p>
            )}
          </div>
        )}
      </motion.div>
    </section>
  );
} 