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
        <div className="main-section">
          {/* left section */}
          <section className="main-section-top">
            {/* main top left */}
            <div className="main-section-top_left">
              <div className="main-section-top_left_top">
                {/* search input */}
                <div className="input-container">
                  <span className="input-container-label">Search Passenger by:
                  </span>
                  <div className="input-container-with-icon">
                    <MagnifyingGlass size={16} weight="bold" />
                    <input type="text" placeholder="Search Name, Client, or Phone Number" />
                  </div>
                </div>
                {/* main top left top right cta */}
                <div className="icon-cta-container">
                <Image src="/utils/admin/icons/save.svg" alt="MediRoutes" width={16} height={16} />
                <Image src="/utils/admin/icons/addUser.svg" alt="MediRoutes" width={16} height={16} />
                </div>
              </div>
              <hr  className="mb-2 mt-2"/>
              {/* main-section-top_left_top three columns  */}
              <div className="three-columns-container">
                {/* first column */}
                <div className="three-columns-container--first">
                  {/* text-area */}
                  <div className="text-area-with-label">
                    <span className="text-area-label">Private Comment</span>
                    <textarea placeholder="Private Comment"></textarea>
                  </div>

                  {/* text-area with icon & checkbox */}
                  <div className="text-area-with-label text-area-with-label--with-alert">
                    <div className="text-area-label-container">
                      <span className="text-area-label">Comment</span>
                      <div className="checkbox-container">
                        <input type="checkbox" name="comment-alert" id="comment-alert"/>
                        <label for="comment-alert">Alert</label>
                      </div>
                    </div>
                    <textarea placeholder="Comment"></textarea>
                  </div>
                </div>
                {/* second column */}
                <div className="three-columns-container--second">
                    <h4 className="sm-heading">
                      PASSENGER DETAILS
                    </h4>
                    
                    <div className="three-columns-container--div">
                      <div className="input-text-container input-text-container--name">
                        <input type="text" placeholder="First Name"/>
                      </div>

                      <div className="input-text-container input-text-container--last-name">
                        <input type="text" placeholder="Last Name"/>
                      </div>

                      <div className="input-text-container input-text-container--mi">
                        <input type="text" placeholder="MI"/>
                      </div>
                    </div>

                    <div className="three-columns-container--div">
                      <div className="input-text-container">
                        <input type="text" placeholder="Telephone"/>
                      </div>

                      <div className="input-text-container">
                        <input type="text" placeholder="Mobile Number"/>
                      </div>



                    </div>

                    <div className="three-columns-container--div justify--start">
                    
                      <div className="input-container-with-icon input-text-container--birthdate">
                          <input type="text" placeholder="Birth of Date" />
                          <CalendarBlank size={16} weight="bold" />
                      </div>

                      <div className="input-radio-container">
                        
                        <input type="radio" id="male" name="gender" value="male" />
                        <label for="male">Male</label>

                        <input type="radio" id="female" name="gender" value="female" />
                        <label for="female">Female</label>  
                        
                      </div>

                    </div>

                    <div className="three-columns-container--div">
                      <div className="input-text-container">
                        <input type="text" placeholder="Common Location Lookup"/>
                      </div>
                    </div>

                    <div className="three-columns-container--div">
                      <div className="input-text-container">
                        <input type="text" placeholder="Address 1"/>
                      </div>
                    </div>

                    <div className="three-columns-container--div">
                      <div className="input-text-container input-text-container--city">
                        <input type="text" placeholder="City"/>
                      </div>
                      <div className="input-text-container input-text-container--state" >
                        <input type="text" placeholder="State"/>
                      </div>
                      <div className="input-text-container input-text-container--zip">
                        <input type="text" placeholder="Zip"/>
                      </div>
                    </div>

                </div>
                {/* third column */}
                <div className="three-columns-container--third">
                <h4 className="sm-heading">
                      CLIENT CODE
                    </h4>
                    
                    <div className="three-columns-container--div">
                      <div className="input-text-container input-text-container--name">
                        <input type="text" placeholder="Client Code"/>
                      </div>
                    </div>

                    <div className="three-columns-container--div">
                      <div className="input-container-with-icon">
                      <input type="text" placeholder="Space Type" />
                      <CaretDown size={16} weight="bold" />
                      </div>
                    </div>

                    <div className="three-columns-container--div">
                      <div className="input-container-with-icon">
                      <input type="text" placeholder="Funding Source" />
                      <CaretDown size={16} weight="bold" />
                      </div>
                    </div>
                    
                    <div className="three-columns-container--div-row">
                      <h4 className="sm-heading">ISSUE DATES & AUTH</h4>
                      <div className="three-columns-container--div">
                        
                        <div className="input-container-with-icon">
                          <input type="text" placeholder="Start" />
                          <CaretDown size={16} weight="bold" />
                        </div>
                        <div className="input-container-with-icon">
                          <input type="text" placeholder="End" />
                          <CaretDown size={16} weight="bold" />
                        </div>
                      </div>
                    </div>

                </div>
              </div>
              {/* main-section-top_left_top three columns  end*/}
              
              {/* Trip charge container */}

              <div className="trip-charge-container ">

                <div>
                  <div className="flex items-center gap-2">
                    <span className="sm-heading">For: </span>
                    <div className="trip-charge-container--div trip-charge-container--div--set-date">
                      <div className="input-container-with-icon">
                        <input type="text" placeholder="Set Date" />
                        <CalendarBlank size={16} weight="bold" />
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <div className="checkbox-container">
                      <input type="checkbox" name="auto-refresh" id="auto-refresh"/>
                      <label for="auto-refresh">Auto Refresh</label>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <div className="trip-charge-container--div">
                      <div className="input-container-with-icon">
                        <input type="text" placeholder="Both" />
                        <CaretDown size={16} weight="bold" />
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <div className="trip-charge-container--div">
                      <div className="input-container-with-icon">
                        <MagnifyingGlass size={16} weight="bold" />
                        <input type="text" placeholder="Authentication Number" />
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <button className="primary-btn">Trip Charges</button>
                  </div>
                </div>

                <div>
                  <h4 className="sm-heading">0 trips $0 charges $0 paid</h4>

                  <div className="trip-charge-cta">
                    <div className="checkbox-container">
                      <input type="checkbox" name="Customer" id="Customer"/>
                      <label for="Customer">Customer</label>
                    </div>
                    <div className="checkbox-container">
                      <input type="checkbox" name="show-canceled" id="show-canceled"/>
                      <label for="show-canceled">Show Canceled</label>
                    </div>

                    <Image src="/utils/admin/icons/file.svg" alt="File" width={16} height={16} />
                    <Image src="/utils/admin/icons/browser.svg" alt="Browser" width={16} height={16} />
                    <Image src="/utils/admin/icons/excel.svg" alt="Excel" width={16} height={16} />
                    <Image src="/utils/admin/icons/Calendar.svg" alt="Calendar" width={16} height={16} />
                  </div>

                </div>
                
              </div>

              {/* Trip charge container end*/}
            </div>

            {/* main top right */}
            <div className="main-section-top_right">
              {/* map */}
              <iframe width="100%" height="100%" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=300&amp;hl=en&amp;q=Google, 8th Avenue, New York, NY, USA&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>
            </div>
          </section>





          <section className="main-section-bottom mt-8">
            <div className="filter-search-container">
                <div className="input-container">
                  <span className="input-container-label">Table List
                  </span>
                  <div className="input-container-with-icon">
                    <MagnifyingGlass size={16} weight="bold" />
                    <input type="text" placeholder="Search Name, Client, or Phone Number" />
                  </div>
                </div>
                <Image src="/utils/admin/icons/filter.svg" alt="Excel" width={16} height={16} />
                <Image src="/utils/admin/icons/download.svg" alt="Calendar" width={16} height={16} />
            </div>

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
