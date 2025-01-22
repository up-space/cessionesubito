'use client'

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

interface AccordionItemProps {
  title: string;
  titleContent?: React.ReactNode;
  children: React.ReactNode;
  defaultOpen?: boolean;
}

interface AccordionProps {
  items: {
    title: string;
    titleContent?: React.ReactNode;
    content: React.ReactNode;
  }[];
  className?: string;
}

function AccordionItem({ title, titleContent, children, defaultOpen = false }: AccordionItemProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="border-b border-gray-200/50 last:border-b-0">
      <button
        className="w-full py-6 flex justify-between items-center text-left rounded-[32px] hover:bg-white/40 px-6 -mx-6 transition-colors"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex-1">
          {titleContent || <h3 className="text-xl font-medium text-[#003B7E]">{title}</h3>}
        </div>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          className="w-8 h-8 flex items-center justify-center bg-white rounded-full shadow-sm ml-4 flex-shrink-0"
        >
          <svg
            className="w-4 h-4 text-[#003B7E]"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </motion.div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <div className="pb-6 text-gray-600 px-6 -mx-6 bg-white/40 rounded-[32px]">
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function Accordion({ items, className = '' }: AccordionProps) {
  return (
    <div className={`bg-white/80 backdrop-blur-xl rounded-[32px] p-6 md:p-8 shadow-lg border border-white/20 ${className}`}>
      {items.map((item, index) => (
        <AccordionItem
          key={index}
          title={item.title}
          titleContent={item.titleContent}
          defaultOpen={index === 0}
        >
          {item.content}
        </AccordionItem>
      ))}
    </div>
  );
} 