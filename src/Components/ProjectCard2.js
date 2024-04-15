import React, { useState } from 'react';
import { FaGithub, FaInfoCircle, FaTimes } from 'react-icons/fa';

const ProjectCard2 = ({ image, title, description, codeLink, detailed }) => {
    const [showDetails, setShowDetails] = useState(false);

    const toggleDetails = () => {
        setShowDetails(!showDetails);
    };
    
    return (
        <div style={{backgroundImage: `url(${image})`}} className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div relative">
            <div className={`opacity-0 group-hover:opacity-100 ${showDetails ? 'hidden' : ''}`}>
            <button onClick={toggleDetails} className="absolute top-0 right-0 m-2 text-black font-bold text-lg"><FaInfoCircle /></button>
                <div className="text-center">
                    <span className="text-2xl font-bold text-white tracking-wider">{title}</span>
                </div>

                <div className="pt-4 text-center">
                    <span className="text-center font-bold text-[#12372A] text-lg">{description}</span>
                </div>

                <div className="pt-8 text-center">
                    <a href={codeLink} target="_blank" rel="noopener noreferrer">
                        <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg"><FaGithub className="inline-block mr-2" />Code</button>
                    </a>
                </div>

            </div>

            {showDetails && (
                <div className="absolute inset-0 bg-white opacity-90 flex flex-col items-center justify-center">
                    <button onClick={toggleDetails} className="absolute top-0 right-0 m-2 bg-white text-gray-700 font-bold text-lg"><FaTimes /></button>
                    <p className="text-justify font-bold text-[#12372A] ml-2 mr-2">{detailed}</p>
                </div>
            )}
        </div>
    );
}

export default ProjectCard2;
