import React from "react";

const Education = () => {
    return (
        <div name='education' className="w-full min-h-screen bg-[#0a192f] text-gray-300">
            {/* container */}
            <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
                <div>
                    <p className="text-4xl inline text-[#416D19] border-pink-300 border-b-4 font-bold">Education</p>
                    <p className="py-4">/ My educational background. /</p>
                </div>

                <div className="w-full text-center py-8">
                    <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                        <h2 className="text-2xl text-[#B7E5B4]">Bachelor's Degree in Computer Science</h2>
                        <p className="py-4 text-[#B7E5B4]">Habib University, 2023 - 2027</p>
                    </div>

                    <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 mt-4">
                        <h2 className="text-2xl text-[#B7E5B4]">A-Levels</h2>
                        <p className="py-4 text-[#B7E5B4]">The City School - Gulshan A-Levels, 2021 - 2023</p>
                    </div>

                    <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 mt-4">
                        <h2 className="text-2xl text-[#B7E5B4]">O-Levels</h2>
                        <p className="py-4 text-[#B7E5B4]">The City School - Boys Campus A, 2016 - 2021</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Education;