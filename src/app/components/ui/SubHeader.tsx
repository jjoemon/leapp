// src/components/SubHeader.tsx

import Link from 'next/link';

export default function SubHeader() {
  return (
    <div className="bg-white-600 px-4 py-1 border-gray-300 border-b ">
      <nav className="flex items-center justify-between max-w-7xl mx-auto">
        <Link href="/" className="text-blue-600ut"> Home </Link>
        <div className="flex gap-4 text-sm">
          <Link href="/" className="text-blue-600ut"> Dashboard</Link>
        </div>
      </nav>
    </div>
  );
}
//
