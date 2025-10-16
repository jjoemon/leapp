"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";
import { motion } from "framer-motion";
import ContentCard from "@/app/components/ui/ContentCard";

export default function LessonsPage() {
  const router = useRouter();

  const ageGroups = [
    { label: "3–4", path: "/lessons/eng/maths/3-4/level1/counting" },
    { label: "4–5", path: "/lessons/eng/maths/4-5" },
    { label: "5–6", path: "/lessons/eng/maths/5-6" },
    { label: "6–7", path: "/lessons/eng/maths/6-7" },
    { label: "7–8", path: "/lessons/eng/maths/7-8" },
  ];

  return (
    <section
      className="min-h-screen flex items-start justify-center bg-cover bg-center p-0"
      style={{ backgroundImage: "url('/images/background/backgroundtyre.jpg')" }}
    >
      <div className="w-full max-w-[520px] px-3 flex flex-col items-center justify-start">
        <ContentCard className="relative w-full bg-white/10 backdrop-blur-lg border border-white/20 rounded-[2rem] shadow-2xl overflow-hidden">

          {/* Main layout: character + menu */}
          <div className="relative flex w-full flex-col items-center justify-start pt-4">

            {/* 🧸 Animated character */}
            <motion.div
              animate={{
                y: [0, -6, 0, -4, 0],
                scale: [1, 1.02, 1, 1.01, 1],
                rotate: [0, 1, -1, 0],
              }}
              transition={{
                duration: 3.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="relative h-[65vh] w-full max-h-[550px] flex justify-center"
            >
              <Image
                src="/images/characters/kaka1.png"
                alt="Kaka the character"
                fill
                priority
                className="object-contain object-bottom drop-shadow-lg pointer-events-none"
              />
            </motion.div>

            {/* 📚 Menu options — below the image */}
            <div className="absolute bottom-8 flex flex-col items-center space-y-3 z-10">
              <h2 className="bg-white/60 text-black font-semibold text-sm rounded-2xl px-4 py-2 backdrop-blur-md shadow-sm text-center">
                👋 Hello! I’m Kaka.<br />Please choose your age group.
              </h2>
              <div className="grid grid-cols-2 gap-3">
                {ageGroups.map((group) => (
                  <button
                    key={group.label}
                    onClick={() => router.push(group.path)}
                    className="bg-blue-500/80 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg transition text-sm shadow-md backdrop-blur-sm"
                  >
                    {group.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </ContentCard>
      </div>
    </section>
  );
}
