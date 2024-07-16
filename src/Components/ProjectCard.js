import React from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const ProjectCard = ({ image, title, detailed, appLink = '', codeLink }) => {
    return (
        <div className="max-w-sm bg-white rounded-lg shadow-md overflow-hidden flex flex-col">
            <img className="w-full h-48 object-cover" src={image} alt={title} />
            <div className="p-6 flex flex-col flex-grow">
                <h2 className="text-xl font-semibold text-gray-800">{title}</h2>
                <p className="mt-2 text-gray-600 flex-grow">{detailed}</p>
                <div className="border-t border-gray-200 my-4"></div>
                <div className="flex justify-between items-center">
                    {appLink && (
                        <a href={appLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                            <FaExternalLinkAlt className="mr-2" />App
                        </a>
                    )}
                    <a href={codeLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                        <FaGithub className="mr-2" />Code
                    </a>
                </div>
            </div>
        </div>
    );
}

export default ProjectCard;
