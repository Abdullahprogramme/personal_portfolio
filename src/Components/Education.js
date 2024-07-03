import React from "react";
import { FaGraduationCap, FaSchool, FaUniversity } from 'react-icons/fa';

const Education = () => {
    return (
        <div name='education' className="w-full min-h-screen bg-[#0a192f] text-gray-300">
            <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
                <div>
                    <p className="text-4xl text-[#416D19] font-bold border-b-4 border-pink-300 inline-block">Education</p>
                    <p className="py-4">// My educational background //</p>
                </div>

                {/* Stacked list layout */}
                <div className="space-y-6 py-6">
                    <div className="bg-[#112240] rounded-lg shadow-lg shadow-[#040c16] p-4 flex flex-col items-center hover:translate-y-2 duration-500">
                        <FaGraduationCap className="text-[#416D19] text-6xl" />
                        <h2 className="text-xl text-white mt-2">Bachelor's Degree in Computer Science</h2>
                        <p className="text-white mt-2">Habib University, 2023 - 2027</p>
                    </div>

                    <div className="bg-[#112240] rounded-lg shadow-lg shadow-[#040c16] p-4 flex flex-col items-center hover:translate-y-2 duration-500">
                        <FaUniversity className="text-[#416D19] text-6xl" />
                        <h2 className="text-xl text-white mt-2">A-Levels</h2>
                        <p className="text-white mt-2">The City School - Gulshan A-Levels, 2021 - 2023</p>
                    </div>

                    <div className="bg-[#112240] rounded-lg shadow-lg shadow-[#040c16] p-4 flex flex-col items-center hover:translate-y-2 duration-500">
                        <FaSchool className="text-[#416D19] text-6xl" />
                        <h2 className="text-xl text-white mt-2">O-Levels</h2>
                        <p className="text-white mt-2">The City School - Boys Campus A, 2016 - 2021</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Education;
