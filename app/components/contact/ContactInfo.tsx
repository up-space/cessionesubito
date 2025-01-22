'use client'

import { motion } from 'framer-motion';
import { itemVariants } from '../../constants/animations';
import { Content } from '../../types/contact';

interface ContactInfoProps {
  content: Content['contact'];
}

export default function ContactInfo({ content }: ContactInfoProps) {
  return (
    <div className="bg-white/60 backdrop-blur-sm rounded-[32px] p-8 shadow-sm border border-white/40">
      <h2 className="text-2xl font-medium text-[#003B7E] mb-6">
        {content.title}
      </h2>
      <div className="space-y-6">
        <div className="flex items-center space-x-4">
          <div className="w-10 h-10 flex items-center justify-center rounded-full bg-[#003B7E]/[0.03]">
            <svg className="w-5 h-5 text-[#003B7E]/80" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          </div>
          <div>
            <h3 className="font-medium text-gray-900">{content.address.title}</h3>
            <p className="text-gray-600">{content.address.content.join('\n')}</p>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <div className="w-10 h-10 flex items-center justify-center rounded-full bg-[#003B7E]/[0.03]">
            <svg className="w-5 h-5 text-[#003B7E]/80" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </div>
          <div>
            <h3 className="font-medium text-gray-900">{content.email.title}</h3>
            <a href={`mailto:${content.email.value}`} className="text-gray-600 hover:text-[#003B7E]">
              {content.email.value}
            </a>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <div className="w-10 h-10 flex items-center justify-center rounded-full bg-[#003B7E]/[0.03]">
            <svg className="w-5 h-5 text-[#003B7E]/80" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
          </div>
          <div>
            <h3 className="font-medium text-gray-900">{content.phone.title}</h3>
            <a href={`tel:${content.phone.value}`} className="text-gray-600 hover:text-[#003B7E]">
              {content.phone.value}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
} 