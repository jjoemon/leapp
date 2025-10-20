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
  variant?: 'phoneFrame' | 'responsive';
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
  variant = 'phoneFrame',
}: LessonCardProps) {
  const baseFrame =
    'relative rounded-[2rem] border border-white/25 shadow-[0_12px_32px_rgba(0,0,0,0.35)] ring-1 ring-white/10 backdrop-blur-lg backdrop-saturate-150 backdrop-opacity-0 flex flex-col items-center justify-start text-white overflow-hidden';

  const frameClass =
    variant === 'responsive'
      ? `w-full h-full ${baseFrame}`
      : `w-full max-w-[390px] aspect-[9/19.5] ${baseFrame}`;

  return (
    <div
      className={`${frameClass} ${className}`}
      style={{
        backgroundColor: 'rgba(255,255,255,0.02)',
        WebkitBackdropFilter: 'none',
        backdropFilter: 'none',
      }}
    >
      <div className="pointer-events-none absolute inset-0 z-0 rounded-[2rem] bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.06)_0%,rgba(255,255,255,0.03)_35%,rgba(0,0,0,0)_70%)]" />

      <div className="relative z-10 flex flex-col items-center justify-start w-full h-full">
        <div className="text-center text-black p-3">
          <h1 className="text-2xl font-bold drop-shadow-md">{title}</h1>
          {description && <p className="text-sm opacity-90 mt-1">{description}</p>}
        </div>

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

        <div className="flex justify-between w-full px-4 pb-3">
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
    </div>
  );
}
