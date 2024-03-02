import React from "react";
import BMI from "../Assets/BMI.jpg";
import space from "../Assets/space.png";
import Password from "../Assets/Password.jpg";
import test from "../Assets/test.png";

const Work = () => {
    return (
        <div name='work' className="w-full md:h-screen text-gray-300 bg-[#0a192f]">
            <div className="max-w-[1000px] mx-auto flex flex-col justify-center w-full h-full">
                <div className="pb-8 pl-4 pt-4">
                    <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600">Work</p>
                    <p className="py-6">// Check out my previous works.</p>
                </div>

                {/* Container */}
                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">

                    {/* Grid item */}
                    <div style={{backgroundImage: `url(${BMI})`}} className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div">
                        
                        {/* Hover effects */}
                        <div className="opacity-0 group-hover:opacity-100">
                            <span className="text-2xl font-bold text-white tracking-wider">
                                React JS application
                            </span>
                            <div className="pt-8 text-center">
                                {/* <a href="/">
                                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">Demo</button>
                                </a> */}
                                <a href="https://check-body-mass-index.netlify.app/" target="_blank" rel="noopener noreferrer">
                                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">App</button>
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Grid item */}
                    <div style={{backgroundImage: `url(${test})`}} className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div">
                        
                        {/* Hover effects */}
                        <div className="opacity-0 group-hover:opacity-100">
                            <span className="text-2xl font-bold text-white tracking-wider">
                                Tkinter application
                            </span>
                            <div className="pt-8 text-center">
                                {/* <a href="/">
                                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">Demo</button>
                                </a> */}
                                <a href="https://github.com/Abdullahprogramme/APS-Project/" target="_blank" rel="noopener noreferrer">
                                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">Code</button>
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Grid item */}
                    <div style={{backgroundImage: `url(${Password})`}} className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div">
                        
                        {/* Hover effects */}
                        <div className="opacity-0 group-hover:opacity-100">
                            <span className="text-2xl font-bold text-white tracking-wider">
                                Password manager
                            </span>
                            <div className="pt-8 text-center">
                                {/* <a href="/">
                                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">Demo</button>
                                </a> */}
                                <a href="https://github.com/Abdullahprogramme/additonal-programs/blob/main/password%20manager.py" target="_blank" rel="noopener noreferrer">
                                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">Code</button>
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Grid item */}
                    <div style={{backgroundImage: `url(${space})`}} className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div">
                        
                        {/* Hover effects */}
                        <div className="opacity-0 group-hover:opacity-100">
                            <span className="text-2xl font-bold text-white tracking-wider">
                                Pygame application
                            </span>
                            <div className="pt-8 text-center">
                                {/* <a href="/">
                                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">Demo</button>
                                </a> */}
                                <a href="https://github.com/Abdullahprogramme/PyGame/tree/main/Space%20Invaders" target="_blank" rel="noopener noreferrer">
                                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">Code</button>
                                </a>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
};

export default Work;
