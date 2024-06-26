import React, {useEffect} from "react";
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
                        // description={"Check your body mass index and seek advice"} 
                        appLink={"https://check-body-mass-index.netlify.app/"} 
                        codeLink={"https://github.com/Abdullahprogramme/BMI-calculator"}
                        detailed={"This is a BMI calculator application made using React JS. It calculates the BMI of the user and gives advice based on the BMI. The user can get advice on how to maintain their BMI and stay healthy."}
                    />

                    {/* Password generator */}
                    <ProjectCard 
                        image={PasswordGenerator} 
                        title={"Password Generator"} 
                        // description={"Generate strong passwords using this password generator"} 
                        appLink={"https://passforge.netlify.app"} 
                        codeLink={"https://github.com/Abdullahprogramme/Password_Generator"}
                        detailed={"This is a password generator application made using React JS. It generates strong passwords for the user. The user can select the length of the password and choose to include numbers, symbols, and uppercase letters. The user can also copy the password to the clipboard and change the theme of the application."}
                    />
                    
                    {/* Weather App */}
                    <ProjectCard 
                        image={Weather} 
                        title={"Weather App"} 
                        // description={"Check the weather of any city using this weather app"} 
                        appLink={"https://skyswift.netlify.app"} 
                        codeLink={"https://github.com/Abdullahprogramme/Weather-App"}
                        detailed={"This is a weather application made using React JS. It shows the weather of any city in the world. The user can search for the city and get the weather details of the city. The user can see the temperature, humidity, and weather condition of the city. Also, the user can see the weather forecast for the next 5 days."}
                    />

                    {/* Movie Recommender */}
                    <ProjectCard
                        image={Movie}
                        title={"Movie Recommender"}
                        // description={"Get movie recommendations based on your favourite genre"}
                        appLink={"https://cine-choice.netlify.app/"} 
                        codeLink={"https://github.com/Abdullahprogramme/Movie-Recommender"}
                        detailed={"This is a movie recommendation application made using React JS, Materials UI and Tailwind CSS. The user can get movie recommendations based on their chosen genre, period and so on. The user can see the movie details and the overview of the movie. Provides signup and login functionality."}
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
                        // description={"Test your knowledge by this interactive quiz"} 
                        codeLink={"https://github.com/Abdullahprogramme/APS-Project/"}
                        detailed={"This is a quiz application made using Tkinter in Python. The user can test their knowledge by answering the questions in the quiz. The questions are randomly selected from a set of questions. The user can see their score at the end of the quiz."}
                    />
                    
                    {/* Password manager */}
                    <ProjectCard
                        image={Password} 
                        title={"Password manager"} 
                        // description={"Store your passwords securely by this password manager"} 
                        codeLink={"https://github.com/Abdullahprogramme/additonal-programs/blob/main/password%20manager.py"}
                        detailed={"This is a password manager application made using Python. The user can store their passwords securely in the password manager. The user can add, view, and delete passwords. The passwords are stored in a text file."}
                    />
                    
                    {/* Pygame application */}
                    <ProjectCard
                        image={space} 
                        title={"Pygame application"} 
                        // description={"A retro game of space invaders using Pygame"} 
                        codeLink={"https://github.com/Abdullahprogramme/PyGame/tree/main/Space%20Invaders"}
                        detailed={"This is a game application made using Pygame in Python. The user can play a retro game of space invaders. The user can move the spaceship and shoot the aliens. The user can see their score live on the screen."}
                    />

                    {/* QuadTree application */}
                    <ProjectCard
                        image={QuadTree}
                        title={"QuadTree application"}
                        // description={"Compress images using QuadTree algorithm in Python"} 
                        appLink={"https://quadracompress.streamlit.app/"}
                        codeLink={"https://github.com/Abdullahprogramme/DSA-Project"}
                        detailed={"This is an image compression application made using the QuadTree algorithm in Python. The user can compress images using the QuadTree algorithm. The frontend is made using PyQT5. The app's front-end is made using streamlit. The user can see the download the compressed image and view the original and compressed image."}
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
                        // description={"Perform basic arithmetic operations using this calculator"}
                        codeLink={"https://github.com/Abdullahprogramme/PRODIGY_AD_01"}
                        detailed={"This is a calculator application made using React Native. The user can perform basic arithmetic operations using this calculator. The user can add, subtract, multiply, and divide numbers. The user can also clear the input and delete the last digit."}
                    />
                    
                    {/* QR code generator */}
                    <ProjectCard
                        image={QRcode}
                        title={"QR Code Reader"}
                        // description={"Read QR codes using this QR code reader"}
                        codeLink={"https://github.com/Abdullahprogramme/PRODIGY_AD_05"}
                        detailed={"This is a QR code reader application made using React Native. The user can read QR codes using this QR code reader. The user can scan the QR code using the camera of the device. The user can see the content of the QR code, wether it is a URL, text, or contact information."}
                    />
                    
                    {/* Tic Tac Toe */}
                    <ProjectCard
                        image={TicTacToe}
                        title={"Tic Tac Toe"}
                        // description={"Play the classic game of tic tac toe"}
                        codeLink={"https://github.com/Abdullahprogramme/PRODIGY_AD_04"}
                        detailed={"This is a tic tac toe application made using React Native. The user can play the classic game of tic tac toe using this application. The user can play against the computer or another player. The user can see the winner of the game."}
                    />

                    {/* Stop Watch */}
                    <ProjectCard
                        image={StopWatch}
                        title={"Stop Watch"}
                        // description={"Use this stop watch to measure time intervals"} 
                        codeLink={"https://github.com/Abdullahprogramme/PRODIGY_AD_03"}
                        detailed={"This is a stopwatch application made using React Native. The user can measure time intervals using this stopwatch. The user can start, stop, and reset the stopwatch."}
                    />

                    {/* To Do List */}
                    <ProjectCard
                        image={ToDoList}
                        title={"To Do List"}
                        // description={"Create a to-do list using this application"}
                        codeLink={"https://github.com/Abdullahprogramme/ToDoList"}
                        detailed={"This is a to-do list application made using React Native. The user can create a to-do list using this application. The user can add, view, and delete tasks. With a very simple and user-friendly interface, the user can easily manage their tasks."}
                    />
                </div>
                : null }


            </div>
        </div>
    )
};

export default Work;
