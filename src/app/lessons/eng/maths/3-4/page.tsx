'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import LessonCard from '@/app/components/ui/LessonCard';
import QuizCard from '@/app/components/ui/QuizCard';

export default function MathsAge3to4Page() {
  // 🖼️ Choose random background on mount
  const backgrounds = [
    '/images/background/background1.jpg',
    '/images/background/backgroundtyre.jpg',
    '/images/background/Option_1.png',
  ];
  const [bg, setBg] = useState(backgrounds[0]);

  useEffect(() => {
    const randomBg = backgrounds[Math.floor(Math.random() * backgrounds.length)];
    setBg(randomBg);
  }, []);

  return (
    <section
      className="min-h-screen flex flex-col items-center justify-start p-0  bg-cover bg-center "
      style={{
        backgroundImage: `url(${bg})`,
      }}
    >


      {/* Main Content — Card Zone */}
      <div className="flex flex-col  items-center justify-start flex-1">
        {/* Example: Counting Lesson */}
        <LessonCard
          title="Let us learn conting... "
          description="Let’s count some nice flowers together!"
          imageSrc="/images/objects/flower.jpg"
          onNext={() => alert('Go to next lesson')}
          onPlaySound={() => new Audio('/sounds/count3.mp3').play()}
        />

        {/* Example Quiz (You could randomize which to show) */}
        {/* <QuizCard
          question="How many apples are there?"
          options={['2', '3', '4', '5']}
          correctAnswer="3"
          onNext={() => alert('Nice job!')}
        /> */}
      </div>
    </section>
  );
}
