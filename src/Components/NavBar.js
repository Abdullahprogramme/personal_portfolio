import React, {useState} from "react";
import man from '../Assets/man.png';
import {FaBars, FaTimes, FaGithub, FaLinkedin, FaFacebook} from 'react-icons/fa';
import {HiOutlineMail} from 'react-icons/hi';
import {BsFillPersonLinesFill} from 'react-icons/bs';
import {Link} from 'react-scroll';

const NavBar = () => {
    const [nav, setnav] = useState(false);
    const handleclick = () => setnav(!nav);

    return (
        <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300">
            <div>
                <a href="https://www.instagram.com/abdullahtariq62/?next=%2F&hl=en" target="_blank" rel="noopener noreferrer">
                    <img src={man} alt="abdullah" style={{width: '50px'}}/>
                </a>
            </div>

            {/* menu */}
            <ul className="hidden md:flex">
                <li>
                    <Link to="home" duration={500} smooth={true}>Home</Link>
                </li>
                <li>
                    <Link to="about" duration={500} smooth={true}>About</Link>
                </li>
                <li>
                    <Link to="skills" duration={500} smooth={true}>Skills</Link>
                </li>
                <li>
                    <Link to="work" duration={500} smooth={true}>Work</Link>
                </li>
                <li>
                    <Link to="contact" duration={500} smooth={true}>Contact</Link>
                </li>
            </ul>

            <div onClick={handleclick} className="md:hidden z-10">
                {!nav ? <FaBars /> : <FaTimes />}
            </div>

            {/* mobile menu */}
            <ul className={!nav ? 'hidden' : "absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center"}>
                <li className="py-6 text-4xl ">
                    <Link onClick={handleclick} to="home" duration={500} smooth={true}>Home</Link>
                </li>
                <li className="py-6 text-4xl ">
                    <Link onClick={handleclick} to="about" duration={500} smooth={true}>About</Link>
                </li>
                <li className="py-6 text-4xl ">
                    <Link onClick={handleclick} to="skills" duration={500} smooth={true}>Skills</Link>
                </li>
                <li className="py-6 text-4xl ">
                    <Link onClick={handleclick} to="work" duration={500} smooth={true}>Work</Link>
                </li>
                <li className="py-6 text-4xl ">
                    <Link onClick={handleclick} to="contact" duration={500} smooth={true}>Contact</Link>
                </li>
            </ul>

            {/* Social icons */}
            <div className={`fixed flex-col top-[35%] left-0 ${nav ? 'flex' : 'hidden'} md:flex`}>
            {/* <div className="lg:flex fixed flex-col top-[35%] left-0 "> */}
                <ul>
                    <li className="w-[140px] h-[50px] sm:w-[160px] sm:h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600">
                        <a className='flex justify-between items-center w-full text-gray-300' target='_blank'  rel="noopener noreferrer" href='https://www.linkedin.com/in/abdullahtariq78/'>
                            LinkedIn <FaLinkedin size={30}/> 
                        </a>
                    </li>

                    <li className="w-[140px] h-[50px] sm:w-[160px] sm:h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]">
                        <a className='flex justify-between items-center w-full text-gray-300' target='blank' rel="noopener noreferrer" href='https://github.com/Abdullahprogramme'>
                            Github <FaGithub size={30}/> 
                        </a>
                    </li>

                    <li className="w-[140px] h-[50px] sm:w-[160px] sm:h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#436850]">
                        <a className='flex justify-between items-center w-full text-gray-300' target='_blank' rel="noopener noreferrer" href='mailto:abdtariq78@gmail.com'>
                            Email <HiOutlineMail size={30}/> 
                        </a>
                    </li>

                    <li className="w-[140px] h-[50px] sm:w-[160px] sm:h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]">
                        <a className='flex justify-between items-center w-full text-gray-300' target='_blank' rel="noopener noreferrer" href='https://www.facebook.com/abdullah.tariq.7262'>
                            Facebook <FaFacebook size={30}/> 
                        </a>
                    </li>

                    <li className="w-[140px] h-[50px] sm:w-[160px] sm:h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#FC6736]">
                        <a className='flex justify-between items-center w-full text-gray-300' target='_blank' rel="noopener noreferrer" href='https://drive.google.com/file/d/1DLIkFBLb_Oan8yMJMmiQPBjjgnQejxb9/view?usp=sharing'>
                            Resume <BsFillPersonLinesFill size={30}/> 
                        </a>
                    </li>
                </ul>
            </div>

        </div>
    );
}

export default NavBar;
