import Link from 'next/link';

import { ArrowRightIcon } from '@heroicons/react/24/outline';
import DateCard from '@/app/components/ui/DateCard';

export default function Page() {
  return (
    <section
    className="min-h-screen w-full flex flex-col items-center justify-center justify-start overflow-x-hidden p-6 bg-cover bg-center bg-no-repeat"
    style={{ backgroundImage: "url('/background1.jpg')" }}
    >
      {/* Left text section */}
      <div className="w-full max-w-sm md:max-w-[750px] h-[70vh] rounded-2xl bg-purple/80 shadow-2xl backdrop-blur-lg p-4 sm:p-6 flex flex-col justify-between">
        {/* --- Top section: DateCard --- */}
        <div className="flex justify-center mb-2 sm:mb-4 mt-0">
          <DateCard className="mt-0" />
        </div>

      <p>
      <strong>Welcome to eDebator.</strong> here we argue for the{' '}
          <a href="https://nextjs.org/learn/" className="text-blue-800" target="_blank" rel="noopener noreferrer">
            Next.js Learn Course,
          </a> where we will argue with evidence
        </p>

        <Link
          href="/signin"
          className="flex items-center gap-4 self-start rounded-lg bg-blue-500 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-blue-400 sm:px-6 sm:py-3 sm:gap-5 md:text-base"
        aria-label="Log in to the dashboard">
          <span>Log in</span>
          <ArrowRightIcon className="w-5 md:w-6" />
        </Link>
      </div>


    </section>
  );
}

// date card above div text-lg sm:text-xl justify-start text-white md:text-3xl md:leading-normal
