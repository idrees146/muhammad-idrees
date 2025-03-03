"use client"
import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };


  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
   
  };



  return (
    <nav className="flex shadow-lg justify-between bg-gray-200 fixed w-full transition text-black font-bold items-center h-20 px-4 md:px-10 z-50">
      <div className="logo flex cursor-pointer gap-4 items-center">
        <img src="logo.jpg" className="w-12 md:w-16 p-2 h-12 md:h-16 rounded-full" alt="" />
       
      </div>

      <div className="md:hidden" onClick={toggleMenu}>
        <button className="focus:outline-none">
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>
      </div>

      <ul
        className={`${
          isOpen ? 'flex' : 'hidden'
        } flex-col md:flex md:flex-row md:items-center md:gap-6 absolute md:static top-20 left-0 w-full md:w-auto bg-gray-200 md:bg-transparent transition-all md:transition-none`}
      >
        <button  onClick ={() => scrollToSection("story")} className="cursor-pointer hover:scale-105 font-bold hover:text-pink-500 transition-all text-center py-4 md:py-0">My Story</button>
        <button onClick={()=>scrollToSection("services")} className="cursor-pointer hover:scale-105 font-bold hover:text-pink-500 transition-all text-center py-4 md:py-0">Services</button>
        <button onClick={()=>scrollToSection("Project")} className="cursor-pointer hover:scale-105 font-bold hover:text-pink-500 transition-all text-center py-4 md:py-0">Projects</button>
        <button onClick={()=>scrollToSection("testimonials")} className="cursor-pointer hover:scale-105 font-bold hover:text-pink-500 transition-all text-center py-4 md:py-0">Testimonials</button>

        <li className="text-center py-4 md:py-0">
          <button className="py-2 px-4 rounded-md bg-pink-700 hover:bg-pink-500 text-white">Hire me</button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
