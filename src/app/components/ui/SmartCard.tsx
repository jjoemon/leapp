'use client';

import { useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

type SmartCardProps = {
  type?: "image" | "video" | "mixed";
  imageSrc?: string;
  videoSrc?: string;
  title?: string;
  text?: string;
  audioSrc?: string;
  duration?: number; // e.g. 10 seconds
  onNext?: () => void; // called when duration ends
};

export default function SmartCard({
  type = "image",
  imageSrc,
  videoSrc,
  title,
  text,
  audioSrc,
  duration,
  onNext,
}: SmartCardProps) {
  useEffect(() => {
    if (!duration || !onNext) return;
    const timer = setTimeout(onNext, duration * 1000);
    return () => clearTimeout(timer);
  }, [duration, onNext]);

  useEffect(() => {
    if (audioSrc) {
      const audio = new Audio(audioSrc);
      audio.play().catch(() => {});
    }
  }, [audioSrc]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -40 }}
      className="w-full max-w-[400px] aspect-[9/19.5] rounded-3xl overflow-hidden shadow-2xl
                 bg-gradient-to-b from-sky-200 to-emerald-100 flex flex-col justify-center items-center p-4"
    >
      {/* Media */}
      {type === "image" && imageSrc && (
        <Image
          src={imageSrc}
          alt={title || "Learning card"}
          width={400}
          height={300}
          className="rounded-xl object-cover mb-3"
        />
      )}
      {type === "video" && videoSrc && (
        <video
          src={videoSrc}
          autoPlay
          muted
          playsInline
          className="rounded-xl mb-3 w-full h-64 object-cover"
        />
      )}

      {/* Text */}
      {title && <h2 className="text-2xl font-bold text-center text-sky-800">{title}</h2>}
      {text && <p className="text-md text-center mt-2 text-sky-700">{text}</p>}
    </motion.div>
  );
}
