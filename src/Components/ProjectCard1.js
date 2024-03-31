import React from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const ProjectCard1 = ({ image, title, description, appLink, codeLink }) => {
    return (
        <div style={{backgroundImage: `url(${image})`}} className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div">
                        
                        {/* Hover effects */}
                        <div className="opacity-0 group-hover:opacity-100">
                            <div className="text-center">
                                <span className="text-2xl font-bold text-white tracking-wider">{title}</span>
                            </div>
                            <div className="pt-4 text-center">
                                <span className="text-center font-bold text-[#12372A] text-lg">{description}</span>
                            </div>
                            <div className="pt-8 text-center">
                                {/* <a href="/">
                                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">Demo</button>
                                </a> */}
                                <a href={appLink} target="_blank" rel="noopener noreferrer">
                                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg"><FaExternalLinkAlt className="inline-block mr-2" />App</button>
                                </a>
                                <a href={codeLink} target="_blank" rel="noopener noreferrer">
                                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg"><FaGithub className="inline-block mr-2" />Code</button>
                                </a>
                            </div>
                        </div>
                    </div>
    );
}

export default ProjectCard1;