"use client"


import Link from "next/link"
import Image from "next/image"

import { Question,CaretDown, SignOut, CaretRight, Sliders} from "@phosphor-icons/react";

export default function Topnav() {
//   infinite error console.log(1)
  return (
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
  )
}
