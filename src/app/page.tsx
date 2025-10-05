import Link from 'next/link';
import { ArrowRightIcon } from '@heroicons/react/24/outline';

export default function Page() {
  return (
    <section className="flex flex-col md:flex-row gap-6">
      <div className="flex flex-col justify-center gap-6 rounded-lg bg-gray-50 p-4 sm:px-6 sm:py-6 md:w-2/5 md:px-10">
        <p className="text-lg sm:text-xl text-gray-800 md:text-3xl md:leading-normal">
          <strong>Welcome to the Interactive Event Timeline Visualiser.</strong> Explore a variety of social, political and 
          economic event timelines.
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
