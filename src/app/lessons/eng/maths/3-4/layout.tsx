'use client'

import { getRandomBackgroundImage } from "@/app/utils/randomBackground";

import {ReactNode, useState, useEffect } from "react";

export default function Layout({ children }: { children: ReactNode }) {
  const [background, setBackground] = useState("/images/background/background1.jpg");

  useEffect(() => {
    setBackground(getRandomBackgroundImage());
  }, []);

  return (
    <section
      className="min-h-screen flex items-start justify-center bg-cover bg-center transition-all duration-700"
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className="w-full max-w-[520px] px-3 flex flex-col items-start justify-start pt-0">
        <div className="relative flex w-full h-full flex-col items-stretch overflow-y-auto bg-white/10 backdrop-blur-lg border border-white/20 rounded-[2rem] shadow-2xl p-4">
          {children}
        </div>
      </div>
    </section>
  );
}


// <ContentCard
//   variant="responsive"
//   className="relative w-full h-[100vh] bg-white/10 backdrop-blur-lg border border-white/20 rounded-[2rem] shadow-2xl overflow-hidden"
// >
        //
        //   <div className="relative flex w-full h-full flex-col items-stretch overflow-y-auto">
        //     {children}
        //   </div>
        // </ContentCard>
