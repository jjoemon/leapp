"use client";
//NOTE: What's the point of the header-wrapper? 
// I suppose it can be used to change the subtitle depending on the page?
      
import { useSession, signOut } from "next-auth/react";
import Header from '@/app/components/ui/header';

export default function HeaderWrapper() {
  const { data: session } = useSession();
  
  //const isSignedIn = !!session; //why the !!?

  return (
    <Header
     
    
    //title="Arguments and evidence"          
      // //Consider removing
     // isSignedIn={isSignedIn} //not used in header?
     // onSignOut={() => signOut({ callbackUrl: "/" })}
    />
  );
}
