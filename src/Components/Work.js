import React, {useEffect} from "react";

// Import project images
import BMI from "../Assets/BMI.jpg";
import space from "../Assets/space.png";
import Password from "../Assets/Password.jpg";
import test from "../Assets/test.png";
import PasswordGenerator from "../Assets/PasswordGenerator.png";
import ProjectCard from "./ProjectCard";
import Weather from "../Assets/Weather.jpg";
import QuadTree from "../Assets/QuadTree.png";
import Movie from "../Assets/Movie.jpg";
import TicTacToe from "../Assets/TicTacToe.jpg";
import StopWatch from "../Assets/StopWatch.jpg";
import Calculator from "../Assets/Calculator.jpg";
import QRcode from "../Assets/QRcode.jpg";
import ToDoList from "../Assets/ToDoList.jpg";
import Recipe from "../Assets/Recipe.jpg";
import Bot from "../Assets/Bot.jpg";
import editor from "../Assets/editor.jpg";
import Graph from "../Assets/Graph.png";

const Work = () => {

    const types = ['React JS', 'Python', 'React Native', 'All'];
    const [selectedType, setSelectedType] = React.useState('All');
    const [animate, setAnimate] = React.useState(false);

    useEffect(() => {
        setAnimate(false); // Reset animation state
        const timer = setTimeout(() => setAnimate(true), 10); // Brief delay to reset and apply animation
        return () => clearTimeout(timer);
    }, [selectedType]);

    return (
        <div name='work' className="w-full min-h-screen text-gray-300 bg-[#0a192f]">
            <div className="max-w-[1000px] mx-auto flex flex-col justify-center w-full h-full">
                <div className="pb-8 pl-4 pt-4">
                    <p className="text-4xl font-bold inline border-b-4 text-[#416D19] border-pink-300">Work</p>
                    <p className="py-6">/ Check out my previous works. /</p>
                </div>
                
                {/* Filter buttons */}
                <div className="flex justify-center pb-8 space-x-4">
                    {types.map((type, index) => (
                        <button 
                            key={index} 
                            onClick={() => setSelectedType(type)} 
                            className={`px-2 py-1 text-sm font-semibold rounded-lg transition-all duration-150 sm:px-4 sm:py-2 sm:text-lg ${selectedType === type ? 'bg-green-600 text-white shadow-lg shadow-green-600/50' : 'bg-[#0a192f] text-gray-300 border border-gray-700 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50'}`}
                            style={{
                                boxShadow: selectedType === type ? '' : 'inset 5px 5px 10px #050f1f, inset -5px -5px 10px #0f2b4f'
                            }}
                        >
                            {type}
                        </button>
                    ))}
                </div>

            

                
                {/* React JS Heading */}
                {/* <div className="pb-4 pl-4">
                    <p className="text-2xl font-bold inline text-[#416D19]">React JS</p>
                </div> */}

                {/* React JS Projects */}
                { selectedType === 'React JS' || selectedType === 'All' ?
                <div className={`grid pb-8 sm:grid-cols-2 pl-6 pr-6 sm:pl-2 sm:pr-2 md:grid-cols-3 gap-4 ${animate ? 'fadeIn' : ''}`}>
                    {/* BMI calculator */}
                    <ProjectCard
                        image={BMI} 
                        title={"BMI Calculator"}  
                        appLink={"https://check-body-mass-index.netlify.app/"} 
                        codeLink={"https://github.com/Abdullahprogramme/BMI-calculator"}
                        detailed={"A simple tool to calculate body mass index and offer personalized advice on maintaining a healthy BMI."}
                        techStack={["React JS", "Tailwind CSS", "HTML", "CSS"]}
                    />

                    {/* Password generator */}
                    <ProjectCard 
                        image={PasswordGenerator} 
                        title={"Password Generator"}  
                        appLink={"https://passforge.netlify.app"} 
                        codeLink={"https://github.com/Abdullahprogramme/Password_Generator"}
                        detailed={"An application that generates secure passwords based on user preferences like length and characters."}
                        techStack={["React JS", "Tailwind CSS", "Material-UI", "HTML", "CSS"]}
                    />
                    
                    {/* Weather App */}
                    <ProjectCard 
                        image={Weather} 
                        title={"Weather App"}
                        appLink={"https://skyswift.netlify.app"} 
                        codeLink={"https://github.com/Abdullahprogramme/Weather-App"}
                        detailed={"Check the weather of any city, including temperature, humidity, and forecasts for the next five days."}
                        techStack={["React JS", "Tailwind CSS", "Framer Motion", "HTML", "CSS"]}
                    />

                    {/* Movie Recommender */}
                    <ProjectCard
                        image={Movie}
                        title={"Movie Recommender"}
                        appLink={"https://cine-choice.netlify.app/"} 
                        codeLink={"https://github.com/Abdullahprogramme/Movie-Recommender"}
                        detailed={"Offers personalized movie recommendations and details based on user preferences."}
                        techStack={["React JS", "Material-UI", "Tailwind CSS", "Firebase", "HTML", "CSS"]}
                    />

                    {/* Chatbot */}
                    <ProjectCard
                        image={Bot}
                        title={"Fitbot"}
                        codeLink={"https://github.com/Abdullahprogramme/Fitbot"}
                        appLink={"https://fit-bot.netlify.app/"} 
                        detailed={"A chatbot that provides fitness-related advice and answers users' questions."}
                        techStack={["React JS", 'Material-UI', 'Gemini', 'Firebase', 'Tailwind CSS', 'HTML', 'CSS']}
                    />

                    {/* Web editor */}
                    <ProjectCard
                        image={editor}
                        title={"Web Editor"}
                        codeLink={"https://github.com/Abdullahprogramme/web_editor"}
                        appLink={"https://live-web-editor.netlify.app/"}
                        detailed={"An online code editor that allows users to write, edit, and preview HTML and CSS code in real-time."}
                        techStack={["React JS", "Tailwind CSS", "HTML", "CSS"]}
                    />

                    {/* Graph visualizer */}
                    <ProjectCard
                        image={Graph}
                        title={"Graph Visualizer"}
                        codeLink={"https://github.com/Abdullahprogramme/Graph-Visualizer"}
                        appLink={"https://graphvizs.vercel.app/"}
                        detailed={"A tool for making and visualizing graphs, allowing users to create and run algorithms on them."}
                        techStack={["Next JS", "Tailwind CSS", "HTML", "CSS", "Shadcn UI", "Cytoscape"]}
                    />
                    </div>
                : null }

                {/* Python Heading */}
                {/* <div className="pb-4 pl-4 pt-8">
                    <p className="text-2xl font-bold inline text-[#416D19]">Python</p>
                </div> */}

                {/* Python Projects */}
                { selectedType === 'Python' || selectedType === 'All' ?
                <div className={`grid pb-8 sm:grid-cols-2 pl-6 pr-6 sm:pl-2 sm:pr-2 md:grid-cols-3 gap-4 ${animate ? 'fadeIn' : ''}`}>
                    {/* Tkinter application */}
                    <ProjectCard 
                        image={test} 
                        title={"Tkinter application"}  
                        codeLink={"https://github.com/Abdullahprogramme/APS-Project/"}
                        detailed={"A quiz application where users answer random questions and receive a score at the end."}
                        techStack={["Python", "Tkinter"]}
                    />
                    
                    {/* Password manager */}
                    <ProjectCard
                        image={Password} 
                        title={"Password manager"}  
                        codeLink={"https://github.com/Abdullahprogramme/additonal-programs/blob/main/password%20manager.py"}
                        detailed={"A secure tool for storing, viewing, and managing passwords."}
                        techStack={["Python"]}
                    />
                    
                    {/* Pygame application */}
                    <ProjectCard
                        image={space} 
                        title={"Pygame application"}  
                        codeLink={"https://github.com/Abdullahprogramme/PyGame/tree/main/Space%20Invaders"}
                        detailed={"A retro-style space shooter game where players control a spaceship to defeat enemies."}
                        techStack={["Python", "Pygame"]}
                    />

                    {/* QuadTree application */}
                    <ProjectCard
                        image={QuadTree}
                        title={"QuadTree application"}
                        appLink={"https://quadracompress.streamlit.app/"}
                        codeLink={"https://github.com/Abdullahprogramme/DSA-Project"}
                        detailed={"An app that compresses images, allowing users to view and compare the original and compressed versions."}
                        techStack={["Python", "Streamlit", "PyQt5"]}
                    />
                </div>
                : null }

                {/* React Native Heading */}
                {/* <div className="pb-4 pl-4 pt-8">
                    <p className="text-2xl font-bold inline text-[#416D19]">React Native</p>
                </div> */}

                {/* React Native Projects */}
                { selectedType === 'React Native' || selectedType === 'All' ?
                <div className={`grid pb-8 sm:grid-cols-2 pl-6 pr-6 sm:pl-2 sm:pr-2 md:grid-cols-3 gap-4 ${animate ? 'fadeIn' : ''}`}>
                    {/* Calculator */}
                    <ProjectCard 
                        image={Calculator}
                        title={"Calculator"} 
                        codeLink={"https://github.com/Abdullahprogramme/PRODIGY_AD_01"}
                        detailed={"A basic calculator for performing arithmetic operations and managing inputs."}
                        techStack={["React Native", "Expo"]}
                    />
                    
                    {/* QR code generator */}
                    <ProjectCard
                        image={QRcode}
                        title={"QR Code Reader"}
                        codeLink={"https://github.com/Abdullahprogramme/PRODIGY_AD_05"}
                        detailed={"A reader that scans and displays the content of QR codes, whether text, URLs, or contacts."}
                        techStack={["React Native", "Expo"]}
                    />
                    
                    {/* Tic Tac Toe */}
                    <ProjectCard
                        image={TicTacToe}
                        title={"Tic Tac Toe"}
                        codeLink={"https://github.com/Abdullahprogramme/PRODIGY_AD_04"}
                        detailed={"A classic game where users can play against another player or the computer."}
                        techStack={["React Native", "Expo"]}
                    />

                    {/* Stop Watch */}
                    <ProjectCard
                        image={StopWatch}
                        title={"Stop Watch"} 
                        codeLink={"https://github.com/Abdullahprogramme/PRODIGY_AD_03"}
                        detailed={"A stopwatch for tracking time intervals, with start, stop, and reset functionality."}
                        techStack={["React Native", "Expo"]}
                    />

                    {/* To Do List */}
                    <ProjectCard
                        image={ToDoList}
                        title={"To Do List"}
                        codeLink={"https://github.com/Abdullahprogramme/ToDoList"}
                        detailed={"A simple application for users to add, view, and manage tasks in a to-do list."}
                        techStack={["React Native", "Expo"]}
                    />

                    {/* Recipe App */}
                    <ProjectCard
                        image={Recipe}
                        title={"Recipe App"}
                        codeLink={"https://github.com/Abdullahprogramme/RecipeApp"} 
                        detailed={"A tool for users to save, view, and manage their favorite recipes along with ingredients and instructions."}
                        techStack={["React Native", "Expo"]}
                    />

                </div>
                : null }


            </div>
        </div>
    )
};

export default Work;
