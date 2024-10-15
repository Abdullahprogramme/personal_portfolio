import React, {useState} from "react";
// import man from '../Assets/man.png';
import {FaBars, FaTimes, FaGithub, FaLinkedin, FaFacebook} from 'react-icons/fa';
import {HiOutlineMail} from 'react-icons/hi';
import {BsFillPersonLinesFill} from 'react-icons/bs';
import {Link} from 'react-scroll';
import {FaCode} from 'react-icons/fa';

const NavBar = () => {
    const [nav, setnav] = useState(false);
    const handleclick = () => setnav(!nav);

    const [activeLink, setActiveLink] = useState(null);

    const handleMouseOver = (index) => {
        setActiveLink(index);
    };

    const handleMouseOut = () => {
        setActiveLink(null);
    };

    const links = ['Home', 'About', 'Education', 'Experience', 'Skills', 'Work', 'Contact']; // replace with your actual links

    const CodeBlock = () => {
        return (
            <div className="bg-gray-800 text-white p-4 rounded-lg font-mono text-sm flex items-center">
                <FaCode className="text-gray-500 mr-2" />
                <pre className="whitespace-pre-wrap flex items-center m-0 p-0">
                    <code className="flex items-center f">
                        {`ABDULLAH TARIQ`} {/* change this to your name */}
                    </code>
                </pre>
                <FaCode className="text-gray-500 ml-2" />
            </div>
        );
    };
    
    return (
        <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] bg-opacity-60 text-gray-300" style={{ zIndex: 1000 }}>
            <div className=""> {/* can use 'insta' class to give the hover effect */}
                <a href="https://www.instagram.com/abdullahtariq62/?next=%2F&hl=en" target="_blank" rel="noopener noreferrer">
                    {/* <img src={man} alt="abdullah" style={{width: '50px'}}/> */}
                    {/* <p className="customFontStyle text-4xl text-gray-300">AT</p> */}
                    {/* <p className=" font-bold text-3xl text-gray-300 customFontStyle">ABDULLAH TARIQ</p> */}
                    <CodeBlock />
                </a>
            </div>

            {/* menu */}
            <ul className="hidden custom:flex">
                {links.map((link, index) => (
                    <li key={index}>
                    <Link
                        to={link.charAt(0).toLowerCase() + link.slice(1)}
                        duration={500}
                        smooth={true}
                        className={`text-white font-normal border-animation ${activeLink !== null && activeLink !== index && 'dim'}`}
                        onMouseOver={() => handleMouseOver(index)}
                        onMouseOut={handleMouseOut}
                    >
                        {link}
                    </Link>
                    </li>
                ))}
            </ul>

            <div onClick={handleclick} className="custom:hidden z-10">
                {!nav ? <FaBars /> : <FaTimes />}
            </div>

            {/* mobile menu */}
            <ul className={!nav ? 'hidden' : "absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center"}>
                <li className="py-6 text-3xl ">
                    <Link onClick={handleclick} to="home" duration={500} smooth={true}>Home</Link>
                </li>
                <li className="py-6 text-3xl ">
                    <Link onClick={handleclick} to="about" duration={500} smooth={true}>About</Link>
                </li>
                <li className="py-6 text-3xl ">
                    <Link onClick={handleclick} to="education" duration={500} smooth={true}>Education</Link>
                </li>
                <li className="py-6 text-3xl ">
                    <Link onClick={handleclick} to="experience" duration={500} smooth={true}>Experience</Link>
                </li>
                <li className="py-6 text-3xl ">
                    <Link onClick={handleclick} to="skills" duration={500} smooth={true}>Skills</Link>
                </li>
                <li className="py-6 text-3xl ">
                    <Link onClick={handleclick} to="work" duration={500} smooth={true}>Work</Link>
                </li>
                <li className="py-6 text-3xl ">
                    <Link onClick={handleclick} to="contact" duration={500} smooth={true}>Contact</Link>
                </li>
            </ul>

            {/* Social icons */}
            <div className={`fixed flex-col top-[35%] left-0 ${nav ? 'flex' : 'hidden'} custom:flex`}>
            {/* <div className="lg:flex fixed flex-col top-[35%] left-0 "> */}
                <ul>
                    {/* change the social media links as needed */}
                    <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600">
                        <a className='flex justify-between items-center w-full text-gray-300' target='_blank'  rel="noopener noreferrer" href='https://www.linkedin.com/in/abdullahtariq78/'>
                            LinkedIn <FaLinkedin size={30}/> 
                        </a>
                    </li>

                    <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]">
                        <a className='flex justify-between items-center w-full text-gray-300' target='blank' rel="noopener noreferrer" href='https://github.com/Abdullahprogramme'>
                            Github <FaGithub size={30}/> 
                        </a>
                    </li>

                    <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#436850]">
                        <a className='flex justify-between items-center w-full text-gray-300' target='_blank' rel="noopener noreferrer" href='mailto:abdtariq78@gmail.com'>
                            Email <HiOutlineMail size={30}/> 
                        </a>
                    </li>

                    <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]">
                        <a className='flex justify-between items-center w-full text-gray-300' target='_blank' rel="noopener noreferrer" href='https://www.facebook.com/abdullah.tariq.7262'>
                            Facebook <FaFacebook size={30}/> 
                        </a>
                    </li>

                    <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#FC6736]">
                        <a className='flex justify-between items-center w-full text-gray-300' target='_blank' rel="noopener noreferrer" href='https://drive.google.com/file/d/1UWdlOzdQVgkVFN7Pi_OOPp-RH6Sxlq_N/view?usp=sharing'>
                            Resume <BsFillPersonLinesFill size={30}/> 
                        </a>
                    </li>
                </ul>
            </div>

        </div>
    );
}

export default NavBar;
