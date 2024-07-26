"use client";

import Link from "next/link"
import Image from "next/image"
import { usePathname } from 'next/navigation'
import { useEffect } from "react"

export default function Sidebar() {
  
  const pathname = usePathname() || "/"
  



  return (
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
  )
}
