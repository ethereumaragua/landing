import React, { useRef } from "react";
import {
  motion,
  useScroll,
} from "framer-motion";
import LiIcon from "./LiIcon";


const Details = ({ position, company, companyLink, time, address, work }) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-start justify-between md:w-[80%]"
    >
      <LiIcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <h3 className="text-2xl font-bold capitalize sm:text-xl xs:text-lg">
          {position}{" "}
          <a
            className="capitalize text-primary dark:text-primaryDark"
            href={companyLink}
            target={"_blank"}
          >
            @{company}
          </a>
        </h3>
        <span className="font-medium capitalize text-dark/75 dark:text-light/50 xs:text-sm">
          {time} | {address}
        </span>
        <p className="w-full font-medium md:text-sm"> {work}</p>
      </motion.div>
    </li>
  );
};

const Experience = () => {

  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });

  return (

      <div className="my-64">
        <h2 className="w-full mb-32 font-bold text-center text-8xl md:text-6xl xs:text-4xl md:mb-16">
          Hoja de Ruta
        </h2>

        <div ref={ref} className="relative w-[75%] mx-auto lg:w-[90%] md:w-full">
          <motion.div
            className="absolute left-9 top-0 w-[4px] md:w-[2px] md:left-[30px] xs:left-[20px] h-full bg-dark 
            origin-top  dark:bg-primaryDark dark:shadow-3xl"
            style={{ scaleY: scrollYProgress }}
          />
          <ul className="flex flex-col items-start justify-between w-full ml-4 xs:ml-2">
            <Details
              position="Fundación ETH Aragua"
              company="ETHAragua"
              companyLink="https://aragua.org"
              time="2024"
              address="Aragua, Venezuela"
              work="Creación de la organización, con la misión de educar e inspirar a la comunidad de Aragua buscando promover la adopción y el desarrollo de soluciones que puedan mejorar nuestras vidas y la economía local."
            />

            <Details
              position="Ethereum Developer Pack"
              company="ETHKipu"
              companyLink="https://ethkipu.org"
              time="2024 - Presente"
              address="UPT Aragua"
              work="De la mano de ETH Kipu, se llevó a cabo la primera cohorte del Ethereum Developer Pack a estudiantes y profesores de la UPT Aragua. Donde se brindaron 5 módulos de aprendizaje y desarrollo. Actualmente se imparten conceptos de este programa a estudiantes de Postgrado en Informática de la institución"
            />
            
            <Details
              position="Hackathon Academica Ethereum"
              company="EducatETH & ETHKipu"
              companyLink="https://hackaton-academica-ethereum.devpost.com/"
              time="2024"
              address="Online"
              work="Participación en la Hackaton Académica de Ethereum organizada por EducatETH y ETHKipu, con el propósito de solucionar problemas reales orientados a: Impacto Social, Gobernanza, DeFi y RWA."
            />

            <Details
              position="Laboratorio Blockchain"
              company="UPTAragua"
              companyLink="https://twitter.com/UPTAragua"
              time="2024 - 2025"
              address="La Victoria, Aragua"
              work="Creación del Laboratorio Blockchain de la Universidad Politécnica Territorial del estado Aragua, con la misión de brindar a la comunidad de Aragua una plataforma de aprendizaje, desarrollo e investigación en el marco del uso de esta tecnología."
            />

            

            {/* <Details
              position="Teaching Assistant"
              company="MIT"
              companyLink="https://mit.edu"
              time="Fall 2018"
              address="Massachusetts Ave, Cambridge, MA."
              work="Assisted in teaching a course on computer programming, held office
              hours to help students with assignments, and graded exams and
              assignments."
            /> */}
          </ul>
        </div>
        </div>
    );
};

export default Experience;
