"use client";

import Link from "next/link"
import Image from "next/image"
import { usePathname } from 'next/navigation'
import { useEffect, useState } from "react"
import { supabase } from '@/lib/supabaseClient';
import { useRouter } from "next/navigation";

export default function Sidebar() {
  const pathname = usePathname() || "/"
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
    <section className="sidebar">
        <h1>NEMT-APP</h1>
        <hr />
        <nav>
          <div>
            <Link href="/" className={pathname === "/" ? "active" : ""}>
              <Image src="/utils/admin/icons/home.svg" alt="MediRoutes" width={16} height={16} />
              <span>Home</span>
            </Link>
          </div>

          <div>
            <Link href="/data" className={pathname === "/data" ? "active" : ""}>
              <Image src="/utils/admin/icons/data.svg" alt="MediRoutes" width={16} height={16} />
              <span>Data</span>
            </Link>
          </div>

          <div>
            <Link href="/schedules" className={pathname === "/schedules" ? "active" : ""}>
                <Image src="/utils/admin/icons/schedules.svg" alt="MediRoutes" width={16} height={16} />
                <span>Schedules</span>
            </Link>
          </div>

          <div>
            <Link href="/dispatch" className={pathname === "/dispatch" ? "active" : ""}>
                <Image src="/utils/admin/icons/dispatch.svg" alt="MediRoutes" width={16} height={16} />
                <span>Dispatch</span>
            </Link>
          </div>

          <div>
            <Link href="/reports" className={pathname === "/reports" ? "active" : ""}>
                <Image src="/utils/admin/icons/reports.svg" alt="MediRoutes" width={16} height={16} />
                <span>Reports</span>
            </Link>
          </div>

          <div>
            <Link href="/admin" className={pathname === "/admin" ? "active" : ""}>
                <Image src="/utils/admin/icons/admin.svg" alt="MediRoutes" width={16} height={16} />
                <span>Admin</span>
            </Link>
          </div>

          <div>
            <Link href="/wheres-my-ride" className={pathname === "/wheres-my-ride" ? "active" : ""}>
                <Image src="/utils/admin/icons/wheresMyRide.svg" alt="MediRoutes" width={16} height={16} />
                <span>Where’s My Ride</span>
            </Link>
          </div>

        </nav>

    </section>
    }    
    </> 
  )
}
