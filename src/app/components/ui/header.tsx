'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import AcmeLogo from "@/app/components/ui/acme-logo";
import { lusitana } from '@/app/components/ui/fonts';

interface HeaderProps {
  title: string;
  isSignedIn: boolean;
  onSignOut: () => void;
}

export default function Header({ title, isSignedIn, onSignOut }: HeaderProps) {
  const router = useRouter();
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

  const userInitials = "U"; // fallback or pass initials as a prop if needed

  return (
    <header className="flex flex-wrap items-center justify-between gap-2 px-4 py-3 bg-black text-white m=0 p=0">
      {/* Left: Logo */}
      <div className="flex-shrink-0 w-auto flex items-center">
        <AcmeLogo />
      </div>

      {/* Center: Title */}
      <div className="flex-1 text-center min-w-[120px]">
        <h1
          className={`${lusitana.className} font-extrabold text-red-500 drop-shadow-lg leading-tight
          text-lg sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl truncate`}
        >
          {title}
        </h1>
      </div>

      {/* Right: User controls */}
      <div className="flex-shrink-0 flex justify-end relative">
        {isSignedIn ? (
          <>
            <button
              onClick={toggleDropdown}
              className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-red-500 text-white flex items-center justify-center font-bold text-sm sm:text-base"
            >
              {userInitials}
            </button>

            {dropdownOpen && (
              <div className="absolute right-0 mt-2 w-40 bg-white border rounded shadow-lg z-10 text-black">
                <button
                  onClick={() => router.push('/profile')}
                  className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                >
                  Profile
                </button>
                <button
                  onClick={onSignOut}
                  className="block w-full text-left px-4 py-2 hover:bg-gray-100 text-red-600"
                >
                  Sign Out
                </button>
              </div>
            )}
          </>
        ) : (
          <button
            onClick={() => router.push('/signin')}
            className="rounded bg-blue-600 px-3 py-1 text-sm sm:text-base hover:bg-blue-700"
          >
            Sign In
          </button>
        )}
      </div>
    </header>
  );
}
