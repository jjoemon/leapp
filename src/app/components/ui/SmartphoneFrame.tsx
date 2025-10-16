import React from "react";
import Image from "next/image";

interface SmartphoneFrameProps {
  title?: string;
  subtitle?: string;
  text?: string;
  imageSrc?: string;
  videoSrc?: string;
  children?: React.ReactNode;
  className?: string;
}

export default function SmartphoneFrame({
  title,
  subtitle,
  text,
  imageSrc,
  videoSrc,
  children,
  className = "",
}: SmartphoneFrameProps) {
  return (
    <div
      className={`
        relative mx-auto
        aspect-[9/19.5]  // ✅ Closer to actual iPhone 14/15 ratio
        w-[90vw] sm:w-[400px] md:w-[360px] lg:w-[390px]
        flex flex-col
        overflow-hidden
        rounded-[3rem] border-[8px]
        border-neutral-900 dark:border-neutral-800
        bg-black shadow-[0_0_40px_rgba(0,0,0,0.4)]
        ${className}
      `}
    >
      {/* Top notch */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[40%] h-5 bg-black rounded-b-2xl z-20" />

      {/* Content area */}
      <div className="relative flex-1 overflow-hidden rounded-[2.5rem] bg-white/10 backdrop-blur-md">
        {imageSrc && (
          <Image
            src={imageSrc}
            alt={title || "Preview"}
            fill
            className="object-cover"
          />
        )}

        {videoSrc && (
          <video
            src={videoSrc}
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          />
        )}

        <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-5 text-white bg-black/20">
          {title && <h2 className="text-lg md:text-2xl font-semibold mb-1">{title}</h2>}
          {subtitle && <h3 className="text-sm md:text-base opacity-80 mb-2">{subtitle}</h3>}
          {text && <p className="text-sm md:text-base opacity-90 mb-3">{text}</p>}
          {children}
        </div>
      </div>

      {/* Bottom bezel (for realism) */}
      <div className="absolute bottom-1 left-1/2 -translate-x-1/2 w-[80px] h-[6px] rounded-full bg-neutral-700 dark:bg-neutral-400" />
    </div>
  );
}
