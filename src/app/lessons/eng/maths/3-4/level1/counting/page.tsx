"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const numberAudioMap = {
  1: "/sounds/numbers/boy/1.mp3",
  2: "/sounds/numbers/boy/2.mp3",
  3: "/sounds/numbers/boy/3.mp3",
};

const colors = ["#FF6B6B", "#FFD93D", "#6BCB77"];
const flowerImage = "/images/objects/yellow/flower1.jpg";

type Phase = "intro" | "numbers" | "examples" | "done";

export default function CountingLevel1() {
  const [phase, setPhase] = useState<Phase>("intro");
  const [currentNumber, setCurrentNumber] = useState(0);
  const [character, setCharacter] = useState<"ladli" | "gabbu">("ladli");

  // randomly pick a character
  useEffect(() => {
    const chars: ("ladli" | "gabbu")[] = ["ladli", "gabbu"];
    setCharacter(chars[Math.floor(Math.random() * chars.length)]);
  }, []);

  // Intro → Numbers
  useEffect(() => {
    const utter = new SpeechSynthesisUtterance("Let's count together. One, two, three!");
    utter.rate = 0.9;
    window.speechSynthesis.cancel();
    window.speechSynthesis.speak(utter);
    setTimeout(() => setPhase("numbers"), 2500);
  }, []);

  // Counting phase
  useEffect(() => {
    if (phase !== "numbers") return;
    let step = 1;
    const run = () => {
      if (step > 3) {
        setTimeout(() => setPhase("examples"), 1000);
        return;
      }
      setCurrentNumber(step);
      new Audio(numberAudioMap[step as 1 | 2 | 3]).play();
      step++;
      setTimeout(run, 2500);
    };
    run();
  }, [phase]);

  // Examples phase
  useEffect(() => {
    if (phase !== "examples") return;
    let step = 1;
    const explain = () => {
      if (step > 3) {
        setTimeout(() => setPhase("done"), 2000);
        return;
      }
      setCurrentNumber(step);
      const utter = new SpeechSynthesisUtterance(
        step === 1
          ? "Look! One means one flower."
          : step === 2
          ? "Now, two means two flowers."
          : "And three means three flowers!"
      );
      utter.rate = 0.95;
      window.speechSynthesis.cancel();
      window.speechSynthesis.speak(utter);
      step++;
      setTimeout(explain, 4000);
    };
    explain();
  }, [phase]);

  const characterInfo = {
    ladli: {
      name: "Ladli",
      image: "/images/characters/Larli.jpeg",
    },
    gabbu: {
      name: "Gabbu",
      image: "/images/characters/Gabbu.png",
    },
  }[character];

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-blue-100 to-pink-100">
      {/* 📱 fixed mobile viewport */}
      <div className="relative w-[390px] h-[780px] bg-white/30 backdrop-blur-xl rounded-[3rem] border border-white/30 shadow-2xl overflow-hidden flex flex-col px-5 pt-5">

        {/* 🧒 Character avatar */}
        <div className="flex items-center gap-3 mb-4">
          <div className="w-16 h-16 rounded-full overflow-hidden border-4 border-white shadow-md">
            <Image
              src={characterInfo.image}
              alt={characterInfo.name}
              width={64}
              height={64}
              className="object-cover"
            />
          </div>
          <h2 className="text-lg font-semibold text-gray-800">{characterInfo.name} is helping you count!</h2>
        </div>

        {/* 🎓 Title */}
        <motion.h1
          key={phase}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-xl font-bold text-gray-800 mb-4 text-center"
        >
          {phase === "intro"
            ? "Let's Count Together!"
            : phase === "numbers"
            ? "Count with Me!"
            : "See What the Numbers Mean!"}
        </motion.h1>

        {/* 📊 Display section */}
        <div className="flex-1 flex flex-col items-center justify-start mt-4 space-y-6">
          {phase === "numbers" && currentNumber > 0 && (
            <motion.div
              key={`num-${currentNumber}`}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", duration: 0.6 }}
              className="w-32 h-32 rounded-full flex items-center justify-center text-6xl font-extrabold text-white shadow-xl"
              style={{ backgroundColor: colors[currentNumber - 1] }}
            >
              {currentNumber}
            </motion.div>
          )}

          {phase === "examples" && currentNumber > 0 && (
            <motion.div
              key={`ex-${currentNumber}`}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ type: "spring", duration: 0.6 }}
              className="flex flex-col items-center gap-4"
            >
              {/* Number circle */}
              <div
                className="w-20 h-20 rounded-full flex items-center justify-center text-5xl font-bold text-white shadow-md"
                style={{ backgroundColor: colors[currentNumber - 1] }}
              >
                {currentNumber}
              </div>

              {/* 🌸 Flower examples — one new row each time */}
              <div className="flex flex-col gap-4 mt-2">
                {Array.from({ length: currentNumber }).map((_, rowIdx) => (
                  <div key={rowIdx} className="flex justify-center gap-4">
                    {Array.from({ length: rowIdx + 1 }).map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: i * 0.15 }}
                      >
                        <Image
                          src={flowerImage}
                          alt="Flower"
                          width={70}
                          height={70}
                          className="rounded-full border-4 border-pink-200 shadow-sm"
                        />
                      </motion.div>
                    ))}
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
}
