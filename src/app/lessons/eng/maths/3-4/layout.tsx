"use client";

import { ReactNode, useEffect, useState } from "react";
import { getRandomBackgroundImage } from "@/app/utils/randomBackground";

export default function Layout3to4({ children }: { children: ReactNode }) {
  const [background, setBackground] = useState("/images/background/background1.jpg");

  useEffect(() => {
    setBackground(getRandomBackgroundImage());
  }, []);

  return (
    <section
      className="min-h-screen flex items-start justify-center bg-cover bg-center transition-all duration-700"
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className="w-full bg-white/5 backdrop-blur-lg border border-white/80 border-rounded max-w-[520px] px-3 flex flex-col items-start justify-start pt-0 ">
        {children}
      </div>
    </section>
  );
}

// <div className="relative flex w-full h-full flex-col items-stretch overflow-y-auto bg-white/5 backdrop-blur-lg border border-white/20 rounded-[2rem] shadow-2xl p-4">
//   {children}
// </div>

// <ContentCard
//   variant="responsive"
//   className="relative w-full h-[100vh] bg-white/10 backdrop-blur-lg border border-white/20 rounded-[2rem] shadow-2xl overflow-hidden"
// >
        //
        //   <div className="relative flex w-full h-full flex-col items-stretch overflow-y-auto">
        //     {children}
        //   </div>
        // </ContentCard>
