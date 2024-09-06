import React from "react";
import { FaPython, FaBrain, FaPuzzlePiece } from 'react-icons/fa';
import { MdModelTraining } from "react-icons/md";
import { GoStack } from "react-icons/go";
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';


const Certifications = () => {

    const { ref, inView } = useInView({
        triggerOnce: true, // Trigger animation only once
        threshold: 0.4, // Trigger when 60% of the component is in view
    });

    return (
        <div ref={ref} name='certifications' className="w-full min-h-screen bg-[#0a192f] text-gray-300">
            <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
                <div>
                    <p className="text-4xl text-[#416D19] font-bold border-b-4 border-pink-300 inline-block">Certifications</p>
                    <p className="py-4">/ My professional certifications. /</p>
                </div>

                {/* Card layout */}
                <div className="mt-10">
                    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                        <motion.div 
                            className="flex"
                            initial={{ opacity: 0, y: 50 }}
                            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                            transition={{ duration: 1 }}
                        >
                            <div className="flex-grow flow-root bg-gray-800 rounded-lg px-6 pb-8 shadow-lg">
                                <div className="-mt-6">
                                    <div>
                                        <span className="inline-flex items-center justify-center p-3 bg-indigo-500 rounded-md shadow-lg">
                                            <FaPython className="text-white text-3xl" />
                                        </span>
                                    </div>
                                    <h3 className="mt-8 text-lg font-medium text-white tracking-tight">Python For Everybody</h3>
                                    <p className="mt-5 text-base text-gray-400">Coursera, Sep 2022</p>
                                </div>
                            </div>
                        </motion.div>

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
                                            <FaBrain className="text-white text-3xl" />
                                        </span>
                                    </div>
                                    <h3 className="mt-8 text-lg font-medium text-white tracking-tight">Elements Of AI</h3>
                                    <p className="mt-5 text-base text-gray-400">University Of Helsinki, Nov 2023</p>
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
                                            <FaPuzzlePiece className="text-white text-3xl" />
                                        </span>
                                    </div>
                                    <h3 className="mt-8 text-lg font-medium text-white tracking-tight">Problem Solving</h3>
                                    <p className="mt-5 text-base text-gray-400">Hackerrank, Oct 2023</p>
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
                                            <MdModelTraining className="text-white text-3xl" />
                                        </span>
                                    </div>
                                    <h3 className="mt-8 text-lg font-medium text-white tracking-tight">Microsoft Learn, Technical Training</h3>
                                    <p className="mt-5 text-base text-gray-400">Microsoft, August 2024</p>
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
                                            <GoStack className="text-white text-3xl" />
                                        </span>
                                    </div>
                                    <h3 className="mt-8 text-lg font-medium text-white tracking-tight">Node.js & MongoDB: Developing Back-end Database Applications</h3>
                                    <p className="mt-5 text-base text-gray-400">Coursera, Sep 2024</p>
                                </div>
                            </div>
                        </motion.div>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default Certifications;
