"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { supabase } from '@/lib/supabaseClient';
import { useRouter } from 'next/navigation';
import Sidebar from "@/components/Sidebar";

export default function Home() {
  const router = useRouter();
  const [user, setUser] = useState(null);

  useEffect(() => {
    // check if the user is logged in with the user session supabase.auth.user()
    // if not, redirect to the login page
    const checkUser = async () => {
      const user = await supabase.auth.getUser();
      
      if (!user.data.user) {
        setUser(null);
        router.push('/signin');
      }
      else {
        setUser(user.data.user);
      }
    }
    checkUser();

    //cleanup
    return () => 0;
    
  },[router])

  const logoutFN = async () => {
    await supabase.auth.signOut();
    router.push('/signin');
  }
  
  return (
    <>
    {user && 
    <main>
      <Sidebar />
      
    </main>


    }
    </>
  );
}
