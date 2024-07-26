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
        <div className="main-section" id="main-section--data-page">
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

              <div className="tab-container-dispatch-page">
                <div className="tab-container">
                  <button className="tab-container-item tab-container-item--active">RUNS</button>
                  <button className="tab-container-item">SELECT</button>
                </div>

                <div className="tab-container-dispatch-page-right">
                  <div className="checkbox-container">
                          <input type="checkbox" name="canceled-run" id="canceled-run"/>
                          <label for="canceled-run">Show Canceled Runs</label>
                    </div>

                    <button className="primary-btn w--fit btn-with-icon btn-with-icon--blue">
                      <Image src="/utils/admin/icons/excel.svg" alt="excel" width={16} height={16} />
                      <span>EXPORT SCHEDULE</span>
                    </button>

                    <button className="primary-btn w--fit btn-with-icon btn-with-icon--purple">
                      <Image src="/utils/admin/icons/Template.svg" alt="refresh" width={16} height={16} />
                      <span>OVERVIEW</span>
                    </button>

                    <button className="primary-btn w--fit btn-with-icon btn-with-icon--green">
                      <Image src="/utils/admin/icons/recycle.svg" alt="refresh" width={16} height={16} />
                      <span>REFRESH</span>
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

            {/* table */}

            <div className="table-container">
            <table>
              <thead>
                  <tr>
                      <th class="checkbox-cell"><input type="checkbox" /></th>
                      <th>Date</th>
                      <th>From-to Time</th>
                      <th>Patient</th>
                      <th>Pickup Address</th>
                      <th>Drop-off</th>
                      <th>Space</th>
                      <th>Charge</th>
                      <th>Paid</th>
                      <th>Comment</th>
                      <th>Type</th>
                      <th>Pickup</th>
                      <th>Drop-off</th>
                      <th>Pickup Phone</th>
                      <th>Trip ID</th>
                      <th>Auth</th>
                      <th>Funding Source</th>
                      <th>Distance</th>
                      <th>Run</th>
                      <th>Other</th>
                      <th>Addl Pass</th>
                      <th>Caller</th>
                      <th>Created By</th>
                  </tr>
              </thead>
              <tbody>
                  <tr>
                      <td class="checkbox-cell"><input type="checkbox" /></td>
                      <td>2024-07-26</td>
                      <td className="text-bold-500">08:00-09:00</td>
                      <td>John Doe</td>
                      <td>123 Elm St</td>
                      <td>City Hospital</td>
                      <td>2</td>
                      <td>$50</td>
                      <td>Yes</td>
                      <td>None</td>
                      <td>Regular</td>
                      <td>08:00</td>
                      <td>09:00</td>
                      <td>(123) 456-7890</td>
                      <td>TRIP001</td>
                      <td>Auth1</td>
                      <td>Insurance</td>
                      <td>10 miles</td>
                      <td>Run1</td>
                      <td>None</td>
                      <td>0</td>
                      <td>Jane Smith</td>
                      <td>Admin</td>
                  </tr>
              
              </tbody>
            </table>
            </div>
            
    

            {/* table */}
            <div id="filter-search-container--schedule-page">
              <div className="filter-search-container">
                  <div className="input-container">
                    <span className="input-container-label">UNSCHEDULE LIST
                    </span>
                  </div>
                  <Image src="/utils/admin/icons/filter.svg" alt="filter" width={16} height={16} />
                  <Image src="/utils/admin/icons/download.svg" alt="download" width={16} height={16} />
   

              </div>

              <div className="filter-search-container" id="filter-search-container--schedule">
                    <div className="checkbox-container">
                          <input type="checkbox" name="will-calls" id="will-calls"/>
                          <label for="will-calls">Show Will Calls: 0 Will Calls</label>
                    </div>
                    <button className="primary-btn w--fit btn-with-icon btn-with-icon--red">
                      <Image src="/utils/admin/icons/Info.svg" alt="Info" width={16} height={16} />
                      <span>TRIP CHANGES</span>
                    </button>
              </div>
            </div>
            <div className="table-container">
            <table>
              <thead>
                  <tr>
                      <th class="checkbox-cell"><input type="checkbox" /></th>
                      <th>Date</th>
                      <th>From-to Time</th>
                      <th>Patient</th>
                      <th>Pickup Address</th>
                      <th>Drop-off</th>
                      <th>Space</th>
                      <th>Charge</th>
                      <th>Paid</th>
                      <th>Comment</th>
                      <th>Type</th>
                      <th>Pickup</th>
                      <th>Drop-off</th>
                      <th>Pickup Phone</th>
                      <th>Trip ID</th>
                      <th>Auth</th>
                      <th>Funding Source</th>
                      <th>Distance</th>
                      <th>Run</th>
                      <th>Other</th>
                      <th>Addl Pass</th>
                      <th>Caller</th>
                      <th>Created By</th>
                  </tr>
              </thead>
              <tbody>
                  <tr>
                      <td class="checkbox-cell"><input type="checkbox" /></td>
                      <td>2024-07-26</td>
                      <td className="text-bold-500">08:00-09:00</td>
                      <td>John Doe</td>
                      <td>123 Elm St</td>
                      <td>City Hospital</td>
                      <td>2</td>
                      <td>$50</td>
                      <td>Yes</td>
                      <td>None</td>
                      <td>Regular</td>
                      <td>08:00</td>
                      <td>09:00</td>
                      <td>(123) 456-7890</td>
                      <td>TRIP001</td>
                      <td>Auth1</td>
                      <td>Insurance</td>
                      <td>10 miles</td>
                      <td>Run1</td>
                      <td>None</td>
                      <td>0</td>
                      <td>Jane Smith</td>
                      <td>Admin</td>
                  </tr>
                  <tr>
                      <td class="checkbox-cell"><input type="checkbox" /></td>
                      <td>2024-07-26</td>
                      <td className="text-bold-500">10:00-11:00</td>
                      <td>Jane Smith</td>
                      <td>456 Oak St</td>
                      <td>Downtown Clinic</td>
                      <td>1</td>
                      <td>$40</td>
                      <td>No</td>
                      <td>Follow-up</td>
                      <td>Regular</td>
                      <td>10:00</td>
                      <td>11:00</td>
                      <td>(234) 567-8901</td>
                      <td>TRIP002</td>
                      <td>Auth2</td>
                      <td>Medicaid</td>
                      <td>5 miles</td>
                      <td>Run2</td>
                      <td>None</td>
                      <td>1</td>
                      <td>John Doe</td>
                      <td>Admin</td>
                  </tr>
                  <tr>
                      <td class="checkbox-cell"><input type="checkbox" /></td>
                      <td>2024-07-26</td>
                      <td className="text-bold-500">12:00-13:00</td>
                      <td>Bob Johnson</td>
                      <td>789 Pine St</td>
                      <td>General Hospital</td>
                      <td>3</td>
                      <td>$60</td>
                      <td>Yes</td>
                      <td>Urgent</td>
                      <td>Emergency</td>
                      <td>12:00</td>
                      <td>13:00</td>
                      <td>(345) 678-9012</td>
                      <td>TRIP003</td>
                      <td>Auth3</td>
                      <td>Medicare</td>
                      <td>15 miles</td>
                      <td>Run3</td>
                      <td>None</td>
                      <td>2</td>
                      <td>Jane Smith</td>
                      <td>Admin</td>
                  </tr>
                  <tr>
                      <td class="checkbox-cell"><input type="checkbox" /></td>
                      <td>2024-07-26</td>
                      <td className="text-bold-500">14:00-15:00</td>
                      <td>Alice Brown</td>
                      <td>321 Maple St</td>
                      <td>North Clinic</td>
                      <td>1</td>
                      <td>$55</td>
                      <td>No</td>
                      <td>Routine</td>
                      <td>Regular</td>
                      <td>14:00</td>
                      <td>15:00</td>
                      <td>(456) 789-0123</td>
                      <td>TRIP004</td>
                      <td>Auth4</td>
                      <td>Private</td>
                      <td>7 miles</td>
                      <td>Run4</td>
                      <td>None</td>
                      <td>0</td>
                      <td>Bob Johnson</td>
                      <td>Admin</td>
                  </tr>
              </tbody>
            </table>
            </div>
            {/* table  pagination*/}
            <div className="table-pagination">
              <div>
                <h4>Rows per page:</h4>
                <span>4</span>
                <CaretDown size={16} weight="fill"  />
              </div>

              <div>
                <h4>1-5 of 13</h4>
              </div>

              <div>
                <CaretLeft size={16} weight="bold"  />
                <CaretRight size={16} weight="bold"  />
              </div>


            </div>


          </section>

          
        </div>
      
    </main>


    }
    </>
  );
}
