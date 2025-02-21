import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

// Import project images
import BMI from "../Assets/BMI.jpg";
import space from "../Assets/space.png";
import Password from "../Assets/Password.jpg";
import test from "../Assets/test.png";
import PasswordGenerator from "../Assets/PasswordGenerator.png";
import ProjectCard from "./ProjectCard2";
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

const reactProjects = [
    {
        image: BMI,
        title: "BMI Calculator",
        appLink: "https://check-body-mass-index.netlify.app/",
        codeLink: "https://github.com/Abdullahprogramme/BMI-calculator",
        detailed: "A simple tool to calculate body mass index and offer personalized advice on maintaining a healthy BMI.",
        techStack: ["React JS", "Tailwind CSS", "HTML", "CSS"]
    },
    {
        image: PasswordGenerator,
        title: "Password Generator",
        appLink: "https://passforge.netlify.app",
        codeLink: "https://github.com/Abdullahprogramme/Password_Generator",
        detailed: "An application that generates secure passwords based on user preferences like length and characters.",
        techStack: ["React JS", "Tailwind CSS", "Material-UI", "HTML", "CSS"]
    },
    {
        image: Weather,
        title: "Weather App",
        appLink: "https://skyswift.netlify.app",
        codeLink: "https://github.com/Abdullahprogramme/Weather-App",
        detailed: "Check the weather of any city, including temperature, humidity, and forecasts for the next five days.",
        techStack: ["React JS", "Tailwind CSS", "Framer Motion", "HTML", "CSS"]
    },
    {
        image: Movie,
        title: "Movie Recommender",
        appLink: "https://cine-choice.netlify.app/",
        codeLink: "https://github.com/Abdullahprogramme/Movie-Recommender",
        detailed: "Offers personalized movie recommendations and details based on user preferences.",
        techStack: ["React JS", "Material-UI", "Tailwind CSS", "Firebase", "HTML", "CSS"]
    },
    {
        image: Bot,
        title: "Fitbot",
        appLink: "https://fit-bot.netlify.app/",
        codeLink: "https://github.com/Abdullahprogramme/Fitbot",
        detailed: "A chatbot that provides fitness-related advice and answers users' questions.",
        techStack: ["React JS", "Material-UI", "Gemini", "Firebase", "Tailwind CSS", "HTML", "CSS"]
    },
    {
        image: editor,
        title: "Web Editor",
        appLink: "https://live-web-editor.netlify.app/",
        codeLink: "https://github.com/Abdullahprogramme/web_editor",
        detailed: "An online code editor that allows users to write, edit, and preview HTML and CSS code in real-time.",
        techStack: ["React JS", "Tailwind CSS", "HTML", "CSS"]
    }
];

const pythonProjects = [
    {
        image: test,
        title: "Tkinter application",
        codeLink: "https://github.com/Abdullahprogramme/APS-Project/",
        detailed: "A quiz application where users answer random questions and receive a score at the end.",
        techStack: ["Python", "Tkinter"]
    },
    {
        image: Password,
        title: "Password manager",
        codeLink: "https://github.com/Abdullahprogramme/additonal-programs/blob/main/password%20manager.py",
        detailed: "A secure tool for storing, viewing, and managing passwords.",
        techStack: ["Python"]
    },
    {
        image: space,
        title: "Pygame application",
        codeLink: "https://github.com/Abdullahprogramme/PyGame/tree/main/Space%20Invaders",
        detailed: "A retro-style space shooter game where players control a spaceship to defeat enemies.",
        techStack: ["Python", "Pygame"]
    },
    {
        image: QuadTree,
        title: "QuadTree application",
        appLink: "https://quadracompress.streamlit.app/",
        codeLink: "https://github.com/Abdullahprogramme/DSA-Project",
        detailed: "An app that compresses images, allowing users to view and compare the original and compressed versions.",
        techStack: ["Python", "Streamlit", "PyQt5"]
    }
];

const reactNativeProjects = [
    {
        image: Calculator,
        title: "Calculator",
        codeLink: "https://github.com/Abdullahprogramme/PRODIGY_AD_01",
        detailed: "A basic calculator for performing arithmetic operations and managing inputs.",
        techStack: ["React Native", "Expo"]
    },
    {
        image: QRcode,
        title: "QR Code Reader",
        codeLink: "https://github.com/Abdullahprogramme/PRODIGY_AD_05",
        detailed: "A reader that scans and displays the content of QR codes, whether text, URLs, or contacts.",
        techStack: ["React Native", "Expo"]
    },
    {
        image: TicTacToe,
        title: "Tic Tac Toe",
        codeLink: "https://github.com/Abdullahprogramme/PRODIGY_AD_04",
        detailed: "A classic game where users can play against another player or the computer.",
        techStack: ["React Native", "Expo"]
    },
    {
        image: StopWatch,
        title: "Stop Watch",
        codeLink: "https://github.com/Abdullahprogramme/PRODIGY_AD_03",
        detailed: "A stopwatch for tracking time intervals, with start, stop, and reset functionality.",
        techStack: ["React Native", "Expo"]
    },
    {
        image: ToDoList,
        title: "To Do List",
        codeLink: "https://github.com/Abdullahprogramme/ToDoList",
        detailed: "A simple application for users to add, view, and manage tasks in a to-do list.",
        techStack: ["React Native", "Expo"]
    },
    {
        image: Recipe,
        title: "Recipe App",
        codeLink: "https://github.com/Abdullahprogramme/RecipeApp",
        detailed: "A tool for users to save, view, and manage their favorite recipes along with ingredients and instructions.",
        techStack: ["React Native", "Expo"]
    }
];

const HorizontalScroll = ({ projects }) => {
    const horizontalRef = useRef(null);

    const { scrollYProgress } = useScroll({
        target: horizontalRef,
    });

    // scrolling from right to left
    const x = useTransform(scrollYProgress, [0, 1], ["0%", "-100%"]);

    return (
        <section ref={horizontalRef} className="relative h-[200vh] bg-inherit">
            <div className="sticky top-20 h-screen bg-inherit flex items-center overflow-hidden">
                <motion.div className="flex gap-10 ml-6" style={{ x, width: `${projects.length * 1000}px` }}>
                    {projects.map((project, index) => (
                        <ProjectCard
                            key={index}
                            image={project.image}
                            title={project.title}
                            appLink={project.appLink}
                            codeLink={project.codeLink}
                            detailed={project.detailed}
                            techStack={project.techStack}
                        />
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

const Work2 = () => {
    return (
        <div name='work' className="w-full min-h-screen text-gray-300 bg-[#0a192f]">
            <div className="max-w-[1000px] mx-auto flex flex-col justify-center w-full h-full">
                <div className="pl-4 pt-4">
                    <p className="text-4xl font-bold inline border-b-4 text-[#416D19] border-pink-300">Work</p>
                    <p className="py-6">/ Check out my previous works. /</p>
                </div>

                <HorizontalScroll projects={reactProjects} />
                <HorizontalScroll projects={pythonProjects} />
                <HorizontalScroll projects={reactNativeProjects} />

            </div>
        </div>
    );
};

export default Work2;