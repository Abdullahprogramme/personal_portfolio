import React from "react";

const About = () => {
    return (
        <div name='about' className="w-full h-screen bg-[#0a192f] text-gray-300">
            <div className="flex flex-col justify-center items-center w-full h-full">
                <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
                    <div className="sm:text-right pb-8 pl-4">
                        <p className="text-4xl font-bold inline border-b-4 border-pink-300">About</p>
                    </div>

                    <div></div>
                </div>
                <div className="flex flex-col sm:grid sm:grid-cols-2 sm:gap-8 max-w-[1000px] w-full">
                    <div className="sm:text-right text-start text-4xl pl-4 font-bold text-pink-500 mb-4 sm:mb-0">
                        <p>Hi. I am Abdullah, nice to meet you. Please take a look around.</p>
                    </div>
                    <div className="text-gray-400 text-justify pl-4 pr-4 sm:border-l-4 sm:border-pink-300 border-t-4 border-pink-300 sm:border-t-0 mx-4">
                    {/* <div className="text-gray-400 text-justify pl-4 pr-4 sm:border-l-4 sm:border-pink-300 border-t-4 border-pink-300 sm:border-t-0"> */}
                        <p>
                            I am a front end developer with a passion for creating beautiful and functional websites. I am proficient in HTML, CSS, JavaScript, React, and Tailwind CSS. Currently I am a freshmen at Habib University, Karachi, Pakistan. I am also a self-taught developer and have been working on minor projects of my own for some months. I am always looking for new opportunities to learn and grow as a developer. 
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default About;
