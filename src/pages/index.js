import AnimatedText from "@/components/AnimatedText";
// import { HireMe } from "@/components/HireMe";
import { LinkArrow } from "@/components/Icons";
import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import ethLogo from "../../public/images/logos/ethereum.png";
import puzzle from "../../public/images/svgs/puzzle.svg";
import TransitionEffect from "@/components/TransitionEffect";


export default function Home() {
  
  return (
    <>
      <Head>
        <title>ETH Aragua | Inicio</title>
        <meta
          name="description"
          content="Explore ETH Aragua."
        />
      </Head>

      <TransitionEffect />
      <article
        className={`flex min-h-screen items-center text-dark dark:text-light sm:items-start`}
      >
        <Layout className="!pt-0 md:!pt-16 sm:!pt-16">
          <div className="flex items-start justify-between w-full md:flex-col">
            <div className="w-1/2 lg:hidden md:inline-block md:w-full">
              <Image
                src={puzzle}
                alt="ETHAragua"
                className="w-full h-auto "
                sizes="80vh"
                priority
              />
            </div>
            <div className="flex flex-col items-center self-center w-1/2 lg:w-full lg:text-center">
              <AnimatedText
                text="ETH Aragua"
                className="!text-left !text-6xl xl:!text-5xl lg:!text-center lg:!text-6xl md:!text-5xl sm:!text-3xl"
              />
              <p className="my-4 text-base font-medium md:text-sm sm:!text-xs">
              Explora, aprende y colabora con nosotros para construir un futuro más descentralizado y accesible para todos
              </p>
              <div className="flex items-center self-start mt-2 lg:self-center">
                <Link
                  // whileHover={{
                  //   cursor: `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='40' height='48' viewport='0 0 100 100' style='font-size:24px;'><text y='50%'>👆</text></svg>"), auto`,
                  // }}
                  // href="/dummy.pdf"
                  href="/about"
                  // target={"_blank"}
                  className={`flex items-center rounded-lg border-2 border-solid bg-dark p-2.5 px-6 text-lg font-semibold
             text-light hover:border-dark hover:bg-transparent hover:text-dark 
            dark:bg-light dark:text-dark dark:hover:border-light dark:hover:bg-dark dark:hover:text-light
            md:p-2 md:px-4 md:text-base
             `}
                  download
                >
                  Acerca de <LinkArrow className="ml-1 !w-6 md:!w-4" />
                </Link>

                <Link
                  href="mailto:etharagua@gmail.com"
                  className="ml-4 text-lg font-medium underline capitalize text-dark dark:text-light md:text-base"
                >
                  Contacto
                </Link>
              </div>
            </div>
          </div>
        </Layout>

        {/* <HireMe /> */}
        <div className="absolute inline-block w-24 right-8 bottom-8 md:hidden">
          <Image
            className="relative w-full h-auto"
            src={ethLogo}
            alt="ETHAragua"
          />
        </div>
      </article>
    </>
  );
}
