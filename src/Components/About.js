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
                <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
                    <div className="sm:text-right text-4xl pl-4 font-bold text-pink-500">
                        <p>Hi. I am Abdullah, nice to meet you. Please take a look around.</p>
                    </div>
                    <div>
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