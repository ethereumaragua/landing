import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import profile from "../../public/images/profile/img1.jpg";
// import ethimg from "../../public/images/profile/ethimg.jpg";
// import { useInView, useMotionValue, useSpring } from "framer-motion";
// import { useEffect, useRef } from "react";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
// import Education from "@/components/Education";
import AnimatedText from "@/components/AnimatedText";
import TransitionEffect from "@/components/TransitionEffect";

// function AnimatedNumberFramerMotion({ value }) {
//   const ref = useRef(null);
//   const motionValue = useMotionValue(0);
//   const springValue = useSpring(motionValue, { duration: 3000 });
//   const isInView = useInView(ref, { once: true });
//   useEffect(() => {
//     if (isInView) {
//       motionValue.set(value);
//     }
//   }, [motionValue, value, isInView]);

//   useEffect(
//     () =>
//       springValue.on("change", (latest) => {
//         if (ref.current && latest.toFixed(0) <= value) {
//           ref.current.textContent = latest.toFixed(0);
//         }
//       }),
//     [springValue, value]
//   );

//   return <span ref={ref} />;
// }

export default function About() {
  return (
    <>
      <Head>
        <title>ETH Aragua | Acerca de</title>
        <meta name="description" content="Aprende más sobre ETH Aragua." />
      </Head>
      <TransitionEffect />
      <main
        className={`flex  w-full flex-col items-center justify-center dark:text-light`}
      >
        <Layout className="pt-16">
          <AnimatedText
            text="Quienes Somos"
            className="mb-16 !text-8xl !leading-tight lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8"
          />

          <div className="grid w-full grid-cols-8 gap-16 sm:gap-8">
            <div className="flex flex-col items-start justify-start col-span-4 xl:col-span-4 md:order-2 md:col-span-8">
              <h2 className="mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75">
                Ethereum Aragua
              </h2>
              <p className="font-medium ">
                 es una comunidad de entusiastas, desarrolladores y emprendedores que buscan aprender, colaborar y promover el ecosistema de Ethereum en el estado Aragua, Venezuela. Usamos la tecnología para cambiar la forma en que las personas interactúan, confían y construyen. A través de encuentros, talleres y proyectos colaborativos, conectamos a individuos apasionados para impulsar la descentralización mediante el uso de la Ethereum Virtual Machine.
              </p>
            </div>
            <div className="relative col-span-4 p-8 border-2 border-solid h-max rounded-2xl border-dark bg-light dark:border-light dark:bg-dark xl:col-span-4 md:col-span-8 md:order-1 ">
              <div
                className="absolute  top-0 -right-3 -z-10 h-[103%] w-[102%]  rounded-[2rem] rounded-br-3xl 
                bg-dark
        dark:bg-light  "
              />
              <Image
                className="w-full h-auto rounded-2xl"
                src={profile}
                alt="ETHAragua"
                sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 75vw,
              50vw"
                priority
              />
            </div>

            
            <div className="relative col-span-4 p-8 border-2 border-solid h-max rounded-2xl border-dark bg-light dark:border-light dark:bg-dark xl:col-span-4 md:col-span-8 md:order-1 ">
              <div
                className="absolute  top-0 -right-3 -z-10 h-[103%] w-[102%]  rounded-[2rem] rounded-br-3xl 
                bg-dark
        dark:bg-light  "
              />
              <Image
                className="w-full h-auto rounded-2xl"
                src={ethimg}
                alt="ETHAragua"
                sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 75vw,
              50vw"
                priority
              />
            </div>
            {/*<div className="flex flex-col items-start justify-start col-span-4 xl:col-span-4 md:order-2 md:col-span-8">
              <h2 className="mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75">
                ¿Qué es Ethereum?
              </h2>
              <p className="font-medium ">
                es una plataforma de código abierto, descentralizada y basada en blockchain que permite crear y ejecutar aplicaciones descentralizadas (dApps). Imagina Ethereum como una especie de computadora global que funciona 24/7 y en la que cualquiera puede crear programas.
                <br/><br/>
                Ethereum es una revolución en si misma, impulsando la innovación tecnológica y permitiendo la creación de nuevas formas de interacción digital y económica.
                <br/><br/>
                Cuenta con una gran comunidad de desarrolladores y usuarios y es usada en la contrucción de aplicaciones, servicios financieros y juegos.
              </p>
            </div>*/}
            {/* <div className="flex flex-col items-end justify-between col-span-2 xl:col-span-8 xl:flex-row xl:items-center md:order-3">
              <div className="flex flex-col items-end justify-center xl:items-center">
                <span className="inline-block font-bold text-7xl md:text-6xl sm:text-5xl xs:text-4xl">
                  <AnimatedNumberFramerMotion value={40} />+
                </span>
                <h2 className="mb-4 text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm">
                  satisfied clients
                </h2>
              </div>

              <div className="flex flex-col items-end justify-center xl:items-center">
                <span className="inline-block font-bold text-7xl md:text-6xl sm:text-5xl xs:text-4xl">
                  <AnimatedNumberFramerMotion value={50} />+
                </span>
                <h2 className="mb-4 text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm">
                  projects completed
                </h2>
              </div>

              <div className="flex flex-col items-end justify-center xl:items-center">
                <span className="inline-block font-bold text-7xl md:text-6xl sm:text-5xl xs:text-4xl">
                  <AnimatedNumberFramerMotion value={4} />+
                </span>
                <h2 className="mb-4 text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm">
                  Years of experience
                </h2>
              </div>
            </div> */}
          </div>

          <Skills />
          <Experience />
          {/* <Education /> */}
        </Layout>
      </main>
    </>
  );
}
