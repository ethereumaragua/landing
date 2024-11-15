"use client";

import { motion } from "framer-motion";
import React, { useRef, useState, useEffect } from "react";
import { Tooltip } from "react-tooltip";

const Skill = ({ name, x, y, info }) => {
  const ref = useRef(null);
  return (
    <>
      <motion.div
        ref={ref}
        whileHover={{scale:1.05}}
        initial={{ x: 0, y: 0 }}
        whileInView={{ x: x, y: y, transition: {duration: 1.5} }}
        viewport={{ once: true }}
        className="w-max cursor-pointer origin-center absolute 
        font-semibold bg-dark text-light py-3 px-6 rounded-full dark:bg-light dark:text-dark
        lg:py-2 lg:px-4 md:text-sm md:py-1.5 md:px-3"
        data-tooltip-id={name}
        data-tooltip-content={info}
        data-tooltip-place="bottom"
        data-tooltip-position-strategy="fixed"
      >
        {name}
      </motion.div>
      <Tooltip id={name} style={{ zIndex: 100, maxWidth: "250px" }} className="dark:text-dark dark:bg-light" openOnClick/>
    </>
  );
};

const Skills = () => {
  const ref = useRef(null);

  const [windowSize, setWindowSize] = useState(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setWindowSize(window.innerWidth);
    }
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setWindowSize(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <h2 className="w-full mt-64 font-bold text-center text-8xl md:text-6xl md:mt-32 sm:mb-6">
        Únete a nosotros y aprende sobre
      </h2> 
      <div
        ref={ref}
        className="w-full h-[100vh] relative bg-circularLight dark:bg-circularDark  flex items-center justify-center 
        mb-64 md:mb-32 rounded-full
        lg:bg-circularLightLg lg:dark:bg-circularDarkLg md:bg-circularLightMd md:dark:bg-circularDarkMd 
        sm:bg-circularLightSm sm:dark:bg-circularDarkSm lg:h-[80vh] sm:h-[60vh] xs:h-[50vh] 
        "
      >
    
        <motion.div whileHover={{scale:1.05}} className="flex font-semibold rounded-full cursor-pointer bg-dark text-light shadow-dark dark:bg-light dark:text-dark
        py-3 px-6 lg:py-2 lg:px-4 sm:text-md text-xl md:py-1.5 md:px-3"
        data-tooltip-id={"solidity"}
        data-tooltip-content={`Un lenguaje de programación de alto nivel diseñado específicamente para crear contratos inteligentes en Ethereum.`}
        data-tooltip-place="bottom"
        data-tooltip-position-strategy="fixed">
          Solidity
        </motion.div>
        <Tooltip id="solidity" style={{ zIndex: 100, maxWidth: "250px" }} className="dark:text-dark dark:bg-light" openOnClick/>

          <Skill name="Hacking" x="-24vw" y={`${windowSize < 560 ? "4vw" : "2vw"}`} info={`Aprende sobre seguridad de contratos inteligentes. Practicando ataques y defensa de contratos en un entorno seguro y controlado.`}/>
          <Skill name="Hardhat" x="-5vw" y={`${windowSize < 560 ? "-11vw" : "-10vw"}`} info={`Un entorno de desarrollo para Solidity que facilita la escritura, compilación, despliegue y pruebas de contratos inteligentes. Ofrece una experiencia de desarrollo similar a las herramientas tradicionales de desarrollo de software.`}/>
          <Skill name="Staking" x="21vw" y={`${windowSize < 560 ? "9vw" : "6vw"}`} info={`Un proceso en el cual se "apuesta" una cierta cantidad de criptomonedas para asegurar una red blockchain y obtener recompensas. Es una forma de participar en la gobernanza de una red y obtener ingresos pasivos.`}/>
          <Skill name="ReactJS" x="-1vw" y={`${windowSize < 560 ? "16vw" : "12vw"}`} info={`Una biblioteca JavaScript para crear interfaces de usuario (UI) de manera eficiente y declarativa. Se utiliza comúnmente para construir aplicaciones web interactivas, incluyendo dApps que interactúan con contratos inteligentes.`}/>
          <Skill name="Frameworks" x="-20vw" y={`${windowSize < 560 ? "-20vw" : "-15vw"}`} info={`Conjuntos de herramientas y código preexistente que proporcionan una estructura para el desarrollo de software. En el contexto de blockchain, los frameworks pueden ayudar a agilizar el desarrollo de dApps y proporcionar funcionalidades comunes.`}/>
          <Skill name="Testing" x="15vw" y={`${windowSize < 560 ? "-20vw" : "-12vw"}`} info={`El proceso de evaluar una aplicación para verificar que funcione según lo previsto y encontrar errores. En el desarrollo de contratos inteligentes, las pruebas son cruciales para garantizar la seguridad y la corrección del código.`}/>
          <Skill name="NextJS" x="-35vw" y={`${windowSize < 560 ? "-8vw" : "-5vw"}`} info={`Un framework de React que facilita la creación de aplicaciones web de producción de alta calidad. Es conocido por su excelente rendimiento y su capacidad para generar aplicaciones estáticas.`}/>
          <Skill name="Web Design" x="32vw" y={`${windowSize < 560 ? "-8vw" : "-5vw"}`} info={`El diseño de sitios web y aplicaciones web, incluyendo la estructura, la apariencia visual y la usabilidad. En el contexto de dApps, el web design se enfoca en crear interfaces intuitivas que permitan a los usuarios interactuar con los contratos inteligentes.`}/>
          <Skill name="Smart Contracts" x="0vw" y={`${windowSize < 560 ? "-32vw" : "-20vw"}`} info={`Contratos digitales autoejecutables con las condiciones del acuerdo directamente escritas en líneas de código y almacenadas en una blockchain. Eliminan la necesidad de intermediarios y automatizan la ejecución de contratos.`}/>
          <Skill name="Auditoría y Seguridad" x="-25vw" y={`${windowSize < 560 ? "26vw" : "18vw"}`} info={`El proceso de revisar minuciosamente el código de un contrato inteligente para identificar vulnerabilidades y asegurar que el contrato se ejecute como se espera. Las auditorías son cruciales para proteger los fondos y datos de los usuarios.`}/>
          <Skill name="Correr Nodos" x="1vw" y={`${windowSize < 560 ? "37vw" : "22vw"}`} info={`El proceso de ejecutar una copia completa de una blockchain en un dispositivo. Los nodos son fundamentales para mantener la descentralización y la seguridad de una red blockchain.`}/>
          <Skill name="Tailwind CSS" x="26vw" y={`${windowSize < 560 ? "22vw" : "18vw"}`} info={`Una utilidad de clases CSS que permite crear interfaces de usuario personalizadas de manera rápida y eficiente. Es una herramienta popular en el desarrollo web frontend.`}/>
      </div>
    </>
  );
};

export default Skills;
