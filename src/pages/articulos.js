import AnimatedText from "@/components/AnimatedText";
import { motion, useMotionValue } from "framer-motion";
import Head from "next/head";
import Image from "next/image";
import blog1 from "../../public/images/articles/ethuniversity.jpg";
// import blog2 from "../../public/images/articles/create loading screen in react js.jpg";
// import blog3 from "../../public/images/articles/form validation in reactjs using custom react hook.png";
// import blog4 from "../../public/images/articles/smooth scrolling in reactjs.png";
// import blog5 from "../../public/images/articles/create modal component in react using react portals.png";
// import blog6 from "../../public/images/articles/todo list app built using react redux and framer motion.png";
// import blog7 from "../../public/images/articles/What is Redux with easy explanation.png";
// import blog8 from "../../public/images/articles/What is higher order component in React.jpg";

import Layout from "@/components/Layout";
import Link from "next/link";
import { useRef } from "react";
import TransitionEffect from "@/components/TransitionEffect";

const FramerImage = motion(Image);

const MovingImg = ({ title, img, link }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const imgRef = useRef(null);

  function handleMouse(event) {
    imgRef.current.style.display = "inline-block";
    x.set(event.pageX);
    y.set(-10);
  }

  function handleMouseLeave(event) {
    imgRef.current.style.display = "none";
    x.set(0);
    y.set(0);
  }
  return (
    <>
      <Link
        href={link}
        target={"_blank"}
        className="relative"
        onMouseMove={handleMouse}
        onMouseLeave={handleMouseLeave}
      >
        <h2 className="text-xl font-semibold capitalize hover:underline dark:text-light md:text-lg xs:text-base">
          {title}
        </h2>
        <FramerImage
          src={img}
          ref={imgRef}
          alt={title}
          className="w-96 h-auto z-10 hidden absolute rounded-lg md:!hidden"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1, transition: { duration: 0.2 } }}
          style={{
            x: x,
            y: y,
          }}
          sizes="(max-width: 768px) 60vw,
              (max-width: 1200px) 40vw,
              33vw"
        />
      </Link>
    </>
  );
};

const Article = ({ img, title, date, link }) => {
  return (
    <motion.li
      initial={{ y: 200 }}
      whileInView={{ y: 0, transition: { duration: 0.5, ease: "easeInOut" } }}
      viewport={{ once: true }}
      className="relative flex items-center justify-between w-full p-4 py-6 my-2 border border-b-4 border-r-4 border-solid rounded-xl sm:flex-col bg-light text-dark first:mt-0 border-dark dark:bg-dark dark:border-light "
    >
      <MovingImg img={img} title={title} link={link} />
      <span className="pl-4 font-semibold text-primary dark:text-primaryDark min-w-max sm:self-start sm:pl-0 xs:text-sm">
        {date}
      </span>
    </motion.li>
  );
};

const FeaturedArticle = ({ img, title, time, summary, link }) => {
  return (
    <li className="relative w-full col-span-1 p-4 border border-solid bg-light border-dark rounded-2xl dark:bg-dark dark:border-light">
      <div
        className="absolute  top-0 -right-3 w-[102%] h-[103%] rounded-[2rem]  rounded-br-3xl bg-dark 
        -z-10  "
      />
      <Link
        href={link}
        target={"_blank"}
        className="inline-block w-full overflow-hidden rounded-lg"
      >
        <FramerImage
          src={img}
          alt={title}
          className="w-full h-auto"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          sizes="100vw"
          priority
        />
      </Link>

      <Link href={link} target={"_blank"}>
        <h2 className="my-2 mt-4 text-2xl font-bold capitalize hover:underline xs:text-lg">
          {title}
        </h2>
      </Link>
      <p className="mb-2 text-sm">{summary}</p>
      <span className="font-semibold text-primary dark:text-primaryDark">
        {time}
      </span>
    </li>
  );
};

export default function Articles() {
  return (
    <>
      <Head>
        <title>ETH Aragua | Artículos</title>
        <meta name="description" content="Browse through ETH Aragua." />
      </Head>
      <TransitionEffect />
      <main
        className={`w-full mb-16 flex flex-col items-center justify-center dark:text-light overflow-hidden`}
      >
        <Layout className="pt-16">
          <AnimatedText
            text="Últimos Artículos!"
            className="!text-8xl !leading-tight mb-16 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8"
          />

          {/* <center>en desarrollo</center> */}

          <ul className="grid grid-cols-2 gap-16 lg:gap-8 md:grid-cols-1 md:gap-y-16">
            <FeaturedArticle
              img={blog1}
              title="Construyendo ETH Aragua: En pro de una mejor comunidad local y universitaria"
              time="6 min de lectura"
              summary="Promoviendo la colaboración, el desarrollo y la descentralización a través de la Máquina Virtual de Ethereum en proyectos académicos y locales."
              link="https://blog.aragua.org/blogs/construyendo-eth-aragua-en-pro-de-una-mejor-comunidad-local-y-universitaria"
            />
          </ul>
{/* 
            <FeaturedArticle
              img={blog2}
              title="creating stunning loading screens in react: Build 3 types of loading screens"
              time="10 min read"
              summary="Learn how to create stunning loading screens in React with 3 different methods. 
              Discover how to use React-Loading, React-Lottie & build a custom loading screen. Improve the 
              user experience."
              link="https://aragua.org"
            />
          </ul>

          <h2 className="w-full my-16 mt-32 text-4xl font-bold text-center">
            Todos los Artículos
          </h2>

          <ul className="relative flex flex-col items-center">
            <Article
              title="form validation in reactjs: build a reusable custom hook for inputs and error handling"
              img={blog3}
              date="Enero 27, 2023"
              link="https://aragua.org/blogs/react-form-validation-custom-hook"
            />
            <Article
              title="silky smooth scrolling in reactjs: a step-by-step guide for react developers"
              img={blog4}
              date="Enero 30, 2023"
              link="https://aragua.org/blogs/smooth-scrolling-in-react-js"
            />
            <Article
              title="creating an efficient modal component in react using hooks and portals"
              img={blog5}
              date="Enero 29, 2023"
              link="https://aragua.org/blogs/create-efficient-modal-react-portals"
            />
            <Article
              title="build a fabulous todo list app with react, redux and framer-motion"
              img={blog6}
              date="Enero 28, 2023"
              link="https://aragua.org/blogs/build-react-redux-framer-motion-todo-app"
            />
            <Article
              title="redux simplified: a beginner's guide for web developers"
              img={blog7}
              date="Enero 31, 2023"
              link="https://aragua.org/blogs/redux-simply-explained"
            />
            <Article
              title="what is higher order component (hoc) in react?"
              date="Enero 4, 2023"
              img={blog8}
              link="https://aragua.org/blogs/higher-order-component-hoc-react"
            />
          </ul> */}
        </Layout>
      </main>
    </>
  );
}
