"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { supabase } from '@/lib/supabaseClient';
import { useRouter } from 'next/navigation';
import Topnav from "@/components/Topnav";
import { MagnifyingGlass, CaretDown, CalendarBlank, CaretLeft, CaretRight} from "@phosphor-icons/react";
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
      {/* sidebar */}
      
      

        {/* main section */}
        <div className="main-section" >
          {/* left section */}
          <section className="main-section-top">
            {/* main top left */}
            <div className="main-section-top_left" id="main-section-top_left--data-page">
              <div className="main-section-top_left_top">
                {/* search input */}
                <div className="input-container">
                  <span className="input-container-label">Search
                  </span>
                  <div className="input-container-with-icon">
                    <MagnifyingGlass size={16} weight="bold" />
                    <input type="text" placeholder="Search..." />
                  </div>
                </div>
                {/* main top left top right cta */}
                
              </div>
              <hr  className="mb-2 mt-2"/>

              <div>
                <h1 className="sm-heading">CUSTOMER LOOKUP</h1>
                
                <div className="where-is-my-ride-search-container mt-4">
                
                    <div className="input-container " id="input-container-ride">
                      <span className="input-container-label">Search Passenger By:
                      </span>
                      <div className="input-container-with-icon">
                        <MagnifyingGlass size={16} weight="bold" />
                        <input type="text" placeholder="Last Name, First Name" />
                      </div>
                    </div>

                    <div className="checkbox-container">
                            <input type="checkbox" name="no-label" id="no-label"/>
                            
                    </div>

                    
                </div>


              </div>

              <div className="mt-4">
                <h1 className="sm-heading">CUSTOMER LOOKUP</h1>
                
                <div className="where-is-my-ride-search-container mt-4">
      

                    <div className="checkbox-container">
                            <input type="checkbox" name="today" id="today"/>
                            <label for="today">Today</label>
                    </div>

                    <div className="checkbox-container">
                            <input type="checkbox" name="tomorrow" id="tomorrow"/>
                            <label for="tomorrow">Tomorrow</label>
                    </div>

                    
                </div>


              </div>



              </div>


          </section>



          
        </div>
    
    </main>


    }
    </>
  );
}
