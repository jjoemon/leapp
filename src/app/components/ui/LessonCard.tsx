'use client';

import React from 'react';
import Image from 'next/image';

type LessonCardProps = {
  title: string;
  description?: string;
  imageSrc?: string;
  videoSrc?: string;
  onNext?: () => void;
  onPlaySound?: () => void;
  children?: React.ReactNode;
  className?: string;
};

export default function LessonCard({
  title,
  description,
  imageSrc,
  videoSrc,
  onNext,
  onPlaySound,
  children,
  className = '',
}: LessonCardProps) {
  return (
    <div
      className={`w-full max-w-[390px] aspect-[9/19.5] rounded-[2rem]
                  border border-black/90
                  shadow-[0_4px_20px_rgba(255,255,255,0.15)]
                  backdrop-saturate-150 backdrop-opacity-0
                  flex flex-col items-center justify-start text-white overflow-hidden
                  ${className}`}
      style={{
        backgroundColor: 'rgba(255,255,255,0.02)',
        WebkitBackdropFilter: 'none',
        backdropFilter: 'none',
      }}
    >
      {/* Top: title and description */}
      <div className="text-center text-black p-3 z-10">
        <h1 className="text-2xl font-bold drop-shadow-md">{title}</h1>
        {description && (
          <p className="text-sm opacity-90 mt-1">{description}</p>
        )}
      </div>

      {/* Main: image, video, or custom content */}
      <div className="relative flex-1 w-full flex items-center justify-center">
        {imageSrc && (
          <Image
            src={imageSrc}
            alt={title}
            fill
            className="object-contain object-center rounded-2xl"
            priority
          />
        )}
        {videoSrc && (
          <video
            src={videoSrc}
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-contain rounded-2xl"
          />
        )}
        {children}
      </div>

      {/* Bottom controls */}
      <div className="flex justify-between w-full px-4 pb-3 z-10">
        {onPlaySound && (
          <button
            onClick={onPlaySound}
            className="bg-yellow-400/80 hover:bg-yellow-500 text-black font-semibold py-1 px-3 rounded-lg text-sm"
          >
            🔊 Say it!
          </button>
        )}
        {onNext && (
          <button
            onClick={onNext}
            className="ml-auto bg-blue-500/80 hover:bg-blue-600 text-white font-semibold py-1 px-3 rounded-lg text-sm"
          >
            Next →
          </button>
        )}
      </div>
    </div>
  );
}
