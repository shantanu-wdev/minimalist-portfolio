'use client'
import React, { useState } from 'react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/70 backdrop-blur-md border-b border-gray-200 flex justify-center">
      <div className="w-11/12 px-4 py-3 flex justify-between items-center">

        {/* Logo */}
        <a href="#" className="text-lg font-semibold text-gray-800">
          shantanu.wdev
        </a>

        {/* Desktop Menu */}
        <nav className="hidden md:flex gap-6 text-sm text-gray-700">
          <a href="#">Work Experience</a>
          <a href="#">Skillset</a>
          <a href="#">Projects</a>
          <a href="#">Blogs</a>
          <a href="#">Contact</a>
        </nav>

        {/* Contact Button (Desktop only) */}
        <div className="hidden md:block">
          <button className="px-4 py-2 rounded-md bg-gray-900 text-white text-sm hover:bg-gray-800 transition">
            Contact
          </button>
        </div>

        {/* Hamburger Menu (Mobile only) */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-sm border px-2 py-1 rounded-md bg-white/40 backdrop-blur"
        >
          {isOpen ? '✕' : '☰'}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden border-t border-gray-200 bg-white/80 backdrop-blur-md shadow-sm">
          <nav className="flex flex-col items-center gap-4 py-4 text-gray-800 text-sm">
            <a href="#" onClick={() => setIsOpen(false)}>Work Experience</a>
            <a href="#" onClick={() => setIsOpen(false)}>Skillset</a>
            <a href="#" onClick={() => setIsOpen(false)}>Projects</a>
            <a href="#" onClick={() => setIsOpen(false)}>Blogs</a>
            <a href="#" onClick={() => setIsOpen(false)}>Contact</a>
            <button
              onClick={() => setIsOpen(false)}
              className="mt-2 px-4 py-2 rounded-md bg-gray-900 text-white text-sm"
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