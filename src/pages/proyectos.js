import AnimatedText from "@/components/AnimatedText";
import { GithubIcon } from "@/components/Icons";
import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import proj1 from "../../public/images/projects/faucet.jpg";
import proj2 from "../../public/images/projects/smarthire.png";
import proj3 from "../../public/images/projects/proj3.jpg";
// import proj4 from "../../public/images/projects/portfolio-cover-image.jpg";
// import proj5 from "../../public/images/projects/agency-website-cover-image.jpg";
// import proj6 from "../../public/images/projects/devdreaming.jpg";
import TransitionEffect from "@/components/TransitionEffect";

const FramerImage = motion(Image);

export const FeaturedProject = ({ type, title, summary, img, link, github }) => {

  return (
    <article
      className="relative flex items-center justify-between w-full p-12 border border-solid shadow-2xl rounded-3xl rounded-br-2xl border-dark bg-light dark:border-light dark:bg-dark lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4 "
    >
      <div
        className="absolute  top-0 -right-3 -z-10 h-[103%] w-[101%] rounded-[2.5rem] rounded-br-3xl bg-dark
         dark:bg-light  xs:-right-2 xs:h-[102%] xs:w-[100%]
        xs:rounded-[1.5rem] "
      />

      <Link
        href={link}
        target={"_blank"}
        className="w-1/2 overflow-hidden rounded-lg cursor-pointer lg:w-full"
      >
        <FramerImage
          src={img}
          className="w-full h-auto"
          alt={title}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 90vw,
              80vw"
          priority
        />
      </Link>
      <div className="flex flex-col items-start justify-between w-1/2 pl-6 lg:w-full lg:pl-0 lg:pt-6">
        <span className="text-xl font-medium text-primary dark:text-primaryDark xs:text-base">
          {type}
        </span>
        <Link
          href={link}
          target={"_blank"}
          className="underline-offset-2 hover:underline"
        >
          <h2 className="w-full my-2 text-4xl font-bold text-left lg:text-3xl xs:text-2xl">
            {title}
          </h2>
        </Link>
        <p className="my-2 font-medium rounded-md text-dark dark:text-light sm:text-sm">
          {summary}
        </p>
        <div className="flex items-center w-full mt-2 sm:justify-between justify-normal">
          <Link
            href={github}
            target={"_blank"}
            className="w-10"
            aria-label="Faucet Multichain github link"
          >
            <GithubIcon />
          </Link>
          <Link
            href={link}
            target={"_blank"}
            className="p-2 px-6 ml-4 text-lg font-semibold rounded-lg bg-dark text-light dark:bg-light dark:text-dark sm:px-4 sm:text-base "
            aria-label="Faucet Multichain"
          >
            Visitar Proyecto
          </Link>
        </div>
      </div>
    </article>
  );
};

const Project = ({ title, type, img, link, github, summary }) => {

  return (
    <article
      className="relative flex flex-col items-center justify-center w-full p-6 border border-solid shadow-2xl rounded-2xl rounded-br-2xl border-dark bg-light dark:border-light dark:bg-dark xs:p-4 "
    >
      <div
        className="absolute  top-0 -right-3 -z-10 h-[103%] w-[102%] rounded-[2rem] rounded-br-3xl bg-dark
         dark:bg-light  md:-right-2 md:w-[101%] xs:h-[102%]
        xs:rounded-[1.5rem]  "
      />

      <Link
        href={link}
        target={"_blank"}
        className="w-full overflow-hidden rounded-lg cursor-pointer"
      >
        <FramerImage
          src={img}
          alt={title}
          className="w-full h-auto"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
        />
      </Link>
      <div className="flex flex-col items-start justify-between w-full mt-4">
        <span className="text-xl font-medium text-primary dark:text-primaryDark lg:text-lg md:text-base">
          {type}
        </span>

        <Link
          href={link}
          target={"_blank"}
          className="underline-offset-2 hover:underline"
        >
          <h2 className="w-full my-2 text-3xl font-bold text-left lg:text-2xl ">
            {title}
          </h2>
        </Link>

        <p className="my-2 font-medium rounded-md text-dark dark:text-light sm:text-sm">
          {summary}
        </p>

        <div className="flex items-center justify-between w-full mt-1">
          <Link
            href={link}
            target={"_blank"}
            className="p-2 px-6 text-lg font-semibold rounded-lg bg-dark text-light dark:bg-light dark:text-dark sm:px-4 sm:text-base"
            aria-label={title}
          >
            Visitar Proyecto
          </Link>
          <Link
            href={github}
            target={"_blank"}
            className="w-10 md:w-10"
            aria-label={title}
          >
            <GithubIcon />
          </Link>
        </div>
      </div>
    </article>
  );
};

export default function Projects() {
  return (
    <>
      <Head>
        <title>ETH Aragua | Proyectos</title>
        <meta
          name="description"
          content="Discover the latest projects created by ETH Aragua."
        />
      </Head>

      <TransitionEffect />
      <main
        className={`mb-16  flex w-full flex-col items-center justify-center dark:text-light`}
      >
        <Layout className="pt-16">
          <AnimatedText
            text="Crea, colabora, emprende!"
            className="mb-16 !text-8xl !leading-tight lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl"
          />
          <div className="grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0">
            <div className="col-span-12">
              <FeaturedProject
                type="Aprendizaje, Desarrollo"
                title="Faucet Multichain"
                summary="Un faucet de redes de prueba es un servicio que te proporciona pequeñas cantidades de criptomonedas de forma gratuita. Estas criptomonedas no tienen valor real, pero te permiten experimentar con la tecnología y familiarizarte con el funcionamiento de una blockchain."
                img={proj1}
                link="https://faucet.aragua.org"
                github="https://github.com/ethereumaragua/faucet"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                type="(Hackathon) DAO, Governanza"
                title="SmartHire"
                summary="DApp de gobernanza diseñada para DAOs, orientada a automatizar el proceso de contratación digital, la creación y asignación de bounties y la ejecución de tareas."
                img={proj2}
                link="https://smart-hire-2.vercel.app/"
                github="https://github.com/ethereumaragua/SmartHire"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                type="(Hackathon) DeFi & RWA"
                title="Tokenización de Activos Inmobiliarios"
                summary="Plataforma que facilita la participación de inversionistas mediante la compra de tokens digitales que representan fracciones de inmuebles."
                img={proj3}
                link="https://devpost.com/software/tokenizacion-de-activos-inmobiliarios"
                github="https://github.com/garciadervin/TokenDApp"
              />
            </div>
            {/*<div className="col-span-12">
              <FeaturedProject
                type="Portfolio Website"
                title="React Portfolio Website"
                summary="A professional portfolio website using React JS, Framer-motion, and Styled-components. It has smooth page transitions, cool background effects, unique design and it is mobile responsive."
                img={proj4}
                link="https://aragua.org/videos/build-stunning-portfolio-website-react-js-framer-motion"
                github="https://github.com/ethereumaragua"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                type="Website Template"
                img={proj5}
                title="Agency Website Template"
                link="https://aragua.org/videos/build-stunning-fashion-studio-website-with-reactJS-locomotive-scroll-gsap"
                github="https://github.com/ethereumaragua"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                type="Blog Website"
                img={proj6}
                title="ETHAragua"
                link="https://aragua.org"
                github="https://github.com/ethereumaragua"
              />
            </div> */}
          </div>
        </Layout>
      </main>
    </>
  );
}
