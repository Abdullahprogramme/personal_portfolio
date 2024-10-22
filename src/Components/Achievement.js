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

// add your language styles of the languages you have learnt here or remove the ones you don't need
const languageStyles = {
    'Visual Basic': (achievement, index) => `Dim achievement${index} As String = "${achievement}"`,
    'HTML': (achievement, index) => `&lt;p&gt; ${achievement} &lt;/p&gt;`,
    'CSS': (achievement, index) => `.achievement-${index}::after { content: "${achievement}"; }`,
    'Python': (achievement, index) => `achievement_${index} = "${achievement}"`,
    'Javascript': (achievement, index) => `const achievement${index} = "${achievement}";`,
    'Typescript': (achievement, index) => `const achievement${index}: string = "${achievement}";`,
    'C++': (achievement, index) => `std::string achievement${index} = "${achievement}";`,
    'C': (achievement, index) => `char achievement${index}[] = "${achievement}";`,
};

// add your syntax highlighting of the languages you have learnt here or remove the ones you don't need
const syntaxHighlighting = {
    'Visual Basic': (text) => text.replace(/(Dim|As|String)/g, '<span class="text-purple-500">$1</span>'),
    'HTML': (text) => text.replace(/(&lt;p&gt;|&lt;\/p&gt;)/g, '<span class="text-red-500">$1</span>'),
    'CSS': (text) => text.replace(/(\.achievement-\d+::after|content)/g, '<span class="text-blue-500">$1</span>'),
    'Python': (text) => text.replace(/(achievement_\d+|=)/g, '<span class="text-yellow-500">$1</span>'),
    'Javascript': (text) => text.replace(/(const|=)/g, '<span class="text-green-500">$1</span>'),
    'Typescript': (text) => text.replace(/(const|:|string|=)/g, '<span class="text-indigo-500">$1</span>'),
    'C++': (text) => text.replace(/(std::string|=)/g, '<span class="text-pink-500">$1</span>'),
    'C': (text) => text.replace(/(char|=|\[\])/g, '<span class="text-orange-500">$1</span>'),
};

const Achievement = () => {
    const [darkMode, setDarkMode] = useState(true);
    const [isTerminalOpen, setIsTerminalOpen] = useState(true);
    const [selectedLanguage, setSelectedLanguage] = useState('HTML');

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    };

    const toggleTerminal = () => {
        setIsTerminalOpen(!isTerminalOpen);
    };

    const handleLanguageChange = (e) => {
        setSelectedLanguage(e.target.value);
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
                    <div className="flex items-center">
                        <select
                            value={selectedLanguage}
                            onChange={handleLanguageChange}
                            className="bg-transparent border text-center border-gray-500 text-sm focus:outline-none mr-4 p-1 rounded"
                        >
                            {Object.keys(languageStyles).map((lang) => (
                                <option key={lang} value={lang} className="text-black">
                                    {lang}
                                </option>
                            ))}
                        </select>
                        <button onClick={toggleDarkMode} className="focus:outline-none">
                            {darkMode ? <FaSun className="text-yellow-500" /> : <FaMoon className="text-gray-800" />}
                        </button>
                    </div>
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
                        <div className={`${darkMode ? 'bg-gray-700' : 'bg-gray-200'} p-4 flex-1 overflow-y-auto border border-gray-600`}>
                            {achievements.map((achievement, index) => (
                                <p
                                    key={index}
                                    className={`text-xs sm:text-sm font-mono ${darkMode ? 'text-white' : 'text-black'} mb-2`}
                                    dangerouslySetInnerHTML={{ __html: syntaxHighlighting[selectedLanguage](languageStyles[selectedLanguage](achievement, index + 1)) }}
                                />
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
                                    <RiTerminalBoxLine className={`${darkMode ? 'text-gray-400' : 'text-gray-600'} mr-4`} />
                                    <p className={`text-xs font-mono ${darkMode ? 'text-gray-400' : 'text-gray-600'} mr-2`}>bash</p>
                                    <button onClick={toggleTerminal} className="focus:outline-none mr-2">
                                        {isTerminalOpen ? <VscChevronDown className={`${darkMode ? 'text-gray-400' : 'text-gray-600'} mr-4`} /> : <VscChevronUp className={`${darkMode ? 'text-gray-400' : 'text-gray-600'} mr-4`} />}
                                    </button>
                                    <button className="focus:outline-none">
                                        <VscClose className={`${darkMode ? 'text-gray-400' : 'text-gray-600'} mr-4`} />
                                    </button>
                                </div>
                            </div>
                            {isTerminalOpen && (
                                <div className={`p-2 text-xs font-mono ${darkMode ? `text-white` : `text-black`} overflow-y-auto`}>
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
