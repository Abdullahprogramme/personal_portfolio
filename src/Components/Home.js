import React from "react";
import {HiArrowNarrowRight} from 'react-icons/hi';

const Home = () => {
    return (
        <div name='home' className="w-full h-screen bg-[#0a192f]">
            
            {/* container */}
            <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
                <p className="text-pink-600">Hi, My name is</p>
                <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]">Abdullah Tariq</h1>
                <h2 className="text-4xl sm:text-7xl font-bold text-[#8892b0]">I'm a front-end developer.</h2>
                <p className="text-[#8892b0] py-4 max-w-[700px]">I'm a front-end developer passionate about creating user-friendly interfaces. 
                    My expertise lies in crafting seamless and responsive web experiences. 
                    I bring ideas to life by blending creativity with technical know-how. 
                    Proficient in React and Python, I have prior experience in both technologies. 
                    Let's collaborate to build something amazing! </p>

                <div>
                    <button className=" text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600">View work
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