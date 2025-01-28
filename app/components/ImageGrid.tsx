'use client';

import { motion, useAnimationControls } from 'framer-motion';
import Image from 'next/image';
import { memo, useCallback, useEffect, useMemo } from 'react';

const images = [
  '/homepage/feature-1.jpg',
  '/homepage/feature-2.jpg',
  '/homepage/feature-3.jpg',
  '/homepage/feature-4.jpg',
] as const;

const cardVariants = {
  hidden: { opacity: 0, y: 50, filter: 'blur(4px)' },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: {
      delay: i * 0.1,
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1]
    }
  })
};

// Memoize the gradient overlays
const GradientOverlays = memo(() => (
  <div className="absolute inset-0 z-10 pointer-events-none">
    <div className="absolute top-0 left-0 right-0 h-32 sm:h-40 md:h-48 
      bg-gradient-to-b from-white via-white/70 to-transparent 
      opacity-90 backdrop-blur-[2px]" />
    <div className="absolute bottom-0 left-0 right-0 h-32 sm:h-40 md:h-48 
      bg-gradient-to-t from-white via-white/70 to-transparent 
      opacity-90 backdrop-blur-[2px]" />
  </div>
));
GradientOverlays.displayName = 'GradientOverlays';

// Memoize individual grid items
const GridItem = memo(({ src, index }: { src: string; index: number }) => (
  <motion.div
    key={index}
    custom={index}
    variants={cardVariants}
    className="relative"
  >
    <div className="relative aspect-[3/4] w-full overflow-hidden rounded-lg sm:rounded-xl md:rounded-2xl
                bg-white/20 backdrop-blur-[1px] p-1 sm:p-1.5 md:p-2 
                shadow-lg shadow-black/[0.03]
                border border-white/30 
                transition-all duration-300 
                hover:shadow-xl hover:shadow-black/[0.05] hover:border-white/40">
      <Image
        src={src}
        alt={`Feature ${index % 4 + 1}`}
        fill
        className="object-cover rounded-md sm:rounded-lg md:rounded-xl"
        priority={index < 4}
        sizes="(max-width: 768px) 100vw, 50vw"
        quality={85}
      />
    </div>
  </motion.div>
));
GridItem.displayName = 'GridItem';

function ImageGrid() {
  const controls = useAnimationControls();

  // Memoize the animation start function
  const startAnimation = useCallback(async () => {
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
  }, [controls]);

  useEffect(() => {
    startAnimation();
  }, [startAnimation]);

  // Memoize the doubled images array
  const doubledImages = useMemo(() => [...images, ...images], []);

  return (
    <div className="relative h-[40vh] sm:h-[50vh] md:h-[calc(55vh-4rem)] lg:h-[800px] w-full overflow-hidden">
      <GradientOverlays />

      <motion.div 
        initial="hidden"
        animate={controls}
        className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 md:gap-6 absolute inset-0"
        variants={{}}
      >
        {doubledImages.map((src, index) => (
          <GridItem key={`${src}-${index}`} src={src} index={index} />
        ))}
      </motion.div>
    </div>
  );
}

// Memoize the entire component
export default memo(ImageGrid); 