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
    // add or remove skills as needed, change the src and alt attributes and add those images in the Assets folder
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
