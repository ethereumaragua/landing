import Link from "next/link";
import React, { useState } from "react";
import Logo from "./Logo";
import { useRouter } from "next/router";
import {
  DribbbleIcon,
  GithubIcon,
  LinkedInIcon,
  MoonIcon,
  PinterestIcon,
  SunIcon,
  TwitterIcon
} from "./Icons";
import { FaGithub, FaTelegram, FaTwitter } from "react-icons/fa";
import { motion } from "framer-motion";
import { useThemeSwitch } from "./Hooks/useThemeSwitch";

const CustomLink = ({ href, title, className = "" }) => {
  const router = useRouter();

  return (
    <Link href={href} className={`${className}  rounded relative group lg:text-light lg:dark:text-dark`}>
      {title}
      <span
        className={`
              inline-block h-[1px]  bg-dark absolute left-0 -bottom-0.5 
              group-hover:w-full transition-[width] ease duration-300 dark:bg-light
              ${router.asPath === href ? "w-full" : " w-0"} lg:bg-light lg:dark:bg-dark
              `}
      >
        &nbsp;
      </span>
    </Link>
  );
};

const CustomMobileLink = ({ href, title, className = "", toggle }) => {
  const router = useRouter();

  const handleClick = () =>{
    toggle();
    router.push(href) 
  }

  return (
    <button className={`${className}  rounded relative group lg:text-light lg:dark:text-dark`} onClick={handleClick}>
      {title}
      <span
        className={`
              inline-block h-[1px]  bg-dark absolute left-0 -bottom-0.5 
              group-hover:w-full transition-[width] ease duration-300 dark:bg-light
              ${router.asPath === href ? "w-full" : " w-0"} lg:bg-light lg:dark:bg-dark
              `}
      >
        &nbsp;
      </span>
    </button>
  );
};



