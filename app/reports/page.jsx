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
      
        {/* main section */}
        <div className="main-section" id="main-section--report-page">
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
              {/* main-section-top_left_top three columns  */}

            
              <div className="report-form-field">
                <h4 className="sm-heading mb-2">From</h4>
                <div className="report-form-field-div">
                  
                  
                  <div className="input-container report-form-field-div-item1">
                    <div className="input-container-with-icon">
                      <input type="text" placeholder="Select a Date" />
                      <CalendarBlank size={16} weight="bold" />
                    </div>
                  </div>

                  <div className="input-container report-form-field-div-item2">
                    <div className="input-container-with-icon">
                      <input type="text" placeholder="Funding Source" />
                      <CaretDown size={16} weight="bold" />
                    </div>
                  </div>

                  <div className="checkbox-container">
                        <input type="checkbox" name="all1" id="all1"/>
                        <label for="all1">All</label>
                  </div>

                  <div className="input-container-with-icon report-form-field-div-item3">
                      <input type="text" placeholder="Employee" />
                      <CalendarBlank size={16} weight="bold" />
                    </div>
                
                    <div className="checkbox-container">
                        <input type="checkbox" name="all2" id="all2"/>
                        <label for="all2">All</label>
                  </div>

                  
                  <div className="input-container report-form-field-div-item4">
                  <span>Search Passenger By:</span>
                    <div className="input-container-with-icon">
                      <MagnifyingGlass size={16} weight="bold" />
                      <input type="text" placeholder="Employee" />
                
                    </div>
                  </div>
                  
              
                </div>
                
              </div>


              <div className="report-form-field">
                <h4 className="sm-heading mb-2">To</h4>
                <div className="report-form-field-div">
                  
                  
                  <div className="input-container report-form-field-div-item1">
                    <div className="input-container-with-icon">
                      <input type="text" placeholder="Select a Date" />
                      <CalendarBlank size={16} weight="bold" />
                    </div>
                  </div>

                  <div className="input-container report-form-field-div-item2">
                    <div className="input-container-with-icon">
                      <input type="text" placeholder="Vehicle" />
                      <CaretDown size={16} weight="bold" />
                    </div>
                  </div>

                  <div className="checkbox-container">
                        <input type="checkbox" name="all1-2" id="all1-2"/>
                        <label for="all1-2">All</label>
                  </div>

                  <div className="input-container-with-icon report-form-field-div-item3">
                      <input type="text" placeholder="Run" />
                      <CalendarBlank size={16} weight="bold" />
                    </div>
                
                    <div className="checkbox-container">
                        <input type="checkbox" name="all2-2" id="all2-2"/>
                        <label for="all2-2">All</label>
                    </div>

                  
                  <div className="input-container report-form-field-div-item4">
                  <span>Search Passenger By:</span>
                    <div className="input-container-with-icon">
                      <MagnifyingGlass size={16} weight="bold" />
                      <input type="text" placeholder="Employee" />
                
                    </div>
                  </div>
                  
                  <div className="checkbox-container">
                        <input type="checkbox" name="all2-2" id="all2-2"/>
                        <label for="all2-2">No Label</label>
                    </div>

                  <button className="primary-btn w--fit btn-with-icon btn-with-icon--blue">
                      <Image src="/utils/admin/icons/excel.svg" alt="excel" width={16} height={16} />
                      <span>GET REPORT</span>
                    </button>

                    <button className="primary-btn w--fit btn-with-icon btn-with-icon--green">
                      <Image src="/utils/admin/icons/Printer.svg" alt="Printer" width={16} height={16} />
                      <span>PRINT</span>
                    </button>

                  
              
                </div>
                
              </div>

              

              {/* Trip charge container end*/}
            </div>

            {/* main top right */}
            {/* <div className="main-section-top_right">
              
            </div> */}

          </section>


          <section className="main-section-bottom">

    
          </section>

          
        </div>
      
    </main>


    }
    </>
  );
}
