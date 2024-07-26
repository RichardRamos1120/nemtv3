"use client"


import Link from "next/link"
import Image from "next/image"
import { useEffect, useState } from "react"
import { supabase } from '@/lib/supabaseClient';
import { useRouter } from "next/navigation";

import { Question,CaretDown, SignOut, CaretRight, Sliders} from "@phosphor-icons/react";

export default function Topnav() {
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



  return (
    <>
      {user && 
        <section className="topnav">
        <div>
            <p>Help</p>
            <Question size={24} color="#000000" />
        </div>
        <hr />
        <div>
            <Image className="sm-avatar" src="/utils/admin/images/avatar.PNG" alt="avatar" width={32} height={32} />
            <div className="top-nav-cta-dropdown">
                <p>ramosrichard1120@gmail.com</p>
                <CaretDown size={18} />
            </div>
        </div>
        <div className="dropdown-container">
        
          <div className="dropdown-container-item">
            <div>
            <div className="icon-circle-container">
                <Sliders size={20} weight="bold" />
              </div>
              <p>Item 1</p>
            </div>
            <CaretRight size={20} weight="bold" />
          </div>

          <div className="dropdown-container-item">
            <div>
            <div className="icon-circle-container">
                <Sliders size={20} weight="bold" />
              </div>
              <p>Item 2</p>
            </div>
            <CaretRight size={20} weight="bold" />
          </div>

          <div className="dropdown-container-item">
            <div>
            <div className="icon-circle-container">
                <Sliders size={20} weight="bold" />
              </div>
              <p>Item 3</p>
            </div>
            <CaretRight size={20} weight="bold" />
          </div>

          <div className="dropdown-container-item">
            <div>
            <div className="icon-circle-container">
                <SignOut size={20} weight="bold" />
              </div>
              <p>Log Out</p>
            </div>
            <CaretRight size={20} weight="bold" />
          </div>
          
        </div>


    </section>
      }
    </>
  )
}