const Navbar = () => {
  const [mode, setMode] = useThemeSwitch();
    const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };



  return (
    <header className="relative z-10 flex items-center justify-between w-full px-32 py-8 font-medium dark:text-light lg:px-16 z-1 md:px-12 sm:px-8 ">
      
      <button
        type="button"
        className="flex-col items-center justify-center hidden lg:flex"
        aria-controls="mobile-menu"
        aria-expanded={isOpen}
        onClick={handleClick}
      >
        <span className="sr-only">Abrir menu principal</span>
        <span className={`bg-dark dark:bg-light block h-0.5 w-6 rounded-sm transition-all duration-300 ease-out ${isOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'}`}></span>
        <span className={`bg-dark dark:bg-light block h-0.5 w-6 rounded-sm transition-all duration-300 ease-out ${isOpen ? 'opacity-0' : 'opacity-100'} my-0.5`}></span>
        <span className={`bg-dark dark:bg-light block h-0.5 w-6 rounded-sm transition-all duration-300 ease-out ${isOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'}`}></span>
      </button>

      <div className="flex items-center justify-between w-full lg:hidden"
      >
      <nav className="flex items-center justify-center">
        <CustomLink className="mr-4" href="/" title="Inicio" />
        <CustomLink className="mx-4" href="/about" title="Acerca de" />
        <CustomLink className="mx-4" href="/projects" title="Proyectos" />
        <CustomLink className="ml-4" href="/articles" title="Artículos" />
      </nav>
      <nav
        className="flex flex-wrap items-center justify-center lg:mt-2 "
      >
        <motion.a
          target={"_blank"}
          className="w-6 mr-1"
          href="https://twitter.com/etharagua"
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.9 }}
          aria-label="Mi perfil de twitter"
        >
          <FaTwitter color="#55ACEE" size={"1.6em"}/>
        </motion.a>
        <motion.a
          target={"_blank"}
          className="w-6 mx-3"
          href="https://github.com/etharagua"
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.9 }}
          aria-label="Mi perfil de github"
        >
          <FaGithub size={"1.6em"}/>
        </motion.a>
        <motion.a
          target={"_blank"}
          className="w-6 m-1 mr-3 sm:mx-1"
          href="https://t.me/etharagua"
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.9 }}
          aria-label="Mi perfil de telegram"
        >
          <FaTelegram color="#55ACEE" size={"1.6em"} className="bg-white rounded-full "/>
        </motion.a>
        {/* <motion.a
          target={"_blank"}
          className="w-6 mx-3"
          href="#"
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.9 }}
          aria-label="Mi perfil de linkedin"
        >
          <LinkedInIcon />
        </motion.a> */}
        {/* <motion.a
          target={"_blank"}
          className="w-6 mx-3 rounded-full bg-light"
          href="#"
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.9 }}
          aria-label="Mi perfil de pinterest"
        >
          <PinterestIcon />
        </motion.a> */}
        {/* <motion.a
          target={"_blank"}
          className="w-6 mx-3"
          href="#"
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.9 }}
          aria-label="Mi perfil de dribbble"
        >
          <DribbbleIcon />
        </motion.a> */}

        <button
          onClick={() => setMode(mode === "light" ? "dark" : "light")}
          className={`w-6 h-6 ease ml-6 flex items-center justify-center rounded-full p-1  
            ${mode === "light" ? "bg-dark  text-light" : "bg-light  text-dark"}
            `}
          aria-label="theme-switcher"
        >
          {mode === "light" ? (
            <SunIcon className={"fill-dark"} />
          ) : (
            <MoonIcon className={"fill-dark"} />
          )}
        </button>
      </nav>
      </div>
    {
      isOpen ? 

      <motion.div className="min-w-[70vw] sm:min-w-[90vw] flex justify-between items-center flex-col fixed top-1/2 left-1/2 -translate-x-1/2
      -translate-y-1/2
      py-32 bg-dark/90 dark:bg-light/75 rounded-lg z-50 backdrop-blur-md
      "
      initial={{scale:0,x:"-50%",y:"-50%", opacity:0}}
      animate={{scale:1,opacity:1}}
      >
      <nav className="flex flex-col items-center justify-center">
        <CustomMobileLink toggle={handleClick} className="mr-4 lg:m-0 lg:my-2" href="/" title="Inicio" />
        <CustomMobileLink toggle={handleClick} className="mx-4 lg:m-0 lg:my-2" href="/about" title="Acerca de" />
        <CustomMobileLink toggle={handleClick} className="mx-4 lg:m-0 lg:my-2" href="/projects" title="Proyectos" />
        <CustomMobileLink toggle={handleClick} className="ml-4 lg:m-0 lg:my-2" href="/articles" title="Artículos" />
      </nav>
      <nav
        className="flex items-center justify-center mt-2 "
      >
        <motion.a
          target={"_blank"}
          className="w-6 mr-1"
          href="https://twitter.com/etharagua"
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.9 }}
          aria-label="Mi perfil de twitter"
        >
          <FaTwitter color="#55ACEE" size={"1.6em"}/>
        </motion.a>
        <motion.a
          target={"_blank"}
          className="w-6 m-1 mx-3 rounded-full bg-light dark:bg-dark sm:mx-1"
          href="https://github.com/etharagua"
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.9 }}
          aria-label="Mi perfil de github"
        >
          <FaGithub size={"1.6em"}/>
        </motion.a>
        <motion.a
          target={"_blank"}
          className="w-6 m-1 mr-3 sm:mx-1"
          href="https://t.me/etharagua"
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.9 }}
          aria-label="Mi perfil de telegram"
        >
          <FaTelegram color="#55ACEE" size={"1.6em"} className="bg-white rounded-full"/>
        </motion.a>
        {/* <motion.a
          target={"_blank"}
          className="w-6 m-1 mx-3 sm:mx-1"
          href="#"
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.9 }}
          aria-label="Mi perfil de linkedin"
        >
          <LinkedInIcon />
        </motion.a>
        <motion.a
          target={"_blank"}
          className="w-6 m-1 mx-3 rounded-full bg-light sm:mx-1"
          href="#"
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.9 }}
          aria-label="Mi perfil de pinterest"
        >
          <PinterestIcon />
        </motion.a>
        <motion.a
          target={"_blank"}
          className="w-6 m-1 mx-3 sm:mx-1"
          href="#"
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.9 }}
          aria-label="Mi perfil de dribbble"
        >
          <DribbbleIcon />
        </motion.a> */}

        <button
          onClick={() => setMode(mode === "light" ? "dark" : "light")}
          className={`w-6 h-6 ease m-1 ml-6 sm:mx-1 flex items-center justify-center rounded-full p-1  
            ${mode === "light" ? "bg-dark  text-light" : "bg-light  text-dark"}
            `}
          aria-label="theme-switcher"
        >
          {mode === "light" ? (
            <SunIcon className={"fill-dark"} />
          ) : (
            <MoonIcon className={"fill-dark"} />
          )}
        </button>
      </nav>
      </motion.div>

      : null
    }

      <div className="absolute left-[50%] top-2 translate-x-[-50%] ">
        <Logo />
      </div>
    </header>
  );
};

export default Navbar;
