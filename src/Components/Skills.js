import React from "react";
import { FaHtml5, FaCss3Alt, FaJs, FaGithub, FaGitAlt, FaReact, FaPython, FaNodeJs } from "react-icons/fa";
import { SiTailwindcss, SiMui, SiReact, SiTypescript, SiVisualstudiocode, SiExpo, SiNetlify, SiFirebase, SiMongodb } from "react-icons/si";

const Skills = () => {
    const skills = [
        {icon: <FaHtml5 className="text-6xl text-orange-600" />, name: "HTML"},
        {icon: <FaCss3Alt className="text-6xl text-blue-600" />, name: "CSS"},
        {icon: <FaJs className="text-6xl text-yellow-500" />, name: "JavaScript"},
        {icon: <FaGithub className="text-6xl text-gray-300" />, name: "GitHub"},
        {icon: <FaGitAlt className="text-6xl text-orange-600" />, name: "Git"},
        {icon: <FaReact className="text-6xl text-blue-400" />, name: "React"},
        {icon: <FaPython className="text-6xl text-yellow-400" />, name: "Python"},
        {icon: <SiTailwindcss className="text-6xl text-blue-400" />, name: "Tailwind CSS"},
        {icon: <SiMui className="text-6xl text-blue-600" />, name: "Material-UI"},
        {icon: <SiReact className="text-6xl text-blue-400" />, name: "React Native"},
        {icon: <SiTypescript className="text-6xl text-blue-600" />, name: "TypeScript"},
        {icon: <SiVisualstudiocode className="text-6xl text-blue-600" />, name: "VS Code"},
        {icon: <SiExpo className="text-6xl text-black" />, name: "Expo"},
        {icon: <SiNetlify className="text-6xl text-blue-600" />, name: "Netlify"},
        {icon: <SiFirebase className="text-6xl text-yellow-500" />, name: "Firebase"},
        {icon: <SiMongodb className="text-6xl text-green-600" />, name: "MongoDB"},
        {icon: <FaNodeJs className="text-6xl text-green-600" />, name: "Node.js"},
    ];

    return (
        <div name='skills' className="w-full min-h-screen bg-[#0a192f] text-gray-300">
            <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
                <div>
                    <p className="text-4xl inline text-[#416D19] border-pink-300 border-b-4 font-bold">Experience</p>
                    <p className="py-4">/ Some technologies I am familiar with. /</p>
                </div>

                <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8">
                    {skills.map((skill, index) => (
                        <div key={index} className="shadow-lg shadow-[#040c16] border border-gray-700 bg-[#1e293b] rounded-lg p-4 flex flex-col items-center">
                            {skill.icon}
                            <p className="mt-4">{skill.name}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Skills;
