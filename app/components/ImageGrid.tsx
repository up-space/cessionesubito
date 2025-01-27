'use client';

import { motion, useAnimationControls } from 'framer-motion';
import Image from 'next/image';
import { useEffect } from 'react';

const images = [
  '/homepage/feature-1.jpg',
  '/homepage/feature-2.jpg',
  '/homepage/feature-3.jpg',
  '/homepage/feature-4.jpg',
];

const cardVariants = {
  hidden: { opacity: 0, y: 50, filter: 'blur(8px)' },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: {
      delay: i * 0.1,
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1]
    }
  })
};

export default function ImageGrid() {
  const controls = useAnimationControls();

  useEffect(() => {
    const startAnimation = async () => {
      await controls.start("visible");
      
      controls.start({
        y: [-600, 0],
        transition: {
          duration: window.innerWidth < 768 ? 40 : 30,
          ease: "linear",
          repeat: Infinity,
          repeatType: "loop"
        }
      });
    };

    startAnimation();
  }, [controls]);

  return (
    <div className="relative h-[40vh] sm:h-[50vh] md:h-[calc(55vh-4rem)] lg:h-[800px] w-full overflow-hidden">
      {/* Natural blur overlays */}
      <div className="absolute inset-0 z-10">
        <div className="absolute top-0 left-0 right-0 h-20 sm:h-24 md:h-32 bg-gradient-to-b from-white/80 via-white/30 to-transparent backdrop-blur-md" />
        <div className="absolute bottom-0 left-0 right-0 h-20 sm:h-24 md:h-32 bg-gradient-to-t from-white/80 via-white/30 to-transparent backdrop-blur-md" />
      </div>

      {/* Responsive grid */}
      <motion.div 
        initial="hidden"
        animate={controls}
        className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 md:gap-6 absolute inset-0"
        variants={{}}
      >
        {[...images, ...images].map((src, index) => (
          <motion.div
            key={index}
            custom={index}
            variants={cardVariants}
            className="relative"
          >
            <div className="relative aspect-[3/4] w-full overflow-hidden rounded-lg sm:rounded-xl md:rounded-2xl
                        bg-white/30 backdrop-blur-sm p-1 sm:p-1.5 md:p-2 shadow-md
                        border border-white/20 transition-transform duration-300 active:scale-[1.02]">
              <Image
                src={src}
                alt={`Feature ${index % 4 + 1}`}
                fill
                className="object-cover rounded-md sm:rounded-lg md:rounded-xl"
                priority={index < 4}
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
} 