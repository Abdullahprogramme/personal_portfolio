import React from "react";
import { FaGraduationCap, FaSchool, FaUniversity } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Education = () => {
    const { ref, inView } = useInView({
        triggerOnce: true, // Trigger animation only once
        threshold: 0.3, // Trigger when 30% of the component is in view
    });

    return (
        <div ref={ref} name='education' className="w-full min-h-screen bg-[#0a192f] text-gray-300">
            <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
                <div>
                    <p className="text-4xl text-[#416D19] font-bold border-b-4 border-pink-300 inline-block">Education</p>
                    <p className="py-4">/ My educational background. /</p>
                </div>

                {/* Card layout */}
                <div className="mt-10">
                    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                        <motion.div 
                            className="flex"
                            initial={{ opacity: 0, y: 50 }}
                            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                        >
                            <div className="flex-grow flow-root bg-gray-800 rounded-lg px-6 pb-8 shadow-lg">
                                <div className="-mt-6">
                                    <div>
                                        <span className="inline-flex items-center justify-center p-3 bg-indigo-500 rounded-md shadow-lg">
                                            <FaGraduationCap className="text-white text-3xl" />
                                        </span>
                                    </div>
                                    {/* Change the degree and institute name */}
                                    <h3 className="mt-8 text-lg font-medium text-white tracking-tight">Bachelor's Degree in Computer Science</h3>
                                    <p className="mt-5 text-base text-gray-400">Institute of Business Administration, 2024 - continuing</p>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div 
                            className="flex"
                            initial={{ opacity: 0, y: 50 }}
                            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                        >
                            <div className="flex-grow flow-root bg-gray-800 rounded-lg px-6 pb-8 shadow-lg">
                                <div className="-mt-6">
                                    <div>
                                        <span className="inline-flex items-center justify-center p-3 bg-indigo-500 rounded-md shadow-lg">
                                            <FaGraduationCap className="text-white text-3xl" />
                                        </span>
                                    </div>
                                    {/* Change the degree and institute name */}
                                    <h3 className="mt-8 text-lg font-medium text-white tracking-tight">Bachelor's Degree in Computer Science</h3>
                                    <p className="mt-5 text-base text-gray-400">Habib University, 2023 - 2024</p>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div 
                            className="flex"
                            initial={{ opacity: 0, y: 50 }}
                            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                        >
                            <div className="flex-grow flow-root bg-gray-800 rounded-lg px-6 pb-8 shadow-lg">
                                <div className="-mt-6">
                                    <div>
                                        <span className="inline-flex items-center justify-center p-3 bg-indigo-500 rounded-md shadow-lg">
                                            <FaUniversity className="text-white text-3xl" />
                                        </span>
                                    </div>
                                    {/* Change the degree and institute name */}
                                    <h3 className="mt-8 text-lg font-medium text-white tracking-tight">A-Levels</h3>
                                    <p className="mt-5 text-base text-gray-400">The City School - Gulshan A-Levels, 2021 - 2023</p>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div 
                            className="flex"
                            initial={{ opacity: 0, y: 50 }}
                            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                        >
                            <div className="flex-grow flow-root bg-gray-800 rounded-lg px-6 pb-8 shadow-lg">
                                <div className="-mt-6">
                                    <div>
                                        <span className="inline-flex items-center justify-center p-3 bg-indigo-500 rounded-md shadow-lg">
                                            <FaSchool className="text-white text-3xl" />
                                        </span>
                                    </div>
                                    {/* Change the degree and institute name */}
                                    <h3 className="mt-8 text-lg font-medium text-white tracking-tight">O-Levels</h3>
                                    <p className="mt-5 text-base text-gray-400">The City School - Boys Campus A, 2016 - 2021</p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Education;
