'use client'

import { OptimizedImage } from '../ui/optimized-image';
import { Content } from '../../types/contact';

interface MapSectionProps {
  content: Content['map'];
}

export default function MapSection({ content }: MapSectionProps) {
  return (
    <div className="bg-white/60 backdrop-blur-sm rounded-[32px] p-8 shadow-sm border border-white/40">
      <h2 className="text-2xl font-medium text-[#003B7E] mb-6">
        {content.title}
      </h2>
      <div className="relative h-[300px] rounded-[24px] overflow-hidden">
        <OptimizedImage
          src={content.imageSrc}
          alt={content.imageAlt}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 600px"
        />
      </div>
    </div>
  );
} 