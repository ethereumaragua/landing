import { motion } from "framer-motion";
import React, { useRef } from "react";
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
        className="w-max cursor-default origin-center absolute 
        font-semibold bg-dark text-light py-3 px-6 rounded-full dark:bg-light dark:text-dark
        lg:py-2 lg:px-4 md:text-sm md:py-1.5 md:px-3  xs:bg-transparent xs:dark:bg-transparent xs:text-dark xs:dark:text-light xs:font-bold
        "
        data-tooltip-id={name}
        data-tooltip-content={info}
        data-tooltip-place="bottom"
        data-tooltip-position-strategy="fixed"
      >
        {name}
      </motion.div>
      <Tooltip id={name} style={{ zIndex: 100, maxWidth: "250px" }} className="dark:text-dark dark:bg-light" />
    </>
  );
};

const Skills = () => {
  const ref = useRef(null);
  return (
    <>
      <h2 className="w-full mt-64 font-bold text-center text-8xl md:text-6xl md:mt-32">
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
    
        <motion.div whileHover={{scale:1.05}} className="flex p-8 font-semibold rounded-full cursor-default bg-dark text-light shadow-dark dark:bg-light dark:text-dark lg:p-6 md:p-4 xs:text-xs xs:p-2"
        data-tooltip-id={"solidity"}
        data-tooltip-content={`Un lenguaje de programación de alto nivel diseñado específicamente para crear contratos inteligentes en Ethereum.`}
        data-tooltip-place="bottom"
        data-tooltip-position-strategy="fixed">
          Solidity
        </motion.div>
        <Tooltip id="solidity" style={{ zIndex: 100, maxWidth: "250px" }} className="dark:text-dark dark:bg-light" />

          <Skill name="Hacking" x="-20vw" y="2vw" info={`Aprende sobre seguridad de contratos inteligentes. Practicando ataques y defensa de contratos en un entorno seguro y controlado.`}/>
          <Skill name="Hardhat" x="-5vw" y="-10vw" info={`Un entorno de desarrollo para Solidity que facilita la escritura, compilación, despliegue y pruebas de contratos inteligentes. Ofrece una experiencia de desarrollo similar a las herramientas tradicionales de desarrollo de software.`}/>
          <Skill name="Staking" x="20vw" y="6vw" info={`Un proceso en el cual se "apuesta" una cierta cantidad de criptomonedas para asegurar una red blockchain y obtener recompensas. Es una forma de participar en la gobernanza de una red y obtener ingresos pasivos.`}/>
          <Skill name="ReactJS" x="0vw" y="12vw" info={`Una biblioteca JavaScript para crear interfaces de usuario (UI) de manera eficiente y declarativa. Se utiliza comúnmente para construir aplicaciones web interactivas, incluyendo dApps que interactúan con contratos inteligentes.`}/>
          <Skill name="Frameworks" x="-20vw" y="-15vw" info={`Conjuntos de herramientas y código preexistente que proporcionan una estructura para el desarrollo de software. En el contexto de blockchain, los frameworks pueden ayudar a agilizar el desarrollo de dApps y proporcionar funcionalidades comunes.`}/>
          <Skill name="Testing" x="15vw" y="-12vw" info={`El proceso de evaluar una aplicación para verificar que funcione según lo previsto y encontrar errores. En el desarrollo de contratos inteligentes, las pruebas son cruciales para garantizar la seguridad y la corrección del código.`}/>
          <Skill name="NextJS" x="-35vw" y="-5vw" info={`Un framework de React que facilita la creación de aplicaciones web de producción de alta calidad. Es conocido por su excelente rendimiento y su capacidad para generar aplicaciones estáticas.`}/>
          <Skill name="Web Design" x="32vw" y="-5vw" info={`El diseño de sitios web y aplicaciones web, incluyendo la estructura, la apariencia visual y la usabilidad. En el contexto de dApps, el web design se enfoca en crear interfaces intuitivas que permitan a los usuarios interactuar con los contratos inteligentes.`}/>
          <Skill name="Smart Contracts" x="0vw" y="-20vw" info={`Contratos digitales autoejecutables con las condiciones del acuerdo directamente escritas en líneas de código y almacenadas en una blockchain. Eliminan la necesidad de intermediarios y automatizan la ejecución de contratos.`}/>
          <Skill name="Auditoría y Seguridad" x="-25vw" y="18vw" info={`El proceso de revisar minuciosamente el código de un contrato inteligente para identificar vulnerabilidades y asegurar que el contrato se ejecute como se espera. Las auditorías son cruciales para proteger los fondos y datos de los usuarios.`}/>
          <Skill name="Correr Nodos" x="1vw" y="21vw" info={`El proceso de ejecutar una copia completa de una blockchain en un dispositivo. Los nodos son fundamentales para mantener la descentralización y la seguridad de una red blockchain.`}/>
          <Skill name="Tailwind CSS" x="28vw" y="18vw" info={`Una utilidad de clases CSS que permite crear interfaces de usuario personalizadas de manera rápida y eficiente. Es una herramienta popular en el desarrollo web frontend.`}/>
      </div>
    </>
  );
};

export default Skills;
