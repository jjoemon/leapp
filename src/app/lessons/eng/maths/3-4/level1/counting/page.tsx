"use client";

import Image from "next/image";

export default function CountingThree() {
  return (
    <section
      className="min-h-screen flex flex-col items-center justify-center bg-cover bg-center text-white p-6"
      style={{ backgroundImage: "url('/images/background/background1.jpg')" }}
    >
      <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-6 max-w-md w-full text-center border border-white/20">
        <h1 className="text-3xl text-black font-bold mb-4">Counting up to 3</h1>
        <p className="text-lg mb-6 opacity-90">Let’s count the flowers together!</p>

        <div className="flex justify-center gap-4 mb-6">
          {[1, 2, 3].map((n) => (
            <Image
              key={n}
              src={`/images/objects/flower.jpg`}
              alt={`flower ${n}`}
              width={80}
              height={80}
              className="animate-bounce"
            />
          ))}
        </div>

        <button
          onClick={() => new Audio('/sounds/one-two-three.mp3').play()}
          className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold py-2 px-6 rounded-lg transition"
        >
          ▶ Say it together!
        </button>
      </div>
    </section>
  );
}
