"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function Age3to4Page() {
  const router = useRouter();
  const [selectedCharacter, setSelectedCharacter] = useState<"ladli" | "gabbu">("ladli");

  useEffect(() => {
    const chars: ("ladli" | "gabbu")[] = ["ladli", "gabbu"];
    const chosen = chars[Math.floor(Math.random() * chars.length)];
    setSelectedCharacter(chosen);

    const speakIntro = () => {
      const msg =
        chosen === "ladli"
          ? "Hi! I’m Ladli, your best friend. Let’s learn and play together!"
          : "Hey! I’m Gabbu, your friend. Ready for a fun challenge?";
      const u = new SpeechSynthesisUtterance(msg);
      u.rate = 0.95;
      u.pitch = 0.9;
      window.speechSynthesis.cancel();
      window.speechSynthesis.speak(u);
    };

    if (window.speechSynthesis.getVoices().length === 0)
      window.speechSynthesis.onvoiceschanged = speakIntro;
    else speakIntro();

    return () => {
      window.speechSynthesis.cancel();
      window.speechSynthesis.onvoiceschanged = null;
    };
  }, []);

  const characters = {
    ladli: {
      name: "Ladli",
      description: "Hi! I’m Ladli, your best friend. Let’s learn and play together!",
      video: "/images/characters/animations/Larli_Braid.mp4",
    },
    gabbu: {
      name: "Gabbu",
      description: "Hey! I’m Gabbu, your friend. Ready for a fun challenge?",
      video: "/images/characters/animations/Gabbu_and_YoYo(A).mp4",
    },
  };
  const c = characters[selectedCharacter];

  const levels = [
    { label: "Level 1", path: "/lessons/eng/maths/3-4/level1/counting" },
    { label: "Level 2", path: "/lessons/eng/maths/3-4/level2/counting" },
    { label: "Level 3", path: "/lessons/eng/maths/3-4/level3/counting" },
    { label: "Level 4", path: "/lessons/eng/maths/3-4/level4/counting" },
  ];

  return (
    <div className="flex flex-col items-center justify-start w-full pt-6 pb-10">
      {/* speech bubble */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative text-center mb-4"
      >
        <div className="relative inline-block bg-white/90 text-black text-lg font-medium px-5 py-3 rounded-3xl shadow-md max-w-xs">
          {c.description}
          <div className="absolute left-1/2 -translate-x-1/2 bottom-[-10px] w-0 h-0 border-l-[10px] border-r-[10px] border-t-[10px] border-l-transparent border-r-transparent border-t-white/90"></div>
        </div>
      </motion.div>

      {/* animated character */}
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1 }}
        className="mb-6"
      >
        <video
          src={c.video}
          autoPlay
          loop
          muted
          playsInline
          className="w-64 h-64 rounded-2xl shadow-xl object-contain"
        />
      </motion.div>

      {/* level buttons */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="grid grid-cols-1 gap-4 w-full max-w-sm"
      >
        {levels.map(l => (
          <motion.button
            key={l.label}
            onClick={() => router.push(l.path)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center justify-between bg-blue-500/80 hover:bg-blue-600 text-white font-semibold py-3 px-5 rounded-xl text-lg shadow-md transition-all backdrop-blur-sm"
          >
            <span>{l.label}</span>
            <ArrowRight className="w-6 h-6" />
          </motion.button>
        ))}
      </motion.div>
    </div>
  );
}
