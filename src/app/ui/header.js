import Link from 'next/link'
import AcmeLogo from '@/app/ui/acme-logo'; // Replace with your actual logo component

export default function Header({ title, isSignedIn, onSignOut }) {
  return (
    <header className="w-full h-20 flex items-center justify-between bg-blue-500 px-6">

      {/* Left: Logo */}
      <div className="flex items-center space-x-2">
        <AcmeLogo />
      </div>

      {/* Center: Title */}
      <h1 className="text-white text-xl md:text-2xl font-semibold text-center flex-1">
         ROOTS & HORIZONS
      </h1>

      {/* Right: Auth controls */}
      <div className="flex items-center space-x-4">
        {isSignedIn ? (
          <button
            onClick={onSignOut}
            className="rounded bg-white text-blue-600 px-4 py-2 font-medium hover:bg-gray-100 transition"
          >
            Sign out
          </button>
        ) : (
          <Link
            href="/login"
            className="rounded bg-white text-black-600 px-4 py-2 font-medium hover:bg-gray-100 transition"
          >
            Sign in
          </Link>
        )}
      </div>
    </header>
  )
}
