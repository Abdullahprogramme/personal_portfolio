import React from "react";
import { motion } from "framer-motion";
import { useInView } from 'react-intersection-observer';

const About = () => {

    const { ref, inView } = useInView({
        triggerOnce: true, // Trigger animation only once
        threshold: 0.6, // Trigger when 60% of the component is in view
    });

    const animationFromLeft = {
        hidden: { x: -20, opacity: 0 },
        visible: { x: 0, opacity: 1, transition: { duration: 0.5 } },
    };

    const animationFromRight = {
        hidden: { x: 20, opacity: 0 },
        visible: { x: 0, opacity: 1, transition: { duration: 0.5 } },
    };


    return (
        <div ref={ref} name='about' className="w-full h-screen bg-[#0a192f] text-gray-300 overflow-hidden">
            <div className="flex flex-col justify-center items-center w-full h-full">
                <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
                    <div className="sm:text-right pb-8 pl-4">
                        <p className="text-4xl text-[#416D19] font-bold inline border-b-4 border-pink-300">About</p>
                    </div>

                </div>
                <div className="flex flex-col sm:grid sm:grid-cols-2 sm:gap-8 max-w-[1000px] w-full">
                    <motion.div
                        initial="hidden"
                        animate={inView ? "visible" : "hidden"}
                        variants={animationFromLeft}
                        className="sm:text-right text-start text-4xl pl-4 font-bold text-pink-500 mb-4 sm:mb-0">
                            <p>Hello there! Welcome to my space. Feel free to explore around.</p>
                    </motion.div>
                    <motion.div
                        initial="hidden"
                        animate={inView ? "visible" : "hidden"}
                        variants={animationFromRight}
                        className="text-gray-400 text-justify sm:pl-4 pt-4 md:pt-0 lg:pl-4 md:pl-4 pr-4 sm:border-l-4 sm:border-pink-300 border-t-4 border-pink-300 sm:border-t-0 mx-4">
                        <p>
                            As a front-end developer, I specialize in crafting visually appealing and functional websites.
                            Proficient in HTML, CSS, JavaScript, React, Materials UI, and Tailwind CSS, I am currently a sophomore at Habib University in Karachi, Pakistan. 
                            My journey as a self-taught developer involves working on various minor projects, and I am enthusiastic about exploring new opportunities for continuous learning and professional growth. 
                        </p>
                    </motion.div>
                </div>
            </div>
        </div>
    )
};

export default About;
