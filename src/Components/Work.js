import React from "react";
import BMI from "../Assets/BMI.jpg";
import space from "../Assets/space.png";
import Password from "../Assets/Password.jpg";
import test from "../Assets/test.png";
import PasswordGenerator from "../Assets/PasswordGenerator.png";
import ProjectCard1 from "./ProjectCard1";
import ProjectCard2 from "./ProjectCard2";
import Weather from "../Assets/Weather.jpg";

const Work = () => {
    return (
        <div name='work' className="w-full min-h-screen text-gray-300 bg-[#0a192f]">
            <div className="max-w-[1000px] mx-auto flex flex-col justify-center w-full h-full">
                <div className="pb-8 pl-4 pt-4">
                    <p className="text-4xl font-bold inline border-b-4 text-[#416D19] border-pink-300">Work</p>
                    <p className="py-6">/ Check out my previous works. /</p>
                </div>
                
                {/* React JS Heading */}
                <div className="pb-4 pl-4">
                    <p className="text-2xl font-bold inline text-[#416D19]">React JS</p>
                </div>

                {/* React JS Projects */}
                <div className="grid sm:grid-cols-2 pl-2 pr-2 md:grid-cols-3 gap-4">
                    {/* BMI calculator */}
                    <ProjectCard1 
                        image={BMI} 
                        title={"React JS application"} 
                        description={"Check your body mass index and seek advice"} 
                        appLink={"https://check-body-mass-index.netlify.app/"} 
                        codeLink={"https://github.com/Abdullahprogramme/BMI-calculator"}
                    />

                    {/* Password generator */}
                    <ProjectCard1 
                        image={PasswordGenerator} 
                        title={"Password Generator"} 
                        description={"Generate strong passwords using this password generator"} 
                        appLink={"https://passforge.netlify.app"} 
                        codeLink={"https://github.com/Abdullahprogramme/Password_Generator"}
                    />
                    
                    {/* Weather App */}
                    <ProjectCard1 
                        image={Weather} 
                        title={"Weather App"} 
                        description={"Check the weather of any city using this weather app"} 
                        appLink={"https://skyswift.netlify.app"} 
                        codeLink={"https://github.com/Abdullahprogramme/Weather-App"}
                    />
                </div>

                {/* Python Heading */}
                <div className="pb-4 pl-4 pt-8">
                    <p className="text-2xl font-bold inline text-[#416D19]">Python</p>
                </div>

                {/* Python Projects */}
                <div className="grid sm:grid-cols-2 pl-2 pr-2 md:grid-cols-3 gap-4">
                    {/* Tkinter application */}
                    <ProjectCard2 
                        image={test} 
                        title={"Tkinter application"} 
                        description={"Test your knowledge by this interactive quiz"} 
                        codeLink={"https://github.com/Abdullahprogramme/APS-Project/"}
                    />
                    
                    {/* Password manager */}
                    <ProjectCard2 
                        image={Password} 
                        title={"Password manager"} 
                        description={"Store your passwords securely by this password manager"} 
                        codeLink={"https://github.com/Abdullahprogramme/additonal-programs/blob/main/password%20manager.py"}
                    />
                    
                    {/* Pygame application */}
                    <ProjectCard2 
                        image={space} 
                        title={"Pygame application"} 
                        description={"A retro game of space invaders using Pygame"} 
                        codeLink={"https://github.com/Abdullahprogramme/PyGame/tree/main/Space%20Invaders"}
                    />
                </div>
            </div>
        </div>
    )
};

export default Work;
