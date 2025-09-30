import Link from 'next/link';
import Image from 'next/image';
import { ArrowRightIcon } from '@heroicons/react/24/outline';

export default function Page() {
  return (
    <section className="flex flex-col md:flex-row gap-6">
      {/* Left text section */}
      <div className="flex flex-col justify-center gap-6 rounded-lg bg-gray-50 p-4 sm:px-6 sm:py-6 md:w-2/5 md:px-10">
        <p className="text-lg sm:text-xl text-gray-800 md:text-3xl md:leading-normal">
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

      {/* Right image section */}
      <div className="flex items-center justify-center p-4 sm:p-6 md:w-3/5 md:px-28 md:py-12">
        <Image
          src="/joemon.jpg"
          width={1000}
          height={760}
          sizes="(max-width: 768px) 100vw, 50vw"
          className="rounded-lg shadow-lg w-full max-w-md md:max-w-full"
          alt="Screenshots of the dashboard project showing desktop version"
        />
      </div>
    </section>
  );
}
