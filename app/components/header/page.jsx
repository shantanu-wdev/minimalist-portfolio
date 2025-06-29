'use client'
import React, { useState } from 'react';
import { FaAlignJustify, FaCircleXmark} from "react-icons/fa6";
import ButtonPrimary from '@/app/utils/buttonPrimary';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed w-full top-0 z-50 bg-white/70 backdrop-blur-md border-b border-gray-200 flex flex-col md:flex-row justify-center items-center">
      <div className="w-11/12 max-w-[2000px] py-3 flex justify-between items-center">

        <a href="#" className="text-lg font-semibold text-gray-800">shantanu.wdev</a>

        <nav className="hidden md:flex gap-6 text-sm text-gray-700">
          <a href="#work-experience">Work Experience</a>
          <a href="#skillset">Skillset</a>
          <a href="#projects">Projects</a>
          <a href="blog">Blogs</a>
          <a href="#contact">Contact</a>
        </nav>

        <div className="hidden md:block">
          <ButtonPrimary url="#contact" title="Contact"></ButtonPrimary>
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-md border px-2 py-1 rounded-md bg-white/40 backdrop-blur"
        >
          {isOpen ? <FaCircleXmark /> : <FaAlignJustify />}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden border-gray-200 ">
          <nav className="flex flex-col bg-transparent items-center gap-4 py-4 text-gray-800 text-sm">
            <a href="#work-experience" onClick={() => setIsOpen(false)}>Work Experience</a>
            <a href="#skillset" onClick={() => setIsOpen(false)}>Skillset</a>
            <a href="#projects" onClick={() => setIsOpen(false)}>Projects</a>
            <a href="/blog" onClick={() => setIsOpen(false)}>Blogs</a>
            <a href="#contact" onClick={() => setIsOpen(false)}>Contact</a>
            <button
              onClick={() => setIsOpen(false)}
              className="px-4 py-2 rounded-md bg-gray-900 text-white text-sm"
            >
              Contact
            </button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;