"use client"


import Link from "next/link"
import Image from "next/image"
import styles from "@/app/admin/globalAdminStyles.module.css"
import { Question,CaretDown } from "@phosphor-icons/react";

export default function Topnav() {
//   infinite error console.log(1)
  return (
    <section className={styles['topnav']}>

        <div>
            <p>Help</p>
            <Question size={24} color="#000000" />
        </div>
        <hr />
        <div>
            <Image src="/utils/admin/images/avatar.PNG" alt="avatar" width={32} height={32} />
            <div>
                <p>ramosrichard1120@gmail.com</p>
                <CaretDown size={24} />
            </div>
        </div>
    </section>
  )
}
