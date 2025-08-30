"use client";

import { useSession, signOut } from "next-auth/react";
import Header from '@/app/ui/header';

export default function HeaderWrapper() {
  const { data: session } = useSession();
  const isSignedIn = !!session;

  return (
    <Header
      title="The Big Conversation"
      isSignedIn={isSignedIn}
      onSignOut={() => signOut({ callbackUrl: "/" })}
    />
  );
}
