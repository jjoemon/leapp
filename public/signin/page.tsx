"use client";

import { signIn } from "next-auth/react";

export default function SignInPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50">
      <div className="w-full max-w-md rounded-xl bg-white p-6 shadow-lg">
        <h1 className="mb-4 text-2xl font-bold">Sign in to The Big Conversation</h1>
        <p className="mb-6 text-gray-600">Choose a method below to continue</p>

        {/* Example Google sign-in */}
        <button
          onClick={() => signIn("google", { callbackUrl: "/" })}
          className="w-full rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
        >
          Sign in with Google
        </button>

        {/* Example GitHub sign-in */}
        <button
          onClick={() => signIn("github", { callbackUrl: "/" })}
          className="mt-3 w-full rounded-lg bg-gray-800 px-4 py-2 text-white hover:bg-gray-900"
        >
          Sign in with GitHub
        </button>

        {/* Add more providers if needed */}
      </div>
    </div>
  );
}
