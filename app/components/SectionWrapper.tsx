'use client';

export default function SectionWrapper({
  children,
  className = '',
  id = ''
}: {
  children: React.ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <section
      id={id}
      className={`w-full min-h-screen relative overflow-hidden ${className}`}
      style={{
        background: 'linear-gradient(to bottom, #FFFFFF 0%, #F0F4F8 100%)'
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-white/90 via-[#F0F4F8]/70 to-[#E0E8F0]/80 backdrop-blur-sm">
        {children}
      </div>
    </section>
  );
} 