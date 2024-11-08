import Link from "next/link";
import React from "react";
import Layout from "./Layout";

const Footer = () => {
  return (
    <footer
      className="w-full text-lg font-medium border-t-2 border-solid border-dark dark:text-light dark:border-light sm:text-base "
    >
      <Layout className="flex items-center justify-center py-8 lg:flex-col lg:py-6">
        

        <div className="flex items-center lg:py-2">
          
            ETH Aragua | {new Date().getFullYear()} &copy;
          
        </div>

        {/* <Link
          href="https://aragua.org/about"
          target="_blank"
          className="underline underline-offset-2"
        >
          Salúdanos
        </Link> */}
      </Layout>
    </footer>
  );
};

export default Footer;
