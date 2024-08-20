import React from "react";
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
import Expo from "../Assets/Expo.png";
import netlify from "../Assets/netlify.png";
import Firebase from "../Assets/Firebase.png";
import MongoDB from "../Assets/MongoDB.png";
import Node from "../Assets/Node.png";

const Skills = () => {
    const skills = [
        {src: html, alt: "html", name: "HTML"},
        {src: css, alt: "css", name: "CSS"},
        {src: js, alt: "js", name: "JavaScript"},
        {src: github, alt: "github", name: "GitHub"},
        {src: git, alt: "git", name: "Git"},
        {src: physics, alt: "react", name: "React"},
        {src: python, alt: "python", name: "Python"},
        {src: tailwind, alt: "tailwind", name: "Tailwind CSS"},
        {src: materialsui, alt: "materialsui", name: "Material-UI"},
        {src: ReactNative, alt: "reactnative", name: "React Native"},
        {src: typescript, alt: "typescript", name: "TypeScript"},
        {src: vscode, alt: "vscode", name: "VS Code"},
        {src: Expo, alt: "expo", name: "Expo"},
        {src: netlify, alt: "netlify", name: "Netlify"},
        {src: Firebase, alt: "firebase", name: "Firebase"},
        {src: MongoDB, alt: "mongodb", name: "MongoDB"},
        {src: Node, alt: "node", name: "Node.js"},
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
                            <img className="w-20 mb-2" src={skill.src} alt={skill.alt} />
                            <p className="mt-auto">{skill.name}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Skills;

// import React, {useEffect, useState} from 'react';
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css"; 
// import "slick-carousel/slick/slick-theme.css";
// import physics from "../Assets/physics.png";
// import github from "../Assets/github.png";
// import git from "../Assets/git.png";
// import js from "../Assets/js.png";
// import html from "../Assets/html.png";
// import css from "../Assets/css.png";
// import python from "../Assets/python.png";
// import tailwind from "../Assets/tailwind.png";
// import materialsui from "../Assets/materialsui.png";
// import ReactNative from "../Assets/ReactNative.png";
// import typescript from "../Assets/typescript.png";
// import vscode from "../Assets/vscode.png";
// import Expo from "../Assets/Expo.png";

// // importing lottie animation files
// import DisplayLottie from './Lottie/DisplayLottie';
// import Prof from './Lottie/Prof.json';

// // importing react icons only of proficiency
// import { FaHtml5, FaCss3, FaJs, FaPython } from 'react-icons/fa';
// import { SiTypescript } from "react-icons/si";
// import { VscCode  } from "react-icons/vsc";


// const Skills = () => {
//     const skills = [
//         {src: html, alt: "html", name: "HTML", proficiency: 70, icon: <FaHtml5 />},
//         {src: css, alt: "css", name: "CSS", proficiency: 80 , icon: <FaCss3 />},
//         {src: js, alt: "js", name: "JavaScript", proficiency: 70 , icon: <FaJs />},
//         {src: github, alt: "github", name: "Github"},
//         {src: git, alt: "git", name: "Git"},
//         {src: physics, alt: "react", name: "React JS"},
//         {src: python, alt: "python", name: "Python", proficiency: 90 , icon: <FaPython />},
//         {src: tailwind, alt: "tailwind", name: "Tailwind CSS"},
//         {src: materialsui, alt: "materialsui", name: "Materials UI"},
//         {src: ReactNative, alt: "reactnative", name: "React Native"},
//         {src: typescript, alt: "typescript", name: "TypeScript", proficiency: 50 , icon: <SiTypescript />},
//         {src: vscode, alt: "vscode", name: "VS Code", proficiency: 90 , icon: <VscCode  />},
//         {src: Expo, alt: "expo", name: "Expo"},
//     ];

//     const [slidesToShow, setSlidesToShow] = useState(3);

//     useEffect(() => {
//         const handleResize = () => {
//             if (window.innerWidth > 1100) {
//                 setSlidesToShow(3);
//             } else if (window.innerWidth > 600) {
//                 setSlidesToShow(2);
//             } else {
//                 setSlidesToShow(2);
//             }
//         };

//         handleResize();
//         window.addEventListener('resize', handleResize);

//         return () => {
//             window.removeEventListener('resize', handleResize);
//         };
//     }, []);

//     const settings = {
//         dots: false,
//         infinite: true,
//         speed: 500,
//         slidesToShow: slidesToShow,
//         slidesToScroll: 1,
//         autoPlay: true,
//         autoplaySpeed: 2000,
//     };

//     return (
//         <div name='skills' className="w-full min-h-screen bg-[#0a192f] text-gray-300">
//             <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
//                 <div>
//                     <p className="text-4xl inline text-[#416D19] border-pink-300 border-b-4 font-bold">Technology Stack</p>
//                     <p className="py-4">/ Some technologies I am familiar with. /</p>
//                 </div>

//                 <Slider {...settings} className='mt-20'>
//                     {skills.map((skill, index) => (
//                         <div key={index} className='text-center hover:-translate-y-1 mt-1 duration-500'>
//                             <img className="w-24 h-24 mx-auto" src={skill.src} alt={skill.alt} />
//                             <p className="mt-4 text-white text-xl">{skill.name}</p>
//                         </div>
//                     ))}
//                 </Slider>

//                 <div className="mt-10 mb-12 flex items-start">
//                     <div className="w-full">
//                         {skills.map((skill, index) => (
//                             <div key={index} className="mb-2">
//                                 {skill.proficiency !== undefined && (
//                                     <>
//                                         <div className="flex items-center">
//                                             <p className="text-white text-lg mb-1">{skill.name}</p>
//                                             {skill.icon && ( 
//                                                 <div className="ml-2 mb-1 text-2xl text-green-300">{skill.icon}</div>
//                                             )}
//                                         </div>

//                                         <div className="w-full bg-gray-700 rounded-full h-3">
//                                             <div 
//                                                 className="bg-green-500 h-3 rounded-full" 
//                                                 style={{ width: `${skill.proficiency}%` }}
//                                             ></div>
//                                         </div>
//                                         {/* <p className="text-gray-400 mt-1 text-sm">{skill.proficiency}%</p> */}
//                                     </>
//                                 )}
//                             </div>
//                         ))}
//                     </div>
//                     <div className="w-2/4 ml-4 hidden md:block">
//                         <DisplayLottie animationData={Prof} />
//                     </div>
//                 </div>

//             </div>
//         </div>
//     );
// };

// export default Skills;
