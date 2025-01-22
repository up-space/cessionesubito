'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { sharedContent } from '@/app/lib/content'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.1, staggerChildren: 0.1 } }
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.1 } }
}

export default function NotFoundSection() {
  const { title, description, ctaText } = sharedContent.notFound;
  
  return (
    <section className="py-16 md:py-24">
      <motion.div
        className="container mx-auto px-4 md:px-6"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="max-w-3xl mx-auto text-center">
          <motion.h2 
            variants={itemVariants}
            className="text-3xl md:text-4xl font-medium text-[#003B7E] mb-6"
          >
            {title}
          </motion.h2>
          <motion.p 
            variants={itemVariants}
            className="text-lg md:text-xl text-gray-600 mb-8"
          >
            {description}
          </motion.p>
          <motion.div variants={itemVariants}>
            <Link 
              href="/contatti"
              className="inline-flex items-center justify-center px-8 py-3 rounded-full bg-[#003B7E] text-white font-medium hover:bg-[#003B7E]/90 transition-colors"
            >
              {ctaText}
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
} 