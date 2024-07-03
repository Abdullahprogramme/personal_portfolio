import React, { useEffect, useRef } from "react";
import {HiArrowNarrowRight} from 'react-icons/hi';
import { FaAngleRight } from 'react-icons/fa';
import {Typed} from "react-typed";
import { motion } from "framer-motion";
import ThreeBackground from "./bg";

// import Lottie from 'react-lottie';
import Space from './Lottie/Space.json';
import DisplayLottie from './Lottie/DisplayLottie';

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        ease: "easeOut",
        duration: 0.5,
      },
    },
  };

  const textVariants = {
    initial: { y: -20, opacity: 0 },
    animate: { y: 0, opacity: 1, transition: { type: 'spring', stiffness: 100, damping: 5 } },
    whileHover: { scale: 1.1, color: "#f08", transition: { yoyo: Infinity, duration: 0.3 } },
  };

const Home = () => {

    const el = useRef(null);

    useEffect(() => {
        const typed = new Typed(el.current, {
            strings: ["Web Developer", "Coder", "Front-end Developer",  "React Developer", "Gamer", "Tech Enthusiast", "Learner"],
            typeSpeed: 40,
            backSpeed: 50,
            loop: true,
            cursorChar: '_',
        });

        // Cleanup
        return () => {
            typed.destroy();
        };
    }, []);

    return (
        <div name='home' className="w-full h-screen bg-[#0a192f]">
            <ThreeBackground />
            {/* container */}
            <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
                {/* <p className="text-pink-500 animate-pulse font-bold text-2xl">Hi, My name is</p> */}
                <motion.p
                    className="text-pink-500 font-bold text-2xl z-10"
                    variants={textVariants} // Apply variants
                    initial="initial"
                    animate="animate"
                    whileHover="whileHover"
                >
                    Hi, My name is
                </motion.p>
                <h1 className="text-4xl sm:text-7xl font-bold text-[#416D19]">Abdullah Tariq</h1>
                <h2 className="text-4xl sm:text-7xl font-bold text-[#8892b0]"><span ref={el} className="descriptionTyped" /></h2>
    
                <div className="flex flex-row">
                    <motion.div
                        className="flex flex-col"
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        >
                        <motion.ul>
                            <motion.li className="text-white py-1 max-w-[700px]" variants={itemVariants}>
                                <span className="flex sm:items-start md:items-start lg:items-center">
                                    <FaAngleRight className="mr-2 text-[#416D19]" />I'm a front-end developer passionate about creating user-friendly interfaces.
                                </span>
                            </motion.li>
                            <motion.li className="text-white py-1 max-w-[700px]" variants={itemVariants}>
                                <span className="flex sm:items-start md:items-start lg:items-center">
                                    <FaAngleRight className="mr-2 text-[#416D19]" />My expertise lies in crafting seamless and responsive web experiences.
                                </span>
                            </motion.li>
                            <motion.li className="text-white py-1 max-w-[700px]" variants={itemVariants}>
                                <span className="flex sm:items-start md:items-start lg:items-center">
                                    <FaAngleRight className="mr-2 text-[#416D19]" />I bring ideas to life by blending creativity with technical know-how.
                                </span>
                            </motion.li>
                            <motion.li className="text-white py-1 max-w-[700px]" variants={itemVariants}>
                                <span className="flex sm:items-start md:items-start lg:items-center">
                                    <FaAngleRight className="mr-2 text-[#416D19]" />Proficient in React and Python, I have prior experience in both technologies.
                                </span>
                            </motion.li>
                            <motion.li className="text-white py-1 max-w-[700px]" variants={itemVariants}>
                                <span className="flex sm:items-start md:items-start lg:items-center">
                                    <FaAngleRight className="mr-2 text-[#416D19]" />Let's collaborate to build something amazing!
                                </span>
                            </motion.li>

                        </motion.ul>
                        
                    </motion.div>
                    <div className="w-[17%] ml-8 hidden md:block">
                        <DisplayLottie animationData={Space} />
                    </div>
                </div>

                 

                <div className="z-10 pt-4">
                    <button className=" text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-500 hover:border-pink-500">View work
                        <span className="group-hover:rotate-90 duration-300">
                            <HiArrowNarrowRight className="ml-3 hover" />
                        </span>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Home;

