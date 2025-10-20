'use client'

import Image from "next/image";
import { useRouter } from "next/navigation";
import ContentCard from "@/app/components/ui/ContentCard";
import DateCard from "@/app/components/ui/DateCard";
import { useState, useEffect } from "react";
import { getRandomImage } from "@/app/utils/randomImage";
import { getRandomBackgroundImage } from "@/app/utils/randomBackground";

export default function HomePage() {
  const router = useRouter();
  const [background, setBackground] = useState("/images/background/background1.jpg");
  const [imageSrc, setImageSrc] = useState<string>("");

  useEffect(() => {
    setBackground(getRandomBackgroundImage());
    setImageSrc(getRandomImage());
  }, []);

  const handleStartClick = () => {
    router.push("/lessons");
  };

  return (
    <section
      className="min-h-screen flex items-start justify-center bg-cover bg-center p-0"
      style={{ backgroundImage: `url(${background})` }}
    >
      <ContentCard className="bg-white/30 backdrop-blur-lg shadow-xl border border-white/20 m-0">
        <DateCard className="mb-3" />

        <div className="relative w-full h-64 rounded-xl overflow-hidden">
          {imageSrc && (
            <Image
              src={imageSrc}
              alt="Culturally Embedded Learning"
              fill
              className="object-cover"
            />
          )}
        </div>

        <div className="mt-4 px-2 text-center p-6">
          <h2 className="text-3xl font-bold">Welcome to RooHo!</h2>
          <p className="text-sm font-semibold opacity-800 mt-1 p-6">
            Explore culturally embedded learning experiences through play and creativity.
          </p>
        </div>

        <div className="pb-6">
          <button
            onClick={handleStartClick}
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-6 rounded-full transition"
          >
            START
          </button>
        </div>
      </ContentCard>
    </section>
  );
}






// <section
// className="min-h-screen w-full flex flex-col items-center justify-center justify-start overflow-x-hidden p-6 bg-cover bg-center bg-no-repeat"
// style={{ backgroundImage: "url('/background1.jpg')" }}
// >
// // date card above div text-lg sm:text-xl justify-start text-white md:text-3xl md:leading-normal
// <div className="w-full max-w-sm md:max-w-[750px] h-[70vh] rounded-2xl bg-purple/80 shadow-2xl backdrop-blur-lg p-4 sm:p-6 flex flex-col justify-between">
//   {/* --- Top section: DateCard --- */}
//
//   <div className="flex justify-center mb-2 sm:mb-4 mt-0">
//     <DateCard className="mt-0" />
//   </div>
//
// <p>
// <strong>Welcome togames & learning app.</strong> here we argue for the{' '}
//     <a href="https://nextjs.org/learn/" className="text-blue-800" target="_blank" rel="noopener noreferrer">
//       Next.js Learn Course,
//     </a> where we will argue with evidence
//   </p>
//
//   <Link
//     href="/signin"
//     className="flex items-center gap-4 self-start rounded-lg bg-blue-500 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-blue-400 sm:px-6 sm:py-3 sm:gap-5 md:text-base"
//   aria-label="Log in to the dashboard">
//     <span>Log in</span>
//     <ArrowRightIcon className="w-5 md:w-6" />
//   </Link>
// </div>
