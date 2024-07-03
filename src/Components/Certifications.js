import React from "react";
import { FaPython, FaBrain, FaPuzzlePiece } from 'react-icons/fa';

const Certifications = () => {
    return (
        <div name='certifications' className="w-full min-h-screen bg-[#0a192f] text-gray-300">
            <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
                <div>
                    <p className="text-4xl text-[#416D19] font-bold border-b-4 border-pink-300 inline-block">Certifications</p>
                    <p className="py-4">/ My professional certifications. /</p>
                </div>

                <div className="space-y-6 py-6">
                    <div className="bg-[#112240] rounded-lg shadow-lg shadow-[#040c16] p-4 flex flex-col items-center hover:translate-y-2 duration-500">
                        <FaPython className="text-[#416D19] text-6xl" />
                        <h2 className="text-xl text-white mt-2">Python For Everybody</h2>
                        <p className="text-white mt-2">Coursera, Sep 2022</p>
                    </div>

                    <div className="bg-[#112240] rounded-lg shadow-lg shadow-[#040c16] p-4 flex flex-col items-center hover:translate-y-2 duration-500 mt-4">
                        <FaBrain className="text-[#416D19] text-6xl" />
                        <h2 className="text-xl text-white mt-2">Elements Of AI</h2>
                        <p className="text-white mt-2">University Of Helsinki, Nov 2023</p>
                    </div>

                    <div className="bg-[#112240] rounded-lg shadow-lg shadow-[#040c16] p-4 flex flex-col items-center hover:translate-y-2 duration-500 mt-4">
                        <FaPuzzlePiece className="text-[#416D19] text-6xl" />
                        <h2 className="text-xl text-white mt-2">Problem Solving</h2>
                        <p className="text-white mt-2">Hackerrank, Oct 2023</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Certifications;
