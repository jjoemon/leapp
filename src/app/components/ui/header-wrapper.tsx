"use client";

import { useSession, signOut } from "next-auth/react";
import Header from '@/app/components/ui/header';

export default function HeaderWrapper() {
  const { data: session } = useSession();
  const isSignedIn = !!session; //why the !!?

  return (
    <Header
      title="Games & Learning"
      isSignedIn={isSignedIn} //not used in header?
      onSignOut={() => signOut({ callbackUrl: "/" })}
    />
  );
}
