import React from "react";
import { FaPython, FaBrain, FaPuzzlePiece } from 'react-icons/fa';

const Certifications = () => {
    return (
        <div name='certifications' className="w-full min-h-screen bg-[#0a192f] text-gray-300">
            {/* container */}
            <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
                <div>
                    <p className="text-4xl inline text-[#416D19] border-pink-300 border-b-4 font-bold">Certifications</p>
                    <p className="py-4">/ My professional certifications. /</p>
                </div>

                <div className="w-full text-center py-8">
                    <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 flex items-center">
                        <FaPython className="text-5xl pl-2" />
                        <div className="text-center flex-grow">
                            <h2 className="text-2xl text-white">Python For Everybody</h2>
                            <p className="py-4 text-white">Coursera, Sep 2022</p>
                        </div>
                    </div>

                    <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 mt-4 flex items-center">
                        <FaBrain className="text-5xl pl-2" />
                        <div className="text-center flex-grow">
                            <h2 className="text-2xl text-white">Elements Of AI</h2>
                            <p className="py-4 text-white">University Of Helsinki, Nov 2023</p>
                        </div>
                    </div>

                    <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 mt-4 flex items-center">
                        <FaPuzzlePiece className="text-5xl pl-2" />
                        <div className="text-center flex-grow">
                            <h2 className="text-2xl text-white">Problem Solving</h2>
                            <p className="py-4 text-white">Hackerrank, Oct 2023</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Certifications;
