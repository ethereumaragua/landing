import { motion } from 'framer-motion'
import Link from 'next/link'
import React from 'react'
import Image from "next/image";
import ethLogo from "/public/logo.png";
import { Tooltip } from "react-tooltip";


let MotionLink = motion(Link);

const Logo = () => {

  return (
    <div
     className='flex flex-col items-center justify-center mt-2'>
        <MotionLink href="https://ethereum.org/" target='_blank' 
    className='flex items-center justify-center w-16 h-16 text-2xl font-bold text-white rounded-full bg-[#FE0024] dark:border-2 dark:border-solid dark:border-light'
    whileInView={{
      backgroundColor:["#121212",  "rgba(131,58,180,1)","rgba(253,29,29,1)","#FE0024","rgba(252,176,69,1)","rgba(131,58,180,1)","#121212"],
      // backgroundColor:["#fefa00","#007bfe", "#FE0024", "000000", "#fefa00","#007bfe", "#FE0024", "000000"],
      transition:{duration:3, repeat: Infinity }
    }}
    whileHover={{
      backgroundColor:["#FE0024"],
      padding:"10px",
    }}
    ><Image
    src={ethLogo}
    alt="ethereum.org"
    className="w-5/6 h-auto"
    sizes="33vw"
    priority
    data-tooltip-id={"logo"}
    data-tooltip-content={"ethereum.org"}
    data-tooltip-place="bottom"
    data-tooltip-position-strategy="fixed"
  /></MotionLink>
  <Tooltip id={"logo"} style={{ zIndex: 100, maxWidth: "250px" }} className="dark:text-dark dark:bg-light" />
    </div>
  )
}

export default Logo