import React, { useState } from 'react';
import { FaCode, FaFileCode, FaFolder, FaTerminal, FaSun, FaMoon } from 'react-icons/fa';
import { VscDebugAlt, VscSourceControl, VscExtensions } from "react-icons/vsc";

const achievements = [
    'Achieved the organizer position of GDG',
    'Built a personal portfolio website',
    'Learnt over 5 programming languages',
];

const Achievement = () => {
    const [darkMode, setDarkMode] = useState(true);

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
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
                    <div className="flex-1 p-4 overflow-y-auto">
                        <div className={`${darkMode ? 'bg-gray-700' : 'bg-gray-200'} p-4 rounded-lg h-full border border-gray-600`}>
                            {achievements.map((achievement, index) => (
                                <p contentEditable='true' key={index} className={`text-xs sm:text-sm font-mono ${darkMode ? 'text-white' : 'text-black'} mb-2`}>
                                    {`${index + 1} `}
                                    <span style={{ color: 'red' }}>&lt;p&gt;</span>
                                    {` ${achievement} `}
                                    <span style={{ color: 'red' }}>&lt;/p&gt;</span>
                                </p>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Achievement;
