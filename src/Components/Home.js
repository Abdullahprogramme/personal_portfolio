import React, { useEffect, useRef } from "react";
import {HiArrowNarrowRight} from 'react-icons/hi';
import { FaAngleRight } from 'react-icons/fa';
import {Typed} from "react-typed";

const Home = () => {

    const el = useRef(null);

    useEffect(() => {
        const typed = new Typed(el.current, {
            strings: ["Web Developer", "Coder", "Front-end developer", "Gamer", "Tech Enthusiast", "Learner"],
            typeSpeed: 40,
            backSpeed: 50,
            loop: true,
        });

        // Cleanup
        return () => {
            typed.destroy();
        };
    }, []);
    return (
        <div name='home' className="w-full h-screen bg-[#0a192f]">
            
            {/* container */}
            <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
                <p className="text-pink-500 animate-pulse font-bold text-2xl">Hi, My name is</p>
                <h1 className="text-4xl sm:text-7xl font-bold text-[#416D19]">Abdullah Tariq</h1>
                <h2 className="text-4xl sm:text-7xl font-bold text-[#8892b0]"><span ref={el} className="descriptionTyped" /></h2>
        
                <div className="flex flex-col">
                    <p className="text-[#8892b0] py-1 max-w-[700px] paragraph-text" style={{animationDelay: '0.5s'}}>
                        <span className="flex sm:items-start md:items-start lg:items-center">
                            <FaAngleRight className="mr-2 text-[#416D19] arrow-icon" />I'm a front-end developer passionate about creating user-friendly interfaces.
                        </span>
                    </p>
                    <p className="text-[#8892b0] py-1 max-w-[700px] paragraph-text" style={{animationDelay: '1s'}}>
                        <span className="flex sm:items-start md:items-start lg:items-center">
                            <FaAngleRight className="mr-2 text-[#416D19] arrow-icon" />My expertise lies in crafting seamless and responsive web experiences. 
                        </span>
                    </p>
                    <p className="text-[#8892b0] py-1 max-w-[700px] paragraph-text" style={{animationDelay: '1.5s'}}>
                        <span className="flex sm:items-start md:items-start lg:items-center">
                            <FaAngleRight className="mr-2 text-[#416D19] arrow-icon" />I bring ideas to life by blending creativity with technical know-how. 
                        </span>
                    </p>
                    <p className="text-[#8892b0] py-1 max-w-[700px] paragraph-text" style={{animationDelay: '2s'}}> 
                        <span className="flex sm:items-start md:items-start lg:items-center">
                            <FaAngleRight className="mr-2 text-[#416D19] arrow-icon" />Proficient in React and Python, I have prior experience in both technologies. 
                        </span>
                    </p>
                    <p className="text-[#8892b0] py-1 max-w-[700px] ml-[-0.2rem] lg:ml-0 paragraph-text" style={{animationDelay: '2.5s'}}>
                        <span className="flex sm:items-start md:items-start lg:items-center">
                            <FaAngleRight className="mr-1.5 lg:mr-2 text-[#416D19] arrow-icon" />Let's collaborate to build something amazing! 
                        </span>
                    </p>
                </div>
                 

                <div>
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

