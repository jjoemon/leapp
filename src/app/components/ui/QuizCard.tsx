'use client';

import React, { useState } from 'react';

type QuizCardProps = {
  question: string;
  options: string[];
  correctAnswer: string;
  onNext?: () => void;
  className?: string;
};

export default function QuizCard({
  question,
  options,
  correctAnswer,
  onNext,
  className = '',
}: QuizCardProps) {
  const [selected, setSelected] = useState<string | null>(null);
  const [feedback, setFeedback] = useState('');

  const handleSelect = (option: string) => {
    setSelected(option);
    if (option === correctAnswer) {
      setFeedback('✅ That’s right!');
      setTimeout(() => {
        setFeedback('');
        setSelected(null);
        onNext?.();
      }, 1000);
    } else {
      setFeedback('❌ Try again!');
    }
  };

  return (
    <div
      className={`w-full max-w-[390px] aspect-[9/19.5] rounded-[2rem]
                  border border-white/80 shadow-[0_4px_20px_rgba(255,255,255,0.15)]
                  bg-transparent backdrop-saturate-150 backdrop-opacity-0
                  flex flex-col items-center justify-center text-white p-4 ${className}`}
      style={{
        backgroundColor: 'rgba(255,255,255,0.02)',
        WebkitBackdropFilter: 'none',
        backdropFilter: 'none',
      }}
    >
      <h2 className="text-lg font-bold mb-4 text-center">{question}</h2>
      <div className="grid grid-cols-2 gap-3 w-full">
        {options.map((opt) => (
          <button
            key={opt}
            onClick={() => handleSelect(opt)}
            className={`py-2 px-3 rounded-xl font-medium transition text-sm ${
              selected === opt
                ? opt === correctAnswer
                  ? 'bg-green-500'
                  : 'bg-red-500'
                : 'bg-blue-500/80 hover:bg-blue-600'
            }`}
          >
            {opt}
          </button>
        ))}
      </div>
      {feedback && <p className="mt-3 text-sm">{feedback}</p>}
    </div>
  );
}
