import React, { useState } from 'react';
import { FaCode, FaFileCode, FaFolder, FaTerminal, FaSun, FaMoon } from 'react-icons/fa';
import { VscDebugAlt, VscSourceControl, VscExtensions, VscClose, VscChevronDown, VscChevronUp } from "react-icons/vsc";
import { RiTerminalBoxLine } from "react-icons/ri";

// add your achievements here
const achievements = [
    'Built a personal portfolio website',
    'Achieved the organizer position of GDG',
    'Learnt over 6 programming languages',
    'Learnt full-stack web development',
];

const Achievement = () => {
    const [darkMode, setDarkMode] = useState(true);
    const [isTerminalOpen, setIsTerminalOpen] = useState(true);

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    };

    const toggleTerminal = () => {
        setIsTerminalOpen(!isTerminalOpen);
    };

    return (
        <div className="bg-[#0a192f] text-white min-h-screen flex items-center justify-center p-4">
            <div className={`${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-black'} w-full max-w-2xl lg:max-w-4xl h-96 flex flex-col rounded-lg shadow-lg overflow-hidden`}>
                {/* Top Bar */}
                <div className={`${darkMode ? 'bg-gray-800' : 'bg-gray-300'} p-2 flex items-center justify-between rounded-t-lg border-b border-gray-700`}>
                    <div className="flex items-center">
                        <FaCode className="text-blue-500 mr-2" />
                        <span className="text-sm font-semibold">VS Code - Achievement.js</span>
                    </div>
                    <button onClick={toggleDarkMode} className="focus:outline-none">
                        {darkMode ? <FaSun className="text-yellow-500" /> : <FaMoon className="text-gray-800" />}
                    </button>
                </div>

                {/* Main Content */}
                <div className="flex flex-1 overflow-hidden">
                    {/* Sidebar */}
                    <div className={`${darkMode ? 'bg-gray-800' : 'bg-gray-300'} w-16 flex flex-col items-center py-4 border-r border-gray-700`}>
                        <FaFileCode className={`${darkMode ? 'text-gray-400' : 'text-gray-600'} mb-4`} />
                        <FaFolder className={`${darkMode ? 'text-gray-400' : 'text-gray-600'} mb-4`} />
                        <FaTerminal className={`${darkMode ? 'text-gray-400' : 'text-gray-600'} mb-4`} />
                        <VscDebugAlt className={`${darkMode ? 'text-gray-400' : 'text-gray-600'} mb-4`} />
                        <VscSourceControl className={`${darkMode ? 'text-gray-400' : 'text-gray-600'} mb-4`} />
                        <VscExtensions className={`${darkMode ? 'text-gray-400' : 'text-gray-600'} mb-4`} />
                    </div>

                    {/* Achievements Content */}
                    <div className="flex-1 flex flex-col overflow-hidden">
                        <div className={`${darkMode ? 'bg-gray-700' : 'bg-gray-200'} p-4  flex-1 overflow-y-auto border border-gray-600`}>
                            {achievements.map((achievement, index) => (
                                <p key={index} className={`text-xs sm:text-sm font-mono ${darkMode ? 'text-white' : 'text-black'} mb-2`}>
                                    {`${index + 1}. `}
                                    <span style={{ color: 'red' }}>&lt;p&gt;</span>
                                    {` ${achievement} `}
                                    <span style={{ color: 'red' }}>&lt;/p&gt;</span>
                                </p>
                            ))}
                        </div>

                        {/* Terminal */}
                        <div className={`${darkMode ? 'bg-gray-800' : 'bg-gray-300'} ${isTerminalOpen ? 'h-24' : 'h-8'} transition-all duration-300 ease-in-out border-t border-gray-700`}>
                            <div className="flex items-center justify-between p-2 border-b border-gray-700">
                                <div className="flex items-center">
                                    <FaTerminal className="text-blue-500 mr-2" />
                                    <span className="text-sm font-semibold">Terminal</span>
                                </div>
                                <div className="flex items-center">
                                    <RiTerminalBoxLine className="text-gray-400 mr-2" />
                                    <p className="text-xs font-mono text-gray-400 mr-2">bash</p>
                                    <button onClick={toggleTerminal} className="focus:outline-none mr-2">
                                        {isTerminalOpen ? <VscChevronDown className="text-gray-400" /> : <VscChevronUp className="text-gray-400" />}
                                    </button>
                                    <button className="focus:outline-none">
                                        <VscClose className="text-gray-400" />
                                    </button>
                                </div>
                            </div>
                            {isTerminalOpen && (
                                <div className="p-2 text-xs font-mono text-white overflow-y-auto">
                                    {/* Add your terminal commands here */}
                                    <p>abdullah@portfolio:~$ echo "Welcome to the terminal!"</p>
                                    <p>Welcome to the terminal!</p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Achievement;
