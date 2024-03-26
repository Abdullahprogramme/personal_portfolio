import React from "react";

const About = () => {
    return (
        <div name='about' className="w-full h-screen bg-[#0a192f] text-gray-300">
            <div className="flex flex-col justify-center items-center w-full h-full">
                <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
                    <div className="sm:text-right pb-8 pl-4">
                        <p className="text-4xl text-[#416D19] font-bold inline border-b-4 border-pink-300">About</p>
                    </div>

                </div>
                <div className="flex flex-col sm:grid sm:grid-cols-2 sm:gap-8 max-w-[1000px] w-full">
                    <div className="sm:text-right text-start text-4xl pl-4 font-bold text-pink-500 mb-4 sm:mb-0">
                        <p>Hello there! Welcome to my space. Feel free to explore around.</p>
                    </div>
                    <div className="text-gray-400 text-justify sm:pl-4 lg:pl-4 md:pl-4 pr-4 sm:border-l-4 sm:border-pink-300 border-t-4 border-pink-300 sm:border-t-0 mx-4">
                    {/* <div className="text-gray-400 text-justify pl-4 pr-4 sm:border-l-4 sm:border-pink-300 border-t-4 border-pink-300 sm:border-t-0"> */}
                        <p>
                            As a front-end developer, I specialize in crafting visually appealing and functional websites.
                            Proficient in HTML, CSS, JavaScript, React, and Tailwind CSS, I am currently a freshman at Habib University in Karachi, Pakistan. 
                            My journey as a self-taught developer involves working on various minor projects, and I am enthusiastic about exploring new opportunities for continuous learning and professional growth. 
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default About;
