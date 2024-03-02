import React from "react";
import physics from "../Assets/physics.png";
import github from "../Assets/github.png";
import git from "../Assets/git.png";
import js from "../Assets/js.png";
import html from "../Assets/html.png";
import css from "../Assets/css.png";
import python from "../Assets/python.png";

const Skills = () => {
    return (
        <div name='skills' className="w-full h-screen bg-[#0a192f] text-gray-300">
            {/* container */}
            <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
                <div>
                    <p className="text-4xl inline text-[#416D19] border-pink-600 border-b-4 font-bold">Experience</p>
                    <p className="py-4">/ Some technologies I am familiar with. /</p>
                </div>

                <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8">
                    <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                        <img className="w-20 mx-auto" src={html} alt="html" />
                        <p className="py-4 text-[#B7E5B4]">HTML</p>
                    </div>

                    <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                        <img className="w-20 mx-auto" src={css} alt="css" />
                        <p className="py-4 text-[#B7E5B4]">CSS</p>
                    </div>

                    <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                        <img className="w-20 mx-auto" src={js} alt="js" />
                        <p className="py-4 text-[#B7E5B4]">JavaScript</p>
                    </div>

                    <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                        <img className="w-20 mx-auto" src={github} alt="github" />
                        <p className="py-4 text-[#B7E5B4]">Github</p>
                    </div>

                    <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                        <img className="w-20 mx-auto" src={git} alt="git" />
                        <p className="py-4 text-[#B7E5B4]">Git</p>
                    </div>

                    <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                        <img className="w-20 mx-auto" src={physics} alt="react" />
                        <p className="py-4 text-[#B7E5B4]">React JS</p>
                    </div>

                    <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                        <img className="w-20 mx-auto" src={python} alt="python" />
                        <p className="py-4 text-[#B7E5B4]">Python</p>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Skills;
