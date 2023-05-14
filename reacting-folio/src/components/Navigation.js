import React from 'react';
import {FaBars, FaTimes} from 'react-icons/fa'


const Navigation = () => {
  return (
    <nav>
      <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#5511EE] text-white">
        <div>
        <ul className="flex">
          <li>Contact</li>
          <li>Projects</li>
          <li>About</li>
          <li>Resume</li>
        </ul>
        </div>

      <div className="hidden"> 
        <FaBars />
      </div>

      {/* mobile menu*/}
      <div className="hidden">
      <ul>
          <li>Contact</li>
          <li>Projects</li>
          <li>About</li>
          <li>Resume</li>
        </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navigation