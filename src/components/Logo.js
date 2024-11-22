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
    className='flex items-center justify-center w-16 h-16 text-2xl font-bold text-white bg-black rounded-full dark:border-2 dark:border-solid dark:border-light'
    whileHover={{
        backgroundColor:["transparent"],
        scale:[1.2]
      }}
    whileTap={{
      backgroundColor:["transparent"],
      scale:[1.2]
    }}
    whileInView={{
      backgroundColor:["#121212",  "rgba(131,58,180,1)","rgba(253,29,29,1)","rgba(252,176,69,1)","rgba(131,58,180,1)","#121212"],
      transition:{duration:3, repeat: Infinity },
      scale:[1]
    }}
    // whileHover={{
    //   // backgroundColor:["#FE0024"],
    //   backgroundColor:["#121212",  "rgba(131,58,180,1)","rgba(253,29,29,1)","rgba(252,176,69,1)","rgba(131,58,180,1)","#121212", "000000"],
    //   // padding:"10px",
    //   transition:{duration:1, repeat: Infinity },
    // }}
      // onHoverEnd={{backgroundColor:["#FE0024"]}}

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