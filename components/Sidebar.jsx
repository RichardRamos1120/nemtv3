import Link from "next/link"
import Image from "next/image"

export default function Sidebar() {
  return (
    <section className="sidebar">
        <h1>NEMT</h1>
        <hr />
        <nav>
          <div>
            <Link href="/admin" className="active">
              <Image src="/utils/admin/icons/home.svg" alt="MediRoutes" width={16} height={16} />
              <span>Home</span>
            </Link>
          </div>

          <div>
            <Link href="/data">
              <Image src="/utils/admin/icons/data.svg" alt="MediRoutes" width={16} height={16} />
              <span>Data</span>
            </Link>
          </div>

          <div>
            <Link href="/schedules">
                <Image src="/utils/admin/icons/schedules.svg" alt="MediRoutes" width={16} height={16} />
                <span>Schedules</span>
            </Link>
          </div>

          <div>
            <Link href="/dispatch">
                <Image src="/utils/admin/icons/dispatch.svg" alt="MediRoutes" width={16} height={16} />
                <span>Dispatch</span>
            </Link>
          </div>

          <div>
            <Link href="/reports">
                <Image src="/utils/admin/icons/reports.svg" alt="MediRoutes" width={16} height={16} />
                <span>Reports</span>
            </Link>
          </div>

          <div>
            <Link href="/admin">
                <Image src="/utils/admin/icons/admin.svg" alt="MediRoutes" width={16} height={16} />
                <span>Admin</span>
            </Link>
          </div>

          <div>
            <Link href="/wheres-my-ride">
                <Image src="/utils/admin/icons/wheresMyRide.svg" alt="MediRoutes" width={16} height={16} />
                <span>Where’s My Ride</span>
            </Link>
          </div>

        </nav>

      </section>
  )
}
