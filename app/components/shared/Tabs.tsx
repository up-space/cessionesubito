'use client'

import { motion } from 'framer-motion';

interface TabsProps {
  tabs: {
    id: string;
    title: string;
    content?: React.ReactNode;
  }[];
  activeTab: string;
  onChange: (id: string) => void;
  className?: string;
}

export default function Tabs({ tabs, activeTab, onChange, className = '' }: TabsProps) {
  return (
    <div className={className}>
      <div className="relative">
        <div className="flex gap-3 p-1.5">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => onChange(tab.id)}
              className={`relative flex-1 px-6 py-3.5 text-base md:text-lg font-medium rounded-[24px] transition-all duration-300
                ${activeTab === tab.id
                  ? 'text-[#003B7E] bg-white/90 shadow-lg'
                  : 'text-white hover:bg-white/20'
                }`}
            >
              {tab.title}
              {activeTab === tab.id && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute inset-0 bg-white/90 rounded-[24px] shadow-lg -z-10"
                  transition={{ type: "spring", duration: 0.5 }}
                />
              )}
            </button>
          ))}
        </div>
      </div>

      <div className="relative">
        {tabs.map((tab) => (
          <motion.div
            key={tab.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ 
              opacity: activeTab === tab.id ? 1 : 0,
              y: activeTab === tab.id ? 0 : 20
            }}
            transition={{ duration: 0.2 }}
            className={`${activeTab === tab.id ? 'block' : 'hidden'}`}
          >
            {tab.content}
          </motion.div>
        ))}
      </div>
    </div>
  );
} 