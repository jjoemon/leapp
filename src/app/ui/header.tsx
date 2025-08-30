
'use client';

import { signIn, signOut, useSession } from 'next-auth/react';
import Link from 'next/link';

interface HeaderProps {
  title: string;
}

export default function Header({ title }: HeaderProps) {
  const { data: session } = useSession();

  return (
    <header className="flex justify-between items-center p-4 bg-gray-200">
      <h1 className="text-xl font-bold">{title}</h1>

      {session ? (
        <button
          onClick={() => signOut()}
          className="rounded bg-red-500 px-3 py-1 text-white hover:bg-red-600"
        >
          Sign Out
        </button>
      ) : (
        <button
          onClick={() => signIn()}
          className="rounded bg-blue-600 px-3 py-1 text-white hover:bg-blue-700"
        >
          Sign In
        </button>
      )}
    </header>
  );
}
