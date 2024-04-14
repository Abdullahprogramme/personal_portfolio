import React from "react";
import BMI from "../Assets/BMI.jpg";
import space from "../Assets/space.png";
import Password from "../Assets/Password.jpg";
import test from "../Assets/test.png";
import PasswordGenerator from "../Assets/PasswordGenerator.png";
import ProjectCard1 from "./ProjectCard1";
import ProjectCard2 from "./ProjectCard2";
import Weather from "../Assets/Weather.jpg";
import QuadTree from "../Assets/QuadTree.png";

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
                        detailed={"This is a BMI calculator application made using React JS. It calculates the BMI of the user and gives advice based on the BMI. The user can get advice on how to maintain their BMI and stay healthy."}
                    />

                    {/* Password generator */}
                    <ProjectCard1 
                        image={PasswordGenerator} 
                        title={"Password Generator"} 
                        description={"Generate strong passwords using this password generator"} 
                        appLink={"https://passforge.netlify.app"} 
                        codeLink={"https://github.com/Abdullahprogramme/Password_Generator"}
                        detailed={"This is a password generator application made using React JS. It generates strong passwords for the user. The user can select the length of the password and choose to include numbers, symbols, and uppercase letters. The user can also copy the password to the clipboard and change the theme of the application."}
                    />
                    
                    {/* Weather App */}
                    <ProjectCard1 
                        image={Weather} 
                        title={"Weather App"} 
                        description={"Check the weather of any city using this weather app"} 
                        appLink={"https://skyswift.netlify.app"} 
                        codeLink={"https://github.com/Abdullahprogramme/Weather-App"}
                        detailed={"This is a weather application made using React JS. It shows the weather of any city in the world. The user can search for the city and get the weather details of the city. The user can see the temperature, humidity, and weather condition of the city. Also, the user can see the weather forecast for the next 5 days."}
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
                        detailed={"This is a quiz application made using Tkinter in Python. The user can test their knowledge by answering the questions in the quiz. The questions are randomly selected from a set of questions. The user can see their score at the end of the quiz."}
                    />
                    
                    {/* Password manager */}
                    <ProjectCard2 
                        image={Password} 
                        title={"Password manager"} 
                        description={"Store your passwords securely by this password manager"} 
                        codeLink={"https://github.com/Abdullahprogramme/additonal-programs/blob/main/password%20manager.py"}
                        detailed={"This is a password manager application made using Python. The user can store their passwords securely in the password manager. The user can add, view, and delete passwords. The passwords are stored in a text file."}
                    />
                    
                    {/* Pygame application */}
                    <ProjectCard2 
                        image={space} 
                        title={"Pygame application"} 
                        description={"A retro game of space invaders using Pygame"} 
                        codeLink={"https://github.com/Abdullahprogramme/PyGame/tree/main/Space%20Invaders"}
                        detailed={"This is a game application made using Pygame in Python. The user can play a retro game of space invaders. The user can move the spaceship and shoot the aliens. The user can see their score live on the screen."}
                    />

                    {/* QuadTree application */}
                    <ProjectCard2 
                        image={QuadTree}
                        title={"QuadTree application"}
                        description={"Compress images using QuadTree algorithm in Python"} 
                        codeLink={"https://github.com/Abdullahprogramme/DSA-Project"}
                        detailed={"This is an image compression application made using the QuadTree algorithm in Python. The user can compress images using the QuadTree algorithm. The frontend is made using PyQT5. The user can see the download the compressed image and view the original and compressed image."}
                        />
                </div>
            </div>
        </div>
    )
};

export default Work;
