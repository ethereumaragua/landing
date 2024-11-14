import { motion } from 'framer-motion'
import Link from 'next/link'
import React from 'react'
import Image from "next/image";
import ethLogo from "/public/favicon.ico";
import { Tooltip } from "react-tooltip";


let MotionLink = motion(Link);

const Logo = () => {

  return (
    <div
     className='flex flex-col items-center justify-center mt-2'>
        <MotionLink href="/" 
    className='flex items-center justify-center w-16 h-16 text-2xl font-bold text-white rounded-full bg-dark dark:border-2 dark:border-solid dark:border-light'
    whileHover={{
      backgroundColor:["#121212", "rgba(131,58,180,1)","rgba(253,29,29,1)","rgba(252,176,69,1)","rgba(131,58,180,1)", "#121212"],
      transition:{duration:1, repeat: Infinity }
    }}
    ><Image
    src={ethLogo}
    alt="ETH Aragua"
    className="w-5/6 h-auto"
    sizes="33vw"
    priority
    data-tooltip-id={"logo"}
    data-tooltip-content={"Inicio"}
    data-tooltip-place="bottom"
    data-tooltip-position-strategy="fixed"
  /></MotionLink>
  <Tooltip id={"logo"} style={{ zIndex: 100, maxWidth: "250px" }} className="dark:text-dark dark:bg-light" />
    </div>
  )
}

export default Logo