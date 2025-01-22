'use client'

import { motion } from 'framer-motion';
import Button from '../Button';
import { itemVariants } from '../../constants/animations';
import { useContactForm } from '../../hooks/useContactForm';
import { Content } from '../../types/contact';

interface ContactFormProps {
  content: Content['form'];
}

export default function ContactForm({ content }: ContactFormProps) {
  const {
    formData,
    isLoading,
    isSuccess,
    error,
    handleSubmit,
    handleChange
  } = useContactForm();

  return (
    <motion.div variants={itemVariants}>
      <div className="bg-white/60 backdrop-blur-sm rounded-[32px] p-8 shadow-sm border border-white/40">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
              {content.labels.name}
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder={content.placeholders.name}
              required
              className="w-full px-4 py-2 rounded-full bg-white/60 border border-white/40 focus:outline-none focus:ring-2 focus:ring-[#003B7E]/20 focus:border-[#003B7E]/40"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              {content.labels.email}
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder={content.placeholders.email}
              required
              className="w-full px-4 py-2 rounded-full bg-white/60 border border-white/40 focus:outline-none focus:ring-2 focus:ring-[#003B7E]/20 focus:border-[#003B7E]/40"
            />
          </div>
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
              {content.labels.phone}
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder={content.placeholders.phone}
              required
              className="w-full px-4 py-2 rounded-full bg-white/60 border border-white/40 focus:outline-none focus:ring-2 focus:ring-[#003B7E]/20 focus:border-[#003B7E]/40"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
              {content.labels.message}
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder={content.placeholders.message}
              required
              rows={4}
              className="w-full px-4 py-2 rounded-[24px] bg-white/60 border border-white/40 focus:outline-none focus:ring-2 focus:ring-[#003B7E]/20 focus:border-[#003B7E]/40"
            />
          </div>
          <Button
            type="submit"
            disabled={isLoading}
            className="w-full"
            text={isLoading ? content.submitButton.loading : content.submitButton.idle}
          />
          {error && (
            <p className="text-red-500 text-sm mt-2">{content.messages.error}</p>
          )}
          {isSuccess && (
            <p className="text-green-500 text-sm mt-2">{content.messages.success}</p>
          )}
        </form>
      </div>
    </motion.div>
  );
} 