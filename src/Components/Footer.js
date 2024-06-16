import React from 'react';
import { FaHeart, FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="p-3 bg-[#9290C3]">
        {/* Dynamic Year and Made with Love */}
        <div className="text-center flex-row justify-center items-center custom:flex hidden">
            <p>Made with <FaHeart className="inline text-red-500" /> by Abdullah Tariq © {new Date().getFullYear()}</p>
            
            <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="ml-4 p-2 rounded-full bg-gray-300 hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50">
                <svg className="w-6 h-6 text-gray-800" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 15l7-7 7 7" />
                </svg>
            </button>
        </div>

        <div className="flex custom:hidden justify-between items-center w-full">
            {/* Simplified Content for Smaller Screens */}
            <div className="flex justify-center items-center gap-4 flex-grow">
                <a href="https://www.linkedin.com/in/abdullahtariq78/" target='blank' rel="noopener noreferrer" className='p-1.5 rounded-full bg-slate-200'>
                <FaLinkedinIn className="text-blue-600"/>
                </a>

                <a href="https://www.facebook.com/abdullah.tariq.7262" target='blank' rel="noopener noreferrer" className='p-1.5 rounded-full bg-slate-200'>
                <FaFacebookF className="text-blue-600"/>
                </a>

                <a href="https://www.instagram.com/abdullahtariq62/?next=%2F&hl=en" target='blank' rel="noopener noreferrer" className='p-1.5 rounded-full bg-slate-200'>
                <FaInstagram className="text-pink-600"/>
                </a>
            </div>

            <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="ml-4 p-2 rounded-full bg-gray-300 hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50">
                <svg className="w-3 h-3 text-gray-800" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 15l7-7 7 7" />
                </svg>
            </button>
        </div>
    </footer>
  );
};

export default Footer;