import React, {useState} from 'react';
import { FaBars, FaTimes, FaGithub, FaLinkedin } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs'
import { Link } from 'react-scroll';
import Resume from '../assets/resume.pdf';



const Navigation = () => {
  const [nav, setNav] = useState(false)
  const handleClick = () => setNav(!nav)

  return (
    <nav>
      <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-blue-400 text-white">
        <ul className="hidden md:flex">
          <li className="w-[75px]">
            <Link to="home" smooth={true} duration={500}>
          Home
          </Link>
          </li>
          <li className="w-[75px]">
          <Link to="contact" smooth={true} duration={500}>
          Contact
          </Link>
          </li>
          <li className="w-[75px]">
          <Link to="projects" smooth={true} duration={500}>
          Projects
          </Link>
          </li>
          <li className="w-[75px]">
          <Link to="about" smooth={true} duration={500}>
          About
          </Link>
          </li>
        </ul>

      <div onClick={handleClick} className='md:hidden'> 
       {!nav ? <FaBars /> : <FaTimes />}
      </div>

      <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
          <ul>
            <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6363f3]">
              <a className="flex justify-between items center w-full text-white mr-[10px] ml-[20px]"
                href="https://www.linkedin.com/in/hferal/">
        Linkedin <FaLinkedin size={30} />
        </a>
        </li>
        <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#3b3a3a]">
              <a className="flex justify-between items center w-full text-white mr-[10px] ml-[20px]"
                href="https://github.com/hef9874">
        GitHub <FaGithub size={30} />
        </a>
        </li>
        <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#ccde28]">
              <a className="flex justify-between items center w-full text-white mr-[10px] ml-[20px]"
                href="mailto:hef9874@gmail.com">
        Email <HiOutlineMail size={30} />
        </a>
        </li>
        <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#ae56f1]">
              <a className="flex justify-between items center w-full text-white mr-[10px] ml-[20px]"
                href={Resume}>
        Resume < BsFillPersonLinesFill size={30} />
        </a>
        </li>
        </ul>
        </div>

      {/* mobile menu*/}
      <div className={!nav ? 'hidden' : '"absolute top-0 left-0 w-full h-screen bg-blue-400 flex flex-col justify-center items-center"'}>
      <ul>
          <li className="py-6 text-2xl"><Link onClick={handleClick} to="home" smooth={true} duration={500}>
          Home
          </Link></li>
          <li className="py-6 text-2xl"><Link onClick={handleClick} to="contact" smooth={true} duration={500}>
          Contact
          </Link></li>
          <li className="py-6 text-2xl"><Link onClick={handleClick} to="projects" smooth={true} duration={500}>
          Projects
          </Link></li>
          <li className="py-6 text-2xl"><Link onClick={handleClick} to="about" smooth={true} duration={500}>
          About
          </Link></li>
        </ul>

        </div>
      </div>
    </nav>
  )
}

export default Navigation