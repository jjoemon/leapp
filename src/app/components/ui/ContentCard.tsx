'use client';

import React from 'react';

type ContentCardProps = {
  children: React.ReactNode;
  className?: string;
  variant?: 'phoneFrame' | 'responsive';
};

export default function ContentCard({ children, className = '', variant = 'phoneFrame' }: ContentCardProps) {
  if (variant === 'responsive') {
    return (
      <div
        className={`w-full h-full rounded-[2rem]
                    bg-transparent border border-white/90
                    shadow-[0_4px_20px_rgba(255,255,255,0.15)]
                    backdrop-saturate-150 backdrop-opacity-0
                    p-4 flex flex-col items-center justify-start
                    text-white overflow-hidden ${className}`}
        style={{
          backgroundColor: 'rgba(255,255,255,0.02)',
          WebkitBackdropFilter: 'none',
          backdropFilter: 'none',
        }}
      >
        {children}
      </div>
    );
  }

  return (
    <div
      className={`w-full max-w-[390px] aspect-[9/19.5] rounded-[2rem]
                  bg-transparent
                  border border-white/90
                  shadow-[0_4px_20px_rgba(255,255,255,0.15)]
                  backdrop-saturate-150
                  backdrop-opacity-0
                  p-4 flex flex-col items-center justify-start
                  text-white overflow-hidden ${className}`}
      style={{
        backgroundColor: 'rgba(255,255,255,0.02)', // almost invisible — like clear glass reflection
        WebkitBackdropFilter: 'none', // explicitly disable blur
        backdropFilter: 'none',
      }}
    >
      {children}
    </div>
  );
}


// <div
//   className={`w-full max-w-[390px] aspect-[9/19.5] rounded-[2rem]
//               bg-gradient-to-br from-white/5 via-white/1 to-transparent
//
//               border border-white/30
//               shadow-[0_8px_32px_0_rgba(255,255,255,0.2)]
//               backdrop-blur-2xl backdrop-saturate-200
//               p-5 flex flex-col items-center justify-start
//               text-white overflow-hidden transition-all duration-300
//               hover:bg-white/10 hover:border-white/40 ${className}`}
// // >
