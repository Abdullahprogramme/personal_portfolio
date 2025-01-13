import React from "react";
import { FaPython, FaBrain, FaPuzzlePiece, FaImages } from "react-icons/fa";
import { MdModelTraining } from "react-icons/md";
import { GoStack } from "react-icons/go";
import { GiArtificialHive } from "react-icons/gi";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Certifications = () => {
  const { ref, inView } = useInView({
    triggerOnce: true, // Trigger animation only once
    threshold: 0.4, // Trigger when 40% of the component is in view
  });

  // Certification data, add more certifications as needed
  const certifications = [
    {
      icon: <FaPython className="text-white text-3xl" />,
      title: "Python For Everybody",
      institution: "Coursera",
      date: "Sep 2022",
      delay: 0,
    },
    {
      icon: <FaBrain className="text-white text-3xl" />,
      title: "Elements Of AI",
      institution: "University Of Helsinki",
      date: "Nov 2023",
      delay: 0.1,
    },
    {
      icon: <FaPuzzlePiece className="text-white text-3xl" />,
      title: "Problem Solving",
      institution: "Hackerrank",
      date: "Oct 2023",
      delay: 0.2,
    },
    {
      icon: <MdModelTraining className="text-white text-3xl" />,
      title: "Microsoft Learn, Technical Training",
      institution: "Microsoft",
      date: "August 2024",
      delay: 0.3,
    },
    {
      icon: <GoStack className="text-white text-3xl" />,
      title: "Node.js & MongoDB: Developing Back-end Database Applications",
      institution: "Coursera",
      date: "Sep 2024",
      delay: 0.4,
    },
    {
      icon: <FaImages className="text-white text-3xl" />,
      title: "Image Processing in Python",
      institution: "DataCamp",
      date: "Dec 2024",
      delay: 0.5,
    },
    {
      icon: <GiArtificialHive className="text-white text-3xl" />,
      title: "QPrep, QBronze using QISKIT",
      institution: "QWorld",
      date: "Jul 2024",
      delay: 0.6,
    },
  ];

  return (
    <div ref={ref} name="certifications" className="w-full min-h-screen bg-[#0a192f] text-gray-300">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full pb-20">
        <div>
          <p className="text-4xl text-[#416D19] font-bold border-b-4 border-pink-300 inline-block">Certifications</p>
          <p className="py-4">/ My professional certifications. /</p>
        </div>

        {/* Card layout */}
        <div className="mt-10">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                className="flex"
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.5, delay: cert.delay }}
              >
                <div className="flex-grow flow-root bg-gray-800 rounded-lg px-6 pb-8 shadow-lg">
                  <div className="-mt-6">
                    <div>
                      <span className="inline-flex items-center justify-center p-3 bg-indigo-500 rounded-md shadow-lg">
                        {cert.icon}
                      </span>
                    </div>
                    {/* change the certification title, institution and date */}
                    <h3 className="mt-8 text-lg font-medium text-white tracking-tight">{cert.title}</h3>
                    <p className="mt-5 text-base text-gray-400">{cert.institution}, {cert.date}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Certifications;
