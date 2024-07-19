// import React from "react";
// import physics from "../Assets/physics.png";
// import github from "../Assets/github.png";
// import git from "../Assets/git.png";
// import js from "../Assets/js.png";
// import html from "../Assets/html.png";
// import css from "../Assets/css.png";
// import python from "../Assets/python.png";
// import tailwind from "../Assets/tailwind.png";
// import materialsui from "../Assets/materialsui.png";

// const Skills = () => {
//     return (
//         <div name='skills' className="w-full min-h-screen bg-[#0a192f] text-gray-300">
//             {/* container */}
//             <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
//                 <div>
//                     <p className="text-4xl inline text-[#416D19] border-pink-300 border-b-4 font-bold">Experience</p>
//                     <p className="py-4">/ Some technologies I am familiar with. /</p>
//                 </div>

//                 <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8">
//                     <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
//                         <img className="img w-20 mx-auto" src={html} alt="html" />
//                         <p className="py-4 text-[#B7E5B4]">HTML</p>
//                     </div>

//                     <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
//                         <img className="img w-20 mx-auto" src={css} alt="css" />
//                         <p className="py-4 text-[#B7E5B4]">CSS</p>
//                     </div>

//                     <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
//                         <img className="img w-20 mx-auto" src={js} alt="js" />
//                         <p className="py-4 text-[#B7E5B4]">JavaScript</p>
//                     </div>

//                     <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
//                         <img className="img w-20 mx-auto" src={github} alt="github" />
//                         <p className="py-4 text-[#B7E5B4]">Github</p>
//                     </div>

//                     <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
//                         <img className="img w-20 mx-auto" src={git} alt="git" />
//                         <p className="py-4 text-[#B7E5B4]">Git</p>
//                     </div>

//                     <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
//                         <img className="img w-20 mx-auto" src={physics} alt="react" />
//                         <p className="py-4 text-[#B7E5B4]">React JS</p>
//                     </div>

//                     <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
//                         <img className="img w-20 mx-auto" src={python} alt="python" />
//                         <p className="py-4 text-[#B7E5B4]">Python</p>
//                     </div>

//                     <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
//                         <img className="img w-20 mx-auto" src={tailwind} alt="tailwind" />
//                         <p className="py-4 text-[#B7E5B4]">Tailwind CSS</p>
//                     </div>

//                     <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
//                         <img className="img w-20 mx-auto" src={materialsui} alt="tailwind" />
//                         <p className="py-4 text-[#B7E5B4]">Materials uI</p>
//                     </div>

//                 </div>
//             </div>
//         </div>
//     )
// };

// export default Skills;

import React, {useEffect, useState} from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import physics from "../Assets/physics.png";
import github from "../Assets/github.png";
import git from "../Assets/git.png";
import js from "../Assets/js.png";
import html from "../Assets/html.png";
import css from "../Assets/css.png";
import python from "../Assets/python.png";
import tailwind from "../Assets/tailwind.png";
import materialsui from "../Assets/materialsui.png";
import ReactNative from "../Assets/ReactNative.png";
import typescript from "../Assets/typescript.png";
import vscode from "../Assets/vscode.png";

// importing lottie animation files
import DisplayLottie from './Lottie/DisplayLottie';
import Prof from './Lottie/Prof.json';

const Skills = () => {
    const skills = [
        {src: html, alt: "html", name: "HTML", proficiency: 70},
        {src: css, alt: "css", name: "CSS", proficiency: 80},
        {src: js, alt: "js", name: "JavaScript", proficiency: 70},
        {src: github, alt: "github", name: "Github"},
        {src: git, alt: "git", name: "Git"},
        {src: physics, alt: "react", name: "React JS"},
        {src: python, alt: "python", name: "Python"},
        {src: tailwind, alt: "tailwind", name: "Tailwind CSS"},
        {src: materialsui, alt: "materialsui", name: "Materials UI"},
        {src: ReactNative, alt: "reactnative", name: "React Native"},
        {src: typescript, alt: "typescript", name: "TypeScript", proficiency: 50},
        {src: vscode, alt: "vscode", name: "VS Code", proficiency: 90},
    ];

    const [slidesToShow, setSlidesToShow] = useState(3);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 1100) {
                setSlidesToShow(3);
            } else if (window.innerWidth > 600) {
                setSlidesToShow(2);
            } else {
                setSlidesToShow(2);
            }
        };

        handleResize();
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: slidesToShow,
        slidesToScroll: 1,
        autoPlay: true,
        autoplaySpeed: 2000,
    };

    return (
        <div name='skills' className="w-full min-h-screen bg-[#0a192f] text-gray-300">
            <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
                <div>
                    <p className="text-4xl inline text-[#416D19] border-pink-300 border-b-4 font-bold">Technology Stack</p>
                    <p className="py-4">/ Some technologies I am familiar with. /</p>
                </div>

                <Slider {...settings} className='mt-20'>
                    {skills.map((skill, index) => (
                        <div key={index} className='text-center hover:-translate-y-1 mt-1 duration-500'>
                            <img className="w-24 h-24 mx-auto" src={skill.src} alt={skill.alt} />
                            <p className="mt-4 text-white text-xl">{skill.name}</p>
                        </div>
                    ))}
                </Slider>

                <div className="mt-10 mb-12 flex items-start">
                    <div className="w-full">
                        {skills.map((skill, index) => (
                            <div key={index} className="mb-2">
                                {skill.proficiency !== undefined && (
                                    <>
                                        <p className="text-white text-lg mb-1">{skill.name}</p>
                                        <div className="w-full bg-gray-700 rounded-full h-3">
                                            <div 
                                                className="bg-green-500 h-3 rounded-full" 
                                                style={{ width: `${skill.proficiency}%` }}
                                            ></div>
                                        </div>
                                        <p className="text-gray-400 mt-1 text-sm">{skill.proficiency}%</p>
                                    </>
                                )}
                            </div>
                        ))}
                    </div>
                    <div className="w-2/4 ml-4 hidden md:block">
                        <DisplayLottie animationData={Prof} />
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Skills;
