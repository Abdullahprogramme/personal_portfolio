import React from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const ProjectCard = ({ image, title, detailed, appLink = '', codeLink }) => {
    return (
        <div className="shadow-lg rounded-md border-[#416D19] border-2 overflow-hidden group container mx-auto relative bg-gray-800 text-white flex flex-col">
            <div className="flex-grow">
                <img src={image} alt={title} className="w-full h-64 object-cover" />
                <div className="p-4">
                    <h2 className="text-2xl font-bold tracking-wider">{title}</h2>
                    <p className="pt-2">{detailed}</p>
                </div>
            </div>
            <div className="p-4 bg-gray-900 flex justify-between items-center">
                {appLink !== '' && 
                    <a href={appLink} target="_blank" rel="noopener noreferrer" className="text-white font-bold text-lg"><FaExternalLinkAlt className="inline-block mr-2" />App</a>
                }
                <a href={codeLink} target="_blank" rel="noopener noreferrer" className="text-white font-bold text-lg"><FaGithub className="inline-block mr-2" />Code</a>
                </div>
        </div>
    );
}

export default ProjectCard;
